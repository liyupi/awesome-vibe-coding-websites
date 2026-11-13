> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 动物收容所领养网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [SHELTER] 打造的两页网站，这是位于 [CITY] 的一家不杀生收容所，目前有 [PETS] 只动物正在寻找家庭。网站必须诚实而温暖：一个可筛选的待领养动物网格（按物种、年龄、体型），带有真实故事和申请表的宠物详情页，说明资金用途的捐赠档位，附时间投入说明的志愿者角色，以及标注为示例的统计数据。页面：index.html、pet.html?pet=<slug>（无查询参数时显示第一只宠物）。一切都在浏览器中运行；不会在任何地方提交或扣费。

- 受众：正在决定是否领养的家庭和单身人士、周末志愿者，以及被一个故事打动就捐出 $25 的捐赠者。他们用手机浏览，对某只动物产生感情，并且需要下一步操作显而易见。
- 目标：启动申请并改变统计数据。访客在十秒内看到动物和使命；在两分钟内筛选网格并打开一个故事。
- 语气：温暖，对动物幽默，对照护严肃。每只宠物都有真实的性格描述，而不是品种图表；不进行愧疚式说教。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/quicksand（OFL-1.1）、@fontsource-variable/nunito-sans（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置（Setup）：
  - 使用 npm create vite@latest 并选择 react-ts 模板进行脚手架初始化。项目根目录下有两个真实的 HTML 页面：index.html（入口 src/main-index.tsx）和 pet.html（入口 src/main-pet.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0，rollupOptions { input { index: resolve(__dirname, 'index.html')，pet: resolve(__dirname, 'pet.html') } } }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './pet.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键名添加到 theme.extend.colors 中（cream、sand、card、meadow、meadow-deep、meadow-mist、ink、bark、tangerine、tangerine-deep、rule），并设置 fontFamily display ['Quicksand', 'system-ui', 'sans-serif']、sans ['Nunito Sans Variable', 'system-ui', 'sans-serif']。将 borderRadius 的 DEFAULT 设为 16px，并添加 maxWidth { container: '1180px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/quicksand/500.css'、'@fontsource/quicksand/700.css' 和 '@fontsource-variable/nunito-sans'；从两个入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（所有字符串、宠物、特征、档位、角色、统计数据及图片路径，均带类型），src/lib/brand.ts（shelterSlug = [SHELTER] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 shelterSlug + '.org'），src/lib/storage.ts（用 try/catch 包裹的安全 localStorage get/set，键前缀为 shelterSlug + ':'），src/lib/pet.ts（读取查询参数 'pet.html?pet=<slug>'，返回匹配的宠物或第一个——绝不返回未找到），src/lib/filters.ts（applyFilters(pets, { species, age, size })）。
  - 状态（State）：src/store/application.ts 是一个小型外部 store（useSyncExternalStore），持有 { petSlug, name, email, home, experience, note, sent }，持久化到 localStorage 键 shelterSlug + ':application:<petSlug>'。
  - 组件位于 src/components/：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx、PawGlyph.tsx（绘制的 SVG）；index：Hero.tsx、StatsStrip.tsx、AdoptGrid.tsx（FilterChips.tsx、PetCard.tsx）、DonateTiers.tsx、VolunteerRoles.tsx、VisitStrip.tsx；pet：PetHero.tsx、StoryBlock.tsx、TraitsList.tsx、Application.tsx（Confirmed.tsx）、NextPet.tsx。src/pages/Home.tsx 和 Pet.tsx 组合它们；两个页面都渲染 Header 和 Footer。
  - 在首次构建之前，使用 curl -L -o 并按照给定的确切文件名，将资源（Assets）下列出的每张图片下载到 public/images/ 中。构建本身从不获取任何内容。
  - public/favicon.svg 如资源（Assets）下所述。两个 HTML 文件：lang en，<meta name='theme-color' content='#FBF8F2'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>。标题：index.html '<title>[SHELTER] — Adopt a friend in [CITY]</title>'，pet.html '<title>Adopt — [SHELTER]</title>'（宠物页面在加载时将 document.title 设置为宠物的名字）。
  - 在项目根目录下按资源（Assets）下所述编写 ASSETS.md。
  - dist/ 包含两个 HTML 文件、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [SHELTER] — 收容所名称（默认：“Second Snout Shelter”）。虚构的收容所名称。用于字标、标题、页脚、电子邮件（hello@ + 不含连字符的 shelterSlug + .org）以及 localStorage 键。绝不使用真实收容所或救助机构。
- [CITY] — 城市（默认：“Madison, Wisconsin”）。收容所所在地。用于主视觉区、到访信息条和页脚。可以使用真实城市；街道为虚构。
- [PETS] — 宠物数量（默认：“12”）。当前可领养动物的数量，以数字表示。驱动主视觉信息条、网格的实时计数和一项统计数据。保持在 8–20 之间（content.ts 中的名册有 12 个；如有更改，按比例调整）。
- [FOCUS] — 重点（默认：“dogs and cats”）。收容所接收的动物，小写。驱动主视觉文案行、筛选默认值和两项统计数据。保持以狗/猫为核心；名册可以包含一只小型毛茸茸动物。
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接，指向 https://vibefather.ai/t/animal-shelter-adoption-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 奶油色（Cream）`#FBF8F2` — 两个页面的页面背景。
- 沙色（Sand）`#F2EBDD` — 交替区块背景（Donate、Volunteer）、悬停填充、标签。
- 卡片色（Card）`#FFFFFF` — 宠物卡片、申请面板、确认信息、档位卡片。
- 草甸色（Meadow）`#3F7A52` — 主色：标题强调、主按钮、选中标签、焦点环。
- 深草甸色（Meadow Deep）`#2E5E3E` — 主色悬停、页脚背景。
- 草甸雾色（Meadow Mist）`#E5EFE5` — 选中宠物详情强调、筛选标签填充、特征标签。
- 墨色（Ink）`#2C2A24` — 标题和正文文本、图标颜色。
- 树皮色（Bark）`#6E675B` — 次要文本、说明文字、眉题、筛选标签。
- 橘色（Tangerine）`#E8833A` — 唯一的暖色强调：Donate 按钮、领养费用、统计数字、心形符号、focus-visible 细节。
- 深橘色（Tangerine Deep）`#C96A25` — 橘色悬停和按下状态。
- 分隔线色（Rule）`#E5DCCB` — 1px 细线、卡片边框、输入框边框、分隔线。

### 排版（Typography）
- 展示字体：H1、H2、H3、宠物名称、档位价格、文字标识：Quicksand（OFL），字重 500/700
- 文本与 UI：正文、眉题、按钮、表单字段、说明文字；统计和费用使用等宽数字：Nunito Sans（OFL），字重 400/600/700

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1180px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 96px、1024px 以下 72px、640px 以下 56px。字号比例：H1 clamp(42px, 6.4vw, 80px) Quicksand 700，行高 1.04；H2 clamp(28px, 3.8vw, 46px) Quicksand 700；H3 21px Quicksand 700；宠物名称 Quicksand 700 22px；导语 Nunito 400 17.5px / 1.65 Ink 90%；正文 15.5px / 1.7（最大宽度 62ch）；眉题 Nunito 700 12px 大写 字间距 0.16em Bark，前面带一个绘制的爪印符号；说明文字 13px Bark。按钮：高度 50px，Nunito 700 14px。主按钮：Meadow 填充，Card 文本。Donate：Tangerine 填充，Card 文本。次要按钮：1px Meadow 边框，Meadow 文本。输入框：高度 50px，1px Rule 边框，Card 填充，聚焦时 Meadow 边框。全局焦点环：2px Meadow 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、标签和照片均为 16px — 处处都是友好的圆角。999px 仅用于标签、胶囊、统计圆点和爪印圆点。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和网格重排；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于申请切换。温和而温暖。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(14px) 开始，在 15% 可见时（Motion whileInView，viewport once）以 700ms --ease-out 稳定下来。同级元素错开 75ms。
- 动效：Hero：收容所照片从 1.04→1.0 缩放，持续 2400ms；标题上升；三个爪印符号在使命线旁走入（错开 200ms，在减少动效下关闭）。
- 动效：网格筛选：卡片使用 Motion layout 配合 AnimatePresence mode 'popLayout'；离开的卡片淡出 180ms，留下的卡片以 380ms --ease-io 滑动；实时计数交叉淡入淡出；空筛选网格显示 'No friends match — loosen a filter, they''re all good ones.' 并带 Reset。
- 动效：宠物卡片：悬停上浮 3px，照片缩放 1.03；单行个性文字从 Bark 变为 Meadow。
- 动效：宠物详情：故事的第一行以 Meadow 下划线绘制显现；特征标签错开 40ms；'good with' 勾选绘制一次。
- 动效：申请：预选宠物的标签脉冲一次；无效提交抖动 4px 并显示内联标签；发送切换为 Confirmed（300ms --ease-io）— 一个绘制的心形+爪印印章缩放进入，'Application received' 和 'The shelter replies within two days — usually with more photos.'
- 动效：统计：数字在显现时计数一次（600ms）；'(sample)' 说明文字从不做动画。
- 动效：Donate 档位：悬停将档位上浮 2px；Tangerine 的 'what it buys' 行变亮。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 280ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无缩放、错开、计数或印章；一切以静止状态渲染。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：温暖的真实摄影，全部六张为这个模板以一致的风格制作：柔和的自然光、奶油色和暖灰色背景、动物放松且光线充足 — 肖像、动作和收容所角落；绝不出人（无面孔、无手）。无可读文字或标牌。每张照片使用 object-fit cover，object-position 在 Assets 下给出，16px 圆角，无阴影；Cream 上的照片获得 1px Rule 轮廓。说明文字为 Nunito 13px Bark。代码绘制：爪印符号、心形印章、特征标签、标签和 favicon。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 领养页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值撰写（[SHELTER] = Second Snout Shelter，[CITY] = Madison, Wisconsin，[PETS] = 12，[FOCUS] = dogs and cats）。将每个字符串、费用和列表放入 src/content.ts 并从中渲染；两个页面共用一个内容文件。若任何变量值不同，请重写主视觉、所有宠物故事和一句话简介、档位、角色、统计数据和到访文案，使其针对新收容所具体且可信，同时保持相同的结构和数量（12 只宠物：7 只狗、4 只猫、1 只兔；3 个档位；4 个角色；4 项统计数据）。所有动物、工作人员和数字均为虚构；统计数据带有“(sample)”标注。名册（slug · 名字 · 物种 · 年龄 · 体型 · 一句话简介 · 照片）：'biscuit' Biscuit dog 2y medium 'A golden retriever mix who believes every stranger is a friend he hasn''t sniffed yet' hero-dog；'mochi' Mochi cat 3y small 'A round gray lap-cat with a purr like a distant road crew' cat-gray；'waffles' Waffles dog 5y large 'Basset-hound dignity; walks at his own press speed' dog-basset；'pickle' Pickle cat 1y small 'An orange menace with a sock collection you must respect' cat-orange；'rosa' Rosa dog 7y medium 'A staff favorite: calm, wise, and done with your other pets'' nonsense' dog-brindle；'turnip' Turnip rabbit 2y small 'Lop-eared, litter-trained, judges your salad choices' rabbit-lop；'gus' Gus dog 4y large 'A lab-great-dane pup who hasn''t met a door frame he likes' dog-bigpup；'sesame' Sesame cat 8y small 'A senior tabby; discount fee, full heart, excellent window commentary' cat-senior；'juniper' Juniper dog 1y small 'A heeler mix puppy: smart, busy, needs a job and a person' dog-puppy；'olive' Olive cat 2y small 'A black cat with green eyes and a gossip''s interest in your day' cat-black；'maple' Maple dog 3y medium 'A pittie mix who smiles in photos and means it' dog-smile；'clover' Clover cat 5y small 'A calico who prefers respectful distance and scheduled affection' cat-calico。
   布局：不适用
   动效：不适用
2. **页眉（所有页面）** — 左侧：字标——爪印图标 + '[SHELTER]'（Quicksand 700 18px），下方为 'No-kill · [CITY] · est. by volunteers'（10px 大写 Bark）——链接至 ./index.html。右侧导航（Nunito 600 14px）：'Adopt' → #adopt，'Donate' → #donate，'Volunteer' → #volunteer，'Visit' → #visit；一个小号 Meadow 色 'Apply to adopt' → ./pet.html（第一只宠物）。820px 以下：字标 + Donate 胶囊按钮。
   布局：顶部吸顶，高度 72px，Cream/94% 模糊，Rule 边框。
3. **主视觉** — 两栏。左侧：眉题爪印 'NO-KILL SHELTER · [CITY]'；H1 'Twelve someones' / '*want to meet you.*'；导语（最大宽度 520px）：'[SHELTER] takes in [FOCUS] and gives them time — time to heal, learn, and pick their person. No time limits, no excuses, a lot of treats.'；主按钮 'Meet the animals' → #adopt 和 Tangerine 色 'Donate $25' → #donate；信任行：'No-kill, always'；'Every pet vetted and vaccinated'；'Returns accepted, no questions'。右侧：hero-dog.webp（4:3），配文 'Biscuit, applying for the position of your whole heart'。照片栏相对文字垂直居中（或改为 4:5 更高）；H1 最多排两行；爪印图标与使命行内联对齐。
   布局：Cream 背景，顶部垂直内边距 104px；左侧 6 列，右侧 5 列偏移 1。
4. **统计条** — 一个细线边框的横带：'1,280' / 'pets rehomed since opening (sample)'；'96%' / 'spay & neututer before adoption'；'4%' / 'return rate — we take them back, gladly'；'[PETS]' / 'looking for homes today'。数字为 Quicksand 700 32px Tangerine 等宽数字，说明文字为 Nunito 12px Bark。
   布局：全宽横带，Rule 上下边框，垂直内边距 32px，四个等宽单元格带细线分隔。
5. **可领养网格** — 区块 id='adopt'。眉题 'ADOPTABLE NOW' 和 H2 'Twelve friends, filtered your way.' FilterChips：物种（All · Dogs · Cats · Small & furry）；年龄（All · Under 2 · 2–7 · Senior 7+）；体型（All · Small · Medium · Large）；实时计数 '12 friends'。网格：4x3 PetCards（照片、名字、一句话简介、年龄/物种/体型标签、Tangerine 色领养费——狗 $180，猫 $90，兔 $60，老年宠物半价）链接至 ./pet.html?pet=<slug>。空状态见动效部分。下方说明：'Fees cover vetting, vaccines and the microchip; love included free.' 十二只宠物使用六张照片绝不能读起来像重复：每张卡片采用不同的裁剪/缩放（全身照 vs 头部特写 vs 偏心构图），使同一动物不会在两个名字下看起来重复；同窝宠物刻意配对并注明。
   布局：Cream 背景。筛选器在滚动时吸顶于页眉下方（top 72px，Cream/96% 模糊）。卡片 4 列 20px 间距（1024px 以下 2 列，640px 以下 1 列）；照片顶部 1:1 宽高比，16px 圆角。
6. **捐赠档位** — 区块 id='donate'。眉题 'KEEP THE LIGHTS ON' 和 H2 'What your dollars become.' 三张档位卡片：'$25' — 'A week of meals for one dog, or a very good chew toy' — Tangerine 色 'Give $25'；'$100' — 'A full vaccination set for one animal' — 'Give $100'；'$250' — 'A spay or neuter surgery, plus the cone of shame (they forgive you)' — 'Give $250'。下方说明：'This demo takes no payment — the real shelter page would. Every tier prints a plain receipt.' 一行月度复选框：'Make it monthly — cancel anytime, the animals understand.' “能买到什么”的句子为 Ink 正文文字；Tangerine 仅承载价格；Tangerine 文字在白底上始终通过对比度要求。
   布局：Sand 背景。三列 24px 间距；卡片在 Card 上，Rule 边框，价格为 Quicksand 700 40px Tangerine；按钮为 Tangerine 填充。
7. **志愿者角色** — 区块 id='volunteer'。眉题 'GIVE AN AFTERNOON' 和 H2 'Four ways in.' 角色卡片（图标、标题、时间、一句话）：DogWalking 'Dog walker' — '2h shifts, mornings' — 'The most requested job at the shelter, and the waggiest.'；HeartHandshake 'Cattery cuddler' — '1h shifts' — 'Socialize the shy ones; patience and feather wands provided.'；Camera 'Photo day helper' — 'Monthly Saturdays' — 'Great photos get pets adopted; wrangle treats and tails.'；Truck 'Transport driver' — 'On call' — 'Vet runs and intake pickups; a car and a soft heart required.' 下方一行：'Orientation is one hour and includes meeting everyone, which is the point.'
   布局：Cream 背景。2x2 网格 20px 间距；卡片在 Card 上，图标位于 44px Meadow Mist 圆角方块中。
8. **到访条与页脚** — VisitStrip（id='visit'）：营业时间与路线在 Card 上：'Tue–Sun 12–5 · closed Mondays for deep-clean' · '2109 Dogwood Lane, [CITY]' · 'hello@ + emailDomain' · 'Tours walk-in; applications same-day.' 页脚：Meadow Deep 背景；三栏：1）爪印字标 + '[SHELTER]'，下方 'No-kill shelter · [CITY]'；2）'Reach us'：地址、邮箱、'(608) 555-0162'；3）'Around'：Adopt、Donate、Volunteer、Visit 锚点。底部行：'© [SHELTER]. Statistics are sample data; the wags are real.'
   布局：VisitStrip 两栏 Card；页脚垂直内边距 64px，3 列，底部行在 Card/15% 分隔线上方 32px。768px 以下堆叠。

### 宠物（`pet.html`）
1. **宠物主视觉与故事** — 读取 ?pet=<slug>；无查询参数时，biscuit 完整渲染（标题变为 'Biscuit — adopt me'）。两栏布局：左侧为宠物大照片（3:4），附名字和标签（年龄/物种/体型，费用以 Tangerine 显示）；右侧为 Eyebrow 'MEET [NAME]'，故事分三段短段落（在 content.ts 中为全部 12 只宠物撰写真实内容——Biscuit：'Biscuit arrived as a stray with a coat like a carwash and no idea of cars. Three weeks of meals and two of patience later, he''s decided people are excellent and doors are invitations.' / 'He knows ''sit'', is learning ''wait'' (hard), and walks best with a harness and a running commentary.' / 'His ideal home has a yard, a spot on the couch he can claim, and someone home more often than not. Kids eight and up, cats unknown but he''s optimistic.'）；TraitsList（标签）：'Loves belly rubs'；'House-trained'；'Rides well in cars'；'Chew toy scholar'；'Good with: dogs, kids 8+'；申请 CTA 'Apply for [NAME]' → #apply。
   布局：Cream 背景，顶部垂直内边距 104px；照片占 5 列，故事占 6 列偏移 1；特质以 Meadow Mist 标签换行排列。
2. **领养申请** — 区块 id='apply'。Eyebrow 'THE APPLICATION' 和 H2 'Two minutes, seriously.' 一个 Card 面板：宠物标签预选（'Applying for: Biscuit — $180 fee'，可通过所有宠物的小型下拉框更改）；姓名 + 邮箱；住宅类型下拉框（House with yard / Apartment / Farm / Other）；经验下拉框（'First-time owner' / 'Had pets before' / 'Seasoned, bring it on'）；备注文本域（占位符 'Tell us about your home, your schedule, and anyone two- or four-legged waiting at it.'）；主按钮 'Send application'，附说明 'Saved in this browser — the real page would email the shelter. Nothing is sent here.' 确认后：心形+爪印印章，'Application received.' 'The shelter replies within two days — usually with more photos [NAME] insisted on including.' 以及 'Apply for another' 返回预填状态。按宠物持久化存储在 localStorage 中。
   布局：Sand 背景；面板最大宽度 640px，28px 内边距，Rule 边框；下拉框全宽；姓名/邮箱两栏在 560px 以下堆叠。
3. **下一只宠物与安心提示** — NextPet：为名册中下一只宠物（最后一只之后回到第一只）准备的宽幅信箱式卡片：'NEXT FRIEND — [NAME]' + 一句话简介 + ArrowUpRight → ./pet.html?pet=<next-slug>。安心提示条：三行带 Meadow 勾选标记——'Every animal vetted, vaccinated and microchipped'；'Two-week trial period, no hard feelings'；'We take our pets back, for their whole lives.'
   布局：Cream 背景；NextPet 为容器宽度 Card，带 Rule 边框；安心提示为其下方三行细线分隔条，48px 内边距。

## 资源
- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/d4af93fd-65bf-4fd9-8a9b-1fd75cfd748b/hero-dog.webp → public/images/hero-dog.webp（Hero、Biscuit 卡片和详情；object-position 50% 50%；alt 'A smiling golden retriever mix in a sunny yard'）；https://media.vibefather.ai/assets/d4af93fd-65bf-4fd9-8a9b-1fd75cfd748b/cat-gray.webp → public/images/cat-gray.webp（Mochi、Sesame；alt 'A round gray cat asleep in a sunny windowsill'）；https://media.vibefather.ai/assets/d4af93fd-65bf-4fd9-8a9b-1fd75cfd748b/dog-basset.webp → public/images/dog-basset.webp（Waffles、Rosa；alt 'A basset hound standing in grass with long ears'）；https://media.vibefather.ai/assets/d4af93fd-65bf-4fd9-8a9b-1fd75cfd748b/cat-orange.webp → public/images/cat-orange.webp（Pickle、Clover；alt 'An orange young cat mid-play with a toy'）；https://media.vibefather.ai/assets/d4af93fd-65bf-4fd9-8a9b-1fd75cfd748b/dog-puppy.webp → public/images/dog-puppy.webp（Juniper、Gus、Maple；alt 'A heeler-mix puppy sitting attentively in soft grass'）；https://media.vibefather.ai/assets/d4af93fd-65bf-4fd9-8a9b-1fd75cfd748b/rabbit-lop.webp → public/images/rabbit-lop.webp（Turnip；alt 'A cream lop-eared rabbit sitting on a towel'）。共六个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一个表格：path、source URL、author、license——每张照片一行（source 'media.vibefather.ai, made for this template'，author 'VibeFather'，license 'Distributed with the template'），另加 @fontsource/quicksand 和 @fontsource-variable/nunito-sans（OFL-1.1）以及 lucide-react（ISC）的行。切勿用图库网站或包含人物、面部、手部或可读标牌的图片替换照片。
- 图标：仅使用 lucide-react：Dog、Cat、Rabbit、Footprints、HeartHandshake、Camera、Truck、Check、ArrowUpRight、MapPin、Mail、Clock、Heart。描边宽度 1.75，16–24px，颜色继承。爪印字形、心形+爪印印章、标签和 favicon 为绘制的 SVG。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的 rect rx 9 填充 #3F7A52，一个 Card（#FFFFFF）爪印字形，其上方有一个 Tangerine（#E8833A）心形。无其他标志：收容所名称始终以文字排版呈现；无真实支付标识。
- 字体：安装 @fontsource/quicksand 和 @fontsource-variable/nunito-sans，并在 src/fonts.ts 中按 Setup 所列导入它们。Vite 会将 woff2 文件打包到 dist/。
- 图片：在代码中绘制：爪印字形和眉标、心形+爪印印章、特征标签、筛选标签和 favicon。除六张照片外无其他位图；无插图；无地图瓦片。

## 禁止事项
- 无后端、无表单提交、不向任何 API 发起 fetch 请求、无支付：申请和捐赠点击仅在浏览器内保存或确认（localStorage）；捐赠说明注明该演示不收取任何付款。
- 每个内部链接都指向文件名（./index.html、./index.html#adopt、./pet.html、./pet.html?pet=mochi、./pet.html#apply）——绝不指向裸目录；不带查询参数的 pet.html 显示第一只宠物，绝不报错。
- 一切资源自托管：字体通过 Fontsource，图标以 npm 包或内联 SVG 形式引入，图片下载到 public/images/。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制进 dist/、单条命令 npm run build、输出位于 dist/ 且小于 10 MB。
- 不使用真实收容所、救助机构、工作人员或动物；不使用含人物、面部或手部的照片；统计数据标注为示例；任何位置均不出现真实支付标识。
- 任何位置均不出现日期或年份；年龄以年为单位（'2y'），不含出生日期；网站绝不显示当天日期。
- 除可选的页脚署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 遵循 prefers-reduced-motion：不使用缩放、错峰、计数或盖章动效；网格筛选即时切换；颜色/边框悬停效果保留。
- 网站必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零报错；筛选器、标签（chips）、下拉选择（selects）和申请表仅用键盘即可操作，且焦点环可见。
- 文案保持具体而友善：不使用 lorem，不进行愧疚式施压；每一项费用、特征和故事文案都存放在 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/animal-shelter-adoption-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
