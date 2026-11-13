> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 3D 斗兽场历史探索器（3D Colosseum History Explorer）

请完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个面向 [AUDIENCE] 的原创可探索展览，题为 [EDITION]。使用完全由代码构建的 Three.js 斗兽场（Colosseum）模型，支持环绕/缩放、从建造到风化的状态拖动条、四个解说热点、一个有意义的剖切视图以及一次引导式相机游览。

- 受众：[AUDIENCE]、博物馆参观者，以及任何通过探索来学习空间概念的人。
- 目标：通过直接操作，让立面、座席、竞技场和服务空间之间的关系变得易于理解。
- 语气：精确、好奇、易读的美式英语；区分观察与解读，并标注数字为近似值。

## 技术栈（Stack）
- 框架（Framework）：Vite + TypeScript
- 样式（Styling）：原生 CSS（Vanilla CSS）
- 库（Libraries）：three（MIT）、@fontsource/newsreader（OFL-1.1）、@fontsource/dm-sans（OFL-1.1）
- 构建（Build）：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 配置（Setup）：
  - 在本地安装依赖。配置 Vite base ./、build.sourcemap false 以及 npm run build 脚本。
  - 创建 src/content.ts，用于存放变量、状态说明、热点文案、UI 和来源链接。当变量变化时重写版本/受众语气，但不改变建筑主题。
  - 使用已安装包中的 Three.js OrbitControls 以及原创的程序化网格、CanvasTextures 和着色器；不使用现成的建筑资产。立即渲染出一个稳定的高质量模型。

## 变量
- [BRAND] — 学习工作室（默认：“Stonefield Atlas”）
- [EDITION] — 展览标题（默认：“An amphitheater, unbuilt”）
- [AUDIENCE] — 访客（默认：“Curious minds and architecture students”）
- [ACCENT] — 界面强调色（默认：“#B58A50”）
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/3d-colosseum-history-explorer（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/3d-colosseum-history-explorer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
