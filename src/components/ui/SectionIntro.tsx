import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type SectionIntroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
};

export function SectionIntro({ eyebrow, title, description }: SectionIntroProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
      <div className="lg:col-span-7">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 text-[clamp(2.75rem,6vw,5.75rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-chrome">
            {title}
          </h2>
        </Reveal>
      </div>
      <div className="lg:col-span-5 lg:pb-3">
        <Reveal delay={0.16}>
          <p className="max-w-md text-[15px] leading-relaxed text-mist md:text-base">
            {description}
          </p>
        </Reveal>
      </div>
    </div>
  );
}
