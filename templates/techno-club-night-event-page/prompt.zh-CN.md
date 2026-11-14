> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 科技俱乐部之夜活动页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个虚构的每周五在 [VENUE]（地址：[ADDRESS]，城市：[CITY]）举办的 techno 夜场活动。这是一张原创的 acid 海报，配有可用的本地音频和规划工具。

- 受众：成年电子音乐听众，在制定计划前会查看声音、入场和门口规则。
- 目标：试听一段原创的内置循环音频，查看演出时间表和场地分区，在本地估算票价，并理解严格的仅限演示的门口政策。
- 语气：直接、地下、字体上张扬；实用细节则冷静而具体。

## 技术栈
- 框架：Vite + React + TypeScript
- 样式：Vanilla CSS
- 库：vite（MIT）、react（MIT）、react-dom（MIT）、typescript（Apache-2.0）、@fontsource/anton（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 Vite base 设为 ./，build.sourcemap 设为 false。使用单个 src/content.ts 存放所有可编辑内容，并在变量变更时完全重写其数据。
  - 在 src/styles.css 中实现响应式组件和 CSS 令牌。通过列出的 Fontsource 包打包字体；仅导入实际使用的字重。
  - 提供语义化原生控件和键盘/触摸替代方案；实现焦点管理的对话框和仅本地验证的表单反馈。
  - 使用仅 Node fs 编写 scripts/make-club-loop.mjs，并在 npm run build 中于 Vite 之前运行它。生成 public/audio/circuit-loop.wav 为原创 PCM16 单声道 22050Hz，132BPM 下 16 拍（duration=16*60/132 秒）。从头作曲：每拍 100→44Hz 指数扫频正弦底鼓、带衰减的 16 分音符种子噪声踩镲、第 2/4 拍上类似军鼓的滤波确定性噪声、来自 D2/F2/C2/A1 的原创四音符贝斯模式配短包络、柔和饱和。无录制采样、现有旋律、授权录音或外部音乐。归一化峰值 <=.7，并加 8ms 边缘淡出以实现无缝循环。在 ASSETS.md 中记录合成/原创作曲。
  - 使用一个 AudioContext 和一个媒体元素源，仅通过 AnalyserNode（fftSize 1024，smoothing .85）和 GainNode 连接到输出一次。仅在明确的 Play loop 手势时恢复/播放。从 getByteTimeDomainData 绘制波形，从 getByteFrequencyData 绘制频谱；不使用随机伪造的实时数据。将画布限制为 30fps 并平滑小幅缩放变化；暂停/隐藏时暂停 RAF 并清理资源。

## 变量
- [BRAND] — 品牌（默认：“Sublevel Circuit”）。针对该值重写所有相关标题、条目、标签、alt 和确认信息。
- [VENUE] — 场地（默认：“The Relay Room”）。针对该值重写所有相关标题、条目、标签、alt 和确认信息。
- [CITY] — 城市（默认：“Port Alder”）。针对该值重写所有相关标题、条目、标签、alt 和确认信息。
- [ADDRESS] — 地址（默认：“19 Coil Passage”）。针对该值重写所有相关标题、条目、标签、alt 和确认信息。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/techno-club-night-event-page（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 酸性绿（Acid green）`#C6FF00` — 大型主视觉和阵容区块，深色标签。WCAG 相对亮度计算：#080808 文字在 #C6FF00 上：16.89:1；#FFFFFF 文字在 #8B00FF 上：5.93:1；#FFFFFF 文字在 #080808 上：20.03:1；#080808 文字在 #C5D0DB 上：12.80:1。所有常规尺寸的标签/正文/按钮都使用这些配对。装饰性重叠/渐变不承载文字；可读文字使用实色底衬。
- 电紫（Electric violet）`#8B00FF` — 大型主视觉雕塑区域和场地色带。
- 黑色（Black）`#080808` — 海报底色、酸性绿上的文字、政策区域底色。
- 白色（White）`#FFFFFF` — 紫色/黑色上的文案。
- 铬色（Chrome）`#C5D0DB` — 仅用于装饰性金属色带；不用于低对比度正文。

### 字体排印
- 展示字体：Anton（OFL），字重 700
- 正文字体：IBM Plex Mono（OFL），字重 400/700

### 布局与动效
- 间距：最大 1240px，桌面端 40px/移动端 20px 边距。8px 网格，96px/56px 主要间距。海报标题桌面端 144px/移动端 68px，刻意分为 3 行，正文 16px/1.6 等宽字体。
- 圆角：主要区块 0px，控件 6px，999px 仅用于轨道几何。2px 硬线，不使用半透明渐变文字面板。
- 动效：扭曲字体是静态预设的倾斜/缩放，且仍是真实可访问的文字，不抖动。大型铬色圆环仅在用户主动播放时缓慢旋转，并可独立暂停。
- 动效：音频画布使用实际 RMS/频率数据，以最大 ±10% 的幅度变形线条半径；不闪烁颜色或振荡亮度。减少动效时冻结形状，并以 2Hz 显示曲目时间和稳定的电平值。
- 图像：完全由代码绘制的原创酸性海报：相交的椭圆铬色丝带、无刺波形环、大型酸性绿/紫色场上的黑色几何轨道框架。主视觉具有高工艺感的声音雕塑和类似现场乐器的 UI，而不仅仅是字体排印。不使用真实 DJ、受版权保护的海报艺术、可识别的场地照片、标识或现有专辑封面。艺术家条目使用独特的原创抽象信号徽章，而非肖像占位图；这是活动阵容，不是团队介绍页。

## 页面与区块
### [BRAND] — Feel the room find its pulse (`index.html`)
1. **酸性海报与声音预览** — 页眉 [BRAND]、Lineup、The room、Tickets、Door policy。眉题 'Recurring Friday / 10 PM–4 AM / 18+'。H1 'Feel the room find its pulse.' 引言 'Six hours of focused sound. One room for moving together.' 场地 [VENUE] / [CITY]。主按钮 'Explore ticket options'，次按钮 'Read the door policy'。声音卡片标签 'Original bundled demo loop / 132 BPM / no vocals'。Play loop / Pause loop，音量滑块默认 35%，波形/频谱切换，已播放/总时长，Pause visuals。常驻提示 'Audio preview only. This fictional event has no ticket sale or real announced date.' 音频仅在明确播放时开始；可见回退提示 'Audio could not load. Try again' 并提供重试。Canvas 使用真实分析器数据，空闲时标注 'Paused — press Play loop'。
   布局：首屏左侧 45% 为酸性色（acid）#C6FF00，右侧 55% 为紫罗兰色（violet）#8B00FF，覆盖在黑色 #080808 舞台之上；两者均占据首屏 >=30%。标题为酸性色底上的黑色，Anton 144px；副标题为白色，仅置于紫罗兰色实底区域。大型原创铬色圆环/波浪雕塑填充右侧，配深色播放器面板、白色标签和酸性色控件。移动端先堆叠海报，再显示 >=330px 的全宽播放器；图形与文字保持距离。
   动效：无空闲频闪或自动播放。声音响应波形仅对真实循环播放平滑响应。
2. **阵容与演出顺序** — 标题 'Four voices. One long arc.' 虚构艺人：Mera Coil，10–11:30 PM，'Patient dub textures and a low, elastic beginning'；Raster June，11:30 PM–1 AM，'Clipped percussion, bright edges, no hurry to resolve'；Tern Static，1–2:30 AM，'Driving low-end patterns and a pressure-release middle'；Oru Vale，2:30–4 AM，'Left-field turns and a closing stretch that leaves room to breathe'。说明午夜之后的演出时间属于同一演出顺序；不显示日历日期。'Artist note' 打开本地模态框，内含 70 词原创虚构简介和音乐取向，并非真实表演者。'Add to my running order' 切换书签，本地持久化；Saved only 过滤器带计数和清除操作。无虚假外部艺人社交或流媒体链接。
   布局：酸性色 #C6FF00 全区块，正文黑色 #080808。四行水平表格行，巨大描边序号，时间置于不透明黑/白标签中，抽象紫罗兰色 #8B00FF 信号徽标，强顶部横线。移动端每行变为垂直的时间/名称/备注，所有操作可见。
   动效：悬停/聚焦时行位移 3px 并显示下划线；无连续跑马灯。
3. **房间之前的房间** — '[VENUE], mapped simply.' 地址 [ADDRESS]、[CITY]，一个虚构演示地点。原创 SVG 示意图含五个可选区域 Entrance / Main floor / Water point / Quiet room / Step-free route。入口位于左下；主舞池居中；饮水点居右；安静室左上；无障碍路线为从入口到各房间的虚线路径，并附明确图例。SVG 外的按钮可选择相同区域，供键盘/触摸使用。详情：Entrance 'ID check before admission; keep a photo ID ready'；Main floor 'Dance area; no filming with flash'；Water point 'Free refill point in this fictional venue plan'；Quiet room 'A lower-volume room away from the main floor'；Step-free route 'Illustrative route, 1.2m minimum drawn width; this diagram is not verified access information for a real building'。添加 'Access questions need real venue confirmation before a real visit'。出行提示 'Fictional district tram stop: Coil Yard, two blocks south' 明确标注为演示，无外部地图。
   布局：紫罗兰色 #8B00FF 色带，白色 #FFFFFF 文案。示意图黑色 #080808 底，酸性色 #C6FF00 选中区域配黑色标签；未选中区域为白色描边/白色标签。60/40 地图/详情，移动端地图响应式 viewBox 且文字在下，无仅悬停的小热区。
   动效：选择区域时描边并更新文字；无缩放动画。
4. **作为本地计划的票务** — 标题 'Choose how you arrive.' 示意档位：Early arrival $18，11 PM 前入场；Standard $24，开门后任意时间；At the door $30，仅作对比展示。所有档位均 18+ 成人，无真实可用性，无售票。档位按钮选择单选并打开本地抽屉；数量 1–6；行项目为档位×数量，无手续费，总计。复选框 'I understand the 18+ photo-ID rule' 和 'I have read the door policy' 为 'Save local ticket plan' 必填。抽屉内确认 'Saved on this device only. No ticket, entry reservation, payment or message was created.' localStorage 存储档位/数量/已勾选政策，并提供 Reset plan。'At the door' 是规划选项，不承诺有票。计划绝不授予入场资格。关闭/编辑/移除控件功能正常。
   布局：黑色 #080808 区块，白色 #FFFFFF 标题；3 个大型票务面板交替为酸性色 #C6FF00/黑色字、紫罗兰色 #8B00FF/白色、铬色 #C5D0DB/黑色。抽屉白底黑字，选中控件为酸性色，44px 触控目标；移动端票务单列。
   动效：抽屉滑动最长 220ms，减少动效时即时；正确焦点陷阱/恢复和滚动锁定。
5. **入场政策与实际问题** — 严格政策卡片：'18+ only. Bring original government-issued photo ID.' 'Consent is not optional. Harassment, intimidation and discriminatory behavior are not welcome.' 'No weapons, illegal substances, outside drinks or large bags.' 'No flash photography. Leave room for other people.' 'Respect floor staff and the lower-volume room.' 'This demo sells no entry and cannot enforce real-world safety; a real organizer must publish and maintain its own policy.' FAQ：'Can I leave and return?' — 示意政策：不可再入场；真实活动前请与真实运营方确认；'Is the audio a real recording?' — 它是本地打包的原创合成演示循环，并非表演者现场；'Can I buy tickets here?' — 否，仅保存本地计划；'Does this announce a real night?' — 否，所有表演者、场地和地址均为虚构。页脚 [BRAND]、[VENUE]、本地演示说明和 Back to poster。无年份/日期。
   布局：酸性色 #C6FF00 政策板块，黑色 #080808 文字和粗体 32px 横线。FAQ 位于下方黑色区域，白色文字和紫罗兰色 #8B00FF/白色问题条，桌面两列、移动端一列。装饰性铬色细线远离文字。
   动效：静态政策始终可见，FAQ 使用原生 details。

## 资产
- 字体：使用 Stack 中列出的 Fontsource 包自托管 Anton、IBM Plex Mono；OFL-1.1，无外部字体请求。
- 图像：原创代码绘制的铬质丝带、轨道几何、酸性海报装饰、艺术家信号徽章和虚构 SVG 场馆示意图。原创项目艺术作品，无现有夜店海报或真实表演者照片。在 ASSETS.md 中列出本地文件和原创作者身份。
- 图像：音频说明（schema 没有 audio 类型）：在 npm run build 期间按 Stack 的规定从原创代码合成 public/audio/circuit-loop.wav，PCM16 单声道 22050Hz，132BPM 下十六拍。无外部录音、采样、现有旋律或版权音乐。在 ASSETS.md 中记录脚本、WAV 路径、合成方法和原创作曲/再分发。

## 不要做
- 构建纯静态演示：不要后端、API 路由、数据库、身份验证、支付、第三方 API、分析、遥测，或会发送网络请求的表单。确认信息必须明确说明是本地演示；绝不要声称已发送订单、预订、生成的服务结果或电子邮件。
- 使用 Vite base ./、相对本地资源、哈希路由或真实的 .html 文件名；不要使用裸目录链接。直接打开每个路由，并确保任何没有 ID 的详情路由渲染其第一个项目。使用 npm run build 构建压缩的 dist/，不要 source maps 或源文件，dist 总大小低于 20 MB。
- 将所有可编辑文案、虚构示例数据、价格、交互标签、alt 文本和 A/B 内容保留在单个 src/content.ts 模块中。保留 3–6 个变量。当变量变化时，一致地重写所有相关内容；绝不要在第二个案例中留下默认品牌或主题。
- 所有可见语言和 alt 文本使用美式英语。不要渲染日历日期、年份、带日期的版权行、虚假的新鲜度或流行度指标。运营工作日和时间、曲目时长、相对计时器、问题标识符和尺寸是允许的。
- 仅使用原创代码/艺术/文案、宽松的 MIT/ISC/BSD/Apache/CC0 依赖和本地捆绑的 OFL 字体。不要复制网站代码、现有徽标、著名角色、商业字体、受限组件或可识别的真人肖像。在 ASSETS.md 中列出每个字体、依赖和生成的艺术作品及其来源和许可证。
- 运行时一切都在本地：不要热链接图片、字体 CDN、远程脚本、远程音乐或占位图片服务。在构建前准确下载指定的模板托管图片；在 ASSETS.md 中记录完整源 URL、目标路径、alt 文本和生成的署名。
- 在 1440×900 和 390×844 下保持零控制台错误且无水平溢出。触摸目标至少 44px，可见的键盘焦点和带标签的输入，对话框的 Escape/外部关闭和焦点恢复，抽屉焦点陷阱、滚动锁定和结果变化的 aria-live。悬停效果需要等效的焦点/点击路径。
- 尊重 prefers-reduced-motion：移除循环变换、滚动擦除和视差，显示最终静态状态，绝不自动播放音频/视频，无闪烁、频闪或快速全屏亮度变化。不要隐藏等待动画的基本内容。
- 保留指定的调色板，至少两种强烈的英雄色占据大面积。不要中性奶油色/炭灰色回退，不要在正常文本后面使用渐变，不要低对比度的小标签。使用设计中计算的 AA 文本/背景配对。
- 无频闪、闪光、高对比度亮度脉冲、自动播放、虚假分析器数据、远程音乐、采样曲目或真实艺术家姓名。循环是原创构建时合成，真实播放必须驱动所有声音反应运动。
- 无日历日期或宣布的真实事件；允许重复的周五和运营设定时间。无虚假安全保证、真实可用性、真实地图/验证访问声明、票收据、支付、结账或电子邮件收集。本地票务计划必须说明它们不授予入场权。
- 对于 Phase Assembly，完全重写 The Copper Vault in West Briar 的虚构阵容名称/简介/演出顺序、票价、场馆区域说明和欢迎文案。使用相同的酸/紫/铬结构 and 原创本地声音架构；不要保留默认事件、场馆或地址。

---
— Prompt by VibeFather · https://vibefather.ai/t/techno-club-night-event-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
