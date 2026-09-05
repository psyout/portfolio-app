"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import type { ProjectSlide } from "@/data/portfolio";

type ProjectGalleryProps = {
  project: string;
  slides: ProjectSlide[];
  tone: number;
};

const slideClass =
  "group pointer-events-none absolute inset-0 flex w-full scale-[1.025] cursor-zoom-in flex-col justify-end border-0 bg-[#d8d9d5] px-[4vw] py-[clamp(28px,5vw,72px)] text-left text-white opacity-0 [transition:opacity_.45s_ease,transform_.65s_ease] motion-reduce:transition-none";

const galleryArrowClass =
  "size-[58px] cursor-pointer border border-portfolio-ink bg-portfolio-paper text-[22px] text-portfolio-ink";

const lightboxArrowClass =
  "absolute top-1/2 z-[2] grid size-[52px] -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-white/45 bg-[rgb(10_14_11_/_50%)] text-[22px] text-white max-[760px]:bottom-[62px] max-[760px]:top-auto max-[760px]:size-[46px] max-[760px]:translate-y-0";

export function ProjectGallery({ project, slides, tone }: ProjectGalleryProps) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<number | null>(null);

  const move = (direction: number) => {
    setActive((current) => (current + direction + slides.length) % slides.length);
  };

  const closeLightbox = () => setLightboxOpen(false);

  useEffect(() => {
    if (!lightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") {
        setActive((current) => (current - 1 + slides.length) % slides.length);
      }
      if (event.key === "ArrowRight") {
        setActive((current) => (current + 1) % slides.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
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
      className="mx-[-4vw] min-[761px]:mx-auto min-[761px]:w-full min-[761px]:max-w-[1240px]"
      data-tone={tone}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${project} image gallery`}
    >
      <div className="relative h-[min(72vw,780px)] min-h-[480px] overflow-hidden bg-[#c8c9c1] min-[761px]:h-[clamp(420px,48vw,640px)] min-[761px]:min-h-0 max-[760px]:h-[72svh] max-[760px]:min-h-[520px]">
        {slides.map((slide, index) => (
          <button
            type="button"
            className={`${slideClass} ${active === index ? "pointer-events-auto scale-100 opacity-100" : ""}`}
            key={slide.image}
            aria-hidden={active !== index}
            tabIndex={active === index ? 0 : -1}
            aria-label={`Open ${project}: ${slide.label} at full size`}
            onClick={() => setLightboxOpen(true)}
          >
            <img
              src={slide.image}
              alt=""
              className={`absolute inset-0 h-full w-full [transition:transform_.8s_ease] group-hover:scale-[1.018] motion-reduce:transition-none ${
                slide.fit === "contain"
                  ? "bg-[#e6e9e8] object-contain p-[clamp(28px,5vw,72px)]"
                  : "object-cover"
              }`}
            />
            <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgb(7_12_10_/_72%)_100%)]" aria-hidden="true" />
            <span className="relative z-[2] mb-[10px] text-xs font-bold uppercase tracking-[.13em]">{project}</span>
            <span className="relative z-[2] text-[clamp(42px,7vw,105px)] leading-[.95] tracking-[-.06em] min-[761px]:text-[clamp(36px,4.6vw,68px)] min-[761px]:leading-none">{slide.label}</span>
            <span className="absolute right-[4vw] top-[5vw] z-[2] border border-white/65 px-[13px] py-[9px] text-[11px] font-bold uppercase tracking-[.08em] max-[760px]:bottom-[30px] max-[760px]:top-auto" aria-hidden="true">Expand ↗</span>
          </button>
        ))}
        <div className="absolute left-[4vw] top-[5vw] z-[3] bg-[rgb(7_12_10_/_70%)] px-[11px] py-2 text-[13px] text-white" aria-live="polite">
          {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
        <div className="absolute bottom-[4vw] right-[4vw] z-[4] flex [&>button+button]:border-l-0">
          <button className={galleryArrowClass} type="button" onClick={() => move(-1)} aria-label={`Previous ${project} image`}>←</button>
          <button className={galleryArrowClass} type="button" onClick={() => move(1)} aria-label={`Next ${project} image`}>→</button>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] overflow-x-auto border-b border-portfolio-line max-[760px]:flex" aria-label="Choose an image">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.image}
            className={`min-h-[82px] cursor-pointer border-0 border-r border-portfolio-line bg-transparent px-[18px] py-4 text-left text-xs text-portfolio-ink last:border-r-0 max-[760px]:flex-[0_0_42%] ${
              active === index ? "bg-portfolio-blue text-white" : ""
            }`}
            onClick={() => setActive(index)}
            aria-label={`Show image ${index + 1}: ${slide.label}`}
            aria-current={active === index ? "true" : undefined}
          >
            <span className={`mb-[9px] block ${active === index ? "text-white" : "text-portfolio-blue"}`}>
              {String(index + 1).padStart(2, "0")}
            </span>
            {slide.label}
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] grid animate-[lightbox-in_.2s_ease-out] place-items-center bg-[rgb(10_14_11_/_96%)] px-[clamp(18px,5vw,76px)] pb-[54px] pt-[clamp(72px,8vw,110px)] text-white motion-reduce:animate-none max-[760px]:px-3 max-[760px]:pb-[58px] max-[760px]:pt-[84px]"
          role="dialog"
          aria-modal="true"
          aria-label={`${project} full-size image viewer`}
        >
          <div className="absolute inset-x-0 top-0 z-[2] flex min-h-[68px] items-center justify-between border-b border-white/20 px-[4vw]">
            <p className="m-0 text-xs font-bold uppercase tracking-[.1em]">
              {project} <span className="ml-4 text-[#aab3ad]">{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
            </p>
            <button className="cursor-pointer border-0 bg-transparent py-[10px] pl-[18px] text-white" ref={closeButton} type="button" onClick={closeLightbox} aria-label="Close full-size image">Close ×</button>
          </div>
          <div
            className="relative h-[min(78vh,950px)] w-[min(100%,1500px)] touch-pan-y overflow-hidden bg-[#101512] max-[760px]:h-[min(76svh,780px)] max-[760px]:w-full"
            onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
            onTouchEnd={(event) => finishSwipe(event.changedTouches[0].clientX)}
          >
            <img
              src={slides[active].image}
              alt={`${project}: ${slides[active].label}`}
              className={`h-full w-full object-contain ${slides[active].fit === "contain" ? "p-[clamp(18px,3vw,48px)]" : ""}`}
            />
            <span className="absolute bottom-5 left-5 bg-[rgb(7_12_10_/_75%)] px-[11px] py-2 text-xs uppercase tracking-[.08em] text-white">{slides[active].label}</span>
          </div>
          <button className={`${lightboxArrowClass} left-[max(8px,1.5vw)] max-[760px]:left-5`} type="button" onClick={() => move(-1)} aria-label="Previous full-size image">←</button>
          <button className={`${lightboxArrowClass} right-[max(8px,1.5vw)] max-[760px]:right-5`} type="button" onClick={() => move(1)} aria-label="Next full-size image">→</button>
          <p className="absolute bottom-[17px] m-0 text-[11px] uppercase tracking-[.08em] text-[#aab3ad]">Swipe or use arrow keys</p>
        </div>
      )}
    </div>
  );
}
