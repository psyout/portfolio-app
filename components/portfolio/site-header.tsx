'use client';

import { useSyncExternalStore } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export function SiteHeader() {
	const darkMode = useSyncExternalStore(
		(onStoreChange) => {
			const observer = new MutationObserver(onStoreChange);

			observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
			return () => observer.disconnect();
		},
		() => document.documentElement.dataset.theme === 'dark',
		() => false,
	);

	function toggleTheme(checked: boolean) {
		const nextTheme = checked ? 'dark' : 'light';

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
					className='flex items-center gap-3 text-[0.95rem] font-normal min-[521px]:gap-4'
					aria-label='Main navigation'>
					<a
						className='leading-none no-underline transition-colors hover:text-portfolio-title'
						href='#about'>
						About me
					</a>

					<span
						className='h-7 w-px bg-portfolio-line'
						aria-hidden='true'
					/>

					<div className='inline-flex items-center gap-2'>
						<Switch
							id='theme-switch'
							checked={darkMode}
							onCheckedChange={toggleTheme}
							className='border-portfolio-line data-checked:bg-portfolio-title data-unchecked:bg-portfolio-sea-glass'
							aria-label='Toggle color theme'
						/>
						<Label
							className='grid size-5 cursor-pointer place-items-center text-portfolio-title'
							htmlFor='theme-switch'>
							<span className='sr-only'>Toggle color theme</span>
							{darkMode ? (
								<MoonIcon
									className='size-4'
									aria-hidden='true'
								/>
							) : (
								<SunIcon
									className='size-4'
									aria-hidden='true'
								/>
							)}
						</Label>
					</div>

					<span
						className='h-7 w-px bg-portfolio-line'
						aria-hidden='true'
					/>

					<a
						className='grid size-8 place-items-center text-portfolio-text no-underline transition-colors hover:text-portfolio-title'
						href='https://github.com/psyout'
						target='_blank'
						rel='noreferrer'
						aria-label='GitHub'>
						<SiGithub
							size={23}
							aria-hidden='true'
						/>
					</a>
				</nav>
			</div>
		</header>
	);
}
