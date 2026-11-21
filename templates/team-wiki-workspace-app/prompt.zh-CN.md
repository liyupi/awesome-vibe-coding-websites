> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 团队 Wiki 工作区应用

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建一个基于区块的团队 wiki 和轻量级数据库工作区应用，名为 [BRAND]，预置 [STUDIO_NAME]（由 [LEAD_NAME] 领导）的运营手册和 [CYCLE_NAME]。支持可嵌套、可拖拽重排的侧边栏页面树、收藏、回收站、页面模板、带拖拽/键盘重排的“/”斜杠命令区块编辑器、Markdown 快捷方式、文本选择格式化/评论、内嵌的 Table/Board/Calendar 数据库（含筛选和排序）、面包屑、反向链接、Cmd+K 搜索、导出为 Markdown，以及基于 localStorage 的完整持久化和撤销/重做。

- 受众：构建内部 wiki 或项目手册的小型产品团队、设计工作室、工程负责人和创始人。
- 目标：交付一个即刻丰富、充满内容的工作区，直接打开到一份完整的路线图文档，包含自定义几何封面横幅、交互式清单、标注、反向链接和实时多视图数据库。
- 基调：温暖、有条理、工作室式的清晰感——具体的交付物、负责人和冲刺里程碑，零企业术语。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：lucide-react（ISC）、@fontsource/plus-jakarta-sans（OFL-1.1）、@fontsource/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/plus-jakarta-sans（600、700、800）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（400、500）。
  - 将预置的嵌套 wiki 页面、区块结构、页面模板和数据库记录存储在 src/data/wikiSeed.ts 中，以 [BRAND]、[STUDIO_NAME]、[LEAD_NAME] 和 [CYCLE_NAME] 为键。
  - 在 src/data/wikiStore.ts 中管理工作区状态、撤销/重做栈（最多 30 个快照）以及 localStorage 持久化。

## 变量
- [BRAND] — 工作区应用名称（默认：“Marigold Desk”）。虚构的团队 wiki 应用名称
- [STUDIO_NAME] — 种子团队名称（默认：“Alder & Loom Studio”）。虚构的设计工作室工作区
- [LEAD_NAME] — 工作区负责人（默认：“Hana Sato”）。虚构的工作室总监或负责人
- [CYCLE_NAME] — 主路线图标题（默认：“Autumn Product Roadmap”）。加载时显示的第一个页面
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/team-wiki-workspace-app（默认：是；删除此行即可移除）

“页面与区块”下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/team-wiki-workspace-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
