import { cn } from "@/utils/cn";

import { AboutText } from "./about-text";

type ResumeCTAProps = {
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
  description,
  buttonLabel,
  resumeHref,
  secondaryButtonLabel,
  secondaryButtonHref,
  className,
}: ResumeCTAProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-between gap-6 rounded-xl border border-[#FF014F]/20 bg-[#FF014F]/5 p-4 sm:p-5",
        className,
      )}
    >
      <AboutText>{description}</AboutText>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={resumeHref}
          download
          aria-label={`${buttonLabel} (PDF)`}
          className={cn(
            buttonBaseStyles,
            "bg-[#FF014F] text-white shadow-lg shadow-[#FF014F]/15 hover:-translate-y-0.5 hover:bg-[#FF014F]/90 hover:shadow-[#FF014F]/25",
          )}
        >
          {buttonLabel}
        </a>

        <a
          href={secondaryButtonHref}
          className={cn(
            buttonBaseStyles,
            "border border-[#ef9d7a]/40 bg-transparent text-text hover:-translate-y-0.5 hover:border-[#ef9d7a] hover:bg-[#ef9d7a]/10",
          )}
        >
          {secondaryButtonLabel}
        </a>
      </div>
    </div>
  );
}
