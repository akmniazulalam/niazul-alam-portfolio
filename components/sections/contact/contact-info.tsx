import { CONTACT_DATA } from "@/data/contact";
import { TbPhone, TbMail, TbMapPin } from "react-icons/tb";
import { FadeLeft, StaggerContainer, StaggerItem } from "@/components/ui";
import { HeroSocialLinks } from "../hero/hero-social-links";

export function ContactInfo() {
  const { info } = CONTACT_DATA;

  return (
    <FadeLeft className="flex flex-col gap-8">
      {/* Contact Cards */}
      <StaggerContainer staggerDelay={0.05} amount="some">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1" aria-label="Contact methods">
          {/* Email Card */}
          <li>
            <StaggerItem>
              <a
                href={`mailto:${info.email}`}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8852F7]/40 hover:bg-white/[0.04] hover:shadow-[0_0_25px_rgba(135,80,247,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0715]"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#8852F7]/10 text-[#8852F7] transition-colors duration-300 group-hover:bg-[#8852F7] group-hover:text-white">
                  <TbMail className="size-6" aria-hidden="true" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-rajdhani text-sm font-bold uppercase tracking-wider text-text/50">
                    Email
                  </h3>
                  <p className="font-poppins text-sm font-medium text-text transition-colors duration-300 group-hover:text-[#ef9d7a] break-all">
                    {info.email}
                  </p>
                </div>
              </a>
            </StaggerItem>
          </li>

          {/* Phone Card */}
          <li>
            <StaggerItem>
              <a
                href={`tel:${info.phone}`}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8852F7]/40 hover:bg-white/[0.04] hover:shadow-[0_0_25px_rgba(135,80,247,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0715]"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#8852F7]/10 text-[#8852F7] transition-colors duration-300 group-hover:bg-[#8852F7] group-hover:text-white">
                  <TbPhone className="size-6" aria-hidden="true" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-rajdhani text-sm font-bold uppercase tracking-wider text-text/50">
                    Phone
                  </h3>
                  <p className="font-poppins text-sm font-medium text-text transition-colors duration-300 group-hover:text-[#ef9d7a]">
                    {info.phone}
                  </p>
                </div>
              </a>
            </StaggerItem>
          </li>

          {/* Address Card */}
          <li className="sm:col-span-2 lg:col-span-1">
            <StaggerItem>
              <div
                tabIndex={0}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0715]"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#8852F7]/10 text-[#8852F7] transition-colors duration-300 group-hover:text-[#8852F7] group-hover:bg-[#8852F7]/20">
                  <TbMapPin className="size-6" aria-hidden="true" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-rajdhani text-sm font-bold uppercase tracking-wider text-text/50">
                    Address
                  </h3>
                  <address className="font-poppins text-sm not-italic leading-relaxed text-text/80">
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

      {/* Availability Status */}
      <StaggerItem>
        <div className="flex items-center gap-3 rounded-2xl border border-[#ef9d7a]/20 bg-[#ef9d7a]/5 p-4">
          <span className="relative flex size-3 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
          </span>
          <p className="font-poppins text-xs font-semibold text-[#ef9d7a] uppercase tracking-wide">
            {info.availability}
          </p>
        </div>
      </StaggerItem>

      {/* Social Links */}
      <div className="space-y-3">
        <h3 className="font-rajdhani text-sm font-bold uppercase tracking-wider text-text/50">
          Connect Online
        </h3>
        <HeroSocialLinks />
      </div>
    </FadeLeft>
  );
}
