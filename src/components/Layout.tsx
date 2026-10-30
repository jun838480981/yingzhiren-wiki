import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from 'react';
import { getEntryById } from '../data';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import type { Route } from '../types/route';
import type { SectionId } from '../types/wiki';
import { CloseIcon, MenuIcon, SearchIcon } from './Icons';
import { Sidebar } from './Sidebar';
import { SiteNav } from './SiteNav';

interface LayoutProps {
  route: Route;
  onOpenSearch: () => void;
  children: ReactNode;
}

function routeKey(route: Route): string {
  switch (route.name) {
    case 'entry':
      return `entry:${route.id}`;
    case 'section':
      return `section:${route.section}`;
    case 'search':
      return `search:${route.query}:${route.section ?? ''}`;
    default:
      return route.name;
  }
}

export function Layout({ route, onOpenSearch, children }: LayoutProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const currentSection: SectionId | undefined =
    route.name === 'section'
      ? route.section
      : route.name === 'entry'
        ? getEntryById(route.id)?.section
        : undefined;

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  useLockBodyScroll(drawerOpen);
  useFocusTrap(drawerRef, drawerOpen, closeDrawer);

  useEffect(() => {
    setDrawerOpen(false);
  }, [routeKey(route)]);

  useEffect(() => {
    if (!drawerOpen) return;
    closeButtonRef.current?.focus();
  }, [drawerOpen]);

  const skipToMain = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const main = document.getElementById('main');
    main?.focus();
    main?.scrollIntoView({ block: 'start' });
  };

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main" onClick={skipToMain}>
        跳到正文
      </a>

      <Sidebar currentSection={currentSection} />

      <div className="app-body">
        <header className="mobile-header">
          <button
            type="button"
            className="icon-button mobile-header__icon"
            onClick={() => setDrawerOpen(true)}
            aria-label="打开导航"
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
          >
            <MenuIcon className="icon-button__icon" />
          </button>

          <a className="mobile-brand" href="#/" aria-label="影之刃零 · 影境档案首页">
            <span className="mobile-brand__title">影之刃零</span>
            <span className="mobile-brand__sub">影境档案</span>
          </a>

          <button
            type="button"
            className="icon-button mobile-header__icon"
            onClick={onOpenSearch}
            aria-label="搜索全站"
          >
            <SearchIcon className="icon-button__icon" />
          </button>
        </header>

        <div className="topbar">
          <div className="topbar__inner">
            <p className="topbar__meta">
              <span className="topbar__pulse" aria-hidden="true" />
              影境档案 · 非官方整理
              <span className="topbar__sep" aria-hidden="true">
                /
              </span>
              <span className="topbar__muted">NO.066</span>
            </p>
            <div className="topbar__right">
              <span className="topbar__date">2026.10.29 已发售</span>
              <button
                type="button"
                className="search-trigger"
                onClick={onOpenSearch}
                aria-label="打开全站搜索，快捷键 Ctrl 或 Command 加 K"
                aria-keyshortcuts="Control+K Meta+K /"
              >
                <SearchIcon className="search-trigger__icon" />
                <span className="search-trigger__text">搜索全站</span>
                <span className="search-trigger__hint" aria-hidden="true">
                  <kbd>Ctrl</kbd>
                  <kbd>K</kbd>
                </span>
              </button>
            </div>
          </div>
        </div>

        <main id="main" className="page" tabIndex={-1}>
          {children}
        </main>

        <footer className="site-footer">
          <div className="site-footer__inner">
            <div className="site-footer__brand">
              <span className="site-footer__seal" aria-hidden="true">
                影
              </span>
              <div>
                <p className="site-footer__title">影之刃零 · 影境档案</p>
                <p className="site-footer__sub">非官方粉丝 Wiki / 资料整理</p>
              </div>
            </div>

            <nav className="site-footer__nav" aria-label="页脚导航">
              <a href="#/section/overview">游戏概述</a>
              <a href="#/section/news">最新资讯</a>
              <a href="#/section/sources">资料来源</a>
              <a href="#/search">全站搜索</a>
            </nav>

            <p className="site-footer__legal">
              本项目是非官方粉丝 Wiki，与灵游坊 S-GAME、PlayStation
              及其他权利人无隶属关系。内容仅作资料整理，版权归原权利人所有；最终信息以官方为准。站内不使用受版权保护的游戏图像。
            </p>
          </div>
        </footer>
      </div>

      {drawerOpen ? (
        <div className="drawer" id="mobile-drawer">
          <div className="drawer__scrim" onClick={closeDrawer} aria-hidden="true" />
          <div
            className="drawer__panel"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="站点导航"
            tabIndex={-1}
          >
            <div className="drawer__head">
              <a className="brand brand--drawer" href="#/" onClick={closeDrawer}>
                <span className="brand__seal" aria-hidden="true">
                  影
                </span>
                <span className="brand__text">
                  <span className="brand__title">影之刃零</span>
                  <span className="brand__en">PHANTOM BLADE ZERO</span>
                </span>
              </a>
              <button
                ref={closeButtonRef}
                type="button"
                className="icon-button"
                onClick={closeDrawer}
                aria-label="关闭导航"
              >
                <CloseIcon className="icon-button__icon" />
              </button>
            </div>

            <div className="drawer__scroll">
              <SiteNav currentSection={currentSection} onNavigate={closeDrawer} />
              <div className="drawer__foot">
                <p className="sidebar__count" aria-hidden="true">
                  <span>66</span>
                  <span>
                    日
                    <br />
                    追凶之期
                  </span>
                </p>
                <p>非官方粉丝 Wiki · 不使用游戏图像</p>
                <a href="#/section/sources" onClick={closeDrawer}>
                  资料来源与免责声明 →
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
