import { ABOUT_DATA } from "@/data/about";
import { cn } from "@/utils/cn";

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
      className={cn("lg:col-span-2", className)}
    >
      <EducationTimeline items={education.items} />
    </AboutBlock>
  );
}
