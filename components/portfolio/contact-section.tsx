export function ContactSection() {
  return (
    <section className="contact" id="contact">
      <p className="section-label">Available for new opportunities</p>
      <h2>Have a problem<br />worth solving?</h2>
      <a href="mailto:hello@felipegonzalez.dev">
        hello@felipegonzalez.dev <span>↗</span>
      </a>
      <div className="contact-socials" aria-label="Social links">
        <a href="https://www.linkedin.com/in/felipegonzalezcare/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="https://github.com/psyout" target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </section>
  );
}
