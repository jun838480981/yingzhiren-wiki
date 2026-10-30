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
          '已知：与魔渊的关系是主线真相的一部分，细节见「魔渊」条目（含剧透）。',
          '待补充：他与阿花、荆野等人的关系仍有大量留白。',
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
    subtitle: '暗魔天堡之主 · 最终 BOSS',
    summary:
      '甄子丹担任本作创意顾问，并参与魔渊的面部与动作捕捉。社区 Wiki 标注其为暗魔天堡之主、本作最终 BOSS，且是魂的亲生父亲——后两条属于剧透级信息。',
    tags: ['魔渊', '甄子丹', '暗魔天堡', '最终BOSS', '父子', '剧透'],
    status: 'community',
    featured: true,
    facts: [
      { label: '扮演者', value: '甄子丹（创意顾问 / 面部与动作捕捉）' },
      { label: '身份', value: '暗魔天堡之主' },
      { label: '剧情定位', value: '最终 BOSS' },
      { label: '与魂的关系', value: '父子（剧透）' },
      { label: '江湖地位', value: '年轻时修为冠绝武林，公认的武林第一人' },
      { label: '首次重点公开', value: '2026-08-17 State of Play' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '2026 年 8 月 17 日的 State of Play 介绍中，官方确认甄子丹参与《影之刃零》的创意顾问工作，并为魔渊提供面部与动作捕捉。对一款强调近身兵器与武术演出效果的动作游戏而言，这类参与不仅是「明星客串」，也会影响角色的动作节奏与镜头呈现。',
      },
      { type: 'heading', text: '剧透分隔：以下涉及主线真相' },
      {
        type: 'paragraph',
        text: '发售后社区整理确认了魔渊的两重身份：他是暗魔天堡之主，也是本作的最终 BOSS；更关键的是，他是魂的亲生父亲。这让主线「追查构陷者」的终点变成一场父子决战，也解释了为什么「组织」首领之死能把魂推到这个位置。',
      },
      {
        type: 'paragraph',
        text: '需要区分「演员」与「角色」：甄子丹参与塑造魔渊，不等于魔渊是演员本人的传记式投影。魔渊年轻时的战绩、与暗魔天堡的关系、以及他为何要布下这场局，仍需以游戏内文本为准。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '资料分级',
        text: '「甄子丹担任创意顾问并参与面部与动作捕捉」为官方已确认信息；「暗魔天堡之主 / 最终 BOSS / 魂的生父」来自社区 Wiki 的实机整理，属剧透内容，故本条整体标记为「社区实测」。',
      },
    ],
    links: [
      {
        label: 'PlayStation Blog · State of Play 深入介绍',
        href: SOURCE_URLS.ps2026August,
        note: '2026-08-17',
      },
      { label: 'BWIKI · 魔渊 BOSS', href: SOURCE_URLS.bwikiBosses, note: '社区整理' },
    ],
    related: ['char-hun', 'news-state-of-play', 'world-bosses', 'story-conspiracy'],
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
      '除头目与刺客外，影境中还有村民、江湖人、商旅与受难者。社区整理中大量「XX 的记忆之花」条目正是从这些人身上长出来的，具体人物以游戏内为准。',
    tags: ['群像', '居民', '武林', '支线', '记忆之花'],
    status: 'compiled',
    facts: [
      { label: '构成', value: '村民 / 江湖人 / 商旅 / 受难者' },
      { label: '叙事作用', value: '支线、地图氛围、世界观察' },
      { label: '相关条目', value: '玉儿 / 烟儿 / 老根头 / 高员外 等记忆之花' },
      { label: '资料状态', value: '社区整理' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '《影之刃零》的影境并不只有强者。村庄、市镇、营地与山路之间，普通人的处境让「武林」从一套战斗系统变成一个有重量的社会。支线任务往往从这些人的请求开始，再把玩家带回主线阴影之下。',
      },
      {
        type: 'paragraph',
        text: '记忆之花是观察这群人最直接的入口：玉儿、烟儿、白雪儿、倩倩、老根头、高员外、陆家村村民、江湖人士、水行帮众、实验受害者……这些条目覆盖了从童年玩伴到边缘帮众的各个层次，也拼出了「山庄实验」「龙体之术」这类背景设定的民间版本。',
      },
      {
        type: 'paragraph',
        text: '本条目是群像入口，不虚构具体 NPC 姓名。村民与江湖人的故事以游戏内文本和后续可靠资料为准。',
      },
    ],
    related: ['gameplay-sidequests', 'gameplay-memory-flower', 'world-overview', 'char-lengtu'],
  },
  {
    id: 'char-muxiaokui',
    section: 'characters',
    title: '沐小葵',
    subtitle: '既是角色，也是头目',
    summary:
      '社区头目图鉴中被标注为「BOSS/角色」的人物。她的「缎带」散落在陆家村，集齐后可从妖锯中触发隐藏阶段「玉妖」；击败玉妖才能获得妖锯。',
    tags: ['沐小葵', '玉妖', '妖锯', '陆家村', '缎带'],
    status: 'community',
    facts: [
      { label: '身份', value: 'BOSS 兼剧情角色' },
      { label: '相关收集', value: '沫小葵的缎带（据武器获取路径，字或作「沫」）' },
      { label: '隐藏阶段', value: '玉妖' },
      { label: '掉落', value: '妖锯（击败玉妖后获得）' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '沐小葵是本作里少见的「角色 + 头目」双重身份人物。以她为核心的设计是收集驱动的：缎带散落在陆家村，集齐后才能触发妖锯的隐藏阶段「玉妖」。',
      },
      {
        type: 'paragraph',
        text: '这也意味着「打不过的 Boss」在本作可能不是数值问题，而是信息问题——你没有找齐前置道具，战斗就停在了第一阶段。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '名字用法',
        text: '社区资料中「沐小葵」与「沫小葵」两种写法并存，本条以头目图鉴的「沐小葵」为标题，获取路径沿用「沫小葵的缎带」的原始写法。',
      },
    ],
    related: ['world-bosses', 'map-lu-village', 'weapon-demon-saw', 'gameplay-collectibles'],
  },
  {
    id: 'char-lengtu',
    section: 'characters',
    title: '冷荼',
    subtitle: '「梦差」，玩丝线的人',
    summary:
      '在影之武装「深渊铃铛」的说明文字中被点名的人物，被称为「梦差」，意图以丝线颠覆武林。相关战斗与剧情尚未收录。',
    tags: ['冷荼', '梦差', '深渊铃铛', '操偶', '反派'],
    status: 'incomplete',
    facts: [
      { label: '称号', value: '梦差' },
      { label: '行为', value: '玩弄人心，意图颠覆武林' },
      { label: '相关物品', value: '深渊铃铛（操偶铃铛铸魂形态）' },
      { label: '战斗 / 剧情', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '冷荼的名字出现在深渊铃铛的物品说明里：他玩弄人心，试图用强大的丝线颠覆武林。玩家拿到的深渊铃铛，就是「以此物为操偶铃铛铸魂」而成的产物——换句话说，这把影之武装本身就带着他的痕迹。',
      },
      {
        type: 'paragraph',
        text: '社区 Wiki 另有「冷荼的记忆之花」条目，说明这个人物有可被追述的过去，也可能是可战斗对象。但目前缺少可靠的战斗与身份资料，本条只记录已出现的信息。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '待补充',
        text: '所属势力、出场顺序与是否为头目均未确认，不写入推测。',
      },
    ],
    related: ['weapon-abyss-bell', 'char-moyuan', 'world-bosses', 'gameplay-memory-flower'],
  },
];
