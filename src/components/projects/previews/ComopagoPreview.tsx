import {
  Banknote,
  Check,
  CircleDollarSign,
  Coins,
  Landmark,
  Sparkles,
  Wallet,
} from "lucide-react";

/**
 * A stylised representation of the Comopago interface. Every element is
 * CSS/DOM, so it stays sharp on any display and adds no image weight.
 */
export function ComopagoPreview() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-[#f3f7fd] text-[#0a1b36]">
      <div className="flex shrink-0 items-center justify-between border-b border-[#dbe5f2] px-3 py-2.5 sm:px-5 sm:py-3">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0955ce] text-white shadow-sm sm:h-7 sm:w-7">
            <Wallet className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
          </span>
          <span className="text-[10px] font-semibold tracking-tight sm:text-xs">
            Cómo Pago
          </span>
        </div>
        <div className="flex items-center gap-3 text-[8px] sm:text-[9px]">
          <span className="rounded-full bg-[#e7efff] px-2 py-1 font-medium text-[#0955ce]">
            Comparar
          </span>
          <span className="text-[#6b7c96]">Convertir</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3 sm:gap-3 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[7px] font-medium uppercase tracking-[0.16em] text-[#8292aa]">
              Calculadora de pagos
            </p>
            <p className="mt-1 text-[15px] font-semibold leading-tight tracking-[-0.035em] sm:text-xl">
              ¿Cómo pagas hoy?
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#c9daf5] bg-white px-2 py-1 text-[7px] font-medium text-[#0955ce]">
            <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse-dot" />
            Tasas en vivo
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-[#dce6f4] bg-white p-2.5 sm:p-3">
            <div className="flex items-center gap-1.5 text-[8px] font-medium text-[#6b7c96] sm:text-[9px]">
              <Banknote className="h-3 w-3" aria-hidden="true" />
              Bolívares
            </div>
            <p className="mt-2 font-mono text-[13px] font-semibold sm:text-base">
              Bs. 391,00
            </p>
            <p className="mt-0.5 text-[7px] text-[#8292aa]">
              Débito / Pago móvil
            </p>
          </div>

          <div className="relative rounded-xl border border-[#0955ce] bg-[#0955ce] p-2.5 text-white shadow-[0_8px_24px_-12px_rgba(9,85,206,0.65)] sm:p-3">
            <div className="flex items-center justify-between text-[8px] font-medium text-white/75 sm:text-[9px]">
              <span className="flex items-center gap-1.5">
                <CircleDollarSign className="h-3 w-3" aria-hidden="true" />
                Divisas
              </span>
              <Check className="h-3 w-3" aria-hidden="true" />
            </div>
            <p className="mt-2 font-mono text-[13px] font-semibold sm:text-base">
              $ 10,00
            </p>
            <p className="mt-0.5 text-[7px] text-white/55">Efectivo / Zelle</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-[#dce6f4] bg-white px-2.5 py-2">
            <div className="flex items-center justify-between text-[7px] text-[#8292aa]">
              <span>Tasa BCV</span>
              <Landmark className="h-2.5 w-2.5" aria-hidden="true" />
            </div>
            <p className="mt-1 font-mono text-[10px] font-semibold sm:text-xs">
              36,42 Bs/$
            </p>
          </div>
          <div className="rounded-lg border border-[#dce6f4] bg-white px-2.5 py-2">
            <div className="flex items-center justify-between text-[7px] text-[#8292aa]">
              <span>Binance P2P</span>
              <Coins className="h-2.5 w-2.5" aria-hidden="true" />
            </div>
            <p className="mt-1 font-mono text-[10px] font-semibold sm:text-xs">
              39,10 Bs/$
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0955ce] to-[#0a3e97] p-2.5 text-white sm:p-3">
          <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-white/10 blur-xl" />
          <div className="relative flex items-center justify-between">
            <p className="text-[7px] font-medium uppercase tracking-[0.14em] text-white/55">
              Recomendación
            </p>
            <Sparkles
              className="h-3 w-3 text-[#9ec1ff]"
              aria-hidden="true"
            />
          </div>
          <p className="relative mt-0.5 text-[11px] font-semibold leading-tight sm:text-sm">
            Te conviene pagar en divisas
          </p>
          <div className="relative mt-2 flex items-end justify-between">
            <span className="text-[7px] text-white/55">Ahorro estimado</span>
            <span className="font-mono text-sm font-semibold sm:text-base">
              Bs. 4,20
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
