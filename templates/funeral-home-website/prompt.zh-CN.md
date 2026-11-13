> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 殡仪馆网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个单页网站，这是一家家族殡仪馆，由馆长 [FOUNDER] 在 [CITY] 经营，已为家庭服务 [EXPERIENCE]。页面风格温和而庄重——鼠尾草绿（sage）、石板灰（slate）、暖象牙色（warm ivory），搭配优雅的衬线字体，展示教堂、花园和花卉的摄影作品，特写中不出现棺木。网站以家庭化的语言提供安排选项、透明的示例价目表、可本地保存的五步预先规划清单、包含示例悼词的讣告列表、带蜡烛的浏览器本地留言簿、哀伤支持资源、教堂与花园一览，以及 24/7 联系区块。所有家庭、价格和悼词均为虚构的示例数据。

- 受众：两类处于截然不同时刻的访客：正在安排后事的家庭（常常是凌晨 3 点，用手机，需要电话号码和价格）以及为自己或父母提前规划的成年人（需要清单和安心感）。两者都需要温暖和零阻力。
- 目标：对于正在安排后事的家庭：电话号码和价格，几秒内就能找到，不施加任何推动决策的压力。对于规划者：清单已开始，并温和地预约一次交谈。页面从不推销；它让人安定。
- 语气：安静、温暖、不慌不忙的第二人称。短句。用“你的家庭”和“当你准备好时”，而非委婉语；不制造紧迫感，不追加销售，每个区块中“loved one”不超过一次。

## 技术栈（Stack）
- 框架（Framework）：Vite 6 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/cormorant-garamond（OFL-1.1）、@fontsource/karla（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置（Setup）：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 设为 './'，build.outDir 设为 'dist'，build.sourcemap: false。不使用路由、无后端、无服务端代码。
  - 安装 Tailwind CSS 3.4，并配置 PostCSS 和 Autoprefixer。用下方精确的调色板扩展主题，fontFamily.display 设为 'Cormorant Garamond'，fontFamily.body 设为 'Karla'。
  - 通过 @fontsource/cormorant-garamond 和 @fontsource/karla 自托管 Cormorant Garamond 的 500 和 600 字重，以及 Karla 的 400、500、700 字重，在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、useInView、useReducedMotion）仅实现缓慢淡入效果；每个动画都要以 useReducedMotion() 为条件进行控制。
  - 将所有文案和数据保存在 src/content.ts 中：品牌字符串、首屏文案、安葬方案选项、价格行、清单步骤、三条带悼词的讣告、哀伤资源、留言簿文案、探访文案。当变量值变化时，在该文件中重写依赖的文案，并从 [BRAND] 和 [PHONE] 派生存储键和 tel: 链接，确保不残留任何默认品牌的痕迹。
  - 预规划清单，恰好五个步骤，每步 2–4 个子项：'Write down your wishes'（服务类型、音乐和诵读、安息之地）；'Gather the documents'（遗嘱、契约和账户、军人证件、保险）；'Choose the service'（土葬、火化、绿色安葬、追思会——每项附一行通俗说明）；'Note the financial side'（存在预付选项但可以稍后再决定，保留一个文件夹）；'Tell one person'（谁保管文件夹、文件夹放在哪里）。每个子项是一个复选框；一条进度行 '2 of 5 steps begun' 配一条细鼠尾草色（sage）进度条；状态持久化到 localStorage 的 [BRAND_SLUG]-plan 键下；一个重置链接 'Start fresh' 带内联确认（不使用 confirm()）。
  - 讣告，恰好三条示例悼词：'Margaret Ellison, 1938–2026'——'taught thirty years of third grade, grew better roses than her neighbor (she said)'；'Samuel Reyes, 1949–2026'——'welder, coach, maker of the world's best breakfast tortillas'；'Ida Bloom, 1931–2026'——'quilter, bridge shark, grandmother of nine, great-grandmother of fourteen'。年份是虚构生平故事的一部分（固定字符串，绝不计算）。列表显示一个首字母徽章（代码绘制的鼠尾草色圆形，内含首字母）、姓名、年份、一行文字和 'Read tribute'。悼词视图（页内展开或锚点）显示完整的示例悼词（3 个短段落）、服务详情（'A service was held at the Willowmere chapel; the family suggests donations to the [CITY] library in lieu of flowers'——通用文案），以及留言簿：姓名 + 可选留言条目，本地存储在 [BRAND_SLUG]-guestbook 键下，预置两条示例条目（'The Ellisons — She taught our daughter; the tortilla claim stands'），一个 'Light a candle' 开关，会添加一个小火焰图标计数器（同样本地存储，从示例值 87 开始），以及一条说明 'This demo guestbook lives in your browser only.'
  - 价格列表，恰好三个套餐加一条备注：'Simple cremation — $1,395'（运输、必要文书、简易容器、归还骨灰）；'Traditional service — $4,850'（以上全部加上教堂仪式、守灵、灵车、基础棺木选择）；'Celebration of life — $3,200'（以追思会为主的聚会、教堂或花园、纪念品印刷）。套餐下方：'Itemized lists are always provided — you may choose any or none of the above. No one decides today. Prices are samples for this template.'
  - 仅使用以下 lucide-react 图标：Phone、Clock、Flower2、Leaf、Sun、Candle？（使用 Flame）、BookOpen、CheckCircle2、ChevronRight、ArrowRight、Menu、X、MapPin、Heart、FileText、PenLine、TreePine。
  - 将清单、留言簿条目和蜡烛状态持久化到 localStorage，以 [BRAND_SLUG] 为命名空间；验证恢复的 JSON，并从格式错误的数据中静默恢复。
  - 在构建前将六张生成的图片下载到资源（Assets）中列出的精确 public 路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者或生成器，以及许可证。
  - 一个纯 <title> 为 [BRAND] 以及一个 favicon（象牙色圆形配鼠尾草色叶子）就足够了；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 主页名称（默认：“Willowmere Funeral Home”）。虚构的殡仪馆名称；代码中由此衍生出一个叶子标志。
- [CITY] — 城市（默认：“Ashton Mill”）。殡仪馆和花园所在地；出现在主视觉、悼念区和页脚中。
- [FOUNDER] — 负责人（默认：“Eleanor Voss”）。虚构的殡葬负责人，在主视觉和预规划文案中提及。
- [PHONE] — 24/7 热线（默认：“(555) 447-1000”）。始终有人接听的热线；网站上最醒目的元素；以 tel: 链接形式呈现，仅使用数字。
- [EXPERIENCE] — 服务年限（默认：“34 years”）。如 '34 years' 这样的简洁短语；用于主视觉文案。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/funeral-home-website（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 柔和鼠尾草绿（Soft sage）`#7C9A87` — 沉静的强调色：图标、链接、清单条、字母组合徽章
- 鼠尾草浅色调（Sage tint）`#E8EFE9` — 安静的面板与标签
- 深石板灰（Deep slate）`#2E3A40` — 文本、标题、安静的色带
- 深石板灰加深（Slate deep）`#232D33` — 页脚底色
- 暖象牙白（Warm ivory）`#FAF7F0` — 页面底色
- 白色（White）`#FFFFFF` — 卡片
- 钢灰（Steel）`#5E6B6E` — 次要文本
- 细线色（Hairline）`#E6E0D6` — 细线分隔与卡片边框

### 字体排印（Typography）
- 展示字体：标题、姓名、价格：Cormorant Garamond（OFL），字重 500/600
- 正文字体：段落、清单、留言簿：Karla（OFL），字重 400/500/700

### 布局与动效（Layout & motion）
- 间距：本库中最宽松的一档：桌面端区块间距 112px / 移动端 72px；区块标题在 Cormorant Garamond 600 标题上方使用 12px 字距的鼠尾草绿眉题，标题字号为 clamp(30px, 3.6vw, 48px)；正文最大宽度 640px，行高 1.7；卡片内边距 30px，间距 26px。
- 圆角：柔和而不锐利：卡片与标签 4px，按钮 2px — 安静的边缘，不带俏皮感。
- 动效：缓慢的淡入上浮显现（10px，700ms，90ms 交错）通过 useInView 实现，仅触发一次 — 几乎难以察觉。
- 动效：清单条以 400ms 填充；蜡烛仅在蜡烛图标上以 2s 不透明度循环闪烁；其他元素均不移动。
- 动效：所有动效在 prefers-reduced-motion 下立即禁用；无视差、无滚动劫持、无自动播放媒体、无幻灯片或弹出效果。
- 图像：来自同一次拍摄的柔光摄影：一间安静的教堂内部，有鲜花和空长椅，光线透过窗户洒在长椅上，一条带长椅的纪念花园小径，白色花朵特写，一间暖光下的家庭接待室，以及一张烛光纪念桌 — 不出现特写中的棺木，不出现人物，不出现可辨认的标牌。

## 页面与区块
### [BRAND] — [CITY] (`index.html`)
1. **页眉与首屏** — 页眉（象牙白 96% 带背景模糊，68px）：叶片标志 + [BRAND]，Cormorant Garamond 600 20px 石板色；导航锚点：Arrangements、Prices、Planning ahead、Obituaries、Our place；右侧：24/7 标签 — 电话图标 + [PHONE]（tel:），石板色配鼠尾草绿描边，始终可见。390px 宽度下：标志 + 名称、电话图标按钮、菜单按钮排成一行；锚点收进象牙白下拉菜单。首屏：全出血教堂花园照片（教堂配柔和光线，桌面 76vh / 移动端 540px），下方叠加从石板色 #2E3A40 88% 到透明 55% 的渐变；内容位于左下：鼠尾草绿眉题 'FUNERAL SERVICES & MEMORIALS — [CITY]'；H1 Cormorant Garamond 600 暖白色 'We'll take care of everything, gently.'；段落 #DDE4DF 'Director [FOUNDER] and her family have served [CITY] for [EXPERIENCE] — at any hour, a person answers.'；两个低调胶囊按钮：白色胶囊 'Call now — [PHONE]'（tel:）和鼠尾草绿描边胶囊 'Plan ahead'（锚点）；下方一行 13px #DDE4DF 'Arranging now, or thinking ahead — both are welcome here.'
   布局：文案占第 1–7 栏；遮罩保证 AA 对比度；电话号码在首屏内出现两次（页眉标签和 CTA）。
   动效：照片 700ms 淡入；文案上移 10px，间隔 90ms 交错。
2. **安葬方案** — 象牙白色带。眉题 'ARRANGEMENTS'（鼠尾草绿）；标题 'In family words, not industry words.' 四张卡片（白色，细线边框）：'Burial' — 'Ground rest at the cemetery of your choosing — traditional service first, or a quiet graveside only.'；'Cremation' — 'With or without a service; ashes returned in the container you choose, on the timeline you need.'；'Green burial' — 'A simpler resting in our meadow section — no vault, a natural marker, the way it was done for centuries.'；'Celebration of life' — 'Led by a celebrant or someone who knew them best; the chapel, the garden, or anywhere that fits.' 每张卡片：一个小型代码绘制线条图标（Leaf、Sun、TreePine、Flower2）。页脚行钢灰色 14px：'Every option can be mixed, trimmed, or replaced — bring us what you have, we'll shape the rest.'
   布局：四张卡片一行（900px 以下 2×2，640px 以下单列）。
   动效：卡片间隔 90ms 交错淡入。
3. **透明价格** — 鼠尾草绿浅色带。眉题 'PRICES, IN THE OPEN'（鼠尾草绿）；标题 'You may look before you call.' 三张价格卡片（白色，细线边框，低调）：'Simple cremation — $1,395' — 'Transport, necessary paperwork, a simple container, ashes returned.'；'Traditional service — $4,850' — 'Everything in cremation's place: chapel service, visitation, hearse, a basic casket choice.'；'Celebration of life — $3,200' — 'A celebrant-led gathering, chapel or garden, keepsake printing included.' 卡片下方，一个说明面板（白色，15px 石板色）：'Itemized lists are always provided, and you may choose any or none of the above. No one decides today — and the price you see is the price we discuss. Samples for this template.'
   布局：三张卡片一行（900px 以下单列）；价格用 Cormorant Garamond 600 30px。
   动效：卡片间隔 90ms 交错淡入。
4. **提前规划** — 象牙白色带，标志性工具。眉题 'PLANNING AHEAD'（鼠尾草绿）；标题 'A quiet checklist, at your own pace.' 引言 16px 钢灰色：'For yourself or a parent — five steps, started here, finished whenever. Nothing sends anywhere; your progress stays in this browser.' 清单卡片（白色，最大宽度 760px）：五个步骤组，鼠尾草绿数字和复选框，如设置中所列；进度行 '2 of 5 steps begun' 配细鼠尾草绿进度条；'Start fresh' 链接带内联确认。旁边一个低调附注卡片：'Why plan ahead' — 'Families who plan tell us the same thing: the hardest week held one fewer decision.' 下方配花园小径照片。
   布局：清单占 7 栏，附注占 5 栏；移动端堆叠；复选框 44px 触控目标。
   动效：进度条 400ms 填充；勾选标记淡入。
5. **讣告与留言簿** — 白色带。眉题 'REMEMBRANCES'（鼠尾草绿）；标题 'Lives we've been honored to carry.' 三行悼念条目（细线分隔）：鼠尾草绿首字母圆形徽章（ME / SR / IB），姓名用 Cormorant Garamond 600 22px，年份为固定字符串（'1938–2026'、'1949–2026'、'1931–2026'），一行简介，以及 'Read tribute' 链接展开该行：三段简短生平示例段落、一行服务信息（'A service was held at the [BRAND] chapel; the family suggests gifts to the [CITY] library.'），以及留言簿 — 两条预置条目、姓名 + 可选留言输入框（两个字段和一个低调的 'Add a remembrance' 按钮）、蜡烛区块（Flame 图标，'88 candles lit' 从示例 87 开始，一个 'Light a candle' 切换按钮），以及 12px 注释 'This demo guestbook lives in your browser only.'
   布局：行最大宽度 760px；展开的悼念内容缩进并带鼠尾草绿左边线；留言簿条目为低调卡片。
   动效：行间隔 90ms 淡入；蜡烛仅在点亮时以 2s 循环闪烁。
6. **哀伤资源** — 鼠尾草绿浅色带。眉题 'AFTER THE SERVICE'（鼠尾草绿）；标题 'Help that reads like a friend wrote it.' 三张卡片：'The first weeks' — 'Sleep goes sideways; appetite too. Both ordinary. Accept the casseroles.'；'How to help a grieving friend' — 'Say the name. Bring food. Mark the calendar for the hard month, not the hard week.'；'Groups nearby' — 'The library hosts a Tuesday evening circle; the senior center a Wednesday lunch. Both welcome newcomers quietly.' 页脚行钢灰色：'Reading suggestions live at the front desk — take any, keep any.'
   布局：三张卡片一行（900px 以下单列）。
   动效：卡片间隔 90ms 交错淡入。
7. **我们的场所** — 象牙白色带。眉题 'OUR PLACE'（鼠尾草绿）；标题 'Visit before you need us, if you can.' 一个 2×2 照片网格（教堂光线、花园长椅、接待室、花卉特写），配低调 4px 边框；旁边文案：'The chapel seats 120; the garden path is open to walkers any daylight hour. Tours need no appointment — knock, and if we're with a family, we'll find you within the hour.' 地址 '4 Willowmere Lane, [CITY]'（MapPin）和 'Office weekdays 8a–5p — the line answers always.'
   布局：照片占 7 栏，2×2 网格，文案占 5 栏；移动端堆叠。
   动效：照片间隔 120ms 交错淡入。
8. **24/7 联系区块** — 石板色带，居中，无照片：'Any hour. A person, not a menu.' 用 Cormorant Garamond 600 暖白色 32px；号码 [PHONE] 作为大号白色胶囊按钮（tel:）；下方 14px #C6CFCC：'If you're arranging now, call. If you're planning ahead, the checklist above waits — and so do we, whenever you're ready.'
   布局：居中，最大宽度 640px；垂直内边距 96px。
   动效：无。
9. **页脚** — 深石板色带。第 1 栏：叶片标志 + [BRAND] Cormorant Garamond 600 白色；13px #98A5A3 行 '4 Willowmere Lane, [CITY]'、'[PHONE] — answered always（tel:）'、'Office weekdays 8a–5p'。第 2 栏 'Families'：锚点 Arrangements、Prices、Planning、Obituaries。第 3 栏 'Small print'：'Sample site for a template — families, prices and tributes invented'，可选 [CREDIT] 链接用鼠尾草绿。无版权年份。移动端粘性栏（768px 以下）：固定底部石板色 96% + 模糊；白色胶囊 'Call [PHONE]'（tel:）和鼠尾草绿描边胶囊 'Plan ahead'（锚点），安全区内边距。
   布局：页脚网格 4/4/4，移动端单列；768px 以下 body 底部内边距 80px。
   动效：无。

## 资源

- 图片：教堂主视觉图。下载 https://media.vibefather.ai/assets/45a9044d-c534-43a5-9ee2-3dbaa058233a/hero-chapel.webp 到 public/images/hero-chapel.webp。替代文本：'A calm chapel interior with soft light, flowers and empty pews.' 主视觉锚点。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：花园小径。下载 https://media.vibefather.ai/assets/45a9044d-c534-43a5-9ee2-3dbaa058233a/garden-path.webp 到 public/images/garden-path.webp。替代文本：'A memorial garden path with a bench in soft light.' 用于提前规划旁注和我们的场所网格。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：窗光。下载 https://media.vibefather.ai/assets/45a9044d-c534-43a5-9ee2-3dbaa058233a/chapel-light.webp 到 public/images/chapel-light.webp。替代文本：'Soft light falling through a chapel window onto pews.' 我们的场所网格。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：白花。下载 https://media.vibefather.ai/assets/45a9044d-c534-43a5-9ee2-3dbaa058233a/flowers-soft.webp 到 public/images/flowers-soft.webp。替代文本：'White flowers in soft close-up light.' 我们的场所网格。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：接待室。下载 https://media.vibefather.ai/assets/45a9044d-c534-43a5-9ee2-3dbaa058233a/reception-room.webp 到 public/images/reception-room.webp。替代文本：'A warm family reception room with soft chairs and tea.' 我们的场所网格。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：烛光纪念。下载 https://media.vibefather.ai/assets/45a9044d-c534-43a5-9ee2-3dbaa058233a/candle-memorial.webp 到 public/images/candle-memorial.webp。替代文本：'A quiet table of memorial candles glowing softly.' 用于吊唁簿区域。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图标：Lucide（ISC），通过 lucide-react 包引入，仅限设置中的图标列表，外加代码绘制的叶子标志和首字母徽章。无其他图标来源。
- 字体：Cormorant Garamond（OFL）和 Karla（OFL），通过 @fontsource/cormorant-garamond 和 @fontsource/karla 自托管；不通过 CDN 加载字体。

## 禁止事项（Don'ts）
- 任何地方都不要出现特写镜头中的棺材；摄影只展示礼拜堂（chapel）、花园、鲜花、接待处和烛光——不出现人物，不出现可辨认的标牌。
- 不要使用与特定传统绑定的宗教意象；礼拜堂是通用的，仪式可随家属的信仰调整。
- 不要点名任何真实的哀伤辅导组织、热线或慈善机构；资源保持通用并以本地化方式描述（图书馆互助小组、老年中心午餐）。
- 任何地方都不要追加销售或制造紧迫感：不要出现“限时”，不要把某个套餐凌驾于其他套餐之上，不要出现“立即行动”；价格说明中明确写道，没有人需要在今天做决定。
- 逐条检查每段文案的语气：短句、温暖的第二人称、每个区块最多出现一次“loved one”，不要堆砌委婉语，不要欢快的感叹号。
- 讣告中的年份是固定的虚构字符串（1938–2026 等）——绝不根据访客的时钟计算；不要版权年份，其他地方也不要出现日历日期。
- 留言簿、蜡烛和清单都是浏览器本地演示，并明确说明这一点；没有账户、没有同步、没有分析。
- 所有价格均为示例数据并如此标注；页面上任何价格都不得称为最终价格。
- 表单和输入框都是仅本地运行的示例：不向任何服务器提交，不调用任何 API。仅持久化到 localStorage，并对恢复的数据进行校验。
- 不要后端、服务器代码、数据库或认证。静态输出由单一构建命令生成到 dist/，体积小于 20 MB，使用 Vite 的相对 base。
- 字体仅通过 Fontsource 包自托管；绝不加载 Google Fonts、Adobe Fonts 或任何 CDN 样式表或脚本。
- 生产环境不要 source map，不要把 src/ 复制到 dist/。
- 不要使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件；只使用六张生成的图片和代码绘制的 SVG 图形。
- 不做 SEO 工作：不要 meta description、Open Graph 标签、JSON-LD、站点地图或堆砌关键词的标题。一个包含 [BRAND] 的普通标题和一个 favicon 就足够了。
- 动效几乎不可见：只有缓慢淡入、条形填充和烛光闪烁；任何元素都不弹跳、滑动或弹出；一切都要尊重 prefers-reduced-motion。
- 24/7 电话号码必须能从每个屏幕一键拨通——页头小标签、首屏 CTA、联系区块和移动端吸底栏都使用同一个 tel: 链接。
- 在 390px 宽度下移动端页头保持单行，吸底栏绝不能遮挡内容。
- 从 [BRAND] 和 [PHONE] 派生品牌相关字符串（存储键、tel: 链接），这样替换变量值后绝不会残留默认品牌的痕迹。
- 每个内部链接都是文件名或页内锚点，绝不是裸目录；网站保持为单个 index.html。

---
— Prompt by VibeFather · https://vibefather.ai/t/funeral-home-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
