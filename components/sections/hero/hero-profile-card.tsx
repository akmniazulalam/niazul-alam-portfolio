import Image from "next/image";

import { SITE_CONFIG } from "@/constants/site";
import { cn } from "@/utils/cn";

type HeroProfileCardProps = {
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

export function HeroProfileCard({
  imageSrc,
  imageAlt = `${SITE_CONFIG.name} profile photo`,
  className,
}: HeroProfileCardProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0 lg:max-w-md xl:max-w-lg",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-4xl blur-3xl sm:-inset-8"
        style={{ backgroundColor: "rgba(135, 80, 247, 0.2)" }}
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20">
        <div className="relative aspect-[4/5] w-full">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-white/5 to-white/[0.02] p-8">
              <span
                aria-hidden="true"
                className="font-newRocker text-5xl text-white/15 sm:text-6xl lg:text-7xl"
              >
                NA
              </span>
              <p className="sr-only">Profile photo placeholder for {SITE_CONFIG.name}</p>
            </div>
          )}
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1c0d28]/80 to-transparent"
        />
      </div>
    </div>
  );
}
