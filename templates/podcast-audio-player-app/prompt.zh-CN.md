> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 播客与音频播放器应用

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个浓郁的午夜梅子色（midnight-plum）响应式移动优先播客与音频收听 PWA（[BRAND]），面向 [LISTENER_NAME]，主打 [FEATURED_SHOW] 以及真实的 Web Audio 合成演示播放。移动端（<768px）采用 4 标签底部栏（Listen Now、Library、Discover、Queue）+ 常驻底部迷你播放器 + 可展开的 Now Playing 面板；桌面端则适配为左侧边栏 + 内容画布 + 常驻 Up Next 队列面板。不使用虚假手机外框。

- 受众：播客听众、音频叙事创作者，以及正在打造跨手机与桌面端的网页收听伴侣的独立媒体团队。
- 目标：提供真正可交互的音频播放、章节跳转、队列重排和节目发现，且零外部音频文件、零后端依赖。
- 基调：温暖、夜色感、触感十足、工作室精心打磨的编辑式音频。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react（ISC）、@fontsource/space-grotesk（OFL）、@fontsource/plus-jakarta-sans（OFL）、@fontsource/jetbrains-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中本地导入 @fontsource/space-grotesk（500、600、700）、@fontsource/plus-jakarta-sans（400、500、600、700）和 @fontsource/jetbrains-mono（400、500、600）。
  - 将全部 6 个风格统一的播客封面 WebP 艺术作品下载到 public/images/，并通过 ./images/... 引用。
  - 在 src/audio/synthEngine.ts 中实现一个简洁的 Web Audio API 合成器引擎，产生柔和的环境和弦 + 有节奏的录音室脉冲包络，响应播放/暂停、拖动、播放速度（0.75x-2.0x）和音量，并在点击时优雅地恢复 AudioContext。
  - 将订阅、单集书签、队列顺序、播放速度和睡眠定时器偏好持久化到 localStorage。

## 变量
- [BRAND] — 播客应用名称（默认："LoomCast"）。虚构的播客 PWA 名称
- [LISTENER_NAME] — 听众显示名称（默认："Nora Quinn"）。虚构的听众个人资料问候语
- [FEATURED_SHOW] — 精选主推播客（默认："Signal & Craft"）。在 Listen Now 中突出展示的旗舰节目
- [DEFAULT_SPEED] — 默认播放速度（默认："1.0x"）。初始播放速度标签
- [QUEUE_TAGLINE] — 应用副标题（默认："Independent voices on design, cities & sound"）。页眉中的简短编辑式标语
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/podcast-audio-player-app（默认：是；删除此行即可移除）

页面与区块（Pages & Sections）下的文案是按默认值编写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/podcast-audio-player-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
