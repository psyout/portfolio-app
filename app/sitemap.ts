import type { MetadataRoute } from 'next';
import { projects } from '@/data/portfolio';

const baseUrl = 'https://felipegonzalez.dev';

export default function sitemap(): MetadataRoute.Sitemap {
	const homepage: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			changeFrequency: 'monthly',
			priority: 1,
		},
	];

	const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
		url: `${baseUrl}/projects/${project.id}`,
		changeFrequency: 'yearly',
		priority: 0.8,
		images: project.slides.length > 0 ? [`${baseUrl}${project.slides[0].image}`] : undefined,
	}));

	return [...homepage, ...projectPages];
}
