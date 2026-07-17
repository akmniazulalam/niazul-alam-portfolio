import { SKILLS_DATA } from "@/data/skills";
import { FadeUp } from "@/components/ui";

export function SkillsPhilosophy() {
  const { philosophy } = SKILLS_DATA;

  return (
    <FadeUp>
      <article
        aria-labelledby="skills-philosophy-heading"
        className="rounded-2xl border border-[#8852F7]/25 bg-gradient-to-br from-[#8852F7]/8 to-transparent p-6 sm:p-8 transition-all duration-300 hover:border-[#8852F7]/40 hover:shadow-[0_0_30px_rgba(135,80,247,0.2)]"
      >
        <div className="mb-4 flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#8852F7]/30 bg-[#8852F7]/15 text-lg"
          >
            💡
          </span>
          <h3
            id="skills-philosophy-heading"
            className="font-rajdhani text-xl font-bold text-text sm:text-2xl"
          >
            {philosophy.title}
          </h3>
        </div>
        <blockquote>
          <p className="font-poppins text-sm leading-relaxed text-text/75 sm:text-base">
            {philosophy.quote}
          </p>
        </blockquote>
      </article>
    </FadeUp>
  );
}
