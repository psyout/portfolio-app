"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import type { ProjectSlide } from "@/data/portfolio";

type ProjectGalleryProps = {
  project: string;
  slides: ProjectSlide[];
  tone: number;
};

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
      className={`gallery gallery-tone-${tone}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${project} image gallery`}
    >
      <div className="gallery-stage">
        {slides.map((slide, index) => (
          <button
            type="button"
            className={`project-image ${active === index ? "is-active" : ""}`}
            key={slide.image}
            aria-hidden={active !== index}
            tabIndex={active === index ? 0 : -1}
            aria-label={`Open ${project}: ${slide.label} at full size`}
            onClick={() => setLightboxOpen(true)}
          >
            <img
              src={slide.image}
              alt=""
              className={slide.fit === "contain" ? "is-contained" : ""}
            />
            <span className="image-shade" aria-hidden="true" />
            <span className="placeholder-project">{project}</span>
            <span className="placeholder-label">{slide.label}</span>
            <span className="expand-hint" aria-hidden="true">Expand ↗</span>
          </button>
        ))}
        <div className="gallery-count" aria-live="polite">
          {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
        <div className="gallery-arrows">
          <button type="button" onClick={() => move(-1)} aria-label={`Previous ${project} image`}>←</button>
          <button type="button" onClick={() => move(1)} aria-label={`Next ${project} image`}>→</button>
        </div>
      </div>
      <div className="gallery-tabs" aria-label="Choose an image">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.image}
            className={active === index ? "is-active" : ""}
            onClick={() => setActive(index)}
            aria-label={`Show image ${index + 1}: ${slide.label}`}
            aria-current={active === index ? "true" : undefined}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {slide.label}
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${project} full-size image viewer`}
        >
          <div className="lightbox-toolbar">
            <p>{project} <span>{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span></p>
            <button ref={closeButton} type="button" onClick={closeLightbox} aria-label="Close full-size image">Close ×</button>
          </div>
          <div
            className="lightbox-image"
            onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
            onTouchEnd={(event) => finishSwipe(event.changedTouches[0].clientX)}
          >
            <img
              src={slides[active].image}
              alt={`${project}: ${slides[active].label}`}
              className={slides[active].fit === "contain" ? "is-contained" : ""}
            />
            <span className="lightbox-caption">{slides[active].label}</span>
          </div>
          <button className="lightbox-arrow lightbox-previous" type="button" onClick={() => move(-1)} aria-label="Previous full-size image">←</button>
          <button className="lightbox-arrow lightbox-next" type="button" onClick={() => move(1)} aria-label="Next full-size image">→</button>
          <p className="lightbox-help">Swipe or use arrow keys</p>
        </div>
      )}
    </div>
  );
}
