import { CONTACT_DATA } from "@/data/contact";
import { FadeUp } from "@/components/ui";
import { cn } from "@/utils/cn";

export function ContactHeader({ className }: { className?: string }) {
  const { section } = CONTACT_DATA;

  return (
    <header className={cn("space-y-4 text-center lg:text-left", className)}>
      <FadeUp>
        <p className="font-newRocker text-sm tracking-widest text-[#ef9d7a] uppercase sm:text-base">
          {section.eyebrow}
        </p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2
          id="contact-heading"
          className="font-rajdhani text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8852F7] to-[#fdfdff] sm:text-4xl lg:text-5xl tracking-tight"
        >
          {section.title}
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <p className="mx-auto max-w-2xl font-poppins text-sm leading-relaxed text-text/85 sm:text-base lg:mx-0">
          {section.description}
        </p>
      </FadeUp>
    </header>
  );
}
