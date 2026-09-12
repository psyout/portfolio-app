import type { IconType } from 'react-icons';
import {
	SiAxios,
	SiCss,
	SiExpress,
	SiFigma,
	SiGit,
	SiHtml5,
	SiJavascript,
	SiMapbox,
	SiMongodb,
	SiMysql,
	SiNextdotjs,
	SiNodedotjs,
	SiPhp,
	SiReact,
	SiSass,
	SiScrumalliance,
	SiSqlite,
	SiTailwindcss,
	SiTypescript,
	SiWoocommerce,
	SiWordpress,
	SiVercel,
} from 'react-icons/si';
import { TbApi, TbBrandAdobeIllustrator, TbBrandAdobePhotoshop, TbBrandAdobeXd } from 'react-icons/tb';

type TechnologyStackProps = {
	items: string[];
	monochrome?: boolean;
	project: string;
};

type TechnologyIcon = {
	icon: IconType;
	color: string;
};

const technologyIcons: Record<string, TechnologyIcon> = {
	React: { icon: SiReact, color: '#149eca' },
	'Next.js': { icon: SiNextdotjs, color: '#111111' },
	TypeScript: { icon: SiTypescript, color: '#3178c6' },
	JavaScript: { icon: SiJavascript, color: '#e8c828' },
	HTML5: { icon: SiHtml5, color: '#e34f26' },
	CSS3: { icon: SiCss, color: '#1572b6' },
	'Tailwind CSS': { icon: SiTailwindcss, color: '#06b6d4' },
	SCSS: { icon: SiSass, color: '#cc6699' },
	Sass: { icon: SiSass, color: '#cc6699' },
	'Node.js': { icon: SiNodedotjs, color: '#339933' },
	Express: { icon: SiExpress, color: '#111111' },
	SQLite: { icon: SiSqlite, color: '#003b57' },
	MySQL: { icon: SiMysql, color: '#4479a1' },
	MongoDB: { icon: SiMongodb, color: '#47a248' },
	Mapbox: { icon: SiMapbox, color: '#111111' },
	'REST API': { icon: TbApi, color: '#e04b2f' },
	Axios: { icon: SiAxios, color: '#5a29e4' },
	Figma: { icon: SiFigma, color: '#f24e1e' },
	Illustrator: { icon: TbBrandAdobeIllustrator, color: '#ff9a00' },
	Photoshop: { icon: TbBrandAdobePhotoshop, color: '#31a8ff' },
	XD: { icon: TbBrandAdobeXd, color: '#ff61f6' },
	Git: { icon: SiGit, color: '#f05032' },
	'Agile / Scrum': { icon: SiScrumalliance, color: '#009fda' },
	WordPress: { icon: SiWordpress, color: '#21759b' },
	WooCommerce: { icon: SiWoocommerce, color: '#96588a' },
	PHP: { icon: SiPhp, color: '#777bb4' },
	Vercel: { icon: SiVercel, color: '#000000' },
};

export function TechnologyStack({ items, monochrome = false, project }: TechnologyStackProps) {
	return (
		<ul
			className='m-0 flex list-none flex-wrap items-center gap-x-6 gap-y-5 p-0'
			aria-label={`${project} technology stack`}>
			{items.map((item) => {
				const technology = technologyIcons[item] ?? technologyIcons['REST API'];
				const Icon = technology.icon;

				return (
					<li
						className={`technology-stack-item grid size-10 place-items-center duration-300 ${
							monochrome
								? 'text-portfolio-title transition-colors hover:text-portfolio-turquoise'
								: 'transition-[filter,transform] hover:-translate-y-0.5 hover:brightness-110'
						}`}
						key={item}
						style={monochrome ? undefined : { color: technology.color }}
						title={item}>
						<Icon
							size={38}
							aria-hidden='true'
						/>
						<span className='sr-only'>{item}</span>
					</li>
				);
			})}
		</ul>
	);
}
