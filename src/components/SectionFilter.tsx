import type { SectionId } from '../types/wiki';
import { SECTIONS } from '../data/sections';

interface SectionFilterProps {
  value: SectionId | 'all';
  onChange: (value: SectionId | 'all') => void;
  idPrefix: string;
}

export function SectionFilter({ value, onChange, idPrefix }: SectionFilterProps) {
  return (
    <div className="filter-chips" role="group" aria-label="按板块筛选">
      <button
        type="button"
        className={`chip${value === 'all' ? ' is-active' : ''}`}
        aria-pressed={value === 'all'}
        id={`${idPrefix}-all`}
        onClick={() => onChange('all')}
      >
        全部
      </button>
      {SECTIONS.map((section) => (
        <button
          key={section.id}
          type="button"
          className={`chip${value === section.id ? ' is-active' : ''}`}
          aria-pressed={value === section.id}
          id={`${idPrefix}-${section.id}`}
          onClick={() => onChange(section.id)}
        >
          {section.title}
        </button>
      ))}
    </div>
  );
}
