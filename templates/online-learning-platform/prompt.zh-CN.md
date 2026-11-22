> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 在线学习平台

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
为 [PLATFORM_NAME] 构建一个交互式在线课程平台，以活跃学习者 [LEARNER_NAME] 的身份登录，该学习者拥有 [STREAK_DAYS] 天的学习连续记录。配色方案：深墨色（deep ink）（#161A33）、向日葵黄（sunflower）（#FFC93C）、天蓝色（sky blue）（#5AB2FF）和暖纸色（warm paper）（#FBFAF5）。关键要求：第 1 帧必须直接打开 #/dashboard，展示 [LEARNER_NAME] 处于课程学习中途（而非空目录）——显示活跃连续记录、每周目标进度、三门已注册课程及真实完成百分比，以及一张醒目的“Resume Lesson”卡片。将五个 hash 路由与 window.location.hash 双向同步：(1) #/dashboard — 活跃的中途学习者仪表盘，包含连续学习日历条（Mon–Sun，不显示日期）、学习统计、带插画封面的活跃课程卡片，以及快捷 Resume 按钮；(2) #/catalog — 可筛选的课程目录（Topic、Level、Length），涵盖三门完整的预置虚构课程（'Visual Data Storytelling'、'Systems Design for Product Builders'、'Everyday Sound & Acoustics'），包含真实的多章节大纲、讲师简介和学生评价；(3) #/course — 完整课程详情页，包含教学大纲、学习成果、讲师简介、评价和课程启动器；(4) #/player — 交互式课程播放器，具有针对每门课程定制的实时动画 HTML5 Canvas 可视化图表（实时动画图表、系统架构数据包流或谐波声波干涉），并配有 Play/Pause、时间轴拖动条、章节标记、速度选择器（1×/1.25×/1.5×/2×）、可切换的实时同步 Captions 栏、保存到 localStorage 的每课 Markdown Notes、Mark Complete 按钮，以及带即时解析的交互式评分 Quiz；(5) #/certificate — 为 [LEARNER_NAME] 提供的简洁可打印完成证书，包含课程选择器、序列 ID、总学时和 window.print() 按钮（零日历日期或 4 位年份）。将所有 4 张风格统一的插画课程封面 WebP 图片打包到 public/images/ 下。

- 受众：自定进度学习者、队列教育者和在线课程创作者。
- 目标：交付一个充满活力、无干扰的学习工作区，从第一个像素起就让人感觉真正处于课程学习中途。
- 语调：温暖、鼓励性的编辑学院风——结构清晰，兼具触感十足的学习匠心。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：lucide-react (ISC)、@fontsource/plus-jakarta-sans (OFL-1.1)、@fontsource/inter (OFL-1.1)、@fontsource/jetbrains-mono (OFL-1.1)
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/plus-jakarta-sans（600、700）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（500、600）。
  - 将全部 4 个生成的风格统一的编辑类插画 WebP 文件打包到 public/images/ 中，并在 ASSETS.md 中记录它们。
  - 将已完成的课程 ID、测验分数和每课笔记持久化到 localStorage，并通过 window.location.hash 同步路由（#/dashboard、#/catalog、#/course、#/player、#/certificate）。

## 变量
- [PLATFORM_NAME] — 平台名称（默认："Brightleaf Academy"）。虚构的在线课程平台名称
- [LEARNER_NAME] — 活跃学习者姓名（默认："Samira Chen"）。显示在仪表盘和证书上的虚构学习者
- [STREAK_DAYS] — 连续活跃天数（默认："12"）。仪表盘上当前的学习连续天数计数器
- [CREDIT] — 在页脚保留一个小型"Template by VibeFather"链接，指向 https://vibefather.ai/t/online-learning-platform（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/online-learning-platform?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
