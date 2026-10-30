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
      '正式版提供 30 余种主武器与 25 种「影之武装」。魂可同时携带两把主武器并在战斗中切换，切换会回复杀气；武器既是战斗风格，也是探索开路的手段。本站已收录 50 把武器的完整面板。',
    tags: ['武器', '影之武装', '双主武器', '杀气', '暗源', '30+', '25'],
    status: 'confirmed',
    featured: true,
    facts: [
      { label: '主武器', value: '30 余种' },
      { label: '影之武装', value: '25 种（2026-08 官方口径）' },
      { label: '本站已收录', value: '50 把武器的完整面板（主武器 23 / 影之武装 27）' },
      { label: '携带方式', value: '同时携带两把主武器' },
      { label: '切换收益', value: '回复杀气' },
      { label: '主武器资源', value: '杀气 / 精纯杀气' },
      { label: '影之武装资源', value: '暗源' },
      { label: '部分来源', value: '击败头目后获取' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '《影之刃零》的武器系统不是单纯的数值升级。主武器决定近身战斗的节奏与距离，影之武装则提供更特殊的攻击、控制或探索能力，两者使用不同的战斗资源：主武器围绕杀气与精纯杀气，影之武装消耗暗源。公开资料给出的规模是 30 余种主武器与 25 种影之武装；社区 Wiki 的页面数更多，差额来自「铸魂」派生形态。',
      },
      {
        type: 'paragraph',
        text: '魂可同时携带两把主武器，并在连段中切换。切换不只是换一套招式，还会回复杀气——这让「换武器」从菜单操作变成需要主动规划的战斗资源循环。玩家可以在压制、续航与破防之间做取舍。',
      },
      { type: 'heading', text: '四个互相咬合的系统' },
      {
        type: 'list',
        items: [
          '主武器：承担主要输出与招式派生，存在明显的手感差异。',
          '影之武装：数量较少但功能更特殊，消耗暗源，部分能力用于打开探索路径。',
          '杀气 / 精纯杀气：连接攻击、招架与爆发的资源，切换武器可以回复。',
          '铸魂与逆炼：把武器转为更强的派生形态，或用逆炼符无损重置等级。',
        ],
      },
      { type: 'heading', text: '武器面板怎么看' },
      {
        type: 'paragraph',
        text: '游戏内武器卡上的核心数值是「伤害能力」与「破防能力」，部分武器不提供破防面板，而以「异常效果」替代（如残钢刃的流血）。影之武装的召唤类则改用「召唤物生命 / 召唤物伤害」，辅助类会出现「生命恢复 / 杀气恢复」。本站武器条目完整收录了 Lv.1 与 Lv.30 两端的数值、二周目「轮回」档位、连招段数、绝技、铸魂与 30 级升级材料。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '数值口径',
        text: '武器面板为社区实测整理，随版本平衡调整；不同难度的敌人血量与韧性也会影响「体感强弱」。横向比较时请以同一版本、同一难度为准。',
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
    title: '杀气、精纯杀气与暗源',
    subtitle: '两套资源，一条节奏',
    summary:
      '主武器的核心资源是杀气与高阶的精纯杀气（Power Surge），影之武装则消耗「暗源」。攻击、招架与处决改变杀气流向，切换主武器可回复杀气；暗源独立结算，决定影之武装能用几次。',
    tags: ['杀气', '精纯杀气', 'Power Surge', '暗源', '绝技', '招架', '闪避', '格挡'],
    status: 'community',
    facts: [
      { label: '主武器资源', value: '杀气' },
      { label: '高阶资源', value: '精纯杀气 / Power Surge' },
      { label: '绝技消耗', value: '1 点精纯杀气' },
      { label: '杀气连招', value: '可接在任意段数的普通连招后' },
      { label: '杀气上限成长', value: '杀气琥珀：永久 +10%（碎片 4 合 1）' },
      { label: '影之武装资源', value: '暗源' },
      { label: '影之武装强化', value: '残魂星火（击杀杂兵概率获得）' },
      { label: '防御动作', value: '格挡 / 闪避 / 完美招架' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '本作其实有两套资源，旧版只写了其中一套。主武器用的是杀气：进攻可以积攒，招架与处决会改变它的流向，高阶的「精纯杀气 / Power Surge」对应更具爆发力的战斗阶段。影之武装用的是「暗源」：它不在杀气条上，而是单独结算，决定你还能放出几次武装技能。',
      },
      {
        type: 'paragraph',
        text: '从武器卡的实际写法可以看清两个固定接口：其一，每把武器都有一条「杀气连招」，可接在任意段数的普通攻击之后，杀气充足时自动升级为强化版，伤害与破防更高；其二，每把武器的绝技固定消耗 1 点精纯杀气，且绝大多数标注「无法被敌人防御」。',
      },
      {
        type: 'paragraph',
        text: '防御端提供格挡、闪避与完美招架。敌人的白光攻击可以格挡，精确格挡会触发「鬼步」；红光攻击不能格挡，只能精确闪避。打空敌人杀气槽会让其破防、受到更高伤害——所以压制在本作是「把对方的资源打没」，而不是把他打得后仰。',
      },
      {
        type: 'paragraph',
        text: '成长线上，杀气琥珀永久提升 10% 杀气上限，黑石永久提升 10% 攻击力与破防力，两者都由四块碎片合成一枚。这也是为什么探索收集在本作里不是可选内容：它们直接改写战斗资源的上限。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '术语说明',
        text: '「精纯杀气 / Power Surge」为公开资料中的对应表述，「暗源」为影之武装的资源名。两者目前均缺少官方中文数值说明，站内不提供帧数或倍率数据。',
      },
    ],
    related: ['arsenal-overview', 'gameplay-combat-basics', 'gameplay-collectibles', 'arsenal-phantom'],
  },
  {
    id: 'arsenal-phantom',
    section: 'arsenal',
    title: '影之武装',
    subtitle: '战斗之外的第二种解法',
    summary:
      '与主武器并列的第二套武具，分为破坏、武学、奇门、远程、召唤五类，消耗「暗源」。除战斗外，部分影之武装自带开路能力，多数标注「拥有即可发动，无须装备」。',
    tags: ['影之武装', '破坏', '武学', '奇门', '远程', '召唤', '暗源', '能力锁'],
    status: 'community',
    facts: [
      { label: '官方口径', value: '25 种（2026-08）' },
      { label: '社区页面', value: '40 余个（含铸魂派生）' },
      { label: '五大分类', value: '破坏 / 武学 / 奇门 / 远程 / 召唤' },
      { label: '资源', value: '暗源' },
      { label: '强化材料', value: '残魂星火（击杀杂兵概率获得）' },
      { label: '功能', value: '战斗 / 探索开路' },
      { label: '开路能力', value: '部分标注「拥有即可，无须装备」' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '影之武装是《影之刃零》区别于传统武器库的关键设计。它们不只是「另一把刀」，而是带有特殊效果的能力模块；其中一部分可以打开原本无法通过的路径，把战斗成长与地图探索绑在一起。',
      },
      {
        type: 'paragraph',
        text: '分类上，影之武装可分为破坏（重击型）、武学（技巧型）、奇门（异形兵刃）、远程与召唤五类。召唤类是其中结构最特殊的一支：面板不写伤害与破防，而写「召唤物生命 / 召唤物伤害」，例如剑客召集令（1400→5460 生命、20→78 伤害）、操偶铃铛（1700→6630 / 20→78）。辅助型的虚空华扇则写「生命恢复 / 杀气恢复」。',
      },
      {
        type: 'paragraph',
        text: '这类能力大多标注为「拥有便可发动（无须装备）」，意味着收集本身就是解锁地图权限，而不是占用一个战斗槽位。这种设计天然鼓励回访：先记住一扇打不开的门，等拿到对应武装后再回来。',
      },
      {
        type: 'paragraph',
        text: '资源上，影之武装消耗的是「暗源」，与主武器的杀气分开结算；强化用的「残魂星火」则由击杀杂兵概率掉落。也就是说，想走武装流，就得打杂兵攒星火——这让清场从拖延变成资源回收。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '数量与分类',
        text: '「25 种」来自 2026 年 8 月的公开介绍；社区 Wiki 的页面数更多，差额主要为铸魂派生形态（如催心琵琶→幻术琵琶、操偶铃铛→深渊铃铛）。分类名称沿用社区整理，官方中文定名以游戏内为准。',
      },
    ],
    related: ['gameplay-ability-gates', 'arsenal-overview', 'world-enemies', 'arsenal-forge'],
  },
  {
    id: 'arsenal-forge',
    section: 'arsenal',
    title: '升级、铸魂与逆炼',
    subtitle: '30 级、铸魂变体与无损重置',
    summary:
      '武器最高 30 级，消耗意识尘埃与金属、溶剂逐级强化，每 5 级解锁一条特性；部分武器可「铸魂」为派生形态；使用「逆炼符」可无损重置武器等级并返还投入材料。',
    tags: ['武器升级', '铸魂', '逆炼符', '材料返还', '意识尘埃', '镜花水月'],
    status: 'community',
    featured: true,
    facts: [
      { label: '等级上限', value: '30 级' },
      { label: '基础消耗', value: '意识尘埃 + 金属 + 溶剂' },
      { label: '11 级起', value: '抛光金属 + 浓缩溶剂' },
      { label: '21 级起', value: '无瑕金属 + 熔合万物之溶剂（需在镜花水月升级）' },
      { label: '特性节点', value: 'Lv.5 / 10 / 15 / 20 / 25 / 30' },
      { label: '铸魂', value: '专属材料 + 5000 意识尘埃，转为派生形态' },
      { label: '重置', value: '逆炼符：无损重置等级并返还材料' },
    ],
    body: [
      { type: 'heading', text: '三个层级的强化' },
      {
        type: 'list',
        ordered: true,
        items: [
          '等级强化：消耗意识尘埃、金属（铸造 / 抛光 / 无瑕）与溶剂（普通 / 浓缩 / 熔合万物）。1—10 级用基础材料，11—20 级换为抛光系，21—30 级换为无瑕系，且需要前往「镜花水月」完成升级。',
          '特性解锁：Lv.5、10、15、20、25、30 各解锁一条特性。前中期多为数值或机制补充，Lv.25 往往是一次质变（残钢刃的「癫狂血刃」、红妆鬼斩的「火照黄泉」都在这一档）。',
          '铸魂：消耗该武器的专属材料（如残钢刃需「铁杀面具」）与 5000 意识尘埃，把武器转化为更强的派生形态，例如黑伤→黑魔伤、催心琵琶→幻术琵琶、长形黑伤→炽刃、操偶铃铛→深渊铃铛、痴者残剑→痴者醉剑。',
        ],
      },
      { type: 'heading', text: '逆炼符：无损试错' },
      {
        type: 'paragraph',
        text: '武器等级可以用「逆炼符」无损重置并返还升级资源。注意这是游戏内的道具名，不是「重铸」——旧版条目把两者混为一谈，属于术语错误。它的意义在于改变资源策略：与其在开荒期死守一把武器，不如按章节需求调整投入。配合「切换武器回复杀气」的机制，中后期围绕两把互补武器的构筑是可行的常规解法。',
      },
      { type: 'heading', text: '头目武器' },
      {
        type: 'paragraph',
        text: '大量主武器与影之武装来自头目战：击败新娘阿花取得红妆鬼斩、癫狂暴徒残钢取得残钢刃、追命取得追命锁镰、双蛇夫人白赤练取得白蟒赤练、剑痴花千笑取得痴者残剑、斧老大彭猛取得巨凶斧。2026 年 10 月 28 日的 PlayStation Blog 也专门介绍了这套设计——头目武器不只是战利品，部分还会反过来解锁新的探索路径。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '数值来源',
        text: '本页的等级档位、材料梯度与铸魂规则来自社区 Wiki 对武器升级模板的整理；具体到某把武器的每一级消耗，可在对应武器条目的「升级材料」中查看。',
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
