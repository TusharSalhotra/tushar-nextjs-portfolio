import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
  Zap,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Healthcare Provider Enrollment Platform",
    category: "Healthcare · Enterprise SaaS",
    duration: "Dec 2025 — Present",
    role: "Senior Frontend Developer Lead",
    description:
      "A workflow-driven platform for provider credentialing, enrollment and compliance, replacing fragmented manual processes with a centralized, AI-ready operational system.",
    tech: ["Next.js", "ShadCN", "Tailwind CSS", "Jest", "SSR / CSR / SSG / ISR", "Route Handlers"],
    highlights: [
      "Multi-stage enrollment workflow engine with stage validation and audit tracking",
      "Per-payer enrollment tracking with independent statuses and timelines",
      "First Pass Rate (FPR) tracking and rejection-reason capture",
      "SLA-based work queues, real-time dashboards and a read-only client portal",
      "PII-compliant masked data with audit logging",
    ],
  },
  {
    number: "02",
    title: "Healthcare Merchant & Patient Financing Platform",
    category: "Healthcare · FinTech",
    duration: "Mar 2024 — Dec 2025",
    role: "Senior Frontend Developer",
    description:
      "An AI-assisted, HIPAA-aligned financing platform enabling healthcare providers to onboard as merchants and offer patient loan options through integrated lenders.",
    tech: ["React.js", "ShadCN", "Tailwind CSS", "Azure", "Azure AD B2C", "Vitest"],
    highlights: [
      "Merchant onboarding and patient financing workflows",
      "Lender integration, credit approval and fund disbursement flows",
      "Secure authentication via Azure AD B2C",
      "HIPAA-aligned, enterprise-focused frontend architecture",
    ],
  },
  {
    number: "03",
    title: "Security Services Management Platform",
    category: "Security Operations · SaaS",
    duration: "Jul 2023 — Mar 2024",
    role: "Senior Frontend Developer",
    description:
      "A centralized, multi-tenant SaaS platform unifying dispatch, scheduling, HRM/payroll, CRM and incident reporting for security companies and in-house teams.",
    tech: ["Next.js", "React", "Redux Toolkit", "Redux Saga", "Ant Design", "SCSS"],
    highlights: [
      "Dispatch, shift scheduling and roster management",
      "HRM and payroll integration with employee/client onboarding",
      "Inspection, reporting and analytics with a widget-based dashboard",
      "Role-based access control across a multi-tenant architecture",
    ],
  },
  {
    number: "04",
    title: "Medical Charge Capture Platform",
    category: "Healthcare · Revenue Cycle",
    duration: "Mar 2022 — Jun 2023",
    role: "Senior Frontend Developer",
    description:
      "A dynamic data-capture platform (admin + mobile) reducing revenue leakage from incomplete or incorrect charge information at the point of care.",
    tech: ["React.js", "Redux Saga", "LESS", "Ant Design", "Dynamic Forms"],
    highlights: [
      "Configurable enrollment forms with drag-and-drop field sequencing",
      "Multi-facility, multi-specialty and multi-template workflows",
      "Recursive field/group rendering and template management",
      "Physician case review and claims capture workflow",
    ],
  },
  {
    number: "05",
    title: "IoT Efficiency & Capacity Management System",
    category: "IoT · Real-Time",
    duration: "Apr 2021 — Mar 2022",
    role: "Senior Frontend Developer",
    description:
      "A real-time device monitoring platform across multiple companies and locations, enabling predictive maintenance through live Socket.io updates.",
    tech: ["Next.js", "Socket.io", "Redux Saga", "Ant Design", "LESS"],
    highlights: [
      "Real-time monitoring of point-machine device parameters",
      "Multi-company, multi-location device categorization by type and mode",
      "Location module with map view, custom gauges and graphs",
      "Predictive maintenance support to avoid device failure",
    ],
  },
  {
    number: "06",
    title: "Risk Management Application",
    category: "Risk · Compliance",
    duration: "Jun 2020 — Apr 2021",
    role: "Senior Frontend Developer",
    description:
      "A risk, compliance and site-inspection platform with dynamic audits, reviewer follow-ups and location-based risk analysis.",
    tech: ["React.js", "Tailwind CSS", "Dynamic Forms", "AG Grid"],
    highlights: [
      "Location-based audit tickets with dynamic, admin-configured questions",
      "Reviewer workflow for inspection reassurance and follow-ups",
      "Risk dashboard and heatmap by location",
      "Dynamic role- and permission-based task flows",
    ],
  },
  {
    number: "07",
    title: "SEO-Based Online Consultant Application",
    category: "Healthcare · SEO",
    duration: "Jul 2018 — May 2020",
    role: "Senior Frontend Developer",
    description:
      "An online consultant application driving inbound enquiries and physician discovery for healthcare businesses, built around search-focused page structures.",
    tech: ["React.js", "Next.js", "Material UI", "SEO"],
    highlights: [
      "Public enquiry module connecting patients with nearby physicians",
      "SEO-focused meta keywords, anchor structure and semantic markup",
      "Scroll-to-section navigation and dynamic multi-image uploads",
    ],
  },
];

const domains = [
  { title: "Healthcare Credentialing & Provider Enrollment", text: "Workflow-driven credentialing, payer enrollment tracking, compliance and audit systems." },
  { title: "Healthcare FinTech", text: "Merchant onboarding, patient financing, lender integration and HIPAA-aligned architecture." },
  { title: "Security Operations & SaaS", text: "Multi-tenant dispatch, scheduling, HRM/payroll and incident management platforms." },
  { title: "Revenue Cycle Management", text: "Dynamic charge-capture and claims workflows to reduce billing leakage." },
  { title: "IoT & Real-Time Systems", text: "Live device monitoring and predictive maintenance via Socket.io." },
  { title: "Risk & Compliance", text: "Audit, inspection and risk-analysis platforms with dynamic permissions." },
];

const architecturePrinciples = [
  { title: "Component & Feature-Based Structure", text: "Applications organized by feature, with reusable component composition to keep large codebases maintainable." },
  { title: "Custom Hooks & Provider Pattern", text: "Shared logic extracted into custom hooks; app-wide state and context exposed through provider components." },
  { title: "Service-Based API Separation", text: "API calls isolated into a service layer, decoupled from UI components for easier testing and reuse." },
  { title: "Rendering Strategy Per Route", text: "SSR, CSR, SSG and ISR chosen per page based on SEO, interactivity and data-refresh needs, using Next.js Route Handlers." },
  { title: "Auth, Routes & RBAC", text: "Protected routes and role-based UI rendering via NextAuth.js / MSAL with middleware-level permission checks." },
  { title: "Micro-Frontends", text: "Large applications split into independently deployable frontends using Webpack Module Federation." },
];

const processSteps = [
  { title: "Agile Ceremonies", text: "Daily standups, sprint planning, backlog grooming and retrospectives to keep delivery predictable." },
  { title: "Code Review & Quality Gates", text: "Peer code review supported by SonarQube and Aikido PR Reviewer for code quality and security checks." },
  { title: "Testing Discipline", text: "Unit and integration tests with Jest, Vitest and React Testing Library for forms, auth, dialogs and API states." },
  { title: "Version Control & CI/CD", text: "GitHub-based branching, pull requests and merges within a CI/CD pipeline." },
  { title: "Estimation & Task Breakdown", text: "Providing estimates for architecture setup, modules and tasks after requirement analysis, and leading distributed frontend task allocation." },
  { title: "Cross-Functional Collaboration", text: "Close coordination with backend engineers and designers to align on API contracts and UI/UX before implementation." },
];

const skills = {
  Frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Vite"],
  "UI & Styling": ["Tailwind CSS", "ShadCN UI", "Material UI", "Semantic UI", "Ant Design", "SCSS", "LESS"],
  Architecture: ["Micro-Frontends", "Webpack Module Federation", "Enterprise SaaS", "SSR", "CSR", "SSG", "ISR"],
  "State & Forms": ["Redux Toolkit", "Redux Saga", "Context API", "TanStack Query", "React Hook Form", "Zod"],
  "APIs & Auth": ["REST APIs", "Axios", "Swagger", "NextAuth.js", "MSAL", "Google OAuth"],
  "Real-Time": ["Socket.io", "SSE"],
  Testing: ["Jest", "Vitest", "React Testing Library"],
  Tools: ["GitHub", "Webpack", "Babel", "ESLint", "Prettier", "Jira", "Azure", "CI/CD"],
  Backend: ["Node.js", "Express", "NestJS", "Authentication", "Authorization"],
  "AI & Code Quality": ["Cursor AI", "GitHub Copilot", "Codex", "Claude AI", "ChatGPT", "Windsurf", "Greptile AI", "SonarQube", "Aikido PR Reviewer"],
};

const expertise = [
  {
    icon: "01",
    title: "React & Next.js",
    text: "Production-ready interfaces, reusable components and modern rendering strategies for scalable applications.",
  },
  {
    icon: "02",
    title: "Enterprise SaaS",
    text: "Business applications with complex workflows, permissions, dashboards and operational data.",
  },
  {
    icon: "03",
    title: "Dynamic Workflows",
    text: "Complex forms, validations, configurable fields and business-rule-driven interfaces.",
  },
  {
    icon: "04",
    title: "Micro-Frontends",
    text: "Modular frontend architecture using Webpack Module Federation for large applications.",
  },
  {
    icon: "05",
    title: "Performance",
    text: "Lazy loading, memoization, code splitting and bundle optimization for better experiences.",
  },
  {
    icon: "06",
    title: "API Integration",
    text: "REST APIs, authentication, authorization and backend collaboration across the application lifecycle.",
  },
  {
    icon: "07",
    title: "AI-Assisted Development",
    text: "Using GitHub Copilot, Claude AI, ChatGPT, Cursor AI and Windsurf to speed up development, improve code quality, debugging, documentation and test generation.",
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Expertise />
      <Projects />
      <Domains />
      <Architecture />
      <Process />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <a href="#home" className="brand">
          TS<span>.</span>
        </a>
        <nav className="desktop-nav">
          {["About", "Projects", "Skills", "Experience", "Contact"].map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="mailto:tusharsalhotra@gmail.com">
          Let&apos;s talk <ArrowUpRight size={16} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <div>
          <div className="hero-intro">
            <div className="hero-avatar">
              <Image src="/Tushar.jpeg" alt="Tushar Salhotra" width={64} height={64} priority />
            </div>
            <div className="eyebrow"><span className="status-dot" /> Available for opportunities</div>
          </div>
          <h1>
            Building <em>scalable</em>
            <br />
            digital products.
          </h1>
          <p className="hero-copy">
            I&apos;m Tushar — a frontend-focused full stack developer specializing in
            React.js, Next.js and TypeScript. I turn complex business workflows into
            reliable, maintainable web applications.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Explore my work <ArrowUpRight size={18} /></a>
            <a className="button secondary" href="#contact">Get in touch <Mail size={17} /></a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={15} /> Chandigarh, India</span>
            <span><Zap size={15} /> 5+ years experience</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="code-card">
            <div className="window-bar"><span /><span /><span /></div>
            <pre>{`const developer = {
  focus: "Frontend",
  stack: [
    "React",
    "Next.js",
    "TypeScript"
  ],
  architecture:
    "Micro-Frontends",
  domains: [
    "Healthcare",
    "HRMS",
    "Supply Chain",
    "FinTech",
    "Compliance"
  ]
};`}</pre>
          </div>
          <div className="floating-tag tag-react">React.js</div>
          <div className="floating-tag tag-next">Next.js</div>
          <div className="floating-tag tag-ts">TypeScript</div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {["REACT.JS", "NEXT.JS", "TYPESCRIPT", "ENTERPRISE SAAS", "HEALTHCARE", "HRMS", "SUPPLY CHAIN", "FINTECH", "COMPLIANCE", "AI-ASSISTED DEV"].map((x, i) => (
          <span key={i}>{x} <b>✦</b></span>
        ))}
        {["REACT.JS", "NEXT.JS", "TYPESCRIPT", "ENTERPRISE SAAS", "HEALTHCARE", "HRMS", "SUPPLY CHAIN", "FINTECH", "COMPLIANCE", "AI-ASSISTED DEV"].map((x, i) => (
          <span key={`b-${i}`}>{x} <b>✦</b></span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section about">
      <div className="container two-col">
        <div>
          <p className="section-label">01 — About</p>
          <h2>Frontend engineering with a <em>business mindset.</em></h2>
        </div>
        <div className="about-copy">
          <p>
            I&apos;m a frontend-focused full stack developer with 5+ years of experience
            building scalable enterprise applications using React.js, Next.js,
            TypeScript and modern JavaScript.
          </p>
          <p>
            My strength is translating complex requirements into reusable frontend
            architecture — from dynamic forms and role-based workflows to dashboards,
            real-time interfaces and performance-focused applications.
          </p>
          <p>
            I&apos;ve worked across Healthcare, HRMS, Supply Chain &amp; Logistics,
            Enterprise SaaS, FinTech and Compliance &amp; Audit domains, collaborating
            closely with product managers, designers, QA and backend engineers in Agile
            environments to deliver production-ready solutions.
          </p>
          <p>
            I actively use AI-powered tools — GitHub Copilot, Claude AI, ChatGPT, Cursor AI
            and Windsurf — to speed up development, improve code quality, debugging,
            documentation and test generation, while staying focused on maintainable
            architecture and strong application performance.
          </p>
          <div className="about-stats">
            <div><strong>5+</strong><span>Years experience</span></div>
            <div><strong>7</strong><span>Featured projects</span></div>
            <div><strong>6</strong><span>Core domains</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="section expertise">
      <div className="container">
        <div className="section-heading">
          <div><p className="section-label">02 — Expertise</p><h2>What I <em>do best.</em></h2></div>
          <p>Focused on building products that are maintainable, scalable and useful — not just visually impressive.</p>
        </div>
        <div className="expertise-grid">
          {expertise.map((item) => (
            <article className="expertise-card" key={item.icon}>
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-heading">
          <div><p className="section-label">03 — Selected Work</p><h2>Projects that solve <em>real problems.</em></h2></div>
          <p>Enterprise applications across healthcare, security, IoT and risk management.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-body">
                <div>
                  <h3>{project.title}</h3>
                  <div className="project-meta">
                    <span>{project.role}</span>
                    <span>{project.duration}</span>
                  </div>
                  <p>{project.description}</p>
                </div>
                <div className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <span key={highlight}><CheckCircle2 size={15} /> {highlight}</span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <div className="tech-list">{project.tech.map((t) => <span key={t}>{t}</span>)}</div>
                <span className="project-arrow"><ArrowUpRight size={20} /></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Domains() {
  return (
    <section id="domains" className="section expertise">
      <div className="container">
        <div className="section-heading">
          <div><p className="section-label">04 — Domain Experience</p><h2>Industries I&apos;ve <em>built for.</em></h2></div>
          <p>Deep, repeated exposure to a small set of domains rather than shallow work across many.</p>
        </div>
        <div className="expertise-grid">
          {domains.map((item, i) => (
            <article className="expertise-card" key={item.title}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section id="architecture" className="section architecture">
      <div className="container">
        <div className="two-col architecture-intro">
          <div><p className="section-label">05 — Architecture</p><h2>From interface to <em>architecture.</em></h2></div>
          <p>I think beyond individual screens. I design frontend structures around reusable components, business workflows, API integration and long-term maintainability.</p>
        </div>
        <div className="architecture-flow">
          {[
            ["01", "User Experience", "Responsive UI · Accessibility · Reusable components"],
            ["02", "Frontend Layer", "React · Next.js · TypeScript · State management"],
            ["03", "Business Layer", "Workflows · Forms · RBAC · Validation"],
            ["04", "Integration", "REST APIs · Authentication · Real-time events"],
            ["05", "Delivery", "Testing · Performance · CI/CD · Cloud"],
          ].map(([n, title, text], i) => (
            <div className="arch-step" key={n}>
              <div className="arch-num">{n}</div>
              <div><h3>{title}</h3><p>{text}</p></div>
              {i < 4 && <div className="arch-line" />}
            </div>
          ))}
        </div>
        <div className="skills-grid architecture-principles">
          {architecturePrinciples.map((item) => (
            <div className="skill-group" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="section expertise">
      <div className="container">
        <div className="section-heading">
          <div><p className="section-label">06 — Process</p><h2>How I <em>work.</em></h2></div>
          <p>Agile delivery with quality gates built into the workflow, not bolted on afterward.</p>
        </div>
        <div className="expertise-grid">
          {processSteps.map((item, i) => (
            <article className="expertise-card" key={item.title}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="two-col skills-heading">
          <div><p className="section-label">07 — Technology</p><h2>A modern <em>toolkit.</em></h2></div>
          <p>Technologies from my professional experience, organized around the way I build applications.</p>
        </div>
        <div className="skills-grid">
          {Object.entries(skills).map(([group, items]) => (
            <div className="skill-group" key={group}>
              <h3>{group}</h3>
              <div>{items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <p className="section-label">08 — Experience</p>
        <div className="experience-list">
          <article className="experience-item">
            <div className="experience-date">JUN 2023 — PRESENT</div>
            <div>
              <h3>Senior Associate Frontend Developer</h3>
              <h4>Ditstek Innovations Pvt. Ltd.</h4>
              <ul>
                <li>Develop scalable user-facing features using React.js.</li>
                <li>Build reusable components and frontend libraries.</li>
                <li>Translate wireframes into high-quality production code.</li>
                <li>Optimize components for performance across devices and browsers.</li>
                <li>Work with Micro-Frontend architecture using Webpack Module Federation.</li>
              </ul>
            </div>
          </article>
          <article className="experience-item">
            <div className="experience-date">FEB 2021 — MAY 2023</div>
            <div>
              <h3>Associate Frontend Developer</h3>
              <h4>TechAbet, Mohali</h4>
              <ul>
                <li>Built responsive web applications using React.js, JavaScript, HTML and CSS.</li>
                <li>Handled complex business logic and dynamic validations.</li>
                <li>Collaborated with cross-functional teams for feature delivery.</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-box">
        <p className="section-label">09 — Contact</p>
        <h2>Have a product to <em>build?</em></h2>
        <p>Let&apos;s talk about your next React, Next.js or enterprise application.</p>
        <div className="contact-actions">
          <a className="button primary" href="mailto:tusharsalhotra@gmail.com">Email me <Mail size={18} /></a>
          <a className="button secondary" href="tel:8146188022">8146188022 <Phone size={17} /></a>
        </div>
        <div className="contact-details">
          <span><Mail size={16} /> tusharsalhotra@gmail.com</span>
          <span><MapPin size={16} /> Chandigarh, India</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Tushar Salhotra</span>
        <div>
          <a href="mailto:tusharsalhotra@gmail.com" aria-label="Email"><Mail size={18} /></a>
          <a href="https://www.linkedin.com/in/tushar-salhotra-b59382194/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="https://github.com/TusharSalhotra" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
        </div>
      </div>
    </footer>
  );
}