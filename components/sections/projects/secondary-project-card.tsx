import Image from "next/image";
import { SkillsIcon } from "../skills/skills-icon";
import { StaggerItem } from "@/components/ui";
import { TbBrandGithub, TbExternalLink, TbLock } from "react-icons/tb";
import type { SecondaryProject } from "@/data/projects";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0715]";

type SecondaryProjectCardProps = {
  readonly project: SecondaryProject;
};

export function SecondaryProjectCard({ project }: SecondaryProjectCardProps) {
  const isExternal = project.links.live.startsWith("http");

  return (
    <StaggerItem className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-[#8852F7]/30 hover:shadow-[0_0_30px_rgba(135,80,247,0.15)] active:-translate-y-1 active:border-[#8852F7]/30 active:shadow-[0_0_30px_rgba(135,80,247,0.15)] shadow-lg">
        {/* Subtle overlay card background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#8852F7]/[0.01] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100" />

        {/* ── Card Header: Image & Badge ─────────────────────────────── */}
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/5 bg-white/[0.01]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-103 group-active:scale-103"
            loading="lazy"
          />

          {project.badge && (
            <span className="absolute top-3.5 right-3.5 rounded-full bg-[#ef9d7a]/15 border border-[#ef9d7a]/25 px-2.5 py-0.5 font-poppins text-[9px] font-bold uppercase tracking-widest text-[#ef9d7a] backdrop-blur-md">
              {project.badge}
            </span>
          )}
        </div>

        {/* ── Card Content: Details & Tech ───────────────────────────── */}
        <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 gap-6">
          <div className="space-y-3.5">
            <h3 className="font-rajdhani text-xl font-bold text-text tracking-tight sm:text-2xl">
              {project.title}
            </h3>
            
            <p className="font-poppins text-xs leading-relaxed text-text/70 min-h-[60px]">
              {project.description}
            </p>

            {/* Tech chips */}
            <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
              {project.techStack.map((tech) => (
                <li key={tech}>
                  <span
                    tabIndex={0}
                    className={`inline-flex items-center gap-1 rounded-lg border border-white/5 bg-white/[0.01] px-2 py-0.5 font-poppins text-[10px] font-medium text-text/60 hover:text-text hover:border-[#8852F7]/30 hover:bg-[#8852F7]/5 active:text-text active:border-[#8852F7]/30 active:bg-[#8852F7]/5 transition-colors duration-300 ${focusRing}`}
                  >
                    <SkillsIcon name={tech} className="size-2.5 text-text/40" />
                    <span>{tech}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Card Footer: Buttons ──────────────────────────────────── */}
          <div className="flex items-center gap-3 pt-3 border-t border-white/[0.04]">
            <a
              href={project.links.live}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className={`inline-flex min-h-9 cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-[#FF014F] px-4 py-2 font-poppins text-[11px] font-semibold text-white shadow-md shadow-[#FF014F]/10 transition-all duration-300 hover:bg-[#FF014F]/90 hover:shadow-[#FF014F]/20 active:scale-[0.98] ${focusRing}`}
            >
              <TbExternalLink className="size-3.5" />
              <span>Live Demo</span>
            </a>

            {project.links.isPrivate ? (
              <button
                type="button"
                disabled
                className="inline-flex min-h-9 cursor-not-allowed items-center justify-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-2 font-poppins text-[11px] font-semibold text-text/30"
                aria-label="Private Repository"
              >
                <TbLock className="size-3.5" />
                <span>Private Repo</span>
              </button>
            ) : (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-9 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2 font-poppins text-[11px] font-semibold text-text/80 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 active:scale-[0.98] ${focusRing}`}
              >
                <TbBrandGithub className="size-3.5" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

      </article>
    </StaggerItem>
  );
}
