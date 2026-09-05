import type { Project } from "@/data/portfolio";

type WorkIntroProps = {
  projects: Pick<Project, "id" | "number" | "title">[];
};

export function WorkIntro({ projects }: WorkIntroProps) {
  return (
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
  );
}
