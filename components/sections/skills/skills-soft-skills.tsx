import { SKILLS_DATA } from "@/data/skills";

import { SkillsBlock } from "./skills-block";
import { SkillsText } from "./skills-text";

export function SkillsSoftSkills() {
  const { softSkills } = SKILLS_DATA;

  return (
    <SkillsBlock title={softSkills.title} headingId="skills-soft-heading">
      <ul className="space-y-3">
        {softSkills.items.map((item, index) => (
          <li
            key={`${item.name}-${index}`}
            className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4"
          >
            <span
              aria-hidden="true"
              className="mt-1.5 size-2 shrink-0 rounded-full bg-[#8852F7]"
            />
            <div>
              <h4 className="mb-1 font-rajdhani text-base font-bold text-text">
                {item.name}
              </h4>
              <SkillsText>{item.description}</SkillsText>
            </div>
          </li>
        ))}
      </ul>
    </SkillsBlock>
  );
}
