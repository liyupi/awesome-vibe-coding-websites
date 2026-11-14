> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 海盐品牌网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 在虚构的 [COAST] 打造一个原创的、有触感的、海盐店面。首屏是可互动的水面；滚动后展现黏土与成簇的盐。随后是插画风格的收获故事、三款摄影风格的盐产品、一个沼泽地参观请求，以及一个可用的、仅限本地的购物车。

- 受众：家庭厨师、小型餐厅采购者，以及在意质感、产地和朴素手工过程的访客。
- 目标：让访客感受到材质，了解三个收获步骤，选择实用的盐，并尝试一个清晰标注的演示订单或参观请求。
- 语气：安静、具体、不慌不忙的美式英语。温暖的手工艺感，不夸大其词。

## 技术栈
- 框架：Vite + TypeScript
- 样式：Vanilla CSS
- 库：three（MIT）、@fontsource/fraunces（OFL-1.1）、@fontsource/manrope（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 Vite，base 设为 ./，build.sourcemap 设为 false；在本地安装所有依赖并添加构建脚本。
  - 创建一个 src/content.ts，包含所有变量、产品数据、导航、表单和图片路径。变量变化时重写特定文案；B 不得保留 A 的品牌或海岸。
  - 使用 Three.js 加上你自己的 GLSL/CanvasTexture 水景场景、requestAnimationFrame 和原生滚动进度。不使用其他 WebGL 引擎。场景必须立即出现，并在加载时提供可见的降级方案。

## 变量
- [BRAND] — 生产商（默认：“Morrow Salt”）。一个虚构的小型盐生产商；在水面中使用其字标。
- [COAST] — 虚构海岸（默认：“Alder Reach”）。虚构地点；不要暗示真实生产商。
- [FOUNDERS] — 采盐人（默认：“Nell & Rowan”）。两位虚构的采盐人。
- [COLLECTION] — 三款盐（默认：“Tide Flake; Hearth Smoked; Marsh Herb”）。三款各不相同的盐；将风味、烹饪搭配和产品名称一并改写。
- [ACCENT] — 强调色（默认：“#788575”）。柔和的植物或海岸十六进制颜色。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/sea-salt-brand-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/sea-salt-brand-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
