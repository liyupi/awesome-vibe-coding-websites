> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 个人简介链接页面（Link in Bio Page）

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [CREATOR] 打造的单页、移动优先的 link-in-bio 页面——'[TAGLINE]'，一位创作 [NICHE] 相关内容的创作者。它必须拇指优先：一个带环状装饰的字母组合头像、一行简介、四个大号链接按钮（全部为 '#' 占位符）、一张最新视频卡片、两张产品小卡片、一行手绘风格的通用社交图标，以及一个内联校验、仅在浏览器中保存的邮箱收集表单。单页：index.html。一切都在浏览器中运行；不会向任何地方提交数据。

- 受众：晚上 11 点从社交资料简介点进来的手机访客：80% 为移动端，几秒内就做出决定。他们想看最新视频、商店，也许还有邮件订阅——目标要大，不用费劲找。
- 目标：让拇指移向真正重要的两三件事：观看、购物、订阅。在 390×844 屏幕上，所有内容都在首屏内。
- 语气：创作者自己的声音：温暖、简短、带点俏皮。链接标题是动词或小惊喜（'Watch the glaze fail'），绝不是菜单标签。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/baloo-2（OFL-1.1）、@fontsource-variable/figtree（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化（Setup）：
  - 使用 react-ts 模板通过 npm create vite@latest 脚手架创建项目。项目根目录下只有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每个颜色以 kebab-case 键添加到 theme.extend.colors（cream、sand、card、charcoal、ash、coral、coral-deep、coral-mist、sage、rule），并设置 fontFamily display ['Baloo 2', 'Georgia', 'serif']、sans ['Figtree Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 18px——这个页面是友好风格——并添加 maxWidth { phone: '420px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/baloo-2/500.css'、'@fontsource/baloo-2/700.css' 和 '@fontsource-variable/figtree'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（所有字符串、链接、产品、视频标题/时长、社交标签和邮件文案，均带类型），src/lib/brand.ts（creatorSlug = [CREATOR] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 creatorSlug + '.com'），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键前缀为 creatorSlug + ':'）。
  - 状态（State）：src/store/email.ts 是一个小型外部 store（useSyncExternalStore），持有 { email, done }，持久化到 localStorage 键 creatorSlug + ':email'；提交有效地址会将 done 翻转并渲染内联成功提示行；'Use a different address' 会重置。
  - 组件位于 src/components/：AvatarRing.tsx（带 coral 圆环的头像圆形、在线状态点；仅当图片加载失败时显示字母组合圆形作为回退），BioBlock.tsx、LinkButton.tsx（图标、标题、副标题、箭头）、VideoCard.tsx（海报、播放徽章、时长）、ProductMini.tsx、SocialRow.tsx（绘制的通用图标）、EmailCapture.tsx、FooterLine.tsx、Reveal.tsx（Motion whileInView，轻柔效果）。src/pages/Home.tsx 负责组合它们。
  - 在首次构建之前，使用 curl -L -o 将资源（Assets）下列出的每张图片下载到 public/images/，并使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 如资源（Assets）下所述。index.html：lang en，<meta name='theme-color' content='#FAF5EC'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[CREATOR] — links, shop and letters</title>，viewport meta 带 viewport-fit=cover。
  - 在项目根目录下按资源（Assets）下所述编写 ASSETS.md。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和四张图片。保持在 5 MB 以下。

## 变量
- [CREATOR] — 创作者名称（默认："Hearth & Hallow"）。虚构的创作者账号名/品牌名。用于标题、名称区块、字母组合标志、页脚、邮箱（hello@ + 去掉连字符的 creatorSlug + .com）以及 localStorage 键名。绝不使用真实创作者。
- [TAGLINE] — 一句话简介（默认："Small-batch ceramics, big-batch calm"）。名称下方的那一行简介——创作者做什么，带点个性。驱动标语区块和邮件订阅的卖点文案。
- [NICHE] — 细分领域（默认："slow pottery and studio life"）。内容是关于什么的，一个小写短语。驱动视频卡片的标题、产品名称和两个链接副标题。保持具体。
- [SHOP_HINT] — 商店提示（默认："the mug shop"）。文案中如何称呼商店（'the mug shop'、'the starter shop'）。用于商店链接按钮和一条产品说明。
- [CREDIT] — 在页脚保留一个小的 "Template by VibeFather" 链接指向 https://vibefather.ai/t/link-in-bio-page（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块分组，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 奶油色（Cream）`#FAF5EC` — 整个页面的背景色。
- 沙色（Sand）`#F1E8D9` — 链接按钮填充色、卡片凹槽、标签片。
- 卡片色（Card）`#FFFDF8` — 视频卡片、产品卡片、邮件面板。
- 炭黑色（Charcoal）`#33302B` — 标题、链接标题、正文、图标颜色。
- 灰烬色（Ash）`#7A756B` — 次要文本、副标题、说明文字、占位文本。
- 珊瑚色（Coral）`#E2725B` — 唯一强调色：头像圆环、在线状态点、主按钮、播放徽章、价格、焦点环、链接箭头。
- 深珊瑚色（Coral Deep）`#C55B45` — 按钮按下状态、箭头悬停、邮件成功对勾。
- 珊瑚雾色（Coral Mist）`#FBE9E2` — 邮件成功面板填充色、选中/按下按钮的着色。
- 鼠尾草绿（Sage）`#7C8B6F` — 安静的第二色：在线状态点的替代色、小型可用性提示、页脚圆点。
- 分隔线色（Rule）`#E5DCCB` — 1px 细线、卡片边框、输入框边框。

### 字体排印（Typography）
- 展示字体：创作者名称、链接按钮标题、价格、邮件标题：Baloo 2（OFL），字重 500/700
- 文本与界面：简介、副标题、说明文字、按钮、邮件文案：Figtree（OFL），字重 400/600

### 布局与动效（Layout & motion）
- 间距：4px 基准，拇指优先。页面是一个 420px 宽的列（手机最大宽度），在桌面端居中，奶油色背景延续。侧边内边距 20px；块间距 16px；区块间距 32px。链接按钮：高 60px，全宽，18px 圆角，图标 22px 居左，标题 Baloo 2 700 16px + 副标题 Figtree 400 12.5px 堆叠，箭头 18px 居右。头像 88px，带 3px 珊瑚色圆环和 12px 在线状态点。视频卡片：16:9 海报，18px 圆角。产品小卡：64px 图片，名称和价格一行排列，高 56px。邮件输入框 50px，按钮 50px。字号层级：名称 Baloo 2 700 26px；简介 15px 灰烬色；区块标签（无——此页面没有标签，只有块）；说明文字 12.5px。全局焦点环：2px 珊瑚色轮廓，偏移 3px——在每个可点击元素上可见。
- 圆角：按钮、卡片和邮件面板 18px；头像、在线状态点、标签片、播放徽章和社交图标 999px。
- 动效：缓动：--ease-out cubic-beta(0.22, 0.61, 0.36, 1) — 即 cubic-bezier(0.22,0.61,0.36,1)；--ease-io cubic-bezier(0.65, 0, 0.35, 1)。友好而迅速。
- 动效：加载：各块按顺序显现（头像 → 简介 → 链接 → 视频 → 产品 → 社交 → 邮件），间隔 60ms 交错，每个块上移 10px + 淡入，持续 450ms，使用 --ease-out。在桌面端，列还会从 scale 0.98 稳定下来。
- 动效：链接按钮：按下时缩放到 0.97，60ms 回弹（whileTap）；桌面端悬停时上浮 2px 并将箭头右移；图标在悬停时晃动一次（旋转 ±4deg，300ms）。
- 动效：头像：珊瑚色圆环在加载时绘制一次（stroke-dashoffset，800ms）；在线状态点轻柔脉动（scale 1→1.25，2000ms 循环，在减少动态效果下关闭），配文 'shipping week — studio open'。
- 动效：视频卡片：播放徽章轻微脉动（scale 1→1.08，2400ms 循环）；点击它（href '#'）会在卡片下方显示一条小型内联提示，持续 2s：'The real page opens the video — this demo rests.'
- 动效：邮件捕获：无效时抖动 4px 一次，并显示内联提示 'That address looks shy of a dot'；成功时表单替换为珊瑚雾色面板（220ms 淡入），并有一个绘制的对勾缩放进入。
- 动效：社交图标：悬停时上浮 3px 并旋转 -6deg，每个仅一次，200ms；它们是带 aria-labels 的按钮。
- 动效：prefers-reduced-motion: reduce — 无循环（圆环完整绘制，点静止），无交错（所有块直接出现），按下仅改变颜色。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：四张内容图片使用温暖、柔和的摄影——工作室、不露手的工艺和产品静物，统一色调（奶油色、陶土色、鼠尾草绿）。任何地方都没有人物、没有面孔、没有手；没有可读文字或标志。头像是 AI 生成的创作者肖像（一张温暖的工作照：围裙、沾着陶土的手捧着一个碗、真诚的微笑——一个虚构人物），置于珊瑚色圆环中；绘制的字母组合仅作为其加载回退保留。社交图标是绘制的通用符号（一个相机环、一个波浪、一个无鸟剪影的抽象音符、一个信封）——绝不是真实平台标志。链接按钮图标：lucide-react，描边宽度 2。

## 页面与区块
### 链接（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[CREATOR] = Hearth & Hallow，[TAGLINE] = Small-batch ceramics, big-batch calm，[NICHE] = slow pottery and studio life，[SHOP_HINT] = the mug shop）。将每个字符串和数字放入 src/content.ts 并从中渲染。若任一变量值不同，请重写简介、全部四个链接标题/副标题、视频卡片、两个产品和邮件文案，使其对新创作者而言具体且可信，同时保持相同的结构和数量（4 个链接、1 个视频、2 个产品、4 个社交项）。所有链接均为 '#' 占位符；受众、视频和产品均为虚构；不声称任何真实数字。邮箱：hello@ + emailDomain。头像：portrait-creator.webp 是一个 AI 生成的虚构人物，与默认创作者匹配（一位虚构的陶艺家，不 resemblance 任何真实个人）；alt 保持为 'The creator, a fictional ceramicist'。
   布局：不适用
   动效：不适用
2. **头像与简介** — 居中：创作者头像 portrait-creator.webp 作为 88px 圆形，带珊瑚色圆环，右下角有在线状态圆点（alt 'The creator, a fictional ceramicist'）；名称 '[CREATOR]'（Baloo 2 700 26px）；简介行 '[TAGLINE]'（Figtree 15px Ash）；'studio of one' 标签。头像为 AI 生成的虚构人物，用户可替换为自己的照片。
   布局：垂直堆叠，12px 间距，距安全区域顶部 40px 内边距；头像 88px 圆形。
3. **链接按钮** — 四个大按钮（60px，Sand 填充，1px Rule 边框），图标 + 两行文本 + 箭头：1）PlayCircle 图标 — 'Watch the glaze fail' — 'new studio video · 14 min' — '#'。2）ShoppingBag 图标 — 'Shop [SHOP_HINT]' — 'restocks Friday 6pm, drops sell out by nine' — '#'。3）Mail 图标 — 'The Kiln Letter' — 'one honest note on [NICHE], most Sundays' — '#email（锚点滚动至订阅区）'。4）MapPin 图标 — 'Studio markets this season' — 'four dates, one spreadsheet, zero regrets' — '#'。每个按钮打开其 '#' 占位符；第三个锚定到邮件区块。
   布局：四个堆叠，12px 间距，全列宽。点击目标 ≥60px；箭头（ArrowUpRight 18px Coral）右对齐。
4. **最新视频卡片** — 一个 Card 面板：16:9 海报 studio-wheel.webp，中央有播放徽章（56px Coral 圆形，Paper 播放符号），右下角有持续时间标签 '14:02'；下方标题（Baloo 2 700 17px）：'The glaze that failed beautifully'，配文 'inside [NICHE], episode 12'（Figtree 13px Ash）。点击显示内联演示说明（见动效）。
   布局：全列宽，18px 圆角，1px Rule 边框，12px 内边距；海报 16:9 圆角 12px。
5. **产品迷你卡片** — 两个迷你卡片并排（各占 50% 减去间距）：1）mug-speckled.webp — 'The Morning Speckle' — '$38' — 配文 'the mug people photograph'。2）vase-mini.webp — 'Bud Vase, ash glaze' — '$26' — 配文 'one stem is plenty'。两者均链接 '#'，上方有一行小字 'from [SHOP_HINT]'（Figtree 600 12.5px Ash）。
   布局：两列 12px 间距；迷你卡片：64px 圆角图片在左，名称 Baloo 2 700 14px + 价格 Coral 700 14px 在同一行，配文 12px Ash 在下方；Card 填充，1px Rule 边框，14px 圆角。
6. **社交项** — 四个绘制的通用图标（36px 圆形，Sand 填充，Charcoal 描边；绝不使用真实平台标志），居中排列，16px 间距，带 aria 标签：'photos'（绘制的相机圆环）、'videos'（绘制的圆角方形内播放三角形）、'audio'（绘制的波形）、'letters'（信封图标）。所有 href 为 '#'。
   布局：居中行，24px 垂直外边距。
7. **邮件订阅** — id='email'。一个 Card 面板：标题（Baloo 2 700 18px）'One letter, most Sundays'；行（Figtree 14px Ash）：'What came out of the kiln, what cracked, and the recipe that worked. No schedule-guilt.' 输入框 + 按钮行：输入框（占位符 'you@inbox.com'）和 Coral 按钮 'Join'；无效时内联提示；成功面板（Coral Mist）：绘制的对勾，'You''re in — saved in this browser. The real page would hand this to the newsletter tool.' 以及 'Use a different address' 文本按钮重置表单。
   布局：全列宽，18px 圆角，16px 内边距；在 380px 以下输入框和按钮全宽堆叠。
8. **页脚行** — 居中 12px Ash：'[CREATOR] · made with clay and [NICHE]' 位于细线上方，带 Sage 圆点和 'no cookies, no trackers — just links'。
   布局：32px 顶部内边距，上方细线，安全区域底部内边距。

## 资源（Assets）
- 图片（image）：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每个文件下载到 public/images/：https://media.vibefather.ai/assets/508996cd-4e84-4ea9-b437-2504f297d847/studio-wheel.webp → public/images/studio-wheel.webp（视频封面；alt 'A potter\'s wheel with a half-formed bowl under warm studio light'）；https://media.vibefather.ai/assets/508996cd-4e84-4ea9-b437-2504f297d847/mug-speckled.webp → public/images/mug-speckled.webp（产品 1；alt 'A speckled ceramic mug on a linen cloth'）；https://media.vibefather.ai/assets/508996cd-4e84-4ea9-b437-2504f297d847/vase-mini.webp → public/images/vase-mini.webp（产品 2；alt 'A small ash-glazed bud vase holding one dried stem'）；https://media.vibefather.ai/assets/508996cd-4e84-4ea9-b437-2504f297d847/studio-shelf.webp → public/images/studio-shelf.webp（仅桌面端：栏位后方一层 6% 不透明度的淡背景底色；alt 'Shelves of drying ceramics in soft light'）。共四个文件。https://media.vibefather.ai/assets/508996cd-4e84-4ea9-b437-2504f297d847/portrait-creator.webp → public/images/portrait-creator.webp（头像圆形；alt 'The creator, a fictional ceramicist'）。共五个文件。
- 图片（image）：在项目根目录写入 ASSETS.md，包含一张表格：路径、来源 URL、作者、许可证——每张照片一行（来源 'media.vibefather.ai, made for this template'，作者 'VibeFather'，许可证 'Distributed with the template'），另加 @fontsource/baloo-2 和 @fontsource-variable/figtree（OFL-1.1）以及 lucide-react（ISC）的行。绝不用图库网站替换照片，也不使用含人物、面孔、手或可辨识品牌标识的图片。
- 图标（icon）：仅使用 lucide-react：PlayCircle、ShoppingBag、Mail、MapPin、ArrowUpRight、Play、Check。描边宽度 2，18–24px，颜色继承。社交图标、头像字母组合圆环、在线状态点、播放徽章和邮件对勾均为绘制的 SVG——绝不使用真实平台标志，绝不使用照片头像。public/favicon.svg 手写：viewBox 0 0 32 32，一个 32x32 的 rect，rx 10，填充 #E2725B，一个 Paper（#FFFDF8）圆角链接字形（两个互锁的圆角括号）。无其他标志：创作者姓名始终以文字排版呈现。
- 字体（font）：安装 @fontsource/baloo-2 和 @fontsource-variable/figtree，并按 Setup 中所述在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片（image）：以代码绘制：头像字母组合与圆环、在线状态点、播放徽章与时长标签、四个社交图标、邮件对勾和 favicon。除四张照片外无其他位图；无插画；无地图瓦片。

## 禁止事项
- 无后端、无表单提交、不向任何 API 发起 fetch 请求：邮箱收集仅保存在 localStorage 中并明确说明这一点；所有链接和社交入口均为 '#' 占位符。
- 一切资源自托管：字体通过 Fontsource 引入，图标以 npm 包或内联 SVG 形式使用，图片下载至 public/images/。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具——页脚需对此作出说明。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/、使用单一命令 npm run build、输出位于 dist/ 且小于 5 MB。
- 不使用真实创作者、受众或产品；任何位置均不使用真实社交平台图标（仅使用绘制的通用字形）；不使用含面部或手部的照片；头像为绘制的字母组合图案，绝不使用面部。
- 不出现日期或年份；不出现粉丝数或订阅数，无论真实或暗示；网站绝不显示当天日期。
- 除页脚可选的署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 遵循 prefers-reduced-motion：无脉冲循环或交错动画；按压仅改变颜色；无动效时一切内容仍然可见。
- 页面必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零报错；移动端优先考虑拇指操作（所有点击目标 ≥52px、安全区内边距、无横向滚动）；每个交互元素均可仅用键盘操作，并有可见的焦点环。
- 文案保持具体：不使用 lorem，不使用 'link tree' 类服务名称；每个链接标题、价格和时长均存放于 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/link-in-bio-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
