export function SiteHeader() {
  return (
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
  );
}
