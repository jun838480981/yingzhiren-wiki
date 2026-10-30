import type { ReactElement } from 'react';
import type { SectionId } from '../types/wiki';

interface SectionGlyphProps {
  section: SectionId;
  className?: string;
}

export function SectionGlyph({ section, className }: SectionGlyphProps) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  const shapes: Record<SectionId, ReactElement> = {
    overview: (
      <>
        <circle cx="24" cy="24" r="13" {...common} />
        <circle cx="24" cy="24" r="4" {...common} />
        <path d="M24 5v8M24 35v8M5 24h8M35 24h8" {...common} />
      </>
    ),
    characters: (
      <>
        <circle cx="18" cy="18" r="5" {...common} />
        <path d="M8 38c0-7 4.5-11 10-11s10 4 10 11" {...common} />
        <circle cx="33" cy="20" r="3.5" {...common} />
        <path d="M30 38c.6-5.5 3-9 7-9 3 0 5 2.4 6 6" {...common} />
      </>
    ),
    arsenal: (
      <>
        <path d="m10 38 20-26 5 4-20 26Z" {...common} />
        <path d="m28 14 6 5M9 31l8 6M13 41l-5-4" {...common} />
      </>
    ),
    story: (
      <>
        <path d="M11 8h22v32H15a4 4 0 0 1-4-4Z" {...common} />
        <path d="M17 8v32M22 16h6M22 22h6M22 28h4" {...common} />
      </>
    ),
    world: (
      <>
        <path d="m5 38 10-16 6 9 5-7 12 14Z" {...common} />
        <circle cx="34" cy="13" r="4" {...common} />
        <path d="M5 41h38" {...common} />
      </>
    ),
    gameplay: (
      <>
        <circle cx="24" cy="24" r="13" {...common} />
        <path d="M24 11c7 4 7 22 0 26M24 11c-7 4-7 22 0 26" {...common} />
        <circle cx="24" cy="24" r="2.5" {...common} />
      </>
    ),
    news: (
      <>
        <path d="M10 10h24v28H10z" {...common} />
        <path d="M15 16h14M15 22h14M15 28h9" {...common} />
        <circle cx="32" cy="33" r="2" {...common} />
      </>
    ),
    sources: (
      <>
        <path d="M24 12c-5-4-10-4-15-2v26c5-2 10-2 15 2 5-4 10-4 15-2V10c-5-2-10-2-15 2Z" {...common} />
        <path d="M24 12v26" {...common} />
      </>
    ),
  };

  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      {shapes[section]}
    </svg>
  );
}
