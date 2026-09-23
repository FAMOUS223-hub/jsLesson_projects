import '../nav.css'
import { useState } from 'react'
import menuIcon from '../assets/menu-line.svg'
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav">
      <nav>
        <span><strong>FamousReact</strong></span>

        <ul className="desktopLinks">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Hamburger Button */}
        <button className="menuButton" type="button" aria-label="Open menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <img src={menuIcon} alt="menu icon" className="hamburger" />
        </button>

        {/* This menu shows only if isOpen is true */}
        {isOpen && (
          <ul className="toShow">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
            <li>
              <button className="menuButton" type="button" aria-label="Close menu" onClick={() => setIsOpen(false)}>
                <img src={menuIcon} alt="menu icon" className="hamburger" />
              </button>
            </li>
          </ul>
        )}
      </nav>
    </div>
  )
}

export default Nav