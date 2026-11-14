> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 纹身工作室网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个完整的静态多页面网站。[BRAND] 是一家虚构的纹身工作室，位于 [CITY]，专为 [AUDIENCE] 提供 [STUDIO_FOCUS]。请逐字使用下方默认文案及默认值。当变量发生变化时，重写所有艺术家简介、风格标签、闪图标题、价格、客户评价、地址详情和行动号召，以适配新值，同时保持设计不变。将每个字符串、艺术家记录、闪图设计记录、价格、政策和 FAQ 都保留在 src/content.ts 中。

- 受众：正在比较纹身艺术家的成年人、需要清晰指引的首次客户，以及寻找特定风格或可预约闪图设计的回头客。
- 目标：帮助访客选择艺术家或闪图设计，了解单次会话价格与政策，准备一份有用的咨询请求，并找到可信赖的护理说明。
- 语气：沉静自信、以工艺为主导、直接、包容且令人安心。避免摩托车手陈词滥调、攻击性语言、神秘伪灵性和夸大宣传。

## 技术栈
- 框架：Vite 6 + React 19 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：Motion 12 for React（MIT）、Lucide React（ISC）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 创建真实的 index.html、artists.html、artist.html、flash.html、consult.html 和 aftercare.html 入口文件，每个文件挂载其页面特定的 React 入口；将全部六个配置为 Rollup 输入。
  - 将 vite.config.ts 的 base 设置为 './'，build.sourcemap 设置为 false；全程使用相对资源 URL，并保持生产输出低于 20 MB。
  - 使用下方精确的颜色令牌和字体家族配置 Tailwind；将全局规则、选择颜色、焦点状态和关键帧放入 src/index.css。
  - 将所有可编辑文案和示例数据集中到 src/content.ts；在页面间共享 Header、Footer、Button、SectionHeading、StyleTag、FlashCard 和 Reveal 组件。
  - 使用 URLSearchParams 读取 artist.html 和 flash 查询参数；无需路由器或服务器，缺失或未知的 artist id 必须渲染第一个艺术家。
  - 使用指定的 Fontsource 包和特定字重的导入自托管 Cormorant Garamond 和 Manrope；不要使用字体 CDN。
  - 使用 Motion for React 实现揭示、筛选布局变化、模态过渡和移动导航；调用 useReducedMotion 并提供非动画等效项。
  - 仅使用 lucide-react 作为界面图标；从两条相交线段创建一个简单的原创 favicon，而不是复制的工作室标记。

## 变量
- [BRAND] — 工作室名称（默认：“Duskhaven Tattoo”）。一个虚构的两到三个单词的工作室名称；在页眉、页脚、页面标题和咨询确认中使用它。
- [CITY] — 工作室所在城市（默认：“Portland, Oregon”）。城市和州或地区；更改时调整虚构的街道地址和本地引用。
- [STUDIO_FOCUS] — 工作室专长（默认：“ornamental blackwork, fine-line botanicals, and small illustrative pieces”）。纹身风格的简明列表；重写艺术家标签、闪图类别和作品集描述以匹配。
- [AUDIENCE] — 理想客户（默认：“adults seeking thoughtful custom tattoos and collaborative artist-led design”）。文案应欢迎和引导的客户群体。
- [BOOKING_DEPOSIT] — 预约定金（默认：“$150”）。货币和金额；在咨询、政策和 FAQ 文案中一致复用。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/tattoo-studio-website（默认：是；删除此行以移除它）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 墨色（Ink）`#0C0B0B` — 页面主背景，以及浅色面板上的深色文字
- 烟灰（Soot）`#161313` — 卡片、导航背景，以及交替区块
- 骨白（Bone）`#E9E0D2` — 主标题、深色背景上的正文，以及反色面板
- 灰烬（Ash）`#A79C90` — 次要文案、元数据，以及非活动控件
- 牛血红（Oxblood）`#963B40` — 主按钮、活动筛选器、焦点环，以及小面积点缀
- 赭石线（Umber Line）`#3A302D` — 边框、分隔线、输入框轮廓，以及 SVG 网格细节
- 羊皮纸（Parchment）`#D8CBB8` — 偶尔用作浅色编辑区块背景，配墨色文字

### 字体排印
- 展示与编辑标题：Cormorant Garamond（OFL），字重 500/600
- 正文、导航、表单与标签：Manrope（OFL），字重 400/500/600/700

### 布局与动效
- 间距：使用 8 px 基准比例。内容最大宽度为 1440 px，桌面端页面边距 64 px，移动端 20 px。使用 12 列网格，列间距 24 px。区块内边距桌面端为 112–136 px，移动端为 64–80 px。页头高度为 80 px。展示标题使用 clamp(64px, 8vw, 124px)，行高 0.88；页面标题使用 clamp(52px, 6vw, 88px)；正文为 16–18 px，行高 1.65。
- 圆角：以利落的编辑式边缘为主：卡片、图片、输入框和按钮为 2 px；999 px 仅用于风格标签和小型状态胶囊。不使用柔和悬浮卡片或大而圆润的圆角。
- 动效：首页主视觉照片以自下而上的 clip-path 在 1000 ms 内揭示，随后标题行以 24 px 向上淡入，错开 90 ms。
- 动效：区块标题和内容行在进入视口 15% 时揭示一次，向上位移 28 px，时长 650 ms，子元素错开 80 ms；向上滚动时绝不重播。
- 动效：在艺术家卡片和闪图卡片上，图片在 450 ms 内缩放至 1.035，箭头图标右移 4 px，标题下划线从左向右绘制。
- 动效：闪图筛选变化以 220 ms 不透明度和 12 px 缩放过渡进行动画；保持网格稳定，并向屏幕阅读器播报结果数量。
- 动效：移动端菜单、闪图对话框、手风琴答案和咨询步骤使用 180–240 ms 的淡入滑动过渡；不使用滚动劫持或自定义光标。
- 动效：启用 prefers-reduced-motion 时，移除视差、裁剪揭示、平滑滚动、布局动画和大尺寸变换；立即显示所有内容。
- 图像：使用六张风格连贯的 AI 生成纪实照片：一张宽幅工作室室内用于首页，三张各不相同的虚构艺术家肖像，一张工作台细节，以及一张护理后场景。全部采用炭黑、暖骨白和牛血红调，低调钨丝实用光、柔和侧光，以及微妙的 35 mm 胶片颗粒。绝不生成文字、标志、设备品牌或可识别的真实人物。闪图作品为独立的原创黑线 SVG，由代码在暖羊皮纸网格上以简单几何路径绘制：三张图中共九个小图案，统一 2 px 描边，除墨色外无填充，不描摹或使用外部纹身图像。

## 页面与区块
### 首页（`index.html`）
1. **共享页眉和页脚** — 页眉品牌为 [BRAND]。桌面导航为 Artists（./artists.html）、Flash（./flash.html）、Aftercare（./aftercare.html），以及一个实心 Oxblood（牛血红）色的 Start a consultation 按钮（./consult.html）。页眉在英雄区上方初始为透明，滚动 24 px 后变为 92% Ink（墨色）并带底部 Umber Line（赭色线），并具有全屏移动端菜单。页脚文案：'214 Bellwether Avenue, [CITY]'，街道在一行，城市变量在下一行替换；'Tuesday–Saturday, 11:00–19:00'；'Consultations by appointment · 18+ only'。包含相同的文件名导航、默认品牌的可访问电子邮件链接 hello@duskhaventattoo.example，以及可选的 [CREDIT] 链接。当 BRAND 或 CITY 变化时，重写电子邮件域名和地址。
   布局：固定 80 px 页眉，左侧为宽字标，右侧为紧凑的 13 px 大写导航，移动端菜单目标最小 44 px。页脚为 12 列网格：品牌和地址跨 5 列，营业时间跨 3 列，导航跨 2 列，鸣谢跨 2 列，全部位于一条细顶线之上。
   动效：背景和边框在 220 ms 内过渡。移动端链接以 40 ms 交错进入；减少动效时立即显示菜单。
2. **电影感英雄区** — 眉题：'[CITY] · CUSTOM TATTOOING'。标题严格为：'A mark with a life of its own.' 辅助文案：'Thoughtful tattoos shaped around your story, your placement, and the way you move.' 主 CTA：'Start a consultation'；次 CTA：'Meet the artists'。底部元数据：'Custom work'、'Flash available'、'18+ only'。使用 hero-studio.webp 作为主导首屏视觉，而非紧凑的面部图像。
   布局：英雄区填充 calc(100svh - 0px)，桌面端最小高度 720 px。照片为绝对定位且全出血，带有从左到右 96% 到 18% 的 Ink 渐变和微妙的底部渐变。内容位于左侧第 1–7 列，垂直居中；CTA 位于文案下方，间距 12 px。元数据在左下角形成三项一行。移动端使用 74 svh 的图像背景英雄区、56 px 标题、降低的叠加不透明度，以及堆叠的全宽 CTA。
   动效：照片裁剪揭示和标题交错如设计中所指定。仅在桌面端滚动时添加 3% 的缓慢图像缩放；在移动端和减少动效时禁用。
3. **工作室介绍与事实** — 标题：'The idea comes first. The ink follows.' 正文：'[BRAND] is a private tattoo studio for [AUDIENCE]. We specialize in [STUDIO_FOCUS], with unhurried consultations and original designs drawn for the person wearing them.' 事实：'3 resident artists'、'$180 studio minimum'、'7–14 days typical design lead time'。
   布局：Ink 上 Bone（骨白）文字的双栏编辑区块：标题跨第 1–7 列，正文跨第 8–12 列。事实在下方形成三列带线行，使用大号 Cormorant 数字和小号大写标签。
   动效：标题和正文一起揭示；事实的顶线从左到右绘制，交错 120 ms。
4. **驻场艺术家预览** — 区块标签：'RESIDENT ARTISTS'。标题：'Find your hand.' 卡片：Mara Voss — Ornamental、Blackwork、Dotwork；Theo Bennett — Fine line、Botanical、Illustrative；Inez Park — Abstract、Bold blackwork、Miniature。每个链接到 ./artist.html?id=mara、./artist.html?id=theo 和 ./artist.html?id=inez。网格下方链接：'Compare all artists'。
   布局：三张等宽肖像卡片，3:4 图像，名字为 36 px Cormorant，下方为风格标签，无包围的厚重卡片背景。桌面端将中间卡片偏移 48 px，同时保持行在其文本基线对齐；移动端移除偏移。
   动效：卡片按顺序揭示，并使用指定的图像缩放和下划线悬停。
5. **Flash 库预览** — 标签：'READY TO WEAR'。标题：'Small designs. Original lines.' 正文：'A rotating set of one-off pieces, drawn in-house and tattooed once.' 展示四个示例：Moth Orbit、Split Thorn、Fern Study 和 Orbit Signet，包含风格、大致尺寸和来自共享 flash 记录的价格。CTA：'Browse all flash'。
   布局：四列羊皮纸色调网格，原始 SVG 图案居中于微妙的套准十字背景上。每个图块为 4:5，底部元数据行位于艺术区域之外。移动端使用两列网格，间距 12 px。
   动效：SVG 路径在可见时使用 stroke-dashoffset 在 700 ms 内绘制一次；减少动效时跳过路径动画。
6. **咨询流程** — 标题：'From first thought to final session.' 四个步骤：01 Tell us the idea — 'Share placement, size, references, and the artist you have in mind.' 02 Shape the design — 'Your artist confirms scope, timing, and a quote before drawing.' 03 Reserve the session — 'A [BOOKING_DEPOSIT] deposit is credited to your final session.' 04 Heal with guidance — 'Leave with written aftercare and a direct route to follow-up questions.'
   布局：羊皮纸背景，Ink 文字。标题占据左侧四列；四个步骤占据右侧八列作为水平带线行，每行带有小号数字、粗体标题和简洁正文。移动端折叠为一列。
   动效：行按顺序揭示；无固定滚动。
7. **工作室参观与客户留言** — 使用 studio-detail.webp。参观标题：'A quiet room for focused work.' 文案：'Private stations, unhurried appointments, and time to check placement before the session begins.' 地址：'214 Bellwether Avenue, [CITY]'。营业时间：'Tuesday–Saturday, 11:00–19:00'。引语：'Mara turned a loose idea into something that felt like it had always belonged on my arm.' 署名：'Rowan K. · ornamental forearm piece'，一位虚构客户。CTA：'Plan your consultation'。
   布局：全宽双栏构图：工作台照片跨七列，4:3 裁剪；参观文案和引语在 Soot（烟灰）色上跨五列。地址和营业时间位于引语上方的紧凑带线定义列表中。
   动效：图像从右侧擦入，同时文字向上淡入；无自动播放媒体。
8. **护理与政策条** — 两个链接面板：'Healing, step by step' — 'Bandage timing, washing, moisturizing, and what to avoid.' 链接到 ./aftercare.html；'Deposits without surprises' — 'What your [BOOKING_DEPOSIT] reserves, rescheduling windows, and design revisions.' 链接到 ./consult.html#deposit。最终横幅文案：'Ready when the idea feels right.' CTA：'Tell us what you’re imagining'。
   布局：两个等宽带边框面板，带有大号 Cormorant 标题和 ArrowUpRight 图标，随后是全宽 Oxblood 横幅，Ink 或 Bone 文字根据可访问对比度选择。移动端堆叠面板。
   动效：面板箭头悬停时移动 4 px；最终横幅以简单的透明度过渡揭示。

### 艺术家（`artists.html`）
1. **艺术家目录介绍** — 眉题：'THREE ARTISTS · THREE APPROACHES'。标题：'Choose the work, then the hand.' 正文：'Every artist at [BRAND] works across a distinct set of styles. Filter by what you are looking for, or bring us the beginning of an idea.' 筛选器：All、Ornamental、Blackwork、Fine line、Botanical、Illustrative、Abstract、Miniature。
   布局：大标题在左侧八列，正文在右侧四列。筛选标签位于全宽线下方，移动端可水平滚动，具有可见的焦点状态。
   动效：标题和筛选器以 60 ms 交错揭示。
2. **可筛选艺术家网格** — Mara Voss：'Ornamental compositions that follow the body'，专长 Ornamental、Blackwork、Dotwork，单次最低 $220。Theo Bennett：'Fine-line studies of plants and small natural forms'，专长 Fine line、Botanical、Illustrative，单次最低 $180。Inez Park：'Compact abstractions with a bold, economical line'，专长 Abstract、Bold blackwork、Miniature，单次最低 $180。为每位使用匹配的生成肖像，并链接到艺术家详情查询 URL。
   布局：三列大号 3:4 肖像卡片网格，间距 32 px。每张图像下方显示名字、一行方法、风格标签、单次最低价和 'View profile'。筛选隐藏不匹配的卡片而不留下空白列；显示实时结果计数。移动端使用一列和 20 px 图像边距。
   动效：使用 220 ms 透明度和布局过渡动画筛选；肖像使用共享悬停处理。
3. **艺术家引导 CTA** — 标题：'Not sure who fits?' 正文：'Choose “No preference” in the consultation form. We will route your idea to the artist whose work best matches the subject, placement, and scale.' CTA：'Start with your idea'。
   布局：羊皮纸条带，标题在左，正文和按钮在右，桌面端由垂直线分隔。
   动效：简单的共享区块揭示。

### 艺术家档案（`artist.html`）
1. **查询驱动的档案主视觉** — 读取 id=mara、id=theo 或 id=inez；若无 id 或 id 未知，则显示 Mara Voss，而不是空白或未找到状态。Mara 默认文案：眉题 'RESIDENT ARTIST · ORNAMENTAL BLACKWORK'；姓名 'Mara Voss'；介绍 'I build rhythmic, ornamental pieces around the body’s natural lines, from quiet wrist bands to full shoulder compositions.'。信息项：'Session minimum $220'、'Custom and flash'、'Booking by consultation'。Theo 和 Inez 使用其共享记录及对应的肖像、理念和最低消费。
   布局：共享页头下方为 7:5 两栏分割。肖像以 4:5 裁切填充左侧七栏；右侧包含指向 ./artists.html 的小型返回链接、大号 Cormorant 姓名、介绍、风格标签、信息列表，以及链接到 ./consult.html?artist=mara 的 'Consult with Mara' 按钮。移动端在 3:4 肖像之后堆叠文本。
   动效：肖像裁切显现与档案文本交错；切换查询状态绝不引入加载屏。
2. **理念与工作细节** — Mara 的标题：'Ornament with room to breathe.'。正文：'Mara works in measured lines and repeated forms, using negative space to keep detailed pieces readable. A consultation covers placement, symmetry, and how the composition will move with you.'。适合列表：'Forearm and shoulder compositions'、'Dotwork and geometric ornament'、'Cover-up assessments after an in-person consult'。流程说明：'One focused revision is included before the session; substantial changes may require a new quote.'。根据 Theo 或 Inez 的内容记录为本节做适配。
   布局：Soot 区块，左侧三栏为粘性小号区块标签，右侧七栏为可读的 65 字符文本列。适合项在下方形成三行带分隔线的行。
   动效：文本行仅显现一次；移动端禁用粘性行为。
3. **精选原创 flash** — 展示属于所选艺术家的三件 SVG 作品。Mara 使用 Moth Orbit（5 × 7 in，$420）、Split Thorn（3 × 6 in，$320）和 Orbit Signet（2.5 × 2.5 in，$220）。每件链接到 ./flash.html?design=<slug>，并在 flash 页面打开对应设计对话框。
   布局：三个等大的 1:1 羊皮纸艺术面板，居中放置原创 SVG，随后是标题、尺寸和价格组成的紧凑元数据行。线稿保持足够粗，以便在移动端仍可读。
   动效：首次进入时顺序描边绘制；卡片悬停仅移动箭头。
4. **预约条与下一位艺术家** — 文案：'Have a placement in mind?' CTA：'Request a consultation with Mara'。次级链接：'Next artist: Theo Bennett'。根据当前记录更新姓名和目标。
   布局：全宽带分隔线的横条，文本在左，咨询按钮在中右，下一位艺术家文本链接在最右。移动端宽度下堆叠。
   动效：简单透明度显现。

### Flash 作品库（`flash.html`）
1. **Flash 介绍** — 眉题：'ORIGINAL DESIGNS · TATTOOED ONCE'。标题：'Choose a line to make your own.'。正文：'Each piece is drawn by a resident artist and retired after it is claimed. Dimensions are starting points; final scale and placement are confirmed together.'。说明：'All artwork on this demo is original SVG drawn in code.'。
   布局：编辑式页面标题，九栏标题与三栏说明。右下角放置一张小型羊皮纸设计索引卡，显示 '9 designs · 3 artists'。
   动效：标题显现与一处克制的线条绘制点缀。
2. **筛选器与九件设计画廊** — 提供风格筛选 All、Ornamental、Fine line、Botanical、Abstract、Miniature；艺术家筛选 All artists、Mara、Theo、Inez；以及排序控件 Featured、Price low to high、Size small to large。Mara 设计：Moth Orbit — ornamental，5 × 7 in，$420；Split Thorn — ornamental，3 × 6 in，$320；Orbit Signet — miniature，2.5 × 2.5 in，$220。Theo 设计：Fern Study — botanical，3 × 5 in，$280；Mothwing Sketch — fine line，4 × 4 in，$300；Seed Arc — botanical，2 × 4 in，$240。Inez 设计：Folded Sun — abstract，3 × 3 in，$240；Twin Current — abstract，2 × 5 in，$260；Small Ritual — miniature，1.5 × 2 in，$180。每个图案均使用新的 SVG 路径数据创建；不使用外部插图。
   布局：两行紧凑筛选控件位于实时计数上方。画廊为三栏网格，4:5 羊皮纸艺术区域、细 Ink 边框，元数据在下方。激活筛选为 Oxblood 配 Bone 文本。移动端使用两栏，将次级筛选折叠进展开控件，并保持标签至少 12 px。
   动效：使用共享的 220 ms 筛选过渡。保留键盘焦点，筛选时不对单个 SVG 做动画。
3. **设计详情对话框** — 点击卡片打开无障碍模态框，包含放大的 SVG、标题、艺术家、风格、尺寸、价格和两个建议位置。Moth Orbit 示例：'Suggested placement: outer forearm or upper arm'。按钮：'Request this design'，链接到 ./consult.html?flash=moth-orbit&artist=mara。直接打开 flash.html?design=moth-orbit 会打开同一对话框；未知设计 id 显示完整画廊且不报错。
   布局：居中对话框最大宽度 920 px，3:2 分割：左侧大号羊皮纸艺术，右侧详情。使用深色遮罩、可见关闭按钮、Escape 支持、焦点陷阱和焦点返回。移动端使用底部抽屉，艺术在上、详情在下。
   动效：遮罩在 180 ms 内淡入，对话框在 220 ms 内上升 16 px；减少动态效果时使用即时显示。
4. **定制设计说明** — 标题：'Nothing here is quite it?'。正文：'Flash is a starting point, not a limitation. Ask for a custom piece in the consultation form and include the subject, placement, approximate size, and any references you have.'。CTA：'Start a custom request'。
   布局：Soot 两栏横条，左侧大标题，右侧正文加按钮。
   动效：共享区块显现。

### 咨询（`consult.html`）
1. **咨询介绍** — 眉题：'START WITH THE DETAILS'。标题：'Tell us what you’re imagining.' 正文：'A few useful details help us match the right artist, estimate session time, and reply with next steps. No artwork needs to be final at this stage.' 侧注：'Completing this demo form stores a draft in your browser only. It does not send a request or take payment.'
   布局：标题和正文占左侧八列，小型带边框的隐私说明占右侧四列。移动端上，说明位于介绍之后、表单之前。
   动效：共享标题显现。
2. **三步咨询表单** — 第 1 步 艺术家与想法：艺术家选择（No preference、Mara、Theo、Inez）、Custom 或 Flash 单选、风格选择、设计想法文本域（要求 40–1200 个字符）；从 artist 和 flash 查询参数预选。第 2 步 身体与预算：位置选择（Forearm、Upper arm、Shoulder、Back、Chest、Thigh、Calf、Ankle、Other）、以英寸为单位的近似宽度和高度数字输入并带实时尺寸摘要、Black and grey 或 Color 单选、预算选择（$180–350、$350–600、$600–1000、$1000+、Not sure）、首选星期复选框。第 3 步 联系方式与复核：姓名、邮箱、可选代词、附加备注、必选确认项 'I am 18 or older'，以及所有先前答案的复核摘要。每一步都将有效的部分输入保存到 localStorage，并提供 Edit 按钮。最终按钮：'Save consultation request'。成功标题：'Your request is saved on this device.' 成功正文：'This static demo has not transmitted your details. In a production site, the studio would review the request before offering a session time.' 包含一个清除草稿的 Start another request 按钮。
   布局：双栏工作区：左侧三列包含编号步骤导航和联系预期；右侧八列包含一个 Soot 表单面板，内边距 28 px，字段间距 12 px。输入框高 52 px，使用 Ink 背景、Umber Line 边框和清晰的错误文本。进度显示为 'Step 1 of 3'，使用三个短条，而非加载指示器。移动端使用单列、底部粘性 Continue 按钮，且无水平溢出。
   动效：步骤滑动 16 px 并在 200 ms 内淡入；错误出现时不引起布局跳动。仅在允许动效时，成功状态使用简单的对勾图标缩放。
3. **预订定金政策** — 设置 id='deposit'。标题：'A clear reservation, before the drawing begins.' 在所有位置使用 [BOOKING_DEPOSIT]；默认文案：'A $150 booking deposit reserves your session and is credited to the final session total.' 政策行：'Deposits are nonrefundable once a session is reserved.' 'Reschedule once with at least 72 hours’ notice and keep the same deposit.' 'Less than 72 hours’ notice requires a new deposit.' 'One focused design revision is included; a new concept or major size change may require a new quote and deposit.' 'No payment is collected in this static demo.'
   布局：Parchment 区块配 Ink 文字，标题占左侧四列，五条带分隔线的政策行占右侧八列。在政策行上方以 48 px Cormorant 突出显示定金金额。
   动效：政策行依次显现，不使用手风琴隐藏关键政策文本。
4. **预订常见问题** — 手风琴问答：'Do I need a consultation for flash?' — 'Yes. It confirms fit, placement, and timing, but it is usually shorter than a custom consult.' 'What is the studio minimum?' — 'The default studio minimum is $180; each artist’s minimum appears on their profile.' 'Can I bring someone?' — 'One support person is welcome, but the working station stays limited to the artist and client.' 'Will I see the design before my session?' — 'Your artist shares the design with enough time for the included revision; exact timing is confirmed with your quote.' 'Do you tattoo minors with permission?' — 'No. All clients must be 18 or older with valid government-issued identification.' 'Is the deposit a separate fee?' — 'No. The [BOOKING_DEPOSIT] deposit is credited to the final session total under the policy above.'
   布局：标题占左侧四列，手风琴占右侧八列。每个问题是全宽带分隔线的按钮，配 Plus 图标，答案最大宽度 65 个字符。
   动效：手风琴高度和透明度在 200 ms 内动画；允许多项同时展开，并尊重减少动效设置。

### 护理指南（`aftercare.html`）
1. **护理首屏** — 眉题：'AFTER YOUR SESSION'。标题：'Good healing is part of the work.' 正文：'Follow the instructions from your artist, keep the area clean, and give the tattoo time. This general guide supports—not replaces—the directions given for your specific session.' CTA：'Read the healing steps'；次级链接：'Ask the studio a question' 指向 ./consult.html。使用 aftercare-hands.webp。
   布局：5:7 分栏，文案在左，4:3 纪实护理照片在右，全部位于共享页眉下方并留有充裕顶部空间。移动端将照片紧接标题之后、正文之前。
   动效：照片和文字使用标准首屏显现；无自动播放或循环效果。
2. **愈合时间线** — 标题：'A simple routine, stage by stage.' 阶段 1 'First 24 hours' — 'Wash your hands before touching the area. Remove the bandage only when your artist’s instructions say to, then wash gently with lukewarm water and mild unscented soap.' 阶段 2 'Days 2–5' — 'Pat dry with a clean towel and apply a very thin layer of the aftercare product recommended by your artist. Do not over-moisturize.' 阶段 3 'Weeks 2–4' — 'Light flaking and itching can occur. Do not pick or scratch; continue gentle cleaning and let flakes lift naturally.' 阶段 4 'After the surface settles' — 'Protect the tattoo from prolonged sun exposure and use broad-spectrum sunscreen once fully healed.'
   布局：Parchment 背景配 Ink 文字的四列时间线，由细顶部分隔线和编号节点连接。每个阶段有小时间标签、Cormorant 标题和易读正文。移动端转为垂直时间线。
   动效：时间线分隔线随四个节点显现而横向绘制；减少动效时显示完整线条。
3. **应做、避免与警示信号** — 应做列表：'Keep clothing clean and loose around the area'、'Use clean hands and fresh towels'、'Contact your artist if you are unsure about a product'。避免列表：'Soaking in baths, pools, lakes, or hot tubs until healed'、'Picking flakes or scratching'、'Direct sun and tanning during healing'。警示标题：'When to seek medical care'。警示文案：'Contact a qualified healthcare professional for spreading redness, increasing pain or swelling, unusual discharge, fever, or any symptom that concerns you. The studio cannot diagnose or treat an infection.'
   布局：两个等宽的带边框应做与避免栏，后接全宽 Oxblood 描边警示面板。使用 18 px 的 Check、X 和 CircleAlert Lucide 图标，绝不单靠颜色传达含义。
   动效：简单交错显现；警示面板不脉冲或闪烁。
4. **护理常见问题与结尾 CTA** — 问题：'Can I work out?' — 'Avoid workouts that stretch, soak, or rub the area until your artist says it is ready.' 'Why does the tattoo look cloudy?' — 'A temporary dull or cloudy appearance can occur while the surface settles; follow your artist’s guidance rather than adding extra product.' 'When can I shave?' — 'Wait until the surface is fully healed and there is no flaking or tenderness.' 'What if I react to a bandage or product?' — 'Stop using it and contact the studio; seek medical advice for a significant reaction.' 结尾文案：'Something does not look or feel right?' CTA：'Send a follow-up question' 指向 ./consult.html。小注：'This demo does not transmit messages.'
   布局：双栏常见问题手风琴，后接紧凑的 Soot CTA 条带。无论手风琴状态如何，警示和医疗免责声明始终可见。
   动效：共享手风琴和 CTA 过渡，支持减少动效。

## 资源

- 图片：将 https://media.vibefather.ai/assets/526d4e34-f7e1-4746-ba77-ba7603fab3a7/hero-studio.webp 下载到 public/images/hero-studio.webp。Alt：'A quiet tattoo studio with charcoal walls, private workstations, and warm task lighting'。用作全出血首页主视觉，也可选作窄幅到访横幅。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录路径、URL、作者和许可证。
- 图片：将 https://media.vibefather.ai/assets/526d4e34-f7e1-4746-ba77-ba7603fab3a7/artist-mara.webp 下载到 public/images/artist-mara.webp。Alt：'Fictional tattoo artist Mara Voss standing beside her workstation in warm studio light'。用于纹身师卡片和 Mara 的个人资料页。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录。
- 图片：将 https://media.vibefather.ai/assets/526d4e34-f7e1-4746-ba77-ba7603fab3a7/artist-theo.webp 下载到 public/images/artist-theo.webp。Alt：'Fictional tattoo artist Theo Bennett seated near a drawing table in warm studio light'。用于纹身师卡片和 Theo 的个人资料页。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录。
- 图片：将 https://media.vibefather.ai/assets/526d4e34-f7e1-4746-ba77-ba7603fab3a7/artist-inez.webp 下载到 public/images/artist-inez.webp。Alt：'Fictional tattoo artist Inez Park in a charcoal studio with soft side lighting'。用于纹身师卡片和 Inez 的个人资料页。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录。
- 图片：将 https://media.vibefather.ai/assets/526d4e34-f7e1-4746-ba77-ba7603fab3a7/studio-detail.webp 下载到 public/images/studio-detail.webp。Alt：'An unbranded tattoo workstation with wrapped equipment, drawing tools, and a dark leather chair'。用于首页到访区块，如有需要也用于咨询侧边栏。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录。
- 图片：将 https://media.vibefather.ai/assets/526d4e34-f7e1-4746-ba77-ba7603fab3a7/aftercare-hands.webp 下载到 public/images/aftercare-hands.webp。Alt：'Gloved hands gently checking a clean protective bandage on a client’s forearm'。用作护理页主视觉。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录。
- 图标：使用本地打包的 lucide-react 图标（ISC）用于 ArrowUpRight、ArrowRight、Menu、X、Plus、Check、CircleAlert 和表单控件。在 src/content.ts 或 src/components/FlashArt.tsx 中以原创内联 SVG 绘制全部九个纹身图样（tattoo flash）母题；切勿导入纹身 artwork。在 ASSETS.md 中列出 Lucide。
- 字体：安装 @fontsource/cormorant-garamond，并仅自托管 500 和 600 字重用于展示文本。许可证 OFL；在 ASSETS.md 中列出包名、字体作者和许可证。
- 字体：安装 @fontsource/manrope，并仅自托管 400、500、600 和 700 字重用于正文和界面文本。许可证 OFL；在 ASSETS.md 中列出包名、字体作者和许可证。

## 禁止事项
- 不要使用任何后端、服务器代码、API 路由、数据库、身份验证、分析、第三方表单服务、真实支付流程或网络提交。咨询草稿和成功状态仅存储在 localStorage 中，且 UI 必须说明未传输任何内容。
- 不要热链图片、字体、脚本、图标或其他资源，也不要使用 CDN 标签或第三方 API。将六张指定的生成图片下载到 public/images，并在本地打包所有依赖。
- 不要使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务、CC BY-NC 或 CC BY-SA 资产、可识别的标志、品牌设备或真实人物的肖像。
- 不要复制现有工作室的名称、标志、标语、文案、艺术家传记、客户评价、政策、纹身图稿、标志性插画或独特图标。保留虚构品牌，并用全新的路径数据创建每一个 SVG 图案。
- 不要加载商业字体或使用 Google Fonts CDN。仅自托管指定的 Cormorant Garamond 和 Manrope Fontsource 包，并在 ASSETS.md 中保留其 OFL 致谢。
- 不要更改固定的 Vite、React、TypeScript、Tailwind、Motion 和 Lucide 技术栈。不要添加路由、组件库、动画框架或其他依赖。
- 不要生成 source map、将 src 复制到 dist、超过 20 MB、使用绝对部署根路径资产路径，或省略 Vite base './'。生产构建必须是 dist/ 中的压缩静态文件。
- 不要将内部导航链接到裸目录。使用显式的 ./ 文件名。没有有效 id 的 artist.html 必须显示 Mara，未知的 flash 设计必须显示画廊而不是错误。
- 不要使用滚动劫持、自动播放音频或视频、自定义光标、闪烁警告、过度视差或隐藏内容的动画。在每个页面和交互中尊重 prefers-reduced-motion。
- 不要做出医疗声明、将术后护理呈现为诊断、鼓励未成年人纹身，或暗示咨询已实际发送或押金已支付。
- 不要允许控制台错误、损坏的查询链接、无法访问的模态框、键盘焦点丢失、水平溢出或不可读的对比度。在 1440×900 和 390×844 下用键盘和触摸尺寸控件验证所有页面。
- 不要在生成的摄影作品中放置可读文本或标志，不要使用紧凑的面部特写作为主页主视觉，也不要用仅首字母卡片替换三张虚构艺术家肖像。

---
— Prompt by VibeFather · https://vibefather.ai/t/tattoo-studio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
