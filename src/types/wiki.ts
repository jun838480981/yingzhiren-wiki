export const SECTION_IDS = [
  'overview',
  'characters',
  'arsenal',
  'story',
  'world',
  'gameplay',
  'news',
  'sources',
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

/** 资料可信度 / 信息状态，用于避免把传闻写成定论。 */
export type SourceStatus =
  | 'confirmed'
  | 'demo'
  | 'hands-on'
  | 'compiled'
  | 'incomplete'
  | 'meta';

export interface Fact {
  label: string;
  value: string;
}

export interface ExternalLink {
  label: string;
  href: string;
  note?: string;
}

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'quote'; text: string; attribution?: string }
  | {
      type: 'note';
      title?: string;
      text: string;
      tone?: 'default' | 'caution' | 'source';
    }
  | { type: 'facts'; items: Fact[] };

export interface WikiEntry {
  id: string;
  section: SectionId;
  title: string;
  subtitle?: string;
  summary: string;
  tags: string[];
  status: SourceStatus;
  /** ISO 日期，资讯条目必填，其余可作为整理日期。 */
  date?: string;
  facts?: Fact[];
  body: ContentBlock[];
  links?: ExternalLink[];
  related?: string[];
  featured?: boolean;
}

export interface Section {
  id: SectionId;
  order: number;
  numeral: string;
  title: string;
  english: string;
  kicker: string;
  description: string;
}
