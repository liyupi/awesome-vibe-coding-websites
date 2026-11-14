> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 乐理互动课程

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND]（一所虚构的夜间音乐学校）构建一个单页交互式乐理课程，主题为“[LESSON_TOPIC]”。页面是一段长滚动，重复固定的节奏：简短概念、动手小工具、小小成就。页面包含一架由 Web Audio 振荡器发声的可弹奏双八度钢琴、一个旋转的 SVG 五度圈、一个会点亮音符并命名音程的和弦构建器、一个带评分的八轮听力训练测验，以及一个关于讲师和学校的收尾部分。所有小工具读取同一份共享状态，十二个音级颜色在各处保持一致，因此颜色本身就在传授音程关系。以下文案按默认值撰写。如果这些值发生变化，请在一个内容文件中重写所有文案以适配它们，并保持小工具、布局、颜色和动效完全不变。

- 受众：[AUDIENCE]。他们可能不识五线谱，也可能没有乐器；一台笔记本电脑键盘或一部手机就足够。
- 目标：访客在十秒内按下琴键，听到声音并看到乐理作出响应。到页面结束时，他们能凭听觉说出常见音程和和弦的名称，已获得四个小小成就和一个测验分数，并了解 [BRAND] 晚间课程提供什么。
- 语气：俏皮、大胆、直白，像一位在夜晚小舞台上的好老师。句子简短。用日常语言描述声音听起来如何。绝不学术化，绝不为了可爱而可爱。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react (MIT)、react-dom (MIT)、motion (MIT)、lucide-react (ISC)、@fontsource-variable/unbounded (OFL-1.1)、@fontsource-variable/figtree (OFL-1.1)、@fontsource-variable/jetbrains-mono (OFL-1.1)、vite (MIT)、@vitejs/plugin-react (MIT)、tailwindcss (MIT)、postcss (MIT)、autoprefixer (MIT)、typescript (Apache-2.0)
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - vite.config.ts：将 base 设为 './'，build.sourcemap 设为 false。从 'motion/react' 导入 Motion。
  - 文件布局：src/content.ts（所有文案、示例数据、胜利任务、测验轮次）、src/theory.ts（音符表、音阶、和弦拼写）、src/audio.ts（Web Audio 引擎）、src/store.tsx（React context 加 useReducer，不使用状态库）、src/components/（Piano、CircleOfFifths、IntervalPicker、ChordBuilder、ChordShape、Quiz、WinBar、Dock、TopBar）、src/App.tsx。图片放在 public/images/。
  - 将设计部分中的颜色和字体按给定名称添加到 tailwind.config 的 theme.extend 中，并从 src/theory.ts 导出相同的音高颜色表，作为按音级 0 到 11 索引的类型化数组。
  - 音符表：按音级的 DEFAULT_NAMES = C、Db、D、Eb、E、F、F#、G、Ab、A、Bb、B。所有地方都用普通 # 和 b 字符书写变音记号，不使用音乐符号。从顶部顺时针的 FIFTHS_ORDER = C、G、D、A、E、B、F#、Db、Ab、Eb、Bb、F。相同顺序的 RELATIVE_MINORS = Am、Em、Bm、F#m、C#m、G#m、D#m、Bbm、Fm、Cm、Gm、Dm。
  - 音阶拼写表：C = C D E F G A B；G = G A B C D E F#；D = D E F# G A B C#；A = A B C# D E F# G#；E = E F# G# A B C# D#；B = B C# D# E F# G# A#；F# = F# G# A# B C# D# E#；Db = Db Eb F Gb Ab Bb C；Ab = Ab Bb C Db Eb F G；Eb = Eb F G Ab Bb C D；Bb = Bb C D Eb F G A；F = F G A Bb C D E。调号：C 无；G 1 个升号；D 2 个升号；A 3 个升号；E 4 个升号；B 5 个升号；F# 6 个升号；Db 5 个降号；Ab 4 个降号；Eb 3 个降号；Bb 2 个降号；F 1 个降号。
  - 和弦拼写函数：从根音名开始，每个音级向上取相应步数的字母（2 度 +1，3 度 +2，4 度 +3，5 度 +4，7 度 +6），然后添加所需的 # 或 b 字符以达到该音级。重降写作 bb，例如 Ebdim = Eb Gb Bbb。
  - src/audio.ts：在首次 pointerdown 或 keydown 处理程序中惰性创建一个 AudioContext，并在那里调用 resume()；页面加载时绝不触碰音频。图：各声部 → 低通 BiquadFilter（3200 Hz，Q 0.6）→ 主 GainNode（0.7）→ DynamicsCompressor → destination。每个声部是一个音符频率的三角波振荡器加上一个高八度的正弦波（增益 0.25），通过声部增益，起音 0.008 s 到峰值 0.5，衰减 0.25 s 到延音 0.28，释放 0.35 s。十二平均律，A4 = 440 Hz。限制为 10 个声部，抢占最旧的。静音时在 20 ms 内将主增益渐变到 0，取消静音时恢复到 0.7。
  - src/audio.ts 中的播放辅助函数：playNote(midi, ms)；playMelodic(midis)，音符之间间隔 450 ms，然后所有音符一起持续 900 ms；strum(midis)，音符之间间隔 45 ms，保持 1200 ms；playScale(midis)，音符之间间隔 170 ms；tick(midi)，一个 60 ms 的音符，增益 0.15。每个辅助函数还向 store 报告音符的开和关，以便每个钢琴同步点亮。每个都接受一个 silent 标志来跳过此报告；测验播放使用它直到该轮被回答，这样 dock 就无法泄露答案。
  - src/store.tsx 状态：selectedKey（FIFTHS_ORDER 的索引，从 [START_KEY] 开始）、activeNotes（当前发声的 midi 编号集合）、interval {rootMidi, semitones: 7}、chord {rootName, quality: 'major'}、lastEvent {label, midis, playback}、wins [false, false, false, false]、muted false、heroPlayed（在 hero 钢琴上按下的最后两个 midi 音符）。dock、顶栏和所有钢琴都从这个单一 store 读取。
  - 链接规则：(1) 更改 selectedKey 将 interval.rootMidi 设置为第 4 八度的主音，并将 chord.rootName 设置为主音，保持品质不变。(2) 在和弦构建器中选择根音芯片或品质会旋转圆圈：对于大调、属 7 和弦、大 7 和弦、增和弦和挂留和弦，旋转到根音自己的扇区；对于小调、小 7 和弦和减和弦，旋转到其内部扇区具有该根音的大调（根音 + 3 个半音）。此旋转不得覆盖触发它的和弦，因此传递一个 source 标志。(3) 圆圈面板中的自然音阶和弦芯片设置和弦构建器并保持圆圈位置不变。(4) 在 hero 钢琴上按下会将 selectedKey 设置为该音级。在 Chapter 1 钢琴上按下会将 interval.rootMidi 设置为第 4 八度的该音级，并保持 selectedKey 不变。在其他钢琴上按下仅播放并脉冲匹配的圆圈扇区。
  - 窗口 keydown 上的键盘映射，忽略 e.repeat、任何修饰键以及输入框内的焦点：A=C、W=C#、S=D、E=D#、D=E、F=F、T=F#、G=G、Y=G#、H=A、U=A#、J=B、K=C 高一个八度、O=C# 高、L=D 高、P=D# 高、;=E 高、'=F 高。基础八度从 4 开始；Z 将其设为 4，X 将其设为 5；高于 B5 的音符被忽略。按下算作在当前视图中的 hero 或 chapter 钢琴上按下（用 IntersectionObserver 跟踪）；在其他任何地方仅播放音符。
  - npm 脚本：dev、build（tsc --noEmit && vite build）、preview。添加 public/favicon.svg，一个使用音符颜色的 12 扇区风车，以及一个纯标题 '[BRAND] | [LESSON_TOPIC]'。

## 变量
- [BRAND] — 学校或课程品牌（默认："Overtone Night School"）。一个虚构名称。显示在顶部栏、讲师部分、最终横幅和页脚中。
- [LESSON_TOPIC] — 课程主题（默认："Intervals and chords"）。设置主视觉眉题和章节文案。钢琴、圆圈、和弦构建器和测验保持不变；根据需要重新排列和弦列表和测验轮次。
- [AUDIENCE] — 课程面向的人群（默认："Beginners who play by ear and want to name what they hear"）。影响主视觉引导语和 FAQ。
- [START_KEY] — 起始调（默认："C"）。可选 C、G、D、A、E、B、F#、Db、Ab、Eb、Bb、F 之一。圆圈、音程根音和和弦构建器从此处开始。
- [INSTRUCTOR_NAME] — 讲师姓名（默认："Marisol Adeyemi"）。一个虚构人物。如果使用真实姓名，请将肖像替换为你自己的照片。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/music-theory-interactive-lesson（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- stage `#1B0B4B` — 深紫外色页面底色；hero 遮罩色调与奇数章节
- pit `#120634` — 顶栏、dock 和页脚的最深底色，以及所有亮色填充上的文字色
- curtain `#2A0F73` — 偶数章节的高饱和紫罗兰底色
- panel `#351A8C` — 小组件面板与卡片
- coral `#FF5A47` — 电光珊瑚色：次要按钮、错误答案、最终条带、第 1 章强调色。必须在 hero 中大面积出现
- acid `#E6FF2E` — 酸性黄：主要按钮、胜利条、正确答案、圆形指针、焦点环。必须在 hero 中大面积出现
- text `#F6F1FF` — 深色底色上的正文与标题文字
- muted `#C9BEF2` — 深色底色上的次要文字
- ivory-key `#F1EBFF` — 淡丁香色的自然钢琴键
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
- 正文字体：桌面端正文 18px、移动端 16px，行高 1.55；按钮字重 700。：Figtree Variable（OFL），字重 400/500/700
- 等宽字体：琴键上的音名、半音数、得分、键帽、12 至 14px 的小标签，标签为单词时使用大写并加 0.08em 字距。：JetBrains Mono Variable（OFL），字重 500/700

### 布局与动效
- 间距：基础单位 8px。页面容器最大宽度 1320px，桌面端两侧留白 40px，移动端 16px。章节在桌面端使用 120px 垂直内边距，移动端 72px。小组件面板在桌面端使用 32px 内边距，移动端 16px。面板组之间的间距为 24px。
- 圆角：面板 28px，卡片 20px，按钮与标签完全圆角（999px），钢琴键顶部为直角、白键底部 10px、黑键底部 6px。
- 动效：舞台光束：每次按下 hero 钢琴键时，一道该音符颜色的垂直光束从琴键升至 hero 顶部，宽度为 2 个键宽，带线性渐变淡出至透明，scaleY 从 0 到 1 用时 120 ms，随后在 600 ms 内淡出。多道光束可以重叠。这是标志性效果。
- 动效：按键：按下的琴键在 60 ms 内下移 3px，其填充变为该音级颜色，并带有该颜色的柔和外发光。松开后在 140 ms 内复位。
- 动效：圆形旋转：使用 Motion 弹簧，刚度 180、阻尼 22，吸附到最近的 30 度，走最短路径。拖动时，旋转直接跟随指针，每当新的扇形越过指针时播放一次 tick()。扇形标签反向旋转以保持直立。
- 动效：胜利条：虚线轮廓在 350 ms 内以酸性黄从左向右填充，对勾图标以弹簧效果弹出（scale 0.4 到 1），顶栏的胜利计数弹到 scale 1.2 再恢复。
- 动效：和弦变化：标签以 40 ms 错峰动画进入，上移 8px 并淡入；和弦形状多边形以弹簧效果（刚度 140，阻尼 18）变形到新的顶点。
- 动效：滚动显现：章节文字与面板在进入视口时上移 24px 并淡入一次，用时 500 ms。
- 动效：hero 待机：加载时，一道 2.4 s 的光波从左向右扫过钢琴的色条，仅一次，无声音。
- 动效：在 prefers-reduced-motion 下：无光束、光波或滚动显现。圆形无弹簧直接跳到其位置，按键仅改变颜色。声音和所有小组件仍然可用。
- 图像：夜晚的舞台。四张风格统一的照片（紫外薄雾、珊瑚色主光、细酸性黄点缀）为 hero、讲师、晚间课程和最终条带定下基调。所有可交互元素均以 SVG 和 HTML 绘制：钢琴、圆形、和弦形状和色条。乐器不带有制作者名称。

## 页面与区块
### [BRAND] | [LESSON_TOPIC] (`index.html`)
1. **共享布局：顶栏与停靠栏** — 顶栏：左侧，一个 24px 的风车图案，由十二个音符色楔形组成，加上 Unbounded 500 字体的 '[BRAND]'。中间，锚点链接 'Intervals'（#intervals）、'Circle'（#circle）、'Chords'（#chords）、'Quiz'（#quiz）。右侧，一个等宽字体胶囊显示 '0/4 wins' 并递增计数，以及一个圆形声音按钮，使用 Lucide Volume2 或 VolumeX，可见标签为 'Sound on' 或 'Sound off'。停靠栏：固定底部栏，包含一个静态迷你键盘，显示当前点亮或发声的音符，一个等宽字体读数显示 lastEvent.label，例如 'C major chord: C E G' 或 'G major scale' 或 'E4'，一个圆形 Lucide Play 按钮用于重放 lastEvent，以及同样的声音按钮。在任何事件之前，读数显示 'Press any key'。
   布局：顶栏为粘性定位，桌面端高 64px，移动端高 56px，pit 背景 85% 不透明度并带背景模糊。移动端隐藏中间链接和 'Sound on' 标签，保留图标和胜利胶囊。停靠栏桌面端高 64px，移动端高 56px，带 pit 背景和 1px 面板色顶部边框。迷你键盘桌面端为 SVG 336x40，移动端为 150x32。Body 获得匹配的底部内边距，使停靠栏永不覆盖内容。
   动效：停靠栏在 hero 离开视口后 200 ms 滑入（IntersectionObserver），hero 返回时滑走。停靠栏的迷你键立即变色。
2. **Hero** — 等宽字体 acid 色眉题：'[LESSON_TOPIC] · a free lesson from [BRAND]'。标题强制换行：'Press a key. / Hear why / it works.'，其中 'Hear why' 为 acid 色，其余为文本色。导语：'For beginners who play by ear and want to name what they hear. Four short chapters, about 20 minutes, no sign-up.' 主按钮 'Start the lesson'（acid 色，链接到 #intervals）。次按钮 'Jump to the quiz'（coral 填充配 pit 墨色，链接到 #quiz）。按钮下方的等宽字体标签仅在桌面端显示：'4 chapters'、'20 minutes'、'Keyboard, mouse or touch'。右侧：五度圈。所有内容下方：完整的两个八度钢琴，从 C4 到 B5，正上方有一行实时读数。任何按键前的读数：'Press any key, or try A S D F G H J on your keyboard.' 按一次后：'E4. Now press another key.' 按两次后：'E4 to B4: perfect fifth, 7 half steps.' 使用第 1 章的音程名称。以任一方向计算距离。超过一个八度时，将音程缩减到一个八度内并加上 'plus an octave'。同一个音两次读数 'E4 again: same note.'
   布局：最小高度 100svh。全出血背景照片 hero-stage.webp，object-fit cover 并带遮罩：线性渐变从左侧 pit 88% 到右侧 stage 45%，以及底部 40% 区域 pit 90%。在圆圈后方添加一个大的模糊 coral 径向光晕（600px），在照片左上角添加一个 acid 光晕（360px），两者都清晰可见。在 1440x900 下：钢琴上方两列，左列 58% 放置文本，标题字号 clamp(36px, 4.6vw, 66px)，右列 42% 放置一个 440px 的圆圈居中。钢琴横跨容器全宽位于屏幕底部，高度 clamp(170px, 23vh, 210px)，使整个构图在 900px 内无需滚动即可容纳。移动端 390x844：单列，顺序为眉题、标题、导语、仅主按钮、216px 圆圈（仅外环）、读数，然后钢琴分两行（C4 到 B4，然后 C5 到 B5），每行高 88px，7 个自然键横跨全宽。所有内容必须在约 844px 内容纳。
   动效：每次按键时舞台光束，加上加载时的空闲波浪。第一次按键还使圆圈转到该音级，因此构图可见地响应。标题行在加载时以 60 ms 交错显现。
3. **钢琴组件（用于 hero 和全部四个章节）** — 24 个键，C4 到 B5。自然键为 ivory-key，底部有 14px 色条，颜色为其音高色，并在色条上方以等宽字体 pit 墨色显示音符字母。升号为 pit 色，带 8px 色条，仅在点亮时显示其名称。点亮的音符（音阶、音程或和弦）填充音高色，并显示当前音阶或和弦的拼写，例如 G 大调中的 F# 或 C 小调中的 Eb。正在发声的音符也获得光晕。在桌面端且存在支持悬停的指针时，在每个键上以微小等宽字体帽显示计算机键字母，并带当前八度映射。
   布局：一个圆角 pit 托盘，12px 内边距。自然键各占宽度的 1/14；升号为自然键宽度的 62% 和高度的 62%，居中于间隙并带通常的轻微偏移。章节钢琴桌面端高 180px。移动端，两行各 7 个自然键，每行高 110px，间隙 8px。
   动效：使用 Pointer Events 而不使用 setPointerCapture：跟踪每个 pointerId 到 midi 音符，使多点触控和弦工作，并让鼠标滑奏在 pointermove 上使用 elementFromPoint。在键上应用 touch-action: none。每个键是真实按钮，带 aria-label 例如 'C sharp 4'；Enter 或 Space 播放它。
4. **颜色键带** — 小标题：'Every note has a color.' 行：'It keeps that color on this whole page. Neighbors in this row are a perfect fifth apart, so colors that look close also sound close.' 然后 12 个圆形芯片按 FIFTHS_ORDER 排列，填充其音高色并以等宽字体 pit 墨色命名。点击芯片播放该音符的第 4 八度。
   布局：全宽 pit 带，48px 垂直内边距。桌面端文本位于左侧 4 列，12 个芯片在剩余 8 列中排成一行，每个宽 56px。移动端文本堆叠在 6x2 芯片网格上方。
   动效：芯片在播放时以弹簧效果缩放到 1.12。
5. **第 1 章：音程（id intervals）** — coral 色描边数字 '01'。标题：'Intervals are distances.' 概念：'An interval is the gap between two notes, counted in half steps. One half step is the very next key, black or white. Count seven from C and you land on G.' 第二行：'Each gap has its own feel. Learn the feel first and the names follow.' 组件：12 个芯片按顺序排列，每个带等宽字体半音数、短名称和感觉：1 小二度，紧张如屏息；2 大二度，向前一步；3 小三度，柔和略带忧伤；4 大三度，明亮而安定；5 纯四度，开阔如呼唤；6 三全音，不安且想要移动；7 纯五度，宽广而稳定；8 小六度，苦甜参半；9 大六度，温暖而开阔；10 小七度，蓝调且未解决；11 大七度，梦幻，几乎到家；12 八度，同一个音，更高。选择芯片在根音和高音上调用 playMelodic。芯片下方一个大读数例如 'C to G · 7 half steps'，使用 Unbounded 字体，两个音符以各自颜色显示，然后是钢琴。按下钢琴键使其成为新的底音。辅助提示：'Press any key to move the bottom note.' 胜利任务：'Small win: play a perfect fifth. Press any key, then the key seven half steps above it.' 成功时，对于此钢琴上连续两次恰好相隔 7 的按键：'Win 1. You found a perfect fifth: C up to G.' 使用真实音符。
   布局：12 列网格。左侧 4 列在顶部 96px 处粘性定位，放置 120px 描边数字（透明填充，2px 描边）、44px 标题和概念。右侧 8 列放置面板色组件面板：芯片在 4x3 网格中，然后读数，然后钢琴。胜利栏横跨容器全宽位于下方，高 72px，虚线 2px acid 描边，带 Lucide Trophy 图标和任务文本。章节地面为 stage。移动端，单列，芯片在 2x6 网格中，感觉文本在选择前隐藏，左列不粘性。钢琴上方一个 SVG 弧线连接根音和高音，标记为 '7 half steps'；移动端，当两个音符落在不同行时，用钢琴上方的胶囊替代弧线。
   动效：弧线以 pathLength 在 300 ms 内以高音的颜色绘制。选中的芯片填充该音符的颜色。左侧文本和面板滚动显现。
6. **第 2 章：五度圈（id circle）** — 酸色的描边数字 '02'。标题：'Fifths go in a circle.' 概念：'Start anywhere and climb by perfect fifths. After twelve steps you are back where you began. Each step clockwise adds one sharp to the key; each step the other way adds one flat.' 第二行：'Keys next to each other share almost all their notes, which is why they sound like family.' 圆环：SVG viewBox 600x600，中心 300,300。外环半径 200 到 290，包含 12 个楔形，对应 FIFTHS_ORDER 中的大调，每个 30 度，间隔 1.5 度，用音高颜色填充。内环半径 130 到 200，包含 RELATIVE_MINORS，使用与其自身根音相同的音高颜色。中心圆盘半径 124，颜色为 pit，用 Unbounded 显示所选调名，下方用 mono 显示其调号（'3 sharps'），并作为音阶的播放按钮。圆环上方一个固定的酸色三角形在 12 点钟方向标记所选调。选中的、相邻的大调和三个相邻的小调保持完整填充，使用 pit 墨色；所有其他楔形降至 28% 填充不透明度，标签使用文本色。信息面板：调名 'A major'；行 'Relative minor: F# minor'；调号 'Sharps: F# C# G#'；7 个音阶音符色块；'Play scale' 按钮（酸色）；7 个自然音阶和弦色块，标记为 I、ii、iii、IV、V、vi、vii°，下方为和弦名，例如 'V · E'。点击和弦色块会扫弦并设置和弦构建器。下方钢琴显示点亮的音阶。在圆环上任意位置拖动可旋转，点击楔形将其转到顶部，或在聚焦时使用左右方向键（role slider，aria-valuetext 'A major, 3 sharps'）。胜利任务：'Small win: turn the circle to the key with three sharps.' 成功时，来自本章中的用户回合：'Win 2. A major: three sharps, F#, C# and G#.'
   布局：镜像：小组件在左侧占 8 列，文本在右侧占 4 列，位于 curtain 底色上。面板内部，520px 的圆环在左，信息面板在右，钢琴横跨面板下方全宽。移动端为单列，文本在前，340px 圆环，然后信息，然后钢琴。Hero 使用同一组件，尺寸 440px；移动端 216px 时隐藏内环。胜利栏横跨下方整个容器。
   动效：如设计所述，带刻度的弹簧旋转。圆环上 touch-action none。选中的楔形外半径增大到 298。按下任意钢琴上的音符会使匹配的楔形脉冲至完全不透明度，持续 300 ms。
7. **第 3 章：和弦构建器（id chords）** — pc-F 粉色的描边数字 '03'。标题：'Stack notes, change the mood.' 概念：'A chord is three or more notes played together. Move one note by one half step and the whole mood flips.' 小组件：根音行有 12 个色块，按半音顺序使用 DEFAULT_NAMES。性质行有 9 个色块：Major（0 4 7，明亮而稳定）、Minor（0 3 7，柔和而内敛）、Diminished（0 3 6，紧张而不稳定）、Augmented（0 4 8，漂浮而未解决）、Sus2（0 2 7，开放，既不快乐也不悲伤）、Sus4（0 5 7，倾斜，想要落地）、Dominant 7th（0 4 7 10，不安，推动回家）、Major 7th（0 4 7 11，温暖而梦幻）、Minor 7th（0 3 7 10，醇厚而顺滑）。结果块：大号和弦名 'C major' 使用 Unbounded，情绪行，音符色块（C E G），每个下方有音程标签（Root、Major 3rd、Perfect 5th；其他为 Major 2nd、Minor 3rd、Perfect 4th、Diminished 5th、Augmented 5th、Minor 7th、Major 7th），然后 mono 公式 'Half steps: 4 + 3'。'Strum' 按钮（酸色）。和弦形状：240px SVG 圆环，12 个点按 FIFTHS_ORDER 排列，多边形连接和弦的音符，用根音颜色以 35% 填充，酸色描边；说明文字 'The same chord type makes the same shape in every key.' 下方钢琴显示点亮的和弦，根音在八度 4，其他音符在上方。进行行：'Try it in [the selected key]'，三个按钮，'I V vi IV'、'ii V I'、'I IV V'。每个按钮以所选调播放其和弦，每个和弦 700 ms，播放时更新和弦块和钢琴。根音或性质的任何变化都会自动扫弦。胜利任务：'Small win: turn a major chord into a minor one.' 成功时，当同一根音上性质从大调变为小调：'Win 3. You lowered one note by a half step, E to Eb, and the mood changed.' 使用真实音符。
   布局：与第 1 章相同的左文本、右面板布局，位于 stage 底色上。面板中：根音行全宽，性质行全宽，3×3 网格；然后两列行，结果块在左，和弦形状在右；然后钢琴；然后进行。移动端为单列，根音色块 6×2 网格，性质色块 2 列网格，和弦形状 200px 居中于结果下方。
   动效：如设计所述，色块交错和 polygon 变形。三和弦重复最后一个顶点，使 polygon 始终有 4 个点可变形。
8. **第 4 章：听力训练测验（id quiz）** — pc-Gb 青色的描边数字 '04'。标题：'Now use your ears.' 行：'Eight rounds. Listen, then answer. You can replay each sound as often as you like.' 开始按钮 'Start the quiz'（酸色）。轮次在 content.ts 中采用此数据形状，每次尝试打乱，根音在 C4 到 G4 之间随机。1 音程 Major third，选项 Minor third、Major third、Perfect fourth、Perfect fifth；注释 'A major third: four half steps, bright and settled.' 2 音程 Perfect fifth，选项 Perfect fourth、Perfect fifth、Major sixth、Octave；注释 'A perfect fifth: seven half steps, wide and stable.' 3 和弦 Major，选项 Major、Minor、Diminished、Augmented；注释 'A major chord: a major third with a minor third on top.' 4 音程 Minor third，选项 Minor third、Major third、Perfect fifth、Minor seventh；注释 'A minor third: three half steps, soft and a little sad.' 5 和弦 Minor，选项 Major、Minor、Diminished、Augmented；注释 'A minor chord: same outer notes as major, with the middle note a half step lower.' 6 音程 Octave，选项 Perfect fifth、Major sixth、Minor seventh、Octave；注释 'An octave: twelve half steps, the same note name, higher.' 7 音程 Perfect fourth，选项 Major second、Perfect fourth、Tritone、Perfect fifth；注释 'A perfect fourth: five half steps, open like a call.' 8 和弦 Dominant 7th，选项 Major 7th、Dominant 7th、Minor 7th、Sus4；注释 'A dominant seventh: a major chord with a minor seventh on top, restless and ready to move.' 每轮：一个大的圆形 'Play the sound' 按钮，带 Lucide Play 图标，mono 'Round 3 of 8 · Score 2'，一个 8 段条，4 个答案按钮。钢琴在轮次回答前保持隐藏，以免泄露答案；然后显示音符及其颜色。轮次未回答时，dock 读数显示 'Quiz: listen and answer'，其迷你键盘保持不亮。回答时，所选按钮若正确变为酸色并带 Lucide Check，若错误变为珊瑚色并带 Lucide X，正确答案也变为酸色。显示注释和 'Next round' 按钮。若静音，显示 'Sound is off'，并在播放按钮位置显示内联 'Turn sound on' 按钮。结果卡：大分数 '6/8'；标题 0 到 3 'Warming up'，4 到 6 'Your ears are waking up'，7 到 8 'Sharp ears'；错过轮次列表，每个带重播按钮；'Play again'（酸色）重新打乱。完成八轮获得胜利 4：'Win 4. You trained your ears for eight rounds.'
   布局：单个居中面板，最大宽度 880px，位于 curtain 底色上，数字和标题居中在上方。播放按钮直径 96px 并居中。答案按钮桌面端单行 4 个，移动端 2×2，高 64px。段条横跨面板宽度；每段正确填充酸色，错误填充珊瑚色。结果卡以相同尺寸替换轮次视图，分数桌面端 120px、移动端 72px，使用 Unbounded，酸色。
   动效：轮次使用 AnimatePresence 向左滑动并淡入 250 ms。错误答案在 240 ms 内抖动 6px 两次。播放按钮在声音播放时发出珊瑚色扩散环。结果分数在 600 ms 内从 0 计数上升。
9. **保留此页：速查表** — 标题：'Keep this page open while you play.' 两个列表。左侧 'Intervals' 包含第 1 章的全部 12 个：半音数、名称和感觉。右侧 'Chords' 包含全部 9 种性质：名称、半音公式和情绪。每行有一个小播放按钮，从所选调的主音播放并更新 dock。
   布局：stage 底色，桌面端两列，移动端一列。行高 52px，带细面板色分隔线。半音数字以 mono 显示在 32px 圆形色块中，色块着色为从当前主音到达的音符颜色。
   动效：行悬停背景在 120 ms 内变为 panel。
10. **讲师与学校** — 眉题：'Who wrote this lesson'。标题：'Taught by [INSTRUCTOR_NAME]。' 简介：'[INSTRUCTOR_NAME] 在组建巡演乐队弹了十一年键盘，之后在 Eastfield 的 Marlow Street 418 号一家自行车店楼上开了 [BRAND]。她教的方式就是她学的方式：先靠耳朵，随后再记名称。' 数据：'2,140 students since the first class'、'10 seats per room'、'86% finish all six classes'。课程标题：'Six evenings on real keyboards。' 事实：'Tuesdays and Thursdays, 7:30 to 9:00 pm'、'Room 2B, 418 Marlow Street'、'$186 for all six, or $34 drop-in'。编号课程：1 Intervals by ear；2 Triads and inversions；3 Keys and the circle；4 Seventh chords；5 Common progressions；6 Write your own eight bars。引语：'I stopped guessing at chords after two weeks. Now I name them on the bus.' Theo Lindqvist，夜班护士。'I had played for years without knowing why anything worked. Class three fixed that.' Priya Venkataraman，婚礼乐队吉他手。
   布局：Curtain 底色。第 1 行：instructor-portrait.webp 居左占 5 列，比例 3:4，圆角 28px，后方有 6px 珊瑚色偏移块；简介和 3 个大型数据居右占 7 列。第 2 行：evening-class.webp 居左占 6 列，比例 4:3，圆角 28px；右侧是课程事实和 2×3 网格的编号课程卡片，使用 panel 色。第 3 行：两张引语卡片并排，一张 acid 填充配 pit 墨色，一张 coral 填充配 pit 墨色。移动端全部堆叠。
   动效：仅滚动显现。
11. **FAQ** — 标题：'Before you ask。' 问 'Do I need a piano?' 答 'No. A laptop keyboard, a mouse or a phone screen is enough. If you own a keyboard, try each exercise on it afterward.' 问 'Do I have to read music?' 答 'No. This lesson uses note names and half steps only, with no staff notation.' 问 'I hear nothing. What now?' 答 'Browsers keep sound off until your first tap, so press a key once. Then check the Sound button at the top and the silent switch on your phone.' 问 'What does the evening course add?' 答 'Real keyboards, a teacher listening to you, and live ear training in a room of ten. You also leave with eight bars you wrote yourself.'
   布局：Stage 底色，最大宽度 880px，原生 details 和 summary 行，带一个 Lucide Plus 图标，旋转后变成叉号。第一项默认展开。
   动效：答案高度以 200 ms 动画展开；图标旋转 45 度。
12. **末尾色带与页脚** — Coral 色带标题，pit 墨色：'Come play it in the room。' 文案：'New groups start the first Tuesday of each month. Call or write to save a seat.' 联系方式为纯文本，无表单：'(555) 014-2277' 和 'hello@overtonenight.example'，品牌变更时重写。按钮 'Replay the quiz'（pit 填充配 text 色）链接到 #quiz。页脚为 pit 色：[BRAND]、地址、营业时间 'Office open Monday to Friday, 4 to 7 pm'、锚点链接、'All sounds in this lesson are made live in your browser.'，然后是可选 [CREDIT] 链接。
   布局：色带为全出血 coral，桌面端两栏布局：文字居左占 55%，keys-closeup.webp 居右占 45%，色带全高、无圆角。移动端照片位于文字上方，比例 16:9。页脚桌面端 3 列，移动端堆叠，内边距避开 dock。
   动效：仅标题滚动显现。

## 资产
- 图片：下载 https://media.vibefather.ai/assets/cf319907-f8d2-4e65-990a-90703b5a0bec/hero-stage.webp 到 public/images/hero-stage.webp。替代文本：'An empty small club stage at night, hazy with ultraviolet light and crossed by a coral beam'。用作主视觉背景。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：下载 https://media.vibefather.ai/assets/cf319907-f8d2-4e65-990a-90703b5a0bec/instructor-portrait.webp 到 public/images/instructor-portrait.webp。替代文本：'The instructor at a keyboard on a small stage, seen from behind under violet and coral light'。一个虚构的 AI 生成人物，在讲师区块中用作占位图，可替换为真实照片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：下载 https://media.vibefather.ai/assets/cf319907-f8d2-4e65-990a-90703b5a0bec/evening-class.webp 到 public/images/evening-class.webp。替代文本：'Adult students seen from behind, practicing at small keyboards in a dim violet rehearsal room'。用于课程信息旁边。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：下载 https://media.vibefather.ai/assets/cf319907-f8d2-4e65-990a-90703b5a0bec/keys-closeup.webp 到 public/images/keys-closeup.webp。替代文本：'A close view of piano keys glowing under coral and ultraviolet stage light'。用于最后的乐队区块。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：所有交互式图形均以代码绘制为内联 SVG 或 HTML：钢琴、五度圈、和弦形状环、舞台光束、迷你键盘、风车标志和 favicon。为本模板的原创作品；在 ASSETS.md 中注明它们为代码绘制。
- 图标：通过 lucide-react 包（ISC）使用 Lucide 图标：Volume2、VolumeX、Play、Check、X、Plus、Trophy、RotateCcw。
- 字体：通过列出的 @fontsource-variable 包（OFL-1.1）自托管 Unbounded、Figtree 和 JetBrains Mono，在 src/main.tsx 中导入。在 ASSETS.md 中逐一列出。

## 不要做
- 无后端：没有服务器代码、API 路由、数据库、认证、第三方 API、分析工具，也没有任何会提交到某处的表单。联系方式为纯文本。
- 仅静态输出到 dist/，用 npm run build 构建，使用相对资源路径（Vite base './'）。压缩，无 source map，不把 src/ 复制进 dist/，总大小低于 20 MB。
- 保持为单页 index.html。页内链接使用锚点（#quiz）；任何指向文件的链接都使用文件名，绝不用裸目录。
- 通过列出的 Fontsource 包自托管所有字体。绝不从 fonts.googleapis.com、fonts.gstatic.com 或任何其他 CDN 加载字体。不使用 CDN 脚本或 link 标签。将每张图片下载到项目中；绝不外链。
- 将所有文案、示例数据、获胜任务和测验轮次保留在 src/content.ts 中。当变量值变化时，重写该文件，确保不残留任何默认品牌、人物或主题。组件、布局、颜色和动效保持不变。
- 不包含任何类型的音频文件：没有采样、录音或声音字体。所有声音都在浏览器中用振荡器合成。
- 不要在用户手势之前创建或恢复 AudioContext，绝不在加载时自动播放声音。页面必须在 1440x900 和 390x844 下以零控制台错误或警告运行。
- 钢琴上、图片中或任何其他地方不得出现乐器制造商名称或标志。
- 不得使用现有歌曲的旋律、riff 或和弦进行，无论是作为示例还是在测验中，也不得出现“听起来像……的开头”这类歌曲引用。只使用音程、音阶和通用进行。
- 不得使用现有理论网站、书籍或课程的课程文本、图表或练习措辞。使用本提示词中的文案。
- 不使用商业音乐记谱字体，不使用五线谱记谱，不使用音乐字形字符；变音记号写作 # 和 b。
- 不使用 Aceternity UI、Tailwind Plus 或其他受限 UI 库源码，不使用音频或钢琴组件库；自行编写组件。
- 不得出现真实音乐家或教师的肖像。讲师图片展示的是虚构的 AI 生成人物。不得出现音乐教育应用或游戏中的具名吉祥物或角色。
- 不使用灰白色或奶油色页面区块。除珊瑚色条带外，整个页面保持在紫外色和紫色底色上。
- 按设计部分所述遵循 prefers-reduced-motion，并保持正文文本达到 WCAG AA 对比度。绝不在明亮音符颜色上放置文字色标签；在那里使用 pit ink #120634。
- 任何宽度下都不得出现页面水平滚动，不得有固定停靠栏遮挡钢琴或答案按钮。
- 在项目根目录的 ASSETS.md 中列出每个第三方文件，包含路径、来源 URL、作者和许可证。除可选的 [CREDIT] 页脚链接外，站点内不得提及 VibeFather。

---
— Prompt by VibeFather · https://vibefather.ai/t/music-theory-interactive-lesson · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
