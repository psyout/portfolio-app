/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next';
import './globals.css';

const title = 'Felipe Gonzalez | Full-Stack Developer';
const description = 'Portfolio of Felipe Gonzalez, a Full Stack Web Developer and Web Designer based in Vancouver, BC.';

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
	},
	twitter: {
		card: 'summary',
		title,
		description,
	},
	robots: { index: true, follow: true },
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
					href='https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;600;700&family=Titillium+Web:wght@800&family=Roboto+Slab:wght@400;500;600;700&family=Ubuntu:wght@400;500;700&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
