import { SectionLabel } from "./section-label";
import { displayHeading, sectionSpacing } from "./styles";

export function ContactSection() {
  return (
    <section className={`${sectionSpacing} bg-portfolio-blue text-white`} id="contact">
      <SectionLabel className="text-white">Available for new opportunities</SectionLabel>
      <h2 className={`${displayHeading} mb-[70px] mt-7`}>Have a problem<br />worth solving?</h2>
      <a className="flex justify-between border-y border-white/55 py-[22px] text-[clamp(20px,2.5vw,38px)] no-underline" href="mailto:hello@felipegonzalez.dev">
        hello@felipegonzalez.dev <span>↗</span>
      </a>
      <div className="mt-9 flex gap-6 max-[760px]:flex-col max-[760px]:gap-[14px]" aria-label="Social links">
        <a className="text-sm font-bold no-underline" href="https://www.linkedin.com/in/felipegonzalezcare/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a className="text-sm font-bold no-underline" href="https://github.com/psyout" target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </section>
  );
}
