> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 水族馆展区与门票网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简报
为一个虚构的城市水族馆制作单页网站：五个用颜色区分的区域，配手绘平面图；四张肖像卡片展示动物居民；一份每周喂食与讲解时间表；一个可本地保存的定时入场选择器；以及三个低调的会员等级——全部置于深午夜蓝的水面上，由缓慢漂移的 CSS 焦散光效照亮。

- 受众：计划半日游的家庭和学校团体、为喂食活动再度到访的会员，以及在出行前挑选时段的游客。
- 目标：引导访客从惊叹走向选定时段：浏览区域与动物，查看喂食时间表，保存定时入场选择，并考虑会员。
- 语调：安静而精确，如同跟随一位优秀向导进行夜潜：句子简短，动物与深度具体，不搞自然纪录片式的浮夸。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource/outfit（MIT）、@fontsource/inter（MIT）、@fontsource/ibm-plex-mono（MIT）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 配置：
  - vite.config.ts：base './'，build.sourcemap false，src/ 中的任何内容都不会被复制到 dist/。
  - tailwind.config.js：扩展颜色 abyss #041220、deep #0B2740、line #16405E、foam #E8F4F8、mist #9DB9C9、glow #5FE9D6、reef #FF9A62、kelp #A8D46F、twilight #7C8CFF、shore #F2C14E；fontFamily display 'Outfit'、body 'Inter'、mono 'IBM Plex Mono'。
  - 所有文案、区域、居民、日程、票务和会员数据都以类型化对象的形式存放在 src/content.ts 中；组件从不硬编码文案，替换这些值后可干净地重新构建。
  - 焦散（Caustics）：src/components/Caustics.tsx 渲染两个绝对定位的全尺寸图层（一个内联 SVG feTurbulence 斑块图案和一个重复的 radial-gradient 网格），mix-blend-mode 为 screen，opacity 为 0.16，通过 src/index.css 中的 CSS keyframes 漂移（drift-a 90s，drift-b 70s reverse；translate ±4% 和 rotate ±2deg 循环）。一个实例叠加在 hero 上，第二个叠加在 Visit 图像带上，opacity 为 0.10。
  - 票务选择器持久化到 localStorage，键为 [BRAND_SLUG]-visit，其中 [BRAND_SLUG] 是 [BRAND] 转为小写并用连字符连接。

## 变量
- [BRAND] — 水族馆名称（默认：“Lumen Bay Aquarium”）。用于字标、主视觉、页脚，以及通过 [BRAND_SLUG] 生成的 localStorage 键。
- [CITY] — 城市／港口（默认：“Port Meridian”）。用于主视觉眉题、地址和路线指引文案。
- [HERO_ANIMAL] — 主视觉明星动物（默认：“Aurelia, the moon jelly”）。主视觉标题中的明星；主视觉肖像展示它。
- [TICKET_PRICE] — 成人票（默认：“$24”）。选择器和总计行使用的成人分时段入场价格。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/aquarium-exhibits-and-tickets-website（默认：是；删除此行即可移除）

页面与区块下的文案按默认值撰写。如果你的取值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- abyss `#041220` — 页面底色，午夜藏青色水体
- deep `#0B2740` — 卡片、选择器面板、说明文字底板
- line `#16405E` — 细线、卡片边框、页眉分隔线
- foam `#E8F4F8` — 主文本和标题
- mist `#9DB9C9` — 弱化文本、说明文字、脚注
- glow `#5FE9D6` — 生物发光青色强调色：链接、标签、时段状态、焦点环
- zone hues `#FF9A62 #5FE9D6 #A8D46F #7C8CFF #F2C14E` — 仅用于区域标记：礁区 / 花园 / 海藻林 / 暮光区 / 海岸，用作 3px 卡片边框、圆点和 8-22% 的地图填充

### 字体排印（Typography）
- 展示 / 标题：Outfit（OFL），字重 300/600
- 正文：Inter（OFL），字重 400/500
- 等宽 / 时间、深度、标签、说明文字：IBM Plex Mono（OFL），字重 400/500

### 布局与动效（Layout & motion）
- 间距：区块内边距桌面端 py-24 / 移动端 py-16；容器 max-w-[1160px] px-6；卡片 p-6 至 p-8；首屏 min-h-[92vh]；垂直节奏以 8px 的倍数计。
- 圆角：卡片和肖像框 rounded-2xl（16px）；日期标签和时段按钮 rounded-full；步进器输入框 rounded-[10px]。
- 动效：焦散层持续且非常缓慢地漂移（90s 和 70s 循环，方向相反，translate ±4%，rotate ±2deg）；它们从不脉动、频闪或超过 0.16 的不透明度。
- 动效：首屏肖像在其焦散层下方以 9s ease-in-out 循环浮动 ±6px。
- 动效：滚动显现：区块在 500ms 内上浮 24px 淡入，同级元素之间错开 60ms（Motion whileInView，once）。
- 动效：日期筛选和时段点击以 200ms 交叉淡入列表；所有按钮按下时缩放至 0.96。
- 动效：prefers-reduced-motion：焦散和浮动停止在静态渐变上，显现立即出现，点击状态保留。
- 图像：来自黑暗水箱内部的水下摄影：每帧一个主体，由上方单一聚光灯照亮，深藏青色水体，微弱青色轮廓光，漂浮颗粒，动物被当作肖像处理。无人物、无潜水员、无手部、无可读标牌、无标识。六张生成图像（见 assets）；不使用图库照片。

## 页面与区块
### [BRAND] — [CITY] 水族馆（`index.html`）
1. **站点页眉** — 粘性页眉，72px，背景 rgba(4,18,32,0.72) 带背景模糊（backdrop-blur），底部有一条细线（hairline）与整体风格一致。左侧：字标 [BRAND]，Outfit 600，18px，宽字距（tracking-wide），泡沫色（foam）。中间导航：Exhibits、Animals、Schedule、Tickets、Membership — Inter 500 14px，雾色（mist），悬停时变为泡沫色并带 2px 发光下划线。右侧：胶囊 CTA 'Timed tickets'（发光文字、深色填充、1px 发光边框）→ #tickets。移动端：导航折叠在 lucide 菜单按钮之后，点击打开全宽抽屉，相同链接纵向堆叠。
   布局：内部容器 max-w-[1160px]；页眉覆盖在首屏之上，滚动前透明。
   动效：滚动 80px 后页眉获得底色和细线（300ms）；抽屉下滑 250ms。
2. **首屏 — 聚光灯下** — 双栏首屏。左侧：眉题（eyebrow）使用等宽字体（mono）12px 发光色，大写：'CITY AQUARIUM · [CITY] HARBOR'；H1 使用 Outfit 300，字号 clamp(48px, 7vw, 84px)，泡沫色：'Meet [HERO_ANIMAL].'，动物名称使用发光色；段落，雾色，max-w-[46ch]：'Forty-one tanks across five zones, lit like a night dive. Pick a time slot, walk slow, and stay until the jellies turn with the current.' CTA：主胶囊按钮 'Choose a time' → #tickets（发光填充、深渊色（abyss）文字），幽灵胶囊按钮 'Today's feedings' → #schedule。右侧：首屏肖像 public/images/hero-moon-jelly.webp（3:4），置于 rounded-2xl 框架内，带 1px 细线边框，alt 'A moon jellyfish drifting through a spotlight beam in dark blue water'；说明牌绝对定位在框架内左下角，等宽字体 11px 泡沫色，背景深色/85：'ZONE 2 · DRIFTING GARDENS'。
   布局：lg:grid-cols-[55%_45%]，items-center，min-h-[92vh]，px-6；肖像高度 clamp(420px, 70vh, 640px)，object-cover；移动端肖像位于文字下方，4:5 裁剪。
   动效：标题行淡入上移 500ms，错开 90ms；肖像从 1.04 缩放至 1 并稳定；Caustics 组件以 0.16 的不透明度覆盖整个首屏；肖像以 9s 循环浮动 ±6px（减少动态效果（reduced motion）下暂停）。
3. **区域 — 五个区域，一次缓慢穿越** — 引导语，雾色：'Every visit is one loop: shallow light to twilight and back.' 左侧栏：SVG 平面图 — 圆角轮廓平面图，含五个编号区块（1 Shallow Reef 左上，2 Drifting Gardens 右上，3 Kelp Cathedral 中部，4 Twilight Depths 左下，5 Shore Pools 右下，入口箭头在底部），描边线条，填充为各区域色相的 8%，等宽数字；点击区块平滑滚动至对应卡片。右侧：五张堆叠区域卡片，每张顶部有 3px 边框，颜色为区域色相，区域编号为等宽发光色，名称为 Outfit 600 24px 泡沫色，深度标签为等宽 12px 雾色，一句话描述为 Inter 14px 雾色：1 · Shallow Reef — 2 m — reef — 'Coral heads, damselfish, and the first warm light.' 2 · Drifting Gardens — 4 m — glow — 'Moon jellies in a slow turning current.' 3 · Kelp Cathedral — 6 m — kelp — 'Forty-foot stalks that sway on a ten-second beat.' 4 · Twilight Depths — 9 m — twilight — 'Sharks, groupers, and the last blue of the light.' 5 · Shore Pools — 0 m — shore — 'Tidepools you can lean over; sleeves roll up.'
   布局：lg:grid-cols-[320px_1fr] gap-10；地图 sticky top-28；卡片 p-6，深色背景，1px 细线边框，16px 间距。
   动效：每张卡片滚动时淡入上移（500ms）；当卡片穿过视口中线时，其地图区块填充至该色相的 22%，持续 400ms。
4. **居民 — 居民们** — 四张聚焦卡片。卡片结构：图片（h-56 object-cover rounded-xl），名称为 Outfit 600 22px 泡沫色，物种行为等宽 12px 雾色，趣闻 14px 雾色，以及一个 'meet-at' 胶囊标签，带 1px 区域色相边框和等宽 12px 文字。数据来自 content.ts：Old Halimeda — green sea turtle — 'Arrived in a transport-tank mishap; now patrols the kelp each morning at a turtle's pace.' — 标签 'FEEDS 10:00 · ZONE 3'（kelp）— public/images/turtle-portrait.webp，alt 'A green sea turtle gliding through a spotlight beam'。Octavia — giant Pacific octopus — 'Opens jar lids in under a minute and remembers which keeper hides the crab.' — 标签 'ENRICHMENT 14:30 · ZONE 4'（twilight）— public/images/octopus-rock.webp，alt 'A red-brown octopus draped over dark rock, one arm raised'。The Cobalt Pair — lined seahorses — 'Trade anchoring spots each dawn like two neighbors trading chairs.' — 标签 'LIVE FEED 11:15 · ZONE 2'（glow）— public/images/seahorse-pair.webp，alt 'Two lined seahorses curled around one kelp frond'。Ember — lionfish — 'Fans her banded spines when the lights dim; eats only what she hunts.' — 标签 'KEEPER TALK 15:00 · ZONE 1'（reef）— public/images/lionfish.webp，alt 'A lionfish hovering above reef rock with spines fanned wide'。
   布局：grid md:grid-cols-2 gap-6；卡片 p-6，深色背景，1px 细线边框，rounded-2xl。
   动效：卡片淡入上移，错开 80ms；标签边框悬停时变亮；图片本身静止。
5. **日程 — 喂食与讲解** — 日期筛选：七个胶囊标签 MON–SUN，等宽 12px（默认 SAT 激活）。下方为 content.ts 中当前日期的列表 — 工作日模式（Mon–Fri）：10:00 Turtle breakfast · Zone 3；11:15 Seahorse live feed · Zone 2；14:30 Octopus enrichment · Zone 4；15:00 Lionfish keeper talk · Zone 1。周末模式（Sat–Sun）增加 16:00 Twilight walk · Zone 4 和 17:30 Jelly turn · Zone 2。行结构：时间等宽 14px 发光色，标题 Inter 500 泡沫色，区域标签（6px 圆点，区域色相，加等宽 12px 雾色）。脚注 12px 雾色：'Sample week — a planning pattern, not a live calendar.'
   布局：标签行自动换行；列表单列 max-w-3xl，细线分隔，颜色为 line。
   动效：切换日期时列表交叉淡入淡出（200ms）；激活标签填充 glow/10，文字为发光色。
6. **定时入场 — 门票选择器** — 两栏。左侧文案：H2 Outfit 300 'Timed entry, calm water'；段落雾色：'We admit a small crowd every ninety minutes. Pick a day and a slot below — the pick saves on this device. It is a sample planner: nothing is charged and nothing is reserved.' 步进器：Adult [TICKET_PRICE]，Youth $12，Senior $16 — 减/加按钮带等宽计数。右侧选择器卡片，深色背景，1px 细线边框：'DAY' 行 MON–SUN 标签；'SLOT' 行四个时段按钮 — 09:30 AVAILABLE（发光边框），11:00 FEW LEFT（shore 边框，'FEW LEFT' 副标签），13:30 禁用（'SOLD OUT'，mist/40），15:15 AVAILABLE；总计行等宽 'TOTAL $48'（默认值：两位成人）；主按钮 'Save my visit'（发光填充、深渊色文字）。保存后，内联面板滑入，带 lucide 对勾：'Saved to this device. Sample picker — no payment taken, nothing reserved. See you at the wharf.' 状态持久化在 [BRAND_SLUG]-visit 下，加载时重新水合。
   布局：lg:grid-cols-2 gap-10；选择器卡片 p-8 rounded-2xl；步进器在左栏；确认面板替换按钮行。
   动效：时段和步进器按下缩放至 0.96；确认面板淡入并放大 250ms。
7. **会员 — 随潮汐再来** — H2 下方一行，雾色：'Quiet tiers; no badges, nothing on your lanyard.' 三张卡片，1px 细线边框，透明背景（无发光）：Tidepool $60 / year — 'Unlimited timed entry · Member hour before opening on Mondays · 10% off the café.'；Reef Line $120 / year，标记 'MOST CHOSEN'，等宽 11px 发光色 — 'Everything in Tidepool · Two guest passes a season · Reserved seats at weekend feedings.'；Deep Range $240 / year — 'Everything in Reef Line · Behind-the-scenes tour for four · Adopt-a-tank update card.'
   布局：grid md:grid-cols-3 gap-6；中间卡片在深色填充上高出 4px；价格使用 Outfit 300 40px 泡沫色。
   动效：卡片淡入上移，错开 80ms；其他无动效。
8. **参观与页脚** — 参观横幅：全出血 16:9 图片 public/images/kelp-cathedral.webp（h-[320px] object-cover，带 abyss/40 叠加层），alt 'Kelp stalks fading into dark water with shafts of light'。下方，深色背景三栏：FIND US — '12 Anchorline Wharf, [CITY] Harbor' 和 'Harbor tram 6 to Wharf stop, four minutes on foot.'；HOURS — 等宽 13px 表格：Mon 10:00–17:00，Tue–Thu 10:00–18:00，Fri 10:00–20:00，Sat–Sun 09:00–19:00，备注 'Last timed slot 90 minutes before close.'；CAFÉ — 'Second-floor counter over the kelp: chowder, brown bread, no straws.' 页脚：字标、导航重复、小字 12px 雾色：'Zones, residents and feeding times shown are invented sample content.' 加上 [CREDIT]。
   布局：图片横幅全宽；栏 grid md:grid-cols-3 gap-10 p-10，深色背景；页脚 py-10，顶部细线。
   动效：横幅淡入，其上叠加第二个 Caustics 实例，不透明度 0.10；各栏淡入上移，错开。

## 资产
- 图片：六张生成的水下照片，下载到 public/images/ 中，且不在其他地方使用：hero-moon-jelly.webp（3:4，主视觉竖图）、turtle-portrait.webp（4:3）、octopus-rock.webp（1:1）、seahorse-pair.webp（1:1）、lionfish.webp（1:1）——这四张用于常驻卡片——以及 kelp-cathedral.webp（16:9，参观横幅）。每张均从 https://media.vibefather.ai/assets/da51006a-5ff5-4d15-9f70-b2d879c35658/<file> 下载。每张的替代文本已写在上方各区块文案中。在 ASSETS.md 中注明：'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.'
- 图标：lucide-react npm 包（ISC）：menu、x、ticket、clock、waves、fish、check、minus、plus、mapPin。不使用其他图标集，任何地方都不使用品牌标志。
- 字体：Fontsource 包（MIT）：@fontsource/outfit 字重 300 和 600；@fontsource/inter 400 和 500；@fontsource/ibm-plex-mono 400 和 500。在 main.tsx 中导入；任何地方都不使用字体 CDN 链接。

## 禁止事项
- 无后端：不包含服务器代码、API 路由、数据库、认证或任何会提交到某处的表单。选票器（ticket picker）是一个仅保存到 localStorage 的本地示例，其确认状态会明确说明未收取任何付款、也未预留任何内容。
- 不出现真实的水族馆、动物园或保护组织：场馆、区域、动物、员工和地址均为虚构；不得暗示任何官方合作或认证。
- 喂食时间、开放时间和时段可用性均为示例性的工作日模式，必须始终标注为示例（'Sample week — a planning pattern, not a live calendar'）；不得根据真实时钟计算任何日期或时间，不得使用基于 JavaScript Date 的逻辑。
- 照片仅展示水生动物和水箱：不得出现可识别的人物或面孔，不得出现潜水员、手部、可读的标牌，图像中不得出现标识。
- 不得包含任何形式的票务、支付或会员结账流程；会员卡仅为信息展示。
- 一切资源自托管：字体通过 Fontsource 引入，图片下载到项目中，不使用 CDN 脚本或链接标签，不使用 Google Fonts，不使用分析工具。
- Vite base 设为 './'，使用相对资源路径；内部链接指向 index.html 上的锚点或真实文件名，绝不指向裸目录。
- 生产构建需压缩，不生成 source map；dist/ 小于 20 MB。
- prefers-reduced-motion：停止焦散漂移（caustic drift）、肖像浮动（portrait float）和滚动显现（scroll reveals）（立即显示内容）；保留点击状态。
- 保持光线缓慢且低对比度：不得出现频闪、脉冲或大幅不透明度波动；一个青色强调色加五个区域色相，仅用作细线标记。
- 不做 SEO 工作：一个包含 [BRAND] 的普通 <title> 和一个 favicon 即可；不添加 meta 描述、Open Graph 标签、JSON-LD 或站点地图。
- 不得从任何参考网站复制代码、文案、图像或字体；模板名称、slug、文案或 alt 文本中不得出现品牌名称。

---
— Prompt by VibeFather · https://vibefather.ai/t/aquarium-exhibits-and-tickets-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
