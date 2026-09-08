import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { LocationMarker } from './location-marker';
import { TypingRole } from './typing-role';

export function HeroSection() {
	return (
		<section
			className='relative flex min-h-[90svh] scroll-mt-20 items-center overflow-hidden px-5 py-12 min-[761px]:px-8 min-[900px]:py-16'
			id='top'>
			<div className='relative mx-auto w-full max-w-240'>
				<div className='flex min-h-16 items-center border-portfolio-pine/15 pb-4 text-[13px] text-portfolio-text/65'>
					<TypingRole />
				</div>

				<div className='grid gap-10 pt-[clamp(32px,7vw,42px)] min-[880px]:grid-cols-[minmax(0,1fr)_300px] min-[880px]:gap-12 min-[1040px]:grid-cols-[minmax(0,1fr)_330px] min-[1040px]:gap-16'>
					<div>
						<h1 className='m-0 max-w-[760px] text-[clamp(52px,7.4vw,88px)] font-bold leading-[.9] tracking-[-.058em]'>
							<span className='block'>Thoughtful products.</span>
							<span className='mt-2 block text-portfolio-title'>Built all the way through.</span>
						</h1>

						<div className='mt-10 flex flex-wrap gap-2.5'>
							<a
								className='button-hover group inline-flex min-h-11 items-center gap-3 rounded-full bg-portfolio-pine px-5 text-[14px] font-semibold text-white no-underline hover:bg-portfolio-turquoise'
								href='#work'>
								View projects
								<ArrowDown
									size={17}
									aria-hidden='true'
								/>
							</a>
							<a
								className='button-hover group inline-flex min-h-11 items-center gap-3 rounded-full border border-portfolio-pine/25 bg-white/60 px-5 text-[14px] font-semibold no-underline hover:border-portfolio-title hover:bg-portfolio-title hover:text-white'
								href='#contact'>
								Let&apos;s work together
								<ArrowUpRight
									size={17}
									aria-hidden='true'
								/>
							</a>
						</div>
					</div>

					<aside className='border-t border-portfolio-pine/20 pt-6 min-[880px]:border-l min-[880px]:border-t-0 min-[880px]:pl-8 min-[880px]:pt-1'>
						<p className='m-0 text-[11px] font-bold uppercase tracking-[.16em] text-portfolio-title'>Design × engineering</p>
						<p className='mb-0 mt-4 text-[17px] leading-[1.65] text-portfolio-text/72 text-pretty'>
							I&apos;m Felipe. I combine product-minded design with practical full-stack development to make complex ideas feel clear and useful.
						</p>

						<div className='mt-7 border-portfolio-pine/15 pt-6'>
							<LocationMarker />
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
}
