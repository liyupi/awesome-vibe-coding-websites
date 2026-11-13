> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 交互式 3D 溪流立体模型

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 创建一个原创的单页交互式溪流立体模型。一个逼真而紧凑的 Three.js 景观填满首屏，包含由着色器驱动的流动水体、直接的涟漪交互、环绕与缩放控制、白天 / 黄昏 / 夜晚光照，以及可选择开启的合成环境音。默认场景为 [SCENE_NAME]，即位于 [REGION] 的 [SCENE_TYPE]，由 [TAGLINE] 引出。

- 受众：创意开发者、设计师、教育工作者、学生和独立创作者，他们正在打造作品集核心项目、浏览器小玩具、环境可视化，或为 [AUDIENCE_LINE] 提供一处安静的交互式休憩。
- 目标：让访客在五秒内理解并触摸到这一体验：看到溪流、环绕这个微缩景观、制造一道涟漪、改变光照，并可选地聆听。保持景观占据主导，让每个可见控件都执行真实的本地操作。
- 基调：安静、善于观察、可触摸且精确。使用自然材质、柔和的大气光照、简洁的野外笔记式语言，不出现游戏化分数、销售文案或技术乌托邦式宣称。

## 技术栈（Stack）
- 框架（Framework）：Vite 6 + TypeScript 5
- 样式（Styling）：原生 CSS（Vanilla CSS）+ GLSL 着色器（shaders）
- 库（Libraries）：three（MIT）、lucide（ISC）、@fontsource/instrument-serif（OFL-1.1）、@fontsource-variable/dm-sans（OFL-1.1）
- 构建（Build）：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置（Setup）：
  - 使用 Vite 6、TypeScript 5 和原生 DOM 组件；将 three、lucide、@fontsource/instrument-serif 和 @fontsource-variable/dm-sans 安装为运行时依赖，将 @types/three 安装为开发依赖。
  - 设置 package scripts，使 dev 启动 Vite，build 运行 tsc --noEmit && vite build，preview 提供生产输出。
  - 将 vite.config.ts 设置为 base: './'、build.sourcemap: false，以及现代 ES2020 构建目标。仅导入使用到的 Lucide 图标和自托管的 Fontsource CSS；运行时不得发起任何远程请求。
  - 将实现组织为 src/main.ts、src/content.ts、src/styles.css、src/scene/StreamScene.ts、terrain.ts、water.ts、lighting.ts、audio.ts、controls.ts 和 src/scene/shaders/。将着色器保留为本地 TypeScript 模板字符串，以便 Vite 打包它们。
  - 将所有面向用户的字符串、变量值、光照标签、说明、无障碍标签和字段注释保留在 src/content.ts 中。当变量值变化时，重写场景特定的文案和植被名称，同时保留布局和机制。
  - 对所有地形位移和对象散布使用固定种子 1147 的种子化 PRNG。相同的变量和视口类别必须在每次运行时产生相同的构图。
  - 桌面端将渲染器像素比上限设为 1.75，移动端设为 1.35，使用 ACESFilmicToneMapping 和 PCFSoftShadowMap，通过 ResizeObserver 调整大小，并在文档隐藏时暂停 requestAnimationFrame 工作。
  - 仅使用原始几何体和程序化 CanvasTexture 噪声。不要从参考中下载模型、HDRI、照片、栅格纹理、音频或任何媒体。

## 变量
- [BRAND] — 项目名称（默认：“Alder & Rill”）。一个虚构的工作室、项目或地点名称，显示在页眉和文档标题中。
- [SCENE_NAME] — 场景名称（默认：“Alder Bend”）。微型景观的简短原创名称。
- [SCENE_TYPE] — 场景类型（默认：“Woodland stream”）。用于眉题和田野笔记中的景观类别。
- [REGION] — 虚构地区（默认：“North Alder Basin”）。一个虚构的设定，绝不声称是真实的保护地或地标。
- [TAGLINE] — 场景标语（默认：“Follow the water. Stay a little.”）。显示在场景名称下方的一句简短邀请语。
- [AUDIENCE_LINE] — 受众描述（默认：“A quiet break for nature lovers.”）。一句简洁的话，描述该场景面向的人群，用于田野笔记面板。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/interactive-3d-stream-diorama（默认：是；删除此行即可移除）

“页面与区块”下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 界面底色 Chrome `#101714` — 所有光照模式下的页面背景和外框。
- 面板色 Panel `#17201D` — 控件和现场笔记表面的颜色，不透明度 88%，带轻微背景模糊。
- 面板边框 Panel Border `#415048` — 一像素分隔线、控件轮廓和选中状态边框，不透明度降低。
- 文字色 Text `#F0F3E9` — 主标题、标签和可读的控件文字。
- 弱化色 Muted `#AAB6A9` — 次要说明、非活动控件和手势提示。
- 强调色 Accent `#D8B978` — 活动光照状态、小型焦点细节和交互式水面指示器。
- 水色 Water `#315F63` — 深水基础色，在浅水区与 #79A8A0 混合，并按光照预设调整。
- 草色 Grass `#526C45` — 中间调植被，在 #394E35 和 #789064 之间程序化变化。
- 石色 Stone `#77766F` — 暖灰色岩石材质，带较深缝隙和浅色矿物斑点。
- 白天天空 Day Sky `#B8CABD` — 白天画布背景及匹配的远景雾。
- 黄昏天空 Dusk Sky `#805D57` — 黄昏画布背景及匹配的暖色远景雾。
- 夜晚天空 Night Sky `#0B1524` — 夜晚画布背景、雾和深色反射天空。

### 字体排印（Typography）
- 场景标题和大型现场笔记标题：Instrument Serif（OFL），字重 400
- 界面、正文、控件和元数据：DM Sans Variable（OFL），字重 400/500/600

### 布局与动效（Layout & motion）
- 间距：使用 8px 基础网格。桌面外框为 16px，页头高度为 64px，标题叠加层内缩为 40px，控制面板内边距为 20px，现场笔记各区块之间垂直间距为 24px。移动端使用 8px 外框、56px 页头、20px 标题内缩和 12px 控件内边距。
- 圆角：场景框架在桌面端为 24px，移动端为 18px。控制面板和现场笔记抽屉使用 18px，小按钮使用 10px，分段光照控件使用 999px 胶囊形。石头和地形保持有机形态，不要对几何体应用类似 UI 的圆角。
- 动效：首次加载时，将完整渲染的场景在 650ms 内从不透明度 0 淡入到 1，并将标题叠加层在 600ms 内向上移动 16px，缓动为 cubic-bezier(0.22, 1, 0.36, 1)；着色器编译期间绝不显示空白主视觉。
- 动效：水面时间通过分层方向噪声和细法线波纹持续推进。草叶摆动不超过 3 度，使用两个偏移的风频率；不要自动旋转相机。
- 动效：光照预设在 900ms 内插值天空、雾、光照颜色、光照强度、曝光和水面 uniform。界面悬停和按下状态使用 160ms 过渡。
- 动效：指针创建的涟漪从精确的射线投射点扩散，自然淡出，并循环使用八个涟漪槽位中最旧的一个。拖动水面时最多每 45ms 添加一个新点，而不是创建不受控制的 uniform。
- 动效：相机重置在 650ms 内将位置和目标缓动回原始构图。现场笔记在桌面端从右侧淡入并平移 20px，在移动端从底部淡入并平移 24px。
- 动效：对于 prefers-reduced-motion，移除入场移动和草叶摆动，以固定时间值渲染流动水面，使 UI 和相机过渡立即完成，并仅保留简短的用户触发涟漪反馈。声音保持严格选择加入。
- 图像：不使用照片、图像下载、外部模型、HDRI 或录制音频。主视觉是一个精致的实时 WebGL 立体模型：带种子的非对称地球剖面、自定义水面着色器、程序化变形石头、实例化草和卵石、生成的噪声纹理、大气光照和柔和阴影。通用界面图标来自本地打包的 Lucide 包。

## 页面与区块
### [SCENE_NAME] — [BRAND] (`index.html`)
1. **野外工作站页头** — 左上角品牌标识由一个小巧的原创三线波纹字形构成，后接 [BRAND]，使用 15px DM Sans 600。中央元数据为 'INTERACTIVE FIELD STUDY / 01'，11px 大写，字距 0.16em。右侧按钮为 'Field notes'，带 Info 图标，点击打开笔记抽屉。将文档标题设为 '[SCENE_NAME] — [BRAND]'，并使用同一原创波纹字形作为本地 SVG favicon。
   布局：一条 64px 高的水平 flex 行位于场景上方，桌面端水平内边距 24px，移动端 16px。品牌和笔记按钮分居两端；中央元数据绝对居中，在 640px 以下隐藏。移动端显示 Info 图标加短标签 'Notes'。页头控件保持在 WebGL 画布之外。
   动效：页头随首个渲染场景淡入。笔记按钮的边框和文字颜色在 160ms 内过渡，并有可见的键盘焦点环。
2. **程序化溪流舞台** — 构建一个原创的 12 × 8 世界单位不对称椭圆形土壤剖面，露出较暗的土壤侧面，一条浅的两弯溪流从后左向前右斜向流过。地形不得复刻参考图的轮廓或石头位置。河岸和河床使用细分 BufferGeometry 高度场，河道中心线使用 CatmullRomCurve3，微小高程变化使用带种子的噪声。桌面端放置九块主石，分为三组不等，160 块小卵石，以及 1,200 丛实例化草丛；700px 以下减少为 80 块卵石和 550 丛草。用固定种子噪声变形二十面体石头几何体，MeshStandardMaterial 粗糙度在 0.72 到 0.94 之间，并用本地 CanvasTexture 噪声生成矿物斑点和土壤颗粒。草使用锥形交叉叶片、逐实例色相变化，以及小幅顶点着色器风弯。

将溪流创建为沿曲线延伸的 128 段 × 10 列带状网格，略低于河岸顶部、高于可见的卵石床。编写原创 GLSL 顶点和片元着色器。片元颜色必须组合基于深度的青色吸收、两层流动噪声、扰动法线、视角菲涅尔、反射天空渐变、狭窄太阳闪光，以及围绕显式石头中心 uniform 的浅色泡沫。着色器保持单通道，避免沉重的后处理链。最多传入八个波纹中心和起始时间作为 uniform；每个波纹是添加到法线和高光计算中的扩张阻尼环。

使用 PerspectiveCamera，FOV 38 度，桌面端初始位置 (11, 9, 13)，目标 (1.2, 0, 0)，使微缩景观略偏标题右侧。极角限制在 0.35–1.25 弧度，相机距离限制在 10–24，禁用平移和自动旋转，使用阻尼 OrbitControls。竖屏下使用位置 (13, 12, 17)、目标 (0, 0, 0)，并调整 FOV 使整个剖面在控制坞上方完整可见。

指针按下仅对水面网格做射线检测。命中水面时临时禁用轨道控制，并在命中 UV 或世界位置创建波纹；指针移动时以节流方式添加波纹，直到释放。命中陆地或空白画布则开始轨道旋转。滚轮缩放在任何位置都有效。触摸时，单指在水面产生波纹，单指在其他位置旋转轨道，双指取消波纹手势并捏合缩放。设置适当的 touch-action 和指针捕获，确保任何手势都不会滚动或选中页面。
   布局：WebGL 画布填充场景框架，桌面端位于 top 64px、right 16px、bottom 16px、left 16px，24px 圆角，隐藏溢出，外层背景 #101714。移动端框架使用 top 56px，其余各边 8px。在视口高度允许时，画布最小高度为 560px，填满可用首屏，绝不成为独立的折叠下方功能。为屏幕阅读器添加视觉隐藏的场景文字描述。
   动效：水和草从共享时钟动画，使用柔和阴影贴图，无相机自动旋转。桌面端使用 2048px 阴影贴图，移动端 1024px。隐藏时暂停渲染，处理尺寸变化时不重置波纹或所选光照。
3. **场景标题叠加层** — 眉题为 '[SCENE_TYPE] · [REGION]'，大写 11px DM Sans 500，字距 0.14em。主标题为 [SCENE_NAME]，Instrument Serif 400，桌面端 72px，移动端 44px，后接 [TAGLINE]，16px DM Sans 400。其下方是一个带 6px 强调点的小型实时指示器，文字为 'Touch the water'。不要添加常规营销 CTA 或覆盖景观的段落。
   布局：将叠加层定位在场景框架内 left 40px、top 40px，最大宽度 390px，pointer-events: none。仅在文字区域后方使用从 rgba(16,23,20,0.58) 到透明的克制线性遮罩，不要覆盖整个场景。移动端使用 left 20px、top 24px，最大宽度 calc(100% - 40px)。保持中央水面和主石不被遮挡。
   动效：介绍文案上升 16px 并随场景淡入。强调点使用轻柔的 2.4 秒不透明度脉冲，除非请求减少动效。
4. **场景控制坞** — 控制坞包含一个 'LIGHTING' 标签和三个等宽分段按钮，标签为 'Day'、'Dusk' 和 'Night'，分别带 Sun、Sunset 和 Moon 图标。初始选中 Day，每个选项都使用 aria-pressed。Day 将天空和雾设为 #B8CABD，半球光天空 #E8F2E8、地面 #53604A，强度 1.4，方向光 #FFF2D0 强度 3.0，来自 (-5,10,6)，曝光 1.0。Dusk 将天空和雾设为 #805D57，半球光 #DFA78A / #263C36 强度 0.9，方向光 #FFB077 强度 2.2，来自 (-8,4,3)，曝光 0.9。Night 将天空和雾设为 #0B1524，半球光 #607CA8 / #0C1513 强度 0.5，方向月光 #B9D4FF 强度 1.1，来自 (4,8,-5)，曝光 0.72，并加一盏低强度冷色轮廓光。用同一预设更新水面反射和闪光 uniform。

光照下方，包含一个 'Ambient sound' 开关，带 Volume2 / VolumeX 图标和文字 'Off' 或 'On'，以及一个独立的图标加文字 'Reset view' 按钮。声音在加载时必须关闭。仅在用户激活开关后，使用 Web Audio API 本地生成音频：叠加循环滤波噪声作为溪流嘶声和较低共振汩汩声，经过轻柔立体声声像器和主增益，恢复 AudioContext，并在 600ms 内渐入音量。关闭时渐出并挂起上下文。不要使用录制音频或自动播放。

一条紧凑的手势说明行在桌面端显示为“Drag land to orbit · Drag water to ripple · Scroll to zoom”，在粗略指针设备上显示为“Drag land to orbit · Drag water to ripple · Pinch to zoom”。所有按钮都有无障碍名称、按下状态、最小 44px 的触摸目标和键盘操作。
   布局：将停靠面板（dock）放在场景内右侧 24px、底部 24px 处，宽度 340px，内边距 20px，圆角 18px，背景色 #17201D、不透明度 88%，背景模糊 16px，边框色 #415048。灯光（Lighting）为三列网格；声音（sound）和重置（reset）共享第二行；手势说明位于一像素分隔线下方。在低于 700px 的屏幕上，停靠面板左右为 12px，底部为 12px，宽度自动，内边距 12px，标题仍位于其上方。场景必须在该停靠面板周围留出视觉呼吸空间，而不是被第二个侧边栏覆盖。
   动效：预设切换在 900ms 内插值过渡，按钮状态在 160ms 内响应，声音在 600ms 内淡出，重置在 650ms 内缓动。减少动效的用户会立即获得预设和相机变化。
5. **田野笔记抽屉（Field-notes drawer）** — 该抽屉初始隐藏，仅由页眉按钮打开。其眉题（eyebrow）显示为“FIELD NOTES / 01”，标题为 [SCENE_NAME]，引言为：“An invented [SCENE_TYPE] in [REGION]. [AUDIENCE_LINE] This small landscape is built from geometry, light, and code rather than footage or downloaded models.” 随后是三条带标签的笔记：“Water” — “A custom GLSL surface layers directional current, reflected sky, stone-edge foam, and expanding ripples.” “Terrain” — “A fixed seed shapes the cutaway banks, mineral-flecked stones, and instanced grasses so every visit begins in the same place.” “Atmosphere” — “Three lighting studies shift the mood. Optional synthesized ambience starts only when you ask.” 以安静的一句“Built for a pause, not a score.”结尾。包含一个带 X 图标的关闭按钮，无障碍标签为“Close field notes”。
   布局：使用模态对话框，右侧抽屉宽 380px，占满场景框架高度，内边距 28px，背景色 #17201D，左侧圆角 24px。在画布上添加浅色 rgba(16,23,20,0.34) 背景遮罩，打开时锁定焦点，按 Escape 或点击背景遮罩关闭，并将焦点返回打开它的元素。在移动端使用底部面板（bottom sheet），内边距 20px，顶部圆角 18px，最大高度 72svh，内部垂直滚动。这是唯一可滚动区域；主页面保持固定。
   动效：桌面端抽屉从右侧 20px 处进入，伴随 240ms 淡入；移动端从下方 24px 处进入。退出动画为 180ms，减少动效时使用即时过渡。

## 资产
- 图像：无需任何图像文件。使用 Three.js、GLSL、canvas 和原创 SVG 在本地生成微缩景观（diorama）、水面、草地、石块、土壤颗粒、矿物斑点、天空反射和 favicon。不要下载或嵌入参考截图或外部纹理。在 ASSETS.md 中记录程序化资产的实现方式。
- 图标：安装 lucide，仅打包 Sun、Sunset、Moon、Volume2、VolumeX、RotateCcw、Info 和 X。将这些通用图标用于控件，在 ASSETS.md 中注明 Lucide 及其 ISC 许可证，并在本地绘制原创的三线品牌波纹字形，而不是复制任何现有 logo。
- 字体：通过 @fontsource/instrument-serif 自托管 Instrument Serif 400，通过 @fontsource-variable/dm-sans 自托管 DM Sans Variable。导入本地 Fontsource CSS 和 woff2 文件，在 ASSETS.md 中注明这两个字体家族及其 OFL-1.1 许可证，并且绝不请求字体 CDN。

## 禁止事项
- 不得复制或改写参考的提示词文本、中文文案、源代码、场景构图、石头摆放、镜头取景、界面布局或精确配色。不得在站点、变量默认值、标题、slug 或 favicon 中使用 Kimi、3D Make、其标志或任何其他真实产品标识。
- 不得使用参考截图、专有模型、图片、视频、图标、自定义字体或音频。不得包含可识别的地标、品牌物件、授权角色、名人或真实人物肖像。
- 不得下载图库照片、外部栅格纹理、3D 模型、HDRI、录制环境音、占位服务图片，或来自 Unsplash、Pexels、Pixabay、Google Images 或任何未明确允许来源的素材。此模板有意采用程序化与代码绘制方式。
- 不得使用受限组件源码、商业字体、无允许许可证的依赖、远程脚本、CDN 链接、热链素材、第三方 API、分析工具或运行时网络请求。
- 不得添加后端、服务器路由、数据库、身份验证、远程表单、账户、分享服务或实时数据声明。所有控件必须在本地运行，任何交互都不得提交数据。
- 不得自动播放音频、在重新加载后强制开启声音、添加背景视频、自动旋转相机，或在设置了 prefers-reduced-motion 时创建持续装饰性运动。
- 不得将 hero 区域变成以排版为主的落地页、添加图库图片背景、把 3D 场景埋到首屏以下，或添加无关的定价、推荐语、功能卡片、FAQ 或营销区块。
- 不得使用重型后处理、无界粒子或涟漪数组、外部物理引擎，或使 dist/ 超过 20 MB 的素材。保留固定种子、实例化、像素比上限和移动端几何削减。
- 不得让水体拖拽和相机环绕争抢同一指针、在画布手势期间发生页面滚动、出现过小触摸目标、水平溢出、控件被裁剪，或在 1440×900 和 390×844 下出现控制台错误。
- 不得引入第二个页面或裸目录链接。交付物是 index.html 及静态相对素材；任何未来的内部导航都必须指向真实的 HTML 文件或 hash 路由。
- 不得输出 source map、将 src/ 复制到 dist/、使用绝对部署路径，或要求超过单条 npm run build 命令。生产输出必须是 dist/ 中压缩后的静态文件。
- 不得从 Google Fonts 或其他 CDN 加载字体，也不得添加 SEO 元数据块、Open Graph 标签、JSON-LD、站点地图、堆砌关键词的标题、日期或促销声明。仅使用由变量驱动的纯文本文档标题和本地 favicon。

---
Inspired by Interactive 3D Stream Diorama — https://www.kimi.com/showcases/3dmake
— Prompt by VibeFather · https://vibefather.ai/t/interactive-3d-stream-diorama · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
