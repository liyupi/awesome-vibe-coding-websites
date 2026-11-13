> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 无人机服务公司网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的一页式、清爽白色调服务网站，[BRAND] 是一家飞行于 [SERVICE_REGION] 的航拍无人机服务公司。首屏是一张全出血的俯拍航拍照片，配以白色字体和等宽遥测信息标签，在微妙的视差效果中缓缓漂移。接着是：三张服务卡片，配有照片和交付物标签（巡检、测绘与勘测、拍摄与进度记录）；前后对比测绘滑块——同一场景，一条可拖拽的分隔线，处理侧在 canvas 中实时绘制（测绘网格、等高线、伪彩色着色、橙色航点）；一条三步飞行日流程条；一行行业应用，附四条实证文案；一个六张照片的画廊，配等宽字体说明文字；以及一个客户端报价表单。全部本地化，全部静态。

- 受众：[AUDIENCE]，他们需要可量测的航拍数据或影像，此外还有无人机操作员、测量师和现场服务企业，他们正将此模板改造用于自己的业务手册。
- 目标：在一屏滚动内证明作品质量——首屏照片、交付物标签、交互式地图滑块和画廊——并通过报价表单将项目简报转化为商机。
- 语调：直白且可量测。短句，测量师词汇（GSD、正射影像、等高线），具体的虚构数字。不用探险运动式语言，不谈法规，不夸大宣传。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 motion/react 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/space-grotesk（OFL-1.1）、@fontsource-variable/archivo（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置（Setup）：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。单页面：项目根目录下的 index.html，入口为 src/main.tsx。package.json 脚本：dev 'vite'、build 'tsc -b && vite build'、preview 'vite preview'。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。图片放在 public/images/ 下，以 './images/<file>' 引用，以便在任何子路径下都能正常工作。保持 dist/ 在 6 MB 以内。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中扩展 colors（cloud、skywash、mist、line、ink、slate、faint、sky、signal、signal-deep、signal-tint），fontFamily display ['Space Grotesk Variable', 'system-ui', 'sans-serif']、sans ['Archivo Variable', 'system-ui', 'sans-serif']、mono ['IBM Plex Mono', 'ui-monospace', 'monospace']，maxWidth { container: '1200px' }，borderRadius { card: '14px', chip: '6px', frame: '16px' }。
  - src/fonts.ts 导入 @fontsource-variable/space-grotesk（500,600,700）、@fontsource-variable/archivo（400,500,600）和 @fontsource/ibm-plex-mono（400.css、500.css）；src/main.tsx 导入 src/fonts.ts 和 src/index.css。index.css 包含 Tailwind 各层、body 背景 #FFFFFF 和文字颜色 #16242E，以及一个 @media (prefers-reduced-motion: reduce) 块，将 CSS 动画和过渡缩短至 0.01ms。
  - 文件布局：src/content.ts（所有文案和数据，带类型）、src/lib/brand.ts（brandSlug、emailDomain、companyName、address）、src/lib/mulberry32.ts、src/components/（Header.tsx、MobileMenu.tsx、Hero.tsx、Services.tsx、MapSlider.tsx、FlightDay.tsx、Industries.tsx、Gallery.tsx、QuoteForm.tsx、Footer.tsx、Button.tsx、Reveal.tsx）、src/App.tsx 按页面顺序组合它们。
  - MapSlider.tsx 自行绘制处理后的那一侧：在原始图像上叠加一个 <canvas> 层，使用 Map slider 部分中的带种子算法（mulberry32 种子 42）渲染，在窗口尺寸变化时重新渲染（防抖 150ms）。不使用图像编辑库。
  - Reveal.tsx 用 Motion 的 whileInView 淡入上移动画包裹各个区块（opacity 0 -> 1，y 20 -> 0，duration 0.6，ease [0.22, 1, 0.36, 1]，viewport once 且 amount 0.2），当开启减少动态效果时不做动画。用 MotionConfig reducedMotion='user' 包裹整个应用。
  - index.html：lang en，<meta name='theme-color' content='#FFFFFF'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BRAND] — Aerial inspection, mapping and filming</title>。public/favicon.svg 是标志图形（墨色圆形，带白色下降路径箭头和橙色航点圆点）。
  - 在构建之前，使用 Assets 下的 curl 命令将六张图片下载到 public/images/，并按 Assets 下的说明在项目根目录写入 ASSETS.md。

## 变量
- [BRAND] — 品牌名称（默认：“Ternbay”）。虚构的公司名称；网站以“[BRAND] Aerial”作为自身品牌。绝不是真实的无人机制造商、运营商或监管机构。
- [SERVICE_REGION] — 服务区域（默认：“the Pacific Northwest”）。团队飞行的区域。用于主视觉副标题、行业文案和页脚；图库中的项目地点与之呼应。
- [AUDIENCE] — 客户类型（默认：“civil engineering firms, county surveyors and film crews”）。指代雇用该公司的客户的复数名词短语；驱动主视觉、行业证明文案和报价表单文案。
- [DAY_RATE] — 起始日费率（默认：“$640”）。在服务卡片和报价表单上以“from [DAY_RATE] per flight day”形式展示的示例起始价格。虚构示例，任何带货币符号的金额数字均可。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/drone-services-company-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- cloud `#FFFFFF` — UI 表面：页眉、卡片、表单、页脚基础
- skywash `#F2F6F9` — 交替区块背景
- mist `#E3ECF2` — 标签背景、内嵌面板、输入框填充
- line `#D3DEE6` — 细线边框和分隔线
- sky `#2F6DA8` — 冷调数据蓝：白底上的链接、等高线底色、仅用于小标记
- ink `#16242E` — 标题、滑块线条、浅色背景上的主要文本
- slate `#4E6272` — 正文
- faint `#8AA0AF` — 说明文字、等宽标签、脚注
- signal `#F25C05` — 唯一强调色：CTA、滑块手柄、航点、激活状态、证明数字
- signal-deep `#C94804` — 悬停和按下状态
- signal-tint `#FDEADD` — 柔和橙色高亮、选中标签

### 排版（Typography）
- 展示字体：H1 clamp(40px, 5vw, 68px) line-height 1.04 letter-spacing -0.02em weight 700；H2 clamp(30px, 3.6vw, 46px) weight 700；卡片标题 22px weight 600：Space Grotesk Variable (OFL)，字重 500/600/700
- 文本：正文 16px/1.6，副标题 17-18px，导航 14px，按钮 15px weight 600：Archivo Variable (OFL)，字重 400/500/600
- 等宽字体：遥测标签、交付物标签、区块标签（11-12px，letter-spacing 0.12em，大写）、画廊说明文字、表单标签：IBM Plex Mono (OFL)，字重 400/500

### 布局与动效（Layout & motion）
- 间距：8px 基准。容器最大宽度 1200px，两侧内边距 24px（低于 640px 时为 20px）。桌面端区块垂直内边距 104px，移动端 72px。区块标题下方间距 48px。卡片内边距 24px；滑块框架在容器内通栏。
- 圆角：卡片和照片卡片 14px；标签 6px；输入框 8px；滑块框架 16px；主要按钮和幽灵按钮为全胶囊形（999px）；画廊图块 10px。
- 动效：Hero 视差：背景照片在前 120vh 滚动中平移 0 -> 高度的 8%（rAF，仅 transform），遥测标签淡出 1 -> 0.7；在减少动态效果下禁用。
- 动效：地图滑块：指针或键盘拖动，位置限制在 0-100；首次 50% 进入视口且尚未交互时，执行一次性提示扫动（1.6s 内 50 -> 62 -> 40 -> 50）；在减少动态效果下禁用。
- 动效：滚动显现：淡入上移 20px，0.6s，ease [0.22, 1, 0.36, 1]，仅一次，错峰 0.06-0.1s。
- 动效：卡片悬停：照片缩放 1 -> 1.04（400ms），卡片上浮 3px；画廊说明文字以 signal 橙色下划线。
- 动效：prefers-reduced-motion：无视差、无提示扫动、无缩放；显现效果原地渲染；滑块仍可拖动（它是直接操作）。
- 图像：六张生成的航拍照片，读起来像同一位运营者的作品集：每张图像都是约 120 米高度、晴朗上午光线下的正俯视（nadir）视角，阴影清晰对齐，冷调自然调色——河口、太阳能阵列、条纹农田、森林与湖泊相接、采石场梯田、小港口。画面中没有人、没有可辨识车牌的车辆、没有标牌、没有任何可读文字。白色 UI 覆盖其上；滑块中的测绘叠加层是代码绘制的，不是照片。

## 页面与区块
### 首页（`index.html`）
1. **内容文件与文案规则** — 本提示词中的所有文案均按默认值编写（[BRAND] = Ternbay，[SERVICE_REGION] = 太平洋西北地区，[AUDIENCE] = 土木工程公司、县测量员和摄制组，[DAY_RATE] = $640）。将每个字符串、数字、服务项、标签（chip）、行业文案行、图库说明、表单标签和页脚链接都放入 src/content.ts 并从中渲染；组件中不包含任何文案。若任一变量值不同，则重写每个标题、副标题、服务文案行、行业佐证文案行、图库说明和表单引导语，使其对新公司和地区而言具体且可信，同时保持相同的结构、条目数量（3 项服务、3 个步骤、4 个行业、6 个图库图块）和大致长度；图库说明仍须描述其照片实际展示的内容。src/lib/brand.ts 中的派生值：brandSlug = [BRAND] 转为小写并将非字母数字的连续字符替换为 '-'；emailDomain = 去掉连字符的 brandSlug + '.com'（ternbay.com）；companyName = [BRAND] + ' Aerial LLC'；address = '1180 Falkner Quay, Suite 2, Bremerton, WA 98337'（针对新地区重写）。每个数字（GSD、英亩数、费率）都是为虚构品牌编造的示例；不使用客户标志、不使用客户评价、不引用监管机构或认证。
   布局：无视觉输出。content.ts 导出带类型的对象：brand、nav、hero、services、mapSlider、flightDay、industries、gallery、quote、footer。区块顺序：页头（Header）、首屏（Hero）、服务（Services）、地图滑块（Map slider）、飞行日（Flight day）、行业（Industries）、图库（Gallery）、报价（Quote）、页脚（Footer）。
2. **页头（共享，吸顶）** — 左侧：标志图形 + 文字标识 '[BRAND] Aerial'（Space Grotesk 700，18px）。标志图形：30px 内联 SVG——一个墨色（#16242E）圆形，内含两个白色向下箭头（chevron）堆叠、间距 6px（如同下降路径），下方箭头正下方居中一个 4px 信号橙圆点。导航链接（Archivo 500，14px，#4E6272，悬停 #16242E）：Services（#services）、Map room（#mapping）、Industries（#industries）、Work（#work）。右侧：信号橙胶囊按钮 'Get a quote'（href #quote）。
   布局：固定顶部，高度 68px，全宽；内部容器 1200px，水平内边距 24px，flex justify-between items-center。在首屏之上时透明，文字为白色，标志使用白色描边变体（墨色圆形换为白色圆形配墨色箭头）；滚动 24px 后获得背景 rgba(255,255,255,0.92)、backdrop-filter blur(12px)、1px 底边框 #D3DEE6，并切换为浅色变体（过渡 200ms）。低于 900px：导航隐藏；显示胶囊按钮（小号）和一个 40px 图标按钮，内含 Lucide Menu（首屏之上为白色，滚动后为墨色），点击后从页头下方展开全宽面板（背景 #FFFFFF，底边框 #D3DEE6），四个链接为 18px、56px 行高，另加一个全宽 'Get a quote' 按钮；X 关闭，Escape 关闭，点击链接关闭。锚点平滑滚动，偏移 76px。
   动效：面板：Motion 高度/不透明度 240ms ease-out。页头变体为 CSS 过渡。除此之外无其他动效。
3. **首屏：全出血俯视航拍** — 引导语（等宽 12px，大写，字距 0.14em，白色/85）：'AERIAL INSPECTION · MAPPING · FILMING'。H1，两行，白色：'The ground truth,' / 'from 120 meters up.' —— '120 meters' 为信号橙。副标题（18px，rgba(255,255,255,0.85)，最大宽度 560px）：'[BRAND] flies inspection, mapping and film missions across [SERVICE_REGION] and hands you data you can measure — orthomosaics at 1.2 cm per pixel, inspection sets you can zoom into, and footage that opens a video.' 按钮：信号橙胶囊 'Get a quote'（href #quote）和幽灵胶囊 'Try the map slider'（白色 1.5px 边框，白色文字，href #mapping）。遥测标签（chip），等宽 12px 大写：'ALT 120 M'、'GSD 1.2 CM'、'FRAMES 2,400'、'WIND 9 KT'。右下滚动提示：等宽 11px 'SCROLL' + Lucide ChevronDown，以 1.2s 慢速上下浮动。
   布局：全视口首屏（min-height 92vh）。背景：img hero-coast.webp，position absolute inset-0，object-fit cover，object-position center；其上叠加渐变 linear-gradient(180deg, rgba(10,20,26,0.30) 0%, rgba(10,20,26,0.05) 40%, rgba(10,20,26,0.78) 100%)。内容容器 1200px 定位于左下：padding-bottom 96px；引导语、H1、副标题、按钮位于左列（最大宽度 640px）。遥测标签：一行四个标签固定在页头下方右上角（桌面端 inset-top 92px，right 24px）——每个标签背景 rgba(255,255,255,0.85)，backdrop blur 8px，圆角 6px，内边距 6px 10px，墨色文字。滚动提示右下 24px。移动端（<900px）：H1 40px；标签在按钮下方换行为 2x2 网格（静态，不固定）；滚动提示隐藏。
   动效：视差：当区块滚出视口时，照片层向下平移其高度的 0 到 8%（requestAnimationFrame，仅 transform，不触发布局）；标签随滚动从 1 淡出到 0.7。入场：引导语、H1、副标题和按钮在 100ms 后淡入上移（y 20 -> 0，错峰 0.08s）。减少动效（REDUCED MOTION）：照片固定，标签静态，内容原地渲染。
4. **服务（#services）** — 区块标签（等宽 12px，大写，字距 0.14em，#8AA0AF）：'WHAT WE FLY'。H2：'Three services. Measurable deliverables.' 副标题（17px，#4E6272）：'Every flight ends in files your team can open — not a pile of pretty frames.' 卡片 01，等宽索引 '01 / INSPECTION'，标题 'Aerial Inspection' —— 'Close looks at what no one can walk to: roof arrays, flare stacks, bridge decks, catwalks.' 标签：4K ZOOM STILLS · THERMAL PAIRS · DEFECT MARKUP。费率行（等宽 12px，信号橙）：'from [DAY_RATE] per flight day'。卡片 02 '02 / MAPPING'，'Mapping & Survey' —— 'Orthomosaics, contours and volume reports you can drop straight into CAD.' 标签：ORTHOMOSAIC · 0.5 M CONTOURS · VOLUME REPORT。卡片 03 '03 / FILMING'，'Filming & Progress' —— 'One flight a month, a hyperlapse your whole team can scrub, and footage that opens a video.' 标签：4K60 · HYPERLAPSE · PROGRESS GRID。
   布局：区块内边距 104px 0（移动端 72px），背景 #FFFFFF。页头左对齐，最大宽度 640px，margin-bottom 48px。三张卡片在 3 列网格中（间距 24px；低于 900px 为单列）。卡片：背景 #F2F6F9，1px 边框 #D3DEE6，圆角 14px，overflow hidden。顶部照片：aspect-ratio 4/3，object-fit cover（依次为 svc-inspection.webp、svc-mapping.webp、svc-filming.webp），等宽索引标签叠加在左上角（白色标签，圆角 6px）。主体内边距 20px：标题（Space Grotesk 600，22px，#16242E），正文（15px，#4E6272，行高 1.6），标签行（等宽 10px 大写，#4E6272 配 #E3ECF2 背景，圆角 6px，内边距 4px 8px，可换行），费率行位于底部。
   动效：卡片淡入上移，错峰 0.08s（一次）。悬停：照片缩放 1 -> 1.04（400ms ease-out），卡片上浮 3px。减少动效：静态。
5. **地图滑块：前后对比制图（#mapping）** — 区块标签：'MAP ROOM'。H2：'One flight, two truths.' 副标题（最大宽度 620px）：'Drag the divider. The left is the raw frame; the right is the same frame processed into a survey map — contours, grid and flight line drawn live in your browser.' 角落标签（等宽 11px 标签）：左侧 'RAW FRAME'，右侧 'SURVEY PASS'。画面下方：说明文字（13px，#8AA0AF）：'A sample pair from one training flight — the same photo processed two ways in the browser, with sample data for this demo.' 以及一行标签（等宽 11px，#4E6272 配 #E3ECF2 背景）：'GSD 2.4 CM'、'18 CONTOURS'、'3 WAYPOINTS'、'GRID 8×6'。
   布局：区块内边距 104px 0，背景 #F2F6F9。页头居中，最大宽度 680px，margin 0 auto 32px。滑块画面：margin-top 24px，宽度 100%，aspect-ratio 16/9，圆角 16px，overflow hidden，1px 边框 #D3DEE6，position relative，touch-action pan-y，cursor ew-resize。AFTER 层：img svc-mapping.webp object-fit cover。BEFORE 层：一个同尺寸的 <canvas> 位于其上，用 clip-path inset(0 calc(100% - var(--pos)) 0 0) 裁剪，显示原始照片。canvas 使用 mulberry32(42) 确定性渲染：1) 以 canvas 尺寸 cover-fit 绘制 svc-mapping.webp，ctx.filter 为 'saturate(1.0) contrast(1.02)'（原始外观——无处理）；AFTER 处理是堆叠在原始层下方的第二个 canvas，同样从同一图像绘制并施加测绘处理：ctx.filter 'saturate(0.55) brightness(1.06)'，然后以 'multiply' 填充 rgba(47,109,168,0.16)，然后绘制测绘网格（竖线每 width/8，横线每 height/6，描边 #16242E，alpha 0.12，setLineDash [2,6]），然后 8 条等高线折线：对 k 从 0 到 7，路径 y(x) = height*(0.12 + 0.10*k) + 18*sin(x*0.008 + k*1.7) + 9*sin(x*0.021 + k*0.9)，描边 #16242E alpha 0.55 宽度 1.5（每第 4 条等高线宽度 2.5 alpha 0.8），然后绘制飞行线：三个航点圆位于 (0.22w, 0.30h)、(0.55w, 0.62h)、(0.78w, 0.28h)——每个 r7 描边 #F25C05 2.5px，中心点 2.5px——由虚线 #F25C05 路径连接（dash [8,6]，宽度 2，alpha 0.9），然后四个 L 形角落裁切标记（#16242E，alpha 0.5）。画面中的图层堆叠：after-canvas（底部），由 --pos 裁剪的 raw-canvas（顶部）。两个 canvas 随画面尺寸按 devicePixelRatio 缩放，上限为 2，在 resize 时重新渲染（防抖 150ms）。手柄：位于 var(--pos) 的 2px 垂直白线（#FFFFFF，box-shadow 0 0 10px rgba(0,0,0,0.5)），带一个 44px 信号橙圆形旋钮（2px 白色圆环），内含白色 Lucide ChevronsLeftRight 18px。角落标签：白色标签圆角 6px，内缩 16px，位于左上和右上。无障碍：旋钮为 role='slider'，tabindex 0，aria-label 'Compare raw frame and survey pass'，aria-valuemin 0 max 100 valuenow = pos；ArrowLeft/Right 移动 5，Shift+Arrow 移动 10，Home 0，End 100；可见的 2px 信号橙焦点环，偏移 3px。指针：任意位置 pointerdown 跳转并 setPointerCapture 拖动；限制在 0-100；默认 pos 50。移动端：aspect-ratio 4/3。
   动效：当画面首次进入视口 50% 且尚未被交互时，一次性提示在 1.6s 内将 pos 从 50 扫到 62 -> 40 -> 50（easeInOut）；在减少动效或任何交互后跳过。画面内无其他动画。
6. **飞行日条带** — 一行三个步骤，等宽数字：01 PLAN —— 'We scope the grid, the GSD you need and the corners to avoid before anyone leaves the truck.' 02 FLY —— 'One pilot, one spotter, battery-and-swap rhythm — about 40 minutes of useful air per pack.' 03 DELIVER —— 'Ortho, contours and a web folder in your inbox within 48 hours of wheels-up.' 结尾小字（13px，#8AA0AF）：'Deliverables are samples of format, not promises of acreage.'
   布局：区块内边距 72px 0，背景 #FFFFFF，上边框 1px #D3DEE6。容器 1200px；三列，间距 32px，每列：等宽步骤编号（14px，信号橙），标题（Space Grotesk 600，18px），正文（15px，#4E6272）。移动端：单列，间距 24px。
   动效：列淡入上移，错峰 0.08s（一次）。无其他动效。
7. **行业（#industries）** — 区块标签：'WHO HIRES US'。H2：'Built for teams that measure.' 副标题：'Four kinds of work, four invented proof lines from the log book.' 卡片：1) Construction & Earthworks（标签 'PROGRESS'）—— 'Bimonthly progress grids across 14 active sites, delivered as a scrub-able hyperlapse.' 2) Energy & Grid（标签 'THERMAL'）—— 'Corridor flights along 60 km of line, with a thermal pair for every span.' 3) Agriculture（标签 'PLANT HEALTH'）—— 'Field health maps over 3,000 leased acres, four flights a season.' 4) Coastal & Environment（标签 'CHANGE DETECTION'）—— 'Quarterly shoreline change surveys for two county programs, contour-matched year over year.' 每个佐证数字（14、60 km、3,000、two）以信号橙渲染。
   布局：区块内边距 104px 0，背景 #F2F6F9。页头左对齐，最大宽度 620px，margin-bottom 48px。卡片：2x2 网格（间距 20px；低于 900px 为单列）。卡片：背景 #FFFFFF，1px 边框 #D3DEE6，圆角 14px，内边距 24px，左侧 3px 信号橙竖线（border-left），标题（Space Grotesk 600，20px），正文（15px，#4E6272），标签位于右上（等宽 10px，配 #E3ECF2 背景）。
   动效：卡片淡入上移，错峰（一次）。除边框变深外无悬停动效。
8. **项目图库（#work）** — 区块标签：'FROM THE LOG BOOK'。H2：'Six flights, one light.' 副标题：'Every frame top-down, every mission mapped.' 图块按顺序（照片 | 宽高比 | 说明）：1) hero-coast.webp | 16:9 | 'FALLOW FLATS ESTUARY · MAPPING · GSD 1.2 CM'；2) svc-inspection.webp | 4:3 | 'ARRAY 12 · INSPECTION · 2,400 FRAMES'；3) svc-mapping.webp | 4:3 | 'STRIPED FIELDS · SURVEY · 0.5 M CONTOURS'；4) gallery-quarry.webp | 4:3 | 'QUARRY 04 · VOLUMES · GSD 2.0 CM'；5) svc-filming.webp | 4:3 | 'RIDGE PINE LAKE · FILM · 4K60'；6) gallery-harbor.webp | 4:3 | 'WEST HARBOR DOCKS · CHANGE · QUARTERLY'。说明格式为等宽 11px 大写：虚构项目名 · 交付物 · 指标。
   布局：区块内边距 104px 0，背景 #FFFFFF。页头左对齐。网格：>=1024px 为 3 列，以下为 2 列（含 390px），间距 20px。图块：figure；图片圆角 10px，按图块设置 aspect-ratio（16:9 或 4:3），object-fit cover，1px 边框 #D3DEE6；说明位于图片下方，等宽 11px，#8AA0AF，margin-top 8px，项目名用 #4E6272。除前两张外图片均 loading lazy。Alt 文本描述照片（例如 'Top-down aerial photo of a braided estuary'）。
   动效：图块淡入上移，错峰 0.05s（一次）。悬停：图片在其框架内缩放 1 -> 1.04（overflow hidden），说明中的项目名以信号橙加下划线。减少动效：静态。
9. **报价表单（#quote）** — 左列：区块标签 'START A BRIEF'。H2：'Tell us about the site.' 正文（16px，#4E6272）：'Send the outline — acres or kilometers, terrain, and what you need back. We reply with a flight plan and a firm day rate, from [DAY_RATE], within one business day.' 联系信息块（等宽 13px）：hello@ + emailDomain；公司地址；'Mon-Sat, weather permitting.' 右列，表单字段（标签等宽 11px 大写）：Name（文本，必填），Email（邮箱，必填），Company（文本，可选），Service（下拉：Aerial inspection / Mapping & survey / Filming & progress），Site size（下拉：Under 5 acres / 5-50 acres / 50+ acres / Linear corridor），Notes（文本域，占位符 'Terrain, access, deadlines — anything useful.'）。提交：信号橙胶囊 'Send the brief'。成功面板替换表单：一个 40px 信号橙浅色圆，内含信号橙 Check，标题 'Brief received'，文本 'Thanks — expect a flight plan and a firm day rate from hello@' + emailDomain + ' within one business day.' 以及文本按钮 'Send another brief'。错误：字段下方以信号橙显示内联提示 'Required' 和 'Enter a valid email address'，设置 aria-invalid。
   布局：区块内边距 104px 0，背景 #F2F6F9。两列：文案 col-span-5，表单 col-span-7。表单卡片：背景 #FFFFFF，1px 边框 #D3DEE6，圆角 14px，内边距 28px；字段为 2 列网格（Name+Email、Company+Service、Site size 全宽、Notes 全宽）；输入框背景 #FFFFFF，1px #D3DEE6，圆角 8px，内边距 12px 14px，焦点环 2px 信号橙；下拉框样式相同，带 chevron。移动端：单列，卡片位于文案下方。
   动效：卡片淡入上移（一次）。成功面板淡入并缩放 0.98 -> 1（220ms）。表单调用 preventDefault，仅更改本地状态；不发送任何内容。
10. **页脚** — 左侧：标志图形 + '[BRAND] Aerial'，一行 'Aerial inspection, mapping and filming for [AUDIENCE].'（根据变量重写），然后是地址 '1180 Falkner Quay, Suite 2, Bremerton, WA 98337' 以及 hello@ + emailDomain。三个链接列：Services（Inspection、Mapping & survey、Filming -> #services），Work（Map room #mapping、Gallery #work、Industries #industries），Company（About、Safety notes、Contact -> #top，Contact 为 mailto）。底行：左侧 '© ' + companyName（无年份、无日期）；右侧：文本链接 Terms、Privacy（#top）以及一个 36px 图标按钮，内含 Lucide Mail（mailto）。然后是可选的 [CREDIT] 链接（若提供）。
   布局：内边距 64px 0 36px，背景 #FFFFFF，上边框 1px #D3DEE6。容器 1200px；12 列网格：品牌块 col-span-5，链接列各 col-span-2（标题 Archivo 600 13px 大写 字距 0.08em #16242E；链接 14px #4E6272 悬停 #16242E）。底行 margin-top 48px，padding-top 20px，上边框 1px #D3DEE6，13px #8AA0AF，flex justify-between。移动端：品牌块全宽，链接列为 2 列网格，底行堆叠。
   动效：除链接颜色过渡外无其他动效。

## 资源

- 图片：为本设计生成了六张模板图片（由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发），风格统一：俯视航拍照片，清晰的上午中段光线，冷调自然色调，无人物，无可读文字，无标识。使用 curl -L -o 将每张图片下载到 public/images/ 中，并以 './images/<file>' 引用：https://media.vibefather.ai/assets/6a046743-4fa8-4fa2-bd23-d0d4074eb7c6/hero-coast.webp -> public/images/hero-coast.webp（首屏背景和图库瓦片 1；alt 'Top-down aerial photo of a braided coastal estuary'）；https://media.vibefather.ai/assets/6a046743-4fa8-4fa2-bd23-d0d4074eb7c6/svc-inspection.webp -> public/images/svc-inspection.webp（服务卡片 01，图库瓦片 2；alt 'Top-down aerial photo of a solar panel array in ordered rows'）；https://media.vibefather.ai/assets/6a046743-4fa8-4fa2-bd23-d0d4074eb7c6/svc-mapping.webp -> public/images/svc-mapping.webp（服务卡片 02，地图滑块的上下两层，图库瓦片 3；alt 'Top-down aerial photo of striped plowed farmland'）；https://media.vibefather.ai/assets/6a046743-4fa8-4fa2-bd23-d0d4074eb7c6/svc-filming.webp -> public/images/svc-filming.webp（服务卡片 03，图库瓦片 5；alt 'Top-down aerial photo of a pine forest meeting a lake'）；https://media.vibefather.ai/assets/6a046743-4fa8-4fa2-bd23-d0d4074eb7c6/gallery-quarry.webp -> public/images/gallery-quarry.webp（图库瓦片 4；alt 'Top-down aerial photo of terraced quarry benches with turquoise water'）；https://media.vibefather.ai/assets/6a046743-4fa8-4fa2-bd23-d0d4074eb7c6/gallery-harbor.webp -> public/images/gallery-harbor.webp（图库瓦片 6；alt 'Top-down aerial photo of a small harbor with parallel docks'）。共六个文件；不要替换为其他图片。
- 图片：以代码绘制，不使用位图：标识图形和 public/favicon.svg（墨色圆形、白色下降箭头、橙色航点圆点）、地图滑块中的测绘航线画布叠加层（网格、等高线、着色、飞行路线、裁切标记——在“地图滑块”部分使用种子算法生成），以及所有 UI 标签。
- 图标：lucide-react（ISC），按图标逐个导入：ChevronDown、ChevronsLeftRight、Search、Map、Film、Timer、Check、Menu、X、Mail、ArrowRight、MapPin。不使用品牌标识，不使用 Simple Icons。
- 字体：安装 @fontsource-variable/space-grotesk、@fontsource-variable/archivo 和 @fontsource/ibm-plex-mono（均为 OFL-1.1），并在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包到 dist/ 中。
- 图片：在项目根目录编写 ASSETS.md，包含一个表格（路径、来源 URL、作者、许可证）：public/images/ 中的每张图片占一行，附其 media.vibefather.ai URL，作者为 'VibeFather'，许可证为 'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template'；为三个 Fontsource 包（OFL-1.1，https://fontsource.org）和 lucide-react（Lucide contributors，ISC，https://lucide.dev）各添加一行；并添加一行说明标识、favicon 和测绘叠加层是为本项目以代码绘制的。

## 禁止事项
- 不得包含任何形式的后端：无服务器代码、API 路由、数据库、认证、邮件服务、分析或第三方 API。报价表单调用 preventDefault，仅更改本地 UI 状态；不提交或发送任何内容。
- 不得出现真实的无人机制造商、运营商、监管机构或认证名称（不得出现制造商或机构商标、许可证类别徽章或规则引用）；公司、项目、客户和飞行均为虚构。
- 文案或标签中不得出现任何空域、法规、认证或保险相关声明。
- 航拍照片不得包含可识别的人物、可读文字、标牌、标识、用作品牌的标志性建筑——仅使用列出的六个文件，不得用库存照片或占位图服务补充。
- 前后对比图是同一场景的两种处理方式，测量侧按描述在 canvas 中实时绘制；保留滑块下方的诚实样本说明，绝不可将处理后的画面呈现为真实客户交付物。
- 不得从 fonts.googleapis.com、fonts.gstatic.com、Adobe Fonts 或任何 CDN 加载字体。仅通过三个 Fontsource 包自托管。不得使用商业字体。
- 不得使用 CDN 脚本或链接标签；每个脚本、样式、字体、图标和图像均安装或下载到项目中并打包进 dist/。运行时绝不热链 media.vibefather.ai URL；先下载它们。
- 生产构建中不得包含 source map（build.sourcemap false），且 src/ 不会复制到 dist/。
- 使用相对资源路径（Vite base './'，图像为 ./images/<file>）。内部链接为哈希锚点（#services、#mapping、#industries、#work、#quote、#top）或 ./index.html，绝不使用裸目录或前导斜杠。
- 网站上任何地方不得出现日期或年份：无版权年份、无飞行日期、无绑定日历的季节。页脚版权行仅包含 companyName。
- 费率和指标是为虚构公司编造的样本值；不得将其呈现为市场数据或报价。
- 滑块、视差或显现效果不得使用 Aceternity UI、Tailwind Plus / Tailwind UI 或任何购买模板的代码或组件。按此处描述重新实现一切。
- 尊重 prefers-reduced-motion：无视差、提示扫过、缩放或显现；直接操作（滑块拖动、表单）保持可用。
- 仅对 HTML 元素动画 transform 和 opacity；绝不直接动画 width、height、top 或 left。
- 必须在 1440x900 和 390x844 下正常工作，零控制台错误且无水平滚动；移动端主图不得裁切标题。
- 除可选的 [CREDIT] 页脚链接外，网站上任何地方不得提及 VibeFather。

---
— Prompt by VibeFather · https://vibefather.ai/t/drone-services-company-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
