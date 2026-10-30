import type { WikiEntry } from '../types/wiki';
import { SOURCE_URLS } from './sourceLinks';

export const storyEntries: WikiEntry[] = [
  {
    id: 'story-hun',
    section: 'story',
    title: '六十六日',
    subtitle: '一桩构陷，一颗残心',
    summary:
      '魂被构陷杀害组织首领，心脏受重创。被救治后，他只剩六十六天，必须在期限之内穿过影境、追查构陷者，并面对“组织”与整个武林的敌意。',
    tags: ['主线', '六十六日', '复仇', '阴谋', '心脏'],
    status: 'confirmed',
    featured: true,
    facts: [
      { label: '主角', value: '魂' },
      { label: '核心事件', value: '组织首领遇害' },
      { label: '主角伤势', value: '心脏受重创' },
      { label: '剩余时间', value: '六十六日' },
      { label: '主要目标', value: '追查构陷与幕后阴谋' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '故事的引信很短：组织首领被杀，魂被指认为凶手。追杀令落下，心脏也在冲突中受到致命损伤。救治让他活了下来，却只争取到六十六天。',
      },
      {
        type: 'paragraph',
        text: '这六十六天既是倒计时，也是叙事结构。玩家每推进一段旅程，都更接近阴谋的中心，也更接近期限的尽头。影境中的旧识、敌人与普通人，会从不同方向拼出“首领之死”的另一面。',
      },
      {
        type: 'quote',
        text: '一个被整个武林追杀的刺客，只剩六十六天去证明一件事：杀死首领的，不是他。',
        attribution: '本站根据官方公开设定所作的概述，非官方原文',
      },
      { type: 'heading', text: '主线压力的三层结构' },
      {
        type: 'list',
        ordered: true,
        items: [
          '生存：伤口与期限让魂没有无限试错的空间。',
          '追凶：谁策划了构陷，谁从组织权力真空中获益。',
          '自我：记忆花补足的往事，会让“我是谁”成为与追凶并行的问题。',
        ],
      },
      {
        type: 'note',
        tone: 'caution',
        title: '编辑观察',
        text: '“三层结构”是本站对公开信息的归纳，不是官方剧情大纲。具体章节顺序、结局与关键反转，站内不作剧透式推测。',
      },
    ],
    related: ['char-hun', 'story-conspiracy', 'gameplay-memory-flower', 'overview-game'],
  },
  {
    id: 'story-world',
    section: 'story',
    title: '影境与武林',
    subtitle: '半开放的江湖舞台',
    summary:
      '故事发生在名为“影境”的武林。这里不是无缝开放世界，而是由多张手工地图构成的半开放舞台；主线追凶与支线人物命运在此交织。',
    tags: ['影境', '武林', '半开放', '手工地图', '世界观'],
    status: 'confirmed',
    facts: [
      { label: '世界', value: '影境 / 武林' },
      { label: '结构', value: '半开放，多张手工地图' },
      { label: '叙事方式', value: '主线 + 支线 + 环境叙事' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '“影境”是游戏对外的世界名，而“武林”是这个世界的社会形态。门派、刺客集团、村镇与军营共同构成一张权力网络；魂的追凶路线，正好从这张网的破口穿过去。',
      },
      {
        type: 'paragraph',
        text: '半开放结构让叙事可以收放：主线需要紧迫感时，地图收窄为一条清晰的追杀线；需要呼吸时，又放开一个村镇或山谷，让玩家接支线、听闲谈、看见阴谋在普通人身上的后果。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '不要把它当开放世界',
        text: '官方与媒体都使用“半开放”“多张手工地图”的描述。期待无缝大地图、自由攀爬或海量随机事件的玩家，需要调整预期。',
      },
    ],
    links: [
      {
        label: 'PlayStation Blog · 2023-05-24 首次世界观介绍',
        href: SOURCE_URLS.ps2023,
      },
    ],
    related: ['overview-world', 'world-overview', 'gameplay-structure'],
  },
  {
    id: 'story-conspiracy',
    section: 'story',
    title: '阴谋与未解之谜',
    subtitle: '谁杀了首领',
    summary:
      '谁杀了首领、为何嫁祸魂、金面具黑衣人扮演什么角色——这些是主线尚未公开的核心谜团。本页只整理已知问题，不给传闻式答案。',
    tags: ['阴谋', '首领之死', '金面具', '未解'],
    status: 'incomplete',
    facts: [
      { label: '核心谜团', value: '首领之死的真凶与动机' },
      { label: '关键符号', value: '金面具黑衣人' },
      { label: '魂的处境', value: '替罪者 / 追查者' },
      { label: '官方结论', value: '尚未完整公开' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '一个阴谋故事最危险的地方，是让观众以为自己已经知道答案。围绕《影之刃零》的讨论里，“金面具是谁”“组织为何清洗魂”有大量猜测；本页只把它们保留为问题。',
      },
      { type: 'heading', text: '目前可以确定的问题' },
      {
        type: 'list',
        items: [
          '首领确实遇害，魂被指认为凶手。',
          '魂心脏受创，只剩六十六天。',
          '金面具黑衣人是公开物料中反复出现的阴谋符号。',
          '组织内部存在权力重组，魂遭到追杀。',
        ],
      },
      { type: 'heading', text: '目前不能确定的答案' },
      {
        type: 'list',
        items: [
          '真凶是谁、是否有共犯。',
          '金面具黑衣人的真实身份与所属势力。',
          '魔渊、阿花、荆野等人在阴谋中的具体位置。',
          '六十六日期限在结局中的处理方式。',
        ],
      },
      {
        type: 'note',
        tone: 'caution',
        title: '反剧透与反传闻',
        text: '若正式版已包含答案，请以游戏内文本为准。本站不会把论坛推测、预告片剪辑或“数据挖掘”内容写成既成事实。',
      },
    ],
    related: ['char-masked', 'char-void', 'faction-organization', 'story-hun'],
  },
];
