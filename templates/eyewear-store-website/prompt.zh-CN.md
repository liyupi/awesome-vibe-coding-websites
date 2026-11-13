> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 眼镜店网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个明亮、极简的商店网站。[BRAND] 是位于 [CITY] 的一家独立眼镜工作室，拥有六款小批量镜框设计。单个页面包含一张主视觉微距图、一个实时筛选的镜框网格和考试预约；一个通过查询路由的产品页面包含色板、镜片选项和实时更新的价格。一种醒目的强调色在米白纸质底色上承担全部视觉表现。

- 受众：[CITY] 中具有设计素养的眼镜佩戴者，他们希望镜框贴合自己的脸型；以及时间紧张的本地人，他们会在网上预约二十分钟的验光。
- 目标：引导访客从浏览走向候选清单：通过筛选器或测验找到镜框，打开其产品页面，并预约一次保存在本地的眼科检查。
- 语调：时尚编辑式的从容：简短自信的句子，不使用感叹号，价格直白陈述。这家店清楚自己喜欢什么，并一口气说出来。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react + react-dom 18（MIT）、motion（motion.dev）11（MIT）、lucide-react（ISC）、@fontsource/space-grotesk、@fontsource/karla（OFL）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置（Setup）：
  - 使用 npm create vite@latest 并选择 react-ts 模板进行脚手架初始化。项目根目录下有两个 HTML 页面：index.html（入口 src/main.tsx）和 frame.html（入口 src/frame.tsx），两者都带有指向各自入口的 script 标签。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions.input { main: 'index.html', frame: 'frame.html' } }。切勿将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './frame.html', './src/**/*.{ts,tsx}']。theme.extend.colors 映射 paper、paperDeep、ink、graphite、accent、accentDeep、rule —— 当 [ACCENT] 为 persimmon 时 accent 解析为 #E8582D，当 [ACCENT] 为 cobalt 时解析为 #2749C6（见 src/lib/theme.ts），accentDeep 分别为 #C24420 / #1D3BA6。
  - src/fonts.ts 导入 @fontsource/space-grotesk/500.css、700.css 和 @fontsource/karla/400.css、700.css。从两个入口都导入 fonts.ts。
  - 全局 CSS 位于 src/index.css：body 背景为 paper，带有非常细微的纸张纹理（内联 SVG feTurbulence data-URI，2% 不透明度）；选中文本为 ink 色配 paper 背景；focus-visible 轮廓为 2px accent。
  - src/content.ts 保存所有字符串：frames 数组（slug、name、shape 为 round、rectangular、cat-eye、wire、square、oval 之一；colorway 名称；faceWidth 为 narrow、medium、wide；price；image；alt；colorways 列表；lens note）、quizSteps、quizResult 映射、dayChips、slots、examFee、address、hours。当变量变化时，在此处重写文案。
  - src/lib/brand.ts：brandSlug 来自 [BRAND]（小写，非字母数字转为连字符）；localStorage 键为 `${brandSlug}:tryon`（镜框 slug 数组）和 `${brandSlug}:exam`（{ day, slot }）。
  - src/frame.tsx 读取 new URLSearchParams(location.search).get('id')；如果 slug 未知或缺失，则渲染 content.ts 中的第一个镜框 —— 绝不出现空状态或未找到状态。
  - 组件位于 src/components/：Header.tsx、Reveal.tsx（Motion whileInView，淡入 + 20px 上移，300ms，60ms 交错）、FrameCard.tsx、FilterBar.tsx、Quiz.tsx、ExamBooking.tsx、Footer.tsx；产品页上还有 Swatches.tsx、LensPicker.tsx、SpecTable.tsx。
  - public/favicon.svg：一个 64px 的代码绘制的圆形眼镜对，accent 色配 paper 背景。构建前从 Assets 下载六张照片到 public/images/；在项目根目录编写 ASSETS.md。
  - dist/ 包含 index.html、frame.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张 webp 图片。保持在 20 MB 以下。

## 变量
- [BRAND] — 店铺名称（默认：“Alder & Iris”）。虚构的眼镜工作室名称。用于字标、页面标题、brandSlug（localStorage 键）以及每一处提及。绝不使用真实眼镜品牌。
- [CITY] — 城市（默认：“Hudson, New York”）。工作室所在地。出现在主视觉眉题、验光区块和页脚地址中。可以使用真实城市。
- [ACCENT] — 强调色（默认：“persimmon”）。唯一的醒目强调色。persimmon 对应 #E8582D，cobalt 对应 #2749C6；其余配色为固定的米白纸张色。
- [EXAM_FEE] — 验光费用（默认：“$65”）。二十分钟验光的价签字符串，显示在预约区块和产品页试戴说明中。
- [CREDIT] — 在页脚保留一个小号“Template by VibeFather”链接，指向 https://vibefather.ai/t/eyewear-store-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- Paper `#F5F1E8` — 所有页面的底色 — 带有细微颗粒感的暖调米白。
- Paper Deep `#EDE7DA` — 卡片、测验面板、筛选标签（chips）、页脚区域。
- Ink `#211F1B` — 主文本：标题、价格、纸色背景上的按钮、悬停时的边框。
- Graphite `#6B665D` — 次要文本：眉题（eyebrows）、说明文字、未选中的标签、规格标签。
- Accent (persimmon) `#E8582D` — 当 [ACCENT]=persimmon 时唯一的大胆强调色：CTA 填充、测验进度、选中色板环、筛选激活状态、链接。
- Accent Deep (persimmon) `#C24420` — persimmon 的强调色悬停与按下状态。
- Accent (cobalt) `#2749C6` — 当 [ACCENT]=cobalt 时的强调色 — 使用位置完全相同。
- Accent Deep (cobalt) `#1D3BA6` — cobalt 的强调色悬停与按下状态。
- Rule `#DCD4C5` — 1px 细线：网格分隔线、规格表行、标签边框。

### 字体排印（Typography）
- Display — 字标、H1、H2、镜框名称、价格。Space Grotesk；标题采用句首大写，字距收紧至 -0.01em，眉题与标签采用全大写，字距 0.18em：Space Grotesk (OFL)，字重 500/700
- Text — 正文、测验选项、按钮（13px 全大写，字距 0.1em）、说明文字：Karla (OFL)，字重 400/700

### 布局与动效（Layout & motion）
- 间距：通透且具编辑感：桌面端区块节奏 120px（移动端 72px），容器 1240px，内边距 32px。网格间距 24px；产品页采用 7/5 分栏，栏间距 64px。
- 圆角：柔和而克制：卡片与测验面板 14px，标签与按钮 999px，输入框与图片 4px。
- 动效：干脆利落，绝不拖沓：入场元素淡入并上移 20px，时长 300ms，错峰 60ms — 一拍完成。
- 动效：筛选时网格以 Motion 布局动画在 280ms 内重新排布，使卡片滑入位置而非跳变。
- 动效：色板与镜头选择时，产品照片背后的纸色背景在 240ms 内交叉淡入淡出，价格以 200ms 的 y 轴位移滚动切换。
- 动效：测验步骤在 260ms 内水平滑动 24px，进度条以强调色填充。
- 动效：prefers-reduced-motion：上述所有动画均变为即时状态切换。
- 图像：一次纸面棚拍：每张照片都是一个镜框 — 虚构设计，无可辨识的轮廓 — 置于暖调米白纹理纸上，柔和定向日光，投下柔和长影。微距质感，留白充裕，无人物，无可读文字，无标识。

## 页面与区块
### [BRAND] — 镜框、选镜测验与验光预约（`index.html`）
1. **页头（Header）** — 在 Paper 底色上的粘性页头，滚动 16px 后底部出现 1px Rule 细线。左侧：字标 [BRAND]，Space Grotesk 700，18px，大写，0.18em 字距，Ink 色，后跟一个小强调点（6px，圆形）——唯一的装饰。中间导航（桌面端）：Frames、Find my frame、Book an exam——Karla 13px 大写，0.1em 字距，Graphite 到 Ink 150ms 过渡，滚动至各自锚点。右侧：'Try-on list' 文字链接，带 Bookmark 图标，以及来自 localStorage 的已保存镜框实时计数。移动端：字标加汉堡菜单（两条 1.5px Ink 线条），打开全屏 Paper 覆盖层，锚点用 Space Grotesk 24px。
   布局：单行，1240px 容器，18px 垂直内边距；覆盖层左对齐堆叠并居中。
   动效：细线在滚动时淡入；覆盖层淡入并上移 12px，200ms。
2. **首屏（Hero）** — 分栏首屏：右侧 7 列放置 hero-lune-macro.webp，边缘延伸至视口右边缘（仅左侧圆角 4px）；左侧 5 列承载垂直居中的文案块。眉题 '[BRAND] — HAND-FINISHED FRAMES — [CITY]'，Karla 12px 大写，0.24em 字距，Graphite。H1 用 Space Grotesk 700，clamp(44px, 6vw, 76px)，Ink，-0.01em：'See sharply. Wear boldly.' 副标题 Karla 16px Graphite，最多 42ch：'Six small-batch shapes, cut and fitted in our [CITY] workshop. A twenty-minute exam is [EXAM_FEE]; frames start at $165.' 两个 CTA 堆叠，间距 12px：'Shop frames'（强调色填充，Paper 文字，999px，Karla 大写 13px）和 'Find my frame — 2 min'（幽灵按钮，1px Ink 边框）。CTA 下方一行低调文字，Graphite 13px：'Free adjustments for the life of the frame.'
   布局：5/7 分栏；桌面端图片向右出血。移动端：图片在上，4:3，文案在下，24px 内边距。
   动效：文案依次错开进入（眉题、H1、副标题、CTA），每个 300ms，间隔 60ms；照片从 1.02 缩放到 1.0，600ms，仅一次。
3. **选镜测验（Frame finder quiz）** — Paper Deep 上的单个面板，圆角 14px，id='find'。左侧栏：眉题 'FIND MY FRAME' 和 H2 'Three questions. One pair.'，下方一行小字 Graphite：'Answer honestly — nobody sees this but the mirror.' 右侧：三个步骤一次显示一个。步骤 1 'Which face are you?'——四张选项卡片，带 lucide 图标：Circle 'Oval'、Circle 'Round'、Square 'Square'、Heart 'Heart-shaped'。步骤 2 'How loud should they be?'——'Bold'（Sparkles 图标）、'Quiet'（Minus）、'Wire-thin'（Glasses）。步骤 3 'Material?'——'Acetate'、'Metal'、'Mixed' 为普通卡片。选项上方有 3 段强调色进度条；Back 和 Next 为 Karla 大写文字按钮。确定性映射：Oval+Bold+Acetate -> Vesper；Oval+Quiet+Metal -> Ansel；Round+Bold+Acetate -> Lune；Round+Quiet+Mixed -> Wren；Square+any+Acetate -> Beaumont；Square+Wire-thin+Metal -> Ansel；Heart+Bold -> Vesper；Heart+Quiet+Acetate -> Marrow（按此顺序，第一条匹配规则生效）。结果页：推荐镜框的照片，'Your pair: [name]' 用 Space Grotesk 24px，一行来自 content.ts 的理由说明（例如 'Round faces carry geometric acetate — the Lune balances you without shouting.'），价格，以及两个链接：'View the [name]' 打开 ./frame.html?id=the-lune，和 'Start over'。
   布局：面板内 5/7 分栏，32px 内边距，999px 选项卡片，3 列网格。
   动效：步骤水平滑动 24px，260ms；进度段填充强调色；结果卡片从 0.96 缩放，280ms ease。减少动效：即时切换。
4. **镜框网格（Frame grid）** — id='frames'。眉题 'THE DRAWER' 和 H2 'Six shapes, fitted to you.' 下方筛选栏，滚动时粘性固定在页头下方：三组芯片——Shape（All、Round、Rectangular、Cat-eye、Wire、Square、Oval）、Color（Any、Tortoise、Crystal、Black、Gold、Slate、Honey）、Face width（Any、Narrow、Medium、Wide）——为 999px Karla 13px 芯片，Paper 底色带 Rule 边框；激活芯片反转为 Ink 文字，带 2px 强调色边框。六个镜框，精确数据：The Lune——圆形，tortoise，narrow，$185；Vesper——猫眼，crystal，narrow，$240；Marrow——矩形，black，medium，$195；Ansel——金属丝（圆形），gold，medium，$165；Beaumont——方形，slate，wide，$265；Wren——椭圆，honey，narrow，$175。每张卡片：照片在 paper 上 4:3，名称 Space Grotesk 18px，一个颜色点，形状和脸宽标签 Graphite 12px 大写，价格 Space Grotesk 16px，以及 'View' 链接到 ./frame.html?id=the-lune 及每个镜框的 slug。筛选隐藏不匹配卡片并显示计数行 'Showing 2 of 6 frames'；一旦有激活项就出现 'Clear filters'。网格下方一行低调文字 Graphite：'Also in the drawer this month: two steel aviators we fit in store only — ask at the bench.'
   布局：3 列网格（平板 2 列，移动 1 列），24px 间距，卡片在 Paper Deep 上圆角 14px，20px 内边距。
   动效：筛选变化时卡片以 Motion 布局动画滑动，280ms；计数行交叉淡入；卡片滚动时以 300ms 显现，60ms 错开。
5. **预约验光（Book an eye exam）** — id='exam'。Paper Deep 上两列：左侧文案——眉题 'EYE EXAMS'，H2 'Twenty minutes, no dilution.'，正文 Karla 15px Graphite：'A full sight test with our in-house optician, [EXAM_FEE], Tuesday to Saturday. Bring your current pair; leave with a prescription you can read without squinting.' 以及诚实说明 'Demo site — your pick is saved on this device only.' 右侧：预约卡片——日期芯片 TUE WED THU FRI SAT（999px，Space Grotesk 13px），五个示例时段 09:20、10:00、11:40、14:20、15:00 为描边按钮，以及摘要行 'Thu — 10:00 — [EXAM_FEE]'。按钮 'Hold this time' 将 { day, slot } 保存到 localStorage 的 `${brandSlug}:exam` 下，并切换为确认：Check 图标、'Held on this device'、'Nothing was booked or sent. Call the shop to confirm.'，以及一个 'Change' 链接，恢复表单并预填。
   布局：5/7 分栏，卡片在 Paper 上圆角 14px，带 Rule 边框，28px 内边距；移动端堆叠。
   动效：芯片按下时缩放 0.97；选择交叉淡入 180ms；确认淡入 240ms。
6. **页脚（Footer）** — Rule 细线，然后 Paper 上三列：字标带强调点；'118 Warren Street, [CITY]' 带 MapPin，'Tue–Sat 10:00–18:00' 带 Clock，'(518) 555-0148' 带 Phone；导航锚点小字重复。底部行 Graphite 12px：'All frames, fittings and prices are invented examples for this template.' 加上可选的 [CREDIT] 链接。
   布局：三列，移动端堆叠；64px 区块内边距。
   动效：无——页脚是静止的。

### [BRAND] — 一个镜框、其配色、镜片与价格（`frame.html`）
1. **产品（Product）** — 从 URL 读取 ?id=；未知或缺失 id 渲染第一个镜框（the Lune）。7/5 分栏：左侧，镜框照片大图 4:3，圆角 4px，置于随所选配色变化的 paper 色调背景上（背景色调在 content.ts 中，例如 Lune：tortoise #EFE5D4，smoke #E9E9E6，wine #EFE2DE）；下方一行细说明 'Photographed on our studio paper — colorways render slightly warmer in daylight.' 右列：形状和脸宽眉题 Graphite 大写，镜框名称 Space Grotesk 700 36px，价格行实时更新 Space Grotesk 24px（'$185'，选择付费镜片后变为 '$185 + $40 lens'），以及来自 content.ts 的一行故事（Lune：'The quiet round one — 8mm acetate, hand-polished bevel.'）。然后 'Colorway' 带三个色板圆点（每个镜框的配色列表），选中圆点以强调色描边；'Lens' 为三张单选卡片——'Standard, included'、'Blue-cut, +$40'、'Sun tint, +$55'——Karla 14px，选中卡片 Ink 边框；按钮上重述累计总价：'Reserve a fitting — $225'。按下后将镜框 slug 添加到 `${brandSlug}:tryon`，并显示内联提示带 Check 图标：'Saved to your try-on list on this device. Bring it in — fittings take ten minutes.'
   布局：7/5 分栏，64px 间距；色板和镜片以 24px 堆叠；移动端照片在上，详情在下。
   动效：配色变化时背景交叉淡入 240ms；镜片选择时价格以 200ms y 轴位移滚动；保存提示上滑 12px，240ms。
2. **规格（Specs）** — Rule 细线下方的低调规格表，两列行，Karla 14px，Graphite 标签和 Ink 值：'Width — 138 mm'、'Material — hand-cast acetate'、'Hinge — five-barrel, titanium screw'、'Weight — 21 g'、'Made — fitted in our [CITY] workshop'。值来自 content.ts 按镜框，保持合理且具体。最后一行：'Adjustments are free, forever, in store.'
   布局：760px 列内两列定义网格，1px Rule 行分隔线。
   动效：滚动时显现一次，300ms。
3. **更多镜框（More frames）** — 眉题 'ALSO ON THE SHELF' 和三个相关镜框（当前之后的下三个 slug，循环）为紧凑卡片：照片 4:3，名称，价格，'View' 链接到 ./frame.html?id=…。
   布局：3 列网格，24px 间距，与主网格相同的卡片样式。
   动效：滚动时显现，300ms，60ms 错开。

## 资源（Assets）
- 图片（image）：为本模板制作的六张影棚照片，可随模板一起再分发。构建前，用 curl -L -o 将每张图片下载到 public/images/。https://media.vibefather.ai/assets/57212378-e754-4b95-b1ec-8ecd032a6716/hero-lune-macro.webp -> public/images/hero-lune-macro.webp（主视觉图以及 Lune 的卡片/产品图；alt 'A round tortoise acetate frame lying on warm off-white paper in soft daylight'）；https://media.vibefather.ai/assets/57212378-e754-4b95-b1ec-8ecd032a6716/frame-vesper.webp -> public/images/frame-vesper.webp（Vesper；alt 'A smoke-crystal cat-eye frame on warm paper'）；https://media.vibefather.ai/assets/57212378-e754-4b95-b1ec-8ecd032a6716/frame-marrow.webp -> public/images/frame-marrow.webp（Marrow；alt 'A matte black rectangular frame on warm paper'）；https://media.vibefather.ai/assets/57212378-e754-4b95-b1ec-8ecd032a6716/frame-ansel.webp -> public/images/frame-ansel.webp（Ansel；alt 'A thin round gold wire frame on warm paper'）；https://media.vibefather.ai/assets/57212378-e754-4b95-b1ec-8ecd032a6716/frame-beaumont.webp -> public/images/frame-beaumont.webp（Beaumont；alt 'A wide square slate acetate frame on warm paper'）；https://media.vibefather.ai/assets/57212378-e754-4b95-b1ec-8ecd032a6716/frame-wren.webp -> public/images/frame-wren.webp（Wren；alt 'A small oval honey wire frame on warm paper'）。在 ASSETS.md 中为每张图片注明：'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.'
- 图标（icon）：仅使用 lucide-react：Glasses、Circle、Square、Heart、Sparkles、Minus、ArrowRight、ArrowLeft、Check、Bookmark、MapPin、Clock、Phone。描边宽度 1.75，尺寸 16-24px，颜色继承。favicon 是用代码绘制的 SVG 圆形眼镜，采用强调色（accent color）。不使用其他图标集。
- 字体（font）：@fontsource/space-grotesk（500、700）和 @fontsource/karla（400、700），在 src/fonts.ts 中导入，以便 Vite 将 woff2 文件打包进 dist/。切勿从 CDN 加载字体。

## 禁止事项
- 无后端、无 API、无表单提交、无支付：试戴列表和考试预约仅保存到 localStorage，且两处确认提示均会说明这一点。
- 不使用真实眼镜品牌，不使用可识别的镜框轮廓：六款镜框均为虚构设计，名称亦为虚构。
- 不做处方或医疗声明：考试被描述为演示视力测试；文案绝不诊断、承诺或建议超出预约试戴的内容。
- 照片仅展示纸质背景上的镜框——不出现模特面部、不出现手部、无可读文字、无标识。
- 不出现日历日期，不出现实时时钟：日期标签为固定的 TUE–SAT 示例模式，时段为五个固定示例时间。
- 价格为虚构示例；不得提及真实库存、保险或配送时间。
- 一切资源自托管：字体通过 Fontsource，图标通过 lucide-react，图片下载至 public/images/ —— 无 CDN 标签，无分析工具。
- 静态构建：压缩，无 source map，dist/ 中无 src/，一条命令 npm run build，多页面输出，dist/ 中包含真实的 frame.html，总体积低于 20 MB。
- 每个内部链接均指向文件（./index.html#frames、./frame.html?id=…）；绝不指向裸目录。frame.html 无查询参数时显示第一款镜框，绝不显示空状态。
- 尊重 prefers-reduced-motion：所有交叉淡入淡出、布局动画和滑动均变为即时完成。
- 在 1440×900 和 390×844 下正常工作，控制台零错误；测验、筛选、色板和预约均可仅用键盘操作，并有可见的强调色焦点环。
- 除带有 [BRAND] 的普通标题外，无任何 SEO 机制；网站内绝不提及 VibeFather 或任何真实品牌；所有文案均为虚构美式英语，存放于 src/content.ts。

---
— Prompt by VibeFather · https://vibefather.ai/t/eyewear-store-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
