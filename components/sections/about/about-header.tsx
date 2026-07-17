import { ABOUT_DATA } from "@/data/about";
import { cn } from "@/utils/cn";
import { FadeUp } from "@/components/ui";

import { AboutText } from "./about-text";

export function AboutHeader({ className }: { className?: string }) {
  const { section } = ABOUT_DATA;

  return (
    <header className={cn("space-y-4 text-center lg:text-left", className)}>
      <FadeUp>
        <p className="font-newRocker text-sm tracking-widest text-[#ef9d7a] uppercase sm:text-base">
          {section.eyebrow}
        </p>
        <h2
          id="about-heading"
          className="font-rajdhani text-3xl font-bold text-text sm:text-4xl lg:text-5xl"
        >
          {section.title}
        </h2>
      </FadeUp>
      <FadeUp delay={0.15}>
        <AboutText className="mx-auto max-w-2xl lg:mx-0">{section.description}</AboutText>
      </FadeUp>
    </header>
  );
}
