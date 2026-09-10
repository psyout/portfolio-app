'use client';

import { useSyncExternalStore } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export function ThemeToggle() {
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
		<div className='inline-flex items-center gap-2'>
			<Switch
				id='theme-switch'
				checked={darkMode}
				onCheckedChange={toggleTheme}
				className='border-portfolio-line data-checked:bg-portfolio-title data-unchecked:bg-portfolio-sea-glass'
				aria-label='Toggle color theme'
			/>
			<Label className='grid size-5 cursor-pointer place-items-center text-portfolio-title' htmlFor='theme-switch'>
				<span className='sr-only'>Toggle color theme</span>
				{darkMode ? <MoonIcon className='size-4' aria-hidden='true' /> : <SunIcon className='size-4' aria-hidden='true' />}
			</Label>
		</div>
	);
}
