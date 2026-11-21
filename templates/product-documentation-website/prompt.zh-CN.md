> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 产品文档网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND]（`[PKG_NAME]`）构建一个以指南为先、三栏布局的开发者 SDK 文档网站，由直接打包进静态构建的 18+ 个本地 Markdown 文件支撑。包含可用的 v2/v3 版本切换器、全页面同步的 JavaScript/Python/cURL 代码标签页、交互式“Try it”请求演练场、Cmd+K 标题搜索、随滚动跟踪的右侧目录、本地有用性反馈、变更日志，以及自定义 404 页面。

- 受众：软件工程师、开发者体验负责人，以及负责交付 SDK 指南和 API 参考的技术写作者。
- 目标：为访客提供一个权威、可快速浏览的文档网站，首屏直接打开内容丰富的快速开始（Quickstart）指南，包含实时代码标签页、步骤、提示框，以及交互式请求面板。
- 语气：清晰、直接、工程优先的技术写作，配有具体载荷、精炼的参数定义，零营销废话。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：lucide-react（ISC）、@fontsource/plus-jakarta-sans（OFL-1.1）、@fontsource/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务端代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/plus-jakarta-sans（600、700、800）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（400、500、600）。
  - 在 src/content/docs/*.md 下存放 18+ 个真实的 Markdown 文档页面，并通过 import.meta.glob('./content/docs/*.md', { query: '?raw', import: 'default', eager: true }) 静态导入它们。
  - 在 src/utils/docParser.ts 中解析 Markdown front matter、标题、标注块（:::note、:::tip、:::warning、:::danger）、编号步骤、参数表格和同步代码标签组。
  - 在 src/data/docStorage.ts 中持久化首选代码语言、活动 SDK 版本（v3/v2）、颜色主题（浅色/深色）以及“Was this page helpful?”投票。

## 变量
- [BRAND] — SDK 品牌名称（默认："RelayMesh"）。虚构的开发者 SDK 产品名称
- [PKG_NAME] — 包标识（默认："relaymesh"）。小写的 npm/pip 包名和 CLI 标识
- [API_BASE] — 模拟 API 基础 URL（默认："https://api.relaymesh.dev"）。在 cURL 和 Try It 面板中显示的虚构端点 URL
- [TAGLINE] — SDK 一句话简介（默认："Low-latency event routing, signed webhooks, and fan-out delivery for modern services."）。用于介绍横幅的简短技术副标题
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/product-documentation-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 纸白（Paper White）`#FFFFFF` — 浅色模式下的主阅读画布与页头表面
- 柔轨（Soft Rail）`#F6F7FB` — 浅色模式下的侧边栏表面、表头和标注填充
- 石墨墨（Graphite Ink）`#1C1E26` — 浅色模式下的主文本色，以及深色代码块／深色模式的基础表面
- 深曜石（Deep Obsidian）`#12141B` — 深色模式页面背景，搭配 #1C1E26 卡片和 #F2F4F8 前景文本
- 紫外强调（Ultraviolet Accent）`#6C4CFF` — 激活的侧边栏项、目录滚动指示器、主按钮和交互链接（深色模式下提亮为 #9B85FF 以满足 AA 对比度）
- 青柠高亮（Lime Highlight）`#C3F53C` — 代码语法高亮、深色石墨代码框内的 HTTP 200 状态徽章，以及激活的代码标签下划线
- 琥珀警示（Amber Caution）`#F59E0B` — 警告标注和 v2 弃用提示胶囊
- 绯红警报（Crimson Alert）`#E5484D` — 危险标注和错误状态码

### 排版
- 标题与展示字体：Plus Jakarta Sans（OFL），字重 600/700/800
- 正文与 UI：Inter（OFL），字重 400/500/600
- 代码、端点与表格：JetBrains Mono（OFL），字重 400/500/600

### 布局与动效
- 间距：清晰的编辑式阅读网格：60px 吸顶顶栏、260px 左侧边栏、760px 最佳行宽中央阅读栏、桌面端（1440px）220px 右侧“On this page”目录；区块间距 24px–32px。
- 圆角：徽章、按钮和搜索输入框为 6px；深色石墨代码框、标注和交互式 Try It 面板为 10px。
- 动效：侧边栏链接上 150ms 平滑的激活指示滑动，代码标签同步，以及右侧目录高亮同步。
- 动效：侧边栏分组和 Cmd+K 搜索模态淡入采用 160ms 清晰的展开／收起。
- 动效：在所有过渡和平滑滚动跳转中遵循 prefers-reduced-motion。
- 图像：纯代码绘制的技术图形：为 [BRAND] 设计的几何紫外／青柠 SVG 标志图形、Quickstart 页面上的内联 SVG 请求管线架构图、用于标注和控件的清晰 Lucide 图标，以及带青柠高亮的高对比度深色石墨代码框。不使用外部照片。

## 页面与区块
### 快速开始 · [BRAND] 文档 (`#/docs/quickstart`)
1. **顶部文档栏与三栏外壳** — 粘性 60px 顶部页头，包含自定义几何 SVG 标记 + [BRAND] Docs 字标、顶级链接（Guides、API Reference、Changelog、404 Demo）、实时版本切换器下拉菜单（'v3 (Latest)' / 'v2 (Legacy)' — 切换会真正更新页面正文、代码示例、端点路径 `/v3/events` 与 `/v2/dispatch`，并显示琥珀色 v2 提示横幅）、Cmd+K 搜索触发按钮，以及浅色/深色主题切换。左侧 260px 侧边栏列出 5 个可折叠分组，覆盖 18+ 个预置 Markdown 页面：入门（快速开始、安装、认证、配置）、核心概念（事件路由、签名 Webhook、重试策略、死信队列、幂等性）、SDK 指南（批量发布、流消费者、边缘中间件、本地测试）、API 参考（发布事件、管理路由、检查投递、Webhook 端点）以及运维（速率限制与配额、错误码）。右侧 220px 栏渲染粘性的 'On this page' 目录，通过 Ultraviolet 左侧轨道跟踪读者的滚动位置。
   布局：在 1400px 容器内使用三栏 CSS 网格（`260px minmax(0,1fr) 220px`）。低于 1180px 时右侧目录隐藏；低于 900px 时左侧边栏折叠为滑出的 'Docs menu' 抽屉。
   动效：活动目录标题通过滚动位置监听器自动高亮。
2. **指南优先的快速开始文章、同步代码标签页与交互式 Try It 面板** — 以醒目的 Graphite + Ultraviolet + Lime 主视觉条开场，展示 SDK 徽章（`[PKG_NAME] v3.4`）、快速开始标题、[TAGLINE]，以及内联 SVG 架构流程（`Producer -> Edge Router -> Signed Fan-out -> Retry Queue`）。随后是编号步骤（1. 安装 `[PKG_NAME]`，2. 初始化客户端，3. 发布并验证事件），使用同步语言标签页（JavaScript、Python、cURL——点击 Python 会同时切换页面上所有多语言代码块，并持久化到 localStorage），置于深色 `#1C1E26` 框架内，带有 `#C3F53C` 青柠色强调线和一键复制按钮。包含全部四种样式化标注（Note、Tip、Warning、Danger）、结构化参数表（名称、类型、必填胶囊、描述），以及交互式 'Try it' 请求面板，用户可编辑 JSON 负载字段（`topic`、`region`、`idempotencyKey`）、选择 HTTP 方法/端点，并点击 'Send mock request' 以接收带有 HTTP 202 状态徽章和模拟延迟读数的逼真模拟 JSON 响应。
   布局：单一居中阅读栏（最大 760px），全宽代码块，响应式参数表置于 `overflow-x-auto` 框架内，Try It 小部件内为双窗格请求/响应布局。
3. **页面页脚：有用投票、编辑链接与上一页/下一页导航** — 底部栏包含 'Was this page helpful?' 是/否按钮，按页面持久化到 localStorage（投票后显示感谢确认）、指向页面 Markdown 路径的 'Edit this page on Git' 链接（例如 `src/content/docs/quickstart.md`）、并排的上一页/下一页卡片，以及带有可选 [CREDIT] 链接的细微页脚。
   布局：两栏上一页/下一页卡片位于紧凑页脚行上方；在 390px 移动端垂直堆叠。

### 发布事件 API · [BRAND] 文档 (`#/docs/api-publish`)
1. **端点参考、参数与交互式演练场** — `POST /v3/events` 的完整 API 参考页面（选择版本 v2 时切换为 `POST /v2/dispatch`），包含请求/响应参数表、同步的 JS/Python/cURL 示例、错误码标注以及实时交互式 Try It 面板。
   布局：渲染在相同的三栏文档外壳内。

### 变更日志 · [BRAND] 文档 (`#/changelog`)
1. **版本化发布时间线** — 结构化 SDK 变更日志，涵盖 v3.4（最新）、v3.2、v3.0（主要版本）和 v2.8（维护 LTS），带有筛选胶囊（All、Features、Breaking、Fixes）和清晰的迁移标注。仅使用版本标签和发布徽章（无日历日期）。
   布局：居中 820px 时间线，左侧版本徽章，右侧发布卡片。

### 页面未找到 · [BRAND] 文档 (`#/404`)
1. **有用的 404 回退** — Graphite、Ultraviolet 和 Lime 配色的图形化 404 卡片，显示未匹配路径、快速开始、API 参考和变更日志的快速链接，以及启动 Cmd+K 标题搜索模态框的按钮。
   布局：文档外壳内的居中卡片。

## 资源
- 图标：安装 lucide-react（ISC），用于侧边栏折叠箭头、提示框图标、搜索、复制、主题切换和版本指示器。
- 字体：安装 @fontsource/plus-jakarta-sans、@fontsource/inter 和 @fontsource/jetbrains-mono（OFL），并在 src/main.tsx 中直接导入。
- 图片：将 [BRAND] 几何标志和 Quickstart 事件路由架构图绘制为简洁的内联 SVG 组件。

## 不要做的事
- 文案、代码或示例端点中不得出现任何真实文档平台或 SDK 品牌名称。
- 渲染页面上的任何位置都不得出现日历日期、月份或四位年份（更新日志使用版本号和 'Latest' 或 'LTS' 等发布标签）。
- 不得使用后端、远程搜索 API 或外部 CDN 脚本/字体；所有 18+ 个 Markdown 页面均在本地打包。
- 生产构建中不得包含 source map（build.sourcemap: false），并保持 dist/ 在 20 MB 以下。
- 不得使用 emoji 字符作为 UI 图标或标注标记；请使用 Lucide 图标。
- 不得使用 clip-path 揭示技巧将区块隐藏至滚动时才显示。
- 在 1440x900 桌面端或 390x844 移动端不得出现页面水平溢出。

---
— Prompt by VibeFather · https://vibefather.ai/t/product-documentation-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
