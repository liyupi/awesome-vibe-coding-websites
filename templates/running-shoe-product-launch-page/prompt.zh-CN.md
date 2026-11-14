> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 跑鞋产品发布页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，推出 [PRODUCT]，这是一款原创虚构的日常公路跑鞋，具有方圆形鞋头和双拱分段式鞋底。这是一个产品概念演示，规格仅为示意。

- 受众：比较合脚度、构造和实用细节的日常跑者。
- 目标：查看真实的原创 3D 鞋款角度，选择颜色和尺码，使用透明的尺码指南并预览本地购物袋；所有商务和发售时间均明确仅为演示。
- 语气：充满活力、直接且具体，不包含医疗声明、运动员代言或虚构的实验室结果。

## 技术栈
- 框架：Vite + React + TypeScript
- 样式：原生 CSS
- 库：vite（MIT）、react（MIT）、react-dom（MIT）、typescript（Apache-2.0）、@fontsource/barlow-condensed（OFL-1.1）、@fontsource/inter（OFL-1.1）、three（MIT）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 Vite base 设为 ./，并将 build.sourcemap 设为 false。使用单个 src/content.ts 存放所有可编辑内容，并为其数据完全重写以适配变量变更。
  - 在 src/styles.css 中实现响应式组件和 CSS 令牌。通过列出的 Fontsource 包打包字体；仅导入实际使用的字重。
  - 提供语义化原生控件及键盘/触摸替代方案；实现焦点管理的对话框和仅本地验证的表单反馈。
  - 使用 three.js 配合原创 BufferGeometry/Shape/ExtrudeGeometry 和本地程序化 CanvasTexture；不使用下载的鞋模型、标志、远程 HDRI、受版权保护的纹理或品牌轮廓。配置抗锯齿、透明画布、ACESFilmicToneMapping、sRGB 输出，并将 DPR 上限设为 <=1.5。使用本地中性半球光/平行光和柔和的程序化接触阴影平面；不使用外部环境。
  - 原创模型构建：长度轴 x 从 -1.45 后跟到 +1.6 鞋头；宽方头，0.24 圆角半径，前掌宽度 .65/后跟 .46，鞋头上翘 .13。从横截面创建放样网格鞋面，而非缩放胶囊体：后跟处可见脚踝开口，低鞋面，不对称六个椭圆形侧通风口；生成微妙的编织程序化纹理。中底为无奶油色的 volt #E4FF1A，中足下方有两个大型原创足弓凹槽；外底由 8 个独立的圆角长圆形黑色胎面块组成。添加凸起的宽鞋带桥，带 5 段短管状鞋带段和厚后跟环。绝对不使用 swooping 标志、商标条纹、真实品牌徽章或复制的商业鞋型轮廓。保持模型高级且物理连贯，三角形数量低于 25k。
  - 将模型组置于原点，提供四个角度按钮：Side（rotation y=0）、Front（y=-1.35）、Heel（y=1.65）、Top（x=.8,y=.25），并支持中性重置。在 180vh 产品展示区滚动进度将 y 从 -.35 变为 2.8，x 从 .06 变为 .22。根几何体保持完全一致；颜色仅更改材质。指针拖拽和按钮也可用；拖拽时暂停滚动控制，并通过清晰标记的 Follow scroll 开关恢复。WebGL 不可用时提供静态摄影回退。减少动态效果使用离散即时角度，绝不强制滚动。

## 变量
- [BRAND] — 品牌（默认："Tervo Run"）。针对该值重写所有相关标题、条目、标签、alt 和确认信息。
- [PRODUCT] — 产品（默认："Relay Arc"）。针对该值重写所有相关标题、条目、标签、alt 和确认信息。
- [WEIGHT_G] — 重量 G（默认："242"）。针对该值重写所有相关标题、条目、标签、alt 和确认信息。
- [PRICE] — 价格（默认："148"）。针对该值重写所有相关标题、条目、标签、alt 和确认信息。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/running-shoe-product-launch-page（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/running-shoe-product-launch-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
