import type { Project } from "@/data/portfolio";
import { ProjectGallery } from "./project-gallery";
import { SectionLabel } from "./section-label";
import { darkButton, sectionSpacing } from "./styles";

type ProjectSectionProps = {
  project: Project;
  tone: number;
};

export function ProjectSection({ project, tone }: ProjectSectionProps) {
  return (
    <article className={`${sectionSpacing} scroll-mt-[88px] border-b border-portfolio-line`} id={project.id}>
      <div className="mb-[54px] grid grid-cols-[1fr_auto] items-end gap-[30px] min-[761px]:mx-auto min-[761px]:mb-[38px] min-[761px]:w-full min-[761px]:max-w-[1240px] max-[760px]:grid-cols-1">
        <div>
          <SectionLabel>{project.number} / {project.eyebrow}</SectionLabel>
          <h2 className="mb-0 mt-[13px] text-[clamp(58px,9vw,138px)] font-medium leading-[.9] tracking-[-.07em] min-[761px]:text-[clamp(50px,5.8vw,88px)] min-[761px]:leading-[.94] min-[761px]:tracking-[-.06em]">{project.title}</h2>
        </div>
        <div className="grid min-w-[190px] gap-2 pb-2 text-[13px] max-[760px]:grid-flow-col max-[760px]:justify-between">
          <span>{project.type}</span>
          <span>Development &amp; interface design</span>
        </div>
      </div>

      <ProjectGallery project={project.title} slides={project.slides} tone={tone} />

      <div className="grid grid-cols-[1.3fr_1fr] gap-[10vw] pt-[clamp(60px,8vw,115px)] min-[761px]:mx-auto min-[761px]:w-full min-[761px]:max-w-[1240px] min-[761px]:gap-[clamp(60px,8vw,120px)] max-[760px]:grid-cols-1 max-[760px]:gap-12">
        <p className="m-0 text-[clamp(27px,3.2vw,50px)] leading-[1.15] tracking-[-.035em] min-[761px]:text-[clamp(26px,2.6vw,38px)]">{project.intro}</p>
        <div className="pt-2">
          <p className="mb-[42px] mt-0 text-[17px] leading-[1.7]">{project.story}</p>
          <ul className="m-0 list-none border-t border-portfolio-line p-0" aria-label={`${project.title} technology stack`}>
            {project.details.map((detail) => <li className="border-b border-portfolio-line py-[14px] text-[13px]" key={detail}>{detail}</li>)}
          </ul>
          <div className="mt-[34px] flex flex-wrap gap-3">
            {project.liveUrl && (
              <a className={darkButton} href={project.liveUrl} target="_blank" rel="noreferrer">View live site ↗</a>
            )}
            {project.githubUrl && (
              <a className={darkButton} href={project.githubUrl} target="_blank" rel="noreferrer">Source code ↗</a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
