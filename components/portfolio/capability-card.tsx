'use client';

import { useRef, useState } from 'react';
import { ChevronDown, MonitorSmartphone, PenTool, ServerCog, type LucideIcon } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import type { Capability } from '@/data/portfolio';
import { TechnologyStack } from './technology-stack';

const capabilityIcons: LucideIcon[] = [MonitorSmartphone, ServerCog, PenTool];

const skillPillStyles = ['bg-portfolio-pine text-white', 'bg-portfolio-mint text-portfolio-pine', 'bg-portfolio-turquoise text-white'];

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
	const { scrollYProgress } = useScroll({
		target: cardRef,
		offset: ['start 88%', 'center 48%'],
	});
	const fillScale = useTransform(scrollYProgress, [0, 1], [1, 22]);
	const iconScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
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
			<motion.span
				className='capability-icon absolute left-6 top-6 z-1 grid size-12 place-items-center overflow-hidden rounded-full bg-portfolio-sea-glass text-portfolio-title transition-colors duration-200'
				initial={false}
				style={{ scale: reduceMotion ? 1 : iconScale }}>
				<Icon
					size={30}
					strokeWidth={1.8}
					aria-hidden='true'
				/>
				<motion.span
					className='capability-icon-scroll-contrast absolute inset-0 grid place-items-center rounded-full bg-portfolio-pine text-white'
					style={{ opacity: reduceMotion ? 0 : iconContrast }}
					aria-hidden='true'>
					<Icon
						size={30}
						strokeWidth={1.8}
					/>
				</motion.span>
			</motion.span>
			<div className='relative z-1 flex min-[760px]:min-h-85.5 flex-col p-6'>
				<div className='mt-12'>
					<h3 className='mb-0 mt-8 text-[20px] font-semibold'>{capability.title}</h3>
					<p className='mb-0 mt-3 text-pretty text-[1rem] leading-[1.65] text-portfolio-text/65'>{capability.body}</p>
				</div>
				<button
					className='mt-7 flex w-full items-center justify-end gap-2 border-t border-portfolio-line pt-4 text-left text-[12px] font-semibold uppercase tracking-[0.14em] text-portfolio-title min-[760px]:mt-auto'
					type='button'
					aria-controls={`capability-details-${capability.number}`}
					aria-expanded={isOpen}
					onClick={() => setIsOpen((open) => !open)}>
					<span>{isOpen ? '' : 'View toolkit'}</span>
					<span className='grid size-8 place-items-center rounded-full bg-portfolio-pine text-white'>
						<ChevronDown
							className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
							size={18}
							aria-hidden='true'
						/>
					</span>
				</button>
			</div>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						animate={{ height: 'auto', opacity: 1 }}
						className='relative z-1 overflow-hidden border-t border-portfolio-line bg-portfolio-surface/75'
						exit={{ height: 0, opacity: 0 }}
						id={`capability-details-${capability.number}`}
						initial={{ height: 0, opacity: 0 }}
						transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}>
						<div className='p-6'>
							<p className='m-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-portfolio-text/60'>Tools</p>
							<div className='mt-5'>
								<TechnologyStack
									items={tools}
									monochrome
									project={capability.title}
								/>
							</div>
							<ul
								className='m-0 mt-6 flex list-none flex-wrap gap-2 p-0'
								aria-label={`${capability.title} skills`}>
								{skills.map((skill, skillIndex) => (
									<li
										className={`rounded-full px-4 py-2 text-[13px] md:px-3 md:py-2 md:text-[11px] font-semibold leading-none ${skillPillStyles[skillIndex % skillPillStyles.length]}`}
										key={skill}>
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
