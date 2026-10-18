import { Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section
      id="contacto"
      className="section-anchor relative overflow-hidden border-t border-white/[0.06] py-24 md:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_65%_at_50%_110%,rgba(0,206,255,0.11),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-px w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="container-page relative">
        <Reveal>
          <span className="eyebrow">03 — Contacto</span>
        </Reveal>

        <div className="mt-8 grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <Reveal delay={0.06}>
              <h2 className="text-[clamp(2.75rem,7vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.065em]">
                <span className="text-chrome">¿Construimos</span>
                <br />
                <span className="text-white/[0.28]">
                  algo que la gente use?
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-white/50 md:text-base">
                Estoy abierto a roles fullstack y proyectos freelance. Si tienes
                un problema real, escríbeme y lo hablamos.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
                <a href={`mailto:${profile.email}`} className="btn btn-ghost">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Enviar email
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="panel rounded-3xl p-6 sm:p-7">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-acid animate-pulse-dot" />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
                  Estado actual
                </span>
              </div>

              <p className="mt-4 text-lg font-medium tracking-[-0.02em] text-white">
                Disponible para nuevos proyectos
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/35">
                Remoto desde Maracaibo. Abierto a tiempo completo, contrato o
                colaboración puntual.
              </p>

              <dl className="mt-7 space-y-3 border-t border-white/[0.07] pt-5">
                <div className="flex items-center justify-between gap-4">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/30">
                    Ubicación
                  </dt>
                  <dd className="text-[11px] text-white/60">Maracaibo, VE</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/30">
                    Zona horaria
                  </dt>
                  <dd className="text-[11px] text-white/60">GMT−4</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/30">
                    Modalidad
                  </dt>
                  <dd className="text-[11px] text-white/60">Remoto</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/30">
                    Enfoque
                  </dt>
                  <dd className="text-[11px] text-white/60">Fullstack / Frontend</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
