import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav
        className={`page-frame header-inner${menuOpen ? ' menu-open' : ''}`}
        aria-label="Main navigation"
      >
        <a className="wordmark" href="/" aria-label="Anzo portfolio home">
          <span>ANZO</span>
          <small>FRONTEND ENGINEER</small>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="portfolio-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <div className="header-menu" id="portfolio-menu">
          <div className="header-links">
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#toolkit" onClick={() => setMenuOpen(false)}>Toolkit</a>
            <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          </div>

          <div className="header-actions" onClick={() => setMenuOpen(false)}>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}
