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
			className='px-5 py-[clamp(72px,9vw,104px)] min-[761px]:px-8'
			aria-labelledby='capabilities-title'>
			<div className='mx-auto max-w-240'>
				<div className='mb-5 flex items-end justify-between gap-5'>
					<div>
						<p className={`m-0 ${sectionEyebrow}`}>Expertise</p>
						<h2
							className={`mb-0 mt-1 ${sectionTitle}`}
							id='capabilities-title'>
							Capabilities
						</h2>
					</div>
					{/* <span className='text-[12px] text-portfolio-text/50'>What I bring to a product</span> */}
				</div>
				<div className='grid gap-4 min-[760px]:grid-cols-3'>
					{capabilities.map((capability, index) => {
						const Icon = capabilityIcons[index] ?? PenTool;

						return (
							<article
								className='rounded-[22px] border border-portfolio-line bg-white p-6 transition-[background-color,border-color] duration-200 hover:border-portfolio-lime hover:bg-portfolio-sea-glass'
								key={capability.number}>
								<div className='flex items-center justify-between'>
									<span className='text-xs font-bold text-portfolio-title'>{capability.number}</span>
									<span className='grid size-12 place-items-center rounded-full bg-portfolio-sea-glass text-portfolio-title'>
										<Icon
											size={30}
											strokeWidth={1.8}
											aria-hidden='true'
										/>
									</span>
								</div>
								<h3 className='mb-0 mt-8 text-[20px] font-semibold'>{capability.title}</h3>
								<p className='mb-0 mt-3 text-[1rem] leading-[1.65] text-portfolio-text/65'>{capability.body}</p>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
