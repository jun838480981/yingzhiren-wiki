import type { WikiEntry } from '../types/wiki';
import { SOURCE_URLS } from './sourceLinks';

export const characterEntries: WikiEntry[] = [
  {
    id: 'char-hun',
    section: 'characters',
    title: '魂',
    subtitle: '被追猎的“组织”刺客',
    summary:
      '本作主角。原为“组织”的精英刺客，因被构陷杀害首领而遭到追杀；心脏受重创，被救治后仅余六十六日，必须在倒计时中追查阴谋、洗清罪名。',
    tags: ['主角', '组织', '刺客', '六十六日', '心脏'],
    status: 'confirmed',
    featured: true,
    facts: [
      { label: '身份', value: '“组织”精英刺客' },
      { label: '处境', value: '被构陷杀害首领' },
      { label: '伤势', value: '心脏受重创' },
      { label: '期限', value: '六十六日' },
      { label: '目标', value: '追查构陷者与幕后阴谋' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '魂是《影之刃零》的固定主角，也是整个叙事压力的承载者。他曾是“组织”倚重的精英刺客，却在一场精心设计的构陷中成为杀害首领的替罪者。追杀、背叛与心脏的重创同时落下，留给他的时间只有六十六天。',
      },
      {
        type: 'paragraph',
        text: '从公开演示看，魂的战斗建立在双主武器切换、影之武装与杀气资源之上。他并不是一味莽撞的复仇者：面对旧日同僚、无辜者与幕后黑手时，玩家的选择与支线行动会逐渐拼出他的过去。',
      },
      { type: 'heading', text: '已知与未知' },
      {
        type: 'list',
        items: [
          '已知：身份、构陷事件、心脏重创与六十六日期限均来自官方公开信息。',
          '已知：可使用多类主武器与影之武装，部分能力用于探索开路。',
          '待补充：他与阿花、荆野、魔渊等人的具体关系，官方尚未完整说明。',
          '待补充：六十六日结束后的叙事处理方式，不在本页作推测。',
        ],
      },
      {
        type: 'note',
        tone: 'caution',
        title: '不写“结局剧透”',
        text: '本页只整理官方已公开的人物设定与系统能力。关于魂的最终命运、真实身世或隐藏结局，站内不收录未经证实的传闻。',
      },
    ],
    related: ['story-hun', 'char-moyuan', 'char-jingye', 'arsenal-overview', 'gameplay-memory-flower'],
  },
  {
    id: 'char-moyuan',
    section: 'characters',
    title: '魔渊',
    subtitle: '由甄子丹参与塑造的角色',
    summary:
      '公开资料中与甄子丹深度关联的角色。甄子丹担任本作创意顾问，并参与魔渊的面部与动作捕捉；角色在故事中的完整立场与背景仍待官方补充。',
    tags: ['魔渊', '甄子丹', '动作捕捉', '创意顾问'],
    status: 'confirmed',
    facts: [
      { label: '关联演员', value: '甄子丹' },
      { label: '参与方式', value: '创意顾问 / 面部与动作捕捉' },
      { label: '剧情立场', value: '待补充' },
      { label: '首次重点公开', value: '2026-08-17 State of Play' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '2026 年 8 月 17 日的 State of Play 介绍中，官方确认甄子丹参与《影之刃零》的创意顾问工作，并为魔渊提供面部与动作捕捉。对一款强调近身兵器与武术演出效果的动作游戏而言，这类参与不仅是“明星客串”，也会影响角色的动作节奏与镜头呈现。',
      },
      {
        type: 'paragraph',
        text: '需要区分“演员”与“角色”：甄子丹参与塑造魔渊，不等于魔渊就是演员本人的传记式投影。魔渊在主线中站在哪一方、与魂有何恩怨，目前没有足够资料可以下结论。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '资料边界',
        text: '“甄子丹担任创意顾问并参与面部与动作捕捉”为已确认信息；“魔渊是最终反派 / 魂的师父”等说法缺少官方支撑，本站不收录为事实。',
      },
    ],
    links: [
      {
        label: 'PlayStation Blog · State of Play 深入介绍',
        href: SOURCE_URLS.ps2026August,
        note: '2026-08-17',
      },
    ],
    related: ['char-hun', 'news-state-of-play', 'arsenal-shaqi'],
  },
  {
    id: 'char-ahua',
    section: 'characters',
    title: '新娘阿花',
    subtitle: '红妆之下的强敌',
    summary:
      '公开演示与媒体体验中出现的女性首领，以“新娘”形象示人。她的身份、与魂的关系以及在主线中的作用，目前公开信息有限，不宜据传闻定论。',
    tags: ['阿花', '新娘', '首领', '女性角色'],
    status: 'hands-on',
    facts: [
      { label: '身份', value: '“新娘” / 首领（公开演示）' },
      { label: '与魂的关系', value: '待确认' },
      { label: '战斗类型', value: '首领战' },
      { label: '资料状态', value: '媒体体验' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '阿花以“新娘”的视觉符号出现，红妆、婚仪与兵器并置，是《影之刃零》“功夫朋克”气质中很典型的一组反差。公开演示把她放在首领战的位置，说明她不只是过场人物。',
      },
      {
        type: 'paragraph',
        text: '但“她为何阻拦魂”“她与组织是什么关系”这些问题，目前没有足够的一手材料。站内只记录她的公开亮相与战斗身份，不用“爱恨情仇”式的猜测填补剧情空白。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '状态说明',
        text: '本条主要依据媒体试玩与公开演示，标记为“媒体体验”。正式版中的招式、阶段与剧情作用可能调整。',
      },
    ],
    related: ['world-bosses', 'char-jingye', 'char-hun'],
  },
  {
    id: 'char-jingye',
    section: 'characters',
    title: '荆野',
    subtitle: '追凶路上的强硬对手',
    summary:
      '公开资料中出现的男性角色与强敌，与魂的追凶之路产生交集。现有资料主要来自演示与媒体体验，完整身份、所属势力与最终立场仍待补充。',
    tags: ['荆野', '强敌', '剧情角色'],
    status: 'hands-on',
    facts: [
      { label: '身份', value: '待确认' },
      { label: '出场', value: '公开演示 / 媒体体验' },
      { label: '与魂的关系', value: '对立或竞争（待确认）' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '荆野出现在公开演示的战斗与剧情片段中。就目前能确认的部分而言，他是一位与魂正面交锋的强敌；至于他受谁指使、是否知道构陷真相，公开资料没有给出完整答案。',
      },
      {
        type: 'paragraph',
        text: '本条把他归入“角色”而非单独的首领档案，是因为他同时承担人物叙事功能。若后续官方补充其势力归属，本站会再拆分或更新条目。',
      },
    ],
    related: ['world-bosses', 'char-ahua', 'char-hun'],
  },
  {
    id: 'char-masked',
    section: 'characters',
    title: '金面具黑衣人',
    subtitle: '阴谋的影子',
    summary:
      '预告与演示中多次出现的金面具黑衣人，形象神秘，常被视为推动阴谋的关键线索。其真实身份、所属势力与目的尚无官方定论。',
    tags: ['金面具', '黑衣人', '神秘', '阴谋'],
    status: 'incomplete',
    facts: [
      { label: '外观特征', value: '金色面具、黑衣' },
      { label: '身份', value: '待补充' },
      { label: '所属势力', value: '待补充' },
      { label: '与主线关系', value: '疑似关键，但未证实' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '金面具是预告片里最容易让人记住的视觉符号之一：它遮住了脸，也遮住了立场。公开片段中，这个形象与追杀、密谋和权力更替的线索并置，因此被社区大量讨论。',
      },
      {
        type: 'paragraph',
        text: '但“面具下是谁”目前没有官方答案。站内不采用“某位已公布角色的另一身份”这类推测，也不把预告剪辑顺序当作剧情因果。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '待补充',
        text: '本条目只确认外观与公开亮相。若正式版已发售，请以游戏内实际剧情为准；本站会在获得可靠资料后更新。',
      },
    ],
    related: ['story-conspiracy', 'char-void', 'story-hun'],
  },
  {
    id: 'char-void',
    section: 'characters',
    title: '虚空',
    subtitle: '资料有限的角色名',
    summary:
      '公开资料中被提及的角色名，现有可核实信息很少。本页仅记录名称与资料状态，避免用猜测填补空白。',
    tags: ['虚空', '资料有限', '角色'],
    status: 'incomplete',
    facts: [
      { label: '身份', value: '待补充' },
      { label: '所属势力', value: '待补充' },
      { label: '公开信息量', value: '有限' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '“虚空”这个名字出现在部分公开讨论与资料整理中，但目前缺少足够的官方描述来支撑一份完整人物档案。与其编一段看似合理的身世，不如明确标出资料缺口。',
      },
      {
        type: 'note',
        tone: 'default',
        title: '编辑原则',
        text: '对于资料不足的条目，本站保留位置、记录名称，并标记“待补充”。欢迎以后续官方信息替换，而不是用同人设定填充。',
      },
    ],
    related: ['char-masked', 'story-conspiracy', 'source-status-guide'],
  },
  {
    id: 'faction-organization',
    section: 'characters',
    title: '组织',
    subtitle: '刺客集团的权力中心',
    summary:
      '魂所属的刺客集团，也是“首领遇害”事件的权力中心。组织内部的等级、规矩与幕后动机，是主线阴谋的核心疑问之一。',
    tags: ['组织', '势力', '刺客', '首领'],
    status: 'confirmed',
    facts: [
      { label: '性质', value: '刺客集团 / 势力' },
      { label: '关键事件', value: '首领遇害' },
      { label: '与魂的关系', value: '原属成员，现被追捕' },
      { label: '内部结构', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '“组织”既是魂的来处，也是追捕他的力量。首领之死让这个原本隐秘的刺客集团进入权力重组，而魂成了最方便的替罪者。主线要追查的不只是“谁杀了首领”，还包括“谁从这场清洗中获利”。',
      },
      {
        type: 'paragraph',
        text: '目前公开资料足以确认组织在故事中的核心位置，但不足以还原其完整架构、等级与规矩。条目中不做组织图谱式的虚构。',
      },
    ],
    related: ['story-conspiracy', 'char-hun', 'faction-wulin'],
  },
  {
    id: 'faction-wulin',
    section: 'characters',
    title: '影境群像',
    subtitle: '村民、江湖人与受难者',
    summary:
      '除首领与刺客外，影境中还有村民、江湖人、商旅与受难者。支线与地图叙事共同构成武林群像，具体人物以正式版为准。',
    tags: ['群像', '居民', '武林', '支线'],
    status: 'compiled',
    facts: [
      { label: '构成', value: '村民 / 江湖人 / 商旅 / 受难者' },
      { label: '叙事作用', value: '支线、地图氛围、世界观察' },
      { label: '资料状态', value: '媒体整理' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '《影之刃零》的影境并不只有强者。村庄、市镇、营地与山路之间，普通人的处境让“武林”从一套战斗系统变成一个有重量的社会。支线任务往往从这些人的请求开始，再把玩家带回主线阴影之下。',
      },
      {
        type: 'paragraph',
        text: '本条目是群像入口，不虚构具体 NPC 姓名。村民与江湖人的故事以游戏内文本和后续可靠资料为准。',
      },
    ],
    related: ['gameplay-sidequests', 'world-overview', 'overview-world'],
  },
];
