> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 家庭医疗诊所网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个单页网站，这是由 [FOUNDER] 在 [CITY] 领导的家庭医疗诊所，拥有 [EXPERIENCE] 经验，设有两个地点。页面温暖而平静——青绿色（teal）、珊瑚色（coral）、奶油色（cream）、圆润字体——且实用：可筛选的提供者目录、包含就诊类型和时段选项（slot chips）的预约请求、可搜索的保险列表、就诊携带物品清单、免预约候诊等待卡示例、两个地点的营业时间以及非工作时间指引。页面绝不做出医疗声明或治疗承诺；在紧急情况下，页面会提示拨打 911。所有提供者、保险计划和数字均为虚构的示例数据。

- 受众：主要：围绕 [CITY] 的家庭和个人，正在选择（或更换）初级保健之家——查看谁接受他们的保险、谁正在接收新患者，以及病假就诊有多快。次要：儿科、牙科和专科诊所，可调整目录和服务。
- 目标：将访客从“这家诊所是否适合我们”引导至提交预约请求：快速回答保险和可用性问题，让等待时间可见，使请求耗时不到一分钟。
- 语气：温暖的前台英语——平实、友善、不慌不忙、零术语。绝不对健康进行推销；页面的自信是平静的，而非张扬的。

## 技术栈（Stack）
- 框架（Framework）：Vite 6 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/quicksand（OFL-1.1）、@fontsource/nunito（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化配置（Setup）：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 设为 './'，build.outDir 设为 'dist'，build.sourcemap 设为 false。不使用路由、无后端、无服务端代码。
  - 安装 Tailwind CSS 3.4，并配置 PostCSS 和 Autoprefixer。用下方指定的精确色板扩展主题，fontFamily.display 设为 'Quicksand'，fontFamily.body 设为 'Nunito'。
  - 通过 @fontsource/quicksand 和 @fontsource/nunito 自托管 Quicksand 字重 600 和 700，以及 Nunito 字重 400、600、700、800，在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、useInView、useReducedMotion）实现轻柔的入场显示和候诊卡片的补间动画；所有动画均以 useReducedMotion() 作为启用条件。
  - 将所有文案和数据集中放在 src/content.ts 中：品牌字符串、首屏文案、服务项目、医生（姓名、资质、专科、语言、是否接诊、一句话简介、照片）、保险计划（虚构）、就诊类型、时段选项、需携带物品清单、两个地点的营业时间、候诊卡片示例数据、评价。当变量值发生变化时，在该文件中重写依赖的文案，并从 [BRAND] 和 [PHONE] 派生存储键和 tel: 链接，确保不残留默认品牌信息。
  - 医生目录筛选：专科标签（All、Family medicine、Pediatrics、Women's health）、语言标签（All、English、Spanish），以及一个 'Accepting new patients' 开关；筛选即时生效；不接诊的医生显示为弱化的 'Panel full — waitlist' 状态，而非请求按钮。
  - 保险列表：七个虚构计划 — Cedar Health PPO、Cedar Health HMO、Summit Care、Harborlight Plans、Meadowbrook Union、Crestline Direct、Self-pay — 通过搜索输入框（'Type your plan…'）筛选；无匹配时显示 'Don't see it? Call [PHONE] — we check plans weekly.'。绝不使用真实保险公司名称。
  - 需携带物品清单为交互式：复选框状态持久化到 localStorage 的 [BRAND_SLUG]-bring 键下；一个小型 '3 of 6 ready' 计数器随勾选更新。
  - 预约请求：就诊类型分段控件（New patient visit / Follow-up / Same-day sick visit / Vaccine only）、可选的医生选择（仅限接诊中的医生）、时段标签（Morning / Midday / Afternoon）、每个时段三个时间选项标签（例如 8:20、9:00、9:40）——这些时段是静态示例标签，并非实时日历；姓名、电话、一句话原因（可选）；提交时在表单内联校验必填字段（不使用浏览器原生弹窗），然后显示成功卡片 'Request received, [name]. The front desk calls to confirm — usually within two hours during office hours. This demo stores the request in this browser only.'。持久化到 localStorage 的 [BRAND_SLUG]-appointment 键下。
  - 到店候诊卡片：两行地点信息，带示例等待时间（'Meadowbrook ~25 min'、'Northside ~40 min'），进入时补间动画，明确标注 'Sample figures — the front desk updates this board all day.'。不声称实时数据。
  - 仅使用以下 lucide-react 图标：Phone、CalendarCheck、Clock、Users、Languages、Stethoscope、Baby、HeartPulse、Syringe、ClipboardList、CheckCircle2、MapPin、ChevronRight、ArrowRight、Menu、X、Search、FileText、Building2。
  - 将清单和预约请求持久化到 localStorage，以 [BRAND_SLUG] 为命名空间；校验恢复的 JSON，并从格式错误的数据中静默恢复。
  - 构建前将六张生成的图片下载到 Assets 中列出的确切 public 路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者或生成器，以及许可证。
  - 一个纯 <title> 为 [BRAND] 以及一个 favicon（青绿色圆角方块，带白色无十字心形标记）即可；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。任何地方不得出现医疗声明用语。

## 变量
- [BRAND] — 诊所名称（默认：“Bramble Hill Family Clinic”）。虚构的诊所名称；代码中会据此派生出一个圆润的心形标志图形。
- [CITY] — 城市（默认：“Meadowbrook”）。主诊所所在城镇；出现在首屏主视觉、地点和保险文案中。
- [FOUNDER] — 医疗主任（默认：“Dr. Alana Reyes”）。虚构的医疗主任；同时也是第一张医生卡片。
- [PHONE] — 电话（默认：“(555) 491-2200”）。前台电话；以 tel: 链接形式呈现，仅保留数字。
- [EXPERIENCE] — 开业年数（默认：“15 years”）。使用类似 '15 years' 的普通短语；用于首屏主视觉文案。
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接，指向 https://vibefather.ai/t/family-medical-clinic-website（默认：是；删除此行即可移除）

页面与区块（Pages & Sections）下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 临床青（Clinical teal）`#0E7C7B` — 主色：页眉底色、区块强调、链接、激活态标签
- 深青（Teal deep）`#0A5D5C` — 页脚底色和深色面板
- 柔珊瑚（Soft coral）`#FF7F66` — 暖意：CTA、高亮、候诊卡片强调
- 珊瑚浅调（Coral tint）`#FFEAE5` — 暖色标签和提示面板
- 青浅调（Teal tint）`#E4F2F1` — 信息面板和区块色带
- 柔奶油（Soft cream）`#FAF6EF` — 页面底色
- 白（White）`#FFFFFF` — 卡片和面板
- 暖墨（Warm ink）`#2A3438` — 浅色背景上的标题和正文
- 钢灰（Steel）`#5E6E71` — 次要文本
- 细线（Hairline）`#E9E3D8` — 细分隔线和卡片边框

### 字体排印
- 展示字体：标题、区块标题、候诊数字：Quicksand（OFL），字重 600/700
- 正文字体：段落、控件、医生简介：Nunito（OFL），字重 400/600/700/800

### 布局与动效
- 间距：区块间距为桌面端 92px / 移动端 64px；区块标题使用 13px 字距的青色眉题（eyebrow），下方为 Quicksand 700 标题，字号为 clamp(28px, 3.2vw, 44px)；卡片内边距 28px，间距 24px。
- 圆角：亲和力正体现在这里：卡片 16px，标签和输入框 12px，胶囊形元素全圆角；照片 16px 以保持一致。
- 动效：通过 useInView 实现轻柔的淡入上浮显现（14px，550ms，70ms 交错），仅触发一次。
- 动效：候诊数字在进入时于 700ms 内递增；清单计数器以 150ms 弹跳跳动。
- 动效：筛选和搜索变化时，医生卡片和方案行以 180ms 交叉淡入淡出。
- 动效：所有动效在 prefers-reduced-motion 下立即禁用；无视差、无滚动劫持、无自动播放媒体。
- 图像：来自同一次拍摄的温暖临床室内场景：一间明亮候诊室，奶油色与木质搭配绿植；一间诊室，带青色点缀和自然光——无患者、无面部特写、无摆拍听诊器之类的陈词滥调。医生肖像为影棚打光的虚构人物，身穿白大褂，置于纯色暖背景上，年龄和族裔多样。

## 页面与区块
### [BRAND] — [CITY] 的家庭医学（`index.html`）
1. **页眉与主视觉区** — 页眉（奶油色 94% 不透明度，带背景模糊，72px）：心形标志（青绿色圆角方块内嵌白色 HeartPulse 图标）+ [BRAND]，使用 Quicksand 700；导航锚点：Services、Providers、Insurance、New patients、Visit；右侧：电话胶囊 Phone 图标 + [PHONE]（tel:）和珊瑚色胶囊按钮 'Request a visit'。在 390px 宽度下：标志 + 简称、电话图标按钮、菜单按钮排成一行；锚点收进奶油色下拉菜单。主视觉区：左侧文案（第 1–6 列）：青绿色眉题 'FAMILY MEDICINE · TWO LOCATIONS'；H1 使用 Quicksand 700 暖墨色 'Care that answers on the second ring.'；段落钢灰色 16px '[FOUNDER] leads a four-provider team that has cared for [CITY] families for [EXPERIENCE]. Same-day sick visits, evening slots twice a week, and a front desk that picks up.'；珊瑚色胶囊按钮 'Request an appointment'（锚点）和青绿色描边胶囊按钮 'Meet the providers'（锚点）；三个标签：'Same-day sick visits' · 'Spanish spoken' · 'Walk-ins welcome'。右侧（第 7–12 列）：候诊室照片置于 16px 圆角边框内（4:3），左下角叠放一张浮动白色卡片：Clock 图标、'Walk-in wait right now'、'~25 min · Meadowbrook' 使用 Quicksand 700 青绿色，以及一行 12px 钢灰色文字 'Sample board — the front desk updates it all day.'
   布局：12 列网格；浮动卡片偏移 -18px；移动端先堆叠文案再显示照片，卡片位于边框内左下角。
   动效：照片从 1.03 缩放稳定，历时 600ms；文案上移 14px，错峰 70ms；等待数字递增计数。
2. **服务** — 奶油色区块。眉题 'WHAT WE SEE'（青绿色）；标题 'One clinic for the whole household.' 五张卡片（白色，16px 圆角，细线边框）：'Primary care' — Stethoscope 图标 — 'Annual physicals, chronic-condition check-ins and the long view of your health, with whichever provider you click with.'；'Pediatrics' — Baby 图标 — 'Well-child visits through the school years, sports forms and the earaches that show up on Fridays.'；'Women's health' — HeartPulse 图标 — 'Well-woman visits, contraception planning and screenings, scheduled with the time they deserve.'；'Vaccines' — Syringe 图标 — 'Flu shots, childhood series and travel vaccines — often in and out in fifteen minutes.'；'Same-day sick visits' — Clock 图标 — 'Hold a slot before 8 a.m. and you're seen that day. Walk-ins welcome when the board above says so.' 每张卡片页脚：青绿色 ChevronRight 'Request this visit'，锚定表单并预选该就诊类型。
   布局：五张卡片：桌面端 3+2 换行排列，900px 以下 2 列，640px 以下 1 列；图标置于青绿色浅色圆圈内。
   动效：卡片上移 14px，错峰 70ms。
3. **医生目录** — 白色区块，标志性区块。眉题 'OUR PROVIDERS'（青绿色）；标题 'Pick your person.' 筛选行：专科标签（All、Family medicine、Pediatrics、Women's health），语言标签（All、English、Spanish），'Accepting new patients' 切换标签（开启时为珊瑚色）。四张医生卡片（奶油色底，16px 圆角）：3:4 肖像，姓名 Quicksand 700 18px，资质 + 专科 13px 青绿色，语言 12px 钢灰色带 Languages 图标，一行简介 14px 墨色，以及珊瑚色胶囊按钮 'Request with [first name]'（在表单中预选该医生）或柔和的 'Panel full — join the waitlist' 标签。'[FOUNDER], MD — Family medicine — English, Spanish — 'Started this clinic to keep appointment lengths long enough to actually listen.'' 接受新患者。'Dr. Owen Pike, MD — Pediatrics — English — 'Kids decide if they like a doctor in ten seconds; he passes.'' 接受新患者。'Naomi Ostrander, FNP — Women's health — English — 'Unhurried visits, plain answers, every time.'' 接受新患者。'Dr. Samuel Boateng, MD — Family medicine — English, Spanish — 'Second opinions welcome — bring the printouts.'' 名额已满。筛选即时生效，且绝不会留下没有 'All' 标签可选的空网格。
   布局：四张卡片排成一行（1024px 以下 2×2，640px 以下 1 列）；筛选标签在移动端横向滚动。
   动效：筛选变化时卡片交叉淡入淡出 180ms；悬停时肖像在边框内缩放至 1.02。
4. **保险与新患者** — 青绿色浅色区块，左右两半。左侧：'Insurance we work with' — 搜索输入框 'Type your plan…'（Search 图标）筛选白色面板列表中的七个虚构计划，带 CheckCircle2；无匹配状态显示致电提示。列表下方 13px 钢灰色文字：'Plans change often — the front desk re-checks the list weekly. Self-pay visit: $95, published, no surprises.' 右侧：'First visit? Bring these.' — 六个交互式复选框（本地持久化）：'Photo ID and insurance card'、'Medication bottles (or a list)'、'Pharmacy you prefer'、'Any records from your last clinic'、'Questions you keep forgetting to ask'、'Co-pay ready or card on file'；珊瑚色 '3 of 6 ready' 进度计数器带细进度条；下方注释 'Forms? We hand you a clipboard once — after that everything's in the portal you'll never have to call.' 带 FileText 图标。
   布局：桌面端 6/6 列，移动端堆叠；列表行高 44px，带细线分隔。
   动效：复选框勾选弹出 1.15×；计数器条填充 200ms；搜索时计划行交叉淡入淡出。
5. **预约请求** — 白色区块。眉题 'REQUEST A VISIT'（珊瑚色）；标题 'Two minutes, then a real person calls.' 表单置于奶油色面板（最大宽度 760px，内边距 32px）：就诊类型分段控件（New patient visit / Follow-up / Same-day sick visit / Vaccine only — 激活时为珊瑚色）；医生选择（'First available'，加上三位接受新患者的医生）；时段标签 Morning / Midday / Afternoon，所选时段下显示三个示例时段标签（Morning：8:20、9:00、9:40；Midday：11:20、12:00、1:10；Afternoon：2:30、3:20、4:00）— 选择一个时段；Name（必填）、Phone（必填）、'Anything the provider should know?' 可选文本域，占位符 'e.g. scheduling a school sports physical'。珊瑚色胶囊提交按钮 'Send my request'。验证：缺失必填字段显示 2px 珊瑚色边框和 13px 珊瑚色提示；不使用浏览器原生弹窗。成功状态替换表单：青绿色 CheckCircle2、'Request received, [name].' Quicksand 700、'The front desk calls to confirm — usually within two hours during office hours. Nothing was sent anywhere: this demo stores your request in this browser only.' 以及描边胶囊按钮 'Request another'。持久化到 localStorage。
   布局：桌面端字段行两列，移动端 1 列，底部内边距 96px，确保吸底栏不遮挡提交按钮；时段标签 44px 触控目标。
   动效：成功状态交叉淡入淡出并上移 12px；对勾弹出 1.15×；分段控件和时段标签过渡 150ms。
6. **地点与营业时间** — 奶油色区块。眉题 'VISIT US'（青绿色）；标题 'Two doors, same team.' 两张地点卡片（白色，16px 圆角）：'Meadowbrook — main' — '512 Bramble Hill Road'（MapPin）、'Mon–Fri 7:30a–6p · Sat 8a–12p · evening slots Tue & Thu until 8p'、电话 [PHONE]；'Northside — walk-ins & sick visits' — '1980 Northside Crossing, Suite 3'、'Mon–Fri 8a–5p · Sat 9a–1p'、'(555) 491-2299'。两张卡片下方，一张非工作时间提示卡（珊瑚色浅色）：'After hours: call the main line to reach the nurse line. In an emergency, call 911 or go to the nearest emergency department — this website is not for urgent help.' 检查室照片作为宽幅 16px 圆角横幅置于卡片和提示之间。
   布局：两张卡片排成一行（800px 以下 1 列）；横幅照片全宽，21:9 裁剪。
   动效：卡片上移 14px，错峰 80ms；横幅淡入。
7. **评价** — 白色区块。眉题 'FROM FAMILIES'；标题 'What neighbors say.' 三张引用卡片（奶油色底，青绿色引号）：五颗青绿色星；16px 墨色引用；13px 钢灰色页脚。'Same-day appointment at 8 a.m., seen by 9:15, out with a prescription by 10. That used to be a fantasy.' — The Harmons, Meadowbrook, family of four. 'They found a Spanish-speaking provider for my mother and treated her like their own family.' — Lucía G., Northside. 'The portal actually works, but I still call sometimes because someone picks up. Imagine that.' — Derek W., Meadowbrook. 网格下方 12px 钢灰色免责声明：'Sample reviews for this template demo.'
   布局：三张卡片排成一行（900px 以下 1 列）；桌面端中间卡片上浮 12px。
   动效：卡片上移 14px，错峰 90ms。
8. **页脚** — 深青绿色区块。第 1 列：心形标志 + [BRAND]，使用 Quicksand 700 白色；13px #A8C6C5 文字行 '512 Bramble Hill Road, [CITY]'、'(555) 491-2299 · Northside'、'Sample site for a template — providers, plans and reviews invented'。第 2 列 'Clinic'：锚点 Services、Providers、Insurance、New patients。第 3 列 'Contact'：[PHONE] 珊瑚色（tel:）和珊瑚色胶囊按钮 'Request a visit'。底部细线行：'This demo is not medical advice. In an emergency call 911.' 加上可选的 [CREDIT] 链接。移动端吸底栏（768px 以下）：固定底部青绿色 96% + 模糊；珊瑚色胶囊按钮 'Call'（tel:）和白色描边胶囊按钮 'Request visit'（锚点），带安全区内边距。
   布局：页脚网格 4/4/4，移动端 1 列；768px 以下 body 底部内边距 80px。
   动效：无。

## 资产
- 图片：候诊室。将 https://media.vibefather.ai/assets/981d0492-15ed-4c3a-bc9a-a5f3d6fd22a7/hero-waiting.webp 下载到 public/images/hero-waiting.webp。Alt：'A bright clinic waiting room with wood chairs, plants and daylight.' 主视觉锚点。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：诊室。将 https://media.vibefather.ai/assets/981d0492-15ed-4c3a-bc9a-a5f3d6fd22a7/exam-room.webp 下载到 public/images/exam-room.webp。Alt：'A calm exam room with teal accents and daylight.' 地点横幅。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：服务提供者肖像一。将 https://media.vibefather.ai/assets/981d0492-15ed-4c3a-bc9a-a5f3d6fd22a7/provider-1.webp 下载到 public/images/provider-1.webp。Alt：'Portrait of a fictional family physician in a white coat.' 用于 [FOUNDER] 卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：服务提供者肖像二。将 https://media.vibefather.ai/assets/981d0492-15ed-4c3a-bc9a-a5f3d6fd22a7/provider-2.webp 下载到 public/images/provider-2.webp。Alt：'Portrait of a fictional pediatrician in a white coat.' 用于 Dr. Owen Pike 卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：服务提供者肖像三。将 https://media.vibefather.ai/assets/981d0492-15ed-4c3a-bc9a-a5f3d6fd22a7/provider-3.webp 下载到 public/images/provider-3.webp。Alt：'Portrait of a fictional nurse practitioner in a white coat.' 用于 Naomi Ostrander 卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：服务提供者肖像四。将 https://media.vibefather.ai/assets/981d0492-15ed-4c3a-bc9a-a5f3d6fd22a7/provider-4.webp 下载到 public/images/provider-4.webp。Alt：'Portrait of a fictional family physician in a white coat.' 用于 Dr. Samuel Boateng 卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图标：Lucide（ISC），通过 lucide-react 包引入，仅限 setup 中的图标列表。不得使用其他图标来源。
- 字体：Quicksand（OFL）和 Nunito（OFL），通过 @fontsource/quicksand 和 @fontsource/nunito 自托管；不通过 CDN 加载字体。

## 禁止事项
- 任何地方都不得出现医疗声明、治疗承诺或结果性表述——包括文案、工具提示、alt 文本或元数据：不得使用“we treat”“cure”“best”“guaranteed results”；服务内容仅停留在就诊类型层面，页脚保留“非医疗建议”声明和 911 热线说明。
- 不得使用真实的医疗系统、诊所连锁、医院品牌或其标识；[BRAND]、服务提供者、评价和地址均为虚构的示例数据。
- 不得出现真实保险公司或计划网络名称——可接受列表仅使用 content.ts 中七个虚构计划。
- 不得使用真实医疗委员会、认证印章或资质徽章；资质仅以纯文本形式出现（MD、DO、FNP）。
- 不得出现真实药物、以疾病名称作为服务项目，或手术营销；每句话都保持在就医可及性与流程层面。
- 等待卡片为示例数据并已注明；绝不可暗示其为实时数据源。
- 不得绑定真实时钟的日期：不得有版权年份、不得有“今日日期”逻辑、不得有倒计时；时间表述保持相对化（“usually within two hours”）。
- 表单仅为本地示例：不得提交至任何服务器，不得使用 API、分析工具、电子邮件或日历服务。仅持久化到 localStorage，并对恢复的数据进行校验。
- 不得有后端、服务器代码、数据库或认证。通过单一构建命令在 dist/ 中输出静态文件，小于 20 MB，Vite 的 base 使用相对路径。
- 仅通过 Fontsource 包自托管字体；绝不加载 Google Fonts、Adobe Fonts 或任何 CDN 样式表或脚本。
- 生产环境不得包含 source map，不得将 src/ 复制到 dist/。
- 不得使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件；仅使用六张生成的图片和代码绘制的 SVG 图形。
- 不做 SEO 工作：不得有元描述、Open Graph 标签、JSON-LD、站点地图或关键词堆砌的标题。一个包含 [BRAND] 的普通标题和一个 favicon 就足够了。
- 服务提供者筛选器绝不能留下空网格而不提供“All”筛选标签；面板已满的服务提供者绝不显示请求按钮。
- 肖像为虚构人物，年龄和族裔多样，不 resemblance 任何真实个人——且不得有听诊器摆拍的库存照片陈词滥调。
- 不得有滚动劫持、页面视差、自定义光标或自动播放媒体；动效仅限于指定的显现、计数、弹出和交叉淡入淡出，且均遵循 prefers-reduced-motion。
- 移动端页头在 390px 宽度下保持单行，且粘性底栏绝不能遮挡预约表单的提交按钮。
- 从 [BRAND] 和 [PHONE] 构建品牌派生字符串（存储键、tel: 链接），以便替换变量值后绝不残留默认品牌痕迹。
- 每个内部链接都是文件名或页内锚点，绝不是裸目录；网站保持为单个 index.html。

---
— Prompt by VibeFather · https://vibefather.ai/t/family-medical-clinic-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
