> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 霓虹悬浮车城市跑酷（Neon Hovercar City Runner）

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一款设定在虚构城市 [CITY] 中的单页夜间峡谷街机游戏。玩家驾驶 [VEHICLE]，一辆由代码构建、锁定在单一悬浮高度的楔形悬浮车，沿着潮湿反光的车道向上行驶。收集 [CARGO]，穿过涌流拱门，躲避无人机，并在框架计量表归零前抵达 [DESTINATION]。[DISPATCHER] 是起始卡片上标注的调度员。首个画面即为实时峡谷场景，悬浮车已置身其中。

- 受众：独立开发者和开发者，他们想要一款完成的静态 Three.js 游戏，具备键盘和触控操作、可读的角落 HUD，以及无需重绘赛道即可更改的文字。
- 目标：交付一次约一分钟的可重玩流程：从峡谷出发，弯折车道，推进节奏，消耗涌流，收集货物，在无人机和墙壁刮擦中存活，然后落在结果卡片上——抵达泊位或框架耗尽。当变量更改时，赛道、网格、调色板和命中数值保持不变。
- 基调：夜班、混凝土、冷峻。简短美式英语。失败是机器失去其框架，而非受伤。无血腥、无真实品牌、无取自其他游戏的口号。

## 技术栈
- 框架：Vite 6 + TypeScript 5
- 样式：原生 CSS（Vanilla CSS）
- 库：three（MIT）、lucide（ISC）、@fontsource/rajdhani（OFL-1.1）、@fontsource-variable/outfit（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - 使用 Vite 的原生 TypeScript 模板搭建脚手架。脚本：dev=vite，build=tsc && vite build，preview=vite preview。不要添加 React、物理引擎、游戏引擎或后处理 npm 包。
  - 在 vite.config 中将 base 设为 './'，build.outDir 设为 dist，build.emptyOutDir 设为 true，build.sourcemap 设为 false。在 tsconfig 中将 strict 设为 true，target 设为 ES2022，noEmit 设为 true，使 tsc 仅做类型检查。
  - 仅将 three、lucide、@fontsource/rajdhani 和 @fontsource-variable/outfit 安装为 dependencies，另将 vite 和 typescript 安装为 devDependencies。从 three 导入 WebGLRenderer、FogExp2 和 PMREMGenerator。从 three/examples/jsm/postprocessing/EffectComposer.js、RenderPass.js 和 UnrealBloomPass.js 导入 EffectComposer、RenderPass 和 UnrealBloomPass。这些示例模块随 three 以 MIT 许可证分发。
  - 从 @fontsource/rajdhani 导入 Rajdhani 500、600 和 700，从 @fontsource-variable/outfit/wght.css 导入 Outfit Variable。使用字体族名 Rajdhani 和 Outfit Variable。不要从 CDN 加载任何字体。
  - 仅从已安装的 lucide 包中复制 pause、play、rotate-ccw、volume-2、volume-x、chevron-left、chevron-right、circle-help 和 x 的 SVG 路径数据到 src/icons.ts。以 stroke 1.75 的内联 SVG 渲染它们。不要添加 lucide-react。
  - 使用单个 index.html，包含全视口 canvas 和语义化 HTML 覆盖层。无路由，无第二个页面。将文档标题从 content.ts 设置为 BRAND 后跟一个破折号（em dash）和 CITY。
  - 将代码拆分为 src/content.ts、src/track.ts、src/canyon.ts、src/skiff.ts、src/sim.ts、src/hud.ts、src/minimap.ts、src/audio.ts、src/icons.ts、src/main.ts 和 src/styles.css。每个可见字符串都放在 content.ts 中。每个赛道编号都放在 track.ts 中。其他模块导入这些文件，不得硬编码名称或位置。
  - 当 BRAND、CITY、VEHICLE、CARGO、DESTINATION 或 DISPATCHER 变更时，重写起始卡片、飞行员笔记、标牌、结果句子和侧翼贴花，确保不残留任何默认名称。保持句子数量、控制映射、网格、调色板和赛道不变。
  - 从 BRAND 的 slug 派生 localStorage 键：小写，空格转为连字符，去除其他标点，然后加上前缀 lane-best-haul:。仅存储最佳 haul 整数。不要将 Lumenlane 硬编码到键中。
  - 桌面层级将设备像素比上限设为 1.75，手机层级设为 1.25。当文档隐藏时暂停模拟并显示暂停卡片。当文档再次可见时不要自动恢复。
  - 完成前，在 1440×900 和 390×844 下播放默认运行：启动、转弯、推进节奏、消耗 surge、拾取水晶、通过拱门、擦墙、被无人机击中、到达泊位、在第二次运行中清空框架、暂停，以及切换减少动态效果。控制台必须保持为空。

## 变量
- [BRAND] — 游戏名称（默认：“Lumenlane”）。一个自创词，作为开始卡片的大标题展示。绝不使用真实公司或现有游戏的名称。
- [CITY] — 峡谷城市（默认：“Amberwharf”）。一个自创地名，用于眉题、第一块标牌和标题中。
- [VEHICLE] — 悬浮车名称（默认：“Kite Skiff”）。两到三个自创词，少于 18 个字符，喷涂在车身侧面并用于句子中。网格模型不变。
- [CARGO] — 拾取物名称（默认：“relay crystals”）。一个小写复数名词短语，由两个词组成，用于主标题和开始卡片正文中。
- [DESTINATION] — 终点名称（默认：“Roof Berth”）。两个自创词，指赛道尽头的停机坪。
- [DISPATCHER] — 调度员（默认：“Mara Quill”）。一个自创的名和姓。不是真实人物或公众人物。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/neon-hovercar-city-runner（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/neon-hovercar-city-runner?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
