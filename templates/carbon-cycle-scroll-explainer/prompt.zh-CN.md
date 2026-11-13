> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 碳循环滚动讲解页（Carbon Cycle Scroll Explainer）

完全按照下面的描述构建这个网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
由 [BRAND]（一家小型独立科学讲解工作室）制作的单页图文滚动故事，主题为 [TOPIC]。一个大型代码绘制的 SVG 剖面图（天空、带森林和山脉的陆地、开阔海洋、带化石层的岩层）从第一帧起就在运动：发光的粒子沿着弯曲路径在四个储库（[RESERVOIRS]）之间流动，其速度和密度显示每个流量的大小（[FLOWS]）。当文字步骤滚动经过时，场景保持固定，镜头从一个储库平移到另一个储库并缩放。第四种由人类驱动的流动起初是一根细线，在工业时代逐渐变粗。随后是一份年度账本，接着是一个情景实验室：一个带三个档位的滑块（[SCENARIOS]），可平滑重绘 [OUTCOME] 曲线、更新大号读数并改变天空色调。每个数字都标注为“示意性”，结尾的来源说明解释了四舍五入的处理。

- 受众：高中和大学低年级课堂、有好奇心的成年读者，以及会链接或投影此页面的教师、博物馆教育工作者、非营利组织和新闻编辑室。
- 目标：让读者在大约四分钟的滚动中理解一个系统故事，让读者在结论被说出之前先感受到失衡，并以一个交互（情景滑块）收尾，使不同未来之间的选择变得可感。次要目标：便于在课堂上重复使用（打印按钮、讨论提示）。
- 语气：平实、温暖而精确。短句、具体的整数、不危言耸听，也不拿主题开玩笑。海报般醒目的视觉，平静的文字。所有文案都按下面的默认值撰写，并保存在 src/content.ts 中；如果变量发生变化，请重写每个标题、步骤、账本行、FAQ 回答和来源行，以适配新主题，并保持相同的长度和节奏。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + 原生 TypeScript（vanilla TypeScript）
- 样式（Styling）：原生 CSS（Vanilla CSS）
- 库（Libraries）：vite 5（MIT）、typescript 5（Apache-2.0）、gsap 3.12（核心 + ScrollTrigger）（GSAP Standard License（免费，允许商业使用））、lucide 0.4x（原生包）（ISC）、@fontsource-variable/bricolage-grotesque（OFL-1.1）、@fontsource/atkinson-hyperlegible（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务器代码、无外部 API。
- 配置（Setup）：
  - 使用 Vite vanilla-ts 模板搭建脚手架；package.json 脚本：dev = vite，build = tsc && vite build，preview = vite preview。
  - vite.config.ts：base './'，build.outDir 'dist'，build.sourcemap false，build.assetsInlineLimit 0。单一入口 index.html。
  - 文件布局（File layout）：src/main.ts（启动、字体、图标）、src/content.ts（页面上所有字符串和数字，带类型）、src/scene.ts（构建内联 SVG 场景并暴露命名分组）、src/flows.ts（粒子时钟）、src/story.ts（ScrollTrigger 步骤与相机）、src/scenario.ts（滑块、曲线路径、读数、着色）、src/styles.css（令牌、布局、关键帧、减少动态效果与打印规则）。
  - 在 main.ts 中导入 '@fontsource-variable/bricolage-grotesque'、'@fontsource/atkinson-hyperlegible/400.css'、'@fontsource/atkinson-hyperlegible/700.css'、'@fontsource/jetbrains-mono/500.css'。
  - 只注册一次 GSAP：import { gsap } from 'gsap'; import { ScrollTrigger } from 'gsap/ScrollTrigger'; gsap.registerPlugin(ScrollTrigger)。
  - 图标（Icons）：仅从 'lucide' 导入所需图标，并在 DOM 构建完成后调用 createIcons({ icons: { Wind, Waves, Trees, Layers, Flame, Thermometer, Info, ArrowDown, Printer, Plus, Minus } })；元素使用 data-lucide 属性。
  - 在 TypeScript（scene.ts）中根据 content.ts 数据构建场景 SVG，并注入到 #scene；不要将其作为外部图片发布。viewBox 原点 0 0 1600 1000，preserveAspectRatio 'xMidYMid slice'。
  - 在 styles.css 的 :root 中将所有颜色定义为 CSS 自定义属性，并尽可能通过 fill='var(--name)' 从 SVG 引用相同的值。
  - <title> 为 '[BRAND] · [TOPIC], explained'。Favicon：public/favicon.svg，一个 32x32 靛蓝（#160F3D）圆角方块，带有两个弯曲箭头组成环形，一个酸橙绿（#C6FF3D），一个熔岩橙（#FF6A1A）。
  - 所有动效均以 window.matchMedia('(prefers-reduced-motion: reduce)') 为条件；减少动态效果的路径在 Design > motion 中描述。

## 变量
- [BRAND] — 工作室或出版方名称（默认：“Lowtide Lab”）。即该解释性内容的发布者。用于页眉字标、标题和页脚。
- [TOPIC] — 故事所解释的系统（默认：“The carbon cycle”）。任何在四个储存库之间转移某一数量的系统。
- [RESERVOIRS] — 四个储存库，按故事顺序排列（默认：“Atmosphere, Land, Ocean, Fossil reserves”）。以逗号分隔，恰好四个。在场景中分别映射到天空、陆地、海洋和岩层。
- [FLOWS] — 四个流动，按故事顺序排列（默认：“Photosynthesis, Respiration and decay, Ocean exchange, Fossil fuel burning”）。以逗号分隔，恰好四个。最后一个是由人类驱动的流动，在工业时代步骤中变粗。
- [SCENARIOS] — 三个滑块停靠点，从最好到最差（默认：“Rapid cuts, Current path, High emissions”）。为自创的普通标签；绝不使用官方情景代码。
- [OUTCOME] — 情景曲线所展示的内容（默认：“Warming by 2100, in °C”）。情景曲线的 Y 轴标签和读数单位。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/carbon-cycle-scroll-explainer（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图像——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图像路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 夜靛蓝（Night Indigo）`#160F3D` — 页面背景、上层天空、卡片填充（在场景上以 90% 不透明度叠加）
- 暮紫（Dusk Violet）`#3B1F7A` — 中层天空渐变停靠点、区块色带、滑块轨道
- 地平线余烬（Horizon Ember）`#FF8A3D` — 紧贴地平线上方的低空辉光带、太阳圆盘边缘
- 深青（Deep Teal）`#06535F` — 海洋表层、账本区块背景
- 深渊（Abyss）`#03252C` — 深海层、页脚背景
- 熔橙（Molten Orange）`#FF6A1A` — 人类驱动流（化石燃料燃烧）粒子与描边、主 CTA 填充、高排放曲线
- 酸橙（Acid Lime）`#C6FF3D` — 生物圈流（光合作用）、滑块拇指、激活步骤标记、快速减排曲线、焦点环
- 辉青（Glow Cyan）`#5CE1E6` — 海洋交换粒子、链接、当前路径曲线
- 余烬粉（Ember Pink）`#FF3D7F` — 情景实验室中天空的变暖色调目标、净变化条上的警告高亮
- 森林（Forest）`#0E6B4A` — 山丘与树身（树木使用 Forest 色，树冠为 Acid Lime）
- 地层锈（Strata Rust）`#7A3A1E` — 上层岩带
- 地层赭（Strata Umber）`#4A2418` — 中层岩带
- 煤黑（Coal Black）`#120B0A` — 化石层与下层岩带
- 薄雾（Mist）`#F3EEFF` — 深色背景上的正文与标题文字（在 Night Indigo 和 Deep Teal 上达到 AA+）
- 薰衣草灰（Lavender Gray）`#B9B0E0` — 次要文字、坐标轴标签、说明文字（在 Night Indigo 上达到 AA）

### 排版（Typography）
- 展示字体：主视觉标题、步骤标题、区块标题、大号读数。紧凑字距 -0.02em，主视觉行高 0.95，其他 1.05。：Bricolage Grotesque（可变字体）（OFL），字重 700/800
- 正文、卡片文案、FAQ、按钮。桌面 18px / 移动端 17px，行高 1.55。：Atkinson Hyperlegible（OFL），字重 400/700
- 数字、存量标签、年份计数器、Illustrative 标签、坐标轴刻度。标签使用大写并设置 0.08em 字距。：JetBrains Mono（OFL），字重 500

### 布局与动效（Layout & motion）
- 间距：8px 基础网格。内容最大宽度 1200px，桌面端两侧内边距 6vw，移动端 16px 边距。区块间距为 160px（桌面）/ 96px（移动）。主视觉标题桌面 112px / 移动 52px（clamp(52px, 8vw, 112px)）；区块标题 clamp(36px, 5vw, 64px)；步骤标题桌面 40px / 移动 28px。
- 圆角：卡片与步骤面板 20px；按钮与标签完全圆角（999px）；滑块轨道 999px；账本条 6px。场景本身为全出血，无圆角。
- 动效：加载：场景从 Night Indigo 淡入，历时 600ms，随后主视觉标题各行上移 24px 并淡入，间隔 90ms 交错（power3.out，700ms）。粒子立即开始；不存在静态首帧。
- 动效：粒子时钟：flows.ts 中一个 requestAnimationFrame 循环驱动所有流。每条流是一条 SVG 路径，初始化时通过 getPointAtLength 采样一次为 240 个点（Float32Array）。流的每个粒子 i 位于 u = (time * speed + i / count) mod 1，绘制为半径 2.5 至 4px 的圆，带柔和辉光（流分组上应用 stdDeviation 为 2 的 feGaussianBlur 滤镜）。count = clamp(round(value / 3), 3, 44)；speed = 0.05 + value / 1500 周期每秒。每条引导路径也以 25% 不透明度、1.5px、虚线 2 6 描边。
- 动效：当故事区块完全离开视口（IntersectionObserver）且 document.hidden 为 true 时，循环暂停。
- 动效：相机：一条 GSAP 时间线沿故事轨道擦洗（scrub 0.6），通过每步一个关键帧补间一个代理对象 {x, y, w, h}，并在 onUpdate 中写入场景的 viewBox。关键帧列于故事区块中。
- 动效：步骤激活：每个步骤面板有一个 ScrollTrigger（start 'top 60%'，end 'bottom 40%'）；激活面板不透明度为 1，非激活面板为 0.3；场景中激活的储库获得 3px Acid Lime 轮廓辉光，在 400ms 内淡入，其在水库仪表中的对应行高亮。
- 动效：工业时代：第二条擦洗补间在步骤 5 中驱动值 industry 从 0 到 1；化石燃烧流的描边宽度从 1px 变为 7px，粒子数从 3 变为 40，速度变为 3 倍，年份计数器在 1850 到 2025 之间插值（四舍五入到整年）。
- 动效：计数器：步骤 6 中的大气存量随滚动从 600 计数到 900（擦洗、整数、tabular-nums）。
- 动效：账本条在账本进入视口时（一次）从 0 增长到其宽度，历时 900ms（power2.out），间隔 120ms 交错。
- 动效：情景曲线：拖动滑块时，每次 input 事件在相邻两个情景点数组之间插值投影路径；释放时拇指吸附到最近的停靠点，路径在 500ms 内补间到该情景（power2.inOut），使用相同的插值。读数数字随之补间；天空色调变量 --heat（三个停靠点分别为 0、0.45、1）同步补间。
- 动效：按钮：悬停上移 2px 并提亮 8%；按下缩放 0.97。FAQ 项以 280ms 高度过渡展开，加号图标旋转 45 度。
- 动效：prefers-reduced-motion：无相机补间、无擦洗。每个步骤在激活时立即将 viewBox 吸附到其关键帧（分步静态场景）。粒子不播放动画：每条流绘制为带箭头的静态虚线描边，宽度按值缩放。计数器显示其终值。滑块即时更新曲线，无补间。加载淡入被移除。
- 图像：无照片、无位图图像。一切均以代码绘制为扁平、分层的矢量形状，并带有可见颗粒：一个 SVG feTurbulence（baseFrequency 0.9，numOctaves 2）噪声矩形覆盖整个场景，不透明度 9%，混合模式为 overlay，另在区块背景上使用同一 SVG 滤镜作为 data URL 的 CSS 颗粒叠加层。形状呈海报风格：粗犷剪影、无轮廓、每个对象最多三种色调、除天空与海洋深度外无渐变。图标为 Lucide 20px，描边 1.75，使用 Mist 或流颜色。无吉祥物、无角色、无人物、无可识别地标或真实设施；工厂为带两个烟囱的通用方块。

## 页面与区块
### [BRAND] · [TOPIC]，详解（`index.html`）
1. **页头（共享，固定）** — 左侧：字标 'Lowtide Lab'，使用 Bricolage Grotesque 800，20px，前面是一个 22px 的代码绘制环形标记（两条弯曲箭头，一条 Acid Lime，一条 Molten Orange）。中间（仅桌面端）：锚点链接 'Story'、'Ledger'、'Scenarios'、'Sources'，分别指向 #story、#ledger、#scenarios、#sources。右侧：一个带有 Lucide Info 图标的 chip，以及等宽文本 'ILLUSTRATIVE FIGURES'，点击后滚动到 #sources。
   布局：固定顶栏，高度 64px，全宽，两侧内边距 6vw（移动端 16px）。在 hero 上方透明；滚动 80px 后，获得 Night Indigo 背景，85% 不透明度，底部 1px 边框 rgba(198,255,61,0.18)。移动端中间链接隐藏，chip 缩小为图标加 'ILLUSTRATIVE'。
   动效：当越过滚动阈值时，背景在 200ms 内淡入。
2. **Hero + 固定故事场景（#story）** — 场景在 scene.ts 中构建，画布 1600x1000：(1) 天空 0-520：垂直渐变 Night Indigo（顶部）到 Dusk Violet（y 340）到 Horizon Ember（y 515）；一个低太阳圆盘 r=70 位于 (1190, 470)，Molten Orange，带 Horizon Ember 边缘；三朵扁平云，Dusk Violet 提亮 12%。(2) 陆地，x 0-840：两个起伏山丘剪影，Forest 和更深的 Forest 色调，一条山脊在 x 160 到 430 之间，峰值在 y 250，带 Mist 色山顶，18 棵三角形树（Forest 树干，Acid Lime 树冠，高度 40-90px）分布在 x 440-760，以及一个小型通用工厂方块位于 (650, 470)，带两个烟囱。(3) 海洋，x 820-1600，y 520-770：表面带 Deep Teal，深层带 Abyss，四条细波浪线 Glow Cyan，30% 不透明度，一个倾斜的海床。(4) 岩层 y 770-1000 横跨全宽：带 Strata Rust、Strata Umber、Coal Black，带有五个黑色透镜状化石层和一个圆形油藏位于 (420, 900)。(5) 流动路径（三次曲线）：光合作用从天空 (500, 160) 向下进入森林冠层 (600, 440)，Acid Lime；呼吸和分解从土壤 (560, 520) 回到天空 (420, 180)，Acid Lime 60%；海洋交换为两条平行弧线，在天空 (1150, 200) 和海洋表面 (1250, 560) 之间，一条向下一条向上，Glow Cyan；化石燃料燃烧从油藏 (420, 900) 向上穿过工厂烟囱 (665, 430) 进入天空 (760, 140)，Molten Orange。流量值（Gt C 每年，示意性）：120、120、每个方向 90，以及 1 上升到 10。(6) 储库命中区域：每个储库不可见的矩形，用于活动轮廓。场景上方，hero 文本（步骤 0）：眉题等宽 'AN ILLUSTRATED STORY · 4 MIN'；标题 'Where the carbon goes.'；副行 'Follow one atom of carbon through sky, sea, soil and stone, then choose the century it lands in.'；按钮 'Start the story'（Molten Orange 填充，Night Indigo 文本，Lucide ArrowDown）滚动到步骤 1，以及 'Jump to the scenarios'（轮廓，1.5px Mist 边框）滚动到 #scenarios。按钮下方，三个等宽 chip：'4 RESERVOIRS'、'4 FLOWS'、'3 FUTURES'。
   布局：该区块是一个 800svh 高的滚动轨道，包含一个粘性场景容器（position: sticky; top: 0; height: 100svh; 全宽），SVG 以 100% 宽度和高度填充，以及一个由七个步骤面板组成的覆盖列，在其上滚动。Hero 文本（步骤 0）位于左下：left 6vw，bottom 12svh，max-width 640px，无面板背景，背后有径向 Night Indigo 阴影 70%，使文本保持 AA。移动端（<768px）：粘性场景高 58svh，步骤在其下方流动（非覆盖），因此面板在粘性场景下方向上滚动；hero 文本然后位于场景下方的第一个面板中。
   动效：步骤 0 的相机关键帧为完整画布（0 0 1600 1000）。粒子从加载时开始运行。当步骤 1 接近时，hero 文本淡出（不透明度到 0，y -30px）。
3. **故事步骤 1-6（在 #story 内）** — 每个面板：带 Lucide 图标和储量的等宽标签、Bricolage 标题、2-3 句正文，以及一个小 'ILLUSTRATIVE' 标签。步骤 1 大气（图标 Wind，标签 'ATMOSPHERE · ~900 GT C'）：标题 'The smallest vault.' 正文 'Of the four places that hold carbon, the air holds the least. That is exactly why it is sensitive: add a little, and its share changes fast.' 步骤 2 陆地（图标 Trees，标签 'LAND · ~2,000 GT C IN PLANTS AND SOIL'）：标题 'The forest breathes.' 正文 'Leaves pull about 120 billion tonnes of carbon out of the air each year. Roots, microbes and fires send about the same back. In, out, in, out, like a slow tide.' 步骤 3 海洋（图标 Waves，标签 'OCEAN · ~40,000 GT C'）：标题 'The quiet giant.' 正文 'The ocean holds more carbon than everything else combined. Its surface trades about 90 billion tonnes with the air each year, and slow currents carry some of it down to water that will not see the sky for centuries.' 步骤 4 化石储库（图标 Layers，标签 'FOSSIL RESERVES · ~5,000 GT C'）：标题 'The sealed basement.' 正文 'Coal, oil and gas are ancient plants and plankton, pressed for millions of years. Left alone, this vault leaks almost nothing: a thin thread from volcanoes and weathering rock.' 步骤 5 工业时代（图标 Flame，标签 'FOSSIL FUEL BURNING · 1 → 10 GT C / YR'）：标题 'Then we opened it.' 正文 'Burning fuel now moves about 10 billion tonnes a year from rock to air. That is small next to the forest and ocean trades. The difference is that it only flows one way.' 加上一个大型等宽年份计数器 'YEAR 1850'，运行到 'YEAR 2025'。步骤 6 失衡（图标 Thermometer，标签 'ATMOSPHERE · 600 → 900 GT C'）：标题 'Half stays up.' 正文 'Land and ocean soak up about half of what we add. The rest stays in the air, and the air is the vault that sets the temperature.' 加上大气储量的大型计数器和一个按钮 'See where it leads'，滚动到 #scenarios。储库仪表 HUD：四行（图标、储库名称、等宽储量、一个 120px 条，按对数刻度缩放），活动行使用 Acid Lime。
   布局：桌面端：面板宽 420px，left 6vw，每个在各自的 100svh 槽位中，垂直居中；面板填充 Night Indigo 90%，1px 边框 rgba(198,255,61,0.2)，圆角 20px，内边距 28px。储库仪表 HUD 固定在粘性容器内，top 96px，right 6vw，宽 260px，相同面板样式；在步骤 0 期间隐藏。年份计数器和大气计数器在其面板内以 JetBrains Mono 72px 渲染。移动端：面板全宽减去 16px 边距，最小高度 70svh 槽位，HUD 隐藏，替换为每个面板标签下方的单行等宽储量。
   动效：相机关键帧（x y w h）：步骤 1 大气 300 0 1000 625；步骤 2 陆地 120 220 900 563；步骤 3 海洋 760 300 840 525；步骤 4 化石储库 120 375 1000 625（底边在 1000，岩层填充视图下半部分）；步骤 5 拉出到 200 60 1300 813，使烟囱、油藏和天空都可见；步骤 6 完整画布 0 0 1600 1000。步骤 5 驱动工业值 0 到 1；步骤 6 驱动大气计数器并略微加深天空（天空渐变顶部向 Dusk Violet，20%）。
4. **年度账本（#ledger）** — 眉题 'THE YEARLY LEDGER'。标题 'Big trades, one leak.' 引言 'Each year carbon moves in four main streams. Three of them nearly balance. The fourth does not.' 四行：'Photosynthesis' Acid Lime 条，'Air → land'，'120 Gt C / yr'；'Respiration and decay' Acid Lime 60% 条，'Land → air'，'120 Gt C / yr'；'Ocean exchange' Glow Cyan 双条，'Air ⇄ ocean'，'90 in · 90 out'；'Fossil fuel burning' Molten Orange 条，'Rock → air'，'10 Gt C / yr, one way'。下方，一个净行，带 Ember Pink 条：'Net change in the air'，'+5 Gt C every year'。每个值都带有一个小的等宽 'ILLUSTRATIVE' 上标标签。
   布局：全宽带，Deep Teal 背景，带颗粒叠加。内容最大宽度 1200px：标题块在左侧 4 列，行在右侧 8 列（桌面 12 列网格，24px 间距）。每行：图标、名称（Atkinson 700，20px）、方向标签 Lavender Gray、一个 100% 宽度的条轨道，条宽度与值成比例（120 = 100%）、值等宽右对齐。净行由 1px Mist 20% 分隔线隔开。移动端：单列，行堆叠为名称在条上方，值在下方。
   动效：条在首次进入视图时增长（见设计动效）。化石条每 2.4s 脉冲发光（不透明度 0.7 到 1）。
5. **情景实验室（#scenarios）** — 眉题 'SCENARIO LAB'。标题 'Pick the century.' 引言 'Drag the slider to choose how fast emissions fall. Every curve starts from the same place: today.' 滑块带三个标记停靠点 'Rapid cuts'、'Current path'、'High emissions'，活动停靠点下方有一行描述：Rapid cuts 'Emissions halve by 2040 and reach near zero by 2060.'；Current path 'Emissions plateau, then drift down slowly after 2050.'；High emissions 'Emissions keep rising until late in the century.' 大读数：'+2.5 °C'（默认停靠点 Current path），带说明 'Warming by 2100 compared with the late 1800s · illustrative'。每个停靠点的读数：+1.5、+2.5、+4.0。图表：x 轴 1850-2100，每 50 年一个刻度，y 轴 0 到 5 °C，每 1 °C 一条网格线，一条实线 Mist 历史线 1850-2025，从 0.0 上升到 1.3（手动设定点：1850 0.0、1875 0.0、1900 0.1、1925 0.2、1950 0.3、1975 0.4、2000 0.8、2025 1.3），一个垂直虚线 'Today' 标记在 2025，以及一条投影路径 2025-2100，每 5 年 16 个点。情景数组（2025 到 2100）：Rapid cuts 1.3,1.38,1.45,1.5,1.53,1.55,1.56,1.56,1.56,1.55,1.55,1.54,1.53,1.52,1.51,1.5；Current path 1.3,1.4,1.5,1.6,1.7,1.8,1.9,2.0,2.1,2.2,2.25,2.3,2.35,2.4,2.45,2.5；High emissions 1.3,1.42,1.55,1.7,1.85,2.0,2.2,2.4,2.6,2.8,3.0,3.2,3.4,3.6,3.8,4.0。投影描边颜色在滑块上插值 Acid Lime → Glow Cyan → Molten Orange，曲线下方有 18% 的柔和填充，颜色相同。图表旁边，一条地平线条带：场景天空、太阳、山丘和海洋的 16:5 裁剪（复用符号），其天空渐变随着 --heat 上升向 Ember Pink 和 Molten Orange 混合。
   布局：Night Indigo 背景。桌面端两列（7/5）：左侧图表卡片（圆角 20px，Dusk Violet 35% 填充，内边距 32px，图表 SVG viewBox 0 0 800 400，响应式宽度），右侧一叠读数（Bricolage 800，120px，颜色跟随曲线）、说明、停靠点描述和地平线条带（圆角 16px）。滑块横跨两列下方的完整内容宽度：10px 轨道 Dusk Violet，填充部分为曲线颜色，32px Acid Lime 滑块拇指带 4px Night Indigo 环，停靠点标签在下方 0%、50%、100% 处作为可点击按钮。移动端：所有内容堆叠：读数、图表、滑块、描述、地平线条带；拇指保持 32px 以便触摸。
   动效：滑块是原生 input type range（min 0，max 100，step 1，默认 50），用 CSS 样式化；位置 0-50 插值 Rapid cuts→Current path，50-100 插值 Current path→High emissions；变化时吸附；Left/Right 键移动 1，PageUp/PageDown 和点击停靠点标签在停靠点之间跳转。aria-valuetext 读取例如 'Current path, about 2.5 degrees of warming by 2100'。曲线路径每帧从插值点重建为 Catmull-Rom 样条，转换为三次 Bezier 命令（张力 0.5），从不使用插件变形。
6. **快速问答** — 标题 'Quick questions'。四个手风琴项。'If plants absorb carbon, can we just plant trees?' → 'Trees help, but the forest trade is a loop: what grows also decays or burns. Planting adds a one-time store; it cannot keep up with a one-way flow from rock that runs every year.' 'Will the ocean fill up?' → 'Not fill, but slow down. Warmer water holds less gas, and the extra carbon makes seawater more acidic, which is hard on shells and reefs.' 'How long does added carbon stay in the air?' → 'A large share moves into land and ocean within decades. A smaller share stays for centuries, and some for many thousands of years.' 'Why are all the numbers rounded?' → 'So the story stays readable. The sizes and directions are right; the exact values change from year to year and between studies. See the sources note below.'
   布局：最大宽度 820px 居中。每项一个全宽按钮行（Atkinson 700，20px，Mist），右侧带 Lucide Plus 图标，1px 底部边框 Mist 15%，内边距 22px 0。答案文本 Lavender Gray 18px，最大 64ch。
   动效：高度过渡 280ms，打开时图标旋转 45deg。一次只打开一项。
7. **课堂使用** — 眉题 'FOR TEACHERS'。标题 'Use it in class.' 三张卡片。卡片 1 '15-minute walkthrough'：有序列表 'Scroll steps 1-4 together (5 min)'、'Pause on step 5 and ask what changed (3 min)'、'Let pairs try each scenario and note the readout (5 min)'、'Close with one question from the list (2 min)'。卡片 2 'Three discussion prompts'：'Which flow surprised you most, and why?'、'Why does a small one-way flow matter more than a big two-way one?'、'What would have to change to move the slider left?'。卡片 3 'Print-friendly version'：文本 'A clean, one-column version with all steps, the ledger and all three curves.' 和一个按钮 'Print the story'，带 Lucide Printer 图标，调用 window.print()。
   布局：桌面端三张等宽卡片一行，移动端堆叠，24px 间距。卡片填充 Dusk Violet 40%，1px 边框 Mist 12%，圆角 20px，内边距 28px；每张卡片有一个 40px 顶部图标块，使用其流动颜色（Acid Lime、Glow Cyan、Molten Orange）。一个 @media print 样式表隐藏页头、滑块和场景，将每个故事步骤显示为纯文本，一次性渲染图表及所有三条情景曲线，并使用白底黑字。
   动效：卡片进入时淡入上移 24px，100ms 交错（一次）。
8. **来源说明（#sources）** — 眉题 'ILLUSTRATIVE FIGURES'。标题 'Where the numbers come from.' 段落：'Every figure on this page is illustrative and rounded so the story stays readable. The values sit in the range reported by recent global carbon budget syntheses and international physical-science assessments, but none is copied from a single chart, and the curves are hand-drawn shapes, not model output. Check the latest published assessments before you cite a number.' 列表：'Reservoir sizes: rounded to the nearest 100 or 1,000 Gt C.' 'Yearly flows: rounded to the nearest 10 Gt C, except the fossil flow.' 'Temperature curves: drawn to show direction and spread between futures.' 'Scenario names: plain labels written for this page, not official pathway names.' 署名行：'Story by Mara Okafor · Illustration and code by Teo Lindqvist · Science review by Dr. Inés Carvalho · Version 1.3'。更正说明：'Spotted an error? Tell us at corrections@lowtidelab.example'（纯文本，非表单）。
   布局：Abyss 背景带颗粒，最大宽度 820px 居中，120px 垂直内边距。等宽眉题 Acid Lime，列表带 Lucide Info 图标 Glow Cyan，署名 Lavender Gray 15px。
   动效：除共享的淡入上移外无。
9. **页脚** — 字标 'Lowtide Lab' 和一行 'Small studio, big systems. Illustrated explainers for classrooms and curious people.' 链接回 '#story'、'#scenarios'、'#sources'。底行：'© Lowtide Lab · Figures are illustrative' 以及，仅在提供时，可选的 [CREDIT] 链接右对齐。
   布局：Abyss 背景，1px 顶部边框 Mist 10%，桌面端两列（字标 + 行在左，链接在右），移动端堆叠，64px 垂直内边距。
   动效：无。

## 资产
- 图像：不使用位图图像。整个场景、地平线条带、图表、标志圆环标记和 favicon 均以代码绘制，即在 TypeScript 中构建的内联 SVG（scene.ts、scenario.ts）以及 public/favicon.svg。颗粒效果来自 SVG feTurbulence 滤镜。不下载任何内容。
- 图标：来自 npm 包 'lucide'（ISC）的 Lucide 图标：Wind、Trees、Waves、Layers、Flame、Thermometer、Info、ArrowDown、Printer、Plus、Minus。逐个导入并使用 createIcons 渲染。在 ASSETS.md 中列出 'lucide (ISC), https://lucide.dev'。
- 字体：通过 Fontsource npm 包自托管：@fontsource-variable/bricolage-grotesque（OFL-1.1）、@fontsource/atkinson-hyperlegible 字重 400 和 700（OFL-1.1）、@fontsource/jetbrains-mono 字重 500（OFL-1.1）。在 ASSETS.md 中逐项列出并注明其许可证。

## 禁止事项
- 无后端：不写服务器代码、API 路由、数据库、认证、分析、第三方 API，也不做任何会提交到某处的表单（更正地址为纯文本）。
- 不使用 CDN 的 script 或 link 标签；所有字体、图标和脚本都本地打包。绝不从 fonts.googleapis.com、fonts.gstatic.com 或任何其他字体 CDN 加载字体；使用列出的 Fontsource 包。
- 生产构建必须压缩，不生成 source map，不把 src/ 文件复制进 dist/；vite 的 base 必须为 './'，使所有资源路径都是相对路径。
- 内部链接只能是页内锚点（#story、#ledger、#scenarios、#sources），或指向 ./index.html；绝不链接到裸目录。
- dist/ 保持在 20 MB 以下；完全不用位图图像。
- 必须在 1440x900 和 390x844 下正常工作，控制台零报错，无横向滚动；滑块必须能通过触摸和键盘完整操作。
- 遵循 prefers-reduced-motion，使用设计部分所述的阶梯式静态回退方案。
- 不得复制任何真实报告或教科书中的图表或示意图，也不得把碳数据排布成已知的已发布循环图；所有数字均为标注为 Illustrative 的取整示意值。
- 不得出现气候机构、航天机构、大学、新闻编辑室或能源公司的标志、印章或徽记，也不得出现任何形式的品牌标志。
- 不得使用 RCP、SSP 或其他官方情景名称或代码；滑块停靠点只使用 [SCENARIOS] 中的朴素标签。
- 不得出现吉祥物、角色，或任何已知科学视频频道或滚动叙事出版物的标志性插画风格；保持此处所述的扁平分层海报风格。
- 不得使用现有解释性内容中的文案、标题或数据标签；所有文本均为本提示词中虚构的文案，或针对新变量值改写。
- 不得出现真实人物的肖像（包括科学家和活动人士），不得出现可识别的地标，不得出现真实公司的设施；工厂是通用的双烟囱方块。
- 不得使用商业字体，不得使用受限 UI 库（Aceternity UI、Tailwind Plus / Tailwind UI、购买的模板）的源代码；每个效果都从零构建。
- 不得添加框架（React、Vue、Svelte）或 CSS 框架；技术栈为 Vite + 原生 TypeScript + 原生 CSS + GSAP。
- 除可选的 [CREDIT] 页脚链接外，网站上任何地方都不得提及 VibeFather。
- 所有字符串和数字都保留在 src/content.ts 中；当变量变化时，为新主题重写所有文案和数据，而不是留下碳相关的文本。

---
— Prompt by VibeFather · https://vibefather.ai/t/carbon-cycle-scroll-explainer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
