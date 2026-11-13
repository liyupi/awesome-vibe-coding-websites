> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 喷气发动机交互式讲解页

请完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 的 [ENGINE]（[MODEL_ID]）构建一个单页交互式工程讲解页面，面向 [AUDIENCE]。默认是一个完全由 Three.js 基础几何体和自定义叶片几何体建模的原创高涵道比涡扇发动机。一台大型可运转发动机引出五个由滚动驱动的剖切状态，涵盖风扇与涵道、压气机、燃烧室，以及带排气段的涡轮。一个同步油门改变两个同轴转子组和定向气流粒子。当变量值变化时，重新设计程序化发动机架构、级数据、说明文字、引导和测验，以适配新的 [ENGINE]，同时保留布局、交互模型和视觉系统。

- 受众：[AUDIENCE]，以及教育工作者、博物馆讲解员、技术创作者和航空爱好者，他们需要清晰的视觉解释，而不需要 CAD 软件或先前的热力学知识。默认文案欢迎工程专业学生，并用通俗语言解释专业术语。
- 目标：帮助访客识别发动机的主要级段，追踪涵道和核心气流，将每台涡轮与其驱动的部件联系起来，并检验他们的理解。主要操作 [PRIMARY_CTA] 进入滚动导览。常驻的油门和运动暂停控件使因果关系可被检视，而不是被动动画。
- 语气：精确、好奇、平静且具有教育性。使用简短的陈述式解释、具体的机械关系，以及对简化示例数据的诚实标注。页面应感觉像精心艺术指导的工程展览，而不是飞机驾驶舱、军事界面、游戏 HUD 或通用技术落地页。

## 技术栈
- 框架：Vite 6 + React 19 + TypeScript
- 样式：原生 CSS（Vanilla CSS）
- 库：three（MIT）、lucide-react（ISC）、@fontsource/space-grotesk（OFL）、@fontsource/inter（OFL）、@fontsource/ibm-plex-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 Vite 搭配 React 和 TypeScript。在 vite.config.ts 中设置 base: './' 和 build.sourcemap: false；生产命令必须只向 dist/ 输出静态文件。不要替换为其他框架、渲染器、样式系统、物理引擎或状态库。
  - 在本地安装并导入 three、lucide-react 以及列出的三个 Fontsource 包。从 three/examples/jsm 导入 OrbitControls 和 RoomEnvironment；使用 PMREMGenerator 搭配 RoomEnvironment 实现金属反射，而不是下载 HDRI。
  - 创建 src/content.ts，作为已解析变量值、导航标签、主视觉文案、导览状态、几何参数、级记录、气流说明、测验问题和页脚文案的唯一来源。在其中包含默认的 [BRAND]、[ENGINE]、[AUDIENCE]、[PRIMARY_CTA] 和 [MODEL_ID] 值，当这些值变化时重写所有引擎特定内容，并且绝不在渲染后的网站中留下可见的方括号变量标记。
  - 沿 X 轴构建默认引擎，由原始车削短舱和机匣环带、排气锥、两根同轴轴、22 片宽风扇叶片、三排低压和六排高压压气机转子排（其间带有静子排）、带 12 个小型燃油喷嘴标记的环形燃烧室、一排高压涡轮和三排低压涡轮组成。对重复叶片使用自定义锥形、略微扭转的 BufferGeometry 叶片和 InstancedMesh。保持模型可识别为涡扇发动机，但不要复制任何真实发动机或 CAD 设计。
  - 对钛、钢和深色机匣使用 MeshStandardMaterial，使用中性程序化环境、一盏宽主光、一盏较冷轮廓光，以及代码生成的接触阴影平面。启用抗锯齿和 alpha；桌面端像素比上限为 1.6，移动端为 1.35。使用一个 Points 几何体承载 160 个桌面端或 80 个移动端气流粒子，并具有确定性种子路径，当场景在屏幕外或文档隐藏时暂停 requestAnimationFrame 工作。
  - 保持一个共享的 React 引擎状态：throttle、motionPaused、showCoreFlow、showBypassFlow、scrollProgress、activeStage、selectedStage 和 controlMode。在 throttle 为 0 时，所有转子和粒子停止；在 throttle 为 1 时，N1 风扇、低压压气机和低压涡轮以每秒 4.8 弧度旋转，而 N2 高压压气机和涡轮以每秒 12.5 弧度旋转。在这些端点之间线性插值，并将 2.6:1 的关系标注为视觉教学比例，而非实测 RPM。从同一 throttle 值驱动粒子速度。
  - 为主视觉、导览和实验室创建一个可复用的 EngineScene 组件，共享几何定义，并且只渲染可见场景。提供一个原创的内联 SVG 纵向剖视图作为无 WebGL 回退方案，包括进气道、风扇、压气机、燃烧室、涡轮、外涵道、排气和级标签；当 WebGL 不可用时，所有控件仍必须更新 HTML 读数。
  - 仅对 ArrowDown、Play、Pause、RotateCcw、Gauge、Wind、Layers3、Check、X、ChevronRight 和 Menu 使用 Lucide 图标。为每个图标按钮提供可访问的文本标签和至少 44px 的触摸目标。
  - 在 src/styles.css 中集中响应式规则和关键帧。支持 1440×900 和 390×844，无水平溢出或控制台错误，包含可见的键盘焦点，并实现 prefers-reduced-motion：停止连续转子和粒子运动，移除相机缓动和入场动画，并保留即时剖视状态、手动控制、测验反馈和所有说明内容。

## 变量
- [BRAND] — 品牌（默认：“Aerofield Lab”）。虚构的教育工作室或工程实验室名称，用于页眉、课程文案和页脚。
- [ENGINE] — 发动机主题（默认：“High-Bypass Turbofan”）。一种吸气式发动机，可通过代码建模，并划分为四个有意义的数学阶段。
- [AUDIENCE] — 受众（默认：“engineering students”）。小写描述性受众短语，在首屏文案中紧跟在 for 之后自然衔接。
- [PRIMARY_CTA] — 主要操作（默认：“Explore the engine”）。短按钮标签，点击后滚动至发动机导览，且适用于所选主题。
- [MODEL_ID] — 模型标识符（默认：“AF-09”）。用于技术标签和课程回顾的简短虚构字母数字标识符，绝非真实发动机型号。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接至 https://vibefather.ai/t/jet-engine-interactive-explainer（默认：是；删除此行即可移除）

页面与区块下的文案按默认值编写。若你的取值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/jet-engine-interactive-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
