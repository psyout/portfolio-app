'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';

type ScrollUnderlineProps = {
	children: ReactNode;
};

export function ScrollUnderline({ children }: ScrollUnderlineProps) {
	const target = useRef<HTMLSpanElement>(null);
	const reduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target,
		offset: ['start 95%', 'start 62%'],
	});
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 150,
		damping: 24,
		mass: 0.35,
	});

	return (
		<span
		ref={target}
		className='relative inline-block pb-1'>
			{children}
			<motion.span
				className='pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left bg-current'
				style={{ scaleX: reduceMotion ? 1 : scaleX }}
				aria-hidden='true'
			/>
		</span>
	);
}
