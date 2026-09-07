'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

type MotionRevealProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
	frame?: boolean;
};

export default function MotionReveal({ children, className, delay = 0, frame = false }: MotionRevealProps) {
	const reduceMotion = useReducedMotion();

	return (
		<motion.div
			className={className}
			initial={
				reduceMotion
					? { opacity: 1 }
					: frame
						? { opacity: 0, y: 48, clipPath: 'inset(12% 0% 0% 0%)' }
						: { opacity: 0, y: 28 }
			}
			whileInView={
				frame
					? { opacity: 1, y: 0, clipPath: 'inset(-20% -20% -20% -20%)' }
					: { opacity: 1, y: 0 }
			}
			viewport={{ once: true, amount: 0.14, margin: '0px 0px -7% 0px' }}
			transition={{
				duration: reduceMotion ? 0 : frame ? 0.82 : 0.65,
				delay: reduceMotion ? 0 : delay,
				ease: [0.22, 1, 0.36, 1]
			}}>
			{children}
		</motion.div>
	);
}
