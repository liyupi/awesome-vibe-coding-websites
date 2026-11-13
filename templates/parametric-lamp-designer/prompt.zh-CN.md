> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 参数化灯具设计器（Parametric Lamp Designer）

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个原创的单页参数化灯具工作室，在实时 Three.js 工作区中展示 [PRODUCT_NAME]。默认品牌为 Loom & Ember，默认产品为 Strata Lattice Lamp。该页面是一个可用的设计工具，而非营销落地页：一盏富有光泽的 3D 灯具占据主视口，精确的控制项位于紧凑的侧栏中。四个滑块可即时重新生成格栅，三个预设提供起点，Export spec 可在本地生成一张精美的 PNG 概念图。

- 受众：为 [AUDIENCE] 而设计，默认为独立照明设计师和动手实践的制作爱好者。界面应对充满好奇的首次访客保持亲和，同时为经验丰富的设计师提供精确数值、可预测的控制项和有用的导出摘要。
- 目标：让访客塑造一盏原创的格栅台灯，从任意角度查看它，比较预设轮廓，开启或关闭温暖的内部灯光，并下载一张忠实呈现当前设置的 PNG 规格图。每个控制项都必须完全在客户端运行，无需登录或网络依赖。
- 基调：一个安静、精确的设计工坊：深植物绿、温暖桃色照明、清晰的测量、克制的动效，以及简洁的功能性文案。灯具具有雕塑感和当代感，不包含建筑、文化或品牌特定的母题。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：原生 CSS
- 库：three（MIT）、lucide-react（ISC）、@fontsource/space-grotesk（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 Vite 配置为 base './'，并将 build.sourcemap 设为 false；构建脚本运行 tsc && vite build，并且只向 dist/ 输出静态生产文件。
  - 在 React 的 LampViewer 组件中直接使用 Three.js，并从 three/examples/jsm/controls/OrbitControls.js 导入 OrbitControls；不要添加第二个 3D 框架。
  - 通过列出的 Fontsource 包自托管 Space Grotesk 和 IBM Plex Mono，仅按需导入 400、500、600 和 700 字重。
  - 将所有变量值、界面文案、预设描述、无障碍标签和导出表文案保留在 src/content.ts 中。当变量值变化时，自然地重写产品特定文案；绝不要留下默认品牌或产品文本。
  - 将职责分离到 src/App.tsx（用于状态和布局）、src/components/LampViewer.tsx（用于渲染）、src/lib/lampGeometry.ts（用于参数化几何）、src/lib/specSheet.ts（用于 PNG 生成）和 src/styles.css（用于视觉系统）。
  - 创建 ASSETS.md，将 Space Grotesk 和 IBM Plex Mono 列为 OFL 字体，Lucide 列为 ISC，Three.js 列为 MIT；说明所有灯具和环境视觉均在代码中生成，且不使用任何栅格图像资源。

## 变量
- [BRAND] — 工作室品牌（默认：“Loom & Ember”）。虚构的工作室名称，用于页眉、规格表、页脚和下载文件名。
- [PRODUCT_NAME] — 灯具产品名称（默认：“Strata Lattice Lamp”）。当前灯具系列的名称，用于项目标题、画布描述和导出。
- [AUDIENCE] — 目标受众（默认：“independent lighting designers and hands-on makers”）。小写短语，适合放在 'A concept workspace for' 之后。
- [TAGLINE] — 工作区标语（默认：“Shape light, one line at a time.”）。显示在控制面板标题下方的一句简短句子。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/parametric-lamp-designer（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 画布（Canvas）`#111714` — 全页面和 WebGL 背景
- 面板（Panel）`#18211C` — 控制栏和头部表面
- 凸起（Raised）`#222D26` — 预设卡片、输入轨道和浮动视口工具
- 边框（Border）`#354238` — 一像素分隔线和控件轮廓
- 文本（Text）`#F1F4EE` — 主标签和数值
- 弱化（Muted）`#9DABA1` — 次要文案和测量单位
- 辉光（Glow）`#FFB080` — 暖灯光、活动滑块填充和主导出操作
- 鼠尾草绿（Sage）`#B9D5BE` — 焦点环、活动预设强调和成功反馈
- 纸张（Sheet）`#EEF2ED` — 导出的 PNG 规格表的浅鼠尾草绿背景

### 排版
- 界面、品牌和规格标题：Space Grotesk（OFL），字重 400/500/600/700
- 滑块数值、尺寸、状态标签和规格数据：IBM Plex Mono（OFL），字重 400/500

### 布局与动效
- 间距：使用 4px 基准单位，控件间距 8px，卡片内边距 16px，栏区段间距 20px，主要分隔 24px。桌面端头部高 68px，左侧控制栏宽 320px，视口占据所有剩余宽度。在 1440×900 下保持完整主工作区可见，无需页面滚动。
- 圆角：视口和预设卡片使用 16px，按钮和参数组使用 10px，小数值芯片使用 6px，轨道和开关使用全圆角。避免过度使用胶囊形容器。
- 动效：每次滑块输入后，在下一动画帧重建变更的灯具几何体；数值和活动状态立即更新，无 Apply 按钮。
- 动效：允许动效时使用 OrbitControls，阻尼系数 0.07，无自动旋转，无空闲相机移动，无装饰性页面过渡。
- 动效：预设选择在一帧内改变几何体，并在 160ms 内交叉淡入活动卡片边框和暖辉光；相机移动仅限于显式的 Front、Top 和 Reset 视图操作。
- 动效：滑块拇指和按钮使用 120ms 悬停和焦点过渡。在 prefers-reduced-motion 下，移除阻尼和所有非必要过渡，同时保留即时功能更新。
- 图像：主视觉和唯一主要视觉是一个丰富的、代码生成的 WebGL 工作室场景：一个原创的开放式格架灯具，带有交叉肋条、水平轮廓环、低矮圆形底座、半透明内部漫射器、哑光地板上的暖光，以及微弱的技术网格。不使用照片、库存渲染、下载模型、HDRI、标志、人物或图像占位符。在移动端，实时视口仍是第一个大视觉，且永远不会被静态截图替代。

## 页面与区块
### 实时参数化灯具工作区（`index.html`）
1. **应用页头与项目标识** — 一条纤细的顶栏展示一个用内联 SVG 绘制的小型原创三线格栅图标、[BRAND]（默认为 Loom & Ember），以及一个分隔符，后接 [PRODUCT_NAME]（默认为 Strata Lattice Lamp）。居中放置一个低调的 PROJECT 01 标签。右侧操作是一个幽灵样式 Reset 按钮和一个桃色 Download 图标按钮，标签为 Export spec。Reset 会恢复 Ripple 预设、全部四个默认参数、灯光开启状态以及初始相机；它不会重新加载页面。
   布局：使用 68px 全宽页头，水平内边距 20px，品牌图标 16px，操作间距 12px。在所有宽度下都保持 Export spec 可见。低于 760px 时，使用 56px 粘性页头，隐藏 PROJECT 01 和产品后缀，将 Reset 缩短为可访问的图标按钮，并在主操作上保留文本 Export。
   动效：按钮在 120ms 内变亮。成功重置后，在页脚显示状态消息 Ripple restored，并显示一个持续 1.8 秒的 aria-live toast。
2. **参数控制栏** — 以眉题 LAMP BUILDER、标题 Shape the light 和 [TAGLINE]（默认为 Shape light, one line at a time.）开头。四个带标签的范围控件分别是 Height、Rings、Lattice density 和 Opening shape。Height 范围为 180–420 mm，步长 5，默认 280 mm。Rings 范围为 4–16，步长 1，默认 9。Lattice density 范围为每个方向 12–48 条肋，步长 2，默认 28；其辅助文本在默认值下显示 56 crossing ribs。Opening shape 范围为 0–100，步长 1，默认 20，左端为 Circle，右端为 Soft square；在数值旁显示：低于 20 显示 Circle，20–69 显示 Rounded，70 及以上显示 Soft square。每个输入在 input 时更新模型，每个标签都有一个关联的等宽输出值。
   布局：将此栏放在视口左侧，内边距 20px。每个参数占据一个 80px 分组：标签和值在同一行，下方是 4px 自定义范围轨道，以及小的端点或辅助文本。使用原生键盘可访问的范围输入，视觉滑块为 24px，触摸目标至少 44px。在移动端宽度下，将整个栏按文档流移到预览下方，使用 16px 内边距，并保持全部四个控件可见，而不是将它们隐藏在折叠面板中。
   动效：用 Glow peach 填充滑块左侧的轨道。使用 requestAnimationFrame 调度几何体重建，以便快速拖动事件合并，并在添加新网格组之前释放被替换的几何体。
3. **实时 3D 灯具工作室** — 从几何体渲染 [PRODUCT_NAME]，绝不使用模型文件。使用 100mm 作为一个场景单位。在 y=0.09 处设置一个半径为 0.94、高度为 0.18 的低矮底座。对于灯罩，令 t 从底部的 0 到其上方 Height/100 处的 1，并定义半径 r(t)=0.72+0.18*sin(π*t)-0.10*t。从 t=0 到 t=1 均匀构建所需数量的闭合水平环，管径 0.018 单位。构建两个交叉的对角肋族，每个方向按 Lattice density 弯曲（共 2N 条），使用 θ=2π*i/N±0.34*t 和 0.012 单位管径。将每条圆形轮廓通过指数 n=2+2*(Opening shape/100) 的超椭圆映射：x=r*sign(cosθ)*abs(cosθ)^(2/n)，z=r*sign(sinθ)*abs(sinθ)^(2/n)。对闭合环和肋都使用 CatmullRomCurve3 和 TubeGeometry，使开口控件真正改变网格。结果是一个开放的、轻微外扩的格栅表面，而不是同心墙或建筑。添加一个半径为 0.30 的内磨砂圆柱，达到灯罩高度的 70%。对肋和环使用 MeshStandardMaterial，颜色 #DDE7DF，粗糙度 0.58，金属度 0.05。漫射器使用颜色 #F6D6B8，自发光 #FF9C62，点亮时 emissiveIntensity 为 1.4，不透明度 0.48，depthWrite 为 false。在内部添加一个暖色 PointLight、一个柔和的方向主光、半球补光、一个接收阴影的哑光地板、细微网格线，以及与 Canvas 匹配的雾。
   布局：视口填充剩余工作区，外边距 16px，圆角 16px。设置相机 FOV 34，near 0.1，far 100，初始位置 (4.2,3.1,5.2)，目标为灯罩中点。像素比上限为 2，使用 sRGB 输出、ACES 电影色调映射、曝光 1.1、抗锯齿和柔和阴影。左上角叠加文本为 LIVE PREVIEW 和 Warm 2700 K。右上角控件为 Light on/off、Front、Top 和 Reset view。左下角辅助文本为 Drag to orbit · Scroll to zoom；右下角显示计算出的最大直径和总肋数。在移动端，将视口放在栏之前，高度 390px，紧凑控件可换行且不遮挡灯具。
   动效：OrbitControls 启用旋转和缩放，禁用平移，距离限制为 3–10，并防止移动到地板以下。Front 和 Top 按钮设置确定性相机；Reset view 恢复初始构图。更改高度时仅重新居中轨道目标，并保留访问者选择的角度。灯光开关在 1.4 和 0.08 之间切换点光源和漫射器自发光强度，而不移动模型。
4. **预设样式库** — 在参数下方，将组标记为 QUICK START，并添加一行 Three silhouettes. Yours to adjust.。Ripple 默认为 Height 280、Rings 9、Density 28、Opening 20，描述为 Balanced and open。Halo 使用 Height 220、Rings 12、Density 36、Opening 0，描述为 Compact and dense。Weave 使用 Height 340、Rings 7、Density 20、Opening 75，描述为 Tall and airy。选择预设会更新每个滑块、网格、活动卡片状态和导出数据。手动更改滑块会保留上一个预设名称作为起点，但在其标签后追加 Custom，直到选择另一个预设。
   布局：在 320px 栏中使用一列三张紧凑卡片。每张卡片有一个由相同轮廓数学生成的小型原创线图标剪影，左侧为名称和描述，下方为四个紧凑参数值。活动卡片使用 Sage 边框和一个小勾选图标；非活动卡片使用 Raised green 和 Border 轮廓。在移动端，使用三列网格，卡片至少 104px 宽，在 390px 时仅隐藏次要描述，同时保持名称和值可读。
   动效：活动卡片的边框和背景在 160ms 内交叉淡入淡出。几何体立即变化，没有轮播、自动循环或动画相机飞行。
5. **PNG 规格导出** — Export spec 完全在离屏 2D canvas 中生成 1600×1000 PNG。使用 Sheet 背景、带有 [BRAND] 和 [PRODUCT_NAME] 的深色墨水页头，以及区块标题 Concept specification。同步渲染 Three.js 场景，将当前视图复制到左侧 960×700 的图像区域，并在右侧放置一个干净的数据列，包含 Height、Estimated maximum diameter、Horizontal rings、Ribs per direction、Total crossing ribs、Opening shape、Light temperature 2700 K，以及所选预设或 Custom 标签。页脚文案为 A concept workspace for [AUDIENCE]. 和 Concept summary only — not a fabrication-ready engineering drawing.。通过将当前 [BRAND] 和 [PRODUCT_NAME] 转换为 slug，然后追加 -spec.png 来生成文件名。触发本地下载并播报 Spec sheet exported.。不提供 SVG、STL、PDF、账户、上传或服务器导出。
   布局：导出的图纸使用 64px 外边距、96px 页头、预览和数据之间 32px 间距、14px 等宽标签、22px 值，以及细鼠尾草色分隔线。精确匹配当前模型和参数。在应用中，导出按钮在绘制时进入短暂的 Preparing… 禁用状态，然后返回 Export spec；失败时显示可读的内联错误，而不是抛出未捕获异常。
   动效：没有模态框或动画进度序列。下载开始后使用 1.8 秒的 aria-live 成功 toast。
6. **工作区状态页脚** — 应用外壳内一个克制的页脚显示 Geometry ready 和一个小型 Sage 状态点、当前网格组数量、A concept workspace for [AUDIENCE].，以及可选的 [CREDIT] 链接。屏幕阅读器 canvas 标签标识 [PRODUCT_NAME]，并概括当前高度、环数、密度和开口。所有仅图标按钮都有可访问名称，焦点指示器使用 Sage，除自由指针轨道外，每项操作都可通过键盘使用，而自由指针轨道有确定性的 Front、Top 和 Reset view 替代方案。
   布局：使用 32px 桌面状态行，水平内边距 20px，小型等宽文本，以及灵活间距。在移动端，将受众行和状态堆叠为控制栏下方的两个短行，不遮挡内容。保持功能文本至少 4.5:1 对比度，并在 390×844 下零水平溢出。
   动效：只有状态点在忙碌和就绪状态之间变化；没有脉冲、闪烁或永久动画。

## 资产（Assets）
- 图像（image）：完全使用 Three.js 和原创的内联 SVG 或 Canvas 代码生成灯具（lamp）、基座（plinth）、漫射器（diffuser）、地面（floor）、网格（grid）、阴影（shadows）、预设剪影（preset silhouettes）和品牌字形（brand glyph）。不要下载或创建栅格图像资产；首屏视觉锚点是可交互的 WebGL 视口（viewport）。
- 图标（icon）：使用本地打包的 lucide-react 图标，包括 Download、RotateCcw、Sun、SunDim、Check、Box 和 SlidersHorizontal。不要使用品牌标志、第三方图标图像或可识别的产品标识。
- 字体（font）：使用 @fontsource/space-grotesk 自托管 Space Grotesk 字重 400、500、600 和 700；在 ASSETS.md 中记录包和 OFL 许可证。
- 字体（font）：使用 @fontsource/ibm-plex-mono 自托管 IBM Plex Mono 字重 400 和 500；在 ASSETS.md 中记录包和 OFL 许可证。

## 禁止事项
- 不要复制参考提示词、措辞、代码、图像、模型几何结构、纹理、界面或任何有辨识度的建筑设计。
- 不要使用土楼或其他建筑轮廓、同心建筑墙体、拱形门洞、锥形屋顶、文化装饰或灵感来源中的装饰图案。
- 不要将参考中的骨白色、炭黑色和琥珀色调作为一套配色使用；应保留指定的植物绿（botanical green）、鼠尾草绿（sage）和蜜桃色（peach）体系。
- 不要在生成的网站内提及或展示 Kimi、Moonshot AI 或任何其他外部品牌，也不要创建与其相似的标志或图标。
- 不要使用真实人物、可识别的产品、图库照片、下载的 3D 模型、HDRI、占位图服务或外部托管的资源。
- 不要用静态渲染、视频、预设动画或固定模型替代参数化网格；四个滑块都必须以可见且数学上可验证的方式改变当前灯具。
- 不要添加后端、账户系统、数据库、API 路由、远程表单、分析、第三方 API、外部字体请求、CDN 脚本或 CDN 样式表。
- 不要声称该概念可直接用于制造，也不要添加 STL、3D 打印、制造、定价、商业或认证功能。
- 不要在 src/content.ts 之外硬编码默认品牌或产品文案，并且当变量变化时，不要使 Loom & Ember 或 Strata Lattice Lamp 仍然可见。
- 不要显示日期、成员数量、超出计算模型尺寸的虚假测量值，或关于云端保存项目的声明。
- 不要引入 SEO 元数据块、结构化数据、站点地图、营销区块或额外页面；只使用包含 [BRAND] 和 [PRODUCT_NAME] 的纯文档标题，以及一个简单的本地 favicon。
- 不要生成 source map、将 src/ 复制到 dist/、超过 20 MB、使用裸目录链接或要求服务器重写；唯一的页面是 index.html，所有生产资源都使用相对路径。
- 不要允许持续自动旋转、过度的辉光泛光、画布上不可读的文字、移动端水平溢出，或忽略 prefers-reduced-motion 的控件。
- 不要泄漏 GPU 资源：释放被替换的几何体和材质，在卸载时取消动画帧并移除观察器，并避免未捕获的 WebGL 或导出错误。

---
Inspired by Parametric Lamp Designer — https://www.kimi.com/showcases/3dmake
— Prompt by VibeFather · https://vibefather.ai/t/parametric-lamp-designer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
