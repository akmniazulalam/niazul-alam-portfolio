import type { SkillCategory } from "@/data/skills";

import { SkillsBlock } from "./skills-block";
import { SkillsText } from "./skills-text";

type SkillsCategoryGridProps = {
  category: SkillCategory;
};

export function SkillsCategoryGrid({ category }: SkillsCategoryGridProps) {
  return (
    <SkillsBlock
      title={category.title}
      headingId={`skills-${category.id}-heading`}
    >
      <ul className="grid gap-3 sm:grid-cols-2">
        {category.items.map((item, index) => (
          <li
            key={`${category.id}-${item.name}-${index}`}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
          >
            <h4 className="mb-1 font-rajdhani text-base font-bold text-text">
              {item.name}
            </h4>
            <SkillsText>{item.description}</SkillsText>
          </li>
        ))}
      </ul>
    </SkillsBlock>
  );
}
