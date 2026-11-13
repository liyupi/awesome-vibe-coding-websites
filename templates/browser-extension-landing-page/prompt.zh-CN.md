> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 浏览器扩展落地页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个单页网站，用于发布 [BRAND]——一款通过 [SHORTCUT] 唤起的浏览器扩展，它可以 [JOB]。首屏是一个用代码绘制的浏览器模型，正在运行该扩展工作的脚本化演示；其下方是一个同步的三步导轨、一个三特性区块、一份隐私宣言、用户评价、绘制的安装按钮和一个简短的常见问题。单页，index.html；一切都在浏览器中运行，不会向任何地方提交数据。

- 受众：安装前会阅读扩展权限的人：开发者、写作者和标签页囤积者，他们希望在把工具栏位置托付给某个东西之前，先看到它确实能用。
- 目标：安装量。访客在十秒内看到模型演示正在播放以及安装按钮；在两分钟内读完隐私宣言并点击下载。
- 语气：工坊式的直白：它做什么、它接触什么、它绝不接触什么。关于权限的一个冷幽默。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/newsreader（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化（Setup）：
  - 使用 npm create vite@latest 并选择 react-ts 模板搭建项目，然后只保留一个真实 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base 设为 './'，plugins 为 [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要把 src/ 复制到 dist/ 中。
  - Tailwind 3.4 通过 PostCSS 接入，content 为 ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，把设计（Design）下的每种颜色以 kebab-case 键名加入 theme.extend.colors（graphite、panel、panel-2、line、paper、mist、amber、amber-deep、amber-mist、ink、good），并设置 fontFamily：display 为 ['Newsreader Variable', 'Georgia', 'serif']，sans 为 ['Inter Variable', 'system-ui', 'sans-serif']，mono 为 ['JetBrains Mono', 'ui-monospace', 'monospace']。将 borderRadius 的 DEFAULT 设为 10px，并添加 maxWidth { container: '1180px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/newsreader'、'@fontsource-variable/inter' 和 '@fontsource/jetbrains-mono/400.css' 以及 '500.css'；在入口文件中导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（所有字符串、步骤、功能、评价、FAQ 行、演示文案、打字效果文本），src/lib/brand.ts（brandSlug = [BRAND] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，downloadName = brandSlug + '-extension.zip'，emailDomain = 去掉连字符的 brandSlug + '.com'）。
  - 状态（State）：src/store/demo.ts 是一个小型外部 store（useSyncExternalStore），保存演示步骤索引 0–3 和一个暂停标志，由 2.6s 的定时器驱动；当鼠标悬停或聚焦到 mockup 上时停止，在 prefers-reduced-motion 下也停止（此时固定为步骤 3，即完成后的干净状态）。
  - 组件位于 src/components/：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx、InstallButtons.tsx；Hero.tsx（BrowserMock.tsx）、Steps.tsx（StepRow.tsx）、Features.tsx（FeatureCard.tsx）、Privacy.tsx、Reviews.tsx（ReviewCard.tsx、StarRow.tsx 手绘 SVG）、Faq.tsx（FaqRow.tsx）。src/pages/Home.tsx 负责组合它们。
  - BrowserMock：一个 880x560px（max-width 100%）的 CSS 浏览器窗口：chrome 栏（三个 Line 色圆点、一个显示 'longreads.example — a very cluttered article' 的 URL 胶囊，以及一个工具栏区域，内含三个灰色字形方块，然后是 [BRAND] 扩展图标——一个 22px 的 Amber 圆角方块，带手绘纸张字形）。内部是假页面：一篇通用文章（标题栏、两列 Line 灰色占位条组成的文本，以及在步骤 0–1 时出现的四个广告块：带 amber 叉号的灰色方块，用 10px mono 字体标注 'AD'）。演示循环：步骤 0 杂乱页面静止（广告块轻微脉动）；步骤 1 扩展图标弹跳一次，一个光标点移向它；步骤 2 弹出面板（一张 Paper 卡片，260px，从工具栏以弹簧缓动出现：品牌行、一个开关 'Reading mode'、一个滑块 'Width'、一条弱化提示 'Local only — no account'）；步骤 3 页面变换：广告块淡出并折叠消失（300ms），文本条变为更宽的 Paper-on-graphite 可读条，弹出面板关闭，工具栏图标上出现一个小的 Amber 'done' 对勾。mockup 下方有步骤圆点（4 个）；悬停 mockup 会暂停循环；点击圆点可跳转到该步骤（可键盘聚焦）。
  - 所有假页面内容都用 div/SVG 绘制——不使用截图、不使用可读段落、不使用真实网站布局。
  - public/favicon.svg 按资源（Assets）部分所述。index.html：lang 为 en，<meta name='theme-color' content='#15171C'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BRAND] — the extension that [JOB]</title>。
  - 在项目根目录编写 ASSETS.md，内容按资源（Assets）部分所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体和 favicon.svg。保持在 5 MB 以下。

## 变量
- [BRAND] — 扩展名称（默认：“Hushpage”）。虚构扩展的名称，一个单词。用于字标、标题标签、工具栏图标提示、安装按钮、页脚和电子邮件（hello@ + 不含连字符的 brandSlug + '.com'）。绝不是真实扩展。
- [JOB] — 它的功能（默认：“strips clutter from any article and hands you clean, readable pages”）。一个小写短语，说明其功能。重写 H1、演示弹窗、步骤和功能行。保持具体并以动词开头。
- [SHORTCUT] — 快捷键（默认：“Alt+Shift+H”）。召唤它的键盘快捷键，在 hero 和步骤中以等宽字体显示。虚构的；不是真实扩展的绑定。
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接到 https://vibefather.ai/t/browser-extension-landing-page（默认：是；删除此行以移除它）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图像——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图像路径和链接放在一个内容文件中（例如 `src/content.ts`），按部分键控，以便以后可以在不触及组件的情况下交换内容。

## 设计
### 颜色（Colors）
- 石墨色（Graphite）`#15171C` — 整个页面的背景。
- 面板色（Panel）`#1D2026` — 卡片、模型窗口外框、FAQ 行。
- 面板色 2（Panel 2）`#242830` — 悬停填充、凸起面板、URL 胶囊填充。
- 线条色（Line）`#2E333C` — 1px 细线、卡片边框、占位条、输入框边框。
- 纸色（Paper）`#F1ECE1` — 主文本、弹窗卡片、可读页面条、标题。
- 雾色（Mist）`#9BA1AC` — 次要文本、说明文字、眉题、占位文本条。
- 琥珀色（Amber）`#E2A13C` — 唯一强调色：扩展图标、主按钮、活动步骤圆点、开关、焦点环、星标。
- 深琥珀色（Amber Deep）`#C4842A` — 主按钮的悬停和按下状态。
- 浅琥珀色（Amber Mist）`#3A2E1B` — 标签填充、选中状态、着色面板。
- 墨色（Ink）`#191510` — 纸色或琥珀色填充上的文本。
- 良好色（Good）`#7FB069` — 权限检查、'done' 状态、隐私勾选。

### 排版（Typography）
- 展示字体：H1、H2、评论引文 — Newsreader，温暖的编辑衬线体：Newsreader（OFL），字重 400/600
- 文本与 UI：正文、按钮、表单、说明文字、模型 UI：Inter（OFL），字重 400/500/600
- 等宽字体：快捷键、URL 胶囊、模型中的小标签：JetBrains Mono（OFL），字重 400/500

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1180px，居中，侧边内边距桌面端 48px，平板端 32px，640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 100px，1024px 以下 76px，640px 以下 60px。字号比例：H1 clamp(40px, 5.4vw, 66px) Newsreader 600，行高 1.06；H2 clamp(26px, 3.5vw, 42px) Newsreader 600；功能标题 Inter 600 17px；导语 Inter 400 17.5px / 1.65 Paper 90%；正文 15.5px / 1.7；眉题 Inter 600 12px 大写 letter-spacing 0.16em Mist；说明文字 13px Mist；等宽标签 JetBrains Mono 400 12.5px。按钮：高度 50px，Inter 600 14px；主按钮 Amber 填充配 Ink 文本，次按钮 1px Line 边框配 Paper 文本。全局焦点：2px Amber 轮廓，3px 偏移。
- 圆角：卡片、面板、按钮 10px；胶囊和步骤圆点 999px；模型窗口 14px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现；弹窗使用弹簧（stiffness 260, damping 24）。工坊般稳定。
- 动效：显现：包裹在 <Reveal> 中的区块初始 opacity 0、translateY(14px)，在视口 15% 处用 700ms --ease-out 稳定下来（Motion whileInView, once），同级元素错开 70ms。
- 动效：模型演示循环按 Setup 中所述运行（2.6s 步进、悬停/聚焦暂停、圆点跳转）；在 prefers-reduced-motion 下停留在完成的第 3 步，所有控件仍可用。
- 动效：首屏：模型从 translateY(20px) scale(0.98) 进入；H1 各行上升；快捷键芯片以 40ms 错开弹出。
- 动效：步骤：活动步骤行带有 Amber 左侧轨道，其图标从 Mist 切换为 Amber；变化以 200ms 交叉淡入淡出。
- 动效：隐私：四条勾选线在首次进入视口时绘制其勾选（SVG stroke），错开 90ms。
- 动效：评论：卡片以 70ms 错开显现；星标逐个填充琥珀色（间隔 40ms）。
- 动效：安装按钮：主按钮在悬停时绘制一条微妙的 1px Amber 顶部轨道；版本芯片从不移动。
- 动效：FAQ：行以 240ms 展开；加号旋转为叉号。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 260ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 演示固定为完成状态，无勾选绘制，无星标填充（琥珀色静止），无弹窗弹簧（弹窗静态显示为打开）；颜色/边框悬停保留。在 index.css 中使用 CSS @media 加上 Motion 的 useReducedMotion。
- 图像：任何地方都没有照片。一切用代码绘制：浏览器窗口、其外框、假文章页面（占位条，从不显示可读段落）、广告块、弹窗卡片、步骤字形、星标行和 favicon。没有浏览器厂商标记（没有 Chrome/Firefox/Edge/Safari 名称、徽标或商店徽章）——安装按钮用 lucide 图标和 'Install for your browser' 字样绘制为通用样式。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 扩展落地页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值撰写（[BRAND] = Hushpage，[JOB] = strips clutter from any article and hands you clean, readable pages，[SHORTCUT] = Alt+Shift+H）。将每个字符串、步骤、功能、评价、FAQ 行和演示标签都放入 src/content.ts 并从中渲染。若任一变量不同，请重写 H1、步骤、功能、弹窗标签和 FAQ，使其对该扩展具体且可信，同时保持相同的结构和数量（3 个步骤、3 个功能、3 条评价、4 行 FAQ）。步骤：'Open anything cluttered' 'an article, a recipe, a doc — [BRAND] waits quietly in the toolbar'；'Press [SHORTCUT] or click' 'the popup opens where you are; no accounts, no cloud'；'Read' 'the page settles into clean type; the noise is gone, not hidden'。功能：'Local by design' 'everything runs in the tab; there is no server to leak'；'Your keys, your habit' 'one shortcut, remembered per site, adjustable width'；'Polite permissions' 'it asks for the tab, not your history, wallet or firstborn'。评价（引文 · 姓名 · 角色）：'The first extension I haven't uninstalled.' 'Marta Kowalski' 'Reporter'；'My eyes are 40 and grateful.' 'Devon Reyes' 'PhD student'；'No account. That's the feature.' 'Ingrid Halvorsen' 'Privacy nerd'。FAQ：'Which browsers?' 'Any Chromium browser and current Firefox; the buttons below keep it honest.'；'Does it send my pages anywhere?' 'No — there is no anywhere; the demo popup says so.'；'What permissions?' 'Active tab only, on click. It never reads other tabs.'；'Is it really free?' 'Yes; there is no pro tier hiding in a menu (sample copy).' 所有安装数和评分均不出现；评价为虚构的示例内容。
   布局：不适用
   动效：不适用
2. **页头（Header）** — 左侧：字标 '[BRAND]'（Newsreader 600 20px，Paper），其前有一个小的 Amber 方形字形；位于 'BROWSER EXTENSION'（10px 大写 Mist）上方。右侧导航（Inter 500 14px）：'How' → #how，'Features' → #features，'Privacy' → #privacy，以及一个紧凑的主按钮 'Install' → #install。低于 720px：字标 + 按钮。
   布局：吸顶，高度 68px，Graphite 92% 带背景模糊，Line 底边框。
3. **首屏（Hero）** — 两栏。左栏（5 列）：眉标 'ONE JOB, DONE QUIETLY'；H1 'The page, minus the page.'；导语 '[BRAND] [JOB] — summoned with [SHORTCUT], remembered per site, gone when you close the tab.'；CTA 行：主按钮 'Install for your browser' → #install，次按钮 'Watch it work' → #demo（滚动到模型图）；信任行（Good 勾选）：'Active-tab permission only'、'No accounts'、'No telemetry'；快捷键渲染为两个等宽键帽。右栏（7 列）：BrowserMock 带步骤圆点和说明文字 'A scripted demo — your pages are your business.'
   布局：Graphite 背景，顶部内边距 120px；模型图填满其列，最大宽度 880px。
4. **工作原理（How it works）** — 区块 id='how'。眉标 'HOW IT WORKS'；H2 'Three steps, no ceremony.' BrowserMock 在此处以紧凑形式重复出现（或首屏那个锚定在上方；本页中该区块直接位于首屏下方并复用同一演示 store）：模型图下方三个 StepRow — 编号（等宽 01–03，Amber）、标题（Inter 600 17px）、说明行（Inter 15px Mist）。活动行跟随演示步骤。
   布局：Panel 色调背景；模型图居中，步骤在其下方呈 3 列行（低于 800px 时 1 列）。
5. **功能（Features）** — 区块 id='features'。眉标 'WHAT YOU GET'；H2 'Small tool, sharp edges.' 三个 FeatureCard（Panel，Line 边框）：绘制的字形（Lock、Command、ShieldCheck lucide 图标，置于 Amber 凹槽中）、标题和来自名册的说明行。
   布局：Graphite 背景；3 列 24px 间距（低于 860px 时 1 列）。
6. **隐私（Privacy）** — 区块 id='privacy'，Amber Mist 色调覆盖于 Panel 之上。眉标 'THE PROMISE'；H2 'Reads like a permissions screen, means it.' 四条勾选行（绘制的 Good 勾选）：'No accounts' 'nothing to sign into, nothing to lose'；'No telemetry' 'the only network is the page you asked for'；'Tab-scoped' 'it touches the tab you summon it in, never your history'；'Open source' 'the whole thing is [BRAND_SLUG] on the forge (sample link)'，带一个惰性 '#' 链接。说明文字：'Sample privacy copy for a fictional extension.'
   布局：两栏：标题在左（4 列），行在右（7 列，偏移 1），以细线分隔行。
7. **评价（Reviews）** — 区块 id='reviews'。眉标 'THREE HUMANS'；H2 'Short sentences, real-seeming people.' 三个 ReviewCard：StarRow（5 颗 amber SVG 星）、引文（Newsreader 400 斜体 19px）、姓名（Inter 600 14px）位于角色（13px Mist）上方。
   布局：Graphite 背景；3 列 24px 间距（低于 860px 时 1 列）；卡片 Panel 带 Line 边框。
8. **安装（Install）** — 区块 id='install'。眉标 'GET IT'；H2 'Two buttons, zero dark patterns.' InstallButtons：主按钮 'Install for your browser'（lucide Download 图标）— 一个惰性锚点，带说明文字 'Demo: opens nothing' — 以及次按钮 'Download the zip'（lucide Package 图标），标注为 downloadName。下方：一行等宽文字 'v1.4 · 48 KB · sample version string' 和小字 'This is a template demo; the buttons are anchors, the zip is imaginary, the intent is honest.'
   布局：Panel 色调背景；居中堆叠，最大宽度 560px。
9. **FAQ 与页脚（FAQ and footer）** — 四个 FaqRow（加号旋转为叉号）位于 Panel 行上。页脚：左侧字标 + 'hello@' + emailDomain；右侧 '© [BRAND]. Made in a tab, for tabs.' 和 'Built with a VibeFather template' 链接至 https://vibefather.ai。
   布局：FAQ 单列最大宽度 760px，位于 Graphite 上；页脚 76px，Line 顶边框。

## 资产
- 图片：不使用照片或下载的图片：所有视觉元素都用代码绘制（浏览器窗口、假文章页面、弹窗、步骤图标、星星、favicon）。不要获取或热链任何内容。
- 图片：在项目根目录编写 ASSETS.md，列出代码绘制的资产（浏览器模型、假页面、弹窗、星星、favicon——'代码绘制，原创'）以及 npm 包：@fontsource-variable/newsreader、@fontsource-variable/inter、@fontsource/jetbrains-mono（OFL-1.1）和 lucide-react（ISC）。
- 图标：仅使用 lucide-react：ArrowDown、Check、Command、Download、Lock、MousePointerClick、Package、ShieldCheck。描边宽度 1.75，16–24px，颜色继承。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的圆角方块填充 #E2A13C，一个 Ink（#191510）绘制的“安静页面”图标（一个圆角矩形，包含三行文本和一个小型划掉的块）。无浏览器厂商标志，无真实扩展图标。
- 字体：安装 @fontsource-variable/newsreader、@fontsource-variable/inter 和 @fontsource/jetbrains-mono，并在 src/fonts.ts 中按 Setup 中列出的方式导入它们。Vite 将 woff2 文件打包到 dist/ 中。

## 禁止事项
- 无后端、无表单提交、无对 API 的 fetch 请求：安装按钮是惰性锚点，配有诚实的说明文字；本页面没有表单。
- 每个内部链接都指向文件名或锚点（./index.html、#install）——绝不指向裸目录；本页面有且仅有一个页面。
- 不得出现浏览器厂商名称、徽标或商店徽章（Chrome、Firefox、Edge、Safari 及其标志）；安装按钮以通用样式绘制。
- 不得出现真实扩展、其 UI 或其文案；模拟界面内的演示页面是通用占位条——绝不是可识别的网站，绝不是可读的段落，绝不是真实广告。
- 不得出现照片和人物；所有视觉元素均由代码绘制；评审者只显示姓名，不显示头像。
- 不得将安装量、星级平均值或商店排名作为事实呈现；评论和版本字符串是虚构的示例内容，并已明确说明这一点。
- 一切资源自托管：字体通过 Fontsource 引入，图标以 npm 包或内联 SVG 形式提供。不得使用 CDN 的 <script> 或 <link> 标签，不得使用 Google Fonts，不得使用分析工具。
- 生产构建：压缩，无 source map，不将 src/ 复制到 dist/，使用单条命令 npm run build，输出位于 dist/ 且小于 5 MB。
- 任何位置都不得出现日期或年份；版本字符串须明确为示例。
- 除页脚署名链接外，绝不在站点内提及 VibeFather；所有文案均为虚构的美式英语。
- 遵循 prefers-reduced-motion：演示停留在其完成状态，控件可用；无勾选绘制、无星星填充、无弹簧动画；颜色/边框悬停效果保留。
- 站点必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零错误；步骤圆点、FAQ 和按钮仅用键盘即可操作，且焦点环可见。
- 文案保持工坊式平实：不用“revolutionize”，不用增长黑客话术；每个字符串都存放在 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/browser-extension-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
