> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 3D Neon Breakout Arcade

完全按照下面的描述构建这个网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个完整的单页 3D 打砖块游戏，场景设在 [CITY] 的 [VENUE] 中一个网格状的夜间球场。首屏就是灯光照亮的竞技场本身：冷色调的天空穹顶、深色的网格地面、前方的吧台，以及更靠后的第一轮砖块，视图旁边有一张开始卡片。五个精心设计的轮次会改变砖块布局和球速。玩家拥有火花、分数，以及三种下落式拾取物：Scatter、Needle 和 Girder。默认牌组：[TAGLINE]。

- 受众：独立开发者和前端开发者，他们想要一个完成度高的静态 Three.js 街机游戏，可用鼠标、方向键和手指拖动来游玩，并且可以通过改文字而不是改球场来换肤。
- 目标：交付一台可重复游玩的五轮街机：一张覆盖在活着的球场上的开始卡片、鼠标和触摸瞄准、键盘微调、碎裂、炽热的球轨迹、科幻风读数、通关和失败卡片、暂停、合成音效，以及本地最佳成绩。第二套名称必须保持相同的地图、速度、颜色和拾取规则。
- 基调：干练、具体、本地化，像夜班服务员在和常客说话。简短的美式英语。不要军用船体式腔调，不要死亡口号，不要注水的记分板。

## 技术栈
- 框架：Vite 6 + TypeScript + Three.js
- 样式：原生 CSS
- 库：three（MIT）、@fontsource/syne（OFL）、@fontsource/sora（OFL）、@fontsource/share-tech-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 搭建 Vite 的原生 TypeScript 模板。脚本：dev=vite，build=tsc && vite build，preview=vite preview。包名是 BRAND 的 slug，而非固定的模板 id。将 vite base 设为 './'，build.outDir 设为 dist，build.emptyOutDir 设为 true，build.sourcemap 设为 false。tsconfig：strict 为 true，noEmit 为 true。
  - 安装 three 0.170.0 或更新版本，以及作为开发依赖的 Vite 6 和 TypeScript 5，还有作为运行时依赖的三个 Fontsource 包。不要添加 React、物理引擎、游戏框架、补间库、图标包或单独的后处理包。
  - 从这些包中导入 Syne 字重 700 和 800、Sora 字重 400、500 和 600，以及 Share Tech Mono 字重 400。CSS 字体族为 Syne、Sora 和 Share Tech Mono。不要从 CDN 加载字体。
  - Bloom，仅桌面端：从 three/addons 导入 EffectComposer、RenderPass、UnrealBloomPass 和 OutputPass。强度 0.25，半径 0.32，阈值 0.82。OutputPass 是最后一个通道。在宽度低于 800px 时以及执行下方性能削减后跳过合成器。
  - 使用模块 src/content.ts、main.ts、arena.ts、levels.ts、sim.ts、hud.ts、audio.ts 和 styles.css。将所有面向玩家的字符串保留在 content.ts 中。模拟代码读取该模块，绝不显示原始 token。
  - 如果 BRAND、VENUE、CITY 和 ATTENDANT 为默认值，则使用 Glass Pier 文案表。如果 VENUE 为 Millhouse Rec，则严格使用 Millhouse 文案表。对这四个值的任何其他更改都会重写 content.ts 中的服务员句子、营业时间行和五个回合名称，以适配新词。仅更改 TAGLINE 会替换副标题并保留回合名称。地图、速度、颜色、坐标和拾取格永不改变。
  - 仅在 localStorage 中持久化最佳分数整数和静音标志。键为 BRAND 的 slug 加上 -cabinet，因此 Lumen Dock 变为 lumen-dock-cabinet。Slug：小写，非字母数字转为单个连字符，修剪连字符。无日期。不从网络解析任何内容。
  - 一个 index.html，lang=en，viewport 带 viewport-fit=cover。文档标题为 BRAND、一个破折号，然后是 VENUE。一个全视口 canvas 加上 HTML 覆盖层。Body margin 0，overflow hidden，背景为 Ink。无路由器。

## 变量
- [BRAND] — 机柜名称（默认：“Lumen Dock”）。在起始卡片、读数区、文档标题和保存键上虚构的机柜名称。
- [VENUE] — 场地（默认：“Glass Pier”）。虚构的地点。用于眉题、最终清除标题和营业时间行。
- [CITY] — 城市（默认：“Harborline”）。场地旁的虚构城市。仅文字；球场不变。
- [ATTENDANT] — 服务员（默认：“Nia Pell”）。经营机柜之人的虚构名字和姓氏。不是真实人物。
- [TAGLINE] — 起始卡文案（默认：“Keep the spark and clear the pier.”）。起始卡片上机柜名称下方的一句话。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/3d-neon-breakout-arcade（默认：是；删除此行以移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- Ink `#07110F` — 页面背景、渲染器清屏色、开始卡片、天顶、雾
- Court `#0C1714` — 地板平面和读数芯片
- Grid `#24584F` — 地板线条和卡片边框
- Horizon `#1C6B62` — 天空穹顶地平线
- Teal `#1EC8B8` — 青色砖块、护栏、主按钮、火花点、焦点环
- Sea `#7DFFB2` — 海色砖块
- Ice `#9AD7FF` — 冰色砖块和破损的石灰砖块
- Lime `#E4F27A` — 第一枚芯片前的两击砖块、Girder 拾取物、远端边缘
- Hot `#FF4D1C` — 球、球光、中心刻度、Needle 光束、Scatter 拾取物
- Paper `#E7F3EE` — 标题、HUD 数字、挡板主体
- Dim `#8AA39A` — 眉题、标签、小时行、署名
- Rail `#12312C` — 侧护栏和背板

### 字体排印
- 开始卡片上的机柜名称：Syne（OFL），字重 700/800
- 正文、按钮和 HUD 标签：Sora（OFL），字重 400/500/600
- 分数、回合和计时器：Share Tech Mono（OFL），字重 400

### 布局与动效
- 间距：4 px 基准。桌面卡片内边距 28 px，HUD 内缩 16 px。移动端内缩 12 px 加上安全区内缩。按钮至少 44 px 高。手机上的开始面板保持在 46 vh 以内并在自身内部滚动。比赛进行中，球场中心保持无界面元素遮挡。
- 圆角：开始、暂停、通关、失败和控制卡片为 12 px，带 Grid 色的硬 4 px 偏移阴影，无模糊。按钮 8 px。火花点为 8 px 菱形。世界网格保持锐利，球、服务员头部和 Scatter 的小球体除外。
- 动效：固定步长 1/60 秒。每帧最多运行三步并丢弃剩余时间。用最新状态渲染。
- 动效：开始卡片上，相机在 8 秒内沿 x 轴缓动 0.04 单位。比赛进行中，相机 x 缓动趋向挡板 x 的 0.18 倍，钳制在 1.1，平滑系数为 1 - exp(-4 dt)。
- 动效：砖块破碎时相机偏移最多 0.045 单位，持续 0.1 秒，缓出，一次只震一下。球拖尾保留最近 10 个位置，间距至少 0.12。
- 动效：碎裂生成 14 个短命盒子。拾取物以 1.8 Hz 上下浮动 0.05 单位。覆盖层淡入 160 ms，不位移。
- 动效：在 prefers-reduced-motion 下，去掉标题漂移、相机跟随、震动、拖尾、碎裂、拾取物浮动和覆盖层淡入。UI 直接就位。保留球、挡板、光束和回合，因为那是游戏本身的动效。
- 图像：球场、天空、砖块、挡板、球、拾取物、碎裂和服务员全部用原创 Three.js 几何体绘制。不用照片、不用生成的静帧、不用 HDRI、不用下载的模型、不用品牌标识。受光的球场是第一屏的锚点，开始卡片在其旁边。服务员是右侧护栏外一个无面部特征的人形：一件 #C5D2CB 的箱形外套，一个 #E6C4A4 的球体头部，没有眼睛和嘴，一顶 Teal 色帽子。该人物是虚构的，不是任何真实人物的肖像。其他地方不出现任何面孔。

## 页面与区块
### [BRAND] — [VENUE] (`index.html`)
1. **点亮球场上的开始卡片** — 文档标题：Lumen Dock — Glass Pier，由 BRAND 和 VENUE 组成。状态：开始、操作说明、发球、游玩、暂停、清空、失败。打开时处于开始状态，第 1 回合已构建完成，球停在挡板上，挡板居中。眉题，大写 Sora 600，12 px，字距 0.16 em：GLASS PIER · HARBORLINE，由 VENUE 和 CITY 组成。标题：Lumen Dock，Syne 800，桌面端 64 px，700 px 以下 40 px。副标题，来自 TAGLINE：Keep the spark and clear the pier。值班员行：Nia Pell opens the cabinet after dusk。营业时间：Cabinet 4 on Glass Pier. Open 4 pm to midnight。正文，对所有名称集相同：Five rounds. Three sparks. Move the bar with the mouse, the arrow keys, or a finger drag. Click, tap, or press Space to send the ball. Catch Scatter, Needle, and Girder。如果存在最佳成绩，显示 Best 和分组得分。没有存档时隐藏该行。可选的 [CREDIT] 链接出现一次，位于营业时间行下方，12 px Sora，Dim 色。按钮：Play round one（主按钮）和 Controls。焦点置于 Play round one。Millhouse 文案表，仅在 VENUE 为 Millhouse Rec 时使用：当 CITY 仍为 Redloom 时眉题为 MILLHOUSE REC · REDLOOM，否则为 VENUE 和 CITY；值班员行 Ellis Ward leaves the cabinet on after lab hours；营业时间 Room 12 at Millhouse Rec. Open 7 pm to 11 pm；副标题来自 TAGLINE。该表的回合名称见回合区块。
   布局：画布填满视口，并在首次点击前渲染球场。在 Play round one 之前隐藏游玩读数。桌面端：一张 400 px 的 Ink 卡片，12 px 圆角，28 px 内边距，Paper 文字，边框 1 px solid Grid，偏移阴影 4 px 4 px 0 Grid，距左侧 16 px 且垂直居中。它覆盖远不到 1440 px 的一半，使砖块、挡板、热球和右栏人物保持可见。移动端：底部抽屉，最大高度 46 vh，内部滚动，同样的实心 Ink 填充，无模糊。在 390×844 下，天空、至少两行砖块、挡板和热球都位于抽屉上方。如果挡板落到抽屉后面，将移动端开始相机沿 z 轴后移，直到该取景成立。画布背后的背景为 Ink。UI 根为 pointer-events none；卡片和按钮设置 pointer-events auto。
   动效：卡片在首帧渲染后以 160 ms 淡入。开始时，球保持不动，相机漂移 0.04 个单位。Controls 打开帮助抽屉并返回此处，不开始游戏。Play round one 将状态设为发球，移除卡片，显示读数，且暂不发射球。减少动效时显示卡片，无淡入也无漂移。Enter 激活聚焦的按钮。
2. **球场、天空、相机和光照** — 坐标轴：+x 向右，+y 向上，+z 远离相机朝向砖块。游玩边界：x = ±7.45，后墙 z = 19.35，出界线 z = 0.15。球的高度锁定在 y = 0.52。球不受重力，也不能跳跃。值班员站在 (8.55, 0, 6.4)，在右边界之外，无碰撞：外套盒 0.42 × 0.78 × 0.28，位于 y 0.56，头部球体半径 0.16，位于 y 1.12，帽子盒 0.28 × 0.08 × 0.28，位于 y 1.28，两个腿部盒。人物上方不浮动名牌。
   布局：地板平面 24 × 28，中心 (0, 0, 10)，颜色 Court。网格线每 1 个单位，从 x -8 到 8、z 0 到 20，y = 0.015，颜色 Grid，一个 LineSegments。护栏：盒 0.14 × 0.18 × 20.2，位于 x ±7.72，y 0.1，z 中心 10.1，颜色 Rail，自发光 Teal 强度 0.45。背板：平面 15.4 × 2.6，位于 z 19.7，y 1.3，颜色 Rail。远唇：盒 15.4 × 0.12 × 0.16，位于 z 19.55，y 1.15，自发光 Lime 强度 0.35。天空：球体半径 80，位置 (0, -8, 10)，BackSide，ShaderMaterial。在归一化世界 y 从 0.35 到 0.95 上使用 smoothstep，将边缘的 Horizon 混入顶部的 Ink。无太阳圆盘，无紫色。七十个星点，半径 0.045，颜色 #D7EFE8，仅在 y > 2 处，使用 mulberry32 种子 5704843 放置。不要使用 Math.random。雾为线性，颜色 Ink，近 28，远 70。桌面相机：位置 (0, 6.15, -3.1)，lookAt (0, 0.7, 12.5)，fov 44。800 px 以下：位置 (0, 8.2, -2.4)，lookAt (0, 1.0, 12.0)，fov 52。近 0.1，远 200。在移动端开始抽屉上，将相机移至 (0, 7.6, -4.2)，lookAt (0, 1.4, 13)，fov 50，并在回合开始时返回移动端游玩相机。
   动效：星星、地板、护栏和值班员不移动。标题漂移和游玩跟随仅为相机偏移。减少动效时，相机保持在该视口的基础位置。光照不脉动。
3. **挡板、球和输入** — 挡板是一个盒 2.56 × 0.18 × 0.46，中心 z = 1.35，y = 0.36，颜色 Paper，自发光 Teal 强度 0.25。一个 Hot 刻度，0.14 × 0.22 × 0.50，位于其中心。Girder 将挡板宽度设为 4.16，持续 8.0 秒，并反向缩放刻度，使刻度保持 0.14 宽。钳制中心，使挡板保持在 x ±7.45 内。球是一个 16 段球体，半径 0.20，颜色 Hot，自发光 Hot 强度 0.85，粗糙度 0.32，金属度 0.04。一个子点光源，颜色 Hot，强度 1.5，距离 6，衰减 2。持球时，球心为 (barX, 0.52, 1.87)。发球始终将 vx 设为 0.28 乘以速度，符号取最后一次水平移动的方向，若挡板尚未移动则为 +1，vz 设为速度平方减去 vx 平方的正平方根。之后的挡板击球使用 offset = clamp((ballX - barX) / halfWidth, -1, 1)，vx = offset * 0.78 * speed，然后将 vx 的绝对值钳制到 0.92 * speed 并重新计算正的 vz。每次反弹后重新归一化到回合速度。
   布局：指针映射：t = (clientX - rect.left) / rect.width，target = lerp(-6.17, 6.17, clamp(t, 0, 1))，然后钳制到当前挡板限制。鼠标移动设置目标，无需按键。触摸和笔仅在指针按下时设置。ArrowLeft 和 ArrowRight 以每秒 11 个单位移动，在任何同时应用了指针的帧上被忽略。不要绑定 A 或 D。仅从持球状态、按 Space、或在画布上 pointerup 且总移动小于 14 px 时发射。拖拽不发射。按下时捕获指针。body 上 touch-action none 和 overscroll-behavior none。对 Space、方向键和 Escape 阻止默认行为，以免页面滚动。在失焦、抽屉打开和文档隐藏时清除按住的键。键盘：Escape 关闭 Controls，或在发球和游玩期间切换暂停；M 切换静音；Enter 激活聚焦的主按钮。画布可访问名称：Three-dimensional breakout on a lit grid court。一个礼貌的实时区域播报回合清空、火花丢失、火花耗尽和最终清空句子，而非每次击球。
   动效：持球随挡板移动。挡板击球后，将球推到 z = 1.87，并在 0.08 秒内忽略该球与挡板的碰撞。每步最多移动 0.18 个单位，因此球无法穿过砖块。如果多个砖块重叠，仅解决最小穿透。翻转最小穿透的轴；如果两个穿透量在 15% 以内，则同时翻转两者。然后按穿透量加 0.01 推出并重新归一化。侧墙翻转 vx。后墙将 vz 翻转为负。拖尾球体：半径 0.06，颜色 Hot，不透明度从 0.35 降至 0，非碰撞体。减少动效时不绘制拖尾。球的光照保留。
4. **五个回合和砖块地图** — 九列，最多六行。砖块盒 1.28 × 0.42 × 0.58。列 x = -5.84 + col * 1.46。行 z = 18.15 - row * 0.86。第 0 行最远。字符，每个字符串长度 9：c 青绿 #1EC8B8 一击，s 海绿 #7DFFB2 一击，i 冰蓝 #9AD7FF 一击，l 青柠 #E4F27A 两击，连字符表示空。青柠砖的首次击打得 40 分，将网格切换为冰蓝，并保留一击。摧毁一击砖得 100 分。摧毁已削弱的青柠砖得 160 分。一个几何体，四个缓存材质，粗糙度 0.4，金属度 0.08，自发光强度 0.35，使用砖块当前颜色。回合速度：7.2、8.1、9.0、9.9、10.8。Glass Pier 名称：Pier Lights、Kelp Gate、Lantern Stack、Tide Teeth、Last Beacon。Millhouse 名称：Lab Lights、Coil Gate、Shelf Stack、Gear Teeth、Last Bell。地图按顺序，远行在前，每行用引号括起且恰好 9 个字符。第 1 回合："ccccccccc" "sssssssss" "iiiiiiiii" "cscscscsc"。掉落：第 2 行第 4 列 Scatter，第 1 行第 1 列 Needle，第 3 行第 7 列 Girder。第 2 回合："cscsicscs" "-s-c-c-s-" "c-scics-c" "-i-l-l-i-" "scscscscs"。掉落：第 0 行第 4 列 Scatter，第 2 行第 0 列 Needle，第 4 行第 8 列 Girder。第 3 回合："lll---lll" "ccc---ccc" "sss---sss" "iii---iii" "csc---csc"。掉落：第 1 行第 1 列 Scatter，第 2 行第 7 列 Needle，第 4 行第 0 列 Girder。第 4 回合："c-s-c-s-c" "-l-i-l-i-" "c-s-c-s-c" "-i-l-i-l-" "s-c-s-c-s" "-c-s-c-i-"。掉落：第 2 行第 2 列 Scatter，第 3 行第 3 列 Needle，第 4 行第 8 列 Girder。第 5 回合："lclclclcl" "ss-c-c-ss" "ccclllccc" "ii-----ii" "s-c-i-c-s" "cscscscsc"。掉落：第 0 行第 4 列 Scatter，第 2 行第 0 列 Needle，第 5 行第 8 列 Girder。仅当该单元格被摧毁时才排队掉落，青柠仅被削弱时不排队。
   布局：开始一轮会重建砖块，移除球、拾取物、光束和碎裂效果，并放置一个持球。分数和火花跨轮保留。清空一轮加 800 分，然后加一个火花，上限为 5。通关卡片显示 Round clear、轮次名称、PTS 和分组总计，以及 spark returned 或 sparks full。按钮：Next round。第 5 轮之后，卡片标题是场馆名加 clear，因此默认显示为 Glass Pier clear。副标题：Five rounds。按钮：Play again。当此总分超过已保存的整数时显示 New best。Next round 和 Play again 不会重新加载页面。Play again 将分数设为 0、火花设为 3、轮次设为 1，并返回发球状态。
   动效：砖块不移动。chip 是即时颜色变化。打开通关卡片会冻结步进。已有的碎裂可以完成；卡片打开后不再生成新方块。减少动效会移除碎裂，保留颜色变化和卡片。
5. **拾取物、光束和碎裂** — 同时最多存在两个拾取物。第三个排队的掉落会被忽略；砖块仍然计分。拾取物以每秒 3.5 个单位朝相机下落，在 z < 0.2 时被移除。当其 z 在 1.05 到 1.70 之间且其 x 在挡板半宽加 0.28 范围内时接住它。接住得 200 分。Scatter 是三个半径为 0.08 的小 Hot 球体。接住时，从最旧的存活球生成最多两个额外球，如果没有存活球则从持球生成，方向为该速度的正负 0.45 弧度，速度相同。上限 5 个球，计入持球。提示：Scatter · two more balls、Scatter · one more ball 或 Scatter · court is full。Needle 是一个 0.08 × 0.36 × 0.36 的浅色盒子，颜色为 #FFD2C2。在 6.0 秒内每 0.45 秒发射一次，接住后 0.1 秒发射第一发，包括发球期间。光束是一个 Hot 盒子，厚度 0.06，从 z = 1.75 延伸到第一个 x 与挡板中心重叠在 0.08 以内且 z 在前的砖块，如果没有命中则延伸到 z = 19.2。它可见 0.07 秒，移除一次命中，并给予与球相同的 40、100 或 160 分。它不会反弹。提示：Needle · beam ready。Girder 提示：Girder · bar stretched。再次接住 Girder 会将计时器重置为 8.0。Needle 和 Girder 可以同时运行。计时器使用模拟时间，在暂停、隐藏或在卡片上时冻结。
   布局：碎裂：14 个盒子，大小 0.05 到 0.13，寿命 0.5 秒，y 方向重力 -6.5，初始速度 1.4 到 3.4，向上偏置 1.2 到 3.0，颜色在砖块破碎的瞬间从砖块复制。用 roundIndex * 1000 + row * 10 + col 作为 mulberry32 的种子。上限 160 个存活盒子；如果达到上限，破碎砖块但不生成新盒子。拾取物仅在 y 方向上下浮动。光束不是球的碰撞体。当最后一个砖块破碎时，在同一步进入 clear，早于任何球越过出界线。
   动效：拾取物浮动是正弦波。减少动效将拾取物固定在 y = 0.52 并且不生成碎裂。光束绘制一帧，仍然移除命中。减少动效开启时不要晃动相机。
6. **读数、提示和结束卡片** — 游戏读数标签，精确为：PTS 带分组整数且无前导零；RND 为 1/5 到 5/5；BLOCKS 为剩余砖块数；SPARKS 为最多五个 8 px 菱形，剩余时填充 Teal，为空时描边 Grid，并带 SPARKS 标签。轮次名称旁的状态词：持球时为 REST，至少一个球在移动时为 LIVE。轮次名称在挡板下方，来自文案表，使用 Sora。能量 chip 在底部中央，仅在激活时显示：NEEDLE 4.2 和 GIRDER 6.0，保留一位小数。提示持续 1.3 秒，绝不阻挡输入。火花丢失提示：Spark lost · 2 left，使用剩余的火花数。失败卡片标题：Out of sparks。副标题：RND、轮次编号、一个中点、轮次名称。然后是 PTS 和总计。按钮：Run it back，使用与 Play again 相同的重置。当总分超过存档时显示 New best。暂停卡片标题：Paused。按钮：Resume、Restart round、Controls。Restart round 重建当前地图并返回发球状态，不改变分数或火花，也不退还火花。在失败时和场馆通关卡片上，当总分更高时保存最佳成绩。
   布局：桌面读数：一行 44 px，距顶部和两侧 16 px。品牌 chip 在左侧，Sora 600，最大宽度 28 vw，带省略号。PTS 居中，Share Tech Mono 20 px。RND、BLOCKS 和 SPARKS 在右侧，标签为 Dim 11 px。Pause 和 Sound 是品牌下方的 44 px 文本按钮。轮次名称居中在该行下方。移动端，低于 800 px：第一行是 Pause、品牌、Sound；第二行是 PTS、RND、BLOCKS 和 16 px 等宽字体的圆点。在 390 px 下没有任何横向滚动。卡片在桌面上为 420 px，在移动端为全宽面板，两侧内缩 12 px，相同的 Ink 填充和 Grid 偏移阴影。主按钮填充 Teal，文字 Ink。次按钮透明，标签为 Paper。焦点环 2 px 实线 Teal，偏移 2 px。提示位于能量 chip 上方，最大宽度 280 px。
   动效：卡片淡入 160 ms。火花圆点不脉冲。减少动效会瞬间切换卡片和提示。状态文本即时变化。读数在开始卡片上隐藏，在发球、游戏、暂停、通关和失败期间显示。
7. **声音、暂停和两个视口** — 声音在 Play round one 之前关闭，该操作是解锁手势，之后开启。按钮显示 Sound on 或 Sound off。M 与按钮一致。持久化静音。音调，无音频文件：挡板命中正弦 392 Hz 持续 45 ms，增益 0.06；砖块摧毁方波 620 Hz 持续 40 ms，增益 0.04；lime chip 三角波 480 Hz 持续 35 ms；墙壁正弦 196 Hz 持续 30 ms；拾取 523 Hz 然后 784 Hz，各 60 ms；火花丢失正弦滑音 360 Hz 到 140 Hz 持续 160 ms；通关 523、659、784 Hz 各 90 ms；场馆通关增加 1046 Hz。如果 AudioContext 失败，保持声音关闭并且不要循环记录日志。渐变 20 ms。暂停、隐藏或静音时静音。Controls 标题：How the bar moves。行：Mouse：挡板跟随你的水平位置。Arrow keys：向左或向右移动。Finger：在球场上任意位置拖动。Click、tap 或 Space：当球停在挡板上时发送球。Esc 暂停。M 静音。按钮：Back。Back 返回到开始或暂停，取决于哪个打开了它。
   布局：目标是在 1440×900 和 390×844 下干净帧，无横向溢出且无控制台错误。灯光：半球天空 #B7E6DC 和地面 Court，强度 0.55；方向光 #F2FFF8 强度 1.35，来自 (2.5, 9, -4)；一个 Teal 补光强度 0.35，来自 (-6, 3, 8)。无阴影贴图。ACES 电影色调映射，曝光 1.02，清除颜色 Ink，输出色彩空间 SRGB。像素比 min(devicePixelRatio, 1.75)，或在 800 px 以下为 1.25。如果 180 帧的平均帧时间超过 22 ms，一次性地将像素比设为 1 并禁用 bloom。保持规则。如果 WebGL 无法启动，保留开始文案并添加：This browser could not start the 3D view. Try a browser with WebGL enabled。不要循环重试。在视口变化时调整渲染器、相机和合成器的大小。遵守安全区域内边距。页面本身不滚动。
   动效：暂停、隐藏文档、通关、失败和 controls 会冻结步进、计时器和球。冻结时声音保持静音。减少动效与性能削减是分开的：游戏玩法保留，仅额外的相机、碎裂、拖尾、浮动和淡入淡出被移除。质量削减绝不移除轮次、拾取物或触摸瞄准。

## 资产
- 图像：不使用任何图像文件，也不生成静帧。天空、球场、砖块、横条、球、拾取物、碎裂效果、服务员和拖尾全部用 Three.js 绘制。添加一个原创的 public/favicon.svg：32 viewBox、Ink 圆角矩形、一条 Teal 水平横条，横条上方一个 Hot 圆形，不含任何字母。在 ASSETS.md 中说明场景由代码绘制，并将该 favicon 列为原创。
- 图标：不要安装图标包。Pause、Sound 和 Controls 是文本按钮。Spark 点数标记是 CSS 菱形。在 ASSETS.md 中不要列出任何第三方图标。
- 字体：通过技术栈中指定的 Fontsource 包自托管 Syne、Sora 和 Share Tech Mono（OFL）。只导入列出的字重。在 ASSETS.md 中记录本地 woff2 文件、npm 包页面和 OFL 许可证。不要从任何 CDN 请求字体。
- 视频：不使用视频，也不使用音频文件。第一轮 Play 解锁上下文后，击打音效通过 Web Audio 合成。

## 不要做
- 不要后端、账户、数据库、分析、外部 API、多人模式或共享排行榜。最高分整数和静音标志保存在 localStorage 中，键由 BRAND 构建。
- 不要 CDN，不要远程资源。字体自托管，从已安装的包中导入 three，使用相对路径，并将压缩文件输出到 dist/，关闭 source map，且不将 src/ 复制到 dist/。保持 dist 在 20 MB 以下。
- 唯一的页面是 index.html。不要添加营销页面、价格或裸目录链接。首屏是亮起的球场，旁边是开始卡片，绝不要在平面上打字。
- 不要使用标题 VOIDBREAK、通关文案 LANDED 或失败文案 YOU DIED。失败标题是 Out of sparks。回合中通关标题是 Round clear。最后一张卡片的标题是场馆名加 clear。
- 不要将读数标记为 HULL、LIVES、NOMINAL、CRITICAL、WAVE、BRICKS 或零填充六位数的 SCORE。屏幕标签是 PTS、RND、BLOCKS、SPARKS、REST 和 LIVE。不要打印控制行 MOUSE / A D MOVE 或 SPACE SURGE。不要绑定 A 或 D。
- 不要使用这些状态词：HULL BREACH、HULL CRITICAL、BALL LOST、KEEP LANE、MINE HIT、SAW HIT、IMPACT、SURGE、WIDE、WIDE LOCK 或 COMBO。拾取提示仅命名 Scatter、Needle 和 Girder。
- 不要构建 EnergyCore、Interceptor、ObjectivePylon、SawDrone、SpikeMine、船体伤害、车道危险、地雷或锯片。球场由挡板、球、砖块和三个拾取物组成。
- 不要复制一次性 HTML 页面、基准提示、评审笔记、截图或游戏视频。不要提及 Agent OS、GoldieBench、AI Profit Boardroom、AIPB、Grok、xAI 或 Julian Goldie，也不要添加玩家浏览器栏。
- 不要将场景锁定到源调色板，不要使用 Inter 或 Courier New。字体是 Syne、Sora 和 Share Tech Mono，自托管。颜色是本规范中的十六进制值。
- 不要使用真实街机品牌、标志、吉祥物或名人肖像。服务员没有脸，不是真实人物的肖像。不要下载模型、HDRI、库存照片或占位图服务。
- 不要阴影贴图，不要物理引擎，不要 Math.random。星星和碎裂使用 mulberry32。Bloom 仅限桌面端，并在单次性能削减后关闭。
- 不要在 src/content.ts 之外硬编码 Lumen Dock、Glass Pier、Harborline、Nia Pell 或默认回合名称，不要在屏幕上留下原始变量标记。
- 不要编造日期、入场费、在线玩家数量或任何关于 VibeFather 的说法。VibeFather 的唯一存在是可选的 [CREDIT] 链接。
- 遵守 prefers-reduced-motion，移除抖动、碎裂、拖尾、浮动和相机漂移，但不停止回合。在 390×844 下，面板、读数和拖拽控件必须可用，无水平溢出且无控制台错误。
- 如果 WebGL 失败，显示可读的回退句子，不要在循环中抛出异常。在暂停、隐藏或卡片打开时冻结回合。

---
Inspired by arcade one-shot 3D breakout by @JulianGoldieSEO — https://agentos.guide/grok-4-7-agent-os
— Prompt by VibeFather · https://vibefather.ai/t/3d-neon-breakout-arcade · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
