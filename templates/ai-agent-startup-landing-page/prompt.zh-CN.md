> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# AI Agent 创业公司落地页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 的 [PRODUCT] 打造一个以动效为主导的深色单页落地站点。首屏中一个实时 SVG 节点图展示任务卡片在六个 agent 节点之间流转；一个滚动固定的 Plan、Act、Review 区块会针对每个步骤重新排列同一张图；随后是使用指标、功能网格、集成墙、带月付/年付切换的定价、FAQ、收尾 CTA 和页脚。

- 受众：访客是 [AUDIENCE]，正在评估是否将重复性的多步骤工作交给 AI agent。他们具备足够的技术背景，希望看到 agent 如何协同、人类在何处保持控制，并且会在开始试用前比较各方案。
- 目标：无需视频，在十秒内让 agent 工作流变得可理解；通过可见的人类检查点和审计轨迹建立信任；并引导访客开始 14 天免费试用（主 CTA 为 'Start free'）或在定价区块比较方案。
- 基调：冷静、精确、技术化。使用简短的陈述句、具体的数字和任务名称，不用夸张词汇，不用感叹号。界面感觉像一间仪表完备的控制室：近黑色、细线条、等宽标签、一个发光的强调色。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、gsap 3（含 ScrollTrigger 插件）（GSAP Standard License（免费，含商业使用））、lenis（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/space-grotesk（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）、@fontsource-variable/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - 使用 npm create vite@latest 以 react-ts 模板搭建脚手架。单页面：项目根目录的 index.html，入口为 src/main.tsx。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - Tailwind 3.4 通过 PostCSS（tailwindcss + postcss + autoprefixer）接入，content 为 ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色以 kebab-case 键名加入 theme.extend.colors（void、panel、raised、line、line-strong、text、muted、faint、signal、signal-deep、done、done-deep、amber），并设置 fontFamily：display ['Space Grotesk Variable', 'system-ui', 'sans-serif']、sans ['Inter Variable', 'system-ui', 'sans-serif']、mono ['JetBrains Mono Variable', 'ui-monospace', 'monospace']。添加 maxWidth { container: '1200px' } 和 borderRadius { card: '14px', btn: '10px' }。
  - src/fonts.ts 导入 '@fontsource-variable/space-grotesk'、'@fontsource-variable/inter' 和 '@fontsource-variable/jetbrains-mono'；src/main.tsx 导入 src/fonts.ts 和 src/index.css。index.css 包含 Tailwind 各层、点阵网格背景、.glass 配方、'sweep' 和 'pulse' 关键帧，以及一个禁用 CSS 动画的 @media (prefers-reduced-motion: reduce) 块。
  - 文件布局：src/content.ts（所有文案和数据，带类型）、src/lib/brand.ts（brandSlug、taskPrefix、emailDomain）、src/lib/useReducedMotion.ts（matchMedia hook）、src/lib/motion.ts（一次性注册 ScrollTrigger，除非启用减少动态效果否则创建 Lenis，连接 lenis.on('scroll', ScrollTrigger.update)、gsap.ticker.add(t => lenis.raf(t * 1000))、gsap.ticker.lagSmoothing(0)，导出 scrollToId 和共享的 fadeUp 辅助函数）、src/graph/geometry.ts（节点和边定义、edgePath、hero 布局和三个步骤布局）、src/graph/Graph.tsx（带发光滤镜的 SVG defs、边、节点；接受 positions、litEdges 和 highlighted 属性）、src/graph/TaskCards.tsx 和 src/graph/useTaskLoop.ts（hero 循环）、src/components/（Header.tsx、MobileMenu.tsx、Hero.tsx、HowItWorks.tsx、Metrics.tsx、Sparkline.tsx、Features.tsx、Integrations.tsx、Pricing.tsx、BillingToggle.tsx、Faq.tsx、FinalCta.tsx、Footer.tsx、SectionHeader.tsx、Button.tsx）、src/App.tsx 按页面顺序组合它们。
  - 所有 GSAP 和 ScrollTrigger 实例都在 useLayoutEffect 内通过 gsap.context() 创建，并在卸载时还原；在字体加载完成后（document.fonts.ready）调用 ScrollTrigger.refresh()。使用 gsap.matchMedia()，使 pin 仅在 (min-width: 768px) 和 (prefers-reduced-motion: no-preference) 下存在。
  - index.html：lang en，<meta name='theme-color' content='#07090D'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BRAND] — Agent crews for [AUDIENCE]</title>。public/favicon.svg 是 #07090D 圆角方块上的标志图形。
  - 按 Assets 部分所述，在项目根目录编写 ASSETS.md。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 文件和 favicon.svg；应保持在 2 MB 以下。

## 变量
- [BRAND] — 品牌名称（默认：“Orbitask”）。虚构的产品名。用于字标、标题、首屏副标题、FAQ、页脚、任务 ID 前缀（前两个字母）以及邮箱域名。绝不使用真实存在的 AI 公司或智能体平台。
- [PRODUCT] — 产品是什么（默认：“a multi-agent workspace that turns support and ops tickets into finished work”）。一个完成“[BRAND] is ...”句式的小写短语。驱动首屏、步骤描述、任务卡片标题、功能、套餐描述和 FAQ 答案。
- [AUDIENCE] — 面向谁（默认：“support and operations teams at SaaS companies”）。复数名词短语。用于页面标题、页脚行和套餐描述；文案的语气会随之调整。
- [AGENT_ROLES] — 六个智能体角色（默认：“Triage, Planner, Researcher, Builder, Reviewer, Dispatcher”）。恰好六个以逗号分隔的单字角色，按工作流顺序排列：第一个负责接收，第五个负责审核，第六个负责交付。它们在每个图中标注节点 N1 到 N6；为每个角色选择一个匹配的 Lucide 图标。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/ai-agent-startup-landing-page（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/ai-agent-startup-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
