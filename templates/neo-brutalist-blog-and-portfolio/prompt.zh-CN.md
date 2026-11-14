> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 新粗野主义（Neo-Brutalist）博客与作品集

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的三页新粗野主义个人网站，[BRAND] 是一位 [ROLE]，其作品围绕 [BEAT] 展开。首页（含巨型姓名的 hero 区、近期文章跑马灯、带灯箱的精选插画网格、最新写作列表、关于区块、大号联系链接）、一个支持客户端标签与文本筛选的博客索引页，以及一个单篇文章页，包含窄阅读栏、下拉引用块、内联 SVG 插画和上一篇/下一篇卡片。粗黑边框、无模糊的硬偏移阴影、超大号 Archivo Black 标题、暖色纸张背景和一抹撞色橙色点缀。每幅插画均以内联 SVG 绘制。

- 受众：独立写作者、插画师、zine 制作者和漫画艺术家，他们以自己的名义发表随笔和画作，并希望在网上拥有一个大胆、有手工感的家。
- 目标：一目了然地展示此人的画作和写作，让文章易于浏览和阅读，并通过大号联系链接将访客转化为委托咨询。
- 语调：自信、温暖、略带古怪。短句、第一人称、具体而实在的细节（火车、面包店、抽屉、墨水）。布局上张扬，措辞上从不喧哗。不用流行术语。

## 技术栈
- 框架：Vite 5 + 原生 HTML/CSS/JS
- 样式：原生 CSS
- 库：lucide（ISC）、@fontsource/archivo-black（OFL-1.1）、@fontsource/space-mono（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）、vite（开发依赖）（MIT）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务端代码、无外部 API。
- 设置：
  - 搭建一个 Vite 5 原生 JavaScript 项目（npm create vite@latest site -- --template vanilla），删除演示文件，然后 npm install lucide @fontsource/archivo-black @fontsource/space-mono @fontsource-variable/inter。
  - package.json 脚本："dev": "vite"，"build": "vite build"，"preview": "vite preview"。
  - vite.config.js：base: './'，build.sourcemap: false，build.outDir: 'dist'，以及 build.rollupOptions.input 列出三个入口：index.html、blog.html 和 post.html（用 path.resolve(__dirname, ...) 解析它们）。
  - 项目根目录包含 index.html、blog.html、post.html、vite.config.js、ASSETS.md 和 public/favicon.svg。源码位于 src/：content.js、art.js、styles.css、main.js、home.js、blog.js、post.js。
  - src/content.js 是文案唯一所在之处：site（brand、role、beat、location、email）、导航标签、hero 文案、marquee、6 个插画（id、title、medium、year、art key）、8 篇文章（slug、title、date、readingTime、tags、excerpt、art key、body blocks）、about 文案与 facts、contact 与 footer 文案。如果变量值与默认值不同，请以相同的语气重写所有文案、文章标题、摘要和插画标题，以契合新的人物和主题。
  - src/art.js 为每个插画导出一个函数，返回一个 SVG 字符串（viewBox 0 0 400 300，preserveAspectRatio xMidYMid meet）。如果主题改变，你可以按照相同的构造规则重绘 SVG（6px #111 描边、纯色填充、var(--art-pop) 高亮）。
  - src/styles.css 导入字体（从 main.js 导入 '@fontsource/archivo-black/400.css'、'@fontsource/space-mono/400.css'、'@fontsource/space-mono/700.css'、'@fontsource-variable/inter'，而不是在 CSS 中使用 @import），在 :root 上将所有颜色、阴影和间距定义为 CSS 自定义属性，并包含所有 @keyframes（marquee、spin、rise、pop）以及 prefers-reduced-motion 覆盖。
  - 每个 HTML 页面都有一个 <header id="nav">、一个带有空挂载点的 <main>，以及 <footer id="footer">；它加载 <script type="module" src="/src/main.js"></script> 及其页面脚本（/src/home.js、/src/blog.js 或 /src/post.js）。Vite 在构建时重写这些路径。
  - src/main.js 导入字体和 styles.css，从 content.js 渲染共享的导航和页脚，连接移动端菜单，为 [data-reveal] 启动 IntersectionObserver，并导出一个 renderIcons() 辅助函数，该函数从 'lucide' 调用 createIcons({ icons: { Menu, X, ArrowUpRight, ArrowLeft, ArrowRight, Asterisk, PenTool, Search, Link, Mail, ArrowUp } })。在每次插入 <i data-lucide> 元素的渲染之后调用 renderIcons()。
  - 文章路由：每个文章链接都是 ./post.html?p=<slug>。post.js 读取 URLSearchParams，找到文章（如果 slug 缺失或未知，则回退到第一篇文章），并渲染它。将 document.title 设置为 '<post title> — [BRAND]'。
  - 每个页面都有一个简单的 <title>：首页 '[BRAND] — [ROLE]'，博客 'Writing — [BRAND]'，文章由脚本设置。Favicon 是 public/favicon.svg，链接为 ./favicon.svg。

## 变量
- [BRAND] — 人名（默认："Odile Brask"）。虚构的全名，用作字标、巨型主视觉标题和署名。
- [ROLE] — 角色（默认："Writer & illustrator"）。对其所做事情的简短描述，显示在主视觉句子和页面标题中。
- [BEAT] — 主题内容（默认："small towns, night trains and the things people keep in drawers"）。作品是关于什么的；补全主视觉句子，并塑造文章和绘画标题。
- [LOCATION] — 所在城市（默认："Ghent, Belgium"）。显示在主视觉标签行、关于事实和页脚中。
- [CONTACT_EMAIL] — 联系邮箱（默认："hello@odilebrask.example"）。用于每个 mailto 链接。演示时请使用 .example 域名。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/neo-brutalist-blog-and-portfolio（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 纸色（Paper）`#F4EEE1` — 除跑马灯带之外所有区域的页面背景；也是点阵网格的底色。
- 卡片色（Card）`#FFFDF8` — 卡片、按钮、输入框和标签的填充色；SVG 插画中的浅色填充。
- 墨色（Ink）`#111111` — 所有文字、所有边框、所有硬阴影、跑马灯带背景、激活标签背景。
- 信号橙（Signal Orange）`#FF5A1F` — 唯一的强调色：姓名高亮块、贴纸、主按钮、悬停填充、奇数插画背景、首字下沉、阅读进度条、跑马灯分隔符、焦点环。
- 铅笔灰（Pencil）`#5B564D` — 仅用于次要文字：日期、阅读时长、图注、摘要元数据。
- 点色（Dot）`rgba(17,17,17,0.07)` — 正文背景纹理：在纸色之上以 24px 24px 平铺 radial-gradient(var(--dot) 1px, transparent 1.4px)。

### 字体排印
- 展示字体：首屏姓名、区块标题、卡片和文章标题、跑马灯条目、巨型联系链接、首字下沉：Archivo Black (OFL)，字重 400
- 正文字体：段落、摘要、文章正文、首屏句子：Inter Variable (OFL)，字重 400/500/700
- 标签字体：导航链接、按钮、标签、日期、区块编号、图注、计数器：Space Mono (OFL)，字重 400/700

### 布局与动效
- 间距：8px 基准单位。容器最大宽度 1280px，≥1024px 时侧边内边距 48px，640–1023px 时 32px，640px 以下 20px。区块垂直内边距桌面端 112px，移动端 72px。卡片内边距 24px（移动端 20px）。网格间距桌面端 32px，移动端 24px。边框：卡片、按钮、输入框、分隔线和导航为 3px；标签为 2px；首屏高亮块、灯箱和关于卡片为 4px。阴影：--shadow-sm 4px 4px 0 #111（按钮、悬停时的标签），--shadow 6px 6px 0 #111（卡片），--shadow-lg 10px 10px 0 #111（悬停卡片、关于卡片、灯箱）。640px 以下所有阴影降一档（卡片使用 4px）。字号比例：区块标题 clamp(44px, 7vw, 96px) 行高 0.9 字距 -0.03em 大写；卡片标题 24px；列表标题 clamp(24px, 3vw, 36px)；正文 18px/1.65（文章正文 19px/1.7）；标签 13px 大写 字距 0.06em。
- 圆角：所有元素均为 0px（卡片、按钮、输入框、插画面板、灯箱、导航）。唯一的圆角形状是标签（999px 胶囊形）和首屏圆形贴纸。
- 动效：所有按钮和卡片采用按压物理效果：transition transform 和 box-shadow 140ms cubic-bezier(.2,.8,.2,1)。悬停：translate(-2px,-2px) 且阴影增大一档。激活（按下）：translate(4px,4px) 且 box-shadow 0 0 0 #111，使元素沉入其阴影中。
- 动效：贴纸倾斜：可悬停卡片在悬停时旋转，奇数卡片 -2deg，偶数卡片 2deg，与悬停位移叠加；其标签切换为信号橙背景并旋转 -3deg。
- 动效：跑马灯：一条重复的条目轨道以 40s linear infinite 从 translateX(0) 动画到 translateX(-50%)；当灯带被悬停或内部获得焦点时 animation-play-state 为 paused。
- 动效：首屏加载入场：每行姓名位于 overflow:hidden 包裹层中，在 700ms cubic-bezier(.2,.8,.2,1) 内从 translateY(105%) 升至 0，间隔 90ms；首屏贴纸从 scale(0) rotate(-40deg) 弹至 scale(1) rotate(12deg)，历时 450ms cubic-bezier(.34,1.56,.64,1)，从 500ms 开始；句子和按钮在 650ms 时淡入上移 16px。
- 动效：贴纸圆环：首屏贴纸上的环形文字每 20s linear infinite 旋转 360deg。
- 动效：滚动显现：带 data-reveal 的元素初始为 opacity 0、translateY(24px) rotate(-1.5deg)，当 15% 可见时（IntersectionObserver，首次显现后 unobserve）在 450ms cubic-bezier(.2,.8,.2,1) 内稳定到 opacity 1、none。网格子元素以 transition-delay calc(var(--i) * 70ms) 错开。
- 动效：灯箱和移动端菜单打开：scale(.96) rotate(-1deg) opacity 0 → scale(1) rotate(0) opacity 1，历时 200ms。
- 动效：文章页阅读进度条：transform scaleX(progress)，transform-origin 为 left，在 requestAnimationFrame 内随滚动更新。
- 动效：prefers-reduced-motion: reduce — 跑马灯 animation none，轨道变为单行不重复且 overflow-x auto；贴纸圆环静止；无首屏入场（所有内容立即可见）；data-reveal 元素可见且无过渡；悬停保留颜色和阴影变化，但无旋转或位移；所有过渡时长 0.01ms。
- 图像：无照片、无位图文件。每幅插画都是用代码绘制的扁平内联 SVG：6px 粗 #111 描边，stroke-linejoin round 和 stroke-linecap round，仅使用 #111、#FFFDF8 和 var(--art-pop) 的扁平填充（无渐变、无明暗、无面部、无角色）。插画置于实色面板上：奇数面板背景 #FF5A1F，--art-pop: #FFFDF8；偶数面板背景 #FFFDF8，--art-pop: #FF5A1F。装饰元素为 CSS 或 SVG：带路径文字的圆形贴纸、旋转矩形印章、点阵网格、3px 边框方块内的 Lucide 图标。

## 页面与区块
### 首页（`index.html`）
1. **共享导航（所有页面）** — 左侧：字标——一个 14px 的 Signal Orange（信号橙）方块，带 2px 墨色边框，然后是 Archivo Black 20px 大写的 '[BRAND]'，链接到 ./index.html。桌面端右侧：Space Mono 700 14px 大写链接 'Work'（./index.html#work）、'Writing'（./index.html#writing）、'About'（./index.html#about）、'Blog'（./blog.html），然后是一个主按钮 'Say hi'，带 Lucide mail 图标（mailto:[CONTACT_EMAIL]）。在 blog.html 和 post.html 上，'Blog' 链接显示为激活状态：墨色背景、Card 文字。移动端：字标加一个 44px 方形带边框按钮，带 Lucide menu 图标（打开时切换为 x，aria-expanded 切换）。
   布局：粘性定位 top 0，z-index 50，高度 72px，Paper 背景，3px 墨色底边框，容器宽度。桌面端链接是 40px 高的盒子，带透明 3px 边框，悬停时变为墨色，Card 填充和 4px 阴影。低于 900px 时，链接折叠为栏下方的下拉面板：全宽、Paper 背景、3px 底边框，链接以 Archivo Black 36px 大写堆叠，之间用 3px 分隔线，'Say hi' 按钮在底部全宽。Esc 和链接点击会关闭它。
   动效：链接盒子使用按压物理效果。移动端面板使用打开动画。
2. **Hero** — 标签行（Space Mono 13px 大写）：左侧 '● Available for commissions'，圆点为 Signal Orange；右侧 '[LOCATION] · Est. 2016'。巨型名称：'[BRAND]' 按空格拆分，每行一个词（ODILE / BRASK）。最后一行位于高亮块内：Signal Orange 背景、4px 墨色边框、8px 8px 0 #111 阴影、padding 0 0.06em、旋转 -1.5deg、inline-block。贴纸：一个 148px 的 Signal Orange 圆形，带 3px 墨色边框和 6px 阴影；一个 SVG textPath 环形文字以 Space Mono 700 13px 读取 'WRITES · DRAWS · REPEATS · WRITES · DRAWS · REPEATS · '；中心是一个 Lucide pen-tool 图标（36px，墨色）。句子（Inter 500，clamp(20px, 2vw, 28px)，max-width 30ch）：'[ROLE] drawing and writing about [BEAT].' 按钮：主按钮 'See the drawings'（Signal Orange，不需要 Lucide arrow-down-right——使用 arrow-up-right）链接到 #work，次按钮 'Read the blog'（Card）链接到 ./blog.html。句子下方的印章标签：'Essays'、'Zines'、'Picture books' 分别旋转 -3deg、2deg、-1deg。
   布局：顶部 padding 48px，底部 72px，全宽 3px 墨色底边框。标签行横跨容器，space-between 分布，下方有 3px 墨色分隔线（12px 间距）。名称块：Archivo Black 大写，line-height 0.84，letter-spacing -0.045em，字号由 home.js 中的 fitText 函数计算——设为 100px，测量最宽行的宽度，缩放使其等于容器宽度，上限 240px，在 resize（防抖 100ms）和 document.fonts.ready 之后重新计算。贴纸绝对定位在名称块的 top 8px、right 2%，旋转 12deg，与第一行重叠；低于 640px 时宽 96px。名称下方是一个 12 列网格，顶部外边距 40px：句子和印章在第 1–7 列，按钮堆叠在第 9–12 列并底部对齐，每个按钮占满其列宽。移动端：单列，按钮并排各占 50%。
   动效：加载时的 Hero 入场序列；贴纸环形旋转；按钮和印章标签使用按压物理效果和贴纸倾斜。
3. **跑马灯** — 来自 content.js 的第 1–6 篇文章标题，每个后面跟一个 Signal Orange 的 Lucide asterisk 图标（24px）。每个标题都是指向 ./post.html?p=<slug> 的链接。示例运行：'THE LAST STOP IS ALWAYS A BAKERY ✱ NOTES FROM A DRAWER OF ODD KEYS ✱ HOW I INK A NIGHT SKY IN THREE PASSES ✱ …'
   布局：全出血带（在容器之外），Ink 背景，顶部和底部 3px 墨色边框，高度 76px，overflow hidden。内部轨道为 display:flex、white-space nowrap，项目列表渲染两次；项目为 Archivo Black 28px 大写、Card 颜色，每个星号周围有 28px 间距。标题链接悬停时变为 Signal Orange，下划线偏移 6px。轨道在重复副本上带有 aria-hidden。
   动效：40s 线性无限跑马灯，悬停和 focus-within 时暂停；减少动态效果下为静态可滚动行。
4. **精选画作（#work）** — 页眉：标签 '(01) — Selected drawings'；标题 'INK, PAPER, ONE ORANGE.'；右对齐计数器 '06 pieces'。六张卡片，按顺序：1 'Night Train' — Dip pen + gouache · 2026；2 'Drawer of Odd Keys' — Ink on cartridge paper · 2026；3 'Teacup Weather' — Gouache · 2025；4 'One Traffic Light' — Dip pen + gouache · 2025；5 'Corner Shop at 6am' — Ink + one orange · 2025；6 'Paper Boat Harbour' — Gouache · 2024。卡片 1 带有 'New' 贴纸。SVG 艺术（viewBox 0 0 400 300）：Night Train — 地平线在 y 220，虚线轨道在 y 232（dasharray 18 12），三节车厢（100×56 矩形，Card 填充），每节有三个 var(--art-pop) 方形窗户和两个 #111 车轮 r10，右上角 var(--art-pop) 新月，三颗小四角星。Drawer of Odd Keys — 从正面看的一个打开的抽屉（300×120 Card 矩形位于 50,140，带圆把手，两条斜线暗示深度）和上面五把钥匙（圆形匙柄 r14、匙杆线、两个齿矩形）以不同角度放置，两个匙柄填充 var(--art-pop)。Teacup Weather — Card 中的杯身半椭圆、弧形手柄、碟子椭圆，上方 var(--art-pop) 的三重叠圆云朵，四条短雨线落入杯中。One Traffic Light — 高杆，#111 外壳 70×170，带三个圆 r20（顶部 var(--art-pop)，其余 Card），地面线，左侧小房子轮廓，一扇亮窗为 var(--art-pop)。Corner Shop at 6am — Card 建筑 260×180，遮阳篷由六条交替的 #111 / var(--art-pop) 条纹组成，边缘为半圆形扇贝状，大窗户有三层面包椭圆 var(--art-pop)，门带圆把手，空白招牌带三条短线。Paper Boat Harbour — 底部三条波浪二次曲线，船有 Card 船体梯形、var(--art-pop) 三角帆和中心折线，左上角 Card 太阳 r34，带八条短射线。
   布局：页眉行：标签和标题在左侧，计数器在右下，下方 48px 外边距。网格：≥1024px 为 3 列，640–1023px 为 2 列，以下为 1 列，gap 32px。卡片：button 元素，Card 背景，3px 边框，--shadow；艺术面板 aspect-ratio 4/3，带 3px 底边框，背景交替 Signal Orange（奇数）/ Card（偶数），并匹配 --art-pop；说明区域 20px padding，标题 Archivo Black 24px 大写，一个 medium 标签加年份，Space Mono 13px Pencil。'New' 贴纸：64px Signal Orange 圆形，3px 边框，Space Mono 700 12px，绝对定位在 top -14px right -14px，旋转 14deg。点击或 Enter 打开一个 <dialog> 灯箱：max-width 960px，Card 背景，4px 边框，--shadow-lg，backdrop rgba(17,17,17,0.6)；大艺术面板，标题 Archivo Black 40px，medium 和年份，以及右上角一个 48px 方形关闭按钮，带 Lucide x。Esc、背景点击和关闭按钮均可关闭；焦点返回卡片。
   动效：卡片以交错方式显现，并使用贴纸倾斜加按压物理效果；灯箱打开动画。
5. **最新写作（#writing）** — 标签 '(02) — Latest writing'；标题 'WORDS, MOSTLY ABOUT PLACES.'；来自 content.js 的四篇最新文章（第 1–4 篇），每篇显示日期（'30 Sep 2026' 格式）、标题、两个标签 chip 和阅读时间（'7 min'）。结尾按钮：'All 8 posts'，带 Lucide arrow-right，链接到 ./blog.html。
   布局：分隔线列表：每行是指向 ./post.html?p=<slug> 的链接，带 3px 墨色顶边框（最后一行还有底边框），padding 28px 16px，桌面端网格列 140px / 1fr / auto / 56px：日期为 Space Mono Pencil，标题 Archivo Black clamp(24px, 3vw, 36px) 大写，chips，以及一个 48px 方形带边框盒子，上方是 mono 12px 的阅读时间，替换为仅 Lucide arrow-up-right 图标（阅读时间位于 chips 右侧，Space Mono 13px）。低于 768px 时行堆叠：日期 + 阅读时间一行，标题，chips，箭头盒子隐藏。按钮在列表下方 40px 处居中偏左。
   动效：行悬停：背景 Signal Orange，标题 translateX(12px)，箭头盒子填充 Ink，Card 图标并旋转 45deg，全部 160ms。行以交错方式显现。
6. **关于（#about）** — 左侧：'Desk Still Life' SVG — #111 墨水瓶带 Card 标签矩形，一支斜放的蘸水笔带三角笔尖，一张 Card 火车票旋转 -8deg，带 #111 条纹和一个打孔，一个 Card 马克杯。右侧：标签 '(03) — About'；标题 'HELLO, I'M ODILE.'（BRAND 的第一个词）；第 1 段 'I write short essays and draw the places they happen in. Most of them happen at the end of a train line, in a kitchen, or inside a drawer someone forgot to clean out.'；第 2 段 'I've made three zines, one picture book and roughly nine hundred sketchbook pages that nobody will ever see. I take commissions for editorial illustration, book covers and the occasional shop window.'；事实网格：'Based in — [LOCATION]'、'Tools — Dip pen, gouache, one orange'、'Published — 3 zines, 1 picture book'、'Currently — Riding line 42 to the end'。
   布局：一张大卡片：卡片背景、4px 边框、--shadow-lg、网格 5/12 + 7/12 列。左列是艺术面板，Signal Orange（信号橙）背景（--art-pop: #FFFDF8）、4px 右边框、艺术内容以 90% 宽度居中。右列内边距 48px；标题 clamp(40px, 5vw, 72px)；段落 Inter 18px，最大宽度 56ch；事实信息放在 2×2 网格单元中，3px 边框相互折叠（margin -3px），每个单元内边距 16px，上方是 Pencil 字体的 Space Mono 标签，下方是 Inter 700 的值。移动端：堆叠，艺术面板位于顶部，使用 4px 下边框而非右边框。
   动效：卡片作为一个整体显现；事实信息单元以 70ms 错峰显现。
7. **共享联系 + 页脚（所有页面）** — 标签 '(04) — Say hello'；引导语 'Commissions, zine swaps, or a bakery I should visit:'；巨型链接 'WRITE TO ME'，后跟一个带边框的方块，内含 Lucide arrow-up-right，指向 mailto:[CONTACT_EMAIL]；其下方是 Space Mono 18px 的邮箱地址和一行链接：'Blog'（./blog.html）、'Drawings'（./index.html#work）、'Back to top' 带 Lucide arrow-up（#top）。底栏：'© 2026 [BRAND]'、'Drawn and written in [LOCATION]'，右端为 Credit 部分所述的可选署名链接预留一个位置。
   布局：页脚以 3px 墨色上边框开始，顶部内边距 96px。巨型链接使用 Archivo Black 大写 clamp(56px, 12vw, 196px)，行高 0.9，字距 -0.04em，display inline-block，background-image linear-gradient(#FF5A1F, #FF5A1F)，background-size 0% 100% no-repeat。链接行位于下方 32px 处，Space Mono 14px 大写链接，间隔 24px，下划线偏移 2px、距离 4px。底栏：3px 墨色上边框，内边距 20px，Space Mono 12px 大写，flex space-between，移动端换行。
   动效：巨型链接悬停：background-size 在 300ms 内从 0% → 100% 动画，使橙色填充从左侧扫入，箭头方块旋转 45deg。遵循减少动态效果设置（即时填充）。

### 博客索引（`blog.html`）
1. **导航** — 共享导航，'Blog' 为激活状态。
   布局：与首页相同。
2. **博客页头** — 标签 'Index — 8 posts'；标题 'ALL THE WRITING.'；介绍段落 'Essays about places, process notes about ink, and the odd short story. New posts roughly once a month, usually after a long train ride.'；旋转印章 'New post monthly'。
   布局：顶部内边距 72px，底部 48px。标题使用 Archivo Black 大写，由相同的 fitText 函数调整大小，但上限为 200px。介绍文字 Inter 500 22px，最大宽度 52ch，位于下方。印章：矩形、Signal Orange（信号橙）、3px 边框、--shadow-sm、Space Mono 700 14px 大写、内边距 10px 16px、旋转 -6deg，绝对定位在标题右上方附近（移动端为静态并内联于介绍文字下方）。
   动效：标题行像主视觉区一样升起；印章在 400ms 时弹出。
3. **筛选栏** — 标签片（带 aria-pressed 的按钮）：'All'、'Essays'、'Process'、'Fiction'、'Trains'、'Objects'、'Towns'、'Ink'。搜索输入框带 Lucide search 图标，占位符 'Search titles…'。计数器 'Showing 8 of 8'。
   布局：粘性定位在导航下方（top 72px），Paper 背景，3px 下边框，内边距 16px 0。桌面端：标签片在左侧换行排列，搜索输入框（280px 宽、48px 高、3px 边框、Card 填充、--shadow-sm、图标在左侧内部 14px 处）和计数器在右侧。移动端：标签片在一行内水平滚动，搜索框在下方全宽，计数器再在其下。激活标签片：Ink 背景、Card 文字。聚焦输入框：Signal Orange（信号橙）3px 轮廓，偏移 3px。
   动效：标签片使用贴纸倾斜和按压物理效果。筛选：blog.js 筛选满足以下条件的文章：（标签为 All 或 post.tags 包含该标签）且标题包含搜索文本（不区分大小写），重新渲染网格并更新计数器；卡片以 150ms 淡入。
4. **文章网格** — 按 content.js 顺序排列全部 8 篇文章。1 'The Last Stop Is Always a Bakery' — 30 Sep 2026 · 7 min · Essays, Trains — 'Ten years of riding regional lines to the end, and what I found waiting there every single time.' 2 'Notes From a Drawer of Odd Keys' — 12 Sep 2026 · 5 min · Essays, Objects — 'Fourteen keys, zero locks. An inventory of a drawer that every house seems to have.' 3 'How I Ink a Night Sky in Three Passes' — 28 Aug 2026 · 6 min · Process, Ink — 'Flat black, scratched stars and one orange window: my process for night scenes, step by step.' 4 'A Town With One Traffic Light' — 9 Aug 2026 · 8 min · Essays, Towns — 'It turns red for nobody at 3am. I sat with it for a week and filled a sketchbook.' 5 'Sketchbook Rules I Keep Breaking' — 21 Jul 2026 · 4 min · Process, Ink — 'Use one pen. Never tear out a page. Date everything. I break all three, constantly.' 6 'Postcards I Never Sent' — 2 Jul 2026 · 3 min · Fiction, Objects — 'Twelve postcards written on trips and kept in a shoebox. A short story about why.' 7 'On Drawing Rain Without Lines' — 14 Jun 2026 · 5 min · Process, Ink — 'Rain is easier to draw when you stop drawing it. Notes on leaving things out.' 8 'The Timetable as a Love Letter' — 30 May 2026 · 6 min · Essays, Trains — 'Departure times read like a promise if you squint. A short essay on printed schedules.' 艺术键：1 corner shop、2 drawer、3 night train、4 traffic light、5 teacup、6 paper boat、7 teacup、8 night train。每张卡片以 'Read' 和 Lucide arrow-right 结尾。空状态：卡片显示 'Nothing here yet. Try another tag.' 和一个次级按钮 'Clear filters'，用于重置标签片和搜索。
   布局：≥768px 时网格 2 列，以下 1 列，间距 32px，顶部内边距 48px。每张卡片是一个链接：Card 背景、3px 边框、--shadow、内边距 24px；顶行 Space Mono 13px Pencil 日期 · 阅读时间；标题 Archivo Black clamp(26px, 2.6vw, 34px) 大写，行高 1；摘要 Inter 17px；标签片行；底部 'Read' 链接使用 Space Mono 700 大写。当前筛选结果中的第一张卡片横跨两列并变为水平卡片：艺术面板（Signal Orange（信号橙），宽高比 4/3）位于左半部分，带 3px 右边框，文字在右侧；移动端艺术面板位于顶部。
   动效：卡片在首次加载时错峰显现，并使用贴纸倾斜加按压物理效果。
5. **联系 + 页脚** — 共享联系和页脚。
   布局：与首页相同。

### 单篇文章（`post.html`）
1. **阅读进度 + 导航** — 一个进度条，显示文章正文已读进度，然后是共享导航，其中“Blog”处于激活状态。
   布局：进度条固定在顶部 0 位置，全宽，高度 6px，Signal Orange（信号橙），z-index 60，位于粘性导航之上。
   动效：scaleX 从 0 到 1，与文章正文的滚动进度绑定。
2. **文章头部** — 返回按钮“← All posts”（Lucide arrow-left，./blog.html）。元信息行：日期 · 阅读时间 · 标签芯片。当前文章的标题。Dek = 文章摘要。署名行：40px Signal Orange（信号橙）方块，3px 边框，内含 [BRAND] 的首字母，Archivo Black 16px，然后是“By [BRAND]”，Space Mono 700 13px 大写。
   布局：容器最大宽度 1100px，顶部内边距 56px。返回按钮为次要按钮。元信息行在其下方 32px 处，Space Mono 13px。标题 Archivo Black 大写 clamp(48px, 9vw, 136px)，行高 0.88，字距 -0.04em，最大宽度 14ch。Dek Inter 500 clamp(20px, 2vw, 26px)，最大宽度 40ch，下方 24px。署名行下方 32px。头部下方 3px 墨色分隔线。
   动效：标题行像主视觉标题一样上升（按单词自然分行；将整个标题包裹在一个 overflow-hidden 遮罩中）。
3. **主视觉艺术面板** — 文章的 art key SVG（文章 1：Corner Shop at 6am）。
   布局：最大宽度 1100px，宽高比 16/9，Signal Orange（信号橙）背景，--art-pop #FFFDF8，3px 边框，--shadow-lg，艺术图居中于 70% 高度处，垂直外边距 56px。
   动效：加载时在 300ms 处显现。
4. **文章正文** — 文章 1 的正文块（从 content.js 的块类型 p、h2、quote、figure、list 渲染）：p “Every regional line I have ridden to its very end has finished at a bakery. Not a station café, not a vending machine humming under a clock — a bakery, with a bell over the door and somebody's aunt behind the counter. I started counting in 2016. I am now at forty-one lines and forty-one bakeries.” p “It is not a scientific finding. Last stops are where towns run out of reasons to keep going, and bread is one of the last reasons to stay. Still, I carry a sketchbook to the end of every line now, and the first drawing is always of the shop window.” h2 “What the window tells you” p “A bakery window at 7:40 in the morning is a census. You can count the people who came before you by the gaps on the trays. You can tell whether the town likes seeds. You can tell who the baker is trying to impress.” quote “A last stop is a town admitting it has nowhere else to send you.” cite “From my sketchbook, line 27” p “I draw the window in three passes: the trays first, as flat shapes of ink; then the gaps, left white; then whatever is reflected in the glass — usually the train I came in on, already leaving.” figure（Night Train 艺术图）caption “Fig. 1 — The train I came in on, already leaving. Dip pen and one orange gouache.” h2 “Rules for the end of the line” list “Buy the thing with the most crumbs.” / “Draw the window before you go inside.” / “Ask what time the first train left. Write the answer down.” / “Never take the same train back.” p “That last rule is why most of my essays start late in the afternoon in a town I did not plan to sleep in. The bakery is usually closed by then. I have learned to buy two of everything.” p “Next month I ride line forty-two. I have a guess about what will be waiting.” 文章 2–8：以相同语气撰写四段正文、一个 h2 和一个 quote，匹配各自的标题和摘要；仅在文章 1 中包含 figure 块。
   布局：单列，最大宽度 680px 居中。段落 Inter 400 19px/1.7，间距 24px。第一段有首字下沉：首字母左浮动，Archivo Black 4.2em，行高 0.8，Signal Orange（信号橙）背景，3px 边框，内边距 6px 10px，外边距 6px 14px 0 0。h2 Archivo Black 36px 大写，顶部外边距 56px，前面有一个 3px × 64px 的墨色条。引用：blockquote，左侧 12px 实线 #111 边框，其余三边 3px 边框，Card 背景，--shadow，内边距 28px 32px，文本 Archivo Black clamp(24px, 3vw, 32px) 大写，行高 1.05，cite 在下方，Space Mono 13px Pencil，前缀为“— ”；在桌面端突破至 760px 宽度。Figure：突破至 860px，Card 艺术面板宽高比 4/3，3px 边框和 --shadow，caption 在下方，Space Mono 13px，带一个 Signal Orange（信号橙）12px 方形标记。列表：无项目符号，每项前缀一个 12px Signal Orange（信号橙）方块，2px 墨色边框，间距 12px。
   动效：引用和 figure 以贴纸沉降效果显现（从 -1.5deg 旋转到 0）。
5. **文章结尾** — 文章的标签芯片（每个链接到 ./blog.html），以及一个次要按钮“Copy link”，带 Lucide link 图标，在 try/catch 内通过 navigator.clipboard.writeText 复制 window.location.href；标签变为“Copied!”持续 1.6s（出错时为“Copy failed”）。
   布局：最大宽度 680px，顶部 3px 墨色边框，顶部内边距 24px，flex space-between，移动端换行。
6. **上一篇 / 下一篇** — 两张卡片。左侧：标签“← Older”和列表中的下一篇文章（索引 + 1，循环到第一篇）。右侧：标签“Newer →”和列表中的上一篇文章（索引 − 1，循环到最后一篇）。每张显示标题和日期，并链接到 ./post.html?p=<slug>。
   布局：最大宽度 1100px，2 列网格，间距 32px，顶部外边距 80px；移动端 1 列。卡片：Card 背景，3px 边框，--shadow，内边距 28px；标签 Space Mono 700 13px 大写，标题 Archivo Black 28px 大写；右侧卡片右对齐，背景为 Signal Orange（信号橙）。
   动效：悬停时贴纸倾斜和按压物理效果。
7. **联系 + 页脚** — 共享联系和页脚。
   布局：与首页相同。

## 资产
- 字体：Archivo Black 400、Space Mono 400/700 和 Inter Variable，从 Fontsource npm 包（@fontsource/archivo-black、@fontsource/space-mono、@fontsource-variable/inter）安装，并在 src/main.js 中导入，以便 Vite 将 woff2 文件打包进 dist/。在 ASSETS.md 中列出每个包及其 OFL-1.1 许可证。
- 图标：来自 lucide npm 包（ISC）的 Lucide 图标：menu、x、mail、arrow-up-right、arrow-left、arrow-right、arrow-up、asterisk、pen-tool、search、link。使用 createIcons 渲染，stroke-width 为 2.5，颜色继承。在 ASSETS.md 中列出 lucide。
- 图像：无位图图像。全部七幅插画（Night Train、Drawer of Odd Keys、Teacup Weather、One Traffic Light、Corner Shop at 6am、Paper Boat Harbour、Desk Still Life）都是按照图像规则在 src/art.js 中手写的内联 SVG 字符串。主视觉贴纸是带 textPath 的内联 SVG。在 ASSETS.md 中注明所有图稿均为原创的代码绘制 SVG。
- 图标：Favicon public/favicon.svg 以代码绘制：64×64 的 Signal Orange（信号橙）方块，带 6px #111 边框，[BRAND] 的首字母以粗体 #111 无衬线字体居中。

## 禁止事项
- 不得有任何形式的后端：不得有服务器代码、API 路由、数据库、认证、分析或第三方 API；唯一的“联系”方式是 mailto: 链接，且不得有任何会提交到某处的表单。
- 仅静态输出，使用 npm run build 构建到 dist/；vite.config.js 必须设置 base: './' 和 build.sourcemap: false；不要将 src/ 复制到 dist/。
- 三个真实 HTML 文件（index.html、blog.html、post.html）。每个内部链接都指向文件名（./index.html、./blog.html、./post.html?p=slug、./index.html#work），绝不指向裸目录或 '/'。
- 不得有 CDN <script> 或 <link> 标签；绝不从 fonts.googleapis.com、fonts.gstatic.com、Adobe Fonts 或任何其他 CDN 加载字体——通过 Fontsource 自托管。
- 不得使用商业或自定义字体；仅限 Archivo Black、Space Mono 和 Inter。
- 不要添加 Tailwind、React、动画库或任何 UI 套件；一切都使用原生 CSS 和 JS 加 lucide。除非用户要求，否则不要更改技术栈。
- 不得使用照片、图库图片、热链接图片或占位图服务；不得使用 Unsplash、Pexels 或 Pixabay。所有图形均为代码绘制的 SVG。
- 不得使用任何真实作家或插画师的名字、肖像、签名或作品，也不得使用现有网站中的面孔、吉祥物、涂鸦角色或可识别的贴纸设计。
- 不得使用真实品牌标志、产品名称或口号，也不得使用取自现有网站的文案或文章标题；仅使用本提示词中虚构的文案。
- 仅保留一种强调色（Signal Orange #FF5A1F）；不要引入第二种强调色、渐变、模糊阴影或圆角卡片。
- 严格按照所述遵守 prefers-reduced-motion；除跑马灯和贴纸环外，不得有自动播放的动态效果，这两者在减少动态效果下均会停止。
- 在 1440×900 和 390×844 下控制台零错误；移动端不得有页面水平滚动（仅跑马灯和标签行可在自身内部滚动）。
- 保持 dist/ 在 20 MB 以下。
- 不得有 SEO 附加项：不得有 meta 描述、Open Graph 标签、JSON-LD 或站点地图——仅保留一个普通的 <title> 和 favicon。
- 除页脚中可选的署名链接外，不得在网站任何位置提及 VibeFather。

---
— Prompt by VibeFather · https://vibefather.ai/t/neo-brutalist-blog-and-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
