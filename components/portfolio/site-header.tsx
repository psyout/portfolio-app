export function SiteHeader() {
	return (
		<header className='sticky top-0 z-10 border-b border-portfolio-line bg-portfolio-background/95 px-5 backdrop-blur min-[761px]:px-8'>
			<div className='mx-auto flex h-[68px] max-w-[960px] items-center justify-between'>
				<a
					className='gridplace-items-center text-[1.8rem] font-extrabold no-underline '
					href='#top'
					aria-label='Felipe Gonzalez home'>
					{`{Felipe}`}
				</a>
				<nav
					className='flex items-center gap-5 font-semibold text-[0.9rem]'
					aria-label='Main navigation'>
					<a
						className='no-underline transition-colors hover:text-portfolio-title'
						href='#work'>
						Work
					</a>
					<a
						className='no-underline transition-colors hover:text-portfolio-title max-[520px]:hidden'
						href='#about'>
						About
					</a>
					<a
						className='button-hover rounded-full bg-portfolio-button-bg px-4 py-[10px] font-semibold text-portfolio-button-text no-underline hover:bg-portfolio-title'
						href='#contact'>
						Let&apos;s talk
					</a>
				</nav>
			</div>
		</header>
	);
}
