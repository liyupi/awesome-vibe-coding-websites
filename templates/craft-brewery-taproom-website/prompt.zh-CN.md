> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 精酿啤酒厂品酒室网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个单页网站，这是由首席酿酒师 [FOUNDER] 在 [CITY] 经营的酿酒厂兼品酒室，[EXPERIENCE] 从第一口壶开始。页面外观如同标签艺术：奶油色底上以酒花绿、琥珀色和世涛棕丝网印刷，代码绘制的酒花球和卡车。网站包含可筛选的十二款啤酒龙头酒单、一个能填满绘制桨板的品鉴组合构建器、餐车每周节奏、工作日活动、参观预约、周边商品，以及一个友好的回访访客年龄门。每款啤酒、餐车和乐队名称均为虚构；网站载有理性饮酒提示，绝不鼓励过量。

- 受众：主要：本地啤酒爱好者和正在决定周四晚上去哪里的游客——那些开车前先查看龙头酒单的人。次要：苹果酒厂、蜂蜜酒厂和葡萄酒品酒室，重新指向酒单和品鉴组合构建器。
- 目标：推动访客从“龙头酒单上有什么”到计划一次到访：一屏之内回答龙头酒单问题，让品鉴组合构建器为犹豫不决者做决定，然后转化为参观预约或仅仅是这趟行程本身。
- 语调：酿酒厂口吻的英语：冷面、温暖，对工艺略带自豪。品鉴笔记读起来像是酿酒师在转壶间隙写下的。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/bitter（OFL-1.1）、@fontsource/karla（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 设为 './'，build.outDir 设为 'dist'，build.sourcemap: false。不使用路由、无后端、无服务端代码。
  - 安装 Tailwind CSS 3.4 及 PostCSS 和 Autoprefixer。用下方精确的调色板扩展主题，fontFamily.display 设为 'Bitter'，fontFamily.body 设为 'Karla'。
  - 通过 @fontsource/bitter 和 @fontsource/karla 自托管 Bitter 字重 600 和 700，以及 Karla 字重 400、500、700，在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、useInView、useReducedMotion）实现显现动画和酒桨注满效果；每个动画都以 useReducedMotion() 为条件。
  - 将所有文案和数据放在 src/content.ts 中：品牌字符串、主视觉文案、十二款啤酒（名称、风格、类别、ABV、IBU、备注、色块颜色）、筛选选项、品鉴组合文案、餐车、活动、参观时段、周边商品、营业时间、理性饮酒提示语。当变量值变化时，在该文件中重写依赖的文案，并从 [BRAND] 和 [PHONE] 派生存储键和 tel: 链接，确保不残留默认品牌痕迹。
  - 酒头列表，恰好十二款啤酒，字段为：'Millrace Pale' American pale ale 5.2% 38 'Bready start, piney finish.' #D98E2B；'Fiddleneck IPA' Hazy IPA 6.4% 45 'Citrus-forward, soft landing.' #E0A83C；'Two Row Lager' Munich helles 4.8% 18 'The lawnmower beer.' #EBC65C；'Kettle Sour' Berliner weisse 3.6% 8 'Tart, light, picnic-ready.' #F2DE8E；'Oat Cream Ale' Cream ale 5.6% 15 'Smooth as its name claims.' #DFAF4E；'Porter's Rest' Robust porter 5.8% 32 'Chocolate, not dessert.' #6B4326；'Night Shift' Oatmeal stout 6.2% 28 'Roast and a whisper of coffee.' #3A2418；'Rye the Knot' Rye IPA 6.8% 60 'Spicy rye bite over resin.' #B96A28；'Harvest Wet Hop' Fresh hop ale 6.9% 40 'One week a year; this is it.' #8FA03A；'Pilsner Bridge' Bohemian pilsner 4.9% 30 'Crisp, floral, exacting.' #E9CB63；'Belgian Table' Session saison 4.4% 20 'Peppery, dry, second-pour easy.' #E5C469；'Barleywine No. 9' English barleywine 9.6% 45 'The sipping chair in a glass.' #8C4A22。筛选：类别标签（Ales / Lagers / Dark / Sour & light）和强度标签（Session <5% / Standard / Bold 7%+）；实时计数（'12 of 12'）；激活时显示 'Clear filters'；零结果状态显示清除标签。
  - 品鉴组合构建器：酒头列表行增加一个 'Add to flight' 切换（最多 4 款；第 5 次尝试会让酒桨抖动并弹出提示 'Four's the paddle's limit'）；一个 'Add all four? Try the house flight' 预设（Millrace Pale、Night Shift、Kettle Sour、Two Row Lager）；绘制的 SVG 酒桨（代码：一块圆角胡桃木色木板，配四个品鉴杯）按选择顺序从左到右填充，每个杯子在 500ms 内以其啤酒的色块颜色填充；摘要卡片列出每款啤酒（名称、风格、ABV）和 '4 × 5 oz pours — $14 sample'；备注 'Poured in your order — taproom only.'。将选择持久化到 localStorage 的 [BRAND_SLUG]-flight 下。
  - 年龄门仅在首次访问时渲染：全屏奶油色遮罩，带代码绘制的啤酒花球果、品牌标识、'Old enough to be here?' 以及两个按钮 'Yes — come on in'（设置 localStorage [BRAND_SLUG]-age-ok 并在 250ms 内淡出）和 'Not yet'（切换为友好面板：'No worries — the food trucks and root-beer floats are still yours. Come back with an adult.'）；回访访客完全跳过年龄门；一旦清除，年龄门绝不阻止页面的滚动恢复。
  - 用代码绘制标签风格的 inline-SVG 艺术：啤酒花球果标志、餐车图标（每个一个带遮阳篷的剪影）、用于区块分隔线的无拖拉机啤酒花藤蔓边框（双色叠印：啤酒花绿 + 琥珀色，带轻微偏移），以及周边商品艺术（T 恤、连帽衫、郁金香杯、贴纸）——扁平形状，无渐变，无第三方艺术。
  - 仅使用这些 lucide-react 图标：Phone、Beer、Clock、MapPin、CalendarCheck、CheckCircle2、ChevronRight、ArrowRight、Menu、X、Users、Music、Truck、Sparkles、Leaf、Star。
  - 将年龄门、品鉴组合选择和参观预约持久化到 localStorage，以 [BRAND_SLUG] 为命名空间；验证恢复的 JSON，并从格式错误的数据中静默恢复。
  - 在构建前将六张生成的图片下载到 Assets 中列出的精确公共路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者或生成器以及许可证。
  - 一个纯 <title> 为 [BRAND] 以及一个 favicon（啤酒花球果标志）就足够了；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 啤酒厂名称（默认：“Fiddleneck Brewing Co.”）。虚构的啤酒厂；酒花球标志在代码中由此派生。
- [CITY] — 城镇（默认：“Millrace”）。品酒室所在地；出现在主视觉、营业时间和页脚中。
- [FOUNDER] — 首席酿酒师（默认：“Sana Iqbal”）。虚构的首席酿酒师，在主视觉和参观文案中提及。
- [PHONE] — 电话（默认：“(555) 812-6640”）。品酒室电话；以 tel: 链接形式呈现，仅使用数字。
- [EXPERIENCE] — 酿酒年限（默认：“6 years”）。使用类似 '6 years' 的简单短语；用于主视觉文案。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/craft-brewery-taproom-website（默认：是；删除此行即可移除）

页面与区块下的文案是针对默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 啤酒花绿（Hop green）`#5B8C2A` — 品牌色：眉题、激活的标签、啤酒花图案、链接
- 深啤酒花绿（Hop deep）`#3F6520` — 深绿色面板和页脚底色
- 琥珀艾尔色（Amber ale）`#E09A2D` — 暖色点缀：价格、高亮、品鉴组合摘要
- 琥珀浅色调（Amber tint）`#F7E9CE` — 标签和高亮面板
- 世涛棕（Stout brown）`#2A1A12` — 深色条带、标题、页脚文字
- 奶油纸色（Cream paper）`#F6F1E4` — 页面底色，带有细微的纸张纹理 CSS 纹理
- 白色 `#FFFFFF` — 奶油底色上的卡片
- 墨色（Ink）`#241811` — 正文文字
- 钢灰色（Steel）`#6B5F52` — 次要文字
- 细线色（Hairline）`#E4DBC8` — 细线分隔和卡片边框

### 字体排印
- 展示字体：标题、啤酒名称、价格：Bitter（OFL），字重 600/700
- 正文字体：段落、控件、列表元信息：Karla（OFL），字重 400/500/700

### 布局与动效
- 间距：桌面端区块间距 88px / 移动端 60px；区块标题位于双色啤酒花藤蔓分隔线下方（绿色叠在琥珀色上，略微偏移），配有 13px 字距的啤酒花绿眉题和 Bitter 700 标题，字号为 clamp(28px, 3.2vw, 44px)；卡片内边距 24px，间距 20px。
- 圆角：便于标签使用：卡片 8px，标签 6px，胶囊形 CTA；照片 8px 并带 2px 世涛棕边框，如同印刷画框。
- 动效：通过 useInView 实现淡入上升显现（12px，500ms，60ms 交错），仅触发一次。
- 动效：品鉴组合中的品鉴杯自下而上填充，每杯 500ms，按选择顺序交错 150ms；被拒绝的第五个选择会让品鉴板抖动 8px，共两次。
- 动效：筛选变化时，酒头行以 40ms 交错；年龄验证通过时，年龄门淡出 250ms。
- 动效：在 prefers-reduced-motion 下所有动效立即禁用；无视差、无滚动劫持、无自动播放媒体。
- 图像：来自一次拍摄的暖琥珀光精酿啤酒厂摄影：一间挂有串灯和公共长桌的品酒室、一面素柄酒头墙、不锈钢发酵罐、吧台上四杯木质品鉴组合、一杯郁金香杯正在倒酒、黄昏时分挂灯的露台——无人物，无可读的酒头标签或标牌。

## 页面与区块
### [BRAND] — [CITY] 的品酒室（`index.html`）
1. **年龄门禁** — 仅首次访问，全屏奶油色（cream）遮罩覆盖在页面之上：代码绘制的啤酒花球果、Bitter 700 字体的 [BRAND]、Karla 16px 的 'Old enough to be here?'、两个胶囊按钮 — 'Yes — come on in'（啤酒花绿）和 'Not yet'（世涛色描边）。拒绝后切换为：'No worries — the food trucks and root-beer floats are still yours. Come back with an adult.'，并附一个返回的 'Changed my mind' 链接。通过后设置 localStorage 标记；回访用户永远不会看到门禁。
   布局：居中卡片，最大宽度 460px；门禁可见时锁定页面滚动；通过后后方页面正常渲染。
   动效：接受后门禁在 250ms 内淡出；其后方无任何动画。
2. **页眉与主视觉** — 页眉（奶油色 94% 不透明度带背景模糊，72px）：啤酒花球果标志 + Bitter 700 18px 世涛色的 [BRAND]；导航锚点 Tap list、Flight、Food trucks、Tours、Visit；右侧：电话芯片 Phone 图标 + [PHONE]（tel:）和啤酒花绿胶囊按钮 'Book a tour'。在 390px 宽度下：标志 + 名称、电话图标按钮、菜单按钮排成一行；锚点收进奶油色下拉菜单。主视觉：左侧文案（第 1–6 列）：啤酒花绿眉题 'BREWERY & TAPROOM — [CITY]'；H1 Bitter 700 世涛色 'Twelve taps, one stubborn kettle.'；段落钢灰色 'Head brewer [FOUNDER] runs a 10-barrel rig behind the bar — [EXPERIENCE] of small batches, honest styles and a taproom that smells like breakfast for grain nerds.'；啤酒花绿胶囊按钮 'See the tap list'（锚点）、世涛色描边胶囊按钮 'Build a flight'（锚点）；芯片：'Tours Saturdays' · 'Food trucks 4 nights' · 'Family-friendly till 8'。右侧（第 7–12 列）：品酒室照片置于 8px 边框内，带 2px 世涛色边框。
   布局：12 列网格；移动端先堆叠文案再堆叠照片。
   动效：照片从 1.03 缩放归位；文案上浮 12px，错开 70ms。
3. **酒单** — 奶油色区块带纸张纹理。眉题 'ON TAP NOW'（啤酒花绿）；标题 'The board, without the chalk dust.' 筛选行：类型芯片（All / Ales / Lagers / Dark / Sour & light）和强度芯片（Any / Session <5% / Standard / Bold 7%+）；实时计数 '12 of 12'。列表行（白色卡片、细线、8px）：色块圆点（该啤酒的颜色）、Bitter 700 17px 世涛色的名称、Karla 13px 钢灰色的风格、表格数字 13px 的 ABV 和 IBU 配小 Beer 图标，以及 Karla 14px 墨色斜体的品鉴笔记；右侧一个 'Add to flight' 切换开关（加入飞行装时呈啤酒花绿，飞行装已满时呈禁用外观并配桨板图标）。页脚注释 12px 钢灰色：'ABV and IBU are the current batch — the board changes with the kettle.'
   布局：单列列表，最大宽度 860px；移动端筛选器横向滚动；零结果状态显示清除芯片。
   动效：筛选变化时行错开 40ms 并伴随 160ms 交叉淡入；加入飞行装切换开关弹跳至 1.05×。
4. **飞行装构建器** — 世涛棕区块，标志性区块。眉题 'BUILD A FLIGHT'（琥珀色）；标题 'Four glasses, your order.' 左侧（7 列）：绘制的 SVG 飞行装桨板 — 胡桃棕木板配四个品鉴杯；杯子按选择顺序从左到右填充，每个杯子填充其啤酒的色块颜色，500ms 自下而上填充，错开 150ms；空槽显示淡淡的啤酒花轮廓。右侧（5 列）摘要卡片（世涛色上的奶油色）：'YOUR FLIGHT' 琥珀色眉题；每款啤酒（名称 Bitter 700 16px 世涛色，风格 + ABV 13px 奶油色）；总计行 '4 × 5 oz pours — $14 sample' 琥珀色；注释 12px 'Poured in your order — taproom only.'；按钮：啤酒花绿胶囊按钮 'Save my flight'（持久化；标签切换为 'Saved ✓'）和一个描边胶囊按钮 'House flight' 预设（填充 Millrace Pale、Night Shift、Kettle Sour、Two Row Lager）。飞行装已满时第 5 次尝试会摇晃桨板并弹出提示 'Four's the paddle's limit.'
   布局：桌面端 7/5 列；移动端堆叠，桨板在前；桨板最大宽度 480px。
   动效：品鉴杯按指定错开填充；溢出时摇晃 8px 两次；提示在 2.4s 后淡出。
5. **餐车** — 奶油色区块。眉题 'FOOD TRUCKS'（啤酒花绿）；标题 'Dinner parks itself here.' 四张餐车卡片排成一行，每张带代码绘制的餐车剪影（各配一种遮阳篷颜色）和一个星期锚点：'Tuesday — Taco Tangent' — 'Al pastor and a killer elote.'；'Thursday — Smoke & Ash' — 'Brisket by the pound till it's gone.'；'Friday — Pierogi Wagon' — 'Buttered, onioned, unregrettable.'；'Saturday — Brick Oven Bus' — 'Blistered margheritas in ninety seconds.' 页脚行 13px 钢灰色：'Trucks park from 5 p.m. — follow the smoke. Schedule is a sample rhythm, not a promise.'
   布局：四张卡片一行（900px 以下 2×2，640px 以下 1 列）。
   动效：卡片上浮 12px，错开 70ms；餐车剪影滑入 12px。
6. **活动** — 白色区块。眉题 'THE WEEK'（啤酒花绿）；标题 'Same nights, good crowds.' 四行活动（细线分隔）：'Tuesdays — Run Club' — '6:30 a.m., 5k, first pour's on the house for runners (it's coffee)'；'Thursdays — Trivia' — 'Seven rounds, seven dollars, max teams of six'；'Fridays — Bluegrass on the patio' — 'Two sets, no amps, weather permitting'；'Sundays — Yoga & a Pint' — '10 a.m. flow on the concrete, first pour after savasana'。每行图标（Music / Users / Sparkles / Leaf）。注释 12px 钢灰色：'Recurring weekly — no tickets, just show up. Sample schedule.'
   布局：行最大宽度 760px；图标置于琥珀色浅色圆圈中。
   动效：行淡入，间隔 60ms。
7. **参观与周边** — 奶油色区块，分两半。左侧：'TOURS' 眉题；标题 'The kettle, up close.' 文案：'$12 a head, Saturdays on the hour — the mash-in smell alone is worth it. [FOUNDER] or a brewer walks you grain to glass; 45 minutes, ends with a taster.' 预订表单（白色面板）：人数芯片（2 / 4 / 6 / 8）、时段芯片（1 p.m. / 2 p.m. / 3 p.m.）、姓名（必填）、电话（必填）；啤酒花绿胶囊按钮 'Hold my spot'；成功：CheckCircle2，'SPOT-2231 held — we text a confirmation. This demo stores the booking in this browser only.' 右侧：'MERCH' 眉题；四件商品配代码绘制图案：'Taproom tee — $28'；'Kettle hoodie — $52'；'Tulip glass — $9' 标注 'FLIGHT-APPROVED'；'Sticker pack — $5'。注释 12px 钢灰色：'Buy at the bar — the online cart is a sign, not a store (sample).'
   布局：桌面端 6/6 列，移动端堆叠；参观表单字段桌面端每行两个。
   动效：周边卡片上浮 12px 错开；成功代码弹跳至 1.1×。
8. **到访与页脚** — 世涛棕区块，左侧倒酒照片（8px 边框），右侧到访信息：'Find us' — '14 Raceway Lane, [CITY]'（MapPin）；营业时间 'Wed–Thu 4–10 · Fri 3–11 · Sat 12–11 · Sun 12–6'；'[PHONE]（tel:）'；一行 'Kid- and dog-friendly till 8 p.m. — the picnic tables out back know it.' 页脚（啤酒花深色底）：品牌 + 标志；锚点 Tap list、Flight、Tours、Visit；'Drink responsibly. Sample site — beers, trucks and events invented.' 加上可选的 [CREDIT] 链接（琥珀色）。移动端粘性栏（768px 以下）：固定底部啤酒花深色 96% + 模糊；啤酒花绿胶囊按钮 'Hours'（锚点）和琥珀色胶囊按钮 'Book tour'（锚点），安全区内边距。
   布局：照片 5 列，信息 7 列；页脚网格 4/4/4 到移动端 1 列；768px 以下 body 底部内边距 80px。
   动效：页脚无动效；照片上浮 12px。

## 资源

- 图片：品酒室内部。将 https://media.vibefather.ai/assets/48197d58-6a52-46a4-9302-feef4275c625/hero-taproom.webp 下载到 public/images/hero-taproom.webp。替代文本：'A warm taproom with string lights and communal tables.' 主视觉锚点。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：酒龙头墙。将 https://media.vibefather.ai/assets/48197d58-6a52-46a4-9302-feef4275c625/taps-row.webp 下载到 public/images/taps-row.webp。替代文本：'A row of tap handles on the bar back.' 酒单附近的辅助图片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：发酵罐。将 https://media.vibefather.ai/assets/48197d58-6a52-46a4-9302-feef4275c625/tanks.webp 下载到 public/images/tanks.webp。替代文本：'Stainless fermentation tanks in warm light.' 用于参观区块旁。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：吧台上的品鉴组合。将 https://media.vibefather.ai/assets/48197d58-6a52-46a4-9302-feef4275c625/glass-flight.webp 下载到 public/images/glass-flight.webp。替代文本：'A wooden flight paddle holding four tasters on the bar.' 品鉴组合构建器附近的辅助图片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：倒酒。将 https://media.vibefather.ai/assets/48197d58-6a52-46a4-9302-feef4275c625/pour-glass.webp 下载到 public/images/pour-glass.webp。替代文本：'An amber beer pouring into a tulip glass.' 用于到访横幅。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：露台。将 https://media.vibefather.ai/assets/48197d58-6a52-46a4-9302-feef4275c625/patio.webp 下载到 public/images/patio.webp。替代文本：'A brewery patio with string lights at dusk.' 活动附近的辅助图片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图标：Lucide（ISC）通过 lucide-react 包，加上原创代码绘制的标签艺术：啤酒花球果标志、啤酒花藤蔓分区线、餐车剪影和周边商品插画。无第三方插画。
- 字体：Bitter（OFL）和 Karla（OFL）通过 @fontsource/bitter 和 @fontsource/karla 自托管；无 CDN 字体加载。

## 禁止事项
- 这是一个酒精类网站：年龄验证门是强制性的（首次访问、localStorage、回访访客跳过），文案绝不鼓励数量或饮酒游戏，页脚保留“Drink responsibly”一行。
- 不使用真实酿酒厂、啤酒名称、标签艺术、口号或节日；[BRAND]、全部十二款啤酒、餐车、活动和价格均为虚构的示例数据。
- 不使用真实啤酒花品种商标作为品牌；啤酒花特征以通用方式描述（松木香、柑橘前调）。
- 不使用真实餐车、餐厅或音乐人；餐车和演出均为虚构，使用通用的菜系和流派标签。
- 不使用与时钟绑定的真实日期：餐车和活动锚定到星期几，巡演时段为静态标签，无日历日期，无版权年份。
- 周边商品仅限酒吧购买——绝不使用真实购物车或结账；演示中声明在线网格“is a sign, not a store”。
- 表单仅为本地示例：不向任何服务器提交，无 API，无分析。仅持久化到 localStorage 并验证恢复的数据。
- 无后端、服务器代码、数据库或认证。通过单一构建命令在 dist/ 中输出静态文件，小于 20 MB，Vite 的 base 为相对路径。
- 仅通过 Fontsource 包自托管字体；绝不加载 Google Fonts、Adobe Fonts 或任何 CDN 样式表或脚本。
- 生产环境无 source map，不将 src/ 复制到 dist/。
- 不使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件；仅使用六张生成的图片和代码绘制的 SVG 艺术。
- 不做 SEO 工作：无 meta 描述、Open Graph 标签、JSON-LD、站点地图或关键词堆砌的标题。一个包含 [BRAND] 的普通标题和一个 favicon 就足够了。
- 酒头列表筛选器绝不能在没有“Clear filters”控件的情况下留下空列表；品鉴组合构建器上限为四个，并提供友好反馈，绝不硬性阻止。
- 照片仅展示酒头、酒罐、玻璃器皿和房间——不出现人物，不出现可读的酒头手柄标签、标牌或品牌标记。
- 无滚动劫持、页面视差、自定义光标或自动播放媒体；动效仅限于指定的显现、品鉴杯填充、抖动、交错和门淡入，全部遵循 prefers-reduced-motion。
- 在 390px 宽度下保持移动端页眉单行显示，绝不让粘性底栏遮挡巡演表单的提交按钮。
- 从 [BRAND] 和 [PHONE] 构建品牌派生字符串（存储键、tel: 链接），以便替代变量值绝不会留下默认品牌残留。
- 每个内部链接都是文件名或页内锚点，绝不是裸目录；网站保持为单个 index.html。

---
— Prompt by VibeFather · https://vibefather.ai/t/craft-brewery-taproom-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
