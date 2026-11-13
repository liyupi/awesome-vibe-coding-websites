> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# Lo-fi 房间氛围混音器

完全按照下面的描述构建这个网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个原创的单页氛围混音器，场景设定在 [ROOM_NAME]，[ROOM_SETTING]。首屏是一个丰富的手绘 SVG 房间，包含五个独立控制的环境声道：雨声、咖啡馆低语、壁炉、黑胶爆裂声和鸟鸣。每个滑块同时改变一段内置的本地音频循环和房间中对应的部分。包含一个专注计时器，默认时长为 [FOCUS_MINUTES] 分钟，三个预设，以及保存在 localStorage 中的命名混音。默认邀请语为 '[ROOM_TAGLINE]'。声音为选择性开启；其余一切无需账户即可立即使用。

- 受众：创作者、学生、开发者、设计师，以及任何正在打造安静专注空间、交互式作品集页面，或为喜欢可定制环境音的人制作的精致浏览器玩具的人。
- 目标：让访客在五秒内理解这一体验，无需说明即可塑造可见且可听的氛围，开始一个专注工作时段，并在同一设备上回到喜爱的混音。保持房间为主体，让每个可见控件都执行真实的本地操作。
- 语调：温暖、从容、简洁，略带诗意但不流于 whimsical 或含糊。使用实用的控件标签和细微的待客之道。不做任何医疗、睡眠、生产力或心理健康方面的声明。

## 技术栈（Stack）
- 框架（Framework）：Vite 7 + React 19 + TypeScript 5
- 样式（Styling）：Tailwind CSS 3.4 + 自定义 CSS
- 库（Libraries）：react（MIT）、react-dom（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL）、@fontsource-variable/dm-sans（OFL）、@fontsource/ibm-plex-mono（OFL）
- 构建（Build）：`npm run build` → `dist/` 中的静态文件。无后端、无服务端代码、无外部 API。
- 配置（Setup）：
  - 使用 React 19.2、TypeScript 5.9、Vite 7.2、@vitejs/plugin-react、Tailwind CSS 3.4、PostCSS 和 Autoprefixer。package.json 脚本为 dev='vite'、audio='node scripts/generate-audio.mjs'、build='npm run audio && tsc -b && vite build'、preview='vite preview'。不要添加组件、动画、音频、状态管理或路由库。
  - 在 vite.config.ts 中设置 base='./'、plugins=[react()]、build.outDir='dist'、build.sourcemap=false、assetsInlineLimit=0。保持所有生产资源 URL 为相对路径，不要将 src/ 复制到 dist/。
  - 为 ./index.html 和 ./src/**/*.{ts,tsx} 配置 Tailwind content。将每个 Design 颜色添加到 theme.extend.colors，字体族 display=['Fraunces Variable','Georgia','serif']、sans=['DM Sans Variable','system-ui','sans-serif']、mono=['IBM Plex Mono','monospace']。将房间专属 keyframes、range 样式、SVG 纹理和 reduced-motion 覆盖放入 src/index.css。
  - 在 src/fonts.ts 中导入 @fontsource-variable/fraunces、@fontsource-variable/dm-sans、@fontsource/ibm-plex-mono/400.css 和 @fontsource/ibm-plex-mono/500.css。仅自托管生成的 Fontsource 文件；绝不请求字体 CDN。
  - 将所有面向访客的字符串、频道定义、预设、SVG 标签、默认变量值和音频路径保存在带类型的 src/content.ts 中。建议的组件文件为 Header.tsx、RoomScene.tsx、MixerPanel.tsx、FocusTimer.tsx、MixShelf.tsx、SaveMixDialog.tsx、HowItWorksDialog.tsx、Toast.tsx 和 Footer.tsx，由 src/App.tsx 组合用于单个 index.html 页面。
  - 创建无依赖的 scripts/generate-audio.mjs。使用固定种子的 PRNG、22050Hz 单声道 16 位 PCM 和 12 秒循环。从分层滤波噪声和液滴滴答声生成 public/audio/rain.wav；从带限的不可辨识低语状噪声并加入轻柔的杯子和勺子滴答声生成 cafe.wav，绝不包含语音或音乐；从低通滤波噪声和种子化爆裂包络生成 fireplace.wav；从克制的粉红噪声、灰尘爆音和细微机械嘶声生成 vinyl.wav；从七个原创正弦滑音啁啾动机叠加微弱叶片噪声生成 birds.wav。应用短接缝交叉淡化，将峰值归一化到 0.82 以下，写入规范 WAV 头，并使重复运行字节完全一致。提交这五个生成文件；它们合计应约为 2.6 MB。
  - 实现 src/lib/audio.ts，使用一个延迟创建的 AudioContext。仅在显式按下 Listen 后，获取并解码五个确切的本地 WAV 路径，为每个频道创建一个循环 AudioBufferSourceNode 和 GainNode，通过上限为 0.7 的主 GainNode 连接它们，并开始播放。滑块调用 setTargetAtTime 以实现无点击的增益变化。Mute 保留先前的非零值；Pause sounds 挂起上下文而不丢失电平。可见地处理加载和解码失败，绝不自动播放。
  - 实现 src/lib/storage.ts，包含安全 JSON 解析、模式检查、围绕 localStorage 的 try/catch，以及从小写连字符 BRAND slug 派生的键。持久化当前频道电平、静音状态和最多八个命名自定义混音。不要持久化或显示日历日期。计时器状态可在重新加载时重置。
  - 由 React 状态和五个频道电平的 CSS 自定义属性驱动 RoomScene.tsx。仅在控件变化时更新 SVG 属性和类；使用 CSS transforms 和 opacity 实现连续运动，而不是每个动画帧重新渲染 SVG。遵循 prefers-reduced-motion，使用静态雨、火焰、蒸汽、唱片、鸟和即时界面状态变化。
  - 使用 performance.now() 和绝对结束时间实现专注计时器，每秒更新可见剩余时间四次。暂停存储剩余毫秒数，重置恢复所选时长，停止时切换时长更新圆环。完成时在 aria-live 区域宣布 'Session complete. Take a breath.'，并且仅当访客已启用声音时播放短合成提示音。

## 变量
- [BRAND] — 氛围空间名称（默认：“Nooklight”）。一个自创的短名称，用于字标、文档标题、存储前缀和页脚。
- [ROOM_NAME] — 房间名称（默认：“The Amber Study”）。为这个插画空间自创的具体名称。
- [ROOM_SETTING] — 房间设定（默认：“an upstairs reading room on a rainy evening”）。一个简短的小写短语，描述房间和时刻。
- [ROOM_TAGLINE] — 主视觉邀请语（默认：“Make a little weather for your thoughts.”）。一句温和的话，约 35–55 个字符；房间变化时重写它。
- [FOCUS_MINUTES] — 默认专注时长（默认：“25”）。1 到 120 之间的正整数分钟数；用于初始计时器和中间时长预设。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/lo-fi-room-ambience-mixer（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 夜墨（Night Ink）`#211C2A` — 页面背景、最深的阴影，以及琥珀色按钮上的深色文字。
- 面板紫（Panel Plum）`#2D2637` — 混音器、计时器、对话框和已保存混音的表面。
- 暮墙（Dusk Wall）`#493C55` — 插画房间的后墙和次级表面。
- 淡薰衣草（Muted Lavender）`#B9AAC2` — 深色表面上的次级文字和非活动图标。
- 暖奶油（Warm Cream）`#F6E9D2` — 主文字、灯罩、纸张和高光。
- 旧纸（Old Paper）`#DFC9A9` — 书籍、标签和柔和的边框细节。
- 蜜琥珀（Honey Amber）`#E8AA62` — 主操作、活动滑块、灯光和选中状态。
- 余烬珊瑚（Ember Coral）`#D87350` — 火焰核心、唱片标签和暖色点缀；不用于正文文字。
- 雨蓝（Rain Blue）`#8299B6` — 窗外的天空、雨丝和冷色环境高光。
- 叶鼠尾草（Leaf Sage）`#8FA489` — 植物、鸟的树枝、成功反馈和安静的点缀。
- 胡桃木（Walnut）`#765044` — 地板、书桌、壁炉架和家具轮廓。
- 细线（Fine Line）`#51445D` — 深色 UI 表面上的单像素边框和分隔线。

### 字体排印（Typography）
- 房间邀请语和大型计时器数字：Fraunces Variable（OFL），字重 600/700
- 界面、正文、按钮、标签和对话框：DM Sans Variable（OFL），字重 400/500/600/700
- 音量百分比、计时器预设和微小状态标签：IBM Plex Mono（OFL），字重 400/500

### 布局与动效（Layout & motion）
- 间距：使用 4px 基础网格，以 8px 为主导节奏。页面最大宽度为 1480px；桌面端边距为 28px，平板端为 20px，移动端为 14px。页头高度为 68px。介绍区顶部内边距为 28px，底部为 24px。工作区各列间距为 20px。场景和面板的内边距为 20px；紧凑控件行的垂直间距为 10px。保持最小 44px 的指针目标，相邻目标之间至少间隔 8px。
- 圆角：场景卡片 24px，混音器和对话框面板 20px，预设卡片 16px，标准按钮和输入框 12px，小图标按钮 10px，状态胶囊 999px。SVG 家具使用柔和的圆角连接，而非尖锐的几何转角。边框为一像素；避免嵌套的浮动卡片和厚重的玻璃效果。
- 动效：雨丝以三条错开的线性循环下落，同时水滴沿玻璃缓缓滑下。雨量级别控制可见雨丝数量、0 到 0.8 的不透明度，以及从高音量下的 2.8 秒到零音量下冻结隐藏状态的持续时间。
- 动效：咖啡馆级别会升起两条杯口蒸汽路径，并将其飘动循环从 5.5 秒缩短至 2.8 秒；仅在高于 35% 时，一把小勺子每 4 秒闪烁一次。这是一种克制的视觉隐喻，而非单独的咖啡馆插画。
- 动效：壁炉火焰以错开的 700–1200ms 循环轻柔地缩放和倾斜。火焰级别控制火焰高度、余烬不透明度以及附近地板上的琥珀色光晕；零级别时留下未点燃的木柴，且无烟雾。
- 动效：黑胶唱片在其级别高于零时每 1.8 秒旋转一圈，并带有微妙的唱臂摆动和两条级别条。减少动效时，唱片保持静止，并使用标签和级别条来显示设置。
- 动效：室外树枝上的两个小型通用鸟剪影最多每 5 秒跳跃一次，树叶缓慢摇曳。鸟级别控制其可见性和动效；没有吉祥物、对话气泡或音符粒子。
- 动效：按钮和卡片在 120–180ms 内响应，位移最多 2px。对话框在 180ms 内淡入并上升 8px。提示消息停留 2.4 秒。无滚动劫持、视差、自动播放、闪烁、无限文字跑马灯或光标跟随。
- 动效：在 prefers-reduced-motion 下，移除所有环境动画和入场动画，显示完整的静态房间，保持所有状态提示可读，并保持音频行为不变。
- 图像：创建一个详细的原创内联 SVG 房间，viewBox 0 0 1200 760，不使用栅格图像或外部插画。采用正面略微抬高的剖面构图：左侧是大雨窗和树枝，前景是胡桃木书桌上的书籍和唱机，边桌上放着冒热气的杯子，右侧是壁炉和琥珀色地板光晕，还有一把空着的软垫阅读椅、带灯罩的台灯、植物、带框的抽象线条和分层地毯。添加静态低透明度的 SVG 颗粒滤镜和两到三片大面积色彩晕染以增加深度；不要对噪点做动画。不出现人物、面孔、宠物、角色、标志、品牌产品、可识别地标、复制的房间构图或烘焙进画面的文字。完整的房间是第一屏的视觉锚点，而不是小型装饰缩略图。

## 页面与区块
### [BRAND] — [ROOM_NAME] (`index.html`)
1. **页眉与房间邀请** — 页眉包含一个原创内联 SVG 标志（由一扇圆角窗户和三道雨丝组成）、[BRAND] 字标，以及一个带 'Room ready' 的小鼠尾草绿状态点。右侧，一个 BookOpen 图标和文字打开 'How it works'；不要添加指向不存在页面的导航。下方，一行大写等宽眉题写着 '[ROOM_NAME] · [ROOM_SETTING]'。H1 精确为 [ROOM_TAGLINE]，渲染为一行或两行均衡的文本。辅助文案为 'Five sounds. One slower moment.'。文档标题为 [BRAND]，favicon 使用相同的原创窗户标志。
   布局：在 1480px 容器内使用全宽页眉，品牌居左，帮助操作居右。介绍区为 flex 行：眉题和 H1 居左，辅助文案对齐到右下。H1 使用 Fraunces 600、clamp(36px,4vw,56px)、行高 1.04、字距 -0.025em，颜色为 Warm Cream（暖奶油色）。在低于 760px 的屏幕上，介绍区堆叠，间距 10px，H1 使用 36px，仅隐藏冗余的 'Room ready' 文字，并保持帮助控件可用。
   动效：页眉和介绍区一起以 300ms 不透明度过渡出现；没有交错文字显现或打字机效果。帮助按钮在悬停时使用安静的边框提亮。
2. **交互式插画房间** — 用 Design 中描述的完整原创 SVG 房间填充左侧工作区。每个视觉通道都有独特的位置：雨和鸟在窗户处，咖啡蒸汽在杯子处，火焰和光在壁炉处，黑胶在书桌处。初始级别为 Rain 62、Café 24、Fireplace 48、Vinyl 18、Birds 0，因此首次视图可见地包含雨、蒸汽、火光和一张转动的唱片，而不启动音频。左下角场景说明显示 [ROOM_NAME] 和 'Visual mix active'；右下角一个 Honey Amber（蜂蜜琥珀色）主按钮，带 Volume2 或 Pause 图标，在激活前显示 'Listen'，播放时显示 'Pause sounds'，解码时显示 'Warming up…'。如果音频无法加载，在内联状态区域显示 'Audio could not load. The visual mixer still works.'。SVG 具有可访问的摘要，而内部装饰性路径对辅助技术隐藏。
   布局：工作区为网格，场景使用 minmax(0,1.65fr)，控件使用 minmax(340px,1fr)。场景卡片宽高比 16/10，最小高度 520px，溢出隐藏，Panel Plum（面板紫李色）背景，Fine Line（细线色）边框，以及微妙的 0 20px 60px #15101966 阴影。SVG 以 preserveAspectRatio xMidYMid meet 填充卡片。场景说明位于 #211C2AD9 实底胶囊上，而非覆盖在无保护的细节艺术上。低于 980px 使用单列，场景在前、控件在后；低于 600px 使用 4/3 场景宽高比，无最小高度，说明内边距 12px，且无水平裁切或页面溢出。
   动效：直接从通道级别应用 Design 中的五个响应式动画系统。Listen 按钮在 120ms 内淡出其标签状态。主暂停仅影响音频；可见混音仍响应滑块。减少动效用户看到所有选定元素处于静态位置。
3. **声音混音器与专注计时器** — 右侧面板以 'Soundscape' 和一个小型 TextButton 'Reset levels' 开始。五行按此精确顺序为 Rain、Café、Fireplace、Vinyl、Birds，使用 CloudRain、Coffee、Flame、Disc3 和 Bird Lucide 图标。每行有一个文本标签、一个带可访问名称的独立静音图标按钮、一个 0–100 步长 1 的范围输入，以及一个等宽百分比输出。初始值为 62、24、48、18 和 0。移动滑块立即更新增益和场景强度；静音将该通道设为静音而不清除其先前级别，取消静音则恢复。Reset levels 恢复五个初始值，并弹出 toast 'Back to the original room.'

   在分隔线下方，'Focus timer' 出现在 Timer 图标旁。在圆形 SVG 进度环内以 Fraunces 600 显示剩余 mm:ss。时长按钮为 '15 min'、'[FOCUS_MINUTES] min' 和 '60 min'，初始选中 [FOCUS_MINUTES]。主按钮文本循环显示 'Start focus'、'Pause' 和 'Resume'；一个单独的 RotateCcw 按钮重置。计时器从不自动启动，完成时将状态行改为 'Session complete. Take a breath.'，而不打开外部通知。
   布局：保持整个右侧面板作为一个对齐表面可见，内边距 20px，高度与桌面场景相同。混音器行高 58px，间距 12px；标签占 112px，范围输入弹性伸缩，百分比右对齐于 42px。使用 Fine Line 中的自定义范围轨道，Honey Amber 填充，以及 20px Warm Cream 滑块拇指，Night Ink 边框。计时器区块为 116px 行，左侧 92px 圆环，右侧时长/操作。在窄移动端，每个滑块保持在其标签下方独占全宽行，保持 44px 触控目标，并让面板高度自然增长，而非缩小控件。
   动效：范围填充和激活状态更新无动画延迟。计时器圆环使用 200ms 线性 stroke-dashoffset 更新。计时器按钮在 120ms 内响应。完成时无脉冲圆环、游戏化连续记录、彩纸或庆祝模态框。
4. **预设与已保存混音架** — 在工作区下方，将架子标题设为 'Rooms for a moment'，辅助文本为 'Start with a blend, then make it yours.'。提供恰好三张预设卡片：'Slow Evening'，Rain 62 / Café 24 / Fireplace 48 / Vinyl 18 / Birds 0，文案 'Rain at the glass, a low fire, a little crackle.'；'Café Corner'，Rain 18 / Café 72 / Fireplace 36 / Vinyl 24 / Birds 0，文案 'Cup nearby, soft murmur, nothing urgent.'；'Morning Pages'，Rain 0 / Café 12 / Fireplace 0 / Vinyl 8 / Birds 82，文案 'Open the window and begin with the birds.'。每张卡片显示五个带标签的微型级别条，而非图像。激活卡片会更新所有通道和房间，用 aria-pressed 标记卡片，且不启动音频。

   一个有边框的自定义混音区域包含 'Your saved mixes'、一个 'Save current mix' 按钮，以及初始空行 'No saved mixes yet. Shape the room and keep one here.'。保存会打开一个内联对话框，包含一个必填输入框，标签为 'Mix name'，占位符 'Rainy chapter'，最多 24 个字符，Cancel 和 'Save mix'。在本地存储级别和静音状态，显示名称和微型级别条，并提供 Load 和 Delete 操作。已保存混音限制为八个，满时显示可见说明。删除需要一次内联确认。Toast 文本为 'Mix saved on this device.'。不要显示日期、账户、云同步声明或虚假分享。
   布局：使用三列预设网格，间距 16px，并在下方 20px 处使用单独的全宽已保存混音架。预设卡片左对齐，内边距 18px，圆角 16px，Panel Plum 背景，Fine Line 边框。激活的预设具有 Honey Amber 边框和小型 'Current' 胶囊。已保存混音使用响应式两列网格；在移动宽度下，预设和已保存混音变为一列。保存对话框居中，最大宽度 420px，Night Ink 遮罩 70%，绝不使用全新页面。
   动效：加载预设时，场景强度在 220ms 内交叉淡入淡出，同时音频增益平滑渐变。选中卡片立即改变边框。对话框使用标准 180ms 入场；删除行仅使用不透明度，减少动效会移除所有过渡。
5. **工作原理对话框与页脚** — 帮助对话框标题为 'A room that follows your mix.'。它包含三个编号行：'01 Blend'，文案 'Move any slider. The matching corner of the room changes with the sound.'；'02 Listen'，文案 'Press Listen to begin all five local loops together. Pause whenever you like; your levels stay put.'；'03 Keep a mix'，文案 'Save up to eight atmospheres on this device, or start a focus interval while you listen.'。一个小注释写着 'Five original procedural loops · CC0 · Stored with the site. No account, no streaming, no autoplay.'。通过一个清晰标注的按钮、X 图标、Escape 或遮罩点击关闭；捕获焦点并将其返回帮助触发器。

   页脚左侧显示 [BRAND]，后跟 'A quieter corner of the browser.'。右侧包含纯文本 'Original room art · Local audio · Your mixes stay on this device'，以及启用时可选的 [CREDIT] 页脚链接。无社交链接、新闻通讯表单、定价、成员数量、日期、健康声明或虚构荣誉。
   布局：对话框使用 Panel Plum、20px 圆角、24px 内边距、Fine Line 边框，以及由微妙分隔线隔开的三个行。页脚为全宽 flex 行，垂直内边距 28px，顶部 Fine Line 边框。在移动端堆叠，间距 12px，鸣谢在 14px 下保持清晰可读。
   动效：仅使用标准对话框淡入和 8px 上升。页脚为静态。

## 资产（Assets）
- 图片（image）：不使用任何第三方、图库、位图或生成的图像文件。将整个主视觉房间（hero room）、窗口标记、favicon、家具、植物、鸟、壁炉、雨、黑胶唱片和纹理，全部作为原创内联 SVG/CSS 绘制在 RoomScene.tsx 和本地 favicon 中。在 ASSETS.md 中记录：所有场景艺术均为本模板用代码绘制，未使用任何外部图像资产。
- 图标（icon）：仅使用经过 tree-shaking 的 lucide-react 图标（ISC），包括 CloudRain、Coffee、Flame、Disc3、Bird、BookOpen、Volume2、VolumeX、Pause、Play、RotateCcw、Timer、Save、Trash2、X、Plus 和 Check。不要导入品牌图标集。在 ASSETS.md 中列出所导入的模块、https://www.npmjs.com/package/lucide-react、Lucide 贡献者以及 ISC 许可证。
- 字体（font）：通过指定的 Fontsource 包（OFL）自托管 Fraunces Variable、DM Sans Variable 和 IBM Plex Mono 400/500。在 ASSETS.md 中列出生成的本地 woff2 路径、包源 URL、从随附 OFL 文件中复制的版权持有人以及 OFL 许可证。不使用 Google Fonts、Adobe Fonts 或其他字体 CDN。
- 视频（video）：音频资产；无视频。scripts/generate-audio.mjs 以确定性方式生成 public/audio/rain.wav、cafe.wav、fireplace.wav、vinyl.wav 和 birds.wav，作为 12 秒、22050Hz、单声道、16 位的原创程序化循环。将生成器和 WAV 文件打包在本地。这些新合成的循环和生成器源码是原创模板资产，以 CC0 1.0 发布；在 ASSETS.md 中记录全部五个路径、生成器路径、“Original procedural audio generated for this template”以及 https://creativecommons.org/publicdomain/zero/1.0/。不要下载录音、模仿现有歌曲或使用可理解的人声。

## 禁止事项
- 不得复制任何现有氛围应用（ambience app）的房间插画、布局、控件样式、代码、提示词或原文文案；指定的 SVG 构图和界面必须从零实现。
- 不得使用可识别的品牌名称、标志、吉祥物、标志性角色、产品口号、品牌化物品、自定义字体、独特参考图标，或现有网站的精确配色。
- 不得添加真实人物、人脸、名人肖像、动漫、游戏或影视角色、宠物，或可识别的地标。鸟类仅限小型通用剪影。
- 不得热链或流式播放音频，不得使用未经核实具备再分发兼容 CC0 许可的录音。仅使用五个本地生成的原创 CC0 WAV 文件，绝不获取第三方音频。
- 不得自动播放声音、在用户手势之前创建 AudioContext、添加背景视频、使用可理解的语音、复现现有旋律，或让音频成为操作视觉混音器的必要条件。
- 不得使用后端、服务器代码、API 路由、账户、数据库、外部 API、分析、通知、会向任何地方提交的表单、云同步或分享声明。保存的混音和设置保留在 localStorage 中。
- 不得从 CDN 加载脚本、样式、字体、图标、图片或媒体。自托管固定的 Fontsource 字体，对 Lucide 进行 tree-shaking，使用原创 SVG 插画，并将全部五个 WAV 文件保留在构建产物中。
- 不得在固定技术栈之外添加 npm 依赖，或使用受限 UI 源码、商业字体、CC BY-NC、CC BY-SA、未授权包、占位图服务、Unsplash、Pexels 或 Pixabay。
- 不得将首屏做成以排版为主导的落地页、通用 bento 仪表盘、图库照片 hero、定价页或多步注册漏斗。交互式房间和混音器就是产品本身。
- 不得添加滚动劫持、视差、闪烁、自动播放轮播、光标跟随、虚假在线活动、用户数、连续打卡、生产力评分、日期、医疗声明、睡眠声明或心理健康声明。
- 不得输出 source map、将 src/ 复制到 dist/、使用绝对根路径资源 URL、超过 20 MB，或要求服务器。单条 npm run build 命令必须重新生成音频，并在 dist/ 中产出压缩的、使用相对路径的静态文件。
- 不得添加路由或裸目录链接。这是一个 index.html 页面；对话框是本地界面状态，每个内部帮助或预设控件都执行此处描述的行为。
- 不得忽略移动端或无障碍要求。在 1440×900 和 390×844 下必须零控制台错误，且无页面级横向溢出；所有控件都需要标签、键盘操作、可见焦点、44px 目标、适当的按下状态和减少动态效果行为。

---
— Prompt by VibeFather · https://vibefather.ai/t/lo-fi-room-ambience-mixer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
