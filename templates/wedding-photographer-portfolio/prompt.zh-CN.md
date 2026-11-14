> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 婚礼摄影师作品集

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的四页作品集网站。[BRAND] 是一位婚礼与肖像摄影师，自 [FOUNDED] 年起在 [REGION] 工作，每年按设计只承接 [YEARLY] 场拍摄。网站必须读起来像一本印刷的胶片作品集：一个近乎黑色的电影感首页，包含摄影师的自述；一个收录四场完整婚礼的画廊索引；每场婚礼一个故事页（通过查询参数打开，无参数时打开第一场婚礼）；以及一个信息页，包含三档套餐、客户评价和一套咨询流程，其日期检查会对照一份虚构的已预订清单给出答复。页面：index.html、gallery.html、story.html、info.html。一个支持键盘导航的全屏灯箱贯穿各故事页。一切都在浏览器中运行；不会向任何地方提交数据。

- 受众：26–38 岁的订婚情侣，午夜时分在笔记本电脑上浏览作品集，此外还有被转发链接的新娘母亲。他们见过五十个网格模板；他们希望感受到作品是稀缺的（只有寥寥几场婚礼）、数字是诚实的（小时数、帧数、价格），并且摄影师回复邮件像个真人。
- 目标：预约咨询通话。访客应在十秒内感受到画廊具有电影感、摄影师很挑剔；在两分钟内应到达套餐部分并查询自己的日期。
- 语气：安静、具体、带一点揶揄，像一位凌晨 1 点还在修片的摄影师。简短的陈述句，具体的数字，没有 SEO 废话，没有“capturing your special day”。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/italiana（OFL-1.1）、@fontsource-variable/manrope（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。项目根目录下放置四个真实的 HTML 页面：index.html（入口 src/main-home.tsx）、gallery.html（src/main-gallery.tsx）、story.html（src/main-story.tsx）和 info.html（src/main-info.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0，rollupOptions { input { index: resolve(__dirname, 'index.html')，gallery: resolve(__dirname, 'gallery.html')，story: resolve(__dirname, 'story.html')，info: resolve(__dirname, 'info.html') } } }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4（tailwindcss + postcss + autoprefixer），content ['./index.html', './gallery.html', './story.html', './info.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色以 kebab-case 键（ink-black、charcoal、graphite、bone、milk、smoke、brass、brass-deep、fern）添加到 theme.extend.colors，并设置 fontFamily display ['Italiana', 'Georgia', 'serif']、sans ['Manrope Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 4px——胶片边角近乎直角——并添加 maxWidth { container: '1240px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/italiana/400.css' 和 '@fontsource-variable/manrope'；从所有四个入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（每个字符串、数字、婚礼、画框、说明文字、套餐、客户评价、已预订日期、FAQ 答案和图片路径，均带类型），src/lib/brand.ts（brandSlug = [BRAND] 转为小写并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 brandSlug + '.com'，mailto = 'hello@' + emailDomain），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键前缀为 brandSlug + ':'），src/lib/wedding.ts（从 location.search 读取故事查询 'story.html?w=<slug>'，返回 slug 匹配的婚礼，或第一个婚礼——绝不返回未找到）。
  - 状态：src/store/inquiry.ts 是一个小型外部 store（useSyncExternalStore），保存咨询草稿 { names, email, date, venue, note } 和已提交标志，持久化到 localStorage 键 brandSlug + ':inquiry'。灯箱是本地组件状态，提升到 src/store/lightbox.ts（在故事页面间共享），包含 { open, weddingSlug, index }。
  - src/components/ 中的组件：Header.tsx、Footer.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx（小型大写字母配细线）、Lightbox.tsx、WeddingCard.tsx、Frame.tsx（带黑边边框和说明文字的图片）、Marquee.tsx；首页：Hero.tsx、Statement.tsx、Featured.tsx、KindWords.tsx、Approach.tsx；画廊：GalleryIndex.tsx；故事：StoryHero.tsx、FrameSequence.tsx、StoryMeta.tsx、NextStory.tsx；信息：Packages.tsx（TierCard.tsx）、Testimonials.tsx、Inquiry.tsx（DateCheck.tsx、BriefForm.tsx、SentCard.tsx）、Faq.tsx。src/pages/Home.tsx、Gallery.tsx、Story.tsx、Info.tsx 组合它们；每个页面都渲染 Header 和 Footer。
  - 在首次构建之前，使用 curl -L -o 和给定的确切文件名，将 Assets 下列出的每张图片下载到 public/images/ 中。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 下所述。所有四个 HTML 文件：lang en，<meta name='theme-color' content='#141311'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>。标题：index.html '<title>[BRAND] — Wedding photography in [REGION]</title>'，gallery.html '<title>Full weddings — [BRAND]</title>'，story.html '<title>Stories — [BRAND]</title>'，info.html '<title>Packages & inquiry — [BRAND]</title>'。不带查询打开 story.html 时渲染第一个婚礼，标题也对应它。
  - 在项目根目录写入 ASSETS.md，如 Assets 下所述。
  - dist/ 包含四个 HTML 文件、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 12 MB 以下。

## 变量
- [BRAND] — 摄影师姓名（默认："Nora Vale"）。摄影师姓名在网站上的呈现方式（'Nora Vale'，字标 'NORA VALE'）。用于字标、标题、邮箱（hello@ + 不含连字符的 brandSlug + .com）以及 localStorage 键名。始终为虚构人物；绝不使用真实摄影师或工作室。
- [REGION] — 地区（默认："the Hudson Valley"）。摄影师的工作地区，小写冠词风格（'the Hudson Valley'、'the Pacific Northwest'）。驱动首屏文案、故事中的地名、旅行文案和 FAQ。真实地区可以使用；故事中的场地和城镇保持虚构。
- [FOUNDED] — 开始拍摄年份（默认："2014"）。第一场付费婚礼的四位数年份。驱动宣言文案、页脚 'since [FOUNDED]' 和 About 眉题。
- [YEARLY] — 每年婚礼数量（默认："18 weddings a year"）。稀缺性文案（'18 weddings a year, deliberately'）。驱动宣言、套餐说明和咨询文案。数字保持在 10–24 之间。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/wedding-photographer-portfolio（默认：是；删除此行即可移除）

Pages & Sections 下的文案按默认值撰写。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键名，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/wedding-photographer-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
