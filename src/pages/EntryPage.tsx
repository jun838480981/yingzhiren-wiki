import { getRelatedEntries, SECTION_MAP, STATUS_META } from '../data';
import { formatDate } from '../lib/format';
import type { WikiEntry } from '../types/wiki';
import { ExternalIcon } from '../components/Icons';
import { Prose } from '../components/Prose';
import { SectionGlyph } from '../components/SectionGlyph';
import { StatusBadge } from '../components/StatusBadge';

interface EntryPageProps {
  entry: WikiEntry;
}

export function EntryPage({ entry }: EntryPageProps) {
  const section = SECTION_MAP[entry.section];
  const related = getRelatedEntries(entry);
  const statusMeta = STATUS_META[entry.status];

  return (
    <article className="entry-page">
      <nav className="breadcrumb" aria-label="面包屑">
        <a href="#/">首页</a>
        <span aria-hidden="true">/</span>
        <a href={`#/section/${section.id}`}>{section.title}</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{entry.title}</span>
      </nav>

      <header className="entry-head">
        <div className="entry-head__main">
          <div className="entry-head__meta">
            <StatusBadge status={entry.status} />
            <a className="entry-head__section" href={`#/section/${section.id}`}>
              {section.numeral} · {section.title}
            </a>
            {entry.date ? (
              <time className="entry-head__date" dateTime={entry.date}>
                {formatDate(entry.date)}
              </time>
            ) : null}
          </div>

          <h1 className="entry-head__title">{entry.title}</h1>
          {entry.subtitle ? <p className="entry-head__subtitle">{entry.subtitle}</p> : null}
          <p className="entry-head__lede">{entry.summary}</p>

          <ul className="tag-list tag-list--entry" aria-label="标签">
            {entry.tags.map((tag) => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>
        </div>

        <div className="entry-head__side" aria-hidden="true">
          <span className="entry-head__numeral">{section.numeral}</span>
          <SectionGlyph section={section.id} className="entry-head__glyph" />
          <p className="vertical entry-head__vertical">{section.kicker}</p>
        </div>
      </header>

      <div className="entry-layout">
        <div className="entry-main">
          {entry.facts && entry.facts.length > 0 ? (
            <section className="entry-facts" aria-labelledby="entry-facts-title">
              <h2 className="entry-facts__title" id="entry-facts-title">
                资料卡 <span>/ DATA</span>
              </h2>
              <dl className="facts">
                {entry.facts.map((item) => (
                  <div className="facts__row" key={`${item.label}-${item.value}`}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          <Prose blocks={entry.body} />

          {entry.links && entry.links.length > 0 ? (
            <section className="entry-links" aria-labelledby="entry-links-title">
              <h2 className="entry-links__title" id="entry-links-title">
                外部来源 <span>/ SOURCES</span>
              </h2>
              <ul>
                {entry.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <span className="entry-links__icon" aria-hidden="true">
                        <ExternalIcon />
                      </span>
                      <span className="entry-links__label">
                        {link.label}
                        <span className="sr-only">（在新窗口打开）</span>
                        {link.note ? <span className="entry-links__note">{link.note}</span> : null}
                      </span>
                      <span className="entry-links__arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <aside className="entry-rail">
          <section className="rail-card" aria-labelledby="rail-status-title">
            <p className="rail-card__kicker">资料状态</p>
            <h2 className="rail-card__title" id="rail-status-title">
              {statusMeta.label}
            </h2>
            <p className="rail-card__text">{statusMeta.description}</p>
            <a className="rail-card__link" href="#/entry/source-status-guide">
              如何阅读状态标签 →
            </a>
          </section>

          {related.length > 0 ? (
            <section className="rail-related" aria-labelledby="rail-related-title">
              <p className="rail-card__kicker" id="rail-related-title">
                相关条目
              </p>
              <ul>
                {related.slice(0, 7).map((item) => (
                  <li key={item.id}>
                    <a href={`#/entry/${item.id}`}>
                      <span>{item.title}</span>
                      <span className="rail-related__section">{SECTION_MAP[item.section].title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <a className="rail-back" href={`#/section/${section.id}`}>
            <span aria-hidden="true">←</span> 返回{section.title}
          </a>
        </aside>
      </div>
    </article>
  );
}
