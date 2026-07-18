import { CONTACT_DATA } from "@/data/contact";
import { SOCIAL_LINKS } from "@/constants/social";
import { TbPhone, TbMail, TbMapPin } from "react-icons/tb";
import { FadeLeft, StaggerContainer, StaggerItem } from "@/components/ui";
import {
  GitHubIcon,
  LinkedInIcon,
  FacebookIcon,
  EmailIcon,
} from "../hero/hero-social-links";

const SOCIAL_ICONS = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
  email: EmailIcon,
} as const;

export function ContactInfo() {
  const { info } = CONTACT_DATA;

  return (
    <div className="flex flex-col gap-8">
      {/* ── Contact Cards ─────────────────────────────────────────────── */}
      <StaggerContainer staggerDelay={0.07} amount="some">
        <ul
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1"
          aria-label="Contact methods"
        >
          {/* Email */}
          <li>
            <StaggerItem>
              <a
                href={`mailto:${info.email}`}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8852F7]/40 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(135,80,247,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c0d28]"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#8852F7]/10 text-[#8852F7] transition-all duration-300 group-hover:bg-[#8852F7] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(136,82,247,0.4)]">
                  <TbMail className="size-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 space-y-1">
                  <h3 className="font-rajdhani text-xs font-bold uppercase tracking-widest text-text/40">
                    Email
                  </h3>
                  <p className="font-poppins text-sm font-medium leading-snug text-text/90 transition-colors duration-300 group-hover:text-[#ef9d7a] break-all">
                    {info.email}
                  </p>
                </div>
              </a>
            </StaggerItem>
          </li>

          {/* Phone */}
          <li>
            <StaggerItem>
              <a
                href={`tel:${info.phone}`}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8852F7]/40 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(135,80,247,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c0d28]"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#8852F7]/10 text-[#8852F7] transition-all duration-300 group-hover:bg-[#8852F7] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(136,82,247,0.4)]">
                  <TbPhone className="size-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 space-y-1">
                  <h3 className="font-rajdhani text-xs font-bold uppercase tracking-widest text-text/40">
                    Phone
                  </h3>
                  <p className="font-poppins text-sm font-medium leading-snug text-text/90 transition-colors duration-300 group-hover:text-[#ef9d7a]">
                    {info.phone}
                  </p>
                </div>
              </a>
            </StaggerItem>
          </li>

          {/* Address */}
          <li className="sm:col-span-2 lg:col-span-1">
            <StaggerItem>
              <div
                tabIndex={0}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 transition-all duration-300 hover:border-[#8852F7]/20 hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c0d28]"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#8852F7]/10 text-[#8852F7] transition-all duration-300 group-hover:bg-[#8852F7]/[0.15] group-hover:text-[#8852F7]">
                  <TbMapPin className="size-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 space-y-1.5">
                  <h3 className="font-rajdhani text-xs font-bold uppercase tracking-widest text-text/40">
                    Address
                  </h3>
                  <address className="font-poppins text-sm not-italic leading-relaxed text-text/75">
                    {info.address.map((line, index) => (
                      <span key={index} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </div>
            </StaggerItem>
          </li>
        </ul>
      </StaggerContainer>

      {/* ── Availability Badge (Single FadeLeft block) ────────────────── */}
      <FadeLeft delay={0.2} amount="some">
        <div className="flex items-center gap-2.5 rounded-xl border border-[#ef9d7a]/20 bg-[#ef9d7a]/5 px-4 py-3">
          <span className="relative flex size-2.5 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-green-500 shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
          </span>
          <p className="font-poppins text-xs font-semibold leading-none text-[#ef9d7a]">
            {info.availability}
          </p>
        </div>
      </FadeLeft>

      {/* ── Social Links (StaggerContainer + StaggerItem) ─────────────── */}
      <div className="space-y-3">
        <FadeLeft delay={0.3} amount="some">
          <p className="font-rajdhani text-xs font-bold uppercase tracking-widest text-text/40">
            Connect Online
          </p>
        </FadeLeft>
        <StaggerContainer
          staggerDelay={0.05}
          amount="some"
          className="flex flex-wrap items-center gap-3"
        >
          {SOCIAL_LINKS.map((link) => {
            const Icon = SOCIAL_ICONS[link.id];
            const isExternal = link.href.startsWith("http");

            return (
              <StaggerItem key={link.id}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 text-muted transition-all duration-300 hover:-translate-y-1 hover:border-[#8852F7]/40 hover:bg-white/[0.03] hover:text-[#ef9d7a] hover:shadow-[0_0_15px_rgba(239,157,122,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c0d28]"
                >
                  <Icon />
                </a>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </div>
  );
}
