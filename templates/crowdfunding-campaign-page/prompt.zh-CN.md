> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 众筹活动页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个为虚构桌游打造的单页众筹活动：深梅子色（deep-plum）底色配奶油色面板与黄铜点缀，一张桌面微距主视觉展示游戏盒与组件，一条示例筹款进度条配支持者与剩余天数标签，三个限量奖励档位，一条动画化的延伸目标轨道，随进度条越过里程碑而解锁，故事章节配组件特写，一个坦诚的 FAQ 手风琴和一个示例更新列表。

- 受众：桌游设计师、桌面游戏工作室以及任何正在开展产品众筹的创作者——还有那些为其搭建页面的工作室。
- 目标：让访客在一次滚动中从“桌上看着真不错”走到“我想加入”：用进度条为故事注入资金感，挑选一个档位，看看还能解锁什么，并足够信任团队去按下支持按钮——此处为演示说明，正式上线时为真实平台结账。
- 语调：温暖、朴实、游戏之夜式的坦诚——对木材与亚麻充满热情，对炒作保持安静；每个数字都愉快地承认自己是示例文案。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/young-serif（OFL）、@fontsource/alegreya-sans（OFL）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置：
  - 使用 npm create vite@latest crowdfunding-campaign-page -- --template react-ts 脚手架创建项目；将 tailwindcss@3.4、postcss 和 autoprefixer 添加为开发依赖；将 motion、lucide-react、@fontsource/young-serif 和 @fontsource/alegreya-sans 添加为依赖。
  - vite.config.ts：base './'，build.sourcemap false，构建输出到 dist/。
  - tailwind.config.js：扩展颜色 plumdeep #2A1D27、plum #3A2A37、cream #F5EBDC、creamline #DCCDB6、brass #C89B4B、brasslight #E0BC72、cocoa #3B2F2A、mauveash #8D7A82；fontFamily display 'Young Serif' 和 sans 'Alegreya Sans'；radius：panel 12px 和 pill 999px。
  - postcss.config.js：tailwindcss + autoprefixer。
  - src/components/ProgressStory.tsx：筹款核心区——一个奶油色（cream）面板，承载已筹金额数字（在进入视口时通过 rAF 从 0 计数到 31240，仅执行一次）、一个填充至 111% 的 10px 进度条（1.8s ease-out）、支持者与剩余天数标签，以及一行包含四个里程碑节点的延伸目标；每个节点的状态由动画数值与 content.ts 中固定的 thresholds 数组（$32,000 / $38,000 / $46,000）比较得出——当动画数值越过某个阈值时，该节点从锁定状态（mauveash，lucide lock）弹出为解锁状态（brass，lucide check）；在目标标记处放置一个 'FUNDED — SAMPLE' 黄铜色（brass）标签。
  - FAQ 手风琴使用 button + region 配对构建（aria-expanded、可键盘操作、无原生 details 样式怪癖）：不要求同时只展开一项；展开时 chevron 旋转 180deg。
  - 支持按钮为演示锚点：每个档位的 'Pledge $XX' 按钮都会在该档位下方显示相同的行内提示（300ms 淡入，Alegreya Sans 13px mauveash）：'Demo pledge — nothing is charged, no platform is connected.'
  - src/lib/motion.ts：reveal 变体（opacity 0→1，y 22→0，700ms cubic-bezier(0.16,1,0.3,1)，100ms stagger，whileInView once），配合 useReducedMotion 时进度条立即满格、无计数动画、无节点弹出。
  - 将所有面向用户的字符串和数据集（游戏、工作室、已筹/目标/天数、档位、阈值、故事章节、团队、FAQ、更新）保留在 src/content.ts 中；各区块从中读取，以便在一处替换数值。
  - index.html：<title>[GAME] — a board game by [STUDIO]</title> 以及一个用代码绘制的 favicon.svg（在 plum 底色上的简单黄铜色（brass）米宝剪影）；不做其他 meta 工作。

## 变量
- [GAME] — 项目名称（默认：“Thistlewick”）。虚构游戏的名称——活动标题、主角、档位和页脚。
- [STUDIO] — 工作室名称（默认：“Paper Lantern Press”）。活动背后的虚构工作室；页眉字标、团队介绍和页脚。
- [GOAL] — 筹款目标（默认：“$28,000”）。进度条所对照的示例筹款目标；目标标记位于进度条的 100% 处。
- [DAYS] — 剩余天数（默认：“14”）。静态的剩余天数标签——仅为示例数字，绝不是指向真实日期的倒计时。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/crowdfunding-campaign-page（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 深梅紫（Plum deep）`#2A1D27` — 全站页面底色 — 温暖的深梅紫，承载一切的那张桌面。
- 梅紫（Plum）`#3A2A37` — 悬停色调、梅紫底上的档位卡片边框、更新行。
- 奶油色（Cream）`#F5EBDC` — 面板、档位卡片、进度面板、FAQ 行 — 页面的纸张。
- 奶油线（Cream line）`#DCCDB6` — 奶油色表面上的细线与分隔线。
- 黄铜色（Brass）`#C89B4B` — 仅用于金额与里程碑：已筹金额、进度填充、已解锁节点、价格、标签、链接。
- 浅黄铜色（Brass light）`#E0BC72` — 黄铜色的悬停与强调状态；最受欢迎缎带。
- 可可色（Cocoa）`#3B2F2A` — 奶油色上的主文本 — 温暖的深棕色，绝不用黑色。
- 灰紫褐（Mauve ash）`#8D7A82` — 梅紫底上的次要文本：说明文字、示例注释、未解锁里程碑标签。

### 字体排印（Typography）
- 展示字体（Display）— 活动标题、档位名称、章节标题（厚实的故事书衬线体）：Young Serif（OFL），字重 400
- 文本字体（Text）— 正文、标签、按钮、FAQ（温暖的人文无衬线体；标签大写、字距 0.12em）：Alegreya Sans（OFL），字重 400/500/700

### 布局与动效（Layout & motion）
- 间距（Spacing）：游戏之夜般的宽裕：区块桌面端 py-28（112px）/ 移动端 py-20；内容 max-w-6xl px-6/px-10；奶油色面板内边距 28px，配 1px 奶油线边框；档位与章节间距 24px；进度面板内边距 36px — 它是那张金额桌。
- 圆角（Radius）：像盒角一样圆润：面板、卡片和图片 12px；标签和按钮为 999px 胶囊形；进度条本身 999px。
- 动效（Motion）：进度故事：显现时进度条在 1.8s ease-out 内从 0→111% 填充，同时已筹金额数字递增（rAF）；当填充越过 100% 时，'FUNDED — SAMPLE' 标签弹出。
- 动效（Motion）：延伸目标：当递增数字越过每个阈值（$32k、$38k、$46k）时，该节点从锁定弹出为已解锁黄铜色（scale 0.7→1 弹簧，300ms）；锁定节点保持 60% 不透明度，并准确说明还差多少。
- 动效（Motion）：档位卡片悬停上浮 3px，价格转为浅黄铜色（200ms）；最受欢迎缎带在显现时摆动一次（rotate ±3°，600ms）。
- 动效（Motion）：FAQ：行以 280ms 高度缓动展开，箭头旋转 180°；支持键盘操作。
- 动效（Motion）：显现：区块、档位和章节淡入上移（y 22→0，700ms），通过 Motion whileInView 以 100ms 错峰，仅一次。
- 动效（Motion）：首屏：桌面微距图在 2.5s 内从 1.03→1 稳定；标题随后延迟 200ms 出现。
- 动效（Motion）：prefers-reduced-motion：进度条立即渲染为满格并显示最终金额（无递增），里程碑状态直接渲染为最终态（无弹出），FAQ 无缓动展开，所有显现变为 200ms 淡入。
- 图像（Imagery）：一场桌面游戏场景：深梅紫毛毡桌面上游戏配件的温暖微距与俯拍摄影，单一暖灯从左上方投下光晕 — 木质米宝与灯笼棋子、亚麻质感卡牌、黄铜色调骰子与硬币、一个盒子和一个无标记插画棋盘的一角 — 柔和阴影、浅景深、温馨游戏之夜氛围、奶油色与木色调配黄铜高光。配件不带有可读文字（空白卡牌、无标记棋盘和骰子），无标识，画面中绝不出现人物。六张照片由 VibeFather 生成并下载到 public/images。

## 页面与区块
### [GAME] — 一款由 [STUDIO] 出品的桌游（`index.html`）
1. **页眉（Header）** — 固定顶栏，64px，plumdeep（深梅色）92% 不透明度，底部有 1px plum（梅色）细线。左侧：[STUDIO] 字标，Young Serif 18px cream（奶油色）。右侧（桌面端）：锚点链接 'Story'、'Rewards'、'Stretch goals'、'FAQ'，Alegreya Sans 500 14px mauveash（灰紫褐色）→ 悬停时变为 cream；然后是黄铜色胶囊按钮 'Back this project'（cocoa（可可色）文字）→ #rewards。移动端：字标 + 胶囊按钮 + lucide menu/x 切换按钮，打开一个 plum 面板，四个链接纵向堆叠。
   布局：position fixed，z-40；该栏从加载时即存在（主视觉照片在其下方延伸）。
   动效：移动端面板下滑 250ms；链接悬停 200ms；黄铜色胶囊按钮按下时变暗。
2. **主视觉 — 桌面** — 全出血桌面微距图（public/images/components-hero.webp）：半开的游戏盒，木质灯笼棋子、meeples、骰子和一叠空白卡牌在灯下排列。标题上方的标签，Alegreya Sans 700 12px 大写，字距 0.18em，黄铜色：'A COZY STRATEGY GAME · 2–5 PLAYERS · ~60 MIN'。标题用 Young Serif，clamp(3rem, 8vw, 6rem)，cream：'[GAME]'。副行 Alegreya Sans 400 17px cream，85% 不透明度，max-w 48ch：'Hedge witches, rebuilt villages and one warm lamp. Gather the grove, trade lantern-light, and let the thicket decide who wins.' CTA：'Back [GAME]'（黄铜色胶囊，cocoa 文字）→ #rewards；'Read the story'（cream 描边）→ #story。
   布局：min-h 92vh；照片 absolute inset-0 object-cover object-center；遮罩 linear-gradient(180deg, rgba(42,29,39,0.55) 0%, rgba(42,29,39,0.25) 45%, rgba(42,29,39,0.94) 100%)；文本块左下，列 1–8，padding-bottom 96px。
   动效：照片在 2.5s 内从 1.03→1 稳定；标签、标题、副行和 CTA 从 300ms 起以 100ms 错峰淡入上移；减少动态效果：静态，单次淡入。
3. **筹款进度 — 示例** — 一块 cream 面板与主视觉底边重叠 -36px（max-w-6xl，12px 圆角，36px 内边距）：已筹金额用 Young Serif 48px 黄铜色，计数至 '$31,240'；旁边是 'of [GOAL] goal' 和 '111%'，Alegreya Sans cocoa；10px 进度条（creamline 轨道，黄铜色填充），在 100% 标记处有一个小的 'FUNDED — SAMPLE' 黄铜色标签；进度条下方三个标签，Alegreya Sans 13px — lucide users '1,412 backers — sample'，lucide clock '[DAYS] days to go — sample'，lucide info 'demo page, no real funding'。一切均派生自 content.ts。
   布局：面板横跨内容宽度，与主视觉重叠；标签在移动端换行；进度条全宽，已筹标签定位在 100% 减去自身宽度处。
   动效：显示时进度条从 0→111% 填充（1.8s），数字计数上升（rAF）；已筹标签在 100% 处弹出；减少动态效果：进度条立即满格，数字立即为最终值。
4. **回报档位** — id=rewards。标签 'REWARDS' 黄铜色；标题 Young Serif cocoa：'Pick your lantern.' 三张 cream 卡片（12px 圆角，creamline 边框，28px 内边距）：卡片 1 'Hedge Friend' — '$19' 黄铜色 — 'The base game: illustrated board, 60 linen-finish cards, five wooden lanterns, rulebook.' — 标签 'EARLY BIRD · LIMITED 200 — 63 CLAIMED (SAMPLE)'。卡片 2 'Village Keeper' — '$39' — 'Base game, painted-miniatures expansion, the art print, and unlocked stretch goals.' — 标签 'LIMITED 500 — 214 CLAIMED (SAMPLE)' — 外加顶边一条 brasslight 缎带 'MOST POPULAR'。卡片 3 'Grand Grove' — '$69' — 'Everything, the solo mode, an embroidered component bag, and your name printed in the rulebook.' — 标签 'LIMITED 100 — 18 CLAIMED (SAMPLE)'。每张卡片末尾有一个黄铜色胶囊按钮 'Pledge $XX — demo'，点击后显示内联提示 'Demo pledge — nothing is charged, no platform is connected.'（300ms 淡入）。
   布局：3 列网格（移动端堆叠），桌面端中间卡片上浮 8px；缎带横跨卡片 2 的顶边。
   动效：卡片以 120ms 错峰淡入上移；悬停上浮 3px；缎带摆动一次；演示提示淡入并保持。
5. **延伸目标 — 解锁轨道** — id=stretch。标签 'STRETCH GOALS'；标题：'More brass, if you will.' 一块 cream 面板，带水平轨道：四个里程碑节点，位于 100%（$28k 目标，黄铜色对勾，'FUNDED — SAMPLE'）、$32,000 'Metal coins' — 在填充动画期间解锁 — 'replaces punchboard coins with stamped metal'、$38,000 'Solo campaign mode' — 锁定 — 'needs $6,760 more (sample)'、$46,000 'Oversized grove board' — 锁定 — 'needs $14,760 more (sample)'。每个节点：一个 40px 圆形（锁定 = mauveash，带 lucide lock，60% 不透明度；解锁 = 黄铜色，带 lucide check）、一个 Young Serif 18px cocoa 标题、一个 Alegreya Sans 13px 描述，以及一个黄铜色阈值标签。轨道线以黄铜色填充至当前示例数字的位置（111% 在轨道末端截断）。
   布局：轨道 = 一条 2px creamline 水平线，节点均匀分布（flex 行，间距增大以填充）；移动端堆叠为垂直时间线，带一条垂直线。
   动效：轨道填充遵循与进度条相同的显示动画；$32k 节点在数字经过时从锁定弹出为解锁（scale 0.7→1，300ms）；锁定节点保持安静；减少动态效果：所有状态立即为最终值。
6. **活动故事** — id=story。标签 'THE STORY'；标题：'Why this table.' 三个章节，图文交替：章节 1 'The idea'（component-meeple.webp，1:1）— 'Cozy strategy, not cozy nap: one hour, five players, and a hedge that fights back. We wanted a game you could teach before the kettle boils.' 章节 2 'The pieces'（component-cards.webp 和 component-dice.webp，两张 1:1 并排）— 'Linen-finish cards, solid-wood lanterns, coins with weight. No plastic anywhere in the box — the thicket deserves better.' 章节 3 'The table'（table-scene.webp，16:9）— 'Two to five players, setup in four minutes, one scoring track even grandma will interrogate. It plays beautifully at two and rowdily at five.' 下方 cream 卡片上的团队列表：'From [STUDIO]' — 'Wren Callow — design · Ferris Okafor — development · Mattie Voss — illustrations'，附 ashrose 一行 'Invented creators for a demo campaign.'
   布局：章节在 12 列网格上交替（图片 1–5 / 文本 7–12，然后镜像）；章节 2 使用两张方形图片堆叠在列 1–5；团队卡片全宽 max-w-3xl 居中。
   动效：章节以 120ms 错峰淡入上移；图片在显示时缓慢 1.03→1 稳定；减少动态效果：普通淡入。
7. **FAQ 与更新** — id=faq。两列（堆叠）：左侧 'QUESTIONS' — cream 上的四行手风琴（问题 Alegreya Sans 700 16px cocoa，答案 15px cocoa，80% 不透明度）：'Is this a real campaign?' — 'No — this is a template demo. Every figure, tier limit and backer count is sample copy; the pledge buttons charge nothing.' / 'When does it ship?' — 'Sample answer: fulfillment is planned for the season after the campaign closes — a real page would state real windows.' / 'How many players?' — '2–5, best at 4; a solo mode sits behind the $38,000 stretch goal.' / 'What's in the box?' — 'Board, 60 cards, five wooden lanterns, coins, rulebook — no plastic.' 右侧 'UPDATES' — plum 上三行示例，cream 文字（无日期）：'Update 04 — The coins are metal' — 'The first stretch goal crossed its line tonight; foundry quotes are in.' / 'Update 03 — Box art, final' — 'The cover illustration is locked; the lantern glow stays.' / 'Update 02 — 1,000 lanterns lit' — 'A thousand backers before the second week — thank you.' 两列下方一行小字 mauveash：'Updates and answers are sample copy.'
   布局：两个 6 列半区（FAQ 左，更新右）；FAQ 行由 creamline 细线分隔；更新行由 plum 细线分隔。
   动效：FAQ 行展开 280ms，带旋转箭头；更新以 100ms 错峰淡入上移；减少动态效果：立即展开，普通淡入。
8. **页脚（Footer）** — 1px plum 顶部细线。左侧：'[STUDIO]'，Young Serif 16px cream，以及一行 Alegreya Sans 13px mauveash：'An invented studio shipping an invented game — all campaign numbers on this page are sample copy.' 右侧：锚点链接 'Story · Rewards · Stretch goals · FAQ'，mauveash；可选 [CREDIT] 链接。无日期，无社交行。
   布局：py-12，max-w-6xl，flex 行，移动端换行为列。
   动效：无。

## 资产
- 图片：将 https://media.vibefather.ai/assets/b50c4ead-d6ab-4931-95c5-38dd7a776a6b/components-hero.webp 下载到 public/images/components-hero.webp。替代文本：'A half-open board game box with wooden lantern pieces, meeples, dice and blank cards arranged on a plum felt table under a warm lamp.' 用作全出血的 hero 锚点（16:9）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/b50c4ead-d6ab-4931-95c5-38dd7a776a6b/component-meeple.webp 下载到 public/images/component-meeple.webp。替代文本：'Wooden meeples and lantern pieces clustered under warm lamp light.' 故事章节 1（1:1）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/b50c4ead-d6ab-4931-95c5-38dd7a776a6b/component-cards.webp 下载到 public/images/component-cards.webp。替代文本：'A fanned stack of linen-finish cards with abstract art faces and no text.' 故事章节 2（1:1）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/b50c4ead-d6ab-4931-95c5-38dd7a776a6b/component-dice.webp 下载到 public/images/component-dice.webp。替代文本：'Brass-and-cream dice and unmarked metal coins on plum felt.' 故事章节 2（1:1）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/b50c4ead-d6ab-4931-95c5-38dd7a776a6b/component-board.webp 下载到 public/images/component-board.webp。替代文本：'A corner of an illustrated game board with hedge paths and no text, wooden pieces resting on it.' 用于奖励档位条带旁（4:3）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/b50c4ead-d6ab-4931-95c5-38dd7a776a6b/table-scene.webp 下载到 public/images/table-scene.webp。替代文本：'The full game laid out on a plum felt table under a single warm lamp, box lid leaning nearby.' 故事章节 3（16:9）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图标：lucide-react（ISC）通过 npm —— 示例标签上的 users、clock 和 info，拉伸目标节点上的 lock 和 check，FAQ 上的 chevron-down，档位内容标题上的 package，CTA 中的 arrow-right，移动端页头中的 menu 和 x。不使用其他图标：不使用 emoji，不使用平台标识，不使用模仿真实货币符号的硬币图标（文本中的 $ 除外）。
- 字体：@fontsource/young-serif（OFL，字重 400）和 @fontsource/alegreya-sans（OFL，字重 400、500、700），在 src/main.tsx 中导入；绝不从 fonts.googleapis.com 或任何 CDN 加载。在项目根目录的 ASSETS.md 中列出这两个字体家族和六张照片：路径、来源、生成器或作者、许可证。

## 禁止事项
- 不涉及支付、不涉及结账、不涉及平台集成：支持按钮只显示演示提示（'nothing is charged, no platform is connected'），任何表单都不会提交。
- 不使用真实众筹平台的品牌标识：不得出现 Kickstarter、Indiegogo 或任何平台名称、标志或标志性的绿蓝色调——页面保持平台无关，最多只写 'your platform of choice'。
- 所有数字均为示例文案并保持标注：已筹金额、百分比、支持者数量、档位限额、已认领数量、阈值以及 [DAYS] 标签均为静态示例；没有真实倒计时、没有真实日期计算、没有任何实时性声明。
- 任何地方不得标注真实游戏、艺术家或工作室：游戏、工作室、创作者、档位和更新均为虚构；组件照片不暗示任何真实产品。
- 照片仅展示游戏组件和桌面——不出现人物；卡牌、版图、硬币和骰子上不得有可读文字（仅限空白或抽象面）且不得有标志；如果生成的图像出现文字、人脸或品牌，请替换。
- 不使用任何 CDN：字体通过 Fontsource 包提供，图标来自 lucide-react，照片来自 public/images；绝不外链，绝不使用 Unsplash/Pexels/Pixabay 或占位图服务。
- 生产构建：单条命令、压缩、无 source map、输出中无 src/、相对路径（Vite base './'）；每张照片压缩为 ≤ 400 KB WebP，使 dist/ 保持在 20 MB 以下。
- 单页面配合锚点导航；必须在 1440×900 和 390×844 下干净渲染且控制台零错误；FAQ 手风琴必须支持键盘操作（button + aria-expanded），所有动效必须遵循 prefers-reduced-motion（进度条和最终里程碑状态完全静态，无数字递增或弹出，仅淡入淡出）。
- 保持桌游的温暖质感：梅子色（plum）底色、奶油色（cream）面板、仅用于金额和里程碑的单一黄铜色（brass）点缀、Young Serif 搭配 Alegreya Sans、12px 圆角；无暗色霓虹、无玻璃拟态、无平台绿蓝色、无塑料感渐变。
- 所有文案、标签、示例数据和 alt 文本均为美式英语，存放于 src/content.ts；当 [GAME]、[STUDIO]、[GOAL] 或 [DAYS] 变更时，重写档位、阈值和故事文案以适配新活动，而不是在塔罗牌下保留女巫风格的文案。
- 在项目根目录的 ASSETS.md 中列出每个第三方文件（两个 Fontsource 字体家族、lucide 图标、六张照片）：路径、来源、许可证。

---
— Prompt by VibeFather · https://vibefather.ai/t/crowdfunding-campaign-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
