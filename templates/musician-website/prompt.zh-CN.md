> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 音乐人网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [ARTIST] 打造的单页网站，[ARTIST] 是一位来自 [HOMETOWN] 的 [GENRE] 艺人，最新发行作品为 '[RELEASE]'。网站必须营造出舞台感：一个自定义的 Web Audio 播放器，基于随包提供、由构建过程生成的采样循环（不使用受版权保护的音频）；发行作品区块；五场巡演日期，场地和状态均为虚构；一个带购物袋计数器的周边商品网格；一个包含占位下载文件的媒体资料包；以及一个邮件订阅列表。单页结构：index.html，包含多个区块（#music、#tour、#merch、#press、#join）。一切都在浏览器中运行；不会向任何地方提交数据。

- 受众：午夜流媒体听歌的粉丝，以及一位快速浏览的 A&R 人员：他们想立刻听到音乐，其次看巡演，再有一个理由让他们输入邮箱。以移动端为主，以耳机收听为主。
- 目标：让用户按下播放键并输入邮箱。五秒内播放按钮可见；一分钟内已播放一首曲目并查看过一个巡演日期。
- 语气：唱片内页文案式的简洁：短句，小写字母的自信，每个区块一个冷幽默。不要用“journey”，不要用“sonic landscape”。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/oswald（OFL-1.1）、@fontsource-variable/work-sans（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化（Setup）：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。项目根目录下只有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0 }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content 为 ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键添加到 theme.extend.colors 中（stage-black、curtain、smoke、cream、ash、amber-light、amber-deep、wine、rule-dark），并设置 fontFamily display 为 ['Oswald', 'Arial Narrow', 'sans-serif']，sans 为 ['Work Sans Variable', 'system-ui', 'sans-serif']。将 borderRadius 的 DEFAULT 设为 4px，并添加 maxWidth { container: '1120px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/oswald/400.css'、'@fontsource/oswald/600.css' 和 '@fontsource-variable/work-sans'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 音频（Audio）：编写 scripts/make-sample.mjs（node），在初始化时运行一次并提交：合成一段 12 秒的循环（Am 五声音阶拨弦琶音，基于带指数衰减的柔和正弦波 + 节拍上的闷音底鼓 + 低增益的类黑胶滤波噪声），写入 public/audio/sample-loop.wav（约 1.5 MB，16-bit 44.1k 单声道）。页面仅播放此文件。播放器逻辑位于 src/lib/player.ts：Web Audio 图（source → gain → analyser → destination）、播放/暂停/跳转（循环点）、音量、用于可视化器的 getLevels()。
  - 文件布局（File layout）：src/content.ts（所有字符串、曲目、日期、周边商品、媒体引述、引言和图片路径，均带类型），src/lib/brand.ts（artistSlug = [ARTIST] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 artistSlug + '.com'），src/lib/storage.ts（用 try/catch 包裹的安全 localStorage get/set，键前缀为 artistSlug + ':'）。
  - 状态（State）：src/store/listener.ts 是一个小型外部存储（useSyncExternalStore），保存邮件列表的 { email, joined } 和 bag: string[]（周边商品 slug），持久化到 localStorage 键 artistSlug + ':listener'。购物袋数量在页眉中渲染；一个小型购物袋抽屉列出商品及其数量和总计，并附有结账不属于本演示的说明。
  - 组件位于 src/components/：Header.tsx（字标 + 导航 + BagButton）、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx、Marquee.tsx（一个手绘灯泡滚动条）；Hero.tsx、Player.tsx（PlayButton.tsx、SeekBar.tsx、Visualizer.tsx、VolumeControl.tsx）、Release.tsx（TrackRow.tsx）、Tour.tsx（DateRow.tsx）、Merch.tsx（MerchCard.tsx、BagDrawer.tsx）、Press.tsx、JoinStrip.tsx。src/pages/Home.tsx 将它们组合起来。
  - 在首次构建之前，运行 `node scripts/make-sample.mjs` 生成 wav，并使用 curl -L -o 将资源（Assets）下列出的每张图片以给定的确切文件名下载到 public/images/ 中。构建本身从不获取任何内容。
  - public/favicon.svg 如资源（Assets）下所述。index.html：lang en，<meta name='theme-color' content='#0C0A09'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[ARTIST] — [GENRE], [HOMETOWN]</title>。
  - 在项目根目录编写 ASSETS.md，如资源（Assets）下所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg、wav 样本和六张图片。保持在 12 MB 以下。

## 变量
- [ARTIST] — 艺术家名称（默认："Marisol Wave"）。虚构的艺术家/乐队名称。用于字标、标题、页脚、电子邮件（list@ + 不含连字符的 artistSlug + .com）以及 localStorage 键。绝不使用真实音乐人的名字。
- [GENRE] — 流派（默认："ambient soul"）。用两个词命名这种声音。驱动标题、主视觉文案、一条媒体引语和周边商品文案。保持小写，并且足够独特，使其听起来像是某人真实存在的流派。
- [HOMETOWN] — 家乡（默认："New Orleans, Louisiana"）。艺术家的出身地。用于标题、主视觉副文案和媒体资料包简介。可以使用真实城市。
- [RELEASE] — 最新发行作品（默认："Slow Static"）。最新发行作品的标题（虚构的专辑/EP）。驱动发行区块的标题、主视觉副文案以及某一巡演行的"album night"备注。
- [CREDIT] — 在页脚保留一个小型"Template by VibeFather"链接，指向 https://vibefather.ai/t/musician-website（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值撰写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 舞台黑（Stage Black）`#0C0A09` — 全站页面背景 — 关灯后的房间。
- 幕布（Curtain）`#171412` — 交替区块背景（Release、Press）、卡片凹槽、悬停填充。
- 烟雾（Smoke）`#221E1B` — 卡片、播放器栏、输入框、购物袋抽屉表面。
- 奶油（Cream）`#F2E9DC` — 主文本：标题、正文、深色背景上的按钮。
- 灰烬（Ash）`#9A8F85` — 次要文本、说明文字、眉题、关闭/售罄状态。
- 琥珀光（Amber Light）`#E8A13C` — 唯一强调色：播放图标、可视化条、进度填充、价格、焦点环、跑马灯灯泡。
- 深琥珀（Amber Deep）`#C4831F` — 琥珀色的悬停与按下状态。
- 酒红（Wine）`#7C2D3E` — 安静的第二色：售罄删除线、手绘插画中的黑胶唱片标签、深色悬停色调。
- 分隔线深色（Rule Dark）`#2E2925` — 1px 细线、卡片边框、输入框边框、巡演行分隔线。

### 字体排印（Typography）
- 展示字体：H1、H2、字标、曲目和日期标题、周边商品名称 — Oswald 高挑且带字距：Oswald（OFL），字重 400/600
- 文本与 UI：正文、眉题、按钮、播放器控件、说明文字；时长和价格使用等宽数字：Work Sans（OFL），字重 400/500/600

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1120px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 104px、1024px 以下 76px、640px 以下 60px — 暗色房间需要呼吸感。字号阶梯：H1 clamp(56px, 10vw, 132px) Oswald 600 大写 letter-spacing 0.04em，line-height 0.95；H2 clamp(30px, 4vw, 48px) Oswald 600 大写；曲目/日期标题 Oswald 400 22px；导语 Work Sans 400 17px / 1.7 Cream 85% 不透明度；正文 15.5px / 1.7（max-width 62ch）；眉题 Work Sans 600 11px 大写 letter-spacing 0.24em Ash；说明文字 12.5px Ash。按钮：高度 48px，Work Sans 600 13px 大写 letter-spacing 0.08em。播放 CTA：Amber Light 填充，Stage Black 图标。次要按钮：1px Cream/35% 边框，Cream 文本。输入框：高度 48px，Smoke 填充，1px Rule Dark 边框，聚焦时 Amber 边框。全局焦点环：2px Amber Light 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、周边商品磁贴和播放器栏为 4px — 如舞台般锐利。仅播放圆形按钮、音量旋钮和状态胶囊使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于播放器状态和抽屉。缓慢淡入，俱乐部节奏。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(14px) 开始，在 12% 可见时（Motion whileInView，viewport once）以 750ms --ease-out 落定。同级元素错开 80ms。
- 动效：首屏：舞台照片变暗 5% 并在 2800ms 内从 1.05 缩放至 1.0；艺人名称的单词以 120ms 错开上升；一道琥珀色光扫过名称一次（渐变遮罩，1200ms，在减少动态效果下关闭）。
- 动效：播放器：播放时播放圆形按钮轻柔脉动（scale 1→1.05，1600ms 循环，在减少动态效果或暂停时关闭）；可视化器的 24 条从分析器的真实电平动画（requestAnimationFrame，60fps，音频暂停时暂停）；进度填充即时跟随；音量旋钮拖动时旋转。
- 动效：巡演行：悬停时填充 Curtain，状态胶囊变亮；售罄行带有一条 Wine 删除线，悬停时绘制一次。
- 动效：周边商品：悬停时上浮 3px，价格跳动为 Amber；加入购物袋时，一个小黑胶图标从卡片飞向购物袋按钮（600ms，一次），计数弹跳 1→1.3→1。
- 动效：购物袋抽屉：遮罩 Stage Black 60% 淡入 250ms；抽屉从右侧滑入 400ms --ease-out；移除时行折叠 240ms。
- 动效：邮件列表：无效时抖动 4px 并显示内联提示；加入后切换为 'you''re on the list'（一个手绘琥珀色信封印章缩放进入）并在刷新后保持。
- 动效：跑马灯：巡演滚动条以 40px/s 匀速滚动，悬停时暂停，在减少动态效果下静止。
- 动效：prefers-reduced-motion: reduce — 无脉动、光扫、飞行动画或跑马灯；可视化器显示静态等高行；颜色/边框悬停保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：舞台灯光摄影，全部六张为本模板以统一风格制作：深黑、单一温暖琥珀光源、雾气和散景 — 舞台、乐器、房间；绝不出现人物（无面部、无手、无艺人剪影）。无可读文字或标牌。每张照片使用 object-fit cover，object-position 见 Assets 下说明，4px 圆角，无阴影；Stage Black 上的照片加 1px Rule Dark 轮廓。说明文字使用 Work Sans 12.5px Ash。代码绘制：黑胶图标、跑马灯灯泡、信封印章、播放三角形和 favicon。图标：仅使用 lucide-react，描边宽度 1.75。

## 页面与区块
### 首页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[ARTIST] = Marisol Wave，[GENRE] = ambient soul，[HOMETOWN] = New Orleans, Louisiana，[RELEASE] = Slow Static）。将每个字符串、时间和价格放入 src/content.ts 并从中渲染。若任何变量值不同，请重写主视觉、曲目列表、巡演行、周边、媒体资料包和引语，使其对新艺人具体且可信，保持相同结构和数量（6 首曲目、5 个日期、4 件周边、3 条媒体引语、5 项媒体资料包资产）。所有场地、媒体渠道和引语均为虚构；音频样本由构建生成，播放器 UI 标注为 'sample loop — build-generated'。发行 '[RELEASE]' 曲目列表：'Static Bloom' 4:12；'Amber Room' 3:48；'Slow Static (title)' 5:02；'Hold the Hiss' 2:57；'Ninth Ward Hum' 6:14；'Outro (Dust)' 3:33。巡演（城市 · 场地 · 备注 · 状态）：'New Orleans · The Amber Room · album night, two sets' tickets；'Atlanta · The Loggia · with string quartet' tickets；'Nashville · Bell & Antler · seated, early' sold out；'Austin · Neon Chapel · late show' tickets；'Marfa · Static Field Festival · one-off under the stars' invite。周边：'Slow Static LP (black 180g)' $28；'Cassette + digital' $14；'Amber Room tee' $32；'Tote — hold the hiss' $18。
   布局：不适用
   动效：不适用
2. **页眉** — 左侧：字标 '[ARTIST]'（Oswald 600 19px 大写 字距 0.12em）链接至 ./index.html。导航（Work Sans 600 13px 大写 字距 0.08em）：'Music' → #music，'Tour' → #tour，'Merch' → #merch，'Press' → #press；右侧为 BagButton（Lucide ShoppingBag + Amber 计数胶囊）打开 BagDrawer。低于 760px：字标 + 购物袋 + 一个 Menu 图标打开 Curtain 全屏菜单。
   布局：吸顶，高度 68px，Stage Black/85% 模糊，Rule Dark 边框 — 滚动时房间保持黑暗。
3. **主视觉** — 全出血 hero-stage.webp（92svh）置于 Stage Black 渐变之下。居中：眉题 'AMBIENT SOUL · [HOMETOWN]'；H1 艺人名纵向堆叠；副行 ''[RELEASE]'' — the new record, six songs about bad reception and good rooms.'（Work Sans 16px Cream 80% 不透明度）；PlayButton — 一个 72px 琥珀色圆形按钮，启动样本循环并将 #music 滚动到视图中 — 配文 'press play — 12-second sample loop, generated at build'。
   布局：照片 object-position 50% 45%；渐变 rgba(12,10,9,0.55)→rgba(12,10,9,0.2)→rgba(12,10,9,0.9)。名称居中 最大宽度 900px；播放 CTA 位于副行下方 32px。
4. **发行与播放器** — 区块 id='music'。两栏。左侧：专辑块 — 一个绘制的黑胶唱机 SVG（音频播放时唱片缓慢旋转；标签为 Wine 色，显示 '[RELEASE]'），曲目列表为 TrackRows（编号、标题、时长 表格数字；标题曲带有一个小的琥珀色 'sample' 标签），以及一行：'streaming everywhere fine music is algorithmically denied to you.' 右侧：Player 卡片置于 Smoke 上 — 曲目标题 'Slow Static (title) — sample'，Visualizer（24 条琥珀色柱），SeekBar（循环点位于 0:00/0:12，实时），VolumeControl，以及说明 'All audio on this page is generated by the build — no recordings were harmed or licensed.'
   布局：Curtain 背景。左侧 5 列（黑胶 280px，曲目以细线分隔），右侧 6 列偏移 1 吸顶 96px。低于 1024px：堆叠，播放器在前。
5. **巡演** — 区块 id='tour'。眉题 'ON THE ROAD' 和 H2 'FIVE ROOMS.' DateRows：城市（Oswald 400 24px），场地 + 备注（14px Ash），状态胶囊在右 — 'tickets'（Amber 描边，href '#'，占位），'sold out'（Wine 删除线，不可交互），'invite'（Ash）。行以细线分隔；列表上方的 Marquee 以 Oswald 字体滚动 'NEW ORLEANS · ATLANTA · NASHVILLE · AUSTIN · MARFA ·'，带琥珀色灯泡分隔符。
   布局：Stage Black 背景。Marquee 为细线边界条带 36px 高；行 64px 高，悬停填充 Curtain；容器最大宽度 860px。
6. **周边** — 区块 id='merch'。眉题 'TAKE SOME OF IT HOME' 和 H2 'MERCH, FOUR WAYS.' MerchCards：照片（或 LP/磁带使用绘制的黑胶艺术），名称（Oswald 20px），价格（Work Sans 600 表格数字，Amber），'Add to bag' 深色底次级按钮；页眉中的购物袋计数器跳动。BagDrawer：行项目带数量步进器、总计，以及说明 'This demo bag lives in your browser — checkout is a rumor we don't spread.'
   布局：Curtain 背景。4 列 20px 间距（低于 900px 为 2 列，低于 640px 为 1 列）；卡片置于 Smoke 上，带 Rule Dark 边框，4px 圆角；抽屉从右侧 360px。
7. **媒体资料包** — 区块 id='press'。眉题 'FOR THE WRITE-UPS' 和 H2 'PRESS KIT.' 五项描述资产的列表，每项为一行，带图标和 '#' 占位链接：'Photos — 6 stage shots, 3000px, credit [ARTIST]'；'Bio — short (60 words) and long (240)'；'One-sheet — [RELEASE], quotes and numbers'；'Stage plot — one page, PDF'；'Rider — the honest version (tea, one lamp)'。旁边三条媒体引语：'"A voice like a dial tone you actually want to hear."' — 'Nightpost (invented)'；'"[GENRE] that finally respects silence."' — 'The Listener (invented)'；'"We played the sample loop eleven times writing this."' — ' Tape Kitchen (invented)'。
   布局：Stage Black 背景。资产 6 列细线分隔；引语 5 列偏移 1，Oswald 22px / 1.45，Ash 署名。
8. **邮件列表与页脚** — JoinStrip（id='join'）：一个 Curtain 条带 — 'one email a month: dates, demos, no urgency.' 配电子邮件输入框 + Amber 'join' 按钮，内联确认（'you''re on the list — first letter lands with the next moon.'），本地保存。页脚：Stage Black 带 Rule Dark 顶部边框；三栏：1）字标 + '[ARTIST]' 上方 '[GENRE] · [HOMETOWN] · [RELEASE], out now'；2）'Write'：list@ + emailDomain；3）'Around'：Music、Tour、Merch、Press、join 锚点。底部行：'© [ARTIST]. Sample audio generated at build; bulbs drawn by hand.'
   布局：JoinStrip 垂直内边距 72px 居中 最大宽度 560px；页脚内边距 56px，3 列，底部行位于 Cream/10% 分隔线下方 28px。低于 768px 堆叠。

## 资源

- 图片：为本设计制作的模板照片（可随模板自由再分发）。使用 curl -L -o 将每个文件下载到 public/images/：https://media.vibefather.ai/assets/0828a284-0cfb-4376-a947-c7db26adbdd2/hero-stage.webp → public/images/hero-stage.webp（Hero；object-position 50% 45%；alt 'An empty stage washed in a single amber spotlight through haze'）；https://media.vibefather.ai/assets/0828a284-0cfb-4376-a947-c7db26adbdd2/keys-amber.webp → keys-amber.webp → public/images/keys-amber.webp（Release 侧；alt 'A vintage electric piano lit amber in a dark room'）；https://media.vibefather.ai/assets/0828a284-0cfb-4376-a947-c7db26adbdd2/vinyl-turntable.webp → public/images/vinyl-turntable.webp（Merch LP；alt 'A record spinning on a turntable under low light'）；https://media.vibefather.ai/assets/0828a284-0cfb-4376-a947-c7db26adbdd2/cassette-dark.webp → public/images/cassette-dark.webp（Merch 磁带；alt 'A black cassette tape on a dark surface with amber light'）；https://media.vibefather.ai/assets/0828a284-0cfb-4376-a947-c7db26adbdd2/tee-merch.webp → public/images/tee-merch.webp（Merch T 恤；alt 'A folded plain t-shirt under a single warm lamp'）；https://media.vibefather.ai/assets/0828a284-0cfb-4376-a947-c7db26adbdd2/room-bokeh.webp → public/images/room-bokeh.webp（Press/Join 侧；alt 'A dark venue room with amber bokeh lights'）。共六个文件。注意：此条目原本包含一个重复路径笔误（keys-amber.webp 出现了两次）；请严格保留上述六个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一个表格：path、source URL、author、license——每张照片一行（source 为 'media.vibefather.ai, made for this template'，author 为 'VibeFather'，license 为 'Distributed with the template'），另有一行对应 public/audio/sample-loop.wav（'Generated by scripts/make-sample.mjs at build; no third-party audio'），再加上 @fontsource/oswald 和 @fontsource-variable/work-sans（OFL-1.1）以及 lucide-react（ISC）的行。绝不要用图库网站或包含人物、面孔、手或可辨识品牌标识的图片替换照片；绝不要打包第三方音频。
- 图标：仅使用 lucide-react：Play、Pause、Volume2、ShoppingBag、Plus、Minus、X、Ticket、Download、Mail。描边宽度 1.75，16–24px，颜色继承。黑胶/唱盘图案、跑马灯灯泡、信封邮票、播放三角形和 favicon 均为绘制的 SVG。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的圆形填充 #0C0A09，带 1px 琥珀色（#E8A13C）圆环，中央是一个琥珀色播放三角形。没有其他 logo：艺术家名称始终以文字排版呈现；没有真实平台或票务标识。
- 字体：安装 @fontsource/oswald 和 @fontsource-variable/work-sans，并按 Setup 中所述在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。
- 视频：音频资源：scripts/make-sample.mjs 生成 public/audio/sample-loop.wav——一段 12 秒的 Am 五声音阶拨弦琶音（正弦波加指数衰减），节拍上有轻柔底鼓，低增益滤波噪声用于黑胶嘶声，44.1kHz 单声道 16 位，循环无缝。在首次构建前运行一次；提交该 wav 文件。网站仅通过 src/lib/player.ts 中的 Web Audio 图播放这一个文件；不进行网络请求，不使用外部音频，不使用受版权保护的材料。

## 禁止事项
- 无后端、无表单提交、不向任何 API 发起 fetch 请求：邮件列表和购物袋仅在浏览器中保存（localStorage）；音频是通过 Web Audio 播放的打包生成的 wav 文件；票务和媒体资料包链接为 '#' 占位符。
- 此单页上的所有链接均为锚点（./index.html#music、#tour、#merch、#press、#join）加上占位符。
- 一切资源自托管：字体通过 Fontsource，图标以 npm 包或内联 SVG 形式引入，图片下载至 public/images/，音频在构建时生成。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具，不使用外部音频。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/、使用单一命令 npm run build、输出至 dist/ 且小于 12 MB（wav 约 1.5 MB）。
- 不使用真实音乐人、厂牌、场馆、媒体机构或平台；不使用含人物、面部、手部或艺人剪影的照片；不使用可辨识的标牌；不使用任何形式的第三方音频。
- 任何位置均不出现日期或年份；巡演行仅包含城市和备注，绝不包含日历日期；网站绝不显示当天日期。
- 除可选的页脚署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 遵循 prefers-reduced-motion：无脉冲、扫光、跑马灯运动或可视化动画（静态行）；音频播放本身由用户发起，不受影响；颜色/边框悬停效果保留。
- 页面必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零错误；播放器控件、购物袋和表单仅用键盘即可操作（播放器获得焦点时按空格键切换播放，方向键跳转）且有可见的焦点环；音频不得自动播放。
- 保持文案如唱片内页般简洁：不使用 lorem，不使用 'sonic journey'；每首曲目、每个价格和每个场馆均存于 src/content.ts。

---
— Prompt by VibeFather · https://vibefather.ai/t/musician-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
