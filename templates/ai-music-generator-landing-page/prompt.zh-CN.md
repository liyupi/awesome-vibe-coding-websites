> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# AI 音乐生成器落地页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个虚构的 AI 音乐概念，描述为面向 [AUDIENCE] 的 [PRODUCT]。它有一个可用的静态音频试听演示，而不是实时生成后端。

- 受众：[AUDIENCE]，他们希望在编辑之前探索一个音乐方向。
- 目标：试听四首原创内置曲目，更改流派/情绪，检查真正的分析器并比较积分方案，而不声称发生了云端 AI 工作。
- 语气：懂音乐且精确；在每个演示边界附近标注其控制项。

## 技术栈
- 框架：Vite + React + TypeScript
- 样式：原生 CSS（Vanilla CSS）
- 库：vite（MIT）、react（MIT）、react-dom（MIT）、typescript（Apache-2.0）、@fontsource/space-grotesk（OFL-1.1）、@fontsource/inter（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - 将 Vite base 设为 ./，build.sourcemap 设为 false。使用单一的 src/content.ts 存放所有可编辑内容，并在变量变更时完整重写其数据。
  - 在 src/styles.css 中实现响应式组件和 CSS 令牌（tokens）。通过所列的 Fontsource 包打包字体；仅导入实际使用的字重。
  - 提供语义化的原生控件以及键盘/触摸替代方案；实现焦点管理的对话框和仅本地校验的表单反馈。
  - 仅使用 Node 内置 fs 实现 scripts/make-demo-audio.mjs：以 22050Hz 合成原创 PCM16 单声道 WAV 文件，四段 16 秒无缝循环，合计低于 3MB。npm run build 必须执行 node scripts/make-demo-audio.mjs && vite build。不得下载、使用包、采样、受版权保护的旋律或外部音乐。
  - 音频生成规范：确定性种子噪声、正弦/三角波振荡器、带 95→42Hz 指数音高扫频和衰减包络的底鼓、类高通噪声踩镲、软削波贝斯、原创 8 音符琶音模式。120 BPM/每 16 秒循环八个 4 拍小节；每条音轨使用不同的音阶、鼓型和音色。应用 10ms 边界淡入淡出，峰值归一化 <=.75，避免削波。保存为 public/audio/prism-pulse.wav、soft-current.wav、paper-steps.wav 和 low-orbit.wav。在 ASSETS.md 中编写来源/归属说明。
  - 每个挂载的播放器创建一个 HTMLAudioElement、一个 AudioContext 和一个 MediaElementAudioSourceNode。一次性连接 source→AnalyserNode→GainNode→destination；fftSize=1024，smoothingTimeConstant=.8。仅在用户手势后恢复/播放；可见地捕获错误。使用该节点的时域和频域数据，而非随机动画。暂停/隐藏时暂停 requestAnimationFrame，卸载时清理。

## 变量
- [BRAND] — 品牌（默认：“Prismtone”）。针对该值重写所有相关标题、条目、标签、alt 和确认信息。
- [AUDIENCE] — 受众（默认：“independent video makers”）。针对该值重写所有相关标题、条目、标签、alt 和确认信息。
- [PRODUCT] — 产品（默认：“a music sketchpad”）。针对该值重写所有相关标题、条目、标签、alt 和确认信息。
- [STARTER_PRICE] — 入门价格（默认：“12”）。针对该值重写所有相关标题、条目、标签、alt 和确认信息。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/ai-music-generator-landing-page（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/ai-music-generator-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
