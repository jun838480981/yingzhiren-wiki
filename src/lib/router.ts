import type { Route } from '../types/route';
import { SECTION_IDS, type SectionId } from '../types/wiki';

function safeDecode(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export function isSectionId(value: string): value is SectionId {
  return (SECTION_IDS as readonly string[]).includes(value);
}

export function parseHash(hash: string): Route {
  const raw = hash.startsWith('#') ? hash.slice(1) : hash;
  const [pathPart, queryPart = ''] = raw.split('?');
  const path = pathPart || '/';
  const segments = path.split('/').filter(Boolean).map(safeDecode);

  if (segments.length === 0) {
    return { name: 'home' };
  }

  if (segments[0] === 'section' && segments[1] && isSectionId(segments[1])) {
    return { name: 'section', section: segments[1] };
  }

  if (segments[0] === 'entry' && segments[1]) {
    return { name: 'entry', id: segments[1] };
  }

  if (segments[0] === 'search') {
    const params = new URLSearchParams(queryPart);
    const section = params.get('section');
    return {
      name: 'search',
      query: params.get('q') ?? '',
      section: section && isSectionId(section) ? section : undefined,
    };
  }

  return { name: 'not-found', path };
}

export function navigate(path: string): void {
  const next = path.startsWith('#') ? path.slice(1) : path;
  window.location.hash = next.startsWith('/') ? next : `/${next}`;
}

export function searchHref(query: string, section?: SectionId): string {
  const params = new URLSearchParams();
  if (query.trim()) params.set('q', query.trim());
  if (section) params.set('section', section);
  const suffix = params.toString();
  return `#/search${suffix ? `?${suffix}` : ''}`;
}
