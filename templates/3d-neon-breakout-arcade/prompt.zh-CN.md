> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 3D 霓虹打砖块街机（3D Neon Breakout Arcade）

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个完整的单页 3D 打砖块游戏，场景设在 [CITY] 的 [VENUE] 中一个带网格的夜间球场。第一个画面就是亮起的竞技场本身：冷色调的穹顶天空、深色的网格地板、前方的吧台，以及更远处的第一轮砖块，视图旁边有一张开始卡片。五个精心设计的轮次会改变砖块布局和球速。玩家拥有火花、分数，以及三种下落式拾取物：Scatter、Needle 和 Girder。默认牌组：[TAGLINE]。

- 受众：独立开发者和前端开发者，他们想要一个完成度高的静态 Three.js 街机游戏，可用鼠标、方向键和手指拖动来游玩，并且可以通过改文字而不是改球场来换肤。
- 目标：交付一台可重复游玩的五轮街机：一张悬浮在动态球场上的开始卡片、鼠标与触摸瞄准、键盘微调、碎裂、炽热的球轨迹、科幻风格读数、通关与失败卡片、暂停、合成音效，以及本地最佳成绩。第二套名称必须保持相同的地图、速度、颜色和拾取规则。
- 语气：干练、具体、本地化，像夜班服务员和常客说话。简短的美式英语。不要军用船体腔调，不要死亡口号，不要注水记分板。

## 技术栈（Stack）
- 框架（Framework）：Vite 6 + TypeScript + Three.js
- 样式（Styling）：原生 CSS（Vanilla CSS）
- 库（Libraries）：three（MIT）、@fontsource/syne（OFL）、@fontsource/sora（OFL）、@fontsource/share-tech-mono（OFL）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置（Setup）：
  - 用 Vite 的原生 TypeScript 模板搭建脚手架。脚本：dev=vite，build=tsc && vite build，preview=vite preview。包名是 BRAND 的 slug，而不是固定的模板 id。将 vite base 设为 './'，build.outDir 设为 dist，build.emptyOutDir 设为 true，build.sourcemap 设为 false。tsconfig：strict 为 true，noEmit 为 true。
  - 安装 three 0.170.0 或更新版本，以及作为开发依赖的 Vite 6 和 TypeScript 5，并将三个 Fontsource 包作为运行时依赖。不要添加 React、物理引擎、游戏框架、补间库、图标包或独立的后期处理包。
  - 从这些包中导入 Syne 的 700 和 800 字重、Sora 的 400、500 和 600 字重，以及 Share Tech Mono 的 400 字重。CSS 字体族为 Syne、Sora 和 Share Tech Mono。不要从 CDN 加载字体。
  - 泛光（Bloom），仅桌面端：从 three/addons 导入 EffectComposer、RenderPass、UnrealBloomPass 和 OutputPass。强度（Strength）0.25，半径（radius）0.32，阈值（threshold）0.82。OutputPass 是最后一个 pass。在宽度低于 800px 时以及执行下方性能削减后跳过 composer。
  - 使用模块 src/content.ts、main.ts、arena.ts、levels.ts、sim.ts、hud.ts、audio.ts 和 styles.css。将所有面向玩家的字符串保留在 content.ts 中。模拟代码读取该模块，绝不显示原始 token。
  - 如果 BRAND、VENUE、CITY 和 ATTENDANT 为默认值，则使用 Glass Pier 文案表。如果 VENUE 为 Millhouse Rec，则严格使用 Millhouse 文案表。对这四项的任何其他更改都会重写 content.ts 中的服务员句子、营业时间行和五个回合名称，以适配新词。仅更改 TAGLINE 会替换副标题并保留回合名称。地图、速度、颜色、坐标和拾取格永不改变。
  - 仅在 localStorage 中持久化最佳分数整数和静音标志。键为 BRAND 的 slug 加上 -cabinet，因此 Lumen Dock 变为 lumen-dock-cabinet。Slug：小写，非字母数字转为单个连字符，修剪连字符。无日期。不从网络解析任何内容。
  - 一个 index.html，lang=en，viewport 带 viewport-fit=cover。文档标题为 BRAND、一个长破折号，然后是 VENUE。全视口 canvas 加 HTML 覆盖层。Body margin 0，overflow hidden，背景为 Ink。无路由。

## 变量
- [BRAND] — 机柜名称（默认：“Lumen Dock”）。在起始卡片、读数显示、文档标题和保存键上虚构的机柜名称。
- [VENUE] — 场地（默认：“Glass Pier”）。虚构的地点。用于眉题、最终清晰标题和营业时间行。
- [CITY] — 城市（默认：“Harborline”）。场地旁的虚构城市。仅文字；球场不变。
- [ATTENDANT] — 服务员（默认：“Nia Pell”）。管理机柜人员的虚构名字和姓氏。不是真实人物。
- [TAGLINE] — 起始卡文案（默认：“Keep the spark and clear the pier.”）。起始卡片上机柜名称下方的一句话。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接到 https://vibefather.ai/t/3d-neon-breakout-arcade（默认：是；删除此行以移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- Ink `#07110F` — 页面背景、渲染器清屏色、开始卡片、天空天顶、雾
- Court `#0C1714` — 地板平面和读数芯片
- Grid `#24584F` — 地板线条和卡片边框
- Horizon `#1C6B62` — 天空穹顶地平线
- Teal `#1EC8B8` — 青色砖块、护栏、主按钮、火花点、焦点环
- Sea `#7DFFB2` — 海色砖块
- Ice `#9AD7FF` — 冰色砖块和破损的青柠砖块
- Lime `#E4F27A` — 第一枚芯片前的两击砖块、Girder 拾取物、远端边缘
- Hot `#FF4D1C` — 球、球光、中心刻度、Needle 光束、Scatter 拾取物
- Paper `#E7F3EE` — 标题、HUD 数字、挡板主体
- Dim `#8AA39A` — 眉题、标签、营业时间行、署名
- Rail `#12312C` — 侧护栏和背板

### 字体排印（Typography）
- 开始卡片上的机柜名称：Syne（OFL），字重 700/800
- 正文、按钮和 HUD 标签：Sora（OFL），字重 400/500/600
- 分数、回合和计时器：Share Tech Mono（OFL），字重 400

### 布局与动效（Layout & motion）
- 间距：以 4 px 为基准。桌面卡片内边距 28 px，HUD 内缩 16 px。移动端内缩 12 px 加上安全区域内缩。按钮高度至少 44 px。手机上的开始面板保持在 46 vh 以内，并在自身内部滚动。游戏进行时，球场中心保持不被界面元素遮挡。
- 圆角：开始、暂停、通关、失败和控制卡片为 12 px，带 4 px 硬偏移阴影，颜色为 Grid，无模糊。按钮为 8 px。火花点为 8 px 菱形。世界网格保持锐利，球、服务员头部和 Scatter 的小球体除外。
- 动效：固定步长为 1/60 秒。每帧最多运行三步，丢弃剩余时间。使用最新状态渲染。
- 动效：在开始卡片上，相机在 8 秒内沿 x 轴缓动 0.04 个单位。游戏进行时，相机 x 缓动趋向挡板 x 的 0.18 倍，限制在 1.1 以内，平滑系数为 1 - exp(-4 dt)。
- 动效：砖块破碎时，相机偏移最多 0.045 个单位，持续 0.1 秒，缓出，一次只进行一次震动。球轨迹保留最近 10 个位置，间距至少 0.12。
- 动效：Shatter 生成 14 个短生命周期盒子。拾取物以 1.8 Hz 上下浮动 0.05 个单位。覆盖层在 160 ms 内淡入，不位移。
- 动效：在 prefers-reduced-motion 下，取消标题漂移、相机跟随、震动、轨迹、Shatter、拾取物浮动和覆盖层淡入。UI 直接吸附到位。保留球、挡板、光束和回合，因为那是游戏本身的动效。
- 图像：球场、天空、砖块、挡板、球、拾取物、Shatter 和服务员均使用原创 Three.js 几何体绘制。不使用照片、不生成静帧、不使用 HDRI、不下载模型、不使用品牌标识。受光的球场是第一屏的锚点，开始卡片位于其旁。服务员是右侧护栏外的一个无特征人物：身穿 #C5D2CB 的盒状外套，头部为 #E6C4A4 的球体，没有眼睛或嘴巴，戴一顶 Teal 帽子。该人物是虚构的，不是任何真实人物的肖像。其他地方不出现任何面孔。

## 页面与区块
### [BRAND] — [VENUE] (`index.html`)
1. **点亮球场上的开始卡片** — 文档标题：Lumen Dock — Glass Pier，取自 BRAND 和 VENUE。状态：开始、操作说明、发球、游戏、暂停、通关、失败。打开时处于开始状态，第 1 轮已构建完毕，球停在挡板上，挡板居中。眉题，大写 Sora 600，12 px，字距 0.16 em：GLASS PIER · HARBORLINE，取自 VENUE 和 CITY。标题：Lumen Dock，Syne 800，桌面端 64 px，700 px 以下 40 px。副标题，取自 TAGLINE：Keep the spark and clear the pier。值班员行：Nia Pell opens the cabinet after dusk。营业时间：Cabinet 4 on Glass Pier. Open 4 pm to midnight。正文，所有名称集通用：Five rounds. Three sparks. Move the bar with the mouse, the arrow keys, or a finger drag. Click, tap, or press Space to send the ball. Catch Scatter, Needle, and Girder。如果存在最佳成绩，显示 Best 和分组总分。没有存档时隐藏该行。可选的 [CREDIT] 链接出现一次，位于营业时间行下方，12 px Sora，Dim 色。按钮：Play round one（主按钮）和 Controls。焦点置于 Play round one。Millhouse 文案表，仅在 VENUE 为 Millhouse Rec 时使用：当 CITY 仍为 Redloom 时眉题为 MILLHOUSE REC · REDLOOM，否则为 VENUE 和 CITY；值班员行 Ellis Ward leaves the cabinet on after lab hours；营业时间 Room 12 at Millhouse Rec. Open 7 pm to 11 pm；副标题取自 TAGLINE。该表的轮次名称见轮次章节。
   布局：画布填满视口，并在首次点击前渲染球场。在 Play round one 之前隐藏游戏读数。桌面端：一张 400 px 的 Ink 卡片，12 px 圆角，28 px 内边距，Paper 文字，边框 1 px solid Grid，偏移阴影 4 px 4 px 0 Grid，距左侧 16 px 且垂直居中。它覆盖的面积远小于 1440 px 的一半，使砖块、挡板、热球和右栏人物保持可见。移动端：底部抽屉，最大高度 46 vh，内部滚动，同样使用实心 Ink 填充，无模糊。在 390×844 下，天空、至少两排砖块、挡板和热球都位于抽屉上方。如果挡板落到抽屉后面，将移动端开始相机沿 z 轴后移，直到该构图成立。画布背后的背景为 Ink。UI 根元素为 pointer-events none；卡片和按钮设置 pointer-events auto。
   动效：卡片在首帧渲染后 160 ms 内淡入。开始状态下，球保持不动，相机漂移 0.04 个单位。Controls 打开帮助抽屉并返回此处，不开始游戏。Play round one 将状态设为发球，移除卡片，显示读数，此时尚不发射球。减少动效模式下卡片无淡入、无漂移。Enter 激活当前聚焦的按钮。
2. **球场、天空、相机与光照** — 坐标轴：+x 向右，+y 向上，+z 从相机指向砖块。游戏边界：x = ±7.45，后墙 z = 19.35，出界线 z = 0.15。球的高度锁定在 y = 0.52。球不受重力，也不能跳跃。值班员站在 (8.55, 0, 6.4)，在右边界之外，无碰撞：外套盒 0.42 × 0.78 × 0.28，位于 y 0.56；头部球体半径 0.16，位于 y 1.12；帽子盒 0.28 × 0.08 × 0.28，位于 y 1.28；两个腿部盒。人物上方不浮动名牌。
   布局：地板平面 24 × 28，中心 (0, 0, 10)，颜色 Court。网格线每 1 个单位一条，x 从 -8 到 8，z 从 0 到 20，y = 0.015，颜色 Grid，一个 LineSegments。护栏：盒 0.14 × 0.18 × 20.2，位于 x ±7.72，y 0.1，z 中心 10.1，颜色 Rail，自发光 Teal 强度 0.45。背板：平面 15.4 × 2.6，位于 z 19.7，y 1.3，颜色 Rail。远侧唇边：盒 15.4 × 0.12 × 0.16，位于 z 19.55，y 1.15，自发光 Lime 强度 0.35。天空：球体半径 80，位置 (0, -8, 10)，BackSide，ShaderMaterial。在归一化世界 y 从 0.35 到 0.95 上使用 smoothstep，将边缘的 Horizon 混入顶部的 Ink。无太阳圆盘，无紫色。七十个星点，半径 0.045，颜色 #D7EFE8，仅出现在 y > 2 处，使用 mulberry32 种子 5704843 放置。不要使用 Math.random。雾为线性，颜色 Ink，近 28，远 70。桌面相机：位置 (0, 6.15, -3.1)，lookAt (0, 0.7, 12.5)，fov 44。800 px 以下：位置 (0, 8.2, -2.4)，lookAt (0, 1.0, 12.0)，fov 52。近 0.1，远 200。在移动端开始抽屉上，将相机移至 (0, 7.6, -4.2)，lookAt (0, 1.4, 13)，fov 50，并在轮次开始时返回移动端游戏相机。
   动效：星星、地板、护栏和值班员不移动。标题漂移和游戏跟随仅为相机偏移。减少动效模式下，相机保持该视口的基础位置。光照不脉动。
3. **挡板、球与输入** — 挡板是一个盒 2.56 × 0.18 × 0.46，中心 z = 1.35，y = 0.36，颜色 Paper，自发光 Teal 强度 0.25。一个 Hot 刻度块，0.14 × 0.22 × 0.50，位于其中心。Girder 将挡板宽度设为 4.16，持续 8.0 秒，并反向缩放刻度块，使刻度块保持 0.14 宽。钳制中心，使挡板保持在 x ±7.45 内。球是一个 16 段球体，半径 0.20，颜色 Hot，自发光 Hot 强度 0.85，粗糙度 0.32，金属度 0.04。一个子级点光源，颜色 Hot，强度 1.5，距离 6，衰减 2。持球时，球心为 (barX, 0.52, 1.87)。发球始终将 vx 设为 0.28 乘以速度，符号取最后一次水平移动的方向，若挡板尚未移动则为 +1；vz 设为速度平方减去 vx 平方的正平方根。之后的挡板击球使用 offset = clamp((ballX - barX) / halfWidth, -1, 1)，vx = offset * 0.78 * speed，然后将 vx 的绝对值钳制到 0.92 * speed，并重新计算正的 vz。每次反弹后重新归一化到该轮速度。
   布局：指针映射：t = (clientX - rect.left) / rect.width，target = lerp(-6.17, 6.17, clamp(t, 0, 1))，然后钳制到当前挡板限制。鼠标移动设置目标，无需按键。触摸和笔仅在指针按下时设置。ArrowLeft 和 ArrowRight 以每秒 11 个单位移动，在任何同时应用了指针的帧上被忽略。不要绑定 A 或 D。仅从持球状态发射，通过 Space，或在画布上 pointerup 且总移动距离小于 14 px 时发射。拖拽不发射。按下时捕获指针。body 上设置 touch-action none 和 overscroll-behavior none。对 Space、方向键和 Escape 阻止默认行为，以免页面滚动。在失焦、抽屉打开和文档隐藏时清除按下的键。键盘：Escape 关闭 Controls，或在发球和游戏期间切换暂停；M 切换静音；Enter 激活聚焦的主按钮。画布无障碍名称：Three-dimensional breakout on a lit grid court。一个 polite 实时区域播报轮次通关、火花丢失、火花耗尽和最终通关语句，而非每次击球。
   动效：持球随挡板移动。挡板击球后，将球推到 z = 1.87，并在 0.08 秒内忽略该球与挡板的碰撞。每步最多移动 0.18 个单位，因此球不能穿过砖块。如果多个砖块重叠，仅解决最小穿透。翻转最小穿透的轴；如果两个穿透量在 15% 以内，则同时翻转两者。然后按穿透量加 0.01 推出并重新归一化。侧墙翻转 vx。后墙将 vz 翻转为负。拖尾球体：半径 0.06，颜色 Hot，不透明度从 0.35 降至 0，非碰撞体。减少动效模式不绘制拖尾。球的光源保留。
4. **五轮与砖块地图** — 九列，最多六行。砖块盒 1.28 × 0.42 × 0.58。列 x = -5.84 + col * 1.46。行 z = 18.15 - row * 0.86。第 0 行最远。字符，每个字符串长度 9：c teal #1EC8B8 一击，s sea #7DFFB2 一击，i ice #9AD7FF 一击，l lime #E4F27A 两击，连字符表示空。lime 砖块的首次击打得 40 分，将网格切换为 ice，并保留一次击打。摧毁一击砖块得 100 分。摧毁已削弱的 lime 得 160 分。一个几何体，四个缓存材质，粗糙度 0.4，金属度 0.08，自发光强度 0.35，使用砖块当前颜色。轮次速度：7.2、8.1、9.0、9.9、10.8。Glass Pier 名称：Pier Lights、Kelp Gate、Lantern Stack、Tide Teeth、Last Beacon。Millhouse 名称：Lab Lights、Coil Gate、Shelf Stack、Gear Teeth、Last Bell。地图按顺序，远行在前，每行用引号括起且恰好 9 个字符。第 1 轮："ccccccccc" "sssssssss" "iiiiiiiii" "cscscscsc"。掉落：第 2 行第 4 列 Scatter，第 1 行第 1 列 Needle，第 3 行第 7 列 Girder。第 2 轮："cscsicscs" "-s-c-c-s-" "c-scics-c" "-i-l-l-i-" "scscscscs"。掉落：第 0 行第 4 列 Scatter，第 2 行第 0 列 Needle，第 4 行第 8 列 Girder。第 3 轮："lll---lll" "ccc---ccc" "sss---sss" "iii---iii" "csc---csc"。掉落：第 1 行第 1 列 Scatter，第 2 行第 7 列 Needle，第 4 行第 0 列 Girder。第 4 轮："c-s-c-s-c" "-l-i-l-i-" "c-s-c-s-c" "-i-l-i-l-" "s-c-s-c-s" "-c-s-c-i-"。掉落：第 2 行第 2 列 Scatter，第 3 行第 3 列 Needle，第 4 行第 8 列 Girder。第 5 轮："lclclclcl" "ss-c-c-ss" "ccclllccc" "ii-----ii" "s-c-i-c-s" "cscscscsc"。掉落：第 0 行第 4 列 Scatter，第 2 行第 0 列 Needle，第 5 行第 8 列 Girder。仅当该单元格被摧毁时才排队掉落，仅削弱 lime 时不排队。
   布局：开始一轮会重建砖块，移除球、拾取物、光束和碎裂效果，并放置一个持球。分数和火花跨轮保留。通关一轮加 800 分，然后加一个火花，上限为 5。通关卡片显示 Round clear、轮次名称、PTS 和分组总分，以及 spark returned 或 sparks full。按钮：Next round。第 5 轮之后，卡片标题为场馆名加 clear，因此默认显示 Glass Pier clear。副行：Five rounds。按钮：Play again。当此总分超过已保存整数时显示 New best。Next round 和 Play again 不重新加载页面。Play again 将分数设为 0，火花设为 3，轮次设为 1，并返回发球状态。
   动效：砖块不移动。削弱是即时颜色变化。打开通关卡片会冻结步进。已有的碎裂效果可以完成；卡片打开后不再生成新盒子。减少动效模式移除碎裂效果，保留颜色变化和卡片。
5. **拾取物、光束与碎裂** — 同时最多存在两个拾取物。第三个排队的掉落被忽略；砖块仍然计分。拾取物以每秒 3.5 个单位朝相机下落，在 z < 0.2 时移除。当其 z 在 1.05 到 1.70 之间，且其 x 在挡板半宽加 0.28 以内时接住。接住得 200 分。Scatter 是三个半径 0.08 的小 Hot 球体。接住时，从最旧的活跃球生成最多两个额外球，若无活跃球则从持球生成，角度为该速度的正负 0.45 弧度，速度相同。上限 5 个球，计入持球。提示：Scatter · two more balls、Scatter · one more ball 或 Scatter · court is full。Needle 是一个浅色盒 0.08 × 0.36 × 0.36，颜色 #FFD2C2。在 6.0 秒内每 0.45 秒发射一次，首次发射在接住后 0.1 秒，包括发球期间。光束是一个 Hot 盒，厚 0.06，从 z = 1.75 到第一个 x 与挡板中心重叠在 0.08 以内且 z 在前的砖块，若未命中则到 z = 19.2。它可见 0.07 秒，移除一次击打，并给予与球相同的 40、100 或 160 分。它不反弹。提示：Needle · beam ready。Girder 提示：Girder · bar stretched。再次接住 Girder 将计时器重置为 8.0。Needle 和 Girder 可以同时运行。计时器使用模拟时间，在暂停、隐藏或在卡片上时冻结。
   布局：碎裂：14 个盒子，大小 0.05 到 0.13，寿命 0.5 秒，y 方向重力 -6.5，初始速度 1.4 到 3.4，向上偏置 1.2 到 3.0，颜色在砖块破碎瞬间复制。用 roundIndex * 1000 + row * 10 + col 作为 mulberry32 的种子。上限 160 个活跃盒子；若达到上限，砖块破碎但不生成新盒子。拾取物仅在 y 方向上下浮动。光束不是球的碰撞体。当最后一个砖块破碎时，在同一步进入通关状态，早于任何球越过出界线。
   动效：拾取物浮动为正弦。减少动效模式将拾取物固定在 y = 0.52，且不生成碎裂效果。光束绘制一帧，仍移除击打。减少动效开启时不要震动相机。
6. **读数、提示与结束卡片** — 游戏读数标签，精确为：PTS 带分组整数且无前导零；RND 为 1/5 到 5/5；BLOCKS 为剩余砖块数；SPARKS 为最多五个 8 px 菱形，剩余时填充 Teal，空时描边 Grid，带 SPARKS 标签。轮次名称旁的状态词：持球时为 REST，至少一个球移动时为 LIVE。挡板下方的轮次名称，取自文案表，Sora 字体。能量芯片，底部居中，仅在激活时显示：NEEDLE 4.2 和 GIRDER 6.0，保留一位小数。提示持续 1.3 秒，从不阻挡输入。火花丢失提示：Spark lost · 2 left，使用剩余火花数。失败卡片标题：Out of sparks。副行：RND、轮次编号、中点、轮次名称。然后是 PTS 和总分。按钮：Run it back，使用与 Play again 相同的重置。当总分超过存档时显示 New best。暂停卡片标题：Paused。按钮：Resume、Restart round、Controls。Restart round 重建当前地图并返回发球状态，不改变分数或火花，也不退还火花。在失败时和场馆通关卡片上，若总分更高则保存最佳成绩。
   布局：桌面读数：一行 44 px，距顶部和两侧 16 px。品牌芯片在左侧，Sora 600，最大宽度 28 vw，带省略号。PTS 居中，Share Tech Mono 20 px。RND、BLOCKS 和 SPARKS 在右侧，标签为 Dim 11 px。Pause 和 Sound 是品牌下方的 44 px 文字按钮。轮次名称居中于该行下方。移动端，800 px 以下：第一行为 Pause、品牌、Sound；第二行为 PTS、RND、BLOCKS 和 16 px 等宽字体的菱形点。在 390 px 下无横向滚动。卡片在桌面端为 420 px，移动端为全宽抽屉，侧边内缩 12 px，同样使用 Ink 填充和 Grid 偏移阴影。主按钮填充 Teal，文字 Ink。次按钮透明，Paper 标签。焦点环 2 px solid Teal，偏移 2 px。提示位于能量芯片上方，最大宽度 280 px。
   动效：卡片淡入 160 ms。火花菱形点不脉动。减少动效模式使卡片和提示瞬间切换。状态文字变化即时。读数在开始卡片上隐藏，在发球、游戏、暂停、通关和失败期间显示。
7. **声音、暂停与两个视口** — 声音在 Play round one 之前关闭，该操作是解锁手势，之后开启。按钮显示 Sound on 或 Sound off。M 与按钮一致。持久化静音状态。音调，无音频文件：挡板击球正弦 392 Hz，45 ms，增益 0.06；砖块摧毁方波 620 Hz，40 ms，增益 0.04；lime 削弱三角波 480 Hz，35 ms；墙壁正弦 196 Hz，30 ms；拾取 523 Hz 然后 784 Hz，各 60 ms；火花丢失正弦滑音 360 Hz 到 140 Hz，160 ms；轮次通关 523、659、784 Hz，各 90 ms；场馆通关加 1046 Hz。如果 AudioContext 失败，保持声音关闭，不要循环记录日志。斜坡 20 ms。暂停、隐藏或静音时静默。Controls 标题：How the bar moves。行：Mouse: the bar follows your horizontal position. Arrow keys: move left or right. Finger: drag anywhere on the court. Click, tap, or Space: send the ball while it rests on the bar. Esc pauses. M mutes。按钮：Back。Back 返回到打开它的开始或暂停界面。
   布局：目标是在 1440×900 和 390×844 下实现干净帧，无横向溢出，无控制台错误。光照：半球天空 #B7E6DC 和地面 Court，强度 0.55；方向光 #F2FFF8 强度 1.35，来自 (2.5, 9, -4)；一个 Teal 补光强度 0.35，来自 (-6, 3, 8)。无阴影贴图。ACES 电影色调映射，曝光 1.02，清除颜色 Ink，输出色彩空间 SRGB。像素比 min(devicePixelRatio, 1.75)，800 px 以下为 1.25。如果 180 帧的平均帧时间超过 22 ms，则一次性将像素比设为 1 并禁用泛光。保留规则。如果 WebGL 无法启动，保留开始文案并添加：This browser could not start the 3D view. Try a browser with WebGL enabled。不要循环重试。在视口变化时调整渲染器、相机和合成器大小。遵循安全区域内边距。页面本身不滚动。
   动效：暂停、文档隐藏、通关、失败和操作说明会冻结步进、计时器和球。冻结时声音保持静默。减少动效与性能削减是分开的：游戏玩法保留，仅额外相机、碎裂、拖尾、浮动和淡入淡出被移除。质量削减从不移除轮次、拾取物或触摸瞄准。

## 资源

- 图像：不使用图像文件，也不生成静帧。天空、球场、砖块、酒吧、球、拾取物、碎裂、服务员和拖尾全部用 Three.js 绘制。添加一个原创的 public/favicon.svg：32 viewBox、Ink 圆角矩形、一条 Teal 水平条，以及条上方一个 Hot 圆形，不含字母。在 ASSETS.md 中说明场景由代码绘制，并将该 favicon 列为原创。
- 图标：不安装图标包。Pause、Sound 和 Controls 是文本按钮。Spark 点数是 CSS 菱形。在 ASSETS.md 中不列出任何第三方图标。
- 字体：通过技术栈中指定的 Fontsource 包自托管 Syne、Sora 和 Share Tech Mono（OFL）。仅导入列出的字重。在 ASSETS.md 中记录本地 woff2 文件、npm 包页面和 OFL 许可证。不要从任何 CDN 请求字体。
- 视频：不使用视频和音频文件。第一轮 Play 解锁上下文后，命中音效通过 Web Audio 合成。

## 禁止事项
- 不设后端、账户、数据库、分析、外部 API、多人模式或共享排行榜。最高分整数和静音标志保存在 localStorage 中，键名由 BRAND 构建。
- 不使用 CDN，不使用远程资源。字体自托管，three 从已安装的包中导入，使用相对路径，并将压缩文件输出到 dist/，关闭 source map，且不将 src/ 复制到 dist/。保持 dist 在 20 MB 以下。
- 唯一页面是 index.html。不要添加营销页面、价格或裸目录链接。首屏是亮起的球场，旁边是开始卡片，绝不在平坦背景上打字。
- 不要使用标题 VOIDBREAK、通关文案 LANDED 或失败文案 YOU DIED。失败标题为 Out of sparks。回合中通关标题为 Round clear。最后一张卡片的标题为场馆名加 clear。
- 不要将读数标记为 HULL、LIVES、NOMINAL、CRITICAL、WAVE、BRICKS 或零填充六位数的 SCORE。屏幕标签为 PTS、RND、BLOCKS、SPARKS、REST 和 LIVE。不要打印控制行 MOUSE / A D MOVE 或 SPACE SURGE。不要绑定 A 或 D。
- 不要使用这些状态词：HULL BREACH、HULL CRITICAL、BALL LOST、KEEP LANE、MINE HIT、SAW HIT、IMPACT、SURGE、WIDE、WIDE LOCK 或 COMBO。拾取提示仅命名 Scatter、Needle 和 Girder。
- 不要构建 EnergyCore、Interceptor、ObjectivePylon、SawDrone、SpikeMine、船体伤害、车道危险、地雷或锯片。球场由挡板、球、砖块和三种拾取物组成。
- 不要复制一次性 HTML 页面、基准提示词、评审笔记、截图或游戏视频。不要提及 Agent OS、GoldieBench、AI Profit Boardroom、AIPB、Grok、xAI 或 Julian Goldie，也不要添加玩家浏览器栏。
- 不要将场景锁定到源调色板，不要使用 Inter 或 Courier New。字体为 Syne、Sora 和 Share Tech Mono，自托管。颜色为本规范中的十六进制值。
- 不使用真实街机品牌、标志、吉祥物或名人肖像。服务员没有面部，不是真实人物的肖像。不使用下载的模型、HDRI、库存照片或占位图服务。
- 不使用阴影贴图、物理引擎或 Math.random。星星和碎裂使用 mulberry32。Bloom 仅限桌面端，并在单次性能削减后关闭。
- 不要在 src/content.ts 之外硬编码 Lumen Dock、Glass Pier、Harborline、Nia Pell 或默认回合名称，不要在屏幕上留下原始变量标记。
- 不要编造日期、入场费、在线玩家数量或任何关于 VibeFather 的声明。VibeFather 的唯一存在是可选的 [CREDIT] 链接。
- 遵循 prefers-reduced-motion，移除震动、碎裂、拖尾、浮动和相机漂移，但不停止回合。在 390×844 下，面板、读数和拖拽控件必须可用，无水平溢出且无控制台错误。
- 如果 WebGL 失败，显示可读的回退句子，不要在循环中抛出异常。在暂停、隐藏或卡片打开时冻结回合。

---
Inspired by arcade one-shot 3D breakout by @JulianGoldieSEO — https://agentos.guide/grok-4-7-agent-os
— Prompt by VibeFather · https://vibefather.ai/t/3d-neon-breakout-arcade · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
