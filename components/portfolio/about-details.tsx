'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type AboutDetailsProps = {
	intro: string;
	details: string;
};

export function AboutDetails({ intro, details }: AboutDetailsProps) {
	const [detailsOpen, setDetailsOpen] = useState(false);

	return (
		<>
			<p className='mb-0 mt-6 max-w-155 text-[16px] leading-[1.6] text-white/75 min-[780px]:mt-7 min-[780px]:text-[17px]'>
				{intro}{' '}
				<button
					className='button-hover inline-flex cursor-pointer items-center gap-1 border-0 bg-transparent p-0 pb-px align-baseline text-[14px] font-medium text-portfolio-mint no-underline hover:border-white hover:text-white'
					type='button'
					onClick={() => setDetailsOpen((open) => !open)}
					aria-expanded={detailsOpen}
					aria-controls='about-details'>
					{detailsOpen ? 'Less' : 'More'}
					<ChevronDown
						className={`transition-transform duration-300 ${detailsOpen ? 'rotate-180' : ''}`}
						size={14}
						aria-hidden='true'
					/>
				</button>
			</p>
			<div
				className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${detailsOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
				id='about-details'
				aria-hidden={!detailsOpen}>
				<div className='overflow-hidden'>
					<p className='mb-0 mt-4 max-w-155 text-[16px] leading-[1.6] text-white/75 min-[780px]:mt-5 min-[780px]:text-[17px]'>{details}</p>
				</div>
			</div>
		</>
	);
}
