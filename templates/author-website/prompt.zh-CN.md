> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 作者网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个完整的英文网站，[BRAND] 是一位虚构的 [GENRE] 作家，常驻 [LOCATION]。将 [FEATURED_BOOK] 呈现为最新作品，包含四个原创的代码绘制书籍封面、一个数据驱动的书籍页面（含摘录和占位购买控件）、三场虚构活动、一篇文学传记、一个本地演示的 [NEWSLETTER_NAME] 注册，以及一套实用的媒体资料包。

- 受众：正在探索一部新小说的读者、寻找活动或读书会材料的现有读者，以及需要可靠作者信息和可下载资料的书商、节展组织者和记者。
- 目标：让精选书籍立即令人产生兴趣，让访客自然地从封面浏览到摘录和购买占位控件，并为每位读者、组织者或记者提供清晰的下一步行动，且无需后端支持。
- 语调：温暖、敏锐、睿智且安静亲密。使用精确的感官细节和简短的编辑式句子，绝不使用令人窒息的营销话术、虚构的赞誉、泛泛的励志语言或文学陈词滥调。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript 5
- 样式：Tailwind CSS 3.4
- 库：Motion 11（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL）、@fontsource/source-sans-3（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 配置 Vite，base 设为 './'，build.sourcemap 设为 false，并为 index.html、book.html、events.html、about.html 和 press.html 配置 Rollup HTML 输入，使每个页面都能直接从 dist/ 打开。
  - 在每个 HTML 入口挂载一个共享的 React 应用，根据入口文件名选择页面，而不是引入路由器；使用共享的 Header、Footer、BookCover、NewsletterForm 和 Reveal 组件。
  - 将所有作者事实、书籍、摘录、活动、传记、链接和图片路径保存在 src/content.ts 中；用一个 slugify 函数派生书籍 id，并在链接和查询中一致使用这些 id。
  - 在 Tailwind 主题和 src/index.css 中定义调色板、排版、间距和关键帧；包含一个仅用 CSS 渐变制作的极低不透明度的小纸张纹理。
  - 从列出的 Fontsource 包中导入 Fraunces 和 Source Sans 3，并提供系统衬线字体和无衬线字体作为回退；将所有字体文件本地打包。
  - 创建一个简单的原创打开书本线条 favicon 作为本地 SVG，并为每个 HTML 入口设置一个包含 [BRAND] 及其页面名称的纯文档标题；不要添加 SEO 元数据。
  - 使用 Motion 实现入场变换，使用 AnimatePresence 实现菜单、手风琴和 toast 反馈；使用原生 IntersectionObserver 实现一次性区块显现，并在所有地方尊重 prefers-reduced-motion。

## 变量
- [BRAND] — 作者姓名（默认：“Mara Ellison”）。在文字标识、个人简介、图片替代文本、书籍封面和联系方式中全程使用一个虚构的笔名。
- [GENRE] — 类型描述词（默认：“Literary mysteries”）。一个简短的类型标签，可用于介绍作者并指导改写后的文案。
- [FEATURED_BOOK] — 精选书籍标题（默认：“The Cartographer of Low Tides”）。内容集合中的第一本书，也是 book.html 没有有效 id 时的默认值。
- [LOCATION] — 作者所在地（默认：“Portland, Maine”）。用于个人简介和活动上下文的城市与地区，不是可识别的商家或场馆。
- [NEWSLETTER_NAME] — 新闻通讯名称（默认：“Notes from the Margin”）。用于订阅标题、本地存储键和确认文案。
- [CONTACT_EMAIL] — 公开联系邮箱（默认：“hello@maraellison.example”）。演示中使用保留的 .example 域名；mailto 链接由此值派生。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/author-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值编写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- Vellum `#F2EDE3` — 主页面背景和充裕的留白
- Paper `#FBF8F1` — 阅读区域、页眉和交替的编辑版块
- Ink `#1E2A26` — 主文本、深色页脚和主按钮
- Muted Ink `#626A62` — 元数据、说明文字和次要文案
- Oxblood `#873F38` — 链接、活动分隔线、小标签和主强调色
- Moss `#87957F` — 次要书籍封面几何图形和低调的插画细节
- Hairline `#D6CCBC` — 一像素边框、分隔线和输入框轮廓
- Faded Ochre `#C4A46A` — 仅用于稀疏的封面点缀，绝不用于正文或大面积背景

### 字体排印（Typography）
- 展示字体和文学引文：Fraunces Variable（OFL），字重 400/500/600
- 正文、导航、表单和元数据：Source Sans 3（OFL），字重 400/500/600/700

### 布局与动效（Layout & motion）
- 间距：使用 8px 基础比例，内容最大宽度 1280px，桌面端边距 48px，移动端边距 20px。主要区块在桌面端有 112px 垂直内边距，移动端为 72px。正文保持在 62ch 到 68ch 之间，使用 1px 分隔线组织密集信息，交互控件之间至少保持 16px 间距。
- 圆角：页面边缘和书籍封面使用直角，按钮、输入框和肖像框使用 2px 圆角，仅微小的类型或格式标签使用全圆角。避免浮动胶囊形卡片和大面积柔和阴影。
- 动效：在首页主视觉区，眉题、标题、文案和操作按钮以 90ms 的间隔依次显现，总时长 600ms，同时肖像从 scale 1.025 稳定到 1；当 JavaScript 不可用时，内容必须保持可见。
- 动效：主要区块在进入视口时显现一次，从 opacity 0 和 translateY 20px 过渡到正常状态，时长 500ms；绝不在观察器触发前隐藏整个页面。
- 动效：为书籍封面添加克制的指针倾斜效果，最大 4 度，translateY(-6px)，以及窄纸边高光，时长 180ms；指针离开时重置，触摸设备上禁用倾斜。
- 动效：使用原生滚动位置更新摘录阅读进度线，手风琴和移动端导航在 160–220ms 内动画过渡，并在打开或关闭时正确移动焦点。
- 动效：仅在 prefers-reduced-motion: no-preference 下使用平滑锚点滚动；在 reduce 下，移除显现、倾斜、视差和非必要过渡，但不禁用阅读进度或控件。
- 图像：使用一张提供的、专业打光的编辑照片作为主视觉、关于页面和媒体资料包的肖像，照片中是一位完全虚构的作家在写作桌前。它是一个可复用的占位符：在不同变量情况下保留提供的本地文件，并将其 alt 文本更新为 [BRAND]。所有四个书籍护封都是原创的内联 SVG 构图，由几何线条、轮廓路径、圆形和排版标题/作者文字构成；每个都有自己的调色板和母题，但相同的裁切比例和精细纸张纹理。不要添加其他照片、可识别的人物、现有封面艺术、零售商标记或装饰性库存插画。

## 页面与区块
### 首页 — 精选小说与完整书目（`index.html`）
1. **共享外壳** — 在所有五个页面上使用此外壳。字标为 [BRAND]。桌面导航为 Books（./index.html#books）、Events（./events.html）、About（./about.html）、Press Kit（./press.html），后跟一个紧凑的 Join the letter 按钮，链接至 ./index.html#newsletter。添加一个聚焦时可见的 Skip to content 链接。页脚使用 Ink 背景配 Paper 文字，重复导航，显示 For readings, rights and press: [CONTACT_EMAIL] 作为 mailto 链接，列出 [LOCATION]，并将可选的 [CREDIT] 行保持小号且不显眼。
   布局：将页眉固定在顶部，桌面高度 76px、移动端 64px，Paper 背景 96% 不透明度，底部 Hairline 边框。将其内容对齐到 1280px 网格。在移动端，用带标签的 Menu 按钮替换导航，并在页眉下方打开一个全宽 Paper 面板，链接高度 48px，支持焦点捕获和 Escape 关闭。桌面使用三列页脚，移动端使用一列。
   动效：移动面板在 180ms 内淡入并平移 8px；关闭时将焦点返回 Menu 按钮。
2. **肖像主导的英雄区** — 眉题：[GENRE] · [LOCATION]。H1：Stories for the hours when the world goes quiet。正文：[BRAND] writes layered fiction about memory, place, and the secrets families keep. The new novel, [FEATURED_BOOK], follows a retired mapmaker back to the island she once erased from every atlas。主 CTA：Read the opening，链接至 ./book.html#excerpt。次 CTA：Explore the books，链接至 ./index.html#books。在肖像旁放置一个小号 Latest novel 标签，并将 [FEATURED_BOOK] 的原创 SVG 封面重叠在其左下角。
   布局：使用两列 7/5 网格，间距 72px，顶部内边距 64px，底部内边距 80px。标题设为 72px/0.98，最大宽度 11ch，正文 20px/1.55。肖像为大型 3:4 编辑框，桌面至少 480px 宽，书籍封面约 210px 宽。在 390px 屏幕上使用单列：眉题、46px 标题、280px 高的肖像/封面视觉、正文，然后两个全宽 CTA，使视觉锚点出现在首屏内。
   动效：应用英雄区入场序列和克制的封面倾斜；不要使用自动播放视频、轮播或大型动画背景。
3. **精选小说** — 标签：The latest novel。标题：[FEATURED_BOOK]。导语：A missing survey. A causeway open for six hours. A family history waiting at low tide。简介：When cartographer Nell Arden returns to Gannet Island to sell her father's house, she finds a hand-drawn survey tucked inside his tide tables. Its unfamiliar contour leads through the salt marsh to a cottage omitted from every official map—and to the sister her family insisted had left the island thirty years earlier。元数据：368 pages · Literary mystery · May 2027。引语：Every coastline is an argument with the past。CTA：Discover the book，链接至精选书籍的 ./book.html?id=… URL。
   布局：使用 Paper 色带，顶部和底部有 Hairline 边框。内部创建 5/7 网格：左侧为 280px 宽的代码绘制封面，右侧为文字，标题 52px，引语在简介之后以 26px Fraunces 斜体呈现。元数据对齐在一行换行排列，用细竖线分隔。移动端使用 180px 封面左对齐于文字上方，标题 40px。
   动效：将封面和文案作为一个区块一起显示；封面可以悬停倾斜，但简介永不独立移动。
4. **书籍书目** — 标题：Four books. Four ways home。引言：Novels about the places that remember us, from a tidal island to the last tram before a blizzard。包括 [FEATURED_BOOK]（2027）、The Orchard After Dark（2024）、A House for Returning Birds（2022）和 The Winter Tram（2019）。它们各自的母题是层叠的潮汐等高线、五条拱形的果园树枝、三只几何化的归鸟和两条汇聚的电车线路。每个标题链接至 ./book.html?id=its-slug。旧作简介：The Orchard After Dark 讲述两姐妹发现一本记录从未发生过的收获的账本；A House for Returning Birds 讲述一位建筑师继承了一座悬崖房屋，其中的房间面向不同的家族年代；The Winter Tram 在暴风雪前的最后一班电车上给五位陌生人带来了同一封未寄出的信。
   布局：将标题和引言以 7/5 分割置于四列封面网格上方。每个项目是一个无边框组合：2:3 SVG 封面、24px Fraunces 标题，然后是年份和类型元数据，用 Hairline 分隔。移动端使用两列，间距 12px，并使整个封面加标题成为可访问链接。不要为仅四本书添加筛选药丸或轮播。
   动效：封面入场错开不超过 60ms，并应用共享的封面悬停行为。
5. **活动预览** — 标题：Meet the author。引言：Readings, conversations and book-club evenings, with time to stay and talk afterward。显示与 events.html 相同的三条活动记录：An Evening of Coastal Mysteries 于 2027 年 4 月 15 日星期四晚上 7:00 在 The Reading Room, 48 Alder Street, Portland, Maine；Maps, Memory & Fiction 于 2027 年 4 月 24 日星期六下午 2:00 在 Hall Library, 16 Harbor Lane, Portsmouth, New Hampshire；Spring Book Festival 于 2027 年 5 月 9 日星期日上午 11:30 在 Cedar Hall, 9 Garden Street, Boston, Massachusetts。CTA：View all event details，链接至 ./events.html。
   布局：使用三个全宽编辑行，用 Hairline 分隔。桌面每行为 140px 日期列、灵活的标题/场地列和右对齐的城市列。移动端将日期放在标题上方，城市放在其下方。不要将行包裹在单独的圆角卡片中。
   动效：行一起显示；悬停时仅将标题向右移动 4px 并加深 Oxblood 规则线。
6. **关于作者** — 标签：About [BRAND]。标题：Writing toward the things we almost say。文案：[BRAND] writes novels rooted in coastal towns, old houses and the complicated loyalty of families. Before turning to fiction full-time, [BRAND] restored architectural drawings and learned that every erased line leaves a shadow. That attention to what remains runs through all four books。添加三个紧凑事实：Four novels；Drafts at 5:30 AM；Based in [LOCATION]。CTA：Read the full story，链接至 ./about.html。
   布局：使用 4/8 网格，标签和事实在窄列，52px 标题加 20px 文案在宽列。用 Hairline 分隔事实，而非统计卡片。移动端将标题放在最前，然后是文案和三个事实在一行中换行排列。
   动效：一个安静的区域显示；无动画计数器。
7. **新闻通讯注册** — 使用 id newsletter。眉题：[NEWSLETTER_NAME]。标题：A letter for readers who linger。正文：On the first Sunday of each month, receive a craft note, a short reading list and an early glimpse of the work in progress. No more than twelve letters a year。字段：Email address 和 Join the letter 提交按钮。在提交前包含此可见说明：Static demo: your address is saved only in this browser and is not sent to a mailing service。验证常规电子邮件模式，然后将地址存储在从 [NEWSLETTER_NAME] 派生的键下，并显示诚实的确认：Saved in this browser. Connect your mailing service before publishing。
   布局：使用 Ink 全出血色带配 Paper 文字。在 1280px 网格内，将标题和正文放在 7 列区域，表单放在 5 列区域。输入框具有透明背景、Paper 文字、可见的 Paper 边框和 Faded Ochre 的无 Oxblood 焦点轮廓。移动端堆叠所有元素，字段和按钮最小高度 48px。
   动效：在表单和确认之间使用 180ms 不透明度过渡，不删除说明性注释。

### 图书详情——内容简介、节选和购买占位符（`book.html`）
1. **数据驱动的图书概览**——读取 id 查询参数，并在 src/content.ts 中查找匹配的图书。当没有 id、id 为空或 id 未知时，将 [FEATURED_BOOK] 作为第一项显示，绝不显示空状态或未找到状态。精选视图显示面包屑导航：Books / [FEATURED_BOOK]；标签 A novel；标题 [FEATURED_BOOK]；来自首页的内容简介；元数据 368 pages · May 2027 · [GENRE]；以及带有层叠潮汐轮廓的护封。往期书目视图使用各自原有的内容简介、年份、页数（The Orchard After Dark 为 320 页，A House for Returning Birds 为 288 页，The Winter Tram 为 256 页）、母题，以及与其设定一致的三段式原创开篇节选。
   布局：使用共享外壳和 5/7 概览网格，顶部内边距为 96px。左栏放置宽 340px 的护封，右栏放置面包屑导航、标题、内容简介和元数据。标题设为 64px/1.02，内容简介设为 20px/1.6。在移动端，将面包屑导航和 44px 的标题放在居中的 220px 护封之前，然后是内容简介和元数据。
   动效：加载时立即显示所选图书，并根据其数据更新文档标题；不要为整页加载状态添加动画。
2. **开篇节选**——使用 id excerpt。标签：From chapter one。标题：The road back。对于 [FEATURED_BOOK]，逐字使用以下原创节选：At low tide, the road to Gannet Island surfaced beneath the rain. Nell parked where the asphalt ended and watched water loosen its hold on the stones. For six hours, perhaps seven if the wind stayed west, there would be a way home.

Her father's tide tables lay open on the passenger seat. Inside the back cover she had found a survey drawn in his narrow hand: no roads, no house names, only a line that crossed the marsh and stopped at a small black square. Beside it he had written, Ask June who remembers.

Nell had spent twenty-two years correcting other people's maps. She knew how a clean border could conceal a disputed field, how a blank patch might be more truthful than a name. Still, she had never seen her father leave anything unlabeled.

At the far side of the causeway, a figure lifted an umbrella. The island had already noticed her. Nell folded the survey once, against its original crease, and stepped into the rain.对于往期书目，渲染 content.ts 中它们各自的原创节选，而不是重复这段文本。添加一条细阅读进度线，标注 Reading progress，并带有可访问的百分比。
   布局：使用 Paper 阅读带。将节选放在居中的 680px 栏中，使用 22px/1.8 的 Source Sans 3，第一段使用 72px 的 Fraunces 首字下沉，段落间距为 28px。将标签和标题放在栏上方，并仅在此部分可见时，将 2px 的进度线紧贴在粘性页眉下方。移动端正文为 19px/1.75，左右边距为 20px。
   动效：根据节选的实际滚动范围，让进度线从左向右增长；不要更改文本或逐段显示段落。
3. **格式和占位购买控件**——标题：Choose your edition。显示三行：Hardcover · $28.00 · jacket and deckled edges；Paperback · $18.00 · French flaps；Ebook · $9.99 · EPUB and PDF。每行都有一个 Buy 占位按钮。这些按钮有意不是可用的零售商链接：点击其中一个会显示一个非阻塞式 toast，内容为 Retailer link placeholder — add your own URL in content.ts。不要导航离开、启动结账流程或暗示已发生销售。
   布局：将标题放在 4 列左栏中，将版本行放在 8 列右区域中。每行使用 Hairline 顶部边框、格式/描述组、表格价格列和 120px 按钮。在移动端，将格式、描述、价格和全宽按钮堆叠排列，间距为 16px。
   动效：Toast 从底部中央进入，向上移动 8px，并保持可读四秒；同一时间只显示一个 toast。
4. **阅读小组笔记**——标题：After the last page。引言：Three questions for the conversation that follows [FEATURED_BOOK]。问题：How does the causeway's timetable shape Nell's choices? Which maps in the novel protect, and which ones accuse? What might the final blank contour make possible? 对于往期书目，将其替换为根据各自情节衍生出的三个问题。添加一个 Copy discussion questions 按钮，用于复制可见问题并显示 Copied 两秒。
   布局：使用三个编号列，带有 Oxblood 色的大号 01、02 和 03 标记，桌面端由垂直 Hairline 分隔，移动端由水平分隔线分隔。将复制操作放在列上方，桌面端右对齐，移动端全宽。
   动效：同时显示三个问题，并为复制按钮提供简短的纯文本确认。
5. **更多图书**——标题：Continue through the bibliography。显示另外三本书及其护封、标题和年份，每本都链接到各自的 ./book.html?id=… URL。保留共享页脚。
   布局：桌面端使用三列网格，移动端使用两列，最后一项既不跨列也不拉伸其封面。保持与首页书目相同的封面比例和排版。
   动效：使用共享的封面悬停效果，不使用轮播或自动移动。

### 活动——朗读与对话（`events.html`）
1. **活动介绍**——眉题：Readings & conversations。H1：Bring your questions. Stay for the story。正文：[BRAND] visits libraries, independent venues and community festivals for short readings followed by generous audience conversations. Every listing below includes local time, venue details and a calendar download。
   布局：使用 7/5 分栏，左侧为 64px 标题，右侧为底部对齐的 20px 正文。在该部分下方添加一条 Hairline。移动端标题为 46px，正文位于下方。
   动效：使用一次安静的入场效果。
2. **即将举行的活动列表**——渲染 content.ts 中的三条记录。An Evening of Coastal Mysteries：April 15, 2027, 7:00–8:30 PM, The Reading Room, 48 Alder Street, Portland, Maine；20 分钟朗读、观众问答和签售，6:30 PM 开门，无台阶入口。Maps, Memory & Fiction：April 24, 2027, 2:00–3:15 PM, Hall Library, 16 Harbor Lane, Portsmouth, New Hampshire；关于背景设定与研究的对话，配有辅助听力系统和图书馆后方无障碍停车位。Spring Book Festival：May 9, 2027, 11:30 AM–12:30 PM, Cedar Hall, 9 Garden Street, Boston, Massachusetts；小组讨论后进行签售，提供预留过道座位。每行都有 Details 和 Add to calendar 按钮。Details 展开描述和无障碍信息。Add to calendar 生成一个本地 .ics 文件，包含正确的标题、地址、开始和结束时间；它不调用任何日历服务。
   布局：使用全宽行，包含 150px 日期块、灵活的活动信息区和 190px 操作列。月份和日期使用 Fraunces 显示，年份和当地时间使用 Source Sans 3 显示。展开的详情占据信息列，不会将操作移出屏幕。在移动端，使用单列，仅当 Details 和 Add to calendar 按钮都能放下时，才将 48px 高的两个按钮并排；否则将它们全宽堆叠。
   动效：在 200ms 内展开详情，更新 aria-expanded，并且不移动焦点或滚动位置。
3. **活动策划说明**——标题：Planning a reading or festival? 文案：The press kit includes biographies, a portrait, discussion themes and a printable fact sheet. For availability, format and accessibility requirements, write directly to [CONTACT_EMAIL]。操作：Open the press kit（./press.html）和 Email the author（由 [CONTACT_EMAIL] 生成的 mailto）。
   布局：使用 Ink 色带，采用 7/5 的文本与操作网格。按钮为 Paper 描边样式，具有清晰的焦点状态，并在移动端堆叠。
   动效：除共享的部分入场效果和按钮悬停状态外，无其他动画。

### 关于 — 个人简介与写作实践（`about.html`）
1. **传记肖像与介绍** — 眉题：About [BRAND]。H1：Looking for the story beneath the official version。传记：[BRAND] 是四部小说的作者，包括 [FEATURED_BOOK]。作品穿行于沿海小镇、继承的房屋，以及学会大声说出真相的家庭之间。在转向小说创作之前，[BRAND] 花了十年时间修复建筑图纸、编目修订版本，并发现刻意的抹除能揭示多少东西。如今，写作在 [LOCATION] 的日出之前开始，通常伴随着一张纸质地图、一支铅笔，以及比答案更多的问题。
   布局：使用 5/7 网格，左侧放置提供的作者肖像，右侧放置文字。肖像保持其自然的 3:4 比例，并配有小字说明：Writing in [LOCATION]。标题设为 58px，传记设为 21px/1.65。在移动端，先放眉题和 44px 标题，其次放肖像，最后放传记。
   动效：使用主视觉肖像的落定效果和文案显现效果，不再叠加其他封面重叠效果。
2. **一个工作日** — 标题：A writing life, in four margins。时间线：5:30 AM — 手写初稿，趁屋子还未醒来；8:30 AM — 不戴耳机散步，用天气检验当天的场景；1:00 PM — 打字、删改，并大声朗读新写的页面；4:00 PM — 回复读者来信，然后为明天留下一句诚实的笔记。结尾句：The routine is ordinary. That is what makes it reliable。
   布局：将标题放在 4 列轨道中，时间线放在 8 列区域中。每个条目是一个两列的时间/描述行，用 Hairlines 分隔。在移动端，时间保持 96px 宽，允许描述换行而不缩小文字。
   动效：各行一起显现；不要模拟打字或动画时钟。
3. **读者提问** — 标题：Questions readers ask。手风琴：Do I need to read the books in order? 回答：No. Each novel stands alone, though attentive readers will notice a few shared streets and objects. Where do the settings come from? 回答：They are invented composites, drawn from climate, architecture and oral histories rather than copied from one real town. Can our book club request discussion questions? 回答：Yes. Every book page includes questions to copy, and the press kit lists additional themes. What are you writing now? 回答：A novel about an abandoned weather station and the person who has kept its records long after the last transmission。
   布局：使用 4/8 网格，标题在左，四个手风琴行在右。问题使用 24px Fraunces，回答使用 18px/1.65 Source Sans 3，每个触发器横跨整行，带一个 Plus 图标，打开时旋转 45 度。初始时第一个回答展开，并允许多个回答同时保持展开。
   动效：在 200ms 内动画回答的高度和透明度，保留键盘焦点并尊重减少动效设置。
4. **通讯邀请** — 复用 index.html 上定义的 [NEWSLETTER_NAME] 内容、验证、诚实的本地存储行为和确认；不要创建第二个表单实现。
   布局：复用 id 为 newsletter 的 Ink 通讯横幅，以及相同的桌面和移动端网格。
   动效：使用相同的 180ms 确认过渡。

### 媒体资料包 — 传记、下载和访谈主题（`press.html`）
1. **媒体介绍** — 眉题：Press & event resources。H1：Everything you need, ready to quote。正文：Approved biographies, the author portrait, original book jackets and practical details for journalists, booksellers, librarians and festival teams. For corrections or interview requests, contact [CONTACT_EMAIL]。
   布局：使用 7/5 分割，60px 标题，右对齐正文，下方一条 Hairline。移动端标题为 44px。
   动效：一次安静的区域显现。
2. **可复制的传记** — 提供两个版本，带 Copy short bio 和 Copy long bio 按钮。短传记：[BRAND] writes [GENRE] about memory, place and family loyalty. The latest novel is [FEATURED_BOOK]. Before writing fiction full-time, [BRAND] restored architectural drawings. [BRAND] now lives and writes in [LOCATION]. 长传记：[BRAND] is the author of four novels, including [FEATURED_BOOK]. The books explore inherited houses, changing landscapes and the stories families preserve—or revise—to protect one another. Before turning to fiction, [BRAND] spent a decade restoring architectural drawings, an experience that continues to shape an interest in erased lines and unofficial histories. [BRAND] writes in [LOCATION], leads occasional community workshops and meets readers at libraries, book clubs and festivals。
   布局：使用两个相邻的无框列，由一条垂直 Hairline 分隔，每列有一个 28px Fraunces 标签、一个 18px/1.7 文本块和一个底部对齐的轮廓按钮。移动端堆叠。确认显示在按钮中为 Copied，并通过 aria-live 区域呈现，不重复可见的 toast。
   动效：使用纯文本复制确认，持续两秒；不要动画传记文本。
3. **可下载资源** — 标题：Images and fact sheet。提供 Author portrait（WebP，3:4），对本地 public/images/author-portrait.webp 文件使用 download 属性；每本书一个 Download SVG 操作，将该书的内联 SVG 序列化为本地 Blob 下载；以及 Download fact sheet，创建一个 UTF-8 文本文件，包含 [BRAND]、[GENRE]、[LOCATION]、[FEATURED_BOOK]、[CONTACT_EMAIL]、短传记和所有活动记录。将必需的资源生成署名保留在 ASSETS.md 中，而不是可见的页面文案中。按钮执行真实的本地下载，不显示虚假的上传或处理状态。
   布局：使用 4/8 网格。左侧包含一个 160px 宽的肖像缩略图及其下载操作；右侧包含四个紧凑的书封下载行，随后是事实表行。所有行都有 Hairline 分隔符和清晰的文件类型标签。在移动端，将肖像居中，并将下载操作堆叠，最小高度 48px。
   动效：无进度动画；仅在浏览器下载开始时提供即时的文件名特定反馈。
4. **事实与对话主题** — 事实一览：作者 — [BRAND]；类型 — [GENRE]；所在地 — [LOCATION]；书籍 — Four standalone novels；最新 — [FEATURED_BOOK]；联系方式 — [CONTACT_EMAIL]。访谈主题：How maps decide what deserves to be seen；Why family secrets change shape between generations；The difference between research and invention；What architectural restoration teaches about revision；Building a sustainable writing routine before sunrise。
   布局：使用 5/7 网格，事实在左列，主题在右列。事实使用堆叠的标签/值行；主题使用五行编号行，而非卡片。添加一个最终的 Paper 横幅，文字为 Need a detail that is not listed here?，以及一个标注为 Contact the author 的 mailto 按钮。
   动效：仅使用共享的显现效果和普通的按钮悬停状态。

## 资源

- 图片：将 https://media.vibefather.ai/assets/02d06fce-e5c2-4cf5-89b4-6fa75d35254e/author-portrait.webp 下载到 public/images/author-portrait.webp。替代文本：[BRAND]，一位虚构作者，在窗边写作。将其用于首页主视觉区、关于页作者简介和媒体资料下载。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中记录本地路径、确切源 URL、替代文本、用途和本条署名。
- 图片：以 2:3 裁切比例，使用各页面指定的图案、配色和字体排版，将所有四本书的封面绘制为原创内联 SVG。使用 XMLSerializer 和 Blob 在本地生成它们的媒体资料下载文件。不要获取封面图片，也不要添加任何其他位图 artwork。
- 图标：仅使用 lucide-react 中所需的 Lucide 图标（ArrowUpRight、ArrowRight、Menu、X、Plus、Download、Copy、Check、CalendarPlus 和 Mail），通过 tree-shaking 纳入本地 bundle；在 ASSETS.md 中记录该包和 ISC 许可证。
- 字体：通过 @fontsource-variable/fraunces 自托管 Fraunces Variable，并通过 @fontsource/source-sans-3 自托管 Source Sans 3，二者均为 OFL。将 woff2 文件打包到本地，并在 ASSETS.md 中列出这两个包、许可证和本地用途。

## 禁止事项
- 不得使用真实作者、可识别的人物、名人肖像、真实传记、现有书名、已发表摘录、评论引语、封面艺术，或任何参考网站的代码或逐字复制内容。
- 不得使用真实出版商、书商、零售商、节庆、奖项或媒体的名称和标识。Buy 控件仅为占位符；不得有真实结账、交易或外部零售商跳转。
- 不得使用商业字体、字体 CDN、Unsplash、Pexels、Pixabay、图库照片外链、占位图服务、品牌图标包或额外的人物图片。
- 不得添加后端、服务器操作、API 路由、身份验证、分析、第三方表单端点、日历 API、新闻订阅请求或模拟成功的在线提交。
- 不得隐藏演示限制：新闻订阅地址仅保留在 localStorage 中，购买操作需标明自身为占位符，日历、传记、封面和资料表操作均在本地运行。
- 不得在各组件中硬编码作者专属文案。将所有内容和链接保留在 src/content.ts 中，一致地应用全部六个变量，并从当前内容派生 mailto 链接、书籍 id、存储键、图片 alt 文本和下载内容。
- 不得用首字母缩写或其他图片替换提供的虚构肖像。保持其本地化并可在各变量场景中复用，且不得暗示其描绘真实个人。
- 不得使用裸目录链接或仅客户端路由。每个导航项都指向一个真实 HTML 文件，可带可选查询或片段，且无有效 id 的 book.html 始终显示精选的第一本书。
- 不得使用远程脚本、远程样式表、CDN 资源、source map 或复制的 src 目录。在 dist/ 中输出压缩的、相对路径的静态文件，保持 dist/ 在 20 MB 以下并产生零控制台错误。
- 不得引入通用 AI 视觉套路：不得使用紫色渐变、玻璃拟态、超大发光球体、浮动圆角卡片墙、用于小规模收藏的轮播、无意义计数器或过度阴影。
- 不得损害可读性或键盘访问。保持可见焦点、语义化按钮、带标签的字段、足够的颜色对比度、44px 最小触摸目标、390px 下零水平溢出以及完整的 prefers-reduced-motion 支持。
- 不得添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图或关键词堆砌文案。仅使用纯 [BRAND] 页面标题和本地 favicon。
- 每个可见标签、传记、摘录、活动、下载和 alt 文本均用自然的美国英语书写；不得在网站中暴露实现注释或隐藏指令。

---
— Prompt by VibeFather · https://vibefather.ai/t/author-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
