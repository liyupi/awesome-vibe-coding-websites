> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 流体模拟机构网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND]（[CITY]）构建一个深色编辑风格的创意工作室主页，以全视口的实时 WebGL 流体模拟 hero 作为核心。移动光标或拖动手指会在黑曜石般的黑色背景上搅动电光染料，点击则会触发鲜艳的流体飞溅，巨大的 [BRAND] 字标以镂空形式覆盖在流体之上，如同一层发光的遮罩。当访客滚动浏览 Selected Work（4 张可交互案例卡片，带有代码绘制的动画预览和详情抽屉）、Services、Process Timeline、Awards 和 Contact 时，当前流体调色板会随区块平滑切换。包含一个浮动的 Fluid Settings 芯片（调色板选择器、染料强度滑块、泛光开关和低功耗模式）、离屏时暂停模拟，以及为低功耗设备或 prefers-reduced-motion 提供的缓慢渐变降级方案。

- 受众：品牌总监、产品创始人、创意技术专家，以及寻求标志性 WebGL 展示的交互工作室。
- 目标：在第一帧就交付令人难忘、响应式的实时流体 hero（立即以发光的多彩漩涡作为种子——绝不呈现黑色或空白），然后将好奇心转化为案例探索和项目咨询。
- 基调：自信、动感、富有触感且具有艺术指导性——清晰的工程精度与大胆的字体气度相结合。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：lucide-react（ISC）、@fontsource/syne（OFL-1.1）、@fontsource/space-grotesk（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/syne（700、800）、@fontsource/space-grotesk（400、500、600）和 @fontsource/jetbrains-mono（400、500）。
  - 在 src/fluid/FluidEngine.ts 中编写一个原创的实时 WebGL2/WebGL 欧拉流体模拟引擎，具有 preserveDrawingBuffer: true、float/half-float 或 RGBA8 安全回退、在第一帧同步渲染的带种子的多色初始漩涡、光标/触摸速度搅动、点击径向飞溅、动态调色板插值、泛光通道以及 IntersectionObserver 离屏暂停。
  - 每当 WebGL 不可用、启用低功耗模式或 prefers-reduced-motion 处于活动状态时，渲染一个干净的缓慢移动的 CSS/Canvas 径向渐变回退。
  - 在 src/components/WorkPreviews.tsx 中创建四个原创的动画 Canvas/SVG 生成式案例预览，并将所有工作室文案和项目数据保存在 src/content.ts 中。

## 变量
- [BRAND] — 工作室名称（默认："KINETIK LAB"）。以流体镂空遮罩渲染的短大写工作室字标
- [CITY] — 工作室所在地（默认："Zurich · Tokyo"）。在页眉遥测信息和联系区块中显示的城市对
- [STUDIO_TAGLINE] — 主视觉宣言（默认："Real-time digital craft for kinetic brands."）。简洁的一行工作室定位陈述
- [CONTACT_EMAIL] — 工作室咨询邮箱（默认："hello@kinetiklab.studio"）。在联系区块中显示的虚构工作室邮箱
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/fluid-simulation-agency-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/fluid-simulation-agency-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
