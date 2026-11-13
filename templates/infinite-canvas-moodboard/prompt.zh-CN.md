> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 无限画布（Infinite Canvas）情绪板（Moodboard）

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
[BRAND] 为 [PROJECT] 打造的工作室桌面：一个全视口、可平移可缩放的世界，打开时已被五块有名字的情绪板铺满。照片、便利贴和色卡以轻微旋转、相互重叠的方式躺在一张高饱和度的绿色切割垫上。没有滚动页面，也没有营销区块：画布就是首屏，也是整个产品。访客可以带惯性拖动任何物件，通过缓动镜头在板之间跳转，查看实时小地图，并按一个按钮让所有碎片飞入带标签的分组，再按一次飞回原位。如果变量值与默认值不同，请重写所有文案（板名、便签、图注、色卡名、alt 文本）以适配它们，全部保留在 src/content.ts 中，并保留每个条目的 id、位置、尺寸、旋转、图片文件和标签槽位。

- 受众：创意工作室、艺术总监、室内与品牌设计师，以及希望把一批视觉研究呈现为一个可探索之地的作品集搭建者，面向 [PROJECT]。
- 目标：在第一次拖动后的几秒内，网站就应感觉像工作室每天都在用的真实工具：访客平移、放大到某一块板、甩出一张照片、按标签聚类，再把一切归位。
- 语气：工作室内味：干练、具体、略带主见。便签读起来像同事隔着桌子聊天，带有真实的数量和价格。工具标签简短直白。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react (MIT)、react-dom (MIT)、vite (MIT)、@vitejs/plugin-react (MIT)、typescript (Apache-2.0)、tailwindcss (MIT)、postcss (MIT)、autoprefixer (MIT)、gsap (GSAP Standard License（免费，含商业使用）)、lucide-react (ISC)、@fontsource-variable/bricolage-grotesque (OFL-1.1)、@fontsource-variable/instrument-sans (OFL-1.1)、@fontsource/dm-mono (OFL-1.1)
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务端代码、无外部 API。
- 设置：
  - 创建一个 Vite 5 + React 18 + TypeScript 项目，base 为 './'，build.outDir 为 'dist'，build.sourcemap 为 false。单一入口 index.html，无路由。
  - 用下面这些精确的颜色和 fontFamily display 'Bricolage Grotesque Variable'、body 'Instrument Sans Variable'、mono 'DM Mono' 扩展 Tailwind 主题。
  - 在 src/main.tsx 中导入 Fontsource 包：Bricolage Grotesque variable、Instrument Sans variable、DM Mono 400 和 500。
  - 文件布局：src/content.ts（所有文案和条目数据）、src/camera.ts（相机状态、屏幕/世界转换、适配、惯性）、src/items.ts（条目位置、抛掷物理、弹簧）、src/cluster.ts（聚类布局和弧线）、src/Minimap.tsx、src/Panels.tsx、src/App.tsx。
  - 手写相机和物理。世界：一个绝对定位的 div，transform-origin 为 0 0，transform 为 translate3d(x, y, 0) scale(k)，will-change 为 transform。所有逐帧写入都从单个 requestAnimationFrame 循环通过 refs 直接写入 DOM 样式；React 状态只保存缓慢变化的 UI 状态（选中条目、聚类模式、活动面板、搜索文本、取整后的缩放百分比）。
  - 将 html、body 和 #root 设置为 height 100dvh、overflow hidden、overscroll-behavior none。画布根节点具有 touch-action none 和 user-select none。以 passive false 附加 wheel 监听器并调用 preventDefault。
  - 将图片保存在 public/images 中，并使用相对路径引用它们。在每个 img 上设置 draggable false 和 pointer-events none。
  - 在项目根目录编写 ASSETS.md，列出每张下载的图片，以及 Lucide 和字体。

## 变量
- [BRAND] — 工作室名称（默认：“Quince Yard”）。虚构的工作室；显示在索引卡和页面标题中。
- [PROJECT] — 桌面上的项目（默认：“Samphire Point Hotel”）。这些画板所服务的项目。注释、说明文字和色板名称都跟随它。
- [DIRECTION] — 创意方向语句（默认：“Salt, rope and low light: a hotel that feels like the tide just went out.”）。项目名称下方的一句话。
- [BOARDS] — 五个画板名称（默认：“Arrival, Rooms, Tide Bar, Print, Uniforms”）。逗号分隔，恰好五个，按顺序从 b1 到 b5。
- [TAGS] — 五个标签名称（默认：“Texture, Light, Objects, Pattern, Color”）。逗号分隔，恰好五个。各槽位保持其含义：表面、氛围、物品、重复母题、调色板。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/infinite-canvas-moodboard（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- Mat Green（垫子绿）`#0A5C4B` — 桌面：全视口背景，一块自愈切割垫。人们会记住的颜色。
- Mat Deep（垫子深绿）`#074537` — 视口边缘的径向暗角，从 55% 处的透明渐变到此颜色在 100% 处。
- Dot Minor（次要点）`#2F8B75` — 细网格点。
- Dot Major（主要点）`#7CCDB5` — 每第 8 个网格点，稍大一些。
- Vermilion（朱红）`#FF4A1C` — 唯一的行动色：主按钮填充配 Ink 文字、选中环、小地图视口矩形、活动板标记、Objects 标签圆点。
- Paper（纸色）`#FFF8E8` — 照片垫、色板说明、浮动面板、板标题和垫子上的裁切标记、Color 标签圆点。
- Ink（墨色）`#10231E` — 纸色、便签和朱红上的所有文字。
- Ink Soft（柔和墨色）`#4A5C55` — 仅用于纸色上的次要文字。
- Marigold（万寿菊黄）`#FFC21F` — 便签、70% 不透明度的胶带条、Texture 标签圆点。
- Bubblegum（泡泡糖粉）`#FF9CC7` — 便签、Pattern 标签圆点。
- Sky（天空蓝）`#86D2FF` — 便签、Light 标签圆点。

### 排版
- 展示字体：板标题、项目名称、分组标签、便签文字（字重 500）：Bricolage Grotesque（OFL），字重 500/700/800
- 界面文字：面板行、按钮、标签片、搜索框：Instrument Sans（OFL），字重 400/500/600
- 等宽字体：照片说明、十六进制色值、计数、缩放百分比、便签签名：DM Mono（OFL），字重 400/500

### 布局与动效
- 间距：世界单位在 100% 缩放下为 CSS 像素。浮动面板距视口边缘 16px，间隙 8px；面板内边距 14px；桌面端行高 40px，768px 以下最小点击目标 44px。
- 圆角：纸色元素近乎方形：照片垫和色板 3px，便签 2px。浮动面板 14px，按钮 9px，标签片为完整胶囊形。
- 动效：平移惯性：释放时取最后 80ms 指针采样的速度，上限 3 px/ms，每 16.67ms 乘以 0.94，低于 0.02 px/ms 时停止。
- 动效：缩放：k 限制在 0.08 到 2.5 之间。滚轮和捏合保持光标或手指中点下的世界点固定。
- 动效：元素拖拽：抓取时在 120ms 内抬起（缩放 1.035，旋转缓动至 0，阴影加深，置于顶层）。释放时以最后 80ms 的速度抛出（上限 1.8 px/ms），每 16.67ms 摩擦 0.90，然后弹簧回到静止缩放 1 和原始旋转（刚度 220，阻尼 18，质量 1），带有轻微可见的过冲。
- 动效：相机移动（板、适配、小地图点击、元素）：对进度 t 做 GSAP 补间，缓动 power2.inOut，时长 0.6s + 0.5s * min(1, 距离 / 2500)（世界单位）。世界中心线性插值，log(k) 线性插值，然后将 k 乘以 1 - dip * sin(pi * t)，其中 dip = min(0.35, 距离 / 8000)，因此长距离移动会在中途略微拉远。画布上任何指针或滚轮输入都会终止正在运行的补间。
- 动效：聚合：每个元素在 0.85s 内补间一个进度值，缓动 power3.inOut，沿二次贝塞尔曲线从当前位置到目标位置。控制点为中点沿垂直方向偏移 120 + (index % 5) * 30 世界单位，符号按 index 交替。旋转补间至目标值。延迟 = groupIndex * 0.06s + itemIndexInGroup * 0.035s。返回使用相同的弧线，时长 0.7s，偏移方向相反。
- 动效：加载：元素从透明度 0 和缩放 0.96 淡入到静止状态，按数组顺序以 0.02s 交错，每个 0.4s，缓动 power2.out。提示胶囊在 1s 后淡入。
- 动效：prefers-reduced-motion：无惯性、抛出、弹簧或交错；相机移动和聚合变化为即时切换；抬起仅改变阴影。
- 图像：纸垫上的 18 张照片：6 张来自项目的一次拍摄，12 张来自克利夫兰艺术博物馆开放获取的 CC0 博物馆作品（海岸画、日本波浪版画、纺织品、碗）。与便签和色板一起，它们构成首屏的视觉锚点。其他一切，包括网格、裁切标记、胶带和便签卷角，均用 CSS 绘制。

## 页面与区块
### [BRAND]、[PROJECT]（`index.html`）
1. **桌面（世界与网格）** — 页面无滚动、无页头横幅。视口即绿色桌垫。五块板位于世界坐标（x, y, w, h）中，按 [BOARDS] 顺序命名：
b1 'Arrival' 0, 0, 1080, 960
b2 'Rooms' 1200, -40, 1070, 960
b3 'Tide Bar' 2380, 20, 900, 930
b4 'Print' 120, 1040, 1320, 900
b5 'Uniforms' 1620, 1010, 1310, 900
板无填充。四角显示 Paper 裁切标记（L 形，长 44，粗 3，70% 不透明度），左上角有标题：单色数字（'01'）用 DM Mono 500，26 世界单位，位于名称上方；名称用 Bricolage Grotesque 800，84 世界单位，Paper；件数用 DM Mono 400，26，位于名称右侧。标题位于世界内，随世界缩放。
   布局：Canvas 根节点填满视口。网格层为固定全视口 div，位于世界后方，使用两个径向渐变背景：小点半径 1.2px，大点半径 2px，间距 8x。基础间距为 32 世界单位乘以 k，背景位置跟随相机。k 低于 0.5 时间距乘以 4，使点不变成噪点。暗角层位于网格之上、世界之下，pointer-events 为 none。
初始视图：桌面将所有板适配到安全矩形（左 336，右 48，上 48，下 104）。低于 768px 时将 b1 适配到安全矩形（上 76，两侧 12，下 176）。
   动效：平移：单指或左键拖动空桌面；也可空格 + 拖动或中键在任意位置拖动。桌面上显示抓取光标，平移时显示抓取中。滚轮：ctrlKey 或 metaKey 为捏合，按 exp(-deltaY * 0.01) 缩放。deltaMode 为 1，或整数 |deltaY| 为 40 及以上且 deltaX 为 0，为鼠标滚轮，按 exp(-deltaY * 0.0016) 缩放。其他情况按 deltaX 和 deltaY 平移。两个触摸指针捏合同时平移，并取消任何条目拖动。保持视图中心在世界边界扩展 1200 单位内。
2. **桌面上的条目** — 36 个条目，按此精确数组顺序，也是初始堆叠顺序。位置相对于板原点。格式：id | 类型 | 板 | 标签 | x,y | 宽度 | 旋转 | 文件或颜色 | 说明或注释文本。
p-marsh | photo | b1 | Light | 0,120 | w660 | -1.2 deg | marsh.webp | Marsh at first light
p-lobby | photo | b1 | Texture | 620,150 | w440 | +2 deg | lobby.webp | Lobby plaster and terrazzo
p-pourville | photo | b1 | Light | 60,500 | w400 | +1.4 deg | low-tide-pourville.jpg | Low Tide at Pourville, Monet
n-1 | note | b1 | Light | 470,510 | w240 | -2.5 deg | marigold | Guests arrive after two hours of gravel road. The first room has to say: slow down, the tide sets the schedule. (Ines)
s-sand | swatch | b1 | Color | 730,520 | w150 | -4 deg | #D9C49A | Low-Tide Sand
s-samphire | swatch | b1 | Color | 860,560 | w150 | +5 deg | #6F8F3A | Samphire
n-2 | note | b1 | Texture | 720,700 | w240 | +3 deg | pink | Terrazzo with shell chips for the lobby floor. Ardley Stoneworks quoted $38 per sq ft, 6 weeks. (Tomas)
p-room | photo | b2 | Light | 0,120 | w360 | -1.5 deg | room.webp | Marsh-facing room
p-linen | photo | b2 | Texture | 330,140 | w300 | +2.2 deg | linen.webp | Washed linen, two dyes
p-smallwaves | photo | b2 | Pattern | 610,130 | w460 | -1 deg | small-waves.jpg | Small Waves, Sekka
p-teabowl | photo | b2 | Objects | 360,470 | w320 | -2 deg | tea-bowl.jpg | Tea bowl, Momoyama period
s-seaglass | swatch | b2 | Color | 680,480 | w150 | +3 deg | #8CC7B8 | Sea Glass
s-kiln | swatch | b2 | Color | 820,500 | w150 | -3 deg | #B8AC93 | Kiln Ash
n-3 | note | b2 | Color | 60,640 | w240 | +2 deg | sky | 22 rooms, 9 face the marsh. Those get the blue headboard, the other 13 get ochre. (Priya)
n-4 | note | b2 | Texture | 690,700 | w240 | -3 deg | marigold | Washed linen only, no throw pillows. Tomas, I mean it. (Priya)
p-bar | photo | b3 | Light | 0,120 | w500 | +1.2 deg | bar.webp | Tide Bar at dusk
p-nocturne | photo | b3 | Light | 460,160 | w440 | -2 deg | nocturne.jpg | Nocturne, Whistler
p-marbled | photo | b3 | Objects | 40,540 | w340 | -1.5 deg | marbled-bowl.jpg | Marbled bowl, Northern Song
n-5 | note | b3 | Objects | 380,500 | w240 | +2.5 deg | pink | 14 seats at the zinc counter. The one-sheet menu gets printed daily, so it has to survive a tired copier. (Tomas)
n-6 | note | b3 | Objects | 640,540 | w240 | -2 deg | marigold | This glaze for oyster service? Hollis Kiln needs 6 weeks for 120 pieces, $22 each. (Ines)
s-night | swatch | b3 | Color | 360,720 | w150 | -4 deg | #1F2A33 | Night Harbor
s-rope | swatch | b3 | Color | 510,740 | w150 | +4 deg | #B98B4E | Rope
p-rising | photo | b4 | Pattern | 0,120 | w600 | -1.4 deg | rising-waves.jpg | Rising Waves, Sekka
p-hiroshige | photo | b4 | Pattern | 560,120 | w440 | +1.8 deg | shellfish-susaki.jpg | Shellfish at Susaki, Hiroshige
p-feathered | photo | b4 | Texture | 520,460 | w560 | -1 deg | feathered-panel.jpg | Feathered panel, Peru
p-shawl | photo | b4 | Pattern | 40,590 | w420 | +2 deg | shawl-border.jpg | Shawl border, Kashmir
s-yellow | swatch | b4 | Color | 1000,130 | w150 | +5 deg | #F2B90F | Feather Yellow
s-red | swatch | b4 | Color | 1110,290 | w150 | -3 deg | #B3341E | Oxide Red
n-7 | note | b4 | Pattern | 1050,520 | w240 | +3 deg | sky | Key-card sleeve: crop into this wave, drop the moon. Two inks keep it under $0.40 a sleeve. (Ines)
p-jacket | photo | b5 | Objects | 0,130 | w340 | -1.8 deg | jacket.webp | Indigo chore jacket
p-riga | photo | b5 | Objects | 300,120 | w540 | +1.5 deg | prestige-robe.jpg | Prestige robe, Nigeria
p-munisak | photo | b5 | Pattern | 800,130 | w500 | -1.2 deg | robe-bukhara.jpg | Woman's robe, Bukhara
p-loom | photo | b5 | Pattern | 360,470 | w320 | -2.4 deg | leaf-loom.jpg | Leaf loom width, Alsace
s-indigo | swatch | b5 | Color | 700,470 | w150 | +3 deg | #17305E | Tide Indigo
s-zinc | swatch | b5 | Color | 850,520 | w150 | -4 deg | #8E9A9C | Zinc
n-8 | note | b5 | Color | 1040,530 | w240 | +2.4 deg | pink | Indigo jackets for front of house, undyed aprons in the kitchen. 34 staff at $180 each. (Priya)
注释签名：括号中的名称单独一行渲染为 '— Ines'，DM Mono 400，15 单位。标签位于名称上方，对应 [TAGS] 的槽位 1 到 5。
   布局：照片：Paper 垫，宽度 w，顶部和两侧内边距 10，图像按自然比例填充内部宽度，object-fit cover，然后 34 单位说明行，DM Mono 400，15 单位，Ink，单行带省略号，右侧 9 单位标签点。胶带：p-marsh、p-rising、p-bar、p-jacket 和 p-smallwaves 顶部中央有 96x28 Marigold 条，70% 不透明度，旋转 -3 deg。
注释：正方形 w x w，纯色填充（marigold、pink 或 sky），内边距 20，Bricolage Grotesque 500，20 单位，行高 1.2，Ink。重写注释文本保持在 120 字符以内以适配。右下角卷曲来自 26 单位 linear-gradient 角。
色卡：Paper 卡片 150 x 190，圆角 3，内边距 8。上部 124 单位为纯色，下方名称用 Instrument Sans 600，15 单位，十六进制用 DM Mono 400，13 单位，Ink Soft。
所有条目共享分层阴影：0 1px 1px rgba(3,30,24,.35), 0 6px 12px rgba(3,30,24,.28), 0 18px 32px rgba(3,30,24,.18)。持有时：0 4px 6px rgba(3,30,24,.3), 0 18px 32px rgba(3,30,24,.35), 0 44px 70px rgba(3,30,24,.35)。每个条目为 button 元素，aria-label 来自其说明或注释文本。
   动效：拖动阈值 4px。低于阈值释放为点击：选中条目，3 单位 Vermilion 环偏移 4 单位，外缘 1 单位 Paper 线使其在绿色桌垫上可读；点击色卡还会将其十六进制复制到剪贴板，显示小提示 'Copied #17305E' 持续 1.4s，剪贴板不可用时静默失败。双击将相机缓动适配该条目，留 15% 内边距。板模式下拖动更新条目的原位。集群模式下拖动仅改变其集群位置，因此 Return 仍恢复原位。k 低于 0.45 时照片说明在 150ms 内淡出至 0 不透明度。
3. **索引卡（左上方面板）** — 眉题用 DM Mono 500，12px 大写：'[BRAND] / STUDIO TABLE'。项目名 '[PROJECT]' 用 Bricolage Grotesque 700，26px。[DIRECTION] 用 Instrument Sans 400，14px，Ink Soft。元信息行用 DM Mono 400，12px：'Round 2 of 3 · 36 pieces · 5 boards'。搜索框带 Search 图标和占位符 'Search boards and pieces'。板行：单色数字、名称、件数右对齐（'01 Arrival 7'）。行下方全宽行 'Fit all' 带 Maximize 图标。空搜索状态：'Nothing on the table matches.'。可选 [CREDIT] 链接位于此卡最底部，DM Mono 400，11px，因为站点无页脚。
   布局：固定于 top 16、left 16，宽度 288，Paper，圆角 14，阴影同持有条目。搜索实时过滤板名称和条目说明或注释文本：匹配的板保留为行，匹配的条目在其下方显示为行并带标签点。点击条目行缓动至该条目并选中。视图中心下方板的行获得 3px Vermilion 左侧标记和 Ink 600 文本。
低于 768px 时卡片折叠：top 12、两侧 12 的 52px 顶栏，显示 [BRAND]、活动板名称和 PanelLeft 'Boards' 按钮。按钮打开底部抽屉（最大高度 62dvh，顶部圆角 14，拖动手柄，X 关闭），内容相同。选择行关闭抽屉，然后移动相机。
   动效：行悬停：背景 rgba(16,35,30,.06)。点击板运行相机移动适配该板，在安全矩形内留 8% 内边距。按键：1 到 5 跳转到板，0 适配全部，/ 聚焦搜索，Esc 取消选择并清除搜索。底部抽屉在 240ms 内滑入。
4. **标签栏（左下）** — 主按钮 'Cluster by tag' 带 Shapes 图标，Vermilion 填充，Ink 文本，Instrument Sans 600。然后五个 chip，每个标签一个，各带其点颜色和计数：Texture 5、Light 6、Objects 6、Pattern 7、Color 12。集群时主按钮显示 'Return to boards' 带 Undo2 图标。
   布局：固定于 bottom 16、left 16，单行，Paper 面板圆角 14，内边距 6，间距 4。Chip 为 36px 高胶囊。标签点：Texture Marigold、Light Sky、Objects Vermilion、Pattern Bubblegum、Color Paper 带 1px Ink 轮廓。低于 768px 时栏跨 bottom 12、两侧 12，按钮固定为图标加短标签（'Cluster' / 'Return'），chip 水平滚动并隐藏滚动条。
集群布局，运行时根据测量条目尺寸计算：组使用 [TAGS] 顺序，分两行（槽位 1、2、3，然后 4、5）。每组内按数组顺序将条目货架打包成行，每行最多 1000 单位宽，24 单位间距，缩放 0.8，旋转交替 -1 和 +1 deg。列步幅为最宽组 + 100；行步幅为该行最高组 + 160。整个布局居中于世界中心。每组上方有标签：标签名用 Bricolage Grotesque 800，72 单位，Paper，22 单位标签点，计数用 DM Mono 400，26。集群时隐藏板标题和裁切标记（不透明度 0）。
   动效：'Cluster by tag' 或按键 C：条目沿 Design motion 的弧线飞行，最后一条落定后组标签淡入，相机同时适配整个集群布局。在板上时点击 chip 进入集群模式并适配该组。集群时点击 chip 适配该组并将其他组条目在 200ms 内调暗至 0.28 不透明度；再次点击活动 chip 清除并适配全部。'Return to boards' 或 C 将每个条目送回其精确原位 x、y、旋转和堆叠顺序，然后相机适配所有板。运行中的飞行期间点击从当前位置反向，而非跳跃。
5. **小地图与缩放（右下）** — 缩放控件：Minus 按钮、缩放百分比用 DM Mono 500（'32%'）、Plus 按钮、Maximize 按钮。点击百分比以视口中心返回 100%。按键 + 和 - 以中心缩放 1.25；方向键平移 80px。top 16、right 16 的提示胶囊显示 'Drag the table to pan. Scroll to zoom. Drag anything.'，Instrument Sans 500，13px，Paper 上；首次平移、缩放或拖动后淡出且不再返回。
   布局：堆叠于 bottom 16、right 16 并右对齐，8px 间距：缩放控件在上，小地图在下。小地图为 Paper 面板 232 x 150，圆角 14，内边距 6，内含设备像素比 canvas 和 Mat Green 圆角内矩形。每个条目按其当前位置绘制为填充矩形：照片 Paper，注释其注释颜色，色卡其自身颜色。视口矩形为 1.5px Vermilion 描边，14% Vermilion 填充，描边外 1px Paper 线。低于 768px 时小地图为 128 x 88，位于 bottom 72、right 12，缩放控件位于 bottom 72、left 12，按钮 44px。移动端提示为 'Drag to pan. Pinch to zoom.'，位于顶栏下方。
   动效：仅在相机或条目变化时在共享 rAF 循环中重绘小地图。其边界为所有条目和板的包围盒加 200 单位，集群变化期间每帧以 12% 缓动至新盒。拖动视口矩形以 1:1 移动相机，无缓动。点击小地图其他位置运行相机移动，以当前缩放居中该点。

## 资源

- 图片：第一块板上的条目 p-marsh。下载 https://media.vibefather.ai/assets/cc7c93df-a1a1-4517-ba6b-a6c1e8f6c6ca/marsh.webp 到 public/images/marsh.webp。替代文本：'A salt marsh at dawn with winding blue channels through green samphire flats under an orange sky.' 由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：第一块板上的条目 p-lobby。下载 https://media.vibefather.ai/assets/cc7c93df-a1a1-4517-ba6b-a6c1e8f6c6ca/lobby.webp 到 public/images/lobby.webp。替代文本：'A hotel lobby with limewashed walls, a shell terrazzo floor and a marigold upholstered bench in morning sun.' 由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：第二块板上的条目 p-room。下载 https://media.vibefather.ai/assets/cc7c93df-a1a1-4517-ba6b-a6c1e8f6c6ca/room.webp 到 public/images/room.webp。替代文本：'A guest room with an indigo headboard, rumpled white linen and a tall window onto the marsh.' 由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：第二块板上的条目 p-linen。下载 https://media.vibefather.ai/assets/cc7c93df-a1a1-4517-ba6b-a6c1e8f6c6ca/linen.webp 到 public/images/linen.webp。替代文本：'Folded washed linen in indigo and marigold, seen from above on a green table.' 由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：第三块板上的条目 p-bar。下载 https://media.vibefather.ai/assets/cc7c93df-a1a1-4517-ba6b-a6c1e8f6c6ca/bar.webp 到 public/images/bar.webp。替代文本：'A small bar at dusk with a zinc counter, green glazed tile and amber glass pendant lights.' 由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：第五块板上的条目 p-jacket。下载 https://media.vibefather.ai/assets/cc7c93df-a1a1-4517-ba6b-a6c1e8f6c6ca/jacket.webp 到 public/images/jacket.webp。替代文本：'An indigo cotton chore jacket with brass buttons hanging from a wooden peg on a limewashed wall.' 由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：条目 p-pourville。下载 https://openaccess-cdn.clevelandart.org/1947.196/1947.196_web.jpg 到 public/images/low-tide-pourville.jpg。替代文本：'Oil painting of low tide below pale cliffs with gold light on blue water.' 来源页面 https://clevelandart.org/art/1947.196；作者 Claude Monet；Cleveland Museum of Art Open Access，CC0。在 ASSETS.md 中记录路径、来源 URL、作者和许可。
- 图片：条目 p-smallwaves。下载 https://openaccess-cdn.clevelandart.org/1988.23.2.20/1988.23.2.20_web.jpg 到 public/images/small-waves.jpg。替代文本：'Woodblock print of low, layered waves in sand and pale gray bands.' 来源页面 https://clevelandart.org/art/1988.23.2.20；作者 Kamisaka Sekka；Cleveland Museum of Art Open Access，CC0。在 ASSETS.md 中记录路径、来源 URL、作者和许可。
- 图片：条目 p-teabowl。下载 https://openaccess-cdn.clevelandart.org/1983.158/1983.158_web.jpg 到 public/images/tea-bowl.jpg。替代文本：'A rough brown stoneware tea bowl on a gray ground.' 来源页面 https://clevelandart.org/art/1983.158；作者 Unknown maker, Japan, Momoyama period；Cleveland Museum of Art Open Access，CC0。在 ASSETS.md 中记录路径、来源 URL、作者和许可。
- 图片：条目 p-nocturne。下载 https://openaccess-cdn.clevelandart.org/1941.89/1941.89_web.jpg 到 public/images/nocturne.jpg。替代文本：'Gray print of a lone boat on still water with a dim town behind it.' 来源页面 https://clevelandart.org/art/1941.89；作者 James McNeill Whistler；Cleveland Museum of Art Open Access，CC0。在 ASSETS.md 中记录路径、来源 URL、作者和许可。
- 图片：条目 p-marbled。下载 https://openaccess-cdn.clevelandart.org/2012.449/2012.449_web.jpg 到 public/images/marbled-bowl.jpg。替代文本：'A ceramic bowl with swirling brown and cream marbled clay.' 来源页面 https://clevelandart.org/art/2012.449；作者 Unknown maker, China, Northern Song dynasty；Cleveland Museum of Art Open Access，CC0。在 ASSETS.md 中记录路径、来源 URL、作者和许可。
- 图片：条目 p-rising。下载 https://openaccess-cdn.clevelandart.org/1988.23.1.7/1988.23.1.7_web.jpg 到 public/images/rising-waves.jpg。替代文本：'Woodblock print of a cream wave curling around a pale moon on deep navy.' 来源页面 https://clevelandart.org/art/1988.23.1.7；作者 Kamisaka Sekka；Cleveland Museum of Art Open Access，CC0。在 ASSETS.md 中记录路径、来源 URL、作者和许可。
- 图片：条目 p-hiroshige。下载 https://openaccess-cdn.clevelandart.org/1985.315/1985.315_web.jpg 到 public/images/shellfish-susaki.jpg。替代文本：'Woodblock print of people gathering shellfish on tidal flats under a peach sky.' 来源页面 https://clevelandart.org/art/1985.315；作者 Utagawa Hiroshige；Cleveland Museum of Art Open Access，CC0。在 ASSETS.md 中记录路径、来源 URL、作者和许可。
- 图片：条目 p-feathered。下载 https://openaccess-cdn.clevelandart.org/2002.93/2002.93_web.jpg 到 public/images/feathered-panel.jpg。替代文本：'A textile panel of blue and yellow feathers in large checker blocks.' 来源页面 https://clevelandart.org/art/2002.93；作者 Unknown maker, Peru, Far South Coast；Cleveland Museum of Art Open Access，CC0。在 ASSETS.md 中记录路径、来源 URL、作者和许可。
- 图片：条目 p-shawl。下载 https://openaccess-cdn.clevelandart.org/1934.199/1934.199_web.jpg 到 public/images/shawl-border.jpg。替代文本：'A woven shawl border with red and green curving cone motifs on gold.' 来源页面 https://clevelandart.org/art/1934.199；作者 Unknown maker, Kashmir；Cleveland Museum of Art Open Access，CC0。在 ASSETS.md 中记录路径、来源 URL、作者和许可。
- 图片：条目 p-riga。下载 https://openaccess-cdn.clevelandart.org/2013.6/2013.6_web.jpg 到 public/images/prestige-robe.jpg。替代文本：'A wide indigo robe with pale embroidered panels, laid flat.' 来源页面 https://clevelandart.org/art/2013.6；作者 Unknown maker, Nigeria；Cleveland Museum of Art Open Access，CC0。在 ASSETS.md 中记录路径、来源 URL、作者和许可。
- 图片：条目 p-munisak。下载 https://openaccess-cdn.clevelandart.org/2009.267/2009.267_web.jpg 到 public/images/robe-bukhara.jpg。替代文本：'A flared robe in a bold plum, yellow and red ikat pattern.' 来源页面 https://clevelandart.org/art/2009.267；作者 Unknown maker, Bukhara, Uzbekistan；Cleveland Museum of Art Open Access，CC0。在 ASSETS.md 中记录路径、来源 URL、作者和许可。
- 图片：条目 p-loom。下载 https://openaccess-cdn.clevelandart.org/1935.113/1935.113_web.jpg 到 public/images/leaf-loom.jpg。替代文本：'A deep blue printed cotton with pale stylized leaf sprays.' 来源页面 https://clevelandart.org/art/1935.113；作者 Unknown maker, Alsace, France；Cleveland Museum of Art Open Access，CC0。在 ASSETS.md 中记录路径、来源 URL、作者和许可。
- 图标：仅通过 lucide-react 使用 Lucide（ISC）：Search、Plus、Minus、Maximize、Shapes、Undo2、PanelLeft、X。默认描边宽度 1.75。在 ASSETS.md 中列出一次。
- 字体：通过 Fontsource 自托管：@fontsource-variable/bricolage-grotesque、@fontsource-variable/instrument-sans 和 @fontsource/dm-mono，在 src/main.tsx 中导入。均为 OFL-1.1。

## 禁止事项
- 不涉及后端、服务器代码、API 路由、数据库、认证、账户、同步或上传：画板是 src/content.ts 中的本地示例数据，刷新后会恢复初始布局。不要添加任何形式的保存功能。
- 不使用 canvas、白板或设计工具 SDK，也不使用拖拽或手势库。相机、惯性、抛掷物理和弹簧均为从零编写；GSAP 仅负责相机和集群补间动画。
- 不得复制任何现有白板或设计工具的 logo、产品名称、工具栏布局、图标集或光标样式。使用此处给出的面板位置和原生抓取光标。
- 不使用商业授权 canvas SDK 或受限 UI 库（如 Aceternity UI 或 Tailwind Plus）的代码。
- 不复制现有情绪板产品的文案、示例画板或引导文本。不要教程覆盖层；唯一的提示胶囊是唯一的引导。
- 不使用真实设计师、广告活动、杂志或社交图片收藏网站中的图片，也不使用展示可识别品牌、logo、包装或作为品牌使用的地标的照片。
- 不使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件。仅使用列出的 18 张图片，下载到 public/images。
- 不使用商业字体，也不使用来自 fonts.googleapis.com、fonts.gstatic.com、Adobe Fonts 或任何 CDN 的字体。通过列出的 Fontsource 包自托管。
- 不要将桌面改为米白色、奶油色或中性灰色：带有 Paper 纸片和 Vermilion（朱红）的绿色垫子是此模板的身份标识。
- 不要添加滚动页面、落地页区块、导航栏、定价或页脚带。画布是唯一的屏幕。
- 界面中不出现日期或年份。
- 不使用分析工具、CDN 脚本或链接标签，或任何形式的外部请求。所有内容都打包在 dist/ 中。
- 生产构建需压缩，无 source map，dist/ 中无 src/；保持 Vite base 为 './'，dist/ 小于 20 MB。
- 任何内部链接都指向文件名，如 ./index.html，绝不指向裸目录。
- 必须在 1440x900 和 390x844 下正常工作，包括触摸操作，控制台零错误，并且必须按规范尊重 prefers-reduced-motion。
- 除可选的 [CREDIT] 链接外，网站中不得提及 VibeFather。所有文案均为美式英语。

---
— Prompt by VibeFather · https://vibefather.ai/t/infinite-canvas-moodboard · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
