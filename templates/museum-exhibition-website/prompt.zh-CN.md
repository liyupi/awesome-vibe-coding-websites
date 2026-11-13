> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 博物馆展览网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个为虚构博物馆展览打造的单页网站：首屏由一张醒目的物件照片锚定，上方是超大号衬线体展览标题；六个可缩放的重点物件（点击查看——通过本地 CSS 变换实现缩放与平移）；一个安静的参观信息区块；一个可本地保存的定时门票选择器；一份包含四场活动的示例节目单；以及一个用代码绘制的商店预告——画廊白配一抹博物馆蓝。

- 受众：计划定时入场的周末访客、会员、学生，以及在预订前浏览展览的设计爱好者游客。
- 目标：让访客在物件前放慢脚步，再将这份兴趣转化为已保存的定时入场选择或活动计划。
- 语气：平静的目录式口吻：精确的材质、简短的图注、不慌不忙的句子；让物件自己说话。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：motion（MIT）、lucide-react（ISC）、@fontsource/fraunces（MIT）、@fontsource/inter（MIT）、@fontsource/ibm-plex-mono（MIT）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置（Setup）：
  - vite.config.ts：base 设为 './'，build.sourcemap 设为 false，src/ 中的任何内容都不会被复制到 dist/。
  - tailwind.config.js：扩展颜色 gallery #FAF8F3、ink #17181C、museum #2545C8、stone #F1EEE7、line #E4E0D6、plate #DEDBD4；fontFamily 中 display 为 'Fraunces'、body 为 'Inter'、mono 为 'IBM Plex Mono'。
  - 所有文案、展品、图注、活动、票务数据和商店商品都以带类型的对象形式存放在 src/content.ts 中；组件中绝不硬编码文案。
  - 缩放查看器（Zoom inspector）：src/components/ObjectImage.tsx 渲染一个 figure，内含固定宽高比的画框和其中的 img；查看状态（缩放 1–3、平移 x/y）通过单个内联 CSS transform 应用；pointerdown/move/up 处理拖拽，滚轮和按钮对缩放值做钳制；Escape 键和重置按钮将缩放恢复为 1x。不使用瓦片服务，不发起网络请求。
  - 票种选择会持久化到 localStorage，键名为 [BRAND_SLUG]-slot，其中 [BRAND_SLUG] 是 [BRAND] 转为小写并用连字符连接后的形式。

## 变量
- [BRAND] — 博物馆名称（默认："The Meridian House"）。用于字标、主视觉说明文字、页脚，以及通过 [BRAND_SLUG] 生成的 localStorage 键。
- [CITY] — 城市（默认："Ashport"）。用于主视觉眉题、地址和路线指引文案。
- [SHOW_NAME] — 展览标题（默认："Measure of Days"）。用于超大号衬线体主视觉大标题和页面文案。
- [TICKET_PRICE] — 成人票（默认："$18"）。用于选择器和总计行的成人分时段入场价格。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/museum-exhibition-website（默认：是；删除此行即可移除）

页面与区块（Pages & Sections）下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- gallery `#FAF8F3` — 暖白色页面底色
- ink `#17181C` — 近黑色文字与线条
- museum `#2545C8` — 唯一强调色：链接、按钮、激活标签、栏顶线条、检查器边框
- stone `#F1EEE7` — 交替的安静区块底色（intro、visit）
- line `#E4E0D6` — 细线、图片边框、表格线
- plate `#DEDBD4` — 图注与图像中引用的中性灰照片背景

### 字体排印（Typography）
- 展示 / 超大衬线：Fraunces（OFL），字重 300/400/600
- 正文：Inter（OFL），字重 400/500
- 等宽 / 标签、时间、图注：IBM Plex Mono（OFL），字重 400/500

### 布局与动效（Layout & motion）
- 间距：通透的编辑式排版：区块桌面端 py-28 / 移动端 py-20；hero py-32；容器 max-w-[1200px] px-6；对象行 gap-16；区块之间以细线分隔。
- 圆角：几乎不用：标签、按钮和时间槽为 2px；图片保持直角并带 1px 线条边框；唯一的胶囊形是小的 'LOOK CLOSER' 标签（999px）。
- 动效：轻柔显现：区块在 500ms 内上浮 16px，错峰 60ms（Motion whileInView，once）——比产品页更慢、更安静。
- 动效：Hero：演出标题的单词以 600ms 错峰上浮 12px；hero 照片在 700ms 内从 scale 1.02 稳定到 1。
- 动效：缩放检查器：进入检查时，图片在 300ms ease-out 内从 1 缩放到 2.4；拖动时随指针平移（cursor grab/grabbing）；滚轮缩放限制在 1–3x；加号、减号和重置按钮以相同变换做动画；激活图片周围出现 1px museum 边框，'LOOK CLOSER' 标签淡出。
- 动效：标签和步进器按下时以 150ms ease 缩放到 0.97；票务确认面板淡入并滑动 12px。
- 动效：prefers-reduced-motion：显现立即出现；缩放仍然可用（由用户发起），但进入时没有缩放动画。
- 图像：无缝中性灰（#DEDBD4）背景上的博物馆棚拍摄影：每帧一件虚构器物，居中，留白充裕，柔和漫射光从左上方照来，带一道轻柔的长阴影——如同图录图版。仅限虚构器物；无真实艺术品、无可识别的文化物品、无人物、无手部、画面中无文字。

## 页面与区块
### [BRAND] — [SHOW_NAME] (`index.html`)
1. **站点页眉** — 画廊页上为 72px 粘性页眉；滚动后底部出现 1px 细线。左侧：字标 [BRAND]，Fraunces 600 20px 墨色。中间导航：Exhibition、Objects、Visit、Events — Inter 500 14px 墨色/70，悬停时变为墨色并带 2px 博物馆色下划线。右侧：文本链接 'Timed tickets'，Inter 500 博物馆色 → #tickets。移动端：导航折叠在 lucide 菜单按钮后，点击打开全宽抽屉，相同链接纵向堆叠。
   布局：内部容器 max-w-[1200px]；页眉在首屏上方透明，直到滚动。
   动效：滚动 80px 后细线和淡淡的画廊色调淡入（300ms）；抽屉下滑 250ms。
2. **首屏 — 一件器物，一个标题** — 眉题 mono 12px 博物馆色大写：'CURRENT EXHIBITION · [CITY]'。H1 = [SHOW_NAME]，Fraunces 300，字号 clamp(64px, 11vw, 148px)，墨色，紧凑行距，默认断为两行（'Measure' / 'of Days' — 在第一个词后断行）。副标题 Inter 400 18px 墨色/70 max-w-[52ch]：'Timekeeping before the clock: forty-one objects that measured, counted and marked the day — from spiral water clocks to knotted cords.' 链接 'Plan a visit ↓' Inter 500 博物馆色 → #visit。首屏器物照片 public/images/spiral-water-clock.webp（4:3，1px 细线边框），alt 'A cast bronze spiral basin with stepped walls, photographed on a neutral gray backdrop'；图片下方说明文字 mono 12px 墨色/60：'SPIRAL WATER CLOCK · CAST BRONZE · COLLECTION OF [BRAND]'。
   布局：编辑式叠压：lg:grid-cols-[52%_48%]；照片位于右侧，其左边缘缩入 H1 最后一行下方 40px（H1 z-10 位于照片 z-0 之上）；移动端照片在副标题文案之后全宽显示。
   动效：标题文字以 600ms 交错上升；照片从 1.02 稳定到 1；其他不动。
3. **引言条带** — 一段 Inter 400 16px 墨色/80 max-w-[68ch]：'Before mainsprings, people kept time with water, sand, knots and light. [SHOW_NAME] gathers the tools they built — humble, exact and quietly beautiful — across five galleries on the first floor.' 三行统计数据安静排列（mono 12px 墨色/60 标签，Fraunces 300 32px 墨色数值）：'41 OBJECTS'、'5 GALLERIES'、'40 MIN SLOW VISIT'。
   布局：石色背景条带；统计行 grid-cols-3，带细线分隔。
   动效：一次淡入上移，500ms。
4. **器物亮点 — 凑近看** — H2 Fraunces 300 'Six objects, held still.' 引言行 墨色/70：'Click any object to look closer — the image zooms inside its frame; drag to pan.' 六件器物以交替编辑式行呈现，每行含图片框（1px 细线边框，cursor zoom-in，悬停时右上角出现小胶囊 'LOOK CLOSER'，mono 11px 博物馆色）和说明块（器物名 Fraunces 400 28px 墨色，材质行 mono 12px 博物馆色，注释 Inter 15px 墨色/70）：1. Spiral water clock — cast bronze — 'Water entered at the rim and reached the center in one measured hour; the steps marked the quarters.' — public/images/spiral-water-clock.webp（4:3，复用首屏），alt 'A cast bronze spiral basin with stepped walls on a neutral gray backdrop'。2. Notched tide bowl — speckled stoneware — 'A rim of forty notches; one pebble moved per day kept the household's count.' — public/images/tide-bowl.webp（1:1），alt 'A wide stoneware bowl with a notched rim on a neutral gray backdrop'。3. Black sand glass — blown glass, black sand — 'Turned at the knock of the night watch; runs in four minutes.' — public/images/black-sand-glass.webp（1:1），alt 'A two-bulb glass vessel with black sand on a neutral gray backdrop'。4. Counting cord — flax fiber — 'Knots in clusters of days; a year could be held in two hands.' — public/images/counting-cord.webp（1:1），alt 'A knotted flax cord coiled into a flat spiral on a neutral gray backdrop'。5. Ring dial — pierced brass — 'Three rings, three holes; aligned to the noon shadow it gave the month.' — public/images/ring-dial.webp（1:1），alt 'Three nested pierced brass rings on a neutral gray backdrop'。6. Day tile — fired clay, white slip — 'A pressed grid of thirty dots per face, scratched off at dusk.' — public/images/day-tile.webp（1:1），alt 'A square clay tile incised with a grid of dots on a neutral gray backdrop'。点击图片就地打开查看器：图片框锁定尺寸，图片在 300ms 内缩放至 2.4x，光标变为 grab，拖拽平移，滚轮缩放 1–3x，右下角出现小控制组（加、减、重置图标按钮）；重置或 Escape 返回 1x。说明文字保持在图片框下方原位。所有变换均为 img 上的本地 CSS；无瓦片服务，无请求。
   布局：行交替图片左 / 图片右；图片列约 55% 宽；行间以细线分隔；移动端相同，图片在上。
   动效：按动效列表：交错行显现；查看器进入缩放、拖拽平移、限制滚轮缩放和控制按钮缩放；活动图片上的博物馆色边框。
5. **参观** — 石色背景条带。H2 Fraunces 'Visit'。三个安静列，每列以 24px 博物馆色顶部横线开头：HOURS — 表格 mono 13px：Tue–Fri 10:00–18:00，Sat 10:00–20:00，Sun 11:00–17:00，Mon closed；注释 'Last timed entry 60 minutes before close.' FIND US — '3 Quillon Street, [CITY]' 和 'Two blocks from the Harbor tram stop; the door is under the blue awning.' ADMISSION — 'Adults [TICKET_PRICE] · Under 18 free · Pay-what-you-wish after 16:00.'
   布局：grid md:grid-cols-3 gap-10，每列带博物馆色顶部横线。
   动效：列以 80ms 交错淡入上移。
6. **定时门票** — H2 'Timed tickets'。左侧文案 Inter 16px 墨色/70：'Entry is by ninety-minute slot. Pick a day and a time below — the pick saves on this device. It is a sample planner: no payment is taken and tickets are not held.' 步进器：Adults [TICKET_PRICE]，Under-18 free，Reduced $12 — 减/加按钮带 mono 计数。右侧选择卡片（白色，1px 细线边框）：'DAY' 芯片 MON–SUN；'TIME' 时段按钮 — 10:00 AVAILABLE，11:30 FEW LEFT（副标签），13:00 禁用 'SOLD OUT'，14:30 AVAILABLE，16:00 'PAY-WHAT-YOU-WISH'；总计行 mono 13px 墨色 'TOTAL $36'（默认：两位成人）；主按钮 'Reserve a slot'（博物馆色填充，白色文字）。保存后，内联面板带 lucide 对勾：'Saved to this device. Sample picker — nothing was charged; tickets are not held.' 状态持久化在 [BRAND_SLUG]-slot 下，加载时恢复。
   布局：lg:grid-cols-2 gap-12；选择卡片 p-8；确认面板替换按钮行。
   动效：芯片和步进器按下至 0.97；面板淡入并滑动 12px。
7. **活动** — H2 'Events'。四行带细线分隔，每行：星期和时间 mono 13px 博物馆色，标题 Fraunces 400 24px 墨色，地点和标签 Inter 14px 墨色/70 — SAT 11:00，'The Long Noon'，策展人讲座，Gallery II，'Included with a ticket.'；SUN 14:00，'Knot a Counting Cord'，家庭工作坊，Learning Studio，'Materials $6.'；THU 18:00，'Measures at Dusk'，晚间开放，全馆，'Bar in the atrium.'；WED 10:00，'Quiet Hour'，低光低音，Gallery I，'Sensory-friendly.' 脚注 mono 12px 墨色/50：'Sample programme — a weekly pattern, not a live calendar.'
   布局：行列表 max-w-3xl，单列。
   动效：行以 60ms 交错淡入上移。
8. **商店预告和页脚** — H2 'Take the day home.' 三张代码绘制产品卡（白色背景内联 SVG，1px 细线边框，正方形 1:1）：CATALOGUE — 绘制的书封：墨色矩形带博物馆色书脊条和小螺旋标记 — $34；COUNTING-CORD KIT — 绘制的盘绕绳：同心圆带结点 — $16；BLACK-SAND GLASS — 绘制的双球容器：两个圆由窄腰连接，下球半填黑色 — $48。标签 mono 12px 墨色/60，价格 Fraunces 20px 墨色；网格下方细线，Inter 14px 墨色/70：'At the museum shop, by the atrium.'（纯文本，无链接）。页脚：字标 [BRAND]，地址 '3 Quillon Street, [CITY]'，小字 12px 墨色/50：'Objects, events and prices shown are invented sample content.' 加上 [CREDIT]。
   布局：卡片 grid md:grid-cols-3 gap-6；页脚 py-12，顶部细线。
   动效：卡片交错淡入上移；SVG 静态。

## 资源
- 图片：六张生成的博物馆工作室照片，下载到 public/images/ 中且不在其他地方使用：spiral-water-clock.webp（4:3，主视觉和物件 1）、tide-bowl.webp（1:1）、black-sand-glass.webp（1:1）、counting-cord.webp（1:1）、ring-dial.webp（1:1）、day-tile.webp（1:1）——即物件亮点。每张均从 https://media.vibefather.ai/assets/d6bc3e92-31ba-4d4e-b2ed-0047c7a2cf43/<file> 下载。每张的替代文本写在上方物件部分。ASSETS.md 中的署名：'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.'
- 图标：lucide-react npm 包（ISC）：menu、x、plus、minus、rotateCcw（重置）、zoomIn、check、mapPin、clock。不使用其他图标集，不使用品牌标志。
- 字体：Fontsource 包（MIT）：@fontsource/fraunces 300/400/600；@fontsource/inter 400/500；@fontsource/ibm-plex-mono 400/500。在 main.tsx 中导入；不使用字体 CDN 链接。

## 禁止事项
- 不得使用真实博物馆、展览、艺术家或艺术作品：展览、物件、说明文字、活动和商店商品均为虚构；不得暗示任何真实馆藏或借展。
- 物件为虚构文物——仅使用通用材料和形式；不得出现可识别的文化、宗教或国家物品，不得出现真实艺术作品或复制品。
- 缩放功能是基于交付图像文件的本地 CSS-transform 演示：不使用瓦片服务器、不使用图像 API、交互时不发起网络请求。
- 门票和活动为示例工作日模式，并标注为示例；不得根据真实时钟计算日期或时间；不得使用基于 JavaScript Date 的逻辑。
- 不提供预订或支付：选择器仅保存到 localStorage，其确认信息须说明未收取任何费用且门票未被保留。
- 所有资源自托管：Fontsource 字体、下载的图像，不使用 CDN 脚本或链接标签，不使用 Google Fonts，不使用分析工具。
- Vite base 设为 './'，使用相对资源路径；内部链接指向 index.html 上的锚点或真实文件名，绝不指向裸目录。
- 生产构建须压缩，不生成 source map，dist/ 小于 20 MB。
- prefers-reduced-motion：显现效果立即出现，缩放进入时不播放缩放动画（用户主动触发的缩放和平移仍然可用）。
- 保持配色克制：画廊白（gallery white）、墨色（ink）、一种博物馆蓝（museum blue）；不使用渐变，UI 上不使用投影（唯一的阴影位于照片内部）。
- 除包含 [BRAND] 的普通 <title> 和 favicon 外，不添加任何 SEO 脚手架。
- 不得从任何真实博物馆网站或馆藏复制代码、文案、图像或字体。

---
— Prompt by VibeFather · https://vibefather.ai/t/museum-exhibition-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
