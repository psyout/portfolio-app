import type { Project } from "@/data/portfolio";
import { SectionLabel } from "./section-label";
import { displayHeading, sectionSpacing } from "./styles";

type WorkIntroProps = {
  projects: Pick<Project, "id" | "number" | "title">[];
};

export function WorkIntro({ projects }: WorkIntroProps) {
  return (
    <section className={`${sectionSpacing} bg-portfolio-ink text-white`} id="work">
      <SectionLabel className="text-[#91a6ff]">Selected work · 2022—2026</SectionLabel>
      <h2 className={`${displayHeading} mb-[18px] mt-7`}>Products designed clearly.<br />Built end to end.</h2>
      <p className="mb-[70px] ml-auto mt-0 max-w-[420px] leading-[1.55] text-[#abb2ad] max-[760px]:my-[42px] max-[760px]:ml-0">
        Six projects across commerce, discovery, operations, and content—each
        showing the product thinking and engineering behind the interface.
      </p>
      <div className="border-t border-white/30">
        {projects.map((project) => (
          <a
            className="grid min-h-28 grid-cols-[70px_1fr_auto] items-center border-b border-white/30 text-[clamp(28px,4vw,58px)] tracking-[-.04em] text-white no-underline transition-[color,padding] duration-200 hover:pl-3 hover:text-[#91a6ff] min-[761px]:min-h-[90px] min-[761px]:text-[clamp(26px,3vw,44px)] max-[760px]:min-h-[86px] max-[760px]:grid-cols-[42px_1fr_auto]"
            href={`#${project.id}`}
            key={project.id}
          >
            <span className="text-xs tracking-[.1em]">{project.number}</span>
            <span>{project.title}</span>
            <span aria-hidden="true">↘</span>
          </a>
        ))}
      </div>
    </section>
  );
}
