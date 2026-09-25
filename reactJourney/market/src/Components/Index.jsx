import {Link} from 'react-router'
import POS from "../assets/POS.JPG";
import whatsapp from "../assets/whatsapp-fill (1).svg";
import linkedin from "../assets/linkedin-box-fill (1).svg";
import Header from './Header'
import "./Index.css";
const Index = () => {
  return (
    <>
    <Header />
      <div className="myHero">
        <span>
          <h1>
            Smart Point of Sale Solutions for <span>Modern Businesses.</span>
          </h1>
          <p className="heroText">
            Simplify your sales, manage inventory efficiently, and grow your
            business with our powerful POS system.
          </p>
          <Link to="/about"><button className="heroBtn">Get Started →</button></Link>
        </span>

        <img src={POS} alt="POS image" />
      </div>

      <header>
        <h2>Why Choose Us?</h2>
        <div className="containers">
          <div className="why">
            <span className="number">01</span>
            <p className="head">Business Management</p>
            <p className="reason">
              Our POS system combines sales, inventory, customer management and
              payment processing into one easy-to-use platform.
            </p>
          </div>
          <div className="why">
            <span className="number">02</span>
            <p className="head">Real-Time Insights</p>
            <p className="reason">
              Monitor your business performance with detailed reports and
              dashboards that help you make informed decisions.
            </p>
          </div>
          <div className="why">
            <span className="number">03</span>
            <p className="head">Secure & Reliable</p>
            <p className="reason">
              Protect your business data with advanced security features and
              reliable cloud storage.
            </p>
          </div>
          <div className="why">
            <span className="number">04</span>
            <p className="head">Scalable Solutions</p>
            <p className="reason">
              Whether you're a small business or a large enterprise, our system
              grows with your needs.
            </p>
          </div>
        </div>
      </header>

      <main>
        <h3>Featured Benefits</h3>
        <div className="latInfo">
          <div className="accordion">
            <details>
              <summary>Our Featured Benefit</summary>
              <span className="iconPlus">+</span>
              <p>Fast and accurate checkout process</p>
              <p>Automated inventory management</p>
              <p>Comprehensive sales reporting</p>
              <p>Cloud-based data synchronization</p>
              <p>Customer loyalty and rewards programs</p>
              <p>Customer loyalty and rewards programs</p>
              <p>Fast and accurate checkout process</p>
            </details>
          </div>
        </div>
      </main>

      <div className="cta">
        <div className="ctaContainer">
            <h4>Ready to Work Smart?</h4>
            <button className="sendADm">Send a Dm →</button>
        </div>
      </div>

      <footer>
        <div className="myFooter">
          <span className="left">
            <h1 className="brand">TechX Market</h1>
            <p>
              Whether you run a retail store, restaurant, pharmacy, supermarket,
              or wholesale business, our POS solution helps you stay in control
              and maximize profits.
            </p>
            <span className="icons">
              <a href="wa.me/+233555555555">
                <img src={whatsapp} alt="Github icon" />
              </a>
              <a href="https://www.ssssssssss.com/amos">
                {" "}
                <img src={linkedin} alt="linkedin icon" />
              </a>
            </span>
          </span>

          <span className="links">
            <p className="navLinks">Navigation Links</p>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Products</a>
            <a href="#">Contact</a>
          </span>
        </div>
        <hr />
        <p className="waterMark">Built & Developed with 🤍 by Famous Tech</p>
      </footer>
    </>
  );
};

export default Index;
