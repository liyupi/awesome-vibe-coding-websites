> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 婚纱精品店网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个单页网站，这是由造型师 [FOUNDER] 在 [CITY] 经营的新娘精品店，为 [EXPERIENCE] 的新娘提供着装服务。页面呈现编辑式的浪漫风格——腮红、香槟、深酒红，优雅的衬线字体，柔和光线下的婚纱照片，展示在人台上以及试衣休息区，不出现人脸。网站提供风格测验，推荐婚纱廓形；一个可筛选的系列，包含八件虚构品牌的婚纱；按派对人数预约试衣；六步修改时间线；真实婚礼故事和配饰。所有婚纱、情侣和价格均为虚构的示例数据。

- 受众：主要：新订婚的新娘（及其母亲），居住在 [CITY] 驾车可达范围内，被 Pinterest 淹没，希望有真人帮她们缩小选择范围。次要：正式场合和西装精品店，可借鉴测验和时间线。
- 目标：引导访客从“我存了 400 张图片却毫无头绪”走向预约试衣：让测验缩小范围，让系列展示多样性，然后让预约——以合适的派对人数——成为显而易见的下一步。
- 语调：编辑式的温暖——就像一位出色的造型师说话的方式：平静、笃定、对紧张情绪充满善意。零“大日子”陈词滥调；用一句完美的话代替三个感叹号。

## 技术栈（Stack）
- 框架（Framework）：Vite 6 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/playfair-display（OFL-1.1）、@fontsource/lato（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置（Setup）：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 设为 './'，build.outDir 设为 'dist'，build.sourcemap 设为 false。不使用路由、无后端、无服务端代码。
  - 安装 Tailwind CSS 3.4，并配置 PostCSS 和 Autoprefixer。用下方精确的调色板扩展主题，fontFamily.display 设为 'Playfair Display'，fontFamily.body 设为 'Lato'。
  - 通过 @fontsource/playfair-display 和 @fontsource/lato 自托管 Playfair Display 的 500、600、700 字重（外加用于引文的 500 斜体）以及 Lato 的 400、700 字重，在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、AnimatePresence、useInView、useReducedMotion）实现入场动画和测验步骤切换；所有动画都要以 useReducedMotion() 为条件进行控制。
  - 将所有文案和数据放在 src/content.ts 中：品牌字符串、首屏文案、测验问题与廓形映射、八件礼服（名称、廓形、领口、价格、一句话描述、按廓形对应的照片键）、筛选器、预约文案、修改步骤、故事、配饰。当变量值变化时，在该文件中重写依赖的文案，并从 [BRAND] 和 [PHONE] 派生存储键和 tel: 链接，确保不残留任何默认品牌痕迹。
  - 系列（collection），恰好八件礼服，照片按廓形映射：'Wren' A-line · sweetheart · $1,850 · 'pockets, and the skirt does the talking'；'Marisol' A-line · V · $2,100 · 'champagne buttons down the spine'；'Odette' ballgown · boat · $2,900 · 'the ballroom, but make it weightless'；'Elowen' ballgown · sweetheart · $3,400 · 'corseted, cathedral-ready'；'Celeste' mermaid · V · $2,400 · 'satin that behaves like water'；'Sable' mermaid · sweetheart · $2,750 · 'the dramatic exit dress'；'Juniper' sheath · off-shoulder · $1,650 · 'city hall, then dinner, then dancing'；'Pip' sheath · boat · $1,450 · 'crepe, clean lines, done'。筛选器：廓形标签（A-line / Ballgown / Mermaid / Sheath）、领口标签（Sweetheart / V / Boat / Off-shoulder）、价格标签（Under $2,000 / $2,000–3,000 / Over $3,000）；实时计数（'8 of 8 gowns'）；激活时显示 'Clear filters'；零结果状态显示清除标签。卡片展示廓形照片 4:3、名称用 Playfair 600、领口 + 价格行、一句话说明用斜体。
  - 风格测验，恰好：三个步骤 — Q1 'Where is it happening?'（Garden / City loft / Estate ballroom / Beach）；Q2 'Pick a vibe'（Romantic minimal / Quietly dramatic / Easy elegance）；Q3 'The dress you sketch in margins'（A train that clears the room / Sparkle everywhere / Clean lines only / Sleeves, definitely sleeves）。映射（在 content.ts 中可见）：Garden→A-line & sheath；City loft→sheath & mermaid；Estate ballroom→ballgown & mermaid；Beach→A-line & mermaid；vibe 和 sketch 各自为其自然配对增加一个权重（minimal→sheath，dramatic→mermaid/ballgown，elegance→A-line；train→ballgown，sparkle→ballgown/mermaid，clean→sheath，sleeves→A-line/sheath）。结果：前两个廓形，各附一句理由（'A-line: the garden classic — moves in photos, forgives everything'）以及链接 'See A-line gowns →' 用于筛选网格；一个 'Retake' 链接；建议是关于动态和氛围的风格建议，绝不涉及身材评论。
  - 预约，恰好：同行人数标签（'Just me' / '2–3 VIPs' / 'The whole parade'）、时间段标签（Weekday morning / Weekday afternoon / Saturday）、姓名、电话、'wedding season, if you know it' 可选下拉（Spring / Summer / Fall / Winter / Still a secret）；成功提示 'Your appointment is requested — we call within a day to confirm and talk time. Bring photos, bring people, bring nerves; all three are normal.' 并附演示说明。持久化到 localStorage 的 [BRAND_SLUG]-appointment 键下。
  - 修改时间线，恰好六个步骤，带周数偏移（相对值，无日期）：'Gown arrives' — '8–12 weeks out: you try it as-is; we plan'；'First fitting' — '8 weeks: structure — take-in, hem length, bustle plan'；'Second fitting' — '5–6 weeks: the details settle'；'Third fitting' — '3–4 weeks: bring the shoes, the bra, the veil'；'Final fitting' — '2 weeks: the mirror moment'；'Press & pickup' — 'the week of: steamed, boxed, ready'。绘制为香槟色线条配酒红色节点。
  - 仅使用这些 lucide-react 图标：Phone、Heart、Sparkles、CalendarCheck、Clock、ChevronRight、ChevronLeft、ArrowRight、Menu、X、Ruler、Gem、MapPin、Users。
  - 将测验结果和预约持久化到 localStorage，以 [BRAND_SLUG] 为命名空间；验证恢复的 JSON，并从格式错误的数据中静默恢复。
  - 在构建前将六张生成的图片下载到 Assets 中列出的确切公共路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者或生成器以及许可证。
  - 一个纯 <title> 为 [BRAND] 以及一个 favicon（酒红色圆形配腮红丝带标记）即可；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 精品店名称（默认：“Wildfern Bridal”）。虚构的精品店名称；代码中会据此生成一个丝带标志图形。
- [CITY] — 城市（默认：“Hartswell”）。沙龙所在地；出现在首屏、故事和页脚中。
- [FOUNDER] — 店主造型师（默认：“Isobel Marsh”）。虚构的造型师兼店主，在首屏和预约文案中提及。
- [PHONE] — 电话（默认：“(555) 664-9910”）。沙龙电话；以 tel: 链接形式呈现，仅使用数字。
- [EXPERIENCE] — 年限（默认：“9 years”）。像 '9 years' 这样的普通短语；用于首屏文案。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/bridal-boutique-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/bridal-boutique-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
