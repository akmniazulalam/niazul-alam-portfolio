import Image from "next/image";
import { PROJECTS_DATA } from "@/data/projects";
import { SkillsIcon } from "../skills/skills-icon";
import { ProjectGallery } from "./project-gallery";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui";
import { TbCheck, TbBrandGithub, TbExternalLink } from "react-icons/tb";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0715]";

export function FeaturedProjectCard() {
  const { featured } = PROJECTS_DATA;

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Main Project Card Container */}
      <FadeUp amount="some">
        <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-[#8852F7]/30 hover:shadow-[0_0_50px_rgba(135,80,247,0.15)] shadow-xl">
          {/* Subtle overlay card background gradient */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#8852F7]/[0.02] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            
            {/* ── Left Side: Visual Assets ────────────────────────────── */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-102"
                  priority
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={featured.links.store}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#FF014F] px-5 py-2.5 font-poppins text-xs font-semibold text-white shadow-lg shadow-[#FF014F]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FF014F]/90 hover:shadow-[#FF014F]/20 active:translate-y-0 active:scale-[0.98] ${focusRing}`}
                >
                  <TbExternalLink className="size-4" />
                  <span>Customer Store</span>
                </a>

                <a
                  href={featured.links.admin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-2.5 font-poppins text-xs font-semibold text-text transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06] hover:border-white/20 active:translate-y-0 active:scale-[0.98] ${focusRing}`}
                >
                  <TbExternalLink className="size-4" />
                  <span>Admin Dashboard</span>
                </a>

                <a
                  href={featured.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-2.5 font-poppins text-xs font-semibold text-text transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06] hover:border-white/20 active:translate-y-0 active:scale-[0.98] ${focusRing}`}
                  aria-label="View source code on GitHub"
                >
                  <TbBrandGithub className="size-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* ── Right Side: Details & Tech ──────────────────────────── */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div>
                  <span className="inline-block rounded-full bg-[#8852F7]/10 border border-[#8852F7]/25 px-3 py-1 font-poppins text-[10px] font-bold uppercase tracking-widest text-[#8852F7] mb-2.5">
                    Featured Project
                  </span>
                  <h3 className="font-rajdhani text-2xl font-bold text-text sm:text-3xl lg:text-4xl tracking-tight">
                    {featured.title}
                  </h3>
                  <p className="font-rajdhani text-sm font-bold text-[#ef9d7a] uppercase tracking-widest mt-1">
                    {featured.subtitle}
                  </p>
                </div>

                <p className="font-poppins text-sm leading-relaxed text-text/75">
                  {featured.description}
                </p>

                {/* Tech Chips */}
                <div className="space-y-2">
                  <p className="font-rajdhani text-xs font-bold uppercase tracking-widest text-text/45 pb-1.5 border-b border-white/[0.05]">
                    Technologies Used
                  </p>
                  <StaggerContainer staggerDelay={0.02} amount="some">
                    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies list">
                      {featured.techStack.map((tech) => (
                        <li key={tech}>
                          <StaggerItem>
                            <span
                              tabIndex={0}
                              className={`inline-flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.01] px-2.5 py-1 font-poppins text-[11px] font-medium text-text/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8852F7]/40 hover:bg-[#8852F7]/5 hover:text-text ${focusRing}`}
                            >
                              <SkillsIcon name={tech} className="size-3 text-text/50" />
                              <span>{tech}</span>
                            </span>
                          </StaggerItem>
                        </li>
                      ))}
                    </ul>
                  </StaggerContainer>
                </div>
              </div>
            </div>

          </div>

          {/* ── Feature Highlights Grid ─────────────────────────────── */}
          <div className="mt-8 pt-8 border-t border-white/[0.05] space-y-4">
            <h4 className="font-rajdhani text-xs font-bold uppercase tracking-widest text-text/45">
              Key Features & Capabilities
            </h4>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5" aria-label="Project features">
              {featured.features.map((feat) => (
                <li
                  key={feat}
                  tabIndex={0}
                  className={`flex items-center gap-2 rounded-xl border border-white/[0.03] bg-white/[0.01] px-3.5 py-2.5 transition-all duration-300 hover:bg-white/[0.03] hover:border-white/10 ${focusRing}`}
                >
                  <span className="flex size-4.5 shrink-0 items-center justify-center rounded-full bg-[#ef9d7a]/10 text-[#ef9d7a]">
                    <TbCheck className="size-3 font-bold" aria-hidden="true" />
                  </span>
                  <span className="font-poppins text-xs text-text/80 leading-none">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </article>
      </FadeUp>

      {/* Gallery Screenshots Container */}
      <FadeUp delay={0.1} amount="some">
        <ProjectGallery images={featured.gallery} />
      </FadeUp>
    </div>
  );
}
