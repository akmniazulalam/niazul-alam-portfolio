import { SKILLS_DATA } from "@/data/skills";
import { FadeUp } from "@/components/ui";

export function SkillsFavoriteStack() {
  const { favoriteStack } = SKILLS_DATA;

  return (
    <FadeUp>
      <article
        aria-labelledby="skills-stack-heading"
        className="rounded-2xl border border-[#ef9d7a]/20 bg-gradient-to-br from-[#ef9d7a]/5 to-transparent p-6 sm:p-8 transition-all duration-300 hover:border-[#ef9d7a]/40 hover:shadow-[0_0_30px_rgba(239,157,122,0.15)]"
      >
        <div className="mb-4 flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#ef9d7a]/30 bg-[#ef9d7a]/10 text-lg"
          >
            ⚡
          </span>
          <h3
            id="skills-stack-heading"
            className="font-rajdhani text-xl font-bold text-text sm:text-2xl"
          >
            {favoriteStack.title}
          </h3>
        </div>

        <ul
          className="flex flex-wrap gap-2.5"
          aria-labelledby="skills-stack-heading"
        >
          {favoriteStack.items.map((item, index) => (
            <li key={item.name} className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-[#ef9d7a]/40 bg-[#ef9d7a]/10 px-4 py-1.5 font-poppins text-sm font-semibold text-[#ef9d7a] transition-colors duration-300 hover:border-[#ef9d7a]/70 hover:bg-[#ef9d7a]/20">
                {item.name}
              </span>
              {index < favoriteStack.items.length - 1 && (
                <span aria-hidden="true" className="font-poppins text-sm text-text/30">
                  +
                </span>
              )}
            </li>
          ))}
        </ul>
      </article>
    </FadeUp>
  );
}
