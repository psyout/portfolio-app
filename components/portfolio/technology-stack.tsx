import type { IconType } from 'react-icons';
import {
	SiAxios,
	SiExpress,
	SiFigma,
	SiHtml5,
	SiJavascript,
	SiMapbox,
	SiMongodb,
	SiMysql,
	SiNextdotjs,
	SiNodedotjs,
	SiReact,
	SiSass,
	SiScrumalliance,
	SiSqlite,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

type TechnologyStackProps = {
	items: string[];
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
	'Agile / Scrum': { icon: SiScrumalliance, color: '#009fda' },
};

export function TechnologyStack({ items, project }: TechnologyStackProps) {
	return (
		<ul
			className='m-0 flex list-none flex-wrap items-center gap-x-5 gap-y-4 p-0'
			aria-label={`${project} technology stack`}>
			{items.map((item) => {
				const technology = technologyIcons[item] ?? technologyIcons['REST API'];
				const Icon = technology.icon;

				return (
					<li
						className='grid size-8 place-items-center transition-[filter] duration-200 hover:brightness-110'
						key={item}
						style={{ color: technology.color }}
						title={item}>
						<Icon
							size={32}
							aria-hidden='true'
						/>
						<span className='sr-only'>{item}</span>
					</li>
				);
			})}
		</ul>
	);
}
