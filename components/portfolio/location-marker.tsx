'use client';

import { MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export function LocationMarker() {
	const reduceMotion = useReducedMotion();

	return (
		<div className='flex items-center gap-3'>
			<span className='relative grid size-11 shrink-0 place-items-center border border-portfolio-lime/70 bg-portfolio-sea-glass text-portfolio-title'>
				<motion.span
					animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
					transition={reduceMotion ? undefined : { duration: 2.2, ease: 'easeInOut', repeat: Infinity }}>
					<MapPin
						size={21}
						strokeWidth={1.9}
						aria-hidden='true'
					/>
				</motion.span>
				<motion.span
					className='absolute bottom-1.5 left-1/2 h-px -translate-x-1/2 bg-portfolio-title'
					animate={reduceMotion ? undefined : { opacity: [0.25, 0.75, 0.25], width: ['22%', '52%', '22%'] }}
					transition={reduceMotion ? undefined : { duration: 2.2, ease: 'easeInOut', repeat: Infinity }}
					aria-hidden='true'
				/>
			</span>

			<p className='m-0 leading-tight'>
				<span className='block text-[11px] font-semibold uppercase tracking-[.14em] text-portfolio-text/50'>Based in</span>
				<span className='mt-1 block text-[14px] font-semibold text-portfolio-pine'>Vancouver, BC</span>
			</p>
		</div>
	);
}
