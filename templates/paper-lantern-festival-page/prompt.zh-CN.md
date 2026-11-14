> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 纸灯笼节页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个原创的单页纸灯笼节，名为 [FESTIVAL_NAME]，位于虚构的 [RIVER_NAME] 之上。欢迎标题为 [HEADLINE]，为 [AUDIENCE] 而写，配有由 [WISH_THEMES] 塑造的原创环境祝愿。一个全宽的活动 Canvas 2D 河流场景承载首屏。其旁，一个三步 DOM 组合器让每位访客写下私人心愿、折叠一盏 SVG 纸灯笼，并将其释放到动画天空中。已释放的心愿会保存在个人本地画廊中，带有“再次释放”和“移除”操作。仅使用程序化 Canvas 2D、本地 SVG、CSS 和原创文案；不要复制现有活动或灯笼网站。

- 受众：为 [AUDIENCE] 撰写欢迎语、心愿提示、辅助文本和环境祝愿。体验应让首次访客无需说明或账户即可理解。在桌面、触摸屏和键盘上，通过普通带标签的按钮和字段保持核心的写-折-放工作流可用；画布移动和指针视差是装饰性增强，绝不是必需的输入。
- 目标：在五秒内，展示一个层次丰富的夜晚河流、许多温暖的灯笼，以及一个明显的写心愿之处。让从文字到折叠纸张再到释放光芒的过渡感觉连贯且有回报，然后让保存的心愿在重新加载后易于找到。在折叠过程中保留草稿，本地最多保留 24 个已释放的心愿，并将整个体验作为静态文件交付，不发起外部数据请求。
- 语气：温柔、安静、世俗，略带诗意，而非神秘或感伤。使用简洁的美式英语和具体的交互反馈。将灯笼视为原创纸艺物件，而非神圣象征或对文化真实性的主张。绝不要承诺心愿会成真。明确说明环境祝愿是虚构的，访客心愿保留在当前浏览器中，且没有实时公共信息流。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：原生 CSS 配合自定义属性
- 库：react 和 react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、lucide-react（ISC）、@fontsource/fraunces（OFL-1.1）、@fontsource/manrope（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 创建 package.json，脚本为 dev = vite、build = tsc --noEmit && vite build、preview = vite preview。配置 vite.config.ts，设置 base './'、build.outDir 'dist'、build.sourcemap false、build.target 'es2020'，并启用压缩。使用单个 index.html 入口，无路由，无后端。
  - 按如下方式组织项目：src/content.ts 存放变量值、所有可见文案和十二条环境愿望；src/types.ts 存放灯笼和已保存愿望的记录；src/lib/random.ts 存放种子生成逻辑；src/lib/storage.ts 存放经过校验的持久化逻辑；src/components/FestivalCanvas.tsx 负责渲染和模拟；src/components/WishComposer.tsx 负责仪式流程和 SVG 折叠预览；src/components/LanternGallery.tsx；src/App.tsx 负责共享状态；src/styles.css 存放设计令牌和响应式规则。当变量变化时，重写所有依赖的愿望、标签、存储命名空间和说明文字以匹配新值；不得残留默认品牌或默认节日的痕迹。
  - 通过所列的 Fontsource Latin 包自托管 Fraunces 400、500 和 600，Manrope 400、500、600 和 700，以及 IBM Plex Mono 400 和 500。设置 lang en、纯文本文档标题 '[BRAND] — [FESTIVAL_NAME]'、theme-color #070C18，以及一个原创的本地 favicon.svg，展示与场景中相同的简单六面板灯笼几何形状。不使用字体 CDN 或远程 favicon。
  - 用 id、kind（ambient 或 personal）、personal 时的 wishId、归一化 x 和 y、0.35 到 1 的 depth、0.55 到 1.18 的 scale、phase、sway、rotation、cycle 和 releaseAge 表示每个场景灯笼。每个已保存愿望仅用 id、text、ordinal 和 paperTone 表示；不存储时间戳、位置、访客身份或分析数据。将编辑器草稿保存在 React state 中，将每帧活跃的灯笼数据保存在 refs 中。
  - 使用本地 mulberry32 生成器，种子为 291129，用于初始场景。在桌面宽度下创建 42 个环境灯笼，在宽度低于 760px 时创建 24 个。归一化 x 分布在 0.04 到 0.96，y 分布在 0.09 到 0.68，depth 和 scale 使用上述范围，phase 从 0 到 2π，sway 从 0.6 到 1.4。循环分配十二条默认愿望，但绝不将其段落绘制到画布上。使用相同稳定种子添加 96 颗暗淡星星，拒绝任何距离月亮中心 44 CSS 像素以内的星星。
  - 按以下顺序渲染：天空渐变；96 颗星星和一轮素月；两层远山；两条半透明雾带；远处海岸线；河流渐变和细流线；灯笼倒影光带；按 depth 排序的环境灯笼；活跃的个人灯笼和释放轨迹；然后是近岸剪影和一座小型空置木码头。地平线位于画布高度的 64%，月亮中心位于 18% × 19%，半径 30 CSS 像素，水面占据底部 36%。将所有文本和控件保留在 DOM 中，不要将标签绘制到画布中。
  - 以 28 × 42 CSS 像素的基础尺寸乘以 depth 和 scale，用原创几何形状绘制每个灯笼：浅弧形顶部肩线、轻微收窄的六面板主体、较暗的开放式底座、四条细竖纸肋、温暖的内渐变、柔和的径向光晕，且无文字、徽记、字符或宗教符号。纸张使用 Paper cream #F7EAC8 和 Lantern amber #F6B85F，中心使用 Lantern core #FFE6A3，肋条使用低透明度的 Copper line #8A6848。将光晕半径限制为灯笼宽度的 2.2 倍，以保持文本和剪影清晰。将每个灯笼在水面上镜像为三条短的低透明度垂直光带，而不是清晰的副本。
  - 运行固定的 1/60 秒模拟，最多三个追赶步骤，通过 requestAnimationFrame 渲染，环境漂移期间最高 30 帧每秒，1.4 秒的个人释放期间为 60 帧每秒。环境垂直速度为向上 4 + depth × 7 CSS 像素每秒。水平速度为 wind × (3 + depth × 5) + sin(elapsed × 0.35 + phase) × sway × 1.8 像素每秒。旋转为 sin(elapsed × 0.5 + phase) × 0.055 弧度，亮度变化最多 7%。当环境灯笼从顶部或侧边离开时，将其环绕到河流地平线正下方，递增 cycle 并根据 id 和 cycle 确定性地推导其替代 x；绝不在每帧分配随机值。
  - 风力范围输入具有整数值 0、1 和 2，分别标记为 Still、Gentle 和 Brisk，默认为 Gentle。将这些映射为风力乘数 0、1 和 1.85。暂停环境运动冻结模拟时间而不清除灯笼；继续从相同位置恢复。当 document.hidden 时隐藏画布运动，并在没有大时间差的情况下恢复。桌面端设备像素比上限为 1.75，移动端为 1.5，使用 ResizeObserver 而不重置愿望或环境位置，并清理观察器、监听器和动画帧。
  - 仅在具有精细指针的设备上实现微妙的指针视差：星星最多移动 2 CSS 像素，远山 4，雾 7，近岸/码头 10，方向与归一化指针位置相反，在 200ms 内缓动。个人灯笼不跟随指针。为触摸和减少运动禁用视差，绝不使用滚动劫持或自定义光标，不要将环境灯笼设为必需的点击目标。
  - 将编辑器建模为有限状态机：write、folded、releasing、released。Write 要求修剪后的愿望为 3–120 个 UTF-16 字符，并保持用户文本完全不变。Fold my lantern 进入 folded 并播放一次 SVG 序列。Back to wish 返回 write 而不丢失文本。Release lantern 进入 releasing，在归一化 x 0.48 和 y 0.78 处创建一个个人灯笼，并保存恰好一条画廊记录。1.4 秒后进入 released 并加入正常向上模拟。Write another 仅清除编辑器；画廊保留。在画廊中 Release again 为现有 wishId 在 x 0.48 和 y 0.78 处创建一个个人灯笼，而不添加重复记录。
  - 将折叠预览构建为本地内联 SVG，具有 160 × 160 viewBox 和六个命名多边形组。从扁平的 104 × 104 菱形和四条可见折线开始；在 1100ms 内，在 0–420ms 将四个角向内折叠，在 300–760ms 关闭侧面板，在 680–1100ms 抬起底座并照亮中心。最终呈现与画布上相同的六面板灯笼剪影。仅使用变换和透明度，不使用 3D 库，纸上无文字。在减少运动下，立即显示完成的灯笼。
  - 在 releasing 期间，绘制一条短的琥珀色轨迹，并在 1.4 秒内以 easeOutCubic 将个人灯笼从 y 0.78 插值到 y 0.60，同时 scale 从 0.72 移动到 1。之后，应用正常的个人上升速度 9 + depth × 5 CSS 像素每秒和相同的风力规则。离开视口的个人灯笼保持已保存但变为视觉休眠；Release again 重置其场景位置。减少运动的释放跳过移动和轨迹，立即将灯笼放置在 y 0.58，宣布成功，并保持场景静止。
  - 将已释放的愿望持久化在 localStorage 中，键为从 [BRAND] 的小写连字符 slug 加上 '-lantern-wishes-v1' 派生的版本化键。按释放顺序最多存储 24 条记录，从 1 开始顺序分配序号，不存储真实日期。达到 24 条记录时，为新愿望禁用 Release lantern 并显示 'Your gallery holds 24 wishes. Remove one before releasing another.'；Release again 仍然可用，因为它不添加记录。验证恢复的 JSON 的 version、id、3–120 字符文本、ordinal 和允许的 paperTone；丢弃格式错误的记录，并在存储不可用时静默恢复，显示内联消息 'This browser could not save your gallery; this session still works.'。Remove 需要一次内联确认，按释放顺序顺序重新编号幸存记录，隐藏具有该 wishId 的活跃个人灯笼，并且绝不联系服务器。
  - 为整个仪式使用语义化 DOM 控件：带标签的 textarea、三个愿望提示按钮、步骤按钮、原生风力范围、Pause 或 Resume、画廊的 Release again 和 Remove，以及一个 Reset scene 按钮，仅重置相机/视差和风力，不重置已保存的愿望。画布具有可访问的摘要，命名 [FESTIVAL_NAME]、当前风力和已释放个人灯笼的数量；它不是执行任何操作的唯一方式。使用可见焦点、在活跃编辑器步骤上使用 aria-current、对折叠/释放/保存反馈使用 aria-live polite，并且不要宣布动画帧。
  - 对于 prefers-reduced-motion，将初始的星星、山丘、河流和所有灯笼渲染为完整的静态画面；不要运行环境上升、闪烁、视差、折叠旅行、释放轨迹或自主 UI 移动。保留写入、折叠、释放、画廊、风标签和移除功能，并立即改变状态。监听偏好变化，并适当地停止或重新启动渲染，而不丢失状态。
  - 在项目根目录写入 ASSETS.md，涵盖原始程序化场景和灯笼几何、原始 SVG 折叠预览和 favicon、Lucide ISC，以及所有三个带有 OFL-1.1 许可证的 Fontsource 包。保持每个运行时请求为本地，且 dist/ 低于 20 MB。此模板不需要生成的、库存的、下载的或占位图像文件。

## 变量
- [BRAND] — 项目名称（默认："Avelume"）。一个为字标、文档标题、页脚和本地存储命名空间编造的短名称；绝不是真实的活动或组织。
- [FESTIVAL_NAME] — 节日标题（默认："The Stillwater Ascent"）。一个用于眉题、画布描述、画廊介绍和页脚的简短编造聚会标题。
- [HEADLINE] — 欢迎标题（默认："Let your wish find the sky."）。一个清晰的五到九词邀请语；如果其含义发生变化，请调整支持句。
- [RIVER_NAME] — 虚构的河流或水湾（默认："River Elian"）。一个用于欢迎语和节日注释的编造滨水地点；绝不是真实的地标。
- [AUDIENCE] — 受众（默认："dreamers, friends, and quiet night wanderers"）。一个用于塑造欢迎语、愿望提示和指南文案的通俗语言短语。
- [WISH_THEMES] — 愿望主题（默认："hope, gratitude, and new beginnings"）。三个宽泛的主题，用于重写十二条环境愿望和三条提示建议，不包含预测或建议。
- [CREDIT] — 在页脚保留一个小的 "Template by VibeFather" 链接指向 https://vibefather.ai/t/paper-lantern-festival-page（默认：是；删除此行以移除它）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图像——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图像路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便之后无需触碰组件即可替换内容。

## 设计
### 颜色
- 夜墨（Night ink）`#070C18` — 页面背景、最深天空和模态遮罩。
- 河靛（River indigo）`#0D1830` — 天空过渡、页眉和主要凸起表面。
- 作曲器藏青（Composer navy）`#111D33` — 愿望作曲器、画廊卡片和控制表面。
- 雾青（Mist teal）`#24424B` — 远山、大气带和安静的场景纵深。
- 纸奶油（Paper cream）`#F7EAC8` — 主要文本、灯笼纸和暖色高光。
- 柔和蓝（Muted blue）`#AAB6CB` — 次要文案和非活动控件，具有可读对比度。
- 灯笼琥珀（Lantern amber）`#F6B85F` — 主要操作、活动步骤、焦点环和灯笼边缘。
- 灯笼核心（Lantern core）`#FFE6A3` — 仅用于灯笼照明和微小暖色闪光。
- 铜线（Copper line）`#8A6848` — 纸肋、暖色分隔线和次要装饰规则。
- 琥珀墨（Amber ink）`#261808` — Lantern amber 按钮上的文本。
- 水光（Water glint）`#7EA4B8` — 细流线和冷色河流倒影。
- 夜线（Night line）`#2A3850` — 边框、输入轮廓、步进器轨道和卡片分隔线。

### 排版
- 字标、欢迎 H1、节日注记、画廊标题和已释放愿望文本：Fraunces (OFL)，字重 400/500/600
- 正文、作曲器、按钮、字段、画廊操作和状态消息：Manrope (OFL)，字重 400/500/600/700
- 步骤编号、风标签、愿望计数和小型隐私标签：IBM Plex Mono (OFL)，字重 400/500

### 布局与动效
- 间距：使用 8px 基准单位。桌面外壳最大宽度 1600px，侧边内边距 24px；页眉高 68px。桌面节日主视觉高度为 calc(100svh - 92px)，最小 680px、最大 840px，叠加内边距 48–56px。作曲器宽 380px，内边距 24px，组间距 16px。画廊和仪式区块使用 1280px 内部外壳，桌面垂直内边距 96px、移动端 64px。在 390 × 844 下使用 56px 页眉、16px 侧边内边距、430px 场景、位于其下方的正常流作曲器，以及单列画廊卡片。所有交互目标至少 44 × 44px，页面内容绝不导致水平溢出。
- 圆角：节日舞台使用 20px，作曲器和画廊卡片使用 16px，字段和主要按钮使用 10px，小型控件使用 8px，仅三步指示器和紧凑场景状态胶囊使用 999px。使用 1px Night line 边框和克制的阴影。场景和纸灯笼提供有机曲线；避免将每个控件都嵌套在圆角浮动卡片内。
- 动效：立即渲染完整景观、第一环境灯笼场、标题和书写表单，无启动画面、加载门或阻塞式介绍。环境灯笼仅在第一个绘制画面可见后才漂移。
- 动效：灯笼上升、风摆、微小旋转和 7% 亮度变化遵循精确的固定步长模拟。指针视差按层限制为 2、4、7 和 10 CSS 像素，且绝不移动界面面板。
- 动效：折叠预览是一个连贯的 1100ms 序列：角、侧板、底座，然后内部光。它不循环、不弹跳，也不要求用户拖动纸张。
- 动效：个人释放使用 1400ms easeOutCubic 从码头升起，带短暂渐隐轨迹，然后加入相同的风和上升系统。作曲器成功在 180ms 内交叉淡入淡出，不改变面板宽度。
- 动效：愿望提示、风设置、按钮和画廊操作使用 120–180ms 的颜色、不透明度或最多 4px 移动过渡。减少动效会移除环境漂移、闪烁、视差、折叠行程、释放行程和非必要变换，同时保留即时状态反馈。
- 图像：高工艺程序化 Canvas 2D 河流节日是视觉锚点；不使用照片、生成的位图图像、下载的风景、纸张纹理、视频或外部灯笼艺术。分层叠加靛蓝天空、96 颗稳定星星、朴素月亮、青色山丘剪影、半透明薄雾、细水流、暖色六面板灯笼、柔和光晕、破碎倒影和空置码头。SVG 折叠预览和 favicon 复用相同的原创纸张几何。无人物、面孔、吉祥物、神圣徽记、可识别地标、真实活动标牌或品牌灯笼图像。

## 页面与区块
### [BRAND] — [FESTIVAL_NAME] (`index.html`)
1. **内容模型与精确默认文案** — 将所有可见字符串和全部氛围心愿保留在 src/content.ts 中。默认节日眉题为 '[FESTIVAL_NAME] · [RIVER_NAME]'；H1 为 '[HEADLINE]'；欢迎正文为 'A small imagined festival for [AUDIENCE]. Write one private wish, fold it into light, and let it drift above the water.' 主题行为 'Twelve imagined wishes inspired by [WISH_THEMES]. Yours stays only in this browser.' 默认氛围心愿按顺序为：01 'May I notice the good while it is here.'；02 'For the courage to begin before I feel ready.'；03 'A little more time with the people I love.'；04 'May the next chapter feel like my own.'；05 'For softer days after a difficult year.'；06 'May I make something worth sharing.'；07 'A safe journey home for someone dear.'；08 'For gratitude that outlasts the moment.'；09 'May I forgive myself for taking time.'；10 'For work that leaves the world a little kinder.'；11 'May an old friendship find its way back.'；12 'For a home filled with unhurried mornings.' 三个撰写提示按钮为 'A fresh start'、'Someone I miss' 和 'A little courage'；激活其中一个会分别插入 'May I welcome a fresh start with an open heart.'、'May someone I miss feel how often they are in my thoughts.' 或 'May I find a little courage for the next small step.' 访客可在折叠前编辑插入的文本。对于替代变量，围绕所提供的 WISH_THEMES 和 AUDIENCE 以相近长度重写全部十二个心愿和三个提示建议；不要保留这些默认文本。
   布局：本节定义内容模型，而非单独可见的营销区块。每条氛围记录仅提供 id 和 text；不包含作者、位置、时间戳或模拟访客姓名。个人心愿使用访客精确修剪后的文本。paperTone 通过序数对 3 取模在 cream、honey 和 pale apricot 之间循环，同时保持在声明的暖色调色板内。
   动效：氛围心愿不会作为移动文本显示在画布上。通过礼貌状态区域一次性播报完成折叠、释放、保存、重新启动和移除操作，绝不播报单个动画帧。
2. **页眉与节日欢迎** — 页眉左侧包含原始六面板灯笼 SVG 标记和 Fraunces 500、23px 的 [BRAND]。页眉右侧包含锚点链接 Festival 和 Your lanterns，以及一个小型描边 How it works 按钮，该按钮移动到仪式说明处而不打开模态框。节日欢迎层叠在场景左上方，包含上文精确定义的眉题、H1、正文和主题行。不要在交互场景之前添加账户、定价、推荐语、新闻通讯、公开计数器或单独的营销主视觉。
   布局：页眉横跨外壳，底部有 Night 线边框。桌面端欢迎区在 hero 内最多占据 520px，位于 left 56px 和 top 48px，文本组间距 16px，H1 为 clamp(48px, 4.5vw, 72px)，行高 0.98。移动端页眉保持品牌和 Your lanterns 可见，仅隐藏 Festival 和 How it works 链接；欢迎区位于 left 20px、right 20px 和 top 24px，覆盖在变暗的天空遮罩上，H1 为 40px，正文限制为三行。如果空间紧张，主题行在移动端移动到场景下方；绝不要让撰写器覆盖它。
   动效：欢迎文案在首次绘制时即存在。仅链接、按钮和焦点环有动画；不要标题显现、浮动文本、打字机效果或移动眉题。
3. **活河舞台与场景控制** — 全出血画布描绘 [RIVER_NAME] 上方的 [FESTIVAL_NAME]，使用 Setup 中精确的渲染器和灯笼数量。上方中央的小胶囊标签显示 'AN IMAGINED FESTIVAL · LOCAL ONLY'；不要称氛围灯笼为实时访客。左下控制是一个带标签的 Wind 范围控件，包含 Still、Gentle 和 Brisk，以及 Pause motion 或 Resume motion 按钮。右下包含 RotateCcw Reset scene 按钮和安静说明文字 'Procedural paper, water, wind & light'。画布的可访问描述概括场景，并引导用户前往带标签的风控制和心愿撰写器。氛围灯笼营造氛围，但不是按钮，也不暴露虚假的公开信息流。
   布局：桌面端画布填满整个圆角节日 hero，位于欢迎区和撰写器后方，左右有深色可读性遮罩，保持中央天空可见。场景控制占据底部两角 48px 高的实心 Night-ink-at-88% 条带，避开 dock。移动端画布高 430px，中央胶囊缩短为 'IMAGINED · LOCAL ONLY'，风和暂停控制形成一行底部行，Reset scene 保持带标签，程序化说明文字省略。在画布上设置 touch-action pan-y，使垂直页面滚动保持自然；无需拖动。
   动效：实现 Setup 中精确的种子漂移、风、暂停、释放、视差、帧上限和减少动效行为。风变化影响速度而不跳变位置。暂停和偏好变化绝不重置画廊或草稿。避免控制标签变化时发生布局移动。
4. **三步心愿撰写器** — 撰写器标题为 'Make a little light'，隐私行为 'Your wish is stored only in this browser.' 三项步骤条显示 01 Write、02 Fold、03 Release。在写入状态显示标签 'Your wish'、一个 120 字符的 textarea，占位符为 'What would you like to send into the night?'、实时 '{n}/120' 计数，以及内容模型中的三个提示按钮。主按钮 Fold my lantern 在修剪后的心愿至少有 3 个字符前禁用；辅助文本为 '3–120 characters · nothing is uploaded'。在折叠状态显示完成的 SVG 灯笼、可读奶油纸摘录中的精确心愿、Back to wish 和主按钮 Release lantern。在释放状态禁用重复提交并显示 'Folding the light into the sky…'。在已释放状态显示 Check 图标、'Your wish is drifting.'、心愿摘录、链接到画廊的主按钮 View my lanterns，以及次按钮 Write another。在 Write another 之前不要清空 textarea。
   布局：桌面端 380px 撰写器位于 hero 内 right 40px 和 top 40px，使用 96% 不透明度的 Composer navy、1px Night 线边框、20px 圆角和 24px 内边距。步骤条是单行三列，带有细轨道和琥珀色活动数字。Textarea 高 112px；提示按钮换行而不溢出；主操作全宽且高 48px。折叠 SVG 为 160px 正方形，居中于心愿摘录上方。移动端撰写器离开画布覆盖层，以全宽、20px 内边距、无负边距和无固定高度跟随在正常流中。每个字段和操作保持至少 44px 高。
   动效：使用 Setup 中的有限状态机、1100ms 折叠、1400ms 释放和减少动效替代方案。步骤条使用 aria-current 更新，而非仅靠颜色。成功使用 180ms 不透明度过渡，绝不使用彩纸爆发、toast 库、自动滚动或自动第二个灯笼。
5. **个人灯笼画廊** — 区块眉题为 'YOUR LANTERNS'；标题为 'Wishes you have set afloat.' 仅本地说明为 'Saved on this device, not online. Clearing browser storage will remove them.' 空状态包含一个小型未点亮六面板 SVG、'No wishes released yet.'，以及一个返回撰写器的 Write a wish 锚点。非空画廊卡片显示 'LANTERN {ordinal padded to two digits}'、Fraunces 400 的完整心愿、小型 paperTone 灯笼缩略图、带 Send 图标的 Release again，以及带 Trash2 图标的 Remove。Remove 首先变为内联 'Remove this wish?'，带有 Keep it 和 Remove 操作。Release again 播报 'This wish is drifting again'，且不复制或重排卡片。显示 '1 saved wish' 或 '{n} saved wishes' 的计数；绝不显示日期、位置或公开查看者计数。
   布局：该区块位于 1280px 内壳内的 Night ink 上。其页眉是两列标题/计数行，隐私说明在下方。卡片在 1200px 及以上形成三列网格，平板两列，移动端一列，间距 16px。每张卡片使用 Composer navy、16px 圆角、20px 内边距、72px 灯笼插图列位于灵活心愿文本旁，以及底部细线操作行。长心愿自然换行，不截断或固定高度裁剪；网格使用 align-items start。空状态跨网格，48px 内边距和居中操作。
   动效：Release again 使用标准个人释放，不滚动离开画廊。仅在减少动效关闭时，移除以 160ms 折叠卡片；焦点移动到下一张卡片的 Release again 按钮或空状态操作。保存和错误使用内联文本，而非导致布局移动的 toast。
6. **仪式说明与页脚** — 一条紧凑的编辑式横带，标题为 'A wish, in three small movements'，呈现：01 书写 — 'Choose a prompt or begin with your own words. There is no account and no public submission.'；02 折叠 — 'Watch six paper panels close around the light. You can return and edit before release.'；03 释放 — 'Send the lantern above [RIVER_NAME], adjust the wind, then find the wish waiting in your gallery.' 在其旁边，一则安静的小注标题为 'Private by design'，内容为 'The other wishes are invented for this imagined festival. Your words never leave this browser, and no one can see them here unless you show them.' 页脚包含 [BRAND]、'An imagined gathering shaped by [WISH_THEMES].'、'No public feed · no account · no uploaded wishes'，以及可选的 [CREDIT] 链接。无版权年份。
   布局：仪式横带采用 5/7 网格：标题与隐私说明在左侧，三个编号步骤在右侧，以水平细线分隔。移动端变为单列，步骤位于隐私说明之后。页脚为安静的 flex 行，顶部有 Night 色细线边框，24px 垂直内边距，13px Muted blue 文字，移动端以 12px 间距堆叠。锚点目标具有 scroll-margin-top 24px，且无额外路由。
   动效：该区块与页脚为静态，仅链接颜色有 120ms 变化。仅当未请求减少动效时才允许平滑锚点滚动；否则立即跳转。任何滚动触发的场景固定或显现依赖都不得隐藏此内容。

## 资产
- 图像：不使用任何外部或生成的图像文件。河流、山丘、薄雾、月亮、星星、码头、水流、六角灯笼、光晕、倒影、折叠预览、品牌标识和 favicon 全部使用本地 Canvas 2D、SVG 和 CSS，基于声明的原始几何图形自行创作。在 ASSETS.md 中记录这一原创的程序化创作；不得使用下载的地图、纹理、照片或占位图像。
- 图标：本地打包 lucide-react，用于 Check、Send、Trash2、RotateCcw、Pause、Play、Wind、ArrowDown、ArrowUp 和 PenLine，尺寸 18–20px，使用 currentColor。仅使用常见的工具性含义；不要导入品牌、事件、宗教或第三方灯笼图标。在 ASSETS.md 中记录 Lucide 的 ISC 许可证。
- 字体：安装并自托管 @fontsource/fraunces，仅导入字重 400、500 和 600 的拉丁 woff2 文件。在 ASSETS.md 中记录包路径、来源、作者和 OFL-1.1 许可证；不使用字体 CDN。
- 字体：安装并自托管 @fontsource/manrope，仅导入字重 400、500、600 和 700 的拉丁 woff2 文件。在 ASSETS.md 中记录包路径、来源、作者和 OFL-1.1 许可证；不使用字体 CDN。
- 字体：安装并自托管 @fontsource/ibm-plex-mono，仅导入字重 400 和 500 的拉丁 woff2 文件。在 ASSETS.md 中记录包路径、来源、作者和 OFL-1.1 许可证；不使用字体 CDN。

## 不要
- 不要复制、描摹、重新着色或 closely imitate 现有的灯笼节、活动网站、许愿墙或互动灯笼体验，包括其代码、提示词文本、布局构图、插画、图标、文案、标语、名称、标志、吉祥物或标志性动画素材。此处的程序化场景和交互必须保持原创。
- 不要使用真实的节日名称、标志、品牌灯笼、真实人物肖像、授权角色、可识别的地标天际线、具有文化特定性的神圣符号、宗教图像或文化真实性的宣称。保持河流和活动为虚构，纸艺为通用。
- 不要从其他来源复制愿望、仪式文案、插画、纹理、代码或动画素材。十二条氛围愿望、提示建议、界面文案和替代主题内容必须新撰写并保留在内容模块中。
- 不要将氛围灯笼呈现为实时访客、将愿望呈现为公开提交、或将画廊呈现为在线社区。绝不要承诺愿望会成真。保持想象节日和仅本地存储的披露可见，并且绝不请求姓名、电子邮件、位置、账户或社交资料。
- 不要后端、服务器代码、API 路由、数据库、身份验证、远程表单提交、分析、第三方 API、运行时获取、跟踪像素、社交小部件或公开分享服务。保存的愿望保留在经验证的 localStorage 中，并且仅包含声明的 id、text、ordinal 和 paperTone 字段。
- 不要 CDN 脚本或样式、Google Fonts URL、热链接资源、外部托管的图标、占位图服务、Unsplash、Pexels、Pixabay、Google Images 或具有不明确、非商业或相同方式共享许可证的资源。使用 Vite base './'、相对路径、本地捆绑包和自托管 Fontsource 字体。
- 不要添加图像生成、照片、视频、WebGL、Three.js、canvas 辅助库、状态管理库、动画框架、路由器或外部物理服务。原生 Canvas 2D、SVG、CSS、React 状态和声明的包已足够。
- 不要在 src/content.ts 之外硬编码默认品牌、节日、标题、河流、受众、愿望主题、氛围愿望、提示建议或存储命名空间。替代值必须产生连贯的新文案和十二条主题适当的愿望，没有默认残留或未解析的 [VARIABLE] 占位符。
- 不要绕过写入-折叠-释放状态机、在释放期间允许重复提交、在 Release lantern 激活前保存、在返回愿望时擦除草稿、在再次释放时重复画廊记录、或用 Reset scene 重置已保存的愿望。严格遵循存储上限和验证规则。
- 不要将 touch-action none 附加到 canvas 或页面、要求拖动来折叠纸张、使氛围灯笼成为强制点击目标、使用仅指针控件、自动播放音频、滚动劫持、固定区域、使用自定义光标或将内容隐藏在滚动显示后面。完整的仪式必须通过键盘和触摸工作。
- 不要运行无界灯笼数量、每帧 React 渲染、每帧随机或星形数组分配、无上限设备像素比、隐藏时动画、自主相机移动或忽略 prefers-reduced-motion 的运动。保持固定数量、帧上限、清理和静态减少运动画面。
- 不要使用过度泛光、移动愿望段落、虚假访客计数、公开用户名、时间戳、定价、推荐语、新闻通讯表单、营销部分、启动屏幕或彩纸。节日场景和作曲器是第一屏幕和主要体验。
- 不要添加额外页面、裸目录链接、SEO 标记、结构化数据、Open Graph 工作、站点地图代码或超出纯标题、主题颜色和原始 favicon 的元数据。唯一页面是 index.html，所有导航使用本地锚点。
- 生产 npm run build 必须输出压缩的静态 dist/，低于 20 MB，无源映射，且不将 src/ 复制到 dist/。它必须在 1440 × 900 和 390 × 844 下运行无控制台错误，保持所有点击目标至少 44px，保留长愿望而不裁剪，并且不留水平页面溢出。
- 使用可见焦点、语义按钮和表单标签、可访问的 canvas 摘要、礼貌的状态消息、步骤上的 aria-current，以及不依赖颜色 alone 的选中状态。移除确认和画廊焦点处理必须无需指针即可工作，并且本地存储失败不得中断会话。
- 除了可选的 [CREDIT] 链接外，绝不要在渲染的网站中提及 VibeFather，并且绝不要使用 VibeFather 或真实品牌作为变量默认值。所有文案、标签、示例愿望和可访问文本必须为美式英语。

---
— Prompt by VibeFather · https://vibefather.ai/t/paper-lantern-festival-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
