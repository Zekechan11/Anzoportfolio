import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Film,
  MonitorPlay,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const [projectCategory, setProjectCategory] = useState<'programming' | 'video'>(
    'programming',
  )
  const projects = [
    {
      name: 'Lifewood Application System',
      image: '/images/lifewood.png',
      description:
        'A job application portal interface with clear navigation, application tracking, and dashboard views.',
      stack: ['VueJS', 'Tailwind CSS', 'Vite'],
      style: 'lifewood',
      mark: 'LW',
      label: 'APPLICATION PLATFORM',
    },
    {
      name: 'POS System',
      image: '/images/inventory.png',
      description:
        'A point-of-sale dashboard interface for product inventory, sales reports, and daily operations.',
      stack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      style: 'pos',
      mark: 'POS',
      label: 'RETAIL DASHBOARD',
    },
    {
      name: 'Clone Instagram',
      image: '/images/cloneinsta.png',
      description: 'A social interface recreation focused on profile layouts, image grids, and interaction states.',
      stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      style: 'social',
      mark: 'IG',
      label: 'SOCIAL EXPERIENCE',
    },
    {
      name: 'Water Refilling System',
      image: '/images/water.png',
      description:
        'An order-management interface for customer tracking, delivery schedules, and invoice views.',
      stack: ['VueJS', 'Tailwind CSS', 'Vite'],
      style: 'water',
      mark: 'WR',
      label: 'ORDER MANAGEMENT',
    },
  ]
  const tools = [
    { name: 'HTML5', icon: 'html5', color: 'E34F26', short: 'H5' },
    { name: 'CSS3', icon: 'css3', color: '1572B6', short: 'C3' },
    { name: 'JavaScript', icon: 'javascript', color: 'F7DF1E', short: 'JS' },
    { name: 'Tailwind CSS', icon: 'tailwindcss', color: '06B6D4', short: 'TW' },
    { name: 'Figma', icon: 'figma', color: 'F24E1E', short: 'FG' },
    { name: 'Bootstrap', icon: 'bootstrap', color: '7952B3', short: 'BS' },
    { name: 'TanStack', icon: 'tanstack', color: 'FF4154', short: 'TS' },
    { name: 'React', icon: 'react', color: '61DAFB', short: 'RE' },
    { name: 'Next.js', icon: 'nextdotjs', color: 'FFFFFF', short: 'NX' },
  ]

  return (
    <main className="portfolio-main">
        <section className="hero-section page-frame" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Frontend engineer / React + TypeScript</p>
            <h1 id="hero-title" className="hero-name">
             Hi I'm Ezekiel<br /><span>Angelo C.Pelayo</span>
            </h1>
            <p className="hero-intro">
              Thoughtful interfaces, clear interactions, and fast experiences
              for the modern web.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#experience">
                Explore experience <ArrowDownRight aria-hidden="true" />
              </a>
              <a className="button-text" href="#toolkit">View toolkit</a>
            </div>
            <p className="hero-note">Focused on the details people feel.</p>
          </div>

          <div className="hero-art" aria-label="Abstract frontend code composition" role="img">
            <div className="art-topline"><span>ANZO / DIGITAL PRACTICE</span><span>001 - 026</span></div>
            <div className="art-grid" />
            <div className="art-code" aria-hidden="true">
              <span className="code-muted">01</span><span className="code-key">const</span> interface<br />
              <span className="code-muted">02</span><span className="code-key">  return</span> clarity<br />
              <span className="code-muted">03</span><span className="code-key">  build</span>(withIntent)
            </div>
            <div className="art-mark"><Code2 aria-hidden="true" /></div>
            <div className="art-stamp"><span>DESIGN</span><strong>IN<br />DETAIL</strong></div>
            <div className="art-bottomline"><span>REACT / TYPESCRIPT</span><span>BUILT TO FEEL RIGHT</span></div>
          </div>
          <a href="#experience" className="scroll-cue" aria-label="Scroll to experience">
            <span>SCROLL TO EXPLORE</span><ArrowDownRight aria-hidden="true" />
          </a>
        </section>

        <section className="skill-ribbon" aria-label="Core technologies">
          <div className="page-frame skill-ribbon-inner">
            <span>THE TOOLKIT</span>
            <p>React <i /> TypeScript <i /> JavaScript <i /> Real-time UI <i /> Performance</p>
          </div>
        </section>

        <section className="projects-section page-frame" id="projects">
          <div className="projects-heading">
            <div>
              <p className="eyebrow">01 / SELECTED BUILDS</p>
              <h2>Ideas made<br /><em>interactive.</em></h2>
              <p className="section-intro">
                A selection of applications and experiments from my frontend work.
              </p>
            </div>
            <div className="project-tabs" role="tablist" aria-label="Project category">
              <button
                id="programming-tab"
                className={projectCategory === 'programming' ? 'project-tab is-active' : 'project-tab'}
                type="button"
                role="tab"
                aria-selected={projectCategory === 'programming'}
                aria-controls="programming-projects"
                onClick={() => setProjectCategory('programming')}
              >
                <Code2 aria-hidden="true" /> Programming
              </button>
              <button
                id="video-tab"
                className={projectCategory === 'video' ? 'project-tab is-active' : 'project-tab'}
                type="button"
                role="tab"
                aria-selected={projectCategory === 'video'}
                aria-controls="video-projects"
                onClick={() => setProjectCategory('video')}
              >
                <Film aria-hidden="true" /> Video
              </button>
            </div>
          </div>

          {projectCategory === 'programming' ? (
            <div
              className="project-grid"
              id="programming-projects"
              role="tabpanel"
              aria-labelledby="programming-tab"
            >
              {projects.map((project, index) => (
                <article className="project-card" key={project.name}>
                  <div
                    className={`project-art project-art-${project.style}${project.image ? ' project-art-with-image' : ''}`}
                    aria-hidden={project.image ? undefined : true}
                  >
                    {project.image ? (
                      <img
                        className="project-art-image"
                        src={project.image}
                        alt={`${project.name} project screenshot`}
                        loading="lazy"
                      />
                    ) : (
                      <>
                        <div className="project-art-topline">
                          <span className="project-art-dots"><i /><i /><i /></span>
                          <span>{project.label}</span>
                          <span>0{index + 1}</span>
                        </div>
                        <div className="project-art-scene">
                          {project.style === 'social' ? (
                            <div className="social-device">
                              <div className="device-camera" />
                              <div className="device-brand">{project.mark}</div>
                              <div className="device-image-grid"><i /><i /><i /><i /><i /><i /></div>
                              <div className="device-controls"><i /><i /><i /></div>
                            </div>
                          ) : (
                            <div className="dashboard-window">
                              <div className="dashboard-rail">
                                <b>{project.mark}</b><i /><i /><i /><i /><i />
                              </div>
                              <div className="dashboard-content">
                                <div className="dashboard-heading"><b /><i /><i /></div>
                                <div className="dashboard-metrics"><i /><i /><i /></div>
                                <div className="dashboard-chart"><i /><i /><i /></div>
                                <div className="dashboard-lower"><i /><i /></div>
                              </div>
                            </div>
                          )}
                        </div>
                        <span className="project-art-caption">DIGITAL PRODUCT / {project.mark}</span>
                      </>
                    )}
                  </div>
                  <div className="project-card-copy">
                    <div className="project-card-title">
                      <span>0{index + 1}</span>
                      <h3>{project.name}</h3>
                    </div>
                    <p>{project.description}</p>
                    <ul className="project-stack" aria-label={`${project.name} technologies`}>
                      {project.stack.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div
              className="video-projects-empty"
              id="video-projects"
              role="tabpanel"
              aria-labelledby="video-tab"
            >
              <span><MonitorPlay aria-hidden="true" /></span>
              <p className="eyebrow">VIDEO / MOTION</p>
              <h3>More frames, coming soon.</h3>
            </div>
          )}
        </section>

        <section className="content-section page-frame" id="experience">
          <div className="section-heading">
            <p className="eyebrow">02 / CAREER</p>
            <div>
              <h2>Building my<br /><em>foundation.</em></h2>
              <p className="section-intro">
                A recent graduate with nine months of experience at Pacific Equities, focused on frontend development.
              </p>
            </div>
            <span className="section-index">02</span>
          </div>

          <div className="experience-list">
            <article className="experience-row">
              <div className="experience-number">01</div>
              <div className="experience-main">
                <div className="experience-title-line">
                  <h3>Pacific Equities</h3>
                  <span>9 MONTHS</span>
                </div>
                <p className="experience-company">Professional experience</p>
                <p className="experience-summary">
                  I graduated last year and spent nine months gaining professional experience at Pacific Equities. My portfolio focus is building clear, responsive user interfaces.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="toolkit-section" id="toolkit">
          <div className="page-frame toolkit-layout">
            <div>
              <p className="eyebrow">03 / TOOLKIT</p>
              <h2>Good tools.<br /><em>Better outcomes.</em></h2>
              <p className="section-intro">Technologies and practices used across the work above.</p>
            </div>
            <ul className="toolkit-list">
              {tools.map((tool, index) => (
                <li className="toolkit-item" key={tool.name}>
                  <span className="toolkit-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="tool-logo-wrap" aria-hidden="true">
                    <img
                      src={`https://cdn.simpleicons.org/${tool.icon}/${tool.color}`}
                      alt=""
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget
                          .closest('.tool-logo-wrap')
                          ?.classList.add('logo-missing')
                      }}
                    />
                    <span className="tool-logo-fallback">{tool.short}</span>
                  </span>
                  <span className="toolkit-name">{tool.name}</span>
                  <ArrowUpRight aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="education-section page-frame" id="education">
          <div className="education-heading">
            <p className="eyebrow">04 / FRONTEND FOCUS</p>
            <h2>Designed for<br /><em>the browser.</em></h2>
          </div>
          <div className="education-list frontend-focus-list">
            <article className="education-row">
              <span>01 / UI</span>
              <div><h3>Interface development</h3><p>Building clear, responsive screens with HTML, CSS, and JavaScript.</p></div>
              <ArrowUpRight aria-hidden="true" />
            </article>
            <article className="education-row">
              <span>02 / LAYOUT</span>
              <div><h3>Responsive experiences</h3><p>Adapting layouts and interactions for desktop and mobile browsers.</p></div>
              <ArrowUpRight aria-hidden="true" />
            </article>
            <article className="education-row">
              <span>03 / TOOLING</span>
              <div><h3>Modern frontend tools</h3><p>Working with React, Vue, Tailwind CSS, Bootstrap, and Figma.</p></div>
              <ArrowUpRight aria-hidden="true" />
            </article>
          </div>
        </section>

        <section className="closing-section page-frame">
          <p className="eyebrow">NEXT / WHAT'S POSSIBLE</p>
          <h2>Let's make<br /><span>something matter.</span></h2>
          <p>Interested in working together? Explore my experience and toolkit above.</p>
          <a className="button-primary" href="#experience">
            Explore my experience <ArrowUpRight aria-hidden="true" />
          </a>
        </section>
      </main>
  )
}
