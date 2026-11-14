> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 模板库落地页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的单页主页，[BRAND] 是一个原创 vibe-coding 网站模板库。每个模板都附带在线演示、构建该模板的精确提示词以及一份 DESIGN.md，用户可将提示词粘贴到 Claude Code、Codex、Cursor 或 Lovable 中使用。页面采用深色技术风格：接近黑色的中性底色、极细边框、等宽字体细节，以及一抹酸橙色（acid-lime）点缀。首屏是一面由自动滚动的浏览器窗口卡片组成的墙，每张卡片都是一个完全用 CSS/SVG 绘制的虚构迷你网站。首屏之后依次是：工作原理（Pick / Copy / Ship）、热门模板、按类型浏览（带数量）、在你的 agent 中使用（CLI / MCP / Skill 代码标签页）、Pro 抢先体验（带名额计量条）、FAQ 以及一个信息密集的页脚。

- 受众：使用 AI 编程 agent 构建网站的开发者、设计师和独立创作者，他们想要一个出色的起始设计，以及一个能可靠复现该设计的提示词。
- 目标：让访客在五秒内理解每个模板都是一个可运行的演示加上一段可复制的提示词。然后引导他们浏览模板（主 CTA）、配置 CLI/MCP/Skill，或通过 mailto 链接申请 Pro 抢先体验。
- 语气：精确、冷静、精心打磨。使用简短的陈述句和具体的名词，不用炒作词汇（不用 'revolutionary'、'supercharge'、'unleash'），不写废话。每个标题都点明其所在区块的内容。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/bricolage-grotesque（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）、@fontsource-variable/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。单页面：index.html，各区块通过哈希锚点（#how、#trending、#types、#agent、#pro、#faq）访问。
  - 通过 PostCSS（tailwindcss + postcss + autoprefixer）使用 Tailwind 3.4。将下方调色板添加到 theme.extend.colors，将三个字体家族添加到 theme.extend.fontFamily（display、sans、mono）。
  - 将 marquee 关键帧、aurora、光标闪烁和 reduced-motion 覆盖放入 src/index.css。
  - vite.config.ts：base './'，build { sourcemap: false, outDir: 'dist' }，插件 @vitejs/plugin-react。不要将 src/ 复制到 dist/。
  - dist/ 包含 index.html、带哈希的 JS/CSS、自托管的 woff2 字体和 favicon.svg。保持远低于 20 MB（预计低于 1 MB）。

## 变量
- [BRAND] — 品牌名称（默认："Lumen Index"）。在页眉和页脚中作为文字标识展示，同时用于 <title>、FAQ 标题和版权行。
- [BRAND_SLUG] — CLI / 包名 slug（默认："lumen-index"）。小写 slug，用于代码片段：npx [BRAND_SLUG]、[BRAND_SLUG]-mcp、[BRAND_SLUG]-templates。
- [CONTACT_EMAIL] — 联系邮箱（默认："hello@example.com"）。用于 Pro 抢先体验 mailto 按钮和页脚 Contact 链接。
- [SPOTS_TOTAL] — Pro 抢先体验名额（总数）（默认："500"）。为进度条虚构的占位数字。并非真实数据。
- [SPOTS_CLAIMED] — Pro 抢先体验名额（已认领）（默认："312"）。虚构的占位数字。进度条填充比例为 SPOTS_CLAIMED / SPOTS_TOTAL。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/template-library-landing-page（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- Ink `#0a0b0a` — 页面背景；青柠色按钮上的文字颜色
- Panel `#111311` — 区块面板、代码面板主体、卡片主体、眉标胶囊
- Raised `#171a17` — 悬停背景、浏览器外框的工具栏、活动标签页
- Line `#232723` — 各处 1px 细线边框和分隔线
- Line Strong `#2f342f` — 按钮轮廓、类输入框边框、浏览器圆点、进度条轨道边框
- Bone `#ecefe8` — 主文字和标题
- Ash `#9aa197` — 正文文案和次要文字
- Smoke `#6b7268` — 等宽标签、说明文字、代码注释、URL 胶囊
- Acid `#c6f432` — 唯一的强调色：主 CTA 填充、步骤序号、进度条填充、光标、对勾图标、悬停轮廓（55% 不透明度）。绝不用于大面积区域或正文文字。
- Acid Dim `#9fc426` — 主 CTA 悬停填充
- Aurora Green `rgba(104,150,102,0.22)` — 仅用于 Hero 的径向光晕，左上
- Aurora Teal `rgba(47,111,106,0.20)` — 仅用于 Hero 的径向光晕，右上
- Aurora Amber `rgba(170,126,52,0.12)` — 仅用于 Hero 的径向光晕，居中
- Syntax Teal `#7fb8a8` — 代码键名和标志
- Syntax Sand `#d8c08a` — 代码字符串

### 字体排印
- Display：H1、H2、卡片标题、类型列表名称、页脚巨型字标：Bricolage Grotesque Variable（@fontsource-variable/bricolage-grotesque）（OFL），字重 500/600/700
- Text：正文、导航、按钮、FAQ：Inter Variable（@fontsource-variable/inter）（OFL），字重 400/500/600
- Mono：眉标、步骤标签、标签、计数、URL 胶囊、代码面板、进度条数字：JetBrains Mono Variable（@fontsource-variable/jetbrains-mono）（OFL），字重 400/500

### 布局与动效
- 间距：8px 基准单位。容器最大宽度 1240px，居中，水平内边距 24px（640px 以下为 20px）。区块垂直内边距桌面端 128px、移动端 88px。区块头部块：等宽标签，然后间隔 16px 接 H2，然后间隔 16px 接 17px 的 Ash 介绍段落（最大宽度 620px），然后间隔 48px 接内容。字号层级：H1 72px/1.02，字重 600，字距 -0.03em（640px 以下为 44px）；H2 48px/1.05，字重 600，-0.025em（移动端 34px）；卡片标题 18px/1.3，字重 600；正文 17px/1.6；Hero 副标题 19px/1.55；等宽标签 12px 大写，字距 0.08em。网格间距：演示墙为 16px，目录为 20px。
- 圆角：浏览器外框卡片和目录卡片 10px；代码面板和 Pro 面板 14px；按钮 8px；标签、眉标和 URL 胶囊 999px；迷你站点内部形状 2–4px。除胶囊外，圆角不超过 14px。
- 动效：Hero 跑马灯：演示墙的每一行都是一条 flex 轨道，其中包含两遍卡片列表。每张卡片有 margin-right 16px，因此 translateX(0 → -50%) 可无缝循环。A 行和 C 行向左移动；B 行和 D 行向右移动（animation-direction: reverse）。时长：A 64s，B 76s，C 58s，D 70s，linear，infinite。悬停某一行时设置 animation-play-state: paused。
- 动效：Hero 极光：三个绝对定位的 60vw 圆形，使用 radial-gradient(closest-side, color, transparent) 和 filter: blur(80px)。它们以 24s ease-in-out infinite alternate 关键帧漂移（translate 最多 ±4% 加 scale 1 → 1.08），每个有不同的延迟（0s、-8s、-16s）。
- 动效：眉标青柠色圆点在 2.4s 内将其不透明度从 1 → 0.35 → 1 脉动。
- 动效：区块显现：Motion whileInView，initial {opacity:0, y:16}，animate {opacity:1, y:0}，时长 0.5s，ease [0.22,1,0.36,1]，viewport {once:true, margin:'-80px'}。子元素以 0.06s 错开。
- 动效：目录和演示卡片悬停：translateY(-2px)，border-color 变为 rgba(198,244,50,0.55)，历时 200ms。目录筛选变化使用 Motion AnimatePresence 配合 layout：卡片在 0.25s 内淡出并 scale 0.98 → 1。
- 动效：类型列表行悬停：背景变为 Raised，ArrowUpRight 图标向右滑动 6px 并变为 Acid，缩略图条从高度 0 展开到 76px，历时 300ms。仅桌面端（≥1024px）。
- 动效：代码面板：一个青柠色块状光标（8×16px）在最后一行代码末尾以 1.1s steps(1) 动画闪烁。复制图标在 1.6s 内从 Copy 切换为 Check。
- 动效：Pro 进度条：当它滚动进入视野时，填充在 1.2s ease-out 内从 0 动画到已认领百分比。
- 动效：FAQ：答案使用 Motion 以 height auto 动画（0.3s）。打开时 Plus 图标旋转 45°。
- 动效：页头：当 scrollY > 8 后，背景从透明变为 rgba(10,11,10,0.78)，带 backdrop-filter: blur(10px) 和 1px Line 底部边框，历时 200ms。
- 动效：prefers-reduced-motion: reduce 会停止跑马灯（animation: none；第一组卡片静止，轨道获得 overflow-x: auto），停止极光漂移、眉标脉动和光标闪烁（光标保持实心），并通过 useReducedMotion 使 Motion 显现变为即时。进度条立即显示其最终宽度。
- 图像：任何地方都没有照片或位图。所有视觉都是代码：（1）Hero 极光，由 CSS 径向渐变构建；（2）Hero 上方一层淡淡的 64px 细线网格，由两个 1px linear-gradients 以 rgba(236,239,232,0.035) 构建为 background-image，并用 radial-gradient(ellipse at 50% 20%, black, transparent 70%) 遮罩；（3）十二个虚构的迷你网站，每个都是一个 React 组件，用绝对定位的 div 和以百分比为单位的内联 SVG 绘制，因此可缩放到任意卡片尺寸。迷你站点使用各自柔和的调色板（奶油色、赤陶色、橄榄色、青绿色、沙色、铁锈色、芥末色、炭灰色）。它们从不使用 Acid 青柠色，也从不出现蓝紫或紫粉。除浏览器外框中 URL 胶囊外，它们不包含任何可读文字。它们不显示任何标志、人物或角色。

## 页面与区块
### [BRAND] — 带提示词与在线演示的网站模板（`/index.html`）
1. **Head** — <title>[BRAND] — Website Templates with Prompts and Live Demos</title>，theme-color 为 #0a0b0a，lang='en'。Favicon：public/favicon.svg，一个 32×32 的圆角方块（rx 7），颜色 #c6f432，内含两条 #0a0b0a 竖条（x 为 10 和 18，宽度 4，高度分别为 14 和 9，底部对齐于 y 23）。这也是 logo 标记。它是一个虚构的几何标记，并非任何现有 logo。
   布局：恰好一个 H1（hero）。每个区块使用一个 H2。区块是 <main> 内的 <section id=...> 地标，页头和页脚分别使用 <header> 和 <footer>。
2. **页头（吸顶）** — 左侧：logo 标记（22px，与 favicon 相同的 SVG），后接文字字标 '[BRAND]'，Bricolage 600 18px Bone。中间导航（Inter 500 14px Ash，悬停 Bone）：'How it works'（#how）、'Trending'（#trending）、'Types'（#types）、'Agent setup'（#agent）、'FAQ'（#faq）。右侧：一个幽灵链接 'Pro early access'（#pro），前面带一个 6px Acid 圆点，以及一个主按钮 'Browse templates'（#trending），Acid 填充、Ink 文字、Inter 600 14px、高度 36px、内边距 0 14px、圆角 8px、悬停 Acid Dim。
   布局：position: sticky；top 0；z-50；高度 64px；全宽，内部容器 1240px；flex justify-between、items-center。低于 1024px 时，中间导航和幽灵链接隐藏，一个 Lucide Menu 按钮（20px）在页头下方打开全宽下拉面板（Ink 背景、Line 边框、链接堆叠高度 48px、主按钮位于底部）。打开时图标切换为 X。点击链接会关闭面板。
   动效：顶部时透明。当 scrollY > 8 后，获得模糊的 Ink 背景和底部细线（200ms）。
3. **带自动滚动演示墙的 Hero** — 眉标胶囊（mono 12px Smoke、边框 Line Strong、背景 Panel、内边距 6px 12px）：一个脉动的 6px Acid 圆点，然后是 'New templates every week · prompt + DESIGN.md included'。H1（Bone）：'Vibe-coding website templates, with the prompt that built them.' 副标题（19px Ash，max-width 640px）：'Click through a live demo, copy its exact prompt and DESIGN.md, and paste them into Claude Code, Codex or Cursor. Your agent builds a near-identical site in one run.' CTA：主按钮 'Browse templates' 带 Lucide ArrowRight 图标（高度 48px、内边距 0 22px、Acid 填充、Ink 文字、Inter 600 16px），链接到 #trending；次按钮 'How it works'（高度 48px、1px Line Strong 边框、Bone 文字、悬停背景 Raised），链接到 #how。CTA 下方是一行 mono 12px Smoke 文字：'WORKS WITH  Claude Code · Codex · Cursor · Lovable'（仅文字，无 logo）。

演示墙：12 个虚构的迷你站点（MiniSite 组件，按 id 键控）。每张卡片都是一个浏览器框架：1px Line 边框、圆角 10px、overflow hidden、背景 Panel。其 chrome 栏为卡片高度的 9%（最小 18px），背景 Raised，左侧三个 5px 圆点颜色 #3a3f3a（间距 4px），以及一个居中的 URL 胶囊（宽度 46%、背景 #0f110f、mono 8–9px Smoke）显示域名。下方视口承载绘图。配方（位置以 % 表示）：
1 fernhouse.demo：背景 #efe9dc。顶部导航：左侧 6% 处一条深色 #1d1b17 条（18%×3%），右侧三条 6% 条。标题：两条 #1d1b17 条，宽度 62% 和 44%、高度 9%，left 6%，top 24% 和 36%。一个 #c8643b 胶囊 16%×7% 位于 top 52%。右侧重叠圆形：#c8643b 直径 30%，#d9c9a8 直径 22%。
2 quarry.demo：背景 #e8e4d8。一个 2×2 的块网格，2px #111 边框，内缩 8%。左上块填充 #e0b341。两条粗 #111 条位于右下块中。
3 tidepool.demo：背景 #0f2a28。两条居中的 #e6efe9 条（宽度 58% 和 40%、高度 8%）位于 top 20% 和 31%。一个居中的 #d39a3a 胶囊（18%×8%）位于 45%。底部一个宽的 #163a37 圆角面板（80%×30%）承载三条短的 #5fb3a3 条。
4 kiln.demo：背景 #1a1816。页头条 #d9c9a8（20%×3%）。一个 3×2 瓦片网格（gap 4%），线性渐变 #b5653a→#7a3b22、#d9c9a8→#a8946c、#5b6b4a→#39432d、#c8643b→#e0b341、#3a3f3a→#1d1b17、#a8946c→#5b6b4a。
5 parceldocs.demo：背景 #f4f2ec。左侧边栏（22%，border-right #ddd8cb）含七条宽度不一的 #c9c4b6 条。主区域：一条 #1d1b17 标题条、三条 #c9c4b6 文本行，以及一个代码块 #1b1d1b（70%×34%），内含 #7fb8a8、#d8c08a 和 #ecefe8 的短条。
6 stillwater.demo：背景 #121512。三个定价列（每列宽 26%，Line 边框）。中间列抬高 4%，带 #8fa05a 边框和 #8fa05a 顶部条。每列有一条价格条、四条细线和一条按钮条。
7 mothradio.demo：背景 #d8cfbd。一个居中的窗口（70%×66%），颜色 #efe8da，2px #2a2620 边框。其标题栏使用 #2a2620 的 repeating-linear-gradient 条纹。内部：一个 SVG 折线波形（stroke #2a2620，1.5）和一个小播放三角形。
8 gridline.demo：背景 #f2f0ea，每 12.5% 有 1px rgba(0,0,0,0.08) 网格线。一个 #d9472b 块覆盖左侧 40%（全高减去 10% 内边距）。右侧三条堆叠的 #111 条（占剩余宽度的 80%、64%、48%）。
9 saltmarsh.demo：天空 linear-gradient #e9c88f→#7fa9a0 覆盖顶部 60%。一个太阳圆 #f3e3b8（18%）位于 left 62% / top 30%。一个海面带 #2f5d58 覆盖底部 40%，带三条 1px rgba(255,255,255,0.25) 波浪线。左上两条白色条。
10 hexalabs.demo：背景 #0b0f0e，带淡淡的点阵。一个居中的 SVG 等轴测线框立方体（六边形轮廓加三条内边，stroke #5fb3a3，宽度 1）。左下一条小的 #ecefe8 条标题。
11 pocketarcade.demo：背景 #10170f。一个 10×6 的方形单元格网格（#1a2419）。点亮的 #9bd36a 单元格构成一条 9 格的蛇形路径。一个 #e0b341 单元格是食物。右上有一条分数条。
12 copperline.demo：背景 #111311。左侧轨道 14% 为 #171a17，含四条小条。顶行：三张 KPI 卡片（Line 边框），每张含一条 #ecefe8 数字条和一条 Ash 标签条。一个 SVG 折线图折线（stroke #d39a3a，宽度 1.5），带 #d39a3a 20% 渐隐到 0 的面积填充渐变。
行顺序（每个列表在每条轨道中渲染两次）：A = 1,2,3,4,5,6,7,8,9,10,11,12；B = 7,12,9,1,10,4,11,3,6,8,2,5；C = 10,5,8,11,2,9,6,12,1,7,3,4；D = 4,9,6,2,12,11,8,5,7,3,10,1。
   布局：该区块为 position: relative 且 overflow hidden，padding-top 152px（移动端 120px）。内容后方：极光层（z-0、pointer-events none）和遮罩细线网格。绿色圆形居中于 18% / 8%，青色于 78% / 0%，琥珀色于 55% / 38%。文本块居中：眉标、H1（max-width 980px、margin-top 24px）、副标题（margin-top 24px）、CTA（margin-top 36px、gap 12px、wrap）、works-with 行（margin-top 28px）。演示墙为全出血（100vw），margin-top 72px，行间距 16px。卡片在 ≥1024px 时为 280×184px，640–1023px 时为 240×158px，低于 640px 时为 200×132px。行 A–D 在 ≥1024px 显示；低于 1024px 显示行 A–C。每行获得 mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)。墙的最后 35% 上方有一个底部叠加层，从透明渐变为 Ink，使 hero 融入页面。极光仅存在于该区块。
   动效：跑马灯行如设计动效列表所述，行悬停时暂停，卡片悬停时上浮。文本块在加载时以交错方式显现（眉标、H1、副标题、CTA）。减少动效时全部静态。
4. **工作原理（#how）** — Mono 标签 'HOW IT WORKS'。H2：'How vibe-coding templates work: pick, copy, ship.' 引言：'Three steps from a demo you like to a site running on your machine.'
步骤 01 · PICK。标题：'Pick a live demo'。文本：'Open any template and click through the real site before you commit. What you see is what the prompt produces.' 产物行（mono 12px Smoke，位于 Panel 上，带 Line 边框、圆角 6px、内边距 8px 10px）：'demo/fernhouse → index.html'。
步骤 02 · COPY。标题：'Copy the prompt and DESIGN.md'。文本：'Each template ships with its complete prompt and a DESIGN.md that fixes colors, type, spacing and motion. One click copies both.' 产物：'prompt.md  ·  DESIGN.md'。
步骤 03 · SHIP。标题：'Ship it with your coding agent'。文本：'Paste into Claude Code, Codex, Cursor or Lovable. The prompt names the stack, sections and copy, so the build lands close to the demo.' 产物：'$ npm run build  ✓ dist/'。
   布局：≥768px 时三列网格（低于则堆叠），位于 1px Line 上下边框内。列之间由 1px Line 垂直分隔线隔开（堆叠时为水平分隔线）。每列内边距 40px。顶部：步骤数字 '01' / '02' / '03'，JetBrains Mono 500 40px Acid，然后同一基线上 mono 12px 大写 Smoke 的 ' / PICK' 等。然后是标题（Bricolage 600 24px Bone、margin-top 28px）、文本（Ash 16px、margin-top 12px）和产物行（margin-top 24px）。
   动效：列以 0.06s 交错显现。
5. **热门模板（#trending）** — Mono 标签“TRENDING”。H2：“本周热门网站模板。”右对齐链接“All template types”带 ArrowRight，指向 #types。筛选胶囊（mono 12px，高度 30px，Line Strong 边框；激活胶囊为 Bone 边框和 Bone 文字，未激活胶囊为 Smoke）：All、Landing、Dashboard、Portfolio、Docs、Pricing、3D。六张卡片，每张复用 MiniSite 预览：
- Fernhouse：预览 1，标签 Landing · Editorial，技术栈“Vite + React”
- Copperline：预览 12，标签 Dashboard · Dark，“React + Tailwind”
- Gridline：预览 8，标签 Portfolio · Swiss，“Astro”
- Parcel Docs：预览 5，标签 Docs · Minimal，“Vite + React”
- Stillwater：预览 6，标签 Pricing · SaaS，“React + Tailwind”
- Hexa Labs：预览 10，标签 3D · WebGL，“three.js”
每张卡片的第一个标签决定其筛选分组。每张卡片主体显示：名称（Bricolage 600 18px）、标签为 mono 11px 胶囊（Line 边框，Smoke），以及底部一行，左侧为 mono 12px Smoke 的技术栈，右侧为“Copy prompt”按钮（Lucide Copy 14px 加标签，Inter 500 13px，Line Strong 边框，高度 30px）。该按钮将 `'# <Name> — prompt preview\nBuild the <Name> template described on [BRAND].'` 写入剪贴板（包裹在 try/catch 中），并切换为 Check 加“Copied”持续 1.6s。
   布局：标题行为 flex justify-between 且 items-end（移动端堆叠）。筛选胶囊排成一行，间距 8px，margin-top 32px，移动端水平滚动。网格在 ≥1024px 为 3 列，≥640px 为 2 列，以下为 1 列，间距 20px，margin-top 32px。每张卡片：Line 边框，圆角 10px，Panel 背景。预览为浏览器框架，宽高比 16/10，顶部齐平。主体内边距 18px。卡片为 `<article>` 元素，不是链接。
   动效：悬停：上浮加 55% 不透明度的 lime 轮廓。筛选使用 AnimatePresence 配合布局淡入和缩放。
6. **按类型浏览（#types）** — Mono 标签“BROWSE BY TYPE”。H2：“按类型浏览模板。”简介：“从单屏落地页到多面板仪表盘。每种类型都配有专为该类构建调优的提示词。”八行：每行有一个名称、一行描述、一个虚构计数和三个用于悬停条的预览 id。
- Landing pages：“Hero, proof, pricing, CTA.” 28（1, 3, 9）
- SaaS：“Product tours and feature grids.” 19（3, 6, 12）
- Portfolio：“Case studies and image-led grids.” 16（4, 8, 1）
- Docs & blog：“Sidebars, code blocks, long reads.” 11（5, 2, 8）
- Pricing：“Plans, toggles and comparison tables.” 8（6, 3, 12）
- Dashboard：“Charts, KPIs and dense tables.” 9（12, 2, 6）
- 3D & WebGL：“Canvas scenes and shader heroes.” 7（10, 9, 11）
- Games：“Tiny playable sites.” 5（11, 7, 10）
计数为虚构的示例数字。
   布局：在 ≥1024px 时，12 列网格：左侧 4 列放置区块标题（position: sticky; top 96px），右侧 8 列放置列表。低于 1024px 时堆叠。每行为一个 `<a href='#trending'>`，带 1px Line 底边框（第一行还有顶边框）和内边距 22px 8px，以三区域网格布局。左侧：名称（Bricolage 500 28px Bone；移动端 22px）及其下方描述（Ash 15px）。右侧：计数为 JetBrains Mono 500 36px Bone（悬停时 Acid），然后是 20px 的 ArrowUpRight，颜色 Smoke。在名称区域下方，悬停条包含三个浏览器框架缩略图，每个 116×76px，间距 8px，高度 0 且 overflow hidden 直到悬停。
   动效：行悬停展开如动效列表中所述，仅桌面端。行以交错方式显现。
7. **在你的 agent 中使用（#agent）** — Mono 标签“AGENT SETUP”。H2：“在你的编码 agent 中使用模板：CLI、MCP 或 Skill。”文本：“无需离开终端即可搜索目录并获取提示词。选择你的 agent 已经支持的设置。”三个项目符号，每个带一个 Smoke 颜色的 18px Lucide 图标：Terminal 对应“CLI — search and download prompt.md in one command.”，Plug 对应“MCP — let the agent query templates as a tool.”，BookOpen 对应“Skill — a drop-in instruction file for agents that support skills.”
代码面板标签页（Terminal/Plug/BookOpen 图标加标签）：CLI | MCP | Skill。标签页内容（JetBrains Mono 13.5px/1.7）：
CLI：
$ npx [BRAND_SLUG] search "dark saas landing"
$ npx [BRAND_SLUG] get lumen-index --out ./prompt.md
$ claude "Build the site described in ./prompt.md"
MCP（文件标签“mcp.json”）：
{
  "mcpServers": {
    "[BRAND_SLUG]": {
      "command": "npx",
      "args": ["-y", "[BRAND_SLUG]-mcp"]
    }
  }
}
Skill（文件标签“SKILL.md”）：
---
name: [BRAND_SLUG]-templates
description: Find a website template and build it from its prompt.
---
# 1. Search the catalog for a template that fits the request.
# 2. Fetch its prompt.md and DESIGN.md.
# 3. Follow the prompt exactly and keep the stack it names.
语法颜色：`$` 提示符为 Acid，命令为 Bone，标志和 JSON 键为 Syntax Teal，字符串为 Syntax Sand，`#` 行和 frontmatter 破折号为 Smoke。复制按钮复制当前标签页的纯文本。
   布局：在 ≥1024px 时为两列（5/7 分割，间距 64px），以下堆叠。代码面板：圆角 14px，Line 边框，Panel 背景。其标题栏高 44px，带 Line 底边框。标签页在左侧作为按钮（mono 12px；激活标签页为 Raised 背景和 Bone 文字，未激活标签页为 Smoke），带 role='tablist' 和 aria-selected。标题栏右侧：文件标签为 mono 11px Smoke，以及一个图标按钮（Copy → Check，16px，aria-label 'Copy snippet'）。主体内边距 24px，一个 `<pre>` 带 overflow-x auto 和 min-height 220px。lime 块状光标附加在最后一行之后。
   动效：标签页内容以 0.15s 的透明度交叉淡入淡出。光标闪烁。复制图标切换状态。
8. **Pro 抢先体验（#pro）** — Mono 标签“PRO · EARLY ACCESS”。H2：“Pro 抢先体验 — 名额有限。”文本：“Pro 面向每周都上线网站的人。我们以小批量开放，让每位早期成员都能对我们下一步构建什么有发言权。”权益（Lucide Check 16px，Acid 色）：“Multi-page templates with full prompts”、“New Pro templates on the day they land”、“Vote on the next templates we build”、“DESIGN.md exports as design tokens”。进度条：左侧 mono 13px `'[SPOTS_CLAIMED] / [SPOTS_TOTAL] spots claimed'`，右侧百分比（四舍五入）为 Acid 色。轨道高 8px，背景 #1d211d，带 Line Strong 边框，圆角 999px，填充为 Acid。按钮：“Request early access”带 ArrowRight（主样式，高 48px），一个 `<a href='mailto:[CONTACT_EMAIL]?subject=Pro%20early%20access'>`。其下方注释（Smoke 13px）：“No payment now. We email you when your spot opens.”
   布局：容器内一个面板：圆角 14px，Line 边框，Panel 背景，内边距 56px（移动端 28px）。在 ≥1024px 时为两列：左侧为文案和权益；右侧为进度条、按钮和注释，垂直居中。一条细微的 1px 顶部高光沿面板延伸：linear-gradient(90deg, transparent, rgba(198,244,50,0.5), transparent) 作为伪元素。无玻璃模糊，无渐变背景。
   动效：进度条填充在进入视图时动画。面板显现。
9. **FAQ（#faq）** — Mono 标签“FAQ”。H2：“关于 [BRAND] 模板的常见问题。”六个条目：
1 “What is a vibe-coding template?” — “A website design plus the exact prompt that builds it. You hand the prompt to an AI coding agent and it writes the code, instead of you starting from an empty folder.”
2 “Which coding agents work with the prompts?” — “Any agent that can read a long prompt and edit files: Claude Code, Codex, Cursor, Lovable and similar tools. The prompts name the stack explicitly, so the agent does not have to guess.”
3 “Will my build look exactly like the demo?” — “Very close. The prompt fixes colors, fonts, sections, copy and motion, and our own demos are generated from the same prompt with nothing added. Small differences between runs are normal.”
4 “What is in the DESIGN.md file?” — “The design system behind the template: color tokens with roles, type scale, spacing, radius, motion rules and the things to avoid. Keep it in your repo so later edits stay on-style.”
5 “What can I build with a template?” — “Landing pages, portfolios, docs, dashboards and small games. Every template is original, uses permissively licensed libraries and self-hosted open-source fonts, and lists its license notes on its page.”
6 “Do I need a backend or an account?” — “No. Every template builds to static files you can host anywhere. You only need an account for Pro features when they open.”
   布局：在 ≥1024px 时为两列：区块标题在左（4/12），手风琴在右（8/12）。每个条目为一个 `<button aria-expanded>` 行，带 Line 底边框和内边距 22px 0。问题为 Inter 500 18px Bone，右侧带 Plus 图标（18px Smoke）。答案为 Ash 16px/1.65，max-width 640px，padding-bottom 22px。一次只打开一个条目。条目 1 默认打开。
   动效：高度动画和 Plus 旋转如所述。
10. **页脚（Footer）** — 顶行：logo 标记和 '[BRAND]' 字标，一行 Ash 15px 的 'Original website templates with the prompts that build them.'，右侧是一个 mono 12px 的 'Back to top ↑' 链接，指向 #top。链接列（标题为 mono 12px 大写 Smoke，链接为 Inter 14px Ash，悬停时变为 Bone，行间距 10px）：
Templates — Landing pages、SaaS、Portfolio、Docs & blog、Dashboard（均指向 #types）
Product — How it works（#how）、Trending（#trending）、Agent setup（#agent）、Pro early access（#pro）
Resources — FAQ（#faq）、Prompt format（#how）、DESIGN.md guide（#faq）、Changelog（./index.html）
Company — About（./index.html）、Contact（mailto:[CONTACT_EMAIL]）、Terms（./index.html）、Privacy（./index.html）
巨型字标：'[BRAND]' 使用 Bricolage 700，字号 clamp(64px, 16vw, 220px)，letter-spacing -0.04em，透明填充并带 -webkit-text-stroke 1px Line Strong，aria-hidden。底行（mono 12px Smoke）：左侧为 '© 2026 [BRAND]. Original templates; demo content is invented.'；右侧为本提示词 Credit 部分中的可选署名链接（如有）以及 'All demos are static files.'
   布局：顶部 1px Line 边框，padding-top 72px。顶行为 flex justify-between。各列在 ≥768px 时位于 4 列网格中，低于该宽度时为 2 列，margin-top 56px。巨型字标居中，margin-top 72px，line-height 0.8，overflow hidden 使其在底边被裁切。底行有 Line 顶部边框，padding 20px 0，并使用 flex wrap 与 justify-between。

## 资源（Assets）
- 字体（font）：安装 @fontsource-variable/bricolage-grotesque、@fontsource-variable/inter 和 @fontsource-variable/jetbrains-mono，并在 src/main.tsx 中一次性导入它们。Tailwind fontFamily：display ['Bricolage Grotesque Variable', 'system-ui', 'sans-serif']，sans ['Inter Variable', 'system-ui', 'sans-serif']，mono ['JetBrains Mono Variable', 'ui-monospace', 'monospace']。woff2 文件由 Vite 打包进 dist/。
- 图标（icon）：仅使用 lucide-react：ArrowRight、ArrowUpRight、Copy、Check、Plus、Menu、X、Terminal、Plug、BookOpen。描边宽度 1.75，颜色取自调色板。任何地方都不得使用 emoji。
- 图标（icon）：public/favicon.svg，按 Head & SEO 中所述手写。一个青柠色（lime）圆角方块，内含两条墨色（Ink）横条，同时以内联方式作为页眉和页脚的标志图形渲染。
- 图片（image）：不以文件形式提供。所有视觉元素（极光、细线网格、十二个迷你站点预览、线框立方体、图表、波形）均在 React 组件内用 CSS 或内联 SVG 生成（src/components/MiniSite.tsx，每个 id 1–12 对应一个配方；BrowserFrame.tsx；Aurora.tsx）。

## 不要做的事
- 不要任何形式的后端：不要服务器代码、API 路由、数据库、认证、分析或第三方 API。Pro 按钮是一个 mailto 链接，任何表单都不提交到任何地方。
- 不要从 fonts.googleapis.com、fonts.gstatic.com、Adobe Fonts 或任何 CDN 加载字体。仅通过 Fontsource 包自托管。
- 不要 CDN 的 <script> 或 <link> 标签。每个脚本、样式、字体和图标都在本地打包。
- 生产构建中不要 source maps（build.sourcemap: false），并且 src/ 不会被复制到 dist/ 中。
- 使用相对资源路径（Vite base './'）。每个内部链接都是本页面上的哈希锚点，或指向诸如 ./index.html 这样的文件名，绝不能是裸目录。
- 除非用户要求，否则不要更改技术栈（Vite + React + TypeScript + Tailwind 3.4 + Motion + Lucide + Fontsource）。
- 不要复制任何真实模板市场的 logo、字标、首页文案、标题或标语。品牌仅以来自 [BRAND] 的纯文本形式出现，紧邻此处描述的虚构几何标记。
- 不要真实的模板截图、演示缩略图、照片或位图。每张演示卡片都是用 CSS/SVG 绘制的虚构迷你站点。
- 演示墙内或任何其他地方都不要真实品牌 logo、产品名称、人物、吉祥物或游戏/动漫角色。迷你站点域名使用虚构的 '.demo' 后缀。
- 不要将定价、名额数量或模板数量呈现为真实事实。所有数字都是来自变量或本规范的虚构占位符，并且不显示任何价格。
- 不要蓝紫色或紫粉色渐变，不要霓虹光晕，不要通用玻璃拟态卡片（背景模糊仅允许在粘性头部栏上），不要 emoji 图标。
- 酸性青柠色（#c6f432）是唯一的强调色。仅将其用于 CTA、步骤数字、仪表填充、勾选图标、光标、'$' 提示符和悬停轮廓，绝不要用于大面积填充或正文文本。迷你站点绝不使用青柠色。
- 仅在 hero 区域保留极光光晕。除 Pro 面板上的 1px 高亮线外，其他任何区块背后都不要有渐变。
- 不要商业或自定义字体。仅使用 Bricolage Grotesque、Inter 和 JetBrains Mono（OFL）。
- 不要 MIT、ISC、BSD、Apache-2.0、0BSD、CC0、Unlicense 之外的依赖（字体使用 OFL）。不要 Aceternity UI、Tailwind Plus/Tailwind UI 或购买的模板代码。从零编写跑马灯和每个效果。
- 尊重 prefers-reduced-motion：停止跑马灯、极光漂移、脉冲和光标闪烁，并使显现效果立即完成。
- 必须在 1440×900 和 390×844 下正确渲染，零控制台错误且无水平页面滚动（仅跑马灯轨道和筛选胶囊可在其自身容器内溢出）。
- 保持 dist/ 在 20 MB 以下。
- 不要填充文案、lorem ipsum 或炒作词汇。使用此处给出的确切标题和 CTA。恰好一个 H1。

---
— Prompt by VibeFather · https://vibefather.ai/t/template-library-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
