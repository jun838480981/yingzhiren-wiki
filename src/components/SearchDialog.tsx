import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { getFeaturedEntries } from '../data';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import { navigate, searchHref } from '../lib/router';
import { searchEntries } from '../lib/search';
import type { SectionId } from '../types/wiki';
import { CloseIcon, SearchIcon } from './Icons';
import { SearchResultItem } from './SearchResultItem';
import { SectionFilter } from './SectionFilter';

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

const QUICK_QUERIES = ['魂', '杀气', '血色森林', '甄子丹', '难度', '首领武器'];

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const [section, setSection] = useState<SectionId | 'all'>('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const trimmed = query.trim();
  const results = useMemo(() => searchEntries(query, section), [query, section]);
  const featured = useMemo(() => getFeaturedEntries().slice(0, 5), []);

  useLockBodyScroll(open);
  useFocusTrap(panelRef, open, onClose);

  useEffect(() => {
    if (!open) return;
    setQuery('');
    setSection('all');
    setActiveIndex(0);
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, section]);

  useEffect(() => {
    if (!open || results.length === 0) return;
    const node = document.getElementById(`search-option-${activeIndex}`);
    node?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex, open, results.length]);

  if (!open) return null;

  const activeHit = results[activeIndex];

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (results.length > 0) {
        setActiveIndex((current) => (current + 1) % results.length);
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (results.length > 0) {
        setActiveIndex((current) => (current - 1 + results.length) % results.length);
      }
    } else if (event.key === 'Enter' && activeHit) {
      event.preventDefault();
      navigate(`/entry/${activeHit.entry.id}`);
      onClose();
    }
  };

  const viewAll = () => {
    navigate(searchHref(query, section === 'all' ? undefined : section));
    onClose();
  };

  return (
    <div
      className="search-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="search-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-dialog-title"
        tabIndex={-1}
      >
        <div className="search-panel__rule" aria-hidden="true" />

        <header className="search-panel__head">
          <div>
            <p className="search-panel__kicker">全站检索 / SEARCH THE ARCHIVE</p>
            <h2 id="search-dialog-title" className="search-panel__title">
              搜索影境档案
            </h2>
          </div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="关闭搜索">
            <CloseIcon className="icon-button__icon" />
          </button>
        </header>

        <div className="search-field">
          <SearchIcon className="search-field__icon" />
          <input
            ref={inputRef}
            className="search-field__input"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="标题、人物、武器、地图、正文关键字…"
            aria-label="搜索全站"
            role="combobox"
            aria-expanded={trimmed.length > 0}
            aria-controls="search-dialog-results"
            aria-autocomplete="list"
            aria-activedescendant={activeHit ? `search-option-${activeIndex}` : undefined}
            autoComplete="off"
            spellCheck={false}
          />
          {query ? (
            <button type="button" className="search-field__clear" onClick={() => setQuery('')}>
              清除
            </button>
          ) : null}
        </div>

        <div className="search-panel__filters">
          <SectionFilter value={section} onChange={setSection} idPrefix="dialog-filter" />
        </div>

        {trimmed ? (
          <>
            <p className="search-panel__count" aria-live="polite">
              {results.length > 0 ? (
                <>
                  找到 <strong>{results.length}</strong> 条与“{trimmed}”相关的档案
                </>
              ) : (
                <>没有找到与“{trimmed}”相关的档案</>
              )}
            </p>

            {results.length > 0 ? (
              <div
                className="search-results"
                id="search-dialog-results"
                role="listbox"
                aria-label="搜索结果"
              >
                {results.map((hit, index) => (
                  <SearchResultItem
                    key={hit.entry.id}
                    hit={hit}
                    query={query}
                    active={index === activeIndex}
                    optionId={`search-option-${index}`}
                    onHover={() => setActiveIndex(index)}
                    onSelect={onClose}
                  />
                ))}
              </div>
            ) : (
              <div className="search-empty">
                <p className="search-empty__title">影境中没有这一页。</p>
                <p>试试更短的关键词，或切换到“全部”板块。</p>
                <div className="search-empty__queries">
                  {QUICK_QUERIES.slice(0, 4).map((item) => (
                    <button key={item} type="button" className="chip" onClick={() => setQuery(item)}>
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <footer className="search-panel__foot">
              <span className="key-hints">
                <kbd>↑</kbd>
                <kbd>↓</kbd> 选择
                <kbd>Enter</kbd> 打开
                <kbd>Esc</kbd> 关闭
              </span>
              <button
                type="button"
                className="text-button"
                onClick={viewAll}
                disabled={results.length === 0}
              >
                查看全部结果 →
              </button>
            </footer>
          </>
        ) : (
          <div className="search-intro">
            <p className="search-intro__hint">
              搜索覆盖条目标题、摘要、标签、事实表与正文。也可以用
              <kbd>/</kbd> 随时唤起本窗口。
            </p>
            <div className="search-intro__group">
              <p className="search-intro__label">试试这些关键词</p>
              <div className="search-intro__queries">
                {QUICK_QUERIES.map((item) => (
                  <button key={item} type="button" className="chip" onClick={() => setQuery(item)}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="search-intro__group">
              <p className="search-intro__label">精选档案</p>
              <div className="search-intro__links">
                {featured.map((entry) => (
                  <a key={entry.id} href={`#/entry/${entry.id}`} onClick={onClose}>
                    <span>{entry.title}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
