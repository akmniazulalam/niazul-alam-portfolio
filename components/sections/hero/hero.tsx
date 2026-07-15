import Link from "next/link";

import { Container } from "@/components/ui";
import { HERO_CONTENT, HERO_PROJECTS_HREF } from "@/constants/hero";
import { RESUME_PATH } from "@/constants/navigation";
import { cn } from "@/utils/cn";

import { HeroProfileCard } from "./hero-profile-card";
import { HeroSocialLinks } from "./hero-social-links";

const focusRingStyles =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0715]";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="min-h-screen bg-gradient-to-b from-[#0f0715] to-[#1c0d28]"
    >
      <Container className="flex min-h-screen items-center py-16 sm:py-20 lg:py-24">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <header className="flex flex-col gap-6 text-center lg:text-left">
            <p className="font-newRocker text-sm tracking-widest text-[#ef9d7a] uppercase sm:text-base">
              {HERO_CONTENT.greeting}
            </p>

            <div className="space-y-3">
              <h1
                id="hero-heading"
                className="font-rajdhani text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                {HERO_CONTENT.name}
              </h1>

              <h2 className="font-rajdhani text-2xl font-bold sm:text-3xl lg:text-4xl">
                <span className="bg-gradient-to-r from-[#8852F7] to-[#fdfdff] bg-clip-text text-transparent">
                  {HERO_CONTENT.role}
                </span>
              </h2>
            </div>

            <p className="mx-auto max-w-xl font-poppins text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
              {HERO_CONTENT.intro}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <Link
                href={HERO_PROJECTS_HREF}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-full bg-[#FF014F] px-7 py-3 font-poppins text-sm font-semibold text-white shadow-lg shadow-[#FF014F]/20 transition-all duration-300 hover:bg-[#FF014F]/90 hover:shadow-[#FF014F]/30 active:scale-[0.98]",
                  focusRingStyles,
                )}
              >
                View Projects
              </Link>

              <a
                href={RESUME_PATH}
                download
                aria-label="Download resume (PDF)"
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-full border border-[#ef9d7a]/50 bg-transparent px-7 py-3 font-poppins text-sm font-semibold text-text transition-all duration-300 hover:border-[#ef9d7a] hover:bg-[#ef9d7a]/10 active:scale-[0.98]",
                  focusRingStyles,
                )}
              >
                Download Resume
              </a>
            </div>

            <HeroSocialLinks className="justify-center lg:justify-start" />
          </header>

          <div>
            <HeroProfileCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
