import { cn } from "@/utils/cn";

import { AboutText } from "./about-text";

type ResumeCTAProps = {
  title: string;
  description: string;
  buttonLabel: string;
  resumeHref: string;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
  className?: string;
};

const buttonBaseStyles =
  "inline-flex min-h-11 w-full items-center justify-center rounded-full px-6 py-3 font-poppins text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0909] active:scale-[0.98] sm:w-auto";

export function ResumeCTA({
  title,
  description,
  buttonLabel,
  resumeHref,
  secondaryButtonLabel,
  secondaryButtonHref,
  className,
}: ResumeCTAProps) {
  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.03] to-[#FF014F]/[0.02] p-6 sm:p-8 lg:p-10 shadow-xl shadow-black/10 transition-all duration-300 hover:border-[#FF014F]/30 hover:shadow-[0_0_30px_rgba(135,80,247,0.2)]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 size-32 rounded-full bg-[#FF014F]/10 blur-2xl pointer-events-none"
      />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="max-w-2xl space-y-3">
          <h3 className="font-rajdhani text-xl font-bold tracking-tight text-text sm:text-2xl">
            {title}
          </h3>
          <AboutText className="text-text/80">{description}</AboutText>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:shrink-0">
          <a
            href={resumeHref}
            download
            aria-label={`${buttonLabel} (PDF)`}
            className={cn(
              buttonBaseStyles,
              "bg-[#FF014F] text-white shadow-lg shadow-[#FF014F]/15 hover:-translate-y-1 hover:bg-[#FF014F]/90 hover:shadow-[0_0_20px_rgba(255,1,79,0.4)]",
            )}
          >
            {buttonLabel}
          </a>

          <a
            href={secondaryButtonHref}
            className={cn(
              buttonBaseStyles,
              "border border-[#ef9d7a]/40 bg-transparent text-text hover:-translate-y-1 hover:border-[#ef9d7a] hover:bg-[#ef9d7a]/10 hover:shadow-[0_0_20px_rgba(239,157,122,0.15)]",
            )}
          >
            {secondaryButtonLabel}
          </a>
        </div>
      </div>
    </article>
  );
}
