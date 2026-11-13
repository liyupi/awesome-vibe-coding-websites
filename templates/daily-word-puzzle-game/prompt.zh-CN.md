> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 每日单词拼图游戏

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个名为 [GAME] 的单页文字游戏：在六次尝试中猜出隐藏的五字母单词。方块翻转、状态镜像键盘、localStorage 中的统计数据、可复制的原始格式结果行、帮助弹窗，以及每完成一轮后从围绕 [FLAVOR] 主题的原创精选列表中提供下一个谜题。单页，index.html；一切都在浏览器中运行。

- 受众：有四分钟和一块键盘的人：通勤者、排队站立者，以及“再来一个词”的人群。他们想要清晰的反馈和零摩擦。
- 目标：游玩、获胜、分享。十秒内输入第一次猜测；一轮之内玩家已打开统计数据或复制了他们的结果。
- 语气：温暖街机风：简短、友善、失败时略带调侃。帮助弹窗中有一句冷面台词。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/bricolage-grotesque（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化（Setup）：
  - 使用 npm create vite@latest 并选择 react-ts 模板进行脚手架搭建（如果最新模板指向更高主版本，则锁定版本），然后保留一个真实的 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键添加到 theme.extend.colors（cream、panel、card、line、ink、softink、marigold、marigold-deep、marigold-mist、hit、near、miss、slateink、good），并设置 fontFamily display ['Bricolage Grotesque Variable', 'system-ui', 'sans-serif']、sans ['Inter Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 12px，并添加 maxWidth { shell: '560px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/bricolage-grotesque' 和 '@fontsource-variable/inter'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（游戏名称、帮助文案、统计标签、所有字符串，以及两个单词列表——answers：40 个围绕 [FLAVOR] 主题的精选五字母单词；accepted：answers 加上另外 80 个常见五字母单词；两个列表均为纯字符串数组）、src/lib/brand.ts（gameSlug = [GAME] 转为小写，并将每一段非字母数字字符替换为 '-'，storageKey = gameSlug + ':stats'）、src/lib/game.ts（纯逻辑：pickAnswer(index)、judge(guess, answer) → 五个字母状态，正确解析重复字母、isValid(word)）、src/lib/share.ts（buildResultRow(statesByRow) → 一种原创的多行文本格式，使用 ▉ ◪ ▢ 等 Unicode 制表符，外加标题 '[GAME] — solved in 4/6 (sample puzzle)'，绝不使用彩色方块 emoji）。
  - 状态（State）：src/store/game.ts 是一个小型外部 store（useSyncExternalStore），持有 { rowIndex, rows: string[]（已提交的猜测）、current: string（进行中的字母）、status: 'playing'|'won'|'lost'、answerIndex、shakeAt } 以及 stats { played, wins, streak, best, distribution: number[6] }，持久化到 localStorage 的 storageKey 下。
  - src/components/ 中的组件：TopBar.tsx（Wordmark、HelpButton、StatsButton）、Board.tsx（TileRow.tsx、Tile.tsx）、Keyboard.tsx（Key.tsx）、ResultPanel.tsx（StatsBlock.tsx 含 DistributionRow.tsx、ShareRow.tsx）、HelpModal.tsx（ExampleTile.tsx）、Toast.tsx。src/pages/Game.tsx 组合它们。
  - 输入（Input）：一个 window keydown 监听器——字母 a–z 追加（最多 5 个），Enter 提交（无效 → shakeAt 递增 + toast 'Not in the word list'），Backspace 删除；屏幕上的 Keyboard 镜像相同操作。物理输入无论 Keyboard 是否聚焦都有效；每个 Key 都是真实 button 以支持触摸。
  - 方块翻转（Tile flip）：提交时，该行的每个方块翻转（rotateX 0→90→0，总计 520ms），每个方块错开 110ms，在 90° 中点显示其状态颜色；Keyboard 的对应键在每个方块落定时更新。无效抖动：该行平移 ±6px 三次（300ms）。减少动态效果（Reduced motion）：状态立即切换，无抖动平移（toast 仍解释无效性）。
  - 结束状态（End state）：翻转完成后，ResultPanel 在表内滑入（非模态）：答案以展示字体显示、'solved in N/6' 或 'the word was …'、StatsBlock（played、win %、current streak、best streak，以及六条分布条，获胜条为 Marigold）、ShareRow（'Copy result' → 剪贴板 + toast 'Copied — paste it anywhere'），以及 'Next puzzle' 提供 pickAnswer(next)，并带有低调标签 'Sample rotation · puzzle 7 of 40 (no dates here)'。
  - 键盘（Keyboard）：QWERTY 行加上 Enter/Backspace 键；键字母状态：hit（Marigold 填充，Slate Ink 文字）、near（Cocoa 描边 + 点）、miss（Miss 灰色，文字 40% 不透明度）。物理键盘仅通过棋盘获得相同反馈；Keyboard 对打字无状态。
  - HelpModal：规则四行，配一个示例 ExampleTile 三件套（一个 hit、一个 near、一个 miss，各带一行解释）、一句干巴巴的话（'No letters are reused in scoring unless the word reuses them — fairness beats cleverness.'），以及关闭 X。焦点陷阱，Escape 关闭。
  - 统计跨轮次持久化；重置统计（Reset stats）位于 StatsBlock 内，作为低调的 'reset' 链接，带确认弹出框。
  - public/favicon.svg 如资源（Assets）部分所述。index.html：lang en，<meta name='theme-color' content='#FBF3E4'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[GAME] — a five-letter puzzle</title>。
  - 在项目根目录编写 ASSETS.md，如资源（Assets）部分所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体和 favicon.svg。保持在 3 MB 以下。

## 变量
- [GAME] — 游戏名称（默认：“Larkspur”）。虚构游戏的名称，一个单词。用于字标、标题、分享文本和 localStorage 键。绝不使用真实游戏名。
- [FLAVOR] — 词汇主题（默认：“everyday English words”）。一个小写短语，命名答案列表的主题。重写 40 个答案（以及帮助文案）以适配该列表。保持单词常见且恰好五个字母。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/daily-word-puzzle-game（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 奶油色（Cream）`#FBF3E4` — 页面背景 — 温暖的街机日光。
- 面板色（Panel）`#FFFBF0` — 结果面板、帮助弹窗。
- 卡片色（Card）`#FFFFFF` — 提交前的方块、按键、提示条。
- 线条色（Line）`#E5D9C0` — 方块和按键的 2px 边框（面板上为 1px）。
- 墨色（Ink）`#241F16` — 提交前的方块字母、标题、正文。
- 柔和墨色（Soft Ink）`#6E6552` — 提示、统计标签、示例轮换行。
- 万寿菊色（Marigold）`#E8A33C` — 唯一强调色：命中方块、主按钮、获胜分布条、焦点环、字标圆点。
- 深万寿菊色（Marigold Deep）`#C4842A` — 主按钮的悬停/按下态。
- 万寿菊雾色（Marigold Mist）`#F8E8CB` — 提示条填充、选中态。
- 命中色（Hit）`#E8A33C` — 正确字母方块填充（与强调色相同——由游戏独占）。
- 近似色（Near）`#F3D9A4` — 存在但位置错误的方块填充：更浅的万寿菊色，配可可色 2px 边框，使其永远不会被误读为命中色。
- 未命中色（Miss）`#D8CFBC` — 不存在字母的方块填充和禁用按键。
- 石板墨色（Slate Ink）`#241F16` — 万寿菊填充上的文字（保持深色以维持温暖感）。
- 良好色（Good）`#5E8C4A` — 连续记录刻度、复制确认。

### 字体排印（Typography）
- 展示字体：字标、结果标题、大号答案揭晓 — Bricolage Grotesque：Bricolage Grotesque（OFL），字重 400/600
- 文本与界面：方块、按键、统计、帮助 — Inter；统计使用等宽数字：Inter（OFL），字重 400/500/700

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。外壳最大宽度 560px 居中；棋盘宽 350px（方块 62px，间隙 8px；缩放至 92vw，方块为 min(62px, 16vw)）；键盘占满外壳宽度，按键高 40px，间隙 6px。顶栏 56px。字号体系：字标 22px Bricolage 600；方块字母 Inter 700 26px 大写；按键字母 Inter 600 14px 大写；结果标题 24px Bricolage 600；统计数字 Inter 700 22px 等宽；正文和帮助 14.5px / 1.6；提示条 13px。按钮：高度 44px，Inter 600 13.5px；主按钮万寿菊填充配石板墨色文字，幽灵按钮 1px 线条色边框。全局焦点：2px 万寿菊色轮廓，3px 偏移。
- 圆角：方块和主按钮 12px；按键 10px；面板和弹窗 8px；提示条和胶囊 999px。
- 动效：缓动：翻转使用 --ease-io cubic-bezier(0.65, 0, 0.35, 1)；结果面板使用弹簧（刚度 420，阻尼 26）。街机般干脆，绝不拖沓。
- 动效：方块输入：每个字母在输入时弹入（缩放 0.9→1，90ms）。
- 动效：方块翻转：该行的五个方块依次翻转（110ms 错峰，每个 520ms：rotateX 0→90→0），在中点揭示状态颜色；按键在每次落定时重新着色。
- 动效：无效抖动：行 ±6px，三个周期，总计 300ms，然后静止。
- 动效：获胜：完成行的方块依次弹跳一次（translateY -8px，每个 80ms，错峰）——小小的喜悦，没有彩纸。
- 动效：结果面板（ResultPanel）：以弹簧效果在表内向上滑入；分布条在 400ms 内从 0 增长，错峰 40ms；获胜条带有万寿菊色填充。
- 动效：帮助弹窗：遮罩 160ms，面板以弹簧效果从 0.96→1 缩放。
- 动效：提示条：上升 6px，160ms，2.2s 后自动消失。
- 动效：prefers-reduced-motion: reduce — 状态即时切换（无翻转、无抖动位移、无弹跳），分布条以全宽渲染，面板仅淡入；游戏保持完全可玩。在 index.css 中使用 CSS @media 以及 Motion 的 useReducedMotion。
- 图像：完全无图片：方块、按键、标签、分布图和 favicon 均以代码绘制。分享格式使用纯文本中的 unicode 方框字符——绝不使用彩色方块 emoji。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 游戏 (`index.html`)
1. **内容文件与文案规则** — 以下所有文案均针对默认值编写（[GAME] = Larkspur，[FLAVOR] = everyday English words）。将所有字符串和两个词表放入 src/content.ts 并从中渲染。若任何变量不同，请重写 40 个答案和 80 个可接受额外词，使其符合 [FLAVOR]（均为恰好五个字母、常见、美式拼写），并调整帮助文案中的示例词。帮助文案：'Guess the word in six tries.' / 'Each guess must be a five-letter word we know (the list is kind, not huge).' / 'After each guess, the tiles show how close you are.' / 示例：'STARE — the S is in the word and in place (a full marigold tile)'；'CRANE — the R is in the word, wrong spot (pale tile with a border)'；'PLUMB — the U isn't in the word at all (gray tile).' / 冷面台词：'No letters are double-counted unless the word doubles them — fairness beats cleverness.' / 失败台词：'The word was {answer}. Tomorrow's word forgives everything. (There's no tomorrow — just press next.)' 示例答案列表（40 个，全部写入 content.ts）：CRANE, PLANT, BRICK, MOUSE, DRIFT, SPARK, GLOVE, TIDAL, MARCH, QUITE, FROST, GRAPE, SWORD, HONEY, PEARL, CLOUD, SHINE, BREAD, RIVER, STONE, LEAFY, MIRTH, VOCAL, WIDEN, ZESTY, BLAZE, CHARM, DWELL, EAGER, FLINT, GRASP, HABIT, IVORY, JOUST, KNEEL, LUNAR, MEDAL, NOBLE, ORBIT, PIQUE。可接受额外词（另 80 个；以相同语气写出合理的常见五字母词）。统计标签：'Played'、'Win %'、'Streak'、'Best'；分布标题 'Guesses it took'；示例轮换行 'Sample rotation · puzzle {n} of 40 · no dates here'。
   布局：不适用
   动效：不适用
2. **顶栏** — 左侧：字标 '[GAME]'（Bricolage 600 22px）带一个 Marigold（万寿菊色）圆点。右侧：两个图标按钮——HelpButton（CircleHelp）和 StatsButton（ChartNoAxesColumn），分别打开 HelpModal 和（回合之间）ResultPanel 的统计。400px 以下字标缩小，按钮保留。
   布局：56px 行高，Cream（奶油色）背景，Line（线条色）底边框；粘性定位。
3. **棋盘** — 六个 TileRow，每行五个 Tile。空 Tile：Card（卡片色）填充，2px Line 边框，无字母。输入时逐字母填充当前行的 Tile（弹入）。已提交的行保留字母并带状态填充（命中 Marigold（万寿菊色）/ 接近为带边框的浅色 / 未中为灰色），每种状态使用 Ink（墨色）到白色的文字对比。当前行静止。棋盘下方，游戏进行中显示一行安静的状态文字：'Puzzle {n} · six tries'（Soft Ink（柔和墨色），12.5px）。
   布局：居中；棋盘宽度 min(350px, 92vw)；键盘上方 28px。
4. **键盘** — 三行：QWERTYUIOP / ASDFGHJKL / (Enter) ZXCVBNM (Backspace)。按键为真实按钮；状态填充按设计规范；Enter 主键加宽（70px），Backspace 带 Delete 图标。悬停上浮 1px；按下下沉 1px。
   布局：底部全壳宽度；按键高度 44px（Enter 行 52px），6px 间距；margin-bottom 适配安全区域。
5. **结果面板与帮助弹窗** — ResultPanel（内嵌于面板，回合结束后替换键盘区域）：标题 'Solved in {n}/6' 或 'Out of tries'；答案以 Bricolage 600 26px 显示；StatsBlock（四个数字 + 分布）；ShareRow（'Copy result' 主按钮 + 安静的 'Next puzzle' 幽灵按钮，带示例轮换行）；一个 'reset stats' 链接，打开确认弹出框（'Reset your stats? The tiles forget faster than you will.'）。HelpModal：规则、三行 ExampleTile、冷面台词、关闭 X；从 HelpButton 打开，并在访客首次游戏时自动打开（localStorage 标记）。
   布局：ResultPanel 最大宽度 420px 居中；弹窗 420px 居中于遮罩之上。

## 资产（Assets）
- 图片（image）：完全不使用图片：所有视觉元素都用代码绘制。不要获取或热链任何内容。
- 图片（image）：在项目根目录写入 ASSETS.md，列出代码绘制的资产（tiles、keys、distribution bars、favicon——“drawn in code, original”）以及 npm 包：@fontsource-variable/bricolage-grotesque 和 @fontsource-variable/inter（OFL-1.1）以及 lucide-react（ISC）。说明词表是原创精选列表。
- 图标（icon）：仅使用 lucide-react：ChartNoAxesColumn、Check、CircleHelp、Copy、Delete、X。描边宽度 1.75，16–20px，颜色继承。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的圆角方块填充 #241F16，一个万寿菊色（#E8A33C）五格行字形（五个小圆角方块，中间一个填充万寿菊色，其余为描边）。不使用品牌标志。
- 字体（font）：安装 @fontsource-variable/bricolage-grotesque 和 @fontsource-variable/inter，并在 src/fonts.ts 中按 Setup 中列出的方式导入它们。Vite 会将 woff2 文件打包到 dist/ 中。

## 禁止事项（Don'ts）
- 无后端、无表单提交、无 API 请求、无网络：统计和状态仅持久化到 localStorage；分享行复制到剪贴板。
- 每个内部链接都是游戏本身（./index.html）——绝不指向裸目录；只有一个页面。
- 不得与 Wordle 或任何真实单词游戏相似：不同的名称、颜色、方块形状、分享格式（unicode 方块字符，绝不用彩色方块 emoji），以及原创词表——不得抓取词典。
- 无每日锁定或真实日期：谜题按完成的回合轮换，并带有诚实的“sample rotation”标签；不打印今天的日期或年份。
- 无图片、照片或 logo；一切皆为代码绘制。
- 自托管一切：字体通过 Fontsource，图标作为 npm 包或内联 SVG。无 CDN <script> 或 <link> 标签，无 Google Fonts，无分析。
- 生产构建：压缩，无 source maps，不将 src/ 复制到 dist/，单条命令 npm run build，输出在 dist/ 下小于 3 MB。
- 绝不在游戏内提及 VibeFather，除了键盘下方页脚角落的一行署名“Built with a VibeFather template”，链接到 https://vibefather.ai，安静的一行。
- 尊重 prefers-reduced-motion：即时状态切换，无抖动/弹跳；游戏保持完全可通过键盘和触摸游玩。
- 游戏必须在 1440x900 桌面和 390x844 移动端零控制台错误运行；物理键盘和屏幕键盘均可游玩；帮助模态框、统计和复制按钮仅用键盘即可操作，并有可见的焦点环。
- 无障碍：方块带有 aria-labels 描述字母和状态；状态变化通过 aria-live 礼貌播报；键盘是真实按钮；颜色绝不单独承载含义（接近的方块获得边框 + 圆点）。

---
— Prompt by VibeFather · https://vibefather.ai/t/daily-word-puzzle-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
