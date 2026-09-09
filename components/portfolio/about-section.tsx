import Image from 'next/image';
import { Code2, FileDown, Hand, Languages, MessageCircle, Users } from 'lucide-react';
import MotionReveal from '@/components/ui/motion-reveal';
import { ScrollUnderline } from './scroll-underline';
import { featureTitle, sectionEyebrow } from './styles';

const focusAreas = [
	{
		icon: Code2,
		title: 'Design + engineering',
		body: 'I bring design thinking to every layer, from the interface to the systems behind it.',
	},
	{
		icon: Users,
		title: 'Clear communication',
		body: 'Client work and team training taught me to explain trade-offs clearly and keep projects moving.',
	},
	{
		icon: Languages,
		title: 'Bilingual perspective',
		body: 'Fluent in English and Spanish, with experience working across Canada and Chile.',
	},
];

export function AboutSection() {
	return (
		<section
			className='grain scroll-mt-6 overflow-hidden bg-portfolio-pine px-5 py-[clamp(72px,9vw,112px)] text-white min-[761px]:px-8'
			id='about'>
			<div className='mx-auto max-w-240'>
				<MotionReveal>
					<div className='flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-5'>
						<p className={`m-0 text-white ${sectionEyebrow}`}>About me</p>
						<a
							className='button-hover inline-flex min-h-10 items-center gap-2 rounded-full border border-white/30 px-4 text-[13px] font-semibold text-white no-underline hover:border-portfolio-mint hover:bg-portfolio-mint hover:text-portfolio-pine'
							href='https://felipegonzalez.dev/felipe-gonzalez-resume.pdf'
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
						<div className='relative size-50 overflow-hidden rounded-full border-4 border-portfolio-mint bg-white shadow-[0_18px_45px_rgb(0_0_0/24%)]'>
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
						<h2 className={`m-0 text-pretty max-w-150 ${featureTitle}`}>I build complete products, from interface to backend.</h2>
						<p className='mb-0 mt-7 max-w-155 text-[17px] leading-normal text-white/75'>
							I&apos;m a Vancouver-based Full Stack Developer with a background in web design. I care about the moment an idea becomes clear: when the interface feels intuitive,
							the technology gets out of the way, and the product starts being genuinely useful.
						</p>
						<p className='mb-0 mt-5 max-w-155 text-[17px] leading-normal text-white/75'>
							That mix lets me move comfortably between a Figma conversation, a React component, and the API behind it, while keeping the person using the product at the centre.
						</p>
						<a
							className='mt-7 inline-flex items-center gap-2 font-semibold text-portfolio-mint no-underline'
							href='#contact'>
							<ScrollUnderline>Start a conversation</ScrollUnderline>
							<span
								className='inline-flex items-center gap-1'
								aria-hidden='true'>
								<MessageCircle size={18} />
								<Hand size={17} />
							</span>
						</a>
					</MotionReveal>
				</div>

				<div className='mt-14 grid border-y border-white/20 min-[680px]:grid-cols-3'>
					{focusAreas.map(({ icon: Icon, title, body }, index) => (
						<MotionReveal
							className='h-full'
							delay={index * 0.08}
							frame
							key={title}>
							<div className={`group h-full py-8 min-[680px]:px-8 ${index === 0 ? 'min-[680px]:pl-0' : 'border-t border-white/20 min-[680px]:border-l min-[680px]:border-t-0'}`}>
								<Icon
									className='text-portfolio-mint transition-colors duration-200 group-hover:text-portfolio-lime'
									size={27}
									strokeWidth={1.8}
									aria-hidden='true'
								/>
								<p className='mb-0 mt-6 text-[20px] font-semibold leading-tight text-white'>{title}</p>
								<p className='mb-0 mt-3 text-pretty text-[1rem] leading-[1.6] text-white/65'>{body}</p>
							</div>
						</MotionReveal>
					))}
				</div>
			</div>
		</section>
	);
}
