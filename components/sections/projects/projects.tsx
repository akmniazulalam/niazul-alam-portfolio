import { Container, StaggerContainer } from "@/components/ui";
import { PROJECTS_DATA } from "@/data/projects";
import { ProjectsHeader } from "./projects-header";
import { FeaturedProjectCard } from "./featured-project-card";
import { SecondaryProjectCard } from "./secondary-project-card";

export function Projects() {
  const { secondary } = PROJECTS_DATA;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-16 bg-gradient-to-b from-[#1c0d28] to-[#0a0909] lg:scroll-mt-20"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
          {/* Section Header */}
          <ProjectsHeader />

          {/* Featured Project Layout */}
          <FeaturedProjectCard />

          {/* Secondary Projects Layout */}
          <div className="space-y-8 sm:space-y-10">
            <h3 className="font-rajdhani text-xs font-bold uppercase tracking-widest text-text/40">
              Other Notable Projects
            </h3>
            
            <StaggerContainer staggerDelay={0.08} amount="some">
              <ul
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                aria-label="Secondary projects showcase"
              >
                {secondary.map((project) => (
                  <li key={project.title} className="h-full">
                    <SecondaryProjectCard project={project} />
                  </li>
                ))}
              </ul>
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </section>
  );
}
