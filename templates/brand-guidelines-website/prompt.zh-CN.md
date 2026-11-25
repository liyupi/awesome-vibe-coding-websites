> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 品牌指南网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个虚构公司的活品牌手册：标志及其留白空间和误用示例；带可复制色值和对比度评级的色彩系统；带实时样张的字号层级；图标体系；插画与摄影原则；带实时演示的动效原则（可播放的缓动曲线）；带正例与反例对照的语气与语调；组件预览；模板；以及下载页面。侧边栏导航、搜索、浅色与深色模式。深蓝 #0D1B3D 与电光黄 #FFE14D。

- 受众：团队中的设计师、营销人员和工程师，他们需要一个集中记录并持续更新品牌规范的地方。
- 目标：让任何人都能在几秒内找到一条规则、复制一个值、实时查看样张并下载可用的资产。
- 语调：精准且有帮助，像优秀的文档那样：规则简短、示例具体、不搞品牌玄学。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource-variable/unbounded（OFL-1.1）、@fontsource-variable/outfit（OFL-1.1）、@fontsource/space-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - vite.config.ts：base './'，build.sourcemap false，src/ 中的任何内容都不会被复制到 dist/。
  - tailwind.config.js：darkMode 'class'；扩展颜色 ink #0D1B3D、signal #FFE14D、harbor #1F4E8C、white #FFFFFF、mist #F4F6FA、cloud #DDE3EE、steel #5B6478；所有主题颜色都通过 src/index.css 中定义的 CSS 变量使用，因此浅色和深色主题通过更改 <html> 上的 class 来切换。
  - src/components/Mark.tsx 将 logo 标记渲染为内联 SVG 路径；src/components/Wordmark.tsx 以展示字体设置字标。没有 logo 图像文件。
  - 一个小型 hash 路由器读取 location.hash：#/（概览）、#/logo、#/colour、#/type、#/icons、#/imagery、#/motion、#/voice、#/components、#/templates、#/downloads；一个路由可以携带一个锚点（#/colour:contrast），该锚点会滚动到某个子部分并使其闪烁；否则在路由更改时滚动到顶部。没有路由器库。
  - src/lib/contrast.ts 使用 WCAG 公式导出 relativeLuminance(hex) 和 contrastRatio(a, b)；src/lib/download.ts 导出辅助函数，将 SVG 节点、canvas 或文本字符串转换为浏览器中下载的文件。
  - src/search.ts 从 content.ts 构建搜索索引：每个部分和子部分及其标题、关键词和路由。
  - 所有文案、部分、规则、色板、类型样式、图标列表、缓动、语音对、组件和下载都作为类型化对象存在于 src/content.ts 中；组件从不硬编码文案。

## 变量
- [BRAND] — 公司名称（默认："Osier"）。用于字标、封面以及每个下载文件名（通过 [BRAND_SLUG]）。
- [TAGLINE] — 一句关于公司的描述（默认："Scheduling software for busy clinics"）
- [VERSION] — 书籍的版本标签（默认："3.2"）
- [CREDIT] — 在页脚保留一个小的 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/brand-guidelines-website（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/brand-guidelines-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
