> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 音乐音频可视化器

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建一个响应式 Three.js 3D 音乐音频可视化器，标题为 [BRAND]，内置合成的 Web Audio 演示曲目（[TRACK_TITLE]，点击后开始播放）以及可选的实时麦克风输入（具备优雅的权限处理）。使用真实的 AnalyserNode FFT 节拍与起音检测渲染五个各具特色的音频响应式 Three.js 场景：(1) 霓虹隧道（Neon Tunnel），(2) 线框地形（Wireframe Terrain），(3) 粒子星系（Particle Galaxy），(4) 脉冲圆环（Pulsing Rings），(5) 液态铬球（Liquid Chrome Sphere）。提供随 drop 自动切换场景（Auto Scene-Switch）、频段混音器（Frequency Band Mixer，低音、中音、高音增益滑块 + 实时电平条）、四种可切换配色主题（默认 [DEFAULT_THEME]，Midnight #0B0820、Magenta #FF2E88、Electric Cyan #29E3FF）、全屏切换、一键 PNG 截图下载，以及键盘快捷键表模态框（`Space` 播放/暂停，`1–5` 场景，`A` 自动 Drop，`T` 主题，`S` 截图，`F` 全屏，`?` 快捷键）。在任何声音播放之前，从第一帧起立即渲染一个繁茂、发光的静态 3D 霓虹隧道场景，并带有清晰的 Play Demo Track 按钮。

- 受众：音乐人、VJ、创意编程者，以及寻找浏览器原生视觉表演台的电子音乐爱好者。
- 目标：在第一帧就呈现即时的明亮 3D 视觉锚点，然后以 60fps 对合成音频或实时麦克风音频做出爆发式且流畅的响应。
- 基调：电光午夜舞台视觉般的精准——极简的半透明 HUD 界面元素，让霓虹 3D 几何体统领整个视口。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：three（MIT）、@types/three（MIT）、lucide-react（ISC）、@fontsource/space-grotesk（OFL-1.1）、@fontsource/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/space-grotesk（600、700）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（500、600）。
  - 在 src/audio/audioEngine.ts 中构建程序化 Web Audio API 124 BPM 电子合成器音序器、可选麦克风流连接器、FFT 低音/中音/高音分析器，以及节拍/起音检测器。
  - 在 src/sim/visualizerEngine.ts 中构建全部 5 个响应式 Three.js 3D 场景（Neon Tunnel、Wireframe Terrain、Particle Galaxy、Pulsing Rings、Liquid Chrome Sphere），使用 preserveDrawingBuffer: true（用于首帧即美观和清晰的 PNG 截图捕获）并限制 DPR（移动端 1.5 / 桌面端 2）。
  - 将场景元数据、4 个颜色主题调色板、键盘快捷键和品牌变量保留在 src/data/visualizerData.ts 中。

## 变量
- [BRAND] — 可视化器品牌名称（默认：“SynapseWave”）。音频可视化器面板标题
- [TRACK_TITLE] — 演示曲目标题（默认：“Midnight Pulse · 124 BPM Synth”）。内置程序化 Web Audio 合成曲目的标签
- [DEFAULT_THEME] — 默认配色主题（默认：“Midnight Neon”）。初始调色板名称
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/music-audio-visualizer（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值编写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 午夜舞台（Midnight Stage）`#0B0820` — 深紫午夜色 3D 舞台背景
- 电光洋红（Electric Magenta）`#FF2E88` — 主霓虹光环、低频闪光和 Play CTA
- 激光青（Laser Cyan）`#29E3FF` — 次级线框、中/高频微光和有源指示器
- 霜玻璃（Frost Glass）`#161233` — 半透明舞台 HUD 胶囊和混音器抽屉
- 纯粉笔白（Pure Chalk）`#F8FAFC` — 清晰高对比度排版和快捷键徽章

### 排版
- 品牌字标与场景标题：Space Grotesk（OFL），字重 600/700
- 控件与快捷键说明：Inter（OFL），字重 400/500/600
- BPM、频段增益与键帽：JetBrains Mono（OFL），字重 500/600

### 布局与动效
- 间距：全出血 100dvh Three.js 舞台，配紧凑的半透明顶部遥测/工具条、声音开始前居中的下方 Play 胶囊、可折叠的频段混音器卡片，以及清晰的 5 场景底部停靠栏，适配 1440×900 和 390×844 且零溢出。
- 圆角：14px 磨砂午夜 HUD 卡片；全胶囊场景切换器和 Play CTA。
- 动效：华丽的发光霓虹隧道在音频播放前于第一帧同步渲染。
- 动效：实时 60fps 几何变形、隧道推进、星系径向扩张和液态铬位移，由实时 Bass/Mid/High FFT 频段驱动。
- 动效：启用 Auto-Drop 时，在节奏能量下降点自动切换场景。
- 动效：遵循 prefers-reduced-motion，柔化相机摇摆和脉冲幅度，同时保持音频表和场景切换活跃。
- 图像：100% 程序化 Three.js 霓虹 3D 几何、发光粒子和金属着色器——零外部媒体文件。

## 页面与区块
### [BRAND] · 响应式 3D 音乐音频可视化器（`#/visualizer`）
1. **全出血 3D 响应式舞台与舞台控制面板** — 全视口 Three.js 舞台同步开启于一个以午夜（Midnight）（#0B0820）、洋红（Magenta）（#FF2E88）和青色（Cyan）（#29E3FF）呈现的发光霓虹隧道（Neon Tunnel）框架上。顶部半透明栏显示 [BRAND]、当前曲目/麦克风状态（`[TRACK_TITLE]`）、实时 3 段低音/中音/高音迷你电平表、节拍脉冲 LED、Drop 自动切换开关、主题切换器（`Midnight Neon`、`Solar Flare`、`Emerald Cyber`、`Liquid Gold`）、频率混音器开关、PNG 截图捕获按钮、全屏切换，以及键盘快捷键表（`?`）按钮。播放开始前，一个清晰的中央 Play Demo Track + Use Microphone 启动胶囊按钮邀请即时音频交互，且不会遮挡 3D 场景。底部浮动停靠栏可在全部 5 个场景之间即时切换（`1 Neon Tunnel`、`2 Wireframe Terrain`、`3 Particle Galaxy`、`4 Pulsing Rings`、`5 Liquid Chrome`），并带有细微的署名链接。
   布局：全视口 `h-dvh` 舞台，在 1440×900 桌面端和 390×844 移动端上零滚动条且零水平溢出。
   动效：60fps 节拍响应式 Three.js 视觉效果，与 Web Audio FFT 同步。

## 资产


## 不要
- 绝不加载外部 MP3/音频文件、外部 3D 模型或 CDN 字体。
- 绝不在播放开始前显示空白黑屏——在第一帧就渲染出繁茂、发光的 3D 霓虹隧道（Neon Tunnel）。
- 绝不在没有用户点击的情况下自动播放音频（遵守浏览器自动播放策略）。
- 绝不在 HUD 的任何位置打印日历日期或 4 位年份。
- 绝不允许在 390×844 移动端出现水平溢出，或用 clip-path 裁剪元素。

---
— Prompt by VibeFather · https://vibefather.ai/t/music-audio-visualizer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
