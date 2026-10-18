import type { CSSProperties, PointerEvent } from "react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectPreview } from "./ProjectPreview";
import { Reveal } from "@/components/ui/Reveal";
import { TechIcon } from "@/components/ui/TechIcon";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  reverse?: boolean;
};

export function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  const style = {
    "--accent": project.accent,
    "--accent-rgb": project.accentRgb,
  } as CSSProperties;

  return (
    <Reveal y={40}>
      <article
        ref={cardRef}
        onPointerMove={handlePointerMove}
        className="project-card"
        style={style}
        aria-labelledby={`${project.id}-title`}
      >
        <div className="grid lg:grid-cols-2">
          <div
            className={cn(
              "flex flex-col p-6 sm:p-9 lg:p-12",
              reverse ? "lg:order-2" : "lg:order-1",
            )}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-[11px] tracking-[0.1em] text-white/35">
                {project.index}
                <span className="mx-1.5 text-white/15">/</span>02
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.025] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/55">
                <span
                  className="h-1.5 w-1.5 rounded-full animate-pulse-dot"
                  style={{ background: project.accent }}
                />
                {project.status}
              </span>
            </div>

            <div className="mt-10 sm:mt-14">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                {project.category}
              </p>
              <h3
                id={`${project.id}-title`}
                className="mt-3 text-[3.25rem] font-semibold leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl"
              >
                {project.name}
                <span style={{ color: project.accent }}>.</span>
              </h3>
              <p className="mt-2.5 text-[11px] text-white/30">
                Producto:{" "}
                <span className="text-white/50">{project.productName}</span>
              </p>

              <p className="mt-6 max-w-md text-lg leading-snug tracking-[-0.02em] text-white/80 sm:text-xl">
                {project.tagline}
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/45">
                {project.description}
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 text-[13px] leading-relaxed text-white/55"
                >
                  <span
                    className="mt-[7px] h-1 w-1 shrink-0 rounded-full"
                    style={{ background: project.accent }}
                  />
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="chip">
                  <TechIcon name={tech} className="h-3.5 w-3.5" />
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] pt-6">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-white"
                aria-label={`Abrir ${project.name} en una nueva pestaña`}
              >
                <span
                  className="border-b pb-0.5 transition-colors"
                  style={{ borderColor: `${project.accent}55` }}
                >
                  Abrir {project.name}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: project.accent }}
                  aria-hidden="true"
                />
              </a>

              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/25">
                {project.displayUrl}
              </span>
            </div>
          </div>

          <div
            className={cn(
              "flex items-center order-first p-4 pb-2 sm:p-6 sm:pb-3 lg:p-10",
              reverse
                ? "lg:order-1 lg:pl-10 lg:pr-0"
                : "lg:order-2 lg:pl-0",
            )}
          >
            <ProjectPreview project={project} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}
