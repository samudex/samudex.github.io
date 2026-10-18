import {
  Cloud,
  Code2,
  Database,
  Server,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/data/skills";
import { profile } from "@/data/profile";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const groupIcons: Record<string, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  data: Database,
  cloud: Cloud,
};

export function Skills() {
  return (
    <section
      id="stack"
      className="section-anchor section-space relative border-t border-white/[0.06] bg-white/[0.012]"
    >
      <div className="container-page">
        <SectionIntro
          eyebrow="02 — Stack"
          title={
            <>
              Las herramientas
              <br />
              <span className="text-white/[0.28]">detrás del producto.</span>
            </>
          }
          description="No colecciono logos. Elijo la herramienta que hace que el producto sea más simple de construir, mantener y usar."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {skillGroups.map((group) => {
            const Icon = groupIcons[group.id] ?? Code2;

            return (
              <Reveal
                key={group.id}
                delay={0.04}
                className={cn(
                  "panel group relative overflow-hidden rounded-3xl p-6 transition-colors duration-300 hover:border-white/[0.16] sm:p-8",
                  group.className,
                )}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-acid/[0.06] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.12em] text-white/25">
                      {group.index}
                    </span>
                    <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-white">
                      {group.title}
                    </h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] text-white/45 transition-colors duration-300 group-hover:border-acid/25 group-hover:text-acid">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <p className="relative mt-3 max-w-sm text-sm leading-relaxed text-white/40">
                  {group.description}
                </p>

                <ul className="relative mt-6 grid grid-cols-2 gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 transition-colors hover:border-acid/20 hover:bg-acid/[0.035]"
                    >
                      <skill.icon
                        className="h-4 w-4 shrink-0 text-white/45"
                        aria-hidden="true"
                      />
                      <span className="truncate text-xs text-white/65">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/30 sm:text-[10px]">
            Siempre aprendiendo. Nunca casado con una sola herramienta.
          </p>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="link-arrow text-sm"
          >
            Ver GitHub
            <span aria-hidden="true" className="text-acid">
              ↗
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
