import type { SectionId } from './wiki';

export type Route =
  | { name: 'home' }
  | { name: 'section'; section: SectionId }
  | { name: 'entry'; id: string }
  | { name: 'search'; query: string; section?: SectionId }
  | { name: 'not-found'; path: string };
