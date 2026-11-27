> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 闪卡语言学习应用

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个温暖、欢快的响应式移动优先间隔重复闪卡与词汇学习 PWA（[BRAND]），面向 [LEARNER_NAME]，每日复习目标为 [DAILY_GOAL]。移动端（<768px）使用底部 4 标签栏（Study、Decks、Quiz、Stats）；桌面端使用左侧边栏 + 宽幅学习工作区。不使用虚假手机外框。

- 受众：语言学习者、学习实用短语的旅行者，以及在手机和桌面上使用间隔重复的学生。
- 目标：通过 3D 翻转卡片、间隔重复间隔、发音音频和即时多选题测验，让每日闪卡复习变得有触感、有回报感且快速。
- 基调：温暖、鼓励、清晰的纸卡质感、无杂乱。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react（ISC）、@fontsource/fraunces（OFL）、@fontsource/plus-jakarta-sans（OFL）、@fontsource/jetbrains-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中本地导入 @fontsource/fraunces（600、700）、@fontsource/plus-jakarta-sans（400、500、600、700）和 @fontsource/jetbrains-mono（400、500、600）。
  - 在 src/data/decksSeed.ts 中预置 4 个初始卡组（Travel Spanish、Japanese Kana & Phrases、French Café、Design Terms），每个卡组包含 8 张真实卡片（共 32 张）；在 localStorage 中持久化 SRS 间隔、掌握计数、自定义卡片和每日复习进度。
  - 使用 CSS 3D preserve-3d / backface-visibility 实现平滑的闪卡翻转（在 prefers-reduced-motion 下提供即时交叉淡入淡出回退）。
  - 使用 window.speechSynthesis 进行发音播放，在不支持时提供优雅的内联视觉脉冲回退。

## 变量
- [BRAND] — 学习应用名称（默认：“KanaLeaf”）。虚构的闪卡 PWA 名称
- [LEARNER_NAME] — 学习者显示名称（默认：“Elena Brooks”）。虚构的学习者个人资料名称
- [DAILY_GOAL] — 每日复习目标（默认：“20 cards”）。目标环上显示的每日目标
- [PRIMARY_DECK] — 默认激活卡组（默认：“Travel Spanish”）。学习标签页初始选中的卡组
- [STREAK_LABEL] — 活跃连续学习徽章（默认：“9-Day Study Streak”）。显示在侧边栏和统计页头部
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/flashcard-language-learning-app（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 欢快纸色（Cheerful Paper）`#FAF9F5` — 温暖的触感纸张画布
- 卡片白（Card White）`#FFFFFF` — 3D 闪卡正面、卡组卡片和测验面板
- 学习墨色（Study Ink）`#18181B` — 主要词汇和标题
- 钴蓝色（Cobalt Blue）`#2563EB` — 活动标签页、Flip/Good CTA、发音按钮和目标弧线
- 掌握薄荷色（Mastery Mint）`#10B981` — Easy 评级、测验正确答案和连续学习热力图高亮
- 暖金色（Warm Gold）`#F59E0B` — Hard 评级、连续学习火焰徽章和音标高亮

### 排版
- 编辑式词汇与展示标题：Fraunces（OFL），字重 600/700
- UI 控件、释义和示例：Plus Jakarta Sans（OFL），字重 400/500/600/700
- SRS 间隔、音标指南和连续学习计数器：JetBrains Mono（OFL），字重 400/500/600

### 布局与动效
- 间距：移动端（<768px）将触感闪卡干净居中，并在固定的 64px 标签栏上方留出 84px 底部间隙。桌面端（>=768px）显示 240px 左侧边栏 + 宽大的居中学习工作区，包含卡组切换器和实时会话遥测。
- 圆角：3D 闪卡舞台为 20px，卡组和测验卡片为 14px，SRS 评级徽章和筛选标签为 999px。
- 动效：点击卡片或按空格键时，触感 3D rotateY(180deg) 翻转动画。
- 动效：测验答案和 SRS 间隔更新时，呈现平滑的绿色/金色/钴蓝色视觉反馈。
- 动效：遵循 prefers-reduced-motion；所有内容立即可见。
- 图像：100% 清晰的代码绘制学习视觉元素：SVG 每日复习目标环、28 天学习一致性热力图、每个卡组的掌握进度条和 Lucide 图标。

## 页面与区块
### [BRAND] — 间隔重复闪卡（`index.html`）
1. **自适应移动端底部标签栏与桌面端侧边栏** — 移动端（<768px）：紧凑的 [BRAND] 页头，含当前卡组胶囊标签 + Create Card '+' 按钮，另有固定底部 4 标签栏（Study、Decks、Quiz、Stats）。桌面端（>=768px）：240px 左侧边栏，含 [BRAND] 徽标、[STREAK_LABEL] 徽章、4 个导航标签、实时每日复习迷你仪表，以及 '+ New Card' CTA。
   布局：全视口响应式纸质 PWA；零虚假手机边框。
2. **学习视图 — 3D 翻转闪卡与 SRS 评分** — 快速卡组切换胶囊标签位于一张宽大的交互式 3D 闪卡上方，闪卡显示卡组徽章、正面词条、发音提示，以及一个 SpeechSynthesis Listen 按钮。点击卡片（或按 Space）平滑翻转到背面，显示翻译、例句和用法说明。下方：4 个触感式间隔重复评分按钮（Again · 10m、Hard · 1d、Good · 3d、Easy · 7d），计算并将下次复习间隔持久化到 localStorage，同时推进队列并递增今日已复习计数。
   布局：桌面端为宽居中学习舞台 + 右侧会话进度卡；移动端为全宽卡片。
3. **卡组视图与创建自定义卡片模态框** — 显示全部 4 个初始卡组（Travel Spanish、Japanese Kana & Phrases、French Café、Design Terms），含卡片数、到期数、掌握进度条、'Study Now' 按钮，以及 '+ Add Card' 模态框，让学习者创建自定义正面/发音/背面/例句卡片并持久化到 localStorage。
   布局：桌面端为 2 列卡组网格；移动端为堆叠卡片。
4. **测验视图 — 4 选项多选题与连击** — 快速回忆测验，从当前卡组中抽取真实题目和 3 个干扰项。跟踪实时测验连击、正确率百分比、即时翠绿/玫瑰色选项反馈，以及 'Next Question' 流程。
   布局：居中响应式测验卡，桌面端为 2x2 选项按钮，移动端为堆叠按钮。
5. **统计视图 — 每日目标环与 28 天连击网格** — 显示一个动画 SVG 每日学习目标环（朝向 [DAILY_GOAL]）、3 张摘要 KPI 卡（Active Streak、Cards Mastered、Quiz Accuracy）、一个 28 天 Mint 一致性热力图网格，以及按卡组的掌握度细分。
   布局：桌面端为 2 列分析网格；移动端为堆叠卡片。

## 资源
- 图标：安装 lucide-react（ISC），用于音量发音、翻转箭头、火焰连续学习标记、测验对勾、加号按钮和标签页图标。
- 字体：通过 @fontsource 包自托管 Fraunces、Plus Jakarta Sans 和 JetBrains Mono（OFL）。
- 图像：每日目标圆环和 28 天学习热力图以内联 SVG 清晰渲染。零外部图像。

## 不要做
- 不要在桌面屏幕上使用假手机边框或固定窄幅移动容器。
- 不要使用真实语言学习应用的吉祥物、商标或受版权保护的课程内容。
- 不要使用外部 TTS API、CDN 脚本、Google Fonts 链接或 source map；始终设置 base: './'。
- 不要留空首屏；预置 4 个入门卡组（32 张卡片），可立即翻转。
- 在 390x844 移动端或 1440x900 桌面端不要出现水平溢出。
- 除可选的 [CREDIT] 槽位外，不要提及 VibeFather 或竞品。

---
— Prompt by VibeFather · https://vibefather.ai/t/flashcard-language-learning-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
