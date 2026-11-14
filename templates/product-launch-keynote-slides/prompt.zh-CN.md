> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 产品发布主题演讲幻灯片

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一场电影感的 14 页产品发布主题演讲，以静态网站的形式运行。[BRAND] 在浏览器标签页中发布 [PRODUCT]，即其全新的 [PRODUCT_CATEGORY]。纯黑舞台，每页一个概念，超大字号，一件聚光灯下的产品。可见的工艺是共享元素变形：同一张产品图片、产品名称、一张数据卡片和价格在页与页之间滑动、缩放并重新定位，而不是硬切。节奏：开场悬念、揭晓、三个功能节拍、数字、价格与日期，然后是一个单词的收尾页。默认产品是一款虚构的便携式家用电池：一根独立式的珊瑚色立柱，带有一道发光的接缝。

- 受众：创始人、产品营销人员和小团队，他们要发布某种实体产品，希望从链接和浏览器全屏来展示发布，而不是从幻灯片工具的导出文件。
- 目标：让一屋子人专注十分钟：营造张力、揭晓产品、让三个主张深入人心、落定价格和日期，并以一个词收尾。每一页也必须能通过其深链接独立成立。
- 基调：自信、从容、克制。简短的陈述句，一次一个想法，用具体数字而非形容词。不用感叹号，不用营销最高级。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react、react-dom 18（MIT）、vite 5、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、tailwindcss 3.4、postcss、autoprefixer（MIT）、motion（motion.dev，从 motion/react 导入）（MIT）、lucide-react（ISC）、@fontsource-variable/bricolage-grotesque（OFL-1.1）、@fontsource-variable/inter-tight（OFL-1.1）、@fontsource-variable/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 Vite 的 react-ts 模板搭建脚手架；package.json 脚本：dev = vite，build = tsc -b && vite build，preview = vite preview。
  - vite.config.ts：base './'，build.sourcemap false，build.outDir 'dist'。
  - tailwind.config.ts：content ['./index.html', './src/**/*.{ts,tsx}']，扩展颜色 black #000000、coral #FF4B2B、ultraviolet #5B2EFF、white #FFFFFF、ash #A6A6B3、graphite #14141C、hairline #2A2A36，以及 fontFamily display 'Bricolage Grotesque Variable'、sans 'Inter Tight Variable'、mono 'JetBrains Mono Variable'。
  - 在 src/main.tsx 中一次性导入三个 Fontsource 包。
  - src/styles/globals.css：html、body 和 #root 高度 100%，背景 #000000，文字颜色 #FFFFFF，overflow hidden，overscroll-behavior none，user-select none。在此定义尺寸单位：:root { --u: 1cqw; --min: 11px } 以及 @media (max-aspect-ratio: 1/1) { :root { --u: 2.1cqw } }。概览磁贴设置 --min: 0px。
  - 幻灯片内所有字号、间距和偏移量都通过辅助函数 u(n) 返回 'calc(var(--u) * n)' 来使用 --u 的倍数。任何小于 1.7u 的文字使用 max(var(--min), u(n))。未注册的自定义属性在使用处解析，因此同一个幻灯片组件在舞台内和在小概览磁贴内都能正确缩放。
  - 舞台尺寸设置，而非缩放：舞台元素通过 CSS 获得真实尺寸，横屏宽度 min(100vw, 100dvh * 16 / 9)，aspect-ratio 16 / 9；竖屏（max-aspect-ratio: 1/1）宽度 min(100vw, 100dvh * 9 / 16)，aspect-ratio 9 / 16，container-type: size，overflow hidden，position relative，使用 flex 在视口中居中。切勿使用 CSS transform: scale() 适配舞台，因为那样共享元素测量会出错。
  - src/content/deck.ts 存放所有文案、变量值和图片路径；src/content/poses.ts 存放两种方向下的演员姿态表。组件只从这两个文件读取。幻灯片数量和每张幻灯片的构建数存放在 deck.ts 中，为包含 14 个条目的数组 { id, builds }。
  - 文件夹结构：src/slides/Slide01.tsx 到 Slide14.tsx（仅文案层），src/components（Stage、ActorLayer、ProductActor、TextActor、CountUp、Build、Hud、ProgressBar、ClickZones、Overview），src/lib（useDeck.ts 用于幻灯片、构建、hash 和输入处理；usePose.ts 使用 matchMedia 读取方向）。
  - 每个幻灯片组件和 ActorLayer 接收 { slide, build, isStatic }：isStatic 渲染最终状态，所有构建可见，无 layoutId 且无动画。它用于概览磁贴和减少动态效果。
  - 使用 Motion 的 useReducedMotion 读取 prefers-reduced-motion。当为 true 时：演员渲染时无 layoutId，幻灯片切换为简单的 300ms 不透明度交叉淡入淡出，CountUp 显示最终值，构建仅以不透明度出现，无缓慢图片漂移。
  - CountUp 使用 Motion 的 animate() 从上一个值（幻灯片进入时为 0）补间到目标值，保留源字符串中的前缀、后缀、逗号和十进制（'$1,490'、'2.4'），并在 Inter Tight 上设置 font-variant-numeric: tabular-nums 使数字不抖动。
  - 在挂载时使用 new Image() 预加载全部六张图片，使变形动画不会闪现空帧。
  - 添加 public/favicon.svg：一个黑色圆角方块，带一条水平 coral 线。页面标题为 '[BRAND] [PRODUCT] launch keynote'。
  - 在项目根目录创建 ASSETS.md，列出每张图片、字体和图标集：路径或包名、来源 URL、作者和许可证。

## 变量
- [BRAND] — 公司名称（默认："Norvane"）
- [PRODUCT] — 产品名称，一个适合大字号展示的短词（默认："Cinder"）。保持在 10 个字符以内。
- [PRODUCT_CATEGORY] — 产品是什么，小写（默认："home battery"）
- [PRICE] — 发布价格（默认："$1,490"）。货币符号加数字；它会在价格幻灯片上以计数动画呈现。
- [SHIP_DATE] — 产品发货或开售的日期（默认："March 18"）
- [CLOSING_WORD] — 最后一张幻灯片上的单个词，带句号（默认："Charged."）。保持在 10 个字符以内。
- [CREDIT] — 在页脚保留一个小的 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/product-launch-keynote-slides（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/product-launch-keynote-slides?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
