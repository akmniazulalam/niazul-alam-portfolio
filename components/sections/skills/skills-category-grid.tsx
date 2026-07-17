import type { SkillCategory } from "@/data/skills";
import { cn } from "@/utils/cn";
import { SkillsIcon } from "./skills-icon";
import { StaggerContainer, StaggerItem } from "@/components/ui";

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
        "rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:p-8 transition-all duration-300",
        "hover:-translate-y-1 hover:border-[#8852F7]/40 hover:shadow-[0_0_30px_rgba(135,80,247,0.2)]",
        className,
      )}
    >
      <h3
        id={`skills-${category.id}-heading`}
        className="mb-4 font-rajdhani text-lg font-bold text-text sm:text-xl"
      >
        {category.title}
      </h3>

      <StaggerContainer staggerDelay={0.03} amount="some">
        <ul
          className="flex flex-wrap gap-2"
          aria-labelledby={`skills-${category.id}-heading`}
        >
          {category.items.map((item) => (
            <li key={item.name}>
              <StaggerItem>
                <span
                  tabIndex={0}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-1.5 font-poppins text-xs font-medium text-text/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8852F7]/50 hover:bg-[#8852F7]/10 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0909] group"
                >
                  <SkillsIcon
                    name={item.name}
                    className="size-3.5 shrink-0 text-text/60 transition-all duration-300 group-hover:scale-110 group-hover:text-[#8852F7] group-focus-visible:scale-110 group-focus-visible:text-[#8852F7]"
                  />
                  <span>{item.name}</span>
                </span>
              </StaggerItem>
            </li>
          ))}
        </ul>
      </StaggerContainer>
    </article>
  );
}
