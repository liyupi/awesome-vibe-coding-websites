> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 打字速度竞赛游戏

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个完整的单页打字竞速游戏，使用标语 [TAGLINE]、原创段落合集 [PASSAGE_PACK]，以及一个名为 [GHOST_NAME] 的确定性幽灵。访客通过打字段落来驱动一辆青色赛车与幽灵竞速，界面实时显示 WPM 和准确率，具备明确的错误状态、三个难度等级、本地个人最佳历史记录，以及可下载的成绩卡片。将所有变量值、UI 文案、难度定义和段落都放在 src/content.ts 中。下方的默认文案是精确的；当变量发生变化时，重写每一段段落和依赖内容的标签，以适配新的值，同时保持布局、交互模型和视觉系统不变。

- 受众：学生、打字学习者、组织短课堂挑战的教育工作者、在键盘前小憩的开发者，以及想要无需登录即可立即上手一款基于技能的游戏的休闲玩家。
- 目标：让访客从首屏就能理解并开始一场竞速，获得准确且响应迅速的打字反馈，完成一次完整的比赛，并保留可信的本地记录和可携带的成绩卡片。每个控件都必须在桌面和移动尺寸下以静态文件正常工作。
- 基调：专注、充满活力且精确，像一台友好的赛事控制台。使用简短的赛车运动语言，但不带攻击性、不出现品牌赞助、不虚构在线竞争，也不做夸大宣传。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：原生 CSS（Vanilla CSS）
- 库：react（MIT）、react-dom（MIT）、lucide-react（ISC）、@fontsource/chakra-petch（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用一个 index.html 入口，并在 src/ 中放置 React 应用。将 vite.config.ts 的 base 设为 './'，build.sourcemap 设为 false。保持 TypeScript 严格模式，并且只发布生产环境的 dist/ 目录。
  - 创建 src/content.ts，作为 [BRAND]、[TAGLINE]、[PASSAGE_PACK]、[GHOST_NAME]、导航标签、说明、结果消息、难度设置以及所有段落的唯一来源。为默认段落包中每个难度提供两段原创段落，并在点击 Next passage 时切换到另一段。
  - 使用难度设置 Easy = 30 ghost WPM、Medium = 45 ghost WPM、Hard = 60 ghost WPM。Easy 段落使用日常词汇和最少标点；Medium 段落增加从句和逗号；Hard 段落包含数字、混合标点和少量符号。不要根据玩家改变幽灵速度。
  - 将运行建模为 idle、countdown、racing、paused 和 finished 状态。使用 performance.now() 计算经过的活动时间，排除暂停和隐藏标签页时间，并将所有计分逻辑放在与 canvas 渲染器分离的纯 TypeScript 函数中。
  - 使用一个 Canvas 2D 场景绘制赛道、车辆、起跑灯和分享卡片 artwork。将 canvas 设备像素比上限设为 2，使用 ResizeObserver 调整大小，并且不要添加图形或物理依赖。
  - 仅安装并打包列出的库和字体。从各自的 Fontsource 包中导入 Chakra Petch 字重 500、600 和 700，以及 IBM Plex Mono 字重 400、500 和 600。
  - 仅在 localStorage 中存储已完成的运行和每个难度的个人最佳成绩，使用带版本号的 [BRAND] 专属键。验证解析后的数据，在存储不可用或格式错误时安全恢复，并最多保留十条最近运行记录。

## 变量
- [BRAND] — 游戏品牌（默认：“Keyway Circuit”）。一个虚构的两到三个单词的赛车名称，用于页眉、结果、分享卡片、本地存储命名空间和下载文件名。
- [TAGLINE] — 比赛标语（默认：“Outtype the echo.”）。一段简短的原创邀请语，出现在品牌下方和结果卡片上。
- [PASSAGE_PACK] — 段落集合（默认：“Night Drive”）。全部六段文本的写作主题，以及打字控制台上方的小集合标签。
- [GHOST_NAME] — 幽灵对手名称（默认：“Echo”）。一个简短的虚构非人类对手标签；界面始终说明这是一个目标配速，而不是另一个人。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/typing-speed-race-game（默认：是；删除此行即可移除）

“页面与区块”下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 夜墨（Night Ink）`#080B18` — 页面背景和最深的赛道区域。
- 赛道蓝（Track Blue）`#111A33` — 控制台和画布面板表面。
- 电光青（Electric Cyan）`#37E6F5` — 玩家赛车、正确字符、主要控件和实时比赛位置。
- 信号珊瑚（Signal Coral）`#FF536B` — 错误字符、倒计时灯、路缘条纹和强烈的辅助主视觉色。
- 圈速金（Lap Gold）`#FFC857` — 幽灵车、个人最佳标记和终点线点缀。
- 维修区白（Pit White）`#F4F7FF` — 标题和主要正文。
- 遥测灰（Telemetry Gray）`#A8B3CF` — 次要文案和即将出现的字符；在 Night Ink 和 Track Blue 上保持 AA 对比度。
- 车道网格（Lane Grid）`#2A3858` — 边框、车道标记、表格线和未激活控件轮廓。

### 字体排印
- 展示、控件和区块标题：Chakra Petch (OFL)，字重 500/600/700
- 打字段落、计时器、统计和数据标签：IBM Plex Mono (OFL)，字重 400/500/600

### 布局与动效
- 间距：使用 8px 基准单位。桌面内容最大宽度为 1440px，两侧留白 32px，面板间距 24px；移动端留白 16px，间距 12px。桌面端页眉高度保持 64px，移动端 56px。座舱面板桌面端内边距 24px，移动端 16px。下方区块桌面端垂直间距 64px，移动端 40px。
- 圆角：两个主座舱面板使用裁切的 14px 圆角，按钮和难度标签使用 6px，统计单元格使用 2px。仅对微小的实时状态点和当前位置标记使用完全圆角形状，不要用于通用浮动卡片。
- 动效：在 Start race 时，居中显示 3、2、1、GO 序列，每步 650ms，伴随 160ms 的不透明度和缩放过渡；在 GO 之前输入保持禁用。
- 动效：赛车严格根据比赛进度移动。平滑视觉插值可耗时 100ms，但绝不能改变底层进度或结果。幽灵车根据活动经过时间计算，而非随机动画。
- 动效：当前字符光标每 800ms 脉冲一次，新出现的错误字符获得一次 120ms 的水平轻推。绝不要晃动整个控制台。
- 动效：以内联方式显示结果面板，伴随 220ms 不透明度和 12px 垂直过渡，然后将焦点移到其标题。不要使用未经请求的模态框。
- 动效：在 prefers-reduced-motion 下，移除倒计时缩放、光标脉冲、轻推、平滑滚动和插值。更新必要的赛车位置，不使用装饰性补间，并立即显示所有状态变化。
- 图像：所有视觉元素均为原创并用代码绘制。主视觉画布展示夜间俯视双车道直道赛道、青色和珊瑚色路缘灯、方格终点条纹，以及两辆无品牌几何赛车，由简单梯形、矩形和小圆形车轮构成。使用分层车道标记和微小维修区灯光细节，使场景初看即丰富。玩家赛车为 Electric Cyan，幽灵车为 Lap Gold。不要使用照片、车辆品牌剪影、吉祥物、人物、生成图像或下载的游戏美术。

## 页面与区块
### 打字竞速驾驶舱、结果与本地记录（`index.html`）
1. **页头与可玩的竞速驾驶舱** — 页头：一个小的原创方格线标记，[BRAND] 使用 Chakra Petch 700，[TAGLINE] 使用更小的 Telemetry Gray 文本。右侧锚点文字为 Race、Records 和 How to race，分别指向 ./index.html#race、./index.html#records 和 ./index.html#how-to-race。一个紧凑的 Local play 状态显示 Saved on this device。在移动端，保留品牌和一个 How to race 锚点；不要将游戏玩法隐藏在菜单后面。

竞速驾驶舱：一个小型上划线文字为 [PASSAGE_PACK] / TYPING CIRCUIT。可见的指令为 Type the passage. Correct characters move your car. Backspace fixes an error. 三个难度标签分别为 Easy · Ghost 30 WPM、Medium · Ghost 45 WPM 和 Hard · Ghost 60 WPM；初始选中 Medium。Next passage 在空闲或完成时循环切换该难度下的两段文本。难度切换和 Next passage 在活动运行期间禁用；Restart race 在倒计时开始后始终可用。

画布将青色车道标记为 YOU，金色车道标记为 [GHOST_NAME] · TARGET PACE。两辆车均从左侧起跑线出发。实时位置说明在比赛前显示 Level pace，领先时显示 You lead，落后时显示 Ghost leads，进度相等时显示 Photo finish。这始终是数学上的配速比较，绝不是模拟真人。

画布下方，三个等宽统计单元格显示 WPM、ACCURACY 和 TIME。初始值为 0、100.0% 和 0:00.0。实时 WPM 为（当前匹配前缀中的正确字符数 / 5）除以活动经过分钟数，四舍五入为整数。准确率为正确可打印字符输入次数除以所有可打印字符输入次数 × 100，显示一位小数；Backspace 不计为可打印输入。已纠正的错误仍保留在基于输入的准确率分母中。

打字控制台使用单个原生文本输入框，视觉上定位在屏幕外，但保持可聚焦和可访问，绝不使用 display:none。设置 autocapitalize='none'、autocomplete='off'、autocorrect='off' 和 spellcheck='false'。点击文本或 Tap to type 会使其聚焦并打开移动键盘。不要拦截操作系统或浏览器快捷键。忽略粘贴和拖放输入。逐 Unicode 码点将输入与文本比较：匹配字符为青色，下一个预期字符有明亮的下划线光标，第一个不匹配处有珊瑚色背景并显示预期字符。只允许一个未解决的不匹配；在 Backspace 移除它之前，进一步的可打印输入被阻止。玩家进度为匹配前缀长度除以文本长度。

GO 之后，活动计时器在第一次可打印输入时开始。幽灵进度为 min(1, activeElapsedSeconds × ghostWpm × 5 / 60 / passageLength)。如果幽灵先到达终点，显示 Ghost reached the line — keep typing but allow the player to finish。Pause race 和文档可见性丢失会冻结玩家计时和幽灵进度；Resume race 继续且不计入暂停时间。完成需要整个文本完全匹配。

主要按钮为 Start race、Pause race 或适用时的 Resume race、Restart race，以及触摸设备上的 Tap to type。仅当 Restart 会丢弃有进度的运行时，才使用确认二次点击。包含辅助行 No sign-in. No online opponents. Your records stay in this browser.

默认 Easy 文本 1：The street is quiet before the signal turns green. Cool air moves through the open window. Your hands settle over the keys as the first lane lights appear ahead. Keep your eyes on the words, find a steady rhythm, and let every clean sentence carry you toward the finish.

默认 Easy 文本 2：A silver moon hangs above the empty avenue. The road curves past dark windows and sleeping gardens. There is no need to hurry at the beginning. Relax your shoulders, breathe evenly, and trust the small movements of your fingers. Smooth typing will always take you farther than a rushed start.

默认 Medium 文本 1：At the edge of the city, the circuit glows with reflected color. Every correct word sends a pulse through the console, while a small mistake asks for patience rather than panic. Release the wrong key, step back, and repair the line. The best drivers know that control is not the opposite of speed; it is the reason speed can last.

默认 Medium 文本 2：Your rival holds a measured pace through the electric night. You can see the gap change with each phrase, but the track never decides the result for you. Read one word ahead, keep your movements light, and give every comma the same attention as a letter. A clean run is built from hundreds of ordinary choices made well.

默认 Hard 文本 1：By 02:17, the rain had polished the circuit into a mirror of cyan, coral, and gold. The telemetry read 96.8% accuracy; one careless keystroke could still undo a flawless sector. Hold the rhythm through brackets, numbers, and punctuation: (breathe) → read → respond. Precision is a sequence, not a mood, and the finish line rewards the driver who protects it.

默认 Hard 文本 2：Sector 3 begins where the old tramway crosses the floodlit docks. At 58 WPM, hesitation costs more than a corrected error, yet frantic typing costs both time and control. Watch the next 3 words, keep 2 light fingers near the home row, and do not chase the ghost's signal. Your own clean output is the only engine in this race.
   布局：将页头横跨顶部。竞速驾驶舱的 id='race'，填充其下方第一个桌面视口，左侧为 5/12 宽度的画布面板，右侧为 7/12 宽度的打字控制台。难度标签横跨两个面板上方的整个驾驶舱宽度。画布面板在 1440×900 下至少 430px 高，并包含指令条和位置说明。打字控制台将三个统计单元格置于大文本区域上方，控件沿其底部对齐。桌面端文本以 27px、1.7 行高渲染。在 390×844 下，将画布堆叠在控制台上方，画布高度减至 168px，文本使用 19px、1.65 行高，统计保持三列，每个触摸目标至少 44px 高。Start race 控件和文本开头必须无需打开任何覆盖层即可到达。
   动效：起跑灯运行指定的倒计时。车辆仅根据匹配前缀和幽灵计算移动。正确输入可在活动车道发出微小的 120ms 青色滴答；错误仅产生局部字符轻推。玩家空闲时没有持续的速度错觉。
2. **内联竞速结果与分享卡片** — 在运行完成前保持此区块隐藏。上划线文字为 OFFICIAL RUN COMPLETE，标题为 Race complete。显示最终 WPM、最终准确率、活动经过时间、所选难度，以及玩家或 [GHOST_NAME] 谁先到达终点。如果最终 WPM 超过该难度的先前最佳，添加 Lap Gold New personal best 标签；否则显示与现有最佳的距离，不贬低玩家。按钮文字为 Race again、Next passage、Download PNG 和 Copy result。Race again 在倒计时后重复同一文本；Next passage 加载相同难度下的另一段文本。

使用 Canvas 2D 完全生成一张 1200 × 630 的 PNG，沿用相同的 Night Ink 背景、青色玩家赛车、金色幽灵赛车、珊瑚色终点条纹，在 document.fonts.ready 之后使用本地字体，并使用 [BRAND]、[TAGLINE]、最终 WPM、准确率、时间、难度和个人最佳状态。不包含日期、URL、二维码、人像或外部 logo。将其下载为根据 [BRAND]、难度和最终 WPM 派生的文件名。复制结果会复制这些相同实际值的纯文本摘要。如果 Clipboard API 访问不可用，请在可见字段中选择文本以便手动复制。绝不要声称结果已发布到任何地方。
   布局：将结果直接放在座舱下方，作为一个宽的 Track Blue 面板，左侧为 1/3 宽度的摘要，右侧为 2/3 宽度的迷你分享卡片预览。在摘要下方放置四个操作按钮。在移动端，堆叠摘要、预览和一个两列按钮网格。预览使用 aspect-ratio 1200/630，并且必须保持完全可见且无水平滚动。完成后将键盘焦点移动到 Race complete 标题，但不要用对话框覆盖比赛。
   动效：使用指定的 220ms 显示效果，并在减少动态效果时可选地立即滚动到视图内，否则使用短时间的平滑滚动。下载和复制操作会显示 1.5 秒的内联确认文本，不使用 toast 动画。
3. **个人最佳和最近历史** — 区块上划线：LOCAL RECORDS。标题：Your personal pace。介绍：已完成的比赛仅存储在此浏览器中。个人最佳网格为 Easy、Medium 和 Hard 各一行，列包括 Best WPM、Best accuracy 和 Last time。在任何比赛之前，显示长破折号和诚实的空状态 No finishes yet。你的第一场完整比赛会设置记录。不要预置虚构分数。

在其下方，Recent runs 最多列出十次实际完成的尝试，最新的在前。每一行包含一个顺序比赛标签、难度、WPM、准确率、活跃时间、文章编号，以及适用时的小型 Personal best 标记。不显示日历日期。Clear history 按钮需要第二次确认点击，标签为 Confirm clear，然后移除 [BRAND] 的所有比赛和最佳记录，并恢复空状态。如果存储不可用，请为当前页面会话保留分数，并显示 Storage is unavailable; these records will last only for this visit。
   布局：使用 id='records'。在桌面端，三难度最佳表占据左侧 7/12，最近比赛列表占据右侧 5/12，顶部边缘对齐，间距为 24px。使用紧凑的等宽行，而不是单独的浮动卡片。在移动端，堆叠两者，并且仅在需要时让行内部滚动；无页面级水平溢出。Clear history 位于最近列表下方，并使用珊瑚色轮廓，而不是主导按钮。
   动效：新记录获得一次 400ms 金色背景淡入。列表更新立即生效并尊重减少动态效果；不要为旧行添加动画，也不要使用会延迟实际结果的数字递增。
4. **如何比赛和计分说明** — 标题：Three steps to the finish。Step 01 是 Pick your pace — 选择 Easy、Medium 或 Hard；幽灵速度会在你开始前显示。Step 02 是 Type clean — 跟随光标，在珊瑚色错误上使用 Backspace，并将视线保持在下一个单词上。Step 03 是 Beat your record — 完成整篇文章，将结果保存在本地，并如果你想分享，下载一张卡片。

一条紧凑的计分说明写道 WPM counts every five correct characters in the matching prefix as one word。Accuracy includes printable mistakes even after you correct them。Paused time never counts。最后一行写道 [GHOST_NAME] is a fixed target pace, not a live player。
   布局：使用 id='how-to-race'。将三个步骤排列为等宽列，由细的 Lane Grid 规则分隔，每个步骤都有一个大的珊瑚色步骤编号、Chakra Petch 标题和两行简洁文字。将计分说明放在下方一个全宽等宽条带中。在移动端，垂直堆叠步骤，编号在左，文案在右。
   动效：不需要滚动劫持或分阶段显示。悬停时简单的 160ms 边框颜色变化就足够了。
5. **页脚** — 左侧：[BRAND] 和 [TAGLINE]。右侧：Built for local play · No account · No remote leaderboard，后跟可选的 [CREDIT] 链接。所有文本保持英文，所有依赖品牌的文案遵循变量。
   布局：一条 Lane Grid 顶部边框，28px 垂直内边距，桌面端为水平 space-between 行。在移动端以 8px 间距堆叠。不要添加新闻订阅表单、社交图标或不相关的导航。
   动效：无。

## 资产
- 图像：不使用位图图像或生成资产。使用 Canvas 2D 绘制夜间赛道、两辆原创几何赛车、车道灯、方格终点线和 1200 × 630 结果卡片。将渲染代码保留在项目中，不使用下载的游戏美术资源。
- 图标：仅使用捆绑的 lucide-react 图标，用于 Play、Pause、RotateCcw、Download、Copy、Trash2、Keyboard、Flag 和 ArrowRight。方格线品牌标志为原创 CSS/SVG 几何图形，并非 Lucide 或第三方标志。
- 字体：通过 @fontsource/chakra-petch 自托管 Chakra Petch 500/600/700，通过 @fontsource/ibm-plex-mono 自托管 IBM Plex Mono 400/500/600，两者均为 OFL-1.1。将这两个包及其许可证与 lucide-react（ISC）一并记录在 ASSETS.md 中；不包含任何第三方媒体文件。

## 不要做
- 不要添加后端、API 路由、账户、数据库、分析、远程表单、第三方 API、全球排行榜、实时多人对战，也不要声称 [GHOST_NAME] 是真实的在线玩家。
- 不要使用从现有打字游戏或竞速系列中复制的名称、标志、口号、吉祥物、布局、段落、代码、图标、声音、音轨或界面元素。
- 不要使用真实车辆品牌、可识别的量产车设计、赞助商标记、授权角色、真实人物肖像、照片、图库图片、占位服务或下载的游戏精灵图。
- 不要从 CDN 或外部 URL 加载字体、脚本、样式、图标或媒体。将列出的包本地打包，绝不在运行时请求 Google Fonts。
- 不要添加超出所列技术栈的依赖、商业字体、受限组件源码，或具有非商业、相同方式共享、不明确或缺失许可证的资产。
- 不要伪造个人最佳成绩、最近记录、准确率、WPM、在线活动或分享成功。每一项统计数据都必须来自当前运行或有效的本地历史记录。
- 不要让粘贴、自动更正、隐藏标签页时间、暂停时间或动画计时扭曲分数。不要阻止浏览器快捷键，也不要让移动用户在不自定义的非原生键盘上打字。
- 不要用宣传性主视觉、纯排版平面场景、通用便当盒式落地页或一系列营销卡片替换可玩的首屏。
- 不要使用过多的圆角卡片、玻璃拟态、无关的渐变、持续装饰性动画、滚动劫持或闪烁效果。尊重 prefers-reduced-motion。
- 不要在比赛历史或分享卡片上显示日历日期。内部排序元数据可以存储，但绝不作为前端日期显示。
- 不要生成 source map、将 src/ 复制到 dist/、超过 20 MB、使用裸目录链接或需要服务器。使用相对资产，并确保 index.html 可从静态对象存储运行。
- 不要留下失效控件、空结果、控制台错误、水平溢出、不可访问的焦点状态或低于 44px 的触摸目标。在 1440×900 和 390×844 下验证 Easy、Medium、Hard、重启、暂停/恢复、历史清除、PNG 下载和移动端打字。

---
— Prompt by VibeFather · https://vibefather.ai/t/typing-speed-race-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
