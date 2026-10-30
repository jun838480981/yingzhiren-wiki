import type { WikiEntry } from '../types/wiki';
import { SOURCE_URLS } from './sourceLinks';

export const worldEntries: WikiEntry[] = [
  {
    id: 'world-overview',
    section: 'world',
    title: '地图与敌人总览',
    subtitle: '八处地名，一张半开放的影境',
    summary:
      '影境由多张手工地图组成。已公开的八处地名包括悲泣溪谷、赤红森林、陆家村、庞镇、正道大营、梅姑湖、狱山与魂断山；这些中文译名来自媒体整理，可能与正式版存在差异。',
    tags: ['地图', '敌人', '首领', '影境', '八大地图'],
    status: 'compiled',
    featured: true,
    facts: [
      { label: '公开地名', value: '8 处（媒体整理）' },
      { label: '结构', value: '半开放箱庭 / 手工地图' },
      { label: '资料时间', value: '2026-10 媒体解禁整理' },
      { label: '译名风险', value: '中文名可能不同' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '把八处地名并排看，可以看出影境的跨度：溪谷、森林、村庄、市镇、军营、湖泊、山狱与魂断山。它们覆盖了从民间生活到军事权力、从自然地貌到囚禁与终局意象的不同层次。',
      },
      { type: 'heading', text: '已公开的八处地名' },
      {
        type: 'list',
        items: [
          '悲泣溪谷',
          '赤红森林',
          '陆家村',
          '庞镇',
          '正道大营',
          '梅姑湖',
          '狱山',
          '魂断山',
        ],
      },
      {
        type: 'paragraph',
        text: '目前没有足够的一手资料，把这八处地名与具体首领、支线或章节顺序一一对应。站内为每处地名建立独立条目，只记录名称、地貌意象与资料状态，敌人配置留待补充。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '译名与来源',
        text: '八大地图名称来自 2026 年 10 月的媒体解禁整理（腾讯新闻等），属于辅助来源。官方中文定名、区域范围与探索顺序请以正式版为准。',
      },
    ],
    links: [
      { label: '腾讯新闻 · 八大地图媒体整理', href: SOURCE_URLS.qqMaps, note: '仅作辅助来源' },
    ],
    related: [
      'map-weeping-valley',
      'map-crimson-forest',
      'map-lu-village',
      'map-pang-town',
      'map-righteous-camp',
      'map-meigu-lake',
      'map-prison-mountain',
      'map-soulbroken-mountain',
      'world-bosses',
    ],
  },
  {
    id: 'map-weeping-valley',
    section: 'world',
    title: '悲泣溪谷',
    subtitle: '水声与哭声之间的谷地',
    summary:
      '八大地名之一，媒体整理为“悲泣溪谷”。从地名意象看是低洼溪谷区域；具体敌人配置、支线与首领尚未有可靠资料，待补充。',
    tags: ['地图', '溪谷', '媒体整理'],
    status: 'compiled',
    facts: [
      { label: '类型', value: '溪谷' },
      { label: '资料状态', value: '媒体整理' },
      { label: '敌人配置', value: '待补充' },
      { label: '中文定名', value: '可能不同' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '“悲泣”让这条溪谷从一开始就带着不祥的情绪。低洼地形、水声与视线遮挡，适合做成需要谨慎推进的探索区域；但在官方公开具体布局前，这些只是对地名意象的阅读。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '待补充',
        text: '本条只确认地名与“溪谷”这一地貌类型。不虚构区域首领、宝箱或支线。',
      },
    ],
    related: ['world-overview', 'map-crimson-forest', 'gameplay-exploration'],
  },
  {
    id: 'map-crimson-forest',
    section: 'world',
    title: '赤红森林',
    subtitle: '红色植被覆盖的林地',
    summary:
      '八大地名之一，媒体整理为“赤红森林”。地名指向色彩强烈的林地；具体区域内容、敌人与剧情作用尚无可靠资料。',
    tags: ['地图', '森林', '媒体整理'],
    status: 'compiled',
    facts: [
      { label: '类型', value: '森林' },
      { label: '资料状态', value: '媒体整理' },
      { label: '敌人配置', value: '待补充' },
      { label: '中文定名', value: '可能不同' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '“赤红”既可能是植被，也可能是血、火或某种异变。预告与演示中的影境常用高对比色制造压迫感，赤红森林很可能是其中的色彩重音。',
      },
      {
        type: 'paragraph',
        text: '在缺少区域实机的情况下，本站不把“赤红”解释为特定剧情事件。森林的敌人、分支路径与首领均待补充。',
      },
    ],
    related: ['world-overview', 'map-weeping-valley', 'map-meigu-lake'],
  },
  {
    id: 'map-lu-village',
    section: 'world',
    title: '陆家村',
    subtitle: '江湖边缘的村庄',
    summary:
      '八大地名之一，媒体整理为“陆家村”。从地名看是村庄型区域，可能承担支线、民生与世界观展示功能；具体内容待补充。',
    tags: ['地图', '村庄', '支线', '媒体整理'],
    status: 'compiled',
    facts: [
      { label: '类型', value: '村庄' },
      { label: '资料状态', value: '媒体整理' },
      { label: '支线内容', value: '待补充' },
      { label: '中文定名', value: '可能不同' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '在一张以追杀与阴谋为主线的地图表里，村庄通常承担“让人停下来”的功能：交易、对话、委托，以及看见权力斗争如何落到普通人身上。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '待补充',
        text: '村庄的 NPC、支线数量与是否会随主线变化，均无可靠公开资料。本条不虚构村民姓名。',
      },
    ],
    related: ['world-overview', 'faction-wulin', 'gameplay-sidequests'],
  },
  {
    id: 'map-pang-town',
    section: 'world',
    title: '庞镇',
    subtitle: '市镇与权力交汇处',
    summary:
      '八大地名之一，媒体整理为“庞镇”。地名指向规模较大的市镇；其商业、势力与支线结构尚无公开细节。',
    tags: ['地图', '市镇', '媒体整理'],
    status: 'compiled',
    facts: [
      { label: '类型', value: '市镇' },
      { label: '资料状态', value: '媒体整理' },
      { label: '势力分布', value: '待补充' },
      { label: '中文定名', value: '可能不同' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '“镇”比“村”更大，也更容易成为多方势力交汇的节点。若陆家村代表江湖边缘，庞镇可能更接近信息、物资与人脉的集散地。',
      },
      {
        type: 'paragraph',
        text: '这只是基于地名的结构推测，不是官方描述。镇内敌人、商铺与支线均待正式版确认。',
      },
    ],
    related: ['world-overview', 'map-lu-village', 'map-righteous-camp'],
  },
  {
    id: 'map-righteous-camp',
    section: 'world',
    title: '正道大营',
    subtitle: '名门正道的军营',
    summary:
      '八大地名之一，媒体整理为“正道大营”。地名指向正道势力的军事营地；它与“组织”的关系、驻扎人物与战斗配置尚待补充。',
    tags: ['地图', '军营', '正道', '媒体整理'],
    status: 'compiled',
    facts: [
      { label: '类型', value: '军营 / 营地' },
      { label: '所属', value: '正道势力（据地名）' },
      { label: '资料状态', value: '媒体整理' },
      { label: '中文定名', value: '可能不同' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '“正道”与“组织”并置，天然带出武林中的立场问题：谁有资格定义正道，谁又被排除在外。军营型区域也适合承载正面冲突、潜入或多方对峙。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '待补充',
        text: '正道大营的统属、首领与是否可作为友方据点，目前没有可靠资料。本条不把“正道”直接等同于善良阵营。',
      },
    ],
    related: ['world-overview', 'faction-organization', 'char-jingye'],
  },
  {
    id: 'map-meigu-lake',
    section: 'world',
    title: '梅姑湖',
    subtitle: '水面之下的静默',
    summary:
      '八大地名之一，媒体整理为“梅姑湖”。地名指向湖泊区域；其战斗、探索与叙事功能尚无公开细节。',
    tags: ['地图', '湖泊', '媒体整理'],
    status: 'compiled',
    facts: [
      { label: '类型', value: '湖泊' },
      { label: '资料状态', value: '媒体整理' },
      { label: '区域内容', value: '待补充' },
      { label: '中文定名', value: '可能不同' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '湖在武侠叙事里常与秘密、倒影和葬身之地相连。“梅姑”又给这片水域添了一层人物传说式的色彩，但公开资料没有说明“梅姑”是谁。',
      },
      {
        type: 'paragraph',
        text: '本站只记录地名与湖泊类型，不把“梅姑”补写成某位角色的别名。',
      },
    ],
    related: ['world-overview', 'map-crimson-forest', 'story-conspiracy'],
  },
  {
    id: 'map-prison-mountain',
    section: 'world',
    title: '狱山',
    subtitle: '囚禁与刑罚之地',
    summary:
      '八大地名之一，媒体整理为“狱山”。地名暗示囚禁、刑罚或封闭山区；实际区域结构、守卫势力与剧情作用待补充。',
    tags: ['地图', '山狱', '媒体整理'],
    status: 'compiled',
    facts: [
      { label: '类型', value: '山狱 / 囚禁地' },
      { label: '资料状态', value: '媒体整理' },
      { label: '守卫势力', value: '待补充' },
      { label: '中文定名', value: '可能不同' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '“狱山”把监狱与山体合在一起，天然适合垂直探索与层层突破。它也提供了一种叙事可能：魂要追查的某条线索，可能被关在离武林更远的地方。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '待补充',
        text: '以上是对地名意象的阅读，不是官方剧情描述。狱山的敌人、关卡结构与是否可回访均待确认。',
      },
    ],
    related: ['world-overview', 'map-soulbroken-mountain', 'char-masked'],
  },
  {
    id: 'map-soulbroken-mountain',
    section: 'world',
    title: '魂断山',
    subtitle: '名字最重的山',
    summary:
      '八大地名之一，媒体整理为“魂断山”。地名带有强烈的终局意象，但是否为最终区域、承载何种剧情，目前没有官方说明。',
    tags: ['地图', '山', '终局意象', '媒体整理'],
    status: 'compiled',
    facts: [
      { label: '类型', value: '山地' },
      { label: '资料状态', value: '媒体整理' },
      { label: '是否终局区域', value: '未确认' },
      { label: '中文定名', value: '可能不同' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '“魂断”与主角的名字“魂”直接相撞，很难不让人联想到终局。但地名可以先于剧情存在，也可能只是某场战斗的舞台。没有官方说明之前，本站不把它写成“最终关”。',
      },
      {
        type: 'paragraph',
        text: '若八大地名按探索顺序排列，魂断山位于末尾；但“媒体整理顺序”不等于官方章节顺序。',
      },
    ],
    related: ['world-overview', 'map-prison-mountain', 'story-hun'],
  },
  {
    id: 'world-bosses',
    section: 'world',
    title: '首领与强敌',
    subtitle: '刀锋所指的名字',
    summary:
      '公开资料中出现的首领 / 强敌包括阿花、荆野、拳痴铁狂、追命、花千笑、白赤练、舞狮尊主烈焰等。除已确认者外，多数战斗细节来自演示与媒体体验。',
    tags: ['首领', 'Boss', '强敌', '敌人'],
    status: 'compiled',
    facts: [
      { label: '公开亮相', value: '阿花 / 荆野 / 拳痴铁狂 / 追命 等' },
      { label: '武器联动', value: '部分首领武器可获取' },
      { label: '资料构成', value: '官方演示 + 媒体体验' },
      { label: '战斗细节', value: '以正式版为准' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '首领战是《影之刃零》展示武器与演出设计的窗口。已公开的名字里，有的更像人物（阿花、荆野），有的更像江湖称号（拳痴铁狂、舞狮尊主烈焰）；称号本身不构成完整设定。',
      },
      {
        type: 'paragraph',
        text: '击败部分首领后可以获得其武器，这是本作把“战斗胜利”转化为“探索权限”的关键设计。也因此，首领条目的价值不只在招式，还在于它掉落的兵器会打开什么。',
      },
      { type: 'heading', text: '已记录的首领 / 强敌' },
      {
        type: 'list',
        items: [
          '新娘阿花：公开演示中的女性首领。',
          '荆野：与魂正面交锋的强敌。',
          '拳痴铁狂：以拳法 / 体术为意象的强敌名。',
          '追命：与“追命锁镰”名称相近的首领。',
          '花千笑：公开资料中的首领名。',
          '白赤练：与“白蟒赤练”名称相近的首领。',
          '舞狮尊主烈焰：以舞狮与烈焰为意象的首领名。',
        ],
      },
      {
        type: 'note',
        tone: 'caution',
        title: '状态区分',
        text: '阿花、荆野的条目依据媒体体验；其余首领多只有名称与公开亮相记录，标记为“媒体整理”。名称相近的武器与首领，关联均未获官方确认。',
      },
    ],
    related: [
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
    id: 'boss-ironcrazy',
    section: 'world',
    title: '拳痴铁狂',
    subtitle: '以拳入狂',
    summary:
      '公开资料中出现的强敌名，称号指向刚猛的拳法 / 体术路线。具体招式、出场地图与剧情立场均待补充。',
    tags: ['首领', '强敌', '拳法', '媒体整理'],
    status: 'compiled',
    facts: [
      { label: '类型', value: '强敌 / 首领（据公开资料）' },
      { label: '战斗意象', value: '拳法 / 体术' },
      { label: '出场地图', value: '待补充' },
      { label: '剧情立场', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '“拳痴”与“铁狂”两个词都把重点放在执念与硬度上。若以兵器系统为主轴，这样一位以拳脚立身的强敌，可能承担“逼玩家放下远程安全感”的战斗功能。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '待补充',
        text: '本条仅有名称与战斗意象，不虚构他的门派、徒弟或与魂的私人恩怨。',
      },
    ],
    related: ['world-bosses', 'arsenal-shaqi', 'char-jingye'],
  },
  {
    id: 'boss-chasing',
    section: 'world',
    title: '追命',
    subtitle: '名字就是威胁',
    summary:
      '公开资料中的首领名。与武器“追命锁镰”共享“追命”二字，但二者是否存在直接关联，官方没有说明。',
    tags: ['首领', '追命', '锁镰', '媒体整理'],
    status: 'compiled',
    facts: [
      { label: '类型', value: '首领（据公开资料）' },
      { label: '关联武器', value: '追命锁镰（名称相近）' },
      { label: '关联是否确认', value: '否' },
      { label: '出场地图', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '“追命”既可以是一个人的诨号，也可以是对他行事方式的描述。与锁镰共享名称，让社区自然猜测二者同源，但在官方确认前，这只能算命名上的呼应。',
      },
      {
        type: 'paragraph',
        text: '本条不把“追命”写成魂的旧识或组织成员。身份、战斗阶段与掉落武器均待补充。',
      },
    ],
    related: ['weapon-chasing-sickle', 'world-bosses', 'char-hun'],
  },
  {
    id: 'boss-huaqianxiao',
    section: 'world',
    title: '花千笑',
    subtitle: '笑意之下的刀',
    summary:
      '公开资料中出现的首领名。“花千笑”更接近一个带有表演感的江湖称号；其真实身份、战斗风格与剧情作用尚待补充。',
    tags: ['首领', '花千笑', '媒体整理'],
    status: 'compiled',
    facts: [
      { label: '类型', value: '首领（据公开资料）' },
      { label: '名称气质', value: '花 / 笑 / 江湖称号' },
      { label: '战斗风格', value: '待补充' },
      { label: '出场地图', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '“花千笑”这个名字有很强的舞台感：花、笑、千种表情，像是把杀意藏在礼节与表演里。但名字的气质不等于战斗机制，站内不据此推断她 / 他的武器或招式。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '待补充',
        text: '目前只能确认这是一个公开资料中的首领名。性别、势力与战斗阶段均无可靠说明。',
      },
    ],
    related: ['world-bosses', 'char-ahua', 'boss-baichilian'],
  },
  {
    id: 'boss-baichilian',
    section: 'world',
    title: '白赤练',
    subtitle: '与“白蟒赤练”同名的影子',
    summary:
      '公开资料中的首领名。与武器“白蟒赤练”名称相近，但二者是否存在人物 / 武器绑定关系，尚无官方说明。',
    tags: ['首领', '白赤练', '白蟒赤练', '媒体整理'],
    status: 'compiled',
    facts: [
      { label: '类型', value: '首领（据公开资料）' },
      { label: '关联武器', value: '白蟒赤练（名称相近）' },
      { label: '关联是否确认', value: '否' },
      { label: '战斗风格', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '“白赤练”与“白蟒赤练”只差一个字，很难不让人联想。但共享词根可能只是命名体系的一部分，也可能是角色与武器的直接绑定；在没有官方说明时，本站把两种可能都保留。',
      },
      {
        type: 'paragraph',
        text: '本条不把白赤练写成阿花、某位新娘或某把武器的化身。',
      },
    ],
    related: ['weapon-white-python', 'world-bosses', 'char-ahua'],
  },
  {
    id: 'boss-lion',
    section: 'world',
    title: '舞狮尊主烈焰',
    subtitle: '鼓点、狮头与火',
    summary:
      '公开资料中的首领名，以舞狮与烈焰为意象。称号的演出感很强，但具体战斗阶段、出场地图与剧情立场尚待补充。',
    tags: ['首领', '舞狮', '烈焰', '媒体整理'],
    status: 'compiled',
    facts: [
      { label: '类型', value: '首领（据公开资料）' },
      { label: '视觉意象', value: '舞狮 / 烈焰' },
      { label: '战斗阶段', value: '待补充' },
      { label: '出场地图', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '舞狮自带鼓点、仪式与群体配合的联想，放进“功夫朋克”的影境里，很容易成为一场强调节奏与场面压制的首领战。但这是对名称的阅读，不是官方机制说明。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '待补充',
        text: '名称与视觉意象可记录；招式、阶段与是否掉落专属武器均待确认。',
      },
    ],
    related: ['world-bosses', 'gameplay-difficulty', 'arsenal-forge'],
  },
];
