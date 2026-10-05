/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next';
import Script from 'next/script';
import { siteContent } from '@/data/portfolio';
import './globals.css';

const { title, description } = siteContent.metadata;
const googleTagManagerId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-THNG8G88';

const themeScript = `
	(() => {
		try {
			const savedTheme = localStorage.getItem('portfolio-theme');
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
			document.documentElement.dataset.theme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : systemTheme;
		} catch {}
	})();
`;

export const metadata: Metadata = {
	metadataBase: new URL('https://felipegonzalez.dev'),
	title,
	description,
	applicationName: 'Felipe Gonzalez Portfolio',
	authors: [{ name: 'Felipe Gonzalez', url: 'https://felipegonzalez.dev' }],
	creator: 'Felipe Gonzalez',
	keywords: ['Felipe Gonzalez', 'full-stack developer', 'web developer', 'React developer', 'Next.js developer', 'Vancouver'],
	alternates: { canonical: '/' },
	icons: { icon: '/favicon.ico', shortcut: '/favicon.ico' },
	openGraph: {
		title,
		description,
		url: '/',
		siteName: 'Felipe Gonzalez Portfolio',
		locale: 'en_CA',
		type: 'website',
		images: [
			{
				url: '/static/images/profile-picture.jpg',
				width: 1200,
				height: 1200,
				alt: 'Felipe Gonzalez',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		images: ['/static/images/profile-picture.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
		},
	},
};

const personSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Felipe Gonzalez',
	url: 'https://felipegonzalez.dev',
	image: 'https://felipegonzalez.dev/static/images/profile-picture.jpg',
	jobTitle: 'Full-Stack Developer',
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Vancouver',
		addressRegion: 'BC',
		addressCountry: 'CA',
	},
	sameAs: ['https://github.com/psyout', 'https://www.linkedin.com/in/felipegonzalezcare/'],
	knowsAbout: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Web Design'],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning>
			<head>
				<Script
					id='google-tag-manager'
					strategy='beforeInteractive'
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','${googleTagManagerId}');`,
					}}
				/>
				<script dangerouslySetInnerHTML={{ __html: themeScript }} />
				<link
					rel='preconnect'
					href='https://fonts.googleapis.com'
				/>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;600;700&family=Titillium+Web:wght@800;900&family=Ubuntu:wght@400;500;700&family=Roboto+Slab:wght@400;500;600;700&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body>
				<noscript>
					<iframe
						src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
						title='Google Tag Manager'
						height='0'
						width='0'
						style={{ display: 'none', visibility: 'hidden' }}
					/>
				</noscript>
				{children}
				<Script
					id='person-schema'
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
				/>
			</body>
		</html>
	);
}
