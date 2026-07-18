import { Container, StaggerContainer } from "@/components/ui";
import { ExperienceHeader } from "./experience-header";
import { ExperienceCard } from "./experience-card";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-gradient-to-b from-[#0f0715] to-[#1c0d28]"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-12 sm:gap-14 lg:gap-16">
          <ExperienceHeader />
          <StaggerContainer staggerDelay={0.1} amount="some">
            <ExperienceCard />
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
