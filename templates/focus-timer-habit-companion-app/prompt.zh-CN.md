> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 专注计时器与习惯陪伴应用

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一款宁静的暖石色、移动优先的响应式番茄钟专注计时器与每日微习惯追踪 PWA（[BRAND]），面向 [USER_NAME]，每日专注目标为 [DAILY_FOCUS_GOAL]。移动端（<768px）使用底部 4 标签栏（Focus、Habits、Journal、Stats）；桌面端渲染侧边栏 + 双面板专注工作台，并带有深色模式切换。不使用虚假手机边框。

- 受众：知识工作者、学生、写作者和创作者，正在建立平静的每日专注与习惯 routine。
- 目标：将触感十足、无干扰的番茄钟冲刺与程序化环境音景以及轻量级每日习惯连续记录相结合。
- 基调：宁静、踏实、有机的暖色极简主义，零内卷文化噪音。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react（ISC）、@fontsource/fraunces（OFL）、@fontsource/plus-jakarta-sans（OFL）、@fontsource/jetbrains-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中本地导入 @fontsource/fraunces（600、700）、@fontsource/plus-jakarta-sans（400、500、600、700）和 @fontsource/jetbrains-mono（400、500、600）。
  - 在 src/audio/ambientMixer.ts 中通过 Web Audio API 干净地合成 Soft Rain（带通滤波噪声）、Warm Brown Noise（积分低通噪声）、Gentle Café Hum（温暖谐波房间底噪）和 Completion Bell 铃声。
  - 在 localStorage 中持久化每日习惯、连续记录、日记反思笔记、专注历史分钟数和深色模式偏好。

## 变量
- [BRAND] — 专注应用名称（默认："HearthPace"）。虚构的番茄钟与习惯 PWA 名称
- [USER_NAME] — 用户显示名称（默认："Mina Sato"）。虚构的个人资料问候语
- [DAILY_FOCUS_GOAL] — 每日专注目标（默认："100 min"）。显示在统计和侧边栏上
- [DEFAULT_TASK] — 活动冲刺标签（默认："Deep Architecture Spec"）。初始选中的专注任务
- [CALM_MOTTO] — 微妙的 studio 副标题（默认："Steady focus, gentle daily rituals."）。页眉标语
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/focus-timer-habit-companion-app（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 暖石色（Warm Stone）`#F5F3EF` — 宁静的日光应用画布
- 纸白色（Paper White）`#FFFFFF` — 悬浮的计时器、混音器和习惯卡片
- 深炭色（Deep Charcoal）`#1C1917` — 主显示数字、标题和深色模式背景
- 陶土色（Terracotta）`#D95D39` — 专注模式的环形弧线、主播放 CTA 和连续打卡高亮
- 静谧鼠尾草色（Calm Sage）`#4D7C6F` — 休息计时模式、已完成的习惯勾选和每周图表柱
- 柔和卵石色（Muted Pebble）`#78716C` — 次级标签、时长和反思时间戳

### 字体排印
- 温暖的编辑风格标题：Fraunces（OFL），字重 600/700
- 习惯、日记反思和 UI 控件：Plus Jakarta Sans（OFL），字重 400/500/600/700
- 倒计时时钟、时长和专注总计：JetBrains Mono（OFL），字重 400/500/600

### 布局与动效
- 间距：移动端（<768px）使用舒适的 16px 水平内边距，并在固定的 64px 标签栏上方留出 84px 的间隙。桌面端（>=1024px）渲染全高 236px 左侧栏 + 均衡的 2 列专注与习惯/遥测工作区。
- 圆角：计时器工作室卡片为 20px，习惯和混音器卡片为 14px，模式胶囊和任务标签为 999px。
- 动效：平滑的 SVG 圆形倒计时弧线随着秒数流逝逆时针扫过。
- 动效：每日微习惯上触感十足的鼠尾草色勾选过渡。
- 动效：遵循 prefers-reduced-motion；所有内容立即可见。
- 图像：100% 清晰的代码绘制宁静视觉：动画 SVG 圆形倒计时环、环境声音通道计量表、每周专注分钟 SVG 柱状图、28 天鼠尾草色一致性热力图和 Lucide 图标。

## 页面与区块
### [BRAND] — 专注计时器与习惯伴侣（`index.html`）
1. **自适应移动端底部标签栏与桌面端侧边栏** — 移动端（<768px）：简洁的 [BRAND] 页头，带深色模式开关 + 固定底部 4 标签栏（专注、习惯、日志、统计）。桌面端（>=768px）：全高侧边栏，含 [BRAND] 徽标、[USER_NAME]、4 个导航标签、今日专注进度条（朝向 [DAILY_FOCUS_GOAL]），以及浅色/深色模式切换。
   布局：全视口响应式暖石色 PWA；零虚假手机外框。
2. **专注工作台 — SVG 倒计时环、环境音混音器与快捷习惯** — 左侧面板：模式切换器（25m 专注 / 5m 短休息 / 15m 长休息 + 自定义 +/- 5m 控件）、大型动画 SVG 圆形倒计时环、播放/暂停与重置按钮、任务标签选择器（'[DEFAULT_TASK]'、'Design Critique Prep'、'Inbox Zero'、'Reading Block'），以及快捷单行会话反思输入。右侧面板：内置 Web Audio 环境音混音器（Soft Rain、Warm Brown Noise、Gentle Café Hum 的独立滑块 + 静音开关，外加 Test Bell 按钮）、带连续打卡徽章的每日微习惯勾选列表，以及紧凑的每周专注分钟柱状图，让所有标志性元素在首次加载时即大放异彩。
   布局：桌面端为均衡双面板工作台；移动端为简洁堆叠卡片。
3. **习惯与日志视图** — 习惯标签页显示 6 个每日微习惯（Morning Sunlight Walk、100m Deep Focus、Hydrate 2L、Read 20 Pages、Screen-Free Dinner、Evening Stretch），带完成切换、实时连续打卡计数器和添加自定义习惯输入框。日志标签页显示带时间戳相对时间（'Just now'、'Earlier today'、'Yesterday'）的单行会话反思，附快捷添加表单。
   布局：桌面端为 2 列卡片；移动端为单列。
4. **统计视图 — 每周专注分钟与 28 天热力图** — 顶部 3 张 KPI 卡片（Focus Minutes Today、Weekly Deep Work、Habit Completion Rate）、交互式 7 天 SVG 专注分钟柱状图，以及持久化在 localStorage 中的 28 天 Sage 一致性热力图。
   布局：桌面端为 2 列遥测网格；移动端为堆叠卡片。

## 资源
- 图标：安装 lucide-react（ISC），用于播放/暂停、雨声/波浪声/咖啡声音频混合器、对勾标记、火焰连续记录、月亮/太阳主题以及标签页图标。
- 字体：通过 @fontsource 包自托管 Fraunces、Plus Jakarta Sans 和 JetBrains Mono（OFL）。
- 图像：圆形倒计时环、每周专注柱状图和 28 天热力图完全用 SVG 绘制。音频通过 Web Audio API 合成。

## 不要做的事
- 不要在桌面屏幕上使用假的手机边框或固定的窄移动端容器。
- 不要使用外部 MP3 音频流、CDN 脚本、Google Fonts 或 source maps；始终设置 base: './'。
- 不要使用日历日期；使用相对标签（'Today'、'Yesterday'、'2 days ago'）。
- 不要使用真实的生产力品牌或标志。
- 在 390x844 移动端或 1440x900 桌面端不要出现水平溢出。
- 除可选的 [CREDIT] 外，不要提及 VibeFather 或竞争对手。

---
— Prompt by VibeFather · https://vibefather.ai/t/focus-timer-habit-companion-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
