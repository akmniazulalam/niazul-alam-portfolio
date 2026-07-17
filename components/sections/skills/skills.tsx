import { Container, FadeLeft, FadeRight, StaggerContainer, StaggerItem } from "@/components/ui";
import { SKILLS_DATA } from "@/data/skills";

import { SkillsCategoryGrid } from "./skills-category-grid";
import { SkillsFavoriteStack } from "./skills-favorite-stack";
import { SkillsHeader } from "./skills-header";
import { SkillsPhilosophy } from "./skills-philosophy";
import { SkillsWorkingStyle } from "./skills-working-style";

export function Skills() {
  const { categories } = SKILLS_DATA;

  // Split categories for layout
  const [frontend, styling, stateManagement, backend, database, authentication, deployment, tools, other] =
    categories;

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-[#0a0909]"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-12 sm:gap-14 lg:gap-16">

          {/* ── Section Header ─────────────────────────────────────────── */}
          <SkillsHeader />

          {/* ── Skill Categories ───────────────────────────────────────── */}
          <div className="flex flex-col gap-5" aria-label="Skill categories">
            {/* Row 1: Frontend (left) + Styling (right) */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <FadeLeft className="lg:col-span-2 h-full">
                <SkillsCategoryGrid category={frontend} className="h-full" />
              </FadeLeft>
              <FadeRight className="h-full">
                <SkillsCategoryGrid category={styling} className="h-full" />
              </FadeRight>
            </div>

            {/* Row 2: State Management + Backend + Database */}
            <StaggerContainer>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <StaggerItem className="h-full">
                  <SkillsCategoryGrid category={stateManagement} className="h-full" />
                </StaggerItem>
                <StaggerItem className="h-full">
                  <SkillsCategoryGrid category={backend} className="h-full" />
                </StaggerItem>
                <StaggerItem className="sm:col-span-2 lg:col-span-1 h-full">
                  <SkillsCategoryGrid category={database} className="h-full" />
                </StaggerItem>
              </div>
            </StaggerContainer>

            {/* Row 3: Tools (left) + Other (right) */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <FadeLeft className="lg:col-span-2 h-full">
                <SkillsCategoryGrid category={tools} className="h-full" />
              </FadeLeft>
              <FadeRight className="h-full">
                <SkillsCategoryGrid category={other} className="h-full" />
              </FadeRight>
            </div>

            {/* Row 4: Auth + Deployment */}
            <StaggerContainer>
              <div className="grid gap-5 sm:grid-cols-2">
                <StaggerItem className="h-full">
                  <SkillsCategoryGrid category={authentication} className="h-full" />
                </StaggerItem>
                <StaggerItem className="h-full">
                  <SkillsCategoryGrid category={deployment} className="h-full" />
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>

          {/* ── Philosophy + Working Style ──────────────────────────────── */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <SkillsPhilosophy />
            <SkillsWorkingStyle />
          </div>

          {/* ── Favorite Stack ─────────────────────────────────────────── */}
          <SkillsFavoriteStack />

        </div>
      </Container>
    </section>
  );
}
