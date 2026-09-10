'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export function ExperienceTimelineLine() {
	const reduceMotion = useReducedMotion();

	return (
		<motion.div
			className='absolute bottom-0 left-2.75 top-0 w-px origin-top bg-portfolio-title min-[760px]:left-1/2'
			initial={{ scaleY: reduceMotion ? 1 : 0 }}
			whileInView={{ scaleY: 1 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
			aria-hidden='true'
		/>
	);
}

export function ExperienceCardMotion({ children, index, className }: { children: ReactNode; index: number; className: string }) {
	const reduceMotion = useReducedMotion();

	return (
		<motion.article
			className={className}
			initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: index % 2 ? 36 : -36, y: 18 }}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			viewport={{ once: true, amount: 0.35 }}
			transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}>
			{children}
		</motion.article>
	);
}
