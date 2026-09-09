'use client';

import Image from 'next/image';
import { useState, type ReactNode } from 'react';
import { ChevronDown, Code2, FileDown, Hand, Languages, MessageCircle, Users } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import MotionReveal from '@/components/ui/motion-reveal';
import { ScrollUnderline } from './scroll-underline';
import { sectionEyebrow } from './styles';

const focusAreas = [
	{
		icon: Code2,
		title: 'Design + development',
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

function MarkerHighlight({ children }: { children: ReactNode }) {
	const reduceMotion = useReducedMotion();

	return (
		<span className='relative isolate inline-block px-[0.08em]'>
			<motion.span
				className='marker-highlight-stroke'
				initial={reduceMotion ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0.25 }}
				whileInView={{ scaleX: 1, opacity: 1 }}
				viewport={{ once: true, amount: 0.9 }}
				transition={{ duration: reduceMotion ? 0 : 0.72, delay: reduceMotion ? 0 : 0.16, ease: [0.22, 1, 0.36, 1] }}
				aria-hidden='true'
			/>
			<span className='relative z-1'>{children}</span>
		</span>
	);
}

export function AboutSection() {
	const [detailsOpen, setDetailsOpen] = useState(false);

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
						<h2 className='m-0 max-w-150 text-pretty text-[clamp(32px,8vw,42px)] font-medium leading-[1.07] tracking-[-.02em] min-[780px]:text-[clamp(36px,4.8vw,52px)]'>
							Developer first, curious about the whole product.
						</h2>
						<p className='mb-0 mt-6 max-w-155 text-[16px] leading-[1.6] text-white/75 min-[780px]:mt-7 min-[780px]:text-[17px]'>
							I&apos;m Felipe, a Full Stack Developer based in Vancouver. I started in web design, and that background still shapes how I build. I care about clean code,
							thoughtful interfaces, and understanding the real problem before reaching for a solution.{' '}
							<button
								className='button-hover inline-flex no-underline cursor-pointer items-center gap-1 border-0 bg-transparent p-0 pb-px align-baseline text-[14px] font-medium text-portfolio-mint hover:border-white hover:text-white'
								type='button'
								onClick={() => setDetailsOpen((open) => !open)}
								aria-expanded={detailsOpen}
								aria-controls='about-details'>
								{detailsOpen ? 'Less' : 'More'}
								<ChevronDown
									className={`transition-transform duration-300 ${detailsOpen ? 'rotate-180' : ''}`}
									size={14}
									aria-hidden='true'
								/>
							</button>
						</p>
						<div
							className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${detailsOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
							id='about-details'
							aria-hidden={!detailsOpen}>
							<div className='overflow-hidden'>
								<p className='mb-0 mt-4 max-w-155 text-[16px] leading-[1.6] text-white/75 min-[780px]:mt-5 min-[780px]:text-[17px]'>
									I like building things all the way through, from the first conversation to the interface and the systems behind it. I don&apos;t pretend to have every
									answer, but I ask good questions, learn quickly, and stay with the details until the product feels solid and useful.
								</p>
							</div>
						</div>
						<a
							className='mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-portfolio-mint no-underline'
							href='#contact'>
							<ScrollUnderline>Start a conversation</ScrollUnderline>
							<span
								className='inline-flex items-center gap-1'
								aria-hidden='true'>
								<MessageCircle size={17} />
								<Hand size={16} />
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
								<p className='mb-0 mt-6 text-[20px] font-semibold leading-tight text-white'>
									<MarkerHighlight>{title}</MarkerHighlight>
								</p>
								<p className='mb-0 mt-3 text-pretty text-[1rem] leading-[1.6] text-white/65'>{body}</p>
							</div>
						</MotionReveal>
					))}
				</div>
			</div>
		</section>
	);
}
