import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  return (
    <section
      id="proyectos"
      className="section-anchor section-space relative border-t border-white/[0.05]"
    >
      <div className="container-page">
        <SectionIntro
          eyebrow="01 — Trabajo seleccionado"
          title={
            <>
              Dos productos.
              <br />
              <span className="text-white/[0.28]">Cero relleno.</span>
            </>
          }
          description={
            <>
              No una galería para llenar espacio. Dos aplicaciones que diseñé y
              construí de punta a punta, y que hoy puede usar cualquiera.
            </>
          }
        />

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] pb-4 sm:mt-20">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30 sm:text-[10px]">
            Selección intencional · solo productos en vivo
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30 sm:text-[10px]">
            02 / 02 en producción
          </p>
        </div>

        <div className="mt-8 space-y-8 lg:mt-10 lg:space-y-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col items-start justify-between gap-4 border-b border-white/[0.05] pb-2 sm:flex-row sm:items-center">
          <p className="max-w-md text-sm leading-relaxed text-white/35">
            Dos problemas distintos, una misma forma de trabajar: entender,
            simplificar y llevar a producción.
          </p>
          <a href="#contacto" className="link-arrow text-sm">
            Hablemos de tu proyecto
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
