import { ABOUT_DATA } from "@/data/about";

import { AboutBlock } from "./about-block";
import { AboutText } from "./about-text";

export function AboutEducationTimeline() {
  const { education } = ABOUT_DATA;

  return (
    <AboutBlock title={education.title} headingId="about-education-heading">
      <ol className="relative space-y-6 border-l border-white/10 pl-6">
        {education.items.map((item) => (
          <li key={`${item.degree}-${item.institution}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[1.8125rem] top-1.5 size-3 rounded-full border-2 border-[#8852F7] bg-[#0a0909]"
            />
            <div className="space-y-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h4 className="font-rajdhani text-lg font-bold text-text">
                  {item.degree}
                </h4>
                <span className="font-poppins text-xs text-[#ef9d7a] sm:text-sm">
                  {item.period}
                </span>
              </div>
              <p className="font-poppins text-sm font-medium text-text/80">
                {item.institution}
              </p>
              <AboutText>{item.description}</AboutText>
            </div>
          </li>
        ))}
      </ol>
    </AboutBlock>
  );
}
