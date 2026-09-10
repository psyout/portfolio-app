import { SiGithub } from 'react-icons/si';
import Link from 'next/link';
import { siteContent } from '@/data/portfolio';
import { ThemeToggle } from './theme-toggle';

export function SiteHeader() {
	const { contact, navigation } = siteContent;

	return (
		<header className='border-b border-portfolio-line bg-portfolio-background px-5 min-[761px]:px-8'>
			<div className='mx-auto flex h-17 max-w-240 items-center justify-between'>
				<Link
					className='logo-font inline-flex items-center text-[1.7rem] font-extrabold no-underline tracking-wide'
					href='/'
					aria-label={navigation.homeLabel}>
					<span className='text-[var(--lime)]'>[</span>
					<span>Pips</span>
					<span className='text-[var(--lime)]'>]</span>
				</Link>
				<nav
					className='flex items-center gap-3 text-[0.95rem] font-normal min-[521px]:gap-4'
					aria-label='Main navigation'>
					<Link
						className='leading-none no-underline transition-colors hover:text-portfolio-title'
						href='/#about'>
						{navigation.aboutLabel}
					</Link>

					<span
						className='h-7 w-px bg-portfolio-line'
						aria-hidden='true'
					/>

					<ThemeToggle />

					<span
						className='h-7 w-px bg-portfolio-line'
						aria-hidden='true'
					/>

					<Link
						className='grid size-8 place-items-center text-portfolio-text no-underline transition-colors hover:text-portfolio-title'
						href={contact.githubUrl}
						target='_blank'
						rel='noreferrer'
						aria-label='GitHub'>
						<SiGithub
							size={23}
							aria-hidden='true'
						/>
					</Link>
				</nav>
			</div>
		</header>
	);
}
