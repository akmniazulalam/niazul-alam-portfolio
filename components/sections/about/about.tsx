import { Container } from "@/components/ui";

import { AboutEducationTimeline } from "./about-education-timeline";
import { AboutExperienceCard } from "./about-experience-card";
import { AboutFutureGoals } from "./about-future-goals";
import { AboutHeader } from "./about-header";
import { AboutHobbies } from "./about-hobbies";
import { AboutIntroduction } from "./about-introduction";
import { AboutResumeCta } from "./about-resume-cta";
import { AboutStrengths } from "./about-strengths";
import { AboutWhyWebDev } from "./about-why-web-dev";
import { AboutWorkingProcess } from "./about-working-process";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-[#0a0909]">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16">
          <AboutHeader />

          <AboutIntroduction />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <AboutExperienceCard />
            <AboutEducationTimeline />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <AboutWhyWebDev />
            <AboutWorkingProcess />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <AboutStrengths />
            <AboutFutureGoals />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <AboutHobbies />
            <AboutResumeCta />
          </div>
        </div>
      </Container>
    </section>
  );
}
