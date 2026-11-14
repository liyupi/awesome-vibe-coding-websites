> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 雪花球玩具

完全按照下面描述构建这个网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个原创的单页 3D 雪花玻璃球玩具，呈现 [COLLECTION_NAME]，标题为 [HEADLINE]。大型中央玻璃球内包含三个程序化生成的微缩世界，其显示名称按顺序来自 [SCENE_SET]：一间小屋、礁石上的灯塔，以及一座通用城市。访客可通过拖动玻璃球、按下 Shake globe，或明确启用手机倾斜来摇晃；雪花随输入旋转，随后在重力作用下沉降。一个简短的文本字段会更新玻璃球正面黄铜铭牌上的 [BASE_MESSAGE]。为 [AUDIENCE] 撰写欢迎语和帮助文案，但不要让体验变成营销页面。

- 受众：为 [AUDIENCE] 调整通俗语言的介绍和帮助文本。该玩具必须让首次访问者也能理解，并且在没有运动传感器、账户或页面外说明的情况下完全可用。
- 目标：让访客在五秒内完成一次令人满意的摇晃，看到全部三个场景之间明显的差异，并在外观逼真的底座上放置一条个性化留言。在 1440×900 和 390×844 下保持渲染流畅，并让主要控件易于发现。
- 语气：触感、冬日、亲密而精确，如同安静书桌上的一件手工纪念品。使用简洁的美式英语和具体的交互反馈；避免节日促销语言、异想天开的填充内容、分数、连续记录和夸大宣传。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：原生 CSS（Vanilla CSS）
- 库：react 和 react-dom（MIT）、three（MIT）、lucide-react（ISC）、vite（MIT）、typescript（Apache-2.0）、@fontsource/fraunces（OFL-1.1）、@fontsource/dm-sans（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 安装配置：
  - 创建 package.json，脚本为 dev = vite、build = tsc --noEmit && vite build、preview = vite preview。使用 React 18.3、Vite 5.4、TypeScript 5.6、three 0.170.0、lucide-react 0.468.0 以及所列的 Fontsource 包；所有依赖均在本地安装并打包。
  - 配置 vite.config.ts：base 为 './'，build.outDir 为 'dist'，build.sourcemap 为 false，build.target 为 'es2020'，并启用压缩。使用单个 index.html 入口，不要将 src/ 复制到 dist/。
  - 项目结构：src/content.ts 存放所有变量和可见字符串，src/App.tsx 存放 UI 状态，src/components/GlobeStage.tsx 负责渲染器生命周期，src/globe/geometry.ts 负责地球仪和共享部件，src/globe/scenes.ts 负责三个世界，src/globe/snow.ts 负责粒子模拟，src/globe/input.ts 负责指针和传感器输入，src/style.css 负责设计令牌和响应式规则。
  - 通过 Fontsource Latin 子集自托管 Fraunces 500 和 600，以及 DM Sans 400、500 和 600。在绘制铭牌文字前等待 document.fonts.ready。设置 lang 为 en、纯文本 document title 为 '[BRAND] — [COLLECTION_NAME]'、theme-color 为 #0B1917，以及一个原创的本地 globe favicon.svg。
  - 将 SCENE_SET 按逗号拆分为恰好三个去除首尾空格的名称，并按 cabin、lighthouse、city 的顺序映射。可编辑的基础消息限制为 28 个 UTF-16 字符。将选中的场景、当前消息、摇晃状态、传感器状态和帮助对话框状态保存在 React 中；将逐帧位置和速度保存在 refs 和类型化数组中，而不是每帧重新渲染 React。
  - 使用 THREE.WebGLRenderer，antialias 为 true、alpha 为 false、powerPreference 为 high-performance、SRGB 输出色彩空间、ACESFilmic 色调映射、exposure 为 1.08、PCFSoftShadowMap。仅使用 PMREMGenerator 和 Three.js RoomEnvironment 生成反射；绝不下载 HDRI。添加一个冷色 HemisphereLight、一个暖色主 DirectionalLight 和一个柔和的蓝色轮廓光。
  - 使用 PerspectiveCamera，视角 35 度，near 0.1，far 80，初始位置为 (0, 2.8, 10.5)，看向 (0, 2.25, 0)。在窄屏上通过将相机后移并调整其目标来适配整个地球仪和底座，绝不裁剪穹顶或铭牌。不要添加相机轨道控制；拖拽是摇晃物体本身。
  - 建模一个直径约 4.5 世界单位、中心位于 y 3.0 的地球仪，坐落在一个半径 2.5、高度 0.72 的低矮胡桃木圆柱中，带两个细黄铜环。添加一个约 2.65 × 0.48 单位的前黄铜铭牌平面。将其文字绘制到本地 CanvasTexture 中，使用 Fraunces 600，深胡桃色覆盖在拉丝黄铜上，并带有微妙的下边缘刻痕阴影；仅在消息变化时更新纹理，并释放被替换的纹理。
  - 使用原创球体几何体构建玻璃，材质为 MeshPhysicalMaterial，transmission 0.9、thickness 0.12、roughness 0.08、IOR 1.45、transparent true、opacity 0.32、depthWrite false。添加克制的 Fresnel 边缘和两条狭窄的代码绘制曲线高光。保持微缩景观透过玻璃清晰可见；不要用乳白色透明、泛光或明亮反射带覆盖场景。
  - 在共享的柔和起伏雪堆上，为每个世界赋予独特的轮廓。Cabin（小屋）：一座小木屋，带有陡峭的雪顶山墙、两扇琥珀色窗户、一个烟囱、五棵形态各异的冷杉、一段短栅栏和一条弯曲小径。Lighthouse（灯塔）：一座通用的象牙色和柔和蔓越莓色锥形塔，立于棱角岩石上，带温暖的灯室、小栏杆、三个岩石水池和两棵被风吹拂的松树。City（城市）：六座原创的窄塔楼，带有不同的退台和屋顶水箱、散布的暖色窗户、一个口袋广场和三棵光秃的树。不得出现真实地标、旗帜、标志、人物或品牌物体。
  - 使用 THREE.Points 和柔和的圆形着色器精灵实现雪，而非图像纹理。使用固定的 mulberry32 种子，桌面端 720 片雪花，移动端 420 片。将位置、速度、大小、相位和沉降状态存储在预分配数组中。以轻柔可见的飘雪开始，约五秒内沉降；减少动态效果的访客以已沉降的雪开始。
  - 以固定 1/60 秒步长推进雪，最多四个追赶步。施加重力 -0.34 世界单位每平方秒、每步约 0.985 的速度阻尼、低幅度卷曲状漂移，以及来自拖拽或 Shake globe 的输入冲量。将雪花限制在内球体内，与场景的雪高碰撞，然后阻尼水平运动直至沉降。强烈摇晃应扬起已沉降的雪花；输入停止后，几乎所有雪花必须在四到八秒内到达雪堆，且不逃出玻璃。
  - 画布上的指针拖拽直接旋转地球仪组，x 和 z 方向在 ±0.16 弧度内，并根据指针速度注入能量。使用指针捕获和移动阈值，防止双重触发，不要将简单点击视为强烈摇晃。释放时，使用阻尼弹簧在约 700ms 内将地球仪恢复直立，同时雪继续沉降。Shake globe 提供可重复的 1.1 秒序列，包含三次递减冲量；Let it settle 清除添加的能量并将地球仪恢复直立。
  - 仅在面向触摸的设备上且 DeviceOrientationEvent 可用时显示 Enable tilt。在支持的 iOS 版本上，仅从该按钮的用户手势调用 requestPermission。获得权限后，将 beta 和 gamma 变化映射为小幅目标倾斜和雪冲量，钳制数值，并提供 Disable tilt。被拒绝或不可用的传感器保留拖拽和按钮玩法，显示纯文本状态消息且不抛出错误。绝不传输或持久化传感器读数。
  - 桌面端渲染器像素比上限为 1.6，移动端为 1.35。复用几何体和材质，尽可能合并静态场景部件，避免帧循环中的分配，并在 document.hidden 时暂停 requestAnimationFrame。使用 ResizeObserver 调整大小而不重建场景，并在卸载时释放渲染器、纹理、几何体、材质、监听器和传感器处理器。
  - 对于 prefers-reduced-motion，以静止的雪开始，移除空闲漂移、玻璃闪烁、自动弹簧过冲和灯塔光束扫射。显式 Shake globe 产生一次克制的 600ms 飘雪，冲量不超过正常值的 35%，然后将雪花置于静止；场景切换使用立即交换或 100ms 不透明度淡出。监听偏好变化并保留所有编辑和选择功能。
  - 为每个操作提供键盘等效的 DOM 控件。可聚焦的画布支持 S 摇晃、R 沉降，以及仅在获得焦点时用左右箭头切换场景；绝不在输入框或按钮内拦截这些按键。使用可见焦点、可访问名称、用于场景切换和传感器反馈的礼貌状态区域，以及 WebGL 初始化失败时的原创内联 SVG 雪花球回退。回退保留场景选择、消息编辑和显式的 CSS 雪花爆发可用。
  - 在项目根目录编写 ASSETS.md，涵盖原创程序化几何体、生成的 Canvas 纹理、原创 SVG 缩略图和 favicon、Three.js MIT、Lucide ISC，以及两个 Fontsource 包及其 OFL-1.1 许可证。保持所有运行时请求本地，且 dist/ 低于 20 MB。

## 变量
- [BRAND] — 纪念品品牌（默认：“Flurryfield”）。一个为文字标识、文档标题、帮助对话框和 favicon 无障碍标签编造的短名称；绝不是真实品牌。
- [COLLECTION_NAME] — 系列名称（默认：“The Pocket Winter Collection”）。一个简短的编造系列标题，用作介绍眉题和页面标题后缀。
- [HEADLINE] — 欢迎标题（默认：“Shake up a little wonder.”）。一句温暖的、四到八个词的邀请语；如果其含义发生变化，请相应调整辅助文案。
- [BASE_MESSAGE] — 默认基础信息（默认：“For your quiet moments”）。一条原创信息，最多 28 个字符，显示在可编辑字段和仿雕刻铭牌上。
- [SCENE_SET] — 三个场景名称（默认：“Ember Cabin, Beacon Point, Lantern City”）。恰好三个以逗号分隔的编造名称，每个最多 22 个字符，按小屋、灯塔、通用城市的顺序排列。
- [AUDIENCE] — 受众（默认：“daydreamers and creative gift-givers”）。一个简短的受众短语，用于调整欢迎和帮助文案，同时保留相同的玩具和控件。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/snow-globe-toy（默认：是；删除此行即可移除）

“页面与区块”下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 夜色（Night）`#0B1917` — 页面背景、渲染器清屏色，以及最深的房间阴影。
- 云杉（Spruce）`#132B26` — 实心工作台、页头，以及次级表面。
- 凸起松木（Raised Pine）`#1B3932` — 选中字段、悬停状态，以及微缩常青树的阴影。
- 线条（Line）`#315047` — 细线边框、分隔线，以及非活动控件轮廓。
- 象牙（Ivory）`#F3EFE3` — 主文本、深色表面上的按钮文字、雪，以及灯塔的象牙色。
- 薄雾（Mist）`#B8C8BE` — 可读的次级文案和非活动标签。
- 黄铜（Brass）`#D2A85F` — 活动轮廓、主 Shake 按钮、底座圆环，以及铭牌；填充时搭配夜色文本。
- 胡桃木（Walnut）`#5C3828` — 车削底座、小屋木材，以及铭牌刻字。
- 冰（Ice）`#C4E7E9` — 玻璃边缘、冷色高光、岩石水洼，以及雪地闪光。
- 余烬（Ember）`#F2C477` — 温暖的窗户、灯塔透镜，以及小型室内灯光。
- 蔓越莓（Cranberry）`#9A4A44` — 柔和灯塔条纹和一处小木屋门点缀，绝不作为 UI 错误色。

### 字体排印（Typography）
- 字标、H1、介绍中的场景名称、对话框标题，以及铭牌刻字：Fraunces（OFL），字重 500/600
- 正文、按钮、字段、场景选择器、状态消息、字符计数，以及帮助文本：DM Sans（OFL），字重 400/500/600

### 布局与动效（Layout & motion）
- 间距：使用 8px 基准单位。在 1440×900 下，页头高 68px，水平内边距 32px；主区域使用 28px 垂直内边距和 32px 水平内边距，列网格为 280px / minmax(420px, 1fr) / 304px，间距 24px。中央舞台填满可用高度，且至少 560px 高；左侧介绍接近其垂直居中，右侧工作台对齐其顶部。H1 使用 clamp(46px, 4.4vw, 68px)，行高 1.02。在 390×844 下，使用 56px 页头、16px 内边距，紧凑介绍带 16px 侧边内边距和 38px H1，340px 舞台，然后工作台按正常文档流排列并带 16px 内边距。在移动端将编号说明折叠为一行简短的 Drag · Choose · Write。允许在矮屏上垂直滚动，尊重安全区域内边距，绝不让控件与地球重叠，并保持每个目标至少 44×44px。
- 圆角：舞台和工作台使用 18px，对话框使用 12px，字段和主按钮使用 10px，场景选择器使用 8px，仅状态点和微小图标按钮使用全圆形状。使用 1px 线条边框和宽而柔和的阴影。物理玻璃地球可以发光；不要将每个 UI 表面都变成半透明玻璃。
- 动效：立即渲染完整地球和微缩场景，无启动画面、无开场镜头飞行、无阻塞式加载处理。首次普通动效的飘雪约在五秒内落定，且不移动页面布局。
- 动效：拖拽会在规定范围内直接倾斜物理地球，并将指针速度传递给雪。释放时使用约 700ms 的阻尼回正弹簧；雪花独立继续，并在四到八秒内落定。
- 动效：Shake globe 在 1.1 秒内运行三次递减脉冲，并临时将其标签改为 Shaking…；额外按下会从当前粒子位置重新开始，而不是复制循环。
- 动效：场景切换在 240ms 内交叉淡入淡出离开和进入的微缩场景，缩放从 0.97 到 1，保持相同的玻璃和底座，并在新世界中开始一次中等飘雪。消息和相机保持不变。
- 动效：在普通动效中，灯塔灯笼每九秒旋转一次微弱的暖色光束。除地球的物理倾斜外，玻璃高光保持静止；无泛光脉冲、无浮动页面装饰、无自动相机旋转。
- 动效：按钮、字段、选择器和对话框使用 120–160ms 的颜色或透明度过渡，移动最多 3px。Toast 保留 2.4 秒。减少动效行为遵循 Setup，并移除所有自主运动。
- 图像：交互式 Three.js 雪球是高级工艺的视觉锚点；不使用照片、生成的位图、下载的模型、图像纹理或 HDRI。完全用代码创建半透明但可读的玻璃、胡桃木与黄铜底座、程序化雪、三个精致的低多边形世界，以及实时 CanvasTexture 铭牌。如有需要，使用确定性的 Canvas 生成胡桃木纹理和微妙的雪地闪光。小屋、灯塔和城市必须具有不同的轮廓和微小手工细节，而不是同一模型的重新着色。原始内联 SVG 提供三个选择器缩略图和 favicon；Lucide 仅提供熟悉的实用图标。无人物、面孔、吉祥物、角色、真实地标、品牌标记或可识别的产品设计。

## 页面与区块
### [BRAND] — [COLLECTION_NAME] (`index.html`)
1. **内容模型与精确界面文案** — 将所有可见字符串保留在 src/content.ts 中，并从六个变量派生品牌、系列、标题、消息、场景名称和面向受众的语言。默认介绍眉题为 '[COLLECTION_NAME]'；H1 为 '[HEADLINE]'；正文为 'Three tiny worlds are waiting inside. Drag the globe to stir a flurry, then watch every flake find its place.' 三个编号提示为 '01 · Shake' / 'Drag in quick arcs, or use the shake button.'；'02 · Choose' / 'Move among a cabin, a lighthouse, and a city.'；'03 · Personalize' / 'Write a short message for the brass base.' 工作台标签为 'Choose a world'、'Message on the base'、'Shake globe'、'Let it settle'，以及受支持时的 'Enable tilt'。消息字段的 maxlength 为 28，无障碍描述为 'Your message appears on the front plaque. Up to 28 characters.'，并带有实时 '{n}/28' 计数。能量高时舞台状态为 'Flurry in motion'，沉降后为 'Snow at rest'。帮助按钮为 'How to play'。页脚文本为 'Three miniature worlds. One message that is yours.' 针对替代变量自然重写介绍和帮助语言；绝不在其变量默认值之外保留 Ember Cabin、Beacon Point、Lantern City 或默认消息。
   布局：仅内容区块通过单页状态实现；不要渲染单独的副本面板。场景名称始终遵循 SCENE_SET 顺序，铭牌始终显示当前可编辑消息。
   动效：通过礼貌状态区域播报场景变化、传感器权限结果和无剪贴板错误。不要将粒子帧或每个字符作为单独警报播报。
2. **页眉与纪念品介绍** — 页眉左侧包含原创线描地球标志和 Fraunces 600、22px 的 [BRAND]。页眉右侧包含安静标签 'A tiny interactive keepsake' 和带有可见文本 'How to play' 的 CircleHelp 图标按钮。左侧介绍包含作为大写 11px 眉题、字距 0.14em 的 [COLLECTION_NAME]，作为 H1 的 [HEADLINE]，精确正文文案，以及三个编号提示。不要添加营销导航、价格、推荐语、日期或注册号召。
   布局：页眉横跨顶部，底部有 Line 边框。桌面端介绍占据左侧网格列，不覆盖画布；在 H1、正文和提示之间使用充裕空间。移动端保持字标和 How to play 可见，仅隐藏小型纪念品标签，在舞台上方放置缩短的介绍，并将三行提示替换为 'Drag · Choose · Write'。无需汉堡菜单。
   动效：介绍在首次绘制时即存在。仅按钮悬停颜色和焦点环有动画；无标题显现或移动眉题。
3. **交互式雪花球舞台** — 将完整雪花球、胡桃木底座、黄铜铭牌和所选微缩模型居中于浓郁的 Night-to-Spruce 氛围中，并带有柔和接触阴影。当前场景名称出现在左下角，带有小型字体说明 'CABIN'、'LIGHTHOUSE' 或 'CITY'；居中的下方提示在指针设备上显示 'Drag to shake'，在触摸设备上显示 'Drag or use Shake globe'。铭牌正面朝向，在初始相机中清晰可读。画布具有命名当前场景和简明键盘说明的无障碍标签。如果 WebGL 失败，仅将画布替换为显示相同场景类型和当前消息的原创 SVG 雪花球，并显示可见文本 '3D is unavailable. You can still choose a world and write a message.'
   布局：画布填充中央舞台，18px 圆角和细微 Line 边框，而非卡片堆叠。将 3D 对象尺寸设为约占舞台高度的 88%，同时为小型说明留出清晰空间。将所有说明保持在铭牌和微缩模型轮廓之外。移动端舞台高 340px，整个雪花球保持可见；控件按正常流在下方排列。仅在画布上设置 touch-action none，使工作台字段和页面滚动保持自然。
   动效：实现指定的拖拽、固定步长雪花、Shake globe、Let it settle、场景交叉淡入淡出、传感器回退和减少动效行为。输入反馈在一个渲染帧内开始。状态文本在微小残余运动期间不会在 flurry 和 rest 之间闪烁。
4. **场景与消息工作台** — 标题 'Choose a world' 按 SCENE_SET 顺序引入三个选择器按钮，每个带有原创 SVG 缩略图、完整场景名称和小型 Cabin、Lighthouse 或 City 类型标签。选中状态使用 2px Brass 轮廓、Raised Pine 填充和小型对勾图标，绝不单靠颜色。下方将文本输入标记为 'Message on the base'，并初始化为 [BASE_MESSAGE]。每次编辑为铭牌清理首尾空白，强制 28 字符限制，重绘本地 CanvasTexture，并更新计数；空字段显示素黄铜铭牌和辅助文本 'Add a message when you are ready.' 主按钮 Shake globe 使用 Move3d 图标。次要按钮 Let it settle 使用 Snowflake 图标。Enable tilt 或 Disable tilt 仅在相关时出现，状态为 'Tilt on'、'Tilt off'、'Tilt permission was not granted. Dragging still works.' 或 'Tilt is unavailable. Dragging still works.'
   布局：桌面工作台为一个实心 Spruce 列，20px 内边距，三个堆叠的 64px 场景选择器，20px 区块间距，全宽消息字段，以及两个全宽操作按钮。移动端使用三列场景网格，标签允许换行至两行，然后是消息和操作行。Shake globe 和 Let it settle 可在 390px 时共享两列行；倾斜保持全宽。输入高度至少 44px，标签可见，焦点轮廓为 2px Ivory 并带外部 Night 对比环，且无水平页面溢出。
   动效：选择场景仅交换微缩模型并启动一次中等 flurry。输入不会使雪花球摇晃或倾斜。Shake 和 settle 仅在必要时禁用其重复操作，绝不禁用消息或场景控件。
5. **帮助对话框与安静署名** — How to play 打开标题为 'Make a little flurry' 的对话框，包含三个步骤：'Shake it' / 'Drag the globe in quick arcs, press Shake globe, or press S while the globe is focused.'；'Change the world' / 'Choose a cabin, lighthouse, or city. Use left and right arrows on the focused globe as an alternative.'；'Leave a message' / 'Type up to 28 characters and watch the brass plaque change.' 添加 'On a supported phone, Enable tilt asks for motion access. Motion data stays in this page and is never sent anywhere.' 和 'Reduced motion keeps the same controls with shorter, gentler effects.' 关闭按钮为 'Back to the globe'。将可选 [CREDIT] 链接放在对话框步骤下方，并同时作为安静的桌面页脚链接；绝不在其他地方添加第二个品牌提及。
   布局：使用居中的 460px 最大宽度对话框，20px 内边距，Night 遮罩，无障碍标题，关闭按钮，焦点陷阱，Escape 关闭和焦点返回。移动端使用底部抽屉，带安全区域内边距和最大高度 78svh。桌面页脚位于主网格下方；移动端将页脚放在工作台之后。无 toast 或对话框自动打开。
   动效：对话框进入使用 140ms 不透明度和 3px 垂直移动，或在减少动效下立即不透明度。关闭在任何可选场景操作之前恢复焦点。

## 资产
- 图像：不使用任何外部或生成的图像文件。本项目中所有地球仪、底座、玻璃、小屋、灯塔、城市、雪堆、粒子、反射以及程序化 Canvas 纹理均由你自行创作。在 ASSETS.md 中记录原始的 Three.js、着色器、SVG 和 Canvas 作者信息；不得使用下载的模型、HDRI、照片或占位图像。
- 图标：将 lucide-react 本地打包，用于 CircleHelp、Check、Move3d、Snowflake、Smartphone、X 和 RotateCcw，尺寸为 18–20px，颜色使用 currentColor。以 inline SVG 绘制原创的地球仪字标、favicon 以及小屋/灯塔/城市选择器缩略图；不得使用 logo 或第三方图标素材。在 ASSETS.md 中记录 Lucide 的 ISC 许可证。
- 字体：安装并自托管 @fontsource/fraunces 和 @fontsource/dm-sans，仅导入所声明字重的 Latin woff2 文件。在 document.fonts.ready 之后，在 CanvasTexture 铭牌中使用相同的本地 Fraunces 字体。在 ASSETS.md 中记录包路径、源 URL、作者和 OFL-1.1 许可证；不得使用字体 CDN。

## 不要
- 不要使用真实品牌、授权角色、吉祥物、标志、口号、可识别的产品设计、真实人物肖像、著名建筑、地标剪影、真实城市标识、旗帜或品牌招牌。所有场景和品牌名称必须保持虚构。
- 不要复制现有雪花玻璃球的代码、提示词文本、界面文案、精确构图、装饰底座、标志性插画、独特图标、模型、纹理、照片、视频或音频。每个视觉元素都必须用原创的程序化几何体和声明的本地包重建。
- 不要使用图像生成、图库照片、下载的 3D 模型、远程 HDRI、外部图像纹理、录制声音、商业字体、受限的 UI 库源码、占位图服务，或额外的物理和动画库。声明的 Three.js 模拟已足够。
- 不要后端、服务器代码、API 路由、数据库、身份验证、远程表单提交、分析、第三方 API、运行时 fetch、传感器上传、分享服务或账户。消息、场景和运动状态保留在当前页面本地。
- 不要 CDN 脚本或样式、Google Fonts URL、热链接资源、外部托管的图标或远程运行时依赖。使用 Vite base './'、相对资源路径、本地打包的包和自托管的 Fontsource 字体。
- 不要在加载时请求运动权限、将拖拽隐藏在传感器支持之后、自动播放声音、在传感器被拒绝时抛出错误，或要求先看教程才能游玩。不要添加音频、cookie、弹窗促销、强制分享或启动画面。
- 不要添加营销区块、定价、访客计数、日期、超出纯标题和 favicon 的元数据、Open Graph 工作、JSON-LD、站点地图代码、额外路由或裸目录链接。唯一的页面是 index.html。
- 不要允许无界粒子、逐帧 React 渲染、逐帧几何体分配、未限制的设备像素比、隐藏时动画或雪花逃逸。遵循粒子上限、固定时间步长、清理和自适应移动端渲染要求。
- 生产 npm run build 必须输出压缩的静态 dist/，低于 20 MB，无 source map，且不将 src/ 复制到 dist/。它必须在 1440×900 和 390×844 下运行且无控制台错误，并且不留下水平页面溢出。
- 在 CSS 和 WebGL 中都尊重 prefers-reduced-motion，保留明确的交互反馈，提供键盘等效的 DOM 控件和可见焦点，捕获并恢复对话框焦点，并保持触摸目标至少 44px。绝不要仅用颜色表示选中状态。
- 不要在 src/content.ts 之外硬编码默认品牌、集合、标题、场景名称、受众文案或基础消息。绝不要暴露未解析的 [VARIABLE] 占位符或保留与替代值冲突的默认文案。
- 除可选的 [CREDIT] 链接外，绝不要在渲染的网站中提及 VibeFather，也绝不要使用 VibeFather 或真实品牌作为变量默认值。所有文案、标签、示例数据和 alt 文本必须为美式英语。

---
— Prompt by VibeFather · https://vibefather.ai/t/snow-globe-toy · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
