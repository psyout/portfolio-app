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
	status?: string;
	intro: string;
	story: string;
	description: string;
	highlights?: string[];
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

export type FocusArea = {
	icon: 'code' | 'people' | 'languages';
	title: string;
	body: string;
};

export type Experience = {
	period: string;
	role: string;
	company: string;
	place: string;
	body: string;
	tone: string;
	whiteHighlight?: boolean;
};

export const siteContent = {
	metadata: {
		title: 'Felipe Gonzalez | Full-Stack Developer',
		description: 'Portfolio of Felipe Gonzalez, a Full Stack Web Developer and Web Designer based in Vancouver, BC.',
	},
	navigation: {
		homeLabel: 'Home',
		aboutLabel: 'About me',
	},
	hero: {
		title: 'Thoughtful products.',
		titleAccent: 'Built all the way through.',
		summary: "I'm Felipe. I combine product-minded design with practical full-stack development to make complex ideas feel clear and useful.",
		location: 'Vancouver, BC',
		roles: ['Full Stack Developer', 'Web Developer', 'CSS Enthusiast', 'a Human'],
	},
	about: {
		eyebrow: 'About me',
		title: 'Developer first, curious about the whole product.',
		intro: "I'm a Full Stack Developer based in Vancouver. I started in web design, and that background still shapes how I build. I care about clean code, thoughtful interfaces, and understanding the real problem before reaching for a solution.",
		details: "I like building things all the way through, from the first conversation to the interface and the systems behind it. I don't pretend to have every answer, but I ask good questions, learn quickly, and stay with the details until the product feels solid and useful.",
		resumeUrl: 'https://felipegonzalez.dev/felipe-gonzalez-resume.pdf',
	},
	experience: {
		eyebrow: 'Experience',
		title: 'The path to Full Stack',
		summary: 'I build useful products with solid code, clear thinking, and good communication.',
	},
	work: {
		eyebrow: 'Selected work',
		title: 'Featured projects',
	},
	capabilities: {
		eyebrow: 'Expertise',
		title: 'Capabilities',
	},
	contact: {
		eyebrow: 'Contact',
		title: 'Have a problem worth solving?',
		summary: "I'm open to full-time developer roles, contract work, and thoughtful collaborations.",
		email: 'hello@felipegonzalez.dev',
		linkedinUrl: 'https://www.linkedin.com/in/felipegonzalezcare/',
		githubUrl: 'https://github.com/psyout',
	},
	footer: {
		copyright: '© 2026 Felipe Gonzalez',
		note: 'Designed and developed with ❤️ in Vancouver, BC',
	},
} as const;

export const projects: Project[] = [
	{
		id: 'puretide',
		number: '',
		title: 'Puretide',
		eyebrow: 'Privacy-first commerce',
		type: 'E-commerce Web App',
		status: 'Active Development',
		intro: 'Puretide is an online shopping application focused on privacy and designed to provide a complete customer experience without analytics scripts, third party trackers, or unnecessary data collection.',
		story: 'Built from scratch with the Next.js, TypeScript, and Tailwind CSS, Puretide features a responsive storefront and a persistent shopping cart.',
		details: ['Next.js', 'TypeScript', 'Tailwind CSS'],
		description:
			'Behind the interface, secure server side APIs connect Zoho for inventory management and Wrike for order tracking, task management, and fulfillment. Automated transactional emails and CI/CD workflows support reliable communication, efficient operations, and consistent deployments.',
		highlights: ['Next.js', 'TypeScript', 'Tailwind CSS', 'APIs', 'Zoho', 'CI/CD workflows'],
		liveUrl: 'https://puretide.ca',
		githubUrl: 'https://github.com/psyout/puretide',
		slides: [
			{ image: '/static/images/puretide-products.webp', label: 'Product collection' },
			{ image: '/static/images/puretide-product-item.webp', label: 'Product details' },
			{ image: '/static/images/puretide-mobile1.png', label: 'Mobile storefront', fit: 'contain' },
			{ image: '/static/images/puretide-mobile2.png', label: 'Mobile checkout', fit: 'contain' },
		],
	},
	{
		id: 'vansippy',
		number: '',
		title: 'Vansippy',
		status: 'Active Development',
		eyebrow: 'Location-based discovery',
		type: 'Happy hour Finder Web App',
		intro: 'Vansippy is a full stack web application that helps people discover happy hour deals across Vancouver. Browser geolocation and Mapbox provide relevant nearby results in real time, making it easier to find the right place without searching through multiple websites.',
		story: 'The application combines a responsive React and Material UI interface with a Node.js, Express, and MongoDB backend. A RESTful API manages venue information, location data, and search results, while middleware handles validation, errors, and communication between the client and server.',
		details: ['React', 'Node.js', 'MongoDB'],
		description:
			'The project uses GitHub for version control and an automated deployment pipeline to Hostinger. This setup supports consistent releases, faster updates, and a reliable path from development to production.',
		highlights: ['React', 'Node.js', 'MongoDB', 'Mapbox', 'RESTful API', 'GitHub', 'Express'],
		liveUrl: 'https://vansippy.com/',
		githubUrl: 'https://github.com/psyout/capstone-client',
		slides: [
			{ image: '/static/images/vansippy-location.webp', label: 'Map experience' },
			{ image: '/static/images/vansippy-mobile1.png', label: 'Mobile results', fit: 'contain' },
			{ image: '/static/images/vansippy-mobile2.png', label: 'Deal details', fit: 'contain' },
		],
	},
	{
		id: 'andes-builders',
		number: '',
		title: 'Andes Builders',
		eyebrow: 'Construction and renovation',
		type: 'WordPress website',
		intro: 'A polished service-business website for a residential construction company, designed to establish trust and turn project interest into enquiries.',
		story: 'I installed and customized the WordPress theme, using custom CSS and PHP to create responsive layouts, clear service positioning, and direct conversion paths. Elementor keeps content editing flexible, while WooCommerce provides room for future service and product needs.',
		details: ['WordPress', 'PHP'],
		description: '',
		highlights: ['WordPress', 'PHP', 'WooCommerce', 'custom CSS'],
		liveUrl: 'https://andesbuilders.com/',
		githubUrl: '',
		slides: [
			{ image: '/static/images/andes-builders-craftsmanship.webp', label: 'Craftsmanship' },
			{ image: '/static/images/andes-builders-renovation.webp', label: 'Interior renovation' },
			{ image: '/static/images/andes-builders-project.webp', label: 'Completed project' },
		],
	},
	{
		id: 'instock',
		number: '',
		title: 'InStock',
		eyebrow: 'Inventory operations',
		type: 'Management system',
		intro: 'A modern inventory and warehouse management system developed collaboratively using an Agile workflow and a scalable full-stack architecture.',
		story: 'The product supports core CRUD workflows, dynamic search, responsive tables, and real-time validation. React and Sass power the interface while Node, Express, MySQL, and Knex handle the API and data layer.',
		details: ['React', 'Express', 'MySQL'],
		description: '',
		highlights: ['React', 'Express', 'MySQL', 'Knex', 'Node', 'Sass', 'API'],
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
		number: '',
		title: 'Transportes Moran',
		eyebrow: 'Service business platform',
		type: 'Corporate website',
		intro: 'A focused digital presence for an aggregate transport business, designed to make its services clear and help customers start a conversation quickly.',
		story: 'The responsive single-page experience uses reusable React components and modular SCSS. I worked across interface design and front-end development, from early Figma decisions through production implementation.',
		details: ['React', 'SCSS', 'JavaScript', 'Figma'],
		description: '',
		highlights: ['React', 'SCSS', 'JavaScript', 'Figma'],
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
		number: '',
		title: 'BrainFlix',
		eyebrow: 'Video platform',
		type: 'Full-stack React app',
		intro: 'A responsive video platform built around dynamic routing, API-driven content, reusable interface components, and familiar viewing interactions.',
		story: 'React Router handles video selection while Axios connects the interface to a Node and Express REST API. The component structure keeps video, upload, and comment experiences modular and maintainable.',
		details: ['React', 'REST API', 'Node.js', 'Sass'],
		description: '',
		highlights: ['React Router', 'REST API', 'Node', 'Express', 'Axios'],
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
		number: '',
		title: 'Bandsite',
		eyebrow: 'Music and community',
		type: 'Interactive band website',
		intro: 'A responsive website for an independent band, combining editorial content, photography, tour dates, and a community comment experience.',
		story: 'Semantic HTML, BEM-style Sass, and JavaScript create a lightweight front end. Axios connects the comments interface to an Express API, allowing visitors to read and add content dynamically.',
		details: ['HTML5', 'JavaScript', 'Axios', 'Sass'],
		description: '',
		highlights: ['JavaScript', 'Axios', 'BEM-style Sass', 'Express'],
		liveUrl: 'https://felipegonzalez.dev/bandsite/',
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
		body: 'Responsive interfaces and reusable component systems designed to stay fast, clear, and consistent across devices.',
	},
	{
		number: '02',
		title: 'Backend Development',
		body: 'Reliable APIs and data flows that connect products to business tools, automate workflows, and support production growth.',
	},
	{
		number: '03',
		title: 'Interface Design',
		body: 'Practical product experiences that turn complex requirements into clear user journeys and scalable visual systems.',
	},
];

export const focusAreas: FocusArea[] = [
	{
		icon: 'code',
		title: 'Design + development',
		body: 'I bring design thinking to every layer, from the interface to the systems behind it.',
	},
	{
		icon: 'people',
		title: 'Clear communication',
		body: 'Client work and team training taught me to explain trade-offs clearly and keep projects moving.',
	},
	{
		icon: 'languages',
		title: 'Bilingual perspective',
		body: 'Fluent in English and Spanish, with experience working across Canada and Chile.',
	},
];

export const experience: Experience[] = [
	{
		period: 'Apr 2023 — Now',
		role: 'Full Stack Developer',
		company: 'Self-employed',
		place: 'Vancouver · Remote',
		body: 'Taking web products from early requirements to production across Next.js, React, Node.js, databases, integrations, deployment, and ongoing maintenance.',
		tone: 'bg-portfolio-pine text-white',
	},
	{
		period: 'Jan 2024 — Mar 2026',
		role: 'Operations & Team Trainer',
		company: '1-800-GOT-JUNK?',
		place: 'Metro Vancouver',
		body: 'Built another side of product work: calm communication, customer empathy, training, and practical problem-solving in fast-moving situations.',
		tone: 'bg-portfolio-lime text-portfolio-pine',
		whiteHighlight: true,
	},
	{
		period: 'Apr 2022 — Jan 2023',
		role: 'Front End Developer',
		company: 'NotCo',
		place: 'Remote · Chile',
		body: 'Maintained production React applications, built reusable UI, and collaborated across code reviews, testing, and CI/CD workflows.',
		tone: 'bg-portfolio-turquoise text-white',
	},
	{
		period: 'May 2020 — Apr 2022',
		role: 'Web Designer',
		company: 'The Cut Fashion School',
		place: 'Remote · Canada',
		body: 'Created detailed website concepts and brand-aligned digital work while supporting marketing and web teams through a rebrand.',
		tone: 'bg-portfolio-surface text-portfolio-text',
	},
	{
		period: 'Jan 2018 — May 2020',
		role: 'Graphic Designer',
		company: 'Natura Cosmetics',
		place: 'Remote · Chile',
		body: 'Translated campaign ideas into digital and print systems, landing page assets, Figma handoffs, and reusable brand guidelines.',
		tone: 'bg-portfolio-mint text-portfolio-pine',
		whiteHighlight: true,
	},
	{
		period: 'Sep 2016 — Jan 2018',
		role: 'Frontend Developer',
		company: 'Cencosud Paris',
		place: 'Chile',
		body: 'Developed responsive websites and internal React applications, improving performance, mobile engagement, and everyday usability.',
		tone: 'bg-portfolio-surface text-portfolio-text',
	},
];
