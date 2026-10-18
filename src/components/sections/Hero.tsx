import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative isolate min-h-[100svh] overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="hero-glow absolute inset-0" />
        <div className="absolute inset-0 opacity-55 md:opacity-100">
          <HeroCanvas />
        </div>

        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#050608_0%,rgba(5,6,8,0.92)_30%,rgba(5,6,8,0.38)_62%,rgba(5,6,8,0.1)_100%)] md:block" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_68%,rgba(5,6,8,0.05),rgba(5,6,8,0.78)_78%)] md:hidden" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <div className="container-page relative flex min-h-[calc(100svh-5rem)] flex-col justify-center pb-20 pt-10 sm:pb-24">
        <div className="max-w-[48rem]">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-acid/20 bg-acid/[0.055] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-acid sm:text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-acid animate-pulse-dot" />
                {profile.availability}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40 sm:text-[10px]">
                {profile.location} · {profile.timezoneLabel}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.24em] text-white/40 sm:text-[11px]">
              {profile.hero.greeting}
            </p>
            <h1 className="mt-4 text-[clamp(3.35rem,9.5vw,7.75rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
              <span className="block text-chrome">{profile.hero.headline[0]}</span>
              <span className="block text-white">
                {profile.hero.headline[1]}
                <span className="text-acid">.</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-white/55 sm:text-base md:text-[17px]">
              {profile.hero.lead}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/30">
              {profile.hero.secondary}
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#proyectos" className="btn btn-primary group">
                Ver proyectos
                <ArrowDown
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
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

          <Reveal delay={0.3}>
            <div className="mt-14 grid max-w-lg grid-cols-3 gap-3 border-t border-white/[0.08] pt-6 sm:gap-4">
              {profile.hero.metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={
                    index > 0
                      ? "border-l border-white/[0.07] pl-3 sm:pl-4"
                      : ""
                  }
                >
                  <p className="font-mono text-base text-white/75 sm:text-lg">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-[9px] uppercase leading-snug tracking-[0.1em] text-white/30 sm:text-[10px]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="absolute right-8 top-28 hidden xl:block">
          <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/15">
            Portafolio · 2026
          </span>
        </div>

        <div className="absolute bottom-8 right-6 hidden items-center gap-3 md:flex">
          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/25 [writing-mode:vertical-rl]">
            Scroll
          </span>
          <span className="relative h-16 w-px overflow-hidden bg-white/10">
            <motion.span
              className="absolute inset-x-0 top-0 h-6 bg-acid"
              animate={
                reduceMotion ? undefined : { y: ["-110%", "320%"] }
              }
              transition={{
                duration: 2.4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </span>
        </div>
      </div>

      <a
        href="#proyectos"
        aria-label="Ir a proyectos"
        className="absolute bottom-8 left-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 transition-colors hover:text-acid md:hidden"
      >
        Proyectos
        <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
      </a>
    </section>
  );
}
