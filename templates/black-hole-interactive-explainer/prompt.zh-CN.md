> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 黑洞交互式讲解器

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
为 [OBSERVATORY_NAME] 构建一个交互式天体物理科普讲解页面，展示旋转黑洞样本 [OBJECT_NAME]（[MASS_LABEL]，[DISTANCE_LABEL]）。第 1 帧直接呈现一个实时 GLSL 光线步进 Three.js 黑洞，渲染于深邃宇宙黑（#050508）之中，配以炽热吸积盘橙（#FF8A2A）、白炽金（#FFD27A）与冷星光蓝（#9DB8FF）。访客可围绕引力透镜化的吸积盘进行 360° 环绕，切换多普勒集束效应，调整倾角预设与等离子体辉光，然后滚动浏览六个交互章节：(01) 事件视界逃逸速度探针，(02) 光子球弯曲光线碰撞参数实验室，(03) 时间膨胀双时钟，比较远处观测者与自由下落旅行者的时钟，当半径 r/rs 趋近 1.01 时，(04) 潮汐面条化梯度模拟器，比较恒星质量与超大质量视界，(05) 地球尺度 VLBI 虚拟望远镜，连接 7 个全球射电天线以锐化实时合成阴影环，(06) 恒星到超大质量宇宙尺度比较器。将所有模型明确标注为简化教学物理，并确保前端不出现任何日历日期或 4 位年份。

- 受众：好奇的读者、物理学生、教育工作者和天文爱好者。
- 目标：将广义相对论概念——引力透镜、相对论时间膨胀、潮汐拉伸和地球尺度干涉测量——转化为即时的视觉与触觉直觉。
- 语气：敬畏启发的科学清晰度——精确的天文台仪器感搭配清晰易懂的平实英文解释。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：three（MIT）、@types/three（MIT）、lucide-react（ISC）、@fontsource/space-grotesk（OFL-1.1）、@fontsource/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/space-grotesk（500、600、700）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（400、500、600）。
  - 在全视口宽度的 Three.js ShaderMaterial 画布（preserveDrawingBuffer: true）中渲染实时 ray-marched 引力透镜黑洞，该画布在 RAF 之前同步渲染第 1 帧。
  - 将所有 6 个交互式相对论章节和数据保留在 src/data/blackHoleData.ts 中，并将模块化交互式小部件保留在 src/components/RelativityLabs.tsx 中。

## 变量
- [OBSERVATORY_NAME] — 出版物名称（默认：“Event Horizon Atlas”）。交互式科学出版物的名称
- [OBJECT_NAME] — 精选样本（默认：“Aurelia-X1”）。精选黑洞的目录编号
- [MASS_LABEL] — 精选质量（默认：“6.5 Billion Solar Masses”）。主视觉遥测中显示的质量标签
- [DISTANCE_LABEL] — 距离读数（默认：“55 Million Light-Years”）。主视觉遥测中显示的距离标签
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/black-hole-interactive-explainer（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值编写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 深空（Deep Space）`#050508` — 主背景画布
- 黑曜仪器（Obsidian Instrument）`#0E1019` — 实验卡片与遥测面板
- 炽盘橙（Hot Disk Orange）`#FF8A2A` — 吸积等离子体与主交互强调色
- 白炽金（Incandescent Gold）`#FFD27A` — 最内稳定轨道光子环高亮
- 冷星光蓝（Cool Starlight Blue）`#9DB8FF` — 相对论多普勒接近频移与数据指标

### 字体排印
- 展示标题与章节标题：Space Grotesk（OFL），字重 500/600/700
- 说明性正文：Inter（OFL），字重 400/500/600
- 方程、时钟与遥测：JetBrains Mono（OFL），字重 400/500/600

### 布局与动效
- 间距：全出血交互式光线步进 WebGL 主视觉区，配停靠式玻璃 HUD，其后为居中、最大宽度 1152px 的交替章节区块，垂直节奏宽松。
- 圆角：16px 精密黑曜仪器面板，配 1px 星光色调边框。
- 动效：持续实时光线步进的旋涡吸积等离子体与相对论多普勒辉光，支持 360° 拖拽环绕。
- 动效：由引力时间膨胀 sqrt(1 - rs/r) 驱动的实时滴答双时钟。
- 动效：用于光线碰撞参数、下落潮汐梯度、VLBI 天线切换与宇宙质量尺度的平滑交互滑块。
- 动效：遵循 prefers-reduced-motion，暂停自动环绕旋转，同时保持拖拽环绕与所有实验滑块完全响应。
- 图像：100% 程序化 GLSL 片段着色器黑洞、星场，以及代码绘制的交互式 SVG/Canvas 物理仪器。

## 页面与区块
### [OBSERVATORY_NAME] · 黑洞互动讲解页（`#/explainer`）
1. **Frame-1 光线步进黑洞主视觉** — 即时呈现完整精美的引力透镜黑洞 [OBJECT_NAME]（[MASS_LABEL]、[DISTANCE_LABEL]），发光的橙金色吸积盘从阴影上方和下方拱起，明亮的光子环、细微的多普勒集束效应与星空。包含拖拽环绕提示、预设相机角度（Lensed Overlook、Edge-On Disk、Polar View）、Spin/Doppler 开关、Disk Glow 滑块、Auto-Orbit 开关、章节跳转导航，以及清晰的 'Simplified educational physics model' 徽标。
   布局：全出血深色宇宙主视觉舞台（桌面端 min-h-[680px]，390px 移动端为整洁的堆叠式 HUD），零启动延迟。
   动效：实时 GLSL 光线步进测地线弯曲与等离子体湍流。
2. **六个互动相对论章节** — （01）事件视界逃逸速度探针，展示在 r = rs 处逃逸速度越过 c；（02）光子球与透镜效应互动碰撞参数光线弯曲器；（03）时间膨胀双时钟，带实时远方时钟与旅行者时钟及 r/rs 滑块；（04）潮汐力与意面化，对比 10 M☉ 恒星级与 6.5B M☉ 超大质量级的拉伸；（05）地球大小 VLBI 虚拟望远镜，带 7 个可切换射电站，更新基线覆盖与实时阴影锐度；（06）恒星到超大质量宇宙尺度比较器，对照可识别的太阳系地标。
   布局：非对称 12 列卡片，将简洁的通俗天体物理文案与可触控的互动 SVG/Canvas 实验仪器配对。
   动效：响应式实时矢量更新与实时相对论时钟指针。

## 资产
- 字体：通过 npm 安装 @fontsource/space-grotesk、@fontsource/inter 和 @fontsource/jetbrains-mono。

## 禁止事项
- 绝不要在光线步进（ray-marched）黑洞出现之前显示黑色空白首帧或加载门。
- 绝不要在不明确标注为简化教学模型的情况下呈现简化的物理近似。
- 绝不要在前端任何位置包含日历日期或 4 位年份。
- 绝不要获取外部图片或 CDN 字体。

---
— Prompt by VibeFather · https://vibefather.ai/t/black-hole-interactive-explainer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
