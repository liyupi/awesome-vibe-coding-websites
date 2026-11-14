> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 创作者媒体资料页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一份精致的单页媒体资料包，[BRAND] 是一位在 [CREATOR_NICHE] 领域工作的独立创作者。面向 [AUDIENCE] 撰写，以 [MEDIA_KIT_TAGLINE] 作为主视觉信息，并将创作者设定在 [LOCATION]。页面必须结合个人介绍、受众分析示例、内容渠道契合度、虚构的合作案例、清晰的示例报价，以及仅限客户使用的赞助咨询草稿。

- 受众：需要向赞助商展示自己作品的独立创作者和自由职业者，以及正在评估潜在合作的市场营销人员、创始人和小品牌团队。
- 目标：帮助潜在赞助商了解创作者的受众，查看可用的内容形式和合作证据，比较套餐方案，并将他们的项目详情转化为可复制的咨询内容，同时不暗示任何信息已被发送。
- 语气：温暖、自信、具体且具有编辑感；在商业上实用而不显得企业化，并对每一项示例性统计数据、成果、价格和仅限本地交互保持透明。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：React + ReactDOM（MIT）、Tailwind CSS（MIT）、lucide-react（ISC）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 vite.config.ts 配置为 base './' 和 build.sourcemap false，以实现单个 index.html 入口和自包含的静态构建。
  - 使用精确的 Design 颜色和字体系列扩展 Tailwind 主题；将图表过渡、显现关键帧、focus-visible 环、展开状态和减少动态效果覆盖放入 src/index.css。
  - 将每个标题、段落、示例指标、图表数据、渠道、案例研究、套餐、表单标签、图片路径、替代文本和链接都保留在 src/content.ts 中，按区块作为键。提供的文案用于默认变量值；每当值发生变化时，一致地重写每个依赖的专有名词、统计上下文、活动、套餐描述和图片替代文本，并移除所有仅适用于默认值的引用。
  - 使用本地 React 组件和内联 SVG 构建所有图表；不使用任何图表包。为每个图表提供可见的标签和值、简洁的屏幕阅读器摘要，以及在工具提示可用时可键盘聚焦的数据点。
  - 通过在 src/main.tsx 中导入指定的 Fontsource 包来自托管 Newsreader、Inter 和 IBM Plex Mono；绝不使用字体 CDN。
  - 使用 Design 颜色创建一个原创的四瓣火花 SVG favicon，并仅设置一个包含 [BRAND] 和 'Media Kit' 的纯文档标题；除此之外不添加 SEO 元数据。

## 变量
- [BRAND] — 创作者姓名或公开身份（默认：“Nora Vale”）。一个虚构的创作者身份，用于字标、个人简介、页脚、文档标题和咨询文案中。
- [CREATOR_NICHE] — 创作者主题与内容领域（默认：“small-space gardening and mindful city living”）。一个简洁的领域短语，用于频道描述、受众兴趣和合作案例。
- [AUDIENCE] — 主要内容受众（默认：“urban renters, first-time gardeners, and slow-living enthusiasts”）。创作者服务的社群；当此项变化时，需重写受众标签和合作契合度描述。
- [LOCATION] — 创作者所在地（默认：“Portland, Oregon”）。一个简短的城市与地区标签，而非街道地址。
- [MEDIA_KIT_TAGLINE] — 媒体资料包主视觉标语（默认：“Make room for a greener everyday.”）。一句表达创作者观点的原创短句。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/creator-media-kit-page（默认：是；删除此行即可移除）

页面与区块下的文案均按默认值撰写。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 画布（Canvas）`#F3F0E8` — 主暖色页面背景与充裕留白
- 纸张（Paper）`#FFFCF6` — 图表、表单、费率卡与案例研究表面
- 墨色（Ink）`#1E241F` — 主文本、深色按钮、页脚与强图表描边
- 柔和墨色（Muted Ink）`#65675F` — 次要文案与元数据，保持可读对比度
- 柿子色（Persimmon）`#E86A47` — 主图形强调色、图表高亮、选中标记与深色文本按钮填充
- 柔和柿子色（Soft Persimmon）`#F4C9B9` — 次要图表区域、标签与低调高亮表面
- 苔藓色（Moss）`#68775E` — 次要数据系列、植物细节与柔和装饰描边

### 字体排印（Typography）
- 展示标题、活动标题与大号引文：Newsreader Variable（OFL），字重 400/500/600
- 正文、导航、按钮与表单控件：Inter Variable（OFL），字重 400/500/600/700
- 统计数据、图表标签、套餐价格与眉题：IBM Plex Mono（OFL），字重 400/500

### 布局与动效（Layout & motion）
- 间距：使用 4px 基础单位，内容最大宽度 1320px，移动端 20px、桌面端 48px 边距，桌面端 12 列网格、24px 间隙。区块内边距移动端 72px、桌面端 112px，紧凑统计带间距 32px。卡片内边距 24–32px。阅读文案保持每行 62 字符，绝不让大号指标造成水平溢出。
- 圆角：小标签使用 2px，按钮与输入框使用 10px，图表与案例卡片使用 20px，首屏照片与大号特色面板使用 28px。仅紧凑的类筛选标签使用 999px。边框为 1px Ink、14% 不透明度；阴影仅限于首屏与咨询面板上微妙的 0 12px 36px Ink、7% 不透明度。
- 动效：使用 IntersectionObserver 让主要区块一次性显现：不透明度 0 到 1，translateY 18px 到 0，持续 450ms，同级元素之间错开 70ms，不劫持滚动。
- 动效：当受众区块首次进入时，数值在 800ms 内从零计数到最终显示值，水平条从左侧缩放展开，折线图以 stroke-dashoffset 绘制；屏幕阅读器立即获得最终值。
- 动效：按钮、活动披露、图表点与导航链接在 160–220ms 内响应，使用颜色、下划线、箭头位移 4px 或 chevron 旋转，而非弹跳。
- 动效：选择费率套餐会更新咨询选择，并且仅在明确点击后才滚动到表单；目标字段获得可见的焦点指示，且不会意外提交表单。
- 动效：在 prefers-reduced-motion 下，立即显示最终数字与完整图表，移除显现与平滑滚动，并保持每个披露、选择、工具提示与表单状态完全可用。
- 图像：严格使用 Assets 中列出的两张协调的生成照片：一张宽敞的环境工作肖像作为首屏锚点，以及同一虚构创作者在工作台前双手的特写，用于合作区块。人物是虚构的，不与任何真实个人相似，仅从背后或仅以双手呈现，因此无法辨认面部。两张图像共享一个有人居住感的家庭工作室、苔藓色亚麻、羊皮纸色墙面、柿子色陶瓷、绿叶植物、柔和的晨间窗光与克制的编辑胶片颗粒。所有三张合作封面均在本地绘制为原创 SVG 构图，由叶子、弧线、网格、圆形与抽象包装形状组成，使用 Canvas、Persimmon、Soft Persimmon、Moss 与 Ink；虚构的合作方名称是唯一的文字。不要添加任何其他照片、人物、客户作品、外部标志或可识别的产品设计。

## 页面与区块
### 创作者媒体资料包与赞助咨询（`index.html`）
1. **共享页眉与页脚** — 页眉包含原有的四瓣火花标志、[BRAND]、文本链接 Audience（#audience）、Partnerships（#partnerships）和 Rates（#rates），以及一个链接到 #inquiry 的深色 'Start a partnership' 按钮。移动端 Menu 按钮会打开一个可访问的展开面板，包含相同的锚点链接，并在选择或按 Escape 后关闭。页脚重复 [BRAND] 和 [MEDIA_KIT_TAGLINE]、一行文字 'Independent creator · [LOCATION]'、相同的锚点导航，以及可选的 [CREDIT] 链接。
   布局：顶部粘性页眉位于 Canvas 上，不透明度 92%，带背景模糊和细底边线，桌面端 72px、移动端 64px。桌面导航位于右侧；移动导航在页眉下方展开，不覆盖页面。页脚为 Ink 色带配 Canvas 文字，桌面端双栏布局，移动端内容堆叠。
   动效：锚点链接悬停时从左侧出现下划线。移动端展开面板在 180ms 内淡入并下移 6px；页眉无动画缩放或滚动劫持。
2. **创作者介绍主视觉** — 眉标：'CREATOR MEDIA KIT · [LOCATION]'。H1：'[MEDIA_KIT_TAGLINE]'。辅助文案：'I make [CREATOR_NICHE] content for [AUDIENCE]—and build thoughtful partnerships that feel native to the story.' 主 CTA 'Plan a partnership' 链接到 #inquiry；次 CTA 'Explore the audience' 链接到 #audience。添加一行小号等宽注释：'Independent creator · Video, short-form & newsletters'。使用 hero-creator.webp 及其指定的 alt 文本。图片上有一个紧凑的浮动说明文字：'Stories made at home, shared widely.'
   布局：桌面端主视觉为 12 栏构图，文案位于第 1–6 栏，照片位于第 7–12 栏。H1 为 72–84px，行高 0.95，辅助文案每行最多 54 个字符，CTA 排成一行。照片采用 4:3 裁切，占据主视觉宽度的至少 44%；其说明文字位于左下边缘内侧。移动端依次堆叠眉标、48px 的 H1、文案、CTA，然后是完整照片，图片在前 844px 内开始出现，标题不被裁切且无水平溢出。
   动效：主视觉文案和照片使用标准的一次性显现。主按钮箭头悬停时平移 4px；照片保持静止，无视差或自动播放。
3. **示意性触达快照** — 在数字上方放置可见标签：'ILLUSTRATIVE AUDIENCE SNAPSHOT · SAMPLE DATA'。显示四个数字：'182K' 全渠道社区合计、'1.2M' 平均每月内容观看量、'4.8%' 平均互动率、'63%' 会收藏或分享的受众。辅助注释：'A realistic example profile for layout demonstration; replace with verified creator figures before publishing.'
   布局：全宽 Ink 色带分为四个等宽栏，带细的 Canvas/20 垂直分隔线。数字使用 IBM Plex Mono，36–44px，下方为简短的 Canvas 标签。在 390px 时使用两行两列网格，数值不小、标签不被裁切；样本数据注释横跨色带下方全宽。
   动效：色带进入视口时每个数值计数到最终数字，尊重减少动态效果设置。不循环计数，也不在虚假实时值之间做动画。
4. **受众分析** — 锚点 id='audience'。眉标：'WHO IS LISTENING'。H2：'A community that grows together.' 引言：'Practical ideas bring people in; a shared pace keeps them coming back. Every figure below is sample data.' 构建三个协调的图表。年龄分布水平条形图：18–24 = 21%，25–34 = 46%，35–44 = 24%，45+ = 9%。六个近期发布周期 P1–P6 的内容观看量：0.72M、0.81M、0.88M、0.96M、1.08M、1.20M，渲染为折线和柔和面积图，每个点带圆点和精确值提示框。受众兴趣为三个堆叠水平分段并带图例：Practical how-tos 44%、Small-space inspiration 31%、Sustainable routines 25%。在图表旁附上简洁要点：'The core audience is 25–34, with the strongest response to useful, saveable tutorials.'
   布局：区块标题跨第 1–6 栏，引言跨第 8–12 栏。下方年龄图表占据第 1–5 栏的 Paper 面板，较大的观看量图表跨第 6–12 栏。兴趣条和要点位于下方一条全宽 Paper 条带中，条形占 8 栏，要点占 4 栏。移动端按阅读顺序堆叠所有面板；每个轴标签、百分比和提示框都保持在其面板内，图表最小高度 220px。
   动效：使用 Design 中的图表入场动画。悬停或用键盘聚焦条形或数据点时，在不会导致布局偏移的提示框中显示其精确值；无自动轮播或循环动画。
5. **渠道与内容形式** — 眉标：'WHERE THE STORY LIVES'。H2：'One voice, three useful formats.' 引言：'Each channel has a distinct job, so a partnership can feel considered rather than repeated.' 展示三张渠道卡片，使用通用 Lucide 图标和示例指标：长视频 — '96K community · Weekly 8–12 minute videos' — 最适合 'Detailed tutorials, integrations, and searchable evergreen stories.'；短视频 — '68K community · Three posts each week' — 最适合 'Quick transformations, product rituals, and campaign teasers.'；每周通讯 — '18K readers · 46% sample open rate' — 最适合 'Personal notes, curated resources, and direct response.' 在网格下方添加小号页脚：'Channel figures are illustrative sample data.'
   布局：三张等宽 Paper 卡片排成 12 栏一行，每张包含 48px 图标块、渠道标题、大号等宽指标、发布频率、分隔线和 'Best for' 文案。用小的 Persimmon、Moss 或 Ink 顶部线条区分卡片，而非无关颜色。移动端卡片全宽堆叠，间距 16px。
   动效：卡片以标准交错方式显现。图标箭头和卡片边框在悬停时轻微响应；无 logo 跑马灯或浮动动画。
6. **精选合作案例** — 锚点 id='partnerships'。眉标：'SELECTED PARTNERSHIPS · INVENTED EXAMPLES'。H2：'Useful stories, measurable by design.' 引言：'Three fictional campaigns show how a brief becomes audience-first content. All outcomes are illustrative sample data.' 案例 1：Fern & Fold，'The Balcony Growing Plan'，交付物 'Three-part container garden video series'，成果 '412K sample views · 5.6% sample engagement'，活动说明 'A seasonal plan moved from bare railing to first harvest, with one practical product step in each chapter.' 案例 2：Still Sunday，'A Slower Morning Ritual'，交付物 'Four-week newsletter residency and one long-form integration'，成果 '48% sample open rate · 2.8K sample clicks'，活动说明 'A recurring Sunday format paired a quiet personal ritual with a concise brewing guide.' 案例 3：Patio & Pollen，'Six Weeks to Herbs'，交付物 'Launch diary across long-form, short-form, and newsletter'，成果 '7.1K sample saves · 3.4% sample CTR'，活动说明 'A progress journal made the product part of an honest learning curve rather than a one-off reveal.' 每张卡片都有原创代码绘制的 SVG 封面、虚构合作方名称、项目标题、交付物、成果，以及一个 'Read campaign note' 展开面板。
   布局：三张等宽垂直卡片，带 16:10 SVG 封面、24px 内边距和对齐的成果行。活动说明在交付物下方内联展开，不使用模态框，也不改变其他卡片。移动端堆叠卡片，保持完整封面比例和可读的 16px 正文。
   动效：卡片以标准交错方式显现。展开面板的箭头旋转 90 度，说明内容在 200ms 内展开；减少动态效果时立即展开。
7. **创作者方法与协作流程** — 使用 studio-hands.webp 及其指定的 alt 文本。眉标：'HOW WE WILL WORK'。H2：'A partner, not a placement.' 简介：'I am [BRAND], a creator focused on [CREATOR_NICHE]. From my [LOCATION] studio, I turn small experiments into clear, useful stories for [AUDIENCE].' 流程步骤：01 Align — 'We agree on the audience problem, deliverables, usage, and what success should mean.'；02 Make — 'I share a concept, create in my own voice, and include one structured revision.'；03 Review — 'You receive the agreed files and a simple results summary using verified campaign data.'
   布局：一个大型 Paper 面板，16:9 照片跨第 1–7 栏，简介和三行编号流程位于第 8–12 栏。流程行使用细分隔线，而非独立的浮动卡片。移动端依次堆叠照片、简介、步骤；绝不在图片中裁掉手部。
   动效：照片和流程行使用单次标准显现。无视差、视频处理或虚假播放按钮。
8. **示例报价卡** — 锚点 id='rates'。眉题：'SAMPLE PARTNERSHIP RATES'。H2：'Clear ways to work together.'。引言：'Straightforward starting points for a fictional creator, with room to shape the right scope.'。套餐 1：Story Integration — '$1,200' — 'One 60–90 second integration in a long-form video'、'One concept revision'、'30-day organic usage'，按钮 'Select Story Integration'。套餐 2：Creator Series — '$2,800' — 'Three connected short-form videos'、'One long-form integration'、'30-day organic usage'，按钮 'Select Creator Series'；将此套餐标记为 'MOST VERSATILE'。套餐 3：Cross-Channel Campaign — '$4,600' — 'One dedicated long-form video'、'Three short-form videos and one newsletter feature'、'60-day organic usage'，按钮 'Select Cross-Channel Campaign'。脚注：'Sample rates in USD. Final scope, usage, and exclusivity are confirmed together.'。每次选择都会设置匹配的询价表单套餐，并将焦点移到该字段。
   布局：三张等宽卡片顶部对齐，包含套餐名称、大号等宽字体价格、三项带勾选标记的包含内容，以及一个全宽选择按钮。中间卡片使用 Ink 配 Canvas 文字和 Persimmon 徽章；其他卡片使用 Paper。移动端按相同顺序堆叠卡片，没有横向价格表，也不会裁切套餐名称。
   动效：标准交错显现。选择后按钮填充并显示 Check 图标，然后有意滚动到 #inquiry；没有价格切换开关，价格也不会变化。
9. **赞助询价草稿** — 锚点 id='inquiry'。眉题：'START A CONVERSATION'。H2：'Tell me what you are planning.'。引言：'Shape the idea, the audience fit, and the practical scope. This demo creates a local brief you can copy; it does not send your details anywhere.'。构建一个带可见标签的验证表单，字段包括 Your name、Work email、Company or brand、Partnership package（一个下拉选择，包含 Story Integration、Creator Series、Cross-Channel Campaign 和 Custom scope）、Budget range（下拉选择 $1K–$3K、$3K–$5K、$5K–$10K、$10K+）以及 Project notes（文本域，占位符为 'What are you making, who is it for, and what would a useful partnership look like?'）。要求填写 name、有效 email 格式、company、package、budget，且 notes 至少 30 个字符。提交按钮：'Create inquiry summary'。验证通过提交后，仅将表单区域替换为 'Your inquiry draft is ready'、所输入值的可读摘要，以及明确文本 'Nothing has been sent. Copy this brief to start the conversation.'。提供一个可用的 'Copy inquiry' 按钮，使用剪贴板并提供回退选择方法，点击后变为 'Copied' 两秒，另有 'Edit details' 可返回保留的表单。不要将个人输入保存到 localStorage。
   布局：一个 Ink 区块包含一个 Paper 面板。标题和引言占据第 1–4 列；表单占据第 6–12 列，采用两列网格，Project notes 占满整行。输入框最小高度 48px、圆角 10px、可见的 Ink/25 边框，以及通过 aria-describedby 关联的行内错误文本。摘要使用相同占位尺寸以避免布局偏移。移动端时，标题和单列表单堆叠，按钮全宽且无溢出。
   动效：面板显现一次。行内错误在失焦或尝试提交后立即出现；摘要在 180ms 内交叉淡入，复制反馈保持可见两秒。减少动态效果时，两者均立即完成。

## 资源

- 图片：将 https://media.vibefather.ai/assets/c0e27519-c367-4f98-9c1b-353d28ee3062/hero-creator.webp 下载到 public/images/hero-creator.webp。替代文本：'A fictional creator working with plants at a sunlit home-studio table.' 用作首屏的大幅主视觉锚点。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录相同的署名和来源 URL。
- 图片：将 https://media.vibefather.ai/assets/c0e27519-c367-4f98-9c1b-353d28ee3062/studio-hands.webp 下载到 public/images/studio-hands.webp。替代文本：'A fictional creator's hands arranging green cuttings beside a blank notebook.' 用于创作者方法与协作部分。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录相同的署名和来源 URL。
- 图标：仅将 lucide-react（ISC）用于通用界面和格式图标：Menu、X、ArrowRight、Play、Clapperboard、Mail、Check、ChevronDown、Copy 和 Sparkles。使用 currentColor 和可访问标签进行渲染；不要使用社交网络或合作品牌图标。在 ASSETS.md 中记录该包和许可证。
- 字体：安装并自托管 @fontsource-variable/newsreader、@fontsource-variable/inter 和 @fontsource/ibm-plex-mono（400 和 500），均为 OFL。在本地导入所需字重，并在 ASSETS.md 中列出每个包和许可证；不要使用 Google Fonts URL。

## 不要做
- 不要使用真实创作者姓名、可识别的人物、照搬的传记、真实受众数据、推荐语或效果声明。创作者和每一位合作方都必须是虚构的，所有指标、结果和价格都必须保留可见的示例数据标签。
- 不要使用现有社交平台标志、合作方标志、品牌标识、口号、活动主视觉、专有界面截图或可识别的产品设计。请使用通用渠道名称、宽松许可的 Lucide 图标，以及指定的原创 SVG 活动封面。
- 不要在成品网站中热链任何资源，不要使用占位图服务，也不要加入 Unsplash、Pexels、Pixabay、Google Images、CC BY-NC 或 CC BY-SA 素材。仅将提供的两张生成照片保留在本地，并在 ASSETS.md 中保留其署名信息。
- 不要添加其他人物、肖像、面孔、品牌吉祥物、动漫或游戏角色、签名插画或外部 artwork。首屏和流程配图必须保持为指定的两张生成图片，且不得出现可识别的面孔。
- 不要加载商业字体、fonts.googleapis.com、fonts.gstatic.com、Adobe Fonts、CDN 脚本、CDN 样式表、分析工具、实时受众服务、社交媒体 API 或任何第三方 API。所有字体、图标、图片和脚本都必须自托管。
- 不要使用 Aceternity UI 源码、Tailwind Plus 或 Tailwind UI 源码、购买的模板、未获允许许可的软件包、受限组件源码或图表库；请将指定的图表实现为本地 SVG。
- 不要添加后端、服务器代码、API 路由、数据库、身份验证、外部表单提交、真实电子邮件收集或咨询条目的持久化存储。验证、套餐选择、披露信息、工具提示和可复制的咨询草稿必须完全在浏览器中运行，并且绝不能声称咨询已发送。
- 不要使用裸目录内部链接或需要重写的客户端路由。这是一个仅含文件锚点导航的单一 index.html 页面，每个 CTA 都必须到达其真实区块或执行其所述的本地操作。
- 不要交付 source map、dist/ 中的源文件、超过 20 MB 总限制的资源、控制台错误、页面水平溢出、未标注的控件或不可访问的图表。请在 1440×900 和 390×844 下验证，并提供可见的焦点状态和可读的对比度。
- 不要自动播放媒体、滚动劫持、循环计数动画、将关键数值隐藏在动效之后，或忽略 prefers-reduced-motion。所有最终统计数据和交互必须在禁用动效时仍然可用。
- 不要添加 SEO 描述、Open Graph 标签、JSON-LD、站点地图、堆砌关键词的标题或装饰性发布日期；一个简单的 [BRAND] 媒体资料包标题和 favicon 就足够了。
- 当变量变化时，不要保留默认名称、细分领域引用、受众描述、活动示例、套餐上下文或 alt 文本不变；所有依赖内容都必须基于 src/content.ts 连贯重写，同时布局和设计保持不变。

---
— Prompt by VibeFather · https://vibefather.ai/t/creator-media-kit-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
