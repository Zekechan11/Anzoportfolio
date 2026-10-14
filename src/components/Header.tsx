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
          <small>FRONTEND DEVELOPER / VIDEO CREATOR</small>
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
            <a
              className="header-social-link"
              href="https://github.com/Zekechan11"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              GitHub
            </a>
            <a
              className="header-social-link"
              href="https://www.linkedin.com/in/pelayo-ezekiel-angelo-c-6617a0345/?isSelfProfile=true"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              LinkedIn
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}
