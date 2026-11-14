> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 远程医疗应用落地页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个精致的单页落地网站，[BRAND] 是一款虚构的 [CARE_FOCUS] 应用，面向 [AUDIENCE]。将可交互的预约手机和视频问诊手机与护理主题浏览、三步产品演示、自费和保险定价示例、诚实的静态演示隐私部分、常见问题解答以及通用移动端下载操作搭配在一起。

- 受众：寻求非紧急 [CARE_FOCUS] 的人群，以及向 [AUDIENCE] 展示清晰、可信的移动护理服务的创始人和产品团队。
- 目标：帮助访客了解产品、尝试逼真的预约和视频问诊交互、比较示例性费用，并预览移动端下载路径，而不提交信息或暗示医疗结果。
- 语气：温暖、精确、平静且直白。令人安心，但不使用基于恐惧的紧迫感、诊断、治疗承诺、保险保证或缺乏支持的信任声明。重写所有护理角色、主题、界面文案和常见问题解答，以契合所提供的变量。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：@fontsource-variable/fraunces (OFL)、@fontsource-variable/inter (OFL)
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 Vite，base: './'、React、TypeScript 和 Tailwind CSS；将所有文案和示例数据放在 src/content.ts 中，并从提供的变量值派生。
  - 在 src/main.tsx 中导入 @fontsource-variable/fraunces 和 @fontsource-variable/inter；在 src/index.css 中定义颜色令牌、共享组件类和关键帧。
  - 使用 React state 处理预约、视频控制、护理主题选择、三步预览、定价、FAQ、移动端导航和下载提示；不要添加状态管理库。
  - 创建原创内联 SVG 图标作为小型 React 组件，并使用语义化 HTML 和 CSS 构建所有手机和产品视觉元素。
  - 使用 sourcemap: false 配置生产构建并输出到 dist/；保持每个资源和内部路径为相对路径。
  - 从 [BRAND] 设置纯文档标题和原创内联 SVG favicon；不要添加其他元数据。

## 变量
- [BRAND] — 品牌（默认：“Avelune Health”）。一个虚构的虚拟护理品牌，用于页眉、产品界面、文案和页脚。
- [AUDIENCE] — 受众（默认：“adults managing everyday health needs”）。该服务所面向的人群；为他们重写示例和界面文案。
- [CARE_FOCUS] — 护理重点（默认：“everyday primary care”）。应用所呈现的非急诊护理类别。
- [VISIT_PRICE] — 自费就诊价格（默认：“$39”）。一个示例性的每次就诊价格，包含货币符号。
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接，指向 https://vibefather.ai/t/telehealth-app-landing-page（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 画布（Canvas）`#F4F7F3` — 温暖的米白色页面背景和安静区块。
- 表面（Surface）`#FFFFFF` — 卡片、手机屏幕、输入行和手风琴面板。
- 墨色（Ink）`#15332F` — 标题、主要文本和深色图标描边。
- 柔和色（Muted）`#566C66` — 次要文案和元数据，具有可读的对比度。
- 青绿色（Teal）`#176B5E` — 主要按钮、选中控件、链接和活动进度。
- 薄荷色（Mint）`#DCEFE7` — 柔和面板、选中标签和下载 CTA。
- 珊瑚色（Coral）`#E9846B` — 仅用于小型装饰点缀和活动状态点，绝不用于正文文本。
- 夜色（Night）`#102D2A` — 隐私区块背景和视频通话界面。
- 线条色（Line）`#CFDED7` — 一像素边框、分隔线和点状主视觉网格。

### 排版
- 展示和区块标题；H1 桌面端 72px / 移动端 46px，行高 0.98，H2 48px / 36px，行高 1.05，字距 -0.035em：Fraunces Variable (OFL)，字重 500/600
- 正文 16–18px，行高 1.6，导航和 UI 标签 13–15px，按钮 15px 半粗体：Inter Variable (OFL)，字重 400/500/600/700

### 布局与动效
- 间距：使用 8px 基础比例，最大内容宽度 1180px，桌面端 32px 和移动端 20px 的边距，桌面端 104px 和移动端 72px 的区块内边距，24px 卡片内边距，以及 44px 最小点击目标。
- 圆角：手机外壳使用 44px，大型功能面板使用 30px，卡片使用 20px，输入和 UI 行使用 14px，标签和主要按钮使用完全圆角；边框保持清晰的 1px。
- 动效：初始加载时，主视觉文案在 450ms 内淡入并上移 16px，然后两部手机在 550ms 内上移 22px，错开 100ms；绝不无限期隐藏内容。
- 动效：使用 IntersectionObserver 让主要区块以不透明度和 translateY(16px) 在 400ms 内显示一次，不劫持滚动或固定场景。
- 动效：切换手机屏幕或引导步骤时，使用 180ms 的不透明度和 translateX(8px) 过渡；选中标签和定价使用 160ms 的颜色或阴影过渡。
- 动效：FAQ 答案以 200ms 的 grid-row 展开并旋转箭头；下载提示以 180ms 淡入淡出。
- 动效：在 prefers-reduced-motion 下，移除显示动画、旋转、平滑滚动和过渡，同时保留每个状态变化和所有可见内容。
- 图像：不使用栅格图像或外部素材。视觉锚点是一对丰富的 CSS 手机模型，具有可信的界面行、由原创几何 SVG 形状制成的通用无脸线条头像、点状背景场和本地数据隐私图。所有图标都是简单的原创内联 SVG 描边；没有应用商店标记、第三方标志或可识别的人物。

## 页面与区块
### 远程医疗产品落地页与交互式应用预览（`index.html`）
1. **页眉与导航** — 用四个圆角矩形围绕一个小中心点，创建一个原创抽象品牌标志，绝不能是医疗十字，置于 [BRAND] 旁边。导航项为 Care topics、How it works、Pricing 和 Privacy。右侧按钮文字为 Try the demo，点击后将焦点移至手机演示。移动端上，Menu 按钮打开一个紧凑面板，包含相同的锚点，选择后关闭。
   布局：粘性 76px 页眉，半透明 Canvas 背景，轻微模糊，底部 Line 边框。使用共享的 1180px 容器，品牌居左，桌面导航居中，CTA 居右。移动端显示品牌和一个 44px 菜单按钮。每个锚点使用 ./index.html#care、./index.html#how、./index.html#pricing 或 ./index.html#privacy。
2. **英雄区，含预约与视频手机** — 默认眉标：'[CARE_FOCUS] · Non-emergency video visits'。H1：'Care that fits into real life.'。正文：'Book a video visit, see what to expect, and stay clear on costs with [BRAND]. Designed for [AUDIENCE], with sample screens you can explore before you download.'。主 CTA：Explore the demo；次 CTA：See pricing。添加 'Static product preview · No personal or health information required'。在手机上方，Booking / Video visit 分段控件改变强调并选择移动端可见的手机。预约手机显示 Book a visit 和 What would you like to discuss?。包含原因标签 Cold symptoms、Skin question 和 Allergy follow-up；日期标签 Today、Tomorrow 和 Friday；时间按钮 9:30 AM、11:00 AM 和 2:15 PM。选择每一项会更新摘要，例如 Skin question · Tomorrow · 11:00 AM。Review sample visit 会显示内联确认：Sample visit ready — no information was sent。视频手机显示 Video visit、Mara Ellison · Care clinician、示例 08:24 计时器、通用无面部线条头像，以及三行笔记：Discuss symptoms、Ask questions、Agree on next steps。麦克风和摄像头按钮切换其本地激活图标；Visit notes 展开笔记面板。不要请求真实设备访问权限。当变量变化时，调整专业角色和每个主题。
   布局：使用两栏英雄区，0.9fr 文案和 1.1fr 产品舞台，垂直居中，顶部内边距 64px，底部内边距 80px。H1 最大宽度设为 560px，正文设为 520px。产品舞台高 620px，带柔和 Mint 径向光晕、一个小 Coral 球体和微妙的点状网格。渲染一个 278×560px 的预约手机，旋转 -3 度，以及一个 258×528px 的视频手机，旋转 4 度，重叠 32px，白色屏幕、深色 9px 外壳、柔和分层阴影、扬声器槽和 home 指示条。两者在桌面端均保持可见；移动端堆叠文案，仅显示选中的 250×500px 手机，无旋转或水平溢出。
   动效：使用指定的英雄区入场动画。切换分段屏幕时，活动手机交叉淡入淡出并向前移动 12px；选中的原因、日期和时间填充 Mint 并带 Teal 边框。绝不自动播放通话或计时器。
3. **保障条** — 三组简洁的保障配对：Clear before you book / Sample prices shown up front；Private by default / No form submissions in this demo；Clear boundaries / Not for emergencies — contact local emergency services。
   布局：全宽条带，顶部和底部 Line 边框，三列共享容器。每个单元格有一个小的原创 SVG 图标、一个半粗体标题和一行弱化文字；移动端堆叠单元格并带分隔线。
4. **护理主题** — 眉标：Care topics。H2：Start with what you need today。引言：Use these examples to choose a conversation, not to self-diagnose。六张可选卡片：Cold & sinus / Talk through symptoms and everyday next steps；Skin questions / Share what you have noticed in a video conversation；Allergies / Discuss triggers, history, and questions to raise；Digestive concerns / Describe changes and decide what to discuss；Medication questions / Review the information you want to ask about；General wellness / Make time for routine, non-emergency guidance。选择卡片会标记一个勾选，并显示 Selected: [topic] 以及一个 Open sample booking 按钮。该按钮将主题应用到预约手机并滚动到它。为 [CARE_FOCUS] 调整所有六个主题。
   布局：为此区块设置 id=care。将标题和引言放在窄左栏，右侧放一个小型选中主题状态，然后使用三列两行的卡片网格，间距 16px。卡片为白色，20px 圆角，原创 24px 线条图标，文字间距宽松。平板宽度使用两列，移动端一列。
   动效：悬停时，卡片上浮 3px 并加强边框；选择时，以 180ms 描边过渡绘制勾选。减少动效时移除上浮和绘制动画。
5. **三步产品导览** — 眉标：How it works。H2：From question to conversation in three steps。步骤 01 Share what is on your mind / Choose a sample topic and answer a short, non-sensitive prompt。步骤 02 Pick a time / Compare example slots and review the illustrative cost。步骤 03 Join from your device / Open the video screen and explore the visit controls。每个步骤是一个按钮，在紧凑主题表单、日程列表和视频 UI 之间切换相邻的产品面板。包含进度标签 Step 1 of 3 以及 Previous / Next 按钮，并具有正确的禁用状态。所有内容均为源自变量的虚构示例数据。
   布局：为此区块设置 id=how。在白色 30px 圆角面板内使用 5/7 列网格。步骤位于左侧，带有大号弱化数字和小型垂直连接线；右侧是 520px 高的 Mint 工作区，包含一个详细的代码绘制应用窗口。保持活动步骤和活动屏幕对齐。移动端上，将步骤作为水平三项选择器放在 440px 工作区上方。
   动效：使用指定的 180ms 交叉淡入淡出切换工作区，并更新一条细 Teal 进度条。不要自动播放步骤。
6. **自费和保险定价** — 眉标：Sample pricing。H2：Know the example cost before the visit。引言：Compare two fictional pricing paths. These figures are illustrative, not quotes or coverage guarantees。Self-pay / With insurance 切换会改变强调的卡片和摘要。自费卡片：[VISIT_PRICE] per video visit、No membership required、Illustrative price for this demo、Review before confirming。保险卡片：$15 sample estimated copay、Actual coverage varies by plan、Eligibility would need verification、Estimate is not a guarantee。卡片下方，动态注释显示 Self-pay selected: one sample price with no membership，或 Insurance selected: a fictional copay that would require plan verification。绝不要提及真实保险公司或编造折扣。
   布局：为此区块设置 id=pricing。居中标题和切换，然后在 760px 宽的两列网格中显示两张等宽的白色卡片。活动卡片有 2px Teal 边框和一个小型 Selected 标签；非活动卡片保持可读。将价格放在同一强基线上，并使用三行紧凑的详情行和原创勾选图标。移动端堆叠卡片，同时保留切换。
   动效：定价选择变化时，使用 160ms 的边框和阴影变化；不要动画数字或隐藏任一价格。
7. **隐私与信任** — 眉标：Privacy in this preview。H2：Explore without handing over personal information。正文：Try every screen without entering a name, email, symptom, or payment detail. This static demo does not request camera or microphone access and sends nothing to a server。三点：Nothing submitted / Buttons update only this browser preview；No device access / Video and microphone controls are visual demonstrations；Clear boundaries / For emergencies, contact local emergency services instead。包含一个小型示意图，标注 Your device → Local preview → No upload。不要添加安全认证、合规印章、加密声明或未经支持的保证。
   布局：为此区块设置 id=privacy。使用 Night 30px 圆角面板，白色标题、浅 Mint 正文，两栏布局。三点堆叠在左侧；右侧包含一个大型 Surface/10 卡片，带三个连接的示意图节点、虚线，以及 No upload 前的原创停止图标。移动端上，堆叠内容并使示意图垂直。
   动效：以小幅交错显示三点。示意图保持静态，以便其不上传信息始终清晰可读。
8. **常见问题** — H2：探索之前，先给你直截了当的答案。手风琴项：我可以在紧急情况下使用 [BRAND] 吗？/ 不可以。此概念仅适用于非紧急就诊主题。如需紧急帮助，请联系当地急救服务。预约演示会创建真实预约吗？/ 不会。它只会更改你浏览器中的屏幕，不会存储或发送任何预约数据。我的保险会覆盖一次就诊吗？/ $15 共付额是虚构的示例内容，并非保障范围估算。真实服务必须在报价前核实你的保险计划。该应用能诊断或治疗疾病吗？/ 此演示不提供任何医疗建议、诊断或治疗。它只展示访客可能如何浏览一个虚拟护理应用。当我选择下载按钮时会发生什么？/ 会有一条消息说明这只是静态预览。不会打开应用商店，也不会下载任何文件。围绕替代护理重点重写答案，同时不削弱这些边界。
   布局：使用两栏布局，左侧放置标题和一条简短的“仅限非紧急护理”说明，右侧放置五行白色手风琴行。初始展开第一项，只允许一项展开，并提供 aria-expanded 以及可用键盘操作的按钮。
9. **下载预览和页脚** — H2：随身携带更从容的护理体验。正文：预览 [BRAND] 的 iOS 和 Android 下载路径。使用两个原创按钮，分别标注为 Download for iOS / App preview 和 Get the Android app / App preview，并使用通用智能手机和下载 SVG 图标，而不是平台徽章。任一按钮都会打开一个可关闭的 toast：Static preview: no download is available。页脚：[BRAND]，非紧急虚拟护理概念。所有名称、价格和屏幕均为虚构示例。重复四个导航锚点，并包含可选的 [CREDIT] 链接。
   布局：将 CTA 居中放置在一个 Mint 色、30px 圆角的面板中，桌面端内边距为 64px，移动端为 40px。将两个深色胶囊按钮并排放置，并在移动端全宽堆叠。将 toast 放在底部居中、安全区域偏移之上。最后以简单的页脚行收尾，左侧为品牌和免责声明，右侧为导航，信用信息位于下方。
   动效：toast 以 180ms 淡入并上浮，除非被关闭，否则保持可见四秒，并且绝不跳转离开或发起下载。

## 资产
- 图片：不要使用位图或下载的图片。用 React、CSS 和原创内联 SVG 绘制两部手机、每个应用界面、通用无脸头像、装饰性字段和隐私示意图。将这些作为原创代码绘制视觉素材记录在 ASSETS.md 中。
- 图标：将所有界面图标绘制为 React 组件内的原创内联 SVG 描边；不要使用品牌标识、应用商店徽章、第三方图标包或外部图标文件。在 ASSETS.md 中记录原创 SVG 图形。
- 字体：通过 @fontsource-variable/fraunces 和 @fontsource-variable/inter 自托管 Fraunces Variable 和 Inter Variable。在 ASSETS.md 中列出两个包名、https://www.npmjs.com/package/@fontsource-variable/fraunces 和 https://www.npmjs.com/package/@fontsource-variable/inter、作为包作者的 Fontsource，以及字体的 OFL-1.1。

## 禁止事项
- 不得复制或引用任何现有的远程医疗产品、品牌名称、标志、标语、文案、专有应用界面或标志性插画。
- 不得使用官方应用商店徽章、Apple 或 Google 标志、真实保险公司名称、第三方标志包、商业字体或受限素材；只能使用指定的原创 SVG 图标和自托管的 OFL 字体。
- 不得作出诊断、治疗或疗效声明、效果承诺、保险保证、急救承诺，或缺乏支持的安全性、隐私、认证或合规声明。
- 不得使用真实患者或临床医生的身份、照片、肖像、证言、资质、评分、下载量或使用数据；所有示例人物和内容必须为虚构且不可识别。
- 不得请求、收集、传输或持久化真实姓名、联系方式、健康信息、支付详情、摄像头数据或麦克风数据；所有交互均为本地静态演示状态。
- 不得添加后端、服务器代码、API 路由、数据库、身份验证、真实预约、真实视频通话、外部表单提交、第三方 API、分析或实际下载。
- 不得使用图库照片、位图素材、占位图服务、热链接资源、CDN 脚本、CDN 样式表、外部字体 URL，或渲染演示中的任何网络依赖。
- 不得留下无效控件：原因、日期、时间、评价、视频开关、护理主题、步骤导航、定价、FAQ、移动端菜单、下载按钮和 toast 关闭都必须产生指定的本地响应。
- 不得使用裸目录内部链接；将单页保持在 index.html，并使用指定的 ./index.html#... 锚点链接和相对资源路径。
- 不得发布 source map、将 src/ 复制到 dist/、使 dist/ 超过 20 MB，或更改固定构建命令 npm run build。
- 不得添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图或关键词堆砌的标题；只能使用纯 [BRAND] 文档标题和原创 favicon。
- 不得在 1440×900 和 390×844 下出现水平溢出或控制台错误；保持 44px 点击目标、可读对比度、键盘焦点和 prefers-reduced-motion 行为。

---
— Prompt by VibeFather · https://vibefather.ai/t/telehealth-app-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
