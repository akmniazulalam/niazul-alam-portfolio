import type { SkillCategory } from "@/data/skills";
import { cn } from "@/utils/cn";

type SkillsCategoryGridProps = {
  category: SkillCategory;
  className?: string;
};

export function SkillsCategoryGrid({
  category,
  className,
}: SkillsCategoryGridProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 transition-all duration-300",
        "hover:border-[#8852F7]/40 hover:shadow-[0_0_30px_rgba(135,80,247,0.2)]",
        className,
      )}
    >
      <h3
        id={`skills-${category.id}-heading`}
        className="mb-4 font-rajdhani text-lg font-bold text-text sm:text-xl"
      >
        {category.title}
      </h3>

      <ul
        className="flex flex-wrap gap-2"
        aria-labelledby={`skills-${category.id}-heading`}
      >
        {category.items.map((item) => (
          <li key={item.name}>
            <span className="inline-block rounded-full border border-[#8852F7]/30 bg-[#8852F7]/10 px-3 py-1 font-poppins text-xs font-medium text-text/90 transition-colors duration-300 hover:border-[#8852F7]/60 hover:bg-[#8852F7]/20 sm:text-sm">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
