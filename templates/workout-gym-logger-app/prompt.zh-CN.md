> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 锻炼与健身记录应用

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个深色、充满活力、响应式、移动优先的力量训练与健身房训练记录 PWA（[BRAND]），面向 [ATHLETE_NAME]，运行 '[PROGRAM_NAME]'。移动端（<768px）使用底部标签栏（Today、Programs、Exercises、Progress）+ 悬浮休息计时器胶囊；桌面端适配为左侧边栏 + 训练与遥测分栏布局。没有伪造的手机外壳。

- 受众：力量举重者、健身房锻炼者和私人训练客户，记录组数、休息间隔、PR 和每周举重总量。
- 目标：提供一个零摩擦的健身房现场记录器，具备即时组数勾选、自动休息计时器、PR 检测和持久化在 localStorage 中的可视化进度跟踪。
- 语气：专注、运动感、干脆、高对比度，不废话，不做医疗声明。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react（ISC）、@fontsource/space-grotesk（OFL）、@fontsource/inter（OFL）、@fontsource/jetbrains-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中本地导入 @fontsource/space-grotesk（500、600、700）、@fontsource/inter（400、500、600、700）和 @fontsource/jetbrains-mono（400、500、600）。
  - 在 src/data/workoutSeed.ts 中存储预置的 4 天推/拉/腿训练计划、带 SVG 动作规格的动作库，以及 3 周的历史训练日志；在 localStorage 中持久化活动会话、自定义组、PR 记录和已完成的训练。
  - 当浮动休息计时器到达 00:00 时，合成一个可选的 Web Audio API 提示音（无外部音频文件）。
  - 绝不绘制假的手机边框；实现真正的三断点响应式布局（移动端底部标签栏 <768px，桌面端左侧边栏 + 分栏面板 >=768px）。

## 变量
- [BRAND] — 健身应用名称（默认：“VoltRep”）。虚构的力量记录 PWA 名称
- [ATHLETE_NAME] — 举重者个人资料名称（默认：“Alex Carter”）。虚构的运动员名称
- [PROGRAM_NAME] — 当前训练分化（默认：“4-Day Push / Pull / Legs”）。预置的训练计划标题
- [UNIT_LABEL] — 重量单位（默认：“lbs”）。默认负重单位（lbs 或 kg）
- [WEEKLY_GOAL] — 每周坚持目标（默认：“4 Sessions / Week”）。显示在 Progress 和 Today 视图中
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/workout-gym-logger-app（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/workout-gym-logger-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
