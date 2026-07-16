import { SKILLS_DATA } from "@/data/skills";

import { SkillsBlock } from "./skills-block";
import { SkillsText } from "./skills-text";

export function SkillsCurrentlyLearning() {
  const { currentlyLearning } = SKILLS_DATA;

  return (
    <SkillsBlock
      title={currentlyLearning.title}
      headingId="skills-learning-heading"
    >
      <ul className="space-y-4">
        {currentlyLearning.items.map((item, index) => (
          <li
            key={`${item.name}-${index}`}
            className="rounded-xl border border-[#ef9d7a]/20 bg-[#ef9d7a]/5 p-4 sm:p-5"
          >
            <h4 className="mb-1 font-rajdhani text-base font-bold text-text sm:text-lg">
              {item.name}
            </h4>
            <SkillsText>{item.description}</SkillsText>
          </li>
        ))}
      </ul>
    </SkillsBlock>
  );
}
