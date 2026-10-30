import type { WikiEntry } from '../types/wiki';
import { SOURCE_URLS } from './sourceLinks';

export const newsEntries: WikiEntry[] = [
  {
    id: 'news-release',
    section: 'news',
    title: '正式发售：影境开门',
    subtitle: '2026-10-29',
    summary:
      '《影之刃零》于 2026 年 10 月 29 日在中国区正式发售，登陆 PS5 与 PC。Steam 部分地区商店页显示 10 月 28 日，时区与区服差异可能导致显示不同。',
    tags: ['发售', '2026-10-29', 'PS5', 'PC', 'Steam'],
    status: 'confirmed',
    date: '2026-10-29',
    facts: [
      { label: '中国区发售', value: '2026-10-29' },
      { label: 'Steam 部分地区', value: '2026-10-28' },
      { label: '平台', value: 'PS5 / PC' },
      { label: '状态', value: '已发售' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '等待结束。灵游坊 S-GAME 的暗黑武侠动作冒险游戏《影之刃零》正式发售，影境、魂的六十六日追凶，以及围绕组织首领之死的阴谋，向玩家开放。',
      },
      {
        type: 'paragraph',
        text: '官网以“现已发售”为入口，Steam 与 PlayStation 商店页提供版本、语言与配置信息。Steam 部分地区页面显示 10 月 28 日，属于商店时区与刷新差异；中国区以 10 月 29 日为准。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '购买提醒',
        text: '本站不提供购买渠道或激活服务。请通过官方商店购买，并核对所在区服的实际解锁时间。',
      },
    ],
    links: [
      { label: '官方网站 · 影之刃零', href: SOURCE_URLS.official },
      { label: 'Steam 商店页', href: SOURCE_URLS.steam },
    ],
    related: ['overview-release', 'overview-game', 'news-boss-weapons'],
  },
  {
    id: 'news-boss-weapons',
    section: 'news',
    title: 'PlayStation Blog：首领武器如何改变战斗与探索',
    subtitle: '2026-10-28 · 发售前一日',
    summary:
      '发售前一日，PlayStation Blog 介绍击败首领后获取武器的设计：Boss 武器不仅改变战斗方式，也会打开新的探索路径；重铸会返还投入材料。',
    tags: ['首领武器', 'Boss武器', '探索', '重铸', 'PlayStation Blog'],
    status: 'confirmed',
    date: '2026-10-28',
    facts: [
      { label: '来源', value: 'PlayStation Blog' },
      { label: '日期', value: '2026-10-28' },
      { label: '主题', value: '首领武器 / 战斗 / 探索' },
      { label: '关键机制', value: '重铸返还材料' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '这篇官方文章把“打 Boss 掉武器”讲成了一套空间设计：某些首领武器会改变玩家与地图的交互方式，让原本不可达的区域出现新走法。战斗奖励因此直接转化为探索权限。',
      },
      {
        type: 'paragraph',
        text: '文章同时提到武器重铸会返还投入材料。对玩家来说，这意味着可以更放心地尝试不同首领武器，而不必担心强化资源被永久锁死在一把不趁手的兵器上。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '摘要而非全文',
        text: '本页为资讯摘要，完整设计说明请阅读 PlayStation Blog 原文。',
      },
    ],
    links: [
      {
        label: 'PlayStation Blog · How boss weapons transform combat and exploration',
        href: SOURCE_URLS.ps2026October,
      },
    ],
    related: ['arsenal-forge', 'world-bosses', 'arsenal-overview'],
  },
  {
    id: 'news-state-of-play',
    section: 'news',
    title: 'State of Play：武器、难度与甄子丹',
    subtitle: '2026-08-17 · 系统深入介绍',
    summary:
      '2026 年 8 月 17 日的 State of Play 深入展示战斗系统、三种难度、30+ 主武器与 25 种影之武装，并确认甄子丹参与魔渊的面部与动作捕捉。',
    tags: ['State of Play', '武器', '难度', '甄子丹', '魔渊', '2026-08-17'],
    status: 'confirmed',
    date: '2026-08-17',
    facts: [
      { label: '活动', value: 'State of Play' },
      { label: '日期', value: '2026-08-17' },
      { label: '武器规模', value: '30+ 主武器 / 25 影之武装' },
      { label: '难度', value: 'Wayfarer / Hellwalker / Sixty-Six Days' },
      { label: '演员参与', value: '甄子丹 → 魔渊' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '这次 State of Play 是发售前信息密度最高的一次公开介绍。战斗部分展示了双主武器切换、杀气资源的积累与释放，以及格挡、闪避、完美招架构成的防御节奏。',
      },
      {
        type: 'paragraph',
        text: '武器规模被明确为 30 余种主武器与 25 种影之武装；难度则列出 Wayfarer、Hellwalker 与 Sixty-Six Days 三档。官方同时确认甄子丹担任创意顾问，并参与魔渊的面部与动作捕捉。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '以正式版为准',
        text: '演示中的数值、名称与 UI 可能在正式版调整。中文难度名尤其需要以游戏内菜单为准。',
      },
    ],
    links: [
      {
        label: 'PlayStation Blog · State of Play dives deep into combat and the Wulin world',
        href: SOURCE_URLS.ps2026August,
      },
    ],
    related: ['arsenal-overview', 'gameplay-difficulty', 'char-moyuan', 'arsenal-shaqi'],
  },
  {
    id: 'news-first-look',
    section: 'news',
    title: '初次亮相：一段漫长旅程的新起点',
    subtitle: '2023-05-24 · 官方世界观与制作背景',
    summary:
      'PlayStation Blog 在 2023 年 5 月 24 日刊出制作组来信，首次系统介绍《影之刃零》的世界观、功夫朋克方向与制作背景。',
    tags: ['首次公开', '世界观', '制作背景', 'PlayStation Blog', '2023-05-24'],
    status: 'confirmed',
    date: '2023-05-24',
    facts: [
      { label: '来源', value: 'PlayStation Blog' },
      { label: '日期', value: '2023-05-24' },
      { label: '主题', value: '世界观 / 制作背景' },
      { label: '意义', value: '首次系统公开' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '这篇 2023 年的文章是理解项目起点的重要材料。制作组在其中谈到《影之刃零》的世界观、武术与机械感并置的视觉方向，以及从系列历史走向新项目的制作背景。',
      },
      {
        type: 'paragraph',
        text: '当时公开的内容与 2026 年发售版之间经历了多年开发，具体系统与角色设定可能变化。阅读旧文时，应把它当作“设计意图的起点”，而不是最终版本说明书。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '历史资料',
        text: '本条标记为已确认，指的是文章与日期本身；文中部分设计描述可能已随开发调整。',
      },
    ],
    links: [
      {
        label: 'PlayStation Blog · Phantom Blade Zero: a new beginning in a long journey',
        href: SOURCE_URLS.ps2023,
      },
    ],
    related: ['overview-game', 'story-world', 'source-ps-2023'],
  },
];
