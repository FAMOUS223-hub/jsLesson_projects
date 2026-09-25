import Header from './Header'
import HeroPos from '../assets/HeroPos.png'
import './AboutPage.css'
const AboutPage = () => {
  return (
    <>
    <Header />
    <div className="hero">
        <span>
            <h1>Powerful Features. One Complete POS.</h1>
            <p>Everything your business needs to sell, manage, monitor, and grow, organized in one intelligent platform. From the first transaction of the day to the final business report, every important operation is connected</p>
        </span>
        <img src={HeroPos} alt="An image of a modern POS system"/>
    </div>

    <header>
        <span className='about'>ABOUT US</span>
        <div className="intro">
            <div className="card1">
                <h2>Make every transaction simple.</h2>
                <span>
                <p>Your checkout should help your team move quickly—not slow them down.Our POS interface is designed to make everyday transactions straightforward, efficient, and easy to understand.</p>

                <p>Inventory problems can affect your cash flow, customer experience, and profitability. Our inventory tools give you a clearer picture of what's happening with your products.</p>
                </span>
            </div>

            <div className="card2">
                <span>

                </span>
            </div>
        </div>
    </header>
    </>
  )
}

export default AboutPage