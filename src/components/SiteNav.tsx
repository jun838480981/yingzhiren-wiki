import { SECTIONS } from '../data/sections';
import type { SectionId } from '../types/wiki';

interface SiteNavProps {
  currentSection?: SectionId;
  onNavigate?: () => void;
  label?: string;
}

export function SiteNav({ currentSection, onNavigate, label = '卷宗目录' }: SiteNavProps) {
  return (
    <nav className="site-nav" aria-label="主要板块">
      <p className="site-nav__label">
        {label} <span>/ ARCHIVE</span>
      </p>
      <ul className="site-nav__list">
        {SECTIONS.map((section) => {
          const active = currentSection === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#/section/${section.id}`}
                className={`site-nav__link${active ? ' is-active' : ''}`}
                aria-current={active ? 'page' : undefined}
                onClick={onNavigate}
              >
                <span className="site-nav__numeral" aria-hidden="true">
                  {section.numeral}
                </span>
                <span className="site-nav__text">
                  <span className="site-nav__title">{section.title}</span>
                  <span className="site-nav__en">{section.english}</span>
                </span>
                <span className="site-nav__arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
