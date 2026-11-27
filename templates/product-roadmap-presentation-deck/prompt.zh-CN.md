> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 产品路线图演示文稿

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简报
一份 12 页的深色模式产品策略与多季度路线图演示文稿，面向虚构的协作软件产品 [BRAND]（[PRODUCT_AREA]），包含一个可按 Engineering、Design 和 Growth 筛选的交互式 Now / Next / Later 路线图看板、3 个代码渲染的 UI 功能原型、反馈柱状图、依赖时间线和 beta 指标。

- 受众：高管领导层、工程经理、设计负责人以及关键企业设计合作伙伴。
- 目标：让跨职能团队在产品愿景、战略押注、分阶段交付优先级以及 Now、Next 和 Later 各时间范围内的发布依赖上达成一致。
- 语气：清晰、有主见、以用户证据为驱动，并聚焦产品工艺。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react (ISC)、@fontsource/space-grotesk (OFL)、@fontsource/inter (OFL)、@fontsource/jetbrains-mono (OFL)
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中本地导入 @fontsource/space-grotesk（500、600、700）、@fontsource/inter（400、500、600、700）和 @fontsource/jetbrains-mono（400、500、600）。
  - 将所有路线图条目、客户反馈数据、依赖项、测试版指标和演讲者备注存储在 src/data/roadmapDeck.ts 中。
  - 在 src/index.css 中配置 @media print，使用 @page { size: landscape; margin: 0; }，隐藏浏览器界面元素，并将全部 12 张幻灯片每页一张打印。
  - 将幻灯片索引同步到 URL hash（#/slide/1..12），并支持键盘快捷键（方向键、Space、Home、End、G、N、F、Escape）以及触摸滑动。

## 变量
- [BRAND] — 产品名称（默认：“CanvasFlow”）。虚构的协作软件产品
- [PRODUCT_AREA] — 核心平台重点（默认：“Multiplayer Planning & Docs”）。产品支柱描述
- [HORIZON_LABEL] — 规划周期徽章（默认：“3-Quarter Product Roadmap”）。不含日历年份的周期徽章
- [BETA_COHORT] — 设计合作伙伴群体规模（默认：“185 Customer Teams”）。测试版指标背景
- [PRODUCT_LEAD] — 演讲者姓名和头衔（默认：“Priya Nair, VP Product”）。虚构的产品负责人
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/product-roadmap-presentation-deck（默认：是；删除此行即可移除）

“页面与区块”下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/product-roadmap-presentation-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
