> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 冲浪学校网站

完全按照下面的描述构建这个网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个冲浪学校的单页营销网站：一个被阳光晒褪色的胶片颗粒感品牌形象（褪色的海洋蓝、沙滩中性色、覆盖在所有内容上的温暖颗粒叠加层）、一个全出血的褪色海浪主视觉区、一条用 SVG 绘制的五日样本预报条、三个课程级别、以编辑式行布局呈现的营地和套餐、带有抓拍背影照的教练卡片、一个客户端预订表单，以及一条风格化的海岸线地图条。

- 受众：冲浪、风筝冲浪、SUP 及其他海滩学校，以及为他们建站的设计师。
- 目标：先卖出感觉——薄雾、温暖颗粒、空荡的海浪——再让预订变得轻松：理解级别、信任教练、查看样本预报，并留下一个已保存的预订请求。
- 语调：轻松温暖，带点冷幽默；短句听起来像是眯着眼迎着阳光说出来的；能力通过具体细节展现，而非形容词。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/bricolage-grotesque（OFL）、@fontsource/archivo（OFL）、@fontsource/space-mono（OFL）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest surf-school-website -- --template react-ts 搭建脚手架；将 tailwindcss@3.4、postcss 和 autoprefixer 添加为开发依赖；将 motion、lucide-react、@fontsource/bricolage-grotesque、@fontsource/archivo 和 @fontsource/space-mono 添加为依赖。
  - vite.config.ts：base './'，build.sourcemap false，构建输出 dist/。
  - tailwind.config.js：扩展颜色 sand #F4EDE3、dune #E7DCCC、driftwood #B9A88F、fadedblue #8FB4C2、deeptide #3E6474、ink #2E3438、fog #6E7A78、sunbleach #DFA95C；fontFamily display 'Bricolage Grotesque'、sans 'Archivo'、mono 'Space Mono'。
  - postcss.config.js：tailwindcss + autoprefixer。
  - 胶片颗粒叠加层：在 src/index.css 中定义 .grain-overlay 为固定定位、inset-0、pointer-events-none 的图层，透明度 0.06，mix-blend-mode 为 multiply，背景图使用内联 SVG data URI（feTurbulence 类型 fractalNoise，baseFrequency 0.9，300px 平铺）重复构建；在 App 中于每个页面和照片之上渲染一次——这种温暖的颗粒感是整个网站的签名特征。
  - src/components/forecast.tsx：三个纯 SVG 组件，从 content.ts 取值——WaveArc（一条平滑弧线路径，其振幅随浪高缩放）、WindArrow（一条带箭头的线，旋转至风向）和 TideCurve（一条正弦路径，带一个定位点）；src/components/BeachMap.tsx：用代码绘制的风格化海岸线地图——fadedblue 的海面、dune 形状的沙地多边形、一条防波堤线、一个 sunbleach 图钉。
  - src/lib/motion.ts：共享的 Motion 变体——fadeUp（opacity 0→1，y 20→0，600ms ease-out，80ms stagger，whileInView once）、hoverLift（y -2px，200ms）——配合 useReducedMotion 回退为普通的 200ms 透明度淡入。
  - 将所有面向用户的字符串（品牌、海滩、价格、预报示例行、级别、营地、教练、预订文案、地址、营业时间）保留在 src/content.ts 中；各区块从中读取，以便在一处替换值。
  - index.html：<title>[BRAND] — Surf School at [BEACH]</title> 加上一个用代码绘制的 favicon.svg（sand 底色上的单个 fadedblue 波浪弧）；无其他 meta 工作。

## 变量
- [BRAND] — 学校名称（默认："Driftline"）。用于字标、页面标题、联系邮箱（hello@driftline.surf，来自 content.ts）以及文案中每一处提及的虚构名称。
- [BEACH] — 海滩名称（默认："Sanderling Bay"）。虚构的主场地点：主视觉标签、预报介绍、地图图钉说明以及"找到我们"的路线指引。
- [PRICE_LESSON] — 入门课程价格（默认："$55"）。新手级别的价格（"from [PRICE_LESSON]"）以及任何"课程起价"文案。
- [CLASS_SIZE] — 最大团体人数（默认："6"）。主视觉副标题中的小班承诺以及预订表单的同行人数上限。
- [CREDIT] — 在页脚保留一个小的"Template by VibeFather"链接，指向 https://vibefather.ai/t/surf-school-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 沙色（Sand）`#F4EDE3` — 所有页面的底色；主视觉照片通过底部渐变融入其中。
- 沙丘色（Dune）`#E7DCCC` — 凸起的表面：等级卡片、教练卡片、预报单元格、页脚区域。
- 浮木色（Driftwood）`#B9A88F` — 细线、卡片边框、分隔线；悬停时加深。
- 褪色蓝（Faded blue）`#8FB4C2` — 主要的褪色海洋强调色：链接、激活的标签、波浪弧线、预报高亮、地图的海面。
- 深潮色（Deep tide）`#3E6474` — 强强调色：主按钮、等级卡片标题、地图图钉轮廓。
- 墨色（Ink）`#2E3438` — 主要文本 — 带有蓝色底调的柔和近黑色，绝不使用纯 #000。
- 雾色（Fog）`#6E7A78` — 次要文本：介绍语、元信息行、说明文字、示例数据标签。
- 日晒色（Sunbleach）`#DFA95C` — 唯一的暖色高亮：地图图钉填充、下划线强调、潮汐圆点 — 谨慎使用。

### 字体排印
- 展示字体 — 标题、营地名称、教练姓名（轻松、略带俏皮）：Bricolage Grotesque（OFL），字重 600/700/800
- 文本字体 — 正文、列表、表单标签：Archivo（OFL），字重 400/500/600
- 等宽字体 — 预报读数、小型大写标签、价格：Space Mono（OFL），字重 400/700

### 布局与动效
- 间距：宽松而不慌不忙：桌面端区块 py-28（112px）/ 移动端 py-20（80px）；内容 max-w-6xl px-6/px-10；卡片以 28px 内边距呼吸；细线（1px 浮木色）承载结构，而非阴影。
- 圆角：柔和但非胶囊形：卡片和照片 12px，按钮和输入框 8px，仅微型标签使用 999px；没有更锐利的，也没有完全圆形的。
- 动效：显现：区块和卡片向上淡入（y 20→0，600ms ease-out），通过 Motion 的 whileInView 以 80ms 错峰触发，仅触发一次。
- 动效：主视觉：波浪照片在加载时从 1.05→1 缩放，历时 3s，并以 0.1 的滚动速率视差移动；标题在照片稳定后 120ms 升起；底部的沙色渐变保持融入页面的效果为静态。
- 动效：预报条：每条波浪弧线以 4s ease-in-out 循环漂移（translateY ±3px），每个单元格错峰 200ms；风向箭头在显现时从 0° 缓动到其旋转角度（400ms）。
- 动效：卡片和行悬停时上浮 2px，并将浮木色细线加深为 fadedblue（200ms）；标签填充沙丘色，标签文字切换为 Space Mono 700。
- 动效：海滩地图图钉在区块进入时弹出（scale 0→1，300ms 弹簧）；地图本身为静态。
- 动效：颗粒叠加层从不做动画 — 它是页面的常量。
- 动效：prefers-reduced-motion：视差、加载缩放和所有循环关闭；显现变为普通的 200ms 透明度淡入；悬停效果仅变为颜色变化。
- 图像：一卷胶片：35mm 照片，采用日晒褪色的彩色负片风格 — 褪色的海洋蓝和沙色中性色，温暖可见的颗粒，朦胧柔和的高光，略微抬起的黑场。空荡的波浪、沙滩上的冲浪板，人物仅在画面中很小或从背后拍摄且面部不可辨认。画面中无文字，无标志，无可辨认的浪点或地标。六张照片由 VibeFather 生成，下载到 public/images，全站暖色颗粒叠加层也覆盖在其上。

## 页面与区块
### [BRAND] — [BEACH] 冲浪学校（`index.html`）
1. **页眉** — 固定顶栏，72px，在首屏上方透明。左侧：[BRAND] 字标，Bricolage Grotesque 700，24px，小写（'driftline' 感觉），滚动后为沙地上的墨色 / 照片上方为沙色。右侧（桌面端）：锚点链接 'Lessons'、'Camps'、'Coaches'、'Find us'，Archivo 15px；然后是一个低调按钮 'Book a lesson'（深潮色底，沙色文字，8px 圆角）。移动端：字标 + 按钮 + lucide menu/x 切换，打开一个沙色面板，四个链接堆叠。
   布局：position fixed，z-40；滚动 80px 后，栏获得 94% 不透明度的沙色底、1px 浮木色底部细线和轻微背景模糊（300ms）。
   动效：底色和细线在 80px 阈值处淡入；移动端面板下滑 250ms；链接悬停时以日晒色下划线。
2. **首屏** — 全出血褪色海浪照片（public/images/hero-wave.webp）位于颗粒叠加层下。标题上方标签，Space Mono 12px 大写，日晒色：'SURF SCHOOL AT [BEACH]'。标题 Bricolage Grotesque 700，clamp(3rem, 7vw, 5.5rem)，行高 1.05，沙色 #F4EDE3：'The ocean sets the schedule.' 副行，Archivo 400 18px，沙色 92%，max-w 48ch：'Surf lessons, weekend camps and private coaching at [BEACH] — soft boards, groups of [CLASS_SIZE] max, and coaches who grew up on this sand.' CTA：'Book a lesson'（深潮色底，沙色文字）→ #book；'See the levels'（幽灵按钮，沙色文字，日晒色下划线）→ #lessons。
   布局：min-h 92vh，relative；照片 absolute inset-0 object-cover object-center；底部渐变从透明沙色到纯色 #F4EDE3，覆盖最后 180px，使照片融入页面；文本块在 12 列网格的左下（第 1–8 列，padding-bottom 120px）。
   动效：照片加载时 3s 内从 1.05→1 缩放，并以 0.1 的滚动视差移动；标签、标题、副行和 CTA 依次淡入上移（80ms 错开，从 400ms 开始）；减少动态：静态照片，单次 200ms 淡入。
3. **预报条** — 小标题行：'The mood out back'，Bricolage 600 20px 墨色，加上一个 Space Mono 11px 大写芯片，沙丘色底，雾色文字：'SAMPLE FORECAST'。五个工作日单元格（周一至周五，来自 content.ts 的静态示例行）：每个单元格显示工作日，Space Mono 12px 雾色；一个按涌浪大小调整的 WaveArc，高度用 Space Mono 14px 墨色（'2 ft'）；一个 WindArrow 带方向标签（'Offshore 6 kn'，Archivo 13px 雾色）；以及一个 TideCurve，带日晒色圆点和标签（'low tide morning'）。示例行：Mon 2 ft Offshore 6 kn low tide morning · Tue 3 ft Offshore 8 kn high tide midday · Wed 4 ft Cross-shore 11 kn low tide morning · Thu 3 ft Offshore 9 kn high tide midday · Fri 2 ft Glassy 4 kn low tide evening。脚注，Archivo 13px 雾色：'Sample forecast for the demo — the real one is chalked on the shop door every morning.'
   布局：首屏正下方一条沙丘色带（py-10）：五个单元格等宽网格，1px 浮木色细线分隔；移动端单元格堆叠，之间用细线。
   动效：波浪弧线以 4s 循环漂移 ±3px，每个单元格错开 200ms；风向箭头在显现时旋转进入；示例芯片从不动画。减少动态：全部静态。
4. **课程 — 三个级别** — id=lessons。标题 Bricolage 700 clamp(2rem, 4vw, 3.25rem) 墨色：'Three levels, one beach.' 介绍 Archivo 雾色 max-w 52ch：'Nobody gets thrown in the deep end. You start where the water is kind and move out when you're ready.' 三张级别卡片，沙丘色底，28px 内边距，12px 圆角，浮木色细线：卡片 1 'First timer' — 标签行 'Waist-deep white water'（Space Mono 12px 褪蓝）— 你将学到：'Beach safety, and where not to paddle'；'The pop-up — on the sand first, always'；'Riding broken waves all the way back to the sand'。元信息行 Space Mono 13px 雾色：'90 MIN · GEAR INCLUDED · FROM [PRICE_LESSON]'。卡片 2 'Improver' — 'Out the back' — 'Paddling through the impact zone without drama'；'Catching unbroken green waves'；'Trimming along the wave face'。'2 HRS · SMALL GROUPS · $75'。卡片 3 'Advanced' — 'The whole line-up' — 'Bottom turns that hold their line'；'Cutbacks that use the whole wave'；'Positioning when it's crowded'。'2 HRS · VIDEO FEEDBACK · $95'。每张卡片以文本链接 'Book this level →'（深潮色）结尾，指向 #book。
   布局：3 列网格（移动端 1 列，堆叠），28px 间距；卡片顶部对齐，标签在名称上方。
   动效：卡片以 100ms 错开淡入上移；悬停上浮 2px 并将细线变为褪蓝；链接悬停时箭头轻推 2px。
5. **营队和套餐** — 标题：'Stay longer, surf better.' 三个编辑式行，由 1px 浮木色细线分隔（非卡片）：行 1 'Weekend Camp' — 'Two days, four sessions, one very good tired.' 包含（Archivo 15px，点分隔）：'4 lessons · board & wetsuit hire · breakfast at the surf house · Sunday video debrief' — 价格 Space Mono 700 20px '$290'。行 2 'Surf & Stay Week' — 'Seven mornings in the water, evenings on the deck.' — '10 sessions · 7 nights at the surf house · daily forecast briefing · airport pickup' — '$1,150'。行 3 'Private Coaching' — 'One coach, one surfer, one focus.' — '1:1 session · video analysis · a drill plan to take home' — '$140 / session'。每行以 'Book this →' 结尾，指向 #book。行旁（桌面端），surfer-small.webp 作为竖版氛围照片：一个孤独冲浪者在画面中很小，黎明时划出去。
   布局：12 列网格：行在第 1–8 列（每行是 2 列内部网格：名称+行左，包含+价格+链接右），照片在第 9–12 列（全节高度，object-cover，12px 圆角，3:4 裁剪）。移动端：照片在前（280px），然后行堆叠。
   动效：行在滚动时以 100ms 错开淡入上移；照片获得 0.06 的轻微视差；价格在其行后 80ms 滑入。
6. **教练** — 标题：'Coached by locals.' 介绍：'Between them: forty seasons on this beach, two ex-lifeguards, and one judge who will take your takeoff apart frame by frame.' 三张教练卡片：照片（3:4，从背后，无可识别面孔），名字 Bricolage 700 20px 墨色，角色 Space Mono 12px 褪蓝，一行 Archivo 雾色，一个专长芯片（沙丘色药丸，Space Mono 11px）。Mara Quinn — Head coach — 'Twelve seasons on this sand; reads the rip like a paperback.' — 芯片 'Whitewater'。Tomas Ferreira — Improver lead — 'Ex-lifeguard, endlessly patient, allergic to egos.' — 芯片 'Green waves'。Jun Park — Advanced coach — 'Contest judge by winter; breaks your takeoff down frame by frame.' — 芯片 'Video analysis'。照片下方说明，Archivo 12px 雾色：'Watching the line-up'、'First push into the white water'、'Off to check the point'。
   布局：3 列网格，28px 间距；照片 3:4，12px 圆角，上面有颗粒叠加层；卡片无边框 — 照片锚定每张卡片。
   动效：卡片以 120ms 错开淡入上移；照片在显现时以 1s 缓慢从 1.02→1 缩小；悬停时提升专长芯片的下划线。
7. **预订课程** — id=book。标题：'Book a lesson.' 介绍：'Tell us what fits and we'll hold a slot — or just come by the shop.' 左列，联系块在沙丘色底（12px 圆角）：lucide map-pin '12 Dock Road, [BEACH]'；clock 'Shop daily 8:00–17:00 · lessons dawn to mid-morning'；phone '(555) 014-8890'；mail 'hello@driftline.surf'（来自 content.ts，随 [BRAND] 变化）。右列，表单（标签 Archivo 600 13px 墨色，输入沙色底，浮木色边框，8px 圆角）：姓名、邮箱、级别芯片（First timer / Improver / Advanced，单选）、时间芯片（'Weekday dawn'、'Weekday mid-morning'、'Weekend mornings'，单选）、冲浪者步进器 1–[CLASS_SIZE]（减/加按钮和 Space Mono 计数）。按钮 'Save my request'（深潮色）。点击时：将选择保存到 localStorage 键 'bookingRequest'，并显示内联提示（沙丘色面板，300ms 淡入）：'Saved on this device only — this demo form sends nothing. Call or email us to confirm.' 不提交到任何地方。
   布局：12 列网格：联系第 1–4 列，表单第 6–12 列；移动端联系堆叠在表单上方。
   动效：芯片切换为深潮色底沙色文字（200ms）；步进器计数以小 y 弹跳跳动；保存提示淡入；减少动态保持仅颜色过渡。
8. **找到我们 — 地图条** — 标题：'Find us.' 一个全宽风格化海岸线地图，用代码绘制（BeachMap.tsx）：褪蓝海面，带两条微妙波浪弧线，沙丘色陆地形状，一条伸入水中的码头线，以及北端一个日晒色图钉，带深潮色轮廓。地图旁/下方：Archivo 16px 墨色 'Northern end of [BEACH], beside the old jetty. Park on Dock Road — the shop is the blue container with the boards out front.' 以及 boards-sand.webp 作为 3:4 照片（冲浪板立在沙中），说明 'The fleet, ready for the morning session.'
   布局：地图条 320px 高，全出血宽度（SVG 缩放，viewBox 0 0 1440 320）；文本和照片在下方 2 列行中（照片第 1–4 列，3:4，文本第 6–12 列自居中）。
   动效：当该区块进入时，图钉弹入（scale 0→1，300ms spring）；地图和照片其余部分保持静止；照片淡入上浮。
9. **页脚（Footer）** — 沙丘色带，顶部有一条浮木色细线。左侧：[BRAND] 字标和一行 Archivo 雾色文字 'See you at dawn.'。右侧：墨色锚点链接 'Lessons · Camps · Coaches · Book'；联系方式 'hello@driftline.surf · (555) 014-8890'。可选的 [CREDIT] 链接以雾色呈现。不显示日期，不设社交行。
   布局：py-12，max-w-6xl，flex 行布局，在移动端换行成列。
   动效：无。

## 资源

- 图片：将 https://media.vibefather.ai/assets/57a81e6a-056a-40ad-9286-45f1c8694f6a/hero-wave.webp 下载到 public/images/hero-wave.webp。Alt：'An empty wave peeling down a sandy point at soft morning light.' 用作全出血的 hero 锚点图（16:9）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/57a81e6a-056a-40ad-9286-45f1c8694f6a/surfer-small.webp 下载到 public/images/surfer-small.webp。Alt：'A lone surfer, tiny in the frame, paddling out over glassy water at dawn.' 用作冲浪营氛围照片（3:4 裁剪）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/57a81e6a-056a-40ad-9286-45f1c8694f6a/coach-lineup.webp 下载到 public/images/coach-lineup.webp。Alt：'A coach in a wetsuit seen from behind, standing in waist-deep water and watching the line-up.' 教练卡片 1（3:4）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/57a81e6a-056a-40ad-9286-45f1c8694f6a/coach-push.webp 下载到 public/images/coach-push.webp。Alt：'From behind, a coach steadying a beginner's board into the white water.' 教练卡片 2（3:4）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/57a81e6a-056a-40ad-9286-45f1c8694f6a/coach-walk.webp 下载到 public/images/coach-walk.webp。Alt：'A coach walking away down the beach with a surfboard under one arm, seen from behind.' 教练卡片 3（3:4）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/57a81e6a-056a-40ad-9286-45f1c8694f6a/boards-sand.webp 下载到 public/images/boards-sand.webp。Alt：'Plain soft-top surfboards standing upright in the sand.' 用于“Find us”条带（3:4）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图标：lucide-react（ISC）通过 npm 引入——链接和 CTA 中的 arrow-right，联系区块中的 map-pin、clock、phone 和 mail，以及 party-size 步进器中的 plus 和 minus，移动端页眉中的 menu 和 x。不使用其他图标：不用 emoji，不用波浪 logo，不用品牌标识。
- 字体：@fontsource/bricolage-grotesque（OFL，字重 600、700、800）、@fontsource/archivo（OFL，字重 400、500、600）和 @fontsource/space-mono（OFL，字重 400、700），在 src/main.tsx 中导入；绝不从 fonts.googleapis.com 或任何 CDN 加载。在项目根目录的 ASSETS.md 中列出全部三个字体家族和六张照片：路径、来源、生成器或作者、许可证。

## 不要做
- 不要后端、不要网络请求、不要分析统计、不要天气 API：预报条是来自 src/content.ts 的虚构示例数据，并带有可见的 SAMPLE FORECAST 标签；预约表单只保存到 localStorage，并附有内联说明——任何表单都不会提交。
- 不要任何 CDN：字体通过 Fontsource 包提供，图标来自 lucide-react，照片来自 public/images；绝不外链，绝不使用 Unsplash/Pexels/Pixabay 或占位图服务。
- 生产构建：单条命令，压缩，无 source map，输出中不含 src/，使用相对路径（Vite base './'）；每张照片压缩为 ≤ 350 KB 的 WebP，使 dist/ 保持在 20 MB 以下。
- 单页，仅锚点导航；必须在 1440×900 和 390×844 下干净渲染，控制台零报错，并遵循 prefers-reduced-motion（视差、缩放和预报循环关闭；仅保留淡入淡出）。
- 不要真实冲浪学校、冲浪品牌、冲浪板标志或可辨认的浪点：学校、教练、地点和街道均为虚构，凡是出现名称的地方都使用 [BRAND]。
- 照片不得带有可读文字或标志，任何人物在画面中都要很小、背对镜头或以其他方式无法辨认——绝不要肖像式正脸照；如果生成的图像出现面部或文字，请替换。
- 不要使用真实时钟的日期：预报是静态的周一至周五示例，课程时间是工作日模式，任何地方都不出现发布日期或年份。
- 保持日晒褪色方向不变：沙地和沙丘底色、褪色海洋蓝、深潮色和一个温暖的日晒高光、柔和墨色文字，以及覆盖整个页面（包括照片）的暖色颗粒叠加层；不要饱和青色、不要霓虹、不要深色模式、不要玻璃拟态。
- 所有文案、标签、示例数据和 alt 文本均使用美式英语，存放在 src/content.ts 中；当 [BRAND]、[BEACH]、[PRICE_LESSON] 或 [CLASS_SIZE] 变化时，重写教练姓名、地点细节和运动专属文案以适配新学校，而不是把冲浪文案留在另一项运动的品牌下。
- 在项目根目录的 ASSETS.md 中列出每个第三方文件（三个 Fontsource 字体家族、lucide 图标、六张照片）：路径、来源、许可证。

---
— Prompt by VibeFather · https://vibefather.ai/t/surf-school-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
