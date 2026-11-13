> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 动漫角色跑步循环展示

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个跑步循环查看器，外加一个工作室页面。主角是一位原创的人类跑者，名叫 [CHARACTER]，身份是 [ROLE]，身高约 7.5 个头高，完全由代码图元构建，带有骨骼层级、卡通着色（toon shading）、深色描边、滞后的头发和腰带，以及一个无缝的 0.80 秒跑步循环。石膏跑道以着地脚的速度滚动。控件包括：暂停、0.35x 慢动作、相位拖动条、环绕与缩放、三个相机预设，以及头发和制服颜色选择器。侧面板标注接触（contact）、反冲（recoil）、经过（passing）和腾空（flight），并与拖动条保持锁定同步。工作室页面面向 [AUDIENCE] 撰写，地址为 [STUDIO_ADDRESS]，提供价格为 [CLINIC_PRICE] 的四晚诊所课程。

- 受众：[AUDIENCE]，他们通过定格一个人物来学习时序，以及希望获得课堂查看器而非模型下载的教师。
- 目标：让一个步幅变得可读：哪只脚着地、髋部何时下沉、双脚何时离开跑道，以及重新着色如何保持绑定不变。
- 语气：平静、具体、实用的美式英语。简短的教学句子。不要口号，不要炒作。

## 技术栈
- 框架：Vite 6 + TypeScript + Three.js
- 样式：原生 CSS
- 库：three（MIT）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource-variable/figtree（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 安装 three@0.170.0。开发依赖：vite@6.3.5 和 typescript@5.6.3。不要添加 React、组件套件、后处理栈或动画库。
  - vite.config.ts 将 base 设为 ./，build.sourcemap 设为 false，build.outDir 设为 dist。rollupOptions.input 包含 index.html 和 studio.html。生产构建经过压缩，且不会将 src/ 复制到 dist。
  - TypeScript 严格模式。从已安装包中的 three/addons/controls/OrbitControls.js 导入 OrbitControls。如果该路径失败，则使用同一包中的 three/examples/jsm/controls/OrbitControls.js。绝不从 CDN 导入。
  - 将每个可见字符串、色板列表、阶段卡片、FAQ 答案和图像 alt 放入 src/content.ts。当任何变量与其默认值不同时，以相同的长度和结构重写不再成立的文案。不要更改装置、循环键、色板十六进制值或布局。
  - 从已安装的包中导入 @fontsource-variable/fraunces/wght.css、@fontsource-variable/figtree/wght.css 以及 @fontsource/ibm-plex-mono/400.css 加 500.css。显示字体栈为 Fraunces，opsz 为 72。文本字体栈为 Figtree。阶段编号使用 IBM Plex Mono。不要从任何 CDN 请求字体。
  - 在 index 和 studio 之间共享一个 mountStage 函数，以免装置发生偏移。index 连接 dock 和阶段轨道。studio 挂载一个自动播放的仅轨道舞台。
  - index.html 和 studio.html 各自设置一个纯标题 [BRAND]，链接 ./favicon.svg，并加载各自的模块脚本。无 meta description、Open Graph、JSON-LD 或分析。
  - 如果 WebGL 无法启动，显示代码绘制的四姿态回退方案，并保持暂停、速度、拖动条和颜色控件正常工作。不要显示空白页面。

## 变量
- [BRAND] — 工作室名称（默认：“Fernwick Motion”）。虚构的工作室。不是真实公司，也不是此模板的名称。
- [CHARACTER] — 跑者名称（默认：“Juniper Hale”）。用于句子和舞台说明中。网格和面部保持不变。
- [ROLE] — 文案中的角色（默认：“track sprinter”）。仅措辞。不要更改背心、短裤、鞋子、发型或循环。
- [AUDIENCE] — 诊所面向的对象（默认：“junior character animators”）。适合放在句子中间，例如在 sit 一词之前。
- [STUDIO_ADDRESS] — 街道和城市（默认：“14 Lumen Court, Providence”）。虚构的街道。显示在侧栏、到访区块和页脚中。
- [CLINIC_PRICE] — 诊所价格（默认：“$240”）。包含货币符号。用于页眉标签和诊所区块。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/anime-character-run-cycle-showcase（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- Paper `#F6F1E8` — 页面背景
- Card `#FFFCF8` — 页眉、停靠栏、侧栏和工作室卡片
- Ink `#1C1917` — 文本、焦点环和色板选中态
- Muted `#6B645C` — 次要文本和非活动刻度标签
- Persimmon `#E25B2A` — 活动控件、当前链接、诊所标签、活动阶段标尺
- Line `#E4D8C8` — 边框、拖动条轨道和照片边框
- Cyclorama `#F6F0E6` — 跑者身后的工作室背景幕
- Floor `#E7D9C8` — 跑道地面
- Outline `#1A1423` — 跑者身上的卡通描边
- Skin `#E7B48A` — 固定肤色
- Hair `#1B3A4B` — 默认发色色板，Ink
- Uniform `#E2A322` — 默认背心，Marigold
- Shoe `#2A2926` — 竞速平底鞋鞋面
- Sole `#C9C3B6` — 石色鞋底

### 字体排印
- 展示字体：Fraunces（OFL），字重 500/700
- 正文字体：Figtree（OFL），字重 400/600
- 等宽字体：IBM Plex Mono（OFL），字重 400/500

### 布局与动效
- 间距：以 8px 为基准。页眉在桌面端为 56px，在移动端为自动，至少 52px。阶段侧栏 336px，内边距 20px。停靠栏高 84px，距舞台边缘 16px。工作室栏最大 1120px，顶部内边距 48px，两侧内边距 24px，移动端为 16px。卡片内边距为 16px。
- 圆角：按钮、卡片、停靠栏和照片边框均为 2px。色板为圆形。不使用大号胶囊形，也不使用柔和光晕。
- 动效：周期在 1x 下为 0.80 秒。慢动作将时钟乘以 0.35。阶段是从 0 到 1 的循环。
- 动效：相机预设以 in-out cubic 缓动 480ms。OrbitControls 阻尼保持开启。减弱动效时改为直接切换。
- 动效：头发和腰带以指数 slerp 滞后于其父级。减弱动效时直接吸附。
- 动效：控件颜色变化耗时 120ms。减弱动效时移除这些过渡。无页面切换动画。
- 图像：主视觉是代码构建的跑者，置于石膏背景幕中，在首屏中占据较大面积，人物周围留有空白与光线，而非在平面背景上排布文字。不使用照片作为背景或纹理。员工照片仅出现在工作室页面，为同一房间内三张半身工作照：左侧柔和窗光、石膏墙、橡木桌，服装为柔和墨色、奶油色和靛蓝色。它们是占位图，下一家工作室可以替换。

## 页面与区块
### [BRAND] — 跑步循环（`index.html`）
1. **工作室页头** — 字标 [BRAND]。链接：Viewer 指向 ./index.html，Studio 指向 ./studio.html。标签：Clinic · [CLINIC_PRICE]，链接到 ./studio.html#clinic。
   布局：56px 条，背景 #FFFCF8，1px 底边框 #E4D8C8，内边距 0 20px，flex 行，居中对齐。左侧：一个 14px 的内联 SVG，两个堆叠的尖角符号，颜色 #E25B2A，然后是字标，Fraunces 700，18px，#1C1917。该 SVG 为装饰性。字标右侧，两个链接使用 Figtree 600，15px，间距 20px。当前页面 Viewer 有 2px 下划线 #E25B2A 和 aria-current=page。标签被推到最右侧：背景 #E25B2A，文字 #FFFCF8，内边距 8px 12px，圆角 2px，Figtree 600，14px。最小点击目标 44px。在 390px 屏幕上，标签换行到第二行与链接同排，而不是溢出。焦点可见轮廓为 2px #E25B2A，偏移 2px。
   动效：链接下划线和标签背景不做动画，除了悬停时 120ms 的颜色变化。悬停使标签变暗为 #C44B20。
2. **跑步舞台** — 一个原创的人类跑者，约 7.5 头高，裸露额头，人类耳朵，无尾巴，无动物特征。舞台说明文字，不遮挡面部：眉题 Run cycle，标题 [CHARACTER]，行 [ROLE]。人物是 [CHARACTER]，在文案中描述为 [ROLE]。角色变化时网格不变。
   布局：全视口 WebGL 舞台。在 800px 及以上，html、body 和应用根元素高度 100% 且 overflow hidden，因此查看器不滚动。舞台是 56px 页头下方的左侧单元格；相位栏为 336px。画布填满该单元格，边到边。传输停靠栏仅覆盖画布底部（内缩 16px，高 84px，右边缘在相位栏前 16px 处停止）。默认相机将头顶框在画布顶部下方约 12% 处，鞋子在停靠栏上方。移动端（800px 以下）：页面滚动；40px 名称条位于页头下方；画布为 62svh，最小 420px；停靠栏在画布下方的正常流中，不覆盖鞋子。

场景，米，Y 向上，角色在原点面向 +Z。清除颜色 #F3EBE1。半球光天空 #F7F4EF，地面 #E4D3C2，强度 0.55。主方向光来自 (2.4, 3.2, 2.8)，强度 1.25，颜色 #FFF8F0。补光来自 (-2.6, 1.6, 1.2)，强度 0.4，颜色 #D9E6F2。轮廓光来自 (-1.2, 2.4, -2.6)，强度 0.45，颜色 #FFE0C2。无阴影贴图。一个扁平接触圆盘（圆半径 0.34，#1C1917 不透明度 0.16，y=0.008）位于髋部下方，随髋部上升而缩小。地板是半径 5.5 的圆，卡通颜色 #E7D9C8。人物后方，一个半圆柱半径 6，高度 3.2，中心 y=1.4，朝向相机开口，卡通颜色 #F6F0E6，无纹理。两条虚线盒带，尺寸 0.09 x 0.012 x 0.36，颜色 #C4B5A2，中心在 x=-0.11 和 x=+0.11，沿 Z 每 0.95 间隔。当虚线的中心经过 z=-8 时，将其回收至远端。虚线以恒定 2.0 m/s 向 -Z 移动。这就是跑步机：胸部面向 +Z，因此人物正朝 +Z 奔跑。

仅使用 SphereGeometry、CapsuleGeometry、BoxGeometry 和 CylinderGeometry 构建跑者，父级为 Object3D 骨骼。无 SkinnedMesh，无 glTF，任何网格上无图像纹理。组装后，缩放根节点，使接触姿势下头顶高 1.72 m，支撑脚底位于 y=0。头高 0.23 m，约 7.5 头。不是 Q 版。

材质共享一个 4x1 最近邻过滤画布 gradientMap（像素 #5c534c、#8a8178、#c4bbb2、#ffffff）用于 MeshToonMaterial。皮肤 #E7B48A。头发使用头发色板，默认 #1B3A4B。背心使用制服色板，默认 #E2A322。短裤将该制服色向 #3A2E16 混合 22%。小腿套将其向 #1C1917 混合 40%。背心侧片为 #F4F0E6，或当制服为 #F4F0E6 时为 #1B3A4B。鞋子 #2A2926 和鞋底 #C9C3B6 永不重新着色。眼睛、眉毛和嘴巴为 MeshBasicMaterial，无轮廓。其他每个网格都有一个轮廓子对象：相同几何体，MeshBasicMaterial #1A1423，side BackSide，缩放 1.035。

骨骼：root > hips > thighL > shinL > footL，右侧相同；hips > spine > chest > shoulderL > upperArmL > forearmL > handL，右侧相同；chest > neck > head > hairLockL > hairLockL2，以及 head > hairLockR；hips > tie。跑步偏移前的静止标志点：髋关节 y=0.92，膝 y=0.48，踝 y=0.10，肩 y=1.42，下巴 y=1.49，头顶 y=1.72。大腿长 0.44，小腿 0.38，上臂 0.28，前臂 0.24。

网格：头骨球半径 0.115 缩放 (0.96, 1.08, 0.98)；人类耳朵球半径 0.022 缩放 (0.55, 1, 0.45) 位于两侧，非尖耳；巩膜球半径 0.02 #F7F4EF 和虹膜球半径 0.012 #1C1917 位于 x=±0.034，y=0.02，z=0.095，足够大以便在全身帧中可读，且仍远小于 Q 版眼睛；眉毛盒 0.028 x 0.004 x 0.006，头发颜色；鼻子盒 #D9A67C；嘴巴盒 #8E4E4A。发帽是球半径 0.118 缩放 (0.98, 0.62, 1.02)，上移 0.03 后移 0.03，留下头骨前 35% 作为裸露额头。无刘海，无齐刘海，无翘发。左侧发绺：两个胶囊（半径 0.012 长度 0.07，然后半径 0.01 长度 0.06）终止于下颌。右侧发绺：一个胶囊半径 0.011 长度 0.055。发绺位于脸颊旁，不在脑后。骨盆球，腹部胶囊，胸部球，颈部圆柱。背心壳为胸部和腹部的 1.08 倍。短裤覆盖骨盆和大腿上 45%。手臂为裸露皮肤：上臂胶囊半径 0.036，前臂半径 0.03，一个盒状手掌，四个手指盒和一个拇指胶囊。无袖子。小腿套覆盖小腿上部，脚踝裸露。每只鞋是一个盒 0.07 x 0.04 x 0.16，带鞋底盒 0.074 x 0.012 x 0.17，石色鞋底，非红色，非白色。领带是一个盒 0.028 x 0.18 x 0.008，位于短裤腰带左侧，垂至大腿中部。它是扁平布领带，不是尾巴，不分段。

符号约定：正 rotation.x 使该肢体自由端向 +Z 摆动。如果骨骼的长轴翻转了符号，将该骨骼的俯仰乘以 -1，使接触姿势与此描述匹配。胸部俯仰为恒定 12 度前倾。头部俯仰为恒定 -9 度，头部偏航为 -0.35 倍胸部偏航，使面部保持安静并看向跑道方向。

左腿和左臂的关键帧。列为相位、hipsY、hipsYaw、thigh、shin、foot、upperArm、elbowBend。0.00：0.94，-8，34，8，-6，-34，20。0.12：0.86，-3，8，50，6，-16，34。0.28：0.98，3，-14，20，6，8，24。0.42：1.05，7，-36，12，26，30，16。0.50：0.94，8，-32，18，22，34，18。0.62：0.86，3，-4，84，10，14，36。0.78：0.98，-3，20，64，-2，-10，26。0.92：1.05，-7，40，20，-12，-32，18。相位 1.00 重复 0.00。每个通道在周围关键帧之间用余弦缓动混合。右腿和右臂在相位+0.5 处采样相同函数。胸部偏航等于髋部偏航的负值。肘部弯曲仅为屈曲，保持在 16 到 36 度之间，绝不是第二次摆动，也绝不锁直。髋部滚转为 4 度乘以 sin(2π 相位)。

支撑期持续经过回弹并在通过期开始时结束：左 [0.00, 0.28)，右 [0.50, 0.78)。在支撑期，双骨 IK 将该脚踝保持在 x=±0.11，y=0.09，并以 2.0 m/s 向 -Z 移动，从它落地的虚线中心开始。鞋底保持平坦。虚线和鞋子共享该速度，因此鞋子不会越过到下一条虚线。支撑期外，使用关键帧旋转并保持鞋底明显离地。从 0.28 到 0.50，以及从 0.78 到 1.00，双脚均不在支撑期。在相位 0.42 和 0.92，两个鞋底均高于 y=0.12。如果 IK 不稳定，保留关键帧并添加脚踝校正，通过相同测试：在相位 0.08，支撑鞋底在 y=0 的 0.01 m 范围内，且在 Z 方向距其落地虚线 0.03 m 范围内。

发绺和领带存储一个四元数。每帧，将其向父级世界四元数按 1-exp(-k * dtScaled) 进行 slerp，头发 k=10，领带 k=6，并将角度限制为头发 26 度、领带 34 度。它们必须拖在髋部之后，绝不翻过头顶。

渲染器：抗锯齿开启，ACESFilmic 色调映射，曝光 1.08，输出色彩空间 sRGB，像素比上限 1.75。文档隐藏时暂停渲染循环。相机 fov 30，OrbitControls 目标 (0, 1.02, 0)，阻尼开启，最小距离 2.6，最大距离 7.5，极角限制在 0.55 到 1.55 之间，使相机无法进入地板以下。预设：Three-quarter (1.9, 1.25, 3.6)、Side (3.4, 1.05, 0.15)、Low (1.2, 0.45, 3.2)，均看向目标点。Lerp 480ms。触摸时单指环绕、双指捏合缩放。若缺少 WebGL，则隐藏画布并显示四个代码绘制的侧视图形（使用相同颜色的椭圆和圆角矩形），分别对应 contact、recoil、passing 和 flight；拖动条高亮当前激活的那个。无加载界面，无错误字符串。
   运动：1x 时相位以每秒 1/0.80 推进，慢动作时以 0.35/0.80 推进。暂停会冻结时钟；拖动仍可设置相位。弹簧和泳道使用同一缩放时钟，因此慢动作也能显示头发滞后。减少动态效果时以相位 0 暂停启动，弹簧直接吸附到父级，相机预设之间直接切换。播放按钮在显式按下后仍会运行循环。无 bloom，无自动旋转，加载时无相机移动。
3. **传输停靠栏** — 循环运行时播放按钮显示 Pause，暂停时显示 Play。初始为 Pause。速度按钮：1x 和 0.35x。加载时选中 1x。拖动条标签为保留两位小数的相位，如 0.42，然后是当前激活的脚，如 Left foot。相机按钮：Three-quarter（加载时选中）、Side 和 Low。
   布局：桌面停靠栏：绝对定位，left 16px，right 352px，bottom 16px，高度 84px，背景 #FFFCF8，1px 边框 #E4D8C8，圆角 2px，内边距 12px 16px，flex 行，居中对齐，间距 12px，z-index 高于画布。顺序：44px 播放按钮、分段式 1x / 0.35x 控件、弹性范围输入、等宽读数，然后是三个相机按钮。范围从 0 到 1，步长 0.001。轨道 6px #E4D8C8，填充部分 #E25B2A，滑块 16px #FFFCF8 带 2px #E25B2A 圆环。八个刻度位于 0、0.12、0.28、0.42、0.50、0.62、0.78 和 0.92。刻度标签，10px Figtree，#6B645C，依次为 Contact、Recoil、Pass、Flight、Contact、Recoil、Pass、Flight。激活的刻度标签为 #E25B2A。播放按钮及选中的速度和相机使用背景 #E25B2A 和文字 #FFFCF8。未选中按钮为 #FFFCF8，带 1px #E4D8C8 边框和 #1C1917 文字。按钮高度至少 44px。读数为 IBM Plex Mono 500，13px。范围上的 aria-valuetext 标明相位和脚，例如 Contact, left foot, 0.08。空格切换播放，除非焦点在范围内。范围上的方向键以 0.01 步进。拖动相机会清除选中的预设，直到再次点击预设。移动端：停靠栏不叠加。它换行为两行，第一行为播放、速度和相机，第二行为全宽拖动条。800px 以下隐藏刻度文字，保留刻度。
   运动：拖动拖动条在输入时设置相位，无额外延迟。预设切换以 480ms 对相机进行 lerp，除非设置了减少动态效果，此时相机直接切换。选择速度不会重置相位。
4. **相位轨道** — 标题：One stride, eight marks。副标题：Left foot from 0.00 to 0.50, then the right foot repeats the same four shapes。统计行：Ground speed 2 m/s · Cycle 0.80 s。卡片上方的小标签在相位低于 0.50 时显示 Left foot，否则显示 Right foot。卡片：Contact — The lead foot meets the floor and the hips sit forward of the chest twist. The opposite arm is back. Watch the shoe land on a dash and leave with that dash。Recoil — The landing knee bends and the hips reach their lowest point. The free heel lifts toward the hip. The head barely moves。Passing — The free knee drives ahead while the stance leg lengthens behind. The thighs pass. The body is rising。Flight — Both shoes are off the floor and the hips are highest. The stride is open. The hair locks and the waist tie are still behind the turn of the hips。头发色块，按顺序，第一个选中：Ink #1B3A4B、Wheat #E6D3A1、Soot #242220、Pine #2C6B56、Rose #D9897A。制服色块，选中 Marigold：Marigold #E2A322、Cobalt #1F4E8C、Spruce #1E7A62、Coral #E36B58、Chalk #F4F0E6。轨道页脚：[BRAND] · [STUDIO_ADDRESS]，然后是 [CREDIT] 链接。
   布局：右列，336px，背景 #FFFCF8，1px 左边框 #E4D8C8，内边距 20px，flex 列，间距 12px。标题 Fraunces 500，26px，行高 1.15。副标题和卡片使用 Figtree 400，14px，行高 1.45，卡片标题颜色 #1C1917，正文颜色 #6B645C。统计行 IBM Plex Mono 400，12px，#6B645C。每张卡片是一个按钮，text-align left，背景透明，边框 0，下边框 1px #E4D8C8，内边距 12px 8px 12px 12px。激活卡片背景 #FFF6F1，左边框 3px #E25B2A。窗口：Contact [0.00, 0.12) 和 [0.50, 0.62)；Recoil [0.12, 0.28) 和 [0.62, 0.78)；Passing [0.28, 0.42) 和 [0.78, 0.92)；Flight [0.42, 0.50) 和 [0.92, 1.00)。点击卡片将相位设置到当前脚窗口的起点（Contact 为 0.00 或 0.50，其他为对应的起点），不暂停。Hair 和 Uniform 标签为 Figtree 600，12px，大写，字距 0.06em，#6B645C。色块为 22px 圆形，44px 点击区域，间距 8px。选中的色块有 2px #1C1917 圆环，偏移 2px，aria-pressed 为 true。Chalk 通过每个色块上的 1px #E4D8C8 边框保持可见。页脚位于轨道底部，Figtree 400，12px，#6B645C，credit 链接字号相同，颜色 #1C1917。桌面高度 900px 时轨道不滚动；若列更短，卡片列表滚动，选择器和页脚固定。800px 以下轨道为停靠栏下方的全宽区块，四张卡片变为水平吸附滚动器，激活卡片在视图中。选择器换行到卡片下方。
   运动：激活卡片和脚标签与相位在同一帧更新。无滚动驱动动画。移动端滚动器显示时，激活卡片仅在窗口变化时滚动到视图中，而非每帧。

### [BRAND] — Studio（`studio.html`）
1. **Studio 页头** — 与查看器相同的页头：文字标识 [BRAND]、Viewer、Studio，以及标签 Clinic · [CLINIC_PRICE]。Studio 为当前页面。
   布局：栏、字体、颜色和间距与查看器页头完全一致。Studio 带有 2px #E25B2A 下划线以及 aria-current=page。Viewer 没有。此页面上的标签仍指向 #clinic。
2. **房间介绍** — 标题：A room for one stride。导语：[BRAND] teaches run timing from [STUDIO_ADDRESS]。 [AUDIENCE] sit with a paper chart and the same figure you see here。跑者是 [CHARACTER]，一名 [ROLE]，由教室电脑上的基本几何体构建而成。实时图形下方的说明文字：Drag to look. The full controls are on the viewer。其中 viewer 一词链接到 ./index.html。
   布局：此页首屏为 1120px 栏内的两列网格，gap 32px，padding 48px 24px 0。左列约占 46%：标题使用 Fraunces 700、56px、line-height 1.05、颜色 #1C1917，然后是导语，使用 Figtree 400、18px、line-height 1.5、max-width 42ch。右列：同一套装置置于 560px 高的框架中，radius 2px，1px 边框 #E4D8C8，自动播放，仅 orbit 和 zoom，无 dock 且无 rail。默认 hair 为 Ink，uniform 为 Marigold。说明文字位于框架下方，Figtree 14px，#6B645C。在 800px 以下的屏幕上，单列：实时框架在前，高度 70vw，最小 420px，然后是 36px 的标题，再是导语。减少动态效果时显示暂停的接触姿势，拖拽仍启用。
   动效：嵌入的循环使用相同的 0.80 秒循环。标题无入场动画。相机拖拽使用与查看器相同的 OrbitControls 限制。
3. **周二工作坊** — 标题：Four Tuesday nights。价格行：[CLINIC_PRICE] for four evenings, 6:30 to 8:30 pm. Eight seats. Pay at the door. The next group begins on the first Tuesday of the month。第 1 周，Contact and recoil：Draw the planted shoe and the bent knee. Mark the lowest hips on your chart。第 2 周，Passing：Draw the knees crossing and the arms opposing the legs。第 3 周，Flight：Draw both shoes off the lane, and the hair still behind the hips。第 4 周，Your chart：Time a 0.80 second cycle on paper, then check it against the viewer with the pause button。备注：Mara Voss took the Tuesday group and left this on a card. Pausing at 0.42 finally showed me both feet off the lane。
   布局：Section id clinic，padding 56px 24px，max width 1120px，居中。标题 Fraunces 700、36px。价格行 Figtree 600、18px。四张卡片组成网格，gap 16px。每张卡片背景 #FFFCF8，1px 边框 #E4D8C8，radius 2px，padding 16px。等宽字体的周数，颜色 #E25B2A；Fraunces 500 标题 22px；一句 Figtree 15px 文字。桌面端四列。800px 以下两列。480px 以下一列。备注位于网格下方，2px 左边框 #E25B2A，padding-left 16px，Figtree 400 斜体 18px，#6B645C。无引号图形。
4. **员工** — 标题：Three people, one rig。Nia Okonkwo，Rig。她设定骨骼顺序和深色轮廓外壳。她显示器上的一张卡片列出了从髋部到两缕头发的每一根骨骼。照片 public/images/staff-rig.webp，alt：Nia Okonkwo, rig lead, adjusting a wooden figure at a studio table。Ellis Park，Timing。他负责 0.80 秒循环。如果一只鞋越过虚线而不是沿虚线行进，则该次通过失败。照片 public/images/staff-timing.webp，alt：Ellis Park, timing lead, marking abstract curves on a sheet of paper。June Ibarra，Color。她调配了石膏背景和五种 uniform 染料。在学生能说出全部四个阶段之前，她不会添加第六种染料。照片 public/images/staff-color.webp，alt：June Ibarra, color lead, standing with unlabeled jars of pigment。
   布局：以上三个姓名和简介为默认文案。如果 [BRAND] 不是默认值，请以相同职位虚构三位新人，重写 alt，并保留这三个照片文件。Padding 8px 24px 56px，max width 1120px。标题 Fraunces 700、36px。三列，gap 20px。每列：照片 3:4，object-fit cover，width 100%，直角，1px 边框 #E4D8C8，然后是姓名 Fraunces 500、22px，职位 IBM Plex Mono 500、12px 大写、tracking 0.06em、颜色 #E25B2A，然后是简介 Figtree 400、15px、line-height 1.45。800px 以下单列，照片 max width 420px。不要将照片裁剪成圆形，也不要用首字母替代。照片绝不映射到跑者上。
5. **到访与问题** — 标题：Visit the room。正文：[STUDIO_ADDRESS], second floor. The buzzer reads [BRAND]. The room is open Tuesday to Thursday, 1 to 6 pm. The evening clinic is Tuesday, 6:30 to 8:30 pm. The viewer on this site is the machine in that room, so the phase you pause here is the phase the class pauses。第二个标题：Practical questions。Is there a model file to download? No. [CHARACTER] is spheres, capsules and boxes made when the page opens. Refreshing starts the same loop。Why does the lane move? A planted shoe has to stay on one dash. The dashes travel at 2 meters per second, the same speed as the stance foot. A still floor would make the shoe skate。Can I change the hair and the uniform? Yes. Five hair colors and five uniform colors are on the phase rail. They recolor this rig. They do not change the cut of the singlet, the shorts or the shoes。Do you teach walks or turns? This four-evening group is a run only. The cycle is 0.80 seconds, one full stride, left foot then right。
   布局：Padding 0 24px 64px，max width 1120px。桌面端为一行：到访区块宽 320px，背景 #FFFCF8，1px 边框 #E4D8C8，padding 20px，问题区占据剩余宽度。800px 以下，到访区块堆叠在问题区上方。问题为 details 元素。Summary 为问题，Figtree 600、18px，min-height 44px，带一个 8px 的 CSS 箭头，展开时旋转 90 度。答案为 Figtree 400、16px，#6B645C，padding 0 0 16px。1px #E4D8C8 分隔线分隔各项。第一个问题默认展开。这些折叠内容无需脚本。
6. **页脚** — [BRAND] · [STUDIO_ADDRESS] · Nothing you change here is saved or uploaded。然后是 [CREDIT] 链接。
   布局：全宽，border-top 1px #E4D8C8，padding 20px 24px 28px，Figtree 400、14px，颜色 #6B645C。署名链接为 #1C1917，位于句子之后，而非第二个品牌标识区。相同的页脚信息已出现在查看器 rail 中；不要添加第三个页面。

## 资产
- 字体：安装 @fontsource-variable/fraunces、@fontsource-variable/figtree 和 @fontsource/ibm-plex-mono，均为 OFL-1.1。仅打包这些 CSS 入口点所引入的 Latin 文件。在 ASSETS.md 中记录包、许可证及所用文件。不要链接到字体 CDN。
- 图标：用内联 SVG 绘制页头人字形箭头、播放和暂停字形，以及 public/favicon.svg。Favicon 是一个 14px 风格的柿子色圆角方块，在 #E25B2A 上有两个人字形箭头，无字母。WebGL 回退姿态是用代码构建的 SVG。不使用图标包，也不使用品牌标识。
- 图片：下载 https://media.vibefather.ai/assets/13f80fd2-c2d1-41fa-9fa5-8416e169d738/staff-rig.webp 到 public/images/staff-rig.webp。Alt：Nia Okonkwo, rig lead, adjusting a wooden figure at a studio table。用途：员工专栏，rig。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。仅在 ASSETS.md 中注明该句，不要在页面上注明。
- 图片：下载 https://media.vibefather.ai/assets/13f80fd2-c2d1-41fa-9fa5-8416e169d738/staff-timing.webp 到 public/images/staff-timing.webp。Alt：Ellis Park, timing lead, marking abstract curves on a sheet of paper。用途：员工专栏，timing。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。仅在 ASSETS.md 中注明该句，不要在页面上注明。
- 图片：下载 https://media.vibefather.ai/assets/13f80fd2-c2d1-41fa-9fa5-8416e169d738/staff-color.webp 到 public/images/staff-color.webp。Alt：June Ibarra, color lead, standing with unlabeled jars of pigment。用途：员工专栏，color。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。仅在 ASSETS.md 中注明该句，不要在页面上注明。

## 禁止事项
- 仅限静态。无后端、服务器代码、API 路由、数据库、认证、表单提交、第三方 API 或分析。滑块、颜色和相机均在本地运行。
- npm run build 会生成压缩的 dist/，使用 Vite base ./ 并关闭 source maps。不要将 src/ 复制到 dist。保持 dist 在 20 MB 以下。内部链接为 ./index.html 和 ./studio.html，绝不要使用裸目录。
- 不使用 CDN 脚本或样式表。不要从 jsDelivr、unpkg、Google Fonts 或任何其他 CDN 加载 Three.js、OrbitControls 或字体。自托管 Fontsource 文件。
- 所有可见文案、标签、alt 文本和备用姿势均为美式英语。将它们保留在 src/content.ts 中。[ROLE] 仅更改句子，不得添加外套、包、帽子、工具或不同的服装网格。
- 界面中唯一的产品名称是 [BRAND]。不要提及此模板的许可证、价格或会员数量。如果提示中有 Credit 行，请将该单个 [CREDIT] 链接放在页脚和查看器栏中，且不要放在其他任何地方。
- 尊重 prefers-reduced-motion：在接触姿势处暂停启动，瞬间切换头发和领带，剪切相机预设，并禁用 CSS 过渡。访客使用后，播放、拖动和环绕仍然有效。
- 必须在 1440x900 和 390x844 下正常工作，无控制台错误且无水平溢出。点击目标至少为 44px。画布具有描述性的可访问名称。按钮暴露按下状态。
- 跑步者是一个原创人物，约 7.5 头身。不要添加猫耳、动物耳朵、尾巴、分节尾巴、呆毛、齐刘海、额头刘海或四头脸。耳朵是小的人耳。
- 不要给跑步者穿超大号连帽衫、袖套、条纹运动裤或红底白鞋。制服是无袖背心、高腰短裤、小腿套和炭灰色石底跑鞋。手臂裸露。
- 发色样本仅为 Ink #1B3A4B、Wheat #E6D3A1、Soot #242220、Pine #2C6B56 和 Rose #D9897A。不要使用 #a15c38 或 #8e7cc3。不要在后背构建长分节发簇。
- 不要显示并排对比、将 AI 模型命名为主题，或显示收据、哈希或仓库名称。不要粘贴其他项目的提示、HTML、截图、预览 gif、联系表或对比视频。
- 不要描绘现有的动漫或游戏角色、名人、吉祥物、标志或品牌标记。不要导入 glTF、FBX、OBJ、VRM、Mixamo 剪辑或任何头像。角色上无图像纹理。渐变图是一个四像素的画布。
- 员工照片仅位于工作室员工行中。不要热链接它们。不使用 Unsplash、Pexels、Pixabay、Google Images、Simple Icons、品牌标志或 CC BY-NC 或 CC BY-SA 文件。不使用占位图服务。在 ASSETS.md 中列出每个第三方文件，包括路径、源 URL、作者和许可证。
- 不使用商业字体。不使用 Aceternity UI、Tailwind Plus 或任何受限组件源。不使用紫色渐变、玻璃拟态、发光或表情符号图标。
- 无 SEO 块：无 meta 描述、Open Graph、JSON-LD 或站点地图。一个简单的 [BRAND] 标题和 favicon 就足够了。不要打印日历日期、年份或时间戳。营业时间保持为工作日和时钟时间。
- 不要自动旋转人物、添加加载墙或缩小跑步者为标题腾出空间。查看器的首屏是人物。工作室页面的首屏在移动端以实时画面为主。

---
Inspired by Procedural cat-girl run cycle comparison by @NegevTV_ — https://github.com/negevtvx/grok-vs-opus-catgirl-run
— Prompt by VibeFather · https://vibefather.ai/t/anime-character-run-cycle-showcase · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
