import { ArrowUpRight, Github, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="page-frame footer-main">
        <div className="footer-pitch">
          <p className="footer-kicker">FRONTEND ENGINEERING / DIGITAL CRAFT</p>
          <h2>Make the web<br /><span>feel effortless.</span></h2>
          <p className="footer-description">
            Thoughtful interfaces, clear interactions, and fast experiences.
          </p>
          <a className="footer-cta" href="#experience">
            Explore my experience <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="footer-aside" aria-hidden="true">
          <span>EP</span>
          <p>DESIGN<br />WITH<br />PURPOSE</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="page-frame footer-bottom-inner">
          <div className="footer-signature">
            <span className="footer-monogram">EP</span>
            <div>
              <strong>Ezekiel Angelo C. Pelayo</strong>
              <span>Frontend Engineer</span>
            </div>
          </div>
          <div className="footer-social-group">
            <span className="footer-social-label">Follow me on</span>
            <nav className="social-links" aria-label="Social media">
              <a href="https://github.com/Zekechan11" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
                <Github aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/pelayo-ezekiel-angelo-c-6617a0345/?isSelfProfile=true" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <Linkedin aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/anzo_neat/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
                <Instagram aria-hidden="true" />
              </a>
              {/* <a href="https://youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube">
                <Youtube aria-hidden="true" />
              </a> */}
            </nav>
          </div>
          <p className="footer-year">&copy; {year}</p>
        </div>
      </div>
    </footer>
  )
}
