> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 带歌词的音乐流媒体应用

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个面向 [AUDIENCE] 的原创多视图音乐流媒体 Web 应用，配有 [MUSIC_MOOD] 编辑精选目录和产品承诺“[TAGLINE]”。打开时直接进入实际的资料库（Library），而不是营销页面。包含精选播放列表、编辑精选示例榜单、带旋转黑胶和时间同步歌词的正在播放视图、本地歌曲评论和点赞、可用的队列抽屉，以及跨视图持续存在的迷你播放器。重点呈现虚构播放列表 [FEATURED_PLAYLIST]、六位虚构艺术家、原创歌词预览、六张协调的抽象封面，以及六段原创的本地生成音频预览。

- 受众：产品内的听众是 [AUDIENCE]。该模板本身适合音乐创作者、产品设计师、开发者和独立开发者，他们需要一个精致的静态原型，具备真实音频、同步歌词、社交互动和持续播放状态。
- 目标：让访客发现一首曲目、播放并拖动进度收听其原创预览、跟随当前高亮的歌词行、阅读并添加本地评论、管理即将播放的队列，并在目录视图之间切换而不丢失当前歌曲。每个可见控件都必须有真实的客户端结果，每首曲目都必须有自己连贯的封面、音频、歌词和评论。
- 语气：亲密、编辑感、精确，且带着安静的黑夜气息。歌词和听众评论用原创英文片段书写，意象具体、情感克制。功能标签保持直接，并披露示例数据和仅本地行为，但不把界面变成免责声明墙。避免音乐平台陈词滥调、虚假热度宣称和空洞的溢美之词。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL）、@fontsource-variable/dm-sans（OFL）、@fontsource/ibm-plex-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 Vite 5、React 18、TypeScript 5、Tailwind CSS 3.4、PostCSS、Autoprefixer、Motion 和 Lucide React。package.json 脚本为 dev='vite'、audio='node scripts/generate-audio.mjs'、build='npm run audio && tsc -b && vite build'、preview='vite preview'。不要添加路由、状态管理、音频、组件或动画依赖。
  - 在 vite.config.ts 中设置 base='./'、build.outDir='dist'、build.sourcemap=false、assetsInlineLimit=0。生成一个压缩的 index.html 应用，使用相对资源路径，且不将 src/ 复制到 dist/。为 Tailwind 配置设计颜色（Design colors）、字体族、表格数字（tabular numerals）、自定义范围样式、黑胶关键帧（vinyl keyframes）、歌词滚动条、焦点环和减少动态效果覆盖。
  - 实现一个小型哈希路由，不引入其他依赖。仅支持 '#/'、'#/charts' 和 '#/now-playing'；不带哈希的 index.html 显示 Library，未知哈希回退到 '#/'，浏览器前进和后退正常工作，共享的音频元素和播放器上下文在导航时永不重建。
  - 将变量值、派生品牌文案、播放列表、六条曲目记录、艺术家、封面和音频路径、合成参数、每首曲目六行定时歌词、评论、图表排名和示例播放次数、搜索关键词、替代文本和 UI 标签保存在带类型的 src/content.ts 中。为提供的变量重写每个依赖值和所有默认专有名词；不要留下不同音乐方向的深夜城市文案。
  - 仅使用 Node 内置模块创建 scripts/generate-audio.mjs。对于每首曲目，从曲目数据中读取其 BPM、根音、音阶、六音动机和种子，并合成一个原创的 18 秒 22050Hz 单声道 16 位 PCM WAV：带有指数衰减的柔和正弦/三角电钢琴音符、克制的低音底鼓、滤波高频踩镲滴答声和极低种子噪声。应用 40ms 边缘淡入淡出、短接缝交叉淡化、将峰值归一化到 0.78 以下、写入规范 WAV 头，并使重复运行字节完全相同。生成 afterglow-avenue.wav、peach-static.wav、blue-hour-radio.wav、velvet-satellites.wav、glass-garden.wav 和 midnight-orchard.wav 到 public/audio/；它们合计必须保持在 5 MB 以下。
  - 使用一个 React 播放器上下文和一个隐藏的 HTMLAudioElement。曲目状态包括 currentTrackId、有序队列 ID、isPlaying、currentTime、duration、volume、muted、lyricsEnabled 和 queueOpen。音频在加载或路由变化时从不自动播放。播放、暂停、上一首、下一首、曲目选择、跳转、音量、静音和歌词行跳转控制实际音频；播放结束推进到队列中的下一首曲目并在末尾干净停止。
  - 从音频 currentTime 和每行的起始秒数派生活动歌词行，在最后一行处钳制。播放时使用 requestAnimationFrame 更新进度，否则使用音频 timeupdate 事件。仅在未请求减少动态效果时，将活动行居中于歌词视口并平滑滚动；点击一行跳转到其精确起始位置且不滚动页面。
  - 使用一个版本化的 localStorage 命名空间，派生自小写连字符 BRAND slug，用于喜欢的评论 ID、本地发布的评论、关注的播放列表 ID、队列顺序、移除的队列 ID 和最后选择的曲目。根据内容数据验证存储的 ID，处理不可用存储而不报错，并在重新加载时恢复为暂停在 0:00 而不是意外播放声音。提供一个确认的 Reset local demo 操作。
  - 仅将 Motion 用于短路由、抽屉、toast、评论和队列行过渡。从真实播放状态驱动黑胶旋转和歌词激活，在音频暂停或文档隐藏时暂停动画，并使用 useReducedMotion 加 CSS 媒体查询将旋转和平滑歌词移动替换为静态状态。
  - 将队列和移动导航实现为可访问的抽屉或对话框，具有可见的 Close 控件、Escape 和遮罩关闭、焦点陷阱、焦点返回和 aria-modal 语义。为每个图标按钮提供可访问名称，对切换使用 aria-pressed，保持 44px 触摸目标，并通过克制的 aria-live 区域宣布曲目、评论、喜欢、队列和播放变化。
  - 通过 Fontsource 本地导入 Fraunces Variable、DM Sans Variable 和 IBM Plex Mono 400/500。在首次构建前将六张提供的封面图像下载到其精确的 public/images/ 路径；构建本身从不获取远程资源。编写 ASSETS.md，包含每个封面、生成的音频文件、字体、图标包、来源、作者和许可证。

## 变量
- [BRAND] — 虚构的聆听服务名称（默认：“Hush & Hue”）。用于原始字标、文档标题、播放列表标签、存储命名空间和页脚；为本地键派生一个小写 slug。
- [MUSIC_MOOD] — 编辑音乐方向（默认：“深夜电子灵魂乐”）。重写艺术家、歌曲标题、原创歌词、播放列表描述、评论和音频主题设置，以适配此方向。
- [AUDIENCE] — 主要听众群体（默认：“逐字读歌词的夜猫子”）。为这些听众调整曲库推荐和辅助文案，但不要对真实用户做出任何声明。
- [TAGLINE] — 聆听服务标语（默认：“Every lyric, right on time.”）。一句简洁的原创承诺，用于精选播放列表和文档上下文。
- [FEATURED_PLAYLIST] — 精选播放列表标题（默认：“Neon After Rain”）。一个虚构的播放列表名称，用于驱动主推合集、封面拼贴、介绍和队列操作。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/music-streaming-app-with-lyrics（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 夜梅（Night Plum）`#17121D` — 整体应用画布、最深黑胶背景，以及杏色按钮上的深色文字
- 面板梅（Panel Plum）`#241B2C` — 侧边栏、播放列表表面、榜单面板、迷你播放器和评论输入区
- 浮起梅（Raised Plum）`#30233A` — 悬停行、激活导航、抽屉分区和歌词行背景
- 暖象牙（Warm Ivory）`#FFF4E8` — 主标题、激活歌词、歌曲标题和高对比度图标
- 柔丁香（Muted Lilac）`#B8A9BC` — 次要文案、非激活歌词、元数据和非激活控件
- 杏色（Apricot）`#FFB08A` — 播放控件、激活歌词强调、进度填充、榜单高亮和焦点环
- 尘珊瑚（Dusty Coral）`#D97971` — 已喜欢状态、小型编辑标记和次要封面艺术呼应
- 柔薄荷（Soft Mint）`#A7C7B5` — 已保存状态、成功的本地操作和队列状态详情
- 梅线（Plum Line）`#493A51` — 一像素边框、表格分隔线、输入框轮廓和进度轨道

### 字体排印（Typography）
- 精选播放列表、页面标题、激活歌词行和编辑精选播放列表标题：Fraunces Variable（OFL），字重 500/600/700
- 导航、曲目行、评论、按钮、表单和通用正文：DM Sans Variable（OFL），字重 400/500/600/700
- 时间戳、时长、榜单排名、示例播放次数和紧凑标签：IBM Plex Mono（OFL），字重 400/500

### 布局与动效（Layout & motion）
- 间距：使用 4px 基础刻度。桌面外壳有 216px 固定侧边栏、minmax(0,1fr) 主列、32px 主边距和 88px 固定迷你播放器。主内容在其可用列内最大宽度为 1320px。页面头部使用 32px 顶部和 24px 底部间距；播放列表卡片使用 18px 内边距，曲目行 12px。正在播放（Now Playing）使用 32px 舞台内边距和 48px 列间距。移动端使用 16px 边距、72px 迷你播放器位于 62px 底部导航之上、150px 组合底部留白，以及至少 44px 的指针目标。
- 圆角：精选播放列表和正在播放舞台使用 24px，播放列表卡片和队列抽屉使用 18px，标准面板和封面框架使用 14px，按钮和输入框使用 10px，仅紧凑芯片、图标按钮和黑胶使用全圆角。使用一像素梅线（Plum Line）边框，并仅在抽屉和正在播放舞台上使用克制的 0 20px 60px rgba(10,6,14,0.32) 阴影。
- 动效：路由切换时，主内容在 180ms 内淡出并向上稳定 6px，而侧边栏、迷你播放器、底部导航和当前音频保持不变。将焦点移动到新页面标题，而不重置播放。
- 动效：黑胶仅在音频播放且允许动效时每 3.2 秒旋转一次。封面标签随唱片旋转；暂停时冻结当前角度，而不是弹回。
- 动效：激活歌词在 160ms 内改变颜色、不透明度和 3px 杏色侧边线。歌词视口在 240ms 内将激活行滚动到其中心；跳转或切换曲目在任何效果之前立即更新。
- 动效：播放、喜欢、关注、加入队列和音量控件提供 120–180ms 的颜色或缩放反馈，不产生布局偏移。新的本地评论以 160ms 淡入，评论点赞数每位访客更新一次。
- 动效：队列抽屉在 220ms 内从右侧进入，并带有渐隐遮罩。重新排序的行使用 180ms 的 Motion 布局过渡；移除的行折叠，而不延迟底层队列状态。
- 动效：Toast 保留 1800ms，且绝不覆盖迷你播放器。无自动播放、与实际曲目无关的音频可视化、弹跳音符、持续环境粒子或滚动劫持。
- 动效：在 prefers-reduced-motion: reduce 下，停止黑胶旋转，移除路由位移、平滑歌词滚动、抽屉位移和行插值，同时保留即时的激活行、播放、队列和评论反馈。
- 图像：使用恰好六张本地生成的方形专辑封面插图，采用一种连贯的混合媒介风格：层叠半透明纸张、干笔水粉、深梅底色、杏色和尘珊瑚形态、克制的丁香和粉蓝点缀、柔和的左上编辑光、细腻的模拟颗粒，以及大胆的全出血抽象构图。无文字、字母、数字、标志、水印、人物、面孔、手、可识别角色、品牌物品、著名地标或现有专辑封面布局。精选播放列表将四张封面组合成大型二乘二拼贴；当前封面填充代码绘制黑胶的中心标签，带有细密同心纹路。使用原创内联 SVG 作为服务的开口椭圆与种子标志和 favicon，以及通用 Lucide 图标作为控件。听众头像是小型原创双色几何 SVG 半身像，绝不是真实肖像或仅首字母的身份占位符。

## 页面与区块
### 音乐库与播放列表（`#/`）
1. **共享应用外壳、搜索与迷你播放器** — 将文档标题设为 '[BRAND] · [TAGLINE]'。原始的开口椭圆与种子标志位于 [BRAND] 旁边。桌面端侧边栏链接为 Library '#/'、Charts '#/charts' 和 Now Playing '#/now-playing'，其后是播放列表快捷方式和一个小标签 'Local demo · original previews'。主顶部栏包含全局搜索和一个带有当前即将播放数量的 Queue 按钮。搜索以不区分大小写的方式匹配歌曲标题、虚构艺人和播放列表名称，最多显示六条分组结果，选择歌曲会加载它并打开 Now Playing；清除搜索则恢复当前视图。移动端页头保留品牌、Search 和 Queue，而底部导航提供 Library、Charts 和 Now Playing。共享迷你播放器始终显示当前封面、标题、艺人、上一首、播放/暂停、下一首、一个键盘可访问的进度拖动条、已播放时间和 0:18 时长、桌面端的音量/静音，以及 Queue。在移动端，它显示封面、两行曲目标识、播放/暂停、Expand Now Playing 和 Queue，进度拖动条作为顶部一条细的可交互边缘。音频和进度在所有三个哈希路由间保持不变。侧边栏页脚包含 Reset local demo 和可选的 [CREDIT] 链接。
   布局：在 1440px 下使用设计中所描述的固定 216px 侧边栏和 88px 底部播放器，主内容需留出内边距，使两者都不会遮挡它。搜索为 minmax(220px,460px)。桌面迷你播放器使用三列网格：minmax(220px,1fr) 曲目标识、minmax(320px,680px) 传输控件与进度拖动条、minmax(180px,1fr) 音量与队列。低于 760px 时，用紧凑页头和固定底部导航替换侧边栏，将迷你播放器直接堆叠在其上方，并遵循安全区域内边距。
   动效：仅主视图使用路由过渡。迷你播放器在首次绘制时即完全组合完成，且从不卸载。搜索结果、移动端导航和播放器控件使用简短的共享过渡。
2. **精选播放列表视觉锚点** — 眉题显示为 '[MUSIC_MOOD] · A [BRAND] ORIGINAL MIX'。H1 为 [FEATURED_PLAYLIST]。辅助文案为 '[TAGLINE] Six original lyric previews for [AUDIENCE], pressed into one late-night set.' 当 MUSIC_MOOD 变化时调整 'late-night set'。显示 '6 tracks · 18-second original previews · local audio'。主 Apricot 按钮 'Play playlist' 加载 Afterglow Avenue，按目录顺序将全部六首曲目加入队列，并且仅从该明确手势开始播放。次要按钮 'Add all to queue' 保留当前曲目并仅追加缺失的 ID。Heart 'Save playlist' 切换会持久化并变为 'Saved'。大型视觉是由 afterglow-avenue.webp、blue-hour-radio.webp、velvet-satellites.webp 和 midnight-orchard.webp 组成的二乘二拼贴，艺术图中不烘焙任何文字。
   布局：使用 12 列 Panel Plum 主视觉区，文案占五列，方形拼贴占七列，桌面端高度约 400px。文案有 36px 内边距，H1 使用 Fraunces 600，字号为 clamp(42px,4.5vw,68px)。在移动端，将文案堆叠在全宽 240px 拼贴上方，H1 保持 40px，并将操作按钮放在两个全宽行中，以便前 844px 仍能展示艺术图和主播放控件。
   动效：拼贴在 320ms 内以不透明度 0 到 1 和缩放 1.015 到 1 进入一次。播放和保存立即更新；减少动效时移除缩放进入效果。
3. **精选播放列表集合** — 标题：'Made for [AUDIENCE]'。辅助文案：'Three ways into the same six-song catalog.' 仅使用现有封面渲染三张播放列表卡片：[FEATURED_PLAYLIST] — 'City lights, soft synths, and lines that stay after the preview ends'，使用四封面拼贴和全部六首曲目；'Peach on the Windowsill' — 'Warm static and brighter edges for a slower reset'，使用 peach-static.webp 和 glass-garden.webp，曲目为 Peach Static、Glass Garden 和 Afterglow Avenue；'Side B Satellites' — 'A darker orbit for readers who like the space between lines'，使用 velvet-satellites.webp 和 blue-hour-radio.webp，曲目为 Velvet Satellites、Blue Hour Radio 和 Midnight Orchard。每张卡片都有 Play、Save 和 Add to queue 操作，行为与精选集合相同且真实。不要创建空的播放列表路由。
   布局：使用三张等宽桌面卡片，间距 18px，方形封面组合位于 20px 文案上方，并配有紧凑操作行。在平板端使用两列，第三张占满全宽；在 390px 下使用一列，并保留完整标题不截断。卡片是编辑性表面，而非带有无关指标的通用 bento 盒子。
   动效：卡片悬停时最多上浮 2px。播放、保存和队列按钮使用标准控件反馈；无自动轮播。
4. **完整六曲目录** — 标题：'Tracks worth reading closely'。将时长列标记为 'PREVIEW'。按顺序渲染以下精确默认曲目，每首都有匹配封面、虚构艺人、0:18 时长、Play、Add to queue 和 Open lyrics 操作：01 Afterglow Avenue by Mira & The Paper Moons；02 Peach Static by Theo June；03 Blue Hour Radio by Nia Sola；04 Velvet Satellites by Aster Park；05 Glass Garden by Elio Wren；06 Midnight Orchard by Cass & Clover。Play 选择匹配的本地 WAV，将其设为当前曲目，在其后插入剩余目录曲目且不重复，并从用户手势开始播放。Add to queue 仅在不存在时追加，并通过 toast 确认。Open lyrics 选择该曲目并在其当前存储的零位置暂停，然后导航到 Now Playing。每一行都从内容数据中暴露自己的评论数，而非一个共享计数。
   布局：使用一个 Panel Plum 表格表面，行间以细线分隔，而非六张浮动卡片。列为 36px 排名、56px 封面、minmax(180px,1fr) 标题与艺人、110px 评论、64px 时长和 152px 操作。在移动端使用两行卡片：封面/标题/艺人/时长位于全宽 Play、Queue 和 Lyrics 操作上方；无水平表格滚动或裁剪控件。
   动效：当前曲目行具有持久的 Apricot 左侧规则和仅由 isPlaying 驱动的三小节小型均衡器。行在选择时短暂交叉淡入淡出；减少动效时显示静态扬声器图标。
5. **原创目录与本地数据说明** — 以一条紧凑的编辑性说明结束，标题为 'Made to be listened to, not just looked at'。文案：'Every artist, lyric, comment, cover, chart position, and play count in [BRAND] is invented sample content. Six original procedural previews are bundled with this demo; your likes, comments, saves, and queue changes stay on this device.' 包含 'Read the lyrics' 链接到 Now Playing，以及 'Reset local demo' 打开与侧边栏相同的确认。不要添加定价、账户注册、应用商店徽章、社会证明或营销功能区块。
   布局：使用 Raised Plum 水平说明，24px 内边距，文本在左、操作在右，移动端堆叠。为迷你播放器和移动端导航保留足够的底部间距。
   动效：除链接下划线和对话框过渡外为静态。

### 编辑精选榜单（`#/charts`）
1. **榜单介绍与前三名封面** — 眉题：'[BRAND] LISTENER NOTES'。H1：'Six songs. One very subjective chart.' 文案：'An editorial sample ranking for [MUSIC_MOOD], made for this fictional catalog. Play counts are illustrative, not live.' 将前三名展示为大型可链接封面组合：01 Afterglow Avenue，48,206 次示例播放；02 Blue Hour Radio，41,882；03 Peach Static，37,419。选择封面或其 Play 操作会加载该曲目，按队列顺序保留其他榜单条目，并打开 Now Playing。包含一个低调的 'Play chart' 按钮，从第一名开始并排队全部六首。
   布局：标题占据左侧三分之二，Play chart 位于右下方。下方，第一名跨越六列两行，第二、三名各占三列；封面保持突出，排名使用 IBM Plex Mono。移动端使用一个横向的前三名列表，112px 封面卡片位于其自身的 snap 容器内，无页面级横向溢出。
   动效：封面悬停时缩放至 1.015，第一名的 Play 图标交叉淡入淡出。无动画计数或模拟实时播放。
2. **完整榜单表格与可用的排名操作** — 在单个表格中渲染全部六个排名：01 Afterglow Avenue，Mira & The Paper Moons，48,206 次示例播放，变动 '—'；02 Blue Hour Radio，Nia Sola，41,882，'+2'；03 Peach Static，Theo June，37,419，'—'；04 Velvet Satellites，Aster Park，29,764，'+1'；05 Glass Garden，Elio Wren，24,108，'-2'；06 Midnight Orchard，Cass & Clover，19,530，'NEW'。将变动列标记为 'EDITORIAL NOTE'，以免这些被呈现为真实的基于时间的变化。每一行都有 Play、Add to queue 和 Lyrics 操作。一个小信息按钮打开无障碍说明：'Ranks, movement labels, and play counts are fixed sample data. Playing a preview does not change the editorial chart.'
   布局：桌面端列为 56px 排名、64px 封面、minmax(200px,1fr) 歌曲、130px 示例播放、130px 编辑注记、72px 预览和 144px 操作。使用等宽数字和细线行。低于 700px 时，将表格替换为堆叠行，显示排名、封面、歌曲、示例播放和三个带标签的操作；编辑注记换行而非隐藏。
   动效：当前曲目获得 Apricot 规则和真实播放指示器。所有操作立即更新；无实时滚动条或自动行重排。
3. **队列预览与收听指南** — 一个双面板收尾区域包含 'Up next on this device' 和 'How to listen'。队列面板显示来自实际共享队列状态的前三个即将播放的曲目标题，带有 Open queue 和 Clear upcoming 操作；空状态显示 'Your queue is open. Add a track from the chart.' 指南列出三个简短步骤：'Press Play to unlock audio'、'Open Lyrics to follow or seek a line'、'Use Queue to shape what plays next'。一个次要的 'Reset local demo' 链接使用确认，并仅清除本地访客状态，而非虚构目录。
   布局：使用 7/5 桌面网格，队列列表在左，指南在右，24px 面板内边距，移动端堆叠。队列抽屉是共享的，并在 Now Playing 中描述，因此 Open queue 在此行为一致。
   动效：队列更新使用共享行过渡。空状态和填充状态交叉淡入淡出，不延迟状态变化。

### 正在播放：同步歌词与评论（`#/now-playing`）
1. **黑胶舞台与精确播放控制** — 未选择曲目时默认使用 Afterglow Avenue。显示面包屑 Library / Now Playing、眉题 'NOW PLAYING · ORIGINAL 18-SECOND PREVIEW'、当前 H1 与虚构艺术家，以及 Lyrics 开/关切换。左侧视觉为代码绘制的黑胶，带同心纹路、Apricot 中心环，并将当前方形封面裁切进圆形中心标签。右侧舞台包含播放控制 Previous、Play/Pause、Next；已播与总时长；进度拖动；音量；Add to queue；以及 Open queue。当 currentTime 超过两秒时，Previous 重新开始当前预览，否则选择队列中的前一项。Next 遵循实际队列顺序。切换曲目时，封面、音频、六行歌词、评论和文档副标题一起切换，且不重新挂载共享迷你播放器。包含 'Original procedural audio · no external stream'，且绝不在用户手势之前开始声音。
   布局：使用 24px 圆角的 Night Plum（夜梅色）舞台，桌面端按 5/7 分栏：黑胶在左，歌词与控制区在右。黑胶为 min(34vw,430px) 正方形，带柔和 Plum（梅色）阴影。移动端将 180px 黑胶置于歌曲标识与控制区上方，播放控制按钮保持单行居中，进度拖动下移，全宽音量放入可展开的 Sound 控件内。固定迷你播放器保持可见，但在 390px 下不重复第二条完整播放控制行。
   动效：黑胶遵循 Design 中仅播放时旋转的规则。曲目切换时封面与标题在 180ms 内交叉淡入淡出，先暂停，将 currentTime 重置为零，并保持暂停，直到访客按下 Play，除非该切换本身是 Play 操作。
2. **时间同步滚动歌词预览** — 每首曲目恰好有六行原创歌词，起始时间为 0、3、6、9、12 和 15 秒，结束于 18 秒。Afterglow Avenue：'Streetlights stitch the avenue'；'Your shadow fits between the blue'；'We trade the noise for something true'；'Let every window find its hue'；'Stay till the skyline turns brand-new'；'Meet me where the morning breaks through'。Peach Static：'Peach on the windowsill'；'A soft electric thrill'；'Every wire is standing still'；'Then the room begins to glow'；'Let the quiet current flow'；'Meet me where the warm signals go'。Blue Hour Radio：'Blue on the radio'；'Half a thought and miles to go'；'The harbor hums beneath the glow'；'Keep the dial where the night is slow'；'Every little frequency I know'；'Leads me back through streets of indigo'。Velvet Satellites：'Velvet on the satellite'；'Paper planets circle light'；'We give the dark a shape tonight'；'Silver threads across the floor'；'One small signal, nothing more'；'Still it carries what we are reaching for'。Glass Garden：'Glass around the garden wall'；'Morning makes the petals tall'；'Every color learns to call'；'Through the leaves the daylight bends'；'All the lines we thought were ends'；'Open into rooms that never end'。Midnight Orchard：'Midnight in the orchard rows'；'Citrus on the cooling air'；'Lanterns mark the branches bare'；'We let the heavy daylight go'；'Follow where the slow roots grow'；'Find a little sweetness everywhere'。将每行渲染为带起始时间的真实按钮；点击会将实际音频跳转到该行。活动行跟随 currentTime，上一行和下一行保持可读，Lyrics 关闭时用当前封面、播放列表描述和 Lyrics on 按钮替换列表，而不是留白。对于替代值，用符合改写曲目的新原创六行预览替换全部 36 行，并使用相同时间戳。
   布局：桌面端歌词视口高 330px，六行位于可垂直滚动、无遮罩的列表中，上下各有 72px 居中空间。活动文本为 Fraunces 600、36px，非活动行为 28px 的 Muted Lilac（淡紫），全部左对齐并舒适换行。移动端使用 300px 视口，活动行 29px、非活动行 23px，时间戳 11px，且无水平裁切。歌词关闭时，替换面板保持相同高度，以免控制区跳动。
   动效：使用与 currentTime 绑定的共享活动行与居中行为。不要使用独立于音频的 CSS 关键帧计时、伪造的卡拉 OK 逐词高亮，或播放结束后的自动滚动。
3. **带本地点赞与作曲器的歌曲评论** — 舞台下方显示 'Listener notes' 和当前曲目的评论数。默认 Afterglow Avenue 评论为：NicoPapers，'The second line lands exactly with the soft drum. Tiny detail, big feeling.'，128 个示例点赞；MaraListens，'This preview leaves enough room for the words. I opened the queue before it reached the last line.'，86；JuniperAudio，'Blue Hour Radio next makes a perfect two-song night drive.'，54；SleeveNotes，'That final avenue image deserves the whole skyline.'，31。在 content.ts 中为其他每首曲目提供两条独特的原创评论，使用虚构用户名和类似示例的计数。每条评论都有几何 SVG 半身像、用户名、正文和 Heart 点赞按钮；点赞切换一次，显示计数增减一，并持久保存。排序控件为 Most liked 和 Original order。作曲器将访客标识为 Guest listener，最多接受 240 个字符并实时计数，并声明 'Your comment is posted only on this device.'。发布后追加一条完全可见、标记为 'Posted on this device' 的评论，允许删除，且绝不发送或模拟回复。空状态和超限状态提供内联提示。不要显示日期、相对时间、在线徽章或伪造的传入评论。
   布局：桌面端使用两栏区域，评论流占八列，粘性作曲器占四列。评论在同一个 Panel Plum（面板梅色）表面上以细线分隔的行共享，而不是嵌套气泡。移动端将作曲器放在可折叠的 'Write a listener note' 展开项中，然后是评论流；所有用户名和长单词换行，点赞控件保持 44px。
   动效：点赞在 140ms 内交叉淡入淡出填充与计数。新评论使用一次 160ms 入场，删除在 160ms 内折叠。排序交叉淡入淡出列表，但不移动作曲器。
4. **队列抽屉与确定性下一首行为** — 共享 Queue 按钮打开右侧抽屉，标题为 'Your queue'，包含当前曲目、Up next 列表和 'Audio plays in this order'。初始当前为 Afterglow Avenue，后续为 Peach Static、Blue Hour Radio、Velvet Satellites、Glass Garden、Midnight Orchard。每个后续行包含封面、标题、艺术家、0:18、ArrowUp、ArrowDown、Remove 和 Play next。重新排序交换实际队列 ID；Remove 仅删除该队列条目；Play next 将项目直接移到当前项之后而不开始播放。选择某行标题会使其成为当前项，并保留其新队列位置且不产生重复。包含带确认的 Clear upcoming 和 Add chart，以按排名顺序恢复任何缺失的榜单曲目。音频结束后选择下一个实际队列项，将其从后续列表中移除，并且仅当先前预览已在播放时才播放；最后一项在 18 秒停止，并提供 Replay。队列更改持久保存，而重新加载会恢复暂停的播放器。空状态提供 Add chart 和 Browse library。
   布局：桌面抽屉为 min(420px,92vw)，全视口高度，Panel Plum（面板梅色），当前曲目固定在顶部，后续列表可滚动。移动端为全宽底部面板，限制为 86dvh，带可见的无拖拽 Close 按钮和安全区内边距。行使用 52px 封面和两行紧凑图标，以便在 390px 下重新排序和删除仍可访问，同时在语义上不覆盖迷你播放器的控件；抽屉位于所有其他 UI 之上。
   动效：使用标准的 220ms 抽屉和 180ms 行布局过渡。队列状态在动画前更改，音频绝不等待行效果，减少动态效果时所有队列更改立即生效。

## 资源（Assets）
- 图片（image）：将 https://media.vibefather.ai/assets/9726b42a-9387-4af5-b970-450a99dff4e6/afterglow-avenue.webp 下载到 public/images/afterglow-avenue.webp。替代文本（Alt）：'Abstract mixed-media avenue lights in apricot and coral on deep plum.' 用于 Afterglow Avenue、精选播放列表拼贴、排行榜、黑胶唱片标签、迷你播放器和播放队列。在 ASSETS.md 中注明来源：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- 图片（image）：将 https://media.vibefather.ai/assets/9726b42a-9387-4af5-b970-450a99dff4e6/peach-static.webp 下载到 public/images/peach-static.webp。替代文本（Alt）：'Abstract peach arcs and soft signal lines in a grainy mixed-media composition.' 用于 Peach Static、Peach on the Windowsill、排行榜、黑胶唱片、迷你播放器和播放队列。在 ASSETS.md 中注明来源：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- 图片（image）：将 https://media.vibefather.ai/assets/9726b42a-9387-4af5-b970-450a99dff4e6/blue-hour-radio.webp 下载到 public/images/blue-hour-radio.webp。替代文本（Alt）：'Abstract powder-blue radio waves and a coral moon on textured plum paper.' 用于 Blue Hour Radio、包含它的两个播放列表拼贴、排行榜、黑胶唱片、迷你播放器和播放队列。在 ASSETS.md 中注明来源：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- 图片（image）：将 https://media.vibefather.ai/assets/9726b42a-9387-4af5-b970-450a99dff4e6/velvet-satellites.webp 下载到 public/images/velvet-satellites.webp。替代文本（Alt）：'Abstract gouache satellite spheres and lilac orbital ribbons on deep plum.' 用于 Velvet Satellites、精选播放列表和 Side B Satellites 播放列表、排行榜、黑胶唱片、迷你播放器和播放队列。在 ASSETS.md 中注明来源：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- 图片（image）：将 https://media.vibefather.ai/assets/9726b42a-9387-4af5-b970-450a99dff4e6/glass-garden.webp 下载到 public/images/glass-garden.webp。替代文本（Alt）：'Abstract translucent botanical shapes with apricot light and powder-blue shadows.' 用于 Glass Garden、Peach on the Windowsill、排行榜、黑胶唱片、迷你播放器和播放队列。在 ASSETS.md 中注明来源：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- 图片（image）：将 https://media.vibefather.ai/assets/9726b42a-9387-4af5-b970-450a99dff4e6/midnight-orchard.webp 下载到 public/images/midnight-orchard.webp。替代文本（Alt）：'Abstract orchard circles and dark branches with coral fruit and lilac grain.' 用于 Midnight Orchard、精选播放列表拼贴、排行榜、黑胶唱片、迷你播放器和播放队列。在 ASSETS.md 中注明来源：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- 图标（icon）：使用经 tree-shaking 处理的 lucide-react（ISC）来实现 Library、ListMusic、Disc3、Search、X、Play、Pause、SkipBack、SkipForward、Volume2、VolumeX、ListPlus、ListVideo、Heart、MessageCircle、ArrowUp、ArrowDown、Trash2、RotateCcw、ChevronRight、Info、Check、Menu、Music2、Send 和 MoreHorizontal。仅用 SVG 绘制原创的开口椭圆加种子品牌标识、favicon、黑胶唱片纹路和几何听众半身像。在 ASSETS.md 中记录 Lucide 的包来源和 ISC 许可证；不使用任何品牌图标。
- 字体（font）：通过 @fontsource-variable/fraunces 和 @fontsource-variable/dm-sans 自托管 Fraunces Variable 和 DM Sans Variable，并通过 @fontsource/ibm-plex-mono 自托管 IBM Plex Mono 400/500（均为 OFL）。仅导入实际使用的本地文件，在 ASSETS.md 中列出生成路径和版权持有人，并且不发起任何 Google Fonts 或其他 CDN 请求。
- 视频（video）：音频资源；无视频。scripts/generate-audio.mjs 会以确定性方式生成 public/audio/afterglow-avenue.wav、peach-static.wav、blue-hour-radio.wav、velvet-satellites.wav、glass-garden.wav 和 midnight-orchard.wav，这些文件是根据每首曲目各自的 BPM、根音、音阶、动机和种子生成的原创 18 秒 22050Hz 单声道 16 位程序化作曲。将生成器和全部六个 WAV 文件打包到本地。在 ASSETS.md 中将它们记录为 'Original procedural audio generated for this template'，以 CC0 1.0 发布，并附上 https://creativecommons.org/publicdomain/zero/1.0/。不使用录音、采样、外部流媒体、可辨识人声，也不模仿现有歌曲。

## 禁止事项
- 不要添加后端、服务器代码、API 路由、身份验证、账户、数据库、WebSocket、分析、外部 API、远程表单、真实多用户评论或流媒体服务。播放、点赞、评论、收藏、搜索和队列行为完全在客户端进行。
- 不要使用任何现有音乐服务的名称、标志、吉祥物、口号、标志性配色、专有图标集、自定义字体、可识别的界面构图、商业外观、源代码或提示词文本。
- 不要使用真实的录音艺人、乐队、听众、用户名、肖像、名人画像、代言、排行榜历史、评论、歌词或播放次数。每位艺人、人物、歌词、评论、指标和播放列表均为虚构且原创。
- 不要捆绑或请求商业歌曲、录音、采样音频、受版权保护的歌词、专辑封面、音乐视频、第三方播放组件、远程流或外部音乐 API。仅使用六个原创程序化 WAV 预览和六个提供的生成封面。
- 不要自动播放音频，不要在路由切换或重新加载时产生意外播放，不要为不同歌曲标题复用同一个音频文件，不要伪造进度条，不要使用独立于实际音频 currentTime 的定时器来动画歌词。
- 不要将排行榜排名、编辑动态、示例播放次数、评论点赞、听众用户名或本地播放呈现为实时活动。绝不要模拟传入的播放、点赞、评论、回复或在线听众。
- 不要在封面艺术中添加可识别的品牌标记、文字或标志、现有专辑封面构图、真实人物面孔、动漫或游戏角色、著名地标或品牌物品。保持所有六张图片为抽象风格，并采用指定的共享混合媒体风格。
- 不要热链接资源，或使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务、CC BY-NC 或 CC BY-SA 媒体。将六张确切的封面下载到其声明的本地路径，并在 ASSETS.md 中列出所有第三方文件和致谢。
- 不要从 CDN 加载脚本、样式、字体、图标、图片或音频。使用固定技术栈，自托管所有 Fontsource 字体，对 Lucide 进行 tree-shaking，并将六个 WAV 文件和生成器保留在项目中。
- 不要使用商业字体、受限的 UI 源代码、购买的模板、未授权的依赖项、仅首字母的听众身份、外部头像服务或真实头像照片。仅使用原创几何 SVG 半身像和允许的许可证。
- 不要将 Library 变成营销落地页、纯排版主视觉、定价漏斗、通用分析仪表板或静态音乐卡片画廊。首屏必须包含丰富的可操作播放列表应用和醒目的封面拼贴。
- 不要让搜索、播放列表播放/保存/排队、曲目选择、播放、跳转、音量、歌词、歌词跳转、评论、点赞、排序、队列重排/移除/清空、重置或移动端导航失效。每个可见控件都需要有真实的本地结果。
- 不要允许重复的队列 ID，不要在哈希导航时丢失播放，不要在打开 Queue 时重新开始当前歌曲，不要在暂停的曲目结束后前进，不要自动循环最后一首曲目，不要在重新加载后恢复可听播放。
- 不要生成 source map，不要将 src/ 复制到 dist/，不要使用绝对根资源 URL，不要超过 20 MB，不要要求服务器回退。单个 npm run build 命令必须重新生成所有六个音频文件，并在 dist/ 中生成压缩的相对路径静态文件。
- 不要添加 HTML 条目、路由库、裸目录链接或依赖服务器的 URL。保持声明的哈希路由不变，并让未知哈希显示 Library。
- 不要在 src/content.ts 之外硬编码 BRAND、MUSIC_MOOD、AUDIENCE、TAGLINE 或 FEATURED_PLAYLIST，不要留下可见的变量标记，不要在值更改时保留默认歌曲标题、歌词、艺人、评论、替代文本或主题文案。
- 不要引入水平溢出、歌词裁剪、无法访问的仅图标控件、过小的触摸目标、键盘陷阱、焦点丢失或控制台错误。在 1440×900 和 390×844 下验证所有三个视图、播放、评论和队列。
- 不要忽略 prefers-reduced-motion。停止黑胶旋转和非必要移动，禁用平滑歌词滚动，并保留即时的歌词、播放、队列和评论反馈，同时保持用户发起的音频功能正常。
- 不要添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图、可见的日历日期、相对评论时间或关键词堆砌的内容。一个普通的 [BRAND] 文档标题和原创 favicon 就足够了。
- 除了可选的小型 [CREDIT] 侧边栏页脚链接外，不要在产品 UI 内提及 VibeFather。

---
— Prompt by VibeFather · https://vibefather.ai/t/music-streaming-app-with-lyrics · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
