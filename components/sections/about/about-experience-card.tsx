import { ABOUT_DATA } from "@/data/about";

import { AboutBlock } from "./about-block";
import { AboutText } from "./about-text";

export function AboutExperienceCard() {
  const { experience } = ABOUT_DATA;

  return (
    <AboutBlock title={experience.title} headingId="about-experience-heading">
      <ul className="space-y-6">
        {experience.items.map((item) => (
          <li
            key={`${item.role}-${item.company}`}
            className="rounded-xl border border-white/10 bg-white/2 p-4 sm:p-5"
          >
            <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h4 className="font-rajdhani text-lg font-bold text-text">
                {item.role}
              </h4>
              <span className="font-poppins text-xs text-[#ef9d7a] sm:text-sm">
                {item.period}
              </span>
            </div>
            <p className="mb-2 font-poppins text-sm font-medium text-text/80">
              {item.company}
            </p>
            <AboutText>{item.description}</AboutText>
          </li>
        ))}
      </ul>
    </AboutBlock>
  );
}
