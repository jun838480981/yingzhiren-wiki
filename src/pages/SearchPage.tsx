import { useEffect, useMemo, useState } from 'react';
import {
  ENTRIES,
  getEntriesBySection,
  getFeaturedEntries,
} from '../data';
import { formatCount } from '../lib/format';
import { searchEntries } from '../lib/search';
import type { SectionId } from '../types/wiki';
import { EntryCard } from '../components/EntryCard';
import { SearchIcon } from '../components/Icons';
import { SearchResultItem } from '../components/SearchResultItem';
import { SectionFilter } from '../components/SectionFilter';

interface SearchPageProps {
  initialQuery: string;
  initialSection?: SectionId;
}

const QUICK_QUERIES = ['魂', '杀气', '甄子丹', '溪谷', '难度模式', '首领武器'];

export function SearchPage({ initialQuery, initialSection }: SearchPageProps) {
  const [query, setQuery] = useState(initialQuery);
  const [section, setSection] = useState<SectionId | 'all'>(initialSection ?? 'all');

  useEffect(() => {
    setQuery(initialQuery);
    setSection(initialSection ?? 'all');
  }, [initialQuery, initialSection]);

  const trimmed = query.trim();
  const hits = useMemo(() => searchEntries(query, section), [query, section]);

  const browseEntries = useMemo(() => {
    if (section === 'all') return getFeaturedEntries().slice(0, 6);
    return getEntriesBySection(section);
  }, [section]);

  return (
    <div className="search-page">
      <header className="search-page__head">
        <p className="section-head__kicker">检索 / SEARCH THE ARCHIVE</p>
        <h1 className="search-page__title">全站搜索</h1>
        <p className="search-page__desc">
          搜索覆盖条目标题、摘要、标签、资料卡与正文。结果可直接跳转到对应条目；按
          <kbd>/</kbd> 或 <kbd>Ctrl</kbd> + <kbd>K</kbd> 可随时唤起快捷搜索。
        </p>
      </header>

      <div className="search-page__panel">
        <form className="search-page__form" role="search" onSubmit={(event) => event.preventDefault()}>
          <div className="search-field search-field--page">
            <SearchIcon className="search-field__icon" />
            <label className="sr-only" htmlFor="search-page-input">
              搜索全站
            </label>
            <input
              id="search-page-input"
              className="search-field__input"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="输入人物、武器、地图、玩法或正文关键字…"
              autoComplete="off"
              spellCheck={false}
            />
            {query ? (
              <button type="button" className="search-field__clear" onClick={() => setQuery('')}>
                清除
              </button>
            ) : null}
          </div>
        </form>

        <div className="search-page__filter">
          <SectionFilter value={section} onChange={setSection} idPrefix="page-filter" />
        </div>

        {trimmed ? (
          <section className="search-page__results" aria-labelledby="results-title">
            <div className="search-page__results-head">
              <h2 id="results-title">
                {hits.length > 0 ? (
                  <>
                    找到 <strong>{hits.length}</strong> 条结果
                  </>
                ) : (
                  '没有结果'
                )}
              </h2>
              <p>
                关键词：<span>{trimmed}</span>
              </p>
            </div>

            {hits.length > 0 ? (
              <div className="search-results search-results--page">
                {hits.map((hit) => (
                  <SearchResultItem key={hit.entry.id} hit={hit} query={query} />
                ))}
              </div>
            ) : (
              <div className="empty-state empty-state--search">
                <p className="empty-state__title">影境中没有这一页。</p>
                <p>试试更短的关键词，或放宽板块筛选。</p>
                <div className="search-empty__queries">
                  {QUICK_QUERIES.map((item) => (
                    <button key={item} type="button" className="chip" onClick={() => setQuery(item)}>
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </section>
        ) : (
          <section className="search-page__browse" aria-labelledby="browse-title">
            <div className="search-page__results-head">
              <h2 id="browse-title">{section === 'all' ? '精选档案' : '板块档案'}</h2>
              <p>
                共 <span>{formatCount(browseEntries.length)}</span> 条，输入关键词开始检索
              </p>
            </div>

            <div className="search-page__quick">
              <span>快速检索</span>
              {QUICK_QUERIES.map((item) => (
                <button key={item} type="button" className="chip" onClick={() => setQuery(item)}>
                  {item}
                </button>
              ))}
            </div>

            <div className="entry-grid">
              {browseEntries.map((entry) => (
                <EntryCard key={entry.id} entry={entry} />
              ))}
            </div>
            {section === 'all' && ENTRIES.length > browseEntries.length ? (
              <p className="search-page__browse-note">
                精选只是入口。用左侧导航或上方板块筛选，查看全部 {formatCount(ENTRIES.length)} 条档案。
              </p>
            ) : null}
          </section>
        )}
      </div>
    </div>
  );
}
