import { SKILLS_DATA } from "@/data/skills";
import { cn } from "@/utils/cn";

import { SkillsText } from "./skills-text";

export function SkillsHeader({ className }: { className?: string }) {
  const { section } = SKILLS_DATA;

  return (
    <header className={cn("space-y-4 text-center lg:text-left", className)}>
      <p className="font-newRocker text-sm tracking-widest text-[#ef9d7a] uppercase sm:text-base">
        {section.eyebrow}
      </p>
      <h2
        id="skills-heading"
        className="font-rajdhani text-3xl font-bold text-text sm:text-4xl lg:text-5xl"
      >
        {section.title}
      </h2>
      <SkillsText className="mx-auto max-w-2xl lg:mx-0">
        {section.description}
      </SkillsText>
    </header>
  );
}
