> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 3D 动物细胞讲解页

完全按照下面的描述构建这个网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个交互式生物学讲解页面，标题为“[TITLE]”（[COURSE_TAG]），核心是一个完全用 Three.js 代码构建、不依赖任何外部 3D 模型文件的剖面 3D 动物细胞。风格仿照暖奶油色纸张（#FAF4E8）上的孔版印刷课堂标本图，配有自信的深墨色轮廓线（#1E1B3A）以及带颗粒感的珊瑚色（#FF7B6B）、薄荷绿（#6FD3B8）和黄油色（#FFD66B）填充；首屏立即展示完整的剖面细胞。读者可以拖动环绕观察，点击细胞器索引，或滚动浏览 10 个细胞器（带核孔与染色质的细胞核、粗面内质网、滑面内质网、负责运送囊泡的高尔基体堆叠、带嵴的线粒体、溶酶体、核糖体、中心粒、细胞骨架丝，以及带通道蛋白的质膜）。每个停留点都会显示一段通俗易懂的说明文字、一个按比例缩放的“它有多大？”比例尺，以及 3D 场景内的实时微动画。页面还包含一个从核 DNA 到膜分泌的“跟随一个蛋白质”动画路径模式、一个 3D 标签开关、一条明确的“简化教学模型”准确性说明，以及结尾一个交互式 5 题测验。

- 受众：生物学学生、科学教育工作者、好奇的读者，以及探索细胞解剖学的交互式新闻爱好者。
- 目标：通过在第一帧就呈现明亮、有触感的 3D 剖面模型，配合通俗英语叙事和实时细胞器运动，让细胞生物学变得直观且充满乐趣。
- 语调：温暖、好奇、课堂般清晰，并保持科学上的诚实——为直觉理解而简化，并明确标注这一点。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：three（MIT）、@types/three（MIT）、lucide-react（ISC）、@fontsource/fraunces（OFL-1.1）、@fontsource/plus-jakarta-sans（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/fraunces（600、700）、@fontsource/plus-jakarta-sans（400、500、600、700）和 @fontsource/jetbrains-mono（400、500）。
  - 在 src/three/CellScene.tsx 中使用 Three.js 程序化构建完整的剖切 3D 动物细胞（preserveDrawingBuffer: true，暖纸色 #FAF4E8 清除色，BackSide 墨线轮廓外壳和赛璐璐着色/丝网印刷颗粒 CanvasTexture 材质，同步首帧渲染），包含全部 10 个不同的细胞器，具备平滑指针轨道、相机飞向目标预设、实时微动画（高尔基体囊泡出芽、线粒体 ATP 火花脉动、蛋白质折叠珠、膜通道门控），以及一条发光的 'Follow a Protein' 动画货物轨迹。
  - 当 Labels 开关激活时，将 3D 细胞器坐标清晰地投影到屏幕空间标签标注。
  - 将所有文案、细胞器说明、比例指标、蛋白质旅程步骤和测验问题保留在 src/content.ts 中。

## 变量
- [BRAND] — 发布方名称（默认：“Cellfolio Press”）。虚构的教育工作室或出版品牌名称
- [TITLE] — 解说标题（默认：“Inside the Animal Cell”）。3D 生物解说页面的主视觉标题
- [SUBTITLE] — 主视觉副标题（默认：“A cutaway risograph specimen you can orbit, zoom, and animate in real time.”）。标题下方的简短介绍句
- [COURSE_TAG] — 图集代码（默认：“BIO-101 · Cutaway Specimen Atlas”）。页眉中的小型等宽字体目录标签
- [CREDIT] — 在页脚保留一个指向 https://vibefather.ai/t/3d-animal-cell-explainer 的小型“Template by VibeFather”链接（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 暖纸色（Warm Paper）`#FAF4E8` — 主孔版印刷纸张背景与 3D 舞台画布
- 深墨色（Deep Ink）`#1E1B3A` — 主排版文字、清晰的 3D 细胞墨线轮廓与卡片边框
- 孔版珊瑚色（Riso Coral）`#FF7B6B` — 细胞核、线粒体点缀、激活胶囊标签与蛋白质通路轨迹
- 孔版薄荷色（Riso Mint）`#6FD3B8` — 质膜剖面外壳、高尔基体高亮与测验正确状态
- 孔版黄油色（Riso Butter）`#FFD66B` — ATP 能量火花、溶酶体、比例尺标注与交互标签
- 奶油卡片色（Cream Card）`#FFFDF7` — 干净悬浮的阅读卡片与细胞器检视面板

### 排版
- 编辑式展示字体与细胞器标题：Fraunces（OFL），字重 600/700
- 通俗语言说明文字与 UI：Plus Jakarta Sans（OFL），字重 400/500/600/700
- 微米比例尺与图集代码：JetBrains Mono（OFL），字重 400/500

### 布局与动效
- 间距：粘性 60px 纸墨风格页头，1280px 最大宽度的分栏工作区——桌面端粘性 3D 剖面细胞位于可滚动的细胞器野外指南旁，390px 移动端则整齐堆叠在顶部。
- 圆角：孔版印刷标本卡片使用 14px 圆角，配 2px 清晰墨色边框与偏移硬墨阴影；细胞器胶囊标签与模式切换使用全胶囊按钮。
- 动效：点击索引中 10 个细胞器中的任意一个，或滚动经过其野外笔记卡片时，相机平滑飞入并带阻尼。
- 动效：持续的细胞器微动画：囊泡从高尔基体反面出芽，金色 ATP 能量火花环绕线粒体嵴，核糖体在粗面内质网上串起新生肽链，通道蛋白沿膜脉动。
- 动效：跟随蛋白质引导模式沿 3D 样条平滑动画演示一颗发光的珊瑚金蛋白质货物珠，从核染色质 → 粗面内质网 → 运输囊泡 → 高尔基体堆叠 → 分泌囊泡 → 质膜出口。
- 动效：在 prefers-reduced-motion 下，冻结环境细胞器运动，相机对焦干净利落地切换，不带扫掠惯性。
- 图像：100% 程序化 Three.js 剖面 3D 动物细胞，使用孔版颗粒 CanvasTexture 填充与清晰的深墨轮廓——零外部 3D 模型或位图。

## 页面与区块
### [TITLE] · [BRAND] 3D 生物学讲解器（`#/cell`）
1. **页眉与交互式剖面 3D 动物细胞主视觉区** — 纸墨风格顶栏，包含 [BRAND] 标识、[COURSE_TAG]、快捷跳转（3D Atlas、Organelle Guide、Protein Path、Quiz），以及实时舞台开关（'Labels On/Off'、'Follow a Protein'、'Reset View'）。主视觉区介绍 [TITLE] 与 [SUBTITLE]，并配有一个明亮、可立即交互的剖面 3D 动物细胞模型，渲染在温暖的 #FAF4E8 纸张底色上，带有深色 #1E1B3A 墨线轮廓，展示切开的球形膜、带核孔和染色质环的薰衣草珊瑚色细胞核、折叠的粗面与滑面 ER 带状结构、堆叠的薄荷色高尔基体扁囊、带折叠嵴的珊瑚黄油色线粒体、黄色溶酶体、点状核糖体、一对中心粒筒、细胞骨架丝以及膜通道蛋白。包含一条清晰的 'Simplified educational model — proportions are enlarged for clarity' 说明。
   布局：桌面端：在 1280px 框架内，左侧为粘性 58% 3D 视口 + 右侧为 42% 可滚动的细胞器索引与野外指南。移动端（390px）：顶部为 360px 交互式 3D 细胞舞台，随后是水平细胞器胶囊条和野外卡片。
   动效：在 3D 舞台任意位置拖动即可环绕；选择任意细胞器即可让相机平滑飞入。
2. **10 细胞器野外指南与比例尺** — 十张交互式细胞器卡片（01 Whole Cell Overview、02 Nucleus & Nuclear Pores、03 Rough Endoplasmic Reticulum、04 Smooth Endoplasmic Reticulum、05 Golgi Apparatus、06 Mitochondria & Cristae、07 Lysosomes、08 Ribosomes、09 Centrioles、10 Cytoskeleton & Plasma Membrane Channels）。每张卡片包含通俗语言说明、3D 场景中可观看的微动画，以及一个可视化的 'How big is it?' 对数比例尺，将该细胞器以微米/纳米为单位与 20 µm 的整个动物细胞进行对比。
   布局：右侧可滚动的编辑式堆叠，活动高亮与 3D 相机同步；移动端为单列卡片。
   动效：点击卡片或滚动到卡片时，3D 相机直接飞向该细胞器并高亮其标注。
3. **跟随蛋白质交互式通路横幅** — 专用交互式 5 步故事面板（'Follow a Protein from DNA to Secretion'）：1. DNA Transcription in Nucleus → 2. Ribosome Folding on Rough ER → 3. COPII Vesicle Shuttle → 4. Golgi Sugar Tagging & Sorting → 5. Exocytosis at Plasma Membrane。点击 'Play Pathway' 或按 1–5 步进，会让发光蛋白质粒子沿真实生物路线直接穿过 3D 细胞进行动画演示。
   布局：简洁的水平 5 步步进条，带 Play/Pause 切换和活动说明栏。
   动效：发光的珊瑚黄油色货物球体沿 3D 样条移动，相机跟随。
4. **快速检查生物学测验与页脚** — 交互式 5 题多项选择理解检查（例如 ATP production cristae、vesicle packaging in Golgi、rough vs smooth ER、nuclear pores、membrane channels），带即时通俗语言解释、实时分数统计和 Reset Quiz 按钮。微妙的 risograph 页脚，包含简化模型免责声明和可选的 [CREDIT] 链接。
   布局：在 1280px 容器内居中 2 列测验卡片网格；移动端为单列。
   动效：选择答案时呈现清晰、有触感的墨影按压反馈。

## 资源
- 图标：安装 lucide-react（ISC），用于 3D 视图控制、标签切换、蛋白质回放和测验反馈。
- 字体：安装 @fontsource/fraunces、@fontsource/plus-jakarta-sans 和 @fontsource/jetbrains-mono（OFL-1.1），并在 src/main.tsx 中直接导入。
- 图像：在 src/three/CellScene.tsx 内用 Three.js 程序化生成整个剖面 3D 动物细胞、risograph 纸张颗粒纹理以及全部 10 个细胞器；不使用任何外部 3D 模型或照片。

## 不要做
- 不要从 Kevin Ngo 的爆款 3D 细胞网站或任何教科书出版商处复制代码、着色器、布局或文案。
- 不要使用外部 .glb/.gltf 模型文件、CDN 脚本/字体或后端 API。
- 渲染出的 UI 上任何位置都不得出现日历日期或四位年份。
- 不要出现深色/空白首帧——在第一帧就同步渲染出完整的明亮 risograph 剖面细胞，并设置 preserveDrawingBuffer: true。
- 不要在滚动前用 clip-path 隐藏区块。
- 生产构建中不要包含 source maps（build.sourcemap: false），并将 dist/ 保持在 20 MB 以下。
- 在 1440x900 桌面端或 390x844 移动端不得出现控制台错误或水平溢出。

---
Inspired by Interactive 3D Animal Cell Risograph Model by @kevin_t_ngo — https://autoshowcaser.com/
— Prompt by VibeFather · https://vibefather.ai/t/3d-animal-cell-explainer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
