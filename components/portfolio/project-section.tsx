import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/portfolio';
import { MarkerHighlight } from './marker-highlight';
import { LazyProjectGallery } from './lazy-project-gallery';
import { ProjectAccordion } from './project-accordion';
import { TechnologyStack } from './technology-stack';
import { darkButton } from './styles';

type ProjectSectionProps = {
	defaultOpen?: boolean;
	project: Project;
	tone: number;
};

export function ProjectSection({ defaultOpen = false, project, tone }: ProjectSectionProps) {
	const panelId = `${project.id}-details`;

	return (
		<article
			className='scroll-mt-6 px-5 min-[761px]:px-8'
			id={project.id}>
			<h2 className='sr-only'>{project.title}</h2>
			<ProjectAccordion
				defaultOpen={defaultOpen}
				panelId={panelId}
				tone={tone}
				summary={
					<>
						<div className='col-start-1 row-start-1 min-w-0'>
							<span className='mb-1.5 block text-[12px] font-semibold uppercase tracking-[.14em] text-portfolio-title'>
								{project.number} · {project.type}
							</span>
							<span className='title-font block text-[clamp(21px,2.2vw,28px)] font-semibold leading-tight tracking-[-.035em]'>{project.title}</span>
						</div>

						<ul
							className='col-span-2 col-start-1 row-start-2 m-0 flex list-none flex-wrap gap-2 p-0 min-[760px]:col-span-1 min-[760px]:col-start-2 min-[760px]:row-start-1'
							aria-label={`${project.title} technology stack`}>
							{project.details.map((technology) => (
								<li
									className='rounded-full border border-portfolio-mint bg-portfolio-mint/30 px-3 py-1.5 text-[11px] font-semibold text-portfolio-text/75 transition-colors duration-300 even:border-portfolio-lime/70 even:bg-portfolio-lime/18 &:nth-[3n]:border-portfolio-tertiary/55 &:nth-[3n]:bg-portfolio-tertiary/15 group-hover:border-portfolio-turquoise/55'
									key={technology}>
									{technology}
								</li>
							))}
						</ul>
					</>
				}>
				<div className='border-b border-portfolio-line pb-12 pt-2 md:pt-4'>
					<div className='grid gap-5 px-1 pb-8 min-[760px]:grid-cols-[.45fr_1.55fr] min-[760px]:items-start min-[760px]:gap-12'>
						<p className='m-0 border-l-4 border-portfolio-lime py-1 pl-4 text-[13px] font-bold uppercase tracking-[.14em] text-portfolio-title'>Case study · {project.number}</p>
						<p className='m-0 max-w-155 text-[clamp(16px,2vw,18px)] font-regular leading-normal text-portfolio-text/75 text-pretty'>{project.intro}</p>
					</div>

					<div>
						<LazyProjectGallery
							project={project.title}
							slides={project.slides}
							tone={tone}
						/>
					</div>

					<div className='grid grid-cols-[minmax(0,7fr)_minmax(200px,3fr)] gap-x-[clamp(44px,7vw,84px)] px-1 pt-10 max-[760px]:grid-cols-1 max-[760px]:gap-y-8'>
						<div className='max-[760px]:order-1'>
							<p className='m-0 text-[16px] font-bold uppercase tracking-[.14em]'>
								<MarkerHighlight>Overview</MarkerHighlight>
							</p>
							<p className='mb-0 mt-4 text-[16px] leading-normal text-portfolio-text/70 text-pretty'>{project.story}</p>
						</div>
						<div className='max-[760px]:order-2'>
							<p className='m-0 text-[16px] font-bold uppercase tracking-[.14em]'>
								<MarkerHighlight>Stack</MarkerHighlight>
							</p>
							<div className='mt-4 border-t border-portfolio-line pt-5'>
								<TechnologyStack
									items={project.details}
									project={project.title}
								/>
							</div>
						</div>
						<div className='flex flex-wrap gap-3 min-[761px]:col-start-1 min-[761px]:row-start-2 min-[761px]:mt-7 max-[760px]:order-3'>
							<Link
								className={darkButton}
								href={`/projects/${project.id}`}>
								View case study{' '}
								<ArrowUpRight
									size={15}
									aria-hidden='true'
								/>
							</Link>
							{project.liveUrl && (
								<a
									className={darkButton}
									href={project.liveUrl}
									target='_blank'
									rel='noreferrer'>
									View live site{' '}
									<ArrowUpRight
										size={15}
										aria-hidden='true'
									/>
								</a>
							)}
							{project.githubUrl && (
								<a
									className={darkButton}
									href={project.githubUrl}
									target='_blank'
									rel='noreferrer'>
									Source code{' '}
									<ArrowUpRight
										size={15}
										aria-hidden='true'
									/>
								</a>
							)}
						</div>
					</div>
				</div>
			</ProjectAccordion>
		</article>
	);
}
