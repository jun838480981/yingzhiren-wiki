import type { WikiEntry } from '../types/wiki';
import { SOURCE_URLS } from './sourceLinks';

export const overviewEntries: WikiEntry[] = [
  {
    id: 'overview-game',
    section: 'overview',
    title: '影之刃零',
    subtitle: 'Phantom Blade Zero · 影境的第一份档案',
    summary:
      '灵游坊 S-GAME 制作发行的暗黑武侠动作冒险 ARPG。虚幻引擎 5 打造，以“功夫朋克”重塑武林；2026 年 10 月 29 日在中国区正式发售，登陆 PS5 与 PC。',
    tags: ['总览', '灵游坊', 'S-GAME', '虚幻5', '功夫朋克', 'PS5', 'PC'],
    status: 'confirmed',
    featured: true,
    facts: [
      { label: '开发 / 发行', value: '灵游坊 S-GAME' },
      { label: '引擎', value: 'Unreal Engine 5' },
      { label: '类型', value: '暗黑武侠动作冒险 / ARPG' },
      { label: '风格', value: '功夫朋克（Kungfupunk）' },
      { label: '平台', value: 'PlayStation 5 / PC' },
      { label: '中国区发售', value: '2026-10-29' },
      { label: 'Steam 部分地区', value: '商店页显示 2026-10-28' },
      { label: '游玩人数', value: '单人' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '《影之刃零》由灵游坊（S-GAME）制作并发行，是一款使用虚幻引擎 5 开发的暗黑武侠动作冒险游戏，也常被归入动作角色扮演（ARPG）的类型讨论。它以“功夫朋克”为视觉与气质关键词：传统武林的刀剑、门派与仪式感，被放进一个更阴冷、更机械、更接近末世的影境之中。',
      },
      {
        type: 'paragraph',
        text: '玩家扮演“组织”的精英刺客魂。他在一场构陷中背上杀害首领的罪名，心脏遭受重创；被救治后，生命只剩六十六天。追查阴谋、穿过影境、面对旧日同僚与各路强敌，构成了主线叙事的基本压力。',
      },
      { type: 'heading', text: '已确认的框架' },
      {
        type: 'list',
        items: [
          '开发与发行：灵游坊 S-GAME。',
          '引擎：虚幻引擎 5。',
          '类型：暗黑武侠动作冒险 / ARPG，单人游玩。',
          '平台：PlayStation 5 与 PC。',
          '中国区正式发售日：2026 年 10 月 29 日；Steam 部分地区商店页显示 10 月 28 日。',
          '世界结构：名为“影境 / 武林”的半开放舞台，由多张手工地图组成。',
        ],
      },
      {
        type: 'note',
        tone: 'caution',
        title: '关于发售日差异',
        text: '中国区官方信息以 10 月 29 日为准；Steam 部分地区页面显示 10 月 28 日，通常与时区、区服或商店刷新时间有关。购买与解锁时间请以对应商店页和官方公告为准。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '资料说明',
        text: '本页只写公开资料能够支撑的框架信息。剧情细节、角色关系与系统数值若没有官方或可核实来源，站内会以“待补充”标注，不把社区推测写成定论。',
      },
    ],
    links: [
      { label: '官方网站 · 影之刃零', href: SOURCE_URLS.official, note: '发售信息与版本入口' },
      { label: 'Steam 商店页', href: SOURCE_URLS.steam, note: '平台、语言与发售时间' },
      {
        label: 'PlayStation Blog · 2023-05-24',
        href: SOURCE_URLS.ps2023,
        note: '首次世界观与制作背景',
      },
    ],
    related: ['overview-world', 'overview-release', 'story-hun', 'char-hun'],
  },
  {
    id: 'overview-world',
    section: 'overview',
    title: '影境与武林',
    subtitle: '半开放的暗黑江湖',
    summary:
      '“影境”是游戏发生的武林世界。它不是无缝开放世界，而是由多张手工打造的地图串联而成的半开放结构：既有箱庭式探索，也保留明确的叙事推进。',
    tags: ['世界观', '影境', '武林', '半开放', '箱庭', '手工地图'],
    status: 'confirmed',
    facts: [
      { label: '世界名称', value: '影境 / 武林' },
      { label: '世界结构', value: '半开放，多张手工地图' },
      { label: '探索形态', value: '箱庭式区域与回访' },
      { label: '整体基调', value: '暗黑武侠 · 功夫朋克' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '影境不是一个把山川湖海一次性铺开的开放世界。公开资料反复提到“半开放”与“手工地图”：每个区域有较完整的空间设计、敌人配置与支线，区域之间再由主线叙事连接。对玩家而言，这更接近一组可回访的箱庭，而不是一张无限延伸的地图。',
      },
      {
        type: 'paragraph',
        text: '这样的结构让“能力锁”与“回溯”变得自然：某些路径需要特定影之武装才能通过，某些人物要等到主线推进后才愿意开口。地图因此不只是战斗背景，也承担叙事节奏与资源投放的功能。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '地图名称的边界',
        text: '站内列出的八处地名来自 2026 年 10 月媒体解禁后的整理，属于“媒体整理”级别。官方中文定名、区域范围与先后顺序可能不同；本页不把媒体译名当作官方最终名称。',
      },
    ],
    related: ['world-overview', 'story-world', 'gameplay-structure', 'overview-game'],
  },
  {
    id: 'overview-release',
    section: 'overview',
    title: '发售信息与版本',
    subtitle: '2026 年 10 月 29 日，影境开门',
    summary:
      '《影之刃零》于 2026 年 10 月 29 日在中国区正式发售，登陆 PS5 与 PC；Steam 部分地区商店页显示 10 月 28 日。具体版本内容、语言与特典以官方商店为准。',
    tags: ['发售', '平台', 'Steam', 'PS5', '版本'],
    status: 'confirmed',
    facts: [
      { label: '中国区发售', value: '2026-10-29' },
      { label: 'Steam 部分地区', value: '2026-10-28' },
      { label: '平台', value: 'PlayStation 5 / PC' },
      { label: '当前状态', value: '已正式发售' },
      { label: '游玩人数', value: '单人' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '游戏已结束等待阶段。官网以“现已发售”为入口，Steam 商店页与 PlayStation 商店页是查看版本、语言支持、价格与解锁状态的第一手位置。不同区服的显示时间可能相差一天，这是商店时区与刷新机制造成的常见现象。',
      },
      {
        type: 'heading',
        text: '查看版本时建议确认',
      },
      {
        type: 'list',
        items: [
          '所在区服与对应商店的解锁时间。',
          '语言支持与字幕 / 语音配置。',
          '是否包含预购或豪华版特典，以及特典的领取方式。',
          'PC 端的最低与推荐配置要求。',
        ],
      },
      {
        type: 'note',
        tone: 'source',
        title: '本站不提供购买引导',
        text: '本站只做资料整理，不提供代购、激活码或账号相关服务。价格、折扣与版本内容会变动，请以官方商店页为准。',
      },
    ],
    links: [
      { label: '官方网站 · 影之刃零', href: SOURCE_URLS.official },
      { label: 'Steam 商店页', href: SOURCE_URLS.steam },
    ],
    related: ['overview-game', 'news-release', 'source-official', 'source-steam'],
  },
];
