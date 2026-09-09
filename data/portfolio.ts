export type ProjectSlide = {
	image: string;
	label: string;
	fit?: 'cover' | 'contain';
};

export type Project = {
	id: string;
	number: string;
	title: string;
	eyebrow: string;
	type: string;
	intro: string;
	story: string;
	details: string[];
	liveUrl: string;
	githubUrl: string;
	slides: ProjectSlide[];
};

export type Capability = {
	number: string;
	title: string;
	body: string;
};

export type AboutValue = {
	icon: 'code' | 'people' | 'languages';
	title: string;
	body: string;
};

export const projects: Project[] = [
	{
		id: 'andes-builders',
		number: '07',
		title: 'Andes Builders',
		eyebrow: 'Construction and renovation',
		type: 'WordPress website',
		intro: 'A polished service-business website for a residential construction company, designed to establish trust and turn project interest into enquiries.',
		story: 'Built with WordPress and Elementor, the site pairs strong project photography with clear service positioning, an approachable four-step process, responsive layouts, and direct conversion paths. WooCommerce provides a flexible foundation for future service and product needs.',
		details: ['WordPress', 'PHP'],
		liveUrl: 'https://andesbuilders.com/',
		githubUrl: '',
		slides: [
			{ image: '/static/images/andes-builders-craftsmanship.webp', label: 'Craftsmanship' },
			{ image: '/static/images/andes-builders-renovation.webp', label: 'Interior renovation' },
			{ image: '/static/images/andes-builders-project.jpg', label: 'Completed project' },
		],
	},
	{
		id: 'puretide',
		number: '01',
		title: 'Puretide',
		eyebrow: 'Privacy-first commerce',
		type: 'E-commerce Web App',
		intro: 'A privacy-focused online store built to deliver a complete shopping experience without analytics scripts, third-party trackers, or unnecessary data collection.',
		story: 'Built with the Next.js App Router and TypeScript, Puretide combines a responsive storefront with a persistent client-side cart, SQLite-backed orders, Google Sheets inventory, and automated transactional email.',
		details: ['Next.js', 'TypeScript', 'Tailwind CSS'],
		liveUrl: 'https://puretide.ca',
		githubUrl: '',
		slides: [
			{ image: '/static/images/puretide-products.jpg', label: 'Product collection' },
			{ image: '/static/images/puretide-product-item.jpg', label: 'Product details' },
			{ image: '/static/images/puretide-mobile1.png', label: 'Mobile storefront', fit: 'contain' },
			{ image: '/static/images/puretide-mobile2.png', label: 'Mobile checkout', fit: 'contain' },
		],
	},
	{
		id: 'vansippy',
		number: '02',
		title: 'Vansippy',
		eyebrow: 'Location-based discovery',
		type: 'Happy hour Finder Web App',
		intro: 'A full-stack web application that helps people discover curated happy-hour deals at restaurants and bars around Vancouver.',
		story: 'Vansippy pairs a React and Material UI interface with a Node, Express, and MongoDB backend. Browser geolocation and Mapbox turn curated venue data into useful, nearby results in real time.',
		details: ['React', 'Node.js', 'MongoDB', 'Mapbox'],
		liveUrl: 'https://vansippy.com/',
		githubUrl: 'https://github.com/psyout/capstone-client',
		slides: [
			{ image: '/static/images/vansippy-card.jpg', label: 'Venue discovery' },
			{ image: '/static/images/vansippy-location.jpg', label: 'Map experience' },
			{ image: '/static/images/vansippy-mobile1.png', label: 'Mobile results', fit: 'contain' },
			{ image: '/static/images/vansippy-mobile2.png', label: 'Deal details', fit: 'contain' },
		],
	},
	{
		id: 'instock',
		number: '03',
		title: 'InStock',
		eyebrow: 'Inventory operations',
		type: 'Management system',
		intro: 'A modern inventory and warehouse management system developed collaboratively using an Agile workflow and a scalable full-stack architecture.',
		story: 'The product supports core CRUD workflows, dynamic search, responsive tables, and real-time validation. React and Sass power the interface while Node, Express, MySQL, and Knex handle the API and data layer.',
		details: ['React', 'Express', 'MySQL'],
		liveUrl: '',
		githubUrl: 'https://github.com/mannyv123/instock-client',
		slides: [
			{ image: '/static/images/instock-card.jpg', label: 'Inventory overview' },
			{ image: '/static/images/instock-mockup.jpg', label: 'Warehouse workflow' },
			{ image: '/static/images/instock-mockup-edit.jpg', label: 'Edit inventory' },
			{ image: '/static/images/instock-mockup-delete.jpg', label: 'Delete confirmation' },
		],
	},
	{
		id: 'transportes-moran',
		number: '04',
		title: 'Transportes Moran',
		eyebrow: 'Service business platform',
		type: 'Corporate website',
		intro: 'A focused digital presence for an aggregate transport business, designed to make its services clear and help customers start a conversation quickly.',
		story: 'The responsive single-page experience uses reusable React components and modular SCSS. I worked across interface design and front-end development, from early Figma decisions through production implementation.',
		details: ['React', 'SCSS', 'JavaScript', 'Figma'],
		liveUrl: 'https://www.transportesmoran.cl/',
		githubUrl: 'https://github.com/psyout/transportes-moran',
		slides: [
			{ image: '/static/images/transportes-moran-card.jpg', label: 'Homepage' },
			{ image: '/static/images/transportes-moran-servicios.jpg', label: 'Services' },
			{ image: '/static/images/transportes-moran-laptop-mockup.png', label: 'Responsive layout', fit: 'contain' },
			{ image: '/static/images/transportes-moran-laptop-mockup2.png', label: 'Project presentation', fit: 'contain' },
		],
	},
	{
		id: 'brainflix',
		number: '05',
		title: 'BrainFlix',
		eyebrow: 'Video platform',
		type: 'Full-stack React app',
		intro: 'A responsive video platform built around dynamic routing, API-driven content, reusable interface components, and familiar viewing interactions.',
		story: 'React Router handles video selection while Axios connects the interface to a Node and Express REST API. The component structure keeps video, upload, and comment experiences modular and maintainable.',
		details: ['React', 'REST API', 'Node.js', 'Sass'],
		liveUrl: '',
		githubUrl: 'https://github.com/psyout/felipe-gonzalez-brainflix',
		slides: [
			{ image: '/static/images/brainflix.jpg', label: 'Video player' },
			{ image: '/static/images/brainflix-add-comment.jpg', label: 'Comments' },
			{ image: '/static/images/brainflix-server.jpg', label: 'API server' },
			{ image: '/static/images/brainflix-upload.jpg', label: 'Video upload' },
		],
	},
	{
		id: 'bandsite',
		number: '06',
		title: 'Bandsite',
		eyebrow: 'Music and community',
		type: 'Interactive band website',
		intro: 'A responsive website for an independent band, combining editorial content, photography, tour dates, and a community comment experience.',
		story: 'Semantic HTML, BEM-style Sass, and JavaScript create a lightweight front end. Axios connects the comments interface to an Express API, allowing visitors to read and add content dynamically.',
		details: ['HTML5', 'JavaScript', 'Axios', 'Sass'],
		liveUrl: 'https://felipegonzalez.io/bandsite/',
		githubUrl: '',
		slides: [
			{ image: '/static/images/bandsite.jpg', label: 'Band story' },
			{ image: '/static/images/bandsite-shows.jpg', label: 'Tour dates' },
		],
	},
];

export const capabilities: Capability[] = [
	{
		number: '01',
		title: 'Frontend Development',
		body: 'React, Next.js, TypeScript, and responsive interfaces that stay clear and accessible across devices.',
	},
	{
		number: '02',
		title: 'Backend Development',
		body: 'Node.js, Express, REST APIs, databases, and third-party integrations that support real product workflows.',
	},
	{
		number: '03',
		title: 'Interface Design',
		body: 'Figma, prototypes, design systems, and practical UI decisions shaped by a background in web design.',
	},
];

export const aboutValues: AboutValue[] = [
	{
		icon: 'code',
		title: 'Built to last',
		body: 'Clean, maintainable code and deliberate technical choices—not quick patches.',
	},
	{
		icon: 'people',
		title: 'Made for people',
		body: 'Accessible interfaces and clear flows that reduce friction for real users.',
	},
	{
		icon: 'languages',
		title: 'Easy collaboration',
		body: 'Bilingual in English and Spanish, comfortable across design and development.',
	},
];
