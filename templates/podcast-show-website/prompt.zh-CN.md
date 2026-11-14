> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 播客节目网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个四页的编辑型播客网站，这是一档关于 [SHOW_TOPIC] 的节目，由 [HOST_NAMES] 主持。为 [AUDIENCE] 编写默认体验，并使用 [SHOW_TAGLINE] 作为主视觉信息。网站包含最新单集音频播放器、可搜索的存档、完整的单集节目笔记和章节、嘉宾简介以及订阅操作。

- 受众：独立播客主播、访谈和教育类节目以及小型媒体团队；默认听众为 [AUDIENCE]。
- 目标：让最新单集可立即播放，帮助听众发现相关的存档单集和嘉宾，提供可读性强的节目笔记和章节，并在无后端的情况下提供可用的本地订阅操作。
- 基调：好奇、睿智、温暖，并带有安静的俏皮感；具体而非炒作驱动，具有独立文化杂志的触感节奏。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：React + ReactDOM（MIT）、Tailwind CSS（MIT）、lucide-react（ISC）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 配置 vite.config.ts，设置 base 为 './'、build.sourcemap 为 false，并为 index.html、episodes.html、episode.html 和 guests.html 显式配置多页面输入；每个 HTML 文件加载相同的 React 入口，该入口根据 window.location.pathname 选择页面。
  - 使用 Tailwind 进行布局和组件状态管理，在 tailwind.config 中扩展 Design 中的精确颜色令牌和字体族；将 reveal 关键帧、range-input 样式、焦点环和 reduced-motion 覆盖放入 src/index.css。
  - 将所有节目定位、剧集记录、章节数据、嘉宾传记、界面标签和图片 alt 文本保留在 src/content.ts 中。提供的文案用于默认变量值；每当值发生变化时，连贯地重写每个依赖的标题、剧集、节目说明、传记和标签，并移除所有默认专有名词。
  - 通过在 src/main.tsx 中导入指定的 Fontsource 包来自托管 Fraunces、Inter 和 IBM Plex Mono；切勿使用字体 CDN。
  - 使用本地标准库 wave/math 脚本在 public/audio/episode-preview.wav 生成一段原创的 24 秒单声道 PCM WAV：柔和的合成电钢琴音色、克制的脉冲，以及短暂的淡入/淡出，不使用采样素材、语音或外部服务。打包 WAV 和生成脚本，并在 ASSETS.md 中将音频记录为原创生成媒体。
  - 从相同的剧集内容创建 public/feed.xml 作为一个小型有效的静态 RSS 源，使用适合演示的相对本地 enclosure 和剧集 URL；RSS 订阅按钮打开 ./feed.xml。
  - 创建一个简单的原创波形 favicon（SVG），并仅设置包含 [BRAND] 的纯文档标题；除此之外不要添加 SEO 元数据。

## 变量
- [BRAND] — 节目名称（默认：“Tangent & Tide”）。一个虚构的播客名称，用于字标、页面标题、页脚和订阅源。
- [SHOW_TOPIC] — 节目主题（默认：“the hidden design decisions behind everyday objects”）。一个简洁的主题短语，应驱动所有单集和嘉宾内容。
- [AUDIENCE] — 听众群体（默认：“curious designers, engineers, and lifelong learners”）。节目及其文案所面向的人群。
- [HOST_NAMES] — 主持人姓名（默认：“Mara Venn and Ivo Sen”）。两位虚构主持人；将该值拆分为单独的个人资料，并保持简介一致。
- [SHOW_TAGLINE] — 节目标语（默认：“Ordinary things. Extraordinary stories.”）。一句简短的原创两部分标语，用于首页主视觉区。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/podcast-show-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 羊皮纸色（Parchment）`#F4F0E8` — 主页面背景和充裕的编辑留白
- 纸白色（Paper）`#FFFDF8` — 单集笔记、表单和音频播放器表面
- 墨色（Ink）`#1D1B18` — 主文本、深色按钮和细线
- 柔和墨色（Muted Ink）`#6F6A62` — 次要文案和元数据；切勿使用低于可读对比度的颜色
- 牛血色（Oxblood）`#7A2E2A` — 激活的筛选器、选中的章节和编辑强调
- 柿子色（Persimmon）`#E56B45` — 播放控件、进度、焦点强调和小高亮
- 鼠尾草色（Sage）`#A8B4A0` — 交替的几何单集封面形状和低调标签

### 字体排印
- 展示标题和单集标题：Fraunces Variable（OFL），字重 600/700/900
- 正文、导航和控件：Inter Variable（OFL），字重 400/500/600/700
- 单集编号、时间戳、筛选计数和标签：IBM Plex Mono（OFL），字重 400/500

### 布局与动效
- 间距：使用 4px 基准单位，内容最大宽度 1360px，移动端 24px、桌面端 48px 的边距，以及 12 列桌面网格、24px 间隙。区块内边距为移动端 72px、桌面端 112px；卡片内边距为 20–32px。桌面端页头高 76px。节目笔记正文每行保持 68 个字符。
- 圆角：以利落的编辑风格边缘为主：微型标签 2px，按钮和输入框 8px，图片框架和播放器 16px，仅筛选胶囊和状态徽章使用 999px。使用 1px 墨色/15 边框，不使用柔和的浮动卡片阴影。
- 动效：使用 IntersectionObserver 让主要区块一次性显现：不透明度从 0 到 1，translateY 从 16px 到 0，持续 400ms，相邻卡片之间错开 80ms，不劫持滚动。
- 动效：播放时音频进度平滑更新；播放/暂停、跳过、速度、音量、复制和章节选择提供即时的 160–220ms 视觉反馈，不引起布局偏移。
- 动效：悬停时单集封面缩放至 1.025，箭头移动 4px，持续 220ms；选中的筛选胶囊填充牛血色，而不是弹跳。
- 动效：绝不自动播放音频。在 prefers-reduced-motion 下，移除显现、平滑滚动、封面缩放和非必要过渡，同时保留所有状态变化。
- 图像：严格使用资源中列出的六张协调生成的图片：一张宽幅工作室场景作为首屏锚点，以及五张虚构的编辑肖像占位图。主视觉必须保持为宽敞的场景，绝不能是紧凑的面部特写。肖像代表虚构人物，不 resemblance 真实个人，年龄和族裔多样，在柔和的定向窗光下保持一致的陶土色、羊皮纸色和胡桃木色调。所有单集封面均在本地生成为原创 SVG 构图，由弧线、波形条、圆形和网格组成，使用羊皮纸色、牛血色、柿子色和鼠尾草色；仅使用单集编号作为封面文字，并为每个主题赋予确定性的图案。不要添加任何其他照片、外部 artwork、标志或可识别的人物。

## 页面与区块
### 最新单集与节目主页（`index.html`）
1. **共享页眉与页脚** — 在全部四个页面上使用此外壳。页眉包含一个原创的三条波形标记、[BRAND] 字标，以及文本链接 Latest（./index.html）、Episodes（./episodes.html）、Guests（./guests.html），外加一个链接到 ./index.html#subscribe 的深色 Subscribe 按钮。移动端 Menu 按钮会打开一个可访问的展开面板，其中包含相同的文件链接。页脚重复字标和 [SHOW_TAGLINE]，显示相同的导航、一个 Copy show link 按钮、小字文本 'An independent show for [AUDIENCE].'，以及可选的 [CREDIT] 链接。
   布局：羊皮纸色背景上的吸顶页眉，底部有 1px 分隔线，桌面端高度 76px，移动端高度 64px。桌面端导航位于右侧；移动端导航在下方展开，不覆盖页面。页脚为墨色色带配羊皮纸色文本，桌面端为 2 列布局，移动端内容堆叠。
   动效：页眉链接悬停时从左向右出现下划线。移动端展开面板在 180ms 内淡入并下移 8px；吸顶尺寸变化无动画。
2. **最新单集主视觉与自定义播放器** — 眉题：'[BRAND] · A podcast about [SHOW_TOPIC]'。H1：'[SHOW_TAGLINE]'。辅助文案：'Conversations with the people who notice the details, for [AUDIENCE].'。主 CTA 'Browse episodes' 和文本 CTA 'Meet the guests'。精选第 42 集，'Why the Humble Doorknob Turns'，元数据为 'EP 42 · OBJECTS · 31 MIN'，摘要为 'A lever, a latch, and the ergonomics hiding in plain sight.'。播放器使用 public/audio/episode-preview.wav，并明确标注为 '24-second original preview'。提供播放/暂停、后退 15 秒、前进 30 秒、键盘可访问的进度拖动条、已播放时间与总时长、1x/1.25x/1.5x/2x 倍速循环切换、静音和音量。当目标位置会超出实际预览时长时，禁用跳转控件。在单集详情页点击播放会加载同一预览和所选单集记录，但不自动播放。
   布局：桌面端使用 12 列主视觉，文案位于第 1–5 列，studio-hero 图片位于第 6–12 列。图片采用 16:9 裁切和 16px 圆角；Paper 音频播放器面板与其底边重叠 48px，并横跨第 6–11 列。最新单集标题位于播放器控件上方。移动端依次堆叠眉题、H1、文案、CTA、图片，然后是播放器，无重叠。在移动端前 844px 内保持完整图片和主播放控件可见，且不隐藏文案。
   动效：主视觉图片和文案以标准显现效果进入。播放图标交叉淡入淡出为暂停图标，柿子色进度填充跟随实际音频时间。无自动播放或环境动效。
3. **主题采样** — 标题：'Follow a thread.'。引言：'Start with a question and stay for the connections.'。显示四张链接主题卡片：Objects — 'Small things, serious thinking.'；Cities — 'The choices hiding in public space.'；Behavior — 'Why we respond the way we do.'；Materials — 'Texture, tension, and the physical world.'。每张卡片链接到 ./episodes.html?topic=<lowercase-topic>，归档页会初始化该筛选条件。
   布局：区块标题横跨 4 列；2×2 卡片网格横跨其余 8 列。每张卡片有一个小型确定性 SVG 封面片段、等宽主题标签、一句话描述和 ArrowRight。移动端使用单列，配 96px 横向封面缩略图。
   动效：应用标准同级卡片显现效果和封面悬停缩放。
4. **近期单集** — 标题：'New from the studio.'。链接：'All episodes'。精选第 41 集 'The Secret Life of Street Bollards'（28 分钟，Cities，Theo Wren）、第 40 集 'A Better Button for Bad Weather'（24 分钟，Materials，Amara Pell）和第 39 集 'Why Elevators Have Mirrors'（32 分钟，Behavior，Sera Quince）。每行包含其生成的 SVG 封面、单集编号、主题、时长、标题、一句话摘要，以及指向 ./episode.html?slug=<slug> 的 'Notes & preview' 链接。
   布局：三行全宽横向行，以细线分隔。桌面端封面为 144px 正方形，标题占 6 列，嘉宾和主题占 3 列，箭头操作占 1 列。移动端行变为 96px 封面在上，紧凑元数据和标题在下，操作位于底部。
   动效：行以 80ms 错峰显现；箭头和封面在悬停时响应。
5. **主持人与近期嘉宾** — 标题：'The voices in the room.'。主持人卡片使用 host-mara.webp 表示 Mara Venn，host-ivo.webp 表示 Ivo Sen。Mara 的简介：'A service designer who collects overlooked details and asks one more question.'。Ivo 的简介：'An engineer and radio maker interested in how ordinary systems earn our trust.'。近期嘉宾卡片使用 guest-lena.webp、guest-theo.webp 和 guest-amara.webp，分别表示工业设计师 Lena Ort、公共空间研究员 Theo Wren 和材料科学家 Amara Pell。将每位嘉宾链接到 ./guests.html#<first-name-lowercase>。
   布局：两张大型主持人卡片在 2 列内部网格中占据左侧 7 列；三张紧凑嘉宾卡片堆叠在右侧 5 列。主持人肖像采用 4:5 裁切，嘉宾肖像为 72px 正方形。移动端，如果名字能放下，主持人保持 2 列网格，否则堆叠；嘉宾行保持横向。
   动效：肖像仅使用标准显现效果；无图片视差。
6. **订阅与邮件更新** — 锚点 id='subscribe'。标题：'Keep the thread going.'。文案：'New episodes, occasional notes, nothing else.'。提供三个操作：'RSS feed' 打开 ./feed.xml；'Copy show link' 复制当前站点的 ./index.html URL，并变为带 Check 图标的 'Copied'；'Email updates' 展开一个经过验证的邮件表单。邮件表单显示 'Demo only: your address is stored in this browser and is not sent anywhere.'，将地址保存在 localStorage 中，并在有效提交后显示 'You are on the local list.'，同时提供 'Remove' 操作。
   布局：牛血红色区块配羊皮纸色文本，标题位于第 1–6 列，操作堆栈位于第 8–12 列。移动端按钮为全宽。内联邮件表单在按钮下方展开，不打开模态框，并包含可见标签。
   动效：表单在 200ms 内展开，复制确认持续 2 秒；减少动效时两者均立即完成。

### 可搜索的单集档案（`episodes.html`）
1. **档案介绍** — 眉题：'THE COMPLETE ARCHIVE'。H1：'Every episode, every thread.' 文案：'Search by idea, guest, or object, then filter by the thread you want to follow.' 包含可见的搜索标签 'Search episodes' 和占位符 'Try “buttons”, “Lena”, or “cities”'。
   布局：紧凑的编辑式页头，H1 位于第 1–8 列，搜索输入框位于第 9–12 列，与基线对齐。移动端上，搜索框以全宽堆叠在介绍下方。
   动效：标准单次显现；搜索聚焦使用 2px 柿子色（persimmon）轮廓。
2. **筛选器与单集结果** — 提供 All、Objects、Cities、Behavior、Materials 和 Standards 筛选胶囊，以及实时结果计数和 Clear filters 操作。搜索与主题筛选可组合使用，在标题、摘要、主题和嘉宾中不区分大小写匹配，并即时更新。加载时读取 ?topic=。空状态：'No episodes found. Try another phrase or clear the filters.' 在 content.ts 中精确存储八条记录：EP42 'Why the Humble Doorknob Turns'，31 分钟，Objects，Lena Ort，'A lever, a latch, and the ergonomics hiding in plain sight.'；EP41 'The Secret Life of Street Bollards'，28 分钟，Cities，Theo Wren，'How a small post negotiates safety, movement, and public space.'；EP40 'A Better Button for Bad Weather'，24 分钟，Materials，Amara Pell，'Gloves, rain, and the physical interface we still need.'；EP39 'Why Elevators Have Mirrors'，32 分钟，Behavior，Sera Quince，'Perceived time, awkward silence, and a reflective design trick.'；EP38 'The Color of Emergency Exits'，27 分钟，Standards，Nico Vale，'How a safety color becomes a shared language.'；EP37 'The Quiet Engineering of Paper Clips'，22 分钟，Objects，Lena Ort，'Wire, spring, and the beauty of almost no instructions.'；EP36 'Who Owns the Corner Bench?'，35 分钟，Cities，Theo Wren，'A small seat reveals big ideas about welcome and belonging.'；EP35 'The Sound of a Good Switch'，26 分钟，Materials，Amara Pell，'Why a click can make an ordinary object feel precise.' 每个结果链接到 ./episode.html?slug=<slug>。
   布局：筛选胶囊在结果上方换行排列，桌面端结果计数右对齐。单集结果使用与首页相同的水平行，但封面为 160px，摘要为两行。移动端在宽度大于 480px 时使用 2 列卡片网格，在 390px 时使用单列；筛选胶囊换行排列，而不会导致页面水平溢出。
   动效：筛选变化时，结果列表在 160ms 内交叉淡入淡出，不对条目高度做动画。通过 aria-live 播报结果计数。
3. **档案订阅条** — 使用标题 'Not sure where to start?' 和文案 'Play the latest preview, then follow the thread that catches your attention.' 按钮链接到 ./index.html 和 ./index.html#subscribe。
   布局：Paper 面板，内边距 32px，标题在左，两个按钮在右，移动端堆叠。
   动效：仅标准显现。

### 单集笔记与章节（`episode.html`）
1. **单集页头与预览** — 读取 slug 查询参数并渲染匹配的单集；没有 slug 或 slug 未知时，渲染 EP42，绝不出现空白或未找到状态。显示指向 ./episodes.html 的面包屑、单集编号、主题、时长、标题、摘要、嘉宾，以及首页使用的同一自定义预览播放器。预览按钮绝不自动播放，并始终使用随包提供的 24 秒原创样本。
   布局：桌面端页头使用 5 列方形 SVG 封面和 7 列单集文案，播放器在下方全宽显示。移动端堆叠元数据、标题、封面和播放器。在内容模型中，标题保持在最多 12 个词的可读上限内。
   动效：标准显现和即时的音频控件反馈。
2. **节目笔记、章节与要点** — 标题：'Inside this episode'。为 EP42 撰写以下三段：'A doorknob seems solved until a closed door meets wet hands, a full bag, or a stiff wrist. Industrial designer Lena Ort joins the hosts to explain why the lever handle is more than a stylistic alternative.'；'The conversation moves from torque and spindle springs to the difference between a shape that looks intuitive and one that actually communicates its use. Lena brings three anonymous handle studies and explains what a five-second doorway observation can reveal.'；'The takeaway is not that one fitting wins everywhere. It is that a small everyday object becomes better when designers account for the broadest range of hands, habits, and hurried moments.' 要点：'Form can instruct without a label.'、'Comfort is a mechanical property, not only a feeling.' 和 'Test the doorway, not just the drawing.' 章节：00:00 'The handle that fooled us'、06:18 'From grip to torque'、14:42 'A universal design lesson' 和 24:10 'What we notice now'。选择章节会高亮其对应的笔记面板和时间戳；它不会假装 24 秒预览包含完整单集。对于其他每一集，在 content.ts 中根据其标题、摘要和嘉宾撰写独特的三段式节目笔记正文、三个具体要点和四个真实感的时间戳章节；绝不重复 EP42 的笔记。
   布局：12 列布局，章节导航位于第 1–4 列，节目笔记位于第 6–12 列。章节按钮为全宽行，带有等宽时间戳和牛血红（oxblood）选中状态。笔记的行长为 68 字符，正文 18px，段落间距宽松。要点在下方以三行编号形式出现。移动端上，章节变为笔记上方的水平可选列表，不超出其自身容器。
   动效：选中的章节笔记使用 180ms 背景高亮；不自动滚动，也不跳转音频。
3. **嘉宾背景与订阅** — 对于特邀嘉宾 Lena Ort、Theo Wren 和 Amara Pell，显示匹配的肖像、角色、简短传记，以及指向嘉宾页面的链接。对于 Sera Quince 和 Nico Vale，仅在文字传记旁使用代码绘制的字母组合装饰，并保留页面现有的照片锚点；不要虚构额外肖像。包含一个紧凑的 'Subscribe to [BRAND]' 链接，指向 ./index.html#subscribe。
   布局：在宽屏上将此侧栏放在笔记下方的右栏中，或在较小屏幕上作为紧接笔记之后的 Paper 卡片。肖像为 96px 方形，文本保持左对齐。
   动效：仅标准显现。
4. **相关单集** — 标题：'Keep following the thread.' 选择另外三集，优先相同主题，其次相同嘉宾。复用单集卡片，包含 SVG 封面、标题、元数据和可用的文件链接。
   布局：桌面端三张等宽卡片，390px 时单列堆叠，间隔 24px。
   动效：交错显现和封面悬停缩放。

### 嘉宾与主持人（`guests.html`）
1. **嘉宾名录引言** — 眉题：'GUESTS & HOSTS'。H1：'Good questions need generous guests.' 文案：'Designers, researchers, and close observers bring the evidence behind each conversation.'
   布局：H1 跨 8 列，辅助文案位于其下方，行宽 52 字符，底部间距 64px。移动端自然堆叠。
   动效：标准显现。
2. **精选嘉宾简介** — 创建三个带锚点的简介。Lena Ort（id='lena'），工业设计师：'Lena studies the small mechanical choices that make objects easier to understand. Her current work focuses on accessible handles, controls, and fastenings.' 剧集：42 和 37。Theo Wren（id='theo'），公共空间研究员：'Theo documents how streets communicate welcome, caution, and care. His field notes turn overlooked infrastructure into stories about shared life.' 剧集：41 和 36。Amara Pell（id='amara'），材料科学家：'Amara explores how surfaces respond to weather, wear, and touch. She translates lab detail into practical lessons for anyone who makes things.' 剧集：40 和 35。每个剧集标题都链接到其详情 URL。
   布局：三张等宽的垂直卡片，3:4 肖像裁切，姓名和角色位于简短简介上方，然后是紧凑的剧集链接。使用 guest-lena.webp、guest-theo.webp 和 guest-amara.webp。桌面端卡片排成一行；移动端堆叠，若仍可读则肖像以 40% 宽度置于文字旁，否则全宽。
   动效：交错显现；剧集链接悬停时加下划线。
3. **主持人简介** — 标题：'Your regular hosts'。展示 Mara Venn 和 Ivo Sen，使用 host-mara.webp 和 host-ivo.webp，以及首页中的相同传记。添加一条共享说明：'They record around one wooden table, with one rule: follow the interesting detail.' 当 HOST_NAMES 变化时，连贯地重写两个姓名和传记。
   布局：一个墨色带，包含两个 6 列简介。每个简介左侧为 160px 方形肖像，右侧为羊皮纸色文字。移动端肖像堆叠在文字上方。
   动效：仅标准显现。
4. **嘉宾订阅条** — 标题：'Hear the next conversation.' 文案：'Follow [BRAND] for new episodes and notes from the studio.' 按钮：'Latest episode' 链接到 ./index.html，'Subscribe' 链接到 ./index.html#subscribe。
   布局：简单的居中文本块，带两个内联按钮，移动端全宽堆叠。
   动效：仅标准显现。

## 资源

- 图片：将 https://media.vibefather.ai/assets/9ae01d35-9734-4df7-8dc6-13aefcabdd03/studio-hero.webp 下载到 public/images/studio-hero.webp。Alt：'Two podcast hosts recording across a wooden table in a warm studio.' 用作 index-hero 的大图锚点。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录相同的署名和来源 URL。
- 图片：将 https://media.vibefather.ai/assets/9ae01d35-9734-4df7-8dc6-13aefcabdd03/host-mara.webp 下载到 public/images/host-mara.webp。Alt：'A podcast host in a rust jacket beside a studio window.' 用于 index.html 和 guests.html 上的第一位主持人。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录相同的署名和来源 URL。
- 图片：将 https://media.vibefather.ai/assets/9ae01d35-9734-4df7-8dc6-13aefcabdd03/host-ivo.webp 下载到 public/images/host-ivo.webp。Alt：'A podcast host in an oxblood overshirt against a cream studio wall.' 用于 index.html 和 guests.html 上的第二位主持人。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录相同的署名和来源 URL。
- 图片：将 https://media.vibefather.ai/assets/9ae01d35-9734-4df7-8dc6-13aefcabdd03/guest-lena.webp 下载到 public/images/guest-lena.webp。Alt：'An industrial designer seated in warm directional studio light.' 用于首页、单集页面和嘉宾目录中的 Lena Ort。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录相同的署名和来源 URL。
- 图片：将 https://media.vibefather.ai/assets/9ae01d35-9734-4df7-8dc6-13aefcabdd03/guest-theo.webp 下载到 public/images/guest-theo.webp。Alt：'A public-space researcher in a walnut-brown jacket against a warm neutral background.' 用于首页、单集页面和嘉宾目录中的 Theo Wren。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录相同的署名和来源 URL。
- 图片：将 https://media.vibefather.ai/assets/9ae01d35-9734-4df7-8dc6-13aefcabdd03/guest-amara.webp 下载到 public/images/guest-amara.webp。Alt：'A materials scientist in a cream shirt beside a terracotta studio wall.' 用于首页、单集页面和嘉宾目录中的 Amara Pell。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录相同的署名和来源 URL。
- 图标：仅对通用界面图标使用 lucide-react（ISC）：Play、Pause、Search、ArrowRight、SkipBack、SkipForward、Volume2、VolumeX、Copy、Check、Menu、X、Rss、Mail 和 ChevronDown。使用 currentColor 和可访问标签渲染；不要使用品牌图标。在 ASSETS.md 中记录该包和许可证。
- 字体：安装并自托管 @fontsource-variable/fraunces、@fontsource-variable/inter 和 @fontsource/ibm-plex-mono（400 和 500），均为 OFL。在本地导入所需字重，并在 ASSETS.md 中列出每个包和许可证；不要使用 Google Fonts URL。

## 不要做
- 不要使用真实的播客名称、标志、封面图、宣传语、单集文案、嘉宾简介或可识别的人物；每一个节目、人物和故事都必须是虚构且原创的。
- 不要使用第三方单集音频、音乐采样、语音或远程流。只打包原创生成的 WAV，绝不要自动播放它，并保持 24 秒预览标签真实准确。
- 不要使用外部播客平台的标志，也不要让任何真实平台成为虚构节目身份的一部分；只使用通用的 RSS、电子邮件和复制链接订阅操作。
- 不要在成品网站中热链任何资源，不要使用占位图服务，也不要添加 Unsplash、Pexels、Pixabay、Google Images、CC BY-NC 或 CC BY-SA 素材。将提供的六张生成图片保留在本地，并在 ASSETS.md 中保留其署名信息。
- 不要添加其他人物、肖像、品牌标记、吉祥物、动漫或游戏角色，或标志性插画。单集封面必须是原创的代码绘制 SVG，图标必须是通用的 Lucide 符号。
- 不要加载商业字体、fonts.googleapis.com、fonts.gstatic.com、Adobe Fonts、CDN 脚本、CDN 样式表、分析工具或任何第三方 API。每个字体、图标、图片、脚本和音频文件都必须自托管。
- 不要使用 Aceternity UI 源码、Tailwind Plus 或 Tailwind UI 源码、购买的模板、没有允许许可证的包，或受限的组件源码。
- 不要添加后端、服务器代码、API 路由、数据库、身份验证、外部表单提交或真实电子邮件收集。搜索、筛选、播放器状态、章节选择、复制反馈和已披露的电子邮件演示必须完全在浏览器中运行。
- 不要使用裸目录内部链接或需要重写的客户端路由。只链接到 ./index.html、./episodes.html、./episode.html?slug=...、./guests.html 和文件锚点；没有有效 slug 的 episode.html 必须显示 EP42。
- 不要发布 source map、dist/ 中的源文件、超过 20 MB 总限制的资源、控制台错误、水平页面溢出或无法访问的未标注控件。在 1440×900 和 390×844 下验证。
- 不要自动播放媒体、滚动劫持，或忽略 prefers-reduced-motion。在禁用动效时，保持键盘操作、可见焦点状态、可读对比度和功能控件可用。
- 不要添加 SEO 描述、Open Graph 标签、JSON-LD、站点地图、堆砌关键词的标题，或将日期作为装饰性元数据；一个普通的 [BRAND] 标题和 favicon 就足够了。
- 当变量变化时，不要保留默认名称、单集主题、节目笔记、替代文本或 feed 文案不变；所有依赖内容都必须从 src/content.ts 重写，并且 feed 必须匹配。

---
— Prompt by VibeFather · https://vibefather.ai/t/podcast-show-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
