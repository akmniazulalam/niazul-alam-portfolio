import { cn } from "@/utils/cn";

type SkillsTextProps = {
  children: React.ReactNode;
  className?: string;
};

export function SkillsText({ children, className }: SkillsTextProps) {
  return (
    <p
      className={cn(
        "font-poppins text-sm leading-relaxed text-muted sm:text-base",
        className,
      )}
    >
      {children}
    </p>
  );
}
