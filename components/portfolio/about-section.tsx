import Image from 'next/image';
import { ArrowUpRight, FileDown } from 'lucide-react';
import { featureTitle, sectionEyebrow } from './styles';

const focusAreas = [
	{ number: '01', label: 'Design eye + engineering depth' },
	{ number: '02', label: 'English + Spanish' },
	{ number: '03', label: 'Clear, human collaboration' },
];

export function AboutSection() {
	return (
		<section
			className='grain scroll-mt-6 overflow-hidden bg-portfolio-pine px-5 py-[clamp(72px,9vw,112px)] text-white min-[761px]:px-8'
			id='about'>
			<div className='mx-auto max-w-240'>
				<div className='flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-5'>
					<p className={`m-0 !text-portfolio-mint ${sectionEyebrow}`}>About Felipe</p>
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

				<div className='mt-10 grid gap-10 min-[780px]:grid-cols-[176px_1fr] min-[780px]:items-start min-[780px]:gap-[clamp(48px,8vw,96px)]'>
					<div className='relative mx-auto size-[200px] overflow-hidden rounded-full border-4 border-portfolio-mint bg-white shadow-[0_18px_45px_rgb(0_0_0_/_24%)] min-[780px]:mx-0 min-[780px]:size-[176px]'>
						<Image
							className='origin-[50%_40%] scale-[2] object-cover bg-center'
							src='/static/images/profile-picture.jpg'
							alt='Felipe Gonzalez smiling'
							fill
							sizes='200px'
						/>
					</div>
					<div>
						<h2 className={`m-0 text-pretty max-w-[600px] ${featureTitle}`}>I bring a designer&apos;s curiosity to an engineer&apos;s toolkit.</h2>
						<p className='mb-0 mt-7 max-w-[620px] text-[17px] leading-[1.75] text-white/75'>
							I&apos;m a Vancouver-based full-stack developer with a background in web design. I care about the moment an idea becomes clear: when the interface feels intuitive,
							the technology gets out of the way, and the product starts being genuinely useful.
						</p>
						<p className='mb-0 mt-5 max-w-[620px] text-[17px] leading-[1.75] text-white/75'>
							That mix lets me move comfortably between a Figma conversation, a React component, and the API behind it—while keeping the person using the product at the centre.
						</p>
						<a
							className='mt-7 inline-flex items-center gap-2 font-semibold text-portfolio-mint underline decoration-portfolio-turquoise decoration-2 underline-offset-[6px]'
							href='#contact'>
							Start a conversation{' '}
							<ArrowUpRight
								size={18}
								aria-hidden='true'
							/>
						</a>
					</div>
				</div>

				<div className='mt-12 grid border-t border-white/20 pt-5 min-[560px]:grid-cols-3'>
					{focusAreas.map(({ number, label }, index) => (
						<div
							className={`flex items-center gap-4 py-3 min-[560px]:px-5 ${index === 0 ? 'min-[560px]:pl-0' : 'border-t border-white/20 min-[560px]:border-l min-[560px]:border-t-0'}`}
							key={number}>
							<span className='text-[11px] font-bold text-portfolio-turquoise'>{number}</span>
							<span className='text-[14px] font-semibold text-white/80'>{label}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
