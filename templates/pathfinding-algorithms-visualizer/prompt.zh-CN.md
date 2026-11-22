> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 寻路算法可视化器

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
在温暖的米白纸张底色（#FAFAF7）上构建一个名为 [BRAND]（[SUBTITLE]）的交互式寻路算法可视化工具，使用清晰的墨色（#1F2430）、前沿青色（frontier teal，#2BB3A3）、已访问薰衣草紫（visited lavender，#B9A7FF）和发光的路线橙色（glowing route orange，#FF7A1A）。第 1 帧直接打开一个在干净交互式网格上实时预求解的 A* 路径，并带有明显的泥地/水域/墙体障碍布局，让访客立即看到前沿、已访问热力图和发光的橙色路线。提供四个与 window.location.hash 同步的哈希路由视图：(1) #/sandbox — 交互式方形网格 + 六边形网格切换、画笔工具（Wall、Mud 代价 3、Water 代价 6、Erase）、可拖拽的 Start 与 Goal 图钉、算法选择器（BFS、Dijkstra、Greedy Best-First、A*）、在完全相同地图上同步运行两种算法的并排比较模式、Play/Pause/Step/Reset/Speed 控件、实时 Nodes Explored 与 Path Cost 计数器，以及带实时行高亮伪代码的 Algorithm Explainer；(2) #/heuristics — Manhattan、Euclidean 和 Chebyshev 距离启发式的交互式并排比较，带可选权重乘数；(3) #/maze — Recursive Backtracker、Prim's 和 Random Weighted Terrain 迷宫生成器，直接接入实时求解器；(4) #/city — 在虚构城市 [CITY_NAME] 的程序化代码绘制 SVG 道路地图上进行 Weighted A* 与 Dijkstra 路径规划，带可点击的街道交叉口、实时拥堵开关和逐向边距离总计。

- 受众：计算机科学学生、游戏开发者、算法教育工作者和好奇的构建者。
- 目标：让学习者能够绘制加权地形、拖拽图钉、逐行步进实时伪代码，并并排比较算法，从而使图搜索算法在视觉上令人难忘。
- 语气：清晰、可触知的学术笔记本——干净的制图清晰度与清晰的数学精确性。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：lucide-react（ISC）、@fontsource/plus-jakarta-sans（OFL-1.1）、@fontsource/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/plus-jakarta-sans（600、700）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（400、500、600）。
  - 在挂载和 hashchange 时，将 4 个顶层视图（#/sandbox、#/heuristics、#/maze、#/city）与 window.location.hash 双向同步。
  - 在 src/engine/pathfinding.ts 中为 BFS、Dijkstra、Greedy Best-First 和 A* 实现确定性的步骤记录引擎，同时支持 4 邻域方形网格（Square Grids）和 6 邻域偏移六边形网格（Offset Hex Grids）。

## 变量
- [BRAND] — 实验室名称（默认：“GraphCraft Lab”）。交互式寻路可视化工具标题
- [SUBTITLE] — 副标题（默认：“How Maps & Games Find the Shortest Route”）。简短页眉副标题
- [CITY_NAME] — 虚构城市地图名称（默认：“Northbridge”）。城市地图标签页中代码绘制城市道路网络的名称
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/pathfinding-algorithms-visualizer（默认：是；删除此行即可移除）

“页面与区块”下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- Drafting Paper `#FAFAF7` — 主背景表面
- Ink Slate `#1F2430` — 主排版、边框和墙体单元格
- Frontier Teal `#2BB3A3` — 活跃的开放集前沿节点
- Visited Lavender `#B9A7FF` — 已关闭集探索热力图节点
- Route Orange `#FF7A1A` — 最终最短路径辉光和主操作强调色

### 排版
- 展示标题与章节标题：Plus Jakarta Sans (OFL)，字重 600/700
- 说明性正文与控件：Inter (OFL)，字重 400/500/600
- 伪代码、坐标与计数器：JetBrains Mono (OFL)，字重 400/500/600

### 布局与动效
- 间距：清爽的顶部工作台导航 + 紧凑工具栏 + 响应式 12 列工作区，将交互式网格/六边形画布与实时指标和行高亮伪代码并排配对。
- 圆角：12px 清爽制图卡片，配 1px 墨色/12 发丝线；用于画笔和算法选择器的触感胶囊按钮。
- 动效：平滑的逐步扩展波，展示前沿青色单元格转变为已访问薰衣草色，并追踪发光的橙色最短路径。
- 动效：拖动 Start/Goal 图钉或绘制墙壁、泥地和水中时即时重新计算。
- 动效：伪代码块内的实时行高亮，与当前算法步骤同步。
- 图像：100% 程序化 SVG 与 Canvas 交互式网格、六边形瓦片、生成的迷宫，以及代码绘制的城市道路网络。

## 页面与区块
### [BRAND] · 网格与六边形沙盒（`#/sandbox`）
1. **交互式网格 / 六边形可视化器与并排对比** — 绘制墙、泥地（代价 3）、水域（代价 6）或清除；拖动起点和终点图钉；在方形网格和六边形网格之间切换；单独运行 BFS、Dijkstra、贪心最佳优先或 A*，或在并排对比模式下运行；拖动 Step / Play / Pause / Speed；实时监控 Nodes Explored、Frontier Size 和 Path Cost 计数器。
   布局：全工作台宽度，工具栏位于顶部，交互式网格/六边形舞台位于左侧（对比模式下为双分屏网格），实时算法讲解器 + 行高亮伪代码卡片位于右侧。
   动效：动画化的边界扩展和即时图钉拖动路线更新。

### [BRAND] · 启发式对比（`#/heuristics`）
1. **曼哈顿 vs 欧几里得 vs 切比雪夫距离探索器** — 在障碍场上并排对比启发式度量与启发式权重（1.0× 可采纳 vs 2.0× 加权贪心），展示精确公式读数、探索节点减少量和路径最优性权衡。
   布局：三个同步迷你网格可视化器，共享障碍预设和启发式权重滑块。
   动效：三种启发式之间同步步进播放。

### [BRAND] · 迷宫生成器（`#/maze`）
1. **程序化迷宫与地形生成器** — 一键生成递归回溯迷宫、Prim 分支走廊或加权河流与沼泽景观，逐步或即时观看迷宫开凿过程，并立即在生成的迷宫中让 A* 与 BFS 竞速。
   布局：控制条 + 大型交互式生成迷宫画布，带实时求解器统计。
   动效：动画化的迷宫求解波。

### [BRAND] · 城市道路地图路由（`#/city`）
1. **代码绘制的 [CITY_NAME] 城市道路网络** — 虚构城市 [CITY_NAME] 的交互式 SVG 街道网络，包含河流桥梁、大道和交叉口。点击任意交叉口设置起点或目的地，切换桥梁交通拥堵（3× 通行权重），观看 A* 与 Dijkstra 计算最快路线，并实时显示通行时间和已探索交叉口标记。
   布局：分屏地图画布 + 交叉口/路线检查器面板。
   动效：动画化的交叉口探索和高亮橙色街道路线。

## 资源
- 字体：通过 npm 安装 @fontsource/plus-jakarta-sans、@fontsource/inter 和 @fontsource/jetbrains-mono。

## 禁止事项
- 绝不要以空白网格开场——第 1 帧必须展示一张预先求解的加权障碍地图，包含青色（teal）边界、淡紫色（lavender）已访问节点和一条清晰的橙色路线。
- 绝不要引用现实世界的网站、作者或受版权保护的地图瓦片。
- 绝不要在前端显示日历日期或 4 位年份。

---
— Prompt by VibeFather · https://vibefather.ai/t/pathfinding-algorithms-visualizer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
