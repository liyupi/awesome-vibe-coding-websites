> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 设计系统指南演示文稿

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
一份 12 页 16:9 的建筑式瑞士视觉识别与 UI 设计系统演示文稿，面向 [BRAND]（[SYSTEM_VERSION]），作者为 [LEAD_AUTHOR]。幻灯片内包含实时交互式样本：点击即可复制的颜色令牌及 WCAG 对比度、实时字号比例切换、间距/圆角标尺、交互式组件状态、SVG 动效时序曲线，以及“该做与不该做”对比，另有键盘/滑动导航、G 网格、N 演讲者备注 + 计时器、F 全屏，以及打印 CSS。

- 受众：设计师、前端工程师，以及展示和评审 UI 基础规范的品牌团队。
- 目标：将设计系统讲解转化为一份实时、可触的规范演示文稿，让每个令牌和状态都能被直接查看。
- 基调：建筑感、瑞士理性主义、极致锐利的精确度。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react（ISC）、@fontsource/space-grotesk（OFL）、@fontsource/inter（OFL）、@fontsource/jetbrains-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中本地导入 @fontsource/space-grotesk（500、600、700）、@fontsource/inter（400、500、600、700）和 @fontsource/jetbrains-mono（400、500、600）。
  - 在颜色令牌色块上实现剪贴板十六进制复制，并带有优雅的视觉“Copied”确认，以及实时 WCAG AA/AAA 对比度读数。
  - 支持 ArrowLeft/ArrowRight/Space/Home/End 导航、触摸滑动、G 概览网格模态框、N 演讲者备注 + 计时器、F 全屏，以及 @media print 横向 PDF 导出。

## 变量
- [BRAND] — 设计系统名称（默认："Forma Grid"）。虚构的设计系统标题
- [SYSTEM_VERSION] — 规范版本徽章（默认："v2.4 · Core Foundations"）。显示在封面上
- [LEAD_AUTHOR] — 作者署名（默认："Nadia Kowalski, Principal Systems Designer"）。演讲者署名
- [MANIFESTO] — 指导原则（默认："Precision in geometry, warmth in restraint."）。主视觉宣言语句
- [TOKEN_PREFIX] — CSS 变量前缀（默认："--fg-"）。显示在 token 卡片上的前缀
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/design-system-guidelines-deck（默认：是；删除此行即可移除）

页面与区块（Pages & Sections）下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/design-system-guidelines-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
