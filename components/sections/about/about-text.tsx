import { cn } from "@/utils/cn";

type AboutTextProps = {
  children: React.ReactNode;
  className?: string;
};

export function AboutText({ children, className }: AboutTextProps) {
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
