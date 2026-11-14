> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 霓虹贪吃蛇 3D 游戏

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个完整的单页 3D 贪吃蛇游戏，位于一个名为 [ARENA] 的深色 16 x 16 网格上。一条四段发光的胶囊状线条和一颗脉动的珠子已经出现在磨砂开始卡片后面的视野中。线条从一个格子滑行到另一个格子，摄像机从南侧跟随，珠子随着一段用 Web Audio 合成的短循环脉动。两条地面规则，Wrap 和 Walls，速度档位 1 到 5，以及本地最佳成绩都是游戏的一部分。由 [STUDIO] 呈现。开场句：[TAGLINE]。

- 受众：独立开发者和前端开发者，他们想要一个完成的静态 Three.js 游戏，带有键盘、滑动和屏幕控件，在桌面和手机上都能清晰阅读。
- 目标：交付一次可重复游玩的运行：一个位于活动网格上的开始卡片、即时游玩、逐渐加快的速度、环绕或围栏规则、暂停、带首字母的游戏结束，以及存储在浏览器中的最佳成绩。第二组名称必须保持相同的网格、蛇、颜色和规则。
- 语气：平静、精确，带一点俏皮。简短的美式英语。谈论线条、地面和珠子。不要军衔，不要炒作，不要网络俚语。

## 技术栈
- 框架：Vite 6 + TypeScript 5
- 样式：原生 CSS
- 库：three（MIT）、lucide（ISC）、@fontsource/syne（OFL）、@fontsource-variable/outfit（OFL）、@fontsource/ibm-plex-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务端代码、无外部 API。
- 设置：
  - 搭建 Vite 的原生 TypeScript 模板。脚本：dev=vite，build=tsc && vite build，preview=vite preview。包名是 BRAND 的 slug，而不是固定的模板 id。将 vite base 设为 './'，build.outDir 设为 dist，build.emptyOutDir 设为 true，build.sourcemap 设为 false。tsconfig：strict 为 true，noEmit 为 true。
  - 仅将 three、lucide、@fontsource/syne、@fontsource-variable/outfit 和 @fontsource/ibm-plex-mono 安装为运行时依赖，另将 Vite 和 TypeScript 安装为开发依赖。不要添加 React、物理引擎、游戏框架、后处理、补间库或音频解码器。
  - 从 @fontsource/syne 导入 Syne 700 和 800，从 @fontsource-variable/outfit/wght.css 导入 Outfit 可变字重，从 @fontsource/ibm-plex-mono 导入 IBM Plex Mono 500。仅将 Lucide 的 Pause、Volume2 和 VolumeX 图标节点复制到 src/icons.ts，并使用 lucide createElement 以 18px、currentColor、aria-hidden 渲染它们。最多等待 800ms 让 document.fonts.ready 完成，然后即使字体仍在替换也显示卡片。
  - 使用模块 src/content.ts、main.ts、game.ts、scene.ts、audio.ts、ui.ts 和 styles.css。将所有专有名称、按钮标签、提示和句子保留在 content.ts 中。网格尺寸、速度、坐标和颜色是 game.ts 和 scene.ts 中的命名常量。
  - 世界坐标轴：+x 向东（屏幕右方），+y 向上，+z 向南（朝向相机，屏幕下方）。北是递减的 iz，在游玩过程中指向屏幕上方。单元格 (ix, iz) 的中心是 ((ix - 7.5) * 1.2, 0, (iz - 7.5) * 1.2)，其中 ix 和 iz 从 0 到 15。可玩边缘是 x 和 z 的 ±9.6。环绕周期是 19.2。
  - 对所有面向玩家的名称使用 BRAND、STUDIO、PICKUP、ARENA、PLACE 和 TAGLINE。句子模式：Collect ${PICKUP} on the ${ARENA}。The ${ARENA} is holding。文档标题是 BRAND、一个 em dash 和 ARENA。当值与默认值不同时，重写 TAGLINE，使其不再命名旧地板或旧拾取物。永远不要显示原始方括号占位符。即使 TAGLINE 使用隐喻，胶囊线仍保持为蛇形。
  - 将分数持久化在键 slug(BRAND) + '-runs' 下，将静音状态持久化在 slug(BRAND) + '-muted' 下。slug 会将所有非字母数字连续段转为一个小写连字符，然后修剪连字符。Lumen Coil 变为 lumen-coil-runs。将 localStorage 包裹在 try/catch 中，如果抛出异常则继续游玩。不使用日历日期。
  - 一个 index.html，lang=en，viewport 带 viewport-fit=cover，一个全视口 canvas，以及 HTML 覆盖层。Body margin 为 0，overflow hidden，背景 #07080A，高度 100dvh。canvas 上 touch-action none。无路由器，无第二个页面。
  - 在加载时和变化时读取 prefers-reduced-motion。减少动态效果会将珠子保持在缩放 1 和光晕不透明度 0.32，冻结标题漂移和网格呼吸，将跟随平滑设置为较慢的 taus，并跳过分数弹出和死亡颜色闪烁。音频仍可播放。
  - 将设备像素比上限设为 1.75，在 800px 以下设为 1.25。开启抗锯齿，关闭阴影，alpha 为 false。如果游玩前两秒后滚动帧时间连续三秒保持在 28ms 以上，将上限降低 0.25 一次，且不低于 1。这样做时不要改变速度。

## 变量
- [BRAND] — 游戏名称（默认："Lumen Coil"）。在开始标题、顶部栏、文档标题和存档键 slug 中使用的虚构名称。
- [STUDIO] — 大厅名称（默认："Northglass Hall"）。虚构的大厅或场馆。显示为游戏名称上方的小字标签。
- [PICKUP] — 拾取物（默认："ion beads"）。小写复数名词，表示线所收集的物品。
- [ARENA] — 地板名称（默认："Relay Floor"）。网格的虚构名称。用于收集语句、暂停行和文档标题中。
- [PLACE] — 机柜信息行（默认："Cabinet 4, 18 Marrow Lane, Port Elling, 6pm–1am"）。一行简短信息：哪个机柜或场馆、虚构的街道地址以及营业时间。
- [TAGLINE] — 开场句（默认："Steer the sea-glass line across the Relay Floor."）。游戏名称下方的一句话。当地板或拾取物变化时重写此句。3D 线条保持为胶囊体。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/neon-snake-3d-game（默认：是；删除此行即可移除）

页面与区块下的文案是针对默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 虚空（Void）`#07080A` — 页面背景、渲染器清除色、雾效，以及遮罩蒙版基底
- 地面（Floor）`#07100F` — 网格着色器背景
- 网格（Grid）`#1E4A42` — 空闲状态网格线
- 热力线（Hot line）`#8CFFE0` — 蛇头附近的网格线
- 海玻璃（Sea glass）`#2EE6A6` — 蛇身自发光、主按钮、焦点环、Wrap 芯片边框、已填充的速度点
- 蛇头（Head）`#E9FFF8` — 蛇头自发光、游戏名称，以及开始标题
- 铜色（Copper）`#FF8A3D` — 珠子自发光、珠子光晕，以及地面上的食物光池
- 奶油色（Cream）`#FFE6D0` — 珠子核心漫反射颜色
- 墨色（Ink）`#071410` — 主按钮上的文字
- 薄雾（Mist）`#D5E8E2` — 正文、HUD 数值，以及幽灵按钮文字
- 静默（Mute）`#8AA39A` — 眉题、提示、地点行，以及署名链接
- 轨道粉（Rail pink）`#FF5D73` — 墙壁轨道自发光、Walls 芯片边框，以及蛇头上短暂的死亡色调
- 卡片（Card）`#0C1414` — 磨砂卡片，82% 不透明度
- 描边（Stroke）`#234840` — 卡片边框、空闲芯片，以及未选中的单选项
- 点（Pip）`#1A3330` — 空的速度点
- 悬停（Hover）`#76F6C4` — 主按钮悬停

### 字体排印
- 游戏名称和开始标题：Syne（OFL），字重 700/800
- UI、按钮、提示和正文：Outfit Variable（OFL），字重 400/500/600
- 分数、长度和步数：IBM Plex Mono（OFL），字重 500

### 布局与动效
- 间距：使用 4px 基准。桌面端卡片内边距 28px，距左侧内缩 36px。移动端卡片内缩 12px，另加安全区域内边距。HUD 芯片间距 8px，顶栏内边距 12px 16px。按钮高度至少 44px。方向键为 64px。游戏视图中心保持避开方向键。
- 圆角：卡片 20px，按钮 12px，单选项 12px，HUD 芯片全圆角，方向键 14px。蛇和珠子是圆胶囊和球体。轨道是锐利的低矮盒体。
- 动效：模拟使用帧增量，上限 0.05 秒，每帧最多处理 3 次单元格穿越。在步进之后渲染。
- 动效：所有胶囊共享一个从 0 到 1 的偏移量，并在单元格中心之间一起滑动。游戏相机从不偏航。其位置以 tau 0.28 秒缓动至南向偏移，开启减少动效时为 0.62。
- 动效：珠子在 96 拍每分钟的每个四分音符上膨胀：在 0.09 秒内从缩放 1 到 1.2，到 0.32 秒时回到 1。减少动效时保持缩放 1 和光晕不透明度 0.32。
- 动效：标题相机以 0.08 弧度的正弦在约 28 秒内漂移，并在运行开始时停止。按钮在悬停时变暗或变亮。按下的控件在 80ms 内缩放到 0.98，除非开启减少动效。
- 动效：暂停会冻结偏移量、节拍相位和标题漂移。隐藏标签页以同样方式暂停，并且在恢复之前不会继续。
- 图像：地面、线条、珠子和轨道由 Three.js 图元和单个网格着色器绘制。不使用照片、生成的位图、纹理、HDRI 或下载的模型。首屏是那个 3D 地面位于磨砂卡片旁边或上方，绝不是平面上的文字。蛇头没有脸。没有人物，也没有肖像。

## 页面与区块
### Lumen Coil — Relay Floor（`index.html`）
1. **发光地板上的开始卡片** — 文档标题：Lumen Coil — Relay Floor，取自 BRAND 和 ARENA。眉题，大写并带 0.12em 字距：Northglass Hall。标题：Lumen Coil。副标题，取自 TAGLINE：Steer the sea-glass line across the Relay Floor。收集说明句：Collect ion beads on the Relay Floor。始终可见的规则行，名词取自 PICKUP：Each of the ion beads scores 10 times the current step。主按钮：Start run。展开按钮：How to steer。其内三行：Arrows or W A S D point up, left, down, and right on the screen。You cannot turn back on yourself。On a phone, swipe the floor or use the pad。P or Esc pauses。以及速率：Steps run at 3.4, 4.4, 5.5, 6.6, and 7.8 cells a second。地板规则单选按钮，默认 Wrap：Wrap，提示 Leave an edge and return on the far side。Walls，提示 A low rail. Touch it and the run ends。仅显示所选单选按钮的提示。Best wrap 和 Best walls 显示已存储的数字或一个长破折号。在 Recent 标题下，列出所选规则的前 3 个首字母缩写，或句子 No runs saved on this browser yet。地址行，取自 PLACE：Cabinet 4, 18 Marrow Lane, Port Elling, 6pm–1am。如果存在 [CREDIT]，在该行下方显示一个 12px Outfit 链接，颜色为 Mute。加载时聚焦 Start run。切换单选按钮会更新轨道和最近列表，且不会开始运行。
   布局：画布在点击前已经渲染出摆好姿势的线和珠子。隐藏 HUD 和触控板。桌面端 900px 及以上：一张 400px 卡片，20px 圆角，28px 内边距，背景 rgba(12,20,20,0.82)，边框 1px solid #234840，backdrop-filter blur(14px)，距左侧 36px 并垂直居中，max-height calc(100dvh - 48px)，overflow auto。它覆盖的面积远小于 1440px 的一半。标题相机位置 (6.2, 8.2, 10.8)，lookAt (0.2, 0.25, 0.5)，fov 44。在 1440×900 下，整条四胶囊线和珠子必须完全位于卡片右侧的开放区域内。如果不在，向西移动 lookAt.x 直到满足条件，并保持相机位于地板南侧。移动端 900px 以下：底部面板，左右各 12px，底部 12px 加安全区域，max-height 58dvh，相同填充，圆角 20px。标题相机 (4.2, 12.4, 10.5)，lookAt (4.2, 0.0, 3.6)，fov 56，使线和珠子落在 390×844 画框顶部 42% 区域内、面板上方。标题 Syne 800，桌面 44px、移动端 34px，颜色 #E9FFF8。副标题 Outfit 400 16px，颜色 #D5E8E2，行高 1.45。Start run 为全宽，48px，背景 #2EE6A6，文字 #071410，Outfit 600。幽灵控件使用 #234840 边框和 Mist 文字。
   动效：卡片显示期间线不移动。珠子脉动。标题相机围绕 lookAt 点按 sin(time * 0.22) * 0.08 弧度偏航。减少动态效果时使用基础相机，无偏航。How to steer 切换其面板，且不会开始游戏。Start run 隐藏卡片、显示 HUD、恢复音频上下文，并在该次点击时开始移动。相机从标题机位缓动到跟随机位。Enter 激活聚焦的按钮。
2. **网格、轨道、蛇和珠子** — 线是四个胶囊，不是动物图片。头部单元格 (11, 8)，然后是 (10, 8)、(9, 8)、(8, 8)，朝向东，偏移 0，因此整条线位于地板东半部，并与左侧卡片保持距离。第一个珠子，以及每次重新开始后的珠子，都是单元格 (14, 8)。后续珠子随机选择一个不在身体中的单元格。头部没有眼睛、嘴、舌头或标记。珠子是一个球体加一个柔和光晕，没有环，也没有环绕部件。
   布局：地板：一个 36×36 的着色器平面，位于 y=0。线条仅存在于 x 和 z 的 ±9.6 范围内，位于单元格边缘的倍数上。到最近线条的世界距离通过 fwidth 输入一个 1.6px 屏幕宽度遮罩。线条颜色在距头部 5.2 到 0.6 单位之间通过 smoothstep 从 #1E4A42 混合到 #8CFFE0。珠子周围 2.0 到 0.2 单位的铜色光池通过 smoothstep 以 35% 强度添加 #FF8A3D。在边缘之外，线条淡出到地板颜色 #07100F。缓慢呼吸将线条强度乘以 0.94 + 0.06 * sin(time * 1.3)，在减少动态效果开启或运行暂停时冻结。FogExp2 颜色 #07080A 密度 0.045。环境光 #10211C 强度 0.25。一个点光源作为头部上方的父级，颜色 #D7FFF3，强度 4，距离 8，衰减 2。清除颜色、雾和页面均为 #07080A。ACES 电影色调映射，曝光 1.05，输出色彩空间 sRGB。头部胶囊：半径 0.38，圆柱长度 0.28，中心 y 0.40，MeshStandardMaterial 颜色 #D9FFF4，自发光 #E9FFF8，emissiveIntensity 2.0，粗糙度 0.4，金属度 0.08。身体胶囊：半径 0.32，圆柱长度 0.36，相同 y，共享材质，自发光 #2EE6A6，emissiveIntensity 1.5。将每个胶囊的长轴与其短单元格增量对齐。两个几何体只创建一次。每个段显示一个网格，仅在线条增长时添加网格，最多 256 个。珠子核心：球体半径 0.32，位于 y 0.48，颜色 #FFE6D0，自发光 #FF8A3D，emissiveIntensity 1.6，粗糙度 0.25。光晕：球体半径 0.58，MeshBasicMaterial #FF8A3D，不透明度 0.30，depthWrite false，加法混合。轨道，仅在选中 Walls 时可见：四个盒子，高度 0.16，厚度 0.12，内侧面位于 ±9.6 边缘，中心在 ±9.66。南北盒子沿 x 长 19.2。东西盒子沿 z 长 19.44，使角相接。材质颜色 #3A2428，自发光 #FF5D73，emissiveIntensity 0.55，粗糙度 0.6。没有柱子，没有塔。在 Wrap 中隐藏轨道。Favicon 位于 public/favicon.svg：一个 32 viewBox 的圆角方块，填充 #07080A，带一条海玻璃弧线，无文字、无面部。
   动效：在标题卡片上，网格位于单元格中心。珠子缩放和光晕跟随节拍时钟。单选按钮变化时轨道立即出现或消失，无镜头切换。减少动态效果跳过呼吸和膨胀。
3. **步进、增长和两条规则** — 速度由长度决定，包括头部：长度 4 到 7 时第 1 步为每秒 3.4 格、10 分；长度 8 到 11 时第 2 步为 4.4、20 分；长度 12 到 16 时第 3 步为 5.5、30 分；长度 17 到 22 时第 4 步为 6.6、40 分；长度 23 或以上时第 5 步为 7.8、50 分。分数在取到珠子时按生效的步进奖励，然后长度增加一，并重新计算步进。填满全部 256 个单元格后，在最后得分后以清空地板结束运行。
   布局：一个共享偏移量按 cellsPerSecond 乘以 dt 推进。每个段 i 从其起始单元格滑向其目标：头部目标为头部加方向，后续每个段目标为其前方的单元格。短增量：减去或加上 16，使每个轴增量为 -1、0 或 1。世界位置是起始中心加上短增量乘以 1.2 再乘以偏移量。在 Wrap 中，如果 x 或 z 离开 ±9.6 边缘，则加上或减去 19.2，使胶囊出现在对侧边缘，而不是横穿中间。在 Walls 中，不要环绕该坐标。当偏移量达到 1 时，在减去之前解析一次穿越。成功提交时，减去 1 并继续，每帧最多 3 次提交。在轨道、交叉或清空时，将偏移量保持在 1 并停止。先应用排队的转向。即将到达的单元格是头部加上该方向。在 Walls 中，0 到 15 之外的单元格以原因 rail 结束运行且不提交，因此头部停在轨道上。在 Wrap 中，用模 16 环绕单元格。如果即将到达的单元格被任何身体单元格占据，但增长队列为 0 时的尾部除外，则以原因 cross 结束且不提交。否则提交。如果该单元格是珠子，加上当前步进的 10 倍，增长队列加 1，并在移动单元格之前播放吃珠提示音。将新头部 unshift。如果增长队列为正，递减它并保留尾部；否则弹出尾部。如果这次穿越吃到了珠子，在更新后身体之外的单元格中均匀随机选择下一个珠子。如果没有剩余，以原因 clear 结束并隐藏珠子。新尾部胶囊在 0.18 秒内从 0.2 缩放到 1，或在减少动态效果开启时以完整大小出现。忽略与当前方向相反的排队转向。一个排队转向，由最新的合法按键替换。在穿越时应用它，然后清除它。方向映射，世界和屏幕：北 (0, -1) 为上，南 (0, +1) 为下，西 (-1, 0) 为左，东 (1, 0) 为右。
   动效：各段在整个步进中一起移动，包括尾部。只有正在穿越开放边缘的胶囊会跳到对侧边缘。暂停、隐藏标签页和游戏结束会停止偏移量。卡顿不得跳过碰撞检查：最多 3 次穿越的 while 循环正是防止这一点。
4. **跟随相机和节拍** — 游戏过程中相机位于头部南侧，不会摆到其后方。键盘上的上在转向后仍对应屏幕上的上。珠子是唯一与音乐锁定的东西。没有可视化器，没有波形，也没有额外发光通道。
   布局：透视相机，近裁剪面 0.1，远裁剪面 80。桌面端 fov 44。低于 800px 时，fov 56。期望位置为头部世界位置加上桌面端的 (0, 7.4, 8.2)，以及低于 800px 时的 (0, 10.2, 10.4)。注视点为头部加上桌面端的 (0, 0.4, -1.6) 和低于 800px 时的 (0, 0.3, -2.2)，这样头部以北更多的地板会保持在垫子上方可见。每一帧，将位置和注视点朝这些目标移动 1 - exp(-dt / tau)，然后 lookAt。位置 tau 0.28，注视 tau 0.16。减少动态效果：0.62 和 0.45。camera.up 保持 (0, 1, 0)。无滚转、无抖动、无 fov 冲击。游戏结束时，将期望相机高度增加 1.2。减少动态效果会跳过该额外高度。音频：在 Start 运行处理函数内创建 AudioContext 并调用 resume。主增益 0.2。以每分钟 96 拍循环，四分音符 0.625 秒，8 拍。从动画帧提前 0.15 秒调度，而不是从 setInterval。每一拍：一个 740Hz 的三角波滴答，增益 0.05，衰减 0.05 秒。低音方波通过 220Hz 的低通，增益 0.12，时长 0.2 秒，八个节拍上的频率为 55、55、41.2、49、43.65、43.65、32.7、41.2。第 0 拍和第 4 拍还播放一个在 0.09 秒内从 120Hz 下降到 52Hz 的正弦波，增益 0.2。吃豆提示音：正弦波在 0.07 秒内从 520Hz 到 880Hz，增益 0.15。轨道或交叉结束：正弦波在 0.32 秒内从 200Hz 到 45Hz，增益 0.16，然后停止循环。玩家结束的运行只会在 0.08 秒内将主增益渐变到 0。清空地板播放 523、659 和 784Hz 的正弦波，每个 0.12 秒，增益 0.12，然后停止循环。静音会在 0.03 秒内将主增益设为 0 并存储该标志。标题卡从 performance.now 对 0.625 取模进行脉冲。当运行开始时，将相位重置为 0 并使用音频时钟。暂停会挂起上下文并冻结相位。
   运动：每一拍后的珠子包络，经过时间 e：当 e 小于 0.09 时，缩放 1 + 0.2 * (e / 0.09)，光晕不透明度 0.28 + 0.28 * (e / 0.09)；直到 0.32，缓动回缩放 1 和不透明度 0.28；然后保持。减少动态效果：整个运行期间包括标题，缩放 1，不透明度 0.32。新珠子在 0.09 秒内从 0.6 缩放到 1，除非启用了减少动态效果。
5. **HUD、暂停和游戏结束** — 顶栏字标：Lumen Coil，Syne 700 18px，颜色 #E9FFF8，Northglass Hall 使用 Outfit 500 12px 颜色 #8AA39A。低于 400px 时用省略号截断字标，最大宽度 58vw。声音按钮 aria-label Sound on 或 Sound off，aria-pressed，Lucide Volume2 或 VolumeX。暂停按钮，Lucide Pause，aria-label Pause，仅在运行移动时可见。HUD 芯片，IBM Plex Mono 13px：Score 和整数，Len 和长度，Step 和数字加五个 6px 点，以及规则名称 Wrap 或 Walls。使用 en-US 分隔符对千位分组。Walls 芯片边框为 #FF5D73。Wrap 芯片边框为 #2EE6A6。其他芯片边框为 #234840。芯片填充 rgba(7,8,10,0.72)，文本 #D5E8E2。暂停标题：Paused。行：The Relay Floor is holding。按钮：Resume 和 End run。End run 以原因 ended 打开游戏结束，保留分数，并且不播放下降音调。游戏结束标题：Run over，或当棋盘已满时为 Floor clear。原因行：The line crossed itself. The rail stopped the run. You ended the run. Every open cell is taken。重复 Score、Len、Step 和规则。如果分数高于该规则存储的最佳分数且高于 0，显示 New best for Wrap. 或 New best for Walls. 并立即写入最佳分数。首字母字段，maxlength 3，仅字母，大写，autocomplete off，aria-label Initials，三个字母。空保存存储 YOU。按钮 Save，然后 Saved。Run again 重新开始相同规则、相同开局单元格、位于 (14, 8) 的珠子、分数 0 和音频循环，无需重新加载。Change rule 返回开始卡片，单选按钮可用且线条再次摆好。
   布局：顶栏固定，内边距 12px 16px 加上安全区域，除其按钮外 pointer-events none，z-index 3。在 800px 及更宽时，HUD 在该栏中居中。低于 800px 时，HUD 是栏下方第二行四个等宽芯片。HUD 在开始卡片和游戏结束时隐藏，在游玩或暂停时可见。暂停和游戏结束是对话框，aria-modal true，焦点被捕获，由其标题标记。桌面卡片为 400px，居中，与开始卡片相同的磨砂效果。遮罩 rgba(7,8,10,0.45) 覆盖视图。移动端：底部工作表，最大高度 70dvh，内部滚动。游戏结束不会将页面困在死胡同中：Run again 和 Change rule 都存在。一个视觉隐藏的礼貌实时区域宣布 Run started、Paused、Run over with the score 和 New best。画布的可访问名称为 Glowing grid snake game。
   运动：吃豆时，分数数字在 120ms 内从 1 缩放到 1.08 再回到 1。减少动态效果会跳过该弹出效果。在轨道或交叉结束时，头部自发光在 0.32 秒内缓动到 #FF5D73 然后返回，除非启用了减少动态效果。对话框在 160ms 内淡入，或在启用减少动态效果时立即显示。打开暂停会挂起音频并冻结步进。恢复会继续相同的偏移和节拍相位。返回到隐藏标签页时保持暂停。
6. **键盘、滑动和方向垫** — 游玩期间的键盘：ArrowUp 或 W 排队向北，ArrowLeft 或 A 向西，ArrowDown 或 S 向南，ArrowRight 或 D 向东。忽略 e.repeat。当前方向的反向会被忽略，并且不会清除已排队的转向。最新的其他方向会替换队列。P 或 Escape 暂停，相同的键从暂停恢复。Escape 在游戏结束时不做任何事。阻止这些键的默认行为，以免页面滚动，但首字母字段聚焦时除外。不要将 Space 绑定为全局快捷键。按钮使用原生 Enter 和 Space。
   布局：仅在运行移动时显示方向垫，并且仅在指针为粗略或宽度低于 800 时显示。在开始卡片、暂停期间和游戏结束时隐藏它。四个 64px 键呈十字形，间隙 8px，中心底部 16px 加上安全区域。中心为空，没有第五个按钮。标签是 CSS 箭头，10px，颜色 #D5E8E2，不是额外的图标文件。可访问名称：Turn up、Turn left、Turn down、Turn right。它们设置与箭头相同的四个方向。游玩期间在画布上滑动：指针按下和抬起，如果手势从控件上开始则忽略。当较长轴超过 28px 且至少为较短轴的 1.15 倍时，滑动计数。向上、向左、向下和向右滑动与箭头键匹配。在失焦、暂停和标签页隐藏时释放卡住的键和指针。
   运动：按下的方向垫键使用填充 rgba(46,230,166,0.16) 和缩放 0.98，或在启用减少动态效果时不缩放。焦点环为 2px 实线 #2EE6A6，每个控件上偏移 3px。
7. **分数、手机适配和回退** — 存储的 JSON 是一个包含 wrap 和 walls 的对象。每个都包含 best（一个数字）和 board（最多五个对象，包含 name、score 和 length）。按分数降序、然后长度降序对 board 排序。损坏的 JSON 重置为 best 0 和空 board。数字最佳分数在游戏结束时、Save 之前更新。Save 仅编辑命名 board。两个规则都显示在开始卡片上。游戏结束显示刚玩过的规则的命名前五名。静音在重新加载后保持。不会向设备外发送任何内容。
   布局：目标 1440×900 和 390×844，无水平溢出、无页面滚动、无控制台错误。栏、工作表和方向垫上的安全区域内边距。如果长大厅名称换行，开始工作表在自身内部滚动。字标在与声音按钮碰撞之前省略。如果缺少 WebGL 或渲染器抛出异常，隐藏画布并显示磨砂卡片，包含标题、牌组和句子 This browser could not start the 3D floor. A current browser with WebGL still can。保持 How to steer 可用。不要将该失败记录为未捕获错误。在拆卸时释放几何体、材质、监听器和音频上下文。保持 dist 低于 20 MB。Favicon 从 index.html 链接。内部链接（如果有）指向 index.html。
   运动：像素比削减不会重置运行。减少动态效果和质量削减是独立的。摆好的线条在第一个呈现的帧上可见，在按下开始按钮之前。

## 资产（Assets）
- 图像（image）：不使用照片、生成的位图或下载的纹理。地面、线条、珠子、栏杆和光晕均用代码绘制。Favicon 是位于 public/favicon.svg 的原始 SVG，一个深色圆角方块和一条海玻璃弧线。在 ASSETS.md 中说明场景为代码绘制，且不使用任何外部图像文件。
- 图标（icon）：仅将 lucide 包（ISC）中的 Pause、Volume2 和 VolumeX 复制到 src/icons.ts，并使用 lucide createElement 绘制它们。在 ASSETS.md 中列出这三个图标、https://www.npmjs.com/package/lucide、Lucide contributors 和 ISC 许可证。内边距箭头（Pad chevrons）是 CSS，不是图标。
- 字体（font）：通过 @fontsource/syne、@fontsource-variable/outfit 和 @fontsource/ibm-plex-mono（OFL）自托管 Syne、Outfit Variable 和 IBM Plex Mono。在 ASSETS.md 中列出本地 woff2 文件、npm 包页面、捆绑的 OFL 声明中的版权行以及 OFL。不要请求 fonts.googleapis.com 或任何其他字体主机。
- 视频（video）：不使用视频和音频文件。循环、进食提示音、结束音调和清空地面音调是 Web Audio 中的振荡器，由 Start run 手势启动。

## 不要做
- 不要添加后端、账户、数据库、分析、远程 API、多人模式、支付、任何会提交到某处的表单，或公开排行榜。最佳成绩、首字母缩写和静音状态保留在 localStorage 中。
- 不要从 CDN 加载脚本、字体、图标、模型、纹理、图像或音频。使用相对路径，将压缩文件输出到 dist/，不要输出 source map，也不要将 src/ 复制到 dist/。保持 dist 在 20 MB 以下。
- 不要构建营销落地页、定价页或滚动叙事。交付物是一个可玩的 index.html，并且网格、线条和珠子在首屏可见。
- 不要使用 Agent OS、GoldieBench、AI Profit Boardroom、AIPB、Grok、xAI、Julian Goldie、Built in the Agent OS 或 Join AIPB。不要使用口号 The chart is the vendor's. The game is yours. 或 Played, not posed.
- 不要使用标题 NEONSNAKE、NEONSNAKE 3D、CYBER GRID 3D 或 SELF-PILOTING NEON ARENA，也不要使用界面词语 AUTO-PILOT、AUTOPILOT ON、LINK SEVERED、sector 7、GRID SYNC、INITIALIZE、data-nodes 或 Slither through the synthwave grid。
- 不要给蛇加上眼睛、脸、舌头、轨道环、角柱或塔。不要添加自动驾驶、寻路、自玩演示或任务叠加层。不要命名或描绘 Nokia、手机或任何已发布的贪吃蛇游戏产品。
- 不要将游玩摄像机偏航到头部后方。方向键、WASD、滑动和触控板保持与屏幕上的北、西、南、东对齐。
- 不要在只有头部移动时让身体逐格瞬移。每个胶囊体都按共享偏移滑动。环绕会将一个胶囊体移动到远端边缘，并且不会在地面上画出拖痕。
- 不要在 content.ts 之外硬编码 Lumen Coil、Northglass Hall、ion beads、Relay Floor 或 Marrow Lane。当变量变化时，保持网格、速度、颜色和控制不变。永远不要显示原始方括号占位符。
- 除开始卡片上单个可选的 [CREDIT] 链接外，不要提及 VibeFather。不要显示日历日期。
- 不要在 Start run 之前自动播放声音、晃动摄像机或闪烁整个屏幕。对于珠子膨胀、标题漂移、网格呼吸、分数弹出和死亡色调，要遵循 prefers-reduced-motion。
- 不要在失焦、暂停或标签页隐藏后让按键或指针卡住。暂停时不要推进偏移或节拍。
- 不要放弃手机布局。在 390×844 下，触控板按键为 64px，文字不溢出，头部和珠子位于开始面板上方。
- 如果 WebGL 失败，不要显示空白页面。显示一次 frost fallback，并且不要在帧循环中抛出异常。
- 不要添加 bloom 后处理、粒子拖尾、下载的模型或第二个场景。内部链接（如果有）指向 index.html，而不是裸目录。

---
Inspired by Grok Build neon snake demo — https://agentos.guide/grok-4-7-agent-os
— Prompt by VibeFather · https://vibefather.ai/t/neon-snake-3d-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
