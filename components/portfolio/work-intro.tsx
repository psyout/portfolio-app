import { sectionEyebrow, sectionTitle } from './styles';
import { siteContent } from '@/data/portfolio';

export function WorkIntro() {
	const { work } = siteContent;
	return (
		<section
			className='scroll-mt-6 px-5 pb-8 pt-[clamp(76px,9vw,108px)] min-[761px]:px-8'
			id='work'>
			<div className='mx-auto max-w-240'>
				<p className={`m-0 ${sectionEyebrow}`}>{work.eyebrow}</p>
				<div className='mt-1 flex flex-wrap items-end justify-between gap-5'>
					<h2 className={`m-0 ${sectionTitle}`}>{work.title}</h2>
				</div>
			</div>
		</section>
	);
}
