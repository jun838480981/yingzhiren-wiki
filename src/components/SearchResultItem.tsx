import { SECTION_MAP } from '../data';
import { formatDate } from '../lib/format';
import type { SearchHit } from '../lib/search';
import { Highlight } from './Highlight';
import { StatusBadge } from './StatusBadge';

interface SearchResultItemProps {
  hit: SearchHit;
  query: string;
  active?: boolean;
  optionId?: string;
  onSelect?: () => void;
  onHover?: () => void;
}

export function SearchResultItem({
  hit,
  query,
  active = false,
  optionId,
  onSelect,
  onHover,
}: SearchResultItemProps) {
  const section = SECTION_MAP[hit.entry.section];

  return (
    <a
      id={optionId}
      role={optionId ? 'option' : undefined}
      aria-selected={optionId ? active : undefined}
      tabIndex={optionId ? -1 : undefined}
      href={`#/entry/${hit.entry.id}`}
      className={`search-hit${active ? ' is-active' : ''}`}
      onClick={onSelect}
      onMouseEnter={onHover}
      onFocus={onHover}
    >
      <span className="search-hit__meta">
        <span className="search-hit__section">
          {section.numeral} · {section.title}
        </span>
        <StatusBadge status={hit.entry.status} compact />
        {hit.entry.date ? (
          <time dateTime={hit.entry.date}>{formatDate(hit.entry.date)}</time>
        ) : null}
      </span>
      <span className="search-hit__title">
        <Highlight text={hit.entry.title} query={query} />
      </span>
      <span className="search-hit__snippet">
        <Highlight text={hit.snippet} query={query} />
      </span>
      <span className="search-hit__tags">
        {hit.entry.tags.slice(0, 4).map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </span>
    </a>
  );
}
