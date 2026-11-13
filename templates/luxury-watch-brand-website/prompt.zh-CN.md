> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 奢华腕表品牌网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简报
为一个虚构的独立腕表品牌打造的两页网站：近乎黑色的钢与香槟色（champagne）品牌识别；一张微距表盘主视觉；一条品牌工坊横条；一个工艺区块，随滚动逐步展示机芯部件，并配有代码绘制的示意图；一个三行系列网格；一个通过查询路由的型号页面，其 SVG 腕表会随表盘和表带选项实时更新，并显示示例价格；以及一个客户端精品店预约表单。

- 受众：独立腕表与配饰品牌、微型品牌，以及为其打造旗舰页面的工作室。
- 目标：引导访客从欲望走向具体：先被微距表盘打动，在四个滚动步骤中理解工艺，挑选型号，进行配置，并预约到精品店鉴赏。
- 语调：安静、精确、不慌不忙——如同规格表以诗歌般的自信呈现；简短陈述句、等宽标签、零感叹号。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/marcellus（OFL）、@fontsource/jost（OFL）、@fontsource/ibm-plex-mono（OFL）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化：
  - 使用 npm create vite@latest luxury-watch-brand-website -- --template react-ts 搭建脚手架；将 tailwindcss@3.4、postcss 和 autoprefixer 添加为开发依赖；将 motion、lucide-react、@fontsource/marcellus、@fontsource/jost 和 @fontsource/ibm-plex-mono 添加为依赖。
  - vite.config.ts：base 设为 './'，build.sourcemap 设为 false，build.rollupOptions.input 配置两个入口——index.html 和 model.html——以便一条命令构建两个页面。
  - tailwind.config.js：扩展颜色 onyx #0A0A0B、graphite #151619、rhodium #2A2D33、steel #8A9096、champagne #C8A96A、champagne-light #E3CB96、porcelain #EDEDEA；fontFamily 配置 display 'Marcellus'、sans 'Jost'、mono 'IBM Plex Mono'；默认圆角为 0（仅输入框允许 2px）。
  - postcss.config.js：tailwindcss + autoprefixer。
  - src/components/WatchSVG.tsx：配置器手表，完全用 SVG 绘制，viewBox 0 0 400 400——表壳：两个圆 r=170（填充线性钢渐变 #6E7379→#3E4348）和 r=156（描边 #20242A，3px）；表盘：圆 r=140，填充当前选中的表盘选项；时标：十二个 4×18 矩形位于各小时位置，颜色为 champagne #C8A96A（12 点位置为双条），无数字；指针：时针矩形 6×70，分针 4×100，均为 porcelain 色并带 1px onyx 描边，秒针 2×110 为 champagne 色并带 6px 中心帽；表带：表壳上下各一个圆角矩形（120×150，20px 圆角），填充当前选中的表带选项——小牛皮选项带两条 6px 内缩的 1px 缝线，钢选项带钢渐变和三条拉丝链节线；props：dial（'charcoal' #23252B | 'champagne' #C8A96A | 'slate' #39505F）、strap（'black-calf' #1B1B1D | 'chestnut-calf' #6B4A32 | 'steel' 渐变）。
  - src/components/MovementDiagram.tsx：四个纯 SVG 示意图——01 主发条（一条紧密的阿基米德螺旋路径），02 齿轮系（三个带绘制齿形的圆和一条传动比连线），03 擒纵机构（一个杠杆和两个宝石叉瓦，用简单形状表示），04 摆轮（一个带辐条的轮缘和一条游丝螺旋）——每个图带两到三个 mono 注释标签，由 1px rhodium 引导线连接。
  - src/lib/motion.ts：共享变体——reveal（opacity 0→1，y 24→0，800ms cubic-bezier(0.16,1,0.3,1)，100ms 交错，whileInView 仅触发一次），drawLine（stroke-dashoffset 1→0，600ms）——配合 useReducedMotion 回退为普通的 200ms 透明度淡入。
  - 将所有面向用户的字符串和数据集（品牌、产地、models 数组 {id, name, tagline, basePrice, 带差价的表盘选项, 带差价的表带选项, 规格行}、精品店、城市、预约文案）保留在 src/content.ts 中；两个页面都从中读取，以便在一处替换值。
  - model.html 从 location.search 读取 id（?id=meridian）并映射到 models 数组；无 id 或未知 id 时显示第一个模型，绝不出现空状态或未找到状态。页面之间的链接使用文件名：./model.html?id=meridian 和 ./index.html#collection。index.html：<title>[BRAND] — Mechanical Watches</title>；model.html：<title>[BRAND] — Meridian 39</title>（按模型动态生成）；另加一个共享的代码绘制 favicon.svg（onyx 背景上的细 champagne 圆环）。

## 变量
- [BRAND] — 品牌名称（默认：“Averlind”）。为字标、页面标题及文案中每一处提及而虚构的制作者名称。
- [ORIGIN] — 工坊所在城镇（默认：“Greysen”）。该工坊的虚构所在地——主视觉标签、品牌条带及页脚行（'assembled in [ORIGIN]'）。
- [PRICE_FROM] — 入门价格（默认：“$4,900”）。入门型号的起售样品价格——主视觉副行、系列卡片及配置器基础价。
- [WARRANTY] — 服务承诺（默认：“8 years”）。品牌事实行及型号页面详情条中的服务承诺（'[WARRANTY] service promise, inherited not voided'）。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/luxury-watch-brand-website（默认：是；删除此行即可移除）

页面与区块下的文案按默认值撰写。若你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/luxury-watch-brand-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
