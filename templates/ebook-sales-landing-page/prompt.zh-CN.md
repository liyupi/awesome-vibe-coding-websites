> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 电子书销售落地页（Ebook Sales Landing Page）

请完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个销售单本电子书的单页网站：[TITLE]，作者 [AUTHOR]，一本关于 [TOPIC] 的实用实战指南，定价 [PRICE]。首屏是一个 3D 倾斜的封面样机；其下依次是免费章节领取表单、完整章节目录、内容预览条、作者简介与肖像、读者评价墙、三档定价以及简短 FAQ。单页，index.html；一切都在浏览器中运行，不向任何地方提交数据。

- 受众：先看目录再看评价的读者：专业人士和创作者，他们会在三分钟内判断这本书能否解决自己面临的问题。
- 目标：卖出电子书并收集样章订阅邮箱。访客在十秒内看到封面、承诺和价格；在两分钟内读完三行章节标题并点击购买按钮。
- 语气：温暖、平实、自信，像一则精心制作的版权页。不用炒作词汇，不用“unleash”，每屏最多一个冷幽默。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource-variable/public-sans（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化配置（Setup）：
  - 使用 react-ts 模板通过 npm create vite@latest 脚手架创建项目，然后保留一个真实的 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - Tailwind 3.4 通过 PostCSS 接入，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键添加到 theme.extend.colors（paper、cream、card、ink、softink、amber、amber-deep、amber-mist、rule、moss、covernavy），并设置 fontFamily display ['Fraunces Variable', 'Georgia', 'serif']、sans ['Public Sans Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 8px，并添加 maxWidth { container: '1160px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/fraunces' 和 '@fontsource-variable/public-sans'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（所有字符串、章节、评论、档位、faq 和图片路径，带类型），src/lib/brand.ts（authorSlug = [AUTHOR] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 authorSlug + '.com'），src/lib/storage.ts（用 try/catch 包裹的安全 localStorage get/set，键为 authorSlug + ':sample'）。
  - 状态（State）：src/store/sample.ts 是一个小型外部 store（useSyncExternalStore），保存示例表单的 { email, sent }，并持久化到 localStorage。
  - 组件位于 src/components/：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx、StarRow.tsx（绘制的 SVG 星星）；Hero.tsx（CoverMock.tsx）、SampleStrip.tsx、Chapters.tsx（ChapterRow.tsx）、InsidePeek.tsx、AuthorBio.tsx、Reviews.tsx（ReviewCard.tsx）、Pricing.tsx（TierCard.tsx）、Faq.tsx（FaqRow.tsx）。src/pages/Home.tsx 将它们组合起来。
  - CoverMock：一个处于透视（perspective: 1200px）中的 div，包含一个 preserve-3d 卡片（宽高比 3:4，桌面端宽度约 340px / 移动端 260px）：正面 = cover-art.webp，带有微妙的琥珀色到透明的叠加渐变，排版用 CSS 设置（eyebrow 标签 'A FIELD GUIDE'，标题使用 Fraunces 600，作者在底部）；左边缘 = 14px 的书页块（在 Card 上使用 repeating-linear-gradient 绘制页面线条）；右边缘 = 10px 的 Cover Navy 书脊。地面阴影：一个随倾斜移动的模糊椭圆。指针在 hero 上移动时，卡片在 Y 轴上旋转 -9deg 到 9deg，在 X 轴上旋转 -5deg 到 5deg（线性插值，120ms 退出）。默认静止姿态：rotateY(-16deg) rotateX(4deg)，以便看到书页边缘。prefers-reduced-motion：仅静止姿态，无指针跟踪。
  - 在首次构建之前，使用 curl -L -o 和给定的确切文件名，将资源（Assets）下列出的每张图片下载到 public/images/。构建本身从不获取任何内容。
  - public/favicon.svg 如资源（Assets）下所述。index.html：lang en，<meta name='theme-color' content='#FBF7EF'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[TITLE] — an ebook by [AUTHOR]</title>。
  - 在项目根目录编写 ASSETS.md，如资源（Assets）下所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和四张图片。保持在 8 MB 以下。

## 变量
- [TITLE] — 书名（默认：“The Quiet Craft”）。电子书的标题，采用标题大小写。出现在 H1、封面样机排版、标题标签以及所有提及书名的区块中。为虚构内容，绝非真实书籍。
- [AUTHOR] — 作者姓名（默认：“Maren Holt”）。虚构作者的姓名。用于文字标识、封面底部、作者简介、页脚署名，以及电子邮件 hello@ + 不含连字符的 authorSlug + '.com'。绝非真实作者。
- [TOPIC] — 主题短语（默认：“making work that lasts”）。一个全小写的短语，说明本书所教授的内容。用于改写眉题、H1 副标题、章节承诺和作者简介钩子。保持具体。
- [PRICE] — 电子书价格（默认：“$19”）。单本价格，含货币符号。中间档和团队档由此推导（+$10，×5 并附折扣行）——若更改价格，请重写这些行。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/ebook-sales-landing-page（默认：是；删除此行即可移除）

“页面与区块”下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- Paper `#FBF7EF` — 全站页面背景。
- Cream `#F3EDE0` — 交替区块背景（Sample、Reviews）、chip 填充、悬停填充。
- Card `#FFFFFF` — 卡片、档位卡片、FAQ 行、表单输入框填充。
- Ink `#201B14` — 标题与正文墨色、图标颜色。
- Soft Ink `#5C544A` — 次要文本、eyebrow、说明文字、章节承诺语。
- Amber `#B7521E` — 主色：章节编号、链接、主按钮、高亮档位边框、星标、焦点环。
- Amber Deep `#93411A` — 悬停与按下状态的主色。
- Amber Mist `#F6E4D7` — 选中 chip 填充、“Most popular” chip 背景。
- Rule `#E7DFCF` — 1px 细线、卡片边框、输入框边框。
- Moss `#6B7F4F` — 档位特性与信任行中的对勾。
- Cover Navy `#223042` — 封面书脊、封面正面上的 eyebrow chip、Cream 背景上的深色引文文本。

### 排版（Typography）
- 展示字体：H1、H2、档位名称、章节标题、封面标题、斜体引文 — Fraunces，暖墨色衬线体，带柔和终端：Fraunces（OFL），字重 400/600
- 文本与 UI：正文、按钮、表单、说明文字、章节元数据；页码与价格使用表格数字：Public Sans（OFL），字重 400/500/600

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1160px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 96px、1024px 以下 72px、640px 以下 56px。字号比例：H1 clamp(40px, 5.6vw, 68px) Fraunces 600，行高 1.08；H2 clamp(26px, 3.4vw, 40px) Fraunces 600；章节标题 Fraunces 600 21px；导语 Public Sans 400 17.5px / 1.65 Ink 90%，最大宽度 54ch；正文 15.5px / 1.7；eyebrow Public Sans 600 12px 大写 letter-spacing 0.16em Soft Ink；说明文字 13px Soft Ink。按钮：高度 48px，Public Sans 600 14px；主按钮 Amber 填充配 Paper 文字，次按钮 Card 上 1px Ink 边框。输入框：高度 48px，1px Rule 边框，Card 填充，聚焦时 Amber 边框 + 2px 偏移环。全局焦点：2px Amber 轮廓，3px 偏移。
- 圆角：卡片、按钮、输入框、chip 和照片为 8px。封面 mockup 和档位卡片为 10px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于封面倾斜。书店般的静谧感。
- 动效：显现：包裹在 <Reveal> 中的区块初始 opacity 0、translateY(14px)，在视口 15% 处用 700ms --ease-out 稳定下来（Motion whileInView，once）。同级元素错开 70ms。
- 动效：Hero：封面 mockup 从 rotateY(-40deg) opacity 0 进入静止姿态，历时 900ms；H1 各行上升 12px；信任行最后淡入。
- 动效：封面倾斜：指针悬停在 hero 上时按 Setup 中所述对旋转做 lerp；离开时在 300ms 内弹回静止状态。
- 动效：章节：各行按顺序显现；悬停时琥珀色章节编号上浮 2px，并在标题下方滑入 24px 琥珀色下划线。
- 动效：Sample 表单：提交时以 260ms 交叉淡入将表单替换为对勾行；小字保持可见。
- 动效：Reviews：卡片以 60ms 错开显现；星标在首次进入视口时逐个填充为琥珀色（间隔 40ms）。
- 动效：Pricing：高亮档位悬停时上浮 6px；特性对勾在首次进入视口时绘制出现（SVG stroke）。
- 动效：FAQ：各行以 240ms 高度缓动展开；加号图标旋转 45deg 变为叉号。
- 动效：链接：.link-draw 在悬停和 focus-visible 时用 260ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无倾斜、无入场旋转、无星标或对勾绘制；内容立即处于静止状态；颜色和边框悬停保留。在 index.css 中使用 CSS @media 以及 Motion 的 useReducedMotion。
- 图像：四张照片，全部为本模板以同一种温暖编辑风格制作：奶油色与琥珀色调、柔和日光、纸张质感。封面艺术为抽象层叠纸张几何图形，无可读文字——标题和作者在 mockup 上用 CSS 排版，以便跟随变量。作者肖像为 AI 生成的虚构人物（一位 40 多岁的女性坐在写作桌前，自然工作照，不似任何真实个人）。任何照片中均无 logo、无可读文字、无品牌标记；其他照片不含人物。每张照片 object-fit cover，8px 圆角；Paper 上的照片带 1px Rule 轮廓。图标：仅 lucide-react，描边宽度 1.75。favicon 和星标行使用 SVG 绘制。

## 页面与区块
### 电子书销售页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[TITLE] = The Quiet Craft，[AUTHOR] = Maren Holt，[TOPIC] = making work that lasts，[PRICE] = $19）。将每个字符串、章节、评论、档位、FAQ 行和图片路径放入 src/content.ts 并从中渲染。若任何变量不同，请重写 H1 副标题、全部八个章节行、作者简介、评论和档位名称，使其针对该书具体且可信，同时保持相同的结构和数量（8 章、6 条评论、3 个档位、4 行 FAQ）。章节（编号 · 标题 · 承诺 · 页数）：01 'Slow is smooth' 'why haste is the expensive option' 18；02 'The two lists' 'separating what matters from what merely lists' 24；03 'Small proof' 'shipping tiny, undeniable things' 26；04 'The maintenance hour' 'keeping what you built from eating you' 22；05 'Letters you didn't send' 'writing as a thinking tool' 20；06 'Quiet noes' 'declining without drama' 19；07 'Rooms that think' 'making meetings earn their keep' 24；08 'The long middle' 'staying good for a decade' 31。评论（引语 · 姓名 · 角色）：'I re-read chapter three before every launch week.' 'Dana Whitfield' 'Product lead'；'The maintenance hour alone was worth the price.' 'Sam Ortiz' 'Freelance developer'；'Calm, specific, and mercifully short.' 'Priya Raghavan' 'Design director'；'It reads like a letter from someone a few years ahead of you.' 'Tomas Lind' 'Startup founder'；'My whole team got the bundle. The workbook is the quiet hero.' 'Aisha Bello' 'Engineering manager'；'No filler. I checked.' 'Greg Fontaine' 'Newsletter writer'。档位：'Ebook' [PRICE] — 'PDF + EPUB'、'Free updates for the edition'、'Read in an afternoon'；'Ebook + Workbook' [PRICE] + $10 — 包含 Ebook 全部内容外加 '58-page workbook'、'The twelve-week checklist'，标签 'MOST POPULAR'（琥珀色边框，上浮）；'Team pack' [PRICE] ×5 −20% 行 'five copies, one invoice' — 包含 Ebook 全部内容外加 'Five copies'、'A short reading-guide PDF'、'One invoice'。FAQ：'What format is the book?' 'PDF and EPUB, both DRM-free and yours to keep.'；'Do I get updates?' 'Yes — every revision of this edition lands in your inbox, free.'；'What if it isn't for me?' 'Write back within 30 days and it's refunded, no form to fill.'；'Can I buy for my team?' 'The team pack covers five copies on one invoice; write for more.'
   布局：不适用
   动效：不适用
2. **页眉** — 左侧：字标 '[AUTHOR]'（Fraunces 600 20px），下方为 'Author — [TITLE]'（10px 大写 Soft Ink）。右侧导航（Public Sans 500 14px）：'Chapters' → #chapters、'Author' → #author、'Reviews' → #reviews，以及一个紧凑的主按钮 'Get the book' → #pricing。低于 720px：仅显示字标 + 按钮。
   布局：顶部粘性，高度 68px，Paper 95% 带背景模糊，Rule 底部边框。
3. **首屏** — 两栏。左侧（6 列）：眉题 'A FIELD GUIDE TO [TOPIC]'；H1 '[TITLE].'，最后一个词为琥珀色；导语 'A practical book about [TOPIC] — 184 pages, eight chapters, zero filler. Written by [AUTHOR], read in one honest afternoon.'；CTA 行：主按钮 'Get the book — [PRICE]' → #pricing，次按钮 'Read chapter one free' → #sample；信任行（Moss 勾选）：'PDF + EPUB'、'Free edition updates'、'30-day refunds'。右侧（5 列，偏移 1）：CoverMock，下方说明文字 'Paperback sold out twice; electrons remain.'。
   布局：Paper 背景，顶部内边距 112px。封面在其列中居中，最大高度 520px。
4. **样章条** — 区块 id='sample'，位于 Cream 上。左侧（5 列）：眉题 'FREE CHAPTER'；H2 'Chapter one, on the house.'；正文 'The whole of Slow is smooth, straight to your inbox. One email, then silence until you ask for more.' 右侧（6 列，偏移 1）：内联表单 — 邮箱输入框（占位符 'you@work.com'）+ 主按钮 'Send chapter one' + 小字 'Sample store: this demo saves your address in your browser only and sends nothing.' 提交时：勾选行 'Done — chapter one is in your browser's memory (this demo stores nothing anywhere else).'
   布局：Card 上的双栏卡片，Rule 边框，8px 圆角，40px 内边距；低于 900px 时堆叠。
5. **章节** — 区块 id='chapters'。眉题 'THE TABLE OF CONTENTS'；H2 'Eight chapters, no padding.' 八个 ChapterRow：大号琥珀色数字（Fraunces 600 28px），标题（Fraunces 600 21px）下方为承诺（Public Sans 15px Soft Ink），右对齐页数（Public Sans 500 14px 表格数字 Soft Ink）。行间细线。
   布局：Paper 背景；行为 48px 高基线网格；数字列固定 72px；高于 1100px 时为双栏章节布局（4+4），低于则为单栏。
6. **内页预览** — 三张引语卡片，样式如打开的书页：Card 填充，顶部琥珀色 3px 线条，Fraunces 斜体 400 22px 引语 — 'Haste is a tax. You always pay it, usually twice.'；'The list that matters fits on an index card. The other list is a wishlist wearing a suit.'；'Maintained things whisper. Neglected things eventually scream.' 每张带章节标签（'Ch. 01'、'Ch. 02'、'Ch. 05'）。中间卡片后方，desk-flatlay.webp 作为小幅倾斜照片（10deg，1px Rule 轮廓）。
   布局：Cream 背景；3 列 24px 间距（低于 800px 为 1 列）；中间卡片上浮 12px。
7. **作者** — 区块 id='author'。左侧（4 列）：author-portrait.webp（3:4），1px Rule 轮廓，说明文字 'Maren, mid-edit (photo: fictional, like the coffee)'。右侧（7 列，偏移 1）：眉题 'THE AUTHOR'；H2 'Written by a human, edited by several.'；两段文字：'[AUTHOR] has spent fourteen years [TOPIC] — first badly, then less badly, lately with something like a system. She writes the newsletter 'Small Proof', read weekly by 40,000 makers (sample figure).' 和 'This book is the newsletter's patient older sibling: slower, longer, and it doesn't ask you to forward it to a friend.'；资质勾选（Moss）：'14 years in the workshop'、'Newsletter · 40k readers (sample)'、'Two earlier ebooks, both refundable'。链接标签 'Read the newsletter'（href '#'，title 'Demo link'）。
   布局：Paper 背景；桌面端肖像列粘性；低于 900px 时堆叠。
8. **评论** — 区块 id='reviews'，位于 Cream 上。眉题 'EARLY READERS'；H2 'Short sentences from real-seeming people.' 六个 ReviewCard：StarRow（5 颗琥珀色 SVG 星），引语（Public Sans 400 16px / 1.6），姓名（Public Sans 600 14px）下方角色（13px Soft Ink）。
   布局：3 列 24px 间距（低于 1024px 为 2 列，低于 640px 为 1 列）；卡片位于 Card 上，带 Rule 边框和 4px 琥珀色顶部线条。
9. **定价** — 区块 id='pricing'。眉题 'GET THE BOOK'；H2 'One book, three honest prices.' 三个 TierCard 如清单所述：中间一个带琥珀色 1.5px 边框、琥珀色 Mist 'MOST POPULAR' 标签，并高出 8px。功能行使用 Moss 勾选图标。每个档位的主按钮：'Get the ebook'、'Get ebook + workbook'、'Get the team pack' — 每个都是指向 #sample 的链接，网格下方有诚实的小字：'Sample store — nothing charges in this demo; the buttons park you at the free chapter.'
   布局：Paper 背景；3 列 24px 间距（低于 860px 为 1 列）；中间卡片视觉上占主导。
10. **FAQ 与页脚** — FAQ：四个 FaqRow（加号图标旋转为叉号）位于 Card 行上。页脚位于 Cover Navy（骨色文字 #F4EFE6）：左侧 '[AUTHOR]' 字标 + 'hello@' + emailDomain；右侧两行 '© [AUTHOR]. All rights reserved.' 和 'Built with a VibeFather template' 链接至 https://vibefather.ai。
    布局：FAQ 位于 Paper 上；页脚高 72px，两部分，顶部细线 Rule-dark 边框。

## 资源

- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每个文件下载到 public/images/：https://media.vibefather.ai/assets/a7138294-e27d-4429-9c87-9dd6b36b58a5/cover-art.webp → public/images/cover-art.webp（CoverMock 封面；alt 'Abstract layered-paper cover artwork in navy and amber'）；https://media.vibefather.ai/assets/a7138294-e27d-4429-9c87-9dd6b36b58a5/author-portrait.webp → public/images/author-portrait.webp（作者简介；alt 'Portrait of the author at her writing desk'）；https://media.vibefather.ai/assets/a7138294-e27d-4429-9c87-9dd6b36b58a5/desk-flatlay.webp → public/images/desk-flatlay.webp（内页预览背景；alt 'Manuscript pages, pencil and coffee on linen'）；https://media.vibefather.ai/assets/a7138294-e27d-4429-9c87-9dd6b36b58a5/reader-scene.webp → public/images/reader-scene.webp（桌面端试读条侧图；alt 'An e-reader resting on a chair-side table'）。共四个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一张表格：路径、来源 URL、作者、许可证——每张照片一行（来源 'media.vibefather.ai, made for this template'，作者 'VibeFather'，许可证 'Distributed with the template'），另加 @fontsource-variable/fraunces 和 @fontsource-variable/public-sans（OFL-1.1）以及 lucide-react（ISC）的行。注明作者肖像是 AI 生成的虚构人物，与任何真实个人无关。
- 图标：仅使用 lucide-react：ArrowRight、Check、BookOpen、FileDown、Mail、Plus、Users。描边宽度 1.75，16–24px，颜色继承。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 圆角方块填充 #B7521E，一个 Card（#FFFFFF）打开的书本图形（两个页面矩形，中间有书脊）。不使用其他标志：作者姓名始终以文字排版呈现。
- 字体：安装 @fontsource-variable/fraunces 和 @fontsource-variable/public-sans，并按“设置”中所列在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片：以代码绘制：封面样机的书脊和书页块（CSS 渐变）、StarRow（五个内联 SVG 星形）、favicon。除四张照片外不使用其他位图。

## 禁止事项（Don'ts）
- 无后端、无表单提交、无 API 请求、无支付：示例表单仅在浏览器中保存（localStorage），细则中已说明；购买按钮链接到 #sample，并配有诚实的演示文案。
- 每个内部链接都指向文件名或锚点（./index.html、#chapters）——绝不指向裸目录；只有一个页面。
- 不使用真实书籍、作者、出版商、畅销书榜单或零售商标识（不得出现 NYT/Amazon/Kindle/Apple Books 徽章或标志）；标题、作者、评论、读者数量和资质均为虚构的示例内容。
- 封面图不含可读文字；封面上的标题和作者名通过 CSS 排版，以便跟随变量变化。
- 作者肖像为 AI 生成的虚构人物，不相似于任何真实个人；其他照片不含人物；任何照片中均无可读文字或标志。
- 全部自托管：字体通过 Fontsource，图标使用 npm 包或内联 SVG，图片下载至 public/images/。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/，单一命令 npm run build，输出在 dist/ 下且小于 8 MB。
- 页面上任何位置均不出现日期或年份；网站从不显示当天日期。
- 除页脚署名链接外，网站内绝不提及 VibeFather；所有文案均为虚构的美式英语。
- 遵循 prefers-reduced-motion：无倾斜、无入场旋转、无绘制动画；颜色/边框悬停效果保留。
- 网站必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零错误；表单、FAQ 和按钮仅用键盘即可操作，并具有可见的焦点环。
- 保持无炒作语气：不使用“unleash”，不使用“game-changer”；每个字符串都存放在 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/ebook-sales-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
