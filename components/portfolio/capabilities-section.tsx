import type { Capability } from "@/data/portfolio";
import { SectionLabel } from "./section-label";
import { contentHeading, sectionSpacing } from "./styles";

type CapabilitiesSectionProps = {
  capabilities: Capability[];
};

export function CapabilitiesSection({ capabilities }: CapabilitiesSectionProps) {
  return (
    <section className={`${sectionSpacing} grid grid-cols-[.85fr_1.15fr] gap-[9vw] max-[760px]:grid-cols-1`} aria-labelledby="capabilities-title">
      <div>
        <SectionLabel>Capabilities</SectionLabel>
        <h2 className={`${contentHeading} mb-[38px] mt-6`} id="capabilities-title">One person.<br />The full product picture.</h2>
      </div>
      <div className="border-t border-portfolio-line">
        {capabilities.map((capability) => (
          <article className="grid grid-cols-[50px_1fr_1.2fr] gap-6 border-b border-portfolio-line py-[34px] max-[760px]:grid-cols-[36px_1fr]" key={capability.number}>
            <span className="text-xs font-bold text-portfolio-blue">{capability.number}</span>
            <h3 className="m-0 text-[clamp(20px,2vw,28px)] tracking-[-.03em]">{capability.title}</h3>
            <p className="m-0 text-base leading-[1.55] max-[760px]:col-start-2">{capability.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
