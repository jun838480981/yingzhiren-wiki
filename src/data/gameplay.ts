import type { WikiEntry } from '../types/wiki';
import { SOURCE_URLS } from './sourceLinks';

export const gameplayEntries: WikiEntry[] = [
  {
    id: 'gameplay-structure',
    section: 'gameplay',
    title: '半开放箱庭',
    subtitle: '手工地图与叙事节奏',
    summary:
      '游戏不是无缝开放世界，而是以多张手工地图组成的半开放箱庭。主线推进、支线岔路与能力锁共同控制探索节奏。',
    tags: ['半开放', '箱庭', '手工地图', '探索'],
    status: 'confirmed',
    facts: [
      { label: '世界结构', value: '半开放' },
      { label: '地图', value: '多张手工地图' },
      { label: '探索', value: '区域式箱庭 + 回访' },
      { label: '限制', value: '非无缝开放世界' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '“半开放”在这里不是营销模糊词，而是一种明确的关卡组织方式：每个区域有可探索的支路与秘密，但区域之间由主线与剧情节点连接。玩家不会从起点一路自由走到天边，而是在一段段精心布置的空间里推进。',
      },
      {
        type: 'paragraph',
        text: '手工地图的好处是密度。敌人配置、地形高低差、可破坏物与支线人物都可以被精确安排；代价是自由度不如无缝世界。对本作来说，这种取舍服务于“追凶”的紧迫感。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '期待管理',
        text: '如果你期待的是《艾尔登法环》式的无缝大地图，本作并不是那个方向；如果你喜欢可反复钻研的箱庭与能力锁回访，这套结构会更对味。',
      },
    ],
    related: ['overview-world', 'gameplay-ability-gates', 'gameplay-exploration', 'story-world'],
  },
  {
    id: 'gameplay-sidequests',
    section: 'gameplay',
    title: '支线与故事路径',
    subtitle: '不是清单，而是岔路',
    summary:
      '支线不只是收集清单。媒体体验提到，部分支线选择可能影响故事路径与人物命运；具体分支规模与判定条件以正式版为准。',
    tags: ['支线', '选择', '故事路径', '人物命运'],
    status: 'hands-on',
    facts: [
      { label: '支线作用', value: '补充人物 / 影响故事路径' },
      { label: '分支规模', value: '待确认' },
      { label: '判定方式', value: '待确认' },
      { label: '资料状态', value: '媒体体验' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '在魂只剩六十六天的设定下，支线天然带有一点道德重量：帮一个人，可能意味着晚一天追到线索。媒体体验提到，部分支线会与故事路径发生关联，而不只是给素材或经验。',
      },
      {
        type: 'paragraph',
        text: '目前还不清楚这种影响是“对话框不同”“某位 NPC 是否出现”，还是更大范围的分支。站内不使用“多结局”这类未确认表述，只记录“可能影响故事路径”。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '不要按攻略心态阅读',
        text: '本条不提供“最优选择”或“真结局条件”。分支判定与后果需要正式版验证。',
      },
    ],
    related: ['faction-wulin', 'gameplay-memory-flower', 'story-hun'],
  },
  {
    id: 'gameplay-memory-flower',
    section: 'gameplay',
    title: '记忆花',
    subtitle: '补足往事，也延长生命',
    summary:
      '探索中可发现“记忆花”，用于补足魂的往事，并可提升生命上限。它把叙事碎片与角色成长绑定在一起。',
    tags: ['记忆花', '成长', '生命上限', '叙事'],
    status: 'hands-on',
    facts: [
      { label: '作用', value: '补足往事 / 提升生命' },
      { label: '获取', value: '探索中发现' },
      { label: '是否影响结局', value: '未确认' },
      { label: '资料状态', value: '媒体体验' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '记忆花是“探索奖励”与“人物叙事”重合的设计。找到它，玩家不仅得到一个可量化的生命提升，也会看到魂遗忘或不愿提起的过去。对一个只剩六十六天的人来说，回忆既是补给，也是负担。',
      },
      {
        type: 'paragraph',
        text: '媒体体验确认了“补足往事”和“提升生命”两项作用，但没有说明记忆花总数、是否分布在特定地图，或收集全部后是否触发额外内容。以上均待补充。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '叙事与数值',
        text: '记忆花不是单纯的收集品，也不一定每一朵都同等重要。站内不把“全收集 = 真结局”当作事实。',
      },
    ],
    related: ['char-hun', 'gameplay-exploration', 'story-hun'],
  },
  {
    id: 'gameplay-ability-gates',
    section: 'gameplay',
    title: '影之武装与能力锁',
    subtitle: '以武具开路',
    summary:
      '部分地图路径需要特定影之武装能力才能打开。玩家获得新武装后回访旧区域，构成轻量的“能力解锁—回溯”结构。',
    tags: ['影之武装', '能力锁', '回溯', '探索'],
    status: 'confirmed',
    facts: [
      { label: '核心', value: '特定武装打开特定路径' },
      { label: '结构', value: '获得能力 → 回访旧区域' },
      { label: '关联系统', value: '影之武装 / 首领武器' },
      { label: '具体分布', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '这是典型的“类银河恶魔城”式空间设计，只是被放进了 3D 动作游戏的箱庭里。初见时打不开的门、够不到的崖边，会在获得某种影之武装后变成新的路线。',
      },
      {
        type: 'paragraph',
        text: '它和首领武器的关系值得注意：如果某把首领武器兼具探索能力，那么击败首领就不只是剧情推进，也会重写旧地图的可达性。具体哪些能力对应哪些路径，官方尚未给出完整清单。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '不要过度类比',
        text: '“能力锁 + 回访”不等于完整银河恶魔城。本作仍以章节式主线为主，回溯更可能是局部设计，而非整张地图反复重开。',
      },
    ],
    related: ['arsenal-phantom', 'arsenal-forge', 'gameplay-structure', 'gameplay-exploration'],
  },
  {
    id: 'gameplay-difficulty',
    section: 'gameplay',
    title: '难度模式',
    subtitle: 'Wayfarer / Hellwalker / Sixty-Six Days',
    summary:
      '公开资料列出三种难度：Wayfarer（偏向故事体验）、Hellwalker（高难）、Sixty-Six Days（六十六天高压挑战）。官方中文最终译名以正式版为准。',
    tags: ['难度', 'Wayfarer', 'Hellwalker', 'Sixty-Six Days', '六十六天'],
    status: 'confirmed',
    facts: [
      { label: '故事向', value: 'Wayfarer / 入阵倾向' },
      { label: '高难', value: 'Hellwalker' },
      { label: '挑战', value: 'Sixty-Six Days / 六十六天' },
      { label: '中文名', value: '以官方最终翻译为准' },
      { label: '模式', value: '单人' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '三种难度对应三种期待。Wayfarer 更偏向故事体验，让不擅长高压动作游戏的玩家也能推进叙事；Hellwalker 面向追求强对抗的玩家；Sixty-Six Days 则把“六十六日”的叙事压力推成一套高压挑战规则。',
      },
      {
        type: 'paragraph',
        text: '难度名称在 2026 年 8 月的 State of Play 前后被集中介绍。需要注意的是，英文名相对稳定，中文译名与具体参数（敌人伤害、资源掉落、存档规则等）仍应以正式版为准。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '译名提示',
        text: '站内同时保留英文名与解释性中文，不把“入阵倾向”等表述当作官方难度名。若正式版采用不同译法，以游戏内菜单为准。',
      },
    ],
    links: [
      {
        label: 'PlayStation Blog · State of Play 深入介绍',
        href: SOURCE_URLS.ps2026August,
        note: '2026-08-17',
      },
    ],
    related: ['arsenal-shaqi', 'news-state-of-play', 'gameplay-structure'],
  },
  {
    id: 'gameplay-exploration',
    section: 'gameplay',
    title: '铃铛、探索与回溯',
    subtitle: '在影境里辨认方向',
    summary:
      '探索围绕手工地图、隐藏路径与可回访区域展开；“铃铛”等指引元素帮助玩家在复杂地形中辨认方向。具体机制以正式版教学为准。',
    tags: ['探索', '铃铛', '回溯', '指引'],
    status: 'hands-on',
    facts: [
      { label: '探索重点', value: '隐藏路径 / 回访 / 支线' },
      { label: '指引元素', value: '铃铛（公开演示）' },
      { label: '回溯', value: '能力解锁后回访' },
      { label: '具体规则', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '手工地图需要一套不破坏沉浸感的指引。公开演示中出现的“铃铛”承担了部分方向提示功能，但它的具体交互方式、是否可被敌人干扰，目前没有完整说明。',
      },
      {
        type: 'paragraph',
        text: '探索的回报大致分为三类：记忆花带来的生命与往事、影之武装带来的新路径、支线人物带来的故事与资源。三者叠加，让回头路不只是捡漏。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '资料状态',
        text: '本条主要依据公开演示与媒体体验。铃铛的正式名称、操作方式与 UI 呈现可能调整。',
      },
    ],
    related: ['gameplay-memory-flower', 'gameplay-ability-gates', 'map-meigu-lake'],
  },
];
