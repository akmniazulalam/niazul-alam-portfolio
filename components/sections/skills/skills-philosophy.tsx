import { FadeLeft } from "@/components/ui";
import { SKILLS_DATA } from "@/data/skills";

export function SkillsPhilosophy() {
  const { philosophy } = SKILLS_DATA;

  return (
    <FadeLeft className="h-full">
      <article
        aria-labelledby="skills-philosophy-heading"
        className="rounded-2xl border border-[#8852F7]/25 bg-gradient-to-br from-[#8852F7]/8 to-transparent p-5 sm:p-6 lg:p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-[#8852F7]/40 hover:shadow-[0_0_30px_rgba(135,80,247,0.2)]"
      >
        <div className="mb-5 flex items-center gap-3">
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

        <blockquote className="flex-1 flex flex-col justify-center">
          <p className="font-poppins text-sm font-normal leading-relaxed text-text/80 sm:text-base pl-4 border-l-2 border-[#8852F7]/50">
            &ldquo;I enjoy building{" "}
            <span className="font-semibold text-[#ef9d7a]">clean, responsive, and user-friendly</span>{" "}
            web applications using{" "}
            <span className="font-semibold text-[#8852F7]">modern technologies</span>.
            Before seeking help, I prefer exploring solutions independently, then leverage{" "}
            <span className="font-semibold text-[#ef9d7a]">AI tools</span>{" "}
            to validate ideas, improve implementation quality, and continuously expand my knowledge.
            I focus on writing{" "}
            <span className="font-semibold text-[#8852F7]">reusable, maintainable, and production-ready code</span>{" "}
            while always striving to improve my development skills.&rdquo;
          </p>
        </blockquote>
      </article>
    </FadeLeft>
  );
}
