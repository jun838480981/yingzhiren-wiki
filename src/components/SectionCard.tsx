import { getSectionEntryCount } from '../data';
import { formatCount } from '../lib/format';
import type { Section } from '../types/wiki';
import { SectionGlyph } from './SectionGlyph';

interface SectionCardProps {
  section: Section;
}

export function SectionCard({ section }: SectionCardProps) {
  const count = getSectionEntryCount(section.id);

  return (
    <a className="section-card" href={`#/section/${section.id}`}>
      <span className="section-card__numeral" aria-hidden="true">
        {section.numeral}
      </span>
      <SectionGlyph section={section.id} className="section-card__glyph" />
      <span className="section-card__kicker">{section.kicker}</span>
      <h3 className="section-card__title">{section.title}</h3>
      <p className="section-card__desc">{section.description}</p>
      <span className="section-card__foot">
        <span>{formatCount(count)} 条档案</span>
        <span className="section-card__en">{section.english}</span>
      </span>
    </a>
  );
}
