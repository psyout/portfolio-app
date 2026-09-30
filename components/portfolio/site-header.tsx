'use client';

import { SiGithub } from 'react-icons/si';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';
import { siteContent } from '@/data/portfolio';
import { ThemeToggle } from './theme-toggle';

export function SiteHeader() {
	const { contact, navigation } = siteContent;
	const [menuOpen, setMenuOpen] = useState(false);
	const reduceMotion = useReducedMotion();

	useEffect(() => {
		if (!menuOpen) return;

		function closeOnEscape(event: KeyboardEvent) {
			if (event.key === 'Escape') setMenuOpen(false);
		}

		window.addEventListener('keydown', closeOnEscape);
		return () => window.removeEventListener('keydown', closeOnEscape);
	}, [menuOpen]);

	function closeMenu() {
		setMenuOpen(false);
	}

	return (
		<header className='relative z-50 border-b border-portfolio-line bg-portfolio-background px-5 min-[761px]:px-8'>
			<div className='mx-auto flex h-17 max-w-240 items-center justify-between'>
				<Link
					className='logo-font inline-flex items-center text-[1.7rem] font-extrabold no-underline tracking-wide'
					href='/'
					aria-label={navigation.homeLabel}>
					<span className='text-portfolio-lime'>[</span>
					<span>Pips</span>
					<span className='text-portfolio-lime'>]</span>
				</Link>
				<nav
					className='hidden items-center gap-4 text-[0.95rem] font-normal min-[761px]:flex'
					aria-label='Main navigation'>
					<div className='flex h-7 items-center gap-4 border-r border-portfolio-line pr-4'>
						<Link
							className='leading-none no-underline transition-colors hover:text-portfolio-title border-r border-portfolio-line pr-4'
							href='/#about'>
							{navigation.aboutLabel}
						</Link>
						<Link
							className='leading-none no-underline transition-colors hover:text-portfolio-title'
							href='/#work'>
							{navigation.projectsLabel}
						</Link>
					</div>

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

				<div className='flex items-center gap-3 min-[761px]:hidden'>
					<ThemeToggle id='theme-switch-mobile' />
					<span
						className='h-7 w-px bg-portfolio-line'
						aria-hidden='true'
					/>
					<button
						className='grid size-11 place-items-center rounded-full border border-portfolio-line text-portfolio-title transition-colors hover:bg-portfolio-sea-glass'
						type='button'
						aria-controls='mobile-navigation'
						aria-expanded={menuOpen}
						aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
						onClick={() => setMenuOpen((open) => !open)}>
						<AnimatePresence
							initial={false}
							mode='popLayout'>
							<motion.span
								className='grid place-items-center'
								key={menuOpen ? 'close' : 'menu'}
								initial={reduceMotion ? false : { opacity: 0, rotate: -45, scale: 0.65 }}
								animate={{ opacity: 1, rotate: 0, scale: 1 }}
								exit={reduceMotion ? undefined : { opacity: 0, rotate: 45, scale: 0.65 }}
								transition={{ duration: reduceMotion ? 0 : 0.18, ease: 'easeOut' }}>
								{menuOpen ? (
									<X
										size={22}
										aria-hidden='true'
									/>
								) : (
									<Menu
										size={22}
										aria-hidden='true'
									/>
								)}
							</motion.span>
						</AnimatePresence>
					</button>
				</div>
			</div>

			<AnimatePresence initial={false}>
				{menuOpen && (
					<motion.div
						className='overflow-hidden min-[761px]:hidden'
						initial={reduceMotion ? false : { height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
						transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}>
						<nav
							className='mx-auto max-w-240 border-t border-portfolio-line py-3'
							id='mobile-navigation'
							aria-label='Mobile navigation'>
							<motion.div
								initial={reduceMotion ? false : { opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: reduceMotion ? 0 : 0.25, delay: reduceMotion ? 0 : 0.05 }}>
								<Link
									className='flex min-h-12 items-center rounded-xl px-3 text-[1.05rem] font-medium no-underline transition-colors hover:bg-portfolio-sea-glass hover:text-portfolio-title'
									href='/#about'
									onClick={closeMenu}>
									{navigation.aboutLabel}
								</Link>
							</motion.div>
							<motion.div
								initial={reduceMotion ? false : { opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: reduceMotion ? 0 : 0.25, delay: reduceMotion ? 0 : 0.1 }}>
								<Link
									className='flex min-h-12 items-center rounded-xl px-3 text-[1.05rem] font-medium no-underline transition-colors hover:bg-portfolio-sea-glass hover:text-portfolio-title'
									href='/#work'
									onClick={closeMenu}>
									{navigation.projectsLabel}
								</Link>
							</motion.div>
							<motion.div
								className='mt-2 border-t border-portfolio-line pt-2'
								initial={reduceMotion ? false : { opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: reduceMotion ? 0 : 0.25, delay: reduceMotion ? 0 : 0.15 }}>
								<Link
									className='flex min-h-12 items-center gap-2 rounded-xl px-3 font-medium no-underline transition-colors hover:bg-portfolio-sea-glass hover:text-portfolio-title'
									href={contact.githubUrl}
									target='_blank'
									rel='noreferrer'
									onClick={closeMenu}>
									<SiGithub
										size={20}
										aria-hidden='true'
									/>
									GitHub
								</Link>
							</motion.div>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
