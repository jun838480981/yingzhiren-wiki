import type { WikiEntry } from '../types/wiki';
import { SOURCE_URLS } from './sourceLinks';

export const worldEntries: WikiEntry[] = [
  {
    id: 'world-overview',
    section: 'world',
    title: '地图与敌人总览',
    subtitle: '六张已定名地图，一张宽线性的影境',
    summary:
      '影境由多张互相连接的大地图组成。已定名的六处是溪谷、血色森林、庞镇、梅谷湖、枷笼山与正道大营，另有陆家村等区域与两处未公开地图。地图之间可通过铃铛传送，部分水域可航行。',
    tags: ['地图', '敌人', '首领', '影境', '大地图'],
    status: 'community',
    featured: true,
    facts: [
      { label: '已定名地图', value: '溪谷 / 血色森林 / 庞镇 / 梅谷湖 / 枷笼山 / 正道大营' },
      { label: '其他区域', value: '陆家村（BWIKI 地图总表未单列）' },
      { label: '未公开', value: '2 处（社区标注为未知地图）' },
      { label: '结构', value: '宽线性流程 + 轻箱庭探索' },
      { label: '头目', value: '已确认 26 种已命名/未命名，总数至少 50+' },
      { label: '杂兵', value: '已确认 32 种' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '把已定名的六张地图并排看，可以看出影境的跨度：魂苏醒的溪谷、被红色血雾笼罩的森林、作为游戏中心与 NPC 聚集地的庞镇、可水面航行的梅谷湖、山地监狱形态的枷笼山，以及正道门派的营地。它们覆盖了从自然地貌到军事权力、从民间生活到囚禁意象的不同层次。',
      },
      { type: 'heading', text: '已定名的地图' },
      {
        type: 'list',
        items: [
          '溪谷：首张地图，魂苏醒的初始区域。',
          '血色森林：红色血雾笼罩的森林。',
          '庞镇：游戏中心区域，NPC 聚集地。',
          '梅谷湖：湖泊区域，可水面航行。',
          '枷笼山：山地监狱区域。',
          '正道大营：正道门派营地。',
        ],
      },
      {
        type: 'paragraph',
        text: '地图内部按轻箱庭组织：主路之外有支路、挑战点与收集物，部分路径需要特定影之武装才能打开。地图之间用铃铛连成网络，首次触摸铃铛会清除附近小地图迷雾，之后可以在铃铛之间传送。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '译名纠错与来源',
        text: '本站旧版采用「悲泣溪谷 / 赤红森林 / 梅姑湖 / 狱山」，来自 2026 年 10 月的媒体整理，与游戏内的「溪谷 / 血色森林 / 梅谷湖 / 枷笼山」不一致。本条已按社区 Wiki 收录的游戏内名称修正，媒体译名仅作对照保留。',
      },
    ],
    links: [
      { label: 'BWIKI · 游戏地图', href: SOURCE_URLS.bwikiMaps, note: '地图列表与收集物分类' },
      { label: '腾讯新闻 · 八大地图媒体整理', href: SOURCE_URLS.qqMaps, note: '旧译名来源，仅作对照' },
    ],
    related: [
      'map-valley',
      'map-blood-forest',
      'map-pang-town',
      'map-meigu-lake',
      'map-cage-mountain',
      'map-righteous-camp',
      'map-lu-village',
      'world-bosses',
      'world-enemies',
    ],
  },
  {
    id: 'map-valley',
    section: 'world',
    title: '溪谷',
    subtitle: '魂醒来的地方',
    summary:
      '首张地图，魂苏醒的初始区域。旧版媒体整理写作「悲泣溪谷」，游戏内名称为「溪谷」；地图内有初始武器与教学用的木制黑伤。',
    tags: ['地图', '溪谷', '初始区域', '第一章'],
    status: 'community',
    facts: [
      { label: '地图定位', value: '首张地图 / 初始区域' },
      { label: '游戏内名称', value: '溪谷' },
      { label: '旧媒体译名', value: '悲泣溪谷' },
      { label: '已知掉落', value: '木制黑伤（教学用）、黑伤双刃（开端之地）' },
      { label: '收集度 / 任务数', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '溪谷承担教学与开场叙事的双重任务。魂在这里醒来，拿到第一把可用的兵器，也在相对封闭的地形里学会白光格挡与红光闪避的基本判断。',
      },
      {
        type: 'paragraph',
        text: '从社区整理的获取路径看，本图至少有两把早期武器：教学与练习用的木制黑伤，以及「溪谷·开端之地」铃铛下方梯子崖底武器架上的黑伤双刃。长形黑伤则位于本图驿站的铁匠右侧武器架。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '名称说明',
        text: '「悲泣溪谷」是 2026 年 10 月媒体解禁时的中文写法，游戏内为「溪谷」。站内以游戏内名称为标题，旧译名保留在事实栏以便检索。',
      },
    ],
    related: ['world-overview', 'map-blood-forest', 'gameplay-exploration', 'weapon-twin-heishang'],
  },
  {
    id: 'map-blood-forest',
    section: 'world',
    title: '血色森林',
    subtitle: '红色血雾笼罩的林地',
    summary:
      '被红色血雾笼罩的森林区域，旧版媒体整理写作「赤红森林」。本图包含「亡命徒陷阱」等遭遇点，荆野与双蛇夫人白赤练的战斗都在这一带。',
    tags: ['地图', '森林', '血雾', '首领'],
    status: 'community',
    facts: [
      { label: '地图定位', value: '森林区域' },
      { label: '游戏内名称', value: '血色森林' },
      { label: '旧媒体译名', value: '赤红森林' },
      { label: '已知战斗', value: '亡命徒荆野、双蛇夫人白赤练' },
      { label: '收集度 / 任务数', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '红色血雾是本图的视觉标识，也是战斗压力的来源：视线被压缩，敌人从雾里出现的时间更短。社区整理的获取路径显示，亡命斩马刀来自「血色森林·亡命徒陷阱」的荆野战，白蟒赤练则来自本图章节首领双蛇夫人白赤练。',
      },
      {
        type: 'paragraph',
        text: '白赤练被标注为章节首领且不会错过，意味着这场战斗属于主线必经节点；相对的，荆野一战更像埋伏型遭遇。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '名称说明',
        text: '「赤红森林」为媒体译名，游戏内为「血色森林」。本条按游戏内名称修正。',
      },
    ],
    related: ['world-overview', 'map-valley', 'boss-baichilian', 'char-jingye'],
  },
  {
    id: 'map-pang-town',
    section: 'world',
    title: '庞镇',
    subtitle: '游戏中心与 NPC 聚集地',
    summary:
      '影境的中心区域，NPC 最集中的市镇。部分支线与庞镇 NPC 相关；镇外的「远眺庞镇之桥」是剑痴花千笑的战斗地点。',
    tags: ['地图', '市镇', 'NPC', '支线', '中心区域'],
    status: 'community',
    facts: [
      { label: '地图定位', value: '中心区域 / NPC 聚集地' },
      { label: '支线', value: '部分支线与庞镇 NPC 相关' },
      { label: '已知战斗', value: '剑痴·花千笑（远眺庞镇之桥）' },
      { label: '收集度 / 任务数', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '庞镇是玩家反复回到的地方：NPC 集中、支线密集、信息量最大。它同时是交通意义上的枢纽——向北是正道大营，向西南是梅谷湖，血色森林与溪谷则在更外围。',
      },
      {
        type: 'paragraph',
        text: '镇外的桥是一个容易被忽略的战斗点。痴者残剑就来自「远眺庞镇之桥」铃铛点旁大桥上的剑痴花千笑，这把武器又能铸魂为痴者醉剑，让「喝酒激发威力、可漂浮空中攻击远处敌人」成为一条独立的战斗流派。',
      },
    ],
    related: ['world-overview', 'map-lu-village', 'map-righteous-camp', 'boss-huaqianxiao'],
  },
  {
    id: 'map-meigu-lake',
    section: 'world',
    title: '梅谷湖',
    subtitle: '可以行船的水域',
    summary:
      '湖泊区域，可水面航行。旧版媒体整理写作「梅姑湖」，游戏内名称为「梅谷湖」；水域航行是本图区别于其他地图的核心机制。',
    tags: ['地图', '湖泊', '航行', '水域'],
    status: 'community',
    facts: [
      { label: '地图定位', value: '湖泊 / 水域' },
      { label: '游戏内名称', value: '梅谷湖' },
      { label: '旧媒体译名', value: '梅姑湖' },
      { label: '特殊机制', value: '水面航行' },
      { label: '收集度 / 任务数', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '水面航行把本图的空间逻辑从「走」变成「渡」：可达范围取决于船与航线，而不是脚程。这类设计通常会配合水域中的敌人（社区杂兵表里就有「水中小怪」）与需要绕行的岸线。',
      },
      {
        type: 'paragraph',
        text: '旧译名「梅姑湖」让不少人以为「梅姑」是某位角色；游戏内的「梅谷湖」则更像地名描述。站内不把「梅姑」补写成人物。',
      },
    ],
    related: ['world-overview', 'map-cage-mountain', 'gameplay-exploration'],
  },
  {
    id: 'map-cage-mountain',
    section: 'world',
    title: '枷笼山',
    subtitle: '山地监狱',
    summary:
      '山地监狱区域，旧版媒体整理写作「狱山」。垂直结构与守卫配置让这张图更接近「层层突破」而不是自由探索。',
    tags: ['地图', '山地', '监狱', '守卫'],
    status: 'community',
    facts: [
      { label: '地图定位', value: '山地监狱区域' },
      { label: '游戏内名称', value: '枷笼山' },
      { label: '旧媒体译名', value: '狱山' },
      { label: '守卫势力', value: '待补充' },
      { label: '收集度 / 任务数', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '「枷笼」比「狱」更具体：枷是刑具，笼是结构。这个命名把山体本身写成了关押装置，也解释了为什么这张图的地形强调垂直与封闭。',
      },
      {
        type: 'paragraph',
        text: '监狱型关卡通常承担两种功能：一是把玩家此前积累的战斗能力集中检验，二是通过关押者提供剧情线索。本图具体关押了谁、与主线哪条线相关，公开资料仍是空白。',
      },
    ],
    related: ['world-overview', 'map-meigu-lake', 'char-masked'],
  },
  {
    id: 'map-righteous-camp',
    section: 'world',
    title: '正道大营',
    subtitle: '名门正道的军营',
    summary:
      '正道门派的营地。社区杂兵表中大量出现的「正道弟子」「蓝衣正道弟子」说明本图以门派武装为主要敌人。',
    tags: ['地图', '军营', '正道', '门派'],
    status: 'community',
    facts: [
      { label: '地图定位', value: '正道门派营地' },
      { label: '主要敌人', value: '正道弟子 / 蓝衣正道弟子（据杂兵表）' },
      { label: '所属', value: '正道势力' },
      { label: '收集度 / 任务数', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '「正道」与「组织」并置，天然带出武林中的立场问题：谁有资格定义正道，谁又被排除在外。军营型区域也适合承载正面冲突、潜入或多方对峙。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '待补充',
        text: '正道大营的统属、首领与是否可作为友方据点，目前没有可靠资料。本条不把「正道」直接等同于善良阵营。',
      },
    ],
    related: ['world-overview', 'faction-organization', 'char-jingye', 'world-enemies'],
  },
  {
    id: 'map-lu-village',
    section: 'world',
    title: '陆家村',
    subtitle: '江湖边缘的村庄',
    summary:
      '村庄型区域，社区 Wiki 中有「陆家村村民的记忆之花」等条目与陆家村 NPC 相关内容；但它未被列入地图总表，可能属于庞镇周边的子区域。',
    tags: ['地图', '村庄', 'NPC', '待确认'],
    status: 'compiled',
    facts: [
      { label: '地图定位', value: '村庄（可能为子区域）' },
      { label: '是否单列地图', value: 'BWIKI 地图总表未列' },
      { label: '已知内容', value: '陆家村村民相关记忆之花、NPC' },
      { label: '已知战斗', value: '天玄派毕远掌门残躯（雕像场，据武器获取路径）' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '在一张以追杀与阴谋为主线的地图表里，村庄通常承担「让人停下来」的功能：交易、对话、委托，以及看见权力斗争如何落到普通人身上。',
      },
      {
        type: 'paragraph',
        text: '社区整理的武器路径中，天玄青铜剑来自「陆家村·雕像场」的天玄派毕远掌门残躯；妖锯则要集齐陆家村全部「沫小葵的缎带」才能触发隐藏阶段。这两条都说明陆家村不是纯过场区域。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '位置待确认',
        text: '陆家村未被列入社区 Wiki 的地图总表，是否为独立大地图或庞镇周边子区域尚无定论。本条标注为「媒体整理」。',
      },
    ],
    related: ['world-overview', 'map-pang-town', 'gameplay-collectibles', 'weapon-tianxuan-bronze'],
  },
  {
    id: 'map-soulbroken-mountain',
    section: 'world',
    title: '魂断山',
    subtitle: '名称待确认的地名',
    summary:
      '出现在 2026 年 10 月媒体整理中的地名，带有强烈终局意象。但社区 Wiki 的地图总表未收录该名称，它也可能是关卡名或章节名而非大地图。',
    tags: ['地图', '待确认', '终局意象', '媒体整理'],
    status: 'incomplete',
    facts: [
      { label: '类型', value: '地名（待确认是否为地图）' },
      { label: '资料状态', value: '媒体整理' },
      { label: '社区地图总表', value: '未收录' },
      { label: '是否终局区域', value: '未确认' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '「魂断」与主角的名字「魂」直接相撞，很难不让人联想到终局。但地名可以先于剧情存在，也可能只是某场战斗的舞台；更关键的是，社区 Wiki 整理的游戏地图总表里并没有这一条。',
      },
      {
        type: 'paragraph',
        text: '因此本站保留该条目作为「待核实地名」：不把它写成最终关，也不否认它存在。若后续确认它是某章节的关卡名，条目会改用关卡定位。',
      },
    ],
    related: ['world-overview', 'map-cage-mountain', 'story-hun', 'source-status-guide'],
  },
  {
    id: 'world-bosses',
    section: 'world',
    title: '头目图鉴',
    subtitle: '至少 50 场独立血条战斗',
    summary:
      '社区统计已确认 26 种已命名/未命名头目、7 种待确认，总数至少 50+。已命名者包括魔渊、大师兄、铁鬼、追命、剑痴花千笑、双蛇夫人白赤练、舞狮尊主、巨锤客万钧、斧老大彭猛等。',
    tags: ['首领', '头目', 'Boss', '图鉴', '强敌'],
    status: 'community',
    facts: [
      { label: '已命名头目', value: '21 种' },
      { label: '未命名头目', value: '6 种' },
      { label: '待确认', value: '7 种' },
      { label: '总数', value: '至少 50+（社区统计）' },
      { label: '武器联动', value: '部分头目掉落专属武器，兼具探索能力' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '头目是本作展示武器与演出设计的窗口。已定名的 21 种里，有的以人名出现（魔渊、长鸿、雷当），有的带称号（剑痴花千笑、双蛇夫人白赤练、癫狂暴徒铁杀与残钢、斧老大彭猛），称号本身不构成完整设定。',
      },
      { type: 'heading', text: '已命名头目' },
      {
        type: 'list',
        items: [
          '魔渊：最终 BOSS，暗魔天堡之主（详见角色条目）。',
          '大师兄：七星剑客相关人物。',
          '红衣女剑客：公开演示中的女性剑客形象。',
          '巨锤客万钧：击败后获得长柄金瓜。',
          '荒行子：社区 Wiki 有「关于荒行子的记忆之花」。',
          '舞狮尊主：鼓点与狮头意象的首领。',
          '剑痴：花千笑，掉落痴者残剑。',
          '风雪刀客：社区 Wiki 有对应记忆之花。',
          '沐小葵：BOSS 兼剧情角色，妖锯隐藏阶段「玉妖」与之相关。',
          '铁鬼：公开资料中的强敌名。',
          '玉妖：妖锯的隐藏阶段形态，需集齐缎带触发。',
          '雷当：公开资料中的头目名。',
          '长鸿：公开资料中的头目名。',
          '追命：大瀑布第二场战斗，掉落追命锁镰。',
          '双蛇夫人：白赤练，血色森林章节首领，掉落白蟒赤练。',
          '玉面郎君：公开资料中的头目名。',
          '癫狂暴徒：铁杀，红丝线障壁后的遭遇战。',
          '癫狂暴徒：残钢，掉落残钢刃。',
          '斧老大：彭猛，第一章驿站的影之武装首领，掉落巨凶斧。',
          '横刀队长：公开资料中的头目名。',
          '三头女：公开资料中的头目名。',
        ],
      },
      {
        type: 'note',
        tone: 'caution',
        title: '名单口径',
        text: '本名单来自社区 Wiki 的头目图鉴整理，其中「拳痴铁狂」等名称在记忆之花条目中单独出现，未计入上表；「左殇」「上官斩」等被标注为待确认，可能属于系列旧作人物或被误列。',
      },
    ],
    links: [{ label: 'BWIKI · BOSS 图鉴', href: SOURCE_URLS.bwikiBosses, note: '头目名单' }],
    related: [
      'char-moyuan',
      'char-ahua',
      'char-jingye',
      'boss-ironcrazy',
      'boss-chasing',
      'boss-huaqianxiao',
      'boss-baichilian',
      'boss-lion',
      'arsenal-forge',
    ],
  },
  {
    id: 'world-enemies',
    section: 'world',
    title: '杂兵图鉴',
    subtitle: '32 种敌人与三条读招规则',
    summary:
      '社区统计已确认 32 种杂兵，其中 22 种近战、4 种远程、4 种特殊，另有 3 种待确认。杂兵体系里有一支明显的「怪面」分支，包含持刀、长枪、狼牙棒与空手四种。',
    tags: ['敌人', '杂兵', '怪面', '图鉴', '战斗'],
    status: 'community',
    facts: [
      { label: '总数', value: '32 种（部分为换皮）' },
      { label: '近战', value: '22 种' },
      { label: '远程', value: '4 种' },
      { label: '特殊', value: '4 种' },
      { label: '待确认', value: '3 种' },
      { label: '怪面分支', value: '持刀 / 长枪 / 狼牙棒 / 空手' },
    ],
    body: [
      { type: 'heading', text: '近战杂兵' },
      {
        type: 'paragraph',
        text: '鸟、狗、正道弟子、蓝衣正道弟子、长枪兵、骑马长枪、峨眉刺弟子、双头刀兵、狼牙棒怪面、长枪怪面、空手怪面、持刀怪面、双钩兵、白枪盾兵、大头、女大头、水中小怪、持刀兜帽、白棒盾兵、斗笠剑盾背弓、骑马斗笠剑盾背弓、铜人。',
      },
      { type: 'heading', text: '远程与特殊' },
      {
        type: 'list',
        items: [
          '远程：火枪兵、弩枪手、弓箭手、扔火怪。',
          '特殊：自爆兵、怪医、斗笠披风、小舞狮。',
          '待确认：双刀胖子、水中长柄刀、射红激光的怪。',
        ],
      },
      {
        type: 'paragraph',
        text: '怪面是本作辨识度最高的一支杂兵：面具之下不辨人形，四种武器形态（刀、枪、狼牙棒、空手）分别对应不同的距离与破防压力。以持刀怪面为例，它的白光攻击可以精确格挡并触发鬼步，红光攻击不能格挡只能精确闪避；打空杀气槽会让它破防、受到更高伤害；从背后潜行、从上方跳下或在其残血时都能处决，处决期间魂全程无敌。',
      },
      {
        type: 'paragraph',
        text: '杂兵还会掉落两类实用资源：残魂星火（用于影之武装，击杀概率获得）与药瓶使用次数（击杀概率恢复）。这两条把「清杂兵」从拖延变成了资源回收。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '未确认部分',
        text: '社区 Wiki 明确标注官方尚未公布敌人与地图的对应关系，因此本条不提供「某图有哪些敌人」的清单。',
      },
    ],
    links: [{ label: 'BWIKI · 杂兵图鉴', href: SOURCE_URLS.bwikiEnemies, note: '敌人分类与数量' }],
    related: ['world-bosses', 'gameplay-combat-basics', 'map-righteous-camp', 'arsenal-phantom'],
  },
  {
    id: 'boss-huaqianxiao',
    section: 'world',
    title: '剑痴·花千笑',
    subtitle: '笑意之下的剑',
    summary:
      '称号「剑痴」的头目，战斗地点在远眺庞镇之桥、铃铛点旁的大桥上，击败后获得主武器「痴者残剑」。',
    tags: ['首领', '花千笑', '剑痴', '痴者残剑'],
    status: 'community',
    facts: [
      { label: '称号', value: '剑痴' },
      { label: '战斗地点', value: '远眺庞镇之桥（铃铛点旁大桥）' },
      { label: '掉落', value: '痴者残剑（可铸魂为痴者醉剑）' },
      { label: '战斗风格', value: '剑术型（据称号与掉落）' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '「花千笑」这个名字有很强的舞台感：花、笑、千种表情，像是把杀意藏在礼节与表演里。而「剑痴」这个称号把方向定死了——他是一位把一生押在剑上的人，掉落物也正是一把残剑。',
      },
      {
        type: 'paragraph',
        text: '痴者残剑铸魂后成为痴者醉剑：喝酒激发威力，可漂浮空中攻击远处敌人，且远距离伤害不衰减。这一支系把「醉」和「剑」合成了一套完全不同于贴身快攻的打法。',
      },
    ],
    related: ['world-bosses', 'char-ahua', 'boss-baichilian', 'weapon-fool-remnant'],
  },
  {
    id: 'boss-baichilian',
    section: 'world',
    title: '双蛇夫人·白赤练',
    subtitle: '血色森林的章节首领',
    summary:
      '称号「双蛇夫人」的头目，血色森林的章节首领，属于主线必经战斗，击败后获得「白蟒赤练」。',
    tags: ['首领', '白赤练', '双蛇夫人', '白蟒赤练', '血色森林'],
    status: 'community',
    facts: [
      { label: '称号', value: '双蛇夫人' },
      { label: '战斗地点', value: '血色森林（章节首领）' },
      { label: '是否可错过', value: '否（不会错过）' },
      { label: '掉落', value: '白蟒赤练' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '「白赤练」与武器「白蟒赤练」只差一个字，现在可以确认这不是巧合：她就是这把武器的来源。双蛇的意象也解释了武器为何以「蟒」与「赤练」为名。',
      },
      {
        type: 'paragraph',
        text: '作为章节首领且不会错过，这场战斗是多数玩家第一次被迫面对「红光不可格挡」的压力测试——森林的视线遮挡又让读招窗口更短。',
      },
    ],
    related: ['world-bosses', 'map-blood-forest', 'boss-huaqianxiao', 'weapon-white-python'],
  },
  {
    id: 'boss-ironcrazy',
    section: 'world',
    title: '拳痴铁狂',
    subtitle: '以拳入狂',
    summary:
      '公开资料与社区记忆之花条目中出现的强敌名，称号指向刚猛的拳法 / 体术路线。具体招式、出场地图与掉落尚未收录。',
    tags: ['首领', '强敌', '拳法', '拳痴'],
    status: 'compiled',
    facts: [
      { label: '类型', value: '强敌 / 头目' },
      { label: '战斗意象', value: '拳法 / 体术' },
      { label: '相关条目', value: '「拳痴铁狂的记忆之花」' },
      { label: '出场地图', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '「拳痴」与「铁狂」两个词都把重点放在执念与硬度上。在以兵器系统为主轴的本作里，这样一位以拳脚立身的强敌，可能承担「逼玩家放下距离安全感」的战斗功能。',
      },
      {
        type: 'paragraph',
        text: '社区 Wiki 收录了「拳痴铁狂的记忆之花」，说明他不只是拦路的战斗单位，也有可被追述的过去。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '待补充',
        text: '本条没有招式表、阶段或掉落信息，不虚构他的门派与师徒关系。',
      },
    ],
    related: ['world-bosses', 'arsenal-shaqi', 'char-jingye', 'gameplay-memory-flower'],
  },
  {
    id: 'boss-chasing',
    section: 'world',
    title: '追命',
    subtitle: '大瀑布的第二场战斗',
    summary:
      '头目名，战斗地点在大瀑布，是该区域的第二场战斗；击败后获得影之武装「追命锁镰」。',
    tags: ['首领', '追命', '锁镰', '大瀑布'],
    status: 'community',
    facts: [
      { label: '类型', value: '头目' },
      { label: '战斗地点', value: '大瀑布（第二场战斗）' },
      { label: '掉落', value: '追命锁镰（影之武装 · 武学）' },
      { label: '身份', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '「追命」既可以是一个人的诨号，也可以是对他行事方式的描述。与锁镰共享名称，现在可以确认二者同源：这把武器就掉在他手上。',
      },
      {
        type: 'paragraph',
        text: '追命锁镰属于影之武装的「武学」类，说明追命的战斗风格偏技巧而非蛮力。至于他与组织的关系、为何守在大瀑布，公开资料仍无说明。',
      },
    ],
    related: ['weapon-chasing-sickle', 'world-bosses', 'char-hun', 'arsenal-phantom'],
  },
  {
    id: 'boss-lion',
    section: 'world',
    title: '舞狮尊主',
    subtitle: '鼓点、狮头与火',
    summary:
      '头目名，以舞狮与烈焰为意象，公开资料中也写作「舞狮尊主烈焰」。社区 Wiki 收有「舞狮尊主的记忆之花」，另有「小舞狮」作为特殊杂兵出现。',
    tags: ['首领', '舞狮', '烈焰', '记忆之花'],
    status: 'community',
    facts: [
      { label: '类型', value: '头目' },
      { label: '视觉意象', value: '舞狮 / 烈焰' },
      { label: '相关敌人', value: '小舞狮（特殊杂兵）' },
      { label: '战斗阶段', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '舞狮自带鼓点、仪式与群体配合的联想，放进「功夫朋克」的影境里，很容易成为一场强调节奏与场面压制的头目战。杂兵表里的「小舞狮」也暗示这场战斗可能不是一对一。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '待补充',
        text: '招式、阶段与是否掉落专属武器均待确认；名称在官方中文里可能不带「烈焰」二字。',
      },
    ],
    related: ['world-bosses', 'world-enemies', 'gameplay-difficulty', 'arsenal-forge'],
  },
];
