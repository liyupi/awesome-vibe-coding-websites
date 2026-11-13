> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 电动汽车充电网络网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个电动汽车充电网络的单页营销网站，所有视觉效果均用 SVG/CSS 绘制：首屏以一张风格化的城市地图为核心，地图上有脉动的站点圆点，并配有实时筛选器（速度、连接器类型、可用性），筛选后会重新点亮地图；一条等宽字体的数据条；按 kWh 计费的价格展示，包含昼夜费率条和资费表；一个 CSS 手机模型应用预览，带填充式电池环；一个车队区块；以及一个客户端托管的“成为充电桩主”表单。

- 受众：电动汽车充电网络和能源初创公司、电动出行与基础设施产品，以及为它们服务的设计工作室。
- 目标：先展示网络如何运作，再提出任何请求：让访客把玩地图和筛选器，十秒内理解定价，信任应用流程，然后完成转化——司机转向应用推介，企业转向车队联系，业主转向托管表单。
- 语气：技术化、冷静、精确——短句、真实数字、等宽字体标签；传递基础设施的自信，而非初创公司的炒作。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/space-grotesk（OFL）、@fontsource/jetbrains-mono（OFL）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - 使用 npm create vite@latest ev-charging-network-website -- --template react-ts 搭建脚手架；将 tailwindcss@3.4、postcss 和 autoprefixer 添加为开发依赖；将 motion、lucide-react、@fontsource/space-grotesk 和 @fontsource/jetbrains-mono 添加为依赖。
  - vite.config.ts：base './'，build.sourcemap false，构建输出 dist/。
  - tailwind.config.js：扩展颜色 graphite #101214、raised #17191D、gridline #24282D、volt #3CE97E、voltdeep #17603A、cloud #E8ECEF、steel #8A939B、amber #E0A63F；fontFamily display 'Space Grotesk' 和 mono 'JetBrains Mono'；圆角比例精简为 sm 4px 和 DEFAULT 8px。
  - postcss.config.js：tailwindcss + autoprefixer。
  - src/components/CityMap.tsx：风格化的虚构城市——单个 SVG，viewBox 0 0 800 600：垂直街道线每 100px 一条，水平线每 75px 一条（stroke gridline，1px），两条对角大道，一条河流路径（stroke raised，10px，从右上到左下弯曲）；站点从 content.ts 中的固定示例数组渲染（14 个条目：id、x、y、name、speed 'standard'|'fast'|'rapid'、connector 'ccs'|'type2'、state 'available'|'busy'|'offline'）；每个点是一个 5px 的圆（available 为 volt，busy 为 amber，offline 为 steel），带有一个动画脉冲环（SVG 圆 r 5→16，opacity 0.6→0，2.4s，延迟为索引×170ms）。
  - src/components/BatteryRing.tsx：一个 120px 的 SVG 环（stroke volt，8px，轨道为 gridline），其 stroke-dasharray 在 1.8s 内从 0→68% 动画，使用 Motion 的 whileInView 仅触发一次。
  - src/index.css 中的细线网格纹理工具类：.bg-grid —— 在 graphite 底色上以 45% 不透明度每 48px 重复 1px gridline 的 repeating-linear-gradient —— 应用于地图面板和应用区块背景。
  - src/lib/motion.ts：共享变体——reveal（opacity 0→1，y 18→0，500ms ease-out，70ms 交错，whileInView 仅一次）——配合 useReducedMotion 回退为普通的 200ms 不透明度淡入且无脉冲。
  - 将所有面向用户的字符串和所有示例数据（品牌、城市、费率行、站点数组、统计数据、车队卡片、托管文案、电子邮件）保留在 src/content.ts 中；各区块从中读取，以便在一处替换值。
  - index.html：<title>[BRAND] — EV Charging in [CITY]</title> 加上一个用代码绘制的 favicon.svg（graphite 底色上的 volt 绿色闪电）；无其他 meta 工作。

## 变量
- [BRAND] — 网络名称（默认：“Ampline”）。用于字标、站点 ID（AM-101…）、资费和联系邮箱（来自 content.ts）的虚构网络名称。
- [CITY] — 城市名称（默认：“Norhaven”）。演示地图和文案所描述的虚构地铁（'the [CITY] grid'、'[STATIONS] stations across [CITY]'）。
- [RATE] — 头条费率（默认：“$0.34 / kWh”）。日间按需付费费率——主视觉定价锚点、日/夜条形图标签和资费表；单位随产品而定（content.ts 会为按分钟计费的产品重写文案）。
- [STATIONS] — 站点数量（默认：“412”）。统计条和主视觉标签中的全网样本数量；地图本身始终显示 14 个样本点。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/ev-charging-network-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 石墨色（Graphite）`#101214` — 所有页面的背景底色 — 深蓝石墨色，绝不使用纯 #000。
- 浮起色（Raised）`#17191D` — 地图面板底色、手机模型、表单面板、地图中的河流。
- 网格线（Grid line）`#24282D` — 街道线、细线、边框、背景网格纹理、环形轨道。
- 伏特绿（Volt）`#3CE97E` — 唯一的电光绿：可用站点、脉冲环、CTA、激活的筛选标签、电池环、价格强调。
- 深伏特绿（Volt deep）`#17603A` — 伏特绿上的按下态和填充态：标签填充、日费率条块、悬停边框。
- 云白（Cloud）`#E8ECEF` — 主文本 — 冷调米白，用于标题和正文。
- 钢灰（Steel）`#8A939B` — 次要文本、元信息行、离线站点、等宽字体说明文字。
- 琥珀色（Amber）`#E0A63F` — 严格用于功能：繁忙站点和夜间费率块 — 绝不用于装饰。

### 字体排印
- 展示与正文 — 标题、项目符号、表单标签（技术感 grotesque 字体）：Space Grotesk（OFL），字重 500/700
- 等宽 — 站点读数、筛选标签、统计数据、价格、区块标签（大写，字距 0.12em）：JetBrains Mono（OFL），字重 400/500/700

### 布局与动效
- 间距：紧凑且工程化：区块桌面端 py-24（96px）/ 移动端 py-16（64px）；内容 max-w-6xl px-6/px-10；面板内边距 24px，配 1px 网格线细线；地图面板是唯一全高元素。
- 圆角：小而技术化：标签、输入框和按钮 4px，面板和手机模型 8px；不用胶囊形，不用大圆角。
- 动效：地图脉冲：每个可用站点的环从 r 5→16 扩展，透明度 0.6→0，历时 2.4s，按 index×170ms 错开 — 城市感觉在供电，而非繁忙。
- 动效：筛选重新点亮：更改任一筛选标签时，匹配的圆点过渡到全伏特绿并带脉冲，不匹配的圆点过渡到 15% 透明度并停止脉冲（300ms）；图例中的计数同步更新。
- 动效：圆点悬停：站点缩放至 1.3（150ms），其等宽提示卡在上方淡入；移开时淡出（120ms）。
- 动效：电池环：当应用区块进入视口时，stroke-dasharray 从 0→68% 以 1.8s ease-out 动画一次；kWh 计数器同步递增。
- 动效：揭示：区块和卡片淡入上移（y 18→0，500ms ease-out），通过 Motion 的 whileInView 以 70ms 错开，仅一次。
- 动效：筛选和表单标签切换为伏特绿底色配石墨色文字（200ms）；主机表单步进器带小幅 y 轴弹跳。
- 动效：prefers-reduced-motion：所有脉冲和环形动画关闭（环形立即渲染为 68%），揭示变为普通 200ms 透明度淡入，提示卡无动效出现。
- 图像：零摄影 — 一切都在石墨色底上以代码绘制：风格化城市地图（细街道网格、河流、脉冲站点星座）是主视觉锚点；应用预览是 CSS 手机模型；费率条和电池环是 SVG。细线网格纹理衬托面板。唯一的图像是网络本身，以一种电光绿点亮。

## 页面与区块
### [BRAND] — [CITY] 的电动汽车充电（`index.html`）
1. **页头（Header）** — 固定顶栏，64px，石墨色（graphite）底，底部有 1px 网格线细线。左侧：[BRAND] 字标，Space Grotesk 700 20px 云白（cloud），前面有一个小的 lucide zap 图标，电压色（volt）。右侧（桌面端）：锚点链接 'Map'、'Pricing'、'App'、'Fleet'、'Host'，JetBrains Mono 13px 钢灰（steel）→ 悬停时变为云白；然后是 CTA 'Get the app'（电压色底，石墨色文字，4px 圆角）→ #app。移动端：字标 + CTA + lucide menu/x 切换按钮，打开一个抬升面板，五个链接以等宽字体纵向堆叠。
   布局：position fixed，z-40，在背后的主视觉地图上做背景模糊。
   动效：移动端面板下滑 250ms；链接悬停从钢灰 → 云白（150ms）；zap 图标从不做动画。
2. **主视觉 — 实时站点地图** — 左侧区块：电压色等宽标签，带字距：'[STATIONS] STATIONS · [CITY] GRID · SAMPLE DATA'；标题 Space Grotesk 700，clamp(2.75rem, 6vw, 4.75rem)，云白：'The city, charged.' 副标题，Space Grotesk 400 17px 钢灰，max-w 44ch：'Find a fast charger on the way, not across town. Filter by speed, connector and availability — this demo map runs on invented sample data.' 两个 CTA：'See pricing'（电压色底）→ #pricing；'Host a charger'（描边，网格线边框）→ #host。右侧：地图面板 — CityMap.tsx，位于抬升底色上，带 .bg-grid 纹理，8px 圆角，1px 网格线边框，填满区块高度（桌面端最小 560px / 移动端 420px）。停靠在面板底部的一条抬升条带上：三组等宽 12px 筛选器 — SPEED [All / Standard 22 / Fast 50 / Rapid 150]、CONNECTOR [All / CCS / Type 2]、AVAILABILITY [All / Available now]；激活的标签为电压色底、石墨色文字。图例位于右下角，等宽 11px 钢灰：'● AVAILABLE ● BUSY ● OFFLINE — SAMPLE DATA'。悬停任意圆点会打开等宽提示框：'AM-117 · OLD MILL RD' / 'RAPID 150 KW · CCS' / '● AVAILABLE — SAMPLE'。
   布局：12 列网格，min-h 92vh：文字列 1–5（self-center），地图面板列 6–12（self-stretch）。移动端：地图在前（420px），文字在下；筛选标签横向滚动。
   动效：圆点加载时脉冲，错峰；筛选变化时地图在 300ms 内重新点亮；圆点悬停缩放 1.3，提示框淡入；减少动效：静态圆点，筛选即时生效。
3. **网络条带** — 单行，顶部细线，四个等宽统计，13px，云白数值配钢灰标签，以 1px 网格线分隔：'[STATIONS] / STATIONS ACROSS THE METRO' · '150 KW / MAX RATE ON RAPID BAYS' · 'CCS + TYPE 2 / CONNECTORS AT EVERY SITE' · '24/7 / PHONE SUPPORT FOR EVERY SESSION'。下方，等宽 11px 钢灰右对齐：'DEMO NETWORK — EVERY NUMBER IS SAMPLE DATA'。
   布局：max-w-6xl，4 个等宽单元格，带网格线分隔（移动端堆叠为 2×2）。
   动效：单元格错峰 70ms 淡入上移；无计数器。
4. **定价（Pricing）** — id=pricing。等宽标签 'PRICING'；标题：'One price, posted on the pylon.' 用 CSS 绘制的 24 小时费率条：一条全宽 56px 的条，其中 07:00–22:00 为 voltdeep（标注 '[RATE]'，等宽云白），22:00–07:00 为琥珀色（amber）（标注 '$0.21 / kWh'），下方有 00/06/12/18/24 的小时刻度，等宽 11px 钢灰。其下是一个三行资费表，带网格线分隔（等宽）：'PAY-AS-YOU-GO — [RATE] day · $0.21 night · no membership, tap to charge' / '[BRAND] PLUS — $7.99 / MO · $0.29 day · $0.17 night · lower rates across the metro' / 'FLEET & BUSINESS — CUSTOM · depot and corridor rates · per-kWh invoicing → link to #fleet'。脚注等宽 11px 钢灰：'Sample rates for the demo — real tariffs vary by site.'
   布局：费率条占满内容宽度；表格行作为 3 列 CSS 网格（档位 / 费率 / 备注），带 1px 网格线行分隔；移动端将备注堆叠在每个档位下方。
   动效：日间区块在出现时从左到右填充一次（600ms）；行错峰 70ms 淡入上移。
5. **应用预览（App preview）** — id=app。左侧文案：等宽标签 'THE APP'；标题：'Four taps, no fumbling.' 项目符号（Space Grotesk 16px，每个带一个电压色 lucide 图标）：'Find — filter by speed and connector'（search）、'Plug — the handle talks to the app'（plug-zap）、'Charge — watch it fill'（battery-charging）、'Pay — one tap, one receipt'（check）。右侧：一个 CSS 手机模型，位于抬升面板上，带 .bg-grid 纹理 — 280×580px，8px 圆角，1px 网格线边框，一个简单的刘海；屏幕以等宽字体显示一张会话卡片：顶部 'AM-117 · OLD MILL RD'，中央 BatteryRing 显示 68%，旁边 '31.4 kWh'，下方 'SESSION 24 MIN' 和 '$10.68 SO FAR' 为云白，以及一个假的暂停条（网格线填充，电压色填充 68%）。
   布局：12 列网格：文案列 1–5，手机列 8–11（旋转 -3deg，24px 投影，纯 #000 40%）。移动端：手机在前，居中，640px 以下不旋转。
   动效：圆环在出现时从 0→68% 动画一次（1.8s），kWh 计数器同步跳动；手机在悬停时从 -3deg 回正到 0（300ms）；减少动效：圆环直接渲染完整，无计数器。
6. **车队与业务（Fleet and business）** — id=fleet。等宽标签 'FLEET'；标题：'Vans charge on schedule.' 引言钢灰：'Depot charging overnight, rapid bays on the corridors your routes actually use, and one invoice per month.' 三张细线卡片：'Overnight depots'（lucide warehouse）— '22 kW banks sized to your fleet and your off-peak window.' / 'Corridor planning'（route）— 'We model your routes and place rapid bays where the vans empty.' / 'One invoice'（receipt）— 'Per-kWh reporting per vehicle, exported monthly.' CTA 行：'Talk to the fleet desk — fleet@ampline.co'（电压色等宽链接，来自 content.ts）。
   布局：3 列卡片网格，1px 网格线边框，24px 内边距，4px 圆角；移动端堆叠。
   动效：卡片错峰 100ms 淡入上移；悬停时边框变为 voltdeep（200ms）；图标从不做动画。
7. **托管充电桩（Host a charger）** — id=host。等宽标签 'HOST'；标题：'Turn a parking spot into a station.' 左侧，等宽清单（lucide check 为电压色）：'We supply and install the hardware' / 'You keep the spot; we keep it working' / '70% of session revenue, paid monthly — sample terms'。右侧，表单位于抬升面板上（标签 Space Grotesk 600 13px 云白；输入框石墨色底，网格线边框，4px 圆角）：姓名；邮箱；物业标签（'Home driveway' / 'Shop lot' / 'Office park'，单选）；地址文本输入，占位符 'Rough address is fine'；车位步进器 1–4。按钮 'Save my interest'（电压色底）。点击时：保存到 localStorage 键 'hostInterest' 并显示一条内联提示（300ms 淡入，等宽 13px 钢灰）：'Saved on this device only — this demo form sends nothing. When it's real, write host@ampline.co.' 不会提交到任何地方。
   布局：12 列网格：清单列 1–5，表单列 7–12。移动端堆叠。
   动效：标签和步进器过渡 200ms；保存提示淡入；减少动效仅保留颜色变化。
8. **页脚（Footer）** — 顶部 1px 网格线细线。左侧：[BRAND] 字标配电压色 zap，以及一行等宽 12px 钢灰：'AN INVENTED DEMO NETWORK FOR [CITY] — EVERY NUMBER ON THIS PAGE IS SAMPLE DATA.' 右侧：锚点链接 'Map · Pricing · App · Fleet · Host'，等宽钢灰；可选 [CREDIT] 链接。无日期，无社交行。
   布局：py-12，max-w-6xl，flex 行在移动端换行为列。
   动效：无。

## 资产
- 图标：lucide-react（ISC）通过 npm 引入——zap（品牌标识和页眉）、search、plug-zap、battery-charging 和 check（应用要点）、warehouse、route 和 receipt（车队卡片）、check（主机清单）、plus/minus（步进器）、menu 和 x（移动端页眉）、arrow-right（CTA）。不使用其他图标：不使用 emoji、不使用汽车标志、不使用连接器品牌标识。其他所有视觉元素——城市地图、电池环、手机模型和费率条——均由构建者按照各节规范用 SVG/CSS 绘制；任何地方都不使用图片文件。
- 字体：@fontsource/space-grotesk（OFL，字重 500 和 700）和 @fontsource/jetbrains-mono（OFL，字重 400、500、700），在 src/main.tsx 中导入；绝不从 fonts.googleapis.com 或任何 CDN 加载。在项目根目录的 ASSETS.md 中列出这两个字体家族和 lucide 图标包：路径、来源、许可证——没有图片资产需要列出。

## 禁止事项
- 无后端、无网络请求、无分析、无支付：地图、可用状态、会话编号和统计数据均为来自 src/content.ts 的静态示例数据，并明确标注为 SAMPLE，主机表单仅保存至 localStorage，并附有内联说明——任何表单均不会提交。
- 任何位置均不得使用摄影图片或位图图像：所有视觉元素（地图、手机模型、电池环、费率条、纹理）均以 SVG/CSS 绘制；绝不使用 Unsplash/Pexels/Pixabay、生成式照片或占位图服务。
- 不得使用真实地图瓦片或地理数据——不得使用 Leaflet、Mapbox 或 Google Maps：城市为风格化的虚构网格，绘制于单个具有固定坐标的 SVG 中。
- 不得使用真实充电网络、汽车制造商或连接器品牌标识：网络、站点名称、街道和价格均为虚构，凡出现名称之处均使用 [BRAND]。
- 不得提供正常运行时间或可用性保证或声明：每个站点状态和统计数据均为示例数据，并始终如此标注。
- 不得使用任何 CDN：字体通过 Fontsource 包提供，图标来自 lucide-react；不得使用第三方脚本、链接或嵌入内容。
- 生产构建：单条命令、压缩、无 source map、输出中不含 src/、相对路径（Vite base './'）；保持 dist/ 极小（远低于 20 MB——因为没有任何位图）。
- 仅单页，使用锚点导航；必须在 1440×900 和 390×844 下干净渲染，控制台零错误，并遵循 prefers-reduced-motion（脉冲和环形动画关闭；使用普通淡入淡出）。
- 保持方向锁定：石墨色基底配细线网格纹理，一种电伏绿（琥珀色严格用于忙碌状态和夜间费率），等宽标签，4/8px 圆角；无浅色模式、无玻璃拟态、除站点脉冲环外无霓虹辉光、费率条之外无渐变。
- 所有文案、标签、示例数据和替代文本均使用美式英语，存放于 src/content.ts；当 [BRAND]、[CITY]、[RATE] 或 [STATIONS] 变更时，重写站点名称、资费行和单位以适配新网络（例如，为不同产品采用按分钟计价），而不是留下 kWh 文案。
- 在项目根目录的 ASSETS.md 中列出每个第三方文件（两个 Fontsource 字体家族、lucide 图标）：路径、来源、许可证。

---
— Prompt by VibeFather · https://vibefather.ai/t/ev-charging-network-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
