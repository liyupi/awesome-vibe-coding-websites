> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 液态玻璃（Liquid Glass）产品页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] [PRODUCT] 打造的单页预购网站，这是一款小批量制造的 [PRODUCT_KIND]。页面是一个平静、温暖的米白色舞台，每个 UI 表面都是液态玻璃（liquid glass）：模糊、略带折射的面板，带有明亮边缘，漂浮在大型产品照片之上。它以计数加载器开场，全出血展示产品，并配有跟随光标的放大镜，用四个固定滚动章节讲述产品故事，然后涵盖材料、产品在真实房间中的样子、完整规格表、三个版本及价格、带实时总价的预购面板、FAQ 和页脚。它必须感觉像一家真实的小型硬件工作室在接收真实预订：具体的数字、虚构的地址、虚构的媒体引述和精确的规格。

- 受众：为家居购买设计导向硬件、并愿意预订首批产品的人：他们关心材料、产品在房间中的样子和精确规格，并且会在支付定金前阅读 FAQ。
- 目标：让访客以可退还的 $50 定金预订一台。各处的主要 CTA：Preorder / Reserve（滚动到 #preorder）。次要：Hear it in a room（#sound）和规格表（#specs）。
- 语气：安静、精确且有触感，像制造商的目录。短句、真实数字，不用炒作词汇（不用 revolutionary、game-changing、next-level、unleash）。每个标题中有一处斜体强调短语。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/newsreader（OFL-1.1）、@fontsource-variable/geist（OFL-1.1）、@fontsource-variable/geist-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化：
  - 使用 npm create vite@latest 并选择 react-ts 模板进行脚手架搭建。单页面，index.html。各区块通过哈希锚点访问：#top、#story、#design、#sound、#specs、#editions、#preorder、#faq。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0 }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4（tailwindcss + postcss + autoprefixer）。在 tailwind.config.ts 中将设计（Design）下的所有颜色添加到 theme.extend.colors（paper、paper-deep、ink、graphite、muted、line），并将 fontFamily 配置为 display ['Newsreader Variable', 'Georgia', 'serif']、sans ['Geist Variable', 'system-ui', 'sans-serif']、mono ['Geist Mono Variable', 'ui-monospace', 'monospace']。
  - 在 src/main.tsx 中导入 '@fontsource-variable/newsreader/opsz.css'、'@fontsource-variable/newsreader/opsz-italic.css'、'@fontsource-variable/geist' 和 '@fontsource-variable/geist-mono'。
  - 文件布局：src/content.ts（所有文案、价格、规格、FAQ、图片路径和 alt 文本）、src/styles/glass.css（.glass 配方、边缘、高光和回退）、src/index.css（Tailwind 层、加载器和脉冲关键帧、减少动态效果覆盖）、src/lib/liquidMap.ts（位移贴图生成器）、src/lib/pointer.ts（一个共享的指针存储）、src/state/order.ts（通过一个微型 React context 管理所选版本、饰面和数量）。
  - 组件：Glass.tsx、LiquidFilter.tsx、Loader.tsx、Nav.tsx、Hero.tsx、Lens.tsx、Press.tsx、Story.tsx、Materials.tsx、Room.tsx、Specs.tsx、Elevation.tsx（SVG 绘图）、Editions.tsx、Preorder.tsx、Faq.tsx、Footer.tsx、Cursor.tsx、Magnetic.tsx。
  - 在首次构建之前，使用 curl -L -o 将资源（Assets）下列出的每张图片下载到 public/images/ 中，并使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 如头部（Head）部分所述。<title>[BRAND] [PRODUCT] — [PRODUCT_KIND]</title>（将 kind 的首字母大写），lang en，theme-color #f2f0eb。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和九张图片。保持在 8 MB 以下。

## 变量
- [BRAND] — 品牌名称（默认：“Nacre”）。工作室名称。导航栏、加载器和页脚中的字标，标题和页脚版权（默认文案中为“[BRAND] Sound Studio”）。
- [PRODUCT] — 产品名称（默认：“Tide”）。简短产品名，始终显示在品牌之后（“Nacre Tide”），出现在首屏眉题、预购标题和版本名称中。
- [PRODUCT_KIND] — 产品是什么（默认：“hand-blown glass room speaker”）。小写名词短语。驱动每个章节、规格、FAQ 回答和图片。选择一个具有可见材质故事的实体物件。
- [PRICE] — 起售价（默认：“$649”）。基础（Clear）版本的价格。默认文案中其他两个版本和总价均相对于它来写；当此值变化时需重新计算。
- [SHIP_WINDOW] — 发货窗口（默认：“Ships in early spring”）。短句，显示在首屏标签、版本和预购面板中。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/liquid-glass-product-page（默认：是；删除此行即可移除）

页面与章节下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按章节作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/liquid-glass-product-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
