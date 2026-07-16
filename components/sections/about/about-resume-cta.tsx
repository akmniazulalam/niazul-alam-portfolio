import { ABOUT_DATA } from "@/data/about";
import { RESUME_PATH } from "@/constants/navigation";
import { cn } from "@/utils/cn";

import { AboutBlock } from "./about-block";
import { AboutText } from "./about-text";

const focusRingStyles =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0909]";

export function AboutResumeCta() {
  const { resumeCta } = ABOUT_DATA;

  return (
    <AboutBlock title={resumeCta.title} headingId="about-resume-heading">
      <div className="flex h-full flex-col justify-between gap-6">
        <AboutText>{resumeCta.description}</AboutText>
        <a
          href={RESUME_PATH}
          download
          aria-label="Download resume (PDF)"
          className={cn(
            "inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#FF014F] px-7 py-3 font-poppins text-sm font-semibold text-white sm:w-auto sm:self-start",
            focusRingStyles,
          )}
        >
          {resumeCta.buttonLabel}
        </a>
      </div>
    </AboutBlock>
  );
}
