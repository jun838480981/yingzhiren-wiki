import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { getEntryById } from './data';
import { useHashRoute } from './hooks/useHashRoute';
import { Layout } from './components/Layout';
import { SearchDialog } from './components/SearchDialog';
import { HomePage } from './pages/HomePage';
import { SectionPage } from './pages/SectionPage';
import { EntryPage } from './pages/EntryPage';
import { SearchPage } from './pages/SearchPage';
import { NotFoundPage } from './pages/NotFoundPage';
import type { Route } from './types/route';

function pageKey(route: Route): string {
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

export default function App() {
  const route = useHashRoute();
  const [searchOpen, setSearchOpen] = useState(false);

  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping =
        target instanceof HTMLElement &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable);

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchOpen(true);
        return;
      }

      if (event.key === '/' && !isTyping && !event.metaKey && !event.ctrlKey && !event.altKey) {
        event.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageKey(route)]);

  let content: ReactNode;

  switch (route.name) {
    case 'home':
      content = <HomePage onOpenSearch={openSearch} />;
      break;
    case 'section':
      content = <SectionPage sectionId={route.section} />;
      break;
    case 'entry': {
      const entry = getEntryById(route.id);
      content = entry ? (
        <EntryPage entry={entry} />
      ) : (
        <NotFoundPage path={`/entry/${route.id}`} />
      );
      break;
    }
    case 'search':
      content = <SearchPage initialQuery={route.query} initialSection={route.section} />;
      break;
    case 'not-found':
      content = <NotFoundPage path={route.path} />;
      break;
    default:
      content = <HomePage onOpenSearch={openSearch} />;
  }

  return (
    <>
      <Layout route={route} onOpenSearch={openSearch}>
        {content}
      </Layout>
      <SearchDialog open={searchOpen} onClose={closeSearch} />
    </>
  );
}
