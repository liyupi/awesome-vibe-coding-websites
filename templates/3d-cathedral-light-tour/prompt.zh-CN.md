> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 3D 大教堂光影之旅

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 的虚构 [BUILDING_NAME] 构建一个单页第一人称建筑导览，以原创的 [ARCHITECTURE] 室内呈现，面向 [AUDIENCE]。默认是一座完全用 Three.js 图元和自定义 BufferGeometry 建模的哥特式大教堂中殿。全视口的门槛视图通向六个与滚动联动的建筑站点；一个共享的时段滑块会改变太阳、彩色玻璃辉光和彩色地面投影。当变量值变化时，保留六站导览、编辑式布局、照明控件和现场笔记结构，但重新设计程序化建筑、站点说明、尺寸和视觉细节，以适配新的 [ARCHITECTURE] 和 [BUILDING_NAME]。

- 受众：[AUDIENCE]，以及教育工作者、博物馆讲解员、设计师和好奇的访客——他们能从同时看到建筑结构与日光中获益。默认文案介绍核心哥特式词汇，不预设建筑学背景。
- 目标：让访客识别六个主要建筑元素，理解其结构或空间用途，并观察窗户位置和时段如何改变彩色光线。主要操作 [PRIMARY_CTA] 从门槛推进到导览路线；现场笔记控件提供无需滚动的直达每个站点的方式。
- 语调：沉思、精确、亲切，且具有电影感。使用简短的陈述式说明和清晰标注的示意尺寸。体验应像一场私密的建筑展览，而非恐怖场景、奇幻游戏、宗教仪式、房产列表或通用落地页。

## 技术栈
- 框架：Vite 6 + TypeScript
- 样式：原生 CSS（Vanilla CSS）
- 库：three（MIT）、lucide（ISC）、@fontsource-variable/newsreader（OFL）、@fontsource-variable/inter（OFL）、@fontsource/ibm-plex-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 Vite 并启用严格 TypeScript。在 vite.config.ts 中设置 base: './'、build.outDir: 'dist'、build.emptyOutDir: true 和 build.sourcemap: false；npm run build 必须只输出静态生产文件。不要替换为 React、其他渲染器、Tailwind、滚动库或全局状态包。
  - 仅安装 three、lucide、@fontsource-variable/newsreader、@fontsource-variable/inter 和 @fontsource/ibm-plex-mono 作为运行时依赖，外加 Vite、TypeScript 和 @types/three 作为开发依赖。所有字体、脚本和图标均在本地导入。
  - 创建 src/content.ts 作为已解析变量值、导航、主视觉文案、六个游览站点、相机关键帧、现场笔记、光照预设、标签和页脚文案的唯一来源。在其中包含默认的 [BRAND]、[BUILDING_NAME]、[ARCHITECTURE]、[AUDIENCE] 和 [PRIMARY_CTA] 值，当值变化时重写所有架构特定内容，并且绝不让方括号变量标记可见。
  - 将场景代码组织为建筑几何、彩色玻璃、材质、光照、相机路线、投影和渲染等模块；将 DOM 代码分开用于导航、字幕、控件、图表和无障碍。使用一个共享状态，包含 tourProgress、activeStop、timeMinutes、lookOffset、menuOpen、quality 和 webglAvailable。
  - 使用场景单位作为示意米。默认中殿宽 16m，中央走道 6m，拱顶高 22m，六个 8m 开间，后殿墙位于 z=-52。在 x=±4.8 和 z=4,-4,-12,-20,-28,-36,-44 处放置七对结构墩。为每个墩设置石芯和十二根附墙柱。用成对二次曲线构建尖拱，每个开间四段弯曲肋段使用 TubeGeometry，薄的自定义 BufferGeometry 拱顶腹板，带有细微程序化顶点颜色变化的石地板，以及在 x=±7.9 处六个开间中心的十二扇抽象柳叶窗。
  - 用彩色几何网格和深色铅条创作原创抽象彩色玻璃：仅圆形、菱形、碎片和简单玫瑰窗几何，不出现人物、圣徒、纹章、文字或复制的教堂图案。将简化的玻璃形状复制为透明加法地板投影网格，位于地板上方 0.015m；不要使用图像纹理、贴花下载或拍摄的光线。
  - 对石头和地板使用 MeshStandardMaterial，对玻璃使用 MeshPhysicalMaterial，ACESFilmicToneMapping，曝光 1.05，一个投射阴影的 DirectionalLight，一个 HemisphereLight，最多三个低强度彩色 SpotLights，以及克制的场景雾。桌面端像素比上限为 1.5，移动端为 1.25，仅在桌面端使用 1024px 阴影贴图，在移动端减少灰尘和几何细节，并在游览位于视口外或文档隐藏时暂停渲染。
  - 从 360–1200 分钟（含）以 15 分钟步长创建时间模型。令 u=(minutes-360)/840，太阳高度角=sin(πu)×58°，方位角=75°+210°×u，太阳强度=0.25+2.25×sin(πu)，半球强度=0.12+0.38×sin(πu)，玻璃自发光强度=0.3+1.1×sin(πu)，投影不透明度=0.12+0.58×sin(πu)。从相同的 u 移动、旋转、倾斜和缩放投影几何；投影长度为 clamp(8,18/max(tan(elevation),0.18),32) 米。在黎明和黄昏附近暖化光线，但不要让正午变成纯蓝色。
  - 提供一个原创的内联 SVG 中殿插图作为无 WebGL 回退，高亮当前站点，并带有由相同时间输入控制的简化彩色地板投影。保持所有字幕、现场笔记、预设控件和导航在没有画布或 WebGL 的情况下可用；绝不显示空白场景或浏览器警报错误。
  - 仅对 Menu、X、ArrowDown、ChevronLeft、ChevronRight、RotateCcw、Sun 和 BookOpen 使用 Lucide。为每个图标按钮提供无障碍文本标签和至少 44px 的触摸目标。在 src/styles.css 中集中响应式规则，包含可见的键盘焦点和安全区域内边距，支持 1440×900 和 390×844 且无水平溢出或控制台错误，并在拆卸时释放几何体、材质、监听器和渲染器。

## 变量
- [BRAND] — Atlas 或展览名称（默认：“Vault & Light Atlas”）。虚构的教育项目名称，用于页眉、主视觉介绍和页脚；绝不是真实机构或 AI 品牌。
- [BUILDING_NAME] — 虚构建筑（默认：“Alderquay Cathedral”）。贯穿整个导览的虚构建筑名称；它不得指向或 closely imitate 真实主教座堂。
- [ARCHITECTURE] — 建筑风格（默认：“Gothic”）。用于程序化几何、词汇、材质、玻璃图案及全部六段说明的建筑方向。
- [AUDIENCE] — 受众（默认：“architecture students”）。小写描述性受众短语，在介绍文案中紧接 for 之后读起来自然。
- [PRIMARY_CTA] — 主要操作（默认：“Begin the light tour”）。短按钮标签，用于从入口推进到下一个建筑站点。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接至 https://vibefather.ai/t/3d-cathedral-light-tour（默认：是；删除此行即可移除）

Pages & Sections 下的文案按默认值撰写。如果你的取值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 赭黑色（Umber black）`#12110F` — 页面背景、最深的建筑阴影，以及画布清除色。
- 胡桃木面板色（Walnut panel）`#1B1916` — 页眉、说明文字、灯光控制台和移动端菜单表面，不透明度 92–96%。
- 象牙色（Ivory）`#F2ECE1` — 主标题、激活标签和高对比度正文。
- 石灰岩色（Limestone）`#B8AA93` — 程序化石材、次级标题和建筑图解。
- 尘灰色（Dust gray）`#A69B8B` — 次级文案和非激活标签，字号不小于 13px。
- 做旧金色（Aged gold）`#D8B26E` — 仅用于激活站点、范围滑块拇指、焦点轮廓、关键太阳光线和主操作。
- 红宝石玻璃色（Ruby glass）`#A83B4B` — 一个抽象彩绘玻璃系列及其对应的地面投影。
- 钴蓝玻璃色（Cobalt glass）`#3D628E` — 第二个抽象彩绘玻璃系列及其对应的地面投影。
- 青绿玻璃色（Teal glass）`#4C8078` — 第三个抽象彩绘玻璃系列及其对应的地面投影。
- 琥珀玻璃色（Amber glass）`#D9A44A` — 第四个抽象彩绘玻璃系列及暖色透射光点缀。

### 字体排印
- 主视觉、建筑站点标题和章节标题：Newsreader Variable（OFL），字重 400/500/600
- 正文、按钮、说明文字和控件：Inter Variable（OFL），字重 400/500/600
- 站点编号、时间读数、尺寸和图解标签：IBM Plex Mono（OFL），字重 400/500

### 布局与动效
- 间距：使用 8px 基础单位，内容最大宽度 1440px，桌面端边距 40px，移动端边距 20px。普通区块使用桌面端 112px、移动端 76px 的垂直内边距，采用 12 列网格和 24px 间隙。正文行宽保持在 50 到 66 个字符之间。说明文字内边距为桌面端 28px、移动端 20px；灯光控件间隙为 12–16px。保留桌面端 72px、移动端 64px 的页眉净空。
- 圆角：按钮和范围控件使用 2px，说明文字和灯光控制台使用 6px，主要区块或现场笔记行不做圆角。避免通用的浮动玻璃卡片网格。圆形仅保留给进度点和太阳符号控件。
- 动效：首次进入时，主视觉文案以 16px 上移在 550ms 内显现，阈值相机在 900ms 内从 z=9 缓动到 z=7。进入后相机仅由滚动和刻意的视线输入控制；当请求减少动效时，移除这两种入场运动。
- 动效：将归一化的导览进度 0、0.2、0.4、0.6、0.8、1 直接映射到六个相机关键帧。使用 smoothstep 插值相机位置和注视目标，然后调用 lookAt；绝不使用可能偏离滚动的基于时间的触发器。不要劫持滚轮、吸附页面或阻止原生滚动。
- 动效：在每个站点，允许水平拖拽在当前注视目标周围增加最多 ±30° 偏航，垂直拖拽或指针移动增加最多 ±18° 俯仰。重置视图仅移除这些偏移。在触摸屏上，水平拖拽环顾四周，而垂直触摸移动继续滚动文档。
- 动效：一天中时间的变化从单个 timeMinutes 值更新太阳、半球光、玻璃自发光强度、聚光灯、投影几何、SVG 图解和读数。除非请求减少动效，否则在 180ms 内平滑视觉光照变化；显示的数字值立即更新，且没有自动昼夜循环。
- 动效：说明文字、菜单、预设按钮和现场笔记返回链接使用 160–220ms 不透明度和最多 6px 位移。激活站点变化不得等待长时间交错，所有文本保留在 DOM 中供辅助技术使用。
- 动效：一个克制的尘埃场，桌面端 180 个或移动端 60 个尘埃微粒，可在光束内缓慢漂移。在 prefers-reduced-motion 下停止尘埃、入场缓动、视线平滑和光照插值；滚动随后立即选择离散相机状态，同时每个站点和手动控件仍然可用。
- 图像：唯一的主视觉是一个原创的高工艺程序化 Three.js [ARCHITECTURE] 室内场景，以第一人称视平线观看。默认场景必须立即通过重复的簇柱、尖拱廊、肋状拱顶、高大的抽象彩绘玻璃长窗、温暖的石灰岩和石地面上斑斓的光线，读作哥特式教堂中殿。所有几何体、玻璃设计、材质变化、尘埃和投影均在代码中生成。不使用照片、AI 生成图像、下载的模型、HDRI、纹理贴图、宗教人物、可识别地标、人物或标志。原创内联 SVG 提供建筑剖面和无 WebGL 回退；Lucide 仅提供界面图标。

## 页面与区块
### [BRAND] — [BUILDING_NAME] (`index.html`)
1. **六站中殿导览与共享光照控制** — 将纯文档标题设为 [BRAND] — [BUILDING_NAME]，并用三条嵌套的尖拱线条创作一个原创 favicon。固定页眉包含 [BRAND]、一个小号 '[ARCHITECTURE] / INTERIOR STUDY' 标签，以及指向 './index.html#tour'、'./index.html#light' 和 './index.html#notes' 的链接，标签分别为 Tour、Light study 和 Field notes。移动端 Menu 按钮会在全宽面板中打开相同的链接。在滚动外壳上设置 id='tour'。首屏为第 00 站 THE NAVE：眉题 '[BUILDING_NAME] / A PROCEDURAL ARCHITECTURE TOUR'；H1 'A cathedral, read in light.'；正文 '[BUILDING_NAME] is a fictional [ARCHITECTURE] interior built entirely in code. Follow six architectural stops and change the sun to see how structure shapes daylight.' 主按钮 '[PRIMARY_CTA]' 前进至第 01 站；次按钮 'Read field notes' 跳转至 './index.html#notes'。展示三条紧凑事实：'6 BAYS'、'22 M VAULT CROWN' 和 '06:00–20:00 LIGHT RANGE'，均在现场笔记中标注为示意性数据。接下来的五个说明状态为：01 CLUSTERED COLUMNS，'Many shafts. One structural pier.' — 'Twelve engaged shafts gather around each stone core. The lower bundle supports the arcade while the upper shafts continue visually into the vault ribs.'；02 POINTED ARCHES，'A curve with a steeper purpose.' — 'Two arcs meet at a point, directing thrust downward and allowing a taller opening than a round arch of the same span.'；03 RIBBED VAULTS，'The ceiling becomes a visible framework.' — 'Four curved rib segments meet above each bay, giving the stone ceiling a legible skeleton while thinner webs fill the spans between.'；04 CLERESTORY & STAINED GLASS，'Openings that edit the sun.' — 'High windows admit daylight above the arcade. Abstract amber, ruby, cobalt, and teal glass separates that light into shifting patches of color.'；05 APSE，'Structure and light arrive together.' — 'The central axis ends beneath a faceted oculus. Piers, vault ribs, and floor projections converge to make the destination visible from the threshold.' 每个说明包含其 01–06 进度标签、一条简短的 'Look around' 提示、Previous 和 Next 按钮，以及 Reset view。一个常驻光照控制台包含 Sun 图标、一个标注为 Time of day 的范围输入、一个如 '16:30 / AFTERNOON' 的输出，以及小的 06:00 和 20:00 端点；默认 timeMinutes 为 990。其值保持与后续光照研究控件同步。
   布局：使用 600svh 滚动外壳，搭配 sticky 100svh 场景。全出血画布位于微妙的从左到右 #12110F 可读性渐变之后，绝不置于浏览器模型内。桌面端第 00 站时，主视觉文案占据第 1–5 列并垂直居中；H1 为 Newsreader 84px/0.96 字重 500，正文为 Inter 17px/1.65，事实在 CTA 下方形成一行以边框分隔的排列。第 01–05 站时，说明占据第 8–12 列，背景为 #1B1916 94%，带精细石灰岩边框，同时建筑保持主导地位。光照控制台位于底部居中，宽 460px，高不超过 104px；六个进度点及可访问的站点名称位于其上方。使用场景米制下的相机关键帧（位置；注视目标）：00 (0,2.2,7; 0,10,-32)、01 (-2.4,2.3,-1; -4.8,8,-4)、02 (1.8,2.4,-10; 0,12,-16)、03 (0,2.5,-18; 0,21,-24)、04 (2.6,2.4,-29; 7.8,10,-32)、05 (0,2.5,-41; 0,11,-52)。在 390×844 下，使用 64px 页眉，H1 为 48px/1，主视觉文案从 104px 开始、20px 边距，全屏画布，光照控制台距底部 16px、宽度 calc(100%-32px)。后续说明位于控制台上方，高度不超过 42svh 并支持内部滚动，20px 内边距，34px 标题，Previous/Next 控件始终可见。保持六个 44px 进度目标在一行内，且绝不用控制台覆盖活动说明。
   动效：根据滚动进度驱动相机经过六个精确关键帧，保持活动说明与相机处于同一站点索引。第 00 站文案仅在访客向第 01 站前进时淡出。主 CTA 和 Previous/Next 控件滚动到对应的归一化外壳位置，而非仅改变覆盖层。注视拖拽临时偏移偏航和俯仰，不改变相机位置或滚动进度；Reset view 恢复关键帧目标。时间滑块绝不移动相机。根据窗口几何更新投影形状，使用其自身的透明材质，而非静态装饰渐变，并使默认 16:30 视图与 08:00 和 12:30 明显不同。
2. **交互式光照研究与建筑剖面** — 设置 id='light'。眉题：'01 / LIGHT STUDY'。标题：'One room. Fourteen hours of daylight.' 导语：'Move from 06:00 to 20:00 in 15-minute steps. The sun, glass brightness, and floor projections share the same time value.' 在文案旁，绘制一个穿过单个开间的原创 SVG 侧剖面，包含高侧窗开口、标注的太阳光线，以及石地面上的彩色多边形。标注文字为 'High opening'、'Changing incidence' 和 'Colored projection'。添加三个预设按钮：'08:00 / Morning'、'12:30 / Midday' 和 '17:30 / Late afternoon'，每个带 aria-pressed 状态，另加第二个完全同步的 Time of day 范围。读数面板使用设定公式显示 TIME、SOLAR ELEVATION 和 PROJECTION LENGTH；在默认 16:30 下分别为 16:30、约 41° 和约 21m。将所有值标注为 'Illustrative model'。按钮 'See this light in the nave' 保留所选时间并滚动到导览第 04 站。
   布局：使用 12 列网格，SVG 剖面位于第 1–7 列，桌面高度 520px，控件位于第 8–12 列。SVG 置于微妙的建筑网格上，无外部图像，所有标签至少 12px。控件以细线分隔，而非卡片堆叠；主范围为全宽，预设形成三列行。读数形成三个等宽列，数值使用 IBM Plex Mono。移动端 SVG 高 300px，预设保持三列并带紧凑标签，读数仅在需要时换行为单列，返回按钮变为全宽。
   动效：更改任一范围或预设时，即使画布在屏幕外也更新实际的 Three.js 光照状态，然后在同一帧内更新 SVG 光线角度、投影多边形、时间输出、仰角和长度。仅对 SVG 光线和多边形以 180ms 透明度/变换过渡进行动画，除非请求减少动效。无自主阳光循环、闪烁玻璃或装饰性粒子背景。
3. **六条建筑现场笔记** — 设置 id='notes'。眉题：'02 / FIELD NOTES'。标题：'A structure you can read twice.' 引言：'The tour explains each element in place. These notes keep the same six ideas available as text, with sample dimensions for the fictional [BUILDING_NAME].' 创建六条全宽行而非卡片：01 NAVE — '6 repeated bays' — 'A clear central axis organizes movement, view, and daylight from threshold to apse.'；02 CLUSTERED PIERS — '12 engaged shafts per pier' — 'The bundled profile divides a large support into finer vertical lines that continue into the arcade and vault.'；03 POINTED ARCADES — '8m bay spacing' — 'Paired arcs meet above each opening, making the bay rhythm and downward load path visible.'；04 RIBBED VAULTS — '4 rib segments per bay' — 'Curved ribs meet at a central boss while thinner webs complete the ceiling surface.'；05 CLERESTORY GLASS — '12 abstract lancets' — 'High geometric panels filter daylight through amber, ruby, cobalt, and teal without narrative figures.'；06 APSE & OCULUS — '1 axial faceted oculus' — 'The final opening anchors the long view and gives the colored light a destination.' 每行包含一个带 ChevronRight 的文本按钮 'View in tour' 及目标站点索引。添加一条小注：'All geometry and dimensions are illustrative, not a survey of a real building.'
   布局：标题和引言占据第 1–4 列，桌面端在 104px 处保持 sticky。六行占据第 5–12 列，每行含 52px 编号列、34% 术语与尺寸列、灵活描述列和 112px 返回链接列。行有顶部细线和 28px 垂直内边距。移动端无 sticky 列；每行变为两列编号/内容网格，术语、尺寸、描述和返回链接堆叠在内容列内。长术语换行，任何行都不变为水平滚动器。
   动效：每行使用一次 160ms 透明度显现，无延迟空白状态。View in tour 滚动到精确匹配的关键帧，保留 timeMinutes，重置注视偏移，并将键盘焦点移至目标说明标题。悬停和聚焦仅改变返回链接颜色并将其 chevron 平移 3px。
4. **Closing restart and footer（结尾重启与页脚）** — Closing eyebrow（结尾眉题）：'[BUILDING_NAME] / COMPLETE THE ROUTE'。H2：'Follow one ray. Read the whole room.' 正文：'Return to the threshold, choose another hour, or revisit any structural detail in the field notes.' 主按钮 'Restart at 16:30' 将 timeMinutes 重置为 990，清除 look offsets，并滚动到 stop 00。次按钮 'Explore the light study' 跳转到 './index.html#light'。页脚左侧：'[BRAND] — A procedural [ARCHITECTURE] interior study.' 页脚中间：'Fictional building. Illustrative geometry and daylight.' 页脚右侧：Tour、Light study 和 Field notes 链接，使用 './index.html#' 锚点，若提供可选的 [CREDIT] 链接则紧随其后。不要添加 newsletter、ticket sales、visiting hours、contact form、social links、dates，或与宗教机构有关联的声明。
   布局：Closing section（结尾区块）有顶部细线和 7/5 网格：H2 位于第 1–7 列，使用 Newsreader 64px；正文加按钮位于第 8–12 列。页脚是独立的三列行，垂直内边距 28px，等宽字体 12px。移动端上，结尾正文堆叠在 44px 的 H2 下方，按钮变为全宽，页脚链接换行且行间距 20px。
   动效：进入时使用单次 220ms 淡入和 10px 上移。Restart 使用原生滚动和指定的状态重置；reduced motion 下立即完成。tour canvas 离开视口后，不自动重播、不循环相机、不播放背景动画。

## 资产
- 字体：通过 @fontsource-variable/newsreader 自托管 Newsreader Variable 400/500/600，通过 @fontsource-variable/inter 自托管 Inter Variable 400/500/600，通过 @fontsource/ibm-plex-mono 自托管 IBM Plex Mono 400/500。仅导入所需的本地包文件。在 ASSETS.md 中列出本地包路径，并注明以下来源与作者：https://fontsource.org/fonts/newsreader 由 Production Type 提供，https://fontsource.org/fonts/inter 由 Rasmus Andersson 提供，https://fontsource.org/fonts/ibm-plex-mono 由 IBM 提供；三者均记录为 OFL。
- 图标：仅使用本地安装的 lucide 包中的 Menu、X、ArrowDown、ChevronLeft、ChevronRight、RotateCcw、Sun 和 BookOpen。不要下载品牌图标或创建吉祥物。在 ASSETS.md 中列出本地 lucide 包路径，来源为 https://lucide.dev，作者为 Lucide Contributors，许可证为 ISC。
- 图像：不使用任何位图图像或外部视觉资产。教堂、彩色玻璃、材质变化、尘埃和彩色地面投影均为原创的程序化 Three.js 几何体与材质；建筑剖面图和无 WebGL 回退方案为原创内联 SVG。不要下载照片、AI 生成图像、纹理、模型、环境贴图或占位图像。在 ASSETS.md 中记录：本模板的所有视觉几何体与图表均由代码生成。

## 禁止事项
- 不得在渲染出的网站中使用或提及 Kimi、Kimi K3.1 Pro 或 3D Make，也不得复用它们的名称、字标、徽标、产品标识、中文文案、界面布局或标志性视觉细节。
- 不得复制参考大教堂的确切几何结构、尺寸、彩色玻璃设计、场景构图、相机路径、源代码、提示词文本、截图、模型、纹理、图标、音频、视频或任何其他参考素材。
- 不得指认任何真实大教堂，也不得复制其平面图、立面、艺术品、纹章、宗教人物、标语或机构标识。建筑、抽象玻璃图案、注释和尺寸必须保持原创且为虚构。
- 不得使用真实人物的肖像、第三方品牌、商业字体、受限库源码或可识别的商业建筑可视化作品。
- 不得加载照片、AI 生成图像、外部 3D 模型、HDRI、纹理贴图、占位图服务、品牌徽标或来自 CDN 的媒体。完整场景必须由代码生成，且 dist/ 必须保持在 20MB 以下。
- 不得添加后端、API 路由、数据库、身份验证、分析、远程表单、跟踪像素或第三方 API 调用。导览、灯光、预设、导航和回退行为必须完全在浏览器中运行。
- 不得从 Google Fonts 或任何其他 CDN 加载字体。仅使用列出的本地 Fontsource 包及其指定的 OFL 字体和字重。
- 不得更改固定的 Vite、TypeScript、Three.js 和原生 CSS 技术栈；不得添加 React、Tailwind、物理引擎、全局状态包、滚动劫持库，或为已用插值指定的效果添加动画依赖。
- 不得生成 source map、将 src/ 复制到 dist/、使用绝对资源 URL 或要求服务器。将 Vite base 设为 './'，并确保 dist/ 仅包含生产静态构建产物。
- 不得使用裸目录链接或创建空详情页。这是一个 index.html 页面；每个导航链接必须使用 './index.html#tour'、'./index.html#light' 或 './index.html#notes'。
- 不得将关键建筑信息隐藏在仅画布内文本中。每个停靠点和现场笔记都必须以可访问的 HTML 形式存在，具备键盘可操作控件、可见焦点、有用的 aria 标签，以及有意义的无 WebGL SVG 回退。
- 不得让环视手势困住垂直页面滚动。在移动端使用水平拖动进行环视并保留垂直触摸滚动，保持目标至少 44px，并在 390×844 下验证无字幕裁切、灯光控件重叠或水平溢出。
- 不得自动播放相机路线或日光循环、强制滚动吸附或忽略减少动态效果设置。按要求移除尘埃、平滑和装饰性运动，并保留即时手动状态更改。
- 不得显示日期、虚假访客数量、门票优惠、未经核实的历史声明、真实机构隶属关系，或声称示意性尺寸和日光读数来自实测建筑。
- 不得在演示中添加 SEO 元数据块、结构化数据、站点地图说明、关键词堆砌标题或模板提供商品牌标识。纯文档标题、简单 favicon 和可选的 [CREDIT] 页脚链接即可。
- 不得在 src/content.ts 之外硬编码仅默认架构文案，或让变量标记可见。当变量更改时，需一并重写程序化样式、停靠点名称、说明、尺寸、玻璃图案、图表以及所有架构特定文案。

---
Inspired by 3D Cathedral Light Tour — https://www.kimi.com/showcases/3dmake
— Prompt by VibeFather · https://vibefather.ai/t/3d-cathedral-light-tour · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
