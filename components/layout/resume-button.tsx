import { RESUME_PATH } from "@/constants/navigation";
import { cn } from "@/utils/cn";

type ResumeButtonProps = {
  className?: string;
};

const resumeButtonStyles =
  "inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 py-2.5 font-poppins text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]";

export function ResumeButton({ className }: ResumeButtonProps) {
  return (
    <a
      href={RESUME_PATH}
      className={cn(resumeButtonStyles, className)}
      download
      aria-label="Download resume (PDF)"
    >
      Resume
    </a>
  );
}
