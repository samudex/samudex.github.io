import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { LocalTime } from "@/components/ui/LocalTime";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] bg-ink-950">
      <div className="container-page py-14">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#inicio" className="inline-flex items-center gap-3">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03]">
                <img
                  src="/favicon-96x96.png"
                  alt=""
                  className="h-full w-full rounded-full object-cover"
                />
              </span>
              <span className="text-sm font-medium text-white">
                Daniel Prieto
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/35">
              Desarrollador Fullstack. Diseño y construyo productos web que
              resuelven problemas reales.
            </p>
            <div className="mt-6 flex gap-2.5">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.1] text-white/45 transition-colors hover:border-white/25 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.1] text-white/45 transition-colors hover:border-white/25 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.1] text-white/45 transition-colors hover:border-white/25 hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav className="md:col-span-3" aria-label="Navegación del pie">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
              Navegación
            </p>
            <ul className="mt-4 space-y-2.5">
              {profile.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/45 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4 md:text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
              Hora local
            </p>
            <p className="mt-4 text-sm text-white/55">
              <LocalTime />
              <span className="text-white/25"> · Maracaibo, VE</span>
            </p>
            <p className="mt-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/30 md:justify-end">
              <span className="h-1.5 w-1.5 rounded-full bg-acid animate-pulse-dot" />
              {profile.availability}
            </p>

            <a
              href="#inicio"
              className="link-arrow mt-8 inline-flex text-sm"
            >
              Volver arriba
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/25">
            © {year} Daniel Prieto. Todos los derechos reservados.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/25">
            Diseñado y construido desde Maracaibo, Venezuela.
          </p>
        </div>
      </div>
    </footer>
  );
}
