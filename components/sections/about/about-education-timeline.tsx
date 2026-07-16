import { ABOUT_DATA } from "@/data/about";

import { AboutBlock } from "./about-block";
import { EducationTimeline } from "./education-timeline";

type AboutEducationTimelineProps = {
  className?: string;
};

export function AboutEducationTimeline({ className }: AboutEducationTimelineProps) {
  const { education } = ABOUT_DATA;

  return (
    <AboutBlock
      title={education.title}
      headingId="about-education-heading"
      variant="ghost"
      className={className}
    >
      <EducationTimeline items={education.items} />
    </AboutBlock>
  );
}
