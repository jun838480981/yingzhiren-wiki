import type { WikiEntry } from '../types/wiki';
import { SOURCE_URLS } from './sourceLinks';

export const overviewEntries: WikiEntry[] = [
  {
    id: 'overview-game',
    section: 'overview',
    title: '影之刃零',
    subtitle: 'Phantom Blade Zero · 影境的第一份档案',
    summary:
      '灵游坊 S-GAME 制作发行的暗黑武侠动作冒险 ARPG。虚幻引擎 5 打造，以「功夫朋克」重塑武林；2026 年 10 月 29 日北京时间 10:00 全球同步解锁，登陆 PS5 与 PC。',
    tags: ['总览', '灵游坊', 'S-GAME', '虚幻5', '功夫朋克', 'PS5', 'PC'],
    status: 'confirmed',
    featured: true,
    facts: [
      { label: '开发 / 发行', value: '灵游坊 S-GAME' },
      { label: '引擎', value: 'Unreal Engine 5' },
      { label: '类型', value: '暗黑武侠动作冒险 / ARPG' },
      { label: '风格', value: '功夫朋克（Kungfupunk）' },
      { label: '平台', value: 'PlayStation 5 / PC（Steam、Epic、WeGame、TapTap）' },
      { label: '解锁', value: '2026-10-29 10:00（北京时间 / 02:00 UTC）' },
      { label: '预下载', value: '2026-10-27 10:00 开启' },
      { label: '游玩人数', value: '单人' },
      { label: '制作人', value: '梁其伟（Soulframe Liang）' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '《影之刃零》由灵游坊（S-GAME）制作并发行，是一款使用虚幻引擎 5 开发的暗黑武侠动作冒险游戏，也常被归入动作角色扮演（ARPG）的类型讨论。它以「功夫朋克」为视觉与气质关键词：传统武林的刀剑、门派与仪式感，被放进一个更阴冷、更机械、更接近末世的影境之中。',
      },
      {
        type: 'paragraph',
        text: '玩家扮演「组织」的精英刺客魂。他在一场构陷中背上杀害首领的罪名，心脏遭受重创；被救治后，生命只剩六十六天。追查阴谋、穿过影境、面对旧日同僚与各路强敌，构成了主线叙事的基本压力。',
      },
      { type: 'heading', text: '已确认的框架' },
      {
        type: 'list',
        items: [
          '开发与发行：灵游坊 S-GAME，制作人梁其伟（Soulframe Liang），同时担任创意总监。',
          '引擎：虚幻引擎 5。',
          '类型：暗黑武侠动作冒险 / ARPG，单人游玩。',
          '平台：PlayStation 5 与 PC；PC 端覆盖 Steam、Epic Games Store、WeGame 与 TapTap。',
          '解锁：2026 年 10 月 29 日 10:00（北京时间）全球同步，预下载于 10 月 27 日 10:00 开启。',
          '世界结构：名为「影境 / 武林」的宽线性舞台，由多张手工地图组成。',
        ],
      },
      {
        type: 'note',
        tone: 'source',
        title: '关于「10 月 28 日」',
        text: 'Steam 部分区服页面曾显示 10 月 28 日，那是美西时区换算后的日期，不是区服差异。全球统一在 2026-10-29 02:00 UTC 解锁，对应北京时间 10:00。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '资料说明',
        text: '本页只写公开资料能够支撑的框架信息。剧情细节、角色关系与系统数值若没有官方或可核实来源，站内会以「待补充」标注，不把社区推测写成定论。',
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
    related: ['overview-world', 'overview-release', 'overview-specs', 'overview-history', 'story-hun'],
  },
  {
    id: 'overview-world',
    section: 'overview',
    title: '影境与武林',
    subtitle: '宽线性的暗黑江湖',
    summary:
      '「影境」是游戏发生的武林世界。它不是无缝开放世界，而是由多张大地图串联而成的宽线性结构：每张图内有箱庭式探索与支线，地图之间靠铃铛连接。',
    tags: ['世界观', '影境', '武林', '宽线性', '箱庭', '手工地图'],
    status: 'confirmed',
    facts: [
      { label: '世界名称', value: '影境 / 武林' },
      { label: '世界结构', value: '多张大地图 + 轻箱庭' },
      { label: '流程形态', value: '宽线性（wide linear）' },
      { label: '连接方式', value: '铃铛传送 / 水面航行' },
      { label: '整体基调', value: '暗黑武侠 · 功夫朋克' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '影境不是一个把山川湖海一次性铺开的开放世界。公开资料反复提到「半开放」与「手工地图」：每个区域有较完整的空间设计、敌人配置与支线，区域之间再由主线叙事连接。对玩家而言，这更接近一组可回访的箱庭，而不是一张无限延伸的地图。',
      },
      {
        type: 'paragraph',
        text: '这样的结构让「能力锁」与「回溯」变得自然：某些路径需要特定影之武装才能通过，某些人物要等到主线推进后才愿意开口。地图因此不只是战斗背景，也承担叙事节奏与资源投放的功能。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '地图名称的边界',
        text: '站内地图名称已按社区 Wiki 收录的游戏内名称修正（溪谷 / 血色森林 / 梅谷湖 / 枷笼山）。2026 年 10 月媒体整理中的「悲泣溪谷 / 赤红森林 / 梅姑湖 / 狱山」仅作对照保留。',
      },
    ],
    related: ['world-overview', 'story-world', 'gameplay-structure', 'overview-game'],
  },
  {
    id: 'overview-release',
    section: 'overview',
    title: '发售信息、价格与版本',
    subtitle: '268 / 328 元，五平台同日',
    summary:
      '国区数字标准版 268 元、数字豪华版 328 元；豪华版含专属外观、数字美术设定集与原声。游戏同日登陆 PS5、Steam、Epic、WeGame 与 TapTap PC，PS5 实体版计划 2027 年推出。',
    tags: ['发售', '价格', '版本', '豪华版', '实体版', '平台'],
    status: 'confirmed',
    facts: [
      { label: '解锁时间', value: '2026-10-29 10:00 北京时间' },
      { label: '国区标准版', value: '268 元（数字）' },
      { label: '国区豪华版', value: '328 元（数字）' },
      { label: '豪华版内容', value: '游戏本体 + 专属外观 + 数字美术设定集 + 原声音乐' },
      { label: 'PC 平台', value: 'Steam / Epic Games Store / WeGame / TapTap' },
      { label: '主机', value: 'PlayStation 5（含 PS5 Pro 增强）' },
      { label: 'PS5 实体版', value: '计划 2027 年推出（媒体整理）' },
      { label: '预下载', value: '2026-10-27 10:00' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '国区两个版本差价 60 元，区别集中在游戏本体之外的数字内容：标准版只含本体，豪华版额外提供专属外观、游戏内数字美术设定集与原声音乐。对只关心战斗与剧情的玩家，标准版足够；愿意为设定资料付费的，豪华版的设定集是主要价值点。',
      },
      {
        type: 'paragraph',
        text: 'PC 端铺得比预期宽：Steam、Epic Games Store、WeGame 与 TapTap 四个渠道同日上线，且都提供各自客户端的文件校验或修复功能。PS5 版原生支持 PS5 Pro 增强，并支持 DualSense 的触觉反馈与自适应扳机。',
      },
      {
        type: 'paragraph',
        text: '预下载在 10 月 27 日 10:00 开启。官方提醒必须安装在 SSD 上，且预下载阶段需要预留约 300GB 空间（临时缓存与完整文件并存），解锁后会回落到约 145GB。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '价格会变',
        text: '价格、折扣与特典内容以对应商店页为准。海外定价为 59.99 / 69.99 美元一档（媒体整理），不同区服可能调整。本站不提供购买引导或代购服务。',
      },
    ],
    links: [
      { label: '官方网站 · 影之刃零', href: SOURCE_URLS.official },
      { label: 'Steam 商店页', href: SOURCE_URLS.steam },
    ],
    related: ['overview-game', 'overview-specs', 'news-release', 'source-official'],
  },
  {
    id: 'overview-specs',
    section: 'overview',
    title: 'PC 配置与容量',
    subtitle: '必须装 SSD，145GB',
    summary:
      '最低 i7-8700K / R5 3600 + 16GB + GTX 1660 6GB，目标 1080p30（开超分）；推荐 i5-10600K / R5 5600X + RTX 3060 Ti，目标 1440p60。本体约 145GB，必须装在 SSD，预下载需预留 300GB。',
    tags: ['配置', 'PC', 'SSD', '容量', '驱动', '光追', 'DLSS'],
    status: 'confirmed',
    facts: [
      { label: '系统', value: 'Windows 10 / 11 64 位' },
      { label: '最低 CPU', value: 'Intel i7-8700K / AMD Ryzen 5 3600' },
      { label: '最低显卡', value: 'GTX 1660 6GB / RX 5500 XT 8GB' },
      { label: '最低目标', value: '1080p 30FPS（开启超分）' },
      { label: '推荐 CPU', value: 'Intel i5-10600K / AMD Ryzen 5 5600X' },
      { label: '推荐显卡', value: 'RTX 3060 Ti 8GB / RX 6700 XT 12GB' },
      { label: '推荐目标', value: '1440p 60FPS（开启超分）' },
      { label: '内存 / DirectX', value: '16GB / DX12' },
      { label: '存储', value: '必须 SSD，本体约 145GB；预载预留 300GB' },
      { label: 'PS5 容量', value: '约 134.9GB' },
      { label: 'NVIDIA 驱动', value: '官方建议 617.42（621.01 存在性能不稳）' },
    ],
    body: [
      { type: 'heading', text: '最低配置' },
      {
        type: 'list',
        items: [
          '系统：Windows 10 / 11 64 位。',
          '处理器：Intel Core i7-8700K 或 AMD Ryzen 5 3600。',
          '内存：16GB。',
          '显卡：NVIDIA GTX 1660 6GB 或 AMD RX 5500 XT 8GB。',
          'DirectX 12，必须安装在 SSD。',
          '目标表现：1080p / 30FPS，需开启超分辨率。',
        ],
      },
      { type: 'heading', text: '推荐配置' },
      {
        type: 'list',
        items: [
          '处理器：Intel Core i5-10600K 或 AMD Ryzen 5 5600X。',
          '显卡：NVIDIA RTX 3060 Ti 8GB 或 AMD RX 6700 XT 12GB。',
          '目标表现：1440p / 60FPS，需开启超分辨率。',
        ],
      },
      {
        type: 'paragraph',
        text: '容量是本作最容易被低估的一项。PC 本体约 145GB，PS5 版约 134.9GB；预下载阶段因为临时缓存与完整文件同时存在，官方建议至少预留 300GB，解锁后会回落到 145GB 左右。安装位置也写死了：必须 SSD，官方还建议尽量避开系统盘。',
      },
      {
        type: 'paragraph',
        text: '画质技术上，PC 首发支持光线追踪（反射 / 阴影 / 焦散）与 DLSS 4.5（超分 + 多帧生成）。首日补丁重点优化了光追与路径追踪性能；官方强调即便关掉光追，光栅化画面也做过专门打磨，以保证中端 PC 与掌机设备上的美术一致性。Steam Deck 尚未通过验证，但官方称已做大量测试。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: 'NVIDIA 驱动警告',
        text: '官方在首日补丁公告中明确表示，NVIDIA 621.01 驱动存在性能不稳定问题，建议清洁安装并回滚到 617.42，等新驱动发布后再升级。这是发售后最实用的一条技术提醒。',
      },
    ],
    links: [
      { label: 'Steam 商店页', href: SOURCE_URLS.steam, note: '官方配置要求' },
      { label: '游民星空 · 首日补丁上线', href: SOURCE_URLS.gamerskyPatch, note: '2026-10-29' },
    ],
    related: ['overview-release', 'news-day-one-patch', 'overview-game', 'source-steam'],
  },
  {
    id: 'overview-history',
    section: 'overview',
    title: '开发团队与延期始末',
    subtitle: '从《雨血：死镇》到 3A',
    summary:
      '项目源自梁其伟学生时代的 RPG Maker 作品《雨血：死镇》。原定 2026 年 9 月 9 日发售，6 月 3 日宣布延期 50 天至 10 月 29 日，理由是升级角色模型与重构场景。',
    tags: ['开发团队', '梁其伟', '延期', '雨血', '制作背景'],
    status: 'confirmed',
    facts: [
      { label: '制作人 / 创意总监', value: '梁其伟（Soulframe Liang）' },
      { label: '发行', value: '灵游坊 S-GAME' },
      { label: '系列源头', value: '《雨血：死镇》（RPG Maker 时期作品）' },
      { label: '原定发售', value: '2026-09-09' },
      { label: '宣布延期', value: '2026-06-03（State of Play 当日）' },
      { label: '实际发售', value: '2026-10-29（延期 50 天）' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '灵游坊的历史比《影之刃零》长得多。梁其伟在学生时代用 RPG Maker 做出《雨血：死镇》，此后一路做成系列；《影之刃零》是这个脉络上的 3A 化尝试，也是「功夫朋克」这个概念第一次被完整搬进虚幻引擎 5。',
      },
      { type: 'heading', text: '为什么延期 50 天' },
      {
        type: 'paragraph',
        text: '2026 年 6 月 3 日的 State of Play 上，官方放出新预告并宣布发售日从 9 月 9 日推迟到 10 月 29 日。梁其伟同日发布公开信说明两件事：其一，升级了一批角色模型，使其达到团队能力范围内的最佳；其二，重构了不少场景，让游戏摆脱此前「全然灰暗漆黑」的印象，出现更多开阔、明亮的关卡。',
      },
      {
        type: 'paragraph',
        text: '公开信里还有一句关键表态：这些升级会尽量在不依赖光线追踪的前提下保留表现力，目的是让不同硬件的玩家获得相对一致的体验。官方随信公布的实机截图，都是在关闭光追、纯光栅化条件下拍的。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '为什么值得记一笔',
        text: '这次延期不是「做完再补」的托词——首日补丁仍在优化光追，说明发售前的打磨重点确实落在画面与场景上。对理解正式版为什么比早期演示更亮、更开阔，这段背景是必要的。',
      },
    ],
    links: [
      { label: '新京报 · 延期至 10 月底', href: SOURCE_URLS.bjnewsDelay, note: '2026-06-03' },
      { label: 'PlayStation Blog · 2023-05-24', href: SOURCE_URLS.ps2023, note: '制作背景' },
    ],
    related: ['news-delay', 'overview-game', 'news-first-look', 'news-state-of-play'],
  },
];
