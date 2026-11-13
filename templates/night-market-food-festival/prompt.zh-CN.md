> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 夜市美食节

完全按照下面的描述构建这个网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个单页网站，[BRAND] 是一个虚构的夜市美食节，举办地点为 [CITY] 的 [VENUE]，开放时间为 [HOURS]。品牌识别是霓虹之夜：深靛蓝底色，灯笼琥珀色作为主强调色，克制的霓虹粉点缀，奶油色字体，所有摄影图片统一采用一致的黄昏色调，CSS 发光效果仅用于强调词和激活状态。主视觉锚定在一张灯笼照亮的摊位照片上；其下方依次是：一个用代码绘制的可筛选摊主地图，涵盖八大菜系、十八个摊位和两个舞台；一份按工作日模式编排的双舞台时间表；一份门票与代币说明，包含三档通行证；一份在本地保存的摊主申请表；以及一份节日常见问题解答。

- 受众：计划在 [CITY] 夜晚外出觅食的本地人、挑选周末活动的家庭、申请摊位的食品摊主——以及正在改编此页面的市集组织者、餐车集会团队和文化节庆团队。
- 目标：让访客在一次滚动中从嘴馋到规划：用灯笼主视觉定下夜晚氛围，用地图及其菜系筛选回答“有什么、在哪里”，用时间表模式回答“什么时候”，用通行证和代币诚实地为这一晚定价，并给厨师们一份真实感十足、数据留在本地的申请表。
- 语调：温暖的夜出活力——像朋友在灯笼照亮的小巷里朝你招手。短句，诚实的演示说明明明白白放在眼前，发光效果像灯笼光，而不是夜店灯。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource-variable/bricolage-grotesque（OFL-1.1）、@fontsource/plus-jakarta-sans（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 设为 './'，build.outDir 设为 'dist'，build.sourcemap 设为 false。不使用路由、无后端、无服务端代码。
  - 安装 Tailwind CSS 3.4，并配置 PostCSS 和 Autoprefixer。用下方精确的调色板扩展主题，并设置 fontFamily.display 为 'Bricolage Grotesque Variable'、fontFamily.body 为 'Plus Jakarta Sans'；在 CSS 中为日程时间启用等宽数字（tabular numerals）。
  - 通过 @fontsource 包在 src/main.tsx 中导入，自托管 Bricolage Grotesque 可变字体（或 700/800 字重）和 Plus Jakarta Sans 400/500/600/700。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（useReducedMotion、AnimatePresence）实现摊位筛选、信息卡片和区块显现；所有动画都要以 useReducedMotion() 为条件。
  - 将所有文案和数据放在 src/content.ts 中：节日字符串、菜系列表、十八个摊位（名称、菜系、招牌菜、代币价格、摊位号）、两个舞台的日程区块、门票档位、代币规则、FAQ、申请表标签。当变量值变化时，在那里重写依赖的文案，并从 [BRAND_SLUG] 派生申请存储键。
  - 在代码中绘制市集地图，即 src/components/MarketMap.tsx：一个 900x520 viewBox 的 SVG，包含圆角不规则场地轮廓、发丝靛蓝色的通道路径、两个带标签的舞台区块（Lantern Stage 左上、Backyard Stage 右下）、沿三条通道布置的二十个摊位矩形，以及每个摊位一个编号圆形图钉，外加两个功能摊位（代币亭、急救站）。图钉从摊位记录渲染；不使用地图图片文件。
  - 将菜系筛选实现为 chip 状态：匹配的图钉保持完全不透明并带琥珀色光晕环，不匹配的图钉降至 25% 不透明度且无光晕，舞台区块和通道保持不变；点击图钉在桌面端于地图旁打开摊位卡片，在移动端以底部抽屉形式打开。
  - 将光晕实现为强调词上的 CSS text-shadow（琥珀色，两个柔和色标）以及仅活动 chip 上的 box-shadow——克制，默认从不做动画。
  - 将摊位申请持久化到 localStorage，键为 [BRAND_SLUG] + '-vendor-application'；验证恢复的 JSON 并静默恢复；绝不提交到任何地方。
  - 在构建前将六张生成的图片下载到 Assets 中列出的确切公共路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者或生成器以及许可证。
  - 仅使用这些 lucide-react 图标：MapPin、Ticket、Coins、Clock、Music2、ChevronDown、Check、X、ArrowRight、UtensilsCrossed、Sparkles。
  - 一个纯 <title> 为 '[BRAND] — [CITY]' 以及一个 favicon（一个靛蓝色圆角方块，带一个发光的琥珀色灯笼点）就足够了；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 市集名称（默认：“Lantern Row Night Market”）。虚构的市集名称；标志字标、主视觉文案、页脚和存储键均由此派生。
- [CITY] — 城市（默认：“Ashport”）。市集所在的城市；出现在主视觉标签、日程说明、FAQ 和页脚中。
- [VENUE] — 场地（默认：“the Old Cannery Yard”）。市集实体所在地的通俗表述；出现在主视觉标签、地图介绍和页脚中。
- [HOURS] — 营业时间模式（默认：“Fridays & Saturdays, 5 PM till late”）。以星期为模式的营业时间短语——绝不能是真实日历日期或年份。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/night-market-food-festival（默认：是；删除此行即可移除）

页面与区块下的文案按默认值撰写。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 靛蓝夜色（Indigo night）`#131233` — 页面底色
- 浮起靛蓝（Raised indigo）`#1B1A42` — 卡片、面板、地图底板、表单字段
- 灯笼琥珀（Lantern amber）`#FFB25E` — 工作强调色：CTA、激活标签、发光图钉、强调词
- 霓虹粉（Neon pink）`#FF5FA2` — 高亮强调色：徽章、链接、一个发光词、舞台标记
- 暖奶油（Warm cream）`#FFF4E2` — 靛蓝底色上的主文本
- 柔丁香（Soft lilac）`#AFA9D8` — 次要文本、元数据、非激活标签
- 细线靛蓝（Hairline indigo）`#2E2C5E` — 分隔线、卡片边框、泳道线

### 字体排印
- 展示字体：标题、区块标题、层级名称：Bricolage Grotesque Variable（OFL），字重 700/800
- 正文字体：段落、标签、日程、表单：Plus Jakarta Sans（OFL），字重 400/500/600/700

### 布局与动效
- 间距：8px 基础网格。外壳最大宽度 1120px，桌面端 32px、移动端 20px 侧边内边距。页头 72px。区块在桌面端 96px 垂直内边距，移动端 64px。地图标签以 12px 间隙换行；日程行 16px 垂直内边距；正文每行最多 62 个字符。
- 圆角：卡片、面板、照片和地图底板 16px；标签、按钮和徽章使用 999px 胶囊形；输入框和信息卡内部元素 12px。
- 动效：菜系筛选变化时，图钉状态在 240ms 内交叉淡入淡出：匹配项获得琥珀色发光环并一次性缩放至 1.05，非匹配项淡至 25% 不透明度；舞台和泳道从不移动。
- 动效：供应商信息卡在桌面端于地图旁滑入，历时 240ms；在移动端作为底部抽屉升起，历时 280ms；通过 X 关闭。
- 动效：日程行以 60ms 错峰显现；悬停某行时，在时间块下方滑入一条 2px 琥珀色下划线。
- 动效：首屏遮罩和标题在加载时以 80ms 错峰上升 16px；照片从 1.03 缩放稳定下来，历时 600ms。
- 动效：区块在滚动时一次性显现，上升 14px 并淡入，历时 420ms，错峰 60ms。
- 动效：在 prefers-reduced-motion 下，所有动画变为即时状态变化；图钉筛选和信息卡保持完全可用。
- 图像：六张来自同一场黄昏后市集拍摄的照片：深靛蓝天空、成串的暖琥珀色纸灯笼、失焦的霓虹光晕、灯笼光中飘动的蒸汽、35mm 镜头、柔和胶片颗粒、统一一致的黄昏色调，阴影浓郁、高光温暖。人物仅以远处的背影或剪影出现——没有可识别的面孔——且任何照片都不包含可读的招牌、文字或标志。

## 页面与区块
### [BRAND] — [CITY] 夜市（`index.html`）
1. **页眉与首屏** — 页眉（72px，85% 不透明度的抬升靛蓝（raised indigo）配背景模糊，底部细线边框）：一个代码绘制的标志图形——一盏小圆角矩形灯笼，内含琥珀色光点——旁边是 Bricolage Grotesque 800 字重的 [BRAND]；导航锚点 Map、Schedule、Tickets、Vendors；右对齐的琥珀色胶囊按钮 'Get tickets'。首屏：一张灯笼照明的摊位照片，从顶部按 16:9 裁切、满幅出血，左侧覆盖一层靛蓝到透明的渐变遮罩；一行玻璃质感标签——带 Clock 图标的 'Every [HOURS]'、带 MapPin 的 '[VENUE], [CITY]'；H1 'Follow the lanterns.'，其中 'lanterns' 一词带有克制的琥珀色 CSS 辉光；副标题行 'Eighteen food stalls, two stages, and one long lane strung with light — [CITY]'s night market for people who eat late.'；按钮：琥珀色实心 'Get night passes' 和奶油色描边 'Browse the vendor map'。按钮下方一行数据标签：'18 food stalls'、'8 cuisines'、'2 stages'。首屏顶部边缘横挂一串细长的装饰性代码绘制灯笼圆点。
   布局：文案位于 12 列网格中覆盖在照片上的左侧 7 列，在页眉下方垂直居中；数据标签以 12px 间距换行；按钮高 48px。移动端：照片填满视口高度减去页眉，文案堆叠，按钮全宽，每个点击目标至少 44px。
   动效：标题、标签行和按钮以 80ms 错峰上升 16px；照片从 1.03 缩放用 600ms 稳定下来；灯笼串以 6s ease 循环摆动 ±2 度，在减少动态效果下静止。
2. **摊主地图** — 眉题 'THE LANE' 为粉色；标题 'Find your flavor.'；引言 'Eighteen stalls around the yard at [VENUE] — filter by what you're craving, tap a pin for the dish.' 筛选标签：All、Taiwanese、Korean、Japanese、Vietnamese、Mexican、Turkish、Sweets、Vegan。代码绘制的地图：一个风格化的俯视庭院，Lantern Stage 在左上、Backyard Stage 在右下，三条摊位小巷，一个代币亭和急救点以朴素方式标出。十八位摊主及其摊位号、招牌菜和代币价格：Ah-Ma's Table — Taiwanese — pork belly bao — 2 tokens (B2)；Golden Cricket — Taiwanese — popcorn chicken — 1 (B5)；Two Suns BBQ — Korean — short-rib skewers — 3 (B8)；Haemill Kitchen — Korean — gochujang tteok — 2 (B11)；Ember Lane — Japanese — yakitori thigh — 2 (A3)；Shaved Moon — Japanese — matcha shaved ice — 1 (A7)；Lemongrass Cart — Vietnamese — bún bowls — 2 (A10)；Noodle & Nest — Vietnamese — pho cups — 2 (A14)；Comal Rojo — Mexican — blue-corn quesadillas — 2 (C4)；Siete Salsas — Mexican — tacos al pastor — 2 (C8)；Copper Kebab — Turkish — adana wraps — 3 (C12)；Pide Post — Turkish — flatbread boats — 2 (C15)；Sugar Lantern — Sweets — hot cinnamon donuts — 1 (A1)；Mochi Monthly — Sweets — toasted mochi — 1 (A18)；Green Griddle — Vegan — mushroom anticuchos — 2 (B14)；Tofu Tower — Vegan — loaded mapo fries — 2 (B17)；Nightcap Noodles — Taiwanese — midnight sesame noodles — 2 (B20)；Canela Churros — Sweets — churros con cajeta — 1 (C18)。点击图钉打开摊主卡片：名称、菜系标签、'Signature: {dish}'、'{n} tokens'、摊位号，以及粉色链接 'See the map legend'。
   布局：标签行在地图上方，可换行；地图 SVG 以 900x520 宽高比填满外壳，其底板为 16px 圆角的抬升靛蓝；摊主卡片在桌面端位于地图旁的 320px 列中，在移动端作为底部抽屉。不匹配的图钉淡化至 25% 不透明度；舞台区块保持全显。右下角一个小图例映射图钉颜色：琥珀色为活跃摊主，粉色为舞台，淡紫色为公用设施。
   动效：筛选变化时图钉状态以 240ms 交叉淡入淡出，匹配项一次性 1.05 缩放；摊主卡片滑入 240ms（桌面端）或上升 280ms（移动端）；图钉悬停放大 1.1 并带琥珀色辉光环。
3. **舞台时间表** — 眉题 'TWO STAGES'；标题 'The weekend, hour by hour.' 两张舞台卡片并排。Lantern Stage（Music2 图标）：'Fri 17:30 — Lantern lighting & welcome pours'；'Fri 19:00 — Warm Static (house DJ)'；'Fri 21:00 — [CITY] Brass Collective'；'Sat 18:00 — Dumpling speed-eating contest'；'Sat 20:00 — Neon karaoke hour'；'Sat 22:30 — Late set: The Moonworms'。Backyard Stage：'Fri 18:00 — Vinyl-only selector series'；'Fri 20:30 — Student jazz combos'；'Sat 17:30 — Kids' lantern parade'；'Sat 19:00 — Folk trio: Harrow & Reed'；'Sat 21:30 — DJ Cassetta'。脚注：'A typical weekend pattern, not a real calendar — this demo posts no dates.'
   布局：两张等宽卡片位于抬升靛蓝上（16px 圆角），每张有一个舞台标题行和时间行，时间行垂直内边距 16px，由细线分隔；时间使用表格数字，演出名称在破折号之后。低于 800px 时卡片堆叠。
   动效：行以 60ms 错峰显现；悬停时在时间下方滑入 2px 琥珀色下划线；无其他移动。
4. **市集瞬间条带** — 时间表与门票之间的四张照片条带：头顶的灯笼串、摊位烤架上冒烟的串、热气腾腾的面碗，以及从后方看到的拥挤小巷——每张 4:3、16px 圆角，除 alt 文本外无说明文字，将黄昏色调贯穿页面。
   布局：桌面端 4 列、16px 间距，移动端为水平滚动吸附行，卡片宽 78vw。
   动效：照片以标准上升效果显现；移动端条带以吸附点滚动，无自动播放。
5. **门票与代币** — 眉题 'AT THE GATE'；标题 'Passes, tokens, no mystery.' 三张档位卡片：'Night Pass — $12 — entry for one, all night.'；'Feast Pass — $35 — entry plus 10 tokens (best value).'；'Family Pack — $28 — two adults, two kids, 6 tokens.' 每张带一个琥珀色 'Get the pass' 演示锚点指向 '#tickets'，外加小字行 'Demo — passes aren't sold here.' 下方代币说明条带，三个步骤配 Coins 图标：'One token = $2.50 at the booth.'；'Dishes cost 1–3 tokens — each stall's price is on its pin.'；'Leftover tokens keep for the next market — in this demo, at least.'
   布局：3 张等宽卡片位于抬升靛蓝上，Feast Pass 带粉色 'BEST VALUE' 徽章并高出 8px；说明条带为 3 列，由细线分隔。移动端：卡片堆叠，说明行堆叠。
   动效：卡片以 60ms 错峰显现；徽章在显现后弹出；悬停时卡片上浮 4px，带柔和琥珀色边缘辉光（克制）。
6. **摊主申请** — 分栏区块。左侧：甜品摊照片，4:3。右侧：表单卡片，标题 'Cook with us.'，文案 'Stalls are 3×2 m, power on request, tokens-only sales. Tell us what you'd bring to the lane.' 字段：联系人姓名、商户名称、菜系选择（八种菜系加 'Other'）、招牌菜、邮箱、工作日标签 'Fridays / Saturdays / Both'，以及简短留言。本地验证——姓名、菜品和邮箱必填——提交后切换为成功面板：Check 图标、'Application saved in your browser — a live market would reply by email; this demo keeps it local.'，以及 'Start over' 链接。照片下方侧边要点：'We look for dishes that survive a queue.'；'One signature dish beats a long menu.'；'Tokens settle weekly — demo terms.'
   布局：5/7 分栏：照片列在左，表单卡片在右位于抬升靛蓝上（16px 圆角，12px 输入框）。错误以内联粉色显示在字段下方，绝不使用弹窗；成功面板为 aria-live='polite'。移动端：照片在前 4:3，然后是表单；标签以 44px 目标换行。
   动效：标签选中时弹至 1.06（180ms）；成功面板以 240ms 交叉淡入；无其他移动。
7. **FAQ 与页脚** — FAQ 'Before you come.' 为五个 details/summary 项：'Is it really outside?' — 'Yes — the whole lane is open air under awnings; the market runs rain or shine, and the lanes drain fast.'；'How do tokens work?' — 'Buy at the booth or with a Feast Pass — $2.50 each, dishes cost 1–3. Leftovers keep for next time in this demo's story.'；'Can I bring the kids?' — 'Please do — the Family Pack covers two little eaters, and the lantern parade is theirs on Saturdays.'；'Pets?' — 'Leashed dogs are welcome on the lane ends, not in the food rows — hot grills and curious noses don't mix.'；'Allergens?' — 'Ask at each stall; vendors cook their own food and we don't track ingredients centrally, so come ask rather than assume.' 页脚位于靛蓝夜色上，顶部细线规则：标志图形和 [BRAND]，行 '[VENUE], [CITY] · [HOURS]'，导航锚点（Map、Schedule、Tickets、Vendors），'A fictional night market built as a website template.'，'© [BRAND]' 不带年份，以及可选的 [CREDIT] 链接。
   布局：FAQ 单列最大宽度 760px，带细线分隔和旋转的 ChevronDown；页脚两行——品牌块在左，导航在右——移动端堆叠。
   动效：切换时 160ms 的箭头旋转，无可能裁切文字的高度动画；页脚静止。

## 资源

- 图片：主视觉照片。将 https://media.vibefather.ai/assets/c7bea4f5-3b6f-4c3d-8b07-8f9187be5d04/hero-market.webp 下载到 public/images/hero-market.webp。替代文本：'A lane of food stalls glowing under strings of paper lanterns at night.' 用作主视觉背后的全出血背景。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：灯笼细节。将 https://media.vibefather.ai/assets/c7bea4f5-3b6f-4c3d-8b07-8f9187be5d04/lantern-string.webp 下载到 public/images/lantern-string.webp。替代文本：'Strings of warm amber paper lanterns crossing the market lane overhead.' 市集瞬间横条中的第一张卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：摊位烤架。将 https://media.vibefather.ai/assets/c7bea4f5-3b6f-4c3d-8b07-8f9187be5d04/stall-grill.webp 下载到 public/images/stall-grill.webp。替代文本：'Skewers smoking on a market stall grill with a vendor's hands turning them.' 市集瞬间横条中的第二张卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：面碗。将 https://media.vibefather.ai/assets/c7bea4f5-3b6f-4c3d-8b07-8f9187be5d04/noodle-bowl.webp 下载到 public/images/noodle-bowl.webp。替代文本：'A steaming bowl of noodles on a stall counter with lantern light behind.' 市集瞬间横条中的第三张卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：人群巷道。将 https://media.vibefather.ai/assets/c7bea4f5-3b6f-4c3d-8b07-8f9187be5d04/crowd-lane.webp 下载到 public/images/crowd-lane.webp。替代文本：'Visitors strolling away from the camera down a lantern-lit market lane.' 市集瞬间横条中的第四张卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：甜品摊。将 https://media.vibefather.ai/assets/c7bea4f5-3b6f-4c3d-8b07-8f9187be5d04/dessert-stall.webp 下载到 public/images/dessert-stall.webp。替代文本：'A dessert stall counter with stacked sweets under a warm lantern glow.' 用于摊主申请表旁边。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：在代码中将整个摊主地图绘制为 SVG 组件（src/components/MarketMap.tsx）：场地轮廓、巷道、舞台区块、摊位矩形和编号图钉——不使用地图图片、瓦片或外部地图服务。
- 图标：安装 lucide-react（ISC），并且仅使用 MapPin、Ticket、Coins、Clock、Music2、ChevronDown、Check、X、ArrowRight、UtensilsCrossed 和 Sparkles。不要绘制任何品牌标志；灯笼标志是原创代码。请在 ASSETS.md 中记录该包和许可证。
- 字体：通过 @fontsource-variable/bricolage-grotesque（OFL-1.1）自托管 Bricolage Grotesque（可变字体或字重 700/800）。请在 ASSETS.md 中记录该包和许可证；不要使用字体 CDN。
- 字体：通过 @fontsource/plus-jakarta-sans（OFL-1.1）自托管 Plus Jakarta Sans 400/500/600/700。请在 ASSETS.md 中记录该包和许可证；不要使用字体 CDN。

## 禁止事项
- 不得使用真实的节庆、城市活动、摊主品牌、乐队或场地：市集、摊主、舞台、演出和价格均为虚构，页脚需对此作出说明。
- 照片中不得包含可辨认的面孔（仅限远景背影和剪影），不得出现可读的标牌、文字、字母或标志——画面中的每一块标牌都保持为不可读的光晕。
- 日程为按工作日模式编排的示例，仅使用 HH:MM 时间：绝不渲染真实日期、年份、倒计时或任何根据访客时钟计算的内容，页脚也不得出现版权年份。
- 门票和摊主申请表均为本地演示，并需对此作出说明：无支付、无结账、无表单提交、无电子邮件服务、无 API、无分析；持久化仅使用 localStorage，并在恢复时进行校验。
- 霓虹光晕为克制的 CSS 效果（强调文字使用 text-shadow，激活状态使用 box-shadow）——不得有光晕动画，不得对正文文字添加光晕，不得有频闪或闪烁效果。
- 摊主地图为代码绘制的 SVG——不得使用地图瓦片、外部地图服务或真实地图的截图。
- 不得有后端、服务器代码、数据库、认证或第三方脚本。通过单一构建命令输出到 dist/ 的静态产物，使用相对路径。
- 仅通过所列的 Fontsource 包自托管字体；绝不加载 Google Fonts、Adobe Fonts 或任何 CDN 样式表或脚本。
- 生产环境不得有 source map，不得将 src/ 复制到 dist/，dist/ 保持在 20 MB 以下，并保持 Vite 的 base 为相对路径。
- 不得使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件；仅使用六张生成的图片。
- 每个内部链接均为页内锚点或文件名，绝不为裸目录；单页必须在 1440×900 和 390×844 下渲染，且控制台零报错。
- 保持菜系筛选、图钉和摊主卡片完全可键盘操作：筛选标签为带 aria-pressed 的按钮，图钉可聚焦，信息卡片可通过 Escape 关闭。
- 遵循 prefers-reduced-motion：图钉淡入、卡片滑动和显现变为即时；灯笼串的摆动停止；所有交互保持可用。
- 所有文案保持美式英语，并从 [BRAND] 和 [BRAND_SLUG] 派生申请存储键，以便替换变量值后绝不残留默认品牌痕迹。
- 不做 SEO 工作：无 meta 描述、Open Graph 标签、JSON-LD、站点地图或堆砌关键词的标题。一个包含 [BRAND] 的普通标题和一个 favicon 即可。

---
— Prompt by VibeFather · https://vibefather.ai/t/night-market-food-festival · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
