> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 习惯追踪应用落地页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 Dewly 打造的单页落地网站，Dewly 是一款虚构的移动端习惯追踪应用。整体轻盈通透，奶油色背景上漂浮着柔和的粉彩渐变光斑。标志性设计包括：一个完全用 CSS 绘制的手机模型，它在访客滚动浏览功能时保持粘性固定，屏幕则在四个应用内视图之间交叉淡入淡出；以及一个可交互的连续打卡日历，访客可以点击查看自己的连续天数、最长连续天数和完成圆环实时更新。此外还有：习惯标签跑马灯、带代码绘制首字母头像的用户评价、带月付/年付切换的 Free / Plus 定价、FAQ，以及一张带代码绘制下载按钮的下载卡片。

- 目标受众：那些反复重启日常习惯、想要一款感觉友善而非严苛的追踪应用的忙碌人群。
- 目标：让访客下载应用。每个主按钮都指向下载区块，交互式演示让访客在安装前就能感受应用的体验。
- 语调：温暖、鼓励、略带俏皮。短句，不制造负罪感，不使用打鸡血式语言。感觉就像一位替你记事的朋友。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react 18（MIT）、react-dom 18（MIT）、motion（从 motion/react 导入）（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource-variable/plus-jakarta-sans（OFL-1.1）、tailwindcss 3.4 + postcss + autoprefixer（开发依赖）（MIT）、vite 5 + @vitejs/plugin-react（开发依赖）（MIT）、typescript（开发依赖）（Apache-2.0）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - 使用 Vite react-ts 模板搭建脚手架；package.json 脚本：dev = vite，build = tsc -b && vite build，preview = vite preview。
  - vite.config.ts：plugins [react()]，base: './'，build: { sourcemap: false, outDir: 'dist' }。
  - tailwind.config.ts：content ['./index.html', './src/**/*.{ts,tsx}']；用 Design > Colors 中的每个 token 扩展 colors，命名分别为 cream、ink、muted、line、peach、lilac、mint、butter、violet、violet-deep、coral、frame；扩展 fontFamily display: ['Fraunces Variable', 'Georgia', 'serif'] 和 sans: ['Plus Jakarta Sans Variable', 'system-ui', 'sans-serif']。
  - 在 tailwind.config.ts 中定义 keyframes：drift（translate 0,0 → 40px,-30px → -30px,20px → 0,0，22s ease-in-out infinite）、float（translateY 0 → -8px → 0，6s ease-in-out infinite）、marquee（translateX 0 → -50%，40s linear infinite）和 marquee-reverse（translateX -50% → 0，40s linear infinite）；将它们暴露为 animate-drift、animate-float、animate-marquee 和 animate-marquee-reverse。
  - 在 src/index.css 中添加一个 @media (prefers-reduced-motion: reduce) 块，对 .animate-drift、.animate-float、.animate-marquee 和 .animate-marquee-reverse 设置 animation: none，并设置 html { scroll-behavior: auto }。否则设置 html { scroll-behavior: smooth } 并设置 scroll-padding-top: 88px。
  - 在 src/main.tsx 顶部导入 '@fontsource-variable/fraunces' 和 '@fontsource-variable/plus-jakarta-sans'。Body 使用 font-sans、text-ink 和 bg-cream。
  - 所有文案、习惯列表、日历种子数据、用户评价、价格和 FAQ 都放在 src/content.ts 中，按区块分组。组件只从中读取。
  - 组件位于 src/components/：Nav、Hero、PhoneFrame、screens/TodayScreen、screens/StreakScreen、screens/WeekScreen、screens/RemindersScreen、HabitMarquee、FeatureScroll、StreakDemo、Testimonials、Pricing、Faq、DownloadCta、Footer、Logo、DownloadButtons、BackgroundBlobs。
  - PhoneFrame 接受一个 width prop（桌面端 300，移动端 240），并通过 CSS transform 或缩放因子按比例缩放所有内部尺寸，保持 300:620 的宽高比。
  - 在每个有 JS 驱动动效的组件中使用 motion/react 的 useReducedMotion()。当它返回 true 时，跳过入场和浮动动画，并立即切换屏幕。
  - index.html：<title>Dewly — Tiny habits, kept gently</title>（品牌来自 [BRAND]）和 <link rel="icon" href="./favicon.svg" type="image/svg+xml">；将 favicon.svg（Logo 标记）放入 public/。

## 变量
- [BRAND] — 应用名称（默认："Dewly"）。简短、自创、单个词。用于导航字标、标题和文案中。
- [APP_PURPOSE] — 应用的功能，用一行说明（默认："a gentle habit tracker that celebrates small daily wins"）。驱动主视觉副标题、功能文案和手机内屏幕。
- [AUDIENCE] — 目标用户（默认："busy people who keep restarting their routines"）。决定用户评价（角色）、FAQ 和提醒的语气。
- [HABIT_EXAMPLES] — 应用中追踪的四个示例条目（默认："Drink water, Read 10 pages, Stretch, Walk outside"）。恰好四个，逗号分隔。它们填充 Today 屏幕、前四个跑马灯标签和前三个连续打卡演示标签。为每个条目选择一个合适的 Lucide 图标。
- [PLUS_PRICE] — 付费方案价格（默认："$4.99 a month or $35.99 a year"）。月付和年付价格。根据它们计算年付的每月价格和节省百分比，四舍五入到整数百分比。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/habit-tracker-app-landing-page（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/habit-tracker-app-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
