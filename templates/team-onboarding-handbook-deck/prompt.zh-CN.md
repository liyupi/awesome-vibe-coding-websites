> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 团队入职手册演示文稿

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一份温暖的 11 页 16:9 新员工入职与文化演示文稿，面向 [BRAND]（“[WELCOME_TITLE]”），由 [BUDDY_NAME]（[STUDIO_LOCATION]）引导。包含可交互的“该问谁”目录、每周固定活动日历、30/60/90 里程碑，以及一个持久化在 localStorage 中的可交互“第一周清单”，另有键盘/滑动导航、G 概览网格、N 演讲者备注 + 计时器、F 全屏，以及打印 CSS。

- 受众：加入分布式工作室的新员工、人力运营团队，以及欢迎队友的创始人。
- 目标：让新员工的第一周平静、清晰且可执行，具备自定进度导航和持久化清单。
- 语气：温暖、有人情味、透明、令人安心且有条理。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react（ISC）、@fontsource/fraunces（OFL）、@fontsource/plus-jakarta-sans（OFL）、@fontsource/jetbrains-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中本地导入 @fontsource/fraunces（600、700）、@fontsource/plus-jakarta-sans（400、500、600、700）和 @fontsource/jetbrains-mono（400、500、600）。
  - 将 Slide 08 交互式 First-Week Checklist 项持久化到 localStorage，以便已勾选的入职任务在重新加载后仍然保留。
  - 支持 ArrowLeft/ArrowRight/Space/Home/End 导航、触摸滑动、G 概览网格、N 演讲者备注 + 计时器、F 全屏，以及 @media print 横向 PDF 样式。

## 变量
- [BRAND] — 工作室名称（默认：“Hearthstone Studio”）。虚构的远程优先工作室
- [WELCOME_TITLE] — 封面标题（默认：“Welcome Home: Your First 90 Days With Us”）。温暖的入职引导封面标题
- [BUDDY_NAME] — 入职引导人（默认：“Hannah Lin, People Lead”）。封面上署名的引导者
- [STUDIO_LOCATION] — 远程分布范围（默认：“Remote-First · 14 Cities”）。显示在封面徽章上
- [CORE_VALUE] — 文化原则（默认：“Write it down, protect deep work, assume goodwill.”）。突出展示的运营格言
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/team-onboarding-handbook-deck（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 暖奶油色（Warm Cream）`#FAF7F2` — 主编辑纸质感幻灯片背景
- 浓缩咖啡墨色（Espresso Ink）`#1E1B18` — 标题、深色锚点卡片和高对比度排版
- 鼠尾草绿（Sage Green）`#2F855A` — 激活的勾选、已完成的里程碑和主强调色
- 柔杏色（Soft Apricot）`#F6AD55` — 暖色高亮、仪式标签和聚光灯徽章
- 暖灰褐色（Warm Taupe）`#6B6259` — 次级标签和注释

### 排版
- 暖色编辑风幻灯片标题：Fraunces（OFL），字重 600/700
- 易读的手册正文和 UI：Plus Jakarta Sans（OFL），字重 400/500/600/700
- 幻灯片索引、清单和仪式时间：JetBrains Mono（OFL），字重 400/500/600

### 布局与动效
- 间距：宽松的 16:9 宽屏构图，搭配醒目的 52px 桌面端衬线标题和暖深浓缩咖啡色的 90 天预览锚点卡片。
- 圆角：幻灯片画布 20px，目录和清单卡片 14px，胶囊形元素 999px。
- 动效：平滑的清单完成进度环和幻灯片过渡。
- 动效：遵循 prefers-reduced-motion；所有内容立即可见。
- 图像：100% 代码绘制的暖色编辑风视觉：30/60/90 里程碑进度弧、每周仪式网格、清单进度条和 Lucide 图标。

## 页面与区块
### [BRAND] — 团队入职手册（`index.html`）
1. **11 页幻灯片式互动团队入职手册** — 幻灯片 01 封面（'[WELCOME_TITLE]'、[BUDDY_NAME]、[STUDIO_LOCATION]、浓缩咖啡锚点卡片，附 30/60/90 就绪度概览）。幻灯片 02 使命与我们的存在意义。幻灯片 03 四项运营原则（'[CORE_VALUE]'）。幻灯片 04 互动组织架构与“该问谁”目录（可点击的部门筛选：Product、Design、Engineering、Ops）。幻灯片 05 核心工具栈与异步沟通规范。幻灯片 06 每周固定活动日历（周一启动会、周二评审、周四演示、周五安静专注）。幻灯片 07 30 / 60 / 90 天入职里程碑（互动式阶段选择器）。幻灯片 08 互动式第一周清单（8 个可点击任务，持久化于 localStorage，附实时完成进度条）。幻灯片 09 福利、补贴与休假概览。幻灯片 10 反馈与成长评估如何运作。幻灯片 11 实用链接与你的首次咖啡聊天。
   布局：16:9 宽屏演示文稿，含顶栏、底部分段式进度停靠栏、G 概览网格、N 演讲者备注 + 计时器、F 全屏，以及打印 PDF 支持。

## 资源
- 图标：安装 lucide-react（ISC）用于手册导航、对勾标记、咖啡聊天、日历和打印图标。
- 字体：通过 @fontsource 包自托管 Fraunces、Plus Jakarta Sans 和 JetBrains Mono（OFL）。
- 图像：所有里程碑图表和进度指示器均以 SVG/CSS 清晰渲染。零外部照片。

## 不要做
- 不要使用真实公司名称、SaaS 商标/标识、日历日期或真实员工照片。
- 不要使用 CDN 脚本、Google Fonts 或 source maps；始终设置 base: './'。
- 在 <768px 移动端不要显示键盘快捷键文字提示；改为显示 'Swipe to navigate'。
- 在 1440x900 桌面端或 390x844 移动端不要出现水平溢出。
- 除可选的 [CREDIT] 外，不要提及 VibeFather 或竞争对手。

---
— Prompt by VibeFather · https://vibefather.ai/t/team-onboarding-handbook-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
