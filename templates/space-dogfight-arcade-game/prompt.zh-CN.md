> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 太空狗斗街机游戏

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个在有限小行星空间 [SECTOR] 中进行的单页第三人称街机巡逻游戏。默认呼号为 [CALLSIGN]，唯一的敌人是 [FOE]，战机类型为 [CRAFT]。第一个画面是明亮场景，代码构建的战机已处于追逐视角，旁边是深色玻璃标题卡，以及简短的操作说明。玩家操控飞行、发射淡蓝色冰霜弹、按住锁定发射一枚追踪导弹、冷却后加速、翻滚以获得短暂护盾微光。编号波次会增加几架无人机并略微提升速度，波次之间有短暂喘息。只有当玩家护盾归零时，本轮才会结束，并显示重试卡，注明所到达的波次。默认受众描述：[AUDIENCE]。

- 受众：希望获得一个完整静态 three.js 飞行游戏的开发者和独立黑客，可在桌面用键盘和指针游玩，在手机上用拇指摇杆游玩，并且无需更改飞行模型即可通过变量重命名。
- 目标：交付一个可重复游玩的巡逻：在生动的小行星场上覆盖标题卡、追逐镜头、加速、翻滚、冰霜弹、锁定导弹、可再生护盾、圆形雷达、波次计数器、屏幕飞行控制、合成音效和重试卡。第二组名称必须保持相同的速度、颜色、轮廓和 HUD。
- 语气：平静、简短、操作化，像调度员。美式英语。不要电影预告片腔调，也不要现有游戏的口号。

## 技术栈
- 框架：Vite 5 + TypeScript + three.js
- 样式：Tailwind CSS 3.4
- 库：three（MIT）、tailwindcss（MIT）、@fontsource/oxanium（OFL）、@fontsource/source-sans-3（OFL）、@fontsource/ibm-plex-mono（OFL）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 搭建一个 Vite 5 原生 TypeScript 应用。package.json 脚本：dev=vite，build=vite build，preview=vite preview。不要在构建过程中运行 tsc。按需安装 three@0.170.0（或任何更新的 0.x 版本，MIT）、tailwindcss@3.4、postcss 和 autoprefixer，以及 @fontsource/oxanium、@fontsource/source-sans-3 和 @fontsource/ibm-plex-mono。开发依赖：vite@5、typescript@5、@types/three。不要安装 React、物理引擎、后处理，也不要安装 three/examples 中的任何内容。
  - vite.config.ts 将 base 设为 './'，build.outDir 设为 dist，build.emptyOutDir 设为 true，build.sourcemap 设为 false。构建产物经过压缩。不要将 src/ 复制到 dist/。tsconfig 使用 strict、noEmit、moduleResolution bundler 和 target ES2022。
  - 使用 Tailwind 3.4，而非 v4。tailwind.config.js 的 content 为 ./index.html 和 ./src/**/*.ts。扩展 fontFamily：display 为 Oxanium，body 为 Source Sans 3，mono 为 IBM Plex Mono。扩展 colors：void #07080C、paper #E7ECF2、dim #9AA3AE、amber #E8A23A、ice #8FCBE3、ink #141820。src/style.css 包含三个 Tailwind 层，并将 html、body 和 #ui 的高度设为 100%，margin 设为 0，background 设为 #07080C，overflow 设为 hidden。在 index.html 中将每个类都写成完整字符串。不要通过拼接来构建类名。hidden 工具类必须出现在 HTML 源码中。
  - 仅从 src/main.ts 导入 @fontsource/oxanium/500.css、@fontsource/oxanium/600.css、@fontsource/source-sans-3/400.css、@fontsource/source-sans-3/600.css 和 @fontsource/ibm-plex-mono/400.css。文件为 index.html、src/main.ts、src/content.ts、src/tuning.ts、src/audio.ts、src/game.ts、src/style.css、public/favicon.svg 和 ASSETS.md。
  - src/content.ts 导出 BRAND、CALLSIGN、SECTOR、FOE、CRAFT 和 AUDIENCE，以及所有屏幕上的字符串。src/tuning.ts 导出下面的玩法数值，其他任何地方都不拥有这些数值。src/game.ts 构建网格并推进模拟。src/main.ts 拥有渲染器、resize、rAF 循环、输入和 DOM 更新。src/audio.ts 拥有 Web Audio。
  - 所有屏幕上的句子都是变量的函数。默认渲染为：eyebrow HARROW REACH；heading Cinder Patrol；deck Patrol Harrow Reach. Scatter the Glass Moths.；audience A short patrol for night-shift pilots.；meta Craft Lark · Call sign Kestrel；retry sub The Glass Moths still hold Harrow Reach. 当变量变化时，重写这些句子，不要改动网格、速度和颜色。document.title 为 BRAND。不要打印原始 token。
  - 使用一个 mulberry32 辅助函数。小行星使用种子 0x0D165607。星星使用种子 0x57A12。爆发使用种子 0xB4757 + wave * 13 + kind。不要调用 Math.random。将每帧 dt 限制在 0.033。如果 document.hidden，跳过该步并丢弃下一个 delta。隐藏时暂停音频。
  - src/tuning.ts 中的玩法常量：SPHERE 148、WARN 140、RELEASE 136、CRUISE 34、BOOST_SPEED 70、BOOST_TIME 0.75、BOOST_CD 2.4、YAW_RATE 1.35、PITCH_RATE 1.05、PITCH_LIMIT 1.05、ROLL_TIME 0.6、SHIMMER 0.4、ROLL_GAP 0.45、BANK 0.38、SHIELD_MAX 100、PLAYER_BOLT_DAMAGE 16、DRONE_BOLT_DAMAGE 18、REGEN_DELAY 1.6、REGEN_RATE 12、HIT_INVULN 0.35、BOLT_SPEED 130、BOLT_INTERVAL 0.13、BOLT_LIFE 1.15、BOLT_CAP 16、LOCK_MIN 8、LOCK_MAX 78、LOCK_CONE_DEG 16、LOCK_TIME 0.65、LOCK_CD 0.4、MISSILE_SPEED 92、MISSILE_TURN 2.2、MISSILE_LIFE 3.4、DRONE_SHIELD 32、DRONE_TURN 0.85、DRONE_FIRE_RANGE 62、DRONE_FIRE_CONE_DEG 12、DRONE_FIRE_CD 1.7、DRONE_BOLT_SPEED 78、SEPARATION 7、BREATHER 2.8、SPAWN_RADIUS 96。波次数量为 min(3 + (n - 1) * 2, 9)。无人机速度为 min(16 * pow(1.06, n - 1), 42)。n 从 1 开始。
  - 在呈现第一帧之前，构建场景，将战机置于标题姿态，对齐相机，并渲染一次，使标题卡在已点亮场景之上打开。如果 WebGL 失败，在卡片中显示回退句子，禁用 Launch patrol，并且不要循环重试。

## 变量
- [BRAND] — 中队名称（默认：“Cinder Patrol”）。虚构的两词中队名称。绝不能是现有的游戏、工作室、飞船或产品。
- [CALLSIGN] — 飞行员呼号（默认：“Kestrel”）。一个虚构的词。不能是已知的飞行员、角色或系列作品中的呼号。
- [SECTOR] — 巡逻星区（默认：“Harrow Reach”）。虚构的两词地名，用于卡组和重试提示行。
- [FOE] — 无人机名称（默认：“Glass Moths”）。一个由两个词组成的复数虚构无人机名称，这样“Scatter the [FOE]”和“The [FOE] still hold [SECTOR]”在语法上都能成立。
- [CRAFT] — 战机类型（默认：“Lark”）。一个虚构的词，表示战机类型。网格模型不随此词变化。
- [AUDIENCE] — 面向对象（默认：“A short patrol for night-shift pilots.”）。显示在卡组下方的一句简短说明。在第二次命名时保持相同的作用。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/space-dogfight-arcade-game（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值编写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- Void（虚空）`#07080C` — 页面背景、渲染器清屏色和线性雾
- Paper（纸白）`#E7ECF2` — 主文本和战机机身
- Dim（暗灰）`#9AA3AE` — 次要文本、鸭翼、脊鳍和待机雷达点
- Amber（琥珀）`#E8A23A` — 锁定环、导弹、加速提示、座舱盖、主按钮、低护盾填充
- Ice（冰蓝）`#8FCBE3` — 护盾填充、就绪环和雷达玩家标记
- Bolt（电光白）`#E7F1F8` — 玩家能量弹和冰爆方块
- Drone bolt（无人机弹）`#B7C0CA` — 仅用于无人机弹。冷灰色，绝不用红或绿
- Rock（岩石）`#C3CBD4` — 受光小行星材质
- Rock deep（深岩）`#646C78` — 最暗小行星材质
- Rock mid（中岩）`#8E98A4` — 中间调小行星材质
- Ink（墨色）`#141820` — 琥珀色按钮上的文字
- Glass（玻璃）`rgba(10, 12, 16, 0.72)` — 标题卡、重试卡、雷达和触控控件
- Line（线条）`rgba(213, 220, 228, 0.32)` — 玻璃面板上的细线边框
- Nozzle（喷口）`#2C3138` — 发动机喷口

### 字体排印
- 中队名称和主按钮：Oxanium（OFL），字重 500/600
- 正文、图例和次要按钮：Source Sans 3（OFL），字重 400/600
- 波次、护盾、呼号和雷达标签：IBM Plex Mono（OFL），字重 400

### 布局与动效
- 间距：以 4 px 为基准。桌面端标题卡内边距 28 px，HUD 内缩 24 px。移动端卡片内边距 20 px，HUD 内缩 16 px，触控行带安全区内边距。按钮高度至少 44 px。触控按钮为 64 px。摇杆为 116 px。页面本身不滚动；只有移动端标题卡在自身内部滚动。
- 圆角：标题卡和重试卡 16 px。主按钮和触控按钮 12 px。雷达为圆形。护盾轨道为 2 px。世界网格保持棱面化。锁定准星是圆形，不是方括号。
- 动效：可变 dt 上限为 0.033 秒。每帧在至多一次模拟步进后渲染一次。
- 动效：追逐相机平滑为 1 - exp(-5.5 * dt)。在标题姿态、开始游玩的那一帧以及再次飞行时，相机直接吸附到位。
- 动效：造成伤害的命中会使相机震动 0.16 秒，振幅 0.14。标题战机以 0.08 rad/s 偏航。锁定环可脉动 5%。护盾填充在低于 25 时可脉动。
- 动效：加速会将相机后拉 1.6 个单位，并显示八条短速度线。导弹和弹丸的运动就是游戏本身，始终保留。
- 动效：在 prefers-reduced-motion 下，去掉震动、标题偏航、相机后拉、速度线、导弹尾迹、锁定脉动、护盾脉动和粒子翻滚。使用小粒子预算，并将爆发寿命乘以 0.35。覆盖层直接吸附。保留转向、射击、锁定、波次和重试卡。
- 图像：战机、无人机、小行星、星星、弹丸、导弹、爆发、边界笼和 favicon 全部用代码绘制。不用照片、不用生成的静帧、不用 HDRI、不用下载的航天器、不用人物。首屏锚点是受光追逐视角下小行星间的战机，桌面端玻璃卡在其旁边，手机端在其下方。命中效果是翻滚的冰色和琥珀色方块。没有火焰、烟雾、飞行员或血液。

## 页面与区块
### [BRAND]（`index.html`）
1. **追逐视角上方的标题卡** — 状态为标题、游玩和结束。以标题状态开场。文档标题为 Cinder Patrol from BRAND。眉题，IBM Plex Mono 12 px，字距 0.2 em，琥珀色，大写：HARROW REACH, from SECTOR。标题，Oxanium 600，桌面端 52 px，768 px 以下 36 px，纸色，换行至两行且不低于 32 px：Cinder Patrol。副标题，Source Sans 3 18 px：Patrol Harrow Reach. Scatter the Glass Moths. 受众行，14 px 暗色：A short patrol for night-shift pilots. 元信息，等宽 13 px 暗色：Craft Lark · Call sign Kestrel。控制标签，13 px 暗色。桌面端图例，768 px 以下隐藏：Steer with the pointer, the arrow keys, or W A S D. Fire with the left click or Space. Hold the right click or F to lock. The missile launches when the ring fills. Shift boosts. R rolls and shimmers the shield. 移动端图例，768 px 及以上隐藏：Drag the stick to steer. FIRE shoots. Hold LOCK until the ring fills. BOOST is a short kick. ROLL shimmers the shield. 注释，13 px 暗色：Tones start when you launch. 按钮：Launch patrol。如果 WebGL 失败，添加：This browser could not start the 3D view. 并禁用按钮。可选的 [CREDIT] 链接出现一次，12 px 暗色，位于按钮下方，仅在提供了 credit 值时显示。画布无障碍名称：Third-person flight through a low-poly asteroid field。
   布局：画布固定于视口，并在首次点击前渲染场域。UI 根元素为 pointer-events none；卡片和按钮设置 pointer-events auto。桌面端，768 px 及以上：一张 400 px 玻璃卡，16 px 圆角，28 px 内边距，距左侧 16 px，垂直居中，边框 1 px solid Line。它在 1440 px 宽度下让战斗机处于开阔的中心。移动端：底部面板，左右各 16 px，底部 16 px，最大高度 46 vh，内部滚动，相同的玻璃填充，无全屏遮罩。在 390×844 下，战斗机位于顶部 46% 区域，在面板上方，周围有 asteroids。画布背后的背景为 Void。加载时聚焦 Launch patrol。Enter 激活聚焦的按钮。
   动效：卡片在首次绘制的帧上即存在。允许动效时，它在 160 ms 内淡入。减少动效时立即显示。Launch patrol 将状态设为游玩，隐藏卡片，将相机瞬间切换到游玩偏移，将战斗机放置在出生点，并在同一步中启动第 1 波。
2. **场域、战斗机、无人机和相机** — 轴向：Y 向上。每架飞行器的机头为其局部 -Z。不要用 object.lookAt 瞄准飞行器，那会使 +Z 指向目标。巡逻体积为以原点为中心、半径 148 的球体。半径 148 的线框球体，SphereGeometry(148, 8, 6)，MeshBasicMaterial 颜色 #8F98A4，不透明度 0.14，是边界笼。它是体积标记，不是行星，也不是空间站。雾为线性，颜色 Void，近 80，远 220。星星：半径 400 的球体上 900 个点，种子 0x57A12，PointsMaterial 颜色 #C5CED8，大小 1.4，sizeAttenuation true，fog false。索引 400 到 899 仅在视口宽度至少 768 px 时可见。Asteroids：始终从种子 0x0D165607 生成 46 个。IcosahedronGeometry(1, 0)，将每个顶点沿径向抖动到其长度的 0.72 到 1.22 之间，重新计算法线，平面着色。拒绝距原点小于 36 或大于 142 的点，并拒绝距另一块岩石 16 以内的点。缩放 2.4 到 8.6。仅三种材质，#C3CBD4、#8E98A4 和 #646C78。每块岩石以 0.04 到 0.18 rad/s 在种子轴上旋转。索引 20 到 45 在 768 px 以下隐藏。不要在调整大小时重新播种。Asteroids 是布景，不是碰撞体。
   布局：战斗机，由基本几何体一次性构建，flatShading MeshStandardMaterial，粗糙度 0.86，金属度 0.02。外层组 rotation.order YXZ。内层组容纳网格。机身：BoxGeometry(0.92, 0.52, 2.5) 位于 (0, 0, -0.15)，颜色 #D5DCE4。机头：ConeGeometry(0.36, 1.05, 4)，rotation.x = -PI/2 使顶点指向局部 -Z，位置 (0, 0, -1.85)，相同机身颜色。脊背：BoxGeometry(0.07, 0.78, 0.85) 位于 (0, 0.55, 0.55)，颜色 #9AA3AE。鸭翼：BoxGeometry(1.25, 0.07, 0.62) 位于 (-0.95, -0.02, -0.35)，rotation.z 0.16，镜像位于 x +0.95，rotation.z -0.16，颜色 #9AA3AE。座舱盖：BoxGeometry(0.42, 0.16, 0.62) 位于 (0, 0.32, -1.15)，颜色 #E0A24A，粗糙度 0.35。喷口：CylinderGeometry(0.14, 0.18, 0.32, 6)，rotation.x = PI/2，位于 (±0.26, -0.08, 1.22)，颜色 #2C3138。辉光圆盘：CircleGeometry(0.12, 6) 位于 (±0.26, -0.08, 1.40)，MeshBasicMaterial #E8A23A，不透明度 0.35。无字母、无圆标、无第二对机翼、无球形座舱、无飞碟、无鸟喙。无人机，九个缓存组：OctahedronGeometry(0.8) 颜色 #C5CED8，TorusGeometry(1.05, 0.045, 5, 16) 带 rotation.x = PI/2 颜色 #7E8794，以及位于 (0, 0, -0.85) 的半径 0.1 传感器球体。仅当该无人机是锁定候选时，传感器自发光为 #E8A23A。无机翼，无座舱。灯光：环境光 #A8B2C0 强度 0.7，方向光 #F3F6FA 强度 1.35 来自 (40, 70, 24)。无阴影，无环境贴图。渲染器：ACESFilmic，曝光 1.05，SRGB，清除为 Void。像素比 min(device, 1.75)，或在 768 以下为 min(device, 1.25)。仅在 768 及以上开启抗锯齿。
   动效：标题姿态：战斗机位于 (0, 0, 18)，外层 rotation.y = 0.55，rotation.x = 0。如果允许动效，给 rotation.y 增加 0.08 rad/s。游玩出生点：(0, 6, 24)，旋转 0。桌面端相机在战斗机局部空间的偏移为 (0, 3.2, 8.4)，注视目标 (0, 0.45, -7)，fov 52。仅在标题状态下、768 以下，偏移 (0, 5.6, 12.2)，注视 (0, 2.4, -6)，fov 60，使飞行器避开 46 vh 的面板。游玩状态在所有宽度下使用桌面偏移，768 以下 fov 62。用 1 - exp(-5.5 * dt) 平滑，并在标题、发射和 Fly again 时瞬间切换。加速期间，添加局部 (0, 0.15, 1.6)，除非开启减少动效。
3. **转向、加速、翻滚和边界** — 当加速计时器大于 0 时速度为 70，否则为 34。沿机头以速度乘以 dt 移动战斗机。正 stickX 以 1.35 rad/s 减小 rotation.y。正 stickY 以 1.05 rad/s 增大 rotation.x。将 rotation.x 限制在 ±1.05，使追逐相机保持直立。带偏航和俯仰的机头方向为 forward = (0, 0, -1) 经外层欧拉角应用。内层 rotation.z 缓动至 -stickX * 0.38。翻滚边缘，当翻滚间隙可用时，如果 stickX >= 0，则用 smoothstep 将 inner.rotation.z 旋转 -2π 持续 0.6 秒，否则 +2π。中立翻滚先放下右鸭翼。在该旋转的前 0.4 秒，显示半径 2.2 的线框球体，颜色 #D5E6F2，不透明度 0.25，并忽略伤害。然后等待 0.45 秒再进行下一次翻滚。加速是一个边缘。如果冷却为 0，将加速计时器设为 0.75。到期时，将冷却设为 2.4。八个 0.05 × 0.05 × 0.8 的盒子在加速时以冰色位于喷口后方，减少动效时隐藏。喷口圆盘在加速期间不透明度变为 1，否则为 0.35。当距原点距离超过 140 时，忽略摇杆，以相同速率将偏航和俯仰转向 -normalize(position)，直到距离低于 136。目标俯仰为所需 y 的 asin。目标偏航为 atan2(-desired.x, -desired.z)。取最短偏航步进。在该覆盖期间，在 HUD 上闪烁 2 px 内嵌冰色线条，每次 0.25 秒。
   布局：桌面端转向：如果 W A S D 或方向键中任一按下，该键盘向量替代指针。否则，指针相对视口中心的偏移，除以宽度和高度的 28%，限制在 ±1，死区 0.08，即为摇杆。指针在中心上方为机头上仰。W 和 ArrowUp 俯仰向上。S 和 ArrowDown 俯仰向下。A 和 ArrowLeft 偏航向左。D 和 ArrowRight 偏航向右。开火在 Space 或画布上主指针按下时保持。锁定在 F 或次要按钮上保持。阻止上下文菜单。加速边缘在 Shift。翻滚边缘在 R。M 切换音调。阻止 Space 和方向键的默认行为。当触摸集群可见时，忽略画布指针转向。当指针为粗指针或宽度低于 768 时，集群显示，且仅在游玩期间。摇杆旋钮在 36 px 半径内移动，值限制在 ±1，死区 0.12，向上为正。BOOST 和 ROLL 在 pointerup 时触发。FIRE 和 LOCK 从 pointerdown 到 pointerup 保持按住，使用 setPointerCapture。在失焦和文档隐藏时清除按住的键。
   动效：倾斜用 1 - exp(-8 * dt) 缓动。翻滚替代倾斜直到完成，然后倾斜缓动回来。边界闪烁不会震动相机。减少动效保持相同的转向、加速和翻滚，仅去掉速度线和相机拉拽。
4. **螺栓、锁定与导弹** — 玩家螺栓是尺寸为 0.08 × 0.08 × 1.6 的方块，MeshBasicMaterial #E7F1F8。池大小为 16。按住 Fire 时，每 0.13 秒生成一个，第一个在 Fire 变为 true 的那一帧生成。在战斗机局部坐标 (0, 0, -2.55) 处生成。速度是机头方向乘以 130，不叠加飞船速度。寿命 1.15 秒，或超出半径 170 后移除。以每片最多 2 个单位的切片移动螺栓。命中判定为切片经过距无人机中心 0.5 + 1.35 以内。伤害 16，仅整数。两个螺栓清空无人机的 32 点护盾。无人机螺栓是尺寸为 0.1 × 0.1 × 1.2 的方块，颜色 #B7C0CA，速度 78，伤害 18，池大小为 24。无人机在距离 62 以内、其机头与玩家之间的角度小于 12 度、且其 1.7 秒冷却已结束时开火。六个无人机螺栓清空玩家满护盾。玩家命中半径为 1.15。受到伤害性命中后，0.35 秒内忽略后续伤害。Shimmer 也忽略伤害。两种螺栓都不要使用绿色或红色。
   布局：按住 Lock 时，在没有存活导弹且锁定冷却为 0 的情况下：选择距机头角度小于 16 度、距离在 8 到 78 之间的最近无人机。如果候选目标改变，进度重置为 0。否则增加 dt / 0.65。达到 1 时，生成导弹，清除进度，并将锁定冷却设为 0.4。提前释放 Lock 会清除进度。中心准星是一个 72 px 的 SVG，768 以下为 56 px，圆半径 28，描边 2，周长 175.93，旋转使虚线从 12 点钟方向开始。轨道描边为 ice，不透明度 0.35。琥珀色虚线偏移为周长乘以 (1 - progress)。四个 ice 刻度，8 px，位于四个基本方位。单词 LOCK，等宽 11 px 琥珀色，仅在存在候选目标时显示。一个世界空间圆环，半径 1.7、管径 0.03，颜色琥珀色，在候选目标处 billboard，且仅在进度大于 0 时可见。导弹是一个缓存的锥体，ConeGeometry(0.12, 0.7, 4)，顶点朝向局部 -Z，MeshBasicMaterial #E8A23A，外加一个小尾翼方块。仅存在一个。速度 92，最大转向 2.2 rad/s，寿命 3.4 秒。通过将 (0, 0, -1) 旋转到指向无人机的方向来瞄准，然后在转向速率内进行 slerp。如果无人机消失，则直线飞行。在 0.8 + 1.35 以内命中会摧毁无人机。保留最后 8 个位置作为 0.16 琥珀色方块，除非启用了减少动态效果。
   动态：锁定进度由模拟时间驱动，而非 CSS 动画，因此释放会在同一帧重置它。允许动态效果时，世界圆环按 1 + 0.05 * sin(time * 5) 缩放。减少动态效果时，圆环保持缩放 1，且不绘制导弹方块。螺栓和导弹仍然移动。
5. **波次、护盾与爆发** — 第 1 波在发射步骤开始，无人机数量为 min(3 + (n - 1) * 2, 9)，速度为 min(16 * pow(1.06, n - 1), 42)。将无人机 i 放置在角度 (i / count) * TAU + 0.7、半径 96、y = ((i % 5) - 2) * 14 处。如果它距玩家在 36 以内，将其推到 36。面向玩家。每一步，以 0.85 rad/s 将机头转向玩家，沿机头方向移动，然后与距离小于 7 的其他活跃无人机分离，分离量为 (7 - distance) * 4 * dt。将无人机限制在半径 146 内。它们不会冲撞，也不会撞击小行星。当最后一个活跃无人机被摧毁时，在同一步开始 2.8 秒的喘息时间。波次编号仅在喘息结束时递增，然后生成下一波。没有最终波。飞行中的无人机螺栓在喘息期间继续移动。新无人机在下一波存在之前不会开火。玩家护盾初始为 100。一个无人机螺栓减去 18。在 1.6 秒没有受到伤害性命中后，每秒恢复 12，最高到 100，仅在游戏中且仅在护盾大于 0 时。为 0 时，钳制到 0，隐藏战斗机，生成玩家爆发，冻结无人机运动，清除剩余螺栓，将状态设为 ended，并在 0.7 秒后显示重试卡片。到达的波次是当前波次编号。Fly again 将波次设为 1、护盾设为 100、生成姿态和 play，而不打开标题。Title 返回到标题姿态并隐藏所有无人机。
   布局：无人机护盾为 32。一个玩家螺栓减去 16。导弹将其设为 0。回收该组，播放摧毁音效，并生成无人机爆发。爆发使用一个 InstancedMesh，PlaneGeometry(0.26, 0.26)，MeshBasicMaterial，transparent，depthWrite false，toneMapped false，池大小 120。桌面预算：玩家 56 个方块，寿命 0.65 秒，速度 6 到 14；无人机 28 个，寿命 0.45，速度 5 到 11。768 以下，或每当设置了减少动态效果时：24 和 12 个方块，寿命乘以 0.35。颜色交替为 #E7F1F8 和 #E8A23A。将每个方块 billboard 到相机。按剩余寿命缩放。死亡实例缩放到 0。如果池已满，仍然移除飞行器。使用 mulberry32 播种方向。无烟雾、无火焰颜色、无身体形状的碎片。在 Fly again 和 Title 时，将粒子返回池中并保留几何体。
   动态：除非启用了减少动态效果，方块会从播种的旋转中翻滚。玩家被命中时，如果允许动态效果，在 0.16 秒内添加相机右偏移 sin(t * 46) * 0.14 * (1 - t / 0.16)，并将机身自发光闪烁 #E7F1F8 持续 0.08 秒。减少动态效果会跳过两者，并且仍然减去护盾。结束时的相机停留在最后一个追逐姿态。
6. **HUD、雷达与触摸控制** — HUD 标签，固定在 src/content.ts 中：SHIELD、WAVE、LOCK、READY、BOOST、Tones on、Tones off。呼号渲染为 KESTREL，大写等宽 13 px，字距 0.18 em。其下方是扇区，13 px 暗色：Harrow Reach。波次块：单词 WAVE 为 11 px 暗色，然后数字在桌面为等宽 28 px、768 以下为 20 px，两位数，然后是一行状态。状态为 3 LEFT 并显示实时无人机数量，或 1 LEFT，或喘息期间的 NEXT WAVE。护盾标签和整数护盾值。填充宽度为 shield / 100。颜色 #8FCBE3，或当护盾低于 25 且大于 0 时为 #E8A23A。Boost 组件，仅桌面：一个 76 px 圆环，半径 26，周长 163.36。READY 是完整的 ice 圆环。在 0.75 秒的 boost 期间，圆环为实心琥珀色，不透明度 0.9，标签显示 BOOST。在 2.4 秒的冷却期间，琥珀色弧从满缩小到空，标签显示一位小数。雷达：玩家三角形 8 px，ice，朝上。其他无人机是 4 px 点 #C5CED8。锁定候选目标是 6 px 琥珀色点。无小行星点和无导弹点。将世界偏移变换到战斗机局部坐标系，并在 SVG 中将局部 x 绘制到右侧、局部 z 绘制到下方，因为局部 -z 是前方，而 SVG 上方是负 y。半径 148 映射到绘图半径减 10 px。钳制到边缘。圆本身是体积边缘。
   布局：HUD 在标题上隐藏，在游戏中和结束时可见。桌面，768 及以上：呼号顶部 24 左侧 24；波次居中顶部 24；音效按钮顶部 24 右侧 24，高度 44，玻璃，边框 Line；雷达 148 px 底部 24 左侧 24；护盾轨道 280 × 10 居中底部 32；boost 圆环底部 24 右侧 24。768 以下：呼号顶部 16 左侧 16；波次顶部 16 居中；音效顶部 16 右侧 16；雷达 88 px 在顶部 72 左侧 16；护盾条左侧 16 右侧 16 在底部 168；隐藏桌面 boost 圆环。准星保持居中。触摸行，仅在游戏期间、粗指针或 768 以下：底部 16，左侧 16，右侧 16，摇杆 116 px 在左侧，右侧 2 × 2 网格，间隙 8 px。可见标签 BOOST、ROLL、FIRE、LOCK。无障碍名称 Steer、Boost、Barrel roll、Fire、Lock。每个按钮至少 64 px。BOOST 按钮以 #E8A23A 在暗色轨道上的 conic-gradient 显示冷却，就绪时显示 ice 边框。按住 FIRE 按钮使用 ice 边框。按住 LOCK 按钮使用琥珀色边框。玻璃面板使用玻璃填充。从 768 起它们还使用 backdrop-blur。768 以下使用相同填充，不透明度 0.86，无模糊。一个礼貌的实时区域在启动时宣布 Patrol started. Wave 1.，在波次生成时宣布 Wave N.，在重试时宣布 Shields down. Wave reached N.。不要宣布每次命中。
   动态：护盾低于 25 时脉冲，在 2 Hz 下于不透明度 1 和 0.55 之间，仅在允许动态效果且护盾大于 0 时。雷达点随模拟移动，不会自行补间。覆盖层不移动。减少动态效果会瞬间切换音效和重试可见性，并将护盾填充保持为完全不透明。
7. **重试卡片、音效与两种视口** — 重试卡片文案，来自变量和波次整数：眉题 KESTREL · HARROW REACH；标题 Shields down；行 Wave reached 4. 使用真实波次；副行 The Glass Moths still hold Harrow Reach.；主按钮 Fly again；次按钮 Title。卡片打开时聚焦 Fly again。Fly again 不重新加载页面。Title 不重新加载页面。音效在 Launch patrol 之前保持关闭，Launch patrol 在该点击内创建或恢复 AudioContext。主增益 0.16。如果构造函数抛出异常，保持声音关闭，并且不要在循环中记录日志。当音频将播放时按钮文本为 Tones on，静音时为 Tones off。M 与按钮一致。将静音标志持久化到 localStorage，键为 tones- 加上中队名称的小写形式，空格转为连字符。忽略存储失败。提示音，无音频文件：玩家螺栓正弦 940 Hz 持续 30 ms，增益 0.04；锁定滴答正弦 520 Hz 持续 20 ms，进度增加时最多每 100 ms 一次；导弹发射方波 160 Hz 持续 80 ms，然后正弦 880 Hz 持续 50 ms；玩家受击为 120 ms 噪声缓冲经过 400 Hz 带通，增益 0.06；无人机摧毁噪声 80 ms；玩家摧毁噪声 220 ms，低通从 1200 Hz 降至 200 Hz；喘息开始正弦 523、659 和 784 Hz，各 70 ms；加速正弦 98 Hz 持续 80 ms；翻滚正弦 320 Hz 持续 40 ms，然后 640 Hz 持续 50 ms。从 mulberry32(0xA0D10) 一次性构建噪声缓冲。静音、隐藏或发射前的标题界面时保持静默。
   布局：重试卡片与标题卡片一致：768 及以上时在左侧 400 px，垂直居中；768 以下为底部弹层，最大 46 vh。打开时隐藏触摸集群。下方保持 HUD 可见，护盾为 0 并显示波次数字。隐藏准星。目标是在 1440×900 和 390×844 下获得干净帧，无水平溢出、无页面滚动、无控制台错误。在触摸行上遵守安全区域内边距。body 上 touch-action none 和 overscroll-behavior none。调整大小会更新相机宽高比、像素比上限以及小行星和星星可见性。如果 180 帧的平均帧时间超过 22 ms，仅一次，将像素比设为 1 并隐藏索引大于 300 的星星。在该削减中不要移除波次、螺栓或触摸控制。
   动效：重试卡片在 0.7 秒爆发后以 160 ms 淡入，或在设置了减少动效时瞬间出现。文档隐藏时 0.7 秒等待暂停。Fly again 和 Title 瞬间切换相机，不播放过渡。减少动效与性能削减相互独立：巡逻保持可玩，仅额外的震动、拖尾、脉冲和长爆发被去除。

## 资产
- 图像：不使用任何图像文件，也不生成静态图。战斗机、无人机、小行星、星星、螺栓、导弹、爆发和边界笼全部用 three.js 绘制。添加一个原创的 public/favicon.svg：32 viewBox、Void 背景、琥珀色菱形描边，不含字母，也不含翅膀。用相对路径 href ./favicon.svg 链接它。在 ASSETS.md 中说明场景由代码绘制，并将 favicon 列为原创。
- 图标：不要安装图标包。触摸控制和音调按钮都是文本。雷达玩家标记是一个 SVG 三角形。在 ASSETS.md 中不要列出任何第三方图标。
- 字体：通过技术栈中指定的 Fontsource 包自托管 Oxanium、Source Sans 3 和 IBM Plex Mono（OFL）。只导入列出的字重。在 ASSETS.md 中记录本地 woff2 文件、npm 包页面和 OFL 许可证。不要从任何 CDN 请求字体。
- 视频：不使用视频，也不使用音频文件。在 Launch patrol 解锁上下文后，用 Web Audio 合成提示音。

## 不要做
- 不要后端、账户、数据库、分析、外部 API、表单提交或远程资源。静音标志是唯一的 localStorage 值，其键由 BRAND 构建。
- 不要 CDN 脚本、字体或图片。字体自托管，从已安装的包中导入 three，使用相对路径，并将压缩文件输出到 dist/，关闭 source map，且不要将 src/ 复制到 dist/。保持 dist 在 20 MB 以下。Vite base 为 './'。
- 唯一的页面是 index.html。不要添加营销页面、价格或裸目录链接。文档标题为 BRAND。首屏是点亮的追逐视图，标题卡在其旁边或下方，绝不在平坦背景上打字。
- 不要使用 Star Wars、Star Fox、Wing Commander、TIE Fighter、X-Wing、Elite、Star Citizen、Freelancer、Freespace、EVE、Homeworld、No Man's Sky 或 Descent 的名称、标志、飞船或瞄准计算机布局。
- 不要构建 Arwing、X-wing S-foils、TIE 球形驾驶舱、六边形太阳能翼、Millennium Falcon、Elite 的 Cobra 或任何其他标志性战斗机轮廓。战斗机是此处指定的短粗飞镖：一个脊鳍和两个固定鸭翼。
- 不要使用短语 "do a barrel roll" 或系列口号、呼号或飞行员名称。滚转控制标签为 ROLL，其可访问名称为 Barrel roll。
- 不要绿色对红色激光、 trench runs、Death Star 几何形状或 Lucasfilm、Nintendo、NASA 或 SpaceX 的徽章。玩家螺栓为 #E7F1F8，无人机螺栓为 #B7C0CA。
- 不要血腥、尸体、血液、燃烧的飞行员或逼真的火球。被摧毁的飞行器仅变成冰和琥珀色方块。
- 不要商业字体和受限库，包括 Aceternity UI、Tailwind Plus 和任何 CC BY-NC。字体为 Oxanium、Source Sans 3 和 IBM Plex Mono，自托管。
- 不要下载的航天器模型、HDRI、库存照片、占位图服务或图标字体。不要人物和肖像。
- 准星是一个圆和四个刻度。不要添加带括号的瞄准计算机、距离数字或名牌。雷达仅显示玩家、无人机点和锁定点。
- 不要添加僚机、主力舰、空间站、地雷、分数、第二枚导弹或小行星碰撞。小行星是场景。
- 不要在 src/content.ts 之外硬编码 Cinder Patrol、Kestrel、Harrow Reach、Glass Moths、Lark 或默认受众行，也不要在屏幕上留下原始变量标记。
- 不要提及 VibeFather，除了可选的 [CREDIT] 链接。不要编造日历日期、价格或在线玩家数量。所有文案为美式英语。
- 不要 Math.random、不要阴影贴图、不要 three/examples 导入，也不要物理引擎。尊重 prefers-reduced-motion 而不停止巡逻。在 390×844 和 1440×900 下，卡片、HUD 和触摸控件必须可用，无水平溢出且无控制台错误。
- 如果 WebGL 失败，显示回退句子，不要在循环中抛出。文档隐藏时冻结步骤。

---
— Prompt by VibeFather · https://vibefather.ai/t/space-dogfight-arcade-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
