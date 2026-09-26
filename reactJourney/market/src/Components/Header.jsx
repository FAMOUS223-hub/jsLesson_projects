import { useEffect, useState } from 'react'
import {Link} from 'react-router'
import './Header.css'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Features', to: '/#features' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'Contact', to: '/#contact' },
]

const Header = () => {
  const [open, setOpen] = useState(false)

  /* close the menu on escape */
  useEffect(() => {
    if (!open) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="siteHeader">
      <nav className="siteNav" aria-label="Main">
        <Link to="/" className="siteBrand" onClick={close}>TechX Market</Link>

        <input
          type="search"
          className="siteSearch"
          placeholder="Search"
          aria-label="Search"
        />

        <ul className="siteNavList">
          {links.map(({ label, to }) => (
            <li key={label}>
              <Link to={to} className="siteNavLink">{label}</Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="siteToggle"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={`siteToggleIcon${open ? ' isOpen' : ''}`} aria-hidden="true" />
        </button>
      </nav>

      {open && (
        <div className="siteMenu" id="site-menu">
          <ul className="siteMenuList">
            {links.map(({ label, to }) => (
              <li key={label}>
                <Link to={to} className="siteMenuLink" onClick={close}>{label}</Link>
              </li>
            ))}
          </ul>

          <input
            type="search"
            className="siteSearch siteSearchMenu"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      )}
    </header>
  )
}

export default Header
