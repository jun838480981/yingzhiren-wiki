# 影之刃零 · 影境档案

> 一个关于《影之刃零》（Phantom Blade Zero）的**非官方中文主题 Wiki**，基于网络公开资料整理而成。

- 仓库：<https://github.com/jun838480981/yingzhiren-wiki>
- 在线站点（GitHub Pages）：<https://jun838480981.github.io/yingzhiren-wiki/>

---

## 一、这是什么

本站把散落在官网、官方商店页、PlayStation Blog、社区 Wiki 与媒体攻略中的《影之刃零》信息，
整理成一份**可检索、可筛选、可持续维护**的中文资料库，共 **96 条档案**，覆盖八大板块：

| 板块 | 说明 | 条目数 |
| --- | --- | --- |
| 游戏概述 | 游戏定位、世界框架、平台与发售信息 | 3 |
| 角色 | 魂、魔渊、阿花、荆野与组织群像 | 8 |
| 武器与技能 | 4 条系统条目 + **43 把武器/影之武装的完整面板** | 47 |
| 剧情背景 | 构陷、残心与六十六日的追查 | 3 |
| 地图与敌人 | 八处已公开地名、首领与强敌 | 15 |
| 玩法机制 | 半开放箱庭、支线分支、记忆花、能力锁与难度 | 6 |
| 最新资讯 | 按日期倒序的公开资讯与官方文章摘要 | 4 |
| 资料来源 | 官方链接、社区与媒体来源、资料状态说明与免责声明 | 10 |

### 武器条目的深度

每把武器/影之武装都不是「一句话概述」，而是一张可复核的数据卡：

- 类别（单手 / 双手 / 双持，或影之武装的破坏 / 武学 / 奇门 / 远程 / 召唤）与等级上限
- **伤害能力、破防能力、异常效果**的 Lv.1 与 Lv.30 两端数值
- 二周目「轮回」档位的对应数值
- 普通连招 / 杀气连招段数
- 绝技与武器特殊机制（如石蒜花、流血、斩铁断链）
- 铸魂材料与铸魂后的效果
- Lv.5 / 10 / 15 / 20 / 25 / 30 六条升级特性
- Lv.2—30 逐级升级材料消耗

例如「残钢刃」：伤害 240 → 936（轮回 324 → 1264），异常效果 124 → 482，5 段普攻 + 3 段杀气连招，Lv.25「癫狂血刃」消耗 15% 当前生命换取 3 层【血刃】。

### 资料状态机制

为了避免把传闻写成定论，每条档案都带有一个**资料状态**标签（`src/data/statuses.ts`）：

| 标签 | 含义 |
| --- | --- |
| 已确认 `confirmed` | 可由官方公告、官方商店页或已发售版本直接核实 |
| 公开演示 `demo` | 来自官方演示、预告或实机片段，数值可能与正式版不同 |
| 媒体体验 `hands-on` | 来自媒体试玩或体验报道，属可核实的二手记录 |
| 社区实测 `community` | 社区 Wiki 直接读出的游戏内数据（如武器面板），随版本平衡调整 |
| 媒体整理 `compiled` | 由媒体整理或转述，官方中文定名与细节可能不同 |
| 待补充 `incomplete` | 公开资料有限，只记录可核实部分，不以推测填补空白 |
| 站务说明 `meta` | 本站的编辑规范、免责声明与使用说明 |

---

## 二、技术栈

- **Vite 6** + **React 18** + **TypeScript 5**（仅 2 个运行时依赖）
- 纯 CSS（无 UI 框架），暗色「功夫朋克」主题：黑墨 / 铁锈红 / 铜金 / 宣纸米色
- Hash 路由（自实现，无 react-router），浏览器前进后退可用
- 全站关键词搜索（自实现倒序匹配 + 高亮），支持 `Ctrl/Cmd + K` 与 `/`
- 所有装饰均为 CSS 与内联 SVG，**不使用任何游戏截图或外部图片热链**

---

## 三、快速开始

```bash
npm install     # 安装依赖
npm run dev     # 本地开发，默认 http://127.0.0.1:5173
npm run build   # 类型检查 + 生产构建，输出到 dist/
npm run preview # 本地预览构建产物
```

> 要求 Node.js ≥ 18。

---

## 四、目录结构

```
.
├── index.html                  # 入口 HTML（标题、meta、内联 SVG favicon）
├── vite.config.ts              # Vite 配置（base: './'，便于部署到任意子路径）
├── tsconfig.json
├── package.json
├── .github/
│   └── workflows/
│       └── deploy-pages.yml    # GitHub Pages 自动构建与部署
└── src/
    ├── main.tsx                # React 挂载入口
    ├── App.tsx                 # 路由分发与页面装配
    ├── types/
    │   ├── wiki.ts             # 条目 / 板块 / 资料状态的类型定义
    │   └── route.ts            # 路由类型
    ├── data/                   # ★ 内容层：所有资料都在这里，改内容不需要动组件
    │   ├── index.ts            # 聚合导出 + 查询函数（按板块、ID、关联、最新资讯）
    │   ├── sections.ts         # 八大板块定义
    │   ├── statuses.ts         # 资料状态标签与文案
    │   ├── sourceLinks.ts      # 统一维护的来源 URL 与发售日期常量
    │   ├── overview.ts         # 游戏概述
    │   ├── characters.ts       # 角色
    │   ├── arsenal.ts          # 武器系统：总览、杀气、影之武装、升级与铸魂
    │   ├── weapons.ts          # 43 把武器/影之武装的面板数据（结构化生成，勿手改结构）
    │   ├── story.ts            # 剧情背景
    │   ├── world.ts            # 地图与敌人
    │   ├── gameplay.ts         # 玩法机制
    │   ├── news.ts             # 最新资讯
    │   └── sources.ts          # 资料来源与站务说明
    ├── lib/
    │   ├── router.ts           # hash 解析、跳转、搜索链接生成
    │   ├── search.ts           # 关键词匹配与评分
    │   └── format.ts           # 日期等格式化
    ├── hooks/
    │   ├── useHashRoute.ts     # hashchange 订阅
    │   ├── useFocusTrap.ts     # 弹层焦点管理
    │   └── useLockBodyScroll.ts
    ├── components/             # 导航、侧栏、卡片、搜索弹窗、武器数值面板等
    ├── pages/                  # 首页 / 板块页 / 条目页 / 搜索页 / 404
    └── styles/
        └── global.css          # 主题变量、布局、响应式与无障碍样式
```

---

## 五、如何补充内容

内容层与展示层完全分离，**新增资料通常只需要改 `src/data/`**。

### 1. 新增一条档案

在对应板块文件中追加一个 `WikiEntry` 对象（以 `characters.ts` 为例）：

```ts
import type { WikiEntry } from '../types/wiki';
import { SOURCE_URLS } from './sourceLinks';

export const characterEntries: WikiEntry[] = [
  {
    id: 'char-example',                 // 全局唯一，建议 板块前缀-英文短名
    section: 'characters',              // 必须是 SectionId 之一
    title: '示例角色',
    subtitle: '一句话定位',
    summary: '列表卡片与搜索结果中显示的摘要。',
    tags: ['标签一', '标签二'],          // 参与搜索
    status: 'hands-on',                 // 见上文资料状态表
    date: '2026-10-29',                 // 资讯条目必填
    facts: [{ label: '身份', value: '示例' }],
    body: [
      { type: 'paragraph', text: '正文段落。' },
      { type: 'heading', text: '小标题' },
      { type: 'list', items: ['要点一', '要点二'] },
      { type: 'note', tone: 'caution', title: '注意', text: '提示内容。' },
      { type: 'note', tone: 'source', title: '资料说明', text: '出处与不确定性。' },
    ],
    links: [{ label: '官方网站', href: SOURCE_URLS.official }],
    related: ['char-hun'],              // 关联条目 id
    featured: true,                     // 可选：首页精选
  },
];
```

可选字段与块类型以 `src/types/wiki.ts` 为准（`paragraph` / `heading` / `list` / `quote` / `note` / `facts`）。

### 2. 新增一个板块

1. 在 `src/types/wiki.ts` 的 `SECTION_IDS` 中加入新 id；
2. 在 `src/data/sections.ts` 中补齐板块定义（序号、汉字数字、标题、英文、描述）；
3. 新建 `src/data/<板块>.ts`，在 `src/data/index.ts` 中导入并并入 `ENTRIES`；
4. 如需图标字形，在 `src/components/SectionGlyph.tsx` 中补一个分支。

### 3. 新增来源链接

统一写入 `src/data/sourceLinks.ts` 的 `SOURCE_URLS`，条目中通过 `SOURCE_URLS.xxx` 引用，
避免同一链接在多处散落、失效后难以同步修改。

### 4. 维护武器面板数据

武器数据集中在 `src/data/weapons.ts`，结构由 `WeaponProfile`（`src/types/wiki.ts`）约束：

```ts
interface WeaponProfile {
  kind: '主武器' | '影之武装';
  category: string;            // 单手武器 / 双手武器 / 双持武器 / 破坏 / 武学 / 奇门 / 远程 / 召唤
  maxLevel: number;
  stats: WeaponStat[];         // 伤害能力 / 破防能力 / 异常效果，含 Lv.1、Lv.30 与轮回档位
  normalCombo?: number;        // 普通连招段数
  surgeCombo?: number;         // 杀气连招段数
  specials?: { name: string; text: string }[];
  soulforge?: { material: string; name: string; effect: string };
  traits?: WeaponTrait[];      // Lv.5 / 10 / 15 / 20 / 25 / 30
  upgrade?: { level: number; cost: string }[];
  note?: string;
}
```

只要条目带 `weapon` 字段，详情页就会自动渲染数值面板（成长表、绝技、铸魂、特性、材料折叠区），
不需要改动页面代码。版本平衡调整后，按 BWIKI 对应页面同步数字即可。

### 编辑原则

- 只写公开资料能支撑的内容，其余标注「待补充」；
- 每条尽量带上可点击的来源链接；
- 媒体整理或译名不确定的内容，必须在正文里写明不确定性；
- 不使用游戏官方图像，也不热链外部图片。

---

## 六、部署

### GitHub Pages（已配置自动部署）

`.github/workflows/deploy-pages.yml` 会在每次推送到 `main` 分支时自动执行
`npm ci` → `npm run build` → 上传 `dist` → 部署到 GitHub Pages。

首次启用（只需一次）：

1. 打开仓库 **Settings → Pages**；
2. **Build and deployment → Source** 选择 **GitHub Actions**；
3. 保存后，到 **Actions** 页签重新运行一次 `Deploy to GitHub Pages` 工作流（或再推一次提交）。

若更希望「从分支部署」，可改为 Source 选择 **Deploy from a branch** → 分支 `gh-pages`、目录 `/ (root)`。
该分支也已在仓库中维护了一份构建产物，可直接生效。

站点地址：<https://jun838480981.github.io/yingzhiren-wiki/>

### 部署到其他平台

构建产物在 `dist/`，是纯静态文件，`vite.config.ts` 中 `base: './'` 使用相对路径，
可直接上传到任意静态托管（对象存储、Nginx、Vercel、Netlify 等）的**任意子目录**。

---

## 七、主要资料来源

- 官方网站：<https://pbz.s-game.cn/>
- Steam 商店页：<https://store.steampowered.com/app/4115450/Phantom_Blade_Zero/>
- PlayStation Blog（2023-05-24，世界观与制作背景）：
  <https://blog.playstation.com/2023/05/24/phantom-blade-zero-a-new-beginning-in-a-long-journey/>
- PlayStation Blog（2026-08-17，State of Play 战斗与武林世界）：
  <https://blog.playstation.com/2026/08/17/phantom-blade-zero-state-of-play-dives-deep-into-combat-and-the-wulin-world/>
- PlayStation Blog（2026-10-28，首领武器与探索）：
  <https://blog.playstation.com/2026/10/28/phantom-blade-zero-how-boss-weapons-transform-combat-and-exploration/>
- 媒体整理（八大地图，仅作辅助）：<https://new.qq.com/rain/a/20261026A09VVZ00>
- BWIKI · 影之刃零 Wiki（武器面板、升级特性、铸魂、材料的主要来源）：
  <https://wiki.biligame.com/yingzhiren/>
- 游民星空 · 全武器获取方法（2026-10-29，用于交叉验证获取路径）：
  <https://www.gamersky.com/handbook/202610/2235539.shtml>

---

## 八、声明

**本站是非官方粉丝整理的资料站，与灵游坊 S-GAME 及任何权利方均无隶属、授权或合作关系。**

- 站内文字为对公开资料的整理与转述，相关商标、美术、剧情与角色版权归原权利人所有；
- 本站不使用任何游戏官方图像，也不提供盗版、破解或修改器相关资源；
- 所有信息以官方公告与已发售版本为准，本站内容仅供参考，可能随官方更新而变化；
- 若发现事实错误或希望补充、更正资料，欢迎通过 Issues 或 Pull Request 提出。
