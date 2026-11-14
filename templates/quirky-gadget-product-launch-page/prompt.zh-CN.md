> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 古怪小玩意产品发布页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 及其原创口袋小装置 [PRODUCT] 构建一个单页英文发布网站。默认内容描述的是一个手动微小胜利庆祝装置，具有原创的圆角三角形外壳、带棱纹的前拨盘、薄荷色轮毂和黄色点击片。赋予它鲜明的孟菲斯（Memphis）风格身份：主红色 #FF3B30、向日葵黄 #FFD60A、钴蓝 #2F5BFF、薄荷色 #A8F0CF、白色、黑色描边和粗壮的手绘几何图形。首屏是真正可拖拽的 3D 内容，页面下方还有三张风格统一的棚拍产品照片作为支撑。该网站是一个虚构的概念演示，具有诚实的仅限本地的预订行为。

- 受众：[AUDIENCE]；用户应在几秒内理解 [RITUAL]，无需教程即可获得令人满意的小互动。
- 目标：让访客旋转产品、试用其两个触觉控件、理解其低风险用途、选择一种饰面，并保存或移除明确仅限本地的演示预订单。当变量变化时，保持相同的结构、精确的色彩身份、几何形状和资产。
- 语气：温暖、就事论事的荒诞感：关于一个小物件的冷面小笑话，绝不使用企业生产力式的宣称。短句、具体的触觉动词，以及对本地演示功能的坦诚说明。所有文案均为美式英语。

## 技术栈
- 框架：Vite 6 + React 19 + TypeScript 5
- 样式：原生 CSS（Vanilla CSS）
- 库：vite（MIT）、react 和 react-dom（MIT）、typescript（Apache-2.0）、three@0.170.0（MIT）、@fontsource/fredoka（OFL-1.1）、@fontsource/dm-sans（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 React 配合 TypeScript，一个 index.html，Vite base 设为 ./；npm run build 先运行 tsc -b，再运行 vite build。保持 sourcemap false，并为每个打包资源使用相对路径。
  - 在本地安装并打包 Three.js；不使用 CDN、远程模块加载器、外部模型、纹理、HDRI、3D 资产或第三方 API。用 Three.js 图元和圆角三角形 Shape/ExtrudeGeometry 构建原始产品。
  - 通过 Fontsource CSS 导入自托管 Fredoka 字重 500/600 和 DM Sans 字重 400/500/600/700；尽可能使用仅拉丁字符的字体文件。将调色板、间距、阴影、媒体查询和关键帧放在 src/styles.css 中。
  - 将每个变量值、标题、功能、结果、饰面、规格行、FAQ 答案、价格和图像描述符都放在一个 src/content.ts 文件中。React 组件消费此文件；不要将产品特定内容散落在 JSX 中。
  - 为此处提供的默认值编写各区块文案。当任何变量发生变化时，重写所有依赖字符串，包括状态结果、模型说明、按钮、技术玩笑、FAQ 答案、预订摘要、页脚和 alt 文本，以适配 [PRODUCT]、[RITUAL] 和 [AUDIENCE]。保留共享的物理几何和饰面，使提供的照片保持准确。
  - 对于低风险的决策助手 [RITUAL]，使用提供的备用标题；将 wins 替换为五个可编辑选项，默认值为 Make something / Take a walk / Call a friend / Try a new route / Rest for a bit。Hero 标签选择下一个选项并报告 One possible next step: 后跟该选项。功能卡片变为 Set five options / Roll a maybe / Take the next step。故事标题：A small nudge for the gloriously undecided。故事文案说明该转盘为无害选择提供俏皮建议，而非建议或预测。规格标题：A highly unofficial tie-breaker。幽默行变为 Choice capacity — Five perfectly harmless maybes；Decision authority — Yours, entirely；Maximum certainty — Comfortably imaginary。预购标题：Leave a little room for maybe。在决策助手取值下，绝不保留仅用于庆祝的文案。
  - 创建一个代码绘制的三角形 favicon 和一个纯文档标题 [PRODUCT] by [BRAND]。无 SEO 元数据任务或隐藏构建指令。
  - 在 ./index.html 内使用原生滚动锚点，以及有意义的 id：hero、what-it-does、specs、colors、questions、preorder。无裸目录链接、缺失路由或外部结账。
  - 为选定的饰面、模型转盘步骤和本地预订使用一个共享状态。localStorage 访问必须受保护；存储失败时回退到内存并提供准确反馈。不通过网络发送任何内容。
  - 在根目录创建 ASSETS.md，列出所有提供的图像及其确切 URL、目标路径、生成署名和再分发说明，以及 Fontsource 字体和代码编写的 SVG/Three.js 作品。保持 dist 低于 20 MB，不发布 source map 或 src 目录。

## 变量
- [BRAND] — 品牌（默认：“Small Racket”）。一个虚构的创客名称；字标是排版生成的，绝不是复制来的标志。
- [PRODUCT] — 口袋产品（默认：“Pocket Hooray”）。一款原创手动小装置的名称。保留共用的圆角三角形外壳、罗纹旋钮、薄荷色轮毂和黄色拨片，以便所提供的照片保持准确。
- [HEADLINE] — 主视觉标题（默认：“Small win. Big little fuss.”）。一个简短的两部分标题；在第一句后断行。
- [RITUAL] — 该装置的用途（默认：“A palm-sized manual celebration gadget for noticing everyday wins. Roll the ribbed dial, give the yellow tab a click, and carry the feeling with you.”）。用途与三步仪式。当此项变化时，重写所有相关功能文案、操作标签、FAQ、幽默规格、示例结果和预购摘要。
- [AUDIENCE] — 适用人群（默认：“habit builders, desk wanderers, and anyone who finally sent that email”）。这款低风险口袋小装置的具体受众。
- [PRICE] — 概念单价（默认：“$24”）。一个虚构的展示单价，以美元计。它作为概念演示定价出现，绝不是真实收费。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/quirky-gadget-product-launch-page（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/quirky-gadget-product-launch-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
