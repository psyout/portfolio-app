import type { Project } from "@/data/portfolio";
import { ProjectGallery } from "./project-gallery";

type ProjectSectionProps = {
  project: Project;
  tone: number;
};

export function ProjectSection({ project, tone }: ProjectSectionProps) {
  return (
    <article className="project" id={project.id}>
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

      <ProjectGallery project={project.title} slides={project.slides} tone={tone} />

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
  );
}
