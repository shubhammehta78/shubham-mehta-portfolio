const projects = [
  {
    name: "ShopSphere",
    type: "E-commerce mobile app",
    description:
      "A polished shopping experience focused on fast discovery, resilient state, offline-friendly caching and a clean checkout journey.",
    tags: ["React Native", "TypeScript", "REST", "State Management"],
    accent: "commerce",\n    href: "https://github.com/shubhammehta78/shopsphere-rn",\n    status: "Building",
  },
  {
    name: "StockPilot",
    type: "Offline-first field operations",
    description:
      "A mobile inventory workflow demonstrating local persistence, sync queues, optimistic updates, barcode scanning and conflict-aware synchronization.",
    tags: ["React Native", "Expo", "SQLite", "Offline-first"],
    accent: "operations",\n    status: "Coming soon",
  },
  {
    name: "FinSight AI",
    type: "AI-powered finance app",
    description:
      "A personal finance companion with expense intelligence, dashboards, receipt capture and natural-language insights.",
    tags: ["React Native", "TypeScript", "AI", "Charts"],
    accent: "ai",\n    status: "Coming soon",
  },
  {
    name: "FitTrack",
    type: "Fitness & progress tracker",
    description:
      "A mobile fitness experience for plans, workout history, progress visualisation, reminders and a focused daily workflow.",
    tags: ["React Native", "Expo", "Animations", "Notifications"],
    accent: "fitness",\n    status: "Coming soon",
  },
];

const expertise = [
  "React Native",
  "TypeScript",
  "Expo",
  "Mobile Architecture",
  "Performance Optimization",
  "Offline-first Apps",
  "Native Integrations",
  "REST & GraphQL",
  "CI/CD",
  "iOS & Android",
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Shubham Mehta home">
          SM<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#expertise">Expertise</a>
          <a href="#contact">Contact</a>
        </div>
        <a
          className="nav-cta"
          href="mailto:shubhammehta725@gmail.com?subject=React%20Native%20Project"
        >
          Hire me
        </a>
      </nav>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Senior React Native Engineer · 7.5+ years</p>
          <h1>
            I build mobile products
            <span> people enjoy using.</span>
          </h1>
          <p className="hero-text">
            I&apos;m Shubham Mehta, a mobile engineer focused on high-quality
            iOS and Android applications, thoughtful architecture and
            production-ready user experiences.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              Explore projects <span>↓</span>
            </a>
            <a className="button secondary" href="https://github.com/shubhammehta78">
              GitHub ↗
            </a>
          </div>
          <div className="hero-proof">
            <div>
              <strong>7.5+</strong>
              <span>years experience</span>
            </div>
            <div>
              <strong>iOS + Android</strong>
              <span>production apps</span>
            </div>
            <div>
              <strong>React Native</strong>
              <span>core specialty</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="glow glow-one" />
          <div className="glow glow-two" />
          <div className="phone">
            <div className="phone-top">
              <span>9:41</span>
              <span>•••</span>
            </div>
            <div className="phone-content">
              <p className="mini-label">MOBILE ENGINEERING</p>
              <h2>Build.<br />Ship.<br /><em>Improve.</em></h2>
              <div className="mini-card"><span>Architecture</span><b>01</b></div>
              <div className="mini-card"><span>Performance</span><b>02</b></div>
              <div className="mini-card"><span>User experience</span><b>03</b></div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Personal projects, built to demonstrate real engineering.</h2>
          </div>
          <p>
            A collection of independent projects designed to show architecture,
            product thinking and mobile engineering depth without exposing
            confidential employer work.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${project.accent}`} key={project.name}>
              <div className="project-number">0{index + 1}</div>\n              <div className="project-status">{project.status}</div>
              <div className="project-art">
                <div className="art-window"><span /><span /><span /></div>
                <div className="art-line" />
                <div className="art-block" />
              </div>
              <div className="project-content">
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <a className="project-link" href="#contact" aria-label={`Ask about ${project.name}`}>
                View case study <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="expertise" className="section expertise-section">
        <div className="shell expertise-layout">
          <div>
            <p className="eyebrow">Engineering toolkit</p>
            <h2>Built for production, not just prototypes.</h2>
            <p className="muted">
              My focus is the full mobile lifecycle — from architecture and
              implementation through performance, testing, CI/CD and store
              releases.
            </p>
          </div>
          <div className="expertise-list">
            {expertise.map((item, index) => (
              <div key={item} className="expertise-item">
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact shell">
        <p className="eyebrow">Let&apos;s build something</p>
        <h2>Have a React Native project in mind?</h2>
        <p>
          I&apos;m available for freelance and contract opportunities,
          especially projects where strong mobile engineering and product
          quality matter.
        </p>
        <div className="contact-actions">
          <a className="button primary" href="mailto:shubhammehta725@gmail.com?subject=React%20Native%20Freelance%20Project">
            Start a conversation ↗
          </a>
          <a className="button secondary" href="https://www.linkedin.com/in/shubham-mehta/">
            LinkedIn ↗
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <span>© {new Date().getFullYear()} Shubham Mehta</span>
        <span>React Native · TypeScript · Mobile Engineering</span>
      </footer>
    </main>
  );
}