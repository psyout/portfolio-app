import { Send, BriefcaseBusiness } from 'lucide-react';
import { LoadReveal } from '@/components/ui/load-reveal';
import { LocationMarker } from './location-marker';
import { TypingRole } from './typing-role';

export function HeroSection() {
	return (
		<section
			className='hero-section relative flex min-h-[calc(100svh-68px)] scroll-mt-20 items-center overflow-hidden px-5 py-7 min-[600px]:py-10 min-[761px]:px-8 min-[880px]:py-16'
			id='top'>
			<div className='relative mx-auto w-full max-w-240'>
				<div className='hero-grid grid gap-6 min-[600px]:gap-8 min-[880px]:grid-cols-[minmax(0,1fr)_300px] min-[880px]:gap-12 min-[1040px]:grid-cols-[minmax(0,1fr)_330px] min-[1040px]:gap-16'>
					<div>
						<LoadReveal frame>
							<h1 className='hero-title m-0 max-w-190 text-[clamp(38px,12vw,52px)] font-bold leading-[.9] tracking-[-.058em] min-[761px]:text-[clamp(52px,7.4vw,88px)]'>
								<span className='block'>Thoughtful products.</span>
								<span className='mt-1.5 block text-portfolio-title min-[761px]:mt-2'>Built all the way through.</span>
							</h1>
						</LoadReveal>

						<LoadReveal delay={0.2}>
							<div className='hero-actions mt-6 flex flex-wrap gap-2.5 min-[761px]:mt-10'>
								<a
									className='button-hover group inline-flex min-h-11 items-center gap-2.5 rounded-full bg-portfolio-pine px-4 text-[13px] font-semibold text-white no-underline hover:bg-portfolio-turquoise min-[420px]:gap-3 min-[420px]:px-5 min-[420px]:text-[14px]'
									href='#work'>
									View projects
									<BriefcaseBusiness
										size={17}
										aria-hidden='true'
									/>
								</a>
								<a
									className='button-hover group inline-flex min-h-11 items-center gap-2.5 rounded-full border border-portfolio-line bg-portfolio-surface/60 px-4 text-[13px] font-semibold no-underline hover:border-portfolio-title hover:bg-portfolio-title hover:text-white min-[420px]:gap-3 min-[420px]:px-5 min-[420px]:text-[14px]'
									href='#contact'>
									Contact me
									<Send
										size={17}
										aria-hidden='true'
									/>
								</a>
							</div>
						</LoadReveal>
					</div>

					<LoadReveal
						className='min-w-0'
						delay={0.14}
						frame>
						<aside className='hero-aside border-t border-portfolio-pine/20 pt-4 min-[600px]:pt-5 min-[880px]:border-l min-[880px]:border-t-0 min-[880px]:pl-8 min-[880px]:pt-1'>
							<TypingRole />
							<p className='hero-summary mb-0 mt-3 text-pretty text-[1rem] leading-normal text-portfolio-text/72 min-[600px]:mt-4 min-[600px]:text-[17px] min-[600px]:leading-[1.65]'>
								I&apos;m Felipe. I combine product-minded design with practical full-stack development to make complex ideas feel clear and useful.
							</p>

							<div className='hero-location mt-4 border-portfolio-pine/15 min-[880px]:mt-7 min-[880px]:pt-6'>
								<LocationMarker />
							</div>
						</aside>
					</LoadReveal>
				</div>
			</div>
		</section>
	);
}
