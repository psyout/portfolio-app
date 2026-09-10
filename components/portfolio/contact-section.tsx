import { FaLinkedinIn } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';
import MotionReveal from '@/components/ui/motion-reveal';
import { siteContent } from '@/data/portfolio';
import { ContactForm } from './contact-form';
import { CopyEmailButton } from './copy-email-button';
import { ScrollUnderline } from './scroll-underline';
import { featureTitle, sectionEyebrow } from './styles';

export function ContactSection() {
	const { contact } = siteContent;

	return (
		<section
			className='bg-portfolio-turquoise px-5 py-[clamp(72px,9vw,104px)] text-white min-[761px]:px-8'
			id='contact'>
			<div className='mx-auto grid max-w-240 gap-12 min-[820px]:grid-cols-[.85fr_1.15fr] min-[820px]:gap-16'>
				<MotionReveal frame>
					<p className={`m-0 text-white ${sectionEyebrow}`}>{contact.eyebrow}</p>
					<h2 className={`mb-0 mt-4 max-w-107.5 ${featureTitle}`}>{contact.title}</h2>
					<p className='mb-0 mt-6 max-w-107.5 text-[16px] leading-normal text-white/80'>{contact.summary}</p>

					<div className='mt-9 flex items-center gap-3'>
						<a className='text-[16px] font-semibold' href={`mailto:${contact.email}`}>
							<ScrollUnderline>{contact.email}</ScrollUnderline>
						</a>
						<CopyEmailButton email={contact.email} />
					</div>

					<div className='mt-2 flex gap-3' aria-label='Social links'>
						<a
							className='button-hover grid size-11 place-items-center rounded-full border border-white/35 hover:border-portfolio-pine hover:bg-portfolio-pine hover:text-white'
							href={contact.linkedinUrl}
							target='_blank'
							rel='noreferrer'
							aria-label='LinkedIn'>
							<FaLinkedinIn size={19} aria-hidden='true' />
						</a>
						<a
							className='button-hover grid size-11 place-items-center rounded-full border border-white/35 hover:border-portfolio-pine hover:bg-portfolio-pine hover:text-white'
							href={contact.githubUrl}
							target='_blank'
							rel='noreferrer'
							aria-label='GitHub'>
							<SiGithub size={19} aria-hidden='true' />
						</a>
					</div>
				</MotionReveal>

				<MotionReveal delay={0.08} frame>
					<ContactForm />
				</MotionReveal>
			</div>
		</section>
	);
}
