> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 交互式合成器网页玩具

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
[BRAND] 是一个在浏览器中演奏的单页合成器。乐器本身就是首屏：一条宽大的实时波形示波器、一排声音与走带控制、一个 16 步进图案网格和 25 键键盘，在 1440x900 下全部可见可演奏，前面没有任何营销区块。所有声音都用 Web Audio API 实时合成。图案、速度、声音和音色都存储在 URL hash 中，因此复制的链接能精确回放所制作的内容。

- 受众：[AUDIENCE]，以及任何点开朋友发来链接的人。无需懂乐理：每个网格音符都落在同一个音阶内，所以任何图案听起来都不错。
- 目标：让访客在五秒内发出声音，然后让他们点亮几个打击垫并把链接发给别人。这个玩具没有注册、没有定价，也没有销售区块。
- 语气：像深色桌面上的一台亮着灯的小机器：俏皮、有触感、直接。标签简短，以大写等宽字体丝印呈现。句子平实，绝不解释什么是合成器。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + 原生 TypeScript（vanilla TypeScript）
- 样式（Styling）：纯 CSS（Plain CSS）
- 库（Libraries）：vite（MIT）、typescript（Apache-2.0）、lucide（ISC）、@fontsource/unbounded（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建（Build）：`npm run build` → `dist/` 中的静态文件。无后端、无服务端代码、无外部 API。
- 设置（Setup）：
  - package.json 脚本：dev 运行 vite，build 运行 tsc --noEmit && vite build。使用严格模式（strict mode）的 TypeScript。
  - vite.config.ts 设置 base: './' 和 build.sourcemap: false，不添加其他插件。
  - 文件：index.html、public/favicon.svg、src/main.ts（接线）、src/content.ts（所有可见文案和变量值）、src/presets.ts（音色、网格音符、起始模式）、src/audio.ts（引擎）、src/sequencer.ts（时钟和模式状态）、src/scope.ts（画布）、src/hash.ts（URL 状态）、src/ui.ts（DOM、按键、打击垫、旋钮）、src/styles.css。当变量值变化时，重写 src/content.ts 中的文案以适配它们。
  - 在首次用户手势（pointerdown、touchend 或 keydown）时惰性创建一个 AudioContext，并在之后每次手势时若其状态为 suspended 则调用 resume()。触发启动的音符仍必须发声，因此在开始该音符前 await resume()。如果 window.AudioContext 缺失，在示波器中显示 'This browser has no Web Audio.'，并保持网格可编辑。
  - 信号链：每个音色依次经过振荡器 > 每音色增益包络 > 每音色 BiquadFilter（低通）> voiceBus 增益。voiceBus 连接到 DynamicsCompressor（阈值 -14，比率 6），同时也连接到一条发送：DelayNode（时间 = 当前速度下的 3 个十六分音符）> 反馈增益 0.28 回到延迟 > 湿声增益 0.16 > 压缩器。压缩器 > masterGain > AnalyserNode（fftSize 2048）> 目的地。
  - 主音量：masterGain = (volume / 100)^2 * 0.9。音符的滤波器截止频率 = 预设截止频率 * 2^((tone - 60) / 30)，钳制到 20000 Hz。音符频率 = 440 * 2^((midi - 69) / 12)，其中预设移调加到 midi 上。
  - 在 src/presets.ts 中按此顺序定义恰好三个音色，名称来自 [VOICE_NAMES]。音色 0：三角波 -7 音分加正弦波 +7 音分，两者增益 1，起音 0.18，衰减 0.4，延音 0.7，释音 0.9，峰值 0.2，截止频率 1800 Hz，Q 0.7，移调 0，门限 1.5 步。音色 1：方波 0 音分增益 1 加方波 +6 音分增益 0.5，起音 0.005，衰减 0.12，延音 0.45，释音 0.12，峰值 0.16，截止频率 3600 Hz，Q 3，移调 0，门限 0.9 步。音色 2：锯齿波 0 音分增益 1 加正弦波 -1200 音分增益 0.8，起音 0.004，衰减 0.18，延音 0.5，释音 0.08，峰值 0.3，截止频率 700 Hz，Q 5，移调 -24，门限 0.9 步，且滤波器从 3 倍截止频率开始，在 0.18 秒内斜坡下降到截止频率。
  - 包络：音符开始时使用 setValueAtTime(0)，在起音期间 linearRampToValueAtTime(peak)，然后在衰减期间 linearRampToValueAtTime(peak * sustain)。释音时使用 cancelScheduledValues，设置当前值，然后 setTargetAtTime(0, t, release / 3)，在 t + release + 0.1 时停止振荡器并在 onended 中断开它们。最多 12 个活跃音色，超出时抢占最旧的。
  - 网格音符固定在 src/presets.ts 中，C 小调五声音阶，行索引 0 在底部：C4、D#4、F4、G4、A#4、C5、D#5、F5（midi 60、63、65、67、70、72、75、77）。步字节的第 i 位表示第 i 行开启，因此一个模式是 16 字节，写成 32 个小写十六进制字符。
  - 起始模式，按顺序命名来自 [PATTERN_NAMES]。模式 0：09002000100800201200402000081000，112 BPM，音色 1。模式 1：01010008000104000100100800020400，138 BPM，音色 2。模式 2：290000008000400052000000a4002000，76 BPM，音色 0。三个模式的音高（Tone）均为 60。模式 0 在无哈希的首次访问时加载，页面在访客操作前保持停止。
  - 音序器时钟（前瞻调度器）：每 25 ms 的 setInterval 调度每个时间落在 currentTime + 0.12 s 内的步。步长 = 60 / bpm / 4 s。振荡器在精确的调度时间开始。将每个调度的步和时间推入队列；仅在播放时运行的 requestAnimationFrame 循环读取队列，并在 currentTime 超过该步时间时移动播放头。如果计时器落后超过前瞻量（隐藏标签页），将下一步时间跳到 currentTime + 0.05 s，并且不触发一串追赶音符。
  - URL 哈希格式：#v=1&p=<voice 0-2>&b=<bpm 60-180>&n=<tone 0-100>&g=<32 hex>。使用 URLSearchParams 解析。在每次打击垫编辑、清除、起始模式加载、音色更改、速度更改和音高更改时用 history.replaceState 写入，加载时从不写入。在加载时和 hashchange 时读取。钳制超出范围的数字。如果 g 不是 32 个十六进制字符，加载模式 0 且不报错。音量不进入哈希。
  - 在 window blur、visibilitychange 和 pointercancel 时释放所有按住的音符，以免任何音符卡住。

## 变量
- [BRAND] — 玩具名称（默认：“Moonbleep”）。显示为字标、页面标题和页脚。
- [TAGLINE] — 一行标语（默认：“Sixteen steps, three voices, one link to send a friend.”）。显示在字标旁边。保持在 75 个字符以内。
- [VOICE_NAMES] — 三个音色名称（默认：“Velvet Pad, Pixel Lead, Gravel Bass”）。逗号分隔，顺序为：柔和、明亮、低沉。只有名称变化，声音不变。
- [PATTERN_NAMES] — 三个起始模式名称（默认：“Night Tram, Tin Rain, Slow Comet”）。逗号分隔，顺序为：中速律动、快速低音、慢速和弦。
- [AUDIENCE] — 面向的人群（默认：“people who have never touched a synth”）。补全页脚句子 'made for ...'。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/interactive-synth-web-toy（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 机箱（Chassis）`#0D0618` — 页面背景以及亮色填充上的深色文字
- 面板（Panel）`#1A0D2E` — 模块面板：示波器框架、走带控制、网格、键盘
- 凸起（Raised）`#2A1648` — 关闭状态控件、旋钮轨道、示波器刻度线
- 键紫（Key violet）`#3B2170` — 自然键渐变顶部、旋钮帽高光
- 线条（Line）`#5B3A91` — 1px 面板、打击垫和琴键边框
- 热品红（Hot magenta）`#FF2BD6` — 主色：字标起点、Play 按钮、声部 1 强调色、轨迹起点
- 电青（Electric cyan）`#19F0FF` — 主色：字标终点、Copy link 按钮、声部 0 强调色、播放头
- 伏特（Volt）`#C8FF2E` — 声部 2 强调色、第三张音符卡片标题
- 淡紫文字（Lilac text）`#F3E8FF` — 正文文字、读数、琴键提示
- 丝光（Silk）`#B9A6DC` — 丝印大写面板标签（在 Panel 上通过 AA 标准）

### 字体排印
- 展示字体：字标、音符标题、声部和按钮标签：Unbounded（OFL），字重 600/800
- 文本和读数：面板标签、标语、琴键提示、音符正文、数字：JetBrains Mono（OFL），字重 400/500/700

### 布局与动效
- 间距：4px 基准。桌面端页面内边距 14px，移动端 16px 边距。面板之间间距 10px。面板内边距 10-12px。在 1440x900 下，乐器以 CSS 网格填满 100dvh，行高如下：顶栏 48px、示波器 minmax(200px, 1fr)、走带控制 76px、音序器 273px、键盘 190px，因此在音符区域之前无需滚动。断点：1100px 及以上为此桌面布局；720-1099px 将走带控制换行为两行并允许页面滚动；720px 以下为堆叠移动布局。
- 圆角：面板 14px。步进打击垫 5px。按钮和声部段 10px。起始芯片为完整胶囊形。琴键顶部为方形，底部圆角 8px。Play 按钮和旋钮为圆形。
- 动效：活动强调色：根据声部在根元素上设置 --accent 和 --accent-2。声部 0：青色、品红。声部 1：品红、青色。声部 2：伏特、品红。声部切换时颜色在 180ms 内过渡。
- 动效：琴键按下 60ms：translateY(2px)，底部唇边收起，填充变为 --accent，box-shadow 为 --accent 的 0 0 24px 60%。释放耗时 120ms。
- 动效：当播放头触发一个点亮的打击垫时，它缩放到 1.06 并增强辉光 120ms，对应的屏幕琴键在音符时值内点亮。
- 动效：走带控制中的节拍 LED 在播放时于第 1、5、9 和 13 步闪烁 80ms。
- 动效：在 prefers-reduced-motion 下：无缩放、位移或辉光脉冲，也无颜色过渡。示波器绘制一条静态轨迹。播放头仍然步进，因为那是状态，颜色仍然即时变化。
- 图像：无照片、无插图、无示例文件。每个视觉元素均由代码绘制：Canvas 2D 示波器、CSS 琴键、SVG 旋钮、内联 SVG 波形字形。页面背景为 #0D0618，带两个固定径向辉光：左上 rgba(255,43,214,.16)，右下 rgba(25,240,255,.12)。面板带有 1px Line 边框、rgba(243,232,255,.06) 的顶部内嵌高光，桌面端四角各有四个 6px CSS 螺丝点。该面板为通用虚构布局，不 resemblance 任何真实乐器。

## 页面与区块
### [BRAND] (`index.html`)
1. **顶栏** — 左侧：字标 [BRAND]，使用 Unbounded 800 字号 22px，带从 #FF2BD6 到 #19F0FF 的水平渐变文字填充，然后是 [TAGLINE]，使用 JetBrains Mono 400 字号 13px，Lilac 色文字。右侧：快捷键提示，使用 Silk 色文字 'SPACE PLAY / Z X OCTAVE'，仅在 1100px 及以上显示，然后是音频状态：一个 8px 圆形 LED 加上标签 'AUDIO OFF'，当 AudioContext 运行后变为 'AUDIO ON'（LED 先为暗色 Line 色，然后发光 --accent）。
   布局：单行，高度 48px，无面板背景，space-between。720px 以下时标语移到第二行，快捷键提示隐藏。
2. **示波器（Scope）** — 主视觉：网格上的实时波形。框内为 Silk 色标签。左上角：'SCOPE' 和当前音色名称。右上角：'112 BPM' 和 'STEP 05/16'，未播放时显示 'STOPPED'。左下角：最后发声的音符和频率，如 'G4 392 HZ'，任何音符之前显示 '-- --'。启动状态，居中显示在示波器上，首次手势后移除：首次访问显示文字 'Sound starts on your first tap.'，带一个按钮 'Start sound' 和提示 'or press A'。通过有效哈希打开的访问显示 'This link holds a pattern.'，带一个按钮 'Play it'，会启动音频和音序器。'Start sound' 以当前音色播放一个短促的 C5，让访客听到它已生效。手势之前不发出任何声音。
   布局：全宽面板，填满空闲网格行。背景 #0A0414，中心有 --accent 的 10% 柔和径向光晕。一个 <canvas> 填满它，通过 ResizeObserver 和 devicePixelRatio 调整尺寸。网格是透明画布后面的 CSS 背景：16 条垂直线和 6 条水平线，1px，Raised 色，中心线略亮。移动端高 132px。
   动效：每个动画帧：clearRect，读取 getByteTimeDomainData，在缓冲区前半部分找到 128 的第一个上升穿越点并从那里开始绘制，使波形静止而非漂移。用从 --accent 到 --accent-2 的水平线性渐变描边两次：第一次 7px 宽、25% alpha，然后 2px 全 alpha。静音时数据停在 128，因此呈现为一条平坦的发光线条，在 AudioContext 存在之前也绘制同样的平坦线条。在 prefers-reduced-motion 下不运行此循环：绘制一条静态轨迹，显示当前音色波形的三个周期（音色 0 为圆角、音色 1 为方波、音色 2 为锯齿波），高度为 55%，并在音色变化和尺寸调整时重绘。
3. **传输条** — 从左到右。(1) 圆形 52px 播放按钮，#FF2BD6 填充，带 #0D0618 的 Lucide Play 图标；播放时变为 #19F0FF 并显示 Square 图标；aria-label 为 'Play' 或 'Stop'。(2) 节拍 LED。(3) 幽灵按钮 'Clear'，带 Eraser 图标，清空网格。(4) Silk 色标签 'VOICE' 和一个三段式分段控件，名称来自 [VOICE_NAMES]，每段带一个小的内联 SVG 波形图标（圆角、方波、锯齿波）；选中段填充 --accent，文字 #0D0618；role 为 radiogroup。(5) Silk 色标签 'START' 和三个药丸形芯片，名称来自 [PATTERN_NAMES]；芯片加载对应的网格、速度和音色，如果已在播放则保持播放；当网格和速度与某芯片完全匹配时，该芯片以 --accent-2 描边。(6) 三个旋钮：TEMPO 60-180 默认 112，读数以 BPM 显示；TONE 0-100 默认 60；VOLUME 0-100 默认 70。(7) 'Copy link' 按钮，#19F0FF 填充，#0D0618 文字，Unbounded 600 字号 12px，Lucide Link 图标：写入哈希，复制 location.href，并在 1.6 秒内显示 'Copied' 和 Check 图标。将剪贴板调用包裹在 try/catch 中；如果被拒绝或不可用，显示一个只读输入框，内含 URL，已选中，标签为 'Copy this link'。通过 aria-live 区域播报。
   布局：全宽面板，桌面高 76px，单行 flex，14px 间距，组之间 1px Line 分隔线。旋钮为 SVG，52px，270 度弧从 -135 到 +135：轨道描边 Raised 5px，值弧 --accent 5px 圆头，中心圆盘径向渐变从 #3B2170 到 #1A0D2E，2px Lilac 指针线。标签和读数位于每个旋钮右侧，堆叠排列。移动端顺序：第 1 行 Play、Clear、Copy link；第 2 行音色控件全宽；第 3 行芯片；第 4 行三个旋钮均匀分布，标签和读数在各自下方。
   动效：旋钮：role 为 slider，带 aria-valuemin、aria-valuemax 和 aria-valuenow，tabindex 0。垂直指针拖拽，带指针捕获，100px 覆盖全范围，Shift 为四分之一速度。touch-action: none。方向键步进 1，PageUp 和 PageDown 步进 10，双击重置为默认值。值弧跟随指针，无缓动。
4. **步进音序器** — Silk 色标题 'PATTERN'，列上方有一行步进编号 1-16（1、5、9、13 为 Lilac 色文字，其余为 Silk 色）。八行打击垫，顶行 F5 到底行 C4，每行用等宽 11px 标注音名。每个打击垫是一个 <button>，带 aria-pressed 和 aria-label，如 'Step 5, note G4'。一个步进上可以响任意数量的音符。键盘快捷键：Space 切换播放和停止，除非焦点在按钮或输入框上。
   布局：全宽面板。结构：两个 .bar 块，每个包含两个 .beat 组，每组四个步进列。打击垫间距 3px，节拍组之间间距 14px，小节之间间距 14px，因此间距标记每 4 步。打击垫拉伸填满宽度，桌面高 26px。行标签仅在第一个小节的左侧。关闭打击垫：#241244，带 1px #4A2C78 边框；每个节拍组的第一列为 #2E1A58。开启打击垫：--accent 填充，带 --accent 的 box-shadow 0 0 12px。720px 以下两个 .bar 块垂直堆叠，各自带行标签，其 8 列约 37px 宽，行高 28px，因此全部 16 步保持可见，无需横向滚动。
   动效：播放头：当前列上方一条 2px --accent-2 条，该列的关闭打击垫以 28% 的 --accent-2 着色。点击或轻触切换打击垫。使用鼠标或笔时，按住并拖动会以第一个打击垫的状态绘制经过的每个打击垫；触摸仅支持轻触，以便页面仍可滚动。每次更改时更新 URL 哈希。
5. **键盘** — Silk 色标题 'KEYS'，右侧有八度控件：Lucide Minus 按钮，读数 'OCT 0'，Lucide Plus 按钮，范围 -2 到 +2（Z 和 X 作用相同）。25 个键 C4 到 C6，随八度偏移。使用 event.code 的电脑键盘映射，在键上显示为小键帽提示：A=C4 W=C#4 S=D4 E=D#4 D=E4 F=F4 T=F#4 G=G4 Y=G#4 H=A4 U=A#4 J=B4 K=C5 O=C#5 L=D5 P=D#5 ;=E5 '=F5。其余键无提示。提示通过 @media (hover: none) 隐藏。每个键上的小圆点表示网格音阶中的音（C、D#、F、G、A#），告诉演奏者哪些键适合该模式。C 键显示其音名。忽略带 event.repeat 或按住 Ctrl、Cmd 或 Alt 的按键事件，以及焦点在输入框内时。720px 以下显示一行 Silk 色文字 'Swipe for more keys'。
   布局：全宽面板。桌面：15 个自然键均匀拉伸填满宽度，高 160px。自然键：垂直渐变 #3B2170 到 #241244，1px Line 边框，底部 6px 唇边 #160A2A，底部 8px 圆角。升号键：绝对定位在自然键之间，宽度为自然键的 58%，高度为 62%，渐变 #0D0618 到 #1A0D2E，顶部 3px 边缘为 70% 的 --accent-2。720px 以下：自然键宽 52px、高 152px，位于水平滚动容器内，touch-action: pan-x，从 C4 开始。移动端顺序通过 CSS order 将此面板放在音序器上方。
   动效：分别跟踪每个 pointerId，以便多根手指演奏和弦。按住鼠标时，移动到另一个键会释放旧音符并播放新音符。当音高在屏幕上时，键灯也跟随音序器触发的音符。
6. **面板说明** — 乐器下方，三张短卡片。'Play it'：'Hold A through ; for the white keys and W, E, T, Y, U, O, P for the black ones. Z and X move the octave. Any key with a dot stays in the scale the grid uses, so it fits over whatever is running.' 'Loop it'：'Eight pitches, sixteen steps, one scale. Click to light a pad, drag to paint a run, press Space to start and stop. Tempo runs from 60 to 180 BPM.' 'Send it'：'Every pad you light rewrites the address bar. Copy the link and whoever opens it gets the same pattern, tempo, voice and tone. Nothing is stored anywhere: the whole loop lives in the URL.'
   布局：桌面三列等宽，间距 10px，720px 以下单列。每张卡片是一个 Panel，带 3px 顶部边框（依次为洋红、青色、伏特色），内边距 28px，标题使用 Unbounded 800 clamp(24px, 2.4vw, 34px)，颜色与边框匹配，正文使用 JetBrains Mono 400 字号 15px，行高 1.65，Lilac 色文字。
7. **页脚** — '[BRAND] is made for [AUDIENCE]. No account, no download, no samples: every sound is synthesized in your browser.' [CREDIT] 链接（如保留）位于右侧。
   布局：单行 JetBrains Mono 400 字号 13px，Silk 色，内边距 24px 14px，移动端换行为两行。

## 资产
- 图片：未下载任何图片。所有视觉元素均以代码绘制。public/favicon.svg 为手写文件：一个 #0D0618 的圆角方块，内含一条使用 #FF2BD6 到 #19F0FF 渐变的波形描边。在项目根目录的 ASSETS.md 中列出 lucide、Unbounded 和 JetBrains Mono，注明路径、来源 URL、作者和许可证，并在其中说明该项目没有第三方图片，也没有音频文件。
- 图标：Lucide（ISC）来自 lucide npm 包，逐个导入并以内联 SVG 渲染：Play、Square、Eraser、Link、Check、Minus、Plus。波形图标和旋钮为手绘内联 SVG。
- 字体：通过 @fontsource/unbounded（600、800）和 @fontsource/jetbrains-mono（400、500、700）自托管，两者均为 OFL-1.1，在 src/main.ts 中导入。

## 禁止事项
- 不使用后端、服务器代码、API 路由、数据库、认证、会向任何地方提交的表单或第三方 API。所有状态都保存在内存和 URL hash 中。
- 不使用 CDN script 或 link 标签，不使用 fonts.googleapis.com 或 fonts.gstatic.com，不使用分析工具。字体、图标和脚本全部本地打包。
- 不生成 source map，也不把 src/ 复制进 dist/。使用 Vite base './' 的相对资源路径。保持 dist/ 在 20 MB 以下。
- 内部链接指向文件名，例如 ./index.html，绝不指向裸目录。
- 不自动播放：在用户手势之前没有声音，也没有 AudioContext。
- 在 1440x900 或 390x844 下没有控制台错误，包括剪贴板访问被拒绝或 hash 格式错误时。
- 不要忽略 prefers-reduced-motion。
- 不使用音频库、音频文件和采样。每个声音都用 Web Audio 振荡器实时合成；不取自商业乐器、采样包或鼓机。
- 不使用真实合成器和鼓机制造商的标志、徽章或型号名称。
- 不要复刻特定硬件面板，或已知产品的标志性配色方案和面板布局。
- 不使用现有歌曲中可辨识的旋律、riff 或 bassline。原样使用此处给出的起始 pattern。
- 不要从现有浏览器音乐玩具或音乐学习网站挪用界面、文案、视觉或声音预设。
- 不使用受限 UI 库源码、商业字体，文案中不使用真实艺术家姓名或肖像。
- 乐器上方没有营销区块、主视觉标题或教程弹窗，也不使用米白或柔和中性色调。保持琴键为紫色（violet），不是白色。
- 不要添加注册、定价、用户评价、虚构用户数量，或除可选 [CREDIT] 页脚链接之外的任何 VibeFather 提及。
- 除非用户要求，不要更改技术栈。

---
— Prompt by VibeFather · https://vibefather.ai/t/interactive-synth-web-toy · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
