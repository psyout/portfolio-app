export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-[88px] items-center justify-between border-b border-portfolio-line bg-portfolio-paper px-[4vw] max-[760px]:h-[72px]">
      <a className="inline-flex items-center gap-3 text-[13px] font-bold tracking-[.13em] no-underline" href="#top" aria-label="Felipe Gonzalez home">
        <span className="grid size-[34px] place-items-center bg-portfolio-blue text-xs tracking-normal text-white" aria-hidden="true">FG</span>
        <span>FELIPE GONZALEZ</span>
      </a>
      <nav className="flex items-center gap-[34px] text-sm" aria-label="Main navigation">
        <a className="no-underline max-[760px]:hidden" href="#work">Work</a>
        <a className="no-underline max-[760px]:hidden" href="#about">About</a>
        <a className="bg-portfolio-ink px-4 py-[11px] text-white no-underline max-[760px]:px-[11px] max-[760px]:py-[9px]" href="#contact">Let&apos;s talk</a>
      </nav>
    </header>
  );
}
