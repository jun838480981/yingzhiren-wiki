import type { WikiEntry } from '../types/wiki';
import { SOURCE_URLS } from './sourceLinks';

export const arsenalEntries: WikiEntry[] = [
  {
    id: 'arsenal-overview',
    section: 'arsenal',
    title: '武器系统总览',
    subtitle: '双刃在手，以武具为钥匙',
    summary:
      '正式版提供 30 余种主武器与 25 种“影之武装”。魂可同时携带两把主武器并在战斗中切换，切换会回复杀气；武器既是战斗风格，也是探索开路的手段。',
    tags: ['武器', '影之武装', '双主武器', '杀气', '30+', '25'],
    status: 'confirmed',
    featured: true,
    facts: [
      { label: '主武器', value: '30 余种' },
      { label: '影之武装', value: '25 种（2026-08 公开）' },
      { label: '携带方式', value: '同时携带两把主武器' },
      { label: '切换收益', value: '回复杀气' },
      { label: '部分来源', value: '击败首领后获取' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '《影之刃零》的武器系统不是单纯的数值升级。主武器决定近身战斗的节奏与距离，影之武装则提供更特殊的攻击、控制或探索能力。公开资料给出的规模是 30 余种主武器与 25 种影之武装；这两个数字会随版本与更新变化，但足以说明构筑空间。',
      },
      {
        type: 'paragraph',
        text: '魂可同时携带两把主武器，并在连段中切换。切换不只是换一套招式，还会回复杀气——这让“换武器”从菜单操作变成需要主动规划的战斗资源循环。玩家可以在压制、续航与破防之间做取舍。',
      },
      {
        type: 'heading',
        text: '三个互相咬合的系统' },
      {
        type: 'list',
        items: [
          '主武器：承担主要输出与招式派生，存在明显的手感差异。',
          '影之武装：数量较少但功能更特殊，部分能力用于打开探索路径。',
          '杀气：连接攻击、招架与爆发的资源，切换武器可以回复。',
        ],
      },
      {
        type: 'note',
        tone: 'caution',
        title: '数量会变',
        text: '“30+ 主武器 / 25 种影之武装”来自 2026 年 8 月的公开介绍。后续更新、DLC 或版本调整都可能改变总数，站内不把数字当作永久结论。',
      },
    ],
    links: [
      {
        label: 'PlayStation Blog · State of Play 深入介绍',
        href: SOURCE_URLS.ps2026August,
        note: '武器与难度',
      },
      {
        label: 'PlayStation Blog · 首领武器与探索',
        href: SOURCE_URLS.ps2026October,
        note: '2026-10-28',
      },
    ],
    related: ['arsenal-shaqi', 'arsenal-phantom', 'arsenal-forge', 'gameplay-ability-gates'],
  },
  {
    id: 'arsenal-shaqi',
    section: 'arsenal',
    title: '杀气与战斗资源',
    subtitle: '杀气、精纯杀气 / Power Surge',
    summary:
      '攻击、招架与处决围绕“杀气”展开。积攒杀气可释放强力招式，精纯杀气（Power Surge）代表更高阶的战斗资源；切换主武器是维持攻势、回复杀气的手段之一。',
    tags: ['杀气', '精纯杀气', 'Power Surge', '招架', '闪避', '格挡'],
    status: 'demo',
    facts: [
      { label: '基础资源', value: '杀气' },
      { label: '高阶资源', value: '精纯杀气 / Power Surge' },
      { label: '回复手段', value: '切换武器、战斗行为' },
      { label: '防御动作', value: '格挡 / 闪避 / 完美招架' },
      { label: '中文定名', value: '以正式版为准' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '杀气是《影之刃零》战斗循环的核心词。它既是资源，也是节奏：进攻可以积攒，招架与处决会改变它的流向，而高阶的“精纯杀气 / Power Surge”则对应更具爆发力的战斗阶段。',
      },
      {
        type: 'paragraph',
        text: '防御端提供格挡、闪避与完美招架。公开演示强调“完美招架”的收益，但它不是无风险的万能键：时机、敌人招式与后续资源都需要判断。不同武器的切换会回复杀气，这让双武器配置具有明确的战术意义。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '术语说明',
        text: '“精纯杀气 / Power Surge”是公开资料中的对应表述，官方中文最终译名与具体数值以正式版教学为准。本条标记为“公开演示”，不提供帧数或倍率数据。',
      },
    ],
    related: ['arsenal-overview', 'gameplay-difficulty', 'char-hun', 'news-state-of-play'],
  },
  {
    id: 'weapon-white-python',
    section: 'arsenal',
    title: '白蟒赤练',
    subtitle: '白蟒与赤练的双生意象',
    summary:
      '公开演示中亮相的武器名，以白蟒与赤练的意象构成双重气质。具体招式、获取方式与数值以正式版为准。',
    tags: ['白蟒赤练', '主武器', '演示'],
    status: 'demo',
    facts: [
      { label: '类别', value: '主武器' },
      { label: '首次公开', value: '公开演示 / 预告' },
      { label: '招式细节', value: '待补充' },
      { label: '获取方式', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '“白蟒赤练”把两种蛇形意象并置在同一把武器名下，名字本身就带有冷热交替的张力。公开演示里，它的演出强调贴身与连续压制，但仅凭剪辑无法还原完整招式树。',
      },
      {
        type: 'paragraph',
        text: '本页只确认名称与公开亮相，不根据武器名推断剧情归属。获取方式、强化路线与是否与某位首领绑定，均需正式版或官方说明。',
      },
    ],
    related: ['arsenal-overview', 'weapon-scarlet-wraithblade', 'char-hun'],
  },
  {
    id: 'weapon-scarlet-wraithblade',
    section: 'arsenal',
    title: '红妆鬼斩 / Scarlet Wraithblade',
    subtitle: '红妆与鬼斩',
    summary:
      '媒体与演示资料中以“红妆鬼斩”（英文 Scarlet Wraithblade）出现的武器。中文定名与技能描述可能随版本调整，当前不作为最终名称。',
    tags: ['红妆鬼斩', 'Scarlet Wraithblade', '主武器', '演示'],
    status: 'demo',
    facts: [
      { label: '中文名', value: '红妆鬼斩（媒体表述）' },
      { label: '英文名', value: 'Scarlet Wraithblade' },
      { label: '类别', value: '主武器' },
      { label: '名称状态', value: '可能随版本调整' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '“红妆鬼斩”与“新娘”意象在视觉上相互呼应，因此常被社区拿来讨论阿花与武器之间的关联。但名称相近不等于设定同源，官方没有给出直接说明。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '译名提示',
        text: '英文名 Scarlet Wraithblade 相对稳定；中文“红妆鬼斩”来自媒体与演示整理，最终以游戏内文本为准。',
      },
    ],
    related: ['weapon-white-python', 'char-ahua', 'arsenal-overview'],
  },
  {
    id: 'weapon-residual-steel',
    section: 'arsenal',
    title: '残钢刃',
    subtitle: '残损之钢',
    summary:
      '演示资料中出现的“残钢刃”，以破损钢铁的意象命名。当前只有名称与亮相记录，招式细节待补充。',
    tags: ['残钢刃', '主武器', '演示'],
    status: 'demo',
    facts: [
      { label: '类别', value: '主武器' },
      { label: '公开记录', value: '演示亮相' },
      { label: '招式细节', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '“残钢”暗示一把不完整、被反复修补的刀。公开演示中的存在感主要来自材质与挥砍反馈，而不是已公开的完整招式表。',
      },
      {
        type: 'paragraph',
        text: '本条不把“残钢”解释为某段剧情的隐喻。武器背景需要官方文本或游戏内档案支撑。',
      },
    ],
    related: ['weapon-fool-remnant', 'arsenal-overview'],
  },
  {
    id: 'weapon-fool-remnant',
    section: 'arsenal',
    title: '痴者残剑',
    subtitle: '痴与残',
    summary:
      '公开演示中出现的残剑类武器，名称带有“痴者”的叙事意味。是否与特定角色或支线绑定，尚待确认。',
    tags: ['痴者残剑', '主武器', '演示'],
    status: 'demo',
    facts: [
      { label: '类别', value: '残剑 / 主武器' },
      { label: '公开记录', value: '演示亮相' },
      { label: '角色关联', value: '待确认' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '“痴者”二字让这把残剑比普通兵器更像一段人物注脚，但公开资料没有说明“痴者”是谁。站内不把它直接归给某位已公布角色。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '待补充',
        text: '名称、类别与亮相可确认；招式、获取方式与背景故事均待官方或游戏内文本补充。',
      },
    ],
    related: ['weapon-residual-steel', 'weapon-giant-axe', 'arsenal-overview'],
  },
  {
    id: 'weapon-giant-axe',
    section: 'arsenal',
    title: '巨凶斧',
    subtitle: '重器的压迫',
    summary:
      '重型斧类武器的公开亮相记录。重武器通常意味着更慢的出手与更高的单次压制，但本作的具体手感与招式需以正式版为准。',
    tags: ['巨凶斧', '重武器', '主武器', '演示'],
    status: 'demo',
    facts: [
      { label: '类别', value: '重型斧' },
      { label: '公开记录', value: '演示亮相' },
      { label: '手感描述', value: '以正式版为准' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '在一套强调切换与连段的系统里，重型武器的价值通常不在速度，而在破防、范围与单次收益。巨凶斧的名字也说明它不打算走灵巧路线。',
      },
      {
        type: 'paragraph',
        text: '不过“通常”不等于“本作一定如此”。本条不提供伤害、削韧或帧数结论，只记录武器名与重型定位。',
      },
    ],
    related: ['weapon-chasing-sickle', 'arsenal-shaqi', 'arsenal-overview'],
  },
  {
    id: 'weapon-chasing-sickle',
    section: 'arsenal',
    title: '追命锁镰',
    subtitle: '锁链所及之处',
    summary:
      '锁镰类武器，名称与首领“追命”相近，二者是否存在直接关联尚无官方说明。媒体体验中可见其攻击范围与牵制特性。',
    tags: ['追命锁镰', '锁镰', '主武器', '媒体体验'],
    status: 'hands-on',
    facts: [
      { label: '类别', value: '锁镰' },
      { label: '关联首领', value: '追命（名称相近，关系待确认）' },
      { label: '战斗特征', value: '范围 / 牵制（媒体体验）' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '锁镰的魅力在于距离欺诈：看似安全的站位，可能仍在链条的覆盖范围内。媒体体验提到它具备牵制与范围压制的特征，这与双武器切换的节奏可以形成互补。',
      },
      {
        type: 'paragraph',
        text: '“追命锁镰”与首领“追命”共享名称，是很自然的联想，但官方没有确认二者同源。本条只记录名称与体验层面的战斗特征。',
      },
    ],
    related: ['boss-chasing', 'weapon-giant-axe', 'arsenal-overview'],
  },
  {
    id: 'arsenal-phantom',
    section: 'arsenal',
    title: '影之武装',
    subtitle: '25 种特殊武装',
    summary:
      '25 种可装备的特殊武装，兼具战斗与探索功能。部分路径需要对应的影之武装能力才能打开，形成“以武具为钥匙”的箱庭结构。',
    tags: ['影之武装', '25', '能力锁', '探索'],
    status: 'confirmed',
    facts: [
      { label: '数量', value: '25 种（2026-08 公开）' },
      { label: '功能', value: '战斗 / 探索' },
      { label: '能力锁', value: '部分路径需要对应能力' },
      { label: '获取方式', value: '待补充' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '影之武装是《影之刃零》区别于传统武器库的关键设计。它们不只是“另一把刀”，而是带有特殊效果的能力模块；其中一部分可以打开原本无法通过的路径，把战斗成长与地图探索绑在一起。',
      },
      {
        type: 'paragraph',
        text: '这种设计天然鼓励回访：先记住一扇打不开的门，等拿到对应武装后再回来。它也让“收集”拥有了空间意义，而不只是数值列表加一。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '数量与获取',
        text: '“25 种”来自 2026 年 8 月的公开介绍。具体武装名称、获取顺序与能力锁分布，站内暂不逐一列举，避免把演示片段当成完整清单。',
      },
    ],
    related: ['gameplay-ability-gates', 'arsenal-overview', 'gameplay-exploration'],
  },
  {
    id: 'arsenal-forge',
    section: 'arsenal',
    title: '首领武器与重铸',
    subtitle: '打败他，然后拿起他的兵器',
    summary:
      '击败首领可获得其武器，部分武器会改变战斗方式并解锁新的探索路径。武器重铸会返还投入材料，降低试错成本。',
    tags: ['首领武器', 'Boss武器', '重铸', '材料返还', '探索'],
    status: 'confirmed',
    featured: true,
    facts: [
      { label: '获取方式', value: '击败首领' },
      { label: '战斗作用', value: '改变战斗方式' },
      { label: '探索作用', value: '解锁新路径' },
      { label: '重铸', value: '返还投入材料' },
      { label: '公开来源', value: 'PlayStation Blog 2026-10-28' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '首领武器不是奖杯柜里的纪念品。2026 年 10 月 28 日的 PlayStation Blog 专门介绍了这套设计：击败首领后，玩家可以获得与其战斗风格相关的武器，而这些武器又会反过来改变探索的可能性。',
      },
      {
        type: 'paragraph',
        text: '“改变探索”是这套系统的关键。若某把首领武器能处理特定地形或机关，那么战斗胜利就不只是数值变强，而是地图权限扩大。重铸返还材料的设计则鼓励玩家尝试不同武器，而不必担心一次投入无法回头。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '联动关系',
        text: '首领武器、影之武装与能力锁之间存在交叉，但并非所有锁都由首领武器打开。具体对应关系以正式版为准。',
      },
    ],
    links: [
      {
        label: 'PlayStation Blog · 首领武器如何改变战斗与探索',
        href: SOURCE_URLS.ps2026October,
        note: '2026-10-28',
      },
    ],
    related: ['world-bosses', 'news-boss-weapons', 'arsenal-overview', 'gameplay-ability-gates'],
  },
];
