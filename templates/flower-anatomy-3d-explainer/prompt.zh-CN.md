> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 花朵解剖 3D 讲解器

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个面向 [AUDIENCE] 的原创交互式解剖课程，以代码生成的 3D [SPECIMEN] 为核心。默认样本是一朵东方百合（Oriental lily），具有六枚花被片、六枚雄蕊、一个中央雌蕊、一个三裂柱头，以及一个具三室的子房（上位）。学习者可以环绕并缩放标本，执行四状态解剖，查看关联标签，播放四阶段传粉序列，并完成一个五题测验。使用三个哈希路由视图：#/anatomy、#/pollination 和 #/quiz，围绕一个持久的 Three.js 画布；index.html 打开解剖视图。这是一个精致的教学工具，而非营销落地页或视频播放器。

- 受众：为 [AUDIENCE] 编写每一个标签、说明、指令和测验问题。默认语气对好奇的初学者友好，但不显得幼稚。使用正确的入门植物学知识，用平实的美国英语定义技术术语，并包含一个可见的说明：几何形状、结构尺寸、花粉数量和时序均为清晰起见而简化。
- 目标：让花朵本身成为主要界面，并确保每个核心操作都能通过鼠标、触摸和键盘完成。首次访问者应在五秒内明白可以拖动花朵，并在一分钟内能够暴露子房并识别花粉落在何处。将所有由变量派生的文案、测验内容、标本颜色、花被片比例和模型参数保留在 src/content.ts 中。当 BRAND、SPECIMEN 或 AUDIENCE 变化时，重写每一个相关的标题、说明、标签、问题、模型材质设置和 alt 字符串，以适配新值，而不是保留东方百合特有的措辞。
- 语气：精确、平静、好奇且富有触感，如同一个设计精美的博物馆标本站。使用直接的动词和简短的解释。避免炒作、游戏化的喊叫、课堂剪贴画、幼稚的吉祥物、虚假的科学主张和通用的 AI 文案。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：原生 CSS（Vanilla CSS）
- 库（Libraries）：Vite 5（MIT）、React 18 和 React DOM 18（MIT）、TypeScript（Apache-2.0）、Three.js 及内置的 OrbitControls（MIT）、lucide-react（ISC）、@fontsource/fraunces（OFL）、@fontsource/inter（OFL）、@fontsource/ibm-plex-mono（OFL）
- 构建（Build）：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置（Setup）：
  - 创建一个 Vite React TypeScript 项目，包含 react@18、react-dom@18、three、lucide-react 以及列出的三个 Fontsource 包；使用 vite@5、TypeScript、@vitejs/plugin-react 及匹配的类型包作为开发依赖。
  - 将 vite.config.ts 设置为 base: './' 和 build.sourcemap: false。将包的构建脚本设置为 tsc && vite build，以便 npm run build 仅在 dist/ 中生成生产文件。
  - 在 React 组件中直接使用 Three.js，并从 three/examples/jsm/controls/OrbitControls.js 导入 OrbitControls。不要添加 react-three-fiber、Drei、Tailwind、GSAP、物理引擎或状态管理库。
  - 将项目组织为：src/content.ts 用于所有文案和标本参数，src/flowerScene.ts 用于几何体和动画，src/App.tsx 用于视图和交互状态，src/styles.css 用于所有视觉规则，src/main.tsx 用于 Fontsource 导入和挂载。
  - 通过 Fontsource 导入自托管 Fraunces 500、600 和 700；Inter 400、500、600 和 700；以及 IBM Plex Mono 400 和 500。将所有图标、字体、脚本和生成的网格本地打包。
  - 使用小型哈希路由器实现 index.html、#/anatomy、#/pollination 和 #/quiz。在切换视图时保持 WebGL 渲染器和模型挂载。品牌链接返回 ./index.html，章节链接使用显式哈希路由。
  - 使用 React 状态管理活动路由、解剖步骤、选中的解剖部位、标签可见性、授粉阶段和播放、测验答案以及最佳分数。派生的全小写连字符 BRAND 键可为最佳分数的 localStorage 条目提供命名空间。
  - 将文档标题设置为 [BRAND] — Flower Anatomy，并使用由六个简单花被片轮廓组成的本地内联 SVG favicon。不要添加其他元数据或 SEO 功能。

## 变量
- [BRAND] — 课程品牌（默认：“Petal Atlas”）。为植物学学习项目虚构的简短名称。
- [SPECIMEN] — 花卉标本（默认：“Oriental lily”）。请使用解剖结构符合六被片、六雄蕊教学模型的花卉；并相应调整其几何形状、颜色和文案。
- [AUDIENCE] — 学习者受众（默认：“Curious beginners”）。根据该受众调整词汇、引导语和测验措辞。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/flower-anatomy-3d-explainer（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 暖纸色（Warm paper）`#F5F1E8` — 页面背景和安静的外围留白
- 植物墨色（Botanical ink）`#18342B` — 标题、主按钮、字标和高强调文本
- 叶色（Leaf）`#3E6B50` — 茎、叶、次级控件和活动课程标记
- 标本雾色（Specimen mist）`#E3ECE2` — 视口背景和浅色图表表面
- 花瓣珊瑚色（Petal coral）`#EEA095` — 默认百合花被片和选中部位强调色；当 SPECIMEN 变化时派生不同的标本颜色
- 花瓣浅色（Petal light）`#FFD7CA` — 花被片内表面、柔和高光和浅色选中底色
- 花粉金色（Pollen gold）`#D99A2B` — 花药、花粉粒、传粉路径和测验进度
- 细线色（Fine line）`#B9C6B9` — 细边框、引导线、时间轴轨道和分隔线
- 弱化文本色（Muted text）`#64736A` — 说明文字、次要事实和元数据
- 粉笔白（Chalk）`#FFFDF8` — 卡片、标签和置于植物墨色上的文本

### 字体排印（Typography）
- 展示标题、标本名称和测验结果：Fraunces（OFL），字重 500/600/700
- 正文、控件、标签和答案选项：Inter（OFL），字重 400/500/600/700
- 眉题、步骤编号、快捷键和科学元数据：IBM Plex Mono（OFL），字重 400/500

### 布局与动效（Layout & motion）
- 间距：使用 4px 基础单位，控件间距 8px，卡片内边距 16px，面板内边距 24px，桌面页面留白 32px。共享外壳最大宽度 1600px。桌面章节栏、舞台和检查器列宽分别为 220px、minmax(0, 1fr) 和 320px，间距 24px。保持最小 44px 触摸目标和投影标签之间最小 12px 间隔。
- 圆角：小型分类标签使用 2px，按钮使用 8px，舞台和检查器使用 14px，仅状态点和紧凑图标按钮使用完全圆形几何。避免做成由许多浮动圆角卡片组成的仪表盘。
- 动效：首次加载时，标本在 600ms 内从 96% 缩放和零不透明度缓动到完整缩放和不透明度，同时页头和检查器在 300ms 内淡入；不要自动旋转花朵。
- 动效：使用阻尼轨道控制，阻尼系数 0.08，限制缩放，并保留克制的落地阴影。拖拽时绝不选中文本或在触摸设备上滚动舞台；画布之外的垂直页面滚动保持可用。
- 动效：解剖变化在 650ms 内以 cubic-bezier(0.22, 1, 0.36, 1) 动画：花被片抬起并向外旋转，雄蕊分开，然后相机和裁剪平面露出子房。每个中间状态都必须可被 Previous、Next、Reset 或标签选择打断。
- 动效：每帧从 3D 锚点位置投影 HTML 标签，并向它们绘制细 SVG 引导线。用 160ms 高亮和柔和的目标环更新选中状态，而不是让标签弹跳。
- 动效：章节检查器内容在 220ms 内交叉淡入淡出，不卸载画布。传粉是一个确定性的 12 秒序列，支持播放、暂停、上一步、下一步、重播以及 0.5x 或 1x 速度；绝不在页面加载时启动。
- 动效：对于 prefers-reduced-motion，移除入场补间、空闲运动、阻尼、相机补间和粒子移动。解剖和章节变化变为即时，传粉变为四个用户控制的静态故事板状态，文案相同。
- 动效：当文档隐藏或舞台在屏幕外时暂停渲染。桌面像素比上限为 1.75，移动端为 1.5，使用一个方向光和一个半球光，避免实时阴影贴图，并通过 InstancedMesh 复用花粉。
- 图像：所有视觉元素都用代码创建：花朵、茎、叶、花粉、子房剖面、引导线、落地阴影、字标、favicon 和 WebGL 回退剖面图。不使用照片、AI 生成图像、下载的模型、HDRI、图像纹理、人物或吉祥物。默认花朵使用两轮交替的三片弯曲珊瑚色花被片、六个铜金色花药、一个绿色中央雌蕊，以及由小型几何标记构成的细微程序化斑点图案。标本变化必须从 src/content.ts 更新花被片轮廓、比例、材质颜色和装饰标记；郁金香使用更光滑的杯状无斑点花被片，而不是继承百合斑点。

## 页面与区块
### 解剖课（`index.html`）
1. **共享页眉与章节导航栏** — 页眉包含一个原创的六被片内联 SVG 标志、[BRAND] 字标、一个小号 INTERACTIVE BOTANY 标签，以及三个有序链接：01 解剖、02 传粉、03 测验。当前激活的链接使用植物墨色和一条短金色下划线。解剖章节导航栏重复这些路由及其完整描述，并显示眉题 BOTANY / 01、Fraunces 标题“Inside a flower.”，以及引言“Turn a [SPECIMEN], lift its tepals, and see how its parts work together.”。在路由下方，放置一条紧凑的说明“Drag to rotate · Pinch or scroll to zoom · Select a label to learn”和注释“A simplified teaching model. Structures are enlarged for clarity.”。在传粉和测验路由上，保留此共享外壳，但更改眉题、标题、引言和激活状态以匹配对应章节。
   布局：使用 68px 的粘性页眉，暖纸色背景和一条底部细线。在 1440×900 下，主工作区位于其下方，带有 32px 外部边距，以及三栏章节导航栏、舞台和检查器网格。左侧导航栏垂直居中，而不是塞满卡片。在 390×844 下，使用 58px 页眉，隐藏小号 INTERACTIVE BOTANY 标签，将章节链接变为可水平滚动的三项行，并将章节引言移入舞台上方的紧凑区块，标题为 34px。
   动效：激活章节下划线在链接之间以 180ms 滑动。在移动端，路由变化不会意外滚动页面；仅当学习者明确选择新章节时，才将工作区引言返回顶部。
2. **交互式解剖标本** — 默认舞台突出显示整个 [SPECIMEN]，朝向相机倾斜约 20 度，带有短弯曲茎和其后两片克制的叶子。以 60 度间隔的两个交替轮生，用原创参数化 BufferGeometry 构建六个披针形被片。围绕中央雌蕊，用六个花丝和花药雄蕊环绕。建模一个三裂柱头、细长花柱、绿色上位子房、三个内部腔室，以及一小套可读的胚珠。使用柔和的圆形接触阴影和浅色标本雾背景，而不是逼真的花瓶或复制场景。显示 LIVE SPECIMEN 标签、[SPECIMEN] 名称、标签开/关和重置视图。四个解剖按钮以及上一个和下一个控件始终可用：0 整朵花；1 被片抬起，将所有六个被片径向向外移动约 0.9 场景单位，并向下转动 35 度；2 雄蕊分开，将雄蕊向外移动 0.35 单位，同时保持可见；3 子房剖面，移动到更近的侧视图，并裁剪子房前四分之一以露出腔室和胚珠。选择胚珠会自动进入步骤 3。重置视图恢复相机而不丢弃当前解剖步骤；单独的整朵花按钮恢复步骤 0。
   布局：舞台填满中栏，在桌面上至少 640px 高，花朵约占其可用高度的 70%。将标本元数据放在左上角，视图控件放在右上角，解剖控件放在底部沿边的实心暖纸色工具栏中。四个步骤按钮使用紧凑的两行标签和一条激活的金色进度线。在移动端，将舞台放在首位，使用 420px 高的画布，其下方为二乘二解剖网格，并保持花朵和主要控件可见且无水平溢出。
   动效：默认花朵在入场后静止。拖拽旋转带阻尼，捏合或滚轮在合理范围内缩放，方向键旋转聚焦的模型，加号和减号缩放，0 重置相机。步骤过渡遵循共享的解剖时序。WebGL 失败时，仅将画布替换为带标签的内联 SVG 花朵横截面，同时保留所有四个状态、检查器和测验功能。
3. **关联标签与标本检查器** — 提供六个可选解剖标签：被片、雄蕊、柱头、花柱、子房和胚珠。它们的默认检查器条目为：被片 — “Six petal-like tepals form two whorls. In a lily, petals and sepals look nearly identical, so we call them tepals.” 雄蕊 — “Six stamens surround the pistil. Each has a filament that holds an anther, where pollen is produced.” 柱头 — “The three-lobed stigma sits at the top of the pistil. Its sticky surface catches compatible pollen.” 花柱 — “The style connects the stigma and ovary. After a compatible grain germinates, its pollen tube grows through this stalk.” 子房 — “The superior ovary sits above the tepal attachment. Its three chambers contain ovules.” 胚珠 — “Inside the ovary, each ovule contains an egg cell. After fertilization, an ovule can develop into a seed.” 初始整朵花检查器显示“Built for making seeds.”和“The showy tepals attract pollinators. Inside, stamens make pollen and the pistil receives it. Select a label to follow the journey.”其主按钮显示开始解剖并前进到步骤 1。在说明下方包含一个六项文本部件列表，以便选择从不只依赖画布。
   布局：右侧检查器是一个粉笔面板，14px 圆角、24px 内边距、等宽部件索引、32px Fraunces 标题、通俗语言段落，以及由细线分隔的六部件列表。投影标签使用小粉笔矩形、植物墨色文字和 1px 引导线，带 4px 锚点。垂直解决重叠，并优先显示所选标签。在移动端，默认显示所选标签以及雄蕊、柱头和子房；标签控件可显示其余部分，完整检查器紧随解剖控件下方。
   动效：选择标签会同时高亮文本行和 3D 结构，绘制一个克制的目标环，并显示查看该部件所需的任何遮挡解剖状态。仅当学习者在检查器中选择聚焦时，相机焦点才移动，绝不因为点击了标签而移动。
4. **共享页脚** — 页脚左侧显示“[BRAND] · An interactive specimen study”，中间显示“Designed for [AUDIENCE]”，右侧为可选的 [CREDIT] 链接。不包含日期、社交计数器、新闻通讯表单、定价或促销声明。
   布局：将页脚放在工作区下方，带顶部细线、24px 垂直内边距和相同的外部边距。在移动端，将其三个项目左对齐堆叠，间距 8px。
   动效：无页脚动画。

### 传粉实验室（`#/pollination`）
1. **四阶段传粉序列** — 将章节导航栏更改为 BOTANY / 02，标题为“Follow the pollen.”，引言为“Watch what happens after a compatible grain reaches a stigma. Play the sequence or inspect one stage at a time.”。保持相同的花朵和相机控件，但使用侧偏视图，可同时显示花药和中央雌蕊。恰好使用四个阶段：1 花粉释放 — “Mature anthers split open and expose pollen grains.”在一个花药处显示一小簇金色颗粒。2 花粉转移 — “A visiting pollinator carries compatible pollen from an anther to the sticky stigma. This transfer is pollination.”沿一条从花药到柱头的弯曲虚线路径移动 24 个实例化颗粒；不要求蜜蜂或吉祥物。3 花粉管生长 — “After pollination, a grain germinates. Its pollen tube grows down the style toward an ovule.”将被片外部淡化为浅色幽灵处理，显示子房剖面，并逐步显示一条穿过花柱的金色花粉管。4 受精 — “A sperm cell joins the egg cell inside an ovule. This is fertilization, not pollination. The ovule can now develop into a seed.”高亮一个胚珠和完成的花粉管。添加持续注释“The sequence is simplified. Timing, grain size, and pollen numbers are illustrative.”控件为播放序列、暂停、上一个、下一个、重播，以及 0.5x / 1x。在减少动态效果下，播放会在静态阶段之间前进，而不是移动粒子。
   布局：复用解剖舞台和右侧检查器，而不是添加第二个画布。检查器包含当前阶段编号、32px 标题、其说明，以及四行垂直时间线；底部阶段工具栏包含播放控件和 12 秒进度轨道。阶段段标记为释放、转移、花粉管生长和受精。在移动端，播放控件形成两行，时间线变为检查器上方的四个等宽列，所有标签在 390px 下保持可读。
   动效：将完整的 1x 播放映射为 12 秒：释放 0–2 秒，转移 2–5 秒，花粉管生长 5–9 秒，受精 9–12 秒。暂停冻结精确进度；上一个和下一个跳转到确定性阶段边界；重播返回零。仅当传粉阶段具有键盘焦点时，空格切换播放或暂停，方括号键更改阶段。不要自动播放、循环，或在完成后保持花粉漂移。

### 知识检查（`#/quiz`）
1. **五题知识检查** — 将章节导航栏改为 BOTANY / 03，标题改为 'Check your understanding.'，引言改为 'Five questions. Choose an answer to see why it is right or wrong; your best score stays in this browser.' 重新组装花朵，默认隐藏投影标签，并保持其可环绕旋转作为视觉参考。按以下固定默认顺序一次问一个问题：1 'Which part catches compatible pollen?' 选项：Stigma（正确）、Filament、Tepal、Ovule。解释：'The stigma has a receptive, often sticky surface where compatible pollen lands.' 2 'Which two structures make up a stamen?' 选项：Anther and filament（正确）、Stigma and style、Ovary and ovule、Petal and sepal。解释：'The filament supports the anther, and the anther produces pollen.' 3 'Where are the ovules located?' 选项：Inside the ovary（正确）、On the tepals、Inside the anther、Along the stem。解释：'The ovary contains chambers with ovules inside.' 4 'Which event is pollination?' 选项：Pollen moves from an anther to a compatible stigma（正确）、A pollen tube enters an ovule、A sperm cell joins an egg cell、An ovule becomes a seed。解释：'Pollination is pollen transfer. Later events belong to post-pollination growth or fertilization.' 5 'Which statement correctly separates pollination from fertilization?' 选项：Pollination transfers pollen; fertilization joins a sperm cell with an egg cell（正确）、Pollination makes seeds; fertilization opens the anther、Pollination grows the style; fertilization colors the tepals、They are two names for exactly the same event。解释：'The grain must first land on a stigma; fertilization happens later inside an ovule.' 每次选择后，锁定该问题，标记所选答案和正确答案，显示其解释，并启用 Next question。最终视图显示 'Your specimen score'，附带动态度分（满分五题）、基于答错部分的一句话复习建议、Review anatomy 和 Try again。仅在本地存储最佳数字分数，并提供五行答案回顾。
   布局：将 3D 舞台保留在中间列，并用更宽的测验面板替换解剖检查器，该面板横跨检查器列，并在空间允许时不与画布任何部分重叠。面板显示 Question n of 5、五个小进度段、一个 30px Fraunces 问题、四个全宽答案按钮、反馈和下一个控件。在移动端，花朵舞台收缩至 300px 高，测验紧随其后，答案按钮全宽堆叠，间距 12px。切勿将测验内容隐藏在画布后面或要求悬停。
   动效：答案反馈在 180ms 内淡入。正确答案使用叶绿色和 Check 图标；错误选择使用克制的铁锈色边框和 X 图标，不抖动。仅在允许动效时，结果在 400ms 内计数递增。Try again 重置答案和可见问题，但保留最佳分数。

## Assets
- image：不使用任何位图或外部视觉素材。标本、子房剖面、花粉、地面阴影、字标、favicon、引线和 WebGL 回退示意图，全部用 Three.js 几何体和内联 SVG 生成。不得下载或热链任何花朵图片、纹理、HDRI 或 3D 模型。
- icon：使用本地打包的 lucide-react 图标，包括 RotateCcw、Eye、EyeOff、Play、Pause、ChevronLeft、ChevronRight、Check、X、Focus、Rotate3D 和 Award。仅将原创的六瓣字标、favicon、引线和解剖回退图以内联 SVG 绘制。在 ASSETS.md 中记录 Lucide 的 ISC 许可证。
- font：通过 @fontsource/fraunces（OFL）自托管 Fraunces 500/600/700；通过常规 Vite 构建打包选定的 woff2 文件，并在 ASSETS.md 中列出包名和许可证。
- font：通过 @fontsource/inter（OFL）自托管 Inter 400/500/600/700；通过常规 Vite 构建打包选定的 woff2 文件，并在 ASSETS.md 中列出包名和许可证。
- font：通过 @fontsource/ibm-plex-mono（OFL）自托管 IBM Plex Mono 400/500；通过常规 Vite 构建打包选定的 woff2 文件，并在 ASSETS.md 中列出包名和许可证。

## 禁止事项
- 不要复制灵感页面的源提示词、代码、中文文本、确切的课程措辞、测验措辞、几何结构、比例、材质、相机取景、标签样式、控件位置、调色板、排版、图标或动画时序。仅复用旋转花朵、分阶段解剖、解剖标签、授粉和评估这些宽泛概念。
- 在实现或演示文案中，不得使用参考平台的产品名称、模型名称、公司名称、徽标、界面品牌、截图、图像、模型、纹理、视频、音频或其他专有媒体。
- 不得使用真实人物肖像、动漫或游戏角色、第三方品牌徽标、可识别的商业产品、装饰性吉祥物、标志性插画、商业字体或受限库源代码。
- 不得从远程主机获取照片、生成图像、花朵模型、HDRI、纹理、字体、脚本、图标、API、分析工具或任何其他运行时资源。所有内容必须本地打包；不得使用热链接或 CDN 标签。
- 不得添加后端、服务器操作、API 路由、数据库、身份验证、网络表单、第三方跟踪、真实传粉者数据或实时科学服务。测验状态和最佳分数仅保留在客户端。
- 不得添加 Tailwind、react-three-fiber、Drei、GSAP、物理引擎、状态库或其他框架。保持指定的 Vite、React、TypeScript、直接 Three.js、Lucide、Fontsource 和原生 CSS 技术栈。
- 不得将授粉与受精混淆，不得将百合的 tepals（花被片）称为分离的花瓣和萼片，不得在默认模型上将子房置于花被片附着点下方，也不得将放大的示意几何结构和粒子数量呈现为精确的生物学测量值。
- 当 SPECIMEN 或 AUDIENCE 变化时，不得让东方百合特有的颜色、斑点、文案、替代文本或测验措辞保持不变。将所有依赖变量的内容和模型参数一起放在 src/content.ts 中，并针对提供的值重写它们。
- 不得自动播放旋转或授粉，不得强制指针锁定，不得使拖拽成为操作课程的唯一方式，也不得忽略 prefers-reduced-motion。所有控件都需要键盘和触摸等效操作以及可见的焦点状态。
- 不得让标签过度重叠、偏离其解剖锚点、捕获本应传给画布的指针事件，或使测验依赖于选择 3D 网格。提供等效的文本部件列表和 SVG 回退方案。
- 不得创建额外路由、裸目录链接、源映射、复制的 src 目录、SEO 元数据、Open Graph 标签、JSON-LD、站点地图、日期、定价、虚假计数器或促销模板库文案。仅使用纯 [BRAND] 标题、favicon、指定的哈希路由和可选的 [CREDIT] 页脚链接。
- 不得使 dist/ 超过 20 MB。使用相对的生产资源路径，并在 1440×900 和 390×844 下验证 npm run build、index.html、#/anatomy、#/pollination 和 #/quiz，确保零控制台错误、无水平溢出，且解剖、授粉和测验流程正常工作。

---
Inspired by Flower Anatomy 3D Explainer — https://www.kimi.com/showcases/3dmake
— Prompt by VibeFather · https://vibefather.ai/t/flower-anatomy-3d-explainer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
