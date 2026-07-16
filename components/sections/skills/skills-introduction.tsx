import { SKILLS_DATA } from "@/data/skills";

import { SkillsBlock } from "./skills-block";
import { SkillsText } from "./skills-text";

export function SkillsIntroduction() {
  const { introduction } = SKILLS_DATA;

  return (
    <SkillsBlock title={introduction.title} headingId="skills-intro-heading">
      <div className="space-y-4">
        {introduction.paragraphs.map((paragraph) => (
          <SkillsText key={paragraph}>{paragraph}</SkillsText>
        ))}
      </div>
    </SkillsBlock>
  );
}
