import MotionReveal from '@/components/ui/motion-reveal';
import { capabilities, siteContent } from '@/data/portfolio';
import { CapabilityCard } from './capability-card';
import { sectionEyebrow, sectionTitle } from './styles';

const capabilityDetails = [
	{
		tools: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Sass'],
		skills: ['Accessibility', 'Reusable Components', 'State Management', 'Performance', 'Responsive Design'],
	},
	{
		tools: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'PHP', 'Git', 'Vercel'],
		skills: ['REST APIs', 'Database Design', 'Integrations', 'Testing & QA', 'CI/CD & Deployment', 'Hosting'],
	},
	{
		tools: ['Figma', 'Illustrator', 'Photoshop', 'XD'],
		skills: ['UX prototyping', 'Design Systems', 'Responsive Design', 'Design Thinking'],
	},
];

export function CapabilitiesSection() {
	const content = siteContent.capabilities;
	return (
		<section
			className='px-5 py-[clamp(72px,9vw,104px)] min-[761px]:px-8'
			aria-labelledby='capabilities-title'>
			<div className='mx-auto max-w-240'>
				<MotionReveal>
					<div className='mb-8'>
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
				<div className='grid items-start gap-4 min-[760px]:grid-cols-3'>
					{capabilities.map((capability, index) => {
						const detail = capabilityDetails[index];

						return (
							<MotionReveal
								delay={index * 0.08}
								frame
								key={capability.number}>
								<CapabilityCard
									capability={capability}
									index={index}
									skills={detail.skills}
									tools={detail.tools}
								/>
							</MotionReveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
