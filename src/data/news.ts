import type { WikiEntry } from '../types/wiki';
import { SOURCE_URLS } from './sourceLinks';

export const newsEntries: WikiEntry[] = [
  {
    id: 'news-reviews',
    section: 'news',
    title: '媒体评分解禁：MC 88，IGN 9 分',
    subtitle: '2026-10-29 · 口碑汇总',
    summary:
      'Metacritic PC 版均分 88（PS5 版 87），OpenCritic 均分 91；IGN 给出 9/10，IGN 中国给出 10/10。评价集中在战斗手感、头目战设计与演出，批评多指向叙事保守与技术小瑕疵。',
    tags: ['评分', 'Metacritic', 'IGN', 'OpenCritic', '口碑', '评测'],
    status: 'compiled',
    date: '2026-10-29',
    featured: true,
    facts: [
      { label: 'Metacritic PC', value: '88' },
      { label: 'Metacritic PS5', value: '87' },
      { label: 'OpenCritic', value: '91' },
      { label: 'IGN', value: '9 / 10' },
      { label: 'IGN 中国', value: '10 / 10（媒体整理）' },
      { label: '常见批评', value: '叙事偏保守 / 空气墙 / 技术小瑕疵' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '评分解禁后，本作在 Metacritic 拿到 PC 版 88 分、PS5 版 87 分，OpenCritic 均分 91 分。IGN 给出 9/10，评语称其为「一款顺滑得难以置信的动作游戏，充满令人难忘的 Boss 战、引人入胜的战斗，以及无尽的张扬气派」。',
      },
      {
        type: 'paragraph',
        text: '好评的落点相当集中：战斗手感与连段流畅度、头目战的演出与设计、以及「功夫朋克」这套视觉语言的自洽。争议则主要在叙事——有评测认为故事走向偏保守；也有评测提到存在少量空气墙与技术瑕疵，官方确认会在正式版与补丁中处理。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '分数会变',
        text: 'Metacritic 与 OpenCritic 的均分会随收录评测数量变化，本条记录的是解禁首日（10 月 29 日）的数值。「IGN 中国 10/10」与「多结局设定」的表述来自媒体转述，未逐条核对原文。',
      },
    ],
    links: [
      { label: '证券时报 · 首日市场与评分', href: SOURCE_URLS.pressLaunch, note: '2026-10-29' },
    ],
    related: ['news-launch-performance', 'overview-game', 'world-bosses', 'source-press-launch'],
  },
  {
    id: 'news-launch-performance',
    section: 'news',
    title: '首日表现：Steam 峰值 43 万，登顶全球畅销榜',
    subtitle: '2026-10-29 · 市场数据',
    summary:
      '发售不足一小时 Steam 同时在线突破 30 万，当日 13:30 峰值站上 43 万，稳居 Steam 全球畅销榜第一。预售阶段（10 月 27—28 日）双平台累计预购约 85 万份，预购收入约 2.87 亿元。',
    tags: ['销量', 'Steam', '在线人数', '畅销榜', '预购', '市场'],
    status: 'compiled',
    date: '2026-10-29',
    facts: [
      { label: '首小时在线', value: '突破 30 万' },
      { label: '首日峰值', value: '约 43 万（SteamDB，13:30）' },
      { label: '畅销榜', value: 'Steam 全球第一' },
      { label: '预购量', value: '约 85 万份（Alinea Analytics 估算）' },
      { label: '预购收入', value: '约 2.87 亿元人民币（估算）' },
      { label: '对照', value: '《黑神话：悟空》首发一小时破 100 万' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '发售不到一小时，Steam 同时在线人数就突破 30 万；到当日 13:30，第三方监测显示峰值站上 43 万，并稳居 Steam 全球畅销榜第一。对一个没有《西游记》级别 IP 加持的原创武侠题材来说，这是相当高的起点。',
      },
      {
        type: 'paragraph',
        text: '预售阶段的数字同样可观：第三方分析机构估算，10 月 27 日至 28 日 Steam 与 PS5 双平台累计预购约 85 万份，预购收入折合人民币约 2.87 亿元。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '数据口径',
        text: '在线人数来自 SteamDB 等第三方监测，预购量来自分析机构估算，均非官方公布。游戏科学创始人冯骥当日的公开支持也被媒体视为热度推手之一。',
      },
    ],
    links: [
      { label: '证券时报 · 登顶全球畅销榜', href: SOURCE_URLS.pressLaunch, note: '2026-10-29' },
      { label: 'Steam 商店页', href: SOURCE_URLS.steam },
    ],
    related: ['news-reviews', 'news-release', 'overview-release', 'source-press-launch'],
  },
  {
    id: 'news-day-one-patch',
    section: 'news',
    title: '首日补丁与驱动警告',
    subtitle: '2026-10-29 · 版本 1.301.524',
    summary:
      '首日补丁 PS5 版 1.301.524、约 2.118GB，PC 版约 5GB：重点优化光追与路径追踪性能、修复已知 Bug。官方同时提示 NVIDIA 621.01 驱动性能不稳，建议回滚到 617.42。',
    tags: ['首日补丁', '1.301.524', '光追', '驱动', 'NVIDIA', '617.42'],
    status: 'confirmed',
    date: '2026-10-29',
    facts: [
      { label: 'PS5 版本号', value: '1.301.524' },
      { label: 'PS5 体积', value: '约 2.118GB' },
      { label: 'PC 体积', value: '约 5GB' },
      { label: '主要内容', value: '光追 / 路径追踪性能优化 + Bug 修复' },
      { label: '驱动建议', value: '回滚至 NVIDIA 617.42（621.01 性能不稳）' },
      { label: 'Steam Deck', value: '尚未通过验证，官方称已大量测试' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '已经预载的玩家需要在启动前先装补丁；没有预载的玩家直接下载的本体就已包含最新版本。补丁的重点是把光线追踪与路径追踪的性能拉回可用区间，同时修复一批已知问题。',
      },
      {
        type: 'paragraph',
        text: '更实用的提醒来自驱动：官方发现 NVIDIA 621.01 驱动在本作中存在性能不稳定的情况，建议清洁安装并回滚到 617.42，等新驱动发布后再升级。这类「官方劝你降级驱动」的情况在 3A 首发里并不少见，但对帧数的影响非常直接。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '画面口径',
        text: '官方强调即便关闭光追，光栅化画面也按美术方向专门打磨过；首日补丁同时改善了这一部分。Steam Deck 尚未通过 Valve 验证。',
      },
    ],
    links: [
      { label: '游民星空 · 首日补丁上线', href: SOURCE_URLS.gamerskyPatch, note: '2026-10-29' },
    ],
    related: ['overview-specs', 'news-release', 'source-steam', 'overview-release'],
  },
  {
    id: 'news-release',
    section: 'news',
    title: '正式发售：影境开门',
    subtitle: '2026-10-29 · 10:00 全球解锁',
    summary:
      '《影之刃零》于 2026 年 10 月 29 日北京时间 10:00 全球同步解锁，登陆 PS5 与 PC（Steam / Epic / WeGame / TapTap）。国区标准版 268 元、豪华版 328 元。',
    tags: ['发售', '2026-10-29', 'PS5', 'PC', 'Steam', '价格'],
    status: 'confirmed',
    date: '2026-10-29',
    facts: [
      { label: '解锁', value: '2026-10-29 10:00（北京）/ 02:00 UTC' },
      { label: '平台', value: 'PS5 / Steam / Epic / WeGame / TapTap' },
      { label: '国区价格', value: '标准版 268 元 / 豪华版 328 元' },
      { label: '状态', value: '已发售' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '等待结束。灵游坊 S-GAME 的暗黑武侠动作冒险游戏《影之刃零》正式发售，影境、魂的六十六日追凶，以及围绕组织首领之死的阴谋，向玩家开放。',
      },
      {
        type: 'paragraph',
        text: '官网以「现已发售」为入口，Steam 与 PlayStation 商店页提供版本、语言与配置信息。全球统一在 02:00 UTC 解锁，对应北京时间上午 10:00；此前 Steam 部分区服页面显示的 10 月 28 日属于时区换算，不是提前开服。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '购买提醒',
        text: '本站不提供购买渠道或激活服务。请通过官方商店购买，并核对所在区服的实际解锁时间。',
      },
    ],
    links: [
      { label: '官方网站 · 影之刃零', href: SOURCE_URLS.official },
      { label: 'Steam 商店页', href: SOURCE_URLS.steam },
    ],
    related: ['overview-release', 'news-day-one-patch', 'overview-game', 'overview-specs'],
  },
  {
    id: 'news-boss-weapons',
    section: 'news',
    title: 'PlayStation Blog：首领武器如何改变战斗与探索',
    subtitle: '2026-10-28 · 发售前一日',
    summary:
      '发售前一日，PlayStation Blog 介绍击败首领后获取武器的设计：Boss 武器不仅改变战斗方式，也会打开新的探索路径；用逆炼符重置等级会返还投入材料。',
    tags: ['首领武器', 'Boss武器', '探索', '逆炼符', 'PlayStation Blog'],
    status: 'confirmed',
    date: '2026-10-28',
    facts: [
      { label: '来源', value: 'PlayStation Blog' },
      { label: '日期', value: '2026-10-28' },
      { label: '主题', value: '首领武器 / 战斗 / 探索' },
      { label: '关键机制', value: '重置等级返还材料（游戏内道具为逆炼符）' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '这篇官方文章把「打 Boss 掉武器」讲成了一套空间设计：某些首领武器会改变玩家与地图的交互方式，让原本不可达的区域出现新走法。战斗奖励因此直接转化为探索权限。',
      },
      {
        type: 'paragraph',
        text: '文章同时提到武器的等级重置会返还投入材料。游戏内的实现是一枚叫「逆炼符」的道具——早期本站把这一步误写成「重铸」，实际「铸魂」是把武器转为派生形态，与重置等级是两件事。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '摘要而非全文',
        text: '本页为资讯摘要，完整设计说明请阅读 PlayStation Blog 原文。',
      },
    ],
    links: [
      {
        label: 'PlayStation Blog · How boss weapons transform combat and exploration',
        href: SOURCE_URLS.ps2026October,
      },
    ],
    related: ['arsenal-forge', 'world-bosses', 'arsenal-overview'],
  },
  {
    id: 'news-state-of-play',
    section: 'news',
    title: 'State of Play：武器、难度与甄子丹',
    subtitle: '2026-08-17 · 系统深入介绍',
    summary:
      '2026 年 8 月 17 日的 State of Play 深入展示战斗系统、难度口径、30+ 主武器与 25 种影之武装，并确认甄子丹参与魔渊的面部与动作捕捉。',
    tags: ['State of Play', '武器', '难度', '甄子丹', '魔渊', '2026-08-17'],
    status: 'confirmed',
    date: '2026-08-17',
    facts: [
      { label: '活动', value: 'State of Play' },
      { label: '日期', value: '2026-08-17' },
      { label: '武器规模', value: '30+ 主武器 / 25 影之武装' },
      { label: '难度口径', value: '发售前英文名 Wayfarer / Hellwalker / Sixty-Six Days' },
      { label: '演员参与', value: '甄子丹 → 魔渊' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '这次 State of Play 是发售前信息密度最高的一次公开介绍。战斗部分展示了双主武器切换、杀气资源的积累与释放，以及格挡、闪避、完美招架构成的防御节奏。',
      },
      {
        type: 'paragraph',
        text: '武器规模被明确为 30 余种主武器与 25 种影之武装；难度则以 Wayfarer、Hellwalker 与 Sixty-Six Days 三个英文口径出现。官方同时确认甄子丹担任创意顾问，并参与魔渊的面部与动作捕捉。',
      },
      {
        type: 'note',
        tone: 'caution',
        title: '难度口径已更新',
        text: '正式版实际为四档中文难度：入阵者、破局者、逆天者与解锁制的「66 天」。本站旧版把英文口径直接当作三档难度，已在「难度与 66 天模式」条目中修正。',
      },
    ],
    links: [
      {
        label: 'PlayStation Blog · State of Play dives deep into combat and the Wulin world',
        href: SOURCE_URLS.ps2026August,
      },
    ],
    related: ['arsenal-overview', 'gameplay-difficulty', 'char-moyuan', 'arsenal-shaqi'],
  },
  {
    id: 'news-delay',
    section: 'news',
    title: '延期 50 天：从 9 月 9 日到 10 月 29 日',
    subtitle: '2026-06-03 · 官方公开信',
    summary:
      '2026 年 6 月 3 日的 State of Play 上，官方宣布发售日由 9 月 9 日推迟至 10 月 29 日。梁其伟公开信说明：升级角色模型、重构场景，并尽量在不依赖光追的前提下保留表现力。',
    tags: ['延期', '梁其伟', '公开信', '2026-06-03', '跳票'],
    status: 'confirmed',
    date: '2026-06-03',
    facts: [
      { label: '原定发售', value: '2026-09-09' },
      { label: '改期后', value: '2026-10-29' },
      { label: '延期时长', value: '50 天' },
      { label: '宣布时间', value: '2026-06-03' },
      { label: '主要原因', value: '升级角色模型 / 重构场景 / 不依赖光追保留表现力' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '这不是一次含糊的「为了保证质量」。公开信把改动讲得很具体：一批角色模型升级到团队能力范围内的最佳；不少场景被重构，让游戏摆脱此前「全然灰暗漆黑」的整体印象，出现更多视觉开阔、敞亮、鲜明的关卡。',
      },
      {
        type: 'paragraph',
        text: '另一个细节后来被证明很关键：这些升级要尽量在不依赖光线追踪的情况下保留表现力，官方随信公布的截图全部是关闭光追、纯光栅化拍的。首发后「中端 PC 也能看」的评价，源头在这里。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '档期背景',
        text: '2026 年下半年档期拥挤（《GTA6》等在年内发售）。梁其伟在公开信中明确表示，延期并非因为其他产品的档期，而是从自身产品情况出发。',
      },
    ],
    links: [
      { label: '新京报 · 延期至 10 月底', href: SOURCE_URLS.bjnewsDelay, note: '2026-06-03' },
    ],
    related: ['overview-history', 'news-release', 'news-state-of-play', 'overview-game'],
  },
  {
    id: 'news-first-look',
    section: 'news',
    title: '初次亮相：一段漫长旅程的新起点',
    subtitle: '2023-05-24 · 官方世界观与制作背景',
    summary:
      'PlayStation Blog 在 2023 年 5 月 24 日刊出制作组来信，首次系统介绍《影之刃零》的世界观、功夫朋克方向与制作背景。',
    tags: ['首次公开', '世界观', '制作背景', 'PlayStation Blog', '2023-05-24'],
    status: 'confirmed',
    date: '2023-05-24',
    facts: [
      { label: '来源', value: 'PlayStation Blog' },
      { label: '日期', value: '2023-05-24' },
      { label: '主题', value: '世界观 / 制作背景' },
      { label: '意义', value: '首次系统公开' },
    ],
    body: [
      {
        type: 'paragraph',
        text: '这篇 2023 年的文章是理解项目起点的重要材料。制作组在其中谈到《影之刃零》的世界观、武术与机械感并置的视觉方向，以及从系列历史走向新项目的制作背景。',
      },
      {
        type: 'paragraph',
        text: '当时公开的内容与 2026 年发售版之间经历了多年开发，具体系统与角色设定可能变化。阅读旧文时，应把它当作「设计意图的起点」，而不是最终版本说明书。',
      },
      {
        type: 'note',
        tone: 'source',
        title: '历史资料',
        text: '本条标记为已确认，指的是文章与日期本身；文中部分设计描述可能已随开发调整。',
      },
    ],
    links: [
      {
        label: 'PlayStation Blog · Phantom Blade Zero: a new beginning in a long journey',
        href: SOURCE_URLS.ps2023,
      },
    ],
    related: ['overview-game', 'story-world', 'source-ps-2023', 'overview-history'],
  },
];
