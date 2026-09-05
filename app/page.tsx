/* eslint-disable @next/next/no-img-element */
import { ArrowDownToLine, Code2, Languages, UsersRound } from "lucide-react";
import { ProjectGallery } from "./project-gallery";

const projects = [
  {
    id: "puretide",
    number: "01",
    title: "Puretide",
    eyebrow: "Privacy-first commerce",
    type: "E-commerce web app",
    intro:
      "A privacy-focused online store built to deliver a complete shopping experience without analytics scripts, third-party trackers, or unnecessary data collection.",
    story:
      "Built with the Next.js App Router and TypeScript, Puretide combines a responsive storefront with a persistent client-side cart, SQLite-backed orders, Google Sheets inventory, and automated transactional email.",
    details: ["Next.js", "TypeScript", "Tailwind CSS", "SQLite"],
    liveUrl: "https://puretide.ca",
    githubUrl: "",
    slides: [
      { image: "/static/images/puretide-products.jpg", label: "Product collection" },
      { image: "/static/images/puretide-product-item.jpg", label: "Product details" },
      { image: "/static/images/puretide-mobile1.png", label: "Mobile storefront", fit: "contain" as const },
      { image: "/static/images/puretide-mobile2.png", label: "Mobile checkout", fit: "contain" as const },
    ],
  },
  {
    id: "vansippy",
    number: "02",
    title: "Vansippy",
    eyebrow: "Location-based discovery",
    type: "Happy hour finder",
    intro:
      "A full-stack web application that helps people discover curated happy-hour deals at restaurants and bars around Vancouver.",
    story:
      "Vansippy pairs a React and Material UI interface with a Node, Express, and MongoDB backend. Browser geolocation and Mapbox turn curated venue data into useful, nearby results in real time.",
    details: ["React", "Node.js", "MongoDB", "Mapbox"],
    liveUrl: "https://vansippy.com/",
    githubUrl: "https://github.com/psyout/capstone-client",
    slides: [
      { image: "/static/images/vansippy-card.jpg", label: "Venue discovery" },
      { image: "/static/images/vansippy-location.jpg", label: "Map experience" },
      { image: "/static/images/vansippy-mobile1.png", label: "Mobile results", fit: "contain" as const },
      { image: "/static/images/vansippy-mobile2.png", label: "Deal details", fit: "contain" as const },
    ],
  },
  {
    id: "instock",
    number: "03",
    title: "InStock",
    eyebrow: "Inventory operations",
    type: "Management system",
    intro:
      "A modern inventory and warehouse management system developed collaboratively using an Agile workflow and a scalable full-stack architecture.",
    story:
      "The product supports core CRUD workflows, dynamic search, responsive tables, and real-time validation. React and Sass power the interface while Node, Express, MySQL, and Knex handle the API and data layer.",
    details: ["React", "Express", "MySQL", "Agile / Scrum"],
    liveUrl: "",
    githubUrl: "https://github.com/mannyv123/instock-client",
    slides: [
      { image: "/static/images/instock-card.jpg", label: "Inventory overview" },
      { image: "/static/images/instock-mockup.jpg", label: "Warehouse workflow" },
      { image: "/static/images/instock-mockup-edit.jpg", label: "Edit inventory" },
      { image: "/static/images/instock-mockup-delete.jpg", label: "Delete confirmation" },
    ],
  },
  {
    id: "transportes-moran",
    number: "04",
    title: "Transportes Moran",
    eyebrow: "Service business platform",
    type: "Corporate website",
    intro:
      "A focused digital presence for an aggregate transport business, designed to make its services clear and help customers start a conversation quickly.",
    story:
      "The responsive single-page experience uses reusable React components and modular SCSS. I worked across interface design and front-end development, from early Figma decisions through production implementation.",
    details: ["React", "SCSS", "JavaScript", "Figma"],
    liveUrl: "https://www.transportesmoran.cl/",
    githubUrl: "https://github.com/psyout/transportes-moran",
    slides: [
      { image: "/static/images/transportes-moran-card.jpg", label: "Homepage" },
      { image: "/static/images/transportes-moran-servicios.jpg", label: "Services" },
      { image: "/static/images/transportes-moran-laptop-mockup.png", label: "Responsive layout", fit: "contain" as const },
      { image: "/static/images/transportes-moran-laptop-mockup2.png", label: "Project presentation", fit: "contain" as const },
    ],
  },
  {
    id: "brainflix",
    number: "05",
    title: "BrainFlix",
    eyebrow: "Video platform",
    type: "Full-stack React app",
    intro:
      "A responsive video platform built around dynamic routing, API-driven content, reusable interface components, and familiar viewing interactions.",
    story:
      "React Router handles video selection while Axios connects the interface to a Node and Express REST API. The component structure keeps video, upload, and comment experiences modular and maintainable.",
    details: ["React", "REST API", "Node.js", "Sass"],
    liveUrl: "",
    githubUrl: "https://github.com/psyout/felipe-gonzalez-brainflix",
    slides: [
      { image: "/static/images/brainflix.jpg", label: "Video player" },
      { image: "/static/images/brainflix-add-comment.jpg", label: "Comments" },
      { image: "/static/images/brainflix-server.jpg", label: "API server" },
      { image: "/static/images/brainflix-upload.jpg", label: "Video upload" },
    ],
  },
  {
    id: "bandsite",
    number: "06",
    title: "Bandsite",
    eyebrow: "Music and community",
    type: "Interactive band website",
    intro:
      "A responsive website for an independent band, combining editorial content, photography, tour dates, and a community comment experience.",
    story:
      "Semantic HTML, BEM-style Sass, and JavaScript create a lightweight front end. Axios connects the comments interface to an Express API, allowing visitors to read and add content dynamically.",
    details: ["HTML5", "JavaScript", "Axios", "Sass"],
    liveUrl: "https://felipegonzalez.io/bandsite/",
    githubUrl: "",
    slides: [
      { image: "/static/images/bandsite.jpg", label: "Band story" },
      { image: "/static/images/bandsite-shows.jpg", label: "Tour dates" },
    ],
  },
];

const capabilities = [
  {
    number: "01",
    title: "Frontend development",
    body: "React, Next.js, TypeScript, and responsive interfaces that stay clear and accessible across devices.",
  },
  {
    number: "02",
    title: "Backend development",
    body: "Node.js, Express, REST APIs, databases, and third-party integrations that support real product workflows.",
  },
  {
    number: "03",
    title: "Interface design",
    body: "Figma, prototypes, design systems, and practical UI decisions shaped by a background in web design.",
  },
];

const values = [
  {
    icon: Code2,
    title: "Built to last",
    body: "Clean, maintainable code and deliberate technical choices—not quick patches.",
  },
  {
    icon: UsersRound,
    title: "Made for people",
    body: "Accessible interfaces and clear flows that reduce friction for real users.",
  },
  {
    icon: Languages,
    title: "Easy collaboration",
    body: "Bilingual in English and Spanish, comfortable across design and development.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Felipe Gonzalez home">
          <span className="brand-mark" aria-hidden="true">FG</span>
          <span>FELIPE GONZALEZ</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#contact">Let&apos;s talk</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker">Full-stack developer · Design background</div>
        <h1>Code that works.<br />Design that connects.</h1>
        <div className="hero-bottom">
          <p>
            I&apos;m Felipe, a Vancouver-based developer who turns complex ideas
            into clear, accessible digital products.
          </p>
          <a className="round-link" href="#work" aria-label="Explore selected work">↓</a>
        </div>
        <div className="blueprint-lines" aria-hidden="true" />
      </section>

      <section className="work-intro" id="work">
        <p className="section-label">Selected work · 2022—2026</p>
        <h2>Products designed clearly.<br />Built end to end.</h2>
        <p className="work-note">
          Six projects across commerce, discovery, operations, and content—each
          showing the product thinking and engineering behind the interface.
        </p>
        <div className="project-index">
          {projects.map((project) => (
            <a href={`#${project.id}`} key={project.id}>
              <span className="index-number">{project.number}</span>
              <span>{project.title}</span>
              <span aria-hidden="true">↘</span>
            </a>
          ))}
        </div>
      </section>

      {projects.map((project, index) => (
        <article className="project" id={project.id} key={project.id}>
          <div className="project-heading">
            <div>
              <p className="section-label">{project.number} / {project.eyebrow}</p>
              <h2>{project.title}</h2>
            </div>
            <div className="project-meta">
              <span>{project.type}</span>
              <span>Development &amp; interface design</span>
            </div>
          </div>

          <ProjectGallery project={project.title} slides={project.slides} tone={index} />

          <div className="project-copy">
            <p className="project-intro">{project.intro}</p>
            <div className="project-story">
              <p>{project.story}</p>
              <ul aria-label={`${project.title} technology stack`}>
                {project.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <div className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">View live site ↗</a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">Source code ↗</a>
                )}
              </div>
            </div>
          </div>
        </article>
      ))}

      <section className="about" id="about">
        <div className="about-main">
          <div className="about-photo">
            <img
              src="/static/images/profile-picture.jpg"
              alt="Felipe Gonzalez, full-stack developer based in Vancouver"
            />
            <span>Vancouver, BC</span>
          </div>
          <div className="about-copy">
            <p className="section-label">About me</p>
            <h2>Developer by trade.<br />Designer by experience.</h2>
            <p>
              I&apos;m Felipe Gonzalez, a Full-Stack Web Developer with more than
              four years of experience building responsive web products. I work
              across React and Next.js interfaces, Node.js APIs, databases, and
              product design.
            </p>
            <p>
              I started as a Web Designer, so I understand both sides of a
              digital product: how it should work and how it should feel. Today,
              development is my primary craft—and design helps me build clearer,
              more thoughtful software.
            </p>
            <a className="text-link" href="https://felipegonzalez.dev/felipe-gonzalez-resume.pdf" target="_blank" rel="noreferrer">
              Download résumé <ArrowDownToLine size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="about-values">
          {values.map(({ icon: Icon, title, body }) => (
            <article key={title}>
              <Icon className="value-mark" size={22} strokeWidth={2} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities" aria-labelledby="capabilities-title">
        <div>
          <p className="section-label">Capabilities</p>
          <h2 id="capabilities-title">One person.<br />The full product picture.</h2>
        </div>
        <div className="capability-list">
          {capabilities.map((capability) => (
            <article key={capability.number}>
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-label">Available for new opportunities</p>
        <h2>Have a problem<br />worth solving?</h2>
        <a href="mailto:hello@felipegonzalez.dev">hello@felipegonzalez.dev <span>↗</span></a>
        <div className="contact-socials" aria-label="Social links">
          <a href="https://www.linkedin.com/in/felipegonzalezcare/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/psyout" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </section>

      <footer>
        <span>FELIPE GONZALEZ</span>
        <span>Full-stack developer · Vancouver, BC</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
