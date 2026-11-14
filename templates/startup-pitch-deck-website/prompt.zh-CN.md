> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 创业路演网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个 12 页的投资者路演幻灯片，以单页网站形式为 [BRAND] 构建，[BRAND] 是一家虚构的种子期初创公司，提供 [PRODUCT]。全屏幻灯片可通过方向键、空格、Page Up/Down、鼠标滚轮、触摸滑动和圆点导航栏切换；每张幻灯片都有自己的哈希链接（#/1 到 #/12）。市场、牵引力、商业模式和财务图表均为手绘 SVG，在对应幻灯片打开时播放动画。按 P 打开演讲者窗口，其中包含当前幻灯片和下一张幻灯片、演讲者备注、计时器以及一个通过 BroadcastChannel 与观众窗口保持同步的时钟。按 O 显示概览网格。打印时每页输出一张横向幻灯片，采用浅色主题，图表处于最终状态。

- 受众：在会议前后通过笔记本电脑或手机接收幻灯片链接的投资者；在第二屏幕上现场演示的创始人。公司面向 [AUDIENCE] 销售。
- 目标：让创始人发送一个链接，即可在任意幻灯片上打开，在手机上阅读良好，通过备注和计时器干净地演示，并打印成整洁的 PDF 用于数据室，从而使投资者理解这个机会，并就 [ROUND] 回复 [CONTACT_EMAIL]。
- 语调：平静、自信且具体，像一场排练充分的种子轮路演：简短的陈述式标题、具体的数字、没有流行词或感叹号。编辑风格的深色样式，配以充裕的留白和一抹电光色点缀。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react、react-dom 18（MIT）、vite 5、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、tailwindcss 3.4、postcss、autoprefixer（MIT）、@tailwindcss/container-queries（MIT）、motion（motion.dev，从 motion/react 导入）（MIT）、lucide-react（ISC）、@fontsource/instrument-serif（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）、@fontsource-variable/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 用 Vite 的 react-ts 模板搭建脚手架；package.json 脚本：dev = vite，build = tsc -b && vite build，preview = vite preview。
  - vite.config.ts：base './'，build.sourcemap false，build.outDir 'dist'，不复制 public/src。
  - tailwind.config.ts：content ['./index.html', './src/**/*.{ts,tsx}']，plugins [require('@tailwindcss/container-queries')]，从 CSS 变量扩展颜色（ink、surface、raised、rule、paper、muted、faint、accent、accent-deep）和 fontFamily display 'Instrument Serif'、sans 'Inter Variable'、mono 'JetBrains Mono Variable'。
  - 在 src/styles/globals.css 的 :root 上把每种颜色定义为 CSS 变量（深色值），并在 src/styles/print.css 的 @media print 中覆盖它们（浅色值）。
  - 在 src/main.tsx 中一次性导入三个 Fontsource 包（@fontsource/instrument-serif/400.css 和 400-italic.css、@fontsource-variable/inter、@fontsource-variable/jetbrains-mono）。
  - 把所有演示文稿文案、图表数据、演讲者备注和每页目标时间放在一个文件 src/content/deck.ts 中，导出变量值（brand、product、audience、round、contactEmail）和一个包含 12 个幻灯片对象的数组 { id, label, notes, targetSeconds, ...slide-specific data }。幻灯片组件只从中读取。
  - 文件夹布局：src/slides/Slide01Title.tsx … Slide12Closing.tsx，src/components（Chrome、DotRail、Toolbar、Overview、Thumbnail、CountUp、Presenter），src/lib（useDeckNavigation.ts、useHashRoute.ts、sync.ts），src/styles（globals.css、print.css）。
  - 每个幻灯片组件接收 { active: boolean, isStatic: boolean } props：active 触发其进入动画，isStatic 渲染无动画的最终状态（用于缩略图、打印和减少动态效果）。
  - 编写一个 CountUp 组件，当 active 时用 Motion 的 animate() 将数字从 0 动画到目标值，保留原始字符串的前缀、后缀和小数（'$9.6B'、'7.8%'、'$392K'），并在 isStatic 时渲染最终字符串。
  - 图表是手写的 SVG 组件，使用 viewBox 坐标；将任何 HTML 文本标签放在绝对定位的覆盖层中，这样文本永远不会拉伸。
  - 用 Motion 的 useReducedMotion 读取 prefers-reduced-motion 并传递类似 isStatic 的行为：幻灯片过渡变为即时切换，图表完整绘制渲染。
  - 在项目根目录创建 ASSETS.md，列出字体和图标集及其包名、源 URL 和许可证。

## 变量
- [BRAND] — 初创公司名称（默认："Ladingly"）。虚构的公司名称，作为字标显示，并出现在 title 标签和页脚中。
- [PRODUCT] — 一行产品描述（默认："Freight invoice auditing that catches carrier overbilling before you pay"）。用作标题幻灯片的副标题；幻灯片文案和图表数据会围绕它重写。
- [AUDIENCE] — 目标客户（默认："mid-market shippers spending $2M to $50M a year on freight"）。小写短语，在标题幻灯片上跟在 'For' 之后，在解决方案幻灯片上跟在 'Built for' 之后。
- [ROUND] — 正在募集的轮次（默认："$3.2M seed"）。金额和阶段，显示在标题、融资诉求和结尾幻灯片上。
- [CONTACT_EMAIL] — 创始人联系邮箱（默认："founders@ladingly.example"）。在结尾幻灯片上以 mailto 链接形式显示；演示时请保留 .example 域名。
- [CREDIT] — 在页脚保留一个指向 https://vibefather.ai/t/startup-pitch-deck-website 的小链接 "Template by VibeFather"（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/startup-pitch-deck-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
