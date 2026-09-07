import { FileDown, MonitorCheck, Settings, ThumbsUp } from 'lucide-react';
import { featureTitle, sectionEyebrow } from './styles';

const focusAreas = [
	{ number: '01', label: 'Accessible interfaces', icon: MonitorCheck },
	{ number: '02', label: 'Maintainable systems', icon: Settings },
	{ number: '03', label: 'Useful experiences', icon: ThumbsUp },
];

export function AboutSection() {
	return (
		<section
			className='scroll-mt-6 px-5 pb-[clamp(64px,8vw,88px)] min-[761px]:px-8'
			id='about'>
			<div className='mx-auto max-w-240 border-y border-portfolio-line px-1 py-7 min-[761px]:py-9'>
				<div className='flex flex-wrap items-center justify-between gap-4'>
					<p className={`m-0 ${sectionEyebrow}`}>About</p>
					<a
						className='button-hover inline-flex min-h-10 items-center gap-2 rounded-full border border-portfolio-line px-4 text-[13px] font-semibold no-underline hover:border-portfolio-title hover:bg-portfolio-title hover:text-white'
						href='https://felipegonzalez.dev/felipe-gonzalez-resume.pdf'
						target='_blank'
						rel='noreferrer'>
						<FileDown
							size={17}
							strokeWidth={1.9}
							aria-hidden='true'
						/>{' '}
						Resume
					</a>
				</div>

				<div className='mt-8 grid gap-6 min-[700px]:grid-cols-[.78fr_1.22fr] min-[700px]:items-start min-[700px]:gap-14'>
					<h2 className={`m-0 max-w-[360px] ${featureTitle}`}>
						Design-aware.
						<br />
						Systems-minded.
					</h2>
					<p className='m-0 max-w-[620px] text-[17px] leading-[1.75] text-portfolio-text/70'>
						I build clean, accessible web products across React and Next.js interfaces, Node.js APIs, databases, and product design, with a focus on performance, maintainability, and
						useful user experiences.
					</p>
				</div>

				<div className='mt-10 grid border-t border-portfolio-line pt-5 min-[560px]:grid-cols-3'>
					{focusAreas.map(({ number, label, icon: Icon }, index) => (
						<div
							className={`flex items-center gap-4 py-3 min-[560px]:px-5 ${index === 0 ? 'min-[560px]:pl-0' : 'border-t border-portfolio-line min-[560px]:border-l min-[560px]:border-t-0'}`}
							key={number}>
							<Icon
								className='shrink-0 text-portfolio-text/70'
								size={30}
								strokeWidth={1.8}
								aria-hidden='true'
							/>
							<span className='text-[11px] font-bold text-portfolio-title'>{number}</span>
							<span className='text-[13px] font-semibold text-portfolio-text/70'>{label}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
