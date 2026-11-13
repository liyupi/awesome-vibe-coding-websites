> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# Dusk Track Racing Game

完全按照下面描述构建这个网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个在 [PLACE] 的封闭赛道 [TRACK] 上进行的单页第三人称赛车游戏。玩家驾驶代码构建的 [CAR]，在黄金时刻进行 3 圈比赛，对抗 [RIVALS] 中指定的三位对手，包含检查点门、漂移加速、保存在浏览器中的单圈幽灵、小地图和领奖台。实时场景即为首屏。

- 受众：希望获得一个完整、可换肤的 Three.js 街机赛车游戏的开发者和独立黑客，该游戏以静态文件运行，可通过键盘或屏幕触控操作游玩。
- 目标：交付一场完整的比赛：开始面板、倒计时、完整比赛、暂停状态和领奖台。玩家可以击败对手、保存最佳单圈，并作为幽灵重跑该圈，在 1440×900 和 390×844 两种分辨率下均可运行。
- 语气：温暖、平实、具体。美式英语。俱乐部比赛用语，不嘲讽、不使用军事化措辞，不涉及真实系列、制造商或车手。

## 技术栈
- 框架：Vite 6 + TypeScript 5
- 样式：原生 CSS（Vanilla CSS）
- 库：three（MIT）、@fontsource/big-shoulders-display（OFL-1.1）、@fontsource/outfit（OFL-1.1）、@fontsource/share-tech-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务端代码、无外部 API。
- 设置：
  - 搭建 Vite 的原生 TypeScript 应用脚手架。脚本：dev=vite，build=tsc && vite build，preview=vite preview。不要添加 React、物理引擎、后处理栈或游戏框架。
  - 在 vite.config.ts 中将 base 设为 './'，build.outDir 设为 dist，build.emptyOutDir 设为 true，build.sourcemap 设为 false。启用严格 TypeScript。
  - 安装 three 以及上述三个 Fontsource 包。仅导入 Big Shoulders Display 500、700 和 800，Outfit 400、500 和 600，以及 Share Tech Mono 400。
  - 使用 index.html 以及 src/content.ts、main.ts、track.ts、cars.ts、drive.ts、race.ts、hud.ts、input.ts、audio.ts 和 styles.css，外加 public/favicon.svg 和 ASSETS.md。
  - 将每个名称、按钮标签和句子都放在 src/content.ts 中。从该文件读取 [BRAND]、[PLACE]、[TRACK]、[CAR]、[DRIVER] 和 [RIVALS]。将 [RIVALS] 按逗号拆分为恰好三个去除首尾空格的名称。
  - 对每个变量集，圈数保持为 3，玩家编号为 14，对手颜色为 #2f6f62、#d7a441 和 #3d4c7a，对手编号为 7、22 和 3。新的地点只改变文案，不改变生物群系、时钟时间、网格或调色板。
  - 除起跑线外的门标签保持为 North Gate、Sweeper 和 Hairpin。起跑线标签为 [TRACK] 加上单词 line。
  - 从品牌和赛道的小写形式派生 localStorage 键和树种子，将空格替换为连字符。绝不要在 content.ts 之外硬编码默认名称。
  - 在绘制画布号码牌或小屋标牌之前，等待 document.fonts.ready。将这些纹理设置为 SRGBColorSpace。将 document.title 从 content.ts 设置为 [BRAND] — [TRACK]，并使 index.html 中的静态标题与默认值匹配。

## 变量
- [BRAND] — 赛车俱乐部（默认：“Pennyglass”）。虚构的俱乐部名称。用于开始界面标题、小屋标牌，以及存档键的一半。
- [PLACE] — 山脊名称（默认：“Wickpenny”）。虚构的地点。用于开始面板上的眉题（eyebrow）和练习赛（practice-heat）文案行。
- [TRACK] — 赛道名称（默认：“Barleycut”）。虚构的赛道。用于副标题、起跑线标注、领奖台，以及存档键的另一半。
- [CAR] — 赛车名称（默认：“Skiff 4”）。虚构的封闭式车轮赛车。显示在赛道名称旁边。网格模型不变。
- [DRIVER] — 玩家名称（默认：“Nell Harp”）。虚构的车手。用于领奖台句子和玩家的成绩行。
- [RIVALS] — 三位对手（默认：“Nia Pell, Omar Voss, Bess Calder”）。三个虚构名称，以逗号分隔，按青绿色（teal）、金色（gold）和暮蓝色（dusk-blue）的顺序排列。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/dusk-track-racing-game（默认：是；删除此行即可移除）

“页面与区块”（Pages & Sections）下的文案是按默认值编写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 墨色（Ink）`#1c1612` — 面板、小地图填充、车顶、轮胎橡胶、起跑线深色方格
- 纸色（Paper）`#f6f1e7` — 墨色上的文字、边缘线、起跑线浅色方格、焦点环
- 珊瑚色（Coral）`#c4512c` — 玩家车身、主按钮、玩家小地图三角
- 金色（Gold）`#e7c27a` — 中央虚线、加速填充、小地图缎带、漂移按钮
- 太阳色（Sun）`#ffb067` — 平行光、门帘、幽灵自发光、加速辉光
- 地平线色（Horizon）`#e7a15a` — 天空地平线带和雾色调
- 天顶色（Zenith）`#1e3a5f` — 天空顶部和画布后的页面背景
- 沥青色（Asphalt）`#3a342e` — 赛道表面
- 缓冲区色（Runoff）`#6b5344` — 泥土路肩
- 草色（Grass）`#6d7a45` — 缓冲区外的地面平面
- 松色（Pine）`#3e5340` — 树冠
- 青绿（Teal）`#2f6f62` — 第一位对手
- 对手金（Rival gold）`#d7a441` — 第二位对手
- 暮蓝（Dusk blue）`#3d4c7a` — 第三位对手
- 危险色（Danger）`#d8452f` — 尾灯、逆行横幅、红色起跑灯

### 字体排印
- 俱乐部名称、名次、速度和领奖台名次：Big Shoulders Display（OFL），字重 500/700/800
- 正文、按钮和 HUD 标签：Outfit（OFL），字重 400/500/600
- 单圈时间：Share Tech Mono（OFL），字重 400

### 布局与动效
- 间距：4 px 基准。桌面面板内边距 28 px，HUD 内缩 20 px。移动端内缩 14 px 加安全区。按钮至少 44 px，粗指针控件至少 72 px。手机上的开始面板保持在 58 vh 以内，并在自身内部滚动。
- 圆角：开始、暂停和领奖台面板为 18 px。胶囊按钮。小地图和转向盘为圆形。加速轨道为 999 px 胶囊形。世界网格保持棱面感，不像 UI 那样做圆角。
- 动效：追逐相机使用指数平滑缓动，并可根据转向最多侧倾 4 度。加速时视野在 1.2 秒内扩大 6 度。
- 动效：倒计时数字使用 160 ms 的缩放，从 0.92 到 1。漂移尘土为 12 个短命微粒。蓄满的加速条脉冲一次。
- 动效：覆盖层在 180 ms 内淡入淡出，位移不超过 8 px。检查点提示持续 0.7 秒。
- 动效：prefers-reduced-motion 会移除侧倾、视野冲击、尘土、脉冲、覆盖层位移和倒计时缩放。比赛、幽灵和对手仍然移动，因为那种运动就是游戏本身。
- 图像：整个世界的绘制都在 Three.js 中完成：天空着色器、倾斜缎带、闭轮楔形车、门、草捆、轮胎、锥桶、松树、山丘、小屋，以及由无特征方块观众组成的看台。不使用照片、生成图像、HDRI、下载模型或品牌标识。黄金时刻的光照是一轮低垂的暖阳和长长的阴影。缎带上的停放车辆是首屏的锚点，开始面板位于其旁边，而不是取代它。

## 页面与区块
### [BRAND] — [TRACK] (`index.html`)
1. **竞速外壳与起步热身** — 文档标题为 [BRAND] — [TRACK]。状态包括 start、controls、countdown、racing、paused 和 podium。打开时处于 start 状态。眉题（eyebrow）为 [PLACE]，全大写，使用 Outfit 600，12 px，字距 0.14 em。标题为 [BRAND]，使用 Big Shoulders Display 800。其下方一行是 [TRACK] · [CAR]。副文案（deck）严格为：3 laps of [TRACK] in the [CAR]. Drift to fill the boost, stay on the asphalt, and beat [first rival], [second rival], and [third rival]. 最佳圈速行显示 Best lap m:ss.ss 或 No best lap yet。细则文字：A practice heat at [PLACE]. The best lap stays in this browser and comes back as a ghost. 按钮：Start race（主按钮，Coral）和 Controls（Ink 上的 Paper 文字）。将可选的 [CREDIT] 链接放在细则文字下方。
   布局：Body 外边距 0，overflow hidden，背景 Zenith #1e3a5f。一个固定 canvas 填满视口。UI 是固定层，pointer-events none，按钮和面板恢复为 auto。桌面端起始面板宽 420 px，距左侧 32 px，垂直居中，Ink 72% 不透明度，8 px 背景模糊，18 px 圆角，Paper 文字。车辆位于右侧三分之二区域。低于 700 px 时，面板为底部抽屉（bottom sheet），最大高度 58 vh，内部滚动，相机抬升，使车辆和天空占据屏幕顶部。不要使用加载墙或纯文字封面。
   动效：首个渲染帧后，面板在 180 ms 内淡入。在 start 状态，车辆保持停放，相机可在 6 秒内摆动 0.15 m。减少动态效果（Reduced motion）会冻结该摆动。Start race 进入 countdown，不重新加载页面。
2. **倾斜的黄金时刻赛道** — 坐标轴：+x 向东，+y 向上，+z 向南。构建一个 CatmullRomCurve3，closed 设为 true，tension 为 0.5，经过以下 x,z 米坐标：(0, 0), (72, 6), (136, 32), (168, 96), (128, 152), (56, 168), (-8, 136), (-56, 88), (-72, 32), (-32, -16)，然后回到起点。围绕原点缩放 x 和 z，直到曲线长度为 1000 m。采样 250 个等距点。Yaw 0 朝向 +x。正 yaw 转向 +z。车头构建在局部 +z 上，因此将 yaw 枢轴的 rotation.y 设为 Math.PI / 2 - yaw。右向量为 normalize(cross(tangent, up))，因此正横向为行进方向的右侧。在 right/up 平面中构建每个带状横截面，围绕切线按倾斜角旋转，并保持中心点位于 y = 2。游戏玩法中的横向是到中心线的带符号 x,z 距离，而不是沿倾斜表面的距离。倾斜在弧长 200 到 500 为 +16 度，在弧长 720 到 850 为 +8 度，用 smoothstep 在 30 m 内混合，其他位置为 0。正倾斜抬高右边缘。沥青半宽为 8 m，颜色 #3a342e。Paper 边缘线位于每侧边缘内 0.4 m。Gold 中心虚线为 4 m 涂料和 6 m 间隔。弧长 0 处的起跑条纹为 0.8 m 的 ink 和 paper 方块横跨沥青，无标志。缓冲区继续到 18 m，倾斜为 0.35 倍，颜色 #6b5344。再往外是草地平面 #6d7a45。仅在倾斜路段设置路缘：0.6 m 条纹，颜色 #c4512c 和 #f6f1e7。
   布局：门架位于弧长 0、250、500 和 750。每个门架是两根锥形塔柱，底部 0.7 m，顶部 0.4 m，高 5.2 m，颜色 #c4653a，放置在每侧沥青边缘外 1.2 m，并在 4.2 m 处有一根 0.45 m 的奶油色横梁。弧长 0 的横梁使用 ink 和 paper 条纹。塔柱之间有一块 Sun 色垂直平面，不透明度 0.22，不写入深度。标注名称：[TRACK] line、North Gate、Sweeper、Hairpin。干草捆堆，每堆三个盒子，颜色 #c4a15a，位于弧长 780、805 和 830，横向 -6.6 m。两组轮胎堆，每组四个 8 边形环，颜色 #2c2a28，带 #d4722a 色带，位于弧长 460 和 478，横向 +7.2 m。四个锥桶，高 0.7 m，颜色 #e07a2f，带 Paper 色带，位于弧长 560、578、596 和 614，横向 +6.6、-6.6、+6.6、-6.6。一个三级木质看台，长 18 m，颜色 #8a6244，位于弧长 45，横向 +22，有 18 个无面部特征的观众盒子，颜色为 Coral、Teal、Rival gold、Dusk blue、Paper 和 Ink。无面部。一座小屋位于弧长 45，横向 -22，Ink 墙壁和 Coral 屋顶，带一块 canvas 标牌，写着 [BRAND]。弧长 70 处有一个五灯龙门架，仅作视觉用途。十四棵松树和五个山丘穹顶必须距中心线至少 22 m，使用来自 [TRACK] 的 mulberry32 种子放置，绝不使用 Math.random。四十丛草可以位于缓冲区。看台、小屋、龙门架、树木、山丘和草没有碰撞。只有草捆、轮胎、锥桶、对手和沥青边缘会影响车辆。
   动效：世界不会自行旋转。起跑灯为 Ink 外壳，在 3、2 和 1 期间全部为 Danger 红色，然后在 GO 时变为 #d6e38a 持续 1.5 秒，然后变暗。减少动态效果会切换灯光颜色，但不产生辉光脉冲。阴影投射者为车辆、门架、小屋和看台。
3. **玩家车辆与街机驾驶** — 构建一个闭轮楔形车并克隆它。它不是开轮式赛车，也不是已知的量产车：钝头两步式车鼻、短座舱、小唇形扰流板、矩形灯、无巨大尾翼、无赞助商涂装。局部 +z 为车鼻。将网格父级设为 yaw 枢轴，使得 yaw 为 0 时车鼻指向世界 +x。门槛盒 4.20 × 0.28 × 1.78，位于 y 0.36。车鼻盒 1.35 × 0.32 × 1.62，位于 z 1.25，y 0.55。车鼻尖端 0.70 × 0.18 × 1.40，位于 z 1.85，y 0.48。尾部盒 0.85 × 0.36 × 1.70，位于 z -1.55，y 0.62。座舱 1.45 × 0.55 × 1.28，位于 z -0.15，y 1.02，颜色 #241c18。挡风玻璃 0.08 × 0.42 × 1.18，绕 x 旋转 -32 度，位于 z 0.55，y 1.08，颜色 #b7d4d8，不透明度 0.55。两个扰流板立柱和一片 1.40 m 宽的叶片，位于 y 1.12。车轮上方有四个拱形盒。车轮为 10 段圆柱体，半径 0.36，位于 x ±0.92 和 z ±1.28。轮毂 #e8d7b0。前灯自发光 #fff1cc。尾灯自发光 #d8452f。玩家车身 #c4512c，车门号码 14 在 256×128 canvas 上。MeshStandardMaterial roughness 0.62，metalness 0.08。对手仅重新着色车身面板。
   布局：在 x,z 平面上模拟。速度沿 yaw 加上漂移滑移角。每帧将车辆投影到最近的中心线采样点，仅从上次命中点搜索 ±40 个采样点，使匹配不会跳跃。根据该横向偏移处的倾斜设置高度，并将网格侧倾到倾斜角。相机为透视追逐：FOV 68，低于 700 px 时为 76，后方 7.2 m，上方 2.6 m，看向前方 6 m。低于 700 px 时使用后方 9.2 m 和上方 4.0 m，使底部抽屉和拇指不会遮挡车辆。速度上限为 42 m/s，或 boost 激活时为 54 m/s。加速度为 16 m/s²，制动为 28 m/s²，倒车上限为 6 m/s。无油门时，以 3 m/s² 滑行。不要添加二次阻力，否则车辆无法追上对手。Yaw 速率从静止时的 1.6 rad/s 缓和到最高速度时的 0.5 rad/s。键盘转向为数字式，速率限制为每秒 3.5 单位。转向板为模拟式。
   动效：固定步长 1/60，累加器上限 0.1 s。车轮随速度旋转，前轮最多转向 18 度。当油门按住、速度超过 18 m/s，且漂移控制按住或制动按住且转向超过 0.4，并且 boost 未激活时漂移。滑移角向 steer 乘以 16 度移动。boost 计量在漂移时每秒填充 0.40，否则每秒下降 0.15。达到 1 时保持待发（armed）。Shift，或在待发时松开漂移，会消耗它：以 boost 速度持续 1.2 s，然后计量为 0。尘土微粒仅在漂移时生成。减少动态效果会跳过尘土和 FOV 冲击。相机位置平滑为 1 - exp(-8 dt)。
4. **对手、幽灵、门架与热身规则** — 三个对手在轨道上使用相同网格。在 [RIVALS] 中的顺序映射到 teal 7 号、gold 22 号和 dusk blue 3 号。生成弧长和横向：第一 52 m 和 -2.4 m，第二 36 m 和 +2.6 m，第三 8 m 和 +0.4 m。玩家生成于弧长 20 m，横向 0，因此发车顺序为第一、第二、玩家、第三。对手目标速度（m/s）：0–180 为 34，180–460 为 27，460–700 为 32，700–860 为 18，860–1000 为 34，加速度限制为 10 m/s²。它们不漂移也不 boost。对手的弧长向前越过 0 时完成一圈，第一次越过计为第 1 圈。每辆车的进度为已完成圈数乘以 1000 加上当前弧长。该顺序驱动 HUD 名次和领奖台。如果对手在 2.4 m 内与玩家重叠，将它们分开，并将双方速度乘以 0.92。对手随后以 4 m/s 返回其横向位置。障碍物碰撞将速度乘以 0.72，将横向推离障碍物 1.2 m，且速度绝不低于 7 m/s。冷却 0.45 s。
   布局：离开沥青意味着绝对横向大于 8 m：速度上限 26 m/s，加速度降至 0.45，并显示 Back on the asphalt。如果持续 1.2 s，或绝对横向超过 20 m，则重置到最后一个已通过的门架，横向 0，朝向沿切线，速度 16 m/s。最后一个已通过的门架从弧长 0 开始，然后随着按顺序通过 250、500 和 750 更新。显示 Reset 0.8 s，在此期间忽略障碍物碰撞。不要清除圈速标志，也不要结束热身。门架必须按顺序向前通过：250，然后 500，然后 750，然后弧长 0。在玩家首次到达弧长 40 之前忽略弧长 0。在三个标志都设置的情况下越过弧长 0 即完成一圈，存储圈速并清除标志。HUD 圈数显示为已完成 + 1，上限为 3。玩家完成 3 圈时热身结束。每辆车存储自己的完成时钟。未完成的对手按圈内进度排在完成者之后。逆行，即朝向与切线相反持续 0.4 s，显示 Wrong way，且不重置车辆。
   动效：在一圈中每 100 ms 记录玩家的世界位置和 yaw，上限 800 个采样点。如果该圈是最佳，保留它并写入 localStorage 键 [brand-slug]::[track-slug]::best-lap。将其重放为 Coral 克隆，不透明度 0.32，自发光 Sun 0.15，depthWrite false，无阴影且无碰撞。玩家每次开始一圈时重新启动幽灵。首次访问且无存档时不显示幽灵。Clear ghost 删除键并隐藏克隆。车辆在倒计时期间保持静止。GO 时时钟开始，输入生效。暂停、隐藏文档和领奖台会冻结时钟和步进。
5. **HUD、小地图、触摸与领奖台** — 比赛中显示名次为 1st、2nd、3rd 或 4th；圈数计数器显示 Lap 1 / 3；当前圈速和 Best m:ss.ss 或 Best —，使用 Share Tech Mono；速度显示为四舍五入的 km/h 整数，带 km/h 标签，倒车时前缀 R。时间在 10 分钟以下使用 m:ss.ss。boost 标签为 BOOST。横幅一次一个，使用门架名称、Back on the asphalt、Reset 或 Wrong way。如果下一个对手在 30 m 内，一行小字显示 Ahead: 和该对手名称，或当该对手是紧后车时显示 Behind:。倒计时为 3、2、1，各 700 ms，然后 GO 持续 400 ms。领奖台标题为 Heat complete。如果玩家第一：[DRIVER] took [TRACK]。否则：[DRIVER] finished [ordinal] at [TRACK]。四行显示名次、名称和时间。新最佳会添加 New best lap 和时间。按钮：Run it again、Clear ghost（存在幽灵时）和 Back to start。暂停标题为 Paused，带 Resume、Restart 和 Controls。
   布局：桌面 HUD：名次和圈数在左上，圈速在顶部中央，速度在右上，168 px 小地图距右下 24 px，180×10 boost 条在底部中央。Pause 按钮至少 44 px，始终可用。低于 700 px：第一行是 Pause 和速度，第二行是名次、圈数和圈速，小地图缩小到 104 px 位于右上，boost 条位于触摸控制正上方。触摸控制仅在指针为 coarse 或宽度低于 800 px 时显示。左侧：132 px 转向板，距安全区角落 16 px。右侧：GAS 92 px 为 Coral，BRAKE 72 px 为 Paper，DRIFT 72 px 为 Gold。小地图是 2D canvas，不是第二个 WebGL 视图：Ink 填充，2 px Gold 边框，中心线为 Gold，+x 向右，+z 向下，14% 内边距，弧长 0 处有 Paper 刻度。玩家三角形为 Coral，对手为其颜色的 6 px 点，幽灵为 Gold 环，下一个门架为 Paper 刻度。地图不随车辆旋转。
   动效：通过门架时显示其名称 0.7 s。boost 填充使用从左开始的 scaleX。待发计量获得 Paper 边框并脉冲一次。覆盖层淡入淡出 180 ms。减少动态效果使用即时覆盖层变化和静态满 boost 条。Run it again 和 Restart 返回同一发车格的倒计时，不重新加载。Back to start 返回停放的车辆。Clear ghost 可从领奖台或起始面板使用。
6. **控制、声音与回退** — 控制标题为 Controls。键盘行：W 或 Up arrow — 油门；S 或 Down arrow — 制动；A、D 或方向键 — 转向；Space — 漂移；Shift — boost（当条满时）；R — 返回最后一个检查点；P — 暂停。触摸行：左侧板转向；Gas、Brake 和 Drift 在右侧。按钮：Back。按键：W 和 ArrowUp 油门，S 和 ArrowDown 制动，A 和 ArrowLeft 左转，D 和 ArrowRight 右转，Space 漂移，Shift boost，R 重置，P 或 Escape 在比赛中暂停，Enter 激活打开覆盖层的主按钮，Escape 关闭 Controls。阻止这些键的默认行为，使页面不滚动。释放指针、窗口失焦或打开覆盖层会清除所有按住的键和触摸，使车辆不会卡住。声音默认关闭。切换显示 Sound off 或 Sound on。开启后，在该手势之后，每次计数播放 440 Hz 正弦波 80 ms，GO 时播放 660 Hz 140 ms，boost 时播放 120 ms 噪声爆发，一个安静的锯齿波引擎声增益 0.02，音高随速度变化，领奖台时播放三个短正弦波 523、659 和 784 Hz。无音频文件。如果 AudioContext 失败，保持声音关闭，不要记录循环错误。
   布局：控制面板在桌面为 480 px，在移动端为可滚动面板，从起始面板或暂停进入，并返回到同一状态。所有控件都是真实按钮，具有可见的 2 px Gold 焦点环。canvas 具有可访问名称：Third-person race on a banked circuit at dusk。一个 polite live region 宣布圈数变化、Reset、Wrong way 和领奖台句子，而不是每个速度刻度。小地图为 aria-hidden。每个声音都与可见的倒计时、横幅或领奖台配对。
   动效：按住的触摸按钮使用 0.96 缩放和填充按下状态，不延迟输入。减少动态效果会移除该缩放。音频增益在 40 ms 内渐变。暂停或切换关闭时声音静音。
7. **尺寸、光照与两个视口** — 目标是在 1440×900 和 390×844 下获得干净的首帧，无水平溢出且无控制台错误。光照：半球天空 #ffd2a8 和地面 #6b5344，强度 0.5；一个方向光 #ffb067，强度 2.35，位置 (-90, 22, 40)；FogExp2 颜色 #e0a06a，密度 0.011；ACES 电影色调映射，曝光 1.05；PCF 软阴影，桌面 2048，低于 800 px 为 1024，bias -0.0003。天空是一个大球体的内部：头顶 Zenith，地平线处 Horizon，其下 #c46a3a，以及与方向光对齐的柔和 #fff1cc 太阳圆盘。无星星、无夜晚、无霓虹、无 bloom composer。像素比上限 1.75，低于 800 px 为 1.25。如果 180 帧的平均帧时间超过 22 ms，则一次性将像素比降至 1，阴影贴图降至 1024。保留热身规则。如果 WebGL 无法启动，保留起始文案并添加句子 This browser could not start the 3D view. Try a browser with WebGL enabled. 不要循环重试。
   布局：在视口变化时调整渲染器和相机大小，并遵守安全区内边距。页面本身不滚动。超出视口的面板在内部滚动。通过使用代码几何体、实例化草和观众，以及无图像文件，将 dist 保持在 20 MB 以下。文档隐藏时停止模拟，返回时不自动恢复；保持暂停直到 Resume 或 Start race。
   动效：质量削减绝不移除门架、对手、幽灵或触摸控制。减少动态效果独立于质量削减：比赛保持可玩，仅额外的相机和 UI 动态效果被移除。

## 资源

- 图片：不使用任何图片文件，也不生成静态图。天空、赛道、赛车、门、障碍物、树木、小屋、看台、号码牌、小屋标牌和小地图全部用代码绘制。添加一个原创的 public/favicon.svg：32 的 viewBox、Ink 圆角矩形，以及一个指向右侧的 Coral 五边形楔形，不含任何字母。在 ASSETS.md 中说明场景为代码绘制，并将该 favicon 列为原创。
- 图标：不安装图标包。暂停、声音和触控标签均为文本。转向板和加速轨道使用 CSS。在 ASSETS.md 中不列出任何第三方图标。
- 字体：通过技术栈中指定的 Fontsource 包（OFL-1.1）自托管 Big Shoulders Display、Outfit 和 Share Tech Mono。仅导入所列字重。在 ASSETS.md 中记录本地 woff2 文件、npm 包页面和 OFL 许可证。不得请求 fonts.googleapis.com、fonts.gstatic.com 或任何其他字体 CDN。
- 视频：不使用视频、不录制游戏画面，也不使用音频文件。可选声音在玩家开启 Sound 后通过 Web Audio 合成。

## 禁止事项
- 不要后端、账户、数据库、分析、外部 API、多人模式或全局排行榜。最佳圈速保存在 localStorage 中，键由品牌和赛道构建。
- 不要 CDN，也不要远程资源。字体自托管，从已安装的包中导入 three，使用相对路径，并将压缩文件输出到 dist/，关闭 source map，且不将 src/ 复制到 dist/。保持 dist 在 20 MB 以下。
- 不要路由、营销区块、价格或滚动落地页。唯一的页面是 index.html，首屏是停在赛道上的车。
- 不要复制源提示词、一次性 HTML 页面、拍摄运行、评审笔记或试玩记录。不要显示 105 的速度或 000749 的分数。不要提及 Agent OS、GoldieBench、AI Profit Boardroom、Grok、xAI 或 Julian Goldie。
- 不要复用源车的轮廓、赛道布局、门设计或障碍物放置。使用此处指定的控制点、门、草捆、轮胎和锥桶。不要把热度变成夜间城市、悬浮载具或打砖块游戏。
- 不要真实赛车系列、制造商、赛道、涂装、赞助商标记或真实车手。不要名人或公众人物肖像，观众不要有脸，不要品牌标志。起点条纹是通用的墨纸色带，不是系列标识。
- 不要下载的模型、HDRI、纹理包、库存照片、占位图服务、物理引擎或后处理泛光。几何体和天空保持在代码中。
- 不要商业字体，也不要字体 CDN。不要在 src/content.ts 之外硬编码 Pennyglass、Wickpenny、Barleycut、Skiff 4、Nell Harp 或默认对手，也不要在屏幕上留下原始变量标记。
- 不要编造日期、报名费、在线玩家数量或任何关于 VibeFather 的说法。VibeFather 的唯一存在是可选的 [CREDIT] 链接。
- 不要自动播放音频、镜头抖动、全屏闪烁或永久卡死。偏离赛道行驶会减慢车速，然后将其重置到最后一个门。尊重 prefers-reduced-motion，但不禁用比赛。
- 不要在暂停、隐藏或在领奖台时让计时器继续运行。焦点丢失时清除卡住的输入。在 390×844 下，转向板、踏板、小地图和开始面板都必须可用，没有水平溢出，也没有控制台错误。
- 如果 WebGL 失败，显示可读的回退句子，不要循环抛出错误。如果帧运行时间过长，降低一次像素比和阴影贴图，并保留圈速规则、对手、幽灵和控件。

---
Inspired by Grok 4.7 In The Agent OS: 20 Games, One Shot, Real Scores by @JulianGoldieSEO — https://agentos.guide/grok-4-7-agent-os
— Prompt by VibeFather · https://vibefather.ai/t/dusk-track-racing-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
