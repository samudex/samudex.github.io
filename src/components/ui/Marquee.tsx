type MarqueeProps = {
  items: readonly string[];
};

export function Marquee({ items }: MarqueeProps) {
  const row = [...items, ...items];

  return (
    <div
      className="marquee-mask relative overflow-hidden border-y border-white/[0.06] bg-white/[0.012] py-5"
      aria-hidden="true"
    >
      <div className="marquee-track items-center">
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-8 pr-8 font-mono text-[10px] uppercase tracking-[0.22em] text-white/30"
          >
            <span>{item}</span>
            <span className="text-acid/45">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
