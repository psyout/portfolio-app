'use client';

import { useRef } from 'react';
import { MonitorSmartphone, PenTool, ServerCog, type LucideIcon } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import type { Capability } from '@/data/portfolio';
import MotionReveal from '@/components/ui/motion-reveal';
import { sectionEyebrow, sectionTitle } from './styles';

const capabilityIcons = [MonitorSmartphone, ServerCog, PenTool];

type CapabilitiesSectionProps = {
	capabilities: Capability[];
};

function CapabilityCard({ capability, Icon }: { capability: Capability; Icon: LucideIcon }) {
	const cardRef = useRef<HTMLElement>(null);
	const reduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: cardRef,
		offset: ['start 88%', 'center 48%'],
	});
	const fillScale = useTransform(scrollYProgress, [0, 1], [1, 22]);
	const iconScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

	return (
		<article
			className='capability-card relative isolate h-full overflow-hidden rounded-[22px] border border-portfolio-line bg-portfolio-surface p-6 transition-colors duration-200 hover:bg-portfolio-lime/20'
			ref={cardRef}>
			<motion.span
				className='capability-scroll-fill pointer-events-none absolute left-6 top-6 z-0 size-12 rounded-full bg-portfolio-sea-glass transition-colors duration-200'
				style={{ scale: reduceMotion ? 1 : fillScale }}
				aria-hidden='true'
			/>
			<motion.span
				className='capability-icon relative z-1 grid size-12 place-items-center rounded-full bg-portfolio-sea-glass text-portfolio-title transition-colors duration-200'
				style={{ scale: reduceMotion ? 1 : iconScale }}>
				<Icon
					size={30}
					strokeWidth={1.8}
					aria-hidden='true'
				/>
			</motion.span>
			<div className='relative z-1'>
				<h3 className='mb-0 mt-8 text-[20px] font-semibold'>{capability.title}</h3>
				<p className='mb-0 mt-3 text-[1rem] leading-[1.65] text-portfolio-text/65'>{capability.body}</p>
			</div>
		</article>
	);
}

export function CapabilitiesSection({ capabilities }: CapabilitiesSectionProps) {
	return (
		<section
			className='px-5 py-[clamp(72px,9vw,104px)] min-[761px]:px-8'
			aria-labelledby='capabilities-title'>
			<div className='mx-auto max-w-240'>
				<MotionReveal>
					<div className='mb-5 flex items-end justify-between gap-5'>
						<div>
							<p className={`m-0 ${sectionEyebrow}`}>Expertise</p>
							<h2
								className={`mb-0 mt-1 ${sectionTitle}`}
								id='capabilities-title'>
								Capabilities
							</h2>
						</div>
					</div>
				</MotionReveal>
				<div className='grid gap-4 min-[760px]:grid-cols-3'>
					{capabilities.map((capability, index) => {
						const Icon = capabilityIcons[index] ?? PenTool;

						return (
							<MotionReveal
								className='h-full'
								delay={index * 0.08}
								frame
								key={capability.number}>
								<CapabilityCard
									capability={capability}
									Icon={Icon}
								/>
							</MotionReveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
