> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 电影院放映时间网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
为一个虚构的独立影院制作一个两页网站：一个灯泡点亮的招牌式主视觉区、六部正在上映的影片（配有代码绘制的抽象海报）、按星期排列的放映时间、一个带有手绘礼堂座位选择器的影片详情页、三档会员等级，以及一个到访信息页脚——天鹅绒红与黑色，所有视觉元素均以代码绘制。

- 受众：查看今晚场次的社区观影者、在7:00和9:30之间做选择的影迷俱乐部常客，以及挑选日间场的家庭观众。
- 目标：引导访客从“有什么在上映”走向“这些是我的座位”：浏览影片、选择日期和时间、体验座位图，并考虑加入会员。
- 基调：温暖而略带戏剧感，像一位深受喜爱的引座员：简短的招牌式文案、节目单式的细节，没有企业化的精致感。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource/bungee（MIT）、@fontsource/karla（MIT）、@fontsource/courier-prime（MIT）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务器代码、无外部 API。
- 配置：
  - vite.config.ts：base 设为 './'，build.sourcemap 设为 false，src/ 中的任何内容都不会被复制到 dist/。
  - tailwind.config.js：扩展颜色 house #150A0E、velvet #5E1520、ticket #C13A47、cream #F2E7CE、bulb #FFD98A、dim #6B5335、line #3A1B22；fontFamily 中 display 为 'Bungee'、body 为 'Karla'、mono 为 'Courier Prime'。
  - 所有文案、影片、海报构图、场次模式、已占座位模式和票档都作为带类型的对象存放在 src/content.ts 中；组件绝不硬编码文案。
  - 跑马灯边框：src/components/Marquee.tsx 在招牌周围渲染两行水平排列的灯泡圆点（每行 18 个，10px 圆形，间距均匀）；每个圆点在 2.6s 内于 bulb 与 dim 之间循环，并通过 src/index.css 中的 CSS keyframes 实现 120ms 的错峰。
  - 胶片颗粒：一个固定的全页面覆盖层 div，使用内联 SVG feTurbulence data-URI，不透明度 5%，pointer-events 为 none，从不播放动画。
  - 座位保留状态持久化到 localStorage，键为 [BRAND_SLUG]-hold，其中 [BRAND_SLUG] 是 [BRAND] 转为小写并用连字符连接后的形式。

## 变量
- [BRAND] — 影院名称（默认：“The Ruby Lantern”）。用于跑马灯标题、页眉、页脚，以及通过 [BRAND_SLUG] 生成的 localStorage 键。
- [CITY] — 城镇（默认：“Old Milltown”）。用于地址和路线文案。
- [TICKET_PRICE] — 票价（默认：“$11”）。标准成人座位价格，用于座位图统计。
- [DISCOUNT_DAY] — 优惠夜（默认：“Tuesday”）。Showtimes 下方折扣横幅所用的星期几。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/movie-theater-showtimes-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按 section 作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- house `#150A0E` — 页面底色，接近黑色，带李子色调
- velvet `#5E1520` — 幕布、招牌板、会员面板
- ticket `#C13A47` — 主按钮、激活的日期标签、悬停链接
- cream `#F2E7CE` — 节目单文字、深色背景上的标题
- bulb `#FFD98A` — 点亮的跑马灯灯泡、已选座位、高亮
- dim `#6B5335` — 未点亮的灯泡、招牌边框、低调的分隔线
- line `#3A1B22` — 细线、卡片边框

### 字体排印
- 展示 / 跑马灯和影片标题：Bungee（OFL），字重 400
- 正文 / 节目单文字：Karla（OFL），字重 400/500/700
- 等宽 / 放映时间、座位、计数：Courier Prime（OFL），字重 400/700

### 布局与动效
- 间距：区块内边距桌面端 py-24 / 移动端 py-16；容器 max-w-[1160px] px-6；海报网格 gap-8；卡片 p-5 至 p-8。
- 圆角：海报和面板 rounded-md（6px）；会员卡 rounded-xl；日期标签和时间胶囊 rounded-full。
- 动效：跑马灯灯泡轻柔闪烁：每个圆点在 bulb 和 dim 之间交替，周期 2.6s，沿边框错开 120ms；仅改变不透明度（1 到 0.45），不缩放，不频闪。
- 动效：跑马灯下方的 now-showing 滚动条以 40s 循环向左滚动影片标题（CSS translateX 关键帧，复制内容实现无缝衔接）。
- 动效：滚动显现：区块在 400ms 内上浮 20px 淡入，错开 60ms（Motion whileInView，仅一次）。
- 动效：座位交互：悬停时座位抬升 2px，按下时缩放至 0.9，选中时在 150ms 内填充 bulb；计数重新计算。
- 动效：胶片颗粒为静态 5%，从不播放动画；悬停影片卡片时边框提升至 dim，海报在 300ms 内缩放至 1.02。
- 动效：prefers-reduced-motion：灯泡保持静态 70% 点亮图案，滚动条停止为换行静态行，显现立即出现；座位选择仍改变状态但不使用变换。
- 图像：无摄影图像。一切皆由代码绘制：天鹅绒幕布渐变（分层 linear-gradients 带柔和褶皱阴影）、聚光灯锥（低不透明度 conic gradients）、灯泡点跑马灯边框、六张几何 SVG 电影海报、观众厅座位图及其屏幕弧线，以及统一页面的 5% 胶片颗粒叠加层。

## 页面与区块
### [BRAND] — 正在放映（`index.html`）
1. **站点页眉** — 60px 细页眉，house 底色上覆奶油色，底部细线用 line 色。左侧：字标 [BRAND]，Bungee 16px 奶油色。中间导航：正在放映、放映时间、会员、到访 — Karla 500 14px 奶油色/70，悬停变奶油色。右侧：胶囊 CTA“今晚放映”（ticket 填充，奶油色文字）→ #showtimes。移动端：导航收起于 lucide 菜单按钮之后，点击打开全宽抽屉，相同链接纵向堆叠。
   布局：内部容器 max-w-[1160px]；页眉在跑马灯主视觉上透明，滚动 60px 后获得 house 色调。
   动效：色调在 300ms 内淡入；抽屉下滑 250ms。
2. **跑马灯主视觉** — 全视口主视觉，置于分层 velvet 之上：house 地面；顶部横贯一幅宽 velvet 幕布，由三段重叠的 linear-gradient 垂花饰构成，柔和褶皱阴影渐隐入 house；顶部两角各有一束聚光灯锥（奶油色 conic 渐变，8%，mix-blend-mode screen，静态）。居中跑马灯招牌：rounded-[24px] 板面，velvet 填充，4px 暗色边框，上下各环绕一排灯泡（每排 18 个）。招牌内：[BRAND] 用 Bungee，字号 clamp(44px, 8vw, 96px)，奶油色，紧行距，居中；副行 Karla 500 16px 奶油色/80：“正在放映 · 六部影片 · 三块银幕”；CTA：“查看放映时间”（ticket 胶囊，奶油色文字）→ #showtimes 和“成为会员”（奶油色描边胶囊）→ #membership。招牌下方一行 Courier Prime 13px 灯泡色：“首场开演前 30 分钟开门”。
   布局：min-h-[92vh]，flex 纵向居中；招牌 max-w-[880px] w-[92%] py-12 px-8；开门提示行位于招牌下方 24px。
   动效：灯泡错峰闪烁；加载时招牌从 0.97 缩放，500ms ease，标题字母以 30ms 错峰淡入；聚光灯始终不动。
3. **正在放映滚动条** — 两条细线之间的全宽条带（velvet/60 地面，暗色边框），承载一行滚动文字，Courier Prime 14px 奶油色，片名以菱形符号分隔：“MIDNIGHT ORCHARD ◆ SIGNAL TO SOLACE ◆ THE FOX OF FETTER LANE ◆ IRON LULLABY ◆ AUNT MARIGOLD'S AEROPLANE ◆ BACKLOT HONEYMOON ◆ ” — 内容复制一次以实现无缝 40s 循环。
   布局：h-12，内容单行，overflow hidden，whitespace nowrap。
   动效：translateX 循环 40s linear infinite；在减少动态偏好下，条带变为相同片名的静态换行行。
4. **正在放映 — 海报网格** — H2 用 Bungee 36px 奶油色：“正在放映”。六张影片卡片网格；卡片：2:3 海报 SVG，片名 Bungee 20px 奶油色，元信息行 Courier Prime 12px 奶油色/70，链接“影片页面 →” Karla 500 灯泡色至 ./film.html?film=<slug>。一句话简介与海报构图（内联 SVG，viewBox 300x450，平涂色块，每张两种色调加一个强调色，无字母、无数字、无渐变）：Midnight Orchard — 惊悚 · 104 分钟 · PG — slug midnight-orchard — 简介“黑暗中有东西在摘走果实，一次一个圆圈。” — 海报：底色 #0E1F16，右上角一个淡色月亮圆，六条深色垂直树干条，低处中央一个黄铜点 #C9A227。Signal to Solace — 科幻 · 131 分钟 · PG — signal-to-solace — “一位灯塔操作员回应了一个本不该存在的信号。” — 底色 #101B33，三道同心奶油色弧线从左下点射出，右上角一个小漂移菱形。The Fox of Fetter Lane — 动画家庭 · 88 分钟 · G — fox-of-fetter-lane — “一只习惯逛市场的狐狸在一条长街上以物易物。” — 底色 #C25B2E，左上角奶油色新月，三片黑色叶子剪影，右下角一条奶油色卷尾曲线。Iron Lullaby — 黑色电影 · 117 分钟 · PG-13 — iron-lullaby — “最后一趟车费，城市已悄然易主。” — 底色 #14161A，四十条细垂直雨线，奶油色/25，一个琥珀色灯点带小光锥。Aunt Marigold's Aeroplane — 冒险喜剧 · 116 分钟 · G — aunt-marigolds-aeroplane — “一位退休飞行员和她的侄孙女用谷仓零件重造一架双翼飞机。” — 天空 #F3E3C2，红色双翼飞机由两个三角形和一个圆形螺旋桨构成，一条点状环形尾迹。Backlot Honeymoon — 神经喜剧爱情 · 91 分钟 · PG — backlot-honeymoon — “两位互为对手的公关必须筹办一场双方都不想要的婚礼。” — 底色 #E9C8C8，一个大奶油色圆，一条红色斜丝带，角落三个灯泡点。
   布局：grid md:grid-cols-2 lg:grid-cols-3 gap-8；海报 w-full aspect-[2/3] rounded-md 带 line 边框；卡片 p-5。
   动效：卡片以 60ms 错峰淡入上移；卡片悬停时海报缩放至 1.02（300ms）。
5. **按日放映时间** — H2“放映时间”。星期芯片 MON–SUN 用 Courier Prime 13px（默认 FRI 激活，激活时 ticket 填充）。影片以行列出：片名 Karla 700 18px 奶油色加类型标签 Courier Prime 12px 奶油色/60，然后时间胶囊链接至 ./film.html?film=<slug>&day=Fri&time=19:00 — 胶囊 Courier Prime 13px 奶油色，1px 奶油色/30 边框，悬停 ticket 边框。content.ts 中的示例模式：Midnight Orchard 16:15 / 19:00 / 21:30；Signal to Solace 13:45 / 17:15 / 20:30（周六–周日加映 23:00）；The Fox of Fetter Lane 11:00 / 14:00（仅周末）；Iron Lullaby 18:00 / 20:45；Aunt Marigold's Aeroplane 10:30 / 13:15 / 16:00；Backlot Honeymoon 15:00 / 17:45 / 20:15。H2 下方横幅，Karla 14px 奶油色/70：“[DISCOUNT_DAY] 优惠：17:00 前所有场次现场购票 $7。”脚注 Courier Prime 12px 奶油色/50：“示例周 — 时间遵循工作日模式，非实时日历。”
   布局：影片为行，细线分隔；桌面端每行 grid-cols-[280px_1fr]，移动端堆叠；胶囊换行。
   动效：切换日期时行交叉淡入淡出（200ms）；激活芯片填充 ticket。
6. **会员** — H2“会员”。velvet 面板上三档，暗色边框：Matinee Member $9 / 月 — “每月一张票 · 含 [DISCOUNT_DAY] 优惠 · 无订票费。”；Double Feature $17 / 月，标签“MOST CHOSEN” Courier Prime 11px 灯泡色 — “每月两张票 · 每季一张嘉宾通行证 · 免费爆米花续杯。”；Season Pass $149 / 年 — “标准场次无限看 · 四次预映邀请 · 大堂墙上留名。”网格下方注释，Karla 13px 奶油色/60：“会员信息仅供参考 — 此演示无注册流程。”
   布局：grid md:grid-cols-3 gap-6；中间卡片高出 4px；价格 Bungee 32px 奶油色。
   动效：卡片错峰淡入上移；其余不动。
7. **到访与页脚** — 到访区块“找到影院”：地址“14 Marquee Lane, [CITY]”加“夜班 12 路公交停靠喷泉；步行两分钟。”；营业时间表 Courier Prime 13px 奶油色/80：周一–周四 15:00–23:00，周五 13:00–24:00，周六–周日 10:30–24:00，注释“首场开演前 30 分钟开门。”；影院须知 Karla 14px 奶油色/70：“一号厅 96 座；二号厅和三号厅各 48 座。小卖部仅收银行卡。”页脚：字标、导航重复、小字 Courier Prime 12px 奶油色/50：“所示影片、放映时间和座位均为虚构示例内容。”加 [CREDIT]。
   布局：grid md:grid-cols-3 gap-10；页脚 py-10，顶部细线。
   动效：仅淡入上移；颗粒叠加层延续至页脚。

### [BRAND] — 影片与座位（`film.html`）
1. **影片页头部** — 返回链接“← All films”指向 ./index.html#now-showing（Karla 500 cream/70）。两栏布局：左栏为影片海报 SVG，与网格中所绘完全一致，w-full max-w-[380px] rounded-md，带细线边框；右栏为标题，Bungee clamp(36px, 5vw, 64px) cream，元信息行 Courier Prime 13px cream/70“GENRE · RUNTIME MIN · RATING”，随后是两段节目简介，Karla 15px cream/85。全部六部影片的节目简介位于 content.ts — Midnight Orchard：“A keeper walks the orchard rows after the last bus leaves. Something has been taking the fruit in the dark, one precise circle at a time.” / “Shot over nineteen nights in a single field, with a score for tape and bowed saw.” Signal to Solace：“A lighthouse operator answers a signal that shouldn't exist, in a code she half remembers from childhood.” / “Every beacon in the film was built and lit in camera.” The Fox of Fetter Lane：“A fox with a market habit and a baker with a soft heart trade favors across one long street.” / “Hand-inked at twelve frames a second; the smell of bread is almost visible.” Iron Lullaby：“A night-shift driver takes one last fare and finds the city has quietly changed hands.” / “Rain, neon and a brass score; the shadows do the talking.” Aunt Marigold's Aeroplane：“A retired pilot and her great-niece rebuild a biplane from barn parts and borrowed afternoons.” / “A comedy that lands softly; the loop-the-loop is real.” Backlot Honeymoon：“Two rival studio publicists must stage a wedding neither wants, for a studio that no longer exists.” / “Screwball pace, matinee heart; romance by way of the props department.” 当 ?film= 缺失或未知时，显示第一部影片（midnight-orchard），并预选 FRI 日 19:00 场次 — 绝不出现空白或未找到状态。
   布局：grid md:grid-cols-[380px_1fr] gap-10；py-16。
   动效：标题和海报淡入上移 400ms。
2. **场次选择器与座位图** — 场次栏：MON–SUN 日期芯片，加上所选影片的时间胶囊（与 index.html 相同的示例模式）；选择会更新座位图标题，Courier Prime 13px bulb：“SCREEN ONE · FRI · 19:00”（由所选日期和时间构建）。座位图绘制：顶部为浅弧形银幕（70% 宽度条，border-radius 50% 50% 0 0，cream/25 填充），标注“SCREEN”，Courier Prime 11px cream/60；下方为八排 A–H，每排十二个座位 — 34px 方块 rounded-[8px]，第 6 座后留 28px 过道间隙 — 每侧排字母为 Courier Prime 12px cream/50。状态：可选（1px cream/40 边框，透明填充）、已占（cream/15 填充，禁用，cursor-not-allowed）、已选（bulb 填充，house 文字）。已占座位为 content.ts 中的固定示例模式，每次访问均相同：D–F 排 4–9 座，外加 A2、A3、B7、B8、C5、G10、H2 单座。座位图下方图例行展示三种状态。计数右对齐，Courier Prime 14px cream：“3 SEATS · $33”，总额按座位数 × [TICKET_PRICE] 计算。按钮“Hold seats”（ticket 填充）：展开内联面板，带 lucide 对勾：“Held on this device — this is a local demo. No booking was made and nothing was charged.” 保留信息保存在 [BRAND_SLUG]-hold 下。座位图下方注释，Karla 13px cream/60：“Row H end seats are step-free; ask an usher at the door.”
   布局：场次栏（芯片和胶囊换行）位于座位图上方；座位图居中 max-w-[640px]；座位 gap-1.5；计数和保留按钮右对齐于座位图上方。
   动效：悬停时座位抬升 2px，按下缩放至 0.9；选中填充过渡 150ms；切换日期或时间时以 200ms 交叉淡入重置选择。
3. **影片页页脚** — 细页脚：返回链接“← All films”指向 ./index.html，字标 [BRAND]，小字 Courier Prime 12px cream/50：“Seat map is a local demo — no real booking.” 外加 [CREDIT]。
   布局：py-10，顶部细线，内部容器 max-w-[1160px]。
   动效：除页面颗粒外无其他动效。

## 资产
- 图像：不使用照片，也不进行下载。所有视觉元素均以代码绘制：六张电影海报为内联 SVG 色块构图（每部电影的确切几何形状列于“正在上映”部分），天鹅绒幕布渐变、聚光灯锥形光束、灯泡点阵招牌边框、滚动字幕条、观众席座位图与银幕弧线。唯一类似位图的元素是内联 SVG feTurbulence 胶片颗粒 data-URI，不透明度为 5%。
- 图标：lucide-react npm 包（ISC）：menu、x、ticket、clock、armchair、arrowLeft、check。不使用其他图标集，不使用品牌标志。
- 字体：Fontsource 包（MIT）：@fontsource/bungee 400；@fontsource/karla 400/500/700；@fontsource/courier-prime 400/700。在 main.tsx 中导入；不使用字体 CDN 链接。

## 禁止事项
- 不得出现真实的影院、影片、制片厂、发行方或电影片名——每一部影片、每一场放映时间和每一个价格都是虚构的示例内容。
- 海报是代码绘制的抽象图形：不得使用照片，不得使用真实电影艺术图，海报 SVG 内部不得出现可读的字母或数字；文字排版只存在于海报周围的 HTML 中。
- 放映时间遵循固定的工作日模式；不得根据真实时钟计算日期或时间，不得使用基于 JavaScript Date 的逻辑；页面须将时间标注为示例。
- 不得有订票后端或支付功能：选座器是本地演示，仅保存到 localStorage，并在保留面板和页脚中说明这一点。
- 不得出现人物照片；完全不得出现任何照片——所有视觉元素均为 SVG 或 CSS。
- 一切资源自托管（Fontsource 字体、内联 SVG 图形）；不得使用 CDN script 或 link 标签，不得使用 Google Fonts，不得使用分析工具。
- Vite base 设为 './' 并使用相对路径；内部链接指向真实文件名（./index.html、./film.html），绝不指向裸目录；film.html 在没有有效 ?film= 时显示第一部影片，绝不显示错误状态。
- 生产构建须压缩，不得生成 source map，dist/ 小于 20 MB。
- prefers-reduced-motion：灯泡以 70% 点亮的图案保持静态，滚动条暂停为换行后的静态行，显现效果即时完成；选座功能在没有 transform 的情况下仍可正常工作。
- 灯泡轻柔闪烁（仅透明度变化，2.6s，不得频闪）；胶片颗粒为 5% 的静态效果，绝不播放动画。
- 除带有 [BRAND] 的普通 <title> 和 favicon 外，不得添加任何 SEO 脚手架。
- 不得复制任何真实影院网站、电影海报或电影材料中的代码、文案、字体设计或艺术图。

---
— Prompt by VibeFather · https://vibefather.ai/t/movie-theater-showtimes-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
