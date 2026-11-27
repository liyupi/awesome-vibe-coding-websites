> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 市场调研洞察演示文稿

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一份杂志级 12 页年度市场研究与数据叙事演示文稿，面向虚构的气候科技与清洁出行研究机构 [BRAND]，标题为“[REPORT_TITLE]”，包含醒目的单一数字主视觉统计、带悬停提示与分段切换的交互式多系列 SVG 折线图与柱状图、区域采用率条形图、5 张宏观趋势卡片、要点矩阵和方法论。

- 受众：机构投资者、气候科技创始人、城市政策规划者和高管战略团队。
- 目标：以编辑级的精致度和透明的方法论，传达多年市场采用率变化和五个可执行的宏观趋势。
- 语气：权威、清晰、实证、新闻式；明确注明为示意性研究模型估算。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react（ISC）、@fontsource/fraunces（OFL）、@fontsource/inter（OFL）、@fontsource/ibm-plex-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中本地导入 @fontsource/fraunces（600、700）、@fontsource/inter（400、500、600、700）和 @fontsource/ibm-plex-mono（400、500、600）。
  - 将所有研究数据集、区域采用系列、大趋势、方法论事实和演讲者备注存储在 src/data/researchDeck.ts 中。
  - 在 src/index.css 中配置 @media print，使用 @page { size: landscape; margin: 0; }，隐藏工具栏控件，并将全部 12 张幻灯片每页一张干净打印。
  - 支持 URL hash 幻灯片跟踪（#/slide/1..12）、键盘快捷键（方向键、Space、Home、End、G、N、F、Escape）和移动端滑动。

## 变量
- [BRAND] — 研究机构名称（默认："Verdant Policy Institute"）。虚构的气候与出行研究机构
- [REPORT_TITLE] — 年度报告标题（默认："Global Clean-Mobility & Urban Transit Outlook"）。封面主报告标题
- [HERO_STAT] — 旗舰头条数字（默认："38.4%"）。封面和数据幻灯片上突出显示的主要英雄指标
- [SAMPLE_SCOPE] — 研究覆盖范围说明（默认："42 Metro Regions · 2,180 Fleets"）。封面和方法论幻灯片上显示的范围说明行
- [LEAD_ANALYST] — 首席研究员（默认："Dr. Hannah Osei, Research Director"）。虚构的第一作者
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/market-research-insights-deck（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/market-research-insights-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
