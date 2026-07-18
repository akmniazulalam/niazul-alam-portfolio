import Link from "next/link";
import { Container, FadeUp, StaggerContainer, StaggerItem } from "@/components/ui";
import { NAV_LINKS } from "@/constants/navigation";
import { SOCIAL_LINKS } from "@/constants/social";
import {
  GitHubIcon,
  LinkedInIcon,
  FacebookIcon,
  EmailIcon,
} from "@/components/sections/hero/hero-social-links";

const SOCIAL_ICONS = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
  email: EmailIcon,
} as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#050709] py-12 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
          {/* ── Column 1: Brand & Tagline (FadeUp) ────────────────────── */}
          <FadeUp amount="some" className="space-y-4 md:col-span-5 lg:col-span-6">
            <Link
              href="/#home"
              className="group inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050709] rounded-md"
              aria-label="A.K.M. Niazul Alam — Back to top"
            >
              <span className="font-newRocker text-xl tracking-wide text-text transition-colors group-hover:text-[#ef9d7a] sm:text-2xl">
                A.K.M. Niazul Alam
              </span>
            </Link>
            <p className="max-w-sm font-poppins text-sm leading-relaxed text-text/70">
              Building modern, responsive and user-focused web experiences.
            </p>
          </FadeUp>

          {/* ── Column 2: Quick Links (StaggerContainer) ─────────────── */}
          <div className="space-y-4 md:col-span-3 lg:col-span-3">
            <FadeUp amount="some">
              <h2 className="font-rajdhani text-xs font-bold uppercase tracking-widest text-text/40">
                Quick Links
              </h2>
            </FadeUp>
            <StaggerContainer staggerDelay={0.05} amount="some">
              <ul className="flex flex-col gap-2.5 font-rajdhani text-sm font-bold uppercase tracking-wider">
                {NAV_LINKS.map((link) => (
                  <li key={link.sectionId}>
                    <StaggerItem>
                      <Link
                        href={`/#${link.sectionId}`}
                        className="text-text/75 transition-colors duration-300 hover:text-[#ef9d7a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050709] focus-visible:rounded"
                      >
                        {link.label}
                      </Link>
                    </StaggerItem>
                  </li>
                ))}
              </ul>
            </StaggerContainer>
          </div>

          {/* ── Column 3: Social Links (StaggerContainer) ────────────── */}
          <div className="space-y-4 md:col-span-4 lg:col-span-3">
            <FadeUp amount="some">
              <h2 className="font-rajdhani text-xs font-bold uppercase tracking-widest text-text/40">
                Connect Online
              </h2>
            </FadeUp>
            <StaggerContainer staggerDelay={0.05} amount="some">
              <ul className="flex flex-wrap items-center gap-3" aria-label="Social media profiles">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = SOCIAL_ICONS[link.id];
                  const isExternal = link.href.startsWith("http");

                  return (
                    <li key={link.id}>
                      <StaggerItem>
                        <a
                          href={link.href}
                          aria-label={link.label}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/10 text-muted transition-all duration-300 hover:-translate-y-1 hover:border-[#8852F7]/40 hover:bg-white/[0.03] hover:text-[#ef9d7a] hover:shadow-[0_0_15px_rgba(136,82,247,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050709]"
                        >
                          <Icon />
                        </a>
                      </StaggerItem>
                    </li>
                  );
                })}
              </ul>
            </StaggerContainer>
          </div>
        </div>

        {/* ── Divider & Copyright (FadeUp with delay) ────────────────── */}
        <FadeUp
          delay={0.2}
          amount="some"
          className="mt-12 border-t border-white/[0.06] pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between font-poppins text-xs text-text/45"
        >
          <p>© {currentYear} A.K.M. Niazul Alam. All rights reserved.</p>
          <p>Built with Next.js, TypeScript & Tailwind CSS.</p>
        </FadeUp>
      </Container>
    </footer>
  );
}
