# Weather App: Beginner Logic Guide

This guide explains how to build the JavaScript logic for this weather app.

The goal is to understand the steps, not just copy code.

## What This App Does

The user will:

1. Type a city into the search box.
2. Press `Enter`.
3. The app will find that city's location.
4. The app will request weather data for that location.
5. JavaScript will put the weather data into the HTML.

The complete flow looks like this:

```text
User types a city
        |
        v
Find the city coordinates
        |
        v
Request weather using latitude and longitude
        |
        v
Receive weather data
        |
        v
Update the HTML page
```

## The Three Files

### `index.html`

This is the structure of the page. It contains the search input, city name, temperature, and forecast boxes.

### `style.css`

This controls how the page looks. It does not request weather or make decisions.

### `script.js`

This is where the logic lives. It listens for user actions, requests data, and changes the HTML.

### Important: Check the JavaScript Filename

At the bottom of your current `index.html`, the page loads:

```html
<script src="myscript.js"></script>
```

That means the browser looks for a file named `myscript.js` in the same folder. If you are writing your code in `script.js`, change the HTML to:

```html
<script src="script.js"></script>
```

The filename in the HTML and the actual JavaScript filename must match exactly. Otherwise, your JavaScript will not run. You can check this in the browser Console: a missing file usually creates a `404` error.

## Important Idea: The DOM

The DOM is JavaScript's version of the HTML page.

For example, this HTML element has a class:

```html
<h1 class="cityName">London UK</h1>
```

JavaScript can find it like this:

```js
const cityName = document.querySelector('.cityName');
```

After finding it, JavaScript can change its text:

```js
cityName.textContent = 'Paris, FR';
```

`textContent` changes the text inside an HTML element.

## The JavaScript Ideas You Are Learning

Before building the weather logic, it helps to understand the small JavaScript ideas that work together.

### Variables: `const`

A variable is a named place to store a value.

```js
const city = 'London';
```

This means: store the text `London` under the name `city`.

`const` means we do not plan to replace the value with a different value later. We use `const` for most values in this app.

```js
const temperature = 18;
```

The variable name helps us remember what the value means. Good names make code easier to understand.

### Functions

A function is a reusable group of instructions.

```js
function sayHello(name) {
    console.log(`Hello ${name}`);
}

sayHello('Alex');
```

`name` is a parameter. It is the input the function receives. `'Alex'` is the argument we send into the function.

In this project, `getWeather(city)` is a function. It receives a city and performs the weather search.

### Objects and Properties

An object groups related information together:

```js
const location = {
    name: 'London',
    latitude: 51.5,
    longitude: -0.12
};
```

Read a property with a dot:

```js
console.log(location.name);
console.log(location.latitude);
```

The API sends weather data as a large object, so expressions such as `weatherData.current.temperature_2m` mean:

1. Find `weatherData`.
2. Find its `current` object.
3. Find the `temperature_2m` value inside that object.

### Arrays and Indexes

An array is a list. JavaScript starts counting list positions at zero:

```js
const cities = ['London', 'Paris', 'Tokyo'];

console.log(cities[0]); // London
console.log(cities[1]); // Paris
```

The weather API uses matching arrays. The value at position `2` in the time array belongs with the value at position `2` in the temperature array.

### Methods

A method is a function that belongs to a value or object.

```js
const city = '  London  ';
const cleanCity = city.trim();
```

`trim()` is a string method. It removes spaces from the beginning and end of text.

The app also uses methods such as:

- `querySelector()` to find an HTML element.
- `textContent` to change displayed text.
- `json()` to read JSON from a response.
- `findIndex()` to find an item in an array.
- `slice()` to take part of a string.

## The Important Part: Synchronous and Asynchronous Code

JavaScript normally runs one line at a time from top to bottom. This is called synchronous code.

```js
console.log('First');
console.log('Second');
```

The output is:

```text
First
Second
```

Some jobs take time. A request has to travel across the internet and come back. JavaScript cannot instantly know the answer.

That type of work is asynchronous. While JavaScript waits for the weather service, the browser can continue responding to the user instead of freezing.

Think of ordering food:

1. You place the order.
2. The restaurant gives you a number.
3. You wait while the food is prepared.
4. The restaurant gives you the food.

`fetch` places the order. A `Promise` is the number that represents the future result. `await` waits for the result inside an `async` function.

## What Is a Promise?

A Promise is an object representing work that has not finished yet.

It can be:

- pending: still working
- fulfilled: finished successfully
- rejected: failed

`fetch()` returns a Promise because the response has not arrived immediately:

```js
const responsePromise = fetch('https://example.com');
```

At this point, `responsePromise` is not the weather data. It is a promise that the response will arrive later.

You can handle a Promise with `.then()`:

```js
fetch('https://example.com')
    .then((response) => {
        console.log('The response arrived');
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
```

This works, but several `.then()` calls can feel difficult when you are new to JavaScript.

## What Does `async` Mean?

`async` goes before a function:

```js
async function getWeather(city) {
    // instructions go here
}
```

It tells JavaScript that this function will work with asynchronous tasks. An `async` function always returns a Promise, even if you do not write one yourself.

You do not put `async` on every function. In this project, `getWeather` needs it because it waits for internet requests. `updateForecast` does not need it because it works with data it already has.

## What Does `await` Mean?

`await` pauses this one `async` function until a Promise finishes:

```js
const locationResponse = await fetch(locationUrl);
```

Read this as:

> Start the request, wait for its response, then store the response in `locationResponse`.

`await` does not freeze the entire browser. It only pauses the current `getWeather` function. The browser can still respond to clicks and other work.

You can only use `await` inside an `async` function:

```js
async function example() {
    const response = await fetch(url);
}
```

If you use `await` outside an `async` function, JavaScript will show an error.

## What Does `fetch` Do?

`fetch` sends an HTTP request to a URL and gives you a Promise for the response.

```js
const response = await fetch(url);
```

There are two important steps after this:

```js
const response = await fetch(url);
const data = await response.json();
```

The first line gets the response envelope from the server. The second line reads the response body and turns JSON text into a JavaScript object.

It is common for beginners to stop after `fetch`. At that point, you have not yet read the actual weather values. You need `response.json()` too.

## What Is JSON?

JSON is a text format commonly used to send data between programs. It looks similar to JavaScript objects:

```json
{
    "name": "London",
    "temperature": 18
}
```

`response.json()` converts that received JSON into a JavaScript object so you can use it:

```js
const data = await response.json();
console.log(data.name);
```

## What Is a Template String?

Backticks create a template string:

```js
const city = 'Paris';
const message = `Weather for ${city}`;
```

The result is:

```text
Weather for Paris
```

The `${city}` part inserts the variable's value into the text. The weather URLs use template strings to insert the city, latitude, and longitude.

## What Is an Event Listener?

An event is something that happens in the browser, such as a key press or click.

An event listener waits for that event:

```js
searchInput.addEventListener('keydown', (event) => {
    console.log(event.key);
});
```

The function inside the listener is called a callback. A callback is a function that you give to another function so it can run later.

In this app, the callback runs every time a key is pressed. The `if` statement filters that down to only the `Enter` key.

## What Is an Arrow Function?

This is a regular function:

```js
function add(a, b) {
    return a + b;
}
```

This is the shorter arrow-function version:

```js
const add = (a, b) => {
    return a + b;
};
```

The weather app uses arrow functions for short callbacks, such as the function passed to `addEventListener`, `findIndex`, and `forEach`.

## What Does `forEach` Do?

`forEach` runs a function once for every item in an array or collection:

```js
const numbers = [10, 20, 30];

numbers.forEach((number, index) => {
    console.log(index, number);
});
```

The output is:

```text
0 10
1 20
2 30
```

The weather app uses this to update each forecast card.

## What Does `try` and `catch` Do?

Some code can fail, especially code that depends on the internet. `try` lets us attempt the normal process, while `catch` handles a problem:

```js
try {
    const response = await fetch(url);
    const data = await response.json();
} catch (error) {
    console.error('Something went wrong:', error);
}
```

If the request fails, the code jumps to `catch` instead of stopping silently.

This line creates an error ourselves when no city is found:

```js
throw new Error('City not found');
```

`throw` sends the problem to the nearest `catch` block.

## Read the Weather Logic in Plain English

This is what `getWeather` means line by line:

```js
async function getWeather(city) {
```

Create an asynchronous function that receives a city name.

```js
const locationResponse = await fetch(locationUrl);
```

Ask the geocoding API for the city's location and wait for the response.

```js
const locationData = await locationResponse.json();
```

Read the response as JSON and turn it into a JavaScript object.

```js
const location = locationData.results[0];
```

Take the first city result from the results array.

```js
const weatherResponse = await fetch(weatherUrl);
const weatherData = await weatherResponse.json();
```

Request weather using the coordinates, wait, and read the weather JSON.

```js
temperature.textContent = `${Math.round(weatherData.current.temperature_2m)}°C`;
```

Take the temperature from the response, round it, add `°C`, and display it in the HTML.

```js
updateForecast(weatherData.hourly, weatherData.current.time);
```

Send the hourly data to another function so that function can update the forecast cards.

## A Useful Mental Model

When building a feature, ask four questions:

1. **What is the input?** The city typed by the user.
2. **What work must happen?** Request location and weather data.
3. **What data comes back?** Objects containing current and hourly weather.
4. **What should change on screen?** City name, temperature, rain chance, and forecast cards.

This pattern applies to many apps:

```text
Get input
    -> do work
    -> wait for the result
    -> read the result
    -> update the page
```

## Step 1: Find the HTML Elements

Start `script.js` with references to the elements that JavaScript needs to update:

```js
const searchInput = document.querySelector('.citySearch');
const cityName = document.querySelector('.cityName');
const temperature = document.querySelector('.degree');
const rainChance = document.querySelector('.percent');
const forecastItems = document.querySelectorAll('.data');
```

Here is what each variable means:

- `searchInput` is the search box.
- `cityName` is where the city name will appear.
- `temperature` is where the current temperature will appear.
- `rainChance` is where the chance of rain will appear.
- `forecastItems` is a collection of all five forecast boxes.

The dot in `.citySearch` means "find an element with this class."

## Step 2: Understand the Weather API

An API is a service that lets one program request data from another program.

This project uses [Open-Meteo](https://open-meteo.com/). It does not require an API key for this project.

We need to make two requests because a city name is not enough to get weather:

1. Convert the city name into coordinates.
2. Use the coordinates to request weather.

For example, the first request changes:

```text
London
```

into something like:

```text
latitude: 51.50
longitude: -0.12
```

The second request uses those numbers to get the weather.

## Step 3: Find the City Coordinates

Create a function that receives a city name:

```js
async function getWeather(city) {
    const locationResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
    );

    const locationData = await locationResponse.json();
    console.log(locationData);
}
```

### What is `fetch`?

`fetch` sends a request to a URL.

### What is `async`?

The word `async` tells JavaScript that this function will do something that takes time, such as waiting for an internet response.

### What is `await`?

`await` tells JavaScript to wait for a response before continuing to the next line.

Without `await`, the next line could run before the data has arrived.

### What is `encodeURIComponent`?

It safely prepares the city name for a URL. This is useful for names that contain spaces, such as `New York`.

## Step 4: Read the Location Result

The API response contains a `results` array. We want the first result:

```js
const location = locationData.results[0];

console.log(location.name);
console.log(location.latitude);
console.log(location.longitude);
```

Before using the first result, check that a result exists:

```js
if (!locationData.results) {
    throw new Error('City not found');
}
```

`throw new Error` stops the normal code and moves to the error handler.

## Step 5: Request the Weather

Now use the latitude and longitude in a second request:

```js
const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,precipitation_probability,weather_code&hourly=temperature_2m,weather_code&forecast_days=1&timezone=auto`
);

const weatherData = await weatherResponse.json();
```

The API gives us two useful sections:

- `weatherData.current` contains the current weather.
- `weatherData.hourly` contains hourly forecast arrays.

You can inspect the response while learning:

```js
console.log(weatherData);
console.log(weatherData.current);
console.log(weatherData.hourly);
```

Use the browser developer tools to see these messages. Right-click the page, choose **Inspect**, and open the **Console** tab.

## Step 6: Put Current Weather Into the Page

The API gives us values, but the user cannot see JavaScript variables. We must put those values into HTML:

```js
cityName.textContent = `${location.name}, ${location.country_code}`;
temperature.textContent = `${Math.round(weatherData.current.temperature_2m)}°C`;
rainChance.textContent = `${weatherData.current.precipitation_probability}%`;
```

`Math.round` removes decimal places. For example, it changes `18.7` to `19`.

The backticks create a template string. A template string lets us insert variables using `${}`.

## Step 7: Update the Forecast Boxes

The hourly weather is stored in separate arrays:

```js
weatherData.hourly.time
weatherData.hourly.temperature_2m
weatherData.hourly.weather_code
```

The same index belongs to the same hour. For example:

```text
hourly.time[0]          -> first hour
hourly.temperature_2m[0] -> temperature for first hour
hourly.weather_code[0] -> weather condition for first hour
```

Find the current hour first:

```js
function updateForecast(hourlyWeather, currentTime) {
    const currentHourText = currentTime.slice(0, 13);
    const foundHour = hourlyWeather.time.findIndex((time) =>
        time.startsWith(currentHourText)
    );
    const currentHour = foundHour === -1 ? 0 : foundHour;
```

The API's current time might be `2026-09-19T14:35`, while the hourly time might be `2026-09-19T14:00`. Matching only the date and hour prevents an invalid first forecast slot.

Now loop through the five forecast boxes:

```js
    forecastItems.forEach((item, index) => {
        const hourIndex = currentHour + index;
        const time = new Date(hourlyWeather.time[hourIndex]);

        item.querySelector('.time').textContent = time.toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit'
        });

        item.querySelector('.forcastDegree').textContent =
            `${Math.round(hourlyWeather.temperature_2m[hourIndex])}°C`;
    });
}
```

`forEach` repeats the code once for each forecast box.

- `item` is the current forecast box.
- `index` is its position: `0`, `1`, `2`, `3`, or `4`.
- `hourIndex` chooses the matching hour from the API data.
- `querySelector` finds the time or temperature inside that box.

## Step 8: Handle Errors

Internet requests can fail. The city may not exist, or the user may be offline.

Use `try` and `catch`:

```js
try {
    // Code that might fail goes here.
} catch (error) {
    cityName.textContent = 'Could not find that city';
    console.error(error);
}
```

The `try` block contains the normal process. If something fails, the `catch` block runs instead of breaking the whole page.

## Step 9: Listen for Enter

The app needs to react when the user presses Enter:

```js
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && searchInput.value.trim() !== '') {
        getWeather(searchInput.value.trim());
    }
});
```

This does three things:

1. Listens for a key press.
2. Checks that the key was `Enter`.
3. Sends the typed city to `getWeather`.

`trim()` removes unnecessary spaces. It also helps us check that the input is not empty.

## Step 10: Load a Default City

Run the function once when the page opens:

```js
getWeather('London');
```

This gives the user weather immediately instead of showing empty forecast boxes.

## Complete `script.js`

After understanding the steps above, your complete file can look like this:

```js
const searchInput = document.querySelector('.citySearch');
const cityName = document.querySelector('.cityName');
const temperature = document.querySelector('.degree');
const rainChance = document.querySelector('.percent');
const forecastItems = document.querySelectorAll('.data');

async function getWeather(city) {
    cityName.textContent = 'Loading...';

    try {
        const locationResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
        );
        const locationData = await locationResponse.json();

        if (!locationData.results) {
            throw new Error('City not found');
        }

        const location = locationData.results[0];

        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,precipitation_probability,weather_code&hourly=temperature_2m,weather_code&forecast_days=1&timezone=auto`
        );
        const weatherData = await weatherResponse.json();

        cityName.textContent = `${location.name}, ${location.country_code}`;
        temperature.textContent = `${Math.round(weatherData.current.temperature_2m)}°C`;
        rainChance.textContent = `${weatherData.current.precipitation_probability}%`;

        updateForecast(weatherData.hourly, weatherData.current.time);
    } catch (error) {
        cityName.textContent = 'Could not find that city';
        temperature.textContent = '--';
        rainChance.textContent = '0%';
        console.error(error);
    }
}

function updateForecast(hourlyWeather, currentTime) {
    const currentHourText = currentTime.slice(0, 13);
    const foundHour = hourlyWeather.time.findIndex((time) =>
        time.startsWith(currentHourText)
    );
    const currentHour = foundHour === -1 ? 0 : foundHour;

    forecastItems.forEach((item, index) => {
        const hourIndex = currentHour + index;
        const time = new Date(hourlyWeather.time[hourIndex]);

        item.querySelector('.time').textContent = time.toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit'
        });
        item.querySelector('.forcastDegree').textContent =
            `${Math.round(hourlyWeather.temperature_2m[hourIndex])}°C`;
    });
}

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && searchInput.value.trim() !== '') {
        getWeather(searchInput.value.trim());
    }
});

getWeather('London');
```

## How to Test It

1. Open `weatherApp/index.html` in your browser.
2. Wait for the default London weather to load.
3. Type `Paris` into the search box.
4. Press `Enter`.
5. Try another city, such as `Tokyo` or `New York`.
6. Try a made-up city and check that the error message appears.
7. Open the browser Console if something does not work.

## A Good Beginner Debugging Process

When your code does not work, do not change many things at once.

1. Read the error message in the Console.
2. Find the line number mentioned in the error.
3. Add a `console.log` to inspect the value you expect.
4. Check whether the HTML class name matches your selector.
5. Test one small change.
6. Refresh the page and test again.

For example:

```js
console.log('The user searched for:', searchInput.value);
console.log('The weather response:', weatherData);
```

## Good Next Features to Try

Once this version makes sense, add one feature at a time:

- Show a different image for sunny, rainy, and snowy weather.
- Add a search button.
- Add the wind speed.
- Add today's high and low temperatures.
- Add a loading message for the forecast cards.
- Let the user press a button to use their current location.

The important pattern will stay the same:

```text
Get input -> request data -> read the response -> update the page
```
