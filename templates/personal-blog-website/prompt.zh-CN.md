> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 个人博客网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [AUTHOR_NAME] 构建一个以排版为驱动的个人博客与随笔日志，标题为 [BRAND]（位于 [LOCATION]）。由 12 个带 front matter 的真实本地 Markdown 文件驱动，为首页（Home）、归档（Archive）、随笔阅读器（Essay Reader）、标签（Tags）、关于（About）和近况（Now）提供 hash 路由，另含读者可控的浅色/深色/棕褐色（Light/Dark/Sepia）主题、S/M/L 字号控制、阅读进度条、自动目录（TOC）、带复制功能的代码块、脚注、引言块（pull quotes）、系列链接、RSS 预览和本地新闻通讯订阅。

- 受众：独立写作者、开发者博主、设计师和工程师，他们想要一个可自主拥有、快速、带有文学质感的静态个人博客。
- 目标：让阅读长篇技术与个人随笔真正成为一种享受，同时通过衬线字体层级、暖色纸张质感、番茄色（tomato）点缀和定制的木刻版画风格 SVG 编辑插图，让首屏拥有 unmistakable 的编辑气质。
- 基调：深思熟虑、善于观察、脚踏实地、以第一人称书写的关于手艺、小工具和慢旅行的随笔——绝不企业化，绝不标题党。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：lucide-react（ISC）、@fontsource/newsreader（OFL-1.1）、@fontsource/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/newsreader（400、500、600、700，外加 400-italic）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（400、500）。
  - 将 12 个真实的 Markdown 文章文件存储在 src/content/posts/*.md 下，带有 YAML front matter（slug、title、volume、issueNum、readingMins、tags、series、seriesPart、figureKey、excerpt），并通过 import.meta.glob('./content/posts/*.md', { query: '?raw', import: 'default', eager: true }) 加载它们。
  - 在 src/data/readerStorage.ts 中持久化阅读主题（'paper' | 'sepia' | 'dark'）、字体大小（'sm' | 'md' | 'lg'）和本地 newsletter 注册状态。

## 变量
- [BRAND] — 出版物标题（默认：“Fieldwork & Fold”）。个人博客刊头标题
- [AUTHOR_NAME] — 作者姓名（默认：“Clara Lindqvist”）。虚构的作家兼开发者姓名
- [LOCATION] — 作者所在城市（默认：“Gothenburg, Sweden”）。显示在 About 和 Now 页面上的城市
- [BIO_LINE] — 作者简短介绍（默认：“Writer-developer crafting small local-first software, riding slow night trains, and documenting bookbinding workshops.”）。首页刊头的一句话介绍
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/personal-blog-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 暖纸色（Warm Paper）`#FBF8F1` — 默认阅读画布背景
- 纸卡色（Paper Card）`#F3EDE0` — 用于细微交替的标注框、引文凹槽和插图衬底
- 编辑墨色（Editorial Ink）`#1B1B1B` — 主展示衬线字体与正文阅读文本
- 柔和石墨色（Muted Graphite）`#5A564E` — 图注、阅读时长、脚注和次级元数据
- 番茄强调色（Tomato Accent）`#E5533D` — 阅读进度条、活动导航标线、首字下沉强调、标签胶囊和链接
- 深褐纸色（Sepia Paper）`#F3E8D2` — 深褐阅读主题画布，搭配 #2E2418 墨色和 #C9442E 强调色
- 夜墨色（Night Ink）`#171717` — 深色阅读主题画布，搭配 #EFECE6 文本和 #FF6F59 强调色

### 字体排印
- 编辑展示与随笔正文：Newsreader（OFL），字重 400/500/600/700
- 导航、标签与控件：Inter（OFL），字重 400/500/600
- 代码块与期号：JetBrains Mono（OFL），字重 400/500

### 布局与动效
- 间距：文学杂志节奏：64px 顶栏，集成阅读主题/字号控件，1080px 外壳宽度，68ch 最佳随笔阅读行宽，宽裕的 48px–64px 垂直节奏。
- 圆角：4px 用于细微纸标签和按钮；8px 用于代码框、插图和新闻通讯框。
- 动效：随笔页面上，视口顶部固定一条连续的、随滚动联动的 3px 番茄色阅读进度条。
- 动效：平滑的 140ms 悬停下划线和主题切换过渡。
- 动效：所有过渡均遵循 prefers-reduced-motion。
- 图像：以代码绘制的定制木刻风格编辑插图 SVG（匹配暖纸色、编辑墨色和番茄强调色），描绘海岸夜行列车、手工装订笔记本印刷机、黄铜袖珍指南针和极简终端长椅——每幅均带有印刷套准标记和编辑图注，使每个页面都富有作者感与视觉丰富度。

## 页面与区块
### [BRAND] · [AUTHOR_NAME] 的随笔（`#/home`）
1. **编辑报头、阅读器控件与精选随笔聚焦** — 简洁的顶部页眉，包含 [BRAND] 衬线字标、导航链接（Home、Archive、Tags、About、Now）、交互式阅读主题分段胶囊（`Paper` / `Sepia` / `Dark`）、字号切换（`A-` / `A` / `A+`），以及 RSS 订阅按钮（打开一个简洁、可复制的 XML 预览模态框）。下方：为 [AUTHOR_NAME]（[BIO_LINE]）设置的双栏编辑报头简介，搭配一张带边框的精选随笔聚焦卡片，展示第 12 篇随笔（'Notes on Software That Fits in a Weekend'），并配有一幅丰富的木刻版画风格 SVG 插图（`figureKey: 'press'`）和一个 'Read essay' Tomato 按钮。
   布局：1080px 居中容器；双栏报头聚焦区在移动端折叠为单栏。
2. **最新随笔索引与本地新闻通讯框** — 按时间顺序列出最新 6 篇随笔，显示期号（`No. 12`）、卷标签（`Volume IV`）、阅读时间（`7 min read`）、衬线标题、两行摘要，以及可点击的主题标签胶囊（`craft`、`travel`、`small-software`、`tools`）。下方是一张暖纸色新闻通讯订阅卡片（'One dispatch per month, no tracking pixels'），将订阅保存在 localStorage 本地存储中并即时确认，另有带 RSS 链接和可选 [CREDIT] 链接的简洁页脚。
   布局：简洁的编辑台账行，以 1px 细线分隔；新闻通讯卡片在桌面端采用双栏分栏，在移动端为堆叠表单。

### 归档 · [BRAND]（`#/archive`）
1. **按卷与标签的可搜索归档** — 全部 12 篇预置 Markdown 随笔的完整列表，带有即时关键词搜索输入框、卷筛选胶囊（`All Volumes`、`Volume IV`、`Volume III`、`Volume II` — 无日历年），以及标签筛选胶囊（`All`、`craft`、`small-software`、`travel`、`typography`、`tools`）。按卷进行视觉分组并显示随笔数量。
   布局：筛选工具栏位于分组随笔归档行上方。

### 随笔 · [BRAND]（`#/post/software-that-fits-in-a-weekend`）
1. **带自动目录、代码、脚注与系列导航的长篇随笔阅读器** — 顶部边缘固定 3px Tomato 阅读进度条。不带 slug 打开时自动默认到最新预置随笔。包含随笔眉题（`Volume IV · No. 12 · 7 min read`）、大号 Newsreader 标题、系列横幅（'Part 3 of 3 in Small Software Series'，带第 1–3 部分的直接链接）、跟踪滚动的粘性右侧自动目录、随阅读器 S/M/L 字号设置缩放的格式化段落、带 Tomato 左侧竖线的编辑式引文、带说明的木刻版画 SVG 插图、带一键 Copy 按钮的深墨色语法着色代码块、可点击的上标脚注（`[1]`、`[2]`）平滑跳转到末尾的脚注部分，以及 3 卡片相关随笔条。
   布局：居中的 68ch 随笔栏，在桌面端（`>=1080px`）搭配粘性 210px 右侧目录；移动端为单栏。

### 主题 · [BRAND]（`#/tags`）
1. **标签目录与筛选后的随笔集合** — 交互式标签索引，显示每个主题的帖子数量（`small-software`、`craft`、`travel`、`typography`、`tools`）；选择任意标签会筛选下方匹配的随笔。
   布局：标签胶囊云位于匹配随笔列表上方。

### 关于 · [BRAND]（`#/about`）
1. **作者随笔、版本记录与 RSS** — 来自 [LOCATION] 的 [AUTHOR_NAME] 的个人说明，搭配一幅编辑式木刻版画工作室书桌 SVG 插图、一份列出自托管 Newsreader/Inter/JetBrains Mono 字体栈和本地 Markdown 架构的版本记录，以及一个直接的 RSS XML 模态框触发器。
   布局：双栏编辑式简介 + 版本记录卡片。

### 现在 · [BRAND]（`#/now`）
1. **当前项目、阅读书架与工作坊笔记** — 一个聚焦的 'What I am working on right now' 页面，组织为 Currently Building、On the Desk（书籍装订与印刷笔记）和 Reading List（4 本虚构/经典手工艺书籍），使用 'Current season' 状态标签，不含日历日期。
   布局：单栏编辑式布局，搭配结构化的双栏阅读书架卡片。

## 资产
- 图标：安装 lucide-react（ISC），用于阅读器主题切换器、搜索、RSS、复制代码和导航图标。
- 字体：安装 @fontsource/newsreader、@fontsource/inter 和 @fontsource/jetbrains-mono（OFL），并在 src/main.tsx 中导入。
- 图像：直接在代码中为精选文章、文章插图和“关于”页面绘制定制的双色油毡版画风格编辑类 SVG 插图。

## 不要做的事
- 不使用真实作家姓名、真实博客出版物或抄袭的文章正文。
- 渲染页面上任何地方都不出现日历日期、月份或四位数年份（档案按 Volume IV / III / II 和 Essay No. 01–12 组织）。
- 提示词或应用中不包含 SEO meta description、Open Graph 或 JSON-LD 样板内容。
- 不使用后端 newsletter 服务、远程分析或外部 CDN 字体/脚本。
- 生产构建中不生成 source maps（build.sourcemap: false），并保持 dist/ 在 20 MB 以下。
- 不使用可能在 Chromium 中导致区块不可见的 clip-path 滚动隐藏。
- 在 1440x900 桌面端或 390x844 移动端不出现页面水平溢出。

---
— Prompt by VibeFather · https://vibefather.ai/t/personal-blog-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
