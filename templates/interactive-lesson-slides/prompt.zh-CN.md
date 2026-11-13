> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 交互式课程幻灯片

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个真实可用的课程幻灯片 Web 应用：课程“[LESSON_TITLE]”（[COURSE_LABEL]），由 [INSTRUCTOR] 面向 [AUDIENCE] 授课。没有营销页面。应用直接打开即进入幻灯片，可用的产品本身就是主角：一个可折叠的大纲侧边栏、一个 16:9 的幻灯片舞台，以及一条纤细的控制栏。十二张幻灯片使用七种行为各异的幻灯片类型（标题、带图解的概念、单选题测验、排序检查、填空检查、实时代码演练场、回顾），全部由一个带类型定义的内容文件驱动。学习者可获得即时测验反馈和累计得分，可在沙箱 iframe 中运行真实 JavaScript，可在任意幻灯片上绘图，并可通过类似 #/slide/7 的 URL 链接到任意幻灯片。

- 受众：希望幻灯片能检验理解并实时运行代码的教师、课程创作者和研讨会主持人，以及在笔记本电脑或手机上跟随学习的学员。
- 目标：访客打开后几秒内就能看到一套精致的课程幻灯片，点击测验答案、运行代码幻灯片或在幻灯片上绘图，并明白他们可以通过修改内容文件，用它来讲授自己的课程。
- 语气：温暖的课堂编辑风格。像一位好老师在说话：平实、具体、鼓励，带一点俏皮。句子简短，数字具体，不用企业腔，不用感叹号。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、codemirror（MIT）、@codemirror/view（MIT）、@codemirror/state（MIT）、@codemirror/language（MIT）、@codemirror/lang-javascript（MIT）、@lezer/highlight（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource/atkinson-hyperlegible（OFL-1.1）、@fontsource-variable/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - vite.config.ts：base 设为 './'，build.sourcemap 设为 false，使用 @vitejs/plugin-react。除非用户要求，否则不要更改技术栈。
  - tailwind.config：将设计中的每种颜色添加为具名主题色（paper、panel、line、ink、muted、board、boardDeep、console、chalk、chalkDim、marker、mint、clay、sky、ledge），并添加 fontFamily 的 display、sans、mono。关键帧动画放在 src/index.css 中。
  - 将所有文案保留在 src/content/lesson.ts 中：顶部是变量，然后是 UI 标签、大纲分组和 slides 数组。如果变量值与默认值不同，请为新课程和受众重写每一张幻灯片的讲解内容、起始代码、检查答案和解释，但保留 12 张幻灯片、它们的类型和顺序。起始代码必须保持为可运行的纯 JavaScript，并输出其结果。
  - 在 lesson.ts 中定义 type Slide = TitleSlide | ConceptSlide | QuizSlide | ReorderSlide | FillSlide | CodeSlide | RecapSlide，通过 kind 字段进行区分。每种类型在 src/slides/ 中都有自己的组件。ConceptSlide 有一个 variant 字段：'photo'、'stepper'、'bars' 或 'board'。stepper 接受 steps：{ values: number[]; sortedUpTo: number; active: number | null; shifts: number; caption: string }[]，因此它可以绘制任何基于一行数字的课程。
  - 路由仅使用哈希：#/slide/N 是唯一事实来源，通过 hashchange 监听器读取。导航时设置 location.hash，以便浏览器前进和后退正常工作。空或超出范围的哈希通过 location.replace 修正为 #/slide/1 或最近的有效幻灯片。
  - 在 localStorage 中持久化一个 JSON 对象，键由 [BRAND] 加上 [LESSON_TITLE] 的 slug 构建，内容为 { answers, code, marks, sidebarCollapsed }。将每次读写都包裹在 try/catch 中，并在存储不可用时正常工作。
  - 舞台缩放：在视口宽度为 768px 及以上时，每张幻灯片都在固定的 1280x720 画布上创作，并使用 transform: scale(min(availableWidth/1280, availableHeight/720)) 进行缩放，通过 ResizeObserver 测量并居中。低于 768px 时不缩放：使用移动端布局下描述的流式布局。画布上的最小文字为 20px，因此缩放后仍保持可读。
  - 代码运行器：点击 Run 时，移除之前的任何 iframe，并创建一个隐藏的 iframe，带有 sandbox="allow-scripts"（绝不允许 allow-same-origin）和 srcdoc。srcdoc 包含一个 meta CSP，内容为 default-src 'none'; script-src 'unsafe-inline'，一个 harness 脚本，然后是学习者的代码，放在其自己的 script 标签中，位于已知行，代码中的每个 </script 都转义为 <\/script。harness 将 console.log、info、warn 和 error 替换为 parent.postMessage 调用，在需要时使用 JSON.stringify 格式化值，通过 window.onerror 捕获错误（返回 true，以便没有任何内容到达页面控制台），并报告消息和减去 harness 偏移量的行号，然后发送 done 消息。父级仅在 event.source 是该 iframe 的 contentWindow 时才接受消息。如果 3000 ms 后仍未收到 done，则移除 iframe 并显示第 7 张幻灯片部分中的超时消息。
  - CodeMirror：使用 codemirror 的 basicSetup 和 @codemirror/lang-javascript 的 javascript()，外加一个原创的 EditorView.theme 和一个来自 @lezer/highlight 的 HighlightStyle，仅使用设计调色板：关键字 marker，字符串 mint，数字 clay，注释 chalkDim，函数名 chalk 字重 600，活动行背景 rgba(243,240,227,0.05)，选区 rgba(245,207,58,0.25)，行号槽文字 chalkDim。添加一个 Mod-Enter 键位映射用于 Run。使用当前的 @codemirror/view 版本，它能正确处理缩放后的父级。
  - 全局键盘处理器：忽略目标为 input、textarea 或 .cm-editor 的按键事件。当目标是 button 时忽略 Space。

## 变量
- [BRAND] — 学校或课程提供方（默认：“Tallow Street Code School”）。显示在大纲页眉、浏览器标题和回顾页中。同时用于生成小方形品牌标记。
- [LESSON_TITLE] — 课程标题（默认：“How Sorting Works”）。即 12 张幻灯片所讲授的课程。更改它意味着重写所有幻灯片内容。
- [COURSE_LABEL] — 课程与课节位置（默认：“Intro to Programming, Unit 4, Lesson 2”）。显示在第 1 张幻灯片标题上方，以及大纲中品牌名称下方。
- [INSTRUCTOR] — 讲师姓名（默认：“Ines Halloran”）。显示在第 1 张幻灯片肖像旁、大纲页脚和回顾页中。
- [AUDIENCE] — 课程面向的对象（默认：“Tuesday evening beginners”）。显示在第 1 张幻灯片上，并决定课程文案的阅读难度。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/interactive-lesson-slides（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值编写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 纸色（Paper）`#F6F0E2` — 舞台周围的应用背景
- 面板色（Panel）`#FFFBF1` — 侧边栏、控制栏、测验选项卡片、浮层
- 线条色（Line）`#DDD2BA` — 纸色上的细线和面板边框
- 墨色（Ink）`#25302A` — 纸色和面板上的文字
- 弱化色（Muted）`#5E695D` — 纸色上的次要文字
- 黑板色（Board）`#1F4A3C` — 粉笔绿幻灯片表面，主舞台颜色
- 深黑板色（Board Deep）`#173A2F` — 编辑器背景和黑板上的内嵌面板
- 控制台色（Console）`#122B23` — 控制台输出窗格
- 粉笔色（Chalk）`#F3F0E3` — 黑板上的标题、文字和图表线条
- 暗粉笔色（Chalk Dim）`#B9C9B8` — 黑板上的次要文字、代码注释
- 标记色（Marker）`#F5CF3A` — 唯一强调色：当前幻灯片、主按钮、活动条、下划线。其上的文字为墨色。
- 薄荷色（Mint）`#8FD3A8` — 仅用于正确反馈，始终搭配对勾图标；也用于代码字符串
- 陶土色（Clay）`#E58E73` — 仅用于错误反馈和错误提示，始终搭配 X 图标；也用于代码数字
- 天蓝色（Sky）`#9CCBE0` — 仅用于注释色板，绝不用于 UI
- 台沿色（Ledge）`#C8B48F` — 幻灯片下方 6px 的粉笔槽条

### 字体排印（Typography）
- 展示字体（Display）：幻灯片标题、大数字、大纲中的课程名称。行高 1.02，字距 -0.01em。：Fraunces Variable（OFL），字重 500/600
- 正文字体（Text）：UI、正文、测验选项。为课堂可读性而选。行高 1.45。：Atkinson Hyperlegible（OFL），字重 400/700
- 等宽字体（Mono）：编辑器、控制台、幻灯片编号、引导标签、键盘按键。引导标签为大写，字距 0.08em。：JetBrains Mono Variable（OFL），字重 400/600

### 布局与动效（Layout & motion）
- 间距：4px 基准。应用：侧边栏展开 280px，收起为 60px 轨道；控制栏 56px；舞台周围 24px 内边距。在 1280x720 幻灯片画布上：外内边距 64px，主要区块之间 32px，组内 16px。画布字号：标题 56px，标题幻灯片标题 88px，问题 38px，正文 24px，选项 22px，引导标签 18px，代码 18px。
- 圆角：幻灯片表面顶部圆角 14px，底部与台沿相接处为直角。卡片、输入框和选项行 10px。按钮 8px。标签和注释工具栏为完整胶囊形。幻灯片上的照片 6px，带 10px 面板色边框。
- 动效：幻灯片切换：180ms ease-out 淡入，并沿切换方向水平位移 12px。外壳上其他元素不动。
- 动效：进度条宽度以 240ms 缓动。大纲中的当前幻灯片条无动画直接跳变。
- 动效：测验反馈：所选选项获得一次 320ms 向外的环形脉冲，颜色为薄荷色或陶土色，解释文字在 160ms 内淡入。
- 动效：标题下划线：标记色 SVG 描边通过 stroke-dashoffset 在 600ms 内绘制一次。步进条以 220ms 的 transform 过渡移动。第 9 张幻灯片上的条形在 400ms 内增长一次。
- 动效：在 prefers-reduced-motion: reduce 下，移除上述所有动效，包括步进自动播放。状态变化即时生效。
- 图像：一次拍摄：温暖纪实风格照片，教室中低角度窗光、橡木、布面书籍和绿色黑板，用于第 1、2、12 张幻灯片以及讲师肖像。照片以印刷图片形式置于黑板上，带 10px 面板色边框、轻微旋转，以及两条用 CSS 绘制的半透明纸胶带。所有图表均为原创内联 SVG，带有粗糙粉笔线条（在粉笔色描边上使用 scale 2 的 feTurbulence 加 feDisplacementMap 滤镜）。黑板表面有淡淡的粉笔污迹：两个 4% 粉笔色的大径向渐变，加上一个 5% 不透明度的内联 SVG feTurbulence 噪点。无角色插画。

## 页面与区块
### [LESSON_TITLE] | [BRAND] (`index.html`)
1. **应用外壳** — 单页应用，使用哈希路由 #/slide/1 到 #/slide/12。始终以幻灯片视图打开，没有启动画面、加载器或着陆区块。如果哈希为空，则显示第 1 张幻灯片。浏览器标题为 [LESSON_TITLE] | [BRAND]。网站图标为内联 SVG：一个 Board 方块，下方带 Marker 下划线。
   布局：全视口，无页面滚动（高度 100dvh）。CSS 网格分两列：左侧边栏，右侧主列。主列分两行：舞台区域（1fr，Paper 背景，24px 内边距，幻灯片居中）和控制栏（56px）。幻灯片位于一条 6px 的 Ledge 条上，该条宽度与幻灯片完全一致，如同粉笔槽，下方有柔和阴影（0 18px 40px rgba(37,48,42,0.18)）。
   动效：见设计。侧边栏折叠时宽度在 180ms 内动画过渡。
2. **大纲侧边栏** — 头部：32px 方形品牌标记（Board 背景，[BRAND] 首字母使用 Fraunces Chalk，下方 3px Marker 下划线），然后是 15px 粗体的 [BRAND]，接着是 13px Muted 的 [COURSE_LABEL]，再是 Fraunces 24px 的 [LESSON_TITLE]。得分行：标签“Checks”和一个显示“0/5”的胶囊，统计正确检查数，下方有 5 段条，每段为空、Mint 或 Clay。大纲分组，使用等宽大写标签：热身（1 排序如何工作，2 为什么顺序重要，3 检查：书架翻倍）；核心概念（4 插入排序，逐步演示，5 检查：将步骤排序，6 检查：需要移动多少次？）；动手实践（7 实时代码：排序书架，8 检查：简单情况）；深入探索（9 最好和最差的书架，10 检查：最难的书架，11 标记重点）；总结（12 回顾）。页脚：36px 圆形讲师头像，[INSTRUCTOR]，一行“按 ? 查看快捷键”作为按钮，以及使用 lucide PanelLeftClose 图标的折叠按钮。如果 Credit 部分提供了 [CREDIT] 链接，将其以 12px Muted 放在此页脚的最底部。
   布局：宽 280px，Panel 背景，1px Line 右边框，flex 列布局，大纲列表独立滚动。每行 40px：等宽编号、15px 标题以省略号截断、右对齐状态图标。标题前的类型图标为 16px Muted：标题用 Presentation，概念用 Shapes，检查用 CircleHelp，代码用 Code，回顾用 Flag。状态图标：未触碰时无，正确时显示 Mint 对勾，错误时显示 Clay X，代码幻灯片运行后显示 Play 图标，该幻灯片有标记时显示小的 Muted 钢笔图标。当前行有 Paper 背景，左边缘有 3px Marker 条。折叠状态为 60px 轨道，仅显示幻灯片编号和状态点，以及展开按钮。折叠状态持久化在 localStorage 中。
   动效：宽度过渡 180ms。行悬停时 Paper 背景过渡 120ms。
3. **控制栏** — 从左到右：上一页和下一页按钮（ChevronLeft、ChevronRight）；进度条；等宽显示的幻灯片编号“7 / 12”；绘制（Pencil 图标，标签“Draw”）；复制链接（Link2 图标，标签“Copy link”）；快捷键（Keyboard 图标）；演示（Maximize 图标），隐藏侧边栏并在 try/catch 中调用 requestFullscreen，按 Esc 恢复。复制链接使用 Clipboard API 复制 location.href，回退到隐藏 textarea 和 execCommand。1.6 秒内标签显示“Link to slide 7 copied”并带 Check 图标，通过 aria-live 区域播报。
   布局：高 56px，Panel 背景，1px Line 上边框，16px 侧内边距，单行，间距 12px。进度条填充剩余空间：高 6px，Line 轨道，Marker 填充，带 12 个刻度分区，点击某位置跳转到该幻灯片。第 1 张时上一页禁用，第 12 张时下一页禁用。激活的绘制按钮使用 Marker 背景和 Ink 文字。按钮高 36px，圆角 8px，显示 2px Ink 焦点环。
   动效：进度填充 240ms。确认标签无位移切换。
4. **注释层和工具栏** — 绘制模式适用于每张幻灯片。工具顺序：钢笔（4 画布像素，完全不透明）、荧光笔（22 画布像素，alpha 0.4，方形笔帽）、橡皮擦（移除指针触碰到的整条笔画）、四个色板（Marker #F5CF3A、Chalk #F3F0E3、Clay #E58E73、Sky #9CCBE0）、撤销（Undo2）、清除幻灯片（Trash2）和完成（X）。标记按幻灯片存储为笔画，坐标相对于幻灯片表面归一化为 0 到 1，在 pointerup 时保存，返回该幻灯片或重新加载时恢复。撤销每张幻灯片最多保留 30 个快照。第 11 张幻灯片初始带有来自其内容条目的讲师标记，可像其他笔画一样擦除。
   布局：画布绝对定位在幻灯片表面之上，按 devicePixelRatio 调整尺寸，并在任何尺寸变化时从笔画重绘。绘制模式外 pointer-events 为 none，以便幻灯片控件在标记可见时仍可使用。绘制模式下 pointer-events 为 auto，touch-action 为 none，光标为十字准线，幻灯片控件不可交互。使用 Pointer Events 配合 setPointerCapture 和 getCoalescedEvents，并通过中点二次曲线平滑。工具栏为浮动 Panel 胶囊，1px Line 边框和柔和阴影，居中于舞台区域底部上方 16px，按钮 36px。激活工具使用 Marker 背景，激活色板有 2px Ink 圆环。
   动效：工具栏在 120ms 内淡入。
5. **键盘快捷键覆盖层** — 标题：“Keyboard shortcuts”。行：左/右或 Page Up/Page Down：上一张和下一张幻灯片。空格：下一张幻灯片。Home/End：第一张和最后一张幻灯片。O：切换大纲。D：切换绘制。P、H、E：钢笔、荧光笔、橡皮擦。Z 或 Cmd/Ctrl+Z：撤销标记。1 到 4：选择测验答案。C：复制链接。F：演示。?：此列表。Esc：关闭。
   布局：模态框宽 640px，Panel 背景，14px 圆角，覆盖在 rgba(37,48,42,0.45) 的遮罩上。两列网格行，按键渲染为等宽芯片（Paper 背景，1px Line 边框，6px 圆角）。右上角关闭按钮。焦点移入模态框，关闭时返回。
   动效：120ms 内淡入。
6. **移动端布局（768px 以下）** — 52px 顶栏替代侧边栏：菜单按钮（Menu 图标）、截断的 [LESSON_TITLE] 和得分胶囊。菜单按钮将大纲作为 304px 左侧抽屉打开，覆盖在遮罩上，点击遮罩、按 Esc 或选择幻灯片时关闭。底部控制栏保留上一页、下一页、幻灯片编号、绘制和复制链接，进度条作为其顶部边缘的 3px 条；演示和快捷键隐藏。触摸目标至少 44px。
   布局：无缩放画布。Board 表面填满栏之间的空间，边缘到边缘，并在自身内部垂直滚动，无页面滚动，在 390px 宽度下无水平溢出。每张幻灯片变为单列，20px 内边距：标题 32px，问题 26px，正文 17px，选项 17px，代码 14px。照片全宽且不旋转。步进器 SVG 缩放到宽度，控件在其下方换行。代码幻灯片将编辑器（高度 300px）堆叠在控制台（最小高度 180px）上方。注释画布覆盖整个可滚动幻灯片高度，并在绘制模式下锁定滚动，工具栏在控制栏上方换行为两行。
   动效：抽屉在 180ms 内滑入；减少动效下即时。
7. **幻灯片 1：标题（#/slide/1）** — 等宽引题：[COURSE_LABEL]。标题：[LESSON_TITLE]，最后一个词下方有手绘 Marker SVG 下划线。副标题：“Put eight books in order by hand, then teach a computer to do it.” 讲师行：56px 圆形头像，[INSTRUCTOR]，然后是“[AUDIENCE] · Room 3 · 45 minutes”。主按钮：“Start the lesson”带 ArrowRight，前往 #/slide/2。次要文本按钮：“Jump to live code”，前往 #/slide/7。右侧：桌面照片，以及一个 Panel 芯片重叠在其左下角，内容为“12 slides · 5 checks · 1 live code”。幻灯片底部，八条粉笔 SVG 条，高度分别为 5、2、8、3、7、1、6、4。
   布局：画布分割：左列 660px 放置引题、88px 标题、26px 副标题、讲师行和按钮，垂直居中。右列为 500x375 照片，旋转 -1.5deg，带 Panel 边框和两条胶带，位于右上角。粉笔条沿照片下方右下角排列，宽 460px，高 110px，第三条填充 Marker。这必须读作丰富的首屏，绝不能在平坦背景上打字。
   动效：下划线在首次查看时绘制一次。标准幻灯片过渡。
8. **幻灯片 2：为什么顺序重要，带照片的概念（#/slide/2）** — 引题：“Warm up”。标题：“A messy shelf makes every search slow.” 正文：“Looking for one title on an unsorted shelf means checking book after book. Sort the shelf and you can open in the middle, see which half to keep, and ignore the rest.” 两个大统计：“1,000”标签为“looks at most on 1,000 unsorted books”，“10”使用 Marker，标签为“looks at most once they are sorted”。脚注：“Halve 1,000 ten times and you are down to one book.”
   布局：左侧 56%：引题、标题、正文，然后两个统计并排，Fraunces 84px，中间用 30% 不透明度的 1px Chalk 线分隔。右侧 44%：书架照片 4:3，旋转 1deg，带 Panel 边框和胶带。
   动效：仅标准幻灯片过渡。
9. **测验行为（幻灯片 3、6 和 10）** — 点击选项或按 1 到 4 立即作答并锁定所有选项。所选选项显示 Mint 带 Check 或 Clay 带 X。如果选择错误，正确选项也会获得 Mint 轮廓。出现解释面板，包含一行判定和解释、“Try again”按钮（解锁选项并清除结果）和“Next slide”主按钮。侧边栏得分和分段条立即更新。每条答案记录存储选择、是否正确以及尝试次数。
   布局：画布左侧 5/12：等宽引题“Check 1 of 5”和 Fraunces 38px 的问题。右侧 7/12：四个 72px Panel 行的垂直堆叠，Ink 文字。每行有一个 36px 圆形中的等宽字母 A 到 D，带 1px Line 边框，然后是选项文本。悬停和聚焦给出 2px Marker 边框。所有选项行在作答前看起来相同：无彩色块，无形状。解释位于选项下方，作为 Board Deep 内嵌，Chalk 文字，10px 圆角。
   动效：所选选项上 320ms 圆环脉冲一次。解释在 160ms 内淡入。
10. **幻灯片 3：检查，书架翻倍（#/slide/3）** — 引题“Check 1 of 5”。问题：“A sorted shelf grows from 1,000 books to 2,000. Using the halving method, how many extra looks do you need at most?” A：“About 1 more”（正确）。B：“About 10 more”。C：“About 1,000 more”。D：“Twice as many”。正确判定：“Right.” 错误判定：“Not quite.” 两者的解释：“One look halves the shelf, so 2,000 books are back to 1,000 after a single look. From there nothing changes.”
   布局：使用测验布局。
   动效：使用测验动效。
11. **幻灯片 4：插入排序步进器，带图表的概念（#/slide/4）** — 标题：“Take the next book and slide it into place.” 一个 8 步的步进器，作用于书架。说明和累计移动次数：（1）值 5 2 8 3 7 1 6 4，“The first book alone is a sorted shelf of one.”，0 次移动。（2）值 2 5 8 3 7 1 6 4，“Pick up 2. The 5 is larger, so it moves right.”，1。（3）值 2 5 8 3 7 1 6 4，“Pick up 8. Nothing is larger, so it stays.”，1。（4）值 2 3 5 8 7 1 6 4，“Pick up 3. The 5 and 8 move right.”，3。（5）值 2 3 5 7 8 1 6 4，“Pick up 7. Only the 8 moves.”，4。（6）值 1 2 3 5 7 8 6 4，“Pick up 1. Everything moves. Five shifts for one book.”，9。（7）值 1 2 3 5 6 7 8 4，“Pick up 6. The 7 and 8 move.”，11。（8）值 1 2 3 4 5 6 7 8，“Pick up 4. Four books move, and the shelf is sorted.”，15。控件：Back、Next、Play / Pause（每步 1200ms，减少动效下禁用）、步骤点，以及等宽计数器“Shifts so far: 15”。
   布局：标题在顶部，44px。下方是 SVG 图表，宽 1152px，高 340px，粉笔基线上有 8 条。条宽 96px，高度与值成比例，每个条上方有等宽数字。已排序条填充 85% Chalk，Ink 数字，活动条填充 Marker，未排序条为粗糙 Chalk 轮廓，无填充。图表下方一行：左侧 24px 说明，右侧控件和计数器。步进器有自己的按钮，不捕获方向键，方向键始终切换幻灯片。
   动效：每条以其值为键，通过 220ms 变换移动到新位置。自动播放在最后一步停止。
12. **幻灯片 5：排序检查（#/slide/5）** — 引题“Check 2 of 5”。问题：“Put the steps of insertion sort in order.” 按起始顺序排列的行：“Compare it with the sorted books, moving right to left”；“Drop the book into the gap and repeat”；“Treat the first book as a sorted shelf of one”；“Shift each larger book one place right”；“Pick up the next unsorted book”。正确顺序：Treat the first book；Pick up the next；Compare it；Shift each larger；Drop the book。按钮：“Check order”。反馈按位置用 Mint Check 或 Clay X 标记每行。正确判定：“That is the whole algorithm.” 错误判定：“Close. The marked rows are out of place.” 解释：“You cannot shift books until you have compared them, and the drop always comes last.” “Try again”保持当前顺序并清除标记。
   布局：左侧 4/12：引题和问题。右侧 8/12：五个 64px Panel 行的堆叠，每行有 GripVertical 手柄、等宽位置编号、步骤文本，以及供键盘和触摸用户使用的上下箭头按钮。在手柄上使用 Pointer Events 拖动（仅手柄上 touch-action 为 none）。拖动的行抬起，带阴影和 2px Marker 边框，其他行让位。
   动效：行以 160ms 变换移动；减少动效下即时。Check 上 320ms 脉冲一次。
13. **幻灯片 6：检查，需要移动多少次（#/slide/6）** — 引题“Check 3 of 5”。问题：“The sorted part is 2 3 5 8. The next book is 4. How many books shift right?” 问题下方包含四个已排序条的小粉笔 SVG 和一个标记为 4 的 Marker 条。A：“1”。B：“2”（正确）。C：“3”。D：“4”。解释：“Only books larger than 4 move: the 5 and the 8. The 2 and 3 stay put.”
   布局：使用测验布局，左列问题下方有 360x120 SVG。
   动效：使用测验动效。
14. **幻灯片 7：实时代码游乐场（#/slide/7）** — 标题：“Now teach the computer.” 任务行：“Press Run to watch each pass. Then change one character so the shelf sorts largest first.” 编辑器文件标签：“sandbox.js”。起始代码，完全如下：

```javascript
// Sort the shelf, smallest book first.
function insertionSort(books) {
  for (let i = 1; i < books.length; i++) {
    const current = books[i];
    let gap = i;
    while (gap > 0 && books[gap - 1] > current) {
      books[gap] = books[gap - 1]; // shift right
      gap--;
    }
    books[gap] = current; // drop into the gap
    console.log("pass " + i + ":", books.join(" "));
  }
  return books;
}

const shelf = [5, 2, 8, 3, 7, 1, 6, 4];
console.log("start: ", shelf.join(" "));
console.log("sorted:", insertionSort(shelf).join(" "));
```

按钮：'Run'（Play 图标，Marker 背景，显示 Cmd/Ctrl+Enter 提示）和 'Reset'（RotateCcw 图标，幽灵按钮；恢复初始代码并清空控制台）。控制台标题：'Console'，右侧显示状态：'Not run yet'、'Ran in 3 ms' 或 'Error on line 6'。控制台空状态文本：'Press Run to see each pass.' 日志行以 Chalk mono 渲染。错误以 Clay 渲染并带 X 图标，显示消息和行号。超时消息：'Stopped after 3 seconds. Look for a loop that never ends.' 编辑内容持久化在 localStorage 中。运行幻灯片后，大纲中会添加 Play 状态图标。
   布局：顶部 96px：标题 40px，任务行 22px。其下两个窗格填满剩余画布，间距 16px。左侧 60%：Board Deep 编辑器，带 44px 工具栏（左侧文件标签，右侧 Run 和 Reset），CodeMirror 使用 18px JetBrains Mono，内部滚动。右侧 40%：Console 背景窗格，带 44px 标题栏和 18px 滚动日志。两者均有 10px 圆角和 15% 不透明度的 1px Chalk 边框。画布缩放时，点击编辑器必须正确放置光标。
   动效：状态文本即时切换。新控制台行无动画出现。
15. **幻灯片 8：填空检查（#/slide/8）** — 引导语 'Check 4 of 5'。句子含两个输入框：'On a shelf that is already sorted, insertion sort compares each book once with its neighbor, so 8 books take [ ] comparisons and [ ] shifts.' 答案：7（也接受 'seven'）和 0（也接受 'zero' 或 'none'），去除首尾空格且不区分大小写。按钮：'Check answers'，也可按 Enter 触发。每个输入框显示 Mint Check 或 Clay X。正确判定：'Exactly. The best case does almost no work.' 错误判定：'Not yet. Trace the first two books by hand.' 解释：'Every book after the first gets one comparison, finds a smaller neighbor, and stays put.' 'Try again' 仅清除错误的输入。
   布局：居中列宽 960px。引导语，然后句子使用 Fraunces 38px、行高 1.4，内联 96px 输入框使用 mono、透明背景、Marker 3px 底边框、Chalk 文本和居中值。下方：按钮，然后解释内嵌如测验布局。
   动效：检查后每个输入框一次 320ms 脉冲。解释在 160ms 内淡入。
16. **幻灯片 9：最好和最差的架子，带条形图的概念（#/slide/9）** — 引导语：'Going further'。标题：'Same eight books, very different work.' 水平条形图带标签和值：'Already sorted' 0 次移动；'Our shelf from earlier' 15 次移动；'Exactly reversed' 28 次移动。侧边标注：'499,500' 使用 Fraunces 72px Marker，标签 'shifts to sort 1,000 reversed books'。结尾句：'That is why insertion sort is great for short or nearly sorted lists, and why long lists need something faster. That is next lesson.'
   布局：左侧 66%：引导语、标题，然后三行 SVG 条形图。每个条形上方标签 22px，40px 高条形带粗糙 Chalk 轮廓，填充 85% Chalk，宽度与 28 成比例，值以 mono 在末端。零值渲染为 4px 刻度。右侧 34%：Board Deep 内嵌标注和结尾句。
   动效：首次显示幻灯片时，条形图在 400ms 内从零增长一次。
17. **幻灯片 10：检查，最难的架子（#/slide/10）** — 引导语 'Check 5 of 5'。问题：'Which shelf makes insertion sort do the most shifts?' 选项以 mono 显示：A: '1 2 3 4 5 6'。B: '2 1 4 3 6 5'。C: '6 5 4 3 2 1'（正确）。D: '1 2 3 6 5 4'。解释：'In reversed order every book has to pass all the books before it. That is 15 shifts for six books.'
   布局：使用测验布局，选项文本使用 JetBrains Mono。
   动效：使用测验动效。
18. **幻灯片 11：标记它，白板幻灯片（#/slide/11）** — 引导语：'Your turn at the board'。标题：'Circle every book that has to shift.' 正文：'The sorted part is 2 4 7 9. The next book is 5. I have marked where it lands. Press D and finish the job.' 署名 '[INSTRUCTOR]'。图表：五个条形图对应 2、4、7、9 和 5，其中 5 使用 Marker。内容条目中预置标记，使用 Marker 和 Pen 工具：围绕 5 条形的松散手绘椭圆，以及从它到 4 和 7 之间间隙的曲线箭头。'Start drawing' 按钮（Pencil 图标）开启绘制模式并选择 Pen。
   布局：左侧 34%：引导语、标题 48px、正文和按钮。右侧 66%：大片空白板区域，SVG 条形图位于粉笔基线上，留有充足标记空间。条形图宽 110px。
   动效：仅标准幻灯片过渡。预置标记无动画出现。
19. **幻灯片 12：回顾（#/slide/12）** — 标题：'What you can do now'。分数块：实时分数如 '4 / 5' 使用 Fraunces 96px，行 '3 on the first try'，以及五个标签为 Check 1 到 Check 5 的芯片，每个显示未触碰、正确或错误状态并链接到该幻灯片。无回答时显示 '0 / 5' 和 'Five checks are waiting for you.' 按钮：'Retry what I missed'（转到第一个错误或未触碰的检查；5/5 时隐藏）和 'Reset my progress' 文本按钮，内联确认后清除答案、代码和标记。要点：'Insertion sort grows a sorted part one book at a time.' 'The starting order sets the work: 0 shifts when sorted, 28 when reversed, for eight books.' 'Sorted data is what makes fast search possible.' 作业卡：手整理卡片的照片，然后 'Before Tuesday: sort ten cards by this method, then again from reversed order. Count the shifts and bring both numbers.' 下一步：'Next up: Lesson 3, merge sort. Tuesday at 6:30 pm.' 办公时间带小肖像：'[INSTRUCTOR], Thursdays 5:30 to 6:15 pm, Room 3, 14 Tallow Street, [BRAND].'
   布局：三列间距 32px，标题在上方。左侧 30%：分数块和按钮。中间 34%：要点为编号列表，mono 数字和 20% 不透明度的 1px Chalk 分隔线。右侧 36%：Panel 卡片带 Ink 文本，顶部 16:9 裁剪照片，然后作业、下一课和办公时间。
   动效：仅标准幻灯片过渡。分数不递增计数。

## 资源
- 图片：将 https://media.vibefather.ai/assets/979b73ac-0de6-4168-9126-974bb813156d/lesson-desk.webp 下载到 public/images/lesson-desk.webp。替代文本：'Stack of plain cloth-bound books and chalk on an oak classroom desk in front of a green chalkboard'。用于第 1 张幻灯片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/979b73ac-0de6-4168-9126-974bb813156d/instructor.webp 下载到 public/images/instructor.webp。替代文本：'The lesson instructor at a green chalkboard, seen from behind'。用于第 1 张幻灯片、大纲页脚和第 12 张幻灯片。为虚构人物，是用户本人照片的占位图。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/979b73ac-0de6-4168-9126-974bb813156d/uneven-shelf.webp 下载到 public/images/uneven-shelf.webp。替代文本：'Wooden shelf of plain books in uneven heights and no particular order'。用于第 2 张幻灯片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/979b73ac-0de6-4168-9126-974bb813156d/arranging-cards.webp 下载到 public/images/arranging-cards.webp。替代文本：'Hands arranging blank index cards in a row on an oak desk'。用于第 12 张幻灯片的作业卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：以代码绘制为原创内联 SVG 或 CSS：所有条形图和示意图、标题下划线、胶带条、粉笔纹理、品牌标记和 favicon。不使用图片文件。
- 图标：lucide-react（ISC），从 npm 安装：PanelLeftClose、PanelLeftOpen、Presentation、Shapes、CircleHelp、Code、Flag、Check、X、Play、Pause、Pen、Pencil、Highlighter、Eraser、Undo2、Trash2、Link2、Keyboard、Maximize、ChevronLeft、ChevronRight、ArrowRight、RotateCcw、GripVertical、ChevronUp、ChevronDown、Menu。
- 字体：通过 Fontsource npm 包自托管，在 src/main.tsx 中导入：@fontsource-variable/fraunces、@fontsource/atkinson-hyperlegible（400、700）、@fontsource-variable/jetbrains-mono。均为 OFL-1.1。
- 图片：在项目根目录创建 ASSETS.md，列出每个第三方文件：路径、来源 URL、作者和许可证。上述四张照片的署名标注为 'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template'。同时列出字体（OFL-1.1）和 lucide-react（ISC）。

## 禁止事项
- 无后端：没有服务器代码、API 路由、数据库、认证、第三方 API 或会提交到任何地方的表单。测验答案、代码和注释都保存在 localStorage 中。
- 不使用 CDN 的 script 或 link 标签，不做分析统计，运行时无网络请求。将所有图片下载到项目中，绝不外链引用。
- 通过 Fontsource 自托管所有字体。绝不从 fonts.googleapis.com、fonts.gstatic.com、Adobe Fonts 或任何其他 CDN 加载。不使用商业课堂字体或手写字体。
- 用一条命令将静态文件构建到 dist/，使用相对资源路径（base './'）。不生成 source map，dist/ 中不包含 src/。保持 dist/ 在 20 MB 以下。
- 内部导航在 ./index.html 上使用 hash 路由，绝不使用裸目录路径。
- 在 1440x900 或 390x844 下无控制台错误。学习者代码错误必须被捕获并显示在幻灯片控制台中，绝不泄漏到页面控制台。
- 代码 iframe 绝不能带有 allow-same-origin、网络访问权限或对父页面的访问权限。
- 遵循 prefers-reduced-motion：无过渡、脉冲、绘制进入效果或步进器自动播放。
- 不添加落地页、营销主视觉区、定价区、注册或启动画面。应用直接打开到幻灯片组。
- 不使用任何现有演示工具、幻灯片框架或测验平台的标志、产品名称、默认主题或入门幻灯片组布局。
- 无游戏节目式测验外观：无答案形状与颜色配对、彩色答案块、大厅或领奖台屏幕、倒计时器、排行榜、吉祥物或音效。所有选项在被作答前外观一致。
- 不使用真实教科书、在线课程、学校课程或已出版讲座中的文案、课程文本、图表或练习。所有课程内容均为虚构。
- 不使用真实学校、校徽、考试委员会标记或真实教师。讲师和学校均为虚构。
- 不使用标识特定代码编辑器或在线演练场的编辑器主题、图标或品牌标识。使用本提示词中的原创语法主题。
- 不使用学习应用中的吉祥物、角色插画或标志性绘图。图表为本模板用 SVG 或 CSS 绘制。
- 不使用 lorem ipsum。除 Marker 外不添加强调色：Mint 和 Clay 仅用于反馈，Sky 仅用于注释。
- 不做 SEO 工作：带有 [BRAND] 的普通标题和 favicon 就足够了。除可选的 [CREDIT] 链接外，网站中不提及 VibeFather。所有文案均为美式英语。

---
— Prompt by VibeFather · https://vibefather.ai/t/interactive-lesson-slides · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
