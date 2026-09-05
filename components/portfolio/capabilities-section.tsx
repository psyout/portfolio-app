import type { Capability } from "@/data/portfolio";

type CapabilitiesSectionProps = {
  capabilities: Capability[];
};

export function CapabilitiesSection({ capabilities }: CapabilitiesSectionProps) {
  return (
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
  );
}
