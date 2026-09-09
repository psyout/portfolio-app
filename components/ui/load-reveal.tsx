'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

type LoadRevealProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
	frame?: boolean;
};

export function LoadReveal({ children, className, delay = 0, frame = false }: LoadRevealProps) {
	const reduceMotion = useReducedMotion();

	return (
		<motion.div
			className={className}
			initial={
				reduceMotion
					? { opacity: 1 }
					: frame
						? { opacity: 0, y: 34, clipPath: 'inset(10% 0% 0% 0%)' }
						: { opacity: 0, y: 18 }
			}
			animate={frame ? { opacity: 1, y: 0, clipPath: 'inset(-10% -10% -10% -10%)' } : { opacity: 1, y: 0 }}
			transition={{
				duration: reduceMotion ? 0 : frame ? 0.78 : 0.58,
				delay: reduceMotion ? 0 : delay,
				ease: [0.22, 1, 0.36, 1],
			}}>
			{children}
		</motion.div>
	);
}
