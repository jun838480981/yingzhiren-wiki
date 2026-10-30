interface SixtySixSigilProps {
  compact?: boolean;
}

export function SixtySixSigil({ compact = false }: SixtySixSigilProps) {
  const ticks = Array.from({ length: 60 }, (_, index) => {
    const angle = (index / 60) * Math.PI * 2 - Math.PI / 2;
    const outer = 154;
    const inner = index % 5 === 0 ? 140 : 147;
    const x1 = 180 + Math.cos(angle) * outer;
    const y1 = 180 + Math.sin(angle) * outer;
    const x2 = 180 + Math.cos(angle) * inner;
    const y2 = 180 + Math.sin(angle) * inner;
    return (
      <line
        key={index}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        className={index % 5 === 0 ? 'sigil__tick sigil__tick--major' : 'sigil__tick'}
      />
    );
  });

  return (
    <div className={`sigil${compact ? ' sigil--compact' : ''}`} aria-hidden="true">
      <svg className="sigil__svg" viewBox="0 0 360 360">
        <circle cx="180" cy="180" r="168" className="sigil__hairline" />
        <g className="sigil__rotor">{ticks}</g>
        <circle cx="180" cy="180" r="128" className="sigil__ring" />
        <circle cx="180" cy="180" r="96" className="sigil__ring sigil__ring--thin" />
        <path
          d="M180 38c42 24 78 64 86 118 7 50-13 100-47 137-36 39-90 52-134 29"
          className="sigil__brush"
        />
        <path d="M180 300c-47-20-81-57-91-106" className="sigil__brush sigil__brush--faint" />
        <text x="180" y="202" textAnchor="middle" className="sigil__number">
          66
        </text>
        <text x="180" y="238" textAnchor="middle" className="sigil__caption">
          DAYS REMAIN
        </text>
        <path d="M126 258h108" className="sigil__hairline" />
      </svg>
      <span className="sigil__label sigil__label--top">六十六日</span>
      <span className="sigil__label sigil__label--bottom">影境 · 倒计时</span>
      <span className="sigil__corner sigil__corner--tl" />
      <span className="sigil__corner sigil__corner--tr" />
      <span className="sigil__corner sigil__corner--bl" />
      <span className="sigil__corner sigil__corner--br" />
    </div>
  );
}
