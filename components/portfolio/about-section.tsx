import Image from 'next/image';
import { Code2, FileDown, Languages, MessageCircle, Users } from 'lucide-react';
import MotionReveal from '@/components/ui/motion-reveal';
import { focusAreas, siteContent, type FocusArea } from '@/data/portfolio';
import { AboutDetails } from './about-details';
import { MarkerHighlight } from './marker-highlight';
import { ScrollUnderline } from './scroll-underline';
import { sectionEyebrow } from './styles';

const focusIcons: Record<FocusArea['icon'], typeof Code2> = {
	code: Code2,
	people: Users,
	languages: Languages,
};

export function AboutSection() {
	const { about } = siteContent;

	return (
		<section
			className='grain scroll-mt-6 overflow-hidden bg-portfolio-pine px-5 py-[clamp(72px,9vw,112px)] text-white min-[761px]:px-8'
			id='about'>
			<div className='mx-auto max-w-240'>
				<MotionReveal>
					<div className='flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-5'>
						<p className={`m-0 text-white ${sectionEyebrow}`}>{about.eyebrow}</p>
						<a
							className='button-hover inline-flex min-h-10 items-center gap-2 rounded-full border border-white/30 px-4 text-[13px] font-semibold text-white no-underline hover:border-portfolio-mint hover:bg-portfolio-mint hover:text-portfolio-pine'
							href={about.resumeUrl}
							target='_blank'
							rel='noreferrer'>
							<FileDown
								size={17}
								strokeWidth={1.9}
								aria-hidden='true'
							/>{' '}
							Resume
						</a>
					</div>
				</MotionReveal>

				<div className='mt-10 grid gap-10 min-[780px]:grid-cols-[176px_1fr] min-[780px]:items-start min-[780px]:gap-[clamp(48px,8vw,96px)]'>
					<MotionReveal
						className='mx-auto min-[780px]:mx-0'
						frame>
						<div className='relative size-50 overflow-hidden rounded-full border-4 border-portfolio-mint bg-white'>
							<Image
								className='origin-[50%_40%] scale-[2.8] object-contain saturate-50'
								src='/static/images/profile-picture.jpg'
								alt='Felipe Gonzalez smiling'
								fill
								sizes='200px'
							/>
						</div>
					</MotionReveal>
					<MotionReveal
						delay={0.08}
						frame>
						<h2 className='m-0 max-w-150 text-pretty text-[clamp(32px,8vw,42px)] font-medium leading-[1.07] tracking-[-.02em] min-[780px]:text-[clamp(36px,4.8vw,52px)]'>
							{about.title}
						</h2>
						<AboutDetails
							intro={about.intro}
							details={about.details}
						/>
						<a
							className='mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-portfolio-mint no-underline'
							href='#contact'>
							<ScrollUnderline>Start a conversation</ScrollUnderline>
							<span
								className='inline-flex items-center gap-1'
								aria-hidden='true'>
								<MessageCircle size={17} />
							</span>
						</a>
					</MotionReveal>
				</div>

				<div className='mt-14 grid border-y border-white/20 min-[680px]:grid-cols-3'>
					{focusAreas.map(({ icon, title, body }, index) => {
						const Icon = focusIcons[icon];

						return (
							<MotionReveal
								className='h-full'
								delay={index * 0.08}
								frame
								key={title}>
								<div
									className={`group h-full py-8 min-[680px]:px-8 ${index === 0 ? 'min-[680px]:pl-0' : 'border-t border-white/20 min-[680px]:border-l min-[680px]:border-t-0'}`}>
									<Icon
										className='text-portfolio-mint transition-colors duration-200 group-hover:text-portfolio-lime'
										size={27}
										strokeWidth={1.8}
										aria-hidden='true'
									/>
									<p className='title-font mb-0 mt-6 text-[20px] font-semibold leading-tight text-white'>
										<MarkerHighlight>{title}</MarkerHighlight>
									</p>
									<p className='mb-0 mt-3 text-pretty text-[1rem] leading-[1.6] text-white/65'>{body}</p>
								</div>
							</MotionReveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
