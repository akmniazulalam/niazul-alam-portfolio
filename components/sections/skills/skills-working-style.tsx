import { SKILLS_DATA } from "@/data/skills";
import { FadeRight, StaggerContainer, StaggerItem } from "@/components/ui";
import { TbCircleCheckFilled } from "react-icons/tb";

export function SkillsWorkingStyle() {
  const { workingStyle } = SKILLS_DATA;

  return (
    <FadeRight className="h-full">
      <article
        aria-labelledby="skills-working-style-heading"
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:border-[#8852F7]/40 hover:shadow-[0_0_30px_rgba(135,80,247,0.2)]"
      >
        <h3
          id="skills-working-style-heading"
          className="mb-5 font-rajdhani text-xl font-bold text-text sm:text-2xl"
        >
          {workingStyle.title}
        </h3>

        <StaggerContainer>
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            aria-labelledby="skills-working-style-heading"
          >
            {workingStyle.items.map((item) => (
              <li key={item.label} className="h-full">
                <StaggerItem className="h-full">
                  <div
                    tabIndex={0}
                    className="group flex h-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 transition-all duration-300 hover:border-[#ef9d7a]/35 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0909]"
                  >
                    <TbCircleCheckFilled
                      aria-hidden="true"
                      className="size-4 shrink-0 text-[#ef9d7a]/60 transition-colors duration-300 group-hover:text-[#ef9d7a] group-focus-visible:text-[#ef9d7a]"
                    />
                    <span className="font-poppins text-xs font-semibold text-text/85 sm:text-sm">
                      {item.label}
                    </span>
                  </div>
                </StaggerItem>
              </li>
            ))}
          </ul>
        </StaggerContainer>
      </article>
    </FadeRight>
  );
}
