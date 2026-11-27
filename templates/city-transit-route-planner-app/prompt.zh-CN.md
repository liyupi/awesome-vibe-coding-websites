> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 城市交通与路线规划应用

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一款清爽的瑞士风格响应式移动优先城市地铁与公交出行伴侣 PWA（[BRAND]），面向虚构的海岸城市 [CITY_NAME]。移动端（<768px）使用底部 4 标签栏（Route、Lines、Nearby、Saved）；桌面端渲染分屏交互式 SVG 地铁图 + 行程控制台。不使用虚假手机外壳。

- 受众：日常城市通勤者、导航地铁线路的游客，以及原型设计移动优先寻路 Web 应用的市政交通团队。
- 目标：帮助通勤者在 18 个站点之间规划路线，查看实时倒计时发车信息，并在几秒内保存常用行程。
- 基调：瑞士式精准、清晰无误的颜色编码层级、沉稳可靠。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react (ISC)、@fontsource/inter (OFL)、@fontsource/jetbrains-mono (OFL)
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中本地导入 @fontsource/inter（400、500、600、700）和 @fontsource/jetbrains-mono（400、500、600）。
  - 在 src/data/transitGraph.ts 中建模全部 18 个虚构沿海车站、3 条地铁线路（Blue Bay、Amber Pier、Emerald Ridge）、换乘枢纽，以及真实的基于最短时间 / 最少换乘的路径查找。
  - 将已保存的行程和快捷家庭/工作快捷方式持久化到 localStorage。
  - 绝不绘制虚假的手机边框；在移动端（<768px）和桌面端（>=768px）渲染全视口响应式布局。

## 变量
- [BRAND] — 公交应用名称（默认：“HarborLine”）。虚构的公交伴侣 PWA 名称
- [CITY_NAME] — 虚构的沿海城市（默认：“Port Maris”）。显示在页眉和地图图例中的城市
- [HOME_STATION] — 已保存的 Home 站点（默认：“Seaview Terrace”）。快速通勤 Home 预设
- [WORK_STATION] — 已保存的 Work 站点（默认：“Central Harbor”）。快速通勤 Work 预设
- [SINGLE_FARE] — 标准地铁票价（默认：“$2.75”）。显示在路线卡片上的票价估算
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/city-transit-route-planner-app（默认：是；删除此行即可移除）

“页面与区块”下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 瑞士交通白（Swiss Transit White）`#F8FAFC` — 主清爽画布
- 卡片纯白（Card Pure White）`#FFFFFF` — 路线行程与出发面板
- 交通炭黑（Transit Charcoal）`#0F172A` — 主排版、站点圆环和高对比度胶囊标签
- 地铁蓝线（Metro Blue Line）`#0284C7` — Blue Bay Line 路线描边、主 CTA 和活动标签页
- 琥珀码头线（Amber Pier Line）`#D97706` — Amber Pier Line 路线描边和服务公告高亮
- 翡翠岭线（Emerald Ridge Line）`#059669` — Emerald Ridge Line 描边和 On-Time 实时徽章

### 排版
- 瑞士新怪诞体导视与 UI：Inter（OFL），字重 400/500/600/700
- 出发倒计时、站台编号和路线时长：JetBrains Mono（OFL），字重 400/500/600

### 布局与动效
- 间距：移动端（<768px）将紧凑的路线控件堆叠在交互式地图和行程上方，并在固定的 64px 底部标签栏上方留出 80px 间隙。桌面端（>=1024px）显示顶部瑞士导航栏 + 分栏工作区（左侧 420px 行程/控件 + 右侧可弹性伸缩的交互式可缩放 SVG 地铁地图）。
- 圆角：路线和站点卡片为 14px，输入框和缩放控件为 10px，线路代码徽章（B1、A2、E3）和倒计时胶囊为 999px。
- 动效：沿规划路段平滑动画高亮 SVG 路线路径。
- 动效：实时分钟倒计时徽章上带有细微脉动的翡翠色圆点。
- 动效：遵循 prefers-reduced-motion；所有内容立即可见。
- 图像：100% 清晰的代码绘制瑞士交通图形：可缩放的 18 站几何 SVG 地铁示意图，带海岸线色调、换乘双环、动画路线高亮和 Lucide 交通图标。

## 页面与区块
### [BRAND] — [CITY_NAME] 交通与路线规划器（`index.html`）
1. **自适应导航与服务状态条** — 移动端（<768px）：紧凑的 [BRAND] · [CITY_NAME] 顶栏，带服务状态胶囊标签 + 固定底部 4 标签栏（Route、Lines、Nearby、Saved）。桌面端（>=768px）：简洁的瑞士风格顶部导航栏，带实时服务公告滚动条（'Blue & Emerald normal · Amber Pier +3 min near Lighthouse Dock'）。
   布局：全视口瑞士实用型 PWA 外壳；无虚假手机边框。
2. **路线规划器与可交互缩放 18 站 SVG 地铁图** — 覆盖 18 个虚构沿海车站的起点与终点选择器，带一键 Swap 按钮、'Fastest' 与 'Fewest Transfers' 切换，以及快捷 Home/Work 快捷标签（[HOME_STATION] <-> [WORK_STATION]）。显示计算出的分步乘车行程（线路徽章、上车站、站数、换乘站台提示、预计时长、[SINGLE_FARE] 票价）+ 'Save Trip' 切换。与可缩放（+ / - / Reset）的交互式 SVG 地铁图直接配对，高亮当前路线；点击任意车站可打开其实时发车倒计时抽屉/卡片。
   布局：桌面端分栏面板（行程在左，交互地图在右）；移动端堆叠路线卡片 + 交互地图。
3. **线路视图 — 网络目录与服务提醒** — 显示全部 3 条颜色编码的地铁线路（B1 Blue Bay Line、A2 Amber Pier Line、E3 Emerald Ridge Line），带实时状态胶囊标签、发车间隔频率（每 4–6 分钟），以及可点击的有序车站列表，可查看发车信息。
   布局：桌面端 3 列线路网格；移动端堆叠可展开卡片。
4. **附近站点与已保存通勤视图** — Nearby 标签列出最近的 5 个地铁与快速公交站点，带步行距离和动态实时到站倒计时分钟数（例如 2 min、6 min、11 min）。Saved 标签提供一键 Home（[HOME_STATION]）和 Work（[WORK_STATION]）通勤启动器，以及持久化在 localStorage 中的用户已保存行程。
   布局：桌面端 2 列响应式卡片网格；移动端单列信息流。

## 资源
- 图标：安装 lucide-react（ISC），用于火车、公交、上下箭头切换、放大/缩小、书签和警告图标。
- 字体：通过 @fontsource 包（OFL）自托管 Inter 和 JetBrains Mono。
- 图像：交互式 18 站沿海地铁示意图完全以内联 SVG 渲染。零外部照片或地图瓦片。

## 不要做的事
- 桌面视口下不要使用假手机边框或狭窄的移动端容器。
- 不要使用真实城市名、真实交通机构或外部地图瓦片 API。
- 不要硬编码日历日期；使用实时相对发车倒计时（例如 '3 min'、'8 min'）。
- 不要使用 CDN 脚本、Google Fonts 链接或 source map；始终设置 base: './'。
- 在 390x844 移动端或 1440x900 桌面端不要出现水平溢出。
- 除可选的 [CREDIT] 槽位外，不要提及 VibeFather 或竞品。

---
— Prompt by VibeFather · https://vibefather.ai/t/city-transit-route-planner-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
