> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 生物科技初创公司网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的单页营销网站。[BRAND] 是一家虚构的科学公司，其 [PLATFORM] 平台专注于 [FOCUS]。页面以首屏开场，视觉锚点是一个由代码绘制的大型分子，在画布上旋转，背景是淡淡的点阵网格，分子后方有两个漂移的细胞形状。随后分三步介绍平台（问题、三步方法、带绘制示意图的机制），以阶段表格呈现研发管线（Discovery、Preclinical、Phase I、Phase II），配以虚构的 [PROGRAM_PREFIX] 代码和药丸形状态标签；接着是带数字滚动动画的指标带、一份虚构的出版物列表（使用通用期刊描述）、一排字母组合方块组成的团队展示，以及含三个职位的招聘条。静态站点，无后端，无表单；两个 CTA 均为 mailto 链接。所有视觉元素均由代码绘制。

- 受众：正在评估该平台潜在合作的制药与农业科技公司、早期阶段投资者、科学与工程领域的求职者，以及寻找可信深度科技故事的记者。其次是任何科学或材料领域初创公司的创始人，他们希望拥有一种可信、安静、实验室般干净的品牌形象。
- 目标：让技术型读者在一次滚动浏览中确信 [BRAND] 运营着一个真实、严谨的平台：他们应能理解三步方法、记住阶段管线、将数字视为示例并予以信任，最终落在招聘或合作 CTA 上。
- 语调：精确、冷静、自信。使用简短的陈述句、具体的示例数字，不炒作、不使用感叹号、不使用营销最高级。标题读起来像排版精良论文中的图注；等宽标签承载数据。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react (MIT)、react-dom (MIT)、tailwindcss (MIT)、motion (MIT)、lucide-react (ISC)、vite (MIT)、typescript (Apache-2.0)、@fontsource/sora (OFL-1.1)、@fontsource/inter (OFL-1.1)、@fontsource/ibm-plex-mono (OFL-1.1)
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架，然后安装 tailwindcss 3.4、motion、lucide-react 以及三个 Fontsource 包。
  - vite.config.ts：base './'，build { outDir: 'dist', sourcemap: false, assetsInlineLimit: 0 }。不要将 src/ 复制到 dist/ 中。
  - tailwind.config.js：content 覆盖 index.html 和 src/**/*.{ts,tsx}；theme.extend.colors 映射精确的令牌：paper #fcfefd、ink #12262e、slate #5d6f7c、mist #e9f2f1、hairline #d8e5e3、teal #0e7c86、tealdeep #0a5a62、cellsoft #90a4ad；theme.extend.fontFamily：display ['Sora','sans-serif']、text ['Inter','sans-serif']、mono ['IBM Plex Mono','monospace']。
  - 字体在 src/main.ts 中导入：@fontsource/sora/600.css、@fontsource/sora/700.css、@fontsource/inter/400.css、@fontsource/inter/500.css、@fontsource/inter/600.css、@fontsource/ibm-plex-mono/400.css、@fontsource/ibm-plex-mono/500.css。
  - 文件布局：src/content.ts 存放所有字符串（hero、platform blocks、programs、metrics、publications、team、roles、footer）；src/molecule-data.ts 导出 ATOMS 和 BONDS；src/components/ 存放 Header、Hero、CellField、Molecule、Platform、Pipeline、Metrics、Publications、Team、Careers、Footer；src/App.tsx 组合它们；src/index.css 包含点阵网格工具类、关键帧和减少动态效果覆盖。
  - 分子画布：DPR 感知（Math.min(devicePixelRatio, 2)）；动画循环仅在 hero 与视口相交且标签页可见时运行；在 prefers-reduced-motion 下，在 t = 0 时精确渲染一帧并停止。
  - 滚动显现使用 motion/react 的 whileInView，once: true，viewport { margin: '-15% 0px' }；计数数字在 1.1 秒内以 ease-out 运行一次。
  - 所有文案位于 src/content.ts。当任何变量值与默认值不同时，重写该处的文案以适配新的品牌、平台、重点、总部和项目前缀，保持相同的长度、结构和语气。绝不在新值下保留默认文案。
  - public/favicon.svg 按 Document 部分所述手写。<title>[BRAND]</title>，lang 'en'。在项目根目录编写 ASSETS.md，列出三个 Fontsource 包（OFL-1.1）、lucide-react（ISC）和手写 favicon（原创）。

## 变量
- [BRAND] — 公司名称（默认："Vantra Biosciences"）。文字标识、<title>、页脚和 mailto 链接都由它生成（partners@<brand-slug>.example）。
- [PLATFORM] — 平台名称（默认："Loopfold"）。为内部平台生造的一个词；出现在 hero 副标题、approach 步骤和一个出版物标题中。
- [FOCUS] — 平台所研究的对象（默认："protein circuits"）。用于句子内部的小写短语，例如 'nitrogen-fixing soil consortia'。
- [HQ_LINE] — 总部地址行（默认："14 Meridian Lane, Cambridge, MA"）。页脚中的地址；其城市部分即团队卡片和职位卡片上显示的地点。
- [PROGRAM_PREFIX] — 项目代码前缀（默认："VN-"）。管线项目代码由它构建：VN-241、VN-307、VN-318、VN-332、VN-345。
- [CREDIT] — 在页脚保留一个小号 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/biotech-startup-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 纸白（Paper）`#fcfefd` — 所有页面的底色；略带冷调的白色
- 墨色（Ink）`#12262e` — 主文本、Phase II 实心标签、分子碳原子
- 石板灰（Slate）`#5d6f7c` — 次要文本、Discovery 描边标签、未激活的表格圆点
- 薄雾（Mist）`#e9f2f1` — approach 步骤、careers 条带和团队卡片背后的面板底色
- 细线（Hairline）`#d8e5e3` — 1px 分隔线、表格网格、点阵圆点、卡片边框
- 青绿（Teal）`#0e7c86` — 唯一强调色：链接、按钮、Phase I 实心标签、Preclinical 描边标签、氮原子、焦点环
- 深青（Teal deep）`#0a5a62` — 按钮悬停状态、分子中的氧原子、强调下划线
- 浅细胞灰（Cell soft）`#90a4ad` — 分子氢原子、未激活的阶段圆点、弱化的等宽标签

### 字体排印（Typography）
- 展示字体（字标、标题、项目名称、统计数字）：Sora（OFL），字重 600/700
- 正文字体（正文、按钮、标签、说明文字）：Inter（OFL），字重 400/500/600
- 等宽字体（eyebrow 小标题、项目代码、技术深度行、表头、小字）：IBM Plex Mono（OFL），字重 400/500

### 布局与动效（Layout & motion）
- 间距：全程采用 8px 垂直节奏。区块 py-28（桌面端）/ py-16（移动端）；容器 max-w-[1160px]，内边距 px-6（移动端 px-5）。Hero 区 min-h-[92vh]，内容垂直居中。Eyebrow 到标题 16px，标题到正文 20px，正文最大宽度 560px。表格单元格 py-5 px-4；项目列 260px，阶段列等宽。等宽 eyebrow 12px、大写、letter-spacing 0.16em。
- 圆角：状态标签和页头 CTA 使用 999px 胶囊圆角；分子卡片和机制面板 12px；按钮和输入框 6px；pipeline 表格、细线分隔线和统计区块为 0。除代码绘制的单元格之外，不使用其他圆角形状。
- 动效：分子画布：固定的 18 原子模型绕 Y 轴以 0.16 rad/s 旋转，X 轴恒定倾斜 -18 度；正交投影，中心 (280,280)，缩放 80；原子半径的深度系数为 1 - 0.18*zN，键的 alpha 为 0.92 - 0.38*mean(zN)；每帧从远到近绘制；离开屏幕或标签页隐藏时暂停循环。
- 动效：细胞团块以 26 s 和 34 s 的关键帧循环漂移（最多平移 20px、最多旋转 4 度，交替、ease-in-out）；在 prefers-reduced-motion 下停止。
- 动效：区块入场：eyebrow、标题和正文上移 20px 并在 0.6 s 内淡入，间隔 90 ms，只播放一次，缓动 cubic-bezier(.2,.8,.2,1)。
- 动效：Pipeline：每个阶段列的标题下划线在列进入时以 0.5 s 从 scaleX 0 绘制到 1；其标签从 scale 0.85 弹出并淡入，间隔 80 ms；向上滚动回去时，已经过的列保持点亮。
- 动效：指标数字从 0 计数到最终值，只播放一次，1.1 s ease-out；在 reduced motion 下直接渲染最终数字。
- 动效：悬停微交互：按钮加深为 Teal deep，并将 Lucide 箭头位移 3px；出版物标题绘制 2px Teal 下划线，scaleX 从 0 到 1；团队字母组合环从 40% Teal 提亮到 100% Teal。
- 动效：prefers-reduced-motion：分子在 t = 0 渲染一帧静态画面（仅倾斜），细胞静止，入场变为纯透明度淡入，计数器渲染最终值，标签渲染为最终状态。
- 图像：一切均由代码绘制，没有任何位图：hero 分子（canvas，精确的原子和键数据见下文）、两个漂移的细胞团块（SVG）、机制电路图（SVG）、pipeline 标签和圆点、点阵背景（CSS radial-gradient）以及 favicon（手写 SVG）。没有照片、没有人物、没有 logo，除字体和图标包外不下载任何文件。调色板严格限定为上述八个 token。

## 页面与区块
### 首页（单页）(`index.html`)
1. **文档与页头** — <title>[BRAND]</title>，lang 'en'。Favicon public/favicon.svg：32x32 圆角方块（rx 7），填充 Paper（纸白），带 1.5px Hairline（细线）边框，内含一个微小的六环分子：六个 Teal（青绿）圆点 r 2.5，位于 12px 圆环上，以 1px Ink（墨色）键连接。页头：字标 '[BRAND]' 使用 Sora 700 18px Ink，最后一个字母后带一个 6px Teal 圆点；导航链接 Platform、Pipeline、Science、Team、Careers（Inter 500 14px Slate（石板灰），悬停时变 Ink 并带 2px Teal 下划线）；胶囊 CTA 'Partner with us'（Teal 填充，Paper 文字，6px 圆角），链接到 mailto:partners@vantra.example，由 BRAND slug 构建。
   布局：粘性页头，top 0，z 50，bg paper/85，背景模糊 8px，滚动 24px 后出现 1px Hairline 底边框。高度 68px，内部容器与页面容器对齐。移动端：导航链接折叠为普通的 details 风格菜单（无需 JS 抽屉）：一个 'Menu' 等宽按钮切换 Paper 面板，五个链接纵向堆叠；CTA 保持可见。
   动效：滚动 24px 后，页头边框和 4px 柔和阴影淡入。导航下划线在悬停时以 0.25 s 绘制。
2. **首屏** — 桌面端两栏。左侧：等宽眉题 12px 大写 Teal 'PROTEIN CIRCUITS, DESIGNED ON PURPOSE'；标题 Sora 700 clamp(44px, 5.4vw, 76px)，行高 1.05，字距 -0.02em，Ink：'Biology, compiled / with care.'（第二行自然换行）；正文 Inter 400 17px/1.65 Slate，最大宽度 520px：'[PLATFORM], our design platform, screens more than forty thousand variants a run, then tunes the winners until they keep their shape where they have to work. No cells are harmed in the making of this paragraph - only measured.'；CTA：实心 'Explore the platform'（Teal，Paper 文字，Lucide ArrowRight 16px）锚定到 #platform，以及描边 'See the pipeline'（1.5px Ink 边框）锚定到 #pipeline；其下方是一行等宽 12px Cell soft 统计行：'40K VARIANTS / RUN - 5 PROGRAMS - 92% ASSAY REPEATABILITY'。右侧：接下来描述的分子卡片。首屏底部：等宽 11px 滚动提示 'SCROLL'，带 1px x 40px Hairline 线。
   布局：首屏在 >= 1024px 时为 2 栏网格（7/5），以下为单栏（文案在前，分子在后）。min-h-[92vh]，items center，py-24。背景：点阵网格（radial-gradient(Hairline 1px, transparent 1px)，28px 网格）仅覆盖首屏，以径向渐变遮罩，使圆点在区块边缘前消散；两个细胞色块绝对定位在分子卡片后方。
   动效：入场：眉题淡入（0.5 s），标题行上升 24px，错开 0.12 s，正文和 CTA 上升 16px（0.7 s），分子卡片在 0.9 s 内淡入并从 0.97 缩放到 1。滚动时分子卡片以 0.1x 滚动速度上移（细微视差）；文案保持不动。
3. **分子卡片（首屏锚点）** — 一张 560x560 CSS px 卡片（12px 圆角，Paper 填充，1px Hairline 边框，柔和阴影 0 24px 60px rgba(18,38,46,0.08)），内含居中的 canvas#molecule，尺寸 520x520。角落标签为等宽 11px Cell soft：左上 'MODEL [PROGRAM_PREFIX]241 - 18 ATOMS'，右下 'ROTATION 0.16 RAD/S'。画布绘制固定的球棍模型：ATOMS (x y z element radius)：(1.00 0.00 0.18 C 16) (0.50 0.87 -0.18 C 16) (-0.50 0.87 0.18 C 16) (-1.00 0.00 -0.18 C 16) (-0.50 -0.87 0.18 C 16) (0.50 -0.87 -0.18 C 16) (1.72 0.51 0.42 N 18) (2.42 0.18 -0.02 C 16) (3.18 0.72 -0.28 O 15) (-1.72 -0.51 -0.42 N 18) (-2.42 -0.18 0.02 C 16) (-3.18 -0.72 0.28 O 15) (0.82 1.62 -0.30 H 9) (-0.82 1.62 0.30 H 9) (0.82 -1.62 -0.30 H 9) (-0.82 -1.62 0.30 H 9) (2.30 -0.55 -0.40 H 9) (-2.30 0.55 0.40 H 9)。BONDS：环 1-2-3-4-5-6-1；侧链 1-7、7-8、8-9、4-10、10-11、11-12；氢 2-13、3-14、6-15、5-16、8-17、11-18。元素颜色：C Ink，N Teal，O Teal deep，H Cell soft；环键 3.5px，侧键 2.5px，氢键 1.5px；每个原子圆内偏移 -30% -30% 处有一个小高光点（白色 30%）。
   布局：卡片位于首屏右栏，最大宽度 560px，正方形宽高比，移动端 w-full，画布宽度 100%（触摸：仍为 560 逻辑 px，由 CSS 缩放）。其后方两个细胞色块：420px 和 300px 有机色块（border-radius 46% 54% 48% 52% / 52% 46% 54% 48%），Teal 填充 4%，1.5px Teal 描边 12%，每个带一个偏心细胞核圆点，16% Teal；一个在右上偏移 -40px，一个在左下。
   动效：按设计动效中规定持续旋转；卡片不投射移动阴影。细胞按其关键帧循环漂移。减少动效：在 t = 0 处显示一帧静态画面。
4. **平台（问题、方法、机制）** — 区块眉题等宽 'THE PLATFORM'，锚点 id 'platform'。H2 Sora 700 clamp(34px, 3.6vw, 52px)：'Three moves from sequence to working circuit.' 区块 1 - 问题：全宽文本块，正文 Inter 17px/1.65 Slate max-w-[760px]：'Cells decide things with [FOCUS] - groups of proteins that meet, change shape and pass a signal on. Nature stumbles into good ones slowly. Screening them by hand is slower still.' 区块 2 - 方法：三张 Mist（薄雾）卡片（12px 圆角，1px Hairline 边框），以等宽 Teal 01/02/03 编号，标题 Sora 600 20px：'Design'（'[PLATFORM] samples backbones from a seeded library and proposes binders with the fold already built in'）、'Screen'（'A 96-well dial-out assay pushes forty thousand variants a run and keeps only the ones that fold'）、'Tune'（'Winning variants get stability passes until they hold their shape at the temperatures that matter'）。每张卡片页脚：等宽 11px Cell soft 技术深度行 - 01：'SEARCH SPACE ~10^12 SCAFFOLDS'，02：'40,000 WELLS / RUN'，03：'+18 C MELTING SHIFT, MEDIAN PASS'。区块 3 - 机制面板：全宽 Mist 面板（12px 圆角），带一个代码绘制的 SVG 图（640x260）：左侧色块 'protein A'（不规则圆角路径，Paper 填充，1.5px Teal 描边，等宽标签），右侧较小色块 'protein B'（Paper 填充，1.5px Ink 描边）；两者之间三个 5px Teal 界面圆点；一个箭头指向响应曲线（折线先上升后趋平，2px Teal），位于细线坐标轴上，等宽标签 'INPUT'、'COMPLEX'、'OUTPUT'；说明文字 Inter 15px Slate：'Two designed parts meet only where they are told to. The output curve is the point.'
   布局：纵向堆叠：眉题 + H2、问题块，然后方法卡片的三栏网格（移动端单栏），然后是机制面板。间距：区块之间 40px，内部 24px。
   动效：区块随滚动以标准上升淡入进入；方法卡片错开 120 ms；机制图在面板进入时以 stroke-dashoffset 在 0.8 s 内绘制其键和曲线，仅一次（减少动效：直接显示完整）。
5. **管线表格** — 锚点 id 'pipeline'。眉题等宽 'PIPELINE'，H2 'Five programs, one platform.' 一张全宽表格（无外边框，1px Hairline 行线，仅在项目列与阶段列之间有列线）：表头行等宽 12px 大写 Cell soft：'PROGRAM'、'DISCOVERY'、'PRECLINICAL'、'PHASE I'、'PHASE II'。行（项目单元格：等宽 500 15px Ink 代码 + Inter 14px Slate 描述；阶段单元格各含一个胶囊标签，或空时一个 4px Hairline 圆点）：[PROGRAM_PREFIX]241 Degrader scaffold - 标签 'Phase II'（Ink 填充，Paper 文字）；[PROGRAM_PREFIX]307 Tagged delivery scaffold - 标签 'Phase I'（Teal 填充，Paper 文字）；[PROGRAM_PREFIX]318 Stabilized helix library - 标签 'Preclinical'（描边 Teal 1.5px，Teal 文字，Mist 填充）；[PROGRAM_PREFIX]332 Conditional binder - 标签 'Discovery'（描边 Slate 1.5px，Slate 文字）；[PROGRAM_PREFIX]345 Novel fold family - 标签 'Discovery'（描边 Slate）。表格下方图例：四种标签样式，外加等宽 11px 脚注 'RESEARCH-STAGE EXAMPLES - NOT APPROVED PRODUCTS'。
   布局：桌面端：真正的 <table>，项目列 260px 左对齐，四个阶段列等宽居中对齐，单元格 py-5 px-4。移动端（< 768px）：表格变为堆叠的项目卡片（每张顶部 Hairline 线）：代码 + 描述、当前标签，以及一行四点进度，其中到当前阶段为止的圆点填充（Discovery 为 Slate，Preclinical 起为 Teal）。
   动效：每个阶段列表头下划线（2px，Phase I/II 为 Teal，其余为 Hairline）在其列顶部进入视口时以 scaleX 从 0 绘制到 1；该列中的标签弹出（scale 0.85 到 1，淡入，错开 80 ms）。列亮起仅一次。行以 60 ms 错开上升进入。
6. **指标带** — Hairline 线之间的全出血带，容器宽度网格，4 个统计块：数字 Sora 700 clamp(40px, 4.6vw, 64px) Ink，带计数动画，每个下方标签等宽 12px 大写 Slate：'40,000' VARIANTS PER SCREENING RUN；'2.1M' DESIGNED BACKBONES IN LIBRARY；'5' PROGRAMS IN PIPELINE；'38%' FIRST-PASS STABILITY RATE。等宽 11px Cell soft 脚注右对齐：'ILLUSTRATIVE PLATFORM FIGURES'。
   布局：桌面端 4 栏网格，移动端 2 栏，py-16。数字使用表格等高数字。
   动效：首次进入视口时以 1.1 s ease-out 计数一次（从 0 开始；2.1M 从 0.0M 开始，保留一位小数）。减少动效：立即显示最终值。
7. **出版物** — 锚点 id 'science'。眉题等宽 'SELECTED WRITING'，H2 'From the bench, in public.' 四行（之间 Hairline 线）：标题 Sora 600 19px Ink；元信息行 Inter 14px Slate 'L. Marsh, P. Okonkwo et al. - Journal of Directed Protein Design'；右对齐等宽标签 11px：'PEER-REVIEWED'（Hairline 描边，Slate）或 'PREPRINT'（Teal 描边，Teal）。条目：'Routing binders through constrained helices'（同行评审，作者如上）；'A 96-well dial-out screen for folding stability' - 'S. Iyer, D. Calloway et al. - Assay Engineering Reports'（同行评审）；'[PLATFORM]: sampling conformational space with seeded backbones' - 'E. Varga, M. Nunes et al. - Computational Biology Collective'（预印本）；'Teaching old folds new interfaces' - 'R. Aldana, K. Brandt - Notes in Structural Biochemistry'（同行评审）。期刊名称保持通用描述；任何地方都不显示年份。
   布局：行 py-5，桌面端标题在左，标签在右；移动端标签换行到标题下方。容器宽度，无侧面板。
   动效：行进入时上升 16px，错开 80 ms；悬停时在标题下绘制 2px Teal 下划线（scaleX 从 0 到 1，transform-origin left）并将行上移 1px。
8. **团队** — 锚点 id 'team'。眉题等宽 'PEOPLE'，H2 'Small team, long assays.' 一行六个图块：字母组合圆 72px（1.5px Teal 圆环，40% 不透明度，Paper 填充，首字母 Sora 600 20px Teal），姓名 Inter 600 15px Ink，角色 Inter 400 14px Slate，等宽 11px Cell soft 地点（[HQ_LINE] 的城市段）。人员：LM 'Dr. Lena Marsh' Chief Executive；PO 'Dr. Priya Okonkwo' Chief Scientific；EV 'Dr. Emre Varga' Head of Platform；RN 'Rosa Nunes' Operations；SI 'Dr. Sam Iyer' Screening；KB 'Kate Brandt' Business Development。结尾行 Inter 15px Slate：'Sixty-two people across the lab and the platform team - most days both.'
   布局：桌面端 6 图块网格（3 列 x 2 行），移动端 2 列，间距 32px，图块居中。字母组合是绘制的点缀；页面上任何地方都没有照片。
   动效：图块以 70 ms 错开进入；悬停时字母组合圆环变亮为全 Teal，圆填充 Mist。
9. **招聘条** — 锚点 id 'careers'。Mist 全出血面板（12px 圆角内嵌容器），眉题等宽 'JOIN'，H2 'Do the most careful work in biology.' 三张职位卡片（Paper 填充，1px Hairline 边框，6px 圆角）：标题 Sora 600 18px Ink，元信息等宽 11px Cell soft 'DEPT - CITY'，其中 CITY 是 [HQ_LINE] 的城市段，每张一行 Inter 14px Slate：'Scientist, High-Throughput Screening' - 'Own the dial-out assay end to end, forty thousand wells at a time' - 'SCREENING'；'Computational Biologist, [PLATFORM]' - 'Make the sampler braver without making it wrong' - 'PLATFORM'；'Head of Partnering' - 'Turn pharma interest into signed platform work' - 'BUSINESS'。幽灵胶囊 CTA 'All open roles'（1.5px Ink 边框，Ink 文字，Lucide ArrowUpRight）链接到 mailto:careers@vantra.example，由 BRAND slug 构建。
   布局：桌面端 3 栏网格（移动端 1 栏），间距 24px，面板 py-20。CTA 居中于网格下方。
   动效：卡片进入时上升，错开 100 ms；悬停时卡片上移 2px 并绘制 Teal 顶部边框（scaleX）。
10. **页脚** — Hairline 顶部线。四栏：(1) 字标 + 一行 Inter 14px Slate '[PLATFORM] is how [BRAND] works on [FOCUS]'；(2) 'Explore' 链接：Platform、Pipeline、Science、Team、Careers（页内锚点）；(3) 'Contact'：[HQ_LINE] 单独成行 Inter 14px，外加 mailto partners 链接；(4) 等宽 11px Cell soft 小字栏：'PROGRAM CODES, FIGURES AND PAPERS ON THIS PAGE ARE ILLUSTRATIVE EXAMPLES' 以及可选的 [CREDIT] 链接。底栏：等宽 11px Cell soft '[BRAND] - ALL VISUALS DRAWN IN CODE'。
   布局：py-16，4 栏网格（移动端 2 栏），底栏位于 Hairline 线之间。每栏文本左对齐。
   动效：除链接悬停下划线外无其他动效。

## 资产
- 字体：通过 Fontsource 自托管，在 src/main.ts 中导入：@fontsource/sora（600、700）、@fontsource/inter（400、500、600）、@fontsource/ibm-plex-mono（400、500）。Vite 将 woff2 文件打包进 dist/。绝不从 CDN 加载字体。
- 图标：lucide-react（ISC），从 npm 安装：仅使用 ArrowRight 和 ArrowUpRight，尺寸 16px，描边 2，currentColor。不使用其他图标；任何地方都不使用 emoji。
- 图片：完全没有图片文件。所有视觉元素均由代码绘制：分子（canvas，精确的 ATOMS/BONDS 数据位于 src/molecule-data.ts）、两个细胞团块和机制图（内联 SVG）、点阵网格（CSS）、标签和线条（CSS）、favicon（手写 SVG，位于 public/favicon.svg）。在项目根目录编写 ASSETS.md，列出 Fontsource 包（OFL-1.1）、lucide-react（ISC）和原创 favicon；不存在其他第三方文件。

## 禁止事项
- 不得包含任何形式的后端：不得有服务器代码、API 路由、数据库、认证、分析统计，也不得有会提交的表单。两个 CTA 都是由 BRAND slug 构建的 mailto 链接；任何内容都不会提交到任何地方。
- 任何地方都不得出现真实的生物技术或制药公司、药物、试验、基因名称或期刊名称；项目、论文、阶段、数字和期刊均为虚构示例。期刊描述保持通用（'Journal of Directed Protein Design'、'Assay Engineering Reports'、'Computational Biology Collective'、'Notes in Structural Biochemistry'）。
- 不得包含医疗、治疗或疗效声明：文案停留在平台科学层面。绝不要写 'treats'、'cures'、'patients receive' 或关于任何项目的结果声明；在 pipeline 上保留 'RESEARCH-STAGE EXAMPLES - NOT APPROVED PRODUCTS' 脚注。
- 所有内容均由代码绘制：不得有照片、位图、人物、外部图片下载、占位图服务。public/ 中唯一的文件是 favicon.svg。
- 页面任何地方都不得出现日历日期、年份或时间戳，包括出版物和 pipeline（规则：前端永不显示日期）。
- 不得从 fonts.googleapis.com、fonts.gstatic.com 或任何 CDN 加载字体；仅使用 Fontsource。不得使用 CDN <script> 或 <link> 标签；每个依赖都通过 npm 打包。
- 生产构建：压缩，build.sourcemap false，dist/ 中无 src/，相对资源路径（Vite base './'）。内部链接是 ./index.html 上的页内锚点。
- 除非用户要求，否则不得更改技术栈（Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react）。不得使用 three.js、WebGL、UI 套件、Aceternity UI 或 Tailwind Plus 源码。
- 仅使用 Sora、Inter 和 IBM Plex Mono，并且仅使用 Design 中的八个十六进制令牌。Teal 是唯一强调色；除 hero 的径向点状渐隐外不得使用渐变，除 molecule 卡片的单一柔和阴影外不得使用阴影。
- molecule 必须是确定性的：严格使用给定的 ATOMS/BONDS 数据，固定旋转速度，无随机值，因此两次构建产生相同的视觉效果。不得添加随机漂移或粒子。
- 严格按照规定遵循 prefers-reduced-motion（静态 molecule 帧、无 cell 漂移、仅透明度揭示、即时计数器）。当 hero 不在屏幕内或标签页隐藏时，暂停 canvas 循环。
- 必须在 1440x900 和 390x844 下正常工作，零控制台错误，无水平滚动，链接可通过键盘访问，并具有可见的 2px Teal 焦点环。
- 保持 dist/ 低于 20 MB（应远低于 1 MB）；不得有视频、音频。
- 将所有文案保留在 src/content.ts 中，并在变量值与默认值不同时重写它；绝不要在更改了 brand、platform、focus、HQ 或 program prefix 的情况下发布默认文案。不得使用 lorem ipsum，不得使用填充内容。
- 除可选的 [CREDIT] 页脚链接外，站点内不得提及 VibeFather 或任何模板来源。

---
— Prompt by VibeFather · https://vibefather.ai/t/biotech-startup-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
