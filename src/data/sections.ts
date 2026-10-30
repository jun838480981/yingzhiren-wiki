import type { Section, SectionId } from '../types/wiki';

export const SECTIONS: Section[] = [
  {
    id: 'overview',
    order: 1,
    numeral: '壹',
    title: '游戏概述',
    english: 'OVERVIEW',
    kicker: '入影境',
    description: '游戏定位、世界框架、平台与发售信息。第一次进入影境，从这里开始。',
  },
  {
    id: 'characters',
    order: 2,
    numeral: '贰',
    title: '角色',
    english: 'CHARACTERS',
    kicker: '见众生',
    description: '魂、魔渊、阿花、荆野，以及组织与影境中的群像。',
  },
  {
    id: 'arsenal',
    order: 3,
    numeral: '叁',
    title: '武器与技能',
    english: 'ARSENAL',
    kicker: '兵者',
    description: '主武器、影之武装、杀气与暗源，以及头目武器、铸魂与逆炼。',
  },
  {
    id: 'story',
    order: 4,
    numeral: '肆',
    title: '剧情背景',
    english: 'STORY',
    kicker: '六十六日',
    description: '一桩构陷、一颗残心，以及影境武林中尚未揭晓的阴谋。',
  },
  {
    id: 'world',
    order: 5,
    numeral: '伍',
    title: '地图与敌人',
    english: 'WORLD',
    kicker: '行影境',
    description: '八处已公开地名、首领与强敌，以及关于地图译名的说明。',
  },
  {
    id: 'gameplay',
    order: 6,
    numeral: '陆',
    title: '玩法机制',
    english: 'GAMEPLAY',
    kicker: '入阵',
    description: '宽线性地图、支线分支、收集成长、能力锁与四档难度。',
  },
  {
    id: 'news',
    order: 7,
    numeral: '柒',
    title: '最新资讯',
    english: 'DISPATCHES',
    kicker: '驿报',
    description: '按日期倒序整理的公开资讯与官方文章摘要。',
  },
  {
    id: 'sources',
    order: 8,
    numeral: '捌',
    title: '资料来源',
    english: 'SOURCES',
    kicker: '出处',
    description: '官方链接、媒体来源、资料状态说明与本站免责声明。',
  },
];

export const SECTION_MAP = SECTIONS.reduce<Record<SectionId, Section>>(
  (acc, section) => {
    acc[section.id] = section;
    return acc;
  },
  {} as Record<SectionId, Section>,
);
