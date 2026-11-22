> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 机械表如何运作

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
打造一篇题为 [BRAND] 的互动式社论风格钟表学长篇报道，探索虚构机械机芯 [CALIBER_NAME]（[FREQUENCY_LABEL]、[POWER_RESERVE]）。将温暖的档案感衬线字体排版呈现在纸张底色（#F7F3EA）上，并搭配一个粘性交互式程序化 Three.js 3D 钟表工作台——完全以代码构建（零外部模型文件），使用枪金属色（gunmetal，#2E3440）、机加工黄铜（machined brass，#C99A3B）、合成红宝石轴枢宝石（synthetic ruby pivot jewels，#B3123A）和热蓝钢螺丝（thermally blued steel screws，#4C78A8）。引导读者走过 8 个清晰章节，与 8 个交互式 3D 组件同步：（01）发条与摆锤（Spring & Pendulum），（02）主发条与发条盒（Mainspring & Barrel），（03）齿轮传动系统（The Gear Train），含可验证的齿数与传动比计算，（04）擒纵机构（The Escapement）（擒纵轮与红宝石石擒纵叉，带 0.1× 慢动作滑块），（05）摆轮与呼吸游丝（Balance Wheel & Breathing Hairspring），（06）无键机构（Keyless Works）（上链 vs 调时表冠切换），（07）复杂功能（Complications）（31 步日期环与自动陀），以及（08）终章：完整组装的 [CALIBER_NAME] 机芯，你可以上链并观看它滴答走动。每个 3D 图形都支持 360° 拖拽环绕、时间/相位拖拽、慢动作速度、垂直爆炸视图滑块（Exploded View slider）和剖面切换（Cutaway Section toggle）。首帧即展示完整的滴答走动的黄铜、红宝石与钢蓝色 3D 机芯。

- 受众：好奇的读者、工程专业学生和钟表爱好者。
- 目标：让复杂的机械计时原理变得直观易懂——让读者在平实的英文社论文字旁，直接环绕、放慢、爆炸、剖切并上链每一个机构。
- 语调：温暖的档案式专著——清晰、富有触感的工程叙事，兼具博物馆级的精准。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：three（MIT）、@types/three（MIT）、lucide-react（ISC）、@fontsource/newsreader（OFL-1.1）、@fontsource/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/newsreader（400、500、600、700）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（400、500、600）。
  - 在 body 上使用 overflow-x: clip（切勿使用 overflow-x: hidden），以便粘性 3D 钟表学图形在滚动时稳固地固定在编辑章节旁边。
  - 在 src/components/WatchFigure3D.tsx 中的单个共享 WebGL 渲染器内构建全部 8 个程序化 Three.js 机械手表组件（带齿黄铜齿轮、盘绕主发条与呼吸游丝曲线、红宝石枢轴宝石、蓝钢螺丝、擒纵叉、无键表冠与离合器、日期环与半月形自动陀，以及堆叠的完整机芯），并设置 preserveDrawingBuffer: true。
  - 在 src/data/watchChapters.ts 中编写全部 8 个通俗英语钟表学章节、齿轮比分解表和可自定义品牌文案。

## 变量
- [BRAND] — 出版物标题（默认：“Caliber Monograph”）。编辑类钟表科普标题
- [CALIBER_NAME] — 虚构机芯名称（默认：“Caliber V-08”）。虚构的机械表机芯型号
- [FREQUENCY_LABEL] — 摆频标签（默认：“28,800 vph (4 Hz)”）。遥测中显示的摆轮摆频
- [POWER_RESERVE] — 动力储存标签（默认：“48-Hour Reserve”）。主发条满链动力储存规格
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/how-a-mechanical-watch-works（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 档案纸色（Archival Paper）`#F7F3EA` — 温暖的编辑式专著背景
- 枪金属板色（Gunmetal Plate）`#2E3440` — 主夹板、主墨色与精密框架
- 钟表黄铜色（Horology Brass）`#C99A3B` — 机加工齿轮、摆轮轮缘与发条盒
- 合成红宝石色（Synthetic Ruby）`#B3123A` — 低摩擦枢轴宝石与擒纵叉冲击石
- 蓝钢色（Blued Steel）`#4C78A8` — 热蓝化螺钉、游丝、主发条与指针

### 字体排印
- 文章标题、章节标题与首字下沉正文：Newsreader（OFL），字重 400/500/600/700
- 交互控件与图解：Inter（OFL），字重 400/500/600
- 齿数、齿轮比与节拍遥测：JetBrains Mono（OFL），字重 400/500/600

### 布局与动效
- 间距：编辑式页眉 + 章节跳转条，随后是不对称的 12 列粘性工作台（左侧 5 列长读章节，右侧 7 列粘性交互式 3D 钟表图形 + 控件），在 390×844 移动端上干净堆叠，并配有始终可达的图形栏。
- 圆角：14px 档案蓝图卡片，配 1px 枪金属发丝线；Explode、Cutaway、Slow-Mo 和 Wind 使用触感胶囊控件。
- 动效：持续的机械滴答、齿轮系齿啮合、擒纵锁定/解锁步进，以及同心游丝呼吸。
- 动效：拖动 Exploded View 滑块时平滑的垂直层分离，以及 Cutaway Section 模式下干净的一半平面裁剪。
- 动效：上链表冠会收紧主发条圈并重新充能实时 Power Reserve 仪表。
- 动效：遵循 prefers-reduced-motion，暂停自动滴答，同时保持 Time Scrub、Orbit、Explode 和 Wind 完全可交互。
- 图像：100% 程序化 Three.js 钟表 3D 几何体——挤出齿形黄铜轮、螺旋弹簧、红宝石宝石、蓝钢螺钉与自动陀。

## 页面与区块
### [BRAND] · 机械表如何运作（`#/monograph`）
1. **档案式报头与吸顶交互式 3D 机芯舞台** — 暖色纸张质感的报头，呈现 [BRAND]、[CALIBER_NAME] 规格（`[FREQUENCY_LABEL] · [POWER_RESERVE] · 21 Ruby Jewels`），以及一条 8 章跳转栏（`01 Pendulum` 至 `08 Complete Caliber`）。紧邻开篇引言处是全工艺 Three.js 3D 钟表舞台，打开即展示滴答运转的组装完成 [CALIBER_NAME] 机芯（黄铜轮系、红宝石轴承、蓝钢螺丝、摆动的摆轮与旋转的自动陀）。3D 视口下方的直接控制让读者可以：播放/暂停、设置慢动作（`0.1×` 至 `2×`）、手动拖动时间轴、滑动 `Explode Layers (0–100%)`、切换 `Cutaway Section`、切换 `Crown Mode (Wind / Set Hands)`，以及点击 `Wind Mainspring` 为动力储备重新上链。
   布局：12 栏编辑式分栏（`lg:items-start`），桌面端 3D 舞台使用 `lg:sticky lg:top-20`，390px 移动端则为紧凑的顶部图示舞台加可滚动章节。
   动效：实时 60fps 机械步进与平滑拖拽环绕。
2. **八个图文并茂的钟表学章节与可验证的齿轮比表格** — 八个易读、结构丰富的章节——每章都带一个“Focus 3D Figure”同步触发、清晰的标注数字，以及简化但准确的讲解，涵盖：(1) 发条与摆的等时性，(2) 主发条与条盒扭矩，(3) 轮系及可验证的齿数表（`Barrel 72T → Center 64T/12L → Third 60T/8L → Fourth 60T/8L → Escape 15T/7L`），(4) 瑞士杠杆擒纵与叉瓦石，(5) 摆轮与呼吸游丝，(6) 无键上链与拨针机构，(7) 日历环与自动陀复杂功能，以及 (8) 终章：上链并观察完整的 [CALIBER_NAME] 机芯。含蓄的编辑式页脚，可选 [CREDIT]。
   布局：左栏采用舒适的 62ch 编辑式行宽，垂直节奏宽裕，无任何横向溢出。
   动效：滚动进入每个章节时，会平滑激活吸顶图示中对应的 3D 组件。

## 资产


## 不要做的事
- 绝不要提及任何真实的高级制表商名称、受商标保护的机芯，也不要抄袭现有机械腕表文章中的文字。
- 绝不要挂载 8 个独立的 WebGL 上下文（应使用一个共享的高工艺 Three.js 渲染器，在全部 8 个图形之间干净地过渡）。
- 绝不要在 position: sticky 元素的祖先元素上设置 overflow-x: hidden（应在 body 上使用 overflow-x: clip）。
- 绝不要在专著或日期环标签的任何位置显示日历日期或 4 位年份。
- 绝不要在 390×844 移动端上允许水平溢出，也不要用 clip-path 裁剪内容。

---
— Prompt by VibeFather · https://vibefather.ai/t/how-a-mechanical-watch-works · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
