> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 乐理互动课程

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND]（一所虚构的夜间音乐学校）构建一个单页交互式乐理课程，主题为“[LESSON_TOPIC]”。页面是一段长滚动，重复固定的节奏：简短概念、动手小工具、小小成就。它包含一架由 Web Audio 振荡器发声的可弹奏双八度钢琴、一个旋转的 SVG 五度圈、一个会点亮音符并命名音程的和弦构建器、一个带计分的八轮练耳测验，以及一个关于讲师和学校的收尾部分。所有小工具读取同一份共享状态，十二个音级颜色在各处保持一致，因此颜色本身就在传授音级关系。以下文案按默认值撰写。若默认值发生变化，请在一个内容文件中重写全部文案以适配新值，并保持小工具、布局、颜色和动效完全不变。

- 受众：[AUDIENCE]。他们可能不识五线谱，也可能没有乐器；一台笔记本电脑键盘或一部手机就足够。
- 目标：访客在十秒内按下琴键，听到声音并看到乐理作出响应。到页面结束时，他们能凭耳朵说出常见音程与和弦，已获得四个小小成就和一个测验分数，并了解 [BRAND] 晚间课程提供什么。
- 语气：俏皮、大胆、直白，像一位深夜在小舞台上的好老师。句子简短。用日常语言描述声音听起来怎样。绝不学术腔，也绝不为了可爱而可爱。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource-variable/unbounded（OFL-1.1）、@fontsource-variable/figtree（OFL-1.1）、@fontsource-variable/jetbrains-mono（OFL-1.1）、vite（MIT）、@vitejs/plugin-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、typescript（Apache-2.0）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - vite.config.ts：将 base 设为 './'，build.sourcemap 设为 false。从 'motion/react' 导入 Motion。
  - 文件布局：src/content.ts（所有文案、示例数据、胜利任务、测验轮次）、src/theory.ts（音符表、音阶、和弦拼写）、src/audio.ts（Web Audio 引擎）、src/store.tsx（React context 加 useReducer，不使用状态库）、src/components/（Piano、CircleOfFifths、IntervalPicker、ChordBuilder、ChordShape、Quiz、WinBar、Dock、TopBar）、src/App.tsx。图片放在 public/images/。
  - 将设计（Design）部分中的颜色和字体按其中给出的名称添加到 tailwind.config 的 theme.extend 下，并从 src/theory.ts 导出同一张音高颜色表，作为按音级 0 到 11 索引的类型化数组。
  - 音符表：按音级的 DEFAULT_NAMES = C、Db、D、Eb、E、F、F#、G、Ab、A、Bb、B。所有地方都用普通 # 和 b 字符书写变音记号，不使用音乐符号。从顶部顺时针的 FIFTHS_ORDER = C、G、D、A、E、B、F#、Db、Ab、Eb、Bb、F。按相同顺序的 RELATIVE_MINORS = Am、Em、Bm、F#m、C#m、G#m、D#m、Bbm、Fm、Cm、Gm、Dm。
  - 音阶拼写表：C = C D E F G A B；G = G A B C D E F#；D = D E F# G A B C#；A = A B C# D E F# G#；E = E F# G# A B C# D#；B = B C# D# E F# G# A#；F# = F# G# A# B C# D# E#；Db = Db Eb F Gb Ab Bb C；Ab = Ab Bb C Db Eb F G；Eb = Eb F G Ab Bb C D；Bb = Bb C D Eb F G A；F = F G A Bb C D E。调号：C 无；G 1 个升号；D 2 个升号；A 3 个升号；E 4 个升号；B 5 个升号；F# 6 个升号；Db 5 个降号；Ab 4 个降号；Eb 3 个降号；Bb 2 个降号；F 1 个降号。
  - 和弦拼写函数：从根音名开始，每个音级向上取相应步数的字母（2 度 +1，3 度 +2，4 度 +3，5 度 +4，7 度 +6），然后添加达到该音级所需的 # 或 b 字符。重降写作 bb，例如 Ebdim = Eb Gb Bbb。
  - src/audio.ts：在首次 pointerdown 或 keydown 处理函数内惰性创建一个 AudioContext，并在那里调用 resume()；页面加载时绝不触碰音频。音频图：各声部连接到低通 BiquadFilter（3200 Hz，Q 0.6），再连接到主 GainNode（0.7），再连接到 DynamicsCompressor，最后到 destination。每个声部是一个位于音符频率的三角波振荡器，加上一个高八度的正弦波（增益 0.25），经过一个声部增益，起音 0.008 s 到峰值 0.5，衰减 0.25 s 到延音 0.28，释音 0.35 s。十二平均律，A4 = 440 Hz。限制为 10 个声部，超出时抢占最旧的。静音时在 20 ms 内将主增益渐变到 0，取消静音时恢复到 0.7。
  - src/audio.ts 中的播放辅助函数：playNote(midi, ms)；playMelodic(midis)，音符之间间隔 450 ms，然后所有音符一起持续 900 ms；strum(midis)，音符之间间隔 45 ms，保持 1200 ms；playScale(midis)，音符之间间隔 170 ms；tick(midi)，一个 60 ms 的音符，增益 0.15。每个辅助函数还会向 store 报告音符的开与关，使每架钢琴同步亮起。每个辅助函数接受一个 silent 标志以跳过此报告；测验播放使用它直到该轮被作答，这样 dock 就无法泄露答案。
  - src/store.tsx 状态：selectedKey（FIFTHS_ORDER 的索引，从 [START_KEY] 开始）、activeNotes（当前发声的 midi 编号集合）、interval {rootMidi, semitones: 7}、chord {rootName, quality: 'major'}、lastEvent {label, midis, playback}、wins [false, false, false, false]、muted false、heroPlayed（在 hero 钢琴上按下的最后两个 midi 音符）。dock、顶栏和所有钢琴都从这一个 store 读取。
  - 联动规则：(1) 更改 selectedKey 会将 interval.rootMidi 设为第 4 八度的主音，并将 chord.rootName 设为主音，保持品质不变。(2) 在和弦构建器中选择根音芯片或品质会旋转圆环：对于大调、属 7 和弦、大 7 和弦、增和弦和挂留和弦，旋转到根音自身的扇区；对于小调、小 7 和弦和减和弦，旋转到其内扇区具有该根音的大调（根音 + 3 个半音）。此旋转不得覆盖触发它的和弦，因此要传入一个 source 标志。(3) 圆环面板中的自然音阶和弦芯片设置和弦构建器，并保持圆环位置不变。(4) 在 hero 钢琴上按下会将 selectedKey 设为该音级。在 Chapter 1 钢琴上按下会将 interval.rootMidi 设为第 4 八度的该音级，并保持 selectedKey 不变。在其他钢琴上按下只播放并脉冲对应的圆环扇区。
  - window keydown 上的键盘映射，忽略 e.repeat、任何修饰键，以及焦点在 input 内的情况：A=C、W=C#、S=D、E=D#、D=E、F=F、T=F#、G=G、Y=G#、H=A、U=A#、J=B、K=C 高一个八度、O=C# 高、L=D 高、P=D# 高、;=E 高、'=F 高。基础八度从 4 开始；Z 将其设为 4，X 将其设为 5；高于 B5 的音符被忽略。按下算作在当前视图中的 hero 或 chapter 钢琴上按下（用 IntersectionObserver 跟踪）；在其他任何地方只播放音符。
  - npm 脚本：dev、build（tsc --noEmit && vite build）、preview。添加 public/favicon.svg，一个使用音符颜色的 12 扇区风车，以及一个纯标题 '[BRAND] | [LESSON_TOPIC]'。

## 变量
- [BRAND] — 学校或课程品牌（默认："Overtone Night School"）。一个虚构名称。显示在顶部栏、讲师区块、末尾横幅和页脚中。
- [LESSON_TOPIC] — 课程主题（默认："Intervals and chords"）。设置主视觉眉题和章节文案。钢琴、圆圈、和弦构建器和测验保持不变；根据需要重新排列和弦列表和测验轮次。
- [AUDIENCE] — 课程面向的对象（默认："Beginners who play by ear and want to name what they hear"）。影响主视觉引导语和常见问题。
- [START_KEY] — 起始调（默认："C"）。可选 C、G、D、A、E、B、F#、Db、Ab、Eb、Bb、F 之一。圆圈、音程根音和和弦构建器从此调开始。
- [INSTRUCTOR_NAME] — 讲师姓名（默认："Marisol Adeyemi"）。一个虚构人物。如果使用真实姓名，请将肖像替换为你自己的照片。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/music-theory-interactive-lesson（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- stage `#1B0B4B` — 深紫外色页面底色；主视觉遮罩色调与奇数章节
- pit `#120634` — 顶栏、停靠栏和页脚的最深底色，以及所有亮色填充上的文字色
- curtain `#2A0F73` — 偶数章节的高饱和紫罗兰底色
- panel `#351A8C` — 小组件面板和卡片
- coral `#FF5A47` — 电光珊瑚色：次要按钮、错误答案、最终色带、第 1 章强调色。必须在主视觉中大面积出现
- acid `#E6FF2E` — 酸性黄：主要按钮、胜利条、正确答案、圆形指针、焦点环。必须在主视觉中大面积出现
- text `#F6F1FF` — 深色底色上的正文和标题文字
- muted `#C9BEF2` — 深色底色上的次要文字
- ivory-key `#F1EBFF` — 淡丁香色自然钢琴键
- pc-C `#FF5A47` — 音级 C
- pc-G `#FF8A2B` — 音级 G
- pc-D `#FFC21F` — 音级 D
- pc-A `#E6FF2E` — 音级 A
- pc-E `#8CF23C` — 音级 E
- pc-B `#2EE87F` — 音级 B
- pc-Gb `#1FE5C4` — 音级 F#/Gb
- pc-Db `#29C9FF` — 音级 C#/Db
- pc-Ab `#6FA3FF` — 音级 G#/Ab
- pc-Eb `#A98BFF` — 音级 D#/Eb
- pc-Bb `#E872FF` — 音级 A#/Bb
- pc-F `#FF5CB0` — 音级 F

### 字体排印
- 展示字体：标题、章节数字、和弦与调名。字重 800，行高 1.04，字距 -0.02em。：Unbounded Variable（OFL），字重 500/800
- 正文字体：桌面端 18px、移动端 16px 的正文，行高 1.55；按钮字重 700。：Figtree Variable（OFL），字重 400/500/700
- 等宽字体：琴键上的音名、半音数、得分、键帽、12 至 14px 的小标签，标签为单词时使用大写并加 0.08em 字距。：JetBrains Mono Variable（OFL），字重 500/700

### 布局与动效
- 间距：基础单位 8px。页面容器最大宽度 1320px，桌面端两侧留白 40px，移动端 16px。章节在桌面端使用 120px 垂直内边距，移动端 72px。小组件面板在桌面端使用 32px 内边距，移动端 16px。面板组之间的间距为 24px。
- 圆角：面板 28px，卡片 20px，按钮和标签完全圆角（999px），钢琴键白键顶部为直角、底部 10px，黑键底部 6px。
- 动效：舞台光束：每次按下主视觉钢琴键时，一道该音符颜色的垂直光束从琴键升至主视觉顶部，宽度为 2 个键宽，使用线性渐变淡出至透明，scaleY 从 0 到 1 用时 120 ms，然后在 600 ms 内淡出。多道光束可以重叠。这是标志性效果。
- 动效：按键：按下的琴键在 60 ms 内下移 3px，其填充变为音级颜色，并获得该颜色的柔和外发光。释放时在 140 ms 内恢复。
- 动效：圆形旋转：使用 Motion 弹簧，刚度 180、阻尼 22，吸附到最近的 30 度，走最短路径。拖动时，旋转直接跟随指针，每当新的扇形越过指针时播放一次 tick()。扇形标签反向旋转以保持直立。
- 动效：胜利条：虚线轮廓在 350 ms 内以酸性黄从左到右填充，对勾图标以弹簧效果弹出（scale 0.4 到 1），顶栏的胜利计数弹到 scale 1.2 再恢复。
- 动效：和弦变化：标签以 40 ms 错峰动画进入，上移 8px 并淡入；和弦形状多边形以弹簧效果（刚度 140、阻尼 18）变形到新的顶点。
- 动效：滚动显现：章节文字和面板在进入视口时上移 24px 并在 500 ms 内淡入一次。
- 动效：主视觉待机：加载时，一道 2.4 s 的光波从左到右扫过钢琴的色带，仅一次，无声音。
- 动效：在 prefers-reduced-motion 下：无光束、光波或滚动显现。圆形无弹簧直接跳到其位置，按键仅改变颜色。声音和所有小组件仍然正常工作。
- 图像：夜晚的舞台。四张风格统一的照片（紫外色雾霭、珊瑚色主光、细酸性黄点缀）为主视觉、讲师、晚间课程和最终色带定下基调。所有交互元素均以 SVG 和 HTML 绘制：钢琴、圆形、和弦形状和色带。乐器不带有制造商名称。

## 页面与区块
### [BRAND] | [LESSON_TOPIC]（`index.html`）
1. **共享布局：顶栏与停靠栏** — 顶栏：左侧是一个 24px 的风车图案，由十二个音符色楔形组成，加上 Unbounded 500 字重的 '[BRAND]'。中间是锚点链接 'Intervals'（#intervals）、'Circle'（#circle）、'Chords'（#chords）、'Quiz'（#quiz）。右侧是一个等宽字体胶囊标签，显示 '0/4 wins' 并递增计数，以及一个圆形声音按钮，使用 Lucide Volume2 或 VolumeX，可见标签为 'Sound on' 或 'Sound off'。停靠栏：固定在底部的栏，包含一个静态迷你键盘，显示当前点亮或发声的音符，一个等宽字体读数显示 lastEvent.label，例如 'C major chord: C E G' 或 'G major scale' 或 'E4'，一个圆形 Lucide Play 按钮用于重放 lastEvent，以及同样的声音按钮。在任何事件之前，读数显示 'Press any key'。
   布局：顶栏为粘性定位，桌面端高 64px，移动端高 56px，pit 背景 85% 不透明度并带背景模糊。移动端隐藏中间链接和 'Sound on' 标签，保留图标和胜利胶囊。停靠栏桌面端高 64px，移动端高 56px，带 pit 背景和 1px 面板色顶部边框。迷你键盘桌面端为 SVG 336x40，移动端为 150x32。Body 获得匹配的底部内边距，使停靠栏永不遮挡内容。
   动效：当 hero 离开视口后（IntersectionObserver），停靠栏在 200 ms 后向上滑入，当 hero 返回时滑出。停靠栏的迷你键即时变色。
2. **Hero** — 等宽字体 acid 色眉题：'[LESSON_TOPIC] · a free lesson from [BRAND]'。标题强制换行：'Press a key. / Hear why / it works.'，其中 'Hear why' 为 acid 色，其余为文本色。导语：'For beginners who play by ear and want to name what they hear. Four short chapters, about 20 minutes, no sign-up.' 主按钮 'Start the lesson'（acid 色，链接到 #intervals）。次按钮 'Jump to the quiz'（coral 填充配 pit 墨色，链接到 #quiz）。仅桌面端在按钮下方显示等宽字体胶囊：'4 chapters'、'20 minutes'、'Keyboard, mouse or touch'。右侧：五度圈。下方：从 C4 到 B5 的完整两个八度钢琴，正上方有一行实时读数。任何按键之前的读数：'Press any key, or try A S D F G H J on your keyboard.' 按一次后：'E4. Now press another key.' 按两次后：'E4 to B4: perfect fifth, 7 half steps.' 使用第 1 章的音程名称。按任一方向计算距离。超过一个八度时，将音程缩减到一个八度内并加上 'plus an octave'。同一个音两次读数显示 'E4 again: same note.'
   布局：最小高度 100svh。全出血背景照片 hero-stage.webp，object-fit cover 加遮罩：从左侧 pit 88% 到右侧 stage 45% 的线性渐变，以及底部 40% 区域上方的 pit 90%。在圆圈后方添加一个大型模糊 coral 径向光晕（600px），在照片左上角添加一个 acid 光晕（360px），两者都清晰可见。在 1440x900 下：钢琴上方两列，左列 58% 放置文本，标题 font-size clamp(36px, 4.6vw, 66px)，右列 42% 放置一个 440px 居中的圆圈。钢琴横跨容器全宽位于屏幕底部，高度 clamp(170px, 23vh, 210px)，使整个构图在 900px 内无需滚动即可容纳。移动端 390x844：单列，顺序为眉题、标题、导语、仅主按钮、216px 圆圈（仅外环）、读数、然后钢琴分两行（C4 到 B4，然后 C5 到 B5），每行高 88px，7 个白键横跨全宽。所有内容必须在约 844px 内容纳。
   动效：每次按键时舞台光束亮起，加上加载时的空闲波浪。第一次按键还会使圆圈转到该音级，使构图明显响应。标题行在加载时以 60 ms 错开显现。
3. **钢琴组件（用于 hero 和全部四个章节）** — 24 个键，C4 到 B5。白键为 ivory-key，底部有 14px 色条，颜色为其音高色，色条上方以等宽字体 pit 墨色显示音符字母。黑键为 pit 色，带 8px 色条，仅在点亮时显示其名称。点亮的音符（音阶、音程或和弦）填充音高色，并显示当前音阶或和弦的拼写，例如 G 大调中的 F# 或 C 小调中的 Eb。正在发声的音符也会获得光晕。在支持悬停的指针设备上，桌面端在每个键上以微小等宽字体帽显示计算机按键字母，并带有当前八度映射。
   布局：一个圆角 pit 托盘，12px 内边距。白键各占宽度的 1/14；黑键为白键宽度的 62%、高度的 62%，居中于间隙并带有通常的轻微偏移。章节钢琴桌面端高 180px。移动端为两行 7 个白键，每行高 110px，间隙 8px。
   动效：使用 Pointer Events 而不使用 setPointerCapture：跟踪每个 pointerId 到 midi 音符的映射，使多点触控和弦可用，并让鼠标滑奏在 pointermove 上使用 elementFromPoint。在键上应用 touch-action: none。每个键是真正的按钮，带有 aria-label 如 'C sharp 4'；Enter 或 Space 播放它。
4. **颜色键带** — 小标题：'Every note has a color.' 行文：'It keeps that color on this whole page. Neighbors in this row are a perfect fifth apart, so colors that look close also sound close.' 然后 12 个圆形芯片按 FIFTHS_ORDER 排列，填充其音高色并以等宽字体 pit 墨色命名。点击芯片在第 4 八度播放该音符。
   布局：全宽 pit 色带，48px 垂直内边距。桌面端文本位于左侧 4 列，12 个芯片在剩余 8 列中排成一行，每个宽 56px。移动端文本堆叠在 6x2 芯片网格上方。
   动效：芯片在播放时以弹簧效果缩放到 1.12。
5. **第 1 章：音程（id intervals）** — coral 色描边数字 '01'。标题：'Intervals are distances.' 概念：'An interval is the gap between two notes, counted in half steps. One half step is the very next key, black or white. Count seven from C and you land on G.' 第二行：'Each gap has its own feel. Learn the feel first and the names follow.' 组件：12 个按顺序排列的芯片，每个带等宽字体半音数、短名称和感觉：1 小二度，紧绷如屏息；2 大二度，向前一步；3 小三度，柔和略带忧伤；4 大三度，明亮而安定；5 纯四度，开阔如呼唤；6 三全音，躁动想要移动；7 纯五度，宽广而稳定；8 小六度，苦甜参半；9 大六度，温暖而开阔；10 小七度，蓝调且未解决；11 大七度，梦幻，几乎归家；12 八度，同一个音，更高。选择芯片会在根音和上方音上调用 playMelodic。芯片下方是一个大读数，如 'C to G · 7 half steps'，使用 Unbounded 字体，两个音符以各自颜色显示，然后是钢琴。按下钢琴键使其成为新的底音。辅助提示：'Press any key to move the bottom note.' 胜利任务：'Small win: play a perfect fifth. Press any key, then the key seven half steps above it.' 成功时，对于此钢琴上连续两次恰好相隔 7 的按键：'Win 1. You found a perfect fifth: C up to G.' 使用实际音符。
   布局：12 列网格。左侧 4 列在 top 96px 处粘性定位，放置 120px 描边数字（透明填充，2px 描边）、44px 标题和概念。右侧 8 列放置面板色组件面板：芯片在 4x3 网格中，然后读数，然后钢琴。胜利栏横跨容器全宽位于下方，高 72px，2px acid 虚线轮廓，带 Lucide Trophy 图标和任务文本。章节地面为 stage。移动端单列，芯片在 2x6 网格中，感觉文本在选择前隐藏，左列不粘性。钢琴上方一个 SVG 弧线连接根音和上方音，标注 '7 half steps'；移动端当两个音符落在不同行时，用钢琴上方的胶囊替代弧线。
   动效：弧线以 pathLength 在 300 ms 内以上方音的颜色绘制。选中的芯片填充该音符的颜色。左侧文本和面板滚动显现。
6. **第 2 章：五度圈（id circle）** — acid 色描边数字 '02'。标题：'Fifths go in a circle.' 概念：'Start anywhere and climb by perfect fifths. After twelve steps you are back where you began. Each step clockwise adds one sharp to the key; each step the other way adds one flat.' 第二行：'Keys next to each other share almost all their notes, which is why they sound like family.' 圆圈：SVG viewBox 600x600，中心 300,300。外环半径 200 到 290，12 个楔形按 FIFTHS_ORDER 表示大调，每个 30 度，间隙 1.5 度，填充音高色。内环半径 130 到 200，RELATIVE_MINORS 使用与其自身根音相同的音高色。中心圆盘半径 124 为 pit 色，以 Unbounded 显示所选调名，下方等宽字体显示调号（'3 sharps'），并作为音阶的播放按钮。环上方一个固定 acid 三角形在 12 点钟方向标记所选调。选中的、相邻大调和三个相邻小调保持全填充配 pit 墨色；所有其他楔形降至 28% 填充不透明度，标签为文本色。信息面板：调名 'A major'；行 'Relative minor: F# minor'；调号 'Sharps: F# C# G#'；7 个音阶音符彩色芯片；'Play scale' 按钮（acid）；7 个全音阶和弦芯片标注 I、ii、iii、IV、V、vi、vii°，下方为和弦名，如 'V · E'。点击和弦芯片会扫弦并设置和弦构建器。下方钢琴显示点亮的音阶。在环上任意位置拖动可旋转，点击楔形将其带到顶部，或在聚焦时使用左右方向键（role slider，aria-valuetext 'A major, 3 sharps'）。胜利任务：'Small win: turn the circle to the key with three sharps.' 成功时，来自本章的用户转动：'Win 2. A major: three sharps, F#, C# and G#.'
   布局：镜像：组件在左 8 列，文本在右 4 列，位于 curtain 地面。面板内，520px 圆圈在左，信息面板在右，钢琴横跨面板全宽位于下方。移动端单列，文本在前，340px 圆圈，然后信息，然后钢琴。Hero 使用相同组件在 440px；移动端 216px 时隐藏内环。胜利栏横跨容器全宽位于下方。
   动效：如设计所述带刻度的弹簧旋转。环上 touch-action none。选中的楔形外半径增长到 298。按下任何钢琴上的音符会使匹配的楔形脉冲到全不透明度 300 ms。
7. **第 3 章：和弦构建器（id chords）** — pc-F 粉色描边数字 '03'。标题：'Stack notes, change the mood.' 概念：'A chord is three or more notes played together. Move one note by one half step and the whole mood flips.' 组件：根音行有 12 个彩色芯片按半音顺序使用 DEFAULT_NAMES。性质行有 9 个芯片：大调（0 4 7，明亮而安定）、小调（0 3 7，柔和而内敛）、减三和弦（0 3 6，紧绷而不稳定）、增三和弦（0 4 8，漂浮而未解决）、挂二和弦（0 2 7，开阔，既不快乐也不悲伤）、挂四和弦（0 5 7，倾斜，想要落地）、属七和弦（0 4 7 10，躁动，推向主音）、大七和弦（0 4 7 11，温暖而梦幻）、小七和弦（0 3 7 10，醇厚而顺滑）。结果块：Unbounded 大字和弦名 'C major'，情绪行，彩色音符芯片（C E G），每个下方有音程标签（根音、大三度、纯五度；其他为大二度、小三度、纯四度、减五度、增五度、小七度、大七度），然后等宽字体公式 'Half steps: 4 + 3'。'Strum' 按钮（acid）。和弦形状：240px SVG 环，12 个点按 FIFTHS_ORDER 排列，多边形连接和弦的音符，以根音色 35% 填充配 acid 描边；说明文字 'The same chord type makes the same shape in every key.' 下方钢琴显示点亮的和弦，根音在第 4 八度，其他音符在上方。进行行：'Try it in [the selected key]' 带三个按钮，'I V vi IV'、'ii V I'、'I IV V'。每个在所选调中以每和弦 700 ms 播放其和弦，同时更新和弦块和钢琴。根音或性质的任何变化都会自动扫弦。胜利任务：'Small win: turn a major chord into a minor one.' 成功时，当同一根音上性质从大调变为小调：'Win 3. You lowered one note by a half step, E to Eb, and the mood changed.' 使用实际音符。
   布局：与第 1 章相同的左文本、右面板布局，位于 stage 地面。面板内：根音行全宽，性质行全宽在 3x3 网格中；然后一个两列行，结果块在左，和弦形状在右；然后钢琴；然后进行。移动端单列，根音芯片在 6x2 网格中，性质芯片在 2 列网格中，和弦形状 200px 居中于结果下方。
   动效：如设计所述芯片错开和多边形变形。三和弦重复最后一个顶点，使多边形始终有 4 个点可变形。
8. **第 4 章：听力训练测验（id quiz）** — pc-Gb 青色描边数字 '04'。标题：'Now use your ears.' 行文：'Eight rounds. Listen, then answer. You can replay each sound as often as you like.' 开始按钮 'Start the quiz'（acid）。轮次在 content.ts 中以此数据形状呈现，每次尝试打乱，根音在 C4 到 G4 之间随机。1 音程 大三度，选项 小三度、大三度、纯四度、纯五度；注释 'A major third: four half steps, bright and settled.' 2 音程 纯五度，选项 纯四度、纯五度、大六度、八度；注释 'A perfect fifth: seven half steps, wide and stable.' 3 和弦 大调，选项 大调、小调、减三和弦、增三和弦；注释 'A major chord: a major third with a minor third on top.' 4 音程 小三度，选项 小三度、大三度、纯五度、小七度；注释 'A minor third: three half steps, soft and a little sad.' 5 和弦 小调，选项 大调、小调、减三和弦、增三和弦；注释 'A minor chord: same outer notes as major, with the middle note a half step lower.' 6 音程 八度，选项 纯五度、大六度、小七度、八度；注释 'An octave: twelve half steps, the same note name, higher.' 7 音程 纯四度，选项 大二度、纯四度、三全音、纯五度；注释 'A perfect fourth: five half steps, open like a call.' 8 和弦 属七和弦，选项 大七和弦、属七和弦、小七和弦、挂四和弦；注释 'A dominant seventh: a major chord with a minor seventh on top, restless and ready to move.' 每轮：一个大型圆形 'Play the sound' 按钮带 Lucide Play 图标，等宽字体 'Round 3 of 8 · Score 2'，一个 8 段条，4 个答案按钮。钢琴在轮次回答前保持隐藏，以免泄露答案；然后以各自颜色显示音符。当轮次未回答时，停靠栏读数显示 'Quiz: listen and answer'，其迷你键盘保持未点亮。回答时，所选按钮若正确变为 acid 色带 Lucide Check，若错误变为 coral 色带 Lucide X，正确答案也变为 acid 色。显示注释和 'Next round' 按钮。若静音，显示 'Sound is off' 并在播放按钮位置内联 'Turn sound on' 按钮。结果卡：大分数 '6/8'；标题 0 到 3 'Warming up'，4 到 6 'Your ears are waking up'，7 到 8 'Sharp ears'；错过轮次列表，每个带重放按钮；'Play again'（acid）重新打乱。完成八轮获得胜利 4：'Win 4. You trained your ears for eight rounds.'
   布局：单个居中面板，最大宽度 880px，位于 curtain 地面，数字和标题居中于上方。播放按钮直径 96px 居中。答案按钮桌面端单行 4 个，移动端 2x2，高 64px。段条横跨面板宽度；每段正确填充 acid，错误填充 coral。结果卡以相同尺寸替换轮次视图，分数桌面端 120px、移动端 72px，Unbounded 字体，acid 色。
   动效：轮次使用 AnimatePresence 向左滑动并淡入 250 ms。错误答案在 240 ms 内抖动 6px 两次。播放按钮在声音播放时发出 coral 色扩展环。结果分数在 600 ms 内从 0 递增。
9. **保留此页：速查表** — 标题：'Keep this page open while you play.' 两个列表。左侧 'Intervals' 包含第 1 章全部 12 个：半音数、名称和感觉。右侧 'Chords' 包含全部 9 种性质：名称、半音公式和情绪。每行有一个小播放按钮，从所选调的的主音播放并更新停靠栏。
   布局：stage 地面，桌面端两列，移动端一列。行高 52px，带细面板色分隔线。半音数位于等宽字体 32px 圆形芯片中，着色为从当前主音到达的音符的颜色。
   动效：行悬停背景在 120 ms 内变为面板色。
10. **讲师与学校** — 眉题：'Who wrote this lesson'。标题：'Taught by [INSTRUCTOR_NAME].' 简介：'[INSTRUCTOR_NAME] spent eleven years playing keys in touring bands before opening [BRAND] above a bike shop at 418 Marlow Street, Eastfield. She teaches the way she learned: by ear first, with the names right after.' 数据：'2,140 students since the first class'、'10 seats per room'、'86% finish all six classes'。课程标题：'Six evenings on real keyboards.' 事实：'Tuesdays and Thursdays, 7:30 to 9:00 pm'、'Room 2B, 418 Marlow Street'、'$186 for all six, or $34 drop-in'。编号课程：1 听音辨音程；2 三和弦与转位；3 调与五度圈；4 七和弦；5 常见进行；6 写你自己的八小节。引语：'I stopped guessing at chords after two weeks. Now I name them on the bus.' Theo Lindqvist，夜班护士。'I had played for years without knowing why anything worked. Class three fixed that.' Priya Venkataraman，婚礼乐队吉他手。
   布局：curtain 地面。第 1 行：instructor-portrait.webp 在左 5 列，3:4 比例，28px 圆角，后方 6px coral 偏移块，简介和 3 个大数据在右 7 列。第 2 行：evening-class.webp 在左 6 列，4:3 比例，28px 圆角，右侧为课程事实和 2x3 网格的编号课程卡，面板色。第 3 行：两个引语卡并排，一个 acid 填充配 pit 墨色，一个 coral 填充配 pit 墨色。移动端全部堆叠。
   动效：仅滚动显现。
11. **FAQ** — 标题：'Before you ask.' 问 'Do I need a piano?' 答 'No. A laptop keyboard, a mouse or a phone screen is enough. If you own a keyboard, try each exercise on it afterward.' 问 'Do I have to read music?' 答 'No. This lesson uses note names and half steps only, with no staff notation.' 问 'I hear nothing. What now?' 答 'Browsers keep sound off until your first tap, so press a key once. Then check the Sound button at the top and the silent switch on your phone.' 问 'What does the evening course add?' 答 'Real keyboards, a teacher listening to you, and live ear training in a room of ten. You also leave with eight bars you wrote yourself.'
   布局：stage 地面，最大宽度 880px，原生 details 和 summary 行，带 Lucide Plus 图标旋转为十字。第一项默认展开。
   动效：答案高度在 200 ms 内动画；图标旋转 45 度。
12. **最终色带与页脚** — coral 色带标题，pit 墨色：'Come play it in the room.' 行文：'New groups start the first Tuesday of each month. Call or write to save a seat.' 联系方式为文本，无表单：'(555) 014-2277' 和 'hello@overtonenight.example'，品牌变更时重写。按钮 'Replay the quiz'（pit 填充配文本色）链接到 #quiz。页脚在 pit 色中：[BRAND]、地址、营业时间 'Office open Monday to Friday, 4 to 7 pm'、锚点链接、'All sounds in this lesson are made live in your browser.'，然后是可选 [CREDIT] 链接。
   布局：色带为全出血 coral，两列布局：文本在左 55%，keys-closeup.webp 在右 45%，全色带高度无圆角，桌面端。移动端照片在文本上方 16:9。页脚桌面端 3 列，移动端堆叠，内边距避开停靠栏。
   动效：仅标题滚动显现。

## 资源

- 图片：将 https://media.vibefather.ai/assets/cf319907-f8d2-4e65-990a-90703b5a0bec/hero-stage.webp 下载到 public/images/hero-stage.webp。替代文本：'An empty small club stage at night, hazy with ultraviolet light and crossed by a coral beam'。用作 hero 背景。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/cf319907-f8d2-4e65-990a-90703b5a0bec/instructor-portrait.webp 下载到 public/images/instructor-portrait.webp。替代文本：'The instructor at a keyboard on a small stage, seen from behind under violet and coral light'。虚构的 AI 生成人物，在讲师区块中用作占位图，可替换为真实照片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/cf319907-f8d2-4e65-990a-90703b5a0bec/evening-class.webp 下载到 public/images/evening-class.webp。替代文本：'Adult students seen from behind, practicing at small keyboards in a dim violet rehearsal room'。用于课程信息旁。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/cf319907-f8d2-4e65-990a-90703b5a0bec/keys-closeup.webp 下载到 public/images/keys-closeup.webp。替代文本：'A close view of piano keys glowing under coral and ultraviolet stage light'。用于最后的 band 区块。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：所有交互式图形均以代码绘制为内联 SVG 或 HTML：钢琴、五度圈、和弦形状环、舞台光束、迷你键盘、风车标志和 favicon。为本模板的原创作品；在 ASSETS.md 中注明它们为代码绘制。
- 图标：通过 lucide-react 包（ISC）使用 Lucide 图标：Volume2、VolumeX、Play、Check、X、Plus、Trophy、RotateCcw。
- 字体：通过列出的 @fontsource-variable 包（OFL-1.1）自托管 Unbounded、Figtree 和 JetBrains Mono，在 src/main.tsx 中导入。在 ASSETS.md 中逐一列出。

## 禁止事项
- 无后端：无服务器代码、API 路由、数据库、认证、第三方 API、分析或任何会提交到某处的表单。联系方式为纯文本。
- 仅静态输出到 dist/，使用 npm run build 构建，使用相对资源路径（Vite base './'）。已压缩，无 source map，无 src/ 复制到 dist/，总计低于 20 MB。
- 保持为单页 index.html。页内链接使用锚点（#quiz）；任何指向文件的链接使用文件名，绝不使用裸目录。
- 通过列出的 Fontsource 包自托管所有字体。绝不从 fonts.googleapis.com、fonts.gstatic.com 或任何其他 CDN 加载字体。无 CDN 脚本或链接标签。将每张图片下载到项目中；绝不热链接。
- 将所有文案、示例数据、获胜任务和测验轮次保留在 src/content.ts 中。当变量值变化时，重写该文件，确保不残留任何默认品牌、人物或主题。小部件、布局、颜色和动效保持不变。
- 无任何类型的音频文件：无采样、录音或声音字体。所有声音在浏览器中使用振荡器合成。
- 在用户手势之前不得创建或恢复 AudioContext，且绝不在加载时自动播放声音。页面必须在 1440x900 和 390x844 下以零控制台错误或警告运行。
- 钢琴上、图片中或任何其他地方不得出现乐器制造商名称或标志。
- 不得使用现有歌曲的旋律、riff 或和弦图，无论是作为示例还是在测验中，也不得出现“听起来像……的开头”之类的歌曲引用。仅使用音程、音阶和通用进行。
- 不得使用现有理论网站、书籍或课程的课程文本、图表或练习措辞。使用本提示词中的文案。
- 不得使用商业音乐记谱字体，不得使用五线谱记谱，不得使用音乐字形字符；变音记号写作 # 和 b。
- 不得使用 Aceternity UI、Tailwind Plus 或其他受限 UI 库源码，不得使用音频或钢琴组件库；自行编写小部件。
- 不得使用真实音乐家或教师的肖像。讲师图片展示一个虚构的 AI 生成人物。不得出现音乐教育应用或游戏中的具名吉祥物或角色。
- 不得使用灰白色或奶油色页面区块。整个页面保持在紫外和紫色底色上，珊瑚色带除外。
- 遵循设计中所描述的 prefers-reduced-motion，并保持正文文本达到 WCAG AA 对比度。绝不在明亮音符颜色上放置文本色标签；在那里使用坑墨色 #120634。
- 任何宽度下不得出现水平页面滚动，不得有固定停靠栏覆盖钢琴或答案按钮。
- 在项目根目录的 ASSETS.md 中列出每个第三方文件，包含路径、源 URL、作者和许可证。站点内不得提及 VibeFather，可选的 [CREDIT] 页脚链接除外。

---
— Prompt by VibeFather · https://vibefather.ai/t/music-theory-interactive-lesson · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
