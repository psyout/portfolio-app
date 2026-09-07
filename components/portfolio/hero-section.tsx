import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';

export function HeroSection() {
	return (
		<section
			className='scroll-mt-20 flex min-h-[90svh] items-center px-5 py-10 min-[761px]:px-8'
			id='top'>
			<div className='mx-auto w-full max-w-[960px] border-portfolio-line'>
				<div className='flex flex-wrap items-center justify-between gap-3 text-[13px] text-portfolio-text/65'>
					<span className='font-bold uppercase tracking-[.13em] text-portfolio-title'>Full-stack developer · Web designer</span>
					<span className='inline-flex items-center gap-2'>
						<span
							className='size-2 rounded-full bg-portfolio-title'
							aria-hidden='true'
						/>
						Available for opportunities
					</span>
				</div>

				<div className='mt-[clamp(44px,7vw,72px)] grid gap-10 min-[800px]:grid-cols-[minmax(0,1fr)_280px] min-[800px]:items-end min-[800px]:gap-12'>
					<h1 className='m-0 max-w-[650px] text-[clamp(44px,6vw,68px)] font-bold leading-[.98] tracking-[-.045em]'>I build thoughtful digital products from interface to backend.</h1>

					<div>
						<p className='m-0 text-[17px] leading-[1.65] text-portfolio-text/70 text-pretty'>
							I&apos;m Felipe. I combine product-minded design with practical full-stack development to make complex ideas feel clear and useful.
						</p>
						<p className='mb-0 mt-4 inline-flex items-center gap-2 text-[13px] text-portfolio-text/55'>
							<MapPin
								size={16}
								strokeWidth={1.8}
								aria-hidden='true'
							/>{' '}
							Vancouver, BC
						</p>
					</div>
				</div>

				<div className='mt-9 flex flex-wrap gap-2.5 border-portfolio-line pt-6'>
					<a
						className='button-hover group inline-flex min-h-11 items-center gap-3 rounded-full bg-portfolio-button-bg px-5 text-[14px] font-semibold text-portfolio-button-text no-underline hover:bg-portfolio-title'
						href='#work'>
						View projects
						<ArrowDown
							className='transition-transform duration-300 group-hover:translate-y-0.5'
							size={17}
							aria-hidden='true'
						/>
					</a>
					<a
						className='button-hover group inline-flex min-h-11 items-center gap-3 rounded-full border border-portfolio-line px-5 text-[14px] font-semibold no-underline hover:border-portfolio-title hover:bg-portfolio-title hover:text-white'
						href='#contact'>
						Let&apos;s work together
						<ArrowUpRight
							className='transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
							size={17}
							aria-hidden='true'
						/>
					</a>
				</div>
			</div>
		</section>
	);
}
