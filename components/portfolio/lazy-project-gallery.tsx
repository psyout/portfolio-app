'use client';

import dynamic from 'next/dynamic';
import type { ProjectSlide } from '@/data/portfolio';

const ProjectGallery = dynamic(() => import('./project-gallery').then((module) => module.ProjectGallery), {
	loading: () => <div className='image-skeleton mx-auto h-[clamp(340px,47vw,540px)] w-full max-w-280 rounded-[18px]' aria-hidden='true' />,
});

export function LazyProjectGallery({ project, slides, tone }: { project: string; slides: ProjectSlide[]; tone: number }) {
	return (
		<ProjectGallery
			project={project}
			slides={slides}
			tone={tone}
		/>
	);
}
