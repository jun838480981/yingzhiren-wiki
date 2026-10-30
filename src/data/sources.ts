import type { WikiEntry } from '../types/wiki';
import { SOURCE_URLS } from './sourceLinks';

export const sourceEntries: WikiEntry[] = [
  {
    id: 'source-disclaimer',
    section: 'sources',
    title: '免责声明与使用说明',
    subtitle: '非官方粉丝项目',
    summary:
      '本项目是非官方粉丝 Wiki，与灵游坊 S-GAME、PlayStation 及其他权利人无隶属关系。内容仅作资料整理，版权归原权利人；最终信息以官方为准。站内不使用游戏图像。',
    tags: ['免责声明', '非官方', '版权', '站务'],
    status: 'meta',
    facts: [
      { label: '项目性质', value: '非官方粉丝 Wiki' },
      { label: '隶属关系', value: '与权利方无隶属或授权关系' },
      { label: '内容用途', value: '资料整理 / 学习交流' },
      { label: '版权归属', value: '原权利人所有' },
      { label: '图像', value: '不使用受版权保护的游戏图像' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '本站是玩家自制的《影之刃零》中文主题资料站，不是官方网站，也不代表灵游坊 S-GAME、PlayStation、Valve 或其他相关公司。站内不使用游戏截图、角色立绘、官方 Logo 或任何受版权保护的游戏图像；所有装饰均由 CSS 与内联 SVG 绘制。',
      },
      {
        type: 'paragraph',
        text: '站内文字为摘要性整理与编辑归纳，引用的事实尽量附上公开来源。游戏名称、角色名称、世界观设定及相关商标、版权归原权利人所有。若权利方认为某处内容需要调整或删除，可通过项目仓库提出。',
      },
      {
        type: 'paragraph',
        text: '游戏内容会随版本更新变化。本站不保证信息始终完整、准确或最新；购买、版本、配置与官方活动请以官方公告和对应商店页为准。站内不提供盗版、激活码、账号交易或任何规避版权保护的指引。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '一句话版本',
        text: '非官方、只做资料整理、不用游戏图像、版权归原权利人、最终以官方为准。',
      },
    ],
    related: ['source-status-guide', 'source-official', 'source-qq-maps'],
  },
  {
    id: 'source-status-guide',
    section: 'sources',
    title: '资料状态说明',
    subtitle: '如何阅读本站的“可信度标签”',
    summary:
      '站内每个条目都带有资料状态：已确认、公开演示、媒体体验、社区实测、媒体整理、待补充、站务说明。标签用来区分信息强度，避免把推测写成定论。',
    tags: ['资料状态', '编辑规范', '可信度', '站务'],
    status: 'meta',
    facts: [
      { label: '已确认', value: '官方公告 / 商店页 / 正式版可核实' },
      { label: '公开演示', value: '官方演示或预告，细节可能调整' },
      { label: '媒体体验', value: '媒体试玩报道，二手但可核实' },
      { label: '社区实测', value: '社区 Wiki 实测面板，随版本变动' },
      { label: '媒体整理', value: '媒体汇总，译名可能不同' },
      { label: '待补充', value: '公开资料不足' },
      { label: '站务说明', value: '本站规范与声明' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '“已确认”不意味着永久不变。游戏会更新，官方也可能修正旧说法；它只表示在整理时，该信息有可直接核查的一手来源。',
      },
      {
        type: 'paragraph',
        text: '“公开演示”与“媒体体验”都来自可核实的公开活动，但演示版本与正式版可能存在数值、名称或演出差异。我们保留这些信息，同时提醒读者不要把它们当作最终版本说明书。',
      },
      {
        type: 'paragraph',
        text: '“社区实测”用于发售后由玩家或社区 Wiki 直接读出的游戏内数据，主要是武器面板、升级材料这类可被复核的数字。它是目前最细的一层信息，但也最受版本平衡影响——跨版本比较时请以当前版本为准。',
      },
      {
        type: 'paragraph',
        text: '“媒体整理”多用于地图名、首领名等由媒体汇总的信息，尤其是中文译名。它有价值，但优先级低于官方来源。“待补充”则是明确的资料缺口：我们宁可留白，也不编造。',
      },
    ],
    related: ['source-disclaimer', 'world-overview', 'source-qq-maps'],
  },
  {
    id: 'source-official',
    section: 'sources',
    title: '官方网站 · 影之刃零',
    subtitle: 'pbz.s-game.cn',
    summary:
      '灵游坊 S-GAME 的《影之刃零》官方网站，提供“现已发售”入口、版本信息与官方宣传内容。站内发售与平台信息优先参考此来源。',
    tags: ['官方', '官网', '发售', '版本'],
    status: 'confirmed',
    facts: [
      { label: '类型', value: '官方来源' },
      { label: '用途', value: '发售 / 版本 / 官方公告' },
      { label: '优先级', value: '最高' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '官网是确认发售状态、平台与官方宣传口径的第一入口。站内关于“已正式发售”的判断以官网与商店页为准。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '外链提示',
        text: '点击下方链接将离开本站，前往灵游坊官方站点。',
      },
    ],
    links: [{ label: 'pbz.s-game.cn', href: SOURCE_URLS.official, note: '官方网站' }],
    related: ['overview-game', 'overview-release', 'news-release'],
  },
  {
    id: 'source-ps-2023',
    section: 'sources',
    title: 'PlayStation Blog · 2023-05-24',
    subtitle: 'A new beginning in a long journey',
    summary:
      'PlayStation Blog 的早期制作组文章，首次系统介绍《影之刃零》的世界观、功夫朋克方向与制作背景。属于历史性的官方来源。',
    tags: ['PlayStation Blog', '官方', '2023', '世界观', '制作背景'],
    status: 'confirmed',
    facts: [
      { label: '类型', value: '官方博客' },
      { label: '日期', value: '2023-05-24' },
      { label: '用途', value: '世界观 / 制作背景' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '这篇文章记录了项目早期对外表达的创作意图。由于距离正式发售已有数年，其中的部分系统描述应视为“当时的设想”，而不是最终版本说明。',
      },
    ],
    links: [
      {
        label: 'Phantom Blade Zero: a new beginning in a long journey',
        href: SOURCE_URLS.ps2023,
        note: 'PlayStation Blog',
      },
    ],
    related: ['news-first-look', 'story-world', 'overview-game'],
  },
  {
    id: 'source-ps-2026-08',
    section: 'sources',
    title: 'PlayStation Blog · 2026-08-17',
    subtitle: 'State of Play 深入战斗与武林',
    summary:
      '2026 年 8 月 17 日的官方文章，配合 State of Play 介绍战斗系统、武器规模、难度模式与甄子丹的参与。是武器和难度条目的主要来源。',
    tags: ['PlayStation Blog', '官方', '2026', 'State of Play', '战斗', '难度'],
    status: 'confirmed',
    facts: [
      { label: '类型', value: '官方博客' },
      { label: '日期', value: '2026-08-17' },
      { label: '用途', value: '武器 / 难度 / 魔渊' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '站内“30+ 主武器”“25 种影之武装”与“甄子丹参与魔渊面部与动作捕捉”等信息，主要依据这篇官方文章及其配套公开活动；文中出现的三档英文难度名是发售前口径，正式版为四档中文难度。',
      },
    ],
    links: [
      {
        label: 'State of Play dives deep into combat and the Wulin world',
        href: SOURCE_URLS.ps2026August,
        note: 'PlayStation Blog',
      },
    ],
    related: ['news-state-of-play', 'arsenal-overview', 'gameplay-difficulty', 'char-moyuan'],
  },
  {
    id: 'source-ps-2026-10',
    section: 'sources',
    title: 'PlayStation Blog · 2026-10-28',
    subtitle: '首领武器如何改变战斗与探索',
    summary:
      '发售前一天的官方文章，说明首领武器的获取、战斗风格变化、探索路径联动，以及等级重置返还材料的机制（游戏内为逆炼符）。',
    tags: ['PlayStation Blog', '官方', '2026', '首领武器', '探索', '逆炼符'],
    status: 'confirmed',
    facts: [
      { label: '类型', value: '官方博客' },
      { label: '日期', value: '2026-10-28' },
      { label: '用途', value: '首领武器 / 探索 / 等级重置' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '文章把首领武器从“掉落物”提升为“探索工具”：击败首领得到的兵器可能改变玩家与地图的交互方式。站内「升级、铸魂与逆炼」条目以此为主要依据。',
      },
    ],
    links: [
      {
        label: 'How boss weapons transform combat and exploration',
        href: SOURCE_URLS.ps2026October,
        note: 'PlayStation Blog',
      },
    ],
    related: ['news-boss-weapons', 'arsenal-forge', 'world-bosses'],
  },
  {
    id: 'source-steam',
    section: 'sources',
    title: 'Steam 商店页',
    subtitle: 'App 4115450 · Phantom Blade Zero',
    summary:
      'Steam 商店页提供平台、语言、配置与发售时间信息。部分地区页面显示 2026-10-28，与中国区 10-29 的口径存在时区 / 区服差异。',
    tags: ['Steam', '商店页', '平台', '发售时间', '配置'],
    status: 'confirmed',
    facts: [
      { label: '类型', value: '官方商店页' },
      { label: 'App ID', value: '4115450' },
      { label: '用途', value: '平台 / 语言 / 配置 / 解锁时间' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '商店页是购买前最直接的信息来源。价格、折扣、语言与配置可能随地区与时间变化，站内不复制会过期的商店数据。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '外链提示',
        text: '点击下方链接将离开本站，前往 Steam 商店。',
      },
    ],
    links: [
      {
        label: 'Steam · Phantom Blade Zero',
        href: SOURCE_URLS.steam,
        note: 'App 4115450',
      },
    ],
    related: ['overview-release', 'news-release', 'source-official'],
  },
  {
    id: 'source-qq-maps',
    section: 'sources',
    title: '腾讯新闻 · 八大地图媒体整理',
    subtitle: '2026-10-26 · 辅助来源',
    summary:
      '2026 年 10 月 26 日的媒体整理文章，汇总了八大地图名称。发售后核对发现其中至少四个中文名与游戏内不一致，本站已改用游戏内名称，仅把旧译名留作对照。',
    tags: ['腾讯新闻', '媒体整理', '八大地图', '辅助来源', '译名差异'],
    status: 'compiled',
    facts: [
      { label: '类型', value: '媒体整理（辅助）' },
      { label: '日期', value: '2026-10-26' },
      { label: '用途', value: '旧译名对照' },
      { label: '偏差', value: '悲泣溪谷→溪谷、赤红森林→血色森林、梅姑湖→梅谷湖、狱山→枷笼山' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '八大地图名称最早在 2026 年 10 月的媒体解禁内容中集中出现。本站曾以这篇文章为基础建立地图条目，但发售后与社区 Wiki 的游戏内名称核对，发现四处译名不一致。',
      },
      {
        type: 'paragraph',
        text: '这条来源现在只承担一个作用：解释「为什么网上流传的旧名字和游戏里不一样」。地图条目一律以游戏内名称为标题，旧译名保留在事实栏以便检索。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '辅助来源',
        text: '媒体整理在发售前的译名转述上存在系统性偏差，不宜作为定名依据。',
      },
    ],
    links: [
      {
        label: '腾讯新闻 · 八大地图整理',
        href: SOURCE_URLS.qqMaps,
        note: '仅作旧译名对照',
      },
    ],
    related: ['world-overview', 'map-valley', 'source-status-guide'],
  },
  {
    id: 'source-press-launch',
    section: 'sources',
    title: '财经媒体 · 首日市场与评分',
    subtitle: '2026-10-29 · 证券时报 / 每日经济新闻',
    summary:
      '发售当日的财经报道，汇总 Steam 同时在线峰值、畅销榜排名、预购量估算与 Metacritic / IGN 评分。本站的首日市场与评分数据主要引自这类报道。',
    tags: ['财经媒体', '证券时报', '市场数据', '评分', '首日'],
    status: 'compiled',
    facts: [
      { label: '类型', value: '财经媒体报道' },
      { label: '日期', value: '2026-10-29' },
      { label: '用途', value: '在线人数 / 畅销榜 / 预购估算 / 评分' },
      { label: '数据性质', value: '第三方监测与机构估算，非官方' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '发售当日的财经报道贡献了本站缺的那一块：市场侧的数据。Steam 同时在线峰值 43 万来自 SteamDB 监测，预购约 85 万份与 2.87 亿元来自 Alinea Analytics 估算，Metacritic 88 分与 IGN 9 分则来自评分站与媒体本身。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '二手转述',
        text: '这类报道多为互相转载，数字一致但未必各自独立核实。站内标注为「媒体整理」，不视作官方销量公告。',
      },
    ],
    links: [
      { label: '证券时报 · 登顶全球畅销榜', href: SOURCE_URLS.pressLaunch, note: '2026-10-29' },
    ],
    related: ['news-launch-performance', 'news-reviews', 'overview-release'],
  },
  {
    id: 'source-bwiki',
    section: 'sources',
    title: 'BWIKI · 影之刃零 Wiki',
    subtitle: '社区 Wiki · 武器面板与图鉴',
    summary:
      '哔哩哔哩游戏 Wiki 的《影之刃零》分区，是本站武器面板、升级特性、铸魂、升级材料、地图名称、难度规则与敌人分类的主要来源。内容由玩家实测整理，随版本更新。',
    tags: ['BWIKI', '社区 Wiki', '武器面板', '图鉴', '地图', '难度', '实测'],
    status: 'community',
    facts: [
      { label: '类型', value: '社区 Wiki' },
      { label: '用途', value: '武器面板 / 升级 / 铸魂 / 地图 / 难度 / 敌人' },
      { label: '覆盖', value: '主武器与影之武装、头目、杂兵、地图、收集品、记忆之花' },
      { label: '可信度', value: '高于零散攻略，低于官方文本' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '站内 50 把武器与影之武装的「伤害能力 / 破防能力 / 异常效果 / 召唤物生命 / 召唤物伤害」初始与满级值、轮回档位、绝技描述、铸魂效果、Lv.5—30 的六条升级特性，以及每一级的材料消耗，均取自该 Wiki 的武器信息与升级模板。',
      },
      {
        type: 'paragraph',
        text: '除武器外，本站的地图名称（溪谷 / 血色森林 / 梅谷湖 / 枷笼山 / 正道大营 / 庞镇）、难度与存档规则（入阵者 / 破局者 / 逆天者 / 66 天）、头目名单（21 种已命名）、杂兵分类（32 种）与收集物系统（杀气琥珀 / 黑石 / 记忆之花）也主要依据该 Wiki 的对应页面。',
      },
      {
        type: 'paragraph',
        text: '社区 Wiki 的优点是可核查、更新快；风险是早期条目仍在补全（不少武器的「获取方式」尚未填写，地图的收集度与任务数仍是空白），且数值会随官方平衡调整而变化。本站据此把这类条目标记为「社区实测」，并优先使用官方或攻略站可交叉验证的信息补充获取方式。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '引用方式',
        text: '每条武器条目底部都直接链接到对应的 BWIKI 原始页面，便于读者回溯与核对最新版本数据。',
      },
    ],
    links: [
      { label: 'BWIKI · 主武器图鉴', href: SOURCE_URLS.bwikiWeapons, note: '武器索引' },
      { label: 'BWIKI · 武器升级', href: SOURCE_URLS.bwikiUpgrade, note: '升级规则' },
      { label: 'BWIKI · 游戏地图', href: SOURCE_URLS.bwikiMaps, note: '地图与收集物' },
      { label: 'BWIKI · 难度与成就', href: SOURCE_URLS.bwikiDifficulty, note: '难度与存档' },
      { label: 'BWIKI · BOSS 图鉴', href: SOURCE_URLS.bwikiBosses, note: '头目名单' },
      { label: 'BWIKI · 杂兵图鉴', href: SOURCE_URLS.bwikiEnemies, note: '敌人分类' },
    ],
    related: ['arsenal-overview', 'arsenal-forge', 'world-overview', 'gameplay-difficulty', 'source-status-guide'],
  },
  {
    id: 'source-gamersky-weapons',
    section: 'sources',
    title: '游民星空 · 武器攻略',
    subtitle: '2026-10-29 · 全武器获取与前期面板对比',
    summary:
      '游民星空在发售当日发布的武器攻略，提供全武器获取路径与前期七把武器的 1 级面板对比。本站主要用它交叉验证获取方式。',
    tags: ['游民星空', '攻略', '武器获取', '面板对比', '2026-10-29'],
    status: 'compiled',
    facts: [
      { label: '类型', value: '媒体攻略' },
      { label: '日期', value: '2026-10-29' },
      { label: '用途', value: '武器获取路径 / 面板交叉验证' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '该站的武器获取路径写得比社区 Wiki 更早、更完整（例如残钢刃、红妆鬼斩、天玄青铜剑、妖锯的取得条件），因此本站用它补齐了武器条目里的“获取”一栏；面板数值仍以社区 Wiki 为准，两者在前期七把武器上完全一致。',
      },
    ],
    links: [
      {
        label: '全武器获取方法',
        href: SOURCE_URLS.gamerskyWeapons,
        note: '2026-10-29',
      },
      {
        label: '前期武器面板对比',
        href: SOURCE_URLS.gamerskyCompare,
        note: '1 级面板横向对比',
      },
    ],
    related: ['source-bwiki', 'arsenal-overview', 'weapon-giant-axe'],
  },
];
