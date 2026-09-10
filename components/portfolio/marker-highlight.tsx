'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export function MarkerHighlight({ children, centered = false, white = false }: { children: ReactNode; centered?: boolean; white?: boolean }) {
	const reduceMotion = useReducedMotion();

	return (
		<span className='relative isolate inline-block px-[0.08em]'>
			<motion.span
				className={`marker-highlight-stroke ${centered ? 'marker-highlight-stroke-centered' : ''} ${white ? 'marker-highlight-stroke-white' : ''}`}
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
