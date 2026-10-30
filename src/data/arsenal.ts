import type { WikiEntry } from '../types/wiki';
import { SOURCE_URLS } from './sourceLinks';
import { weaponEntries } from './weapons';

/** 系统与机制类条目，具体武器见 weapons.ts。 */
const mechanicEntries: WikiEntry[] = [
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
      { label: '影之武装', value: '25 种（2026-08 官方口径）' },
      { label: '本站已收录', value: '43 把武器的完整面板' },
      { label: '携带方式', value: '同时携带两把主武器' },
      { label: '切换收益', value: '回复杀气' },
      { label: '部分来源', value: '击败首领后获取' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '《影之刃零》的武器系统不是单纯的数值升级。主武器决定近身战斗的节奏与距离，影之武装则提供更特殊的攻击、控制或探索能力。公开资料给出的规模是 30 余种主武器与 25 种影之武装；社区 Wiki 目前已收录 40 个影之武装页面，差额来自“铸魂”派生形态。',
      },
      {
        type: 'paragraph',
        text: '魂可同时携带两把主武器，并在连段中切换。切换不只是换一套招式，还会回复杀气——这让“换武器”从菜单操作变成需要主动规划的战斗资源循环。玩家可以在压制、续航与破防之间做取舍。',
      },
      { type: 'heading', text: '三个互相咬合的系统' },
      {
        type: 'list',
        items: [
          '主武器：承担主要输出与招式派生，存在明显的手感差异。',
          '影之武装：数量较少但功能更特殊，部分能力用于打开探索路径。',
          '杀气：连接攻击、招架与爆发的资源，切换武器可以回复。',
        ],
      },
      { type: 'heading', text: '武器面板怎么看' },
      {
        type: 'paragraph',
        text: '游戏内武器卡上的两块核心数值是“伤害能力”与“破防能力”，部分武器不提供破防面板，而以“异常效果”替代（如残钢刃的流血、烈焰狮头的灼烧系效果）。本站武器条目完整收录了 Lv.1 与 Lv.30 两端的数值、二周目“轮回”档位、连招段数、绝技、铸魂与 30 级升级材料。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '数值口径',
        text: '武器面板为社区实测整理，随版本平衡调整；不同难度的敌人血量与韧性也会影响“体感强弱”。横向比较时请以同一版本、同一难度为准。',
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
      { label: 'BWIKI · 主武器图鉴', href: SOURCE_URLS.bwikiWeapons, note: '社区实测面板' },
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
    tags: ['杀气', '精纯杀气', 'Power Surge', '绝技', '招架', '闪避', '格挡'],
    status: 'community',
    facts: [
      { label: '基础资源', value: '杀气' },
      { label: '高阶资源', value: '精纯杀气 / Power Surge' },
      { label: '绝技消耗', value: '1 点精纯杀气' },
      { label: '杀气连招', value: '可接在任意段数的普通连招后' },
      { label: '回复手段', value: '切换武器、战斗行为' },
      { label: '防御动作', value: '格挡 / 闪避 / 完美招架' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '杀气是《影之刃零》战斗循环的核心词。它既是资源，也是节奏：进攻可以积攒，招架与处决会改变它的流向，而高阶的“精纯杀气 / Power Surge”则对应更具爆发力的战斗阶段。',
      },
      {
        type: 'paragraph',
        text: '从武器卡的实际写法可以看清两个固定接口：其一，每把武器都有一条“杀气连招”，可接在任意段数的普通攻击之后，杀气充足时自动升级为强化版，伤害与破防更高；其二，每把武器的绝技固定消耗 1 点精纯杀气，且绝大多数标注“无法被敌人防御”。',
      },
      {
        type: 'paragraph',
        text: '防御端提供格挡、闪避与完美招架。公开演示强调“完美招架”的收益，但它不是无风险的万能键：时机、敌人招式与后续资源都需要判断。不同武器的切换会回复杀气，这让双武器配置具有明确的战术意义。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '术语说明',
        text: '“精纯杀气 / Power Surge”是公开资料中的对应表述，官方中文最终译名与具体数值以正式版教学为准。本条标记为“社区实测”，不提供帧数或倍率数据。',
      },
    ],
    related: ['arsenal-overview', 'gameplay-difficulty', 'char-hun', 'news-state-of-play'],
  },
  {
    id: 'arsenal-phantom',
    section: 'arsenal',
    title: '影之武装',
    subtitle: '战斗之外的第二种解法',
    summary:
      '与主武器并列的第二套武具，分为破坏、武学、奇门、远程、召唤五类。除战斗外，部分影之武装自带开路能力，未装备也能生效。',
    tags: ['影之武装', '破坏', '武学', '奇门', '远程', '召唤', '能力锁'],
    status: 'community',
    facts: [
      { label: '官方口径', value: '25 种（2026-08）' },
      { label: '社区已收录', value: '40 个页面（含铸魂派生）' },
      { label: '五大分类', value: '破坏 / 武学 / 奇门 / 远程 / 召唤' },
      { label: '功能', value: '战斗 / 探索开路' },
      { label: '开路能力', value: '部分标注“拥有即可，无须装备”' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '影之武装是《影之刃零》区别于传统武器库的关键设计。它们不只是“另一把刀”，而是带有特殊效果的能力模块；其中一部分可以打开原本无法通过的路径，把战斗成长与地图探索绑在一起。',
      },
      {
        type: 'paragraph',
        text: '分类上，影之武装可分为破坏（重击型）、武学（技巧型）、奇门（异形兵刃）、远程与召唤五类。它们的面板同样是“伤害能力 + 破防 / 异常效果”，但绝技与被动更偏向功能性，例如长柄金瓜的“破地通途”可击碎地面封锁物，猎人的链镰的“钩锁飞渡”可钩住远处锚点移动。',
      },
      {
        type: 'paragraph',
        text: '这类能力大多标注为“拥有便可发动（无须装备）”，意味着收集本身就是解锁地图权限，而不是占用一个战斗槽位。这种设计天然鼓励回访：先记住一扇打不开的门，等拿到对应武装后再回来。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '数量与分类',
        text: '“25 种”来自 2026 年 8 月的公开介绍；社区 Wiki 现有 40 个页面，差额主要为铸魂派生形态（如催心琵琶→幻术琵琶、操偶铃铛→深渊铃铛）。分类名称沿用社区整理，官方中文定名以游戏内为准。',
      },
    ],
    related: ['gameplay-ability-gates', 'arsenal-overview', 'gameplay-exploration', 'arsenal-forge'],
  },
  {
    id: 'arsenal-forge',
    section: 'arsenal',
    title: '武器升级、铸魂与重铸',
    subtitle: '30 级、铸魂变体与无损重置',
    summary:
      '武器最高 30 级，消耗意识尘埃与金属、溶剂逐级强化，每 5 级解锁一条特性；部分武器可“铸魂”为派生形态；等级可无损重置并返还材料。',
    tags: ['武器升级', '铸魂', '重铸', '材料返还', '意识尘埃', '逆炼符'],
    status: 'community',
    featured: true,
    facts: [
      { label: '等级上限', value: '30 级' },
      { label: '基础消耗', value: '意识尘埃 + 金属 + 溶剂' },
      { label: '11 级起', value: '抛光金属 + 浓缩溶剂' },
      { label: '21 级起', value: '无瑕金属 + 熔合万物之溶剂（需在镜花水月升级）' },
      { label: '特性节点', value: 'Lv.5 / 10 / 15 / 20 / 25 / 30' },
      { label: '铸魂', value: '用专属材料+5000 意识尘埃转为派生形态' },
      { label: '重置', value: '可无损返还升级资源' },
    ],
    body: [
      { type: 'heading', text: '三个层级的强化' },
      {
        type: 'list',
        ordered: true,
        items: [
          '等级强化：消耗意识尘埃、金属（铸造 / 抛光 / 无瑕）与溶剂（普通 / 浓缩 / 熔合万物）。1—10 级用基础材料，11—20 级换为抛光系，21—30 级换为无瑕系，且需要前往“镜花水月”完成升级。',
          '特性解锁：Lv.5、10、15、20、25、30 各解锁一条特性。前中期多为数值或机制补充，Lv.25 往往是一次质变（残钢刃的“癫狂血刃”、红妆鬼斩的“火照黄泉”都在这一档）。',
          '铸魂：消耗该武器的专属材料（如残钢刃需「铁杀面具」）与 5000 意识尘埃，把武器转化为更强的派生形态，例如黑伤→黑魔伤、催心琵琶→幻术琵琶、长形黑伤→炽刃。',
        ],
      },
      { type: 'heading', text: '无损试错' },
      {
        type: 'paragraph',
        text: '武器等级可无损重置并返还升级资源，这直接改变了资源策略：与其在开荒期死守一把武器，不如按章节需求调整投入。配合“切换武器回复杀气”的机制，中后期围绕两把互补武器的构筑是可行的常规解法。',
      },
      { type: 'heading', text: '首领武器' },
      {
        type: 'paragraph',
        text: '大量主武器与影之武装来自首领战：击败阿花取得红妆鬼斩、击败残钢取得残钢刃、击败追命取得追命锁镰与链镰。2026 年 10 月 28 日的 PlayStation Blog 也专门介绍了这套设计——首领武器不只是战利品，部分还会反过来解锁新的探索路径。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '数值来源',
        text: '本页的等级档位、材料梯度与铸魂规则来自社区 Wiki 对武器升级模板的整理；具体到某把武器的每一级消耗，可在对应武器条目的“升级材料”中查看。',
      },
    ],
    links: [
      {
        label: 'PlayStation Blog · 首领武器如何改变战斗与探索',
        href: SOURCE_URLS.ps2026October,
        note: '2026-10-28',
      },
      { label: 'BWIKI · 武器升级', href: SOURCE_URLS.bwikiUpgrade, note: '升级规则与材料' },
    ],
    related: ['world-bosses', 'news-boss-weapons', 'arsenal-overview', 'gameplay-ability-gates'],
  },
];

export const arsenalEntries: WikiEntry[] = [...mechanicEntries, ...weaponEntries];
