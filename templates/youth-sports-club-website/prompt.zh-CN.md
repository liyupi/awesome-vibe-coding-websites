> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 青少年体育俱乐部网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个精致的四页网站，[BRAND] 是一家虚构的青年足球俱乐部，位于 [LOCATION]，面向 6–13 岁的球员。俱乐部强调 [PROGRAM_FOCUS]。网站需包含年龄组队伍、赛程与赛果、可排序的联赛积分榜、三位教练简介、透明的注册费用、带验证的客户端注册表单，以及一个专门的家长信息页面。使用下方完全一致的默认文案和示例数据，当变量值变化时重写每一个俱乐部专属细节。

- 受众：正在从执教、日程、费用、安全和契合度方面比较青年俱乐部的父母和照护者，以及想查看球队和比赛动态的球员。它也适合志愿俱乐部管理员，用来为自己的社区改编一个完整静态前端。
- 目标：帮助家庭找到合适的年龄组，了解比赛节奏和总费用，信任俱乐部背后的人员和政策，并在没有任何后端的情况下完成一个明确标注为示例性质的注册请求。
- 语气：充满活力、热情友好、有条理且具体。听起来像一家有能力的社区俱乐部，而不是职业连锁机构。使用简短直接的句子、具体的时间和费用，不夸大宣传，不承诺发展成果，不使用施压手段。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react (MIT)、react-dom (MIT)、vite (MIT)、@vitejs/plugin-react (MIT)、typescript (Apache-2.0)、tailwindcss (MIT)、postcss (MIT)、autoprefixer (MIT)、motion (motion.dev，从 'motion/react' 导入) (MIT)、lucide-react (ISC)、@fontsource/barlow-condensed (OFL-1.1)、@fontsource-variable/manrope (OFL-1.1)
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 搭建一个 Vite React TypeScript 应用。将 index.html、fixtures.html、register.html 和 parents.html 保留在项目根目录，每个文件都包含一个 div id='root'，其 data-page 值分别为 home、fixtures、register 或 parents，并使用相同的 src/main.tsx 入口。
  - 在 vite.config.ts 中设置 base './'、plugins [react()]、build.outDir 'dist'、build.sourcemap false、build.assetsInlineLimit 0，并将 rollupOptions.input 设置为所有四个根 HTML 文件，使用 resolve(__dirname, '<file>')。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 配置 Tailwind 3.4，content 为 ['./index.html', './fixtures.html', './register.html', './parents.html', './src/**/*.{ts,tsx}']。添加 Design 颜色和 fontFamily display ['Barlow Condensed', 'Arial Narrow', 'sans-serif'] 以及 sans ['Manrope Variable', 'system-ui', 'sans-serif']。
  - 在 src/fonts.ts 中导入 '@fontsource/barlow-condensed/600.css'、'@fontsource/barlow-condensed/700.css' 和 '@fontsource-variable/manrope'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - src/main.tsx 读取根元素的 data-page 值并渲染匹配的页面，不使用路由器。每个导航链接指向 ./index.html、./fixtures.html、./register.html 或 ./parents.html，仅在指定处使用 section 哈希。
  - 将所有可见字符串、费用、时间、电话号码、地址、教练、队伍、赛程、结果、积分榜、家长政策、FAQ 和图片路径保存在 src/content.ts 的类型化记录中。派生品牌相关值，并在变量变化时重写所有相关内容。
  - 添加 src/lib/brand.ts 用于 brandSlug 和保留的 .example 电子邮件地址，src/lib/fees.ts 用于解析 [SEASON_FEE] 并计算总计，以及 src/lib/standings.ts 用于稳定的多键排序和净胜球计算。
  - 使用 Motion for React 实现区块显示、移动导航、筛选变化、积分榜行重新排序、手风琴和表单确认。仅使用 Lucide 图标。将交互状态保持在每个页面本地；不要持久化注册个人数据。
  - 在首次构建之前，将提供的六张图片下载到 public/images/ 中，使用 Assets 下的确切路径。生产构建本身从不获取任何内容。
  - 从 Assets 下的原始角旗图案创建 public/favicon.svg。为每个 HTML 文件提供一个简单的变量感知标题和本地 favicon 链接；不要添加 SEO 元数据或结构化数据。
  - 在项目根目录编写 ASSETS.md，包含 Assets 下指定的每张提供的图片、字体包和图标包。保持 dist/ 在 20 MB 以下，无源映射。

## 变量
- [BRAND] — 俱乐部名称（默认："Riverglade Youth Soccer"）。一个虚构的青年俱乐部名称，用于字标、页面标题、赛程数据、积分榜、电子邮件和页脚。切勿使用真实的俱乐部或联赛。
- [LOCATION] — 俱乐部所在地（默认："Fort Collins, Colorado"）。用于主视觉区、场地详情、联系文案和页脚的城市及州或地区。街道和场馆保持虚构。
- [PROGRAM_FOCUS] — 项目重点（默认："confidence, teamwork, and a love of the game"）。一个简洁的小写短语，用于塑造主视觉区、队伍描述、教练文案和报名介绍。
- [SEASON_FEE] — 每名球员的赛季费用（默认："$180"）。一名球员的基础美元费用。解析该金额，并基于这一单一数值计算多名球员、装备包、折扣和分期付款的总额。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/youth-sports-club-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- Chalk `#F6F3EA` — 主页面背景和安静的信息区块
- Paper `#FFFEF8` — 卡片、表单、表格表面，以及 Forest 上的文字
- Forest `#173F35` — 主按钮、深色条带、页脚、标题和选中控件
- Field `#2E6B4F` — 链接、次级徽章、场地线细节和悬停状态
- Volt `#D8F45D` — CTA 的主强调色、活动排序指示器、比分高亮和焦点细节
- Ink `#17221C` — 正文文字和浅色表面上的表格数字
- Slate `#647067` — 次级文字、说明文字、元数据和禁用状态
- Line `#D8DDD2` — 细线边框、表格线、输入框和卡片轮廓
- Clay `#C95D43` — 小型失利或取消状态强调色；绝不作为唯一的状态信号

### 字体排印
- 展示标题、比分数字、队伍名称和字标：Barlow Condensed（OFL），字重 600/700
- 正文、导航、表格、表单、说明文字和家长信息：Manrope（OFL），字重 400/500/600/700/800

### 布局与动效
- 间距：使用 8px 基础网格和 1240px 最大内容宽度，桌面端 40px 边距、平板端 28px 边距、移动端 18px 边距。主要区块桌面端使用 96px 垂直内边距，移动端 64px。桌面端使用 12 列网格，间距 24px。H1 为 clamp(58px, 7vw, 96px) Barlow Condensed 700，行高 0.94；页面 H1 为 clamp(50px, 6vw, 78px)；H2 为 clamp(38px, 4vw, 56px)，行高 0.98；H3 为 26px。正文为 16px/1.7，最大 65ch；小号元数据为 12px/1.4 Manrope 800 大写，字距 0.12em。表格使用 14px 和等宽数字。按钮和输入框高度至少 48px。焦点在浅色表面上使用 2px Volt 轮廓加 2px Forest 外环。
- 圆角：照片框架和主要卡片使用 18px 圆角，表格和表单使用 12px，输入框使用 8px，标签和按钮使用全圆角。卡片使用 1px Line 边框而非重阴影；只有注册摘要使用克制的 0 16px 44px Forest 阴影，不透明度 8%。
- 动效：在首页主视觉区，以 y 24 到 0、不透明度 0 到 1、持续 600ms 的方式显示眉题、标题行、正文和 CTA，错开 75ms；hero-match.webp 在 900ms 内从 scale 1.035 稳定到 1。
- 动效：区块标题和卡片组以 y 18 和不透明度变化、持续 480ms、同级错开 60ms 的方式显示一次。内容在没有 IntersectionObserver 时仍然可见，绝不在等待动画时隐藏。
- 动效：筛选赛事卡片使用 180ms 的不透明度和 y 8 过渡；积分榜行顺序使用 240ms 布局过渡动画，并旋转活动排序箭头，但不对数字做动画。
- 动效：移动端导航以不透明度和高度变化、持续 220ms 打开。手风琴使用高度和不透明度变化、持续 200ms。选中的队伍、球衣和支付控件仅使用颜色和边框过渡。
- 动效：注册成功在 220ms 内就地替换表单，并将焦点移到其标题。不要抖动无效字段，也不要用计数效果动画费用总计。
- 动效：通过 Motion 的 reduced-motion hook 和 CSS 覆盖来尊重 prefers-reduced-motion：移除变换、平滑滚动、错开和非必要过渡，同时保留所有最终状态和交互。
- 图像：将提供的六张纪实编辑风格体育照片作为一个连贯的拍摄来使用：天然草地、纯森林绿和粉笔色无品牌球衣、温暖的午后阳光、真实的质感和微妙的 35mm 颗粒。青少年球员仅从背后、远处或无法辨认的侧脸出现；不出现可辨认的儿童。三位成年教练是虚构人物，不与任何真实个人相似。任何图像都不包含可读文字、队伍号码、标志、赞助商、品牌产品或可辨认的场地。使用 object-fit cover 和指定的焦点位置及描述性 alt 文本；绝不在人脸之上放置文字。场地线、角旗 favicon、比分线、图标和小型示意图均以代码绘制。

## 页面与区块
### 俱乐部主页、年龄组、比赛预览和教练（`index.html`）
1. **内容模型和默认示例数据** — 以下所有文案均针对 [BRAND] = Riverglade Youth Soccer、[LOCATION] = Fort Collins, Colorado、[PROGRAM_FOCUS] = confidence, teamwork, and a love of the game、[SEASON_FEE] = $180 编写。将所有值放入 src/content.ts，并在变量变化时重写俱乐部专属文案。默认运营细节：虚构地址 18 Willowbank Lane, [LOCATION]；主场 Willowbank Community Fields；电话 (970) 555-0148；邮箱 hello@ + brandSlug（不含连字符）+ .example；办公时间周二和周四 16:30–19:30；球员年龄 6–13 岁。队伍：U8，6–7 岁，First touches，Elliot Brooks，周二 17:30–18:30，Field 2，12 人示例队伍，短场比赛和大量触球；U10，8–9 岁，Pass and move，Elliot Brooks，周二和周四 17:30–18:45，Field 2，14 人示例队伍，简单配合和自信接球；U12，10–11 岁，Read the game，Nina Alvarez，周二和周四 18:00–19:15，Field 1，16 人示例队伍，站位、攻防转换和定位球基础；U14，12–13 岁，Play with purpose，Maya Chen，周二和周四 18:30–19:45，Field 1，16 人示例队伍，战术选择和共同领导。即将到来的赛程：Matchday 08，U10，主场 vs Cedar Union，周六 09:30，Willowbank Field 2；Matchday 08，U12，客场 vs East Vale Athletic，周六 11:00，East Vale Community Park；Matchday 08，U14，主场 vs North Quarry，周六 13:30，Willowbank Field 1；Matchday 08，U8，主场 vs Sunnybank Rovers，周日 10:00，Willowbank Field 2。近期赛果：Matchday 07，U8，[BRAND] 3–2 Briar Patch；U10，[BRAND] 1–1 Elm City；U12，[BRAND] 4–0 West Orchard；U14，Silver Creek 3–2 [BRAND]。U12 示例积分榜行，均为七场已赛：[BRAND] W5 D1 L1 GF18 GA8 Pts16；Cedar Union W5 D0 L2 GF16 GA9 Pts15；East Vale Athletic W4 D2 L1 GF15 GA8 Pts14；North Quarry W3 D2 L3 GF12 GA12 Pts11；West Orchard W1 D2 L5 GF8 GA16 Pts5；Silver Creek W1 D1 L6 GF7 GA19 Pts4。GD 按 GF 减 GA 计算。教练：Maya Chen，教练主管兼 U14，青少年教练证书和急救培训，Calm explanations, brave decisions, and room for every player to lead；Elliot Brooks，U8 和 U10 教练，小学体育教师和急救培训，Practices built around movement, laughter, and many touches；Nina Alvarez，U12 和守门员教练，守门员教练和安全保障负责人，Clear positioning, kind feedback, and a focus on the next action。所有俱乐部、对手、人物、赛程、赛果、积分榜、资质和政策均为虚构示例内容。保持每个命名值在各页面间同步。
   布局：不适用
   动效：不适用
2. **共享页头和移动端导航** — 在文字字标 [BRAND] 旁使用原创代码绘制的角旗线条图案，以及小字说明 YOUTH SOCCER · [LOCATION]。桌面导航：Teams → ./index.html#teams，Fixtures → ./fixtures.html，Parents → ./parents.html。主 CTA：Register → ./register.html。用 aria-current='page' 标记当前页面。移动端使用 Menu 按钮，展开面板包含相同链接和 CTA；导航后和按 Escape 时关闭。
   布局：粘性顶部，高 76px，Chalk 96% 不透明度，带轻微模糊和 Line 底边框。字标居左，导航居中，CTA 居右，位于 1240px 容器内。低于 900px 时仅显示字标、紧凑 Register 按钮和 Menu。
   动效：使用指定的移动端面板过渡；不要对粘性定位做动画。
3. **比赛日摄影主视觉** — 眉题：YOUTH SOCCER · AGES 6–13 · [LOCATION]。H1：Big weekends. Brave first touches. 导语：[BRAND] helps players build [PROGRAM_FOCUS] through thoughtful coaching, friendly competition, and Saturdays that feel worth the early alarm. 主 CTA：Register a player → ./register.html。次 CTA：See fixtures → ./fixtures.html。添加三条紧凑事实：Four age groups · Two trained adults at practice · Clear fees, no tryout charge。使用 hero-match.webp，alt 为 'Youth soccer players passing on a sunny community field, seen from behind'，object-position center 58%。在右下角叠加 Paper 下一场比赛卡片：NEXT WHISTLE · U10 · MATCHDAY 08 / [BRAND] vs Cedar Union / Saturday 09:30 · Willowbank Field 2 / View match center。
   布局：在页头后的首个桌面屏幕内，使用 5/7 网格，文案居左，16:9 照片居右。主视觉顶部内边距 56px，底部内边距 72px。图片横跨其列，18px 圆角，下一场比赛卡片与其左下边缘重叠 32px。移动端顺序为眉题、H1、图片、导语、CTA，然后是不重叠的下一场比赛卡片；图片保持 190px 高，两个 CTA 均全宽。
   动效：使用主视觉入场序列。比赛卡片在图片稳定后淡入；无自动播放轮播或循环装饰。
4. **年龄组队伍** — 区块 id='teams'。眉题：FIND YOUR SQUAD。H2：A clear next step for every player。引言：Four small-age-band squads, with coaching and expectations that grow with the players。从内容模型渲染全部四支队伍。每张卡片显示年龄段、U 标签、队伍名称、教练、训练时间表、场地、示例队伍人数和一项具体发展重点。每张卡片按钮：Register for U8/U10/U12/U14 → ./register.html?team=u8 等。注册页面读取此查询并预选匹配年龄组；无查询时默认为 U8。在卡片下方使用 training.webp，alt 为 'Youth players practicing a passing drill while a coach watches'，说明文字：Lots of touches. Simple instructions. One more good decision than last week.
   布局：Chalk 区块，4/8 标题网格，下方桌面为 2×2 网格的四张等宽卡片，移动端单列。选中卡片悬停使用 3px 上浮和 Field 边框。在下方 7/5 分栏中放置 4:3 训练照片和说明文字，引语居右。
   动效：使用标准交错显示卡片。悬停时不隐藏卡片内容。
5. **比赛中心预览** — 眉题：AROUND THE CLUB。H2：The next whistle and the last scores。左侧区块：NEXT UP，内容模型中的前两场即将到来的赛程，每场包含队伍、对手、主/客场标签、时间和场地。右侧区块：LAST WEEKEND，四场近期赛果，使用大号表格比分和 W/D/L 文字标签。底部 CTA：Open fixtures and standings → ./fixtures.html。添加小注：Sample club schedule for this demo, not a live league feed。
   布局：Forest 区块，Paper 文字。使用 6/6 网格：左侧两行即将到来的赛程，右侧紧凑 2×2 赛果网格。Volt 仅用于比分和 CTA；用 18% 不透明度的 Paper 边框分隔行。移动端堆叠区块。
   动效：两列显示一次；比分值不递增计数。
6. **教练简介** — 眉题：THE PEOPLE ON THE TOUCHLINE。H2：Coaching players, not just positions。引言：Three fictional profile placeholders show how a club can make its approach and responsibilities visible。使用 coach-maya.webp、coach-elliot.webp 和 coach-nina.webp 渲染 Maya、Elliot 和 Nina，3:4 裁剪，object-position center 28%。每张卡片包含姓名、角色、通用示例资质和内容模型中的教练描述。添加说明：Demo profiles with fictional portraits; replace them with the club's own staff information。
   布局：Paper 区块，三张等宽卡片。肖像顶部 18px 圆角；文字位于下方而非覆盖面部。桌面端按行对齐角色、资质和描述，移动端堆叠。
   动效：每张卡片使用一次轻柔的肖像显示和简短文字交错。无灰度滤镜或仅悬停显示传记。
7. **注册引导和共享页脚** — 引导眉题：READY FOR THE NEXT WHISTLE? H2：One season. One clear fee。文案：Registration is [SEASON_FEE] per player, including training, league registration, and the end-of-season festival. See what is included, calculate any kit and sibling options, and save a demo request。CTA：Check fees and register → ./register.html。次 CTA：Read the parent guide → ./parents.html。页脚重复 [BRAND]、[PROGRAM_FOCUS]，并链接到全部四个页面。联系：18 Willowbank Lane, [LOCATION]；(970) 555-0148；派生的保留 .example 邮箱。底部注：Invented club, sample data, no live registration。© [BRAND] 加上可选的 [CREDIT] 链接。不要添加年份或社交图标。
   布局：引导为 Volt 面板，Forest 文字，8/4 网格，后接 Forest 页脚，5/3/4 网格用于声明、导航和联系。移动端堆叠，使用大点击目标。
   动效：仅简单链接颜色过渡。

### 赛程、赛果与可排序积分榜（`fixtures.html`）
1. **比赛中心介绍** — 使用 index.html 中的共享页眉和页脚。眉题：MATCH CENTER · SAMPLE CLUB DATA。H1：Every kickoff, one clear view。介绍：按队伍筛选，在即将到来的赛程和近期赛果之间切换，然后按你关心的数据对 U12 积分榜排序。这是示例俱乐部数据，不是实时联赛数据源。添加紧凑图例标签：HOME · AWAY · FULL TIME。
   布局：Chalk 介绍区采用 7/5 网格，文本在左，Forest 比赛日摘要卡在右。摘要内容为 MATCHDAY 08 / 4 squads in action / 3 home · 1 away，由赛程记录推导得出。保持此介绍足够紧凑，以便在首个桌面屏幕内显示筛选控件。
   动效：标题和摘要使用标准入场效果显示一次。
2. **可筛选的赛程与赛果** — 创建队伍筛选按钮 All squads、U8、U10、U12、U14 以及状态标签页 Upcoming、Results、All。默认选中 All squads 和 Upcoming。从内容模型渲染确切的赛程和赛果记录。即将到来的卡片显示 Matchday、队伍、主/客场、双方俱乐部名称、时间和场地；赛果卡片显示 Matchday、队伍、双方名称、最终比分，以及从 [BRAND] 视角出发的文本 W/D/L 徽章。更新可见数量并通过 aria-live 播报。空组合显示 No sample matches match these filters 和 Reset filters 按钮；绝不留空白面板。筛选不会改变积分榜。
   布局：将筛选控件放在 Paper 面板中，位于双列卡片网格上方。控件在移动端换行而非水平滚动。卡片使用 12px 圆角、Line 边框，以及清晰的主/客场和比分层级。在 760px 以下堆叠为单列。
   动效：使用指定的筛选过渡效果。保持焦点在活动筛选上，不要过度动画布局高度。
3. **无障碍可排序联赛积分榜** — 眉题：U12 DIVISION · SAMPLE TABLE。H2：Sort the standings。提供列 Club、P、W、D、L、GF、GA、GD、Pts。默认顺序为 Pts 降序，然后 GD 降序、GF 降序，然后 Club 升序。每个表头都是真实按钮，带有无障碍的 Sort by 标签，其列上带有 aria-sort；点击新列时，数值字段按降序排序，Club 按升序排序，点击活动列则反转方向。显示活动箭头和文本摘要，例如 Sorted by points, descending。从 GF 和 GA 计算 GD，而非单独存储。用微妙的 Volt 左侧线条高亮 [BRAND] 的行，并为屏幕阅读器提供文本 Our club。在移动端，将所有列保持在带标签的水平表格滚动区域内，表格最小宽度为 680px，首列固定；页面本身不得溢出。添加注释：Table uses invented results for demonstration and is not connected to a league。
   布局：Paper 表格面板，12px 圆角和 Line 边框。表头行使用 Chalk 填充和紧凑大写标签；行高至少 52px，使用表格数字。俱乐部名称具有可读的 180px 最小宽度。在 640px 以下，在区域标题内显示滑动提示，而非页面级溢出。
   动效：使用 240ms 行布局过渡和活动箭头旋转。减少动效时立即重新排序。

### 赛季费用与球员注册（`register.html`）
1. **费用介绍与包含内容** — 使用 index.html 中的共享页眉和页脚。眉题：PLAYER REGISTRATION · SAMPLE FEES。H1：Know the cost before the kickoff。介绍：每位球员一个清晰的 [SEASON_FEE] 赛季费用，可选装备和兄弟姐妹折扣。演示会计算总额，离开后不保存任何内容；它不收集付款或发送个人信息。包含内容卡片：Training — all squad sessions led by two adults；Match registration — sample league registration and home-field costs；Club festival — one end-of-season community event。费用事实：每位球员基础费用 [SEASON_FEE]；可选全套装备每套 $38，含球衣、短裤和袜子；两名球员一起注册时享受 $25 兄弟姐妹折扣；提供三期等额演示分期付款，无额外费用。退款说明：Sample policy — full refund before team placement, 50% after the first match, then discussed case by case for injury or relocation。
   布局：紧凑的 Chalk 主视觉区采用 7/5 网格，标题在左，Forest 费用卡在右，显示 [SEASON_FEE] / PER PLAYER / SEASON。下方使用三张等宽包含内容卡片和一行水平费用事实。移动端堆叠。
   动效：仅标准标题和卡片显示效果。
2. **经验证的注册表单与实时费用计算器** — H2：Build your demo registration。表单字段：Number of players，1 或 2；Player 1 first name；Player 1 age group U8/U10/U12/U14，从可选的 team 查询参数预选；Experience，选项为 New to soccer、Some club experience、Returning player；Player 2 first name 和 age group 仅在选中两名球员时显示；Kit quantity 选择从零到球员数量，每套 $38；Payment rhythm，选项为 Full season total 或 Three equal installments；Parent or caregiver name；Email；Best contact，选项为 Email 或 Phone；可选 Notes 文本区域，辅助说明为 Do not include medical or sensitive information；必选确认 I understand this is a demo request and nothing will be sent。验证必填姓名、合理的电子邮件、存在时的双方球员详情以及确认。提交时显示内联错误和错误摘要。推导基础总额为球员数量乘以解析后的 [SEASON_FEE]，装备总额为装备数量乘以 $38，兄弟姐妹折扣仅对两名球员为 $25，总计为基础加装备减折扣。对于分期选择，显示总额除以三的三期等额分期，四舍五入到分，任何舍入余数计入最后一期。保持可见的订单摘要与表单同步。提交按钮：Save demo request。成功状态：Your demo request is ready. Nothing was sent, no payment was taken, and this personal information was not stored。显示球员、队伍、联系方式选择、装备、付款节奏、折扣和总计的纯文本摘要。提供 Copy summary（带本地回退）、Edit request 和 Start over。不要在 localStorage 中持久化个人字段。
   布局：使用 7/5 网格，表单在左，粘性费用摘要在右。摘要列出 Base、Kit、Sibling discount、Total 以及所选付款节奏，使用表格数字。输入使用可见标签和至少 48px 高度；双列姓名/电子邮件和球员字段在 640px 以下折叠为单列。成功状态就地替换表单并获得焦点。
   动效：对选中选项使用颜色过渡，Player 2 字段使用 200ms 显示效果，以及指定的成功过渡。错误淡入，不抖动。
3. **注册说明与家长指南链接** — 添加三条简洁说明：Team fit — age group is a starting point; a coach confirms placement with the family。Playing time — the sample club aims for meaningful participation in every match, not equal minutes in every situation。What happens next in a real club — connect this static request to the club's own secure registration and payment process before using it publicly。CTA：Read arrival, pickup, and safeguarding information → ./parents.html。
   布局：Paper 三列说明行位于 Forest 家长指南条带上方。移动端堆叠说明，并保持 CTA 至少 48px 高。
   动效：简单的显示效果和链接颜色过渡。

### 家长信息与俱乐部政策（`parents.html`）
1. **家长指南主视觉区** — 使用 index.html 中的共享页眉和页脚。眉题：THE PARENT GUIDE。H1：The details that make Saturday easier。简介：Arrival, pickup, kit, weather, and who to talk to — organized for the people who make the season possible。使用 parent-meeting.webp，alt 为 'Caregivers speaking with a coach beside a community soccer field'，object-position 为 center 45%。添加快速链接，指向 Matchday rhythm、Kit and weather、Safeguarding 和 FAQ。
   布局：使用 5/7 网格，文案在左，4:3 照片在右，尺度与首页主视觉区相似，但顶部内边距为 48px。快速链接在简介下方形成可换行的 chip 行。在移动端，将照片放在 H1 之后、正文文案之前。
   动效：标准标题和图片入场；无视差。
2. **比赛日节奏与携带物品** — 区块 id='matchday'。眉题：MATCHDAY RHYTHM。H2：Arrive ready, leave together。时间线：开赛前 40 分钟 — 到达、找到队伍并向教练报到；开赛前 30 分钟 — 穿好球鞋、准备好水、球队热身；开赛前 10 分钟 — 团队讲话和球员位置安排；开球 — 照护者留在边线标记后方；终场哨后 — 球员离场前先与教练完成签退。携带物品：贴好标签的水瓶、护腿板、合适的球鞋、天气防护层、由照护者保管的任何个人药物，以及赛后的小零食。注意：在此示例政策中，教练不管理或存放药物。
   布局：Chalk 区块，左侧为跨越 7 列的垂直五站时间线，右侧为跨越 5 列的 Paper 打包清单。在移动端保持时间线为线性，使用 Volt 圆点和 Forest 轨道。
   动效：以 60ms 错峰显示时间线节点；勾选标记不持续动画。
3. **装备、天气与沟通** — 区块 id='kit'。H2：Practical answers before you need them。三张卡片：装备 — 可选的 $38 套装包括球衣、短裤和袜子；护腿板和球鞋由家庭自备。天气 — 真实俱乐部应通过其自行选择的渠道发布取消通知；此演示没有实时警报服务。不要根据此页面假定比赛已取消。沟通 — 日程问题联系队伍教练；安全保障方面的疑虑私下联系 Nina Alvarez，即示例安全保障负责人；紧急安全问题联系当地紧急服务。添加一个小型代码绘制的场地示意图，显示教练区、球员热身侧和照护者边线区；标注为 Original schematic, not a venue map。
   布局：Paper 区块，三张等宽卡片，随后是一个宽大的 Forest 面板，左侧包含原始 SVG 场地示意图，右侧为简短的边线指引。在移动端堆叠。
   动效：在显示时以 450ms 一次性绘制场地线条；在减少动态效果模式下立即显示完整示意图。
4. **安全保障与边线行为** — 区块 id='safeguarding'。眉题：SAMPLE CLUB POLICY。H2：Clear boundaries help everyone relax。安全保障要点：训练时始终有两名成人在场；球员向教练签到和签退；照护者在到达时指定接走球员的成人；教练不安排私下一对一会面；疑虑私下联系安全保障负责人。边线要点：为努力喝彩而非发出指令，绝不挑战孩子或裁判，未经其照护者许可不得拍摄其他孩子，并保持技术区域畅通。将所有这些标注为说明性政策文本，真实俱乐部必须审查并替换为其自身的本地要求。
   布局：Forest 区块，包含两张 Paper 卡片，Safeguarding 和 Touchline conduct，每张包含五行简洁的图标支持行。将政策免责声明放在下方，以可见的小字呈现，而非工具提示。
   动效：仅标准卡片显示；安全内容绝不等待交互后才出现。
5. **家长常见问题** — 区块 id='faq'。H2：Before the first session。六个手风琴，默认答案精确如下：How early should we arrive? — Forty minutes before kickoff gives players time to check in, change, and warm up without rushing。Is playing time guaranteed? — The club aims for meaningful participation in every match, but equal minutes in every situation are not promised。What if my child is new? — Choose New to soccer on the form. Coaches introduce skills in small steps and pair new players with a welcoming buddy。What happens in bad weather? — The sample club communicates changes through its squad channel. This demo does not send alerts, so always confirm with the coach。Do we need the full kit? — No. The kit bundle is optional; suitable sportswear, shin guards, water, and appropriate footwear are the essentials。Can I take photographs? — Ask the coach first and never photograph other children without their caregiver's permission。为变更后的俱乐部重写运营性答案，同时保留示例政策免责声明。
   布局：Chalk 区块，采用 4/8 网格，标题在左，六行全宽手风琴在右。每个问题是至少 56px 的按钮，带加号图标和可见焦点；只需打开一个答案。
   动效：使用指定的手风琴过渡，并将加号旋转为 X。所有答案在减少动态效果模式下仍可操作。

## 资源
- 图片：将 https://media.vibefather.ai/assets/22e25540-f0e2-4b9c-9f4e-ac74edbe218c/hero-match.webp 下载到 public/images/hero-match.webp；alt：阳光明媚的社区球场上，一群青少年足球运动员正在传球，镜头从背后拍摄；用于首页 hero 区域。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；记录在 ASSETS.md 中。
- 图片：将 https://media.vibefather.ai/assets/22e25540-f0e2-4b9c-9f4e-ac74edbe218c/training.webp 下载到 public/images/training.webp；alt：青少年球员在教练注视下练习传球训练；用于 Age-group squads 下方。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；记录在 ASSETS.md 中。
- 图片：将 https://media.vibefather.ai/assets/22e25540-f0e2-4b9c-9f4e-ac74edbe218c/coach-maya.webp 下载到 public/images/coach-maya.webp；alt：Maya Chen，一位虚构的青少年足球主教练，站在训练场旁；用于 Maya 的教练卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；记录在 ASSETS.md 中。
- 图片：将 https://media.vibefather.ai/assets/22e25540-f0e2-4b9c-9f4e-ac74edbe218c/coach-elliot.webp 下载到 public/images/coach-elliot.webp；alt：Elliot Brooks，一位虚构的青少年足球教练，站在草地场边；用于 Elliot 的教练卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；记录在 ASSETS.md 中。
- 图片：将 https://media.vibefather.ai/assets/22e25540-f0e2-4b9c-9f4e-ac74edbe218c/coach-nina.webp 下载到 public/images/coach-nina.webp；alt：Nina Alvarez，一位虚构的守门与安全防护教练，站在便携球门旁；用于 Nina 的教练卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；记录在 ASSETS.md 中。
- 图片：将 https://media.vibefather.ai/assets/22e25540-f0e2-4b9c-9f4e-ac74edbe218c/parent-meeting.webp 下载到 public/images/parent-meeting.webp；alt：照护者在社区足球场旁与教练交谈；用于 Parent guide 的 hero 区域。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；记录在 ASSETS.md 中。
- 字体：安装并自托管 @fontsource/barlow-condensed 和 @fontsource-variable/manrope，两者均为 OFL-1.1；将所需的 woff2 文件打包到本地，并在 ASSETS.md 中列出这两个包及其许可证。
- 图标：使用 lucide-react（ISC）实现菜单、关闭、箭头、chevron、加号、勾选、时钟、map-pin、用户、盾牌、cloud-sun、球衣、兼容哨声的通用运动图标、复制和邮件图标；如果找不到精确的哨声图标，使用 CircleDot，而不是绘制品牌化符号。以一致的 20px 描边在本地打包，并在 ASSETS.md 中记录该包及其许可证。
- 图片：将角旗 favicon 和字标图案、场地线细节以及家长指南场地示意图绘制为原创 SVG。public/favicon.svg 使用 32×32 的 Forest 圆角方块，带有简单的 Volt 旗帜轮廓，不含字母。在 ASSETS.md 中列出全部六个照片源 URL、作者 VibeFather、准确的生成图像再分发署名、两个字体包以及 lucide-react。不使用其他位图图像或地图。

## 不要做
- 不要添加后端、API 路由、数据库、身份验证、分析、外部表单提交、支付收集、实时联赛数据源、天气 API、地图嵌入或第三方请求。筛选、排序、计算、验证、剪贴板操作和确认必须完全在浏览器中运行。
- 不要暗示注册、支付、可用性、赛程数据、积分榜、天气警报或安全保障状态是实时的。清楚标注示例数据和演示确认；绝不要将注册个人数据存储在 localStorage 中或传输它。
- 不要热链图片或从 CDN 加载脚本、样式、字体、图标或其他运行时资源。下载提供的六张图片，自行托管两种字体，并全程使用相对本地路径。
- 不要生成 source map，不要将 src/ 复制到 dist/，不要让 dist/ 超过 20 MB，不要要求超过 npm run build 的操作。输出 index.html、fixtures.html、register.html 和 parents.html，所有链接指向文件名，绝不要指向裸目录。
- 不要将可编辑内容分散到各个组件中。将文案和记录保留在 src/content.ts 中，派生所有依赖品牌的联系详情，只解析一次 [SEASON_FEE]，并在变量变化时重写所有仅默认的文案和数据。
- 不要使用真实的俱乐部、联赛、对手球队、队徽、队服、吉祥物、口号、品牌调色板、复制的赛程或积分榜、隶属关系声明、现有网站代码、精确复制、自定义商业字体或独特的体育图标。
- 不要使用真实的球员、教练、家长、看护人、裁判或公众人物的身份或肖像。青少年图像不得包含可识别的儿童；教练肖像为虚构占位符，绝不用仅首字母的替代品。
- 不要在生成的图像中添加标志、赞助商、可读文字、球衣号码、品牌设备、著名场馆或可识别的地标。不要使用 Unsplash、Pexels、Pixabay、Google Images、CC BY-NC、CC BY-SA、占位符服务或再分发权利不明确的资产。
- 不要捏造已验证的结果、认证、安全保障认证、评论、会员数量或上场时间或球员发展的保证。所有俱乐部、人物、资质、记录、费用和政策均为虚构的示意性内容。
- 不要在任何地方显示日历日期或年份。示例赛程使用 Matchday 编号、星期几和时间；不要引入倒计时、实时时间戳或版权年份。
- 不要在网站 UI 内提及 VibeFather 或其自身的定价、许可、指标或会员资格，除了可选的 [CREDIT] 页脚链接。所有网站文案、标签、示例数据和 alt 文本均为原创美式英语。
- 不要留下装饰性或无效控件。移动导航、阵容到注册的预选、赛程筛选、重置、每个积分榜排序、注册计算和条件字段、验证、复制、编辑、重置、快速链接和手风琴都必须支持键盘和触摸操作。
- 不要损害可访问性或响应性：在 390px 下不得出现水平页面溢出，不得有仅悬停信息，不得有仅靠颜色的结果状态，不得有未标记的表单字段或图标按钮，不得有焦点陷阱，在 390×844 或 1440×900 下不得有控制台错误。将移动端积分榜表格保留在其自己的带标签滚动区域内。
- 不要忽略 prefers-reduced-motion，不要将核心内容隐藏在动画后面，不要添加自动播放轮播或视差效果，不要引入 3D、无法禁用的平滑滚动、虚假紧迫感、lorem ipsum 或通用体育口号。

---
— Prompt by VibeFather · https://vibefather.ai/t/youth-sports-club-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
