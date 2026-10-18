import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const navIds = profile.nav.map((item) => item.href.replace("#", ""));

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const active = useActiveSection(navIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      const firstLink = headerRef.current?.querySelector<HTMLElement>(
        "#mobile-menu a, #mobile-menu button",
      );
      firstLink?.focus();
    }, 80);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusables = Array.from(
        headerRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ) ?? [],
      ).filter((element) => element.offsetParent !== null);

      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus?.();
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      {/*
        Capa de fondo de la barra superior. Vive en su propio elemento en
        lugar del propio <header> porque `backdrop-filter` crea un containing
        block que rompe el posicionamiento `fixed` del menú móvil (lo colapsaba
        a ~1px de alto).
      */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-20 border-b transition-colors duration-300",
          scrolled || open
            ? "border-white/[0.06] bg-ink-950/80 backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      />
      <div className="container-page relative z-10">
        <div className="flex h-20 items-center justify-between">
          <a
            href="#inicio"
            onClick={closeMenu}
            className="group flex items-center gap-3"
            aria-label="Daniel Prieto — ir al inicio"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] font-mono text-[13px] font-semibold tracking-tighter text-white transition-colors group-hover:border-acid/40 group-hover:text-acid">
              dp<span className="text-acid">.</span>
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border-2 border-ink-950 bg-acid" />
            </span>
            <span className="hidden sm:block">
              <span className="block text-[13px] font-medium leading-none text-white">
                Daniel Prieto
              </span>
              <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
                Fullstack
              </span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Navegación principal"
          >
            {profile.nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-[13px] transition-colors",
                    isActive
                      ? "text-white"
                      : "text-white/45 hover:text-white/80",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-acid transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
              <span className="h-1.5 w-1.5 rounded-full bg-acid animate-pulse-dot" />
              Disponible
            </span>
            <a
              href="#contacto"
              className="btn btn-primary h-10 px-4 text-[13px]"
            >
              Hablemos
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] text-white/75 transition-colors hover:border-white/25 hover:text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            className="fixed inset-x-0 bottom-0 top-20 z-0 overflow-y-auto border-t border-white/[0.06] bg-ink-950/[0.985] backdrop-blur-2xl lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="container-page flex min-h-full flex-col pb-10 pt-8">
              <nav className="flex flex-col" aria-label="Navegación móvil">
                {profile.nav.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.06 + index * 0.055,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex items-center justify-between border-b border-white/[0.07] py-5 text-[2rem] font-medium tracking-[-0.04em] text-white/85 transition-colors hover:text-white"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight
                      className="h-5 w-5 text-white/25 transition-colors group-hover:text-acid"
                      aria-hidden="true"
                    />
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto pt-12">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Contacto directo
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  onClick={closeMenu}
                  className="mt-3 block break-all text-lg text-white/80 transition-colors hover:text-acid"
                >
                  {profile.email}
                </a>

                <div className="mt-6 flex gap-3">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-btn h-11 w-11"
                    aria-label="GitHub de Daniel Prieto"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-btn h-11 w-11"
                    aria-label="LinkedIn de Daniel Prieto"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>

                <p className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-acid animate-pulse-dot" />
                  {profile.location} · {profile.timezoneLabel}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
