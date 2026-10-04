const projects = [
  { name: "ShopSphere", description: "E-commerce mobile app with search, cart, wishlist and checkout.", tags: ["React Native", "TypeScript", "REST"], status: "Building", href: "https://github.com/shubhammehta78/shopsphere-rn" },
  { name: "StockPilot", description: "Offline-first inventory and field operations app.", tags: ["React Native", "Expo", "SQLite"], status: "Coming soon" },
  { name: "FinSight AI", description: "AI-powered personal finance and expense tracking app.", tags: ["React Native", "TypeScript", "AI"], status: "Coming soon" },
  { name: "FitTrack", description: "Fitness and progress tracking experience.", tags: ["React Native", "Expo", "Animations"], status: "Coming soon" },
];

const expertise = [
  "React Native", "TypeScript", "Expo", "Mobile Architecture",
  "Performance Optimization", "Offline-first Apps", "Native Integrations",
  "REST & GraphQL", "CI/CD", "iOS & Android",
];

export default function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#">SM<span>.</span></a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#expertise">Expertise</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Senior React Native Engineer · 7.5+ years</p>
          <h1>I build mobile products people enjoy using.</h1>
          <p className="hero-text">I design and engineer high-quality iOS and Android applications with React Native, TypeScript and modern mobile architecture.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View projects</a>
            <a className="button secondary" href="#contact">Hire me</a>
          </div>
        </div>
        <div className="phone">
          <div className="phone-notch" />
          <div className="phone-screen">
            <div className="phone-top">SHOPS<span>PHERE</span></div>
            <div className="phone-card large"><small>FEATURED</small><strong>Everyday<br/>essentials.</strong></div>
            <div className="phone-row">
              <div className="phone-card small">01<br/><b>RUNNERS</b></div>
              <div className="phone-card small">02<br/><b>STUDIO</b></div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-head"><p className="eyebrow">Selected work</p><h2>Independent products.</h2></div>
        <div className="projects">
          {projects.map((project, index) => (
            <article className="project" key={project.name}>
              <div className="project-number">0{index + 1}</div>
              <div className="project-body">
                <div className="project-meta"><span>{project.status}</span><span>Mobile app</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                {project.href && <a className="project-link" href={project.href} target="_blank" rel="noreferrer">View repository ↗</a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="expertise" className="section expertise">
        <div className="section-head"><p className="eyebrow">Capabilities</p><h2>Built for real products.</h2></div>
        <div className="expertise-grid">{expertise.map(item => <div className="expertise-item" key={item}>{item}<span>↗</span></div>)}</div>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Let's work together</p>
        <h2>Have a mobile product<br/>in mind?</h2>
        <a className="button primary" href="mailto:shubhammehta725@gmail.com">Get in touch ↗</a>
        <div className="contact-links">
          <a href="https://github.com/shubhammehta78" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:shubhammehta725@gmail.com">Email</a>
        </div>
      </section>

      <footer><span>© {new Date().getFullYear()} Shubham Mehta</span><span>React Native · TypeScript · Mobile</span></footer>
    </main>
  );
}
