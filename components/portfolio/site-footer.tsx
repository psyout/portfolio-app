import { siteContent } from '@/data/portfolio';

export function SiteFooter() {
	const { footer } = siteContent;
	return (
		<footer className='flex justify-center bg-portfolio-pine px-5 pb-5 text-[14px] text-white/65'>
			<div className='flex w-full max-w-240 justify-between pt-7 max-[620px]:flex-col max-[620px]:gap-3'>
				<span>{footer.copyright}</span>
				<span>{footer.note}</span>
			</div>
		</footer>
	);
}
