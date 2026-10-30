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
  | 'community'
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
  /** 武器 / 影之武装的面板数据，存在时详情页会渲染数值面板。 */
  weapon?: WeaponProfile;
  body: ContentBlock[];
  links?: ExternalLink[];
  related?: string[];
  featured?: boolean;
}

/** 单项数值：初始值、满级值，以及二周目“轮回”档位。 */
export interface WeaponStat {
  label: string;
  initial: number;
  max: number;
  rebirthInitial?: number;
  rebirthMax?: number;
}

/** 强化到指定等级解锁的武器特性。 */
export interface WeaponTrait {
  level: number;
  name: string;
  effect: string;
}

export interface WeaponProfile {
  kind: '主武器' | '影之武装';
  /** 单人武器 / 双手武器 / 双持武器 / 破坏 / 武学 / 奇门 / 远程 / 召唤 */
  category: string;
  maxLevel: number;
  stats: WeaponStat[];
  /** 普通连招段数 */
  normalCombo?: number;
  /** 杀气连招段数 */
  surgeCombo?: number;
  /** 绝技与武器特殊机制 */
  specials?: { name: string; text: string }[];
  /** 铸魂：材料与铸魂后的效果 */
  soulforge?: { material: string; name: string; effect: string };
  traits?: WeaponTrait[];
  /** 升级到指定等级的材料消耗 */
  upgrade?: { level: number; cost: string }[];
  /** 升级相关的补充说明 */
  note?: string;
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
