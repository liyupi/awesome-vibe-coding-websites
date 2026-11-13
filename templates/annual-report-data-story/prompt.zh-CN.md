> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 年度报告数据故事

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一份为 [BRAND] 制作的单页年度报告，该品牌经营 [BUSINESS]，以滚动数据故事的形式呈现，共分七个章节：封面、年度数字、增长、收入构成、办公地点、来自 [LEADER] 的一封信，以及 PDF 下载。每个章节都传达一个清晰的观点。每一个数字、人物和地点均为虚构，并标注为示例数据。

- 受众：客户、合作伙伴、员工和捐赠者，他们会在笔记本电脑或手机上花三分钟阅读一份年度报告，且并非金融专业人士。
- 目标：让读者读完后记住本年度四个头条数字及其变动原因，然后下载 PDF。
- 语气：平实、精确、略带冷静，像一位优秀的商业编辑。句子简短，使用真实单位，没有企业套话。读起来绝不像是受监管的申报文件。

## 技术栈
- 框架：Vite 5 + TypeScript（无 UI 框架）
- 样式：Tailwind CSS 3.4
- 库：gsap 3 及 ScrollTrigger（GSAP 标准版（免费，允许商业使用））、pdf-lib（devDependency，仅构建脚本使用）（MIT）、vite 5（MIT）、typescript 5（Apache-2.0）、tailwindcss 3.4、postcss、autoprefixer（MIT）、@fontsource-variable/bodoni-moda（OFL-1.1）、@fontsource-variable/newsreader（OFL-1.1）、@fontsource/ibm-plex-sans（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 文件：index.html、src/main.ts、src/style.css、src/content.json、src/charts/line.ts、src/charts/bars.ts、src/charts/donut.ts、src/charts/map.ts、src/countup.ts、src/rail.ts、scripts/make-pdf.mjs、public/favicon.svg、public/images/、ASSETS.md。
  - package.json 脚本：dev 为 'vite'；build 为 'node scripts/make-pdf.mjs && tsc --noEmit && vite build'。设置 'type': 'module'。
  - vite.config.ts：base './'，build.sourcemap false，build.outDir 'dist'。tsconfig.json：strict true，resolveJsonModule true。
  - tailwind.config.js：content ['./index.html', './src/**/*.ts']；theme.extend.colors 中 paper、paper-deep、ink、slate、stone、hairline、accent 使用设计中的十六进制色值；theme.extend.fontFamily 中 display 为 'Bodoni Moda Variable'，read 为 'Newsreader Variable'，sans 为 'IBM Plex Sans'，每个都带一个衬线或无衬线回退字体。
  - src/main.ts 按以下顺序导入：@fontsource-variable/bodoni-moda/opsz.css、@fontsource-variable/newsreader/opsz.css、@fontsource-variable/newsreader/opsz-italic.css、@fontsource/ibm-plex-sans/400.css、/500.css、/600.css，然后导入 ./style.css。在 html 上设置 font-optical-sizing: auto。
  - 所有文案和每个数字都存放在 src/content.json 中，顶层键为 meta、cover、numbers、growth、quarters、mix、offices、letter、download、footer。main.ts 用它填充 DOM，所有图表都从它读取数据。每当重写时，数字之间必须保持一致。
  - 从 TypeScript 引用的图片使用 import.meta.env.BASE_URL + 'images/hero.webp'。PDF 链接为 ./annual-report.pdf。
  - scripts/make-pdf.mjs 读取 src/content.json，并使用 pdf-lib 写入 public/annual-report.pdf：3 个 US Letter 页面，使用 StandardFonts.TimesRoman 和 Helvetica。第 1 页：Paper 色背景，底部一个 612 x 180 pt 的 Cobalt 矩形，[BRAND]、'Annual Report [REPORT_YEAR]'、'Sample data'。第 2 页：四个头条数字，然后是绘制为矩形的 8 个季度柱。第 3 页：信件文本，使用 widthOfTextAtSize 手动换行。标准字体仅编码 WinAnsi，因此在绘制前将减号 U+2212 替换为连字符。文件保持在 100 KB 以下。
  - 使用 gsap.registerPlugin(ScrollTrigger) 注册一次。将每个动画放在 gsap.matchMedia() 内，条件为 '(prefers-reduced-motion: no-preference)'。初始隐藏状态仅由该块内的 JavaScript 设置，因此 HTML 和 CSS 的默认值始终是最终状态。在 document.fonts.ready 之后和 window load 之后调用 ScrollTrigger.refresh()。
  - Pulse 关键帧和滚动提示关键帧位于 src/style.css 中，在 @media (prefers-reduced-motion: no-preference) 内。html 在同一查询下获得 scroll-behavior: smooth。在 1024px 以下，每个章节都有 scroll-margin-top: 56px。

## 变量
- [BRAND] — 公司或组织名称（默认：“Fennmark”）。一个虚构的公司、非营利组织或基金。
- [BUSINESS] — 它做什么，用简短短语描述（默认：“refrigerated freight and cold storage for food and medicine”）。会改写各章节的陈述、收入分部、里程碑和信件内容。
- [REPORT_YEAR] — 报告年份（默认：“2025”）。四位数字。以巨大数字置于封面，并用作图表的最后一年。
- [LEADER] — 信件撰写人，姓名和头衔（默认：“Maren Aldous, Chief Executive”）。一个虚构人物。使用与肖像相符的名字，或替换为你自己的肖像。
- [HERO_IMAGE] — 封面照片文件（默认：“hero-cold-yard.webp”）。使用资产列表中的 hero-cold-yard.webp 或 hero-water-tower.webp，或你自己的宽幅黄昏或黎明照片，下三分之一为暗色。保存到 public/images/hero.webp。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/annual-report-data-story（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按章节作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/annual-report-data-story?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
