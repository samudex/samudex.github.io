import { Lock } from "lucide-react";
import type { Project } from "@/data/projects";
import { TiltFrame } from "./TiltFrame";

type ProjectPreviewProps = {
  project: Project;
};

export function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <TiltFrame className="relative w-full">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 opacity-50 blur-3xl"
        style={{
          background: `radial-gradient(ellipse at center, rgba(${project.accentRgb}, 0.35), transparent 68%)`,
        }}
      />

      <div className="browser-frame">
        <div className="browser-bar">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="browser-dot" />
          </div>
          <div className="browser-url">
            <Lock className="h-2.5 w-2.5 shrink-0" aria-hidden="true" />
            <span className="truncate">{project.displayUrl}</span>
          </div>
          <span className="hidden items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-acid/70 sm:flex">
            <span className="h-1 w-1 rounded-full bg-acid" />
            live
          </span>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden bg-ink-900 sm:aspect-[16/10]">
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]"
          />
        </div>
      </div>
    </TiltFrame>
  );
}
