> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 3D 花园玩具

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个位于 [GARDEN_NAME] 的单页交互式 3D 花园。开场标题为 [HEADLINE]。访客从 [FLOWER_SET] 中选择四种花之一，点击或轻触空地种下一丛六株花，调节一个共享的风场，拖动以环绕观察，捏合或滚动以缩放，下载一张干净的花园快照，并可重置为最初的种子草甸。四个名称按顺序对应径向、杯状、钟形和星形程序化花朵几何体。这是一个可玩的全视口玩具，而非营销落地页。

- 受众：设计师、创作者、教育工作者和开发者，他们正在寻找一个平静的交互式网页玩具、一个植物学演示，或一个支持鼠标、触摸和键盘的小型程序化艺术体验。
- 目标：让首次访客在五秒内种下一丛可辨认的花，无需打开帮助即可理解每个可见控件，并可在愿意时带走一张 PNG 花园明信片。在桌面端和移动端保持数百朵花的流畅交互。
- 基调：安静愉悦且善于观察，像一页田野笔记。使用简短、平实的说明和温和的反馈；没有分数、连续记录、货币、竞争机制或夸大宣传。

## 技术栈
- 框架：Vite 5 + TypeScript 5
- 样式：原生 CSS（Vanilla CSS）
- 库：three（MIT）、lucide（ISC）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource-variable/dm-sans（OFL-1.1）、vite（MIT）、typescript（Apache-2.0）、@types/three（MIT）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 创建 package.json，脚本为 dev = vite、build = tsc --noEmit && vite build、preview = vite preview。锁定 three 0.170.0 和 lucide 0.468.0；使用 Vite 5.4、TypeScript 5.6、@types/three 0.170.0 以及当前的 Fontsource 可变字体包。使用一个 index.html，以 src/main.ts 作为入口。
  - vite.config.ts：base './'、build.outDir 'dist'、build.sourcemap false、build.target 'es2020'、assetsInlineLimit 0。不要将 src/ 复制到 dist/。所有运行时文件必须通过相对 URL 在本地解析。
  - 文件布局：src/content.ts（所有变量值、文案、有序的花名和植物颜色）、src/main.ts（组合与生命周期）、src/style.css、src/garden/Garden.ts（渲染器和动画循环）、src/garden/geometry.ts（地形和四种花的几何体）、src/garden/instances.ts（实例化池和风着色器）、src/garden/interactions.ts（射线检测、指针和键盘种植）、src/garden/snapshot.ts 以及 src/ui.ts（停靠栏、帮助、重置、提示和可访问性）。不要添加 React 或状态框架。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/fraunces' 和 '@fontsource-variable/dm-sans'，并从 main.ts 导入该模块。index.html：lang en、theme-color #DDEDE6、本地 favicon.svg，以及标题 '[BRAND] — an interactive flower garden'。
  - 使用固定的 mulberry32 PRNG，种子为 1207，用于初始排列和丛偏移，以便重置时精确恢复同一片草地。将应用状态保存在一个 GardenState 对象中：selectedFlower 0–3、wind 0–100 默认 35、clumps、camera state、helpOpen、resetOpen 和 toast。不要持久化或传输花园数据。
  - 渲染器：THREE.WebGLRenderer，antialias true、alpha false、powerPreference 'high-performance'、outputColorSpace SRGB、ACESFilmicToneMapping、exposure 1.05 和 PCFSoftShadowMap。将清除颜色设置为 Sky。使用 HemisphereLight 加一个暖色 DirectionalLight，移动端使用 1024 阴影贴图，桌面端使用 2048。不使用 HDR、图像纹理或远程环境贴图。
  - 相机：PerspectiveCamera 38 度、near 0.1、far 120、初始位置 (10, 8.5, 12)，看向 (0, 0.7, 0)。使用从 three/addons 导入的 OrbitControls，target 为 (0, 0.7, 0)、damping 0.08、minDistance 10、maxDistance 25、minPolarAngle 0.45、maxPolarAngle 1.25，禁用平移并禁用自动旋转。在窄屏上通过增加距离来适配完整岛屿，而不是裁剪它。
  - 几何体：从径向分段构建一个原创的非对称豆形草岛，约 14 × 10 世界单位，具有柔和的扇贝状轮廓、平缓的 heightAt(x,z) 起伏，以及 0.75 单位的土壤边缘和两条更深的切土带。使用相同的 heightAt 函数放置每一株植物。在岛屿下方添加一个宽大的哑光地面平面，用于柔和的接触阴影，并在主要种植区域外添加几块代码构建的棱角石头。不参考任何地形轮廓或物体放置。
  - 植物学：每种花型都有可复用的茎、叶、花瓣和花心几何体。类型 0 是径向雏菊状花头，有 10 片窄象牙色花瓣；类型 1 是六瓣开放的珊瑚色杯状花；类型 2 是五朵下垂的薰衣草色铃铛组成的花簇；类型 3 是星状花头，有八片蓝色花瓣。每根茎使用两个小叶片网格。花朵高度通过 PRNG 在 0.65 到 1.2 单位之间变化。当 FLOWER_SET 变化时，重命名四个按钮并在 content.ts 中调整它们的自然植物颜色，同时保留这四个不同的几何体家族。
  - 性能：使用按花型和植物部位分组的 InstancedMesh 池，外加一个实例化草池；绝不为每朵花分配一个 Mesh。为 120 丛、每丛六朵花（720 朵花）预分配，并用零缩放隐藏未使用的实例。桌面端使用 1800 片草叶，移动端使用 900 片。将每个实例的出生时间、相位、高度和生长数据存储为 InstancedBufferAttributes。风着色器根据局部高度、世界位置、共享时间和风 uniform 弯曲顶点；仅在需要时更新 uniform 和实例矩阵，不逐帧创建几何体。
  - 自适应质量：桌面端将 devicePixelRatio 上限设为 1.75，移动端设为 1.35。在首批 120 个可见帧之后，如果平均帧率低于 45 fps，则以 0.25 为步长降低像素比，最低至 1，并将可见草实例减少三分之一。当 document.hidden 时暂停动画循环。通过 ResizeObserver 调整大小，并更新相机宽高比和渲染器尺寸，而不重建场景。
  - 种植：将指针坐标对草顶网格进行射线检测。仅接受种植边界内且距离现有丛中心至少 0.42 单位的地面。有效种植会精确添加六朵花：一朵在命中点，五朵围绕它，半径 0.32–0.48，并带有种子化的角度抖动。初始状态包含 18 个分布式的丛（108 朵花）；容量为 120 丛。指针抬起仅在移动小于 6 CSS 像素、持续时间小于 350ms 且手势不是捏合时计为种植；否则由 OrbitControls 处理拖拽。
  - 生长：每个丛在 480ms 内以 easeOutCubic 升起，然后花瓣在 360ms 内以 easeOutBack 缩放并旋转打开，缩放上限为 1。六朵花错开 55ms。现有花朵保持种植状态。空闲风是共享的顶点着色器效果，而不是数百个 JavaScript 动画。
  - 减少动态效果：当 prefers-reduced-motion 为 reduce 时，立即渲染已生长的花朵，将风冻结为轻微的静态倾斜，省略相机插值和漂浮花粉，并使用仅透明度的 100ms UI 过渡。监听偏好变化。风滑块仍会更新其标签和静态倾斜。所有种植和导出功能仍然可用。
  - 键盘：画布可聚焦，并带有可见的种植环。方向键在有效地面上移动该环，Enter 或 Space 种植，数字键 1–4 选择花型。当按钮、滑块、对话框或其他表单控件具有焦点时，不要拦截方向键、Space 或数字键。帮助、重置、快照和风仍为普通的键盘可访问 DOM 控件。
  - 快照：显式渲染一次，然后使用 renderer.domElement.toBlob 导出 PNG，不使用 preserveDrawingBuffer。仅导出 3D 场景，绝不导出 DOM 控件或对话框。文件名通过将 BRAND 转换为 slug 并加上 '-garden.png' 来命名。最长边限制为 2048 像素，保留当前相机和花园状态，之后恢复之前的渲染尺寸，并显示成功或失败提示。
  - 在项目根目录编写 ASSETS.md，涵盖原创程序化场景和字形、Fontsource 字体包及其许可证、lucide 及其 ISC 许可证，以及 Three.js 及其 MIT 许可证。public/favicon.svg 是一个用代码绘制的原创四瓣几何标志。将 dist/ 保持在 20 MB 以下。

## 变量
- [BRAND] — 花园品牌（默认：“Meadowmint”）。一个虚构的一到两个单词的名称，用于字标、页面标题、帮助文案和快照文件名。绝不使用真实品牌或 VibeFather。
- [GARDEN_NAME] — 花园名称（默认：“Wanderlight Meadow”）。一个简短的虚构地名，用作介绍眉题和重置文案中。
- [HEADLINE] — 欢迎标题（默认：“Plant a little joy.”）。一句平静的三到七个单词的句子。如果其含义发生变化，请重写辅助文案。
- [FLOWER_SET] — 四个花名（默认：“Daisy, tulip, bluebell, cosmos”）。恰好四个逗号分隔的美式英语常用名称，按放射形、杯形、钟形和星形几何顺序排列。同时更新按钮标签、植物颜色、帮助文案和无障碍名称。
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接指向 https://vibefather.ai/t/3d-flower-garden-toy（默认：是；删除此行以移除它）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图像——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图像路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便以后无需修改组件即可替换内容。

## 设计
### 颜色
- 天空（Sky）`#DDEDE6` — 页面和渲染器的清除色；淡雅的桉树日光色。
- 奶油色（Cream）`#FFFDF4` — 控制面板、对话框、主文本字段和雏菊花瓣。
- 墨色（Ink）`#1F342B` — 标题、正文、图标和深色 UI 细节。
- 苔藓色（Moss）`#526C59` — 次要文案、非活动图标、茎和弱化标签。
- 草甸色（Meadow）`#84A96B` — 主草地顶部，带有细微的程序化明度变化。
- 土壤色（Soil）`#8A6A4F` — 漂浮花园岛的切土侧面。
- 阳光色（Sun）`#F2C14E` — 选中花朵的背景、焦点环和花心；始终与 Ink 文本搭配。
- 珊瑚色（Coral）`#E78072` — 默认杯状花的花瓣及其选择器色块。
- 薰衣草色（Lavender）`#9B8AC4` — 默认铃铛花的花瓣及其选择器色块。
- 花瓣蓝（Petal Blue）`#82B6C9` — 默认星形花的花瓣及其选择器色块。

### 字体排印
- 展示字体：字标、欢迎标题和对话框标题；使用 Fraunces Variable，采用柔和的光学字符，不使用斜体：Fraunces (OFL)，字重 600/700
- 界面和说明：按钮、风力值、花朵名称、帮助和提示条；使用 DM Sans Variable，花朵计数使用表格数字：DM Sans (OFL)，字重 400/500/600/700

### 布局与动效
- 间距：使用 8px 基准单位。桌面端顶栏高 72px，水平内边距 32px；介绍文字位于其下方 28px、左侧 32px 处，最大宽度 350px。底部停靠栏居中，距视口边缘上方 24px，最大宽度 880px，内边距 16px，间隙 12px。在 390px 宽度下，顶栏高 60px，内边距 16px，介绍文字左右各 16px，最大宽度 300px，停靠栏距安全区域感知的底部边缘上方 12px，采用两行紧凑布局。标题使用 clamp(36px, 4.4vw, 62px)，行高 0.98；字标 22px；介绍正文 15px/1.55；控件 13–14px；移动端标题 36px。每个交互目标至少为 44 x 44px。
- 圆角：停靠栏和对话框为 18px，花朵按钮和重置弹出框为 12px，小图标按钮为 10px，花朵计数器和提示条为 999px。使用 1px Ink、12% 不透明度的边框和宽而柔和的阴影；避免重度玻璃拟态的模糊堆叠。
- 动效：初始草甸在首次渲染时即已呈现；不要将其隐藏在加载屏幕或冗长介绍之后。UI 面板在 180ms 内淡入，不移动 3D 场景。
- 动效：植物生长遵循 Setup 中定义的两阶段 480ms 茎和 360ms 花瓣序列，每朵花错开 55ms。
- 动效：风是连续但细微的：在 35% 时，尖端倾斜并恢复约 0.08–0.16 世界单位，使用两个正弦频率和逐实例相位，绝不是整个岛屿同步的左右摇摆。
- 动效：选中的花朵按钮填充 Sun 色，其微小的 SVG 花朵在 140ms 内旋转 6 度；悬停时按钮最多上浮 1px。
- 动效：种植光标是一个投射到地面上的细 Cream-and-Ink 圆环；有效放置显示一个小的六点丛预览，无效放置使圆环变暗但不种植。
- 动效：对话框以 120ms 的遮罩和 160ms 的从 0.98 到 1 的缩放淡入；提示条在 160ms 内淡入并上升 4px，保持 2.4 秒，然后淡出。
- 动效：相机阻尼仅限于 OrbitControls；没有自动播放旋转、滚动劫持、视差页面、彩纸或庆祝粒子爆发。
- 动效：减少动效会冻结空闲摇摆，并使生长立即完成，如 Setup 中所定义；功能和可见状态反馈保持完整。
- 图像：不使用照片、栅格纹理、下载的模型或生成图像文件。高工艺首屏锚点是交互式 Three.js 植物立体模型本身：不对称的切土岛屿、四个原创程序化花朵家族、实例化草地、柔和阴影和温暖的天空。四个选择器字形和 favicon 使用原创内联 SVG，实用图标使用本地打包的 Lucide。不出现人物、角色、地标或品牌物体。

## 页面与区块
### 花园（`index.html`）
1. **内容模型与精确默认文案** — 将所有可见字符串放入 src/content.ts，并从 BRAND、GARDEN_NAME、HEADLINE 和 FLOWER_SET 渲染。默认介绍：眉题 '[GARDEN_NAME]'，H1 '[HEADLINE]'，正文 'Pick a flower, then click or tap the grass to grow your own little corner of [GARDEN_NAME].' 工具标签：'How to play'、'Reset meadow'、'Snapshot'、'Wind' 和 '{count} blooms'。风力值文本在 0 时为 'Still'，1–34 时为 'Light'，35–69 时为 'Breezy'，70–100 时为 'Gusty'；默认显示 'Breezy · 35%'。花朵按钮按顺序使用 FLOWER_SET 中的四个名称。提示消息：'Six new blooms, just for you.'、'Plant on an open patch of grass.'、'Your meadow is full. Reset to begin again.'、'Garden saved as a PNG.'、'The snapshot could not be saved. Try again.' 和 'A fresh meadow is ready.' 当 FLOWER_SET 变化时，不要留下任何硬编码的默认花朵名称。为替代值重写自然的辅助文案，保持美式英语，并从 BRAND 派生快照文件名。
   布局：仅内容区块；没有单独可见的面板。单页状态驱动舞台和所有覆盖层。
   动效：提示消息更新使用 aria-live polite 区域。不要连续播报动画帧或风力变化。
2. **全视口花园舞台与顶栏** — 首屏是可玩的草地，预置 18 丛，因此永远不会以空状态开始。左上角字标是一个原创四瓣 SVG，后跟 [BRAND]。右上角控件是花朵计数器、标有 'How to play' 的 HelpCircle 图标按钮，以及标有 'Reset meadow' 的 RotateCcw 图标按钮。在字标下方显示内容模型中的眉题、H1 和说明。在桌面上，岛屿构图偏向中右侧，以便介绍文字保持可读；在移动端，将介绍放在紧凑的顶部区块中，并让整个岛屿适配在介绍与底部停靠栏之间。如有需要，仅在介绍文字后方使用柔和的 Cream 径向渐变以增强对比度，绝不要使用全屏覆盖层。
   布局：Canvas 固定 inset 0，宽度和高度为 100%；DOM 覆盖层位于其上方。顶栏横跨视口。介绍除文本选择外不可交互，且不会阻止在其他位置种植。桌面介绍宽度 350px；移动介绍宽度 min(300px, calc(100vw - 32px))。在 1440×900 和 390×844 下，3D 岛屿仍是最大的视觉元素。
   动效：草地和初始花朵立即可见。风力仅在首帧后开始；没有介绍镜头飞行。
3. **程序化花朵、草地与天气** — 渲染 Setup 中定义的四个几何家族和植物颜色，在轮廓上有可见差异，而不是同一模型的重新着色。默认雏菊有象牙色径向花头和金色花心，郁金香是珊瑚色开口杯状，蓝铃花是下垂的薰衣草色花簇，波斯菊是蓝色八角星形。在每个花丛内添加不同的茎高、叶角和花头旋转。草地与花朵共享相同的风向和强度。风力 0 停止动态摇摆；100 产生更强的弯曲，但绝不会连根拔起或使花头脱落。当前花朵选择仅影响新花丛，绝不会重新着色现有花丛。
   布局：花朵位于草地顶部，没有漂浮的茎或脱落的花瓣。保持石头和外侧 0.6 单位边缘不进行新种植。在桌面和移动尺寸下，从初始相机看花朵必须保持清晰可辨。
   动效：使用 Setup 中共享的着色器风场和生长时序。减少动态效果模式将连续摇摆替换为静态倾斜。
4. **种植与相机交互** — 在有效开阔草地上单击或短按会种植六朵所选类型的花。在指针悬停时显示六点地面预览，在画布获得焦点时显示键盘种植环。拖动旋转相机，滚轮缩放，触摸时单指拖动环绕，双指捏合缩放；这些手势不得意外种植。无效地面会产生开阔地提示且无状态变化。达到容量时，进一步的有效点击会产生草地已满提示。方向键移动键盘环，Enter 或 Space 种植，1–4 选择花朵类型。
   布局：所有交互都保持在单一舞台内；没有滚动页面、路由变化或单独的游戏屏幕。仅在画布上设置 touch-action none，不要在停靠栏控件上设置。画布回退文本为 'This garden needs WebGL. Try a current browser with hardware acceleration enabled.'
   动效：种植反馈在指针抬起后 50ms 内开始。环绕阻尼轻柔，并在重置时停止。理解当前选择不需要任何动效。
5. **花朵与风力停靠栏** — 底部停靠栏包含四个按 FLOWER_SET 顺序排列的花朵选择按钮、一个 0 到 100 默认 35 的 Wind 范围输入，以及一个带有可见文本 'Snapshot' 的 Camera 图标按钮。每个选择器都有一个原创 SVG 轮廓、其完整常用名，以及仅在桌面端显示的数字键提示。选中状态使用 Sun 填充、Ink 文本和 2px Ink 边框；未选中状态为 Cream 并带有细微边框。风力控件显示 'Wind'、当前词语和百分比，并在拖动时持续更新。首次渲染后 Snapshot 保持启用。
   布局：桌面：一个水平 880px 最大行，包含四个等宽花朵按钮、一个 170px 风力组和一个 122px 快照按钮。移动：第一行是四个等宽选择按钮，允许 11–12px 标签换行到两行；第二行是灵活的风力滑块加上一个 48px 快照图标按钮，带有可访问标签。停靠栏遵循安全区域内边距，且绝不覆盖顶部介绍。所有控件都有 44px 最小目标，以及 2px Sun 焦点轮廓和 2px Ink 外部对比。
   动效：选择和悬停使用 Design 中克制的 140ms 反馈。滑块移动更新着色器 uniform，而不对 DOM 面板做动画。
6. **帮助、重置确认与反馈** — How to play 打开一个标题为 'A field guide' 的对话框，包含四个编号项：'Choose a bloom' / 'Pick one of the four flowers in the garden dock.'；'Plant a clump' / 'Click or tap open grass. Drag to orbit; scroll or pinch to zoom.'；'Change the weather' / 'Move Wind from Still to Gusty. Your flowers lean together.'；'Keep a postcard' / 'Snapshot downloads only the garden, without the controls.' 添加 'Keyboard: 1–4 choose flowers, arrow keys move the planting ring, Enter plants.' 关闭按钮为 'Back to the meadow'。重置打开一个标题为 'Start this meadow over?' 的确认框，内容为 'Your planted clumps will be replaced by the original [GARDEN_NAME]. Downloaded snapshots stay on your device.' 按钮为 'Keep gardening' 和 'Reset meadow'。确认后恢复种子 1207、18 丛、第一种花、风力 35 和初始相机，然后显示新草地提示。
   布局：居中的 Cream 对话框，最大宽度 460px，边距 16px，位于半透明 Ink 遮罩之上。重置使用相同的对话框组件。捕获焦点，将焦点返回打开者，按 Escape 关闭，且仅帮助对话框可通过点击遮罩关闭；重置通过 Escape 或 Keep gardening 关闭，绝不因意外点击遮罩而关闭。提示消息位于停靠栏上方，不覆盖花朵选择器。
   动效：使用 120–160ms 不透明度和微小缩放过渡，或在减少动态效果下仅使用 100ms 不透明度。没有自动打开的对话框。
7. **低调署名** — 在宽屏上，将 [CREDIT] 渲染为左下角一个低调的 12px 文本链接；在移动端，渲染在帮助对话框页脚内。这是站点中唯一提及 VibeFather 的地方。没有其他页脚链接、日期、社交计数、价格或促销消息。
   布局：桌面署名距左边缘和底边缘 18px，且不得与居中的停靠栏重叠。移动端署名仅出现在帮助对话框内，因此不会挤占控件。
   动效：除标准文本链接悬停下划线外无其他动效。

## 资产
- 图像：不使用任何栅格图像、图像下载、生成图像文件、外部纹理或 3D 模型文件。地形、草地、四类花卉、石块、阴影、选择器图标和 favicon 均使用 Three.js、CSS 和内联 SVG 以程序化方式绘制。在 ASSETS.md 中将这些标注为原创代码绘制资产。
- 图标：安装并打包 lucide 0.468.0（ISC），用于 HelpCircle、RotateCcw、Camera、X、Check、MousePointer2 和 Wind；图标尺寸为 18–20px，描边宽度为 1.75，颜色使用 currentColor。花卉选择器剪影和四瓣 favicon 为原创内联 SVG，并非参考图标或品牌图标。在 ASSETS.md 中记录 Lucide。
- 字体：通过 @fontsource-variable/fraunces 和 @fontsource-variable/dm-sans（OFL-1.1）自托管 Fraunces Variable 和 DM Sans Variable，并在 src/fonts.ts 中导入，以便 Vite 输出本地 woff2 文件。在 ASSETS.md 中记录这两个包及其许可证。不使用字体 CDN。

## 禁止事项
- 不得复制参考对象的代码、提示词文本、中文文案、截图、地形轮廓、植物分布、花朵模型、相机构图、控件布局、调色板、字体排印、图标或其他可识别的媒体素材。在渲染出的花园中，任何位置都不得使用源产品的名称、字标或品牌标识。
- 不得使用真实品牌、徽标、吉祥物、动漫或游戏角色、可识别的人物肖像、地标物体、商业字体、受限的 UI 库源码，或明确列出的包之外的第三方视觉素材。
- 不得使用照片、位图纹理、下载的模型、占位图服务、远程 HDRI 或生成图片 URL；整个视觉场景和所有花朵图形都必须是原创的代码绘制作品。
- 不得包含后端、服务端代码、API 路由、数据库、身份验证、会提交的表单、分析统计、外部 API、运行时 fetch 调用、上传或向服务分享。花园状态保留在内存中，快照在本地下载。
- 不得为每朵花创建单独的 Mesh 对象，不得逐帧分配几何体，也不得为每株植物运行 JavaScript 动画循环。使用指定的实例化池、共享着色器风效、容量上限和自适应像素比，使数百朵花在手机上仍然实用。
- 不得自动播放声音、劫持滚动、自动旋转相机、游戏化分数、货币、账户、弹窗广告或强制教程。花园在首屏即可见并可操作。
- 在 ./index.html 处只能有一个页面，不得有路由器或裸目录链接。不得添加营销区块、定价、SEO 区块、JSON-LD、Open Graph 相关工作、站点地图、日期或不受支持的访客计数。
- 所有字体、图标、脚本和样式都必须自托管。不得使用 CDN 脚本或 link 标签、Google Fonts、第三方 CSS 或远程素材。使用 Vite base './' 和相对素材路径。
- 生产构建必须压缩，不得有 source map，也不得将 src/ 复制到 dist/。npm run build 必须生成小于 20 MB 的静态 dist/，并在 1440×900 和 390×844 下零控制台错误。
- 在 CSS 和 WebGL 中都尊重 prefers-reduced-motion：不得有闲置摇曳、生长错峰或相机插值，同时保留即时的种植反馈和所有控件。文档隐藏时暂停渲染。
- 所有控件必须按规范支持触摸和键盘，具有可见焦点和可访问名称，并避免在轨道或捏合手势后意外种植。对话框要捕获并恢复焦点；颜色绝不能是唯一的选择状态指示。
- 绝不能暴露未解析的 [VARIABLE] 占位符。所有标签、帮助文本、植物颜色、页面标题和快照文件名都必须遵循当前变量值；不得在 src/content.ts 之外硬编码 Meadowmint 或默认花朵名称。
- 除 Quiet credit 中指定的单个可选 [CREDIT] 链接外，绝不在花园内提及 VibeFather。

---
Inspired by 3D Flower Garden Toy — https://www.kimi.com/showcases/3dmake
— Prompt by VibeFather · https://vibefather.ai/t/3d-flower-garden-toy · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
