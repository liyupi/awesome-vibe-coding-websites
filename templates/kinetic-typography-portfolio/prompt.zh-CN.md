> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 动态排版作品集

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个四页的作品集网站，[BRAND] 是一家位于 [CITY] 的 [DISCIPLINE] 工作室，以超大的可变字体作为视觉作品本身。首屏由名字铺满，字母内部透出工作室照片。滚动时字母分裂、沿宽度轴拉伸并重新组合。项目索引是一列巨大的标题，悬停时字重和字宽发生变化，并带有跟随光标的预览静帧。打开项目时，先播放全屏字体过渡，再呈现案例研究。页面包括：index.html（首页）、work.html（含筛选的全部项目）、case.html?slug=…（案例研究，默认显示第一个项目）和 about.html。所有文案、项目列表和客户信息都放在一个文件 src/content.ts 中。当可变值不同于默认值时，重写每个标题、段落、项目和客户，使其契合新的人物与领域。布局、动效和配色严格保持所述不变。

- 受众：代理公司、工作室、广播机构和艺术节的艺术总监、制片人和品牌负责人，他们正在寻找能做出 [SPECIALTIES] 的人。他们浏览速度很快，从首屏判断工艺水准，并在联系之前打开两到三个案例研究。
- 目标：让访客在五秒内感受到设计师对动效的掌控，引导他们至少进入一个案例研究，并以清晰的预约方式收尾：一个 mailto 链接和一个复制邮箱按钮，附预约说明 [AVAILABILITY]。
- 语气：自信、安静、精确。简短的陈述句，第一人称单数，不用流行术语。字体负责大声表达，文案保持冷静。署名和数字要具体：听起来真实的时长、团队规模和艺术节名称，全部为虚构。

## 技术栈
- 框架：Vite 5 + 原生 TypeScript，多页面
- 样式：Tailwind CSS 3.4
- 库：vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、gsap（核心 + ScrollTrigger + Flip）（GSAP 标准许可证（免费，允许商业使用））、lenis（MIT）、lucide（ISC）、@fontsource-variable/anybody（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）、@fontsource-variable/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 Vite 的 vanilla-ts 模板搭建脚手架。在项目根目录放置四个 HTML 入口文件：index.html、work.html、case.html 和 about.html。在 vite.config.ts 的 build.rollupOptions.input 中注册全部四个入口。
  - vite.config.ts：base 设为 './'，build.sourcemap 设为 false，build.outDir 设为 'dist'，并使用默认的 esbuild 压缩。不要将 src/ 复制到 dist/ 中。
  - package.json 脚本："dev": "vite"，"build": "tsc --noEmit && vite build"，"preview": "vite preview"。
  - 字体：在 src/styles/main.css 中，导入 '@fontsource-variable/anybody/wdth.css'（字体族 'Anybody Variable'，字重 100–900，字宽 50%–150%）、'@fontsource-variable/inter' 和 '@fontsource-variable/jetbrains-mono'。切勿从 CDN 加载字体。
  - tailwind.config.ts：content 设为 ['./*.html', './src/**/*.ts']。扩展颜色：ink #0B0B0C、ink-2 #141416、paper #F2EFE8、paper-dim #A9A59C、line #2A2A2D、hot #FF4A1C 和 hot-deep #C7330F。fontFamily：display ['Anybody Variable', 'sans-serif']、sans ['Inter Variable', 'system-ui', 'sans-serif']、mono ['JetBrains Mono Variable', 'ui-monospace', 'monospace']。
  - 通过 CSS 自定义属性驱动所有展示字体：.vf { font-variation-settings: 'wght' var(--w, 800), 'wdth' var(--x, 100); }。GSAP 在每个元素或字母 span 上补间 --w 和 --x。切勿直接对 font-weight 或 font-stretch 做动画。
  - src/content.ts 导出：site（brand、discipline、city、specialties、availability、email 构建为 'hello@' + 品牌名小写并去除空格和重音符号 + '.studio'）、services[]、clients[]、stats[]、experience[]、awards[] 和 projects[]。每个 project 包含 slug、title、client、year、category、role、duration、team、tools[]、summary、brief、approach、outcome、quote {text, name, title}、stillSeed 和 accent。每个页面都从此文件渲染。
  - src/lib/split.ts：一个无依赖的拆分器，将元素的每个字符包裹在包装器内的 <span class="ch vf" aria-hidden="true"> 中，并在包装器上设置 aria-label 为完整文本。不要使用任何付费 GSAP 插件；不需要 SplitText。
  - src/lib/fit.ts：fitText(el) 在 font-size 100px 下测量元素，并设置其 font-size 使该行恰好填满容器宽度。在窗口大小变化时（防抖 150 ms）以及 document.fonts.ready 之后重新运行。
  - src/lib/stills.ts：drawStill(canvas, seed, variant, t) 绘制“资源”部分描述的代码生成动态静帧。它是纯 canvas 2D，按 devicePixelRatio 缩放并上限为 2。
  - src/lib/transition.ts：全屏案例过渡覆盖层，所有页面共享。
  - src/lib/smooth.ts：以 lerp 0.1 启动 Lenis。从 lenis.on('scroll') 调用 ScrollTrigger.update，并从 gsap.ticker 驱动 lenis.raf；设置 gsap.ticker.lagSmoothing(0)。在 prefers-reduced-motion 下完全跳过 Lenis。
  - 在 src/lib/gsap.ts 中一次性注册插件：gsap.registerPlugin(ScrollTrigger, Flip)，并在所有地方从此处导入 gsap。
  - 在 main.css 中添加 `@view-transition { navigation: auto; }`，以便支持的浏览器在页面之间交叉淡入淡出。GSAP 覆盖层是主要效果，必须在不依赖它的情况下工作。
  - Favicon：一个内联 SVG 文件 public/favicon.svg，包含一个 hot #FF4A1C 方块和 [BRAND] 的首字母（近黑色），以粗重宽大的几何字母绘制为路径或文本。每个页面的 <title> 为 '[BRAND] — [DISCIPLINE]'，内页在页面名前缀，例如 'Work — [BRAND]'。
  - 在项目根目录编写 ASSETS.md 文件，列出每个图像文件及其路径、来源 URL、作者和许可证。

## 变量
- [BRAND] — 设计师或工作室名称（默认：“Oda Brenner”）。两个短词作为巨型字体效果最佳，总长度约 8–14 个字母。它是主视觉图形、字标和电子邮件。
- [DISCIPLINE] — 专业领域（默认：“Motion designer & type animator”）。名称下方和页面标题中的那一行。
- [CITY] — 所在城市（默认：“Rotterdam”）。显示在主视觉元信息行、页脚和关于页面中。
- [SPECIALTIES] — 你创作的内容（默认：“title sequences, brand motion and kinetic identity systems”）。小写短语，用于驱动介绍陈述、服务项目和虚构的项目列表。
- [AVAILABILITY] — 预约说明（默认：“Booking projects from February 2027”）。旋转的主视觉徽章和联系区域。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/kinetic-typography-portfolio（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/kinetic-typography-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
