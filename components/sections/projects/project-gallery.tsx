"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { TbX, TbChevronLeft, TbChevronRight } from "react-icons/tb";
import { useReducedMotion, motion, AnimatePresence } from "framer-motion";

type ProjectGalleryProps = {
  readonly images: readonly string[];
};

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleNext = useCallback(() => {
    setActiveImageIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null
    );
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setActiveImageIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  }, [images.length]);

  // Escape key handler and scroll lock
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveImageIndex(null);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImageIndex, handleNext, handlePrev]);

  return (
    <div className="space-y-4">
      <h3 className="font-rajdhani text-xs font-bold uppercase tracking-widest text-text/40">
        Project Screenshots
      </h3>

      {/* Gallery Grid/Scroll */}
      <div className="relative w-full">
        <ul
          className="flex w-full gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-white/10 lg:grid lg:grid-cols-3 lg:overflow-x-visible lg:pb-0"
          aria-label="Project screenshots gallery"
        >
          {images.map((img, index) => (
            <li key={img} className="min-w-[280px] shrink-0 lg:min-w-0">
              <button
                type="button"
                onClick={() => setActiveImageIndex(index)}
                className="group relative block aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] shadow-md transition-all duration-300 hover:border-[#8852F7]/30 hover:shadow-[0_0_20px_rgba(135,80,247,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0715] cursor-pointer"
                aria-label={`Open screenshot ${index + 1} of ${images.length} in full screen`}
              >
                <Image
                  src={img}
                  alt={`Admin dashboard screenshot ${index + 1}`}
                  fill
                  sizes="(max-width: 1024px) 280px, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 flex items-center justify-center">
                  <span className="rounded-full bg-black/60 px-4 py-2 font-poppins text-xs font-semibold text-white backdrop-blur-sm">
                    View Image
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Lightbox Viewer */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Image screenshot viewer"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            {/* Close trigger overlay */}
            <div
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setActiveImageIndex(null)}
              aria-hidden="true"
            />

            {/* Container */}
            <div className="relative flex h-full w-full max-w-5xl flex-col items-center justify-center gap-4">
              <div className="relative aspect-[16/10] w-full max-h-[80vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <Image
                  src={images[activeImageIndex]}
                  alt={`Screenshot ${activeImageIndex + 1} full view`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Top Controls: Close button */}
              <button
                type="button"
                onClick={() => setActiveImageIndex(null)}
                className="absolute top-4 right-4 z-10 flex size-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-label="Close full view"
              >
                <TbX className="size-6" />
              </button>

              {/* Navigation Controls */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex size-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    aria-label="Previous screenshot"
                  >
                    <TbChevronLeft className="size-6" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex size-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    aria-label="Next screenshot"
                  >
                    <TbChevronRight className="size-6" />
                  </button>
                </>
              )}

              {/* Counter tag */}
              <div className="rounded-full bg-white/5 px-4 py-1.5 font-poppins text-xs font-semibold text-white/70">
                {activeImageIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
