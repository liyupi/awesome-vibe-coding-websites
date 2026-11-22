> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 在线代码演练场（Online Code Playground）

请完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个功能齐全的浏览器内 HTML、CSS 和 JavaScript 代码演练场，具备语法高亮且可调整大小的窗格、HTML 标签自动补全、沙箱化的实时 iframe 预览、实时报告日志和错误（含行号）的控制台面板、5 个起始模板（包括一个本地打包 Three.js 的实时 3D Three.js 场景）、布局切换、localStorage 自动保存、URL 编码分享、真正的 .zip 导出，以及一个包含 12 个预置交互作品的画廊。

- 受众：前端工程师、创意编程者、网页设计讲师，以及直接在浏览器中制作 UI 微交互、canvas 动画、CSS 艺术和 Three.js 场景原型的学生。
- 目标：打开后直接进入一个活跃且视觉上令人印象深刻的实时编码与预览分屏工作区，加载时立即运行一个动态起始草图，并可即时切换到起始模板或 12 个作品的画廊。
- 基调：精准的深色工作室 IDE：锐利的语法配色、清晰纤细的分隔线、醒目的橘色运行操作，以及薄荷色的实时执行状态遥测。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：three（MIT）、lucide-react（ISC）、@fontsource/space-grotesk（OFL）、@fontsource/inter（OFL）、@fontsource/jetbrains-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build.sourcemap: false。
  - 从已安装的 three npm 包中，在 public/vendor/three-sandbox.js 打包一个本地 UMD/IIFE Three.js 构建，以便沙盒化 iframe 预览可离线运行 Three.js，零 CDN 调用。
  - 在 src/main.tsx 中导入 @fontsource/space-grotesk（600、700）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（400、500、600）。
  - 将所有品牌标签、5 个起始模板和 12 个预置画廊笔保留在 src/data/pens.ts 中。
  - 在 src/utils/zipAndShare.ts 中实现一个纯 TypeScript CRC32 store-only ZIP 归档构建器，用于真正导出 index.html、style.css 和 script.js 的 .zip 文件。

## 变量
- [BRAND] — 演练场名称（默认：“SparkBench”）。显示在顶部 IDE 栏、文档标题和导出的 README 中。
- [TAGLINE] — 简短副标题（默认：“Live HTML, CSS, JS & bundled Three.js playground.”）。显示在画廊横幅和起始元数据上。
- [DEFAULT_AUTHOR] — 默认创作者标识（默认：“Devon Park”）。显示在新建草图和画廊署名上的作者名。
- [EXPORT_PREFIX] — ZIP 文件名前缀（默认：“sparkbench-pen”）。导出项目归档时使用的基础文件名。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/online-code-playground（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 编辑器深色（Editor Dark）`#111318` — 主应用外壳和代码面板画布
- 面板石板色（Panel Slate）`#181C24` — 工具栏、标签条、控制台标题栏和画廊卡片
- 深井色（Deep Well）`#0C0E12` — 代码编辑器行号槽和实时控制台视口
- 橘橙运行色（Tangerine Run）`#FF7A1A` — 主运行按钮、活动分隔手柄和强调徽章
- 薄荷成功色（Mint Success）`#3DDC97` — 自动保存指示器、执行成功徽章和日志高亮
- 信号玫瑰色（Signal Rose）`#FF5C72` — 运行时控制台错误和警告
- 粉笔文本色（Chalk Text）`#E9EDF5` — 高对比度主界面和代码文本
- 钢灰柔和色（Steel Muted）`#8B95A7` — 行号、次级标签和元数据

### 字体排印
- 工作区品牌与画廊标题：Space Grotesk（OFL），字重 600/700
- 控件与标签：Inter（OFL），字重 400/500/600
- 代码编辑器、行号与控制台：JetBrains Mono（OFL），字重 400/500/600

### 布局与动效
- 间距：全视口 IDE 工作台：52px 顶部命令栏、36px 面板标题栏、可拖拽的 6px 分隔条，以及可折叠的 180px 控制台抽屉。
- 圆角：利落的 8px 编辑器卡片、6px 工具栏按钮、999px 状态与标签胶囊。
- 动效：工具栏按钮和布局切换胶囊上 150ms 平滑悬停高亮
- 动效：当代码更改持久化到 localStorage 时，自动保存圆点上出现微妙的薄荷色脉冲
- 动效：实时 iframe 即时重新渲染，并以毫秒为单位显示执行耗时读数
- 动效：在所有过渡和画廊卡片悬停状态中遵循 prefers-reduced-motion
- 图像：纯代码绘制的 IDE 界面：沙箱化 iframe 内实时动画 HTML/Canvas/Three.js 预览，以及全部 12 个预置画廊 pen 的清晰微型实时风格几何 SVG/CSS 视觉缩略图。

## 页面与区块
### 工作区 — [BRAND] (`#/editor`)
1. **顶部 IDE 命令栏** — [BRAND] 徽标与可编辑的当前 Pen 标题输入框、主色调橘色 'Run' 按钮（Cmd/Ctrl+Enter）、自动运行切换开关、起始模板下拉菜单（Canvas Particle Wave、3D Three.js Scene、CSS Kinetic Art、Interactive Form、Blank）、布局切换器（Side-by-Side、Stacked、Preview Focus）、薄荷色 'Saved' 自动保存指示器、'Share URL' 按钮（将 HTML/CSS/JS 编码进 URL hash 并复制链接）、'Export .zip' 按钮（下载包含 index.html、style.css、script.js 的真实压缩包），以及 'Gallery (12)' 路由切换器。
   布局：桌面端为紧凑单行吸顶顶栏；390px 移动端为整洁的两行换行控制栏，零溢出。
   动效：Run 的触感式按下反馈、Share URL 复制成功 toast，以及薄荷色自动保存闪烁。
2. **可调整大小的语法高亮代码编辑窗格** — 带标签页或分栏的 HTML、CSS 和 JavaScript 编辑器，具备同步行号栏、实时语法着色叠加层（标签、属性、选择器、关键字、字符串、注释）、Tab 键 2 空格缩进，以及输入 '<' 时出现的交互式 HTML 标签自动补全下拉菜单（例如 div、section、canvas、button、form、svg），会插入匹配的开标签和闭标签。
   布局：左侧可调整大小的窗格（桌面端拖拽手柄可从 28% 宽度拖到 72%），带有显示实时字节/行数的语言标签页，以及可选的 3 窗格垂直堆叠切换。
   动效：拖拽调整大小时手柄以橘色 #FF7A1A 平滑高亮。
3. **实时沙箱预览与带行号的控制台面板** — 沙箱化 iframe（srcdoc）渲染用户的 HTML、CSS 和 JS——只要草图使用 THREE，就会自动注入本地打包的 Three.js。通过 postMessage 捕获 console.log、console.warn、console.error 以及未捕获的 window.onerror / unhandledrejection 事件，并附带精确的脚本行号，显示带时间戳的条目，配有 Clear Console、筛选胶囊按钮，以及薄荷色 #3DDC97 的执行状态徽章。
   布局：右侧窗格在实时预览框架与可折叠的底部控制台抽屉之间垂直分割。
   动效：每次运行时，实时执行徽章以薄荷色闪烁并显示耗时毫秒数。

### 12 个预置 Pen 画廊 — [BRAND] (`#/gallery`)
1. **画廊页头与分类筛选** — 简洁的深色编辑风格页头，包含 [BRAND] 标题、[TAGLINE]、搜索输入框、分类筛选胶囊按钮（All、Canvas、Three.js 3D、CSS Art、Interactive UI、Games & Audio），以及快捷的 'Back to Editor' 按钮。
   布局：全宽深石板色横幅，下方为单行分类筛选条。
   动效：对所有 12 个预置 pen 进行即时客户端筛选。
2. **12 个预置 Pen 交互网格** — 12 个原创、真正可运行的预置 pen，涵盖 Canvas 动画、Three.js 3D 场景、CSS 动态艺术、交互式计算器/表单、音频合成器和迷你游戏。每张卡片展示独特的代码绘制预览视觉、标题、分类标签、创作者账号、行数，以及一个 'Open in Editor' 按钮，可立即将其 HTML/CSS/JS 加载到 #/editor 并实时运行。
   布局：#181C24 石板色卡片上的响应式 1/2/3 列卡片网格，配有清晰的 1px 白色/10 边框。
   动效：悬停时出现微妙的橘色边框高亮与高度位移。

## 资源
- 图标：通过 npm 包 lucide-react（ISC 许可证）安装，用于 IDE 控件、布局图标、控制台徽章和导出操作。
- 字体：通过 @fontsource/space-grotesk、@fontsource/inter 和 @fontsource/jetbrains-mono（OFL）安装；由 Vite 本地打包。
- 图像：本地打包的 Three.js 运行时，由 npm 包 three（MIT）构建到 public/vendor/three-sandbox.js，外加为画廊笔代码绘制的 SVG 缩略图。

## 禁止事项
- 不要从外部 CDN 加载 Three.js、字体或任何脚本——请从 npm 本地打包 Three.js。
- 不要引用 CodePen、JSFiddle、CodeSandbox、StackBlitz 或任何第三方演练场品牌。
- 不要伪造 ZIP 下载或 URL 分享——请生成包含 index.html、style.css 和 script.js 的有效 .zip 二进制文件，并在加载时直接从 URL hash 解码共享项目。
- 不要在 UI 中硬编码日历日期或版权年份。
- 不要在 1440x900 桌面端或 390x844 移动端出现水平溢出。
- 不要发布 source map，也不要将 src/ 复制到 dist/；请保持 vite base 设置为 './'。

---
— Prompt by VibeFather · https://vibefather.ai/t/online-code-playground · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
