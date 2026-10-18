import { ArrowRight, Lock } from "lucide-react";

const durations = [
  { label: "15 min", active: false },
  { label: "30 min", active: true },
  { label: "1 hora", active: false },
  { label: "2 h+", active: false },
];

/**
 * A stylised representation of the Focus-bud / One Thing focus flow.
 * Built with DOM + SVG so the preview stays crisp at every breakpoint.
 */
export function FocusBudPreview() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-[#08090b] text-[#f2f4f2]">
      <div className="flex shrink-0 items-center justify-between border-b border-white/[0.07] px-3 py-2.5 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-acid font-mono text-[7px] font-bold text-black">
            1
          </span>
          <span className="text-[10px] font-medium sm:text-xs">One Thing</span>
          <span className="rounded-full border border-white/10 px-1.5 py-0.5 font-mono text-[6px] uppercase tracking-wider text-white/35">
            focus
          </span>
        </div>
        <span className="text-[8px] text-white/35">History</span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3 sm:grid sm:grid-cols-[1.45fr_0.8fr] sm:gap-4 sm:p-5">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-acid animate-pulse-dot" />
            <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-acid">
              Ahora
            </span>
          </div>
          <p className="mt-2 max-w-[16rem] text-[15px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-xl">
            What&apos;s the one thing you&apos;re doing next?
          </p>

          <div className="mt-3 flex items-center rounded-lg border border-white/[0.09] bg-white/[0.035] px-2.5 py-2">
            <span className="flex-1 truncate text-[9px] text-white/60">
              Diseñar la nueva landing...
            </span>
            <span className="h-3 w-px bg-acid animate-pulse-dot" />
          </div>

          <div className="mt-2 flex gap-1.5">
            {durations.map((duration) => (
              <span
                key={duration.label}
                className={
                  duration.active
                    ? "rounded-md bg-acid px-1.5 py-1 font-mono text-[7px] font-semibold text-black"
                    : "rounded-md border border-white/[0.09] px-1.5 py-1 font-mono text-[7px] text-white/45"
                }
              >
                {duration.label}
              </span>
            ))}
          </div>

          <button
            type="button"
            tabIndex={-1}
            className="mt-2.5 flex items-center justify-center gap-1.5 rounded-lg bg-acid py-2 text-[9px] font-semibold text-black"
          >
            Empezar sesión
            <ArrowRight className="h-2.5 w-2.5" aria-hidden="true" />
          </button>

          <div className="mt-2 flex items-center gap-1.5 text-[7px] text-white/30">
            <Lock className="h-2.5 w-2.5" aria-hidden="true" />
            Sin notificaciones. Solo tú y la tarea.
          </div>
        </div>

        <div className="hidden flex-col items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.018] p-3 sm:flex">
          <div className="relative flex h-24 w-24 items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full -rotate-90"
              aria-hidden="true"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="2.5"
              />
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#c9f75e"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="289"
                strokeDashoffset="82"
              />
            </svg>
            <div className="text-center">
              <p className="font-mono text-lg font-medium tracking-tight">
                24:18
              </p>
              <p className="font-mono text-[6px] uppercase tracking-[0.18em] text-white/30">
                en foco
              </p>
            </div>
          </div>
          <p className="mt-3 text-[7px] text-white/30">Sesión de 30 min</p>
        </div>
      </div>

      <div className="hidden shrink-0 border-t border-white/[0.07] px-3 py-2 sm:block sm:px-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-white/30">
            Hoy
          </span>
          <span className="text-[7px] text-white/30">
            2 sesiones · 1 h 10 min
          </span>
        </div>
        <div className="mt-1.5 flex items-center justify-between rounded-md border border-white/[0.05] bg-white/[0.025] px-2 py-1.5">
          <span className="text-[8px] text-white/65">Revisar el portafolio</span>
          <span className="font-mono text-[7px] text-acid">45 min ✓</span>
        </div>
      </div>
    </div>
  );
}
