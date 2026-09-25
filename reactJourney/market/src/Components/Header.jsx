import {Link} from 'react-router'
import './Header.css'
const Header = () => {
  return (
    <>
        <nav>
            <span className="brand"><Link to="/">TechX Market</Link></span>
            <input type="text" className="search" placeholder='Search for items...' width={100}/>

            <ul>
                <li><Link to="/" className='links'>Home</Link></li>
                <li><Link to="/about" className='links'>About</Link></li>
                <li><Link to="#services.html" className='links'>Services</Link></li>
                <li><Link to="#product.html" className='links'>Products</Link></li>
                <li><Link to="#contact.html" className='links'>Contact</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Header