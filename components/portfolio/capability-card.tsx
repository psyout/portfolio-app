'use client';

import { useRef } from 'react';
import { MonitorSmartphone, PenTool, ServerCog, type LucideIcon } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import type { Capability } from '@/data/portfolio';

const capabilityIcons: LucideIcon[] = [MonitorSmartphone, ServerCog, PenTool];

export function CapabilityCard({ capability, index }: { capability: Capability; index: number }) {
	const cardRef = useRef<HTMLElement>(null);
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
			className='capability-card relative isolate h-full overflow-hidden shadow-md shadow-accent rounded-[22px] border border-portfolio-line bg-portfolio-surface p-6 transition-colors duration-200 hover:bg-portfolio-lime/20'
			ref={cardRef}>
			<motion.span
				className='capability-scroll-fill pointer-events-none absolute left-6 top-6 z-0 size-12 rounded-full bg-portfolio-sea-glass transition-colors duration-200'
				style={{ scale: reduceMotion ? 1 : fillScale }}
				aria-hidden='true'
			/>
			<motion.span
				className='capability-icon relative z-1 grid size-12 place-items-center overflow-hidden rounded-full bg-portfolio-sea-glass text-portfolio-title transition-colors duration-200'
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
			<div className='relative z-1'>
				<h3 className='mb-0 mt-8 text-[20px] font-semibold'>{capability.title}</h3>
				<p className='mb-0 mt-3 text-[1rem] leading-[1.65] text-portfolio-text/65'>{capability.body}</p>
			</div>
		</article>
	);
}
