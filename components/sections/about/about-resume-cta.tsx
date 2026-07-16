import { ABOUT_DATA } from "@/data/about";
import { RESUME_PATH } from "@/constants/navigation";

import { ResumeCTA } from "./resume-cta";

export function AboutResumeCta() {
  const { resumeCta } = ABOUT_DATA;

  return (
    <ResumeCTA
      title={resumeCta.title}
      description={resumeCta.description}
      buttonLabel={resumeCta.buttonLabel}
      resumeHref={RESUME_PATH}
      secondaryButtonLabel={resumeCta.secondaryButtonLabel}
      secondaryButtonHref={resumeCta.secondaryButtonHref}
    />
  );
}
