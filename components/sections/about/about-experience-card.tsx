import { ABOUT_DATA } from "@/data/about";
import { FadeLeft } from "@/components/ui";

import { AboutBlock } from "./about-block";
import { ExperienceCard } from "./experience-card";

export function AboutExperienceCard() {
  const { experience } = ABOUT_DATA;

  return (
    <AboutBlock
      title={experience.title}
      headingId="about-experience-heading"
      variant="ghost"
    >
      <ul className="space-y-6">
        {experience.items.map((item) => (
          <li key={`${item.role}-${item.company}-${item.period}`}>
            <FadeLeft>
              <ExperienceCard item={item} />
            </FadeLeft>
          </li>
        ))}
      </ul>
    </AboutBlock>
  );
}
