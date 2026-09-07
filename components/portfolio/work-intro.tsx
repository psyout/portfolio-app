import { sectionEyebrow, sectionTitle } from './styles';

export function WorkIntro() {
	return (
		<section
			className='scroll-mt-6 px-5 pb-5 min-[761px]:px-8'
			id='work'>
			<div className='mx-auto max-w-240'>
				<p className={`m-0 ${sectionEyebrow}`}>Selected work</p>
				<h2 className={`mb-0 mt-3 ${sectionTitle}`}>Featured projects</h2>
			</div>
		</section>
	);
}
