import { useState } from 'react'
import menuIcon from '../assets/menu-line.svg'
import './css/Nav.css'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navContent">
        <h1 className="brand">FamousChatBot</h1>

        <ul className="navLinks">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button
          type="button"
          className="openBtn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <img src={menuIcon} alt="Menu icon" />
        </button>

        {isOpen && (
          <ul className="mobileView">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Nav