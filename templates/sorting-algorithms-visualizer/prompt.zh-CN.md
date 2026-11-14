> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 排序算法可视化器

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
[BRAND] 是一个单页、仅浏览器端的排序实验室。可用的可视化器就是首屏：一个大型画布条形图舞台，其传输控件附着其上，前面没有营销主视觉。冒泡、插入、归并、快速和堆排序各自预先计算完整的步骤列表，因此播放、暂停、前进一步、后退一步、拖动和重置都是确定性的。舞台下方是复杂度卡片，其中的计数基于当前数组实测；一个竞速模式，在同一数组和同一时钟上运行两种算法；一张按输入模式列出步骤总数的表格；以及关于如何解读这些数字的简短说明。

- 受众：[AUDIENCE]，他们想看到每种算法实际做了什么，而不是背一张表。
- 目标：让访客无需按任何键就已看到一次排序运行，然后在一分钟内逐步查看、切换算法、更改输入模式，并在相同数据上让两种算法竞速。
- 语气：精确、冷静、仪器般。短标签、平实英语、无感叹号，也不对学习者、结果或流行度做任何断言。页面上的每个数字都由引擎实时计算。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/bricolage-grotesque（OFL-1.1）、@fontsource/ibm-plex-sans（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - vite.config.ts：将 base 设为 './'，build.sourcemap 设为 false。不要将 src/ 复制到 dist/。
  - index.html：纯文本标题 '[BRAND] Sorting Visualizer'，以及指向 ./favicon.svg 的链接。public/favicon.svg 是在 #0D0F12 背景上手工绘制的三根递增的琥珀色和青色柱条。
  - tailwind.config：将设计（Design）部分中的每种颜色添加为具名主题色，并添加 fontFamily 的 display、sans 和 mono。在 src/main.tsx 中导入 Fontsource CSS 文件，仅导入所列字重。
  - 文件布局：src/content.ts 存放所有文案和标签；src/engine/types.ts、src/engine/algorithms.ts、src/engine/arrays.ts 和 src/engine/player.ts 存放纯引擎，不含 React 和 DOM；src/components/ 存放 BarStage、Transport、CounterRail、AlgorithmCards、RaceSection、PatternTable、Notes、Header 和 Footer。
  - src/engine/types.ts 中的 Step 类型：{ k: 'compare', i, j, a, b, range?, pivot? } | { k: 'swap', i, j, range?, pivot? } | { k: 'write', i, value, prev, range? } | { k: 'sorted', indices: number[], range? }。a 和 b 是被比较的两个值，因此当归并排序从其缓冲区进行比较时，解说仍保持正确。range 为 [lo, hi]。pivot 是一个索引。
  - 每个算法都是纯函数 (input: number[]) => Step[]，且从不修改其输入。列表中的每一项都计为一步。界面中的位置从 1 开始索引；引擎中的索引从 0 开始索引。
  - 冒泡：for end from n-1 down to 1，range [0, end]，对 i 从 0 到 end-1 比较 (i, i+1)，当 a[i] > a[i+1] 时交换。每趟结束后发出 sorted [end]。如果某一趟没有发生交换，则一次性为 0..end-1 的所有索引发出 sorted 并停止。如果循环运行到结束，则发出 sorted [0]。
  - 插入：for i from 1 to n-1，range [0, i]，设 j = i；当 j > 0 时，比较 (j-1, j)；如果 a[j-1] > a[j] 则交换并递减 j，否则跳出。最后发出一个包含所有索引的 sorted 步骤。
  - 归并：自顶向下，mid = floor((lo + hi) / 2)，先递归左侧再递归右侧，range [lo, hi]。静默地将该范围复制到缓冲区。使用读游标 i 和 j 以及写游标 k 进行合并：比较 (i, j) 并携带缓冲区值，相等时取左侧值，在 k 处发出 write。用 write 步骤复制剩余项。最后发出一个包含所有索引的 sorted 步骤。
  - 快速：Lomuto 分区，以范围最后位置为 pivot。如果 lo > hi 则返回；如果 lo == hi 则发出 sorted [lo] 并返回。对 j 从 lo 到 hi-1，比较 (j, hi) 与 pivot：hi 和 range [lo, hi]；当 a[j] < pivot 值时，仅当 store != j 时交换 (store, j)，然后递增 store。仅当 store != hi 时交换 (store, hi)。发出 sorted [store]。先递归左侧，再递归右侧。
  - 堆：for i from floor(n/2)-1 down to 0，siftDown(i, n)。for end from n-1 down to 1，交换 (0, end)，发出 sorted [end]，siftDown(0, end)。发出 sorted [0]。siftDown(root, size) 使用 range [0, size-1]：l = 2*root+1，如果 l >= size 则停止；child = l；如果 l+1 < size，比较 (l, l+1) 并选取较大者；比较 (root, child)，如果 a[root] >= a[child] 则停止；否则交换并从 child 继续。
  - src/engine/arrays.ts：带种子的 PRNG mulberry32。默认种子为 2048。n 个值的阶梯：对 k 从 0 到 n-1 计算 round(5 + 95 * (k+1) / n)。随机：对阶梯进行 Fisher-Yates 洗牌。近乎有序：升序阶梯，然后将随机索引与 1 到 3 个位置之后的索引进行 floor(n * 0.1) 次交换。逆序：降序阶梯。少量唯一值：从 20、40、60、80、100 中随机选取 n 个值。洗牌将种子递增 1，因此会话可复现。
  - src/engine/player.ts：给定输入和 Step[]，每 256 步存储一次完整数组快照，并在 Int32Array 中存储比较、交换和写入的前缀计数。跳转到第 k 步时恢复最近的较早快照并向前重放，因此后退和拖拽的代价与向前播放相同。以相同方式推导第 k 步的已排序集合。
  - 播放时钟：使用带时间累加器的 requestAnimationFrame，每帧推进 floor(elapsed * stepsPerSecond) 步，每帧重绘一次。仅在状态变化时重绘画布。画布遵循 devicePixelRatio，并通过 ResizeObserver 调整大小。
  - 在项目根目录写入 ASSETS.md，列出 Fontsource 包和 Lucide 及其许可证，并说明所有视觉元素均由代码绘制。

## 变量
- [BRAND] — 工具名称（默认：“Swapyard”）。显示在页眉、页脚和页面标题中。为自创词，一到两个单词。
- [AUDIENCE] — 目标受众（默认：“computer science students and developers preparing for interviews”）
- [ITEMS] — 条形所代表的内容，复数形式（默认：“numbered cards”）。用于标题和舞台说明文字中，例如 'Sorting 48 numbered cards by number'。
- [MEASURE] — 条形排序所依据的指标（默认：“number”）。用于舞台说明文字、悬停读数和步骤解说中。
- [SETTING] — 解释所用的日常场景（默认：“a table of numbered cards”）。五条单行解释和注释均借用此场景。场景变更时需重写这些内容。
- [CREDIT] — 在页脚保留一个指向 https://vibefather.ai/t/sorting-algorithms-visualizer 的小型 “Template by VibeFather” 链接（默认：是；删除此行即可移除）

Pages & Sections 下的文案按默认值编写。若你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接集中放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- graphite-950 `#0D0F12` — 页面背景和舞台背景
- graphite-900 `#14171C` — 面板、卡片、传输栏
- graphite-800 `#1C2027` — 凸起控件、卡片和按钮的悬停状态
- hairline `#2B3038` — 所有 1px 边框和滑块轨道
- grid `#1E232A` — 画布舞台内淡淡的网格线
- text `#E8EAED` — 主文本和计数器数字
- muted `#8C94A1` — 次要文本、标签和坐标轴数字
- compare `#F5A524` — 唯一的暖色强调：正在比较的条形、播放按钮、选中标签页的焦点
- swap `#3CC8E0` — 唯一的冷色强调：正在交换或写入的条形、焦点环
- bar-idle `#515967` — 活动范围外的条形
- bar-range `#7C8694` — 活动范围内的条形
- bar-pivot `#F4EFE1` — 枢轴条形，始终与其上方的小琥珀色插入符配对
- bar-sorted `#B9C3CF` — 处于最终位置的条形

### 排版
- 展示字体：logo 字标、H1 和章节标题。H1 桌面端 28px、移动端 22px；H2 桌面端 36px、移动端 26px；letter-spacing -0.02em：Bricolage Grotesque（OFL），字重 600/700
- 文本字体：正文 15px、行高 1.55，控件标签 13px，卡片说明 14px：IBM Plex Sans（OFL），字重 400/500/600
- 等宽字体：所有实时数字、步骤读数、复杂度记法、坐标轴数字和小号大写眉标 11px、字距 0.08em。计数器数字桌面端 36px、移动端 22px，使用表格数字：JetBrains Mono（OFL），字重 400/500/700

### 布局与动效
- 间距：4px 基准单位。页面最大宽度 1360px，桌面端 24px 边距、移动端 16px。可视化器下方的章节桌面端垂直内边距 96px、移动端 64px。面板内边距 16px、1px hairline 边框，无阴影。
- 圆角：面板、卡片和按钮 4px。滑块手柄 2px。条形为方形，无圆角。播放按钮是唯一的圆形。
- 动效：自动播放：加载后 400ms，主舞台开始以每秒 50 步的速度播放快速排序，除非设置了 prefers-reduced-motion。
- 动效：条形在步骤之间干脆切换。仅在每秒 12 步或更慢时，被交换的条形才以 ease-out 在步骤间隔的 90% 内滑动；高于该速度则直接切换。
- 动效：完成扫掠：当最后一步落定，一道白色（#FFFFFF）高亮在 700ms 内从左到右扫过条形，每个条形点亮 120ms，然后稳定为 bar-sorted。播放按钮变为重播图标。
- 动效：控件：悬停和按下时 120ms 颜色过渡；卡片悬停时边框从 hairline 提升为 muted，无位移。
- 动效：页内导航平滑滚动；在减少动效下则跳转。
- 动效：prefers-reduced-motion：两个舞台都在第 0 步暂停启动，跳过扫掠，跳过幻灯片，竞速不会自动开始，主舞台下方一行注释显示 'Reduced motion is on, so playback starts paused. Step manually or press play.'
- 图像：无照片或位图。首屏的视觉锚点就是实时可视化器本身，绘制在 canvas 2D 上：淡淡的网格上清晰的条形，配等宽坐标轴数字。logo 字形和 favicon 是手写 SVG 中的三根上升条形。图标为 Lucide，18px，1.75 描边。

## 页面与区块
### [BRAND] 排序可视化器（`index.html`）
1. **页头** — Logo 图形加文字标识 '[BRAND]'。锚点链接：Visualizer（#visualizer）、Algorithms（#algorithms）、Race（#race）、Patterns（#patterns）。右侧：等宽字体小标签 'Runs in your browser'。
   布局：吸顶，高 56px，石墨色-950（graphite-950）92% 不透明度，底部 1px 细线边框。Logo 居左，链接居中，小标签居右。移动端：高 52px，Logo 居左，右侧仅保留 Algorithms 和 Race 两个链接，字号 13px，小标签隐藏。
2. **可视化器（首屏）** — H1：'See every compare, swap, and write.' 旁边是等宽字体说明文字，实时更新：'Sorting 48 [ITEMS] by [MEASURE]'。算法标签页：Bubble、Insertion、Merge、Quick、Heap；加载时选中 Quick。舞台角落的等宽字体读数：左上 'seed 2048'，右上悬停读数，当悬停某根柱时显示 'position 12 · [MEASURE] 37'。进度条标签：'Step 214 / 612'。传输控制按钮：Reset、Step back、Play/Pause、Step forward、Shuffle，每个都带 aria-label。速度滑块标签为 'Speed'，实时值 '50 steps/s'，范围 1 到 500，对数刻度，默认 50。尺寸滑块标签为 'Size'，实时值 '48'，范围 8 到 128，默认 48。模式分段控件：Random、Nearly sorted、Reversed、Few unique；加载时选中 Random。右侧栏计数器配等宽字体标签：'Comparisons' 带琥珀色圆点，'Swaps' 带青色圆点，'Writes' 带青色圆点。其下方是 'Now' 面板，旁白按每步一行撰写：比较时 'Comparing positions 12 and 31: [MEASURE] 37 against [MEASURE] 12.'；交换时 'Trading places: positions 12 and 31.'；写入时 'Writing 37 into position 8 from the buffer.'；已排序时 'Position 31 is final.'。第 0 步时显示 'Ready. Press play or step forward.'。完成时显示 'Sorted in 612 steps.'。再下方是 'Key' 图例，含五个小标签：Comparing、Swapping or writing、Pivot、Active range、Final position。侧栏底部是所选算法的一行等宽字体摘要：'Average O(n log n) · Space O(log n) · Not stable'。传输控制下方仅桌面端显示的提示：'Space play · Left and Right step · R reset · S shuffle'。
   布局：在页头下方填满首个 1440x900 视口，所有控件无需滚动即可见。顶行 56px：H1 和说明文字居左，算法标签页居右；选中的标签页有 2px 琥珀色下划线。主行是两列网格：舞台列弹性，侧栏宽 288px，间距 16px。舞台列依次堆叠：画布面板（flex-grow，桌面端至少 480px 高）、全宽进度条（步骤标签在其右侧）、以及紧贴画布面板无间隙的 80px 传输控制栏，共用一条细线边框。传输控制顺序：Reset、Step back、一个 52px 琥珀色圆形 Play/Pause（图标为石墨色-950）、Step forward、Shuffle、一条垂直细线、Speed、Size、Pattern。画布绘制：在 25、50、75 和 100 处绘制水平网格线，左侧配小号等宽字体轴数字，颜色为弱化色；柱体位于基线上并填满宽度，64 根柱及以下时间距 2px，以上时间距 1px。基线下方有一条 6px 标记条，在比较过的位置下方显示琥珀色刻度，在交换或写入过的位置下方显示青色刻度，因此状态绝不只依赖柱体颜色。标记条上方有一条 2px 的柱范围线，括出活动范围。枢轴顶部上方有一个小的琥珀色三角形插入符。移动端 390x844：先 H1，再说明文字，然后标签页作为可横向滚动的行；画布固定 300px 高；进度条；三个计数器以 3 列条带形式显示，字号 22px；一行旁白；Speed、Size 和 Pattern 堆叠在下方面板中；之后是 Key 图例。当此区块或 Race 区块在屏幕上时，传输控制按钮移至视口底部固定的栏中，触控目标 48px。
   动效：自动播放如设计部分所述。切换标签页保持同一数组，重置到第 0 步，若之前在播放则继续播放。更改尺寸、模式或 Shuffle 会重新生成数组，重置到第 0 步，并在 120ms 防抖后重新计算所有步骤列表。拖动进度条会暂停播放并跳转。计数器每帧更新，无缓动。旁白框高度固定，因此不会有位移。
3. **算法卡片** — 等宽字体眉题 'ALGORITHMS'。H2：'Five ways to put [ITEMS] in order'。副标题：'Explained with [SETTING]. Counts on each card are measured on the array now on the stage.' 五张卡片，每张包含名称、等宽字体的 Best / Average / Worst / Space / Stable 网格、一行解释以及实测计数。冒泡排序：O(n)、O(n²)、O(n²)、O(1)、Stable。'Walk along the cards, swapping any neighbors that are out of order, until a full pass changes nothing.' 插入排序：O(n)、O(n²)、O(n²)、O(1)、Stable。'Take the next card and slide it left until it sits where it belongs among the cards already behind it.' 归并排序：O(n log n)、O(n log n)、O(n log n)、O(n)、Stable。'Split the cards into smaller piles, then zip sorted piles together by always taking the lower top card.' 快速排序：O(n log n)、O(n log n)、O(n²)、O(log n)、Not stable。'Pick a pivot card, move every lower card to its left, then repeat on each side of it.' 堆排序：O(n log n)、O(n log n)、O(n log n)、O(1)、Not stable。'Arrange the cards as a tree with the highest on top, then keep moving the top card to the end.' 每张卡片上的实测行，实时更新：'312 compares · 156 swaps · 0 writes'，以及总计行 '510 steps on this array'。每张卡片上的按钮文字：'Load on stage'。
   布局：区块 id 为 algorithms。标题块左对齐。1440px 时五等列，间距 12px；768px 时 2 列；390px 时 1 列。每张卡片是石墨色-900（graphite-900）面板，带细线边框。内部顺序：名称用展示字体 20px，复杂度网格为两列行、等宽字体 12px，解释用正文 14px，然后是一个 4px 进度条（填充宽度为本卡片总计除以五张卡片中最大总计；琥珀色填充在细线轨道上），然后是等宽字体 12px 的实测数字，最后是按钮。与所选算法匹配的卡片有 2px 琥珀色顶部边框。
   动效：整张卡片可点击。选中后加载该算法，滚动到 #visualizer 并从第 0 步开始播放，除非启用了减少动态效果。数组变化时进度条立即更新，无动画。
4. **竞速** — 等宽字体眉题 'RACE'。H2：'Race two on the same array'。副标题：'One shared clock. Each lane takes one step per tick, and the lane with fewer steps takes the flag.' 控件：'Lane A' 选择器、'vs'、'Lane B' 选择器、'Pattern' 选择器、'Size' 滑块、'Speed' 滑块（实时值 '90 ticks/s'）、按钮 'Start' / 'Pause'、'Step'、'Reset'、'New array'。默认值：Bubble 对 Quick、Random、尺寸 48、种子 2048。Tick 读数：'Tick 612'。每条泳道头部：徽章 'A' 或 'B'、算法名称、等宽字体计数器 'C 412 · S 198 · W 0'，以及 'Step 610 / 1,684'。当某条泳道率先完成时，显示 Lucide Flag 图标和标签 'Finished first'；另一条泳道继续运行，之后显示 '+1,074 steps'。结果条：'Quick sort won by 1,074 steps.' 或 'Dead heat at 610 steps.' 泳道下方注释：'Steps are not milliseconds. One step is one compare, swap, write or final mark.'
   布局：区块 id 为 race。控制行位于石墨色-900面板中，窄宽度时换行。其下方两条泳道并排各占 50%，间距 12px；每条泳道是一个面板，头部在上方，下方是 320px 画布，绘制方式与主舞台完全一致，底部有一条 3px 进度线。控件和泳道之间，tick 读数居中，等宽字体 28px。结果条位于泳道下方，全宽，高 56px，文字用展示字体 20px，左侧琥珀色边框 2px。移动端泳道堆叠，画布 200px，两个泳道选择器共享一个 2 列行，当此区块在屏幕上时，固定底栏驱动 Start/Pause、Step 和 Reset。
   动效：两条泳道从同一数组的相同副本运行。当区块 40% 可见时，竞速自动开始一次，除非启用了减少动态效果。完成的泳道在其扫描结束后冻结。两条泳道不能选择相同算法：每个选择器中另一条泳道当前的选择被禁用。更改任何设置会将竞速重置到 tick 0 并保持暂停。
5. **模式表格** — 区块 id 为 patterns。等宽字体眉题 'INPUT PATTERNS'。H2：'Where each one struggles'。副标题：'Total steps at the current size and seed. Select a cell to load that run on the stage.' 行：Bubble、Insertion、Merge、Quick、Heap。列：Random、Nearly sorted、Reversed、Few unique。每个单元格都是从引擎实时计算的总数，使用千位分隔符格式化。表格下方注释：'Quick sort here always uses the last position as its pivot, so ordered input gives it the most lopsided splits it can get.'
   布局：全宽表格置于 graphite-900（石墨 900）面板中，行间以细线分隔。行标题为 text 14px，单元格为 mono 14px、右对齐、高 52px。单元格背景从透明过渡到 28% alpha 的 compare 色，按整张表中 log(cell total) 缩放。与当前阶段匹配的单元格带 1px 琥珀色描边。移动端上，列标题缩短为 Random、Nearly、Reversed、Few，字号 12px，所有列在 390px 宽度内无需横向滚动即可容纳。
   动效：悬停单元格时，其背景在着色层下方提升为 graphite-800。选中单元格会设置 algorithm 和 pattern，滚动到 #visualizer，并从第 0 步开始播放，除非开启了减少动态效果。
6. **解读数字** — Mono 小标题 'NOTES'。H2：'Reading the numbers'。四条注释。'What counts as a step?'：'Every entry in the list does: a compare, a swap, a write, or marking a position final.' 'Does fewer steps mean faster in real code?'：'Not always. A step count ignores memory access and overhead. Merge sort copies through a second buffer and heap sort jumps across the array, and neither cost shows up here.' 'Why does merge sort show no swaps?'：'It never trades two positions. It copies values back from a temporary buffer, so that work appears under Writes.' 'Why does quick sort slow down on ordered input?'：'Its pivot is always the last position. With [ITEMS] already in order, each split leaves one side almost empty.'
   布局：在 1440px 下为纯文本块的两列网格，列间距 48px，在 390px 下为单列。每条注释的问题为 text 600、16px，答案为 muted、15px，上方以细线分隔。不使用手风琴：所有内容均可见。
7. **页脚** — Logo 字形加 '[BRAND]'。行：'A browser tool for [AUDIENCE].'。行：'Runs entirely in this tab. Nothing is saved or sent.'。可选的 [CREDIT] 链接放在这里。
   布局：顶部细线边框，48px 内边距，桌面端为两列，logo 和受众行在左，其余行右对齐、muted 13px；移动端堆叠，底部内边距 96px，以免固定栏遮挡。

## 资产
- 图像：无需下载。各阶段使用 canvas 2D。Logo 图形和 public/favicon.svg 为手写 SVG。无照片或其他位图。
- 图标：lucide-react（ISC），从 npm 安装：Play、Pause、SkipBack 用于重置、StepBack、StepForward、Shuffle、RotateCcw 用于重放、Flag 用于比赛获胜者。列于 ASSETS.md。
- 字体：通过 npm 自托管：@fontsource-variable/bricolage-grotesque、@fontsource/ibm-plex-sans（400、500、600）和 @fontsource/jetbrains-mono（400、500、700），均为 OFL-1.1。列于 ASSETS.md。

## 不要做
- 不要后端、API 路由、数据库、认证、排行榜、保存结果或第三方 API。比赛结果和计数器只存在于浏览器标签页中。
- 不要使用来自 fonts.googleapis.com、fonts.gstatic.com 或任何 CDN 的字体；通过 Fontsource 自托管。不要商业字体。
- 不要 CDN 脚本或 link 标签，也不要分析统计。所有内容都本地打包在 dist/ 中。
- 生产环境不要 source map，dist/ 中不要有 src/。使用相对资源路径，base 设为 './'。保持 dist/ 在 20 MB 以下。
- 内部链接是 index.html 上的页内锚点。绝不要链接到裸目录。
- 在 1440x900 和 390x844 下零控制台错误。390px 下不要出现页面横向滚动。按指定要求尊重 prefers-reduced-motion。
- 可视化器前面不要营销主视觉、注册提示或教程浮层。工具就是第一屏。
- 引擎中任何地方都不要使用 Math.random 或 Date.now。所有数组都来自带种子的生成器，因此相同设置始终产生相同运行结果。
- 不要从任何现有排序可视化器或教科书中复制代码、步骤文本、伪代码或解释性文案。每段解释都要重新撰写，使用此处给出的文案。
- 不要使用现有算法学习网站、课程或编程平台的名称、标志或字标。
- 不要复用任何知名可视化器可识别的颜色编码、面板布局或标志性条形样式。严格保持上文描述的调色板和布局。
- 不要音频、音效、视频片段或嵌入的第三方动画。
- 不要真实人物的肖像或姓名，不要作者或推荐语，也不要关于学习者数量、课程成果或受欢迎程度的声明。
- 不要受限的 UI 库源码，例如购买或付费的组件套件。每个控件都用 Tailwind 和原生输入从头构建。
- 不要额外的动画库。播放基于 requestAnimationFrame 和 canvas 2D 运行，条形永远不是 DOM 元素。

---
— Prompt by VibeFather · https://vibefather.ai/t/sorting-algorithms-visualizer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
