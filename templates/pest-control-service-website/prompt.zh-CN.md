> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 害虫防治服务网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个单页网站，这是一家由昆虫学家 [FOUNDER] 在 [CITY] 创立的害虫防治公司，拥有 [EXPERIENCE] 的行业经验。页面风格平静而令人安心——绿色与墨色搭配琥珀色警示，害虫图标以代码绘制，不使用令人不适的实拍照片——并以一个识别测验作为页面开头（你看到了什么、在哪里、什么时候 → 可能的害虫、置信度说明、推荐方案）。方案对比诚实透明，安全部分专门回答宠物与儿童的问题，季节性日历展示每月活跃的害虫，具体的保证条款为其背书，免费检查预约作为页面收尾，且测验结果可附带提交。所有价格、害虫样本和评价均为虚构。

- 受众：主要：[CITY] 周边刚看到什么东西、想知道它是什么以及是否危险的房主——常常是在夜间，家中往往有孩子或宠物。次要：正在改编该测验和方案的草坪护理与野生动物服务商。
- 目标：推动访客从“这到底是什么”走向预约免费检查：通过三次点击诚实地识别害虫，在安全疑虑被提出之前就予以回答，然后让测验结果一路带入预约表单。
- 语气：平静、专业、略带温暖幽默——一位喜欢虫子但讨厌虫害的昆虫学家邻居。先解释事物是什么，再推销该怎么做。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react (MIT)、react-dom (MIT)、vite (MIT)、typescript (Apache-2.0)、tailwindcss (MIT)、motion (MIT)、lucide-react (ISC)、@fontsource/nunito-sans (OFL-1.1)
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 设为 './'，build.outDir 设为 'dist'，build.sourcemap: false。不使用路由、无后端、无服务端代码。
  - 安装 Tailwind CSS 3.4，搭配 PostCSS 和 Autoprefixer。用下方精确的调色板扩展主题，fontFamily.display 和 fontFamily.body 均设为 'Nunito Sans'。
  - 通过 @fontsource/nunito-sans 自托管 Nunito Sans 字重 400、600、700、800，在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、AnimatePresence、useInView、useReducedMotion）实现测验步骤和揭示动画；每个动画都要以 useReducedMotion() 为条件。
  - 将所有文案和数据放在 src/content.ts 中：品牌字符串、hero 文案、服务、测验问题和完整的结果表、套餐及包含项、安全卡片、日历月份、保证、评价、表单选项。当变量值变化时，在那里重写依赖的文案，并从 [BRAND] 和 [PHONE] 派生存储键和 tel: 链接，确保不残留默认品牌痕迹。
  - 在代码中以内联扁平 SVG 图标绘制七个害虫标记——蚂蚁、臭虫、白蚁（有翅）、老鼠、跳蚤、黄蜂、蜘蛛——每个都是友好的两色或三色剪影，置于绿色调圆圈中，40px，可识别但绝不恶心；页面上任何地方都不得出现照片级害虫图像。
  - 测验逻辑，精确如下：三个问题，每个答案携带指向七个结果的权重映射——Q1 'What did you see?'（六张卡片配绘制图标：'A marching line of ants' / 'Tiny dark specks on sheets or mattress seams' / 'Winged swarmers by the window' / 'Droppings or scratching at night' / 'Jumping specks on the pet' / 'Paper nests under the eaves'）；Q2 'Where?'（Kitchen or bath / Bedroom / Basement or crawl / Yard and foundation）；Q3 'When?'（Daytime / After dark / Dawn and dusk / After rain）。content.ts 中的结果表按害虫汇总权重；最高分者胜出，附带其置信度行（领先第二名 3+ 权重时为 'very likely'，否则为 'most likely'）、两句平实语言描述，以及推荐的套餐层级（One-time / Quarterly / Home Shield）。将最后结果存储到 localStorage 的 [BRAND_SLUG]-quiz 下；在预订表单上以琥珀色标签显示（'Identifier: Ant colony — most likely'），带一个 X 可移除。
  - 套餐及包含项，精确如下：One-time treatment $189——单次上门、针对性处理、45 天复处理窗口；Quarterly Guard $39/mo（按年计费 $468）——四次预约上门、上门之间无限免费复处理、外部蛛网和巢穴清扫；Home Shield $59/mo——包含 Quarterly 的所有内容，外加四角白蚁监测器和年度排除检查（门底扫条、 weep holes、管道穿孔）。
  - 季节日历为 12 格网格（月份名称、活跃害虫及其绘制图标、一条预防提示），高峰月份带琥珀色顶部线条（5–8 月黄蜂，3–6 月蚂蚁，9–11 月寻找温暖的啮齿动物）；无年份、无与时钟绑定的日期。
  - 仅使用这些 lucide-react 图标：Phone、ShieldCheck、Baby、Dog、Clock、CalendarCheck、CheckCircle2、Star、MapPin、ChevronRight、ArrowRight、Menu、X、Search、Home、Droplets、ClipboardCheck、Sparkles。
  - 将测验结果和检查请求持久化到 localStorage，以 [BRAND_SLUG] 为命名空间；验证恢复的 JSON，并从格式错误的数据中静默恢复。
  - 构建前将五张生成的图片下载到 Assets 中列出的精确公共路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者或生成器，以及许可证。
  - 一个纯 <title> 为 [BRAND] 和一个 favicon（带白色盾牌和虫子标记的绿色圆圈）就足够了；不要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 公司名称（默认："Kindguard Pest Solutions"）。虚构的公司名称；代码中会据此生成一个盾牌与虫子组合的标志图形。
- [CITY] — 城市（默认："Briarfield"）。服务基地；出现在首屏、日历文案和页脚中。
- [FOUNDER] — 创始人（默认："Nadia Okonkwo"）。虚构的昆虫学家创始人，在首屏和安全相关文案中提及。
- [PHONE] — 电话（默认："(555) 471-3320"）。办公电话；以 tel: 链接形式呈现，仅使用数字。
- [EXPERIENCE] — 经验（默认："12 years"）。类似 '12 years' 的简单短语；用于首屏和保障文案。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/pest-control-service-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 清新绿 `#1BA35A` — 品牌色：页眉点缀、CTA、图标、链接
- 深绿 `#0F7A42` — 深色区块底色、图标圆形
- 深墨 `#11242B` — Hero 区底色、标题、页脚底色
- 更深墨 `#0C1B21` — 页脚最深面板
- 琥珀 `#FFB020` — 警告、旺季规则、测验结果标签
- 琥珀浅色 `#FFF3D9` — 警告面板和结果标签
- 绿色浅色 `#E7F6EE` — 信息面板和图标圆形
- 云白 `#F6F8F9` — 浅色区块底色
- 白色 `#FFFFFF` — 卡片和面板
- 钢灰 `#56656D` — 次要文本；深色背景上为 #A3B4BC
- 细线 `#E0E5E8` — 细线分隔和卡片边框

### 字体排印
- 展示和正文：全部：Nunito Sans（OFL），字重 400/600/700/800

### 布局与动效
- 间距：桌面端区块间距 92px / 移动端 64px；区块标题使用 13px 字距的绿色眉题，下方为 800 字重标题，字号 clamp(28px, 3.2vw, 44px)；卡片内边距 26px，间距 22px。
- 圆角：友好而平静：卡片 14px，标签和输入框 10px，胶囊形 CTA；照片 14px。
- 动效：通过 useInView 实现淡入上升显现（14px，500ms，60ms 交错），仅一次。
- 动效：测验步骤通过 AnimatePresence 水平滑动 240ms；答案卡片选中时弹至 1.04×；判定卡片以 250ms 高度缓动展开。
- 动效：日历单元格交错 40ms；统计数据计数上升 800ms。
- 动效：所有动效在 prefers-reduced-motion 下立即禁用；无视差、无滚动劫持、无自动播放媒体。
- 图像：来自同一次拍摄的干净晨光家居摄影：整洁的郊区住宅外观配绿色草坪、明亮的厨房一角、整洁的卧室、摆放整齐的技术人员工具包（手套、喷雾器、诱饵站——无标识），以及铺有新覆盖物的地基周边。无人物、无害虫、无恶心图像、无可读文字。

## 页面与区块
### [BRAND] — [CITY] 的害虫防治（`index.html`）
1. **页眉与首屏** — 页眉（白色 94% 不透明度，带背景模糊，72px）：盾牌与虫子组合标志（绿色圆形，白色盾牌内含一个小虫图形）+ [BRAND]，Nunito Sans 800 18px 墨色；导航锚点：识别器、方案、安全、年度；右侧：电话胶囊 Phone 图标 + [PHONE]（tel:）和绿色胶囊按钮 'Free inspection'。在 390px 宽度下：标志 + 名称、电话图标按钮、菜单按钮排成一行；锚点收进白色下拉菜单。首屏：全出血整洁家居照片（晨光、绿色草坪，桌面端 80vh / 移动端 560px），下方覆盖从左下角开始的渐变遮罩，墨色 #11242B 94% 在 55% 处渐隐至透明；内容位于左下角：绿色眉题 'PEST CONTROL — [CITY] & 25 MILES AROUND'；H1 800 白色 'Know what it is. Then decide.'；段落 '#C9D6DB' 'Entomologist [FOUNDER] runs [BRAND] — [EXPERIENCE] of identifying first and treating second. Most of what people find at midnight isn't an emergency; the quiz below tells you which kind yours is.'；绿色胶囊按钮 'Take the 60-second quiz'（锚点）和白色描边胶囊按钮 'See plans & prices'（锚点）；半透明墨色底上的白色 12px 标签：'Licensed · #PC-71288' · 'Pet- & kid-conscious products' · 'Re-treat free between visits'。
   布局：文案占第 1–7 列；标签在 390px 下最多换行两行；遮罩保证 AA 对比度。
   动效：照片从 1.04 缩放至 1，历时 800ms；文案上移 14px，错开 70ms。
2. **害虫识别器测验** — 白色区块，标志性区块。眉题 'IDENTIFIER QUIZ'（绿色）；标题 'Three questions. No guessing.' 测验卡片（白色，14px 圆角，最大宽度 860px）：步骤圆点 1–2–3 及标签（What · Where · When）。第 1 步 — 六张答案卡片排成 3×2 网格，每张带绘制的害虫图标和标签（'A marching line of ants'、'Tiny dark specks on sheets or mattress seams'、'Winged swarmers by the window'、'Droppings or scratching at night'、'Jumping specks on the pet'、'Paper nests under the eaves'）。第 2 步 — 四个区域标签，带 Home 风格图标（Kitchen or bath / Bedroom / Basement or crawl / Yard and foundation）。第 3 步 — 四个时间标签（Daytime / After dark / Dawn and dusk / After rain）。返回和继续按钮；答案可按任意顺序选择。第 3 步后显示判定卡片（绿色调背景）：害虫绘制图标放大，名称 800 字重（'Ant colony'），琥珀色置信度标签（'most likely' / 'very likely'），两句平实描述（'Odorous house ants trail along moisture lines. They're a nuisance pest, not a health emergency — and treatable in one visit.'），'Recommended: One-time treatment · $189 sample' 配绿色胶囊按钮 'Book the free inspection'，点击滚动至表单并附带结果，以及钢色链接 'Not it? Retake the quiz'。结果会保留，并在预约表单上以琥珀色标签显示，带 X 可移除。
   布局：步骤水平滑动 240ms；答案卡片 3×2 网格（700px 以下 2 列，480px 以下 1 列）；判定卡片展开 250ms。
   动效：选中卡片弹至 1.04× 并带绿色描边；步骤滑动 240ms；判定卡片上移 12px。
3. **服务** — 云色区块。眉题 'WHAT WE TREAT'（绿色）；标题 'The usual suspects, handled calmly.' 五张卡片带绘制图标：'Ants & roaches' — 'Gel baits in wall voids plus a perimeter band — kitchens stay usable the same day.'；'Wasps & hornets' — 'Nest removal at dawn when the colony is home, then a preventive eave treatment.'；'Rodents' — 'Exclusion first (we find the gap), snap or station second, never bait in the house with kids or pets.'；'Termites' — 'Monitors at four corners and treatment only when evidence says so.'；'Fleas & ticks' — 'Two-step pet-home program timed to the life cycle, coordinated with your vet's treatment.' 每张卡片页脚：绿色链接 'Ask about this →' 锚定至表单。
   布局：五张卡片：3+2 换行排列（900px 以下 2 列，640px 以下 1 列）。
   动效：卡片上移 14px，错开 70ms。
4. **方案对比** — 白色区块。眉题 'PLANS'（绿色）；标题 'Three ways in, no contracts.' 三张方案卡片（云色底，细线边框；中间卡片绿色配白色文字和琥珀色 'MOST CHOSEN' 标签）：'One-time treatment' — '$189' — 'Targeted visit for one identified pest. 45-day re-treat window included.'；'Quarterly Guard' — '$39 / mo' — 'Four scheduled visits, unlimited free re-treats between them, exterior web-and-nest sweep every trip.'；'Home Shield' — '$59 / mo' — 'Quarterly everything plus termite monitors at four corners and an annual exclusion inspection.' 卡片下方为包含项矩阵（行：每年访问次数 1 / 4 / 4，免费重处理 45 天窗口 / 无限 / 无限，外部清扫 — / 勾 / 勾，白蚁监测 — / — / 勾，排除检查 — / — / 勾；勾选为绿色 CheckCircle2）。13px 钢色注释：'Sample prices for this demo. Annual billing shown monthly; cancel any time — plans are agreements, not contracts.'
   布局：三张卡片一行（900px 以下 1 列）；矩阵在 700px 以下水平滚动。
   动效：中间卡片上浮 12px；勾选在进入时错开 50ms 弹出。
5. **宠物与儿童安全** — 深绿色区块。眉题 'SAFETY FIRST, ACTUALLY'（琥珀色）；标题 'What we use, and when it's dry.' 四张卡片位于半透明白色面板上：'Dry in 30–45 minutes' — Clock 图标 — 'Sprays go to cracks and voids, not surfaces people touch. Once dry, treated areas are back in service.'；'Tamper-resistant stations' — ShieldCheck 图标 — 'Any bait lives inside locked stations anchored out of reach — pets and toddlers can't get into them, pests can.'；'Product classes, in plain words' — ClipboardCheck 图标 — 'We use pyrethroid-family sprays and borate or ant-coagulant baits — the class matters more than the brand, and we'll name what we used.'；'Prep that actually matters' — Baby 图标 — 'Fish tanks covered and pumps off, pet food up, crib mattresses washed — a two-line checklist texted before every visit.' 网格下方一行 #CFE8DA 文字：'Every visit ends with the product label sheet on your counter. Keep it. [FOUNDER] answers questions about it on the phone, too.'
   布局：四张卡片 2×2（800px 以下 1 列）；图标位于琥珀色调圆形中。
   动效：卡片上移 14px，错开 80ms。
6. **季节日历** — 白色区块。眉题 'THE PEST YEAR'（绿色）；标题 'What's active, month by month.' 十二个单元格（桌面端 4×3，移动端水平滚动吸附），每个包含 700 字重月份名、小型绘制害虫图标和一条预防提示；高峰月份带琥珀色顶部线条：一月 'Rodents — check the garage door seal'；二月 'Rodents — inspect weep holes'；三月 'Ants — trim branches off the siding'；四月 'Ants — fix the dripping spigot'；五月 'Wasps — knock down golf-ball nests early'（琥珀色）；六月 'Wasps, mosquitoes — dump standing water'（琥珀色）；七月 'Wasps, mosquitoes — eave check at dusk'（琥珀色）；八月 'Wasps — keep trash lids tight'（琥珀色）；九月 'Rodents return — door sweeps on order'（琥珀色）；十月 'Rodents — seal the dryer vent gap'；十一月 'Spiders — sweep webs before eggs hatch'；十二月 'Rodents — a quiet attic is a warm attic'。页脚 13px 钢色文字：'Temperate-zone defaults for [CITY] — your inspection gets a version tuned to your property.'
   布局：单元格为云色底上的白色，14px 圆角；移动端 240px 单元格带滚动吸附。
   动效：单元格错开 40ms；琥珀色线条在进入后 300ms 绘制。
7. **保证与数据** — 墨色区块。眉题 'THE GUARANTEE'（绿色）；标题 'Activity between visits? We come back free.' 文案 '#C9D6DB' 16px：'If you see live activity between scheduled visits on any plan, we re-treat within 48 hours at no charge — no deducting visits, no fine print about 'new' activity. It's the whole point of a plan.' 四项绿色 800 字重计数数据：'1,900' 'homes under care' · '48 hr' 're-treat promise' · '92%' 'one-visit ant clearances' · '4.9' 'from 241 reviews'。
   布局：数据 2×2 网格（桌面端 4 列并排）；上方居中文案。
   动效：数字在进入时计数 800ms。
8. **评价** — 云色区块。眉题 'NEIGHBORS'；标题 'Calm is the review theme.' 三张卡片（白色，绿色引号）：五颗绿色星星；16px 墨色引文；13px 钢色页脚。'The quiz said ants, the inspection said ants, one visit later — no ants. The label sheet on the counter was a nice touch.' — Dana P.，厨房蚁道。'They found the gap behind the dryer vent before setting a single trap. Three weeks, zero activity, no bait anywhere my toddler reaches.' — The Okafors，啮齿动物。'I called in a panic about bed bugs at 11 p.m. The owner texted back: probably carpet beetles, here's a photo comparison, sleep fine. It was carpet beetles.' — Marisol V.，不是臭虫。12px 钢色免责声明：'Sample reviews for this template demo.'
   布局：三张卡片一行（900px 以下 1 列）；中间卡片上浮 12px。
   动效：卡片上移 14px，错开 80ms。
9. **免费检查预约** — 白色区块。眉题 'FREE INSPECTION'（绿色）；标题 'We look first. You decide after.' 表单置于云面板中（max-width 720px）：如果存在测验结果，顶部显示琥珀色标签 'Identifier: Ant colony — most likely ×'（X 可移除）；姓名（必填）、电话（必填）、街道地址（必填）；害虫关注下拉选择（Ants & roaches / Wasps & hornets / Rodents / Termites / Fleas & ticks / Something else — 测验结果会预选）；'What did you see?' 文本域可选；首选时间段标签（Morning / Afternoon / Either）。绿色胶囊按钮提交 'Book my inspection'。内联验证（2px 绿色边框，13px 注释），无原生弹窗。成功后替换表单：CheckCircle2 绿色，'Got it, [name].' 800 字重，'The office calls within one business day — the inspection takes 30 minutes and ends with a written quote you can think about. This demo stores your request in this browser only.' 以及一个描边胶囊按钮 'Book another'。持久化到 localStorage。
   布局：桌面端两列字段行，移动端单列，底部内边距 96px 以避开粘性栏。
   动效：成功状态交叉淡入并上浮 12px；对勾弹出 1.15×。
10. **页脚** — 更深墨色区块。第 1 列：盾牌与虫子标志 + [BRAND] 800 白色；13px #A3B4BC 行 '77 Juniper Lane, Suite 2, [CITY]'、'Licensed applicator #PC-71288 · insured'、'Mon–Fri 8a–6p · Sat 9a–1p'。第 2 列 'Company'：锚点 Identifier、Plans、Safety、The year。第 3 列 'Talk to us'：[PHONE] 绿色（tel:）、绿色胶囊按钮 'Free inspection'，以及 12px 钢色文字 'Text photos of the bug — really.'。底部细线行：'Sample site for a template — prices, pests-as-listed and reviews invented' 加上可选的 [CREDIT] 链接（绿色）。移动端粘性栏（768px 以下）：固定底部墨色 96% + 模糊；绿色胶囊按钮 'Call'（tel:）和白色描边胶囊按钮 'Free inspection'（锚点），安全区内边距。
   布局：页脚网格 4/4/4 到移动端单列；768px 以下 body 底部内边距 80px。
   动效：无。

## 资源

- 图片：整洁的房屋外观。下载 https://media.vibefather.ai/assets/a61f5c2d-0352-4e0b-9f66-a9072dbe9ba9/hero-home.webp 到 public/images/hero-home.webp。Alt：'A tidy suburban home with a green lawn in morning light.' 主视觉锚点。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：厨房一角。下载 https://media.vibefather.ai/assets/a61f5c2d-0352-4e0b-9f66-a9072dbe9ba9/kitchen-clean.webp 到 public/images/kitchen-clean.webp。Alt：'A bright, tidy kitchen corner with sealed counters.' 用于服务或方案区块旁。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：卧室。下载 https://media.vibefather.ai/assets/a61f5c2d-0352-4e0b-9f66-a9072dbe9ba9/bedroom-tidy.webp 到 public/images/bedroom-tidy.webp。Alt：'A calm, tidy bedroom with fresh white bedding.' 用于测验或安全区块附近的辅助图片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：技术员工具包。下载 https://media.vibefather.ai/assets/a61f5c2d-0352-4e0b-9f66-a9072dbe9ba9/tech-kit.webp 到 public/images/tech-kit.webp。Alt：'A neatly organized pest-control kit: gloves, sprayer and locked bait stations.' 用于安全区块。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：地基周边。下载 https://media.vibefather.ai/assets/a61f5c2d-0352-4e0b-9f66-a9072dbe9ba9/foundation.webp 到 public/images/foundation.webp。Alt：'A home foundation edge with fresh mulch and trimmed plants.' 用于季节性日历附近。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图标：Lucide（ISC）通过 lucide-react 包用于 UI 图标，另加七个用代码绘制的原创扁平 SVG 害虫标记（ant、bed bug、termite、mouse、flea、wasp、spider）。无照片或第三方害虫艺术图。
- 字体：Nunito Sans（OFL）通过 @fontsource/nunito-sans 自托管；无 CDN 字体加载。

## 不要做
- 任何地方都不要出现粗俗或血腥的图像：不要有害虫侵扰特写、死害虫、粪便照片或叮咬——害虫只以友好的代码绘制扁平图标形式出现。
- 不要绝对安全声明：绝不要出现“无毒”、“100% 安全”或“无化学物质”——安全文案保持具体（干燥时间、诱饵站、产品类别），并且绝不提供医疗或兽医建议。
- 不要真实害虫防治品牌、特许经营商、产品名称或农药商标；处理方式按类型和类别描述，演示公司、许可证号 #PC-71288 和评论均为虚构。
- 不要真实认证或协会印章；资质仅以纯文本呈现。
- 测验绝不声称 AI 或确定性：结果表述为“最可能”/“很可能”，表格在 content.ts 中可见，结论始终提供免费检查，而不是自我诊断结论。
- 所有价格均为标注为示例数据的样本数据；方案是“协议，不是合同”，页面须如此说明。
- 不要与真实时钟绑定的日期：日历仅显示月份名称，不显示版权年份，不包含今日日期逻辑。
- 表单仅为本地样本：不向任何服务器提交，无 API，无分析。仅持久化到 localStorage 并验证恢复的数据。
- 无后端、服务器代码、数据库或认证。静态输出在 dist/ 中，来自单一构建命令，小于 20 MB，Vite 的 base 为相对路径。
- 仅通过 Fontsource 包自托管字体；绝不加载 Google Fonts、Adobe Fonts 或任何 CDN 样式表或脚本。
- 生产环境无 source map，且不将 src/ 复制到 dist/。
- 不要 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件；仅使用五张生成的图片和代码绘制的 SVG 艺术。
- 不做 SEO 工作：无 meta 描述、Open Graph 标签、JSON-LD、站点地图或关键词堆砌的标题。一个包含 [BRAND] 的普通标题和一个 favicon 就足够了。
- 测验步骤必须可逆，绝不困住访客；结论始终提供“重做测验”。
- 无滚动劫持、页面视差、自定义光标或自动播放媒体；动效仅限于指定的显现、步骤滑动、弹出和计数动画，全部尊重 prefers-reduced-motion。
- 在 390px 宽度下保持移动端页眉单行显示，且绝不让粘性底栏覆盖预订表单的提交按钮。
- 从 [BRAND] 和 [PHONE] 构建品牌派生字符串（存储键、tel: 链接），以便备用变量值绝不会留下默认品牌残留。
- 每个内部链接都是文件名或页内锚点，绝不是裸目录；网站保持为单个 index.html。

---
— Prompt by VibeFather · https://vibefather.ai/t/pest-control-service-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
