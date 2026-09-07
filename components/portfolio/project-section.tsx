"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Project } from "@/data/portfolio";
import { ProjectGallery } from "./project-gallery";
import { TechnologyStack } from "./technology-stack";
import { darkButton } from "./styles";

type ProjectSectionProps = {
  project: Project;
  tone: number;
};

export function ProjectSection({ project, tone }: ProjectSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const panelId = `${project.id}-details`;

  return (
    <article className="scroll-mt-6 px-5 min-[761px]:px-8" id={project.id}>
      <div className={`mx-auto max-w-[960px] border-b border-portfolio-line bg-portfolio-background px-1 ${tone === 0 ? "border-t" : ""}`}>
        <h2 className="sr-only">{project.title}</h2>
        <button
          className="group grid w-full cursor-pointer grid-cols-[1fr_auto] items-center gap-4 border-0 bg-transparent px-1 py-6 text-left text-portfolio-text"
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <div>
            <span className="title-font block text-lg font-semibold tracking-[-.02em]">{project.title}</span>
            <p className="mb-0 mt-1.5 max-w-[760px] text-[14px] leading-[1.55] text-portfolio-text/65">{project.intro}</p>
          </div>
          <span className={`button-hover grid size-8 place-items-center rounded-full bg-portfolio-muted text-base group-hover:bg-portfolio-title group-hover:text-white ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">+</span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.46, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
        <div className="border-t border-portfolio-line pb-9 pt-5 min-[761px]:pb-10">
          <ProjectGallery project={project.title} slides={project.slides} tone={tone} />

          <div className="grid grid-cols-[minmax(220px,.72fr)_minmax(0,1.28fr)] gap-[clamp(44px,7vw,84px)] px-1 pt-8 max-[760px]:grid-cols-1 max-[760px]:gap-8">
            <div>
              <p className="m-0 text-xs font-bold uppercase tracking-[.13em] text-portfolio-title">{project.number} · {project.eyebrow}</p>
              <p className="mb-0 mt-3 text-[14px] text-portfolio-text/60">{project.type}<br />Development &amp; interface design</p>
              <div className="mt-7 border-t border-portfolio-line pt-4">
                <p className="mb-4 mt-0 text-[11px] font-bold uppercase tracking-[.14em] text-portfolio-text/45">Stack</p>
                <TechnologyStack items={project.details} project={project.title} />
              </div>
            </div>
            <div>
              <p className="m-0 text-[16px] leading-[1.7] text-portfolio-text/75">{project.story}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a className={darkButton} href={project.liveUrl} target="_blank" rel="noreferrer">View live site ↗</a>
                )}
                {project.githubUrl && (
                  <a className={darkButton} href={project.githubUrl} target="_blank" rel="noreferrer">Source code ↗</a>
                )}
              </div>
            </div>
          </div>
        </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}
