import { EXPERIENCE_DATA } from "@/data/experience";
import { FadeRight, StaggerContainer, StaggerItem } from "@/components/ui";
import { TbCalendar, TbMapPin, TbCheck } from "react-icons/tb";
import { SkillsIcon } from "../skills";

function formatTextWithHighlights(text: string): React.ReactNode {
  const highlights: Record<string, string> = {
    "responsive CMS and Shopify pages": "text-[#ef9d7a] font-semibold",
    "Shopify themes": "text-[#8852F7] font-semibold",
    "reusable UI components": "text-[#ef9d7a] font-semibold",
    "frontend bugs": "text-[#8852F7] font-semibold",
    "UI consistency": "text-[#ef9d7a] font-semibold",
    "development team": "text-text font-semibold",
    "multiple screen sizes": "text-[#8852F7] font-semibold",
  };

  const regex = new RegExp(`(${Object.keys(highlights).join("|")})`, "g");
  const parts = text.split(regex);

  return parts.map((part, index) => {
    const className = highlights[part];
    if (className) {
      return (
        <span key={index} className={className}>
          {part}
        </span>
      );
    }
    return part;
  });
}

export function ExperienceCard() {
  const { experience } = EXPERIENCE_DATA;

  return (
    <div className="relative pl-8 sm:pl-12 md:pl-16 group/timeline">
      {/* Timeline line */}
      <div
        aria-hidden="true"
        className="absolute left-4 sm:left-6 md:left-8 top-8 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#8852F7] via-[#8852F7]/20 to-transparent"
      />
      
      {/* Timeline node */}
      <div
        aria-hidden="true"
        className="absolute left-4 sm:left-6 md:left-8 top-8 z-10 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#8852F7] bg-[#0f0715] transition-all duration-300 group-hover/timeline:border-[#ef9d7a] group-hover/timeline:scale-110 group-hover/timeline:shadow-[0_0_15px_rgba(239,157,122,0.5)]"
      />

      <FadeRight>
        <StaggerItem>
          <article
            aria-labelledby="experience-job-heading"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#8852F7]/40 hover:shadow-[0_0_30px_rgba(135,80,247,0.2)]"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              
              {/* ── Left Column: Job Details & Tech Stack ────────────────── */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div>
                  <span className="inline-flex items-center rounded-full bg-[#ef9d7a]/10 border border-[#ef9d7a]/25 px-3 py-1 font-poppins text-xs font-semibold text-[#ef9d7a] mb-3">
                    {experience.employmentType}
                  </span>
                  <h3
                    id="experience-job-heading"
                    className="font-rajdhani text-2xl font-bold text-text sm:text-3xl"
                  >
                    {experience.position}
                  </h3>
                  <p className="font-rajdhani text-lg font-bold text-[#ef9d7a] mt-1 sm:text-xl">
                    {experience.company}
                  </p>
                </div>

                {/* Metadata Chips */}
                <ul className="flex flex-wrap gap-2.5 font-poppins text-xs font-semibold" aria-label="Employment details">
                  <li className="inline-flex items-center gap-2 rounded-xl bg-white/[0.03] border border-white/5 px-3.5 py-1.5 text-text/80">
                    <TbCalendar aria-hidden="true" className="size-4 shrink-0 text-[#ef9d7a]" />
                    <span className="sr-only">Duration: </span>
                    <span>{experience.duration}</span>
                  </li>
                  <li className="inline-flex items-center gap-2 rounded-xl bg-white/[0.03] border border-white/5 px-3.5 py-1.5 text-text/80">
                    <TbMapPin aria-hidden="true" className="size-4 shrink-0 text-[#ef9d7a]" />
                    <span className="sr-only">Location: </span>
                    <span>{experience.location}</span>
                  </li>
                </ul>

                {/* Tech Stack used */}
                <div className="space-y-3">
                  <h4 className="font-rajdhani text-base font-bold text-text uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <StaggerContainer staggerDelay={0.03} amount="some">
                    <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                      {experience.technologies.map((tech) => (
                        <li key={tech}>
                          <StaggerItem>
                            <span
                              tabIndex={0}
                              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-1.5 font-poppins text-xs font-medium text-text/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8852F7]/50 hover:bg-[#8852F7]/10 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0909] group"
                            >
                              <SkillsIcon
                                name={tech}
                                className="size-3.5 shrink-0 text-text/60 transition-all duration-300 group-hover:scale-110 group-hover:text-[#8852F7] group-focus-visible:scale-110 group-focus-visible:text-[#8852F7]"
                              />
                              <span>{tech}</span>
                            </span>
                          </StaggerItem>
                        </li>
                      ))}
                    </ul>
                  </StaggerContainer>
                </div>
              </div>

              {/* ── Right Column: Responsibilities ───────────────────────── */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <h4 className="font-rajdhani text-lg font-bold text-text uppercase tracking-wider">
                  Responsibilities
                </h4>
                
                <StaggerContainer staggerDelay={0.05} amount="some">
                  <ul className="space-y-2.5" aria-label="Responsibilities list">
                    {experience.responsibilities.map((resp) => (
                      <li key={resp}>
                        <StaggerItem>
                          <div
                            tabIndex={0}
                            className="group flex items-start gap-3.5 rounded-xl bg-white/[0.01] border border-white/[0.03] px-4 py-3 transition-all duration-300 hover:bg-white/[0.03] hover:border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0909]"
                          >
                            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#ef9d7a]/10 text-xs text-[#ef9d7a] transition-all duration-300 group-hover:bg-[#ef9d7a]/20 group-focus-visible:bg-[#ef9d7a]/20">
                              <TbCheck aria-hidden="true" className="size-3" />
                            </span>
                            <span className="font-poppins text-sm leading-relaxed text-text/75 transition-colors duration-300 group-hover:text-text group-focus-visible:text-text">
                              {formatTextWithHighlights(resp)}
                            </span>
                          </div>
                        </StaggerItem>
                      </li>
                    ))}
                  </ul>
                </StaggerContainer>
              </div>

            </div>
          </article>
        </StaggerItem>
      </FadeRight>
    </div>
  );
}
