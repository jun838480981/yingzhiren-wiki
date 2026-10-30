import type { SourceStatus } from '../types/wiki';

export interface StatusMeta {
  label: string;
  description: string;
  tone: 'gold' | 'rust' | 'steel' | 'ash' | 'ink' | 'paper';
}

export const STATUS_ORDER: SourceStatus[] = [
  'confirmed',
  'demo',
  'hands-on',
  'compiled',
  'incomplete',
  'meta',
];

export const STATUS_META: Record<SourceStatus, StatusMeta> = {
  confirmed: {
    label: '已确认',
    description: '可由官方公告、官方商店页或已发售版本直接核实。',
    tone: 'gold',
  },
  demo: {
    label: '公开演示',
    description: '来自官方公开演示、预告或实机片段，具体数值与正式版可能有差异。',
    tone: 'rust',
  },
  'hands-on': {
    label: '媒体体验',
    description: '来自媒体试玩或体验报道，属于可核实的二手体验记录。',
    tone: 'steel',
  },
  compiled: {
    label: '媒体整理',
    description: '由多家媒体整理或转述，官方中文定名与细节可能不同。',
    tone: 'ash',
  },
  incomplete: {
    label: '待补充',
    description: '公开资料有限，本站只记录可核实部分，不以推测填补空白。',
    tone: 'ink',
  },
  meta: {
    label: '站务说明',
    description: '本站的编辑规范、免责声明或使用说明。',
    tone: 'paper',
  },
};
