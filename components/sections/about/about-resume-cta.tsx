import { ABOUT_DATA } from "@/data/about";
import { RESUME_PATH } from "@/constants/navigation";

import { AboutBlock } from "./about-block";
import { ResumeCTA } from "./resume-cta";

export function AboutResumeCta() {
  const { resumeCta } = ABOUT_DATA;

  return (
    <AboutBlock
      title={resumeCta.title}
      headingId="about-resume-heading"
      className="h-full"
    >
      <ResumeCTA
        description={resumeCta.description}
        buttonLabel={resumeCta.buttonLabel}
        resumeHref={RESUME_PATH}
        secondaryButtonLabel={resumeCta.secondaryButtonLabel}
        secondaryButtonHref={resumeCta.secondaryButtonHref}
      />
    </AboutBlock>
  );
}
