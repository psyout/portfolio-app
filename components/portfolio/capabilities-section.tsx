import { MonitorSmartphone, PenTool, ServerCog } from 'lucide-react';
import type { Capability } from '@/data/portfolio';
import { sectionEyebrow, sectionTitle } from './styles';

const capabilityIcons = [MonitorSmartphone, ServerCog, PenTool];

type CapabilitiesSectionProps = {
	capabilities: Capability[];
};

export function CapabilitiesSection({ capabilities }: CapabilitiesSectionProps) {
	return (
		<section
			className='px-5 py-[clamp(64px,8vw,88px)] min-[761px]:px-8'
			aria-labelledby='capabilities-title'>
			<div className='mx-auto max-w-[960px]'>
				<div className='mb-5 flex items-end justify-between gap-5'>
					<div>
						<p className={`m-0 ${sectionEyebrow}`}>Expertise</p>
						<h2
							className={`mb-0 mt-3 ${sectionTitle}`}
							id='capabilities-title'>
							Capabilities
						</h2>
					</div>
					<span className='text-[12px] text-portfolio-text/50'>What I bring to a product</span>
				</div>
				<div className='border-y border-portfolio-line'>
					{capabilities.map((capability, index) => {
						const Icon = capabilityIcons[index] ?? PenTool;

						return (
						<article
							className='group grid grid-cols-[36px_52px_1fr_1.4fr] items-center gap-5 border-b border-portfolio-line px-5 py-6 transition-colors duration-300 last:border-b-0 hover:bg-portfolio-muted/55 max-[700px]:grid-cols-[30px_44px_1fr] max-[700px]:gap-3'
							key={capability.number}>
							<span className='text-xs font-bold text-portfolio-title'>{capability.number}</span>
							<span className='grid size-11 place-items-center rounded-full bg-portfolio-muted text-portfolio-text/60 transition-[background-color,color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:bg-portfolio-title group-hover:text-white'>
								<Icon
									size={21}
									strokeWidth={1.8}
									aria-hidden='true'
								/>
							</span>
							<h3 className='m-0 text-[16px] font-semibold'>{capability.title}</h3>
							<p className='m-0 text-[14px] leading-[1.6] text-portfolio-text/65 max-[700px]:col-span-2 max-[700px]:col-start-2'>{capability.body}</p>
						</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
