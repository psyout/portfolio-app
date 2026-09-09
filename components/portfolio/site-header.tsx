'use client';

import { Moon, Sun } from 'lucide-react';

export function SiteHeader() {
	function toggleTheme() {
		const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';

		document.documentElement.dataset.theme = nextTheme;
		localStorage.setItem('portfolio-theme', nextTheme);
	}

	return (
		<header className='border-b border-portfolio-line bg-portfolio-background px-5 min-[761px]:px-8'>
			<div className='mx-auto flex h-17 max-w-240 items-center tracking-tight justify-between'>
				<a
					className='logo-font grid place-items-center text-[1.5rem] font-extrabold no-underline'
					href='#top'
					aria-label='Felipe Gonzalez home'>
					{`[Felipe]`}
				</a>
				<nav
					className='flex items-center gap-5 font-semibold text-[0.8rem] uppercase'
					aria-label='Main navigation'>
					<a
						className='no-underline transition-colors hover:text-portfolio-title max-[520px]:hidden'
						href='#about'>
						About
					</a>
					<a
						className='no-underline transition-colors hover:text-portfolio-title'
						href='#work'>
						Work
					</a>
					<button
						type='button'
						className='button-hover grid size-10 cursor-pointer place-items-center rounded-full border border-portfolio-line bg-portfolio-surface text-portfolio-text hover:border-portfolio-title hover:bg-portfolio-sea-glass'
						onClick={toggleTheme}
						aria-label='Toggle color theme'
						title='Toggle color theme'>
						<Moon className='theme-icon-light' size={19} aria-hidden='true' />
						<Sun className='theme-icon-dark' size={19} aria-hidden='true' />
					</button>
				</nav>
			</div>
		</header>
	);
}
