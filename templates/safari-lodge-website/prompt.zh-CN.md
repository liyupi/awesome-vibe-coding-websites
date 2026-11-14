> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# Safari Lodge 网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个豪华野奢营地的单页营销网站：黄金时刻的电影感视觉识别（赭石色、橄榄绿、炭黑色、暖色颗粒质感），一个全出血的黄昏稀树草原主视觉区，一条编辑风格的保护区横带，一个展示黎明与黄昏帐篷套房的套房画廊，一条垂直的“营地一日”时间线，带示例定价的游猎驱车与体验卡片，一张季节性价格表，以及一个客户端询价表单。

- 受众：野奢营地、帐篷营地、荒野度假地以及为其打造网站的创意工作室；也包括摄影游猎与探险旅行机构。
- 目标：先卖出感觉——金色光线、空间感与静谧——再让规划显得确定：看套房、体验营地一日、了解季节与价格，并留下询价。
- 语调：安静、温暖、不慌不忙；简短的陈述句，带着野外笔记般的精确；奢华通过克制与光线来表达，绝不用夸张辞藻。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/fraunces（OFL）、@fontsource/work-sans（OFL）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置：
  - 使用 npm create vite@latest safari-lodge-website -- --template react-ts 搭建脚手架；将 tailwindcss@3.4、postcss 和 autoprefixer 添加为开发依赖；将 motion、lucide-react、@fontsource/fraunces 和 @fontsource/work-sans 添加为依赖。
  - vite.config.ts：base 设为 './'，build.sourcemap 设为 false，构建输出到 dist/。
  - tailwind.config.js：扩展颜色 charcoal #1C1A16、charcoal-raised #26231D、fieldline #3A372F、ochre #C98A3B、ochre-light #E4B36A、olive #6E6F4C、bone #EFE7D8、sandmist #A79C88；fontFamily 中 display 设为 'Fraunces'，sans 设为 'Work Sans'；将默认 borderRadius 设为 2px（rounded-sm）。
  - postcss.config.js：tailwindcss + autoprefixer。
  - 暖色颗粒叠加层：在 src/index.css 中定义 .grain-overlay，作为 fixed、inset-0、pointer-events-none 的图层，opacity 为 0.08，mix-blend-mode 为 soft-light，并使用由内联 SVG data URI 构建的重复 background-image（feTurbulence 类型为 fractalNoise，baseFrequency 为 0.8，280px 平铺）；在 App 中于每个页面和照片之上渲染一次——这层暖色颗粒是本站的标志性特征。
  - src/lib/motion.ts：共享的 Motion variants——reveal（opacity 0→1，y 26→0，700ms cubic-bezier(0.16,1,0.3,1)，90ms stagger，whileInView once）、hoverLift（y -2px，200ms）——并通过 useReducedMotion 回退为普通的 200ms opacity 淡入。
  - src/components/Timeline.tsx：垂直日程轨道——一条 1px 的 fieldline 轨道，带有五个 10px 的 ochre 圆点，当对应站点越过视口 45% 时圆点填充（IntersectionObserver，每个站点仅触发一次，200ms）。
  - 将所有面向用户的字符串（品牌、保护区、套房、价格、时间线站点、体验、咨询文案、联系邮箱）保留在 src/content.ts 中；各区块从中读取，以便在一处替换值。
  - index.html：<title>[BRAND] — Safari Lodge, [REGION]</title> 以及一个用代码绘制的 favicon.svg（charcoal 底色上简单的 ochre 金合欢树剪影）；不做其他 meta 工作。

## 变量
- [BRAND] — 旅馆名称（默认：“Mopane Reach”）。用于字标、页面标题、旅馆一日标题和联系邮箱（stay@mopanereach.com，来自 content.ts）的虚构旅馆名称。
- [REGION] — 保护区名称（默认：“Karoha Conservancy”）。旅馆所在的虚构私人保护区——主视觉标签、介绍文案和页脚行。
- [SUITES] — 套房数量（默认：“8”）。主视觉和介绍条中的小型旅馆承诺（'[SUITES] tented suites'）；图库展示了其中三间。
- [RATE_FROM] — 起价每晚房价（默认：“$740”）。旺季起价——主视觉副行（'stays from [RATE_FROM] per suite, per night'）以及房价表中的旱季列。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/safari-lodge-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/safari-lodge-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
