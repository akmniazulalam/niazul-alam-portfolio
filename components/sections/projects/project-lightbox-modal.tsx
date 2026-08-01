"use client";

import { useEffect } from "react";
import Image from "next/image";
import { TbX, TbChevronLeft, TbChevronRight } from "react-icons/tb";
import { useReducedMotion, motion, AnimatePresence } from "framer-motion";

type ProjectLightboxModalProps = {
  readonly images: readonly string[];
  readonly activeImageIndex: number | null;
  readonly onClose: () => void;
  readonly onNext: () => void;
  readonly onPrev: () => void;
};

export function ProjectLightboxModal({
  images,
  activeImageIndex,
  onClose,
  onNext,
  onPrev,
}: ProjectLightboxModalProps) {
  const shouldReduceMotion = useReducedMotion();

  // Escape & Arrow keys handler and scroll lock
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        onNext();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImageIndex, onClose, onNext, onPrev]);

  return (
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
            onClick={onClose}
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
              onClick={onClose}
              className="absolute top-4 right-4 z-10 flex size-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105 active:bg-white/30 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Close full view"
            >
              <TbX className="size-6" />
            </button>

            {/* Navigation Controls */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={onPrev}
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex size-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105 active:bg-white/30 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  aria-label="Previous screenshot"
                >
                  <TbChevronLeft className="size-6" />
                </button>

                <button
                  type="button"
                  onClick={onNext}
                  className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex size-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105 active:bg-white/30 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
  );
}
