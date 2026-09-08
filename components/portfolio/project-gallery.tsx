'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import type { ProjectSlide } from '@/data/portfolio';

type ProjectGalleryProps = {
	project: string;
	slides: ProjectSlide[];
	tone: number;
};

const slideClass = 'pointer-events-none absolute inset-0 w-full cursor-zoom-in border-0 bg-[#b7c7cc] p-0 opacity-0 transition-opacity duration-500 motion-reduce:transition-none';

const galleryArrowClass =
	'absolute top-1/2 z-[4] grid size-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-white/70 bg-white/90 text-portfolio-pine backdrop-blur transition-[background-color,border-color,color] duration-200 hover:border-portfolio-turquoise hover:bg-portfolio-turquoise hover:text-white';

const lightboxArrowClass =
	'absolute top-1/2 z-[2] grid size-[52px] -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-white/45 bg-[rgb(10_14_11_/_50%)] text-[22px] text-white transition-colors hover:bg-white hover:text-black max-[760px]:bottom-[62px] max-[760px]:top-auto max-[760px]:size-[46px] max-[760px]:translate-y-0';

export function ProjectGallery({ project, slides, tone }: ProjectGalleryProps) {
	const [active, setActive] = useState(0);
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
	const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
	const closeButton = useRef<HTMLButtonElement>(null);
	const touchStart = useRef<number | null>(null);

	const markImageLoaded = (image: string) => {
		setLoadedImages((current) => ({ ...current, [image]: true }));
	};

	const markImageFailed = (image: string) => {
		setFailedImages((current) => ({ ...current, [image]: true }));
	};

	const move = (direction: number) => {
		setActive((current) => (current + direction + slides.length) % slides.length);
	};

	const closeLightbox = () => setLightboxOpen(false);

	useEffect(() => {
		if (!lightboxOpen) return;

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		closeButton.current?.focus();

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') closeLightbox();
			if (event.key === 'ArrowLeft') {
				setActive((current) => (current - 1 + slides.length) % slides.length);
			}
			if (event.key === 'ArrowRight') {
				setActive((current) => (current + 1) % slides.length);
			}
		};

		window.addEventListener('keydown', onKeyDown);
		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [lightboxOpen, slides.length]);

	const finishSwipe = (endX: number) => {
		if (touchStart.current === null) return;
		const distance = endX - touchStart.current;
		if (Math.abs(distance) > 48) move(distance > 0 ? -1 : 1);
		touchStart.current = null;
	};

	return (
		<div
			className='mx-auto w-full max-w-[1120px]'
			data-tone={tone}
			role='region'
			aria-roledescription='carousel'
			aria-label={`${project} image gallery`}>
			<div className='relative h-[clamp(340px,47vw,540px)] overflow-hidden rounded-[18px] bg-portfolio-secondary max-[760px]:h-[52svh] max-[760px]:min-h-[340px]'>
				{slides.map((slide, index) => (
					<button
						type='button'
						className={`${slideClass} ${active === index ? 'pointer-events-auto opacity-100' : ''}`}
						key={slide.image}
						aria-hidden={active !== index}
						tabIndex={active === index ? 0 : -1}
						aria-label={`Open ${project}: ${slide.label} at full size`}
						onClick={() => setLightboxOpen(true)}>
						{!loadedImages[slide.image] && !failedImages[slide.image] && (
							<span
								className='image-skeleton absolute inset-0'
								aria-hidden='true'
							/>
						)}
						{failedImages[slide.image] && (
							<span className='absolute inset-0 grid place-items-center bg-portfolio-secondary text-sm font-semibold text-portfolio-text/55'>Image unavailable</span>
						)}
						<img
							src={slide.image}
							alt=''
							className={`absolute inset-0 h-full w-full transition-opacity duration-500 motion-reduce:transition-none ${loadedImages[slide.image] ? 'opacity-100' : 'opacity-0'} ${slide.fit === 'contain' ? 'bg-portfolio-secondary object-contain p-[clamp(28px,5vw,72px)]' : 'object-cover'}`}
							onLoad={() => markImageLoaded(slide.image)}
							onError={() => markImageFailed(slide.image)}
						/>
						<span
							className='absolute inset-0 bg-portfolio-pine/8'
							aria-hidden='true'
						/>
					</button>
				))}

				<button
					className='absolute right-5 top-5 z-[5] inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/25 bg-portfolio-pine/80 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[.12em] text-white backdrop-blur transition-colors hover:bg-portfolio-turquoise'
					type='button'
					onClick={() => setLightboxOpen(true)}
					aria-label={`Open ${project} gallery in full view`}>
					<Expand
						size={14}
						aria-hidden='true'
					/>{' '}
					Full view
				</button>
				{slides.length > 1 && (
					<>
						<button
							className={`${galleryArrowClass} left-4`}
							type='button'
							onClick={() => move(-1)}
							aria-label={`Previous ${project} image`}>
							<ChevronLeft
								size={20}
								aria-hidden='true'
							/>
						</button>
						<button
							className={`${galleryArrowClass} right-4`}
							type='button'
							onClick={() => move(1)}
							aria-label={`Next ${project} image`}>
							<ChevronRight
								size={20}
								aria-hidden='true'
							/>
						</button>
					</>
				)}
			</div>
			<div
				className='mt-4 flex items-center justify-between gap-5'
				aria-label='Choose an image'>
				<p className='m-0 text-[12px] font-semibold text-portfolio-text/55'></p>
				<div className='flex items-center gap-2'>
					{slides.map((slide, index) => (
						<button
							type='button'
							key={slide.image}
							className={`h-2.5 cursor-pointer rounded-full border-0 p-0 transition-[width,background-color] duration-300 ${active === index ? 'w-8 bg-[#4c7380]' : 'w-2.5 bg-[#b7c7cc] hover:bg-[#7ab8cc]'}`}
							onClick={() => setActive(index)}
							aria-label={`Show image ${index + 1}: ${slide.label}`}
							aria-current={active === index ? 'true' : undefined}
						/>
					))}
				</div>
			</div>

			{lightboxOpen && (
				<div
					className='fixed inset-0 z-[100] grid animate-[lightbox-in_.2s_ease-out] place-items-center bg-[rgb(10_14_11_/_96%)] px-[clamp(18px,5vw,76px)] pb-[54px] pt-[clamp(72px,8vw,110px)] text-white motion-reduce:animate-none max-[760px]:px-3 max-[760px]:pb-[58px] max-[760px]:pt-[84px]'
					role='dialog'
					aria-modal='true'
					aria-label={`${project} full-size image viewer`}>
					<div className='absolute inset-x-0 top-0 z-[2] flex min-h-[68px] items-center justify-between border-b border-white/20 px-[4vw]'>
						<p className='m-0 text-xs font-bold uppercase tracking-[.1em]'>
							{project}{' '}
							<span className='ml-4 text-portfolio-tertiary'>
								{String(active + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
							</span>
						</p>
						<button
							className='button-hover cursor-pointer rounded-full border border-white/30 bg-transparent px-4 py-2 text-white hover:bg-white hover:text-black'
							ref={closeButton}
							type='button'
							onClick={closeLightbox}
							aria-label='Close full-size image'>
							<span className='inline-flex items-center gap-2'>
								Close{' '}
								<X
									size={16}
									aria-hidden='true'
								/>
							</span>
						</button>
					</div>
					<div
						className='relative h-[min(78vh,950px)] w-[min(100%,1500px)] touch-pan-y overflow-hidden bg-[#101512] max-[760px]:h-[min(76svh,780px)] max-[760px]:w-full'
						onTouchStart={(event) => {
							touchStart.current = event.touches[0].clientX;
						}}
						onTouchEnd={(event) => finishSwipe(event.changedTouches[0].clientX)}>
						{!loadedImages[slides[active].image] && !failedImages[slides[active].image] && (
							<span
								className='image-skeleton absolute inset-0'
								aria-hidden='true'
							/>
						)}
						{failedImages[slides[active].image] && <span className='absolute inset-0 grid place-items-center text-sm font-semibold text-white/60'>Image unavailable</span>}
						<img
							src={slides[active].image}
							alt={`${project}: ${slides[active].label}`}
							className={`h-full w-full object-contain transition-opacity duration-500 motion-reduce:transition-none ${loadedImages[slides[active].image] ? 'opacity-100' : 'opacity-0'} ${slides[active].fit === 'contain' ? 'p-[clamp(18px,3vw,48px)]' : ''}`}
							onLoad={() => markImageLoaded(slides[active].image)}
							onError={() => markImageFailed(slides[active].image)}
						/>
						<span className='absolute bottom-5 left-5 bg-[rgb(7_12_10_/_75%)] px-[11px] py-2 text-xs uppercase tracking-[.08em] text-white'>{slides[active].label}</span>
					</div>
					<button
						className={`${lightboxArrowClass} left-[max(8px,1.5vw)] max-[760px]:left-5`}
						type='button'
						onClick={() => move(-1)}
						aria-label='Previous full-size image'>
						<ChevronLeft
							size={22}
							aria-hidden='true'
						/>
					</button>
					<button
						className={`${lightboxArrowClass} right-[max(8px,1.5vw)] max-[760px]:right-5`}
						type='button'
						onClick={() => move(1)}
						aria-label='Next full-size image'>
						<ChevronRight
							size={22}
							aria-hidden='true'
						/>
					</button>
					<p className='absolute bottom-[17px] m-0 text-[11px] uppercase tracking-[.08em] text-portfolio-tertiary'>Swipe or use arrow keys</p>
				</div>
			)}
		</div>
	);
}
