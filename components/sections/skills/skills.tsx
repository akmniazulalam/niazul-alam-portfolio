import { Container } from "@/components/ui";
import { SKILLS_DATA } from "@/data/skills";

import { SkillsCategoryGrid } from "./skills-category-grid";
import { SkillsCurrentlyLearning } from "./skills-currently-learning";
import { SkillsHeader } from "./skills-header";
import { SkillsIntroduction } from "./skills-introduction";
import { SkillsSoftSkills } from "./skills-soft-skills";

export function Skills() {
  const [frontend, backend, database, tools] = SKILLS_DATA.categories;

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-[#0f0715]"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16">
          <SkillsHeader />

          <SkillsIntroduction />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <SkillsCategoryGrid category={frontend} />
            <SkillsCategoryGrid category={backend} />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <SkillsCategoryGrid category={database} />
            <SkillsCategoryGrid category={tools} />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <SkillsSoftSkills />
            <SkillsCurrentlyLearning />
          </div>
        </div>
      </Container>
    </section>
  );
}
