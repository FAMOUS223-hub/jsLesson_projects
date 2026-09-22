const searchInput = document.querySelector('.citySearch');
const cityName = document.querySelector('.cityName');
const temperature = document.querySelector('.degree');
const rainChance = document.querySelector('.percent');
const mainWeatherIcon = document.querySelector('.city > img');
const forecastItems = document.querySelectorAll('.data');

// Turn the API's weather number into words for the image alt text.
function getWeatherDescription(weatherCode) {
	if (weatherCode === 0) return 'Clear sky';
	if (weatherCode <= 3) return 'Partly cloudy';
	if (weatherCode <= 48) return 'Foggy';
	if (weatherCode <= 67) return 'Rainy';
	if (weatherCode <= 77) return 'Snowy';
	if (weatherCode <= 82) return 'Rainy';
	return 'Stormy';
}

// These images come from WeatherAPI's public weather icon CDN.
function getWeatherIcon(weatherCode) {
	const iconBase = 'https://cdn.weatherapi.com/weather/64x64/day/';

	if (weatherCode === 0) return `${iconBase}113.png`;
	if (weatherCode <= 2) return `${iconBase}116.png`;
	if (weatherCode === 3) return `${iconBase}122.png`;
	if (weatherCode <= 48) return `${iconBase}143.png`;
	if (weatherCode <= 55) return `${iconBase}176.png`;
	if (weatherCode <= 67) return `${iconBase}302.png`;
	if (weatherCode <= 77) return `${iconBase}338.png`;
	if (weatherCode <= 82) return `${iconBase}308.png`;
	if (weatherCode <= 86) return `${iconBase}326.png`;
	return `${iconBase}386.png`;
}

async function getWeather(city) {
	cityName.textContent = 'Loading...';

	try {
		// First find the city's latitude and longitude.
		const locationResponse = await fetch(
			`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
		);
		const locationData = await locationResponse.json();

		if (!locationData.results) {
			throw new Error('City not found');
		}

		const location = locationData.results[0];

		// Then use those coordinates to request the weather.
		const weatherResponse = await fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,precipitation_probability,weather_code&hourly=temperature_2m,weather_code&forecast_days=1&timezone=auto`
		);
		const weatherData = await weatherResponse.json();

		cityName.textContent = `${location.name}, ${location.country_code}`;
		temperature.textContent = `${Math.round(weatherData.current.temperature_2m)}°C`;
		rainChance.textContent = `${weatherData.current.precipitation_probability}%`;
		mainWeatherIcon.src = getWeatherIcon(weatherData.current.weather_code);
		mainWeatherIcon.alt = getWeatherDescription(weatherData.current.weather_code);

		updateForecast(weatherData.hourly, weatherData.current.time);
	} catch (error) {
		cityName.textContent = 'Could not find that city';
		temperature.textContent = '--';
		rainChance.textContent = '0%';
		console.error(error);
	}
}

function updateForecast(hourlyWeather, currentTime) {
	// The current time may include minutes, while hourly times end in :00.
	const currentHourText = currentTime.slice(0, 13);
	const foundHour = hourlyWeather.time.findIndex((time) =>
		time.startsWith(currentHourText)
	);
	const currentHour = foundHour === -1 ? 0 : foundHour;

	forecastItems.forEach((item, index) => {
		const hourIndex = currentHour + index;
		const time = new Date(hourlyWeather.time[hourIndex]);
		const weatherCode = hourlyWeather.weather_code[hourIndex];

		item.querySelector('.time').textContent = time.toLocaleTimeString([], {
			hour: 'numeric',
			minute: '2-digit'
		});
		item.querySelector('.forcastDegree').textContent =
			`${Math.round(hourlyWeather.temperature_2m[hourIndex])}°C`;
		item.querySelector('img').src = getWeatherIcon(weatherCode);
		item.querySelector('img').alt = getWeatherDescription(weatherCode);
	});
}

searchInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter' && searchInput.value.trim() !== '') {
		getWeather(searchInput.value.trim());
	}
});

getWeather('London');
