> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 每日塔罗占卜页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为虚构品牌 [BRAND] 打造一个精致的单页塔罗占卜小工具，使用原创的六张牌组 [DECK_NAME]。默认邀请语为 '[TAGLINE]'，面向 [AUDIENCE]，反思主题围绕 [REFLECTION_FOCUS] 展开。访客可以洗开一扇富有触感的牌背扇形，揭示一张持续存在的每日牌，或展开一个三张牌的过去-现在-未来牌阵，阅读原创的正位或逆位解读，并下载一张由 canvas 渲染的分享图片。这是一副原创的象征性牌组，并非对传统或商业塔罗牌的复刻。

- 受众：主要受众是 [AUDIENCE]：喜欢精美互动物件、日记提示和简短日常仪式的成年人。它也适合设计师和创作者，将此形式改编用于肯定语、神谕卡或创意反思。无需任何塔罗知识基础。
- 目标：让首次访客通过两个有意的操作，从引人入胜的视觉牌组走向一次完整、可理解的解读。让每日牌在访客本地日期内跨刷新保持稳定，让三张牌解读可自由重复，并提供一份有用的下载纪念品，同时保持每一次交互私密且完全在客户端进行。
- 语调：安静、诗意、脚踏实地、非指导性。使用精确的反思提示而非预言。绝不声称能预测未来，也不就健康、金钱、关系或安全提供建议。一条可见的“仅供娱乐与反思”说明是体验的一部分，而非隐藏的小字。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：使用自定义属性的原生 CSS
- 库：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、lucide-react（ISC）、@fontsource/cormorant-garamond（OFL-1.1）、@fontsource/manrope（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 创建一个 Vite 6 React 18 TypeScript 项目。在 vite.config.ts 中设置 base: './'、build.outDir: 'dist' 和 build.sourcemap: false。不使用路由，也不使用后端。
  - 将所有变量值、派生的品牌文案、六条卡片记录、正位与逆位含义、反思提示、说明和常见问题保留在 src/content.ts 中。当变量值变化时，重写所有依赖的标题、标签、存储键命名空间、含义和提示，以适配 [BRAND]、[TAGLINE]、[AUDIENCE]、[DECK_NAME] 和 [REFLECTION_FOCUS]；不要留下默认品牌的残留。
  - 通过列出的 Fontsource 包自托管 Cormorant Garamond 500 和 600 以及 Manrope 400、500、600 和 700。在 src/main.tsx 中仅导入所需的字重。
  - 在 src/styles.css 中使用自定义属性、8px 间距系统、命名的 shuffle 和 flip 关键帧以及明确的桌面和移动布局来实现设计。使用内联 CSS 或本地 SVG 实现微妙的纸张纹理；不要获取纹理。
  - 仅将 Lucide 图标用于界面操作：Sparkles 用于原始几何品牌点缀，RotateCcw 用于洗牌，Download 用于分享，ArrowRight 用于主要操作，X 用于关闭，ChevronDown 用于可展开的说明。不要使用任何品牌或花色图标。
  - 将阅读交互定义为显式状态机：idle、shuffling、ready、revealing 和 revealed。在重置或模式更改时清除待处理的动画计时器，以便快速点击不会创建重复抽取。
  - 每日阅读使用本地浏览器日期，而非 UTC 日期。从 [BRAND] 派生的 slug 和本地 YYYY-MM-DD 日期命名 localStorage 键。存储一个包含日期、卡片 id、方向和模式的有版本对象；验证恢复的数据，并从格式错误的存储中静默恢复。
  - 使用原生 Canvas 2D API 以 1080 × 1350 像素实现可下载的分享图片，包括文本换行辅助函数和 toBlob 下载。无需截图服务、canvas 依赖、Web Share 要求或远程请求。
  - 在构建之前，将六张生成的卡片插图下载到 Assets 中列出的确切公共路径。使用相对安全的公共 URL 引用它们，并创建 ASSETS.md，包含每个资源路径、来源、作者或生成器以及许可证。

## 变量
- [BRAND] — 品牌（默认："Asterhollow"）。一个为阅读体验而虚构的、优雅的两到三音节名称。
- [TAGLINE] — 邀请语（默认："A quiet card for the day ahead."）。一句简短、不作预测的邀请，让人暂停并反思。
- [AUDIENCE] — 受众（默认："curious minds who enjoy a nightly reflection ritual"）。一个用平实语言描述该仪式面向谁的短语。
- [DECK_NAME] — 牌组名称（默认："The Night Field Deck"）。为六张牌象征牌组起的原创名称。
- [REFLECTION_FOCUS] — 反思主题（默认："creativity, relationships, and everyday choices"）。三个平易近人的主题，用于调整牌义和提示语。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/daily-tarot-reading-page（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 午夜墨色（Midnight ink）`#0C0B12` — 页面背景与分享画布底色
- 隆起茄紫（Raised aubergine）`#17131E` — 阅读台、对话框与抬升面板
- 柔梅紫（Soft plum）`#241A29` — 卡背、悬停表面与细微渐变区域
- 羊皮纸色（Parchment）`#F2E8D5` — 主文本与浅色卡片细节
- 淡薰衣草色（Muted lavender）`#B9ACBE` — 次要文案与非活动控件
- 古金色（Antique gold）`#D5B77D` — 细线、活动状态、焦点环与主按钮背景
- 深金墨色（Deep gold ink）`#21180D` — 古金色按钮上的文字
- 发丝梅紫（Hairline plum）`#433348` — 低视觉权重的边框与分隔线

### 字体排印（Typography）
- 展示文字、卡名与阅读引文：Cormorant Garamond（OFL），字重 500/600
- 正文、控件、标签与解读文字：Manrope（OFL），字重 400/500/600/700

### 布局与动效（Layout & motion）
- 间距：使用 8px 基础网格。内容外壳最大宽度 1240px，桌面端侧内边距 32px，移动端 20px。页头高度 76px。桌面端区块垂直内边距 104px；移动端区块 64px。Hero 文案与阅读台在桌面端间隔 64px，移动端间隔 36px。阅读正文保持每行 62–68 个字符。
- 圆角：大型阅读与分享面板使用 28px，实体卡片与小内容面板使用 18px，分段控件与按钮使用 999px。实体卡片严格保持 3:4 宽高比，1px 古金色边框、45% 不透明度，以及柔和的 0 24px 70px rgba(0,0,0,.38) 阴影。
- 动效：在 Shuffle 时，六张卡组成的扇形在 240ms 内收拢为叠放的牌堆，交替的卡片分三次、每次 180ms 向左右分开，然后在 300ms 内回到扇形。在这段 1.1s 的序列期间禁用控件，并且只使用 transform 与 opacity。
- 动效：在 Reveal 时，选中的一张或多张卡片在 320ms 内从牌堆移动到各自的阅读位置，然后每张内层卡片在 680ms 内从显示卡背的 rotateY(0deg) 旋转到显示卡面的 rotateY(180deg)。三张卡片的翻转以 140ms 错开。使用 perspective: 1200px、transform-style: preserve-3d 与 backface-visibility: hidden。
- 动效：使用克制的 180ms 悬停抬升，最多 6px，以及边框颜色变化和图标旋转。绝不要让整个页面漂移，也不要添加自定义光标。
- 动效：滚动显现仅对指南与牌堆区块可选：向上移动 16px，450ms ease-out 过渡，每个区块一次，且不延迟内容访问。
- 动效：在 prefers-reduced-motion: reduce 下，移除扇形运动、错开、视差、平滑滚动与 3D 旋转。立即显示下一状态，最多使用 100ms 的不透明度变化；所有阅读功能仍然可用。
- 图像：使用恰好六张原创生成的树胶水彩与金墨象征性插画，[DECK_NAME] 中的每张卡片各一张。每张图像都在代码构建的 3:4 卡片框架内满版显示，不包含生成的字体排印或边框。共享的视觉语言是带纹理的午夜靛蓝、炭黑、灰梅紫、羊皮纸色与柔和古金色，带有柔和的烛光照亮效果与精细的木版画式颗粒。不要模仿任何现有的塔罗牌组。卡背单独用 CSS/SVG 绘制，由原创同心线条、中央八角星与六个小轨道点组成；不使用生成的图像。交互式扇形牌堆是 Hero 的视觉锚点，而不仅仅是字体排印。

## 页面与区块
### [BRAND] — [TAGLINE] (`index.html`)
1. **页头与阅读主视觉区** — 创建一个紧凑的页头，包含一个原创的八角星 Lucide/CSS 装饰元素、使用 Cormorant Garamond 600 字体的 [BRAND]，以及两个锚点链接，分别标注为 'The deck' 和 'How it works'。在右侧合适位置放置一个小胶囊标签，内容为 'For entertainment & reflection'。在移动端保留品牌名和胶囊标签，并将两个链接置于下方一行，高度为 44px。主视觉区的眉题（eyebrow）为 '[DECK_NAME] · AN ORIGINAL SIX-CARD DECK'。默认 H1 为 'One quiet moment. A different perspective.'。将 [TAGLINE] 直接放在其下方，随后是 'A reflective ritual for [AUDIENCE], exploring [REFLECTION_FOCUS]. No sign-up. Your reading stays in this browser.'。使用一个双选项分段控件，标注为 'Daily card' 和 'Three cards'。每日卡片的辅助说明文字为 'One card, held for your local day.'。三卡片的辅助说明文字为 'Past, present, and future — a fresh spread whenever you choose.'。初始主按钮文字为 'Shuffle the deck'；洗牌后变为 'Reveal today's card' 或 'Reveal three cards'。一个次要的 'How it works' 锚点链接滚动至指南区域。
   布局：在 1240px 外壳内使用 12 列主视觉网格，文案和控件占 5 列，阅读台占 7 列。将 H1 设置为 clamp(48px, 5.7vw, 80px)，行高 .96，字间距 -.035em。阅读台是一个 600px 高的圆角面板，带有微妙的径向梅子色光晕、细边框，以及六张可见的卡背，从共享的下方中心原点呈扇形展开。每张卡背为 190 × 285px；使用 -18、-11、-4、4、11 和 18 度的旋转角度，水平偏移从 -150 到 150px。在 390px 宽度下，将文案堆叠在 380px 高的阅读台上方，使用 92 × 138px 的卡背，并将旋转角度减小至 -12、-7、-2、2、7 和 12 度，以确保没有卡片溢出。在移动端将主操作按钮保持在阅读台上方，所有点击目标至少为 44px。
   动效：扇形以 500ms 的不透明度和 12px 的上移进入。洗牌和揭示遵循设计中的状态机。模式切换会将瞬态三卡片状态返回至空闲状态，而现有的每日阅读保持可用并被恢复，而非重新抽取。
2. **交互式阅读与解读** — 这是阅读台内部及紧邻下方的实时结果区域，而非独立路由。抽牌前显示提示 'Shuffle, then turn your card face-up.'。在每日模式下，仅揭示一张牌，并为其本地日保存其 id 和正位/逆位方向。当天重新加载必须显示相同结果，即使在模式切换后也是如此。使用基于日期种子的首次抽取，然后持久化；不要使用远程随机服务。在三卡片模式下，使用 Fisher–Yates 洗牌抽取三张不同的牌，并独立分配 25% 的逆位概率。将其位置标注为 'Past'、'Present' 和 'Future'。一个 'Shuffle a new spread' 按钮仅重置三卡片阅读。对于每个结果，显示牌名、方向、25–45 词的解读，以及一个单独的反思提示。仅将插图旋转 180 度以表示逆位牌；保持所有标签正立。默认阅读语言必须来自牌组区块中的六条原创牌记录，而非通用的算命文本。
   布局：在桌面端的每日模式下，将揭示的 240 × 360px 牌放在左侧，其解读放在右侧 360px 宽的列中，带有细金色分隔线和 'TODAY'S CARD' 眉题。对于三张牌，使用三列牌行，最大牌宽 170px，位置标签在上方，然后在下方显示三个对齐的解读面板。在移动端，每日解读位于居中的 210px 牌下方；三张牌保持为三列等宽行，间距 8px，而解读面板堆叠为可展开的详情，第一个默认展开。对完成的阅读标题使用 aria-live='polite'，并在最后一次翻转后将焦点移至该标题。
   动效：使用指定的 3D 翻转揭示选中的牌。解读文本仅在其牌完成翻转后淡入。逆位方向在动画前分配，且在重新渲染或重新加载时绝不改变。
3. **仪式如何进行** — 将该区块标题设为 'A small pause, in three turns.'。使用三个编号步骤：'01 — Shuffle' / 'Let the cards gather, separate, and settle. There is nothing to get right.'；'02 — Turn' / 'Choose one card for today or three cards for a wider view. Reversed cards offer another angle, not a warning.'；'03 — Reflect' / 'Keep the sentence or question that feels useful. Let the rest go.'。为三卡片位置添加一个紧凑的说明条：'Past — what you carry in'、'Present — what asks for attention'、'Future — what you might practice next'。此语言框架表达可能性，而非预测。
   布局：将区块标题放在左侧窄列中，三个步骤面板放在右侧堆叠列中。每个步骤是一个网格，包含 64px 编号、150px 标题和弹性描述，由细线分隔。位置说明条在下方横跨全宽，分为三个等宽单元格。在移动端，堆叠标题和步骤，保持每个步骤的编号和标题在同一行，并堆叠三个位置单元格，不出现水平滚动。
   动效：仅使用一次微妙的区块显现效果，以及在悬停或键盘聚焦时 180ms 的边框高亮。不要固定此区块或对其内容进行滚动驱动动画。
4. **认识原创牌组** — 将该区块标题设为 'Six symbols. Another way in.'。介绍 [DECK_NAME] 为一个为 [REFLECTION_FOCUS] 创建的紧凑原创牌组。每张牌是一个按钮，可在原生对话框中打开其完整的正位和逆位文本。对于默认变量，逐字使用以下默认记录，并针对替代变量进行自然调整：The Ember — 正位：'Protect the small beginning. Give one idea your attention before asking it to become more.' 逆位：'Your energy may be scattered. Lower the stakes and return to one warm, manageable task.' 提示：'What deserves a little more of my care today?'。The Current — 正位：'Let circumstances move without gripping every outcome. A flexible next step will carry farther than a rigid plan.' 逆位：'Notice where resistance has become habit. Change one condition rather than pushing harder.' 提示：'Where can I allow an easier route?'。The Threshold — 正位：'A useful transition is near, but it asks for a deliberate choice. Name what you are ready to leave and what comes with you.' 逆位：'Pause before forcing closure. An unanswered question may need information, not urgency.' 提示：'What am I truly ready to step toward?'。The Garden — 正位：'Small routines are shaping more than you can see. Tend the environment around your goal, not only the goal itself.' 逆位：'Something needs pruning. Remove one obligation or distraction before adding another.' 提示：'What would help my better habits take root?'。The Mirror — 正位：'Look at the story you are telling about yourself. Keep what is honest and soften what is merely familiar.' 逆位：'Avoid using self-reflection as self-judgment. Ask for a kinder, more complete interpretation.' 提示：'Which assumption about myself can I revisit?'。The Orbit — 正位：'Return to the people and practices that restore perspective. You do not have to solve everything from the center of the problem.' 逆位：'You may be circling the same thought. Change your setting or seek another viewpoint.' 提示：'What helps me see the wider pattern?'。对话框还显示 'Upright'、'Reversed' 和 'A question to carry' 标题。
   布局：使用六列桌面画廊，间距 16px；每张牌包含其 3:4 插图、编号 01–06 和下方名称。在平板端使用三列，在 390px 宽度下使用两列，间距 12px。原生对话框最大宽度 760px，牌图在左，可滚动释义在右，包含可见的 X 按钮、Escape 支持、焦点陷阱，并将焦点返回至触发牌。在移动端，对话框图片和释义在 90svh 内堆叠。
   动效：卡片上浮不超过 6px，并在悬停/聚焦时提亮其金色边框。对话框进入为 160ms 不透明度和 8px 上移；减少动效用户获得即时对话框。
5. **分享卡工作室** — 将该区块标题设为 'Keep the thought, not the fortune.'。解释：'Turn your revealed reading into a private image. It is drawn on your device and never uploaded.'。在揭示之前，禁用下载按钮并显示 'Reveal a card to create your image.'。在任一阅读之后，启用 'Download reading card'。1080 × 1350 PNG 包含 [BRAND]、[DECK_NAME]、访客的本地化日期、牌面艺术和名称、方向、每张牌一条缩短的解读，以及第一个反思提示。每日布局使用一张大型居中插图；三卡片布局在 'Past · Present · Future' 上方使用三张窄插图。以 'For entertainment and reflection only' 结束图片。从派生的 [BRAND] slug 和本地日期生成文件名，例如 'asterhollow-2026-11-05.png'，绝不使用硬编码的默认品牌名。
   布局：使用双栏区块，左侧为说明和下载控件，右侧为实时响应式画布预览。画布元素的 CSS 宽高比为 4:5，max-width 为 440px，边框圆角为 24px，内部精确尺寸为 1080 × 1350。在午夜墨色上绘制羊皮纸文字、精细金色边框，以及已下载的本地图片（在它们加载完成后）。显式换行文本，整齐裁剪图稿，并在启用下载前等待图片解码完成。在移动端，将控件堆叠在居中预览上方。
   动效：在显示后以 180ms 对更新后的画布预览进行交叉淡入淡出。显示一个小的内联“Image ready”状态，并在下载按钮标签变化时保持其宽度不变。
6. **问题、免责声明和页脚** — 将 FAQ 标题设为“Before you turn a card.”。包含以下四个精确的默认问题和答案：“Does this predict my future?” — “No. The cards are original visual prompts for entertainment and reflection. They do not predict events and are not medical, mental-health, legal, or financial advice.”；“Where is my daily reading stored?” — “Only in this browser's local storage, keyed to your local day. There is no account and nothing is sent to a server. Clearing site data removes it.”；“Can I draw more than once?” — “Your daily card stays the same for the local day. The three-card spread can be shuffled again whenever you want another set of prompts.”；“What does reversed mean here?” — “It simply opens another interpretation of the symbol. It is not a bad omen, a warning, or a result to worry about.” 在 FAQ 下方放置一条清晰可见的说明：“For entertainment and reflection only. Take what resonates and leave the rest.” 页脚重复 [BRAND]、“An original digital deck for a quieter moment.”，以及可选的 [CREDIT] 链接。
   布局：在单个 max-width 为 860px 的列中使用原生 details/summary 元素，以 1px 梅紫色（plum）线条分隔，具有舒适的 22px 垂直内边距，以及一个旋转的 ChevronDown。将免责声明放在下方一个带边框的羊皮纸与金色（parchment-and-gold）提示框中。页脚在桌面端为简单的 flex 行，在移动端堆叠，不包含社交图标、虚假推荐语或编造的使用数据。
   动效：使用 160ms 的 chevron 旋转，不使用可能裁剪文本的高度动画。遵循减少动态效果（reduced motion）设置。

## 资源

- image：The Ember 卡牌插画。将 https://media.vibefather.ai/assets/9a7129f3-3a18-444d-962a-8be79495c87b/ember.webp 下载到 public/images/cards/ember.webp。Alt：'A geometric glass lantern glowing above a winding midnight path.' 用于 The Ember 卡牌、其解读和对话框，以及抽到时的分享画布。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- image：The Current 卡牌插画。将 https://media.vibefather.ai/assets/9a7129f3-3a18-444d-962a-8be79495c87b/current.webp 下载到 public/images/cards/current.webp。Alt：'Two luminous streams weaving among smooth stepping stones.' 用于 The Current 卡牌、其解读和对话框，以及抽到时的分享画布。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- image：The Threshold 卡牌插画。将 https://media.vibefather.ai/assets/9a7129f3-3a18-444d-962a-8be79495c87b/threshold.webp 下载到 public/images/cards/threshold.webp。Alt：'An open stone archway with a small brass key and dawn beyond.' 用于 The Threshold 卡牌、其解读和对话框，以及抽到时的分享画布。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- image：The Garden 卡牌插画。将 https://media.vibefather.ai/assets/9a7129f3-3a18-444d-962a-8be79495c87b/garden.webp 下载到 public/images/cards/garden.webp。Alt：'Night-blooming flowers circling a small stone sundial.' 用于 The Garden 卡牌、其解读和对话框，以及抽到时的分享画布。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- image：The Mirror 卡牌插画。将 https://media.vibefather.ai/assets/9a7129f3-3a18-444d-962a-8be79495c87b/mirror.webp 下载到 public/images/cards/mirror.webp。Alt：'An oval hand mirror reflecting an abstract sunrise, with no person present.' 用于 The Mirror 卡牌、其解读和对话框，以及抽到时的分享画布。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- image：The Orbit 卡牌插画。将 https://media.vibefather.ai/assets/9a7129f3-3a18-444d-962a-8be79495c87b/orbit.webp 下载到 public/images/cards/orbit.webp。Alt：'A small brass orrery tracing luminous rings beneath a starry sky.' 用于 The Orbit 卡牌、其解读和对话框，以及抽到时的分享画布。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- image：用原生 CSS 或本地 SVG 绘制可复用的卡背：midnight-plum（午夜梅紫）底色、两个细长的 antique-gold（古金色）矩形边框、一个居中的八角星、同心轨道线，以及六个圆点。不要复制现有牌组的对称性、图案或构图。将其用于全部六个卡背和抽牌前的 hero 区域。
- icon：安装 lucide-react，界面操作仅使用 Sparkles、RotateCcw、Download、ArrowRight、X 和 ChevronDown。ISC 许可证。不要绘制任何品牌标志或专有花色图标。在 ASSETS.md 中记录该包和许可证。
- font：通过 @fontsource/cormorant-garamond（OFL-1.1）自托管 Cormorant Garamond 字重 500 和 600。在 ASSETS.md 中记录该包和许可证；不要使用字体 CDN。
- font：通过 @fontsource/manrope（OFL-1.1）自托管 Manrope 字重 400、500、600 和 700。在 ASSETS.md 中记录该包和许可证；不要使用字体 CDN。

## 不要做
- 不要复制、描摹、重新上色或密切模仿任何现有的塔罗牌或神谕卡牌组，包括其牌面艺术、牌背图案、花色系统、标志性构图、指南手册段落、名称、包装或宣传语。保持这套六张牌组及其解读的原创性。
- 不要使用真实人物的肖像、名人、虚构角色、品牌标志、专有神秘学标记或可识别的商业产品。插图中不得包含人物、文字、字母、数字、标志或水印。
- 不要将解读呈现为预测、诊断、警告、指示或专业建议。绝不要生成令人不安的解读。在页眉、FAQ、分享图片和页脚区域保持娱乐与反思免责声明的可见性。
- 不要添加账户、后端、API 路由、数据库、分析、远程随机性、外部表单、跟踪像素、社交小部件或任何网络提交。每日解读和分享图片保留在访客的设备上。
- 不要使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务、热链接文件或具有不明确、非商业或相同方式共享许可的资产。仅使用提供的六张生成图片和原创代码绘制的装饰。
- 不要从 Google Fonts、Adobe Fonts 或任何 CDN 加载字体。仅使用指定的自托管 Fontsource 包，不要添加商业字体。
- 不要添加 Three.js、物理引擎、截图包、状态管理库或其他动画框架。CSS transforms、React state 和原生 Canvas 2D 已足够。
- 不要在 src/content.ts 之外硬编码 [BRAND]、[DECK_NAME]、默认存储命名空间、分享图片文件名、受众文案或反思主题。替换变量值必须生成一个连贯的网站，不残留默认品牌痕迹。
- 不要在重新加载、模式切换、调整大小或重新渲染时重绘每日牌。使用访客的本地日历日并验证 localStorage 内容；仅三牌模式可以反复重新洗牌。
- 不要允许重复点击或未完成的动画产生重复抽牌、计时器或不一致的牌面方向。在过渡期间禁用操作，并使整个流程可通过键盘和触摸访问。
- 不要将牌义隐藏在悬停之后、为逆位牌旋转标签、使用微小低对比度文本，或让扇形展开产生水平溢出。在 1440 × 900 和 390 × 844 下验证完整体验，控制台零错误。
- 不要使用滚动劫持、固定区块、自定义光标、自动播放音频、解读控件上的视差效果，或忽略 prefers-reduced-motion 的动画。
- 不要输出 source maps、将 src/ 复制到 dist/、使用 CDN script 或 style 标签，或使 dist/ 超过 20 MB。保持 Vite base 相对路径，所有资产本地化。
- 不要添加额外页面、裸目录链接、SEO 标记、结构化数据、虚假推荐语、虚构访客数量、定价、新闻订阅表单或购买实体牌组的号召。

---
— Prompt by VibeFather · https://vibefather.ai/t/daily-tarot-reading-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
