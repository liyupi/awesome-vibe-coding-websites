> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 3D 爆炸视图产品展示

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为[BRAND]的[PRODUCT]（[MODEL_ID]）构建一个单页交互式产品展示页，面向[AUDIENCE]。默认是一个完全使用Three.js基础几何体和自定义BufferGeometry建模的原创单级斜齿轮减速箱。一个大型装配视图引导进入五步滚动驱动的爆炸视图；访客可以环绕观察、选择带标签的零件、将壳体设为透明、应用剖切，并播放六秒装配序列。当变量值变化时，保持布局、交互模型和视觉系统不变，但重新设计程序化装配、零件数据、工程说明文字、规格和应用，以适配新的[PRODUCT]。

- 受众：[AUDIENCE]，以及需要在评估规格之前理解机构原理的技术营销人员、产品设计师、教育工作者和采购人员。默认文案面向机械设计工程师，不假设其能使用CAD工具。
- 目标：让访客理解产品的构造、检查每个主要部件、比较其运行规格，并重放装配顺序。主要操作[PRIMARY_CTA]直接进入交互式装配；后续操作将一份干净的规格摘要复制到剪贴板，不向任何地方发送数据。
- 语调：精确、冷静、工程化、清晰易读。使用简短的陈述性文案和具体的示例工程数据。页面应感觉像精心艺术指导的技术展品，而不是科幻驾驶舱、游戏界面或通用SaaS落地页。

## 技术栈
- 框架：Vite 6 + React 19 + TypeScript
- 样式：原生 CSS（Vanilla CSS）
- 库：three（MIT）、lucide-react（ISC）、@fontsource/barlow-condensed（OFL）、@fontsource/inter（OFL）、@fontsource/ibm-plex-mono（OFL）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 Vite 搭配 React 和 TypeScript。在 vite.config.ts 中设置 base: './' 和 build.sourcemap: false；生产命令必须只向 dist/ 输出静态文件。不得替换为其他框架、渲染器、样式系统或状态库。
  - 在本地安装并导入 three、lucide-react 以及列出的三个 Fontsource 包。从 three/examples/jsm 导入 OrbitControls 和 RoomEnvironment；使用 PMREMGenerator 配合 RoomEnvironment 实现金属反射，而不是下载 HDRI。
  - 创建 src/content.ts 作为唯一来源，用于存放解析后的变量值、导航标签、标题、装配步骤、零件名称、爆炸偏移、零件规格、工程说明、应用场景和页脚文案。在其中包含默认的 [BRAND]、[PRODUCT]、[AUDIENCE]、[PRIMARY_CTA] 和 [MODEL_ID] 值，当这些值变化时重写所有产品特定内容，并且绝不在渲染后的网站中留下可见的方括号变量标记。
  - 为几何体、材质、相机、标签、裁剪、选择和播放创建独立的场景模块。使用原创的 box、cylinder、torus、shaft、bearing、seal 和自定义斜齿 BufferGeometry 零件构建默认齿轮箱；使用风格化的类渐开线齿形，小齿轮 18 齿、大齿轮 63 齿。不得加载模型或复用商业齿轮箱设计。
  - 对机加工钢和铝使用 MeshStandardMaterial，使用中性程序化环境、一盏宽幅主方向光、一盏较冷的轮廓光，以及一个由代码生成的柔和接触阴影平面。启用 renderer.localClippingEnabled、抗锯齿和 alpha；桌面端像素比上限为 1.75，移动端为 1.4。当场景位于视口之外时暂停 requestAnimationFrame 工作。
  - 在 React 中保持一份共享的装配状态：scrollProgress、selectedPart、housingTransparent、sectionCut、playbackProgress、playbackStatus 和 controlMode。从同一份关键帧数据推导每个网格位置和标签，使滚动、选择和播放不会出现不一致。使用直接插值，而不是物理引擎或额外的动画依赖。
  - 为 hero 和固定装配舞台创建可复用的 GearboxScene 组件。共享几何体和材质定义，仅渲染可见实例，并提供静态内联 SVG 技术图纸作为无 WebGL 回退方案，零件列表和规格仍可使用。
  - 仅对 Rotate3D、Layers3、Slice、Play、Pause、RotateCcw、X、ChevronRight、Copy、Check、Menu 和 ArrowDown 使用 Lucide 图标。为每个图标按钮提供可访问的文本标签，并使用最小 44px 的触摸目标。
  - 将响应式规则和关键帧集中在 src/styles.css 中。支持 1440×900 和 390×844，无水平溢出或控制台错误，包含键盘焦点样式和规格表的打印样式表，并通过移除空闲运动和自动播放同时保留即时状态变化和手动控制来实现 prefers-reduced-motion。

## 变量
- [BRAND] — 品牌（默认：“Korven Industrial”）。虚构的制造商或产品工作室名称，用于页眉、主视觉区、规格摘要和页脚。
- [PRODUCT] — 产品（默认：“Helical Gearbox”）。一种可由代码建模并拆分为 6–10 个有意义组件的机械装配体。
- [AUDIENCE] — 受众（默认：“mechanical design engineers”）。小写描述性受众短语，在主视觉文案中紧跟在 for 之后自然衔接。
- [PRIMARY_CTA] — 主要操作（默认：“Explore the assembly”）。短按钮标签，点击后滚动至装配体区块，并始终适配所选产品。
- [MODEL_ID] — 型号标识符（默认：“HX-42”）。简短的虚构字母数字标识符，用于技术标签和复制的规格摘要中。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/3d-exploded-view-product-showcase（默认：是；删除此行即可移除）

Pages & Sections 下的文案按默认值编写。如果你的取值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/3d-exploded-view-product-showcase?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
