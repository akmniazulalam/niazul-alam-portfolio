import { SKILLS_DATA } from "@/data/skills";
import { FadeUp } from "@/components/ui";

export function SkillsFavoriteStack() {
  const { favoriteStack } = SKILLS_DATA;

  return (
    <FadeUp>
      <article
        aria-labelledby="skills-stack-heading"
        className="rounded-2xl border border-[#ef9d7a]/20 bg-gradient-to-r from-[#ef9d7a]/5 to-transparent p-5 sm:p-6 transition-all duration-300 hover:border-[#ef9d7a]/35 hover:shadow-[0_0_30px_rgba(239,157,122,0.15)]"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#ef9d7a]/30 bg-[#ef9d7a]/10 text-lg"
            >
              ⚡
            </span>
            <h3
              id="skills-stack-heading"
              className="font-rajdhani text-lg font-bold text-text sm:text-xl"
            >
              {favoriteStack.title}
            </h3>
          </div>

          <ul
            className="flex flex-wrap items-center gap-2 sm:gap-2.5"
            aria-labelledby="skills-stack-heading"
          >
            {favoriteStack.items.map((item, index) => (
              <li key={item.name} className="flex items-center gap-2 sm:gap-2.5">
                <span className="inline-flex items-center rounded-full border border-[#ef9d7a]/35 bg-[#ef9d7a]/10 px-3 py-1 font-poppins text-xs font-semibold text-[#ef9d7a] transition-all duration-300 hover:scale-105 hover:bg-[#ef9d7a]/20 hover:shadow-[0_0_15px_rgba(239,157,122,0.2)] sm:px-4 sm:py-1.5 sm:text-sm">
                  {item.name}
                </span>
                {index < favoriteStack.items.length - 1 && (
                  <span aria-hidden="true" className="font-poppins text-xs text-text/25 sm:text-sm">
                    +
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </FadeUp>
  );
}
