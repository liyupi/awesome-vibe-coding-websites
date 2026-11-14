> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 星座故事地图（Constellation Story Map）

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个原创的单页天体故事图集，以标题 [HEADLINE] 呈现 [COLLECTION_NAME]。默认导览包含 [CONSTELLATION_SET] 中以逗号分隔的六个星座，并围绕 [STORY_LENS] 为 [AUDIENCE] 量身打造原创重述故事。访客可以拖拽和缩放由代码绘制的星空，选择星座以描摹其连线并阅读其故事，按日期切换一个明确标注为示意性的天空，并将创作者的星星连接成命名创作并保存在本地。仅使用程序化 Canvas 2D、本地 SVG 和原创文案；这不是对现有天文馆或星图的复刻。

- 受众：为 [AUDIENCE] 撰写介绍、故事摘要和帮助文本。首次访问者应在没有天文学背景知识的情况下理解操作方式。让神话保持通俗易懂，但不要将其变成星座运势，并确保每个画布操作都能通过普通 DOM 控件供键盘和触屏用户使用。
- 目标：在五秒内，让访客看到一片细节丰富的天空、一个已描摹的星座和一段可读的故事。让拖拽、选择、日期更改和创建-保存循环感觉即时且可靠。在重新渲染之间保留已选故事和已保存创作，在重新加载后保留已保存创作，并以静态站点形式交付完整体验，不发起任何外部数据请求。
- 语气：好奇、抒情、精确，并带有温和的编辑感。将古典神话视为文化叙事，而非科学事实或个人预测。使用简洁的美式英语、具体的交互反馈和原创的现代重述。明确说明星星的几何形态和日期行为仅为示意；绝不暗示基于位置的观测指导、实时星历数据、占星术或算命。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：使用自定义属性的原生 CSS（Vanilla CSS）
- 库：react 和 react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、lucide-react（ISC）、@fontsource/newsreader（OFL-1.1）、@fontsource/manrope（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - 创建 package.json，脚本为 dev = vite、build = tsc --noEmit && vite build、preview = vite preview。配置 vite.config.ts，设置 base './'、build.outDir 'dist'、build.sourcemap false、build.target 'es2020'，并启用压缩。使用单个 index.html 入口，不使用路由，不使用后端。
  - 按如下方式组织项目：src/content.ts 存放所有变量值和可见字符串，src/data/sky.ts 存放带类型的图案几何和确定性星点生成，src/components/SkyCanvas.tsx 负责 canvas 渲染和指针输入，src/components/StoryPanel.tsx、src/components/CreatePanel.tsx、src/App.tsx 负责 UI 状态，src/styles.css 存放设计令牌和响应式规则。当变量变化时，重写所有依赖的故事、标签、存储命名空间和说明以匹配新值；不得残留任何默认品牌或默认故事的痕迹。
  - 通过所列的 Fontsource Latin 包自托管 Newsreader 400、500、600，Manrope 400、500、600、700，以及 IBM Plex Mono 400、500。在绘制任何 canvas 标签之前等待 document.fonts.ready。设置 lang en、纯文本文档标题 '[BRAND] — [COLLECTION_NAME]'、theme-color #080D1F，以及一个原创的本地四角星 favicon.svg。
  - 将 CONSTELLATION_SET 按逗号解析为恰好六个去除首尾空白的显示名称。保持六条几何记录顺序不变，并在集合变化时替换它们的名称、别称、故事和注释。使用 1600 × 1000 的世界，中心按所列顺序位于 (260,250)、(810,220)、(1320,270)、(390,735)、(930,700) 和 (1370,710)。严格使用以下局部点数组和无向边索引对：Lyra 点 [[0,-72],[48,-4],[30,64],[-42,54],[-48,-10]]，边 [[0,1],[1,2],[2,3],[3,1],[0,4]]；Cygnus [[0,-115],[0,-48],[0,15],[0,105],[-105,-12],[-52,-25],[52,-15],[105,5]]，边 [[0,1],[1,2],[2,3],[4,5],[5,2],[2,6],[6,7]]；Cassiopeia [[-110,40],[-55,-45],[0,30],[55,-50],[110,35]]，边 [[0,1],[1,2],[2,3],[3,4]]；Orion [[-65,-85],[65,-80],[0,-135],[-45,0],[0,5],[45,10],[-55,105],[65,100]]，边 [[2,0],[2,1],[0,3],[1,5],[3,4],[4,5],[3,6],[5,7],[6,7]]；Ursa Major [[-125,-25],[-75,-65],[-15,-50],[15,5],[70,35],[130,5],[180,-50]]，边 [[0,1],[1,2],[2,3],[3,0],[3,4],[4,5],[5,6]]；Corona Borealis [[-120,25],[-85,-35],[-35,-65],[15,-70],[60,-45],[95,0],[110,55]]，边 [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]]。这些是有意简化的示意图形，并非天文坐标。
  - 使用本地 mulberry32 生成器（种子 48271）一次性生成 420 颗背景星，均匀分布在 1600 × 1000 的世界中。为每颗星赋予确定性的半径 0.55–1.75、不透明度 0.18–0.68，以及用于克制闪烁的相位；让每第十七颗星略微更亮，并带有一个由代码绘制的短衍射十字。单独添加引导星，半径 2.5–4.2，并带小径向光晕。使用 mulberry32 种子 90217 在 x 260–1340 和 y 180–820 范围内生成 28 颗制作者星，拒绝与另一颗制作者星距离小于 72 世界单位的位置；它们的 id 和位置必须保持稳定。
  - 按以下顺序渲染：从 #080D1F 到 #101A36 的径向/线性天空渐变；一个淡淡的 100 世界单位网格和两条宽虚线图集弧；背景星；rgba(228,188,114,.16) 的未激活星座细线；引导星和光晕；1.6 CSS 像素、颜色 #E4BC72 的激活描线；选中星环；然后是制作者点和线。将故事卡片、按钮、日期控件和可读标签保留在 DOM 中，而不是把段落绘制到 canvas 里。不使用位图纹理、发光滤镜堆栈或图像资源。
  - 在 React 中保持选中模式、选中星座、缩放、日期、制作者名称、制作者点、已保存收藏和引导打开状态。在 refs 中保持平移速度、指针手势、动画进度和逐帧变换。将完整世界适配到 canvas 中，初始内边距为 60 CSS 像素，允许围绕 canvas 中心缩放 0.75–2.2，限制平移以确保始终有部分天空可见，并使用 ResizeObserver 重新计算变换而不重置状态。设备像素比在桌面端上限为 1.75，移动端上限为 1.5。
  - 实现指针捕获和 6 CSS 像素的移动阈值。超过阈值的按下-移动-释放以直接 1:1 移动进行平移，并最多带 550ms 的阻尼动量；低于阈值则执行命中测试。在 Explore 模式下，接受 20 CSS 像素内的引导星或星座线段，并选择最近的候选。在 Create 模式下，仅接受 22 CSS 像素内的制作者星，并在已选点少于八个且该星尚未出现在折线中时追加它。仅在 canvas 上设置 touch-action none，绝不在周围页面或表单控件上设置。
  - 初始化 Explore 模式时选中第一个星座并完成其描线，使首屏包含可见的故事和金色几何图形。选择另一个星座会将描线进度设为 0，并在 700ms 内以 easeOutCubic 将所有边一起从 0 动画到 1；故事面板立即更新，并由礼貌状态区域播报 '[name] traced'。Trace again 会重放相同的 700ms 序列而不改变故事。在减少动态效果下，所有描线立即显示为完成。
  - 对于日期控件，使用固定的非闰年 2026 图集，原生日期输入 min 2026-01-01、max 2026-12-31、默认 2026-09-21，并与 0–364 范围输入同步。使用显式的本地正午解析器转换日期，绝不对裸 YYYY-MM-DD 字符串使用 Date.parse。围绕世界中心将背景场和图集一起按 sin(day/365 × 2π) × 18 度旋转，并按 cos(day/365 × 2π) × 55 世界单位垂直平移。变化在 160ms 内插值，或在减少动态效果下立即完成。这种确定性装饰变换必须标注为示意性，且不得呈现为实际可见性。
  - 在 Create 模式下，将图集线和引导星调暗至 25% 不透明度，并突出 28 颗制作者星。维护一条最多八个不同点的有序折线；非连续点只能在 Clear 之后重新访问。Undo 移除一个点，Clear 清空折线，Save 要求至少三个点以及一个去除首尾空白后非空、最多 24 个 UTF-16 字符的名称。在 localStorage 中最多存储六个创作，使用由 [BRAND] 的 slug 派生的版本化键，仅包含名称和制作者星 id。验证恢复的数据，丢弃未知 id，从格式错误的存储中静默恢复，并为每个已保存项提供 Load 和 Delete。绝不存储指针坐标、日期或分析数据。
  - 为每个 canvas 操作提供键盘等效的 DOM 控件：六个星座按钮、缩放和重置按钮、原生日期输入，以及在 Create 模式下带标签的制作者星选择器（Star 1 到 Star 28）外加一个 Add point 按钮。可聚焦的 canvas 还支持方向键平移 40 CSS 像素、+ 和 - 缩放，以及 Escape 返回 Explore；绝不在 inputs、selects、textareas 或 buttons 内拦截按键。使用可见焦点、可访问的 canvas 文本、模式上的 aria-pressed，以及一个礼貌状态区域，播报已完成的操作而非动画帧。
  - 仅在手势和过渡期间以全速率使用 requestAnimationFrame；空闲时，将细微星点闪烁限制为每秒 24 帧，并在 document.hidden 时暂停。不要每帧重新渲染 React，不要在渲染循环中分配星点数组，也不要运行自主相机。对于 prefers-reduced-motion，移除闪烁、动量、平滑日期插值、描线动画和装饰性 UI 移动，同时保留所有功能。监听偏好变化，并在卸载时清理观察器、监听器和动画帧。
  - 在项目根目录编写 ASSETS.md，涵盖原创程序化星点数据、Canvas 渲染、SVG 标记和图表、Lucide ISC，以及所有三个带 OFL-1.1 许可证的 Fontsource 包。保持每个运行时请求均为本地，且 dist/ 低于 20 MB。此模板不需要生成图像。

## 变量
- [BRAND] — Atlas 品牌（默认："Asterwyn"）。一个为字标、文档标题、本地存储命名空间和指南而虚构的短名称；绝不是真实品牌。
- [COLLECTION_NAME] — 天空系列名称（默认："The Lantern Sky"）。一个简短的虚构标题，用于当前由六个星座故事组成的系列。
- [HEADLINE] — 欢迎标题（默认："Find the stories between the stars."）。一个清晰的五到十个词的邀请语；如果其含义发生变化，请相应调整辅助文案。
- [AUDIENCE] — 受众（默认："curious stargazers and families reading together"）。一个通俗易懂的短语，用于调整欢迎、故事和帮助文案。
- [CONSTELLATION_SET] — 六个星座名称（默认："Lyra, Cygnus, Cassiopeia, Orion, Ursa Major, Corona Borealis"）。恰好六个以逗号分隔的公有领域星座名称，顺序与提供的六条几何记录一致；为每个星座撰写原创故事。
- [STORY_LENS] — 故事主题（默认："wonder, courage, and connection"）。三个宽泛的主题，用于塑造原创重述，不包含预言或建议。
- [CREDIT] — 在页脚保留一个小的 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/constellation-story-map（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 午夜色（Midnight）`#080D1F` — 页面背景、画布深场和遮罩。
- 图册靛蓝（Atlas indigo）`#101A36` — 画布辉光、页眉和主要凸起表面。
- 故事面板（Story panel）`#151E38` — 故事、创作和指南表面。
- 悬停海军蓝（Hover navy）`#1D2948` — 选中字段和悬停状态。
- 羊皮纸色（Parchment）`#F3E9D2` — 主要文本、故事标题和明亮指南星。
- 柔和蓝（Muted blue）`#AAB5CD` — 次要文案和非活动控件，具有可读对比度。
- 古金色（Antique gold）`#E4BC72` — 活动星座线、焦点环、选中轮廓和主按钮填充。
- 金色墨水（Gold ink）`#241A0D` — 古金色按钮上的文本。
- 图册线（Atlas line）`#35415E` — 细线边框、坐标网格和分隔线。
- 星蓝（Star blue）`#B9CBFF` — 冷色星光晕和微妙的次要图表点缀。

### 排版
- 字标、H1、故事名称和大型指南引文：Newsreader（OFL），字重 400/500/600
- 正文、按钮、字段、故事文本、帮助和状态消息：Manrope（OFL），字重 400/500/600/700
- 日期读数、故事编号、字段标签和坐标说明：IBM Plex Mono（OFL），字重 400/500

### 布局与动效
- 间距：使用 8px 基准单位。桌面外壳最大宽度 1504px，侧边内边距 24px；页眉高 64px。主区域使用 20px 顶部内边距和 256px / minmax(480px, 1fr) / 320px 网格，间距 16px。中央画布在 1440 × 900 下高 620px，下方有独立的 76px 控制栏。左侧介绍使用 48–58px H1，行高 1.02；故事正文保持每行约 58–66 个字符。在 390 × 844 下使用 56px 页眉和 16px 内边距、紧凑的 120px 介绍、360px 画布，以及正常流的控件和故事。所有交互目标至少 44 × 44px，页面内容绝不导致水平溢出。
- 圆角：天空舞台和大型面板使用 18px，指南对话框和故事图表使用 12px，字段和主按钮使用 10px，星座行使用 8px，仅紧凑模式标签和状态胶囊使用 999px。使用 1px 图册线边框和宽大柔和阴影。羊皮纸色和金色是实心编辑强调色；不要将每个表面都变成半透明玻璃。
- 动效：立即渲染完整星空和第一个选中的故事，无启动画面、加载门或阻塞式介绍。第一个星座已经描绘；只有显式选择或再次描绘才会启动 700ms 线条显现。
- 动效：拖动直接跟随指针。释放后最多可继续 550ms，速度快速衰减，然后停止且不超出平移边界。缩放变化使用 140ms ease-out 变换，以画布为中心。
- 动效：星座线作为一个连贯的 700ms easeOutCubic 序列显现，而不是随机星点追逐。选中的指南星在 500ms 内接受一次克制的光晕扩展，故事文本在 160ms 内交叉淡入淡出。
- 动效：日期变化在 160ms 内插值示意天空。制作者点以 160ms 半径和透明度脉冲出现，而保存和加载的折线在 420ms 内绘制。选择后无自动平移跟随。
- 动效：按钮、标签、面板和对话框使用 120–180ms 颜色、透明度或最多 4px 移动过渡。减少动效会移除闪烁、动量、插值、线条绘制和非必要变换，同时保留即时状态反馈。
- 图像：高工艺的交互式 Canvas 2D 天空是视觉锚点；不使用照片、生成的位图图像、下载的星图、图像纹理或外部星座艺术。分层叠加深靛蓝渐变、精细图册网格、虚线弧、420 颗确定性背景星、六个原创简化金色图形、冷色光晕和 28 颗制作者星。使用相同的点和边数据在故事卡中绘制本地 SVG 图表。原始品牌标记和 favicon 是一个简单的不对称四角星，带一个偏移点，不是从天文产品复制的标志。无人物、面孔、吉祥物、星座角色、真实机构或品牌望远镜图像。

## 页面与区块
### [BRAND] — [COLLECTION_NAME] (`index.html`)
1. **内容模型与确切的默认故事** — 将所有可见字符串和全部几何元数据保留在声明的 content/data 模块中。默认的引言眉题（eyebrow）为 '[COLLECTION_NAME] · SIX STORIES'；H1 为 '[HEADLINE]'；正文为 'A field guide for [AUDIENCE]. Wander the night, follow six old patterns, and leave a new one of your own.'。主题行为 'Original retellings shaped by [STORY_LENS].'。默认星座记录按顺序为：01 Lyra，别称 'The listening harp'，故事 'Orpheus carried a lyre whose music made even stones seem to listen. In this retelling, the instrument remains after the player is gone, holding not a spell but a reminder: careful listening can change the shape of a room. The small harp becomes an invitation to make something worth remembering.'，注释 'Five guide points form a small harp-like frame. Vega is the brightest anchor in this simplified map.'；02 Cygnus，别称 'The traveling swan'，故事 'A swan circles the old stories in more than one disguise. Here, its long wings are read as a sign of safe passage rather than a literal transformation. The bird carries a traveler over dark water, asking them to trust the next small stretch of sky.'，注释 'A long central line and crossbar give this pattern its swan and Northern Cross associations.'；03 Cassiopeia，别称 'The borrowed crown'，故事 'A queen speaks too proudly and finds her place in the heavens turned upside down. This version keeps the lesson modest: praise is fleeting, but generosity can outlast a throne. Her five bright points rise and dip like a crown passed from hand to hand.'，注释 'Five points make the familiar W-shaped rhythm used for this illustrative pattern.'；04 Orion，别称 'The winter walker'，故事 'A hunter strides through many ancient tales, forever followed by his dogs and the coming winter. Our telling imagines him less as a conqueror than a watchful walker, learning the season by footprints and frost. His belt becomes three pauses on a long journey home.'，注释 'Three closely spaced belt points sit between four corner stars in this simplified figure.'；05 Ursa Major，别称 'The northern bear'，故事 'A mother and child are set among the stars as bears in a story told across generations. Here the great bear guards a familiar path rather than a treasure. Follow the bowl to its two outer stars, and the night offers a way to begin finding north.'，注释 'Seven points form the Big Dipper asterism, part of the larger Ursa Major constellation.'；06 Corona Borealis，别称 'The kindness arc'，故事 'A crown shines after the wedding feast has ended. This retelling treats each jewel as a promise kept by someone who helped its wearer begin again. The arc is less a royal ornament than a small constellation of kindness, bright enough to follow without needing a throne.'，注释 'Seven guide points form a compact arc; real constellations occupy three-dimensional space, not flat connect-the-dots figures.'。对于替代变量，请为所提供的名称和 STORY_LENS 编写六个新的原创故事和长度相近的注释；不要保留这些默认文本。
   布局：此区块定义的是内容模型，而非一个独立的可见营销区块。每条故事记录提供名称、编号、别称、40–70 词的故事、一句话的图案注释、几何 id 以及主题感知摘要。六条几何记录保持确切的变量顺序。古典名称可以是真实的；所有品牌、合集、别称和叙事措辞必须为原创。
   动效：通过一个礼貌的状态区域（polite status region）播报一次新选中的故事。不要对正文中的单个词进行动画或播报。
2. **页眉与紧凑星图简介** — 页眉左侧包含原创的四角星标记和 [BRAND]，使用 Newsreader 500、23px。页眉右侧包含一个低调的胶囊标签 'An imaginative night atlas' 和一个标注为 'How to explore' 的 CircleHelp 按钮。左侧简介包含上文确切定义的眉题、H1、正文和主题行。其下方放置一个小的两行图例：实心金色线 'Selected story'；淡金色线 'Unselected pattern'。不要添加营销导航、定价、账户、用户评价，或单独的大型落地页主视觉。
   布局：页眉横跨外壳，底部带有一条 Atlas 线边框。在桌面端，简介占据左侧网格列的顶部，文本组之间间距 16px，图例前间距 24px。在移动端，保持品牌和 How to explore 可见，仅隐藏低调胶囊标签，并将简介缩短为眉题、38px 的 H1 和一句话；不要让它覆盖画布。无需汉堡菜单。
   动效：简介文案在首次绘制时即存在。仅帮助按钮和焦点环有动画；不要有标题显现、漂浮装饰或移动的眉题。
3. **六故事星座索引** — 将左侧索引标题设为 'Stories in this sky'，并带有一个小的 '06' 等宽计数。每一行是一个按钮，包含内容记录中的两位数字编号、星座名称和别称。选中行使用古金色左侧竖线、Hover 海军蓝填充和一个小 Check 图标，绝不只依赖颜色。在索引下方添加 'Prefer a blank page?' 和一个次要的 PencilRuler 按钮 'Make your own'。激活任意行会返回 Explore，选中该图案，开始其描摹，并更新故事面板，而不滚动页面。
   布局：桌面端行高 64px，间距 10px，水平内边距 12px，堆叠在简介和图例下方。Make your own 按钮横跨该列。在低于 1120px 的平板宽度下，将外部布局折叠为 220px 索引 / 灵活舞台的排列，并将故事放在下方。在 390px 下，用舞台上方一个带标签的原生 select 'Choose a constellation' 替换六个完整行，保留全部六个名称和相同的选择行为；将 Make your own 放入模式标签页，而不是留下重复按钮。
   动效：行使用 140ms 的边框和背景过渡。选择不会移动列表、自动滚动文档，或从触发控件夺取焦点。
4. **交互式夜空舞台** — 将大画布居中放置在一个带边框的舞台内，左上角等宽标签为 'FIELD 01 / [COLLECTION_NAME]'，右上角模式标签页为 'Explore' 和 'Create'。左下角初始辅助文本为 'Drag to wander · Tap a pattern to trace'；在触摸设备上使用 'Drag to wander · Tap a star or pattern'。右下角显示 Plus、Minus 和 RotateCcw 图标按钮，其无障碍名称为 Zoom in、Zoom out 和 Reset view。一条狭窄的下方条带始终显示 'Simplified patterns · Illustrative sky, not a live ephemeris'。Explore 显示全部六个图案、背景星星和选中的金色描摹。Create 使星图变暗，并显示 28 颗更亮的创作者星星，辅助文本为 'Tap up to 8 stars to connect your shape'。画布的无障碍描述会说明当前模式，并引导用户使用等效的 DOM 控件。
   布局：画布填满桌面端 620px 高的舞台，圆角 18px，边框为 1px Atlas 线；说明文字位于小的实心 Midnight-at-82% 条带中，以便在星星上方保持可读。缩放控件在右下角垂直堆叠，不覆盖初始选中的图形。在移动端，舞台高 360px，模式标签页保持在右上角，字段标签缩短为 'FIELD 01'，辅助文本使用一行 12px 字号。仅在画布上设置 touch-action none；模式标签页和缩放按钮仍为普通 DOM 元素，位于其指针处理器之外。
   动效：实现 Setup 中确切的平移、命中测试、缩放、描摹、闪烁和减少动效行为。输入反馈在一个渲染帧内开始。选择绝不触发相机飞行。隐藏时暂停环境渲染，并避免标签变化时发生布局移动。
5. **故事面板与星座制作器** — 在 Explore 模式下，右侧面板显示选中的编号和 'CONSTELLATION STORY'、其 Newsreader 名称、别称、相同点/边几何的本地 SVG、完整的原创故事、带有注释的 'Pattern note' 标签，以及一个次要的 'Trace again' 按钮。最后以一个低调的文本按钮 'Make a constellation instead' 结束。在 Create 模式下，将故事替换为一个标题为 'Name a new pattern' 的面板，辅助文本为 'Connect three to eight maker stars. Your creation stays in this browser.'。包含一个可见的名称输入框，标签为 'Constellation name'，maxlength 24，占位符 'For example, The Quiet Harbor'；一个实时的 '{n}/8 stars' 计数；Undo 和 Clear 按钮；键盘等效的创作者星星选择器和 Add point 按钮；以及一个在主按钮 Save constellation，在有效前禁用。下方将保存区域标题设为 'Your small sky'。空状态文本为 'No saved patterns yet. Connect at least three stars to begin.'。每个已保存行显示其名称和点数，并带有 Load 和 Delete 操作。加载会恢复有序的点和名称；删除需要一次内联确认，且不影响内置故事。
   布局：桌面端 Explore 是一个 320px 的 Story 面板，内边距 22px，一个 150px 高的 SVG 图示，组间距 16px，在内容允许的情况下 Trace again 对齐到底部。SVG 使用实际记录坐标并留 18px 内边距，古金色（antique-gold）线条，羊皮纸色（parchment）点，内部无文字。创建控件使用全宽 44px 的输入框和按钮，Undo 和 Clear 位于两列一行中，已保存行用细线分隔。在移动端，活动面板按正常文档流跟随日期控件，无固定高度，无重叠画布。键盘星形选择器保持可见，而不是隐藏在仅用于无障碍的样式表中。
动效：选择后 Story 内容以 160ms 交叉淡入淡出；图示线条共享画布的描迹时长。制作者点和已加载的折线使用指定的短显现效果。保存时内联显示 'Saved to this browser' 持续 2.4 秒，不使用 toast 库，不引起布局偏移。减少动效时立即显示所有状态。
6. **Sky-at-date 控件与指南页脚** — 在画布下方放置一个标有 'Sky at date' 的控制栏，包含 CalendarDays 图标、原生日期输入和一个同步的范围滑块。等宽读数使用 Intl.DateTimeFormat en-US，月份缩写、日期数字、年份数字；默认可见值为 'Sep 21, 2026'。Reset date 按钮恢复该固定默认值，而不重置所选 story 或 creations。四个诗意季度标签为 'Chapter I · The listening sky'、'Chapter II · The turning sky'、'Chapter III · The wandering sky' 和 'Chapter IV · The homeward sky'；仅作为装饰显示相应标签，绝不作为季节性观测建议。How to explore 打开一个标题为 'A few ways to wander' 的指南，包含四项：'Drag' / 'Move across the field, or use the arrow keys on the focused canvas.'；'Trace' / 'Choose a pattern in the sky or story index to draw its lines and read an original retelling.'；'Make' / 'Connect three to eight maker stars, name the pattern, and save it locally. The star selector offers the same action without a pointer.'；'Change the date' / 'Move through the fixed 2026 atlas to shift the illustrative field. This is not an astronomical forecast or an astrology reading.' 添加 'Star patterns are simplified. Classical names belong to old stories; every retelling here is newly written.' 页脚文本为 'Six old patterns. One small sky of your own.'，带有可选的 [CREDIT] 链接。
布局：76px 日期栏为三列网格：标签/读数、弹性范围输入，以及带 Reset date 的日期输入。在移动端使用两行，标签/读数第一，范围第二，日期/重置第三（如高度允许）；所有输入保持至少 44px 高。指南是一个居中的 520px 最大宽度对话框，内边距 24px，Midnight 遮罩，焦点陷阱，Escape 关闭，焦点返回；在移动端使用底部抽屉，带安全区域内边距和最大高度 82svh。页脚是应用下方一个安静的弹性行，在移动端堆叠，无额外站点区块。
动效：日期变更使用 160ms 天空插值并立即更新读数。指南进入使用 140ms 不透明度和 4px 上升，或在减少动效下立即不透明度。没有对话框自动打开。

## 资产
- 图像：不使用任何外部或生成的图像文件。星场、图集网格、星座连线、制作者点位、光晕、故事示意图、四点品牌标记和 favicon 全部使用本地 Canvas 2D 和 SVG，基于声明的原始数据编写。在 ASSETS.md 中记录这一原创程序化创作；不使用下载的地图、纹理、照片或占位图像。
- 图标：本地打包 lucide-react，用于 CircleHelp、Check、PencilRuler、Plus、Minus、RotateCcw、CalendarDays、Undo2、Trash2、Save、X、BookOpen 和 MousePointer2，尺寸 18–20px，使用 currentColor。仅使用常见的工具性含义；不要导入品牌、星座或第三方星座图标。在 ASSETS.md 中记录 Lucide 的 ISC 许可证。
- 字体：安装并自托管 @fontsource/newsreader，仅导入字重 400、500 和 600 的 Latin woff2 文件。在 ASSETS.md 中记录包路径、来源、作者和 OFL-1.1 许可证；不使用字体 CDN。
- 字体：安装并自托管 @fontsource/manrope，仅导入字重 400、500、600 和 700 的 Latin woff2 文件。在 ASSETS.md 中记录包路径、来源、作者和 OFL-1.1 许可证；不使用字体 CDN。
- 字体：安装并自托管 @fontsource/ibm-plex-mono，仅导入字重 400 和 500 的 Latin woff2 文件。在 ASSETS.md 中记录包路径、来源、作者和 OFL-1.1 许可证；不使用字体 CDN。

## 不要做
- 不要复制、描摹、重新着色或紧密模仿现有的天文馆、星图、教育网站或天文产品，包括其代码、提示词文本、地图投影、界面构图、插图、图标、文案、标语、名称、标志或吉祥物。此处的程序化布局和视觉处理必须保持原创。
- 不要使用第三方星图艺术作品、照片、天空纹理、星座插图、下载的地图瓦片、专有黄道艺术、授权角色、真实人物肖像或任何品牌标志。仅使用声明的原创 Canvas 和 SVG 几何图形以及本地实用图标。
- 不要从其他来源复制神话段落、指南条目、教育文案或故事面板文本。古典星座名称和广泛的公有领域神话可以为六条记录提供参考，但每一段复述、别称、注释和说明都必须新写。
- 不要将该玩具呈现为实时天文目录、位置感知天空预报、科学星历表、占星解读、星座运势或个人预测来源。保持示意性天空的声明可见，不要编造精确坐标、可见性声明或观测条件。
- 不要后端、服务器代码、API 路由、数据库、身份验证、天文 API、地理位置请求、远程表单提交、分析、第三方 API、运行时 fetch、跟踪像素、社交小部件或账户。保存的创作保留在经验证的 localStorage 中，仅包含名称和制作者星标 id。
- 不要 CDN 脚本或样式、Google Fonts URL、热链接资源、外部托管图标、占位图服务、Unsplash、Pexels、Pixabay、Google Images 或具有不明确、非商业或共享相同许可的资产。使用 Vite base './'、相对路径、本地打包的包和自托管 Fontsource 字体。
- 不要添加图像生成、Three.js、WebGL、canvas 辅助库、状态管理库、动画框架、路由器或外部天文数据。原生 Canvas 2D、SVG、CSS、React 状态和声明的包已足够。
- 不要在内容/数据模块之外硬编码默认品牌、集合、标题、受众、星座集、故事主题、故事文本或存储命名空间。替代值必须产生六个连贯的新故事和界面文案，没有默认残留或未解析的 [VARIABLE] 占位符。
- 不要混淆点击与拖动、将 touch-action none 附加到整个页面、将创作隐藏在仅指针输入之后，或让日期更改擦除选定的故事、视图或保存的集合。严格遵循移动阈值、命中区域、状态规则和键盘等效控件。
- 不要运行无界动画、逐帧 React 渲染、逐帧星数组分配、未限制的设备像素比、隐藏时动画、自动相机移动或忽略 prefers-reduced-motion 的运动。保持固定的星数、帧上限和清理要求。
- 不要使用启动画面、自动播放音频、滚动劫持、固定区块、自定义光标、过度泛光、玻璃卡片装饰、虚假推荐、访客计数、定价、新闻通讯表单或营销区块。玩具本身就是第一屏。
- 不要添加额外页面、裸目录链接、SEO 标记、结构化数据、Open Graph 工作、站点地图代码或超出纯标题、主题色和原创 favicon 的元数据。唯一的页面是 index.html。
- 生产 npm run build 必须输出压缩的静态 dist/，低于 20 MB，无源映射，且不将 src/ 复制到 dist/。它必须在 1440 × 900 和 390 × 844 下运行无控制台错误，保持所有点击目标至少 44px，并且不留下水平页面溢出。
- 使用可见焦点、语义按钮和表单标签、可访问的 canvas 说明、礼貌的状态消息、对话框焦点捕获和焦点返回，以及不依赖颜色 alone 的选定状态。永远不要对移动用户隐藏键盘星标选择器或必需声明。
- 除了可选的 [CREDIT] 链接外，永远不要在渲染的站点中提及 VibeFather，也永远不要使用 VibeFather 或真实品牌作为变量默认值。所有文案、标签、示例数据和替代文本必须为美式英语。

---
— Prompt by VibeFather · https://vibefather.ai/t/constellation-story-map · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
