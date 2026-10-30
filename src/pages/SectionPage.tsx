import { useEffect, useMemo, useState } from 'react';
import { getEntriesBySection, SECTION_MAP, STATUS_META, STATUS_ORDER } from '../data';
import { formatCount } from '../lib/format';
import type { SectionId, SourceStatus } from '../types/wiki';
import { EntryCard } from '../components/EntryCard';
import { SectionGlyph } from '../components/SectionGlyph';

interface SectionPageProps {
  sectionId: SectionId;
}

export function SectionPage({ sectionId }: SectionPageProps) {
  const section = SECTION_MAP[sectionId];
  const entries = useMemo(() => getEntriesBySection(sectionId), [sectionId]);
  const [status, setStatus] = useState<SourceStatus | 'all'>('all');

  useEffect(() => {
    setStatus('all');
  }, [sectionId]);

  const availableStatuses = STATUS_ORDER.filter((item) =>
    entries.some((entry) => entry.status === item),
  );

  const filtered = status === 'all' ? entries : entries.filter((entry) => entry.status === status);

  return (
    <div className={`section-page section-page--${section.id}`}>
      <header className="section-head">
        <span className="section-head__numeral" aria-hidden="true">
          {section.numeral}
        </span>
        <div className="section-head__main">
          <p className="section-head__kicker">
            {section.kicker} / {section.english}
          </p>
          <h1 className="section-head__title">{section.title}</h1>
          <p className="section-head__desc">{section.description}</p>
          <p className="section-head__count">
            <span>{formatCount(entries.length)}</span> 条档案 · 点击条目查阅
          </p>
        </div>
        <div className="section-head__glyph">
          <SectionGlyph section={section.id} />
          <p className="vertical">影境档案</p>
        </div>
      </header>

      <div className="archive-filter">
        <p className="archive-filter__label">资料状态</p>
        <div className="filter-chips" role="group" aria-label="按资料状态筛选">
          <button
            type="button"
            className={`chip${status === 'all' ? ' is-active' : ''}`}
            aria-pressed={status === 'all'}
            onClick={() => setStatus('all')}
          >
            全部
            <span className="chip__count">{entries.length}</span>
          </button>
          {availableStatuses.map((item) => {
            const count = entries.filter((entry) => entry.status === item).length;
            return (
              <button
                key={item}
                type="button"
                className={`chip${status === item ? ' is-active' : ''}`}
                aria-pressed={status === item}
                onClick={() => setStatus(item)}
              >
                {STATUS_META[item].label}
                <span className="chip__count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="entry-grid entry-grid--archive">
          {filtered.map((entry) => (
            <EntryCard key={entry.id} entry={entry} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p className="empty-state__title">这一类暂时没有档案。</p>
          <p>换一个资料状态，或回到全部条目。</p>
          <button type="button" className="button button--ghost" onClick={() => setStatus('all')}>
            查看全部
          </button>
        </div>
      )}
    </div>
  );
}
