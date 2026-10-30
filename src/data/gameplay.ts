import type { WikiEntry } from '../types/wiki';
import { SOURCE_URLS } from './sourceLinks';

export const gameplayEntries: WikiEntry[] = [
  {
    id: 'gameplay-difficulty',
    section: 'gameplay',
    title: '难度与 66 天模式',
    subtitle: '入阵者 / 破局者 / 逆天者 / 66 天',
    summary:
      '一周目提供入阵者、破局者、逆天者三档难度；通关破局者或逆天者后解锁「66 天」模式：难度等同逆天者，无法手动存档，魂每死一次少一天，天数归零进入「饮恨江湖」结局。',
    tags: ['难度', '入阵者', '破局者', '逆天者', '66天', '存档', '饮恨江湖'],
    status: 'confirmed',
    featured: true,
    facts: [
      { label: '一周目难度', value: '入阵者 / 破局者 / 逆天者' },
      { label: '难度顺序', value: '入阵者 < 破局者 < 逆天者' },
      { label: '逆天者特点', value: '敌人具有特殊 AI' },
      { label: '66 天解锁', value: '通关破局者或逆天者' },
      { label: '66 天规则', value: '难度等同逆天者，死亡一次减一天，归零进入「饮恨江湖」' },
      { label: '存档', value: '常规难度可手动存档；66 天只能与铃铛互动自动存档' },
      { label: '成就', value: '一周目三档均可完成全成就' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '正式版的难度不是三档英文名的直译，而是一周目三档中文难度加一个解锁制的「66 天」。入阵者是入门档，破局者居中，逆天者是一周目最高难度并让敌人具备特殊 AI；三档的差异体现在敌人攻击力、血量与 AI 上，而不是只改一个伤害倍率。',
      },
      {
        type: 'paragraph',
        text: '「66 天」是把叙事设定做成规则的挑战模式：通关破局者或逆天者后解锁，难度与逆天者一致，但存档规则被改写——只能通过与铃铛互动自动存档，不能手动存档；魂每死亡一次，剩余天数减少一天，归零则直接进入「饮恨江湖」结局。对习惯了手动存档的玩家，这一条比数值提升更致命。',
      },
      {
        type: 'paragraph',
        text: '一周目三档都能完成全成就，说明成就设计不强制玩家走高难；二周目另有接近「肉鸽」的结构调整。站内不提供具体数值倍率，因为这类数据会随补丁变化。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '命名纠错',
        text: '发售前的英文口径为 Wayfarer / Hellwalker / Sixty-Six Days，本站旧版据此写作三档难度，属于错误。正式版为四档中文难度，本条已按游戏内菜单修正；如后续补丁调整译名，以游戏内为准。',
      },
    ],
    links: [
      {
        label: 'PlayStation Blog · State of Play 深入介绍',
        href: SOURCE_URLS.ps2026August,
        note: '2026-08-17 · 发售前口径',
      },
      { label: 'BWIKI · 难度与成就', href: SOURCE_URLS.bwikiDifficulty, note: '正式版难度与存档规则' },
    ],
    related: ['arsenal-shaqi', 'gameplay-combat-basics', 'news-state-of-play', 'gameplay-structure'],
  },
  {
    id: 'gameplay-combat-basics',
    section: 'gameplay',
    title: '战斗基础规则',
    subtitle: '白光、红光、杀气槽与处决',
    summary:
      '敌人攻击分为可格挡的白光与不可格挡的红光；精确格挡触发鬼步，红光需精确闪避。清空敌人杀气槽可使其破防、受到更多伤害；潜行、背身、跳下与残血均可触发处决，处决期间魂全程无敌。',
    tags: ['战斗', '白光', '红光', '精确格挡', '鬼步', '破防', '处决', '潜行'],
    status: 'community',
    facts: [
      { label: '白光攻击', value: '可格挡，精确格挡触发鬼步' },
      { label: '红光攻击', value: '不可格挡，需要精确闪避' },
      { label: '破防', value: '清空敌人杀气槽后触发，所受伤害增加' },
      { label: '处决触发', value: '潜行背身 / 上方跳下 / 敌人残血' },
      { label: '处决收益', value: '处决期间魂全程无敌，可连续处决相邻敌人' },
      { label: '杂兵掉落', value: '概率掉落残魂星火，并概率恢复药瓶次数' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '这套战斗的读招逻辑被压在两种颜色上：白光的攻击可以格挡，精确格挡还能触发位移性的「鬼步」；红光的攻击不能格挡，只能用精确闪避躲开。玩家在实战中真正要判断的不是「要不要防」，而是「这一下能不能防」。',
      },
      {
        type: 'paragraph',
        text: '进攻端的目标是把敌人的杀气槽打空。清空后敌人进入破防状态，受到的伤害提升，这也是高伤害连段与绝技的窗口。因此「压制」在本作是具体可量化的：不是把敌人打得后仰，而是把他的资源打没。',
      },
      {
        type: 'paragraph',
        text: '处决是另一条隐性收益线。下蹲潜行到敌人背后、从上方跳下且未进入战斗、或敌人血量极低时都可以触发处决；处决过程中魂全程无敌，两名杂兵靠得近时还能连续处决。对 66 天模式这种一次死亡就少一天的规则来说，处决提供的无敌帧与省下的药瓶次数都是实打实的资源。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '术语说明',
        text: '本条依据社区 Wiki 对杂兵战斗机制与游戏内提示的整理，属于「社区实测」。官方教学文本的措辞可能略有差异。',
      },
    ],
    related: ['arsenal-shaqi', 'gameplay-difficulty', 'arsenal-overview', 'world-enemies'],
  },
  {
    id: 'gameplay-structure',
    section: 'gameplay',
    title: '大地图与半开放结构',
    subtitle: '宽线性流程里的箱庭',
    summary:
      '游戏由多张互相连接的大地图组成宽线性流程，每张地图带轻箱庭探索与支线；地图之间可通过铃铛传送，部分水域可航行，特殊场景需要对应影之武装才能交互。',
    tags: ['半开放', '箱庭', '大地图', '宽线性', '传送'],
    status: 'confirmed',
    facts: [
      { label: '世界结构', value: '多张大地图 + 轻箱庭探索' },
      { label: '流程形态', value: '宽线性（wide linear）' },
      { label: '移动', value: '铃铛传送 / 水面航行' },
      { label: '场景交互', value: '部分需影之武装解锁' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '把本作说成「半开放世界」容易引起误会。更准确的说法是宽线性：主线按章节推进，但每张地图内部有可自由探索的支路、支线、收集物与挑战点，区域之间用铃铛连成一张网。',
      },
      {
        type: 'paragraph',
        text: '手工地图的好处是密度。敌人配置、地形高低差、可破坏物与支线人物都可以被精确安排；代价是自由度不如无缝世界。对本作来说，这种取舍服务于「追凶」的紧迫感。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '期待管理',
        text: '如果你期待的是无缝大地图，本作并不是那个方向；如果你喜欢可反复钻研的箱庭与能力锁回访，这套结构会更对味。',
      },
    ],
    links: [{ label: 'BWIKI · 游戏地图', href: SOURCE_URLS.bwikiMaps, note: '地图结构与收集物分类' }],
    related: ['world-overview', 'gameplay-ability-gates', 'gameplay-exploration', 'gameplay-collectibles'],
  },
  {
    id: 'gameplay-exploration',
    section: 'gameplay',
    title: '铃铛、传送与探索',
    subtitle: '影境的路标',
    summary:
      '铃铛是地图上的探索节点：首次触摸可清除附近小地图迷雾，并回复战斗资源；铃铛之间可以传送，使用「穿行符」还能随地传送回铃铛。',
    tags: ['探索', '铃铛', '传送', '穿行符', '迷雾'],
    status: 'community',
    facts: [
      { label: '首次触摸', value: '清除小地图附近迷雾' },
      { label: '资源', value: '铃铛可回复战斗资源' },
      { label: '传送', value: '铃铛之间可互相传送' },
      { label: '随地传送', value: '消耗「穿行符」' },
      { label: '存档联动', value: '66 天模式只能通过与铃铛互动自动存档' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '铃铛同时承担了三个功能：地图标记（清迷雾）、补给点（回复战斗资源）与传送锚点。它把「探索得越深、回头越方便」做成了正反馈，也让 66 天模式的自动存档有了明确的落点。',
      },
      {
        type: 'paragraph',
        text: '穿行符则解决了「临时想回城」的问题：不必跑回铃铛，直接就地传送。对手里资源紧张的开荒期，这类道具的价值往往被低估。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '资料状态',
        text: '本条依据社区 Wiki 的地图与收集物说明整理，标记为「社区实测」。铃铛的 UI 呈现与解锁顺序以游戏内为准。',
      },
    ],
    related: ['gameplay-collectibles', 'gameplay-ability-gates', 'gameplay-structure', 'map-valley'],
  },
  {
    id: 'gameplay-collectibles',
    section: 'gameplay',
    title: '收集物与永久成长',
    subtitle: '七类收集，三种永久加成',
    summary:
      '每张地图的收集物至少分为七类：铃铛、武器与影之武装、饰品与药瓶、挑战地点、杀气琥珀碎片、黑石碎片、记忆之花。其中琥珀、黑石与记忆之花提供永久属性提升，游戏内可查看当前地图的收集完成度。',
    tags: ['收集', '杀气琥珀', '黑石', '记忆之花', '完成度', '永久成长'],
    status: 'community',
    facts: [
      { label: '收集分类', value: '7 类（铃铛 / 武器 / 饰品药瓶 / 挑战 / 琥珀碎片 / 黑石碎片 / 记忆之花）' },
      { label: '杀气琥珀', value: '完整 1 枚：永久 +10% 杀气上限；碎片 4 块合成 1 枚' },
      { label: '黑石', value: '完整 1 枚：永久 +10% 攻击力与破防力；碎片 4 块合成 1 枚' },
      { label: '记忆之花', value: '完整 1 朵：永久 +10% 生命上限' },
      { label: '完成度', value: '游戏内可查看单张地图的收集总数与百分比' },
      { label: '剧情收集物', value: '纸条、信件等，拾取后可在背包阅读' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '这套收集系统的关键在于「碎片—合成—永久加成」。杀气琥珀碎片集齐四块合成一枚杀气琥珀，永久提升 10% 杀气上限；黑石碎片同理，四块合成一枚黑石，永久提升 10% 攻击力与破防力。也就是说，探索的直接回报会写进角色面板，而不只是背包里的一行字。',
      },
      {
        type: 'paragraph',
        text: '记忆之花走的是另一条路：完整的记忆之花提升 10% 生命上限，同时补足魂的往事。三条成长线分别对应资源（杀气）、输出（攻击与破防）与容错（生命），几乎没有一条是纯收集向的摆设。',
      },
      {
        type: 'paragraph',
        text: '除了这七类，地图上还散落纸条、信件等剧情收集物，拾取后可以在背包里读到文本。它们不影响数值，但往往是理解「山庄实验」「龙体之术」这类背景设定的关键材料。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '不要当成清单游戏',
        text: '部分支线错过后无法挽回，部分收集需要特定影之武装才能到达。站内不提供逐点坐标，收集路线请以游戏内地图与后续社区整理为准。',
      },
    ],
    links: [{ label: 'BWIKI · 游戏地图', href: SOURCE_URLS.bwikiMaps, note: '收集物分类' }],
    related: ['gameplay-exploration', 'gameplay-memory-flower', 'gameplay-equipment', 'gameplay-ability-gates'],
  },
  {
    id: 'gameplay-equipment',
    section: 'gameplay',
    title: '饰品与药瓶',
    subtitle: '六个被动栏，两个主动瓶',
    summary:
      '饰品是最多同时装备六种的被动道具，初始两栏，可通过「能力修行」提升到六栏，同类饰品最多同时装备三个；药瓶是最多同时装备两种的主动道具，效果涵盖回血、增伤、加快精纯杀气积累，部分还能改变动作模组。',
    tags: ['饰品', '药瓶', '能力修行', '被动', '主动道具'],
    status: 'community',
    facts: [
      { label: '饰品栏位', value: '初始 2 个，最多 6 个（能力修行提升）' },
      { label: '同类限制', value: '同类饰品最多同时装备 3 个' },
      { label: '药瓶栏位', value: '最多同时装备 2 种' },
      { label: '药瓶效果', value: '恢复生命 / 增加攻击 / 加快精纯杀气积累 / 改变动作模组等' },
      { label: '药瓶次数', value: '击杀杂兵有概率恢复使用次数' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '饰品是构筑的「被动层」。六个栏位不算少，但同类最多三个的限制阻止了玩家把同一种效果堆到失控，也逼着配置往互补方向走。栏位本身要靠「能力修行」解锁，这意味着前期就得决定把修行资源投在哪里。',
      },
      {
        type: 'paragraph',
        text: '药瓶则是「主动层」：两个栏位，效果从回血到增伤、再到加快精纯杀气积累，部分药瓶甚至会改变魂的动作模组。后者对连段习惯的影响最大——换一个药瓶，可能要重新适应出手节奏。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '待补充',
        text: '饰品与药瓶的完整图鉴（名称、初始效果、升级材料）尚未逐条收录。本条只整理系统规则，具体清单以游戏内与社区图鉴为准。',
      },
    ],
    related: ['gameplay-collectibles', 'arsenal-shaqi', 'gameplay-combat-basics'],
  },
  {
    id: 'gameplay-memory-flower',
    section: 'gameplay',
    title: '记忆之花',
    subtitle: '补足往事，也延长生命',
    summary:
      '探索中可发现记忆之花，完整一朵永久提升 10% 生命上限，同时补足魂的往事。社区已整理出近四十条具体记忆条目，从「玉儿的记忆之花」到「虚空的记忆之花」。',
    tags: ['记忆之花', '成长', '生命上限', '叙事', '收集'],
    status: 'community',
    facts: [
      { label: '效果', value: '完整一朵永久 +10% 生命上限' },
      { label: '获取', value: '地图探索中发现' },
      { label: '社区条目', value: '近 40 条具名记忆之花' },
      { label: '是否影响结局', value: '未确认' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '记忆花是「探索奖励」与「人物叙事」重合的设计。找到它，玩家不仅得到一个可量化的生命提升，也会看到魂遗忘或不愿提起的过去。对一个只剩六十六天的人来说，回忆既是补给，也是负担。',
      },
      {
        type: 'paragraph',
        text: '社区已整理出的记忆之花条目覆盖了相当广的人物面：玉儿、烟儿、白雪儿、倩倩、老根头、高员外这些普通人，拳痴铁狂、白赤练、舞狮尊主、风雪刀客这些强敌，还有「关于怪物的记忆之花」「关于山庄实验的记忆之花」「有关龙体之术的记忆之花」这类直接指向世界观核心的条目。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '叙事与数值',
        text: '记忆花不是单纯的收集品，也不一定每一朵都同等重要。站内不把「全收集 = 真结局」当作事实。',
      },
    ],
    related: ['char-hun', 'gameplay-collectibles', 'story-hun', 'char-void'],
  },
  {
    id: 'gameplay-ability-gates',
    section: 'gameplay',
    title: '影之武装与能力锁',
    subtitle: '以武具开路',
    summary:
      '部分地图路径需要特定影之武装能力才能打开。多数开路能力标注「拥有即可发动，无须装备」，因此收集本身就是解锁地图权限，构成轻量的「能力解锁—回溯」结构。',
    tags: ['影之武装', '能力锁', '回溯', '探索'],
    status: 'confirmed',
    facts: [
      { label: '核心', value: '特定武装打开特定路径' },
      { label: '是否需装备', value: '多数标注「拥有便发动」（社区实测）' },
      { label: '结构', value: '获得能力 → 回访旧区域' },
      { label: '具体分布', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '这是典型的「类银河恶魔城」式空间设计，只是被放进了 3D 动作游戏的箱庭里。初见时打不开的门、够不到的崖边，会在获得某种影之武装后变成新的路线。',
      },
      {
        type: 'paragraph',
        text: '它和首领武器的关系值得注意：如果某把首领武器兼具探索能力，那么击败首领就不只是剧情推进，也会重写旧地图的可达性。具体哪些能力对应哪些路径，官方尚未给出完整清单。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '不要过度类比',
        text: '「能力锁 + 回访」不等于完整银河恶魔城。本作仍以章节式主线为主，回溯更可能是局部设计，而非整张地图反复重开。',
      },
    ],
    related: ['arsenal-phantom', 'arsenal-forge', 'gameplay-structure', 'gameplay-exploration'],
  },
  {
    id: 'gameplay-sidequests',
    section: 'gameplay',
    title: '支线与任务系统',
    subtitle: '错过就没了的那部分',
    summary:
      '任务在地图上有颜色不同的图标，部分需要任务道具或启动机关才能推进；部分支线一旦错过便无法挽回，部分支线与庞镇 NPC 相关。',
    tags: ['支线', '任务', 'NPC', '错过', '庞镇'],
    status: 'community',
    facts: [
      { label: '任务图标', value: '地图上以不同颜色区分' },
      { label: '前置条件', value: '部分需任务收集道具或启动机关' },
      { label: '错过机制', value: '部分支线错过后无法挽回' },
      { label: '集中区域', value: '庞镇 NPC' },
      { label: '分支规模', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '在魂只剩六十六天的设定下，支线天然带有一点道德重量：帮一个人，可能意味着晚一天追到线索。而「部分支线错过后无法挽回」这条规则，让这种重量变成了实际后果。',
      },
      {
        type: 'paragraph',
        text: '媒体体验提到，部分支线会与故事路径发生关联，而不只是给素材或经验；IGN 中国的评测也提到本作存在多结局设定。站内不使用「N 个结局」这类未确认表述，只记录「支线可能影响故事路径」。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '不要按攻略心态阅读',
        text: '本条不提供「最优选择」或「真结局条件」。分支判定与后果需要正式版验证。',
      },
    ],
    related: ['faction-wulin', 'gameplay-memory-flower', 'story-hun', 'map-pang-town'],
  },
];
