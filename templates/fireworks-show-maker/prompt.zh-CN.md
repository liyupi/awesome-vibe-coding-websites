> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 烟花秀制作器

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个原创的单页烟花编排工具，默认品牌为 Nightloom Studio。打开后的视图是一个精致的编辑器，围绕着一场实时 Canvas 2D 水岸演出，演出内容为 [SHOW_TITLE]，位于虚构的 [CITY_NAME] 天际线之上。访客可以安排弹型、颜色、时机、轨道和爆炸位置，然后播放带有同步合成音效的序列，并通过 URL hash 分享。

- 受众：为 [AUDIENCE] 编写界面和任何辅助文案，默认受众为庆典设计师和创意编程者。它应当让首次访问的访客感到平易近人，同时保留紧凑时间轴编辑器的精确性。
- 目标：让访客无需说明或登录即可立即理解场景，编辑提供的起始演出，预览带声音且可复现的表演，并复制一个完全在客户端恢复同一演出的链接。
- 语气：夜间的、精确的、安静喜庆的：一个带有明亮色彩的专业工具界面，而不是卡通街机风格。使用简洁的美式英语、具体的控件标签，不设营销板块。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：原生 CSS（Vanilla CSS）
- 库：React 18 和 React DOM（MIT）、Vite 5（MIT）、lucide-react（ISC）、@fontsource/sora（OFL-1.1）、@fontsource/inter（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - 将 Vite 配置为 base: './'，启用压缩，禁用 source map；生产入口必须是 dist/index.html。
  - 将所有界面文案、变量默认值、shell 定义、命名颜色和初始事件保留在 src/content.ts 中；当值变化时重写依赖变量的文案，绝不能留下默认品牌文本。
  - 使用 React 管理编辑器状态和对话框，但将粒子数组和动画时序保留在 refs 中，以免组件树因每个粒子或每一帧而重新渲染。
  - 使用两个堆叠的 Canvas 2D 图层：一个缓存的天际线/水面图层，仅在尺寸变化时重绘；一个动态的发射/粒子/倒影图层，由 requestAnimationFrame 驱动，采用固定的 1/60 秒模拟步长，最多五个追赶步。
  - 所有随机变化都从基于事件 id 和粒子索引的稳定种子派生，以便播放、跳转和共享链接能重现相同的几何形状。
  - 使用 Web Audio API 在运行时生成发射、低空爆炸和噼啪声；仅在明确的用户手势之后创建或恢复 AudioContext，并且不打包音频文件。
  - 将带版本的演出数据序列化为 base64url 编码的 UTF-8 JSON，放在 #show= URL 哈希下；验证导入的数据，演出最多 60 个事件，绝不通过网络发送演出数据。
  - 通过列出的 Fontsource 包自托管 Sora、Inter 和 IBM Plex Mono，并创建 ASSETS.md，包含字体和图标的包路径、源 URL、作者和许可证。

## 变量
- [BRAND] — 工作室或项目名称（默认："Nightloom Studio"）。一个虚构名称，用于页眉、文档标题和小型品牌标记标签。
- [SHOW_TITLE] — 演出标题（默认："Harbor Afterglow"）。一个简短的原创庆典标题，显示在画布上方，并存储在共享演出中。
- [CITY_NAME] — 虚构天际线名称（默认："Port Aurelia"）。一个虚构的滨水地点，绝非真实城市或地标。
- [AUDIENCE] — 受众（默认："celebration designers and creative coders"）。用于调整辅助文案，同时保留相同的编辑工作流。
- [SHOW_DURATION] — 演出时长（秒）（默认："24"）。一个 12 到 60 之间的数字时长；当它变化时，按比例缩放起始事件时间。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/fireworks-show-maker（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- Midnight（午夜蓝）`#080B14` — 应用背景和最深的画布天空
- Panel（面板）`#101624` — 素材库、检查器、时间线和传输控件表面
- Raised（凸起）`#171F31` — 选中的控件、事件块和对话框表面
- Line（线条）`#293249` — 一像素分隔线、标尺刻度和输入框边框
- Ink（墨色）`#F4F6FC` — 主标签、标题和 Pearl 外壳
- Muted（弱化）`#99A5BC` — 次级标签和非活动图标
- Violet（紫罗兰）`#9D8CFF` — 主操作、选中轮廓、播放头和 Violet 外壳
- Solar（日光）`#FFCA6B` — Solar 外壳和温暖的建筑窗户
- Coral（珊瑚）`#FF6F91` — 仅用于 Coral 外壳和破坏性操作的悬停状态
- Lagoon（泻湖）`#64D9FF` — Lagoon 外壳和冷色水面倒影
- Mint（薄荷）`#75E6B2` — Mint 外壳和就绪状态指示器

### 字体排印
- 品牌、节目标题、对话框标题和主要控件标签：Sora（OFL），字重 500/600/700
- 按钮、外壳描述、字段和通用界面文本：Inter（OFL），字重 400/500/600
- 时间码、标尺刻度、轨道标签、坐标和键盘提示：IBM Plex Mono（OFL），字重 400/500

### 布局与动效
- 间距：使用 4px 基准单位。页头高度为 64px，水平内边距为 18px；面板内边距为 16px；控件间距为 8px；区块间距为 12px。外壳行高为 64px，输入框在桌面端为 36px、在触屏上至少为 44px，时间线在桌面端高度为 220px。
- 圆角：面板和对话框使用 6px，按钮、输入框、外壳行和时间线事件使用 4px，小色块使用 2px。完全圆形的形状仅保留给状态点、开关旋钮和画布位置标记；避免使用悬浮胶囊卡片。
- 动效：在 600ms 后启动一个静音的环境预览，使首屏无需音频即可成为一场生动的演出；任何编辑操作都会暂停它。主操作 Play with sound 会从零重新开始、启用音频并播放实际时间线。
- 动效：外壳沿略微弯曲的轨迹在 0.9–1.2 秒内发射，然后模拟爆裂粒子，重力为每秒平方 0.055 个画布高度，速度阻力为每 60Hz 步进 0.985，寿命根据外壳类型为 1.4–3.2 秒。
- 动效：将每个粒子之前的六个位置绘制为渐隐的锥形拖尾，并将实时爆裂以低透明度、垂直拉伸的条纹镜像到画布底部 22% 的水带中；不要使用预录动画。
- 动效：界面过渡保持在 120 到 160ms 之间，使用不透明度和最多 4px 的位移。播放头和被拖动的事件直接跟随输入，不使用缓动；提示消息在 160ms 内进入和退出。
- 动效：当设置了 prefers-reduced-motion 时，不要自动播放。在 22 秒处渲染一个有代表性的静态画面，移除界面过渡和环境闪烁，并且仅在显式播放后使用一半的粒子和更短的拖尾。
- 图像：不使用照片或生成的位图图像。完全使用 Canvas 2D、CSS 和内联 SVG 绘制原创的天际线、水面、外壳预览、位置标记和一个小型四射线品牌火花。天际线是一个虚构的建筑群，由形态各异的矩形塔楼、退台、屋顶天线、零散的暖色窗户和雾霭组成；不包含任何可识别的地标。仅将 Lucide 用于常见的界面图标。没有人物、吉祥物、外部插画或音频文件。

## 页面与区块
### [BRAND] — [SHOW_TITLE] (`index.html`)
1. **应用页头** — 左侧：一个原创的四射线火花 SVG 和 [BRAND]，使用 Sora 600、16px，配一个小号 Mint 就绪圆点和 IBM Plex Mono 10px 的标签 LOCAL SHOW BUILDER。中间：[SHOW_TITLE]，在首次编辑前显示一个弱化的 'Starter show' 徽章，之后显示 'Edited'。右侧：宽屏上显示键盘提示 'Space to play / pause'，以及一个带 Share2 图标的 Violet Share show 按钮。将纯文档标题设为 [BRAND] — [SHOW_TITLE]，并使用同一个火花作为 favicon。
   布局：一个 64px 全宽栏，Midnight 底色，底部 Line 边框，三列网格，水平内边距 18px。品牌保持左对齐，Share show 位于最右侧。低于 700px 时，高度减至 56px，隐藏中间标题和键盘提示，保留品牌和一个带文字的 Share 按钮；不要折叠成仅图标的控件。
   动效：Edited 徽章以 120ms 交叉淡入淡出。Share show 有 120ms 的背景和边框颜色悬停过渡，并带有可见的 2px Ink 聚焦环。
2. **外壳库与颜色停靠栏** — 标题：'Shell library'，辅助文本为 'Pick a shell, then add it at the playhead.'。提供五个可选行：Peony — 'Even radial bloom · 84 sparks'；Ring — 'Clean halo with an inner echo · 68 sparks'；Willow — 'Long falling golden trails · 64 sparks'；Comet — 'Five staggered mini-blooms · 45 sparks'；Crackle — 'Flickering stars with tiny pops · 60 sparks'。每行有一个代码绘制的缩略图、名称和简短描述。下方，'Burst color' 包含六个带标签的色块：Solar #FFCA6B、Coral #FF6F91、Lagoon #64D9FF、Violet #9D8CFF、Mint #75E6B2、Pearl #F4F6FC。一个全宽的 'Add at playhead' 按钮使用 Plus 图标。页脚注释：'Select an event to move its burst on the canvas.'。在底部不显眼地包含可选的 [CREDIT] 链接。
   布局：在桌面端，这个 220px 宽的 Panel 列位于最左侧，横跨整个工作区高度，带有右侧和底部 Line 边框、16px 内边距，外壳行垂直堆叠。选中的外壳行使用 Raised 填充和 2px Violet 左侧标线。色块形成 3×2 网格，工具提示中显示可见的颜色名称，并提供无障碍标签。在移动端，将此区块放在时间线之后，作为 176px 高的水平外壳轨道；将颜色停靠栏和 Add 按钮保留在第二行，隐藏描述，并允许内部水平滚动而不导致页面溢出。
   动效：选择外壳或颜色会立即更新缩略图和未来事件的默认值。点击 Add at playhead 会在当前时间、Track 1、大小 1.0、爆发位置 50% × 34% 处创建并选中一个事件，然后让新的时间线块脉冲一次，持续 160ms。
3. **天际线舞台与传输控件** — 在舞台左上角叠加 [SHOW_TITLE]，使用 Sora 600、24px，以及 '[CITY_NAME] · [SHOW_DURATION] SECONDS'，使用 IBM Plex Mono 11px。右上角状态显示 'MUTED PREVIEW'、'PLAYING'、'PAUSED' 或 'READY'。用深色 #050713 到 #111A33 的天空、微弱星光、两层大气薄雾、约 72% 高度处的原创深色天际线以及下方的水带填充场景。每个外壳从城市下边缘发射到其归一化的爆发坐标。Peony 将粒子均匀分布在一个类球形的 2D 绽放周围；Ring 使用清晰的外晕加上一个较小的延迟环；Willow 使用较慢的金色粒子，带有强烈的向下拖尾；Comet 以 90ms 的偏移产生五个小绽放；Crackle 让粒子在生命结束时闪烁白光，并同步产生微小的爆裂声。点击画布会移动选中事件的爆发位置，更新其 x/y 字段，并显示一个精细的十字准星标记。传输控件包括带声音播放、暂停、重新开始、声音开/关、循环，以及一个由真实时长得出的实时 '00:00.0 / 00:24.0' 时间码。只要焦点不在输入字段中，空格键就切换播放。
   布局：在桌面端，舞台占据第一个工作区行的中间列，是主导视觉元素，周围没有卡片间隙。画布填满所有可用空间；标题和状态位于安全的半透明渐变区域中，而不是单独的卡片。一个 64px 的传输栏沿其底部放置，背景为 rgba(8,11,20,0.88)，带有顶部 Line 边框。在 1440×900 下，页头下方的整体工作区高度为 836px，使用 220px / minmax(0,1fr) / 280px 的列网格和 minmax(360px,1fr) / 220px 的行网格；库横跨两行，时间线横跨中间和右侧列，舞台保持至少 360px 高。在移动端，将舞台放在最前面，画布 330px，传输栏 64px；使用 20px 的节目标题，必要时使用两行控件布局，并保持每个传输按钮至少 44px 高。
   动效：桌面端设备像素比上限为 1.75，移动端为 1.5，桌面端最多 1400 个活动粒子，移动端最多 650 个。如果平均帧率低于 45fps，则减少每个外壳的粒子数，同时保留事件时序。暂停会冻结模拟时间，重新开始会清除粒子并跳转到零，循环会重新开始而不重新加载页面。绝不自动开始有声播放；如果 Web Audio 不可用，保留视觉播放并显示 'Sound is not available in this browser.'。
4. **选中外壳检查器** — 标题：'Shell settings'。选中事件时，显示其外壳类型和彩色预览，然后是五个紧凑的类型按钮、同样的六个命名色块、Track 选择（选项为 Track 1 / Track 2 / Track 3）、时间（秒，从 0 到 [SHOW_DURATION]，步长 0.1）、爆发大小（从 0.7 到 1.4，步长 0.1），以及水平位置（从 8% 到 92%）和垂直位置（从 16% 到 62%），作为成对的滑块和数字控件。底部操作是 Duplicate（带 Copy 图标）和 Delete（带 Trash2 图标）。没有选中时，显示 'Select a shell on the timeline to edit it.'，并显示当前下一个事件的外壳和颜色，而不是空面板。
   布局：一个 280px 的 Panel 列位于舞台右侧，带有左侧 Line 边框和 16px 内边距。使用 12px 字段组、11px 大写等宽标签、36px 输入框，底部操作分为两个等宽列。低于 1100px 时，隐藏常驻右列，并在选中事件或按下 'Edit shell' 按钮时，以模态底部抽屉的形式打开同一个检查器；该抽屉有一个可见的关闭按钮、最大高度 72svh、内部滚动、焦点陷阱和变暗的背景。在移动端，除非用户明确打开它，否则不得覆盖舞台。
   动效：检查器编辑会立即更新选中的时间线事件及其下一次渲染的预览。数字字段在更改时提交并限制在其范围内；Delete 会直接删除而不确认，但提供五秒的 Undo 提示，而 Duplicate 会在同一轨道上 0.5 秒后插入一个副本，并限制在节目时长内。
5. **三轨节目时间线** — 标题行：'Show timeline'、实时事件计数（默认显示 '10 shells'）、'Snap 0.1s'，以及辅助文本 'Drag to retime · Arrow keys to nudge'。使用三个固定轨道，标记为 Track 1、Track 2 和 Track 3。将起始事件时间存储为 [SHOW_DURATION] 的分数；对于 24 秒的默认值，渲染 Track 1：1.0s Comet Solar 在 50% × 42%，6.0s Peony Coral 在 28% × 36%，14.0s Ring Lagoon 在 70% × 32%，20.0s Peony Solar 在 50% × 28%；Track 2：3.0s Peony Violet 在 72% × 38%，10.0s Willow Solar 在 42% × 30%，17.0s Crackle Mint 在 62% × 36%，21.5s Peony Coral 在 34% × 30%；Track 3：8.0s Ring Lagoon 在 55% × 40%，21.0s Willow Solar 在 78% × 26%。每个块显示其时间、外壳名称和颜色，并带有 Violet 选中轮廓。点击标尺会跳转；点击块会选中它并打开其检查器。水平拖动可重新定时，垂直拖动可更改轨道。左/右箭头微调 0.1s，Shift+箭头微调 1s，上/下更改轨道，Delete 删除聚焦的事件。
   布局：在桌面端，时间线占据第二行，横跨中间和右侧列。一个 44px 的标题位于 76px 宽的固定轨道标签栏和可滚动的标尺/轨道区域上方。对于默认时长，标尺刻度每 0.5 秒出现一次，每 2 秒有编号的主刻度；对于其他时长，选择同样清晰易读的间隔。轨道行等高，带有微妙的水平分隔线，事件块宽 76px，除非空间需要更窄的最小值 46px。播放头是一条 2px 的 Violet 线，带有一个小三角形手柄。在移动端，时间线跟随舞台，高度 210px；保持标尺和三个轨道可一起内部滚动，使用 58px 的标签栏，并提供单指事件拖动以及空白标尺区域上的原生水平滚动。
   动效：将事件时间限制在零到时长之间，轨道限制在一到三之间，吸附到 0.1 秒，除非按住 Alt。跳转时从种子重建精确的粒子状态，而不是重放累积的挂钟帧。播放期间，仅当播放头离开其可见区域时，标尺才自动滚动；当用户拖动时，绝不抢占滚动。
6. **分享对话框与反馈** — 点击 Share show 会打开一个标题为 'Share this show' 的对话框，正文为 'This link contains the timeline, shell settings, and burst positions. No account or upload needed.'。包含一个只读的完整 URL 字段和一个主按钮 Copy link。共享载荷版本为 1，包含演出标题、城市、时长以及所有事件设置；它不需要服务器，也不包含分析统计。复制成功后，按钮会在两秒内变为 'Link copied' 并显示一个对勾图标。无效或过大的哈希数据会加载未改动的初始演出，并显示 'That show link could not be read. The starter show is still here.'。Undo、声音回退和剪贴板回退使用同一套 toast 系统。
   布局：在桌面端，将一个最大宽度 480px 的 Raised 对话框居中，内边距 20px，Line 边框，6px 圆角，带一个关闭 X 按钮，背景为深色半透明遮罩。在移动端使用底部抽屉，内边距 16px，并适配安全区域内边距。为其设置 role=dialog、aria-modal=true、可访问标题、焦点锁定、Escape 关闭，并将焦点返回至 Share show。Toast 在桌面端位于底部居中、传输控件上方，在移动端位于安全区域内边距上方，且不遮挡时间线控件。
   动效：使用 history.replaceState 更新哈希，在可用时通过 Clipboard API 复制，并提供基于选区的本地回退方案。对话框以 140ms 的时长淡入淡出并伴随 4px 垂直位移；减少动效模式下则立即显示。重新加载时保留共享的演出，并且在普通播放过程中绝不清除有效的哈希。

## 资源

- 图标：使用本地打包的 lucide-react 图标，包括 Play、Pause、RotateCcw、Volume2、VolumeX、Repeat2、Share2、Plus、Copy、Trash2、X、Check、MousePointer2 和 Undo2。以 inline SVG/Canvas 几何图形绘制原始的四射线品牌火花和贝壳型微缩图。不要导入第三方 logo 或独特的图标作品。
- 字体：通过 @fontsource/sora（OFL-1.1）自托管 Sora 字重 500、600 和 700；仅通过该包导入所需的 woff2 子集，并在 ASSETS.md 中记录包路径、源 URL、作者和许可证。
- 字体：通过 @fontsource/inter（OFL-1.1）自托管 Inter 字重 400、500 和 600；仅通过该包导入所需的 woff2 子集，并在 ASSETS.md 中记录包路径、源 URL、作者和许可证。
- 字体：通过 @fontsource/ibm-plex-mono（OFL-1.1）自托管 IBM Plex Mono 字重 400 和 500；仅通过该包导入所需的 woff2 子集，并在 ASSETS.md 中记录包路径、源 URL、作者和许可证。
- 图像：不使用任何图像文件。天际线、水面、粒子、倒影、贝壳缩略图和品牌火花均以代码生成。创建 ASSETS.md，注明没有外部图像、视频或录制音频资源，并列出字体和图标包的致谢信息。

## 不要做
- 不要添加后端、账户、数据库、API 路由、远程表单、分析、第三方 API 或分享服务；所有编辑、音频、URL 中的持久化以及预览行为都必须以静态客户端文件的方式工作。
- 不要使用 CDN 脚本、CDN 样式、Google Fonts URL、热链接资源、占位图服务、外部音频或远程字体。将依赖项本地打包，自托管 Fontsource 字体，并使用相对资源路径配合 Vite base './'。
- 不要使用图库照片或生成照片、录制的烟花、音乐、视频、第三方插画或可识别的标志。所有场景视觉必须是原创的代码绘制几何图形，所有声音必须在本地用 Web Audio 合成。
- 不要描绘真实城市名称、可识别的地标、商业烟花品牌、包装、标语、真实人物肖像、动漫或游戏角色、吉祥物或标志性插画。保持 [CITY_NAME] 为虚构。
- 不要复制参考或受限库的源代码，不要添加商业字体，也不要添加物理、动画、音频或状态库；仅使用声明的技术栈和手写的 Canvas 2D 模拟与 Web Audio 合成。
- 不要硬编码在变量变化时会出错的文案、文件名、shell 时间表、时间码或辅助文本。将文案和起始内容保留在 src/content.ts 中，并根据 [SHOW_DURATION] 缩放起始时间和标签。
- 不要创建营销区块、超出简单标题和 favicon 的元数据、Open Graph 标签、JSON-LD、站点地图代码或额外路由。唯一的页面是 index.html；#show= 是演出数据，不是路由器。
- 不要在用户手势之前自动播放可听声音或创建 AudioContext。当音频、剪贴板或哈希解码不可用时不要抛出异常；保留可视化编辑器并提供指定的无障碍回退方案。
- 不要允许无限制的粒子、设备像素比、事件计数或格式错误的哈希值。执行规定的上限和验证，保持 dist/ 低于 20 MB，不生成 source map，不要将 src/ 复制到 dist/。
- 不要发布仅限桌面的编辑器、仅图标无标签的控件、仅靠颜色的外壳标签、键盘陷阱、水平页面溢出或仅画布定位。支持 1440×900 和 390×844、44px 触摸目标、键盘事件编辑、可见焦点和减少动态效果，且控制台零错误。
- 除通过可选的 [CREDIT] 链接外，不要在渲染的站点中提及 VibeFather，也不要使用 VibeFather 或任何真实品牌作为变量默认值。

---
— Prompt by VibeFather · https://vibefather.ai/t/fireworks-show-maker · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
