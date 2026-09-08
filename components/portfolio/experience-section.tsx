'use client';

import { motion, useReducedMotion } from 'motion/react';
import { BriefcaseBusiness, MapPin } from 'lucide-react';
import { sectionEyebrow, sectionTitle } from './styles';

const experience = [
	{
		period: 'Apr 2023 — Now',
		role: 'Freelance Full-Stack Developer',
		place: 'Vancouver · Remote',
		body: 'Taking web products from early requirements to production across Next.js, React, Node.js, databases, integrations, deployment, and ongoing maintenance.',
		tone: 'bg-portfolio-pine text-white',
	},
	{
		period: 'Jan 2024 — Mar 2026',
		role: 'Operations & Team Trainer',
		company: '1-800-GOT-JUNK?',
		place: 'Metro Vancouver',
		body: 'Built another side of product work: calm communication, customer empathy, training, and practical problem-solving in fast-moving situations.',
		tone: 'bg-portfolio-lime text-portfolio-pine',
	},
	{
		period: 'Apr 2022 — Jan 2023',
		role: 'Frontend Developer',
		company: 'NotCo',
		place: 'Remote · Chile',
		body: 'Maintained production React applications, built reusable UI, and collaborated across code reviews, testing, and CI/CD workflows.',
		tone: 'bg-portfolio-turquoise text-white',
	},
	{
		period: 'May 2020 — Apr 2022',
		role: 'Web Designer',
		company: 'The Cut Fashion School',
		place: 'Remote · Canada',
		body: 'Created detailed website concepts and brand-aligned digital work while supporting marketing and web teams through a rebrand.',
		tone: 'bg-white text-portfolio-pine',
	},
	{
		period: 'Jan 2018 — May 2020',
		role: 'Graphic Designer',
		company: 'Natura Cosmetics',
		place: 'Remote · Chile',
		body: 'Translated campaign ideas into digital and print systems, landing-page assets, Figma handoffs, and reusable brand guidelines.',
		tone: 'bg-portfolio-mint text-portfolio-pine',
	},
	{
		period: 'Sep 2016 — Jan 2018',
		role: 'Frontend Developer',
		company: 'Cencosud Paris',
		place: 'Chile',
		body: 'Developed responsive websites and internal React applications, improving performance, mobile engagement, and everyday usability.',
		tone: 'bg-white text-portfolio-pine',
	},
];

export function ExperienceSection() {
	const reduceMotion = useReducedMotion();

	return (
		<section
			className='overflow-hidden bg-portfolio-sea-glass px-5 py-[clamp(76px,10vw,124px)] text-portfolio-pine min-[761px]:px-8'
			aria-labelledby='experience-title'>
			<div className='mx-auto max-w-240'>
				<div className='grid gap-6 border-b border-portfolio-line pb-8 min-[760px]:grid-cols-[1fr_.7fr] min-[760px]:items-end'>
					<div>
						<p className={`m-0 ${sectionEyebrow}`}>Experience</p>
						<h2
							className={`mb-0 mt-3 ${sectionTitle}`}
							id='experience-title'>
							The path to full-stack.
						</h2>
					</div>
					<p className='m-0 max-w-[470px] text-[15px] leading-[1.7] text-portfolio-text/65'>
						Development, design, and hands-on team experience all shape how I understand a problem—and how I work with the people behind it.
					</p>
				</div>

				<div className='relative mt-10'>
					<motion.div
						className='absolute bottom-0 left-[11px] top-0 w-px origin-top bg-portfolio-title min-[760px]:left-1/2'
						initial={{ scaleY: reduceMotion ? 1 : 0 }}
						whileInView={{ scaleY: 1 }}
						viewport={{ once: true, amount: 0.1 }}
						transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
						aria-hidden='true'
					/>

					<ol className='m-0 grid list-none gap-6 p-0 min-[760px]:gap-0'>
						{experience.map((item, index) => (
							<li
								className={`relative pl-10 min-[760px]:grid min-[760px]:grid-cols-2 min-[760px]:pl-0 ${index % 2 ? 'min-[760px]:[&>article]:col-start-2 min-[760px]:[&>article]:ml-10' : 'min-[760px]:[&>article]:mr-10'}`}
								key={`${item.period}-${item.role}`}>
								<span
									className='absolute left-[5px] top-8 z-[2] size-[13px] rounded-full border-[3px] border-portfolio-sea-glass bg-portfolio-lime ring-1 ring-portfolio-title min-[760px]:left-1/2 min-[760px]:-translate-x-1/2'
									aria-hidden='true'
								/>
								<motion.article
									className={`rounded-[22px] border border-portfolio-pine/10 p-6 shadow-[0_18px_50px_rgb(46_69_77_/_10%)] min-[760px]:p-7 ${item.tone}`}
									initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: index % 2 ? 36 : -36, y: 18 }}
									whileInView={{ opacity: 1, x: 0, y: 0 }}
									viewport={{ once: true, amount: 0.35 }}
									transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}>
									<BriefcaseBusiness
										className='mt-1 opacity-60'
										size={25}
										strokeWidth={1.8}
										aria-hidden='true'
									/>
									<h3 className='mb-0 mt-3 text-[20px] font-semibold leading-tight'>{item.role}</h3>
									{item.company && <p className='mb-0 mt-1 text-[14px] font-bold opacity-75'>{item.company}</p>}
									<p className='m-0 text-[11px] font-bold uppercase tracking-[.14em] opacity-65'>{item.period}</p>

									<p className='mb-0 mt-4 text-[14px] leading-[1.65] opacity-70'>{item.body}</p>
									<p className='mb-0 mt-5 inline-flex items-center gap-2 text-[12px] font-semibold opacity-60'>
										<MapPin
											size={18}
											aria-hidden='true'
										/>
										{item.place}
									</p>
								</motion.article>
							</li>
						))}
					</ol>
				</div>
			</div>
		</section>
	);
}
