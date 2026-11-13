> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 财务顾问网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
为 [ADVISOR] 打造的单页网站，[ADVISOR] 是 [CITY] 的一位独立仅收费财务顾问，专注于 [FOCUS]，咨询规划课程为每小时 $[HOURLY]。网站必须在不过度承诺回报的前提下赢得信任：以人物肖像为锚点的首屏主视觉区、一个示例数学的退休计算器（年龄、缴款额、回报率 → 示意性图表）、一张用大白话写成的费用表、三项服务、虚构的资质证明，以及一个在客户端确认的初次通话预约。单页：index.html，包含各区块（#calculator、#fees、#services、#book）。每个数字都附有“仅为示意，不构成财务建议”的说明。一切都在浏览器中运行；不会向任何地方提交任何内容。

- 受众：45–65 岁的临近退休人群，账户分散在三位前雇主处；以及一直想整理却迟迟未动手的小企业主。他们害怕披着顾问外衣的推销员；页面必须读起来恰恰相反。
- 目标：预约初次通话。访客在十秒内看到一张面孔、一个费用承诺和“仅收费（fee-only）”；在两分钟内玩过计算器并选定一个日期。
- 语气：平实、耐心、精于数字。在用到术语的同一句话里就把它解释清楚。关于复利，只开一次冷幽默的玩笑。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/pt-serif（OFL-1.1）、@fontsource-variable/public-sans（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置（Setup）：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。项目根目录只有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键名添加到 theme.extend.colors（warmwhite、mist、charcoal-soft、ink、slate、green-deep、green-mist、brass、rule），并设置 fontFamily display ['PT Serif', 'Georgia', 'serif']、sans ['Public Sans Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 10px，并添加 maxWidth { container: '1080px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/pt-serif/400.css'、'@fontsource/pt-serif/700.css' 和 '@fontsource-variable/public-sans'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（所有字符串、费率、假设、服务、资质、FAQ 和图片路径，均带类型），src/lib/brand.ts（advisorSlug = [ADVISOR] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 advisorSlug + '.com'），src/lib/storage.ts（用 try/catch 包裹的安全 localStorage 读写，键前缀为 advisorSlug + ':'），src/lib/projection.ts（纯函数：project({age, monthly, returnPct}) → 使用按月复利计算到 85 岁的逐年余额；假设导出以供展示）。
  - 状态（State）：src/store/call.ts 是一个小型外部 store（useSyncExternalStore），持有 { day, name, email, sent }，持久化到 localStorage 键 advisorSlug + ':call'。
  - src/components/ 中的组件：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx、Disclaimer.tsx（共享的 'illustrative, not financial advice' 文案）；Hero.tsx、Calculator.tsx（AgeSlider.tsx、MonthlySlider.tsx、ReturnSlider.tsx、ProjectionChart.tsx 手写 SVG）、Fees.tsx（FeeRow.tsx）、Services.tsx（ServiceCard.tsx）、Credentials.tsx（CredBadge.tsx 绘制）、BookCall.tsx（DayChips.tsx、Confirmed.tsx）。src/pages/Home.tsx 组合它们。
  - 在首次构建之前，使用 curl -L -o 将资源（Assets）下列出的每张图片以给定的确切文件名下载到 public/images/。构建本身从不获取任何内容。
  - public/favicon.svg 如资源（Assets）下所述。index.html：lang en，<meta name='theme-color' content='#FBFAF6'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[ADVISOR] — Fee-only financial advice in [CITY]</title>。
  - 如资源（Assets）下所述，在项目根目录编写 ASSETS.md。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和四张图片。保持在 8 MB 以下。

## 变量
- [ADVISOR] — 顾问姓名（默认：“Marcus Bell”）。虚构顾问的姓名。用于标题、主视觉区、电子邮件（hello@ + 去掉连字符的 advisorSlug + .com）以及 localStorage 键。绝不使用真实人物或公司。
- [CITY] — 城市（默认：“Portland, Oregon”）。事务所所在地。用于标题、主视觉文案和页脚。可以使用真实城市。
- [FOCUS] — 专长（默认：“retirement planning”）。事务所的专业领域，小写。决定主视觉文案、第一张服务卡片和一个 FAQ。请保持为真实存在的专业领域。
- [HOURLY] — 小时费率（默认：“250”）。规划咨询的小时费率，以数字表示。决定费用表的第一行和透明度文案。请保持在 150–400 之间。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/financial-advisor-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/financial-advisor-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
