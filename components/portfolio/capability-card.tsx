'use client';

import { useRef, useState } from 'react';
import { ArrowRight, MonitorSmartphone, PenTool, ServerCog, type LucideIcon } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import type { Capability } from '@/data/portfolio';
import { TechnologyStack } from './technology-stack';

const capabilityIcons: LucideIcon[] = [MonitorSmartphone, ServerCog, PenTool];

type CapabilityCardProps = {
	capability: Capability;
	index: number;
	skills: string[];
	tools: string[];
};

export function CapabilityCard({ capability, index, skills, tools }: CapabilityCardProps) {
	const cardRef = useRef<HTMLElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const reduceMotion = useReducedMotion();
	const visibleTools = tools.slice(0, 5);
	const additionalTools = tools.slice(5);
	const { scrollYProgress } = useScroll({
		target: cardRef,
		offset: ['start 88%', 'center 48%'],
	});
	const fillScale = useTransform(scrollYProgress, [0, 1], [1, 22]);
	const iconScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
	const iconContrast = useTransform(scrollYProgress, [0, 0.82, 1], [0, 0, 1]);
	const Icon = capabilityIcons[index] ?? PenTool;

	return (
		<article
			className='capability-card relative isolate overflow-hidden rounded-[22px] border border-portfolio-line bg-portfolio-surface shadow-md shadow-accent transition-colors duration-200 hover:bg-portfolio-lime/20'
			ref={cardRef}>
			<motion.span
				className='capability-scroll-fill pointer-events-none absolute left-6 top-6 z-0 size-12 rounded-full bg-portfolio-sea-glass transition-colors duration-200'
				style={{ scale: reduceMotion ? 1 : fillScale }}
				aria-hidden='true'
			/>
			<div className='relative z-1 flex min-[760px]:min-h-[390px] flex-col p-6'>
				<div className='flex items-center gap-4'>
					<motion.span
						className='capability-icon relative grid size-12 shrink-0 place-items-center overflow-hidden rounded-full bg-portfolio-sea-glass text-portfolio-title transition-colors duration-200'
						initial={false}
						style={{ scale: reduceMotion ? 1 : iconScale }}>
						<Icon
							size={28}
							strokeWidth={1.8}
							aria-hidden='true'
						/>
						<motion.span
							className='capability-icon-scroll-contrast absolute inset-0 grid place-items-center rounded-full bg-portfolio-pine text-white'
							style={{ opacity: reduceMotion ? 0 : iconContrast }}
							aria-hidden='true'>
							<Icon
								size={28}
								strokeWidth={1.8}
							/>
						</motion.span>
					</motion.span>
					<h3 className='m-0 text-[20px] font-semibold leading-tight'>{capability.title}</h3>
				</div>

				<p className='mb-0 mt-5 text-pretty text-[0.96rem] leading-[1.6] text-portfolio-text/65'>{capability.body}</p>

				<div className='mt-7 border-t border-portfolio-line pt-5 min-[760px]:mt-auto'>
					<p className='m-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-portfolio-text/60'>Tools</p>
					<div className='mt-4'>
						<TechnologyStack
							compact
							items={visibleTools}
							monochrome
							project={capability.title}
							tooltips
						/>
					</div>
					<button
						className='mt-5 inline-flex items-center gap-2 border-0 bg-transparent p-0 text-[13px] font-semibold text-portfolio-title transition-colors duration-200 hover:text-portfolio-turquoise'
						type='button'
						aria-controls={`capability-details-${capability.number}`}
						aria-expanded={isOpen}
						onClick={() => setIsOpen((open) => !open)}>
						<span>{isOpen ? 'Hide full toolkit' : 'View full toolkit'}</span>
						<ArrowRight
							className={`transition-transform duration-300 ${isOpen ? '-rotate-90' : ''}`}
							size={16}
							aria-hidden='true'
						/>
					</button>
				</div>
			</div>

			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						animate={{ height: 'auto', opacity: 1 }}
						className='relative z-1 overflow-hidden border-t border-portfolio-line bg-portfolio-surface/75'
						exit={{ height: 0, opacity: 0 }}
						id={`capability-details-${capability.number}`}
						initial={{ height: 0, opacity: 0 }}
						transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}>
						<div className='p-6'>
							{additionalTools.length > 0 && (
								<div className='mb-6'>
									<p className='m-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-portfolio-text/60'>More tools</p>
									<div className='mt-4'>
										<TechnologyStack
											compact
											items={additionalTools}
											monochrome
											project={`${capability.title} additional tools`}
											tooltips
										/>
									</div>
								</div>
							)}
							<p className='m-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-portfolio-text/60'>Strengths</p>
							<ul
								className='m-0 mt-4 grid list-none grid-cols-2 gap-x-4 gap-y-3 p-0'
								aria-label={`${capability.title} strengths`}>
								{skills.map((skill) => (
									<li
										className='flex items-start gap-2 text-[12px] font-medium leading-snug text-portfolio-text/75'
										key={skill}>
										<span className='mt-[0.38em] size-1.5 shrink-0 rounded-full bg-portfolio-turquoise' aria-hidden='true' />
										{skill}
									</li>
								))}
							</ul>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</article>
	);
}
