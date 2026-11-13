> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 海洋深度滚动解说页（Ocean Depth Scroll Explainer）

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个为 [BRAND] 打造的单页交互式解说页面，名为 [TITLE]：一次超长滚动，就是一场穿越 [SUBJECT] 的下潜，从水面 0 m 一路下潜到 [ZONES] 中最后一个区域的底部。全屏开场画面展示水线。随后，下潜区块将滚动映射为深度：[ZONES] 中的每个区域均分滚动份额，深度在每个份额内线性推进。一个固定的深度计显示实时米数读数、区域名称、光照、压强和温度。页面背景色随深度从阳光照射下的青色插值过渡到近乎黑色。每个区域有两段简短的衬线体章节文字，在左右两侧交替淡入淡出。六张真实的公有领域 NOAA 照片作为带框图版出现在前三个区域中，并随着水体变暗而逐渐去饱和。一块 canvas 绘制海雪、水面光柱、水母、灯笼鱼群和一条鮟鱇鱼，它们会对光标做出反应，底部还绘制了海床。页面在海床处结束，那里有一个发光的生物，访客可以按住它使其闪亮，随后是一行参观信息和一枚返回水面的按钮。静态站点，无后端，无音频。

- 受众：小型海洋科学中心的访客、9–14 岁的学校班级及其教师，以及在手机或笔记本电脑上充满好奇心的成年人。也包括科学中心、博物馆、教师和科学写作者，他们希望让一个分层主题（海洋、大气、岩层）变得可感可触。
- 目标：让海洋的尺度被感受到，而非仅仅被读到：读者读完时应知道各区域名称、大致深度，以及每个区域一个令人难忘的事实，并应想要亲自造访 [BRAND] 的 Deep Room。
- 语调：安静、精确、略带诗意。简短的陈述句，真实的数字，不用感叹号，不炒作。标题读起来像优秀博物馆里的图注；正文是一两句平实的科学表述。

## 技术栈
- 框架：Vite 5 + 原生 TypeScript
- 样式：纯 CSS，自定义属性
- 库：gsap 3（核心 + ScrollTrigger）（GSAP Standard“免费”许可）、lenis（MIT）、vite（MIT）、typescript（Apache-2.0）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource-variable/manrope（OFL-1.1）、@fontsource/dm-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 vanilla-ts 模板通过 npm create vite@latest 脚手架创建。不使用 UI 框架。单页面：index.html 加 src/main.ts。
  - vite.config.ts：base './'，build { outDir: 'dist', sourcemap: false, assetsInlineLimit: 0 }。不要将 src/ 复制到 dist/。
  - 文件布局：src/content.ts（所有字符串、ZONES 列表、章节、图版、致谢）、src/depth.ts（滚动→深度映射、颜色停靠点、光/压力/温度函数）、src/scene/（Ocean.ts canvas 循环、Snow.ts、Shafts.ts、Jelly.ts、Lanternfish.ts、Angler.ts、Seafloor.ts、Glow.ts）、src/ui/（Intro.ts、Gauge.ts、Chapters.ts、Plates.ts、Finale.ts、Cursor.ts）、src/styles.css。
  - 字体：在 src/main.ts 中导入 '@fontsource-variable/fraunces'、'@fontsource-variable/fraunces/wght-italic.css'、'@fontsource-variable/manrope'、'@fontsource/dm-mono/400.css' 和 '@fontsource/dm-mono/500.css'。CSS 字体族：'Fraunces Variable'、'Manrope Variable'、'DM Mono'，各自带有 serif / sans-serif / monospace 回退。
  - 平滑滚动：new Lenis({ lerp: 0.085, wheelMultiplier: 0.9, smoothWheel: true }); lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0)。gsap.registerPlugin(ScrollTrigger)。在 prefers-reduced-motion 下不创建 Lenis（使用原生滚动）。
  - src/content.ts 中的 ZONES 解析：按 ', ' 拆分 [ZONES]，每一项 'Name start–end'（短破折号或连字符）给出以米为单位的 { name, start, end }。验证区域连续且从 0 开始；MAX = 最后一个区域的结束值。页面支持 3 到 6 个区域。
  - 区块高度在加载时根据 window.innerHeight 以 px 设置，并且仅在视口宽度变化时重新计算（这样移动端工具栏不会导致页面跳动）：#intro = 1 × vh，#dive = N × 3.6 × vh（N = 区域数量），#finale = 1.8 × vh。
  - 照片位于 public/images/ 下，使用 Assets 中的确切文件名，并以相对路径引用（'./images/plate-1-kelp-canopy.jpg'）。在构建前于项目根目录写入 ASSETS.md。
  - 所有颜色都是 src/styles.css 中 :root 上的 CSS 自定义属性，并在 src/depth.ts 中镜像用于 canvas 和插值。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 文件、favicon.svg 和六张照片（约 3 MB）。保持在 20 MB 以下。

## 变量
- [BRAND] — 组织或项目名称（默认："Tidewell Ocean Lab"）。显示在左上角、引言眉题、结尾和 <title> 中。
- [TITLE] — 下潜的标题（默认："Six Thousand Metres"）。两到四个词。最后一个词在引言中单独一行以斜体呈现。
- [SUBJECT] — 读者下潜穿越的对象（默认："the open ocean"）。小写短语，用于句子内部，例如 'a deep ocean trench'。
- [ZONES] — 带深度范围（米）的区域，从上到下（默认："Sunlight 0–200, Twilight 200–1000, Midnight 1000–4000, Abyss 4000–6000"）。3–6 个区域，连续，第一个从 0 开始。最后一个结束值即最大深度。每个区域写两章。
- [VISIT_LINE] — 实用信息行：地点、营业时间、价格（默认："Deep Room, 14 Brinewater Quay, Port Halden · Tue–Sun 10:00–17:30 · Adults $14, under-16s free"）
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/ocean-depth-scroll-explainer（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块为键，以便日后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/ocean-depth-scroll-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
