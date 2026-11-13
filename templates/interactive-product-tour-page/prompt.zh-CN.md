> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 交互式产品导览页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个原创的单页产品导览，[BRAND] 是面向 [AUDIENCE] 的 [PRODUCT]。该页面通过演示来销售：首屏中放置一个大型的、完全用代码绘制的应用程序，引导访客浏览三个工作流章节和九个具体步骤。每个章节都以一份有用的回顾和一个 [PRIMARY_CTA] 转化操作结束。

- 受众：SaaS 创始人、产品营销人员和独立软件团队，他们需要解释多步骤工作流、筛选潜在客户，并让产品在注册或销售通话之前就变得易于理解。
- 目标：让访客按自己的节奏完成一次清晰的交互式导览，或使用可选自动播放，理解产品的核心工作流，并在不离开页面的情况下响应情境化的行动号召。
- 语气：自信、务实、低调而具编辑感。使用短句、精确的产品语言和可信的示例细节；避免炒作、虚假客户声明、泛泛的 AI 措辞和玩笑。

## 技术栈（Stack）
- 框架（Framework）：Vite 6 + React 19 + TypeScript
- 样式（Styling）：Tailwind CSS 4
- 库（Libraries）：motion（MIT）、lucide-react（ISC）、@fontsource-variable/newsreader（OFL）、@fontsource-variable/manrope（OFL）、@fontsource/ibm-plex-mono（OFL）
- 构建（Build）：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置（Setup）：
  - 配置 vite.config.ts，设置 base: './'、build.sourcemap: false，并启用 Tailwind CSS Vite 插件；生产输出为 dist/ 中的静态文件。
  - 从本地 Fontsource 包中导入 Newsreader Variable、Manrope Variable 和 IBM Plex Mono；不要添加字体样式表 URL。
  - 将所有面向访客的字符串、变量值、导航标签、章节、工具提示、示例项目、FAQ、对话框标签和链接保留在 src/content.ts 中。将带类型的导览步骤定义也保留在那里，包括 targetId 和工具提示位置。
  - 在 src/components/ProductTour.tsx 中将导览实现为一个显式状态机：activeChapter、activeStep、chapterComplete 和 playbackState（'idle' | 'playing' | 'paused'）。在 src/components/AppCanvas.tsx 中渲染原始应用场景，并通过 refs 或 data-tour-target 属性解析热点目标。
  - 在 src/index.css 和 Tailwind 主题中定义精确的颜色、字体、间距、圆角、阴影和关键帧令牌。使用 Motion 实现步骤、面板、对话框和区块过渡；使用普通 React state 实现应用演示变更。
  - 为客户端转化对话框使用原生 dialog 元素，包括带标签的字段、Escape 关闭、焦点返回和本地成功状态。不要传输或持久化表单值。
  - 在 package.json 中提供开发、构建和预览脚本。固定的默认构建命令为 npm run build；不要引入服务器、路由器、状态库或额外的组件库。

## 变量
- [BRAND] — 虚构的产品品牌（默认：“Nookline”）。在字标、页面标题、产品文案、对话框和页脚中使用一个简短的自创名称。
- [PRODUCT] — 产品类别（默认：“client approval workspace”）。对产品的小写描述；据此重写工作流程、界面标签和示例数据。
- [AUDIENCE] — 主要客户受众（默认：“independent creative studios”）。一个普通的小写受众描述，用于主视觉和支持性文案。
- [PRIMARY_CTA] — 主要行动号召（默认：“Start a free workspace”）。在页眉、章节完成面板和最终 CTA 中使用同一操作；它会打开本地演示对话框。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/interactive-product-tour-page（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/interactive-product-tour-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
