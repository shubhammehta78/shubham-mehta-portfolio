import { useEffect } from "react";
import profileImage from "./Media.jpg";

const projects = [
  { name: "ShopSphere", description: "E-commerce mobile app with search, cart, wishlist and checkout.", tags: ["React Native", "TypeScript", "REST"], status: "Building", href: "https://github.com/shubhammehta78/shopsphere-rn" },
  { name: "StockPilot", description: "Offline-first inventory and field operations app.", tags: ["React Native", "Expo", "SQLite"], status: "Coming soon" },
  { name: "FinSight AI", description: "AI-powered personal finance and expense tracking app.", tags: ["React Native", "TypeScript", "AI"], status: "Coming soon" },
  { name: "FitTrack", description: "Fitness and progress tracking experience.", tags: ["React Native", "Expo", "Animations"], status: "Coming soon" },
];
const expertise = ["React Native", "TypeScript", "Expo", "Mobile Architecture", "Performance Optimization", "Offline-first Apps", "Native Integrations", "REST & GraphQL", "CI/CD", "iOS & Android"];
const linkedin = "https://www.linkedin.com/in/shubham-mehta-654686148";
const medium = "https://medium.com/@Thatreactnativeguy";

function ResumePage() {
  return <main className="resume-page">
    <nav className="nav"><a className="brand" href="/">SM<span>.</span></a><a className="button secondary" href="/">Back to portfolio</a></nav>

    <section className="resume-hero">
      <p className="eyebrow">Curriculum Vitae</p>
      <h1>Shubham Mehta</h1>
      <p>Senior Mobile Engineer · React Native · Technical Lead</p>
      <div className="resume-links">
        <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="https://github.com/shubhammehta78" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href={medium} target="_blank" rel="noreferrer">Medium ↗</a>
        <a href="mailto:shubhammehta725@gmail.com">shubhammehta725@gmail.com</a>
      </div>
    </section>

    <section className="resume-grid">
      <div>
        <p className="eyebrow">Professional summary</p>
        <p>Senior Mobile Engineer and Technical Lead with 7.5+ years of experience designing, developing and shipping production-grade iOS and Android applications with React Native and TypeScript.</p>
        <p>Strong focus on mobile architecture, performance, offline-first experiences, native integrations, API-driven applications, CI/CD, automated testing and reliable release processes. Comfortable owning features end-to-end while mentoring engineers and collaborating across product, design and engineering.</p>
      </div>
      <div>
        <p className="eyebrow">Core technologies</p>
        <div className="tags resume-tags">{expertise.map(item=><span key={item}>{item}</span>)}</div>
        <div className="tags resume-tags"><span>JavaScript</span><span>GraphQL</span><span>Apollo</span><span>Firebase</span><span>Crashlytics</span><span>SQLite</span><span>AsyncStorage</span><span>Maestro</span><span>EAS</span><span>Git</span></div>
      </div>
    </section>

    <section className="resume-section">
      <p className="eyebrow">Professional experience</p>

      <div className="resume-role">
        <div><h2>Software Project Lead</h2><span>Sep 2025 — Present</span></div>
        <div>
          <ul>
            <li>Lead mobile engineering initiatives using React Native, TypeScript and modern mobile architecture patterns across iOS and Android.</li>
            <li>Own technical design, implementation, code quality, release readiness and production support for mobile features.</li>
            <li>Work across application architecture, performance optimization, native integrations, CI/CD and automated testing.</li>
            <li>Mentor developers, review technical solutions and help establish engineering practices for maintainable mobile codebases.</li>
            <li>Collaborate with product and engineering stakeholders to translate requirements into scalable mobile solutions.</li>
          </ul>
        </div>
      </div>

      <div className="resume-role">
        <div><h2>Senior Software Developer</h2><span>Dec 2023 — Aug 2025</span></div>
        <div>
          <ul>
            <li>Built and maintained production React Native applications across iOS and Android with a strong focus on reliability and user experience.</li>
            <li>Implemented native mobile integrations and platform-specific functionality while keeping shared React Native architecture maintainable.</li>
            <li>Worked with REST and GraphQL APIs, Apollo, Firebase/Crashlytics and asynchronous data flows.</li>
            <li>Improved application performance, debugging workflows and production stability through profiling, monitoring and targeted optimization.</li>
            <li>Contributed to CI/CD, EAS builds, store releases and end-to-end testing workflows.</li>
          </ul>
        </div>
      </div>

      <div className="resume-role">
        <div><h2>Senior Software Developer / Mobile Lead</h2><span>Jan 2019 — Nov 2023</span></div>
        <div>
          <ul>
            <li>Developed and led React Native applications across multiple business domains including payroll, fleet, tracking and order-management workflows.</li>
            <li>Owned mobile architecture, feature delivery, production releases and technical decisions across the application lifecycle.</li>
            <li>Worked closely with backend and product teams on API contracts, data models, authentication and real-time application behavior.</li>
            <li>Built reusable components and engineering patterns to improve consistency and development velocity across mobile products.</li>
            <li>Supported junior and mid-level engineers through code reviews, technical guidance and hands-on problem solving.</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="resume-section">
      <p className="eyebrow">Technical strengths</p>
      <div className="resume-strengths">
        <div><h3>Mobile architecture</h3><p>Feature-based organization, reusable components, state management, navigation, API layers, persistence and scalable application structure.</p></div>
        <div><h3>Performance</h3><p>Rendering optimization, startup performance, memory-aware implementation, profiling and practical optimization of production React Native apps.</p></div>
        <div><h3>Offline-first</h3><p>Local persistence, network awareness, optimistic updates, synchronization queues, conflict handling and resilient mobile workflows.</p></div>
        <div><h3>Native & platform</h3><p>iOS and Android integrations, native modules, SDK integrations, JSI/TurboModules/Fabric concepts and platform-specific debugging.</p></div>
        <div><h3>Quality & delivery</h3><p>CI/CD, EAS builds, release management, crash monitoring, automated testing and production debugging with a quality-first mindset.</p></div>
        <div><h3>Leadership</h3><p>Technical ownership, mentoring, code reviews, architecture discussions and collaboration across product, design, backend and engineering teams.</p></div>
      </div>
    </section>

    <section className="resume-section">
      <p className="eyebrow">Independent projects</p>
      <div className="resume-projects">
        <div><h3>ShopSphere</h3><span>React Native · TypeScript · REST</span><p>E-commerce mobile experience covering catalogue discovery, search, product details, cart, wishlist, checkout and persistent local state.</p></div>
        <div><h3>StockPilot</h3><span>React Native · Expo · SQLite</span><p>Offline-first inventory and field-operations concept focused on local persistence, synchronization, optimistic updates and resilient workflows.</p></div>
        <div><h3>FinSight AI</h3><span>React Native · TypeScript · AI</span><p>Personal finance concept combining expense tracking, dashboards, receipt capture and AI-assisted categorization and insights.</p></div>
        <div><h3>FitTrack</h3><span>React Native · Expo · Animations</span><p>Fitness tracking concept covering workout plans, activity history, progress visualization, calendar workflows and offline usage.</p></div>
      </div>
    </section>

    <section className="resume-section">
      <p className="eyebrow">Education</p>
      <div className="resume-role">
        <div><h2>B.Tech — Computer Science & Engineering</h2><span>The Technological Institute of Textile Sciences, Bhiwani · 2015 — 2019</span></div>
        <p>Computer Science and Engineering</p>
      </div>
    </section>

    <section className="resume-section resume-footer-note">
      <p>Portfolio: shubhammehta.vercel.app · Available for senior React Native, mobile engineering and technical leadership opportunities.</p>
    </section>
  </main>;
}

export default function App() {
  if (window.location.pathname === "/resume") return <ResumePage />;
  return <main>
    <nav className="nav"><a className="brand" href="#">SM<span>.</span></a><div className="nav-links"><a href="#about">About</a><a href="#projects">Projects</a><a href="#writing">Writing</a><a href="#expertise">Expertise</a><a href="#contact">Contact</a></div></nav>
    <section className="hero"><div className="hero-copy"><div className="hero-kicker"><span></span> MOBILE ENGINEERING / 2026</div><div className="availability"><span className="availability-dot"></span>Building independent products</div><p className="eyebrow">Senior React Native Engineer · 7.5+ years</p><h1><span>I build</span> mobile products<br/><em>people enjoy using.</em></h1><p className="hero-text">I design and engineer high-quality iOS and Android applications with React Native, TypeScript and modern mobile architecture.</p><div className="hero-actions"><a className="button primary" href="#projects">View projects</a><a className="button secondary" href="/resume" target="_blank" rel="noreferrer">View resume ↗</a></div></div><div className="hero-visual" aria-label="Abstract mobile engineering visual"><div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/><div className="visual-core"><span>RN</span><small>MOBILE<br/>ENGINEERING</small></div><div className="visual-chip chip-one">TS</div><div className="visual-chip chip-two">iOS</div><div className="visual-chip chip-three">Android</div></div></section>
    <div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div></section><section className="credibility"><div><strong>7.5+</strong><span>years building mobile</span></div><div><strong>iOS + Android</strong><span>one engineering mindset</span></div><div><strong>React Native</strong><span>architecture & delivery</span></div><div><strong>10+</strong><span>apps shipped</span></div></section><section id="about" className="section about reveal-section"><div className="about-photo"><img className="profile-photo" src={profileImage} alt="Shubham Mehta" /></div><div className="about-copy"><p className="eyebrow">About me</p><h2>Engineering with a product mindset.</h2><p>I’m a Senior React Native Engineer and Technical Lead focused on building reliable, scalable mobile experiences. I enjoy solving the difficult parts of mobile development — architecture, performance, offline behavior, native integrations and release quality.</p><div className="about-links"><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/shubhammehta78" target="_blank" rel="noreferrer">GitHub ↗</a><a href={medium} target="_blank" rel="noreferrer">Medium ↗</a></div></div></section>
    <section id="projects" className="section reveal-section"><div className="section-head"><div><p className="eyebrow">Selected work</p><h2>Independent products.</h2></div><p className="section-intro">A set of mobile products built to explore real-world architecture, UX and engineering problems.</p></div><div className="projects">{projects.map((project,index)=><article className="project" key={project.name}><div className="project-number">0{index+1}</div><div className="project-body"><div className="project-meta"><span className={project.status === "Building" ? "status-live" : ""}>{project.status}</span><span>Mobile app</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>{project.href&&<a className="project-link" href={project.href} target="_blank" rel="noreferrer">View repository ↗</a>}</div></article>)}</div></section>
    <section id="writing" className="section writing reveal-section"><div className="section-head"><p className="eyebrow">Writing & insights</p><h2>What I learn, I share.</h2></div><div className="writing-card"><div><span className="writing-mark">M</span></div><div><p className="writing-kicker">ThatReactNativeGuy on Medium</p><h3>Notes on React Native, mobile architecture and building better apps.</h3><p>I write about practical engineering lessons, mobile development, architecture and the problems that come up when building production-quality apps.</p><a className="project-link" href={medium} target="_blank" rel="noreferrer">Read on Medium ↗</a></div></div></section>
    <section className="section engineering reveal-section"><div className="section-head"><div><p className="eyebrow">Engineering approach</p><h2>More than just screens.</h2></div><p className="section-intro">I care about the systems behind the interface — the parts that make a mobile product reliable, maintainable and ready for production.</p></div><div className="engineering-grid"><article><span>01</span><h3>Architecture</h3><p>Feature-driven structure, reusable components, clean boundaries and patterns that scale as products grow.</p></article><article><span>02</span><h3>Performance</h3><p>Rendering, startup, memory and network performance treated as product concerns from the beginning.</p></article><article><span>03</span><h3>Resilience</h3><p>Offline-first workflows, persistence, synchronization and graceful failure for unreliable mobile networks.</p></article><article><span>04</span><h3>Delivery</h3><p>Testing, CI/CD, release automation, crash monitoring and the discipline needed to ship confidently.</p></article></div></section><section id="expertise" className="section expertise reveal-section"><div className="section-head"><div><p className="eyebrow">Capabilities</p><h2>Built for real products.</h2></div></div><div className="expertise-grid">{expertise.map(item=><div className="expertise-item" key={item}>{item}<span>↗</span></div>)}</div></section>
    <section id="contact" className="contact"><p className="eyebrow">Let's work together</p><h2>Have a mobile product<br/>in mind?</h2><a className="button primary" href="mailto:shubhammehta725@gmail.com">Get in touch ↗</a><div className="contact-links"><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/shubhammehta78" target="_blank" rel="noreferrer">GitHub</a><a href={medium} target="_blank" rel="noreferrer">Medium</a><a href="mailto:shubhammehta725@gmail.com">Email</a></div></section>
    <footer><span>© {new Date().getFullYear()} Shubham Mehta</span><span>React Native · TypeScript · Mobile</span></footer>
  </main>;
}
