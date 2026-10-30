import { SECTION_MAP } from '../data';
import { formatDate } from '../lib/format';
import type { WikiEntry } from '../types/wiki';
import { StatusBadge } from './StatusBadge';

interface EntryCardProps {
  entry: WikiEntry;
}

export function EntryCard({ entry }: EntryCardProps) {
  const section = SECTION_MAP[entry.section];

  return (
    <article className="entry-card">
      <div className="entry-card__meta">
        <StatusBadge status={entry.status} compact />
        <span className="entry-card__section">{section.title}</span>
        {entry.date ? (
          <time className="entry-card__date" dateTime={entry.date}>
            {formatDate(entry.date)}
          </time>
        ) : null}
      </div>

      <h3 className="entry-card__title">
        <a href={`#/entry/${entry.id}`}>
          {entry.title}
          <span className="entry-card__veil" aria-hidden="true" />
        </a>
      </h3>

      {entry.subtitle ? <p className="entry-card__subtitle">{entry.subtitle}</p> : null}
      <p className="entry-card__summary">{entry.summary}</p>

      <div className="entry-card__foot">
        <ul className="tag-list" aria-label="标签">
          {entry.tags.slice(0, 4).map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <span className="entry-card__more" aria-hidden="true">
          查阅 →
        </span>
      </div>
    </article>
  );
}
