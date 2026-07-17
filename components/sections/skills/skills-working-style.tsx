import { SKILLS_DATA } from "@/data/skills";
import { FadeRight, StaggerContainer, StaggerItem } from "@/components/ui";

export function SkillsWorkingStyle() {
  const { workingStyle } = SKILLS_DATA;

  return (
    <FadeRight className="h-full">
      <article
        aria-labelledby="skills-working-style-heading"
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 h-full transition-all duration-300 hover:border-[#8852F7]/40 hover:shadow-[0_0_30px_rgba(135,80,247,0.2)]"
      >
        <h3
          id="skills-working-style-heading"
          className="mb-5 font-rajdhani text-xl font-bold text-text sm:text-2xl"
        >
          {workingStyle.title}
        </h3>

        <StaggerContainer>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" aria-labelledby="skills-working-style-heading">
            {workingStyle.items.map((item) => (
              <li key={item.label} className="h-full">
                <StaggerItem className="h-full">
                  <div className="flex h-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 transition-all duration-300 hover:border-[#ef9d7a]/30 hover:bg-white/[0.04]">
                    <span
                      aria-hidden="true"
                      className="size-1.5 shrink-0 rounded-full bg-[#ef9d7a]"
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
