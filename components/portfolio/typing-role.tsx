'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

const roles = ['I`m Full Stack developer', 'Web developer', 'Web designer', 'a Human'];

export function TypingRole() {
	const reduceMotion = useReducedMotion();
	const [roleIndex, setRoleIndex] = useState(0);
	const [phase, setPhase] = useState<'waiting' | 'message'>('waiting');

	useEffect(() => {
		if (reduceMotion) return;

		const timer = window.setTimeout(
			() => {
				if (phase === 'waiting') {
					setPhase('message');
					return;
				}

				setPhase('waiting');
				setRoleIndex((current) => (current + 1) % roles.length);
			},
			phase === 'waiting' ? 1100 : 1650,
		);

		return () => window.clearTimeout(timer);
	}, [phase, reduceMotion]);

	return (
		<div
			className='flex min-h-12 items-center'
			data-testid='role-message'
			aria-label='Felipe is a full-stack developer, web developer, web designer, and human'>
			<AnimatePresence
				mode='wait'
				initial={false}>
				{reduceMotion || phase === 'message' ? (
					<motion.span
						className='inline-flex rounded-[20px] rounded-bl-md bg-portfolio-mint/45 px-4 py-2.5 text-[13px] font-bold uppercase tracking-[.12em] text-portfolio-pine shadow-sm'
						key={`message-${reduceMotion ? 0 : roleIndex}`}
						initial={reduceMotion ? false : { opacity: 0, scale: 0.82, y: 10, transformOrigin: 'bottom left' }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 25 }}>
						{roles[reduceMotion ? 0 : roleIndex]}
					</motion.span>
				) : (
					<span
						className='inline-flex min-h-10 items-center gap-1.5 rounded-[20px] rounded-bl-md bg-portfolio-mint/55 px-4'
						key={`waiting-${roleIndex}`}
						aria-hidden='true'>
						<span className='message-dot size-1.5 rounded-full bg-portfolio-tertiary' />
						<span className='message-dot size-1.5 rounded-full bg-portfolio-tertiary' />
						<span className='message-dot size-1.5 rounded-full bg-portfolio-tertiary' />
					</span>
				)}
			</AnimatePresence>
		</div>
	);
}
