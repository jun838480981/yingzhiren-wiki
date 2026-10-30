import { ENTRIES, SECTION_MAP } from '../data';
import type { ContentBlock, SectionId, WikiEntry } from '../types/wiki';

export interface SearchHit {
  entry: WikiEntry;
  score: number;
  snippet: string;
}

interface SearchDocument {
  entry: WikiEntry;
  title: string;
  subtitle: string;
  summary: string;
  tags: string;
  facts: string;
  body: string;
  bodyPlain: string;
  section: string;
}

export function normalizeText(value: string): string {
  return value.toLocaleLowerCase('zh-CN').replace(/\s+/g, ' ').trim();
}

export function tokenizeQuery(query: string): string[] {
  return Array.from(new Set(normalizeText(query).split(' ').filter(Boolean))).slice(0, 8);
}

function blockToText(block: ContentBlock): string {
  switch (block.type) {
    case 'paragraph':
    case 'heading':
      return block.text;
    case 'list':
      return block.items.join(' ');
    case 'quote':
      return `${block.text} ${block.attribution ?? ''}`;
    case 'note':
      return `${block.title ?? ''} ${block.text}`;
    case 'facts':
      return block.items.map((item) => `${item.label} ${item.value}`).join(' ');
    default:
      return '';
  }
}

function buildDocument(entry: WikiEntry): SearchDocument {
  const bodyPlain = entry.body.map(blockToText).join(' ');
  const facts = (entry.facts ?? []).map((item) => `${item.label} ${item.value}`).join(' ');
  return {
    entry,
    title: normalizeText(entry.title),
    subtitle: normalizeText(entry.subtitle ?? ''),
    summary: normalizeText(entry.summary),
    tags: normalizeText(entry.tags.join(' ')),
    facts: normalizeText(facts),
    body: normalizeText(bodyPlain),
    bodyPlain,
    section: normalizeText(SECTION_MAP[entry.section].title),
  };
}

const DOCUMENTS: SearchDocument[] = ENTRIES.map(buildDocument);

function buildSnippet(doc: SearchDocument, tokens: string[]): string {
  const bodyIndex = tokens
    .map((token) => doc.body.indexOf(token))
    .filter((index) => index >= 0)
    .sort((a, b) => a - b)[0];

  if (bodyIndex === undefined) {
    return doc.entry.summary;
  }

  const start = Math.max(0, bodyIndex - 26);
  const end = Math.min(doc.bodyPlain.length, start + 104);
  const prefix = start > 0 ? '…' : '';
  const suffix = end < doc.bodyPlain.length ? '…' : '';
  return `${prefix}${doc.bodyPlain.slice(start, end).trim()}${suffix}`;
}

export function searchEntries(
  query: string,
  section: SectionId | 'all' = 'all',
): SearchHit[] {
  const tokens = tokenizeQuery(query);
  if (tokens.length === 0) return [];

  const phrase = normalizeText(query);
  const hits: SearchHit[] = [];

  for (const doc of DOCUMENTS) {
    if (section !== 'all' && doc.entry.section !== section) continue;

    let total = 0;
    let matchesAll = true;

    for (const token of tokens) {
      let tokenScore = 0;
      if (doc.title.includes(token)) tokenScore += 26;
      if (doc.title === token) tokenScore += 18;
      if (doc.subtitle.includes(token)) tokenScore += 12;
      if (doc.tags.includes(token)) tokenScore += 10;
      if (doc.summary.includes(token)) tokenScore += 8;
      if (doc.facts.includes(token)) tokenScore += 6;
      if (doc.body.includes(token)) tokenScore += 4;
      if (doc.section.includes(token)) tokenScore += 3;

      if (tokenScore === 0) {
        matchesAll = false;
        break;
      }
      total += tokenScore;
    }

    if (!matchesAll) continue;

    if (phrase.length > 1 && doc.title.includes(phrase)) {
      total += 32;
    }
    if (normalizeText(doc.entry.status) === phrase) {
      total += 2;
    }

    hits.push({
      entry: doc.entry,
      score: total,
      snippet: buildSnippet(doc, tokens),
    });
  }

  return hits.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.entry.date !== b.entry.date) {
      return (b.entry.date ?? '').localeCompare(a.entry.date ?? '');
    }
    return a.entry.title.localeCompare(b.entry.title, 'zh-CN');
  });
}

export function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
