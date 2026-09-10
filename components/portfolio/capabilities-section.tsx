import MotionReveal from '@/components/ui/motion-reveal';
import { capabilities, siteContent } from '@/data/portfolio';
import { CapabilityCard } from './capability-card';
import { sectionEyebrow, sectionTitle } from './styles';

export function CapabilitiesSection() {
	const content = siteContent.capabilities;
	return (
		<section
			className='px-5 py-[clamp(72px,9vw,104px)] min-[761px]:px-8'
			aria-labelledby='capabilities-title'>
			<div className='mx-auto max-w-240'>
				<MotionReveal>
					<div className='mb-5 flex items-end justify-between gap-5'>
						<div>
							<p className={`m-0 ${sectionEyebrow}`}>{content.eyebrow}</p>
							<h2
								className={`mb-0 mt-1 ${sectionTitle}`}
								id='capabilities-title'>
								{content.title}
							</h2>
						</div>
					</div>
				</MotionReveal>
				<div className='grid gap-4 min-[760px]:grid-cols-3'>
					{capabilities.map((capability, index) => (
							<MotionReveal
								className='h-full'
								delay={index * 0.08}
								frame
								key={capability.number}>
								<CapabilityCard
									capability={capability}
									index={index}
								/>
							</MotionReveal>
					))}
				</div>
			</div>
		</section>
	);
}
