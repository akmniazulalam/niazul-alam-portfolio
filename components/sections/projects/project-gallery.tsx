"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const ProjectLightboxModal = dynamic(
  () =>
    import("./project-lightbox-modal").then((mod) => mod.ProjectLightboxModal),
  { ssr: false },
);

type ProjectGalleryProps = {
  readonly images: readonly string[];
};

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    setActiveImageIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null,
    );
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setActiveImageIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null,
    );
  }, [images.length]);

  const handleClose = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  return (
    <div className="space-y-4">
      <h3 className="font-rajdhani text-xs font-bold uppercase tracking-widest text-text/40">
        Project Screenshots
      </h3>

      {/* Gallery Grid/Scroll */}
      <div className="relative w-full overflow-hidden">
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

      {/* Lightbox Modal (Deferred via dynamic import until activeImageIndex !== null) */}
      {activeImageIndex !== null && (
        <ProjectLightboxModal
          images={images}
          activeImageIndex={activeImageIndex}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}
