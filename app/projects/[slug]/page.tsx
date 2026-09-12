import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { ProjectGallery } from '@/components/portfolio/project-gallery';
import { SiteFooter } from '@/components/portfolio/site-footer';
import { SiteHeader } from '@/components/portfolio/site-header';
import { TechnologyStack } from '@/components/portfolio/technology-stack';
import { HighlightedText } from '@/components/portfolio/highlighted-text';
import { darkButton } from '@/components/portfolio/styles';
import { projects } from '@/data/portfolio';

type ProjectPageProps = {
	params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
	return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
	const { slug } = await params;
	const project = projects.find((item) => item.id === slug);

	if (!project) return {};

	return {
		title: `${project.title} | Felipe Gonzalez`,
		description: project.intro,
		alternates: { canonical: `/projects/${project.id}` },
		openGraph: {
			title: `${project.title} | Felipe Gonzalez`,
			description: project.intro,
			url: `/projects/${project.id}`,
			type: 'article',
		},
	};
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { slug } = await params;
	const projectIndex = projects.findIndex((item) => item.id === slug);
	const project = projects[projectIndex];

	if (!project) notFound();

	return (
		<>
			<SiteHeader />
			<main>
				<article className='px-5 py-[clamp(56px,8vw,96px)] min-[761px]:px-8'>
					<div className='mx-auto max-w-240'>
						<Link
							className='button-hover inline-flex items-center gap-2 text-[14px] font-semibold text-portfolio-title no-underline'
							href='/#work'>
							<ArrowLeft
								size={16}
								aria-hidden='true'
							/>
							All projects
						</Link>

						<header className='grid gap-6 pb-10 pt-10 min-[760px]:grid-cols-[.65fr_1.35fr] min-[760px]:items-end'>
							<div>
								{project.status && (
									<span className='mb-2 inline-flex items-center gap-2 rounded-full border border-portfolio-mint bg-portfolio-mint/20 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.12em] text-portfolio-title'>
										<span
											className='relative flex size-2'
											aria-hidden='true'>
											<span className='absolute inline-flex size-full animate-ping rounded-full bg-portfolio-turquoise opacity-60' />
											<span className='relative inline-flex size-2 rounded-full bg-portfolio-turquoise' />
										</span>
										{project.status}
									</span>
								)}
								<p className='m-0 text-[12px] font-semibold uppercase tracking-[.14em] text-portfolio-title'>
									{project.number} · {project.type}
								</p>
								<h1 className='title-font mb-0 mt-3 text-[clamp(38px,8vw,72px)] font-semibold leading-[.95] tracking-[-.05em]'>
									{project.title}
								</h1>
							</div>
							<p className='m-0 max-w-155 text-pretty text-[clamp(18px,2.2vw,22px)] leading-normal text-portfolio-text/75'>{project.intro}</p>
						</header>

						<ProjectGallery
							project={project.title}
							slides={project.slides}
							tone={projectIndex}
						/>

						<div className='grid grid-cols-[minmax(0,7fr)_minmax(200px,3fr)] gap-x-[clamp(44px,7vw,84px)] pt-12 max-[760px]:grid-cols-1 max-[760px]:gap-y-8'>
							<div>
								<h2 className='m-0 text-[16px] font-bold uppercase tracking-[.14em]'>Overview</h2>
								<p className='mb-0 mt-4 text-pretty text-[17px] leading-[1.7] text-portfolio-text/70'>
									<HighlightedText
										highlights={project.highlights}
										text={project.story}
									/>
								</p>
							</div>
							<div>
								<h2 className='m-0 text-[16px] font-bold uppercase tracking-[.14em]'>Stack</h2>
								<div className='mt-4 border-t border-portfolio-line pt-5'>
									<TechnologyStack
										items={project.details}
										project={project.title}
									/>
								</div>
							</div>
						</div>

						<div className='mt-9 flex flex-wrap gap-3'>
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
				</article>
			</main>
			<SiteFooter />
		</>
	);
}
