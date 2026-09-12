'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import MotionReveal from '@/components/ui/motion-reveal';

type ProjectAccordionProps = {
	children: ReactNode;
	defaultOpen?: boolean;
	panelId: string;
	summary: ReactNode;
	tone: number;
};

export function ProjectAccordion({ children, defaultOpen = false, panelId, summary, tone }: ProjectAccordionProps) {
	const [isOpen, setIsOpen] = useState(defaultOpen);
	const [hasInteracted, setHasInteracted] = useState(false);
	const reduceMotion = useReducedMotion();

	return (
		<div className={`mx-auto max-w-240 ${tone === 0 ? 'border-t border-portfolio-line' : ''} ${isOpen ? '' : 'border-b border-portfolio-line'}`}>
			<MotionReveal frame>
				<button
					className='group grid w-full cursor-pointer grid-cols-[1fr_auto] items-center gap-x-5 gap-y-7 border-0 bg-transparent px-1 py-8 text-left text-portfolio-text min-[760px]:grid-cols-[minmax(180px,.8fr)_minmax(260px,1fr)_auto] min-[760px]:gap-y-4 min-[760px]:py-7'
					type='button'
					aria-expanded={isOpen}
					aria-controls={panelId}
					onClick={() => {
						setHasInteracted(true);
						setIsOpen((open) => !open);
					}}>
					{summary}
					<span
						className='col-start-2 row-start-1 justify-self-end text-portfolio-title min-[760px]:col-start-3'
						aria-hidden='true'>
						<span className='grid size-9 place-items-center rounded-full border border-portfolio-line bg-portfolio-surface/70 text-[22px] font-light leading-none transition-[background-color,border-color,color] duration-200 group-hover:border-portfolio-turquoise group-hover:bg-portfolio-turquoise group-hover:text-white'>
							{isOpen ? '−' : '+'}
						</span>
					</span>
				</button>
			</MotionReveal>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						id={panelId}
						initial={defaultOpen && !hasInteracted ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: reduceMotion ? 0 : 0.46, ease: [0.22, 1, 0.36, 1] }}
						className='overflow-hidden'>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
