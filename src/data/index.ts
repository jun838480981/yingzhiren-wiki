import type { SectionId, WikiEntry } from '../types/wiki';
import { SECTIONS, SECTION_MAP } from './sections';
import { overviewEntries } from './overview';
import { characterEntries } from './characters';
import { arsenalEntries } from './arsenal';
import { storyEntries } from './story';
import { worldEntries } from './world';
import { gameplayEntries } from './gameplay';
import { newsEntries } from './news';
import { sourceEntries } from './sources';

export { SECTIONS, SECTION_MAP };
export { STATUS_META, STATUS_ORDER } from './statuses';
export { SOURCE_URLS, RELEASE_DATE } from './sourceLinks';

export const ENTRIES: WikiEntry[] = [
  ...overviewEntries,
  ...characterEntries,
  ...arsenalEntries,
  ...storyEntries,
  ...worldEntries,
  ...gameplayEntries,
  ...newsEntries,
  ...sourceEntries,
];

export const ENTRY_MAP: Record<string, WikiEntry> = Object.fromEntries(
  ENTRIES.map((entry) => [entry.id, entry]),
);

export function getEntryById(id: string): WikiEntry | undefined {
  return ENTRY_MAP[id];
}

export function getEntriesBySection(section: SectionId): WikiEntry[] {
  const entries = ENTRIES.filter((entry) => entry.section === section);
  if (section === 'news') {
    return [...entries].sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
  }
  return entries;
}

export function getSectionEntryCount(section: SectionId): number {
  return getEntriesBySection(section).length;
}

export function getRelatedEntries(entry: WikiEntry): WikiEntry[] {
  return (entry.related ?? [])
    .map((id) => ENTRY_MAP[id])
    .filter((related): related is WikiEntry => Boolean(related));
}

export function getLatestNews(limit = 4): WikiEntry[] {
  return getEntriesBySection('news').slice(0, limit);
}

export function getFeaturedEntries(): WikiEntry[] {
  return ENTRIES.filter((entry) => entry.featured);
}

export function getStatusCount(status: WikiEntry['status']): number {
  return ENTRIES.filter((entry) => entry.status === status).length;
}

export function getSourceCount(): number {
  return ENTRIES.filter((entry) => entry.section === 'sources' && entry.links?.length).length;
}
