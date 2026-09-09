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
			<div className='mx-auto flex h-17 max-w-240 items-center justify-between'>
				<a
					className='logo-font grid place-items-center text-[1.5rem] font-extrabold no-underline tracking-tight'
					href='#top'
					aria-label='Home'>
					{`[Felipe]`}
				</a>
				<nav
					className='flex items-baseline gap-3 text-[0.9rem] font-semibold uppercase tracking-wider'
					aria-label='Main navigation'>
					<a
						className='leading-none no-underline transition-colors hover:text-portfolio-title max-[520px]:text-[0.9rem] max-[520px]:tracking-normal'
						href='#about'>
						About me
					</a>

					<button
						type='button'
						className='theme-toggle relative isolate grid h-11 w-23 cursor-pointer grid-cols-2 items-center rounded-full border border-portfolio-line bg-portfolio-sea-glass p-1 hover:border-portfolio-title'
						onClick={toggleTheme}
						aria-label='Toggle color theme'
						title='Toggle color theme'>
						<span className='theme-toggle-option theme-toggle-sun'>
							<Sun
								size={18}
								aria-hidden='true'
							/>
						</span>
						<span className='theme-toggle-option theme-toggle-moon'>
							<Moon
								size={18}
								aria-hidden='true'
							/>
						</span>
					</button>
				</nav>
			</div>
		</header>
	);
}
