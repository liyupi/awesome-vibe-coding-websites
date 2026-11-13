> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 儿童学习应用落地页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个精致、原创的黏土拟态（claymorphism）落地页。该品牌是一款面向 [APP_FOCUS] 的儿童应用，故事背景设定在 [STORY_WORLD]。购买者和阅读者是成年人；色彩丰富的课程预览则能吸引孩子与他们一起尝试。首屏必须将一块大面积的高饱和粉色黏土场景，与一部大尺寸天蓝色 CSS 手机搭配，手机中包含真实可交互的阅读和数学界面。接着依次呈现：按年龄分层的学习路径、解释练习方式的第二个黏土场景、可用的家长仪表盘示例、平静的安全板块、定价、可访问的本地日常流程表单、常见问题（FAQs），以及最后的邀请。这是一个静态、完全可用的产品预览，并非真实的订阅服务。默认构建请严格使用变量默认值。将所有文案、结构化课程数据、价格、资源路径、替代文本（alt text）和链接保留在 src/content.ts 中。当值发生变化时，重写每一句产品相关语句和每一节课程，以适配新的受众和故事世界；保留相同的板块、控件、色彩系统和细节程度。提供的三张黏土图片是中性的学习伙伴和几何道具，适用于花园和漂浮工坊两种内容。

- 受众：[AUDIENCE]。面向做出选择的成年人，并在面向儿童的课程预览中加入简短、鼓励性的说明。
- 目标：让访客在首屏就能理解产品，尝试适合其年龄的阅读和数学活动，查看家长视图示例，比较透明的价格，并在本地构建一个家庭日常流程示例。
- 语气：温暖、好奇、具体、略带俏皮，并对犯错保持平静。绝不承诺学习成果，也不使用紧迫感、连续打卡压力、内疚感、奖励、用户评价或未经支持的采用数据。

## 技术栈（Stack）
- 框架（Framework）：Vite + React + TypeScript
- 样式（Styling）：Vanilla CSS
- 库（Libraries）：react 和 react-dom（MIT）、vite 和 @vitejs/plugin-react（MIT）、typescript（Apache-2.0）、lucide-react（ISC）、@fontsource/fredoka（OFL-1.1）、@fontsource/dm-sans（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置（Setup）：
  - 使用单一的 index.html 入口，配合 React 组件和语义化 HTML；将所有产品内容和课程数据集保留在 src/content.ts 中。
  - 将 Vite base 设为 './'，build.outDir 设为 'dist'，build.sourcemap 设为 false；npm run build 会运行 TypeScript 检查并执行 vite build。
  - 为每个调色板值以及共享的间距、圆角、阴影和焦点令牌使用 CSS 自定义属性。所有黏土质感阴影、页面布局和动画均在本地 CSS 中编写；不要安装 UI 套件或动画框架。
  - 仅从 Fontsource 导入 Latin 400、500 和 600 字重的 Fredoka 以及 Latin 400、500、600 和 700 字重的 DM Sans，并在本地打包。使用 font-display: swap 以及合理的圆体/无衬线回退字体。
  - 在实施前，将提供的三个图片 URL 下载到 public/images/，使用精确的目标文件名。从 npm 包导入 Lucide 图标并使用内联 SVG 输出。
  - 在 React 中本地实现 ageBand、lessonMode、lessonIndex、answer feedback、parentPeriod、billingPeriod、menuOpen 和 routine-dialog 状态。不使用存储、网络调用、账户或表单提交。
  - 对于可选的朗读功能，仅使用原生 window.speechSynthesis，并选用 localService 标志为 true 的英语语音。如果没有本地语音，保持声音分解交互完全可用，并仅在用户主动询问后显示一条简单的可用性提示。切勿自动播放语音或请求远程语音。
  - 包含一个使用 [BRAND] 的简单文档标题和一个简单的原创 CSS/SVG 几何 favicon。在项目根目录提供 ASSETS.md，列出每个图片、字体和图标的来源及许可证。

## 变量
- [BRAND] — 应用品牌（默认：“Mallowpath”）。虚构的应用名称。在字标、标题、手机页头、套餐确认和页脚中使用这个确切值；不要另造替代品牌。
- [APP_FOCUS] — 应用练习的内容（默认：“Phonics, first words, and everyday math”）。重写产品说明和每个学习路径标签，使其契合这一重点。每个年龄段在手机中都保留一个阅读活动和一个数学活动。
- [AUDIENCE] — 服务的家庭（默认：“Curious kids ages 3–8 and their grown-ups”）。为这些家庭重写面向家长的文案和示例。保留三个年龄段：3–4、5–6 和 7–8。
- [STORY_WORLD] — 课程场景（默认：“A tiny garden of sunbursts, sprouts, and picnic discoveries”）。为这个世界重写每个示例、问题、答案集、单词卡片和下一步建议。若采用漂浮工坊（floating-workshop）替代方案，则使用风筝、包裹、云朵和分组配送；同样的抽象黏土伙伴图片仍然适用。
- [SESSION_MINUTES] — 建议的单次时长（分钟）（默认：“10”）。一个 6 到 15 之间的正整数。所有单次时长文案和作息表单的起始时长都由此值推导。建议阅读分钟数和数学分钟数各为 floor(时长 × 0.4)；剩余分钟数为平静收尾。
- [MONTHLY_PRICE] — 家庭套餐月价（美元）（默认：“8”）。一个正整数美元金额。年度总价为该值的 10 倍，含两个月赠送。所有展示金额和作息摘要都由此推导；在改动后的示例中不要硬编码默认价格。
- [CREDIT] — 在页脚保留一个小号“Template by VibeFather”链接，指向 https://vibefather.ai/t/kids-learning-app-landing-page（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为这些取值重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 淡紫色（Lilac）底色 `#EDE7FF` — 主页面画布和主视觉场景背景。保持这个确切的淡紫色；不要用奶油色、米色或灰色替代。
- 泡泡糖粉（Bubblegum pink）`#FF4FA3` — 大型主视觉黏土伙伴和一个大型辅助黏土球体、阅读卡片、定价高亮和家长图表柱。这是饱和的主视觉主体，而不仅仅是按钮点缀。
- 天蓝色（Sky blue）`#2FADFF` — 大型 CSS 手机机身、大面积数学界面和学习卡片。蓝色手机占据主视觉视觉舞台的大约一半，并在移动端保持清晰。
- 黄油黄（Butter yellow）`#FFD84D` — 蓬松拱形细节、年龄选择、课程反馈点缀和安全区块表面。保持明亮和饱和。
- 草绿色（Grass green）`#4ECB68` — 第二个黏土伙伴、数学令牌、家长仪表盘余额和最终 CTA 条带。
- 深李子墨色（Deep plum ink）`#2D174D` — 所有标题、正文、标签、图标、轮廓、图表标签以及粉色、蓝色、黄色、绿色或淡紫色上的文字。此墨色在全部四种强色上的对比度高于 5:1，在淡紫色上高于 13:1。
- 次级李子色（Secondary plum）`#58466B` — 仅用于白色或淡紫色上的辅助文字；切勿将此颜色放在粉色、蓝色、绿色或黄色上。它在淡紫色上的对比度超过 6.9:1。
- 纸白色（Paper white）`#FFFFFF` — 手机屏幕、仪表盘面板、普通内容卡片以及仅深李子色填充按钮上的文字。切勿在四种亮色上使用白色正文文字。
- 黏土阴影（Clay shadow）`#7A5EA8` — 仅用于 10–20% 透明度的着色环境阴影，绝不用于文字或额外的区块颜色。

### 字体排印（Typography）
- 展示标题、纯文字标志和大型课程答案：Fredoka（OFL），字重 400/500/600
- 正文、导航、表单标签、按钮、图表标签和小型 UI：DM Sans（OFL），字重 400/500/600/700

### 布局与动效（Layout & motion）
- 间距：使用 4px 基础比例。桌面内容最大宽度 1240px，外部边距 48px，主要区块之间 104px，卡片间距 24px。页头高度 80px。桌面主视觉为两栏，46% 文字和 54% 视觉，主区域约 600px 高，没有巨大的空白边距。在 390px 时使用 20px 边距、64px 页头、56px 区块间距和 16px 间隙。移动端主视觉文案足够紧凑，使大型粉色黏土主体和大部分蓝色手机在 390×844 下均可见。每个控件至少保持 44×44 CSS 像素，即使在手机内部也是如此。正文桌面为 18px/1.6，移动端为 16px/1.55；辅助 UI 绝不低于 12px。展示标题桌面 68px/1.02，移动端 42px/1.04，字重 500，字距 -0.025em；区块标题桌面 42px/1.08，移动端 32px/1.12。
- 圆角：蓬松按钮为 18px 圆角，带有内嵌白色顶部高光和 4px 深李子色调底部凸台；按下时表面下移 2px。卡片使用 28px，仪表盘面板 20px，手机外壳 48px，其内屏 34px。黏土物体是有意不规则的柔软椭圆、拱形和圆角长方体。避免为每个表面描边；在白色卡片上使用 14% 透明度的克制 1px 深李子色边框，以及实心 3px 可见焦点环。
- 动效：主视觉元素立即出现。渲染后可以运行一次 500ms、16px 向上的入场动画，但内容绝不能依赖动画才可见。没有启动覆盖层或延迟标题。
- 动效：装饰性黏土场景以最多 6px 的幅度在缓慢的 6 秒循环中漂浮；手机及其所有控件保持静止。按钮按下时使用 160ms 挤压，手机课程和年龄段内容之间使用 180ms 交叉淡入淡出。绝不要将布局高度动画到零。
- 动效：正确答案会使三颗小型本地 CSS 星星弹出 450ms，并显示可见的文字成功消息；错误答案会得到轻柔的 2px 轻推和有用的提示。没有覆盖页面的彩纸、负分、响亮声音或强制推进。
- 动效：通过 IntersectionObserver 以微妙的 14px 平移/350ms 淡入显示区块一次；如果 JavaScript 或观察失败，所有内容仍保持可见。图表柱在 280ms 内从先前高度过渡，没有计数文字。
- 动效：对于 prefers-reduced-motion，移除漂浮、显示变换、轻推、星星和平滑滚动；保留即时状态变化和可见文字反馈。在屏幕外或文档隐藏时暂停装饰循环。
- 图像：确切使用提供的三张原创黏土插画，均来自同一个手工 3D 工作室世界，在 `#EDE7FF` 上使用饱和的 `#FF4FA3`、`#2FADFF`、`#FFD84D` 和 `#4ECB68`。它们展示两个原创抽象学习伙伴、圆润几何道具和空白书籍；它们不包含烘焙文字、数字、字母、标志或屏幕，也不 resemble 现有角色。第一张图片是大型主视觉锚点；手机完全是实时 CSS/HTML，绝不能是图片。第二张图片解释阅读和数字游戏；第三张支持平静的安全区块。让两个案例使用相同的抽象图像并重写实时故事示例。使用 object-fit: contain 或有意的宽松裁剪，保持所有主要角色完整。温和的 CSS 径向遮罩可以使淡紫色边缘羽化，但不要降低饱和度、模糊或着色艺术。根据需要为活动故事世界添加小型原创 CSS 太阳、嫩芽、包裹、风筝、计数卵石和形状插图。这个俏皮的产品页面不需要真实人物或库存照片。

## 页面与区块
### [BRAND] 学习应用（`index.html`）
1. **页眉与移动端导航** — 使用纯实时文本的 [BRAND] 字标和一个原创的四点黏土小图案，而非图片 logo。链接：How it works → ./index.html#learning，For grown-ups → ./index.html#parents，Plans → ./index.html#plans。右侧 CTA：Try a lesson → ./index.html#lesson-preview。包含一个仅在聚焦时显示的 Skip to content 链接。在移动端，将三个文本链接替换为一个 44px 的 Menu 按钮，在页眉下方的紧凑非模态面板中展示相同链接；aria-expanded 必须与之匹配，按 Escape 或选择链接时关闭。当前激活的锚点可带有低调的下划线。
   布局：桌面端 80px / 移动端 64px 的非吸顶栏，背景为淡紫（lilac）#EDE7FF，最大宽度 1240px，文字为深梅紫（deep-plum）#2D174D。字标使用 Fredoka 26px/500。深梅紫 CTA 使用白色 #FFFFFF 文字和柔和蓬松的底边。移动端面板使用白色 #FFFFFF、20px 圆角、柔和阴影和深色墨迹；绝不用永久覆盖层遮住整个页面。
   动效：仅菜单面板在 140ms 内交叉淡入淡出；所有链接保持立即可用。
2. **带真实课程手机的 Hero 区** — 主 id 内容。眉题：Little learning, lots of wonder。默认标题分两行：“Little lessons. / Big discoveries.” 辅助文案：“[BRAND] turns [APP_FOCUS] into [SESSION_MINUTES]-minute adventures for [AUDIENCE]. Start with one small win, then follow their curiosity.” 主蓬松 CTA “Try a lesson” 聚焦 id 为 lesson-preview 的手机中第一个交互词或答案，不打开模态框。次级文本 CTA “See the parent view” 跳转到 ./index.html#parents。下方有一个可见的 “Choose an age” 单选组，包含 3–4、5–6 和 7–8；默认 5–6。更改它会改变手机数据集、课程区块和家长下一步，重置反馈，且绝不将用户带离当前位置。小注：“No account needed to explore.” 手机页眉显示 [BRAND]、“A little practice”，以及 Read / Math 标签页，Read 处于激活状态。所有手机文案保持为 HTML。Read 模式允许点击每个单词块以显示可见的发音或音节拆分，并可选提供本地设备朗读按钮。默认 5–6 屏幕显示原创 CSS 太阳、句子 “The sun is up.” 及可点击的单词标记、提示 “Which word names the bright thing?” 以及 sun / cap / log 选项；sun 正确。3–4 屏幕显示相同的 CSS 太阳、单词块 sun / map / red，提问 “Which word begins with s?”，点击 sun 后高亮 s · u · n。7–8 屏幕显示 “A little gardener plants four sprouts in each of three rows. Each sprout gets a sip of water.” 并提问 “How many rows are in the garden?” 选项为 2 / 3 / 4；3 正确，点击 sprouts 显示 “spr · outs”。Math 模式使用 CSS 计数石子：3–4 为 2 + 1（选项 2 / 3 / 4），5–6 为 4 + 3 组共七颗石子（选项 6 / 7 / 8），7–8 为三盘每盘四个（选项 10 / 12 / 14）。正确答案显示 “You found it! One little win.” 和一个 Next activity 按钮。错误答案显示简短具体的提示并保留所有选项；绝不将失败描述为孩子的特质。每个模式每个年龄段有两个练习：第二个数学题为 1 + 3、8 − 2 和 18 − 7，正确答案为 4、6 和 11；第二个阅读活动使用 map / “A red cap.” / 一个两句话的野餐线索，答案明确无歧义。将这些完整数据集写入内容文件，包括每个答案、提示和发音拆分。显示进度 “1 of 2” 然后 “2 of 2”；第二个正确答案后显示 “A lovely place to pause” 和 Start again。原生语音为可选加入且仅限本地语音；单词高亮和可见拆分无需语音即可工作。若变量更改，可为 [STORY_WORLD] 重写标题（如有用）、所有课程、CSS 物体绘制和提示，同时保留这些精确交互和年龄递进。
   布局：#EDE7FF 上的两栏 Hero 区。左侧最大宽度 520px，标题和正文为深梅紫 #2D174D；次级注释 #58466B 仅用于淡紫背景。将大型 hero-companions.webp 插图放在右侧 54% 视觉舞台中，约 430×430px，其泡泡糖粉（bubblegum）#FF4FA3 伙伴要突出，而非角落小贴纸。在舞台左下方添加一个大型原创 170–210px 粉色 #FF4FA3 黏土球，其后加一个黄油黄（butter-yellow）#FFD84D 拱形。将手机叠加在舞台右边缘，宽 286px、高约 540px，机身使用 unmistakable 饱和天蓝（sky-blue）#2FADFF，内屏白色 #FFFFFF，左上宽高光，底部带色阴影。场景和手机必须共同填满右侧舞台的大部分；至少粉色和蓝色是宽大的 Hero 主体。所有手机文字和答案标签使用深梅紫 #2D174D，包括彩色标签页上。选中的年龄芯片使用 #FFD84D 配深色文字，未选中为白色。手机按钮最小目标 44px；数学标记使用 #4ECB68 和 #FFD84D，绝不使用彩色小字。在 390px 宽度下，文案在前，视觉紧随其后，舞台高 390–430px，手机宽 236px 位于右侧，场景宽 240px 位于左侧后方；保持粉色伙伴可见、手机控件不被遮挡，舞台在 350px 内容宽度内。不要用 transform 缩放整个手机导致点击目标变小。让手机屏幕重排并减少装饰性空白。任何图片、球体或拱形不得与标题或控件重叠。
   动效：仅装饰场景轻微浮动；CSS 手机不移动。标签页和年龄切换使用 180ms 内容交叉淡入淡出，屏幕高度稳定。正确设置 aria-pressed 或单选语义，在礼貌的实时区域播报反馈，仅在适当时在完成后将焦点放在 Next activity 上。
3. **年龄感知路径** — Id learning。标题 “A little path for every stage.” 引言 “Pick a starting point. You can change it whenever curiosity takes a new turn.” 重复三个年龄控件，与 Hero 区绑定同一 ageBand 状态，后跟一个宽大的激活路径卡片。默认 3–4：标题 “Notice & name”，阅读技能 “Hear first sounds”，数学技能 “Count to five”，动手创意 “Find three sunny shapes around the room”，家长提示 “Try one word, one count, and one high-five.” 默认 5–6：标题 “Sound it, solve it”，阅读技能 “Blend short words”，数学技能 “Add and subtract to ten”，动手创意 “Pack a seven-piece pretend picnic”，提示 “Say the sounds together, then count what you packed.” 默认 7–8：标题 “Read, reason, repeat”，阅读技能 “Read a two-sentence clue”，数学技能 “Make equal groups”，动手创意 “Plan a garden with three rows of four”，提示 “Ask how they found the answer before trying another.” 一个纯文本链接 “Try this age in the phone” 滚动到 ./index.html#lesson-preview 并聚焦当前模式的第一个控件。这是真正的三态课程，而非仅颜色变化的标签切换。为更改后的 [APP_FOCUS]、[AUDIENCE] 和 [STORY_WORLD] 重写所有阶段标题、任务和提示。
   布局：使用全宽黄油黄 #FFD84D 区块，桌面端距页面边缘内缩 24px，移动端为 0，顶部圆角宽大。所有文字和图标为 #2D174D。选中路径位于白色 #FFFFFF 面板中；三个等宽水平列分别放置 Reading、Math 和 Away from the screen，数学列使用草绿（grass-green）#4ECB68 标签，阅读列使用粉色 #FF4FA3 标签。这些标签上使用 #2D174D，绝不使用白色。桌面端标题在左、年龄控件在右；移动端全部堆叠，控件在一行，内容列变为垂直。使用小型 CSS 黏土计数器，而非为每个项目重复通用彩色图标圆。
   动效：激活卡片在 180ms 内交叉淡入淡出，并保留其最小高度以防止页面跳动。无轮播或自动前进。
4. **通过游戏阅读与数数** — 标题 “Two ways to wonder. One happy rhythm.” 文案 “A word to notice. A puzzle to try. A little room to make it your own.” 使用 learning-playground.webp 作为主图。两个紧凑内容块分别写着 “Words with a little wiggle” — “Tap a word, explore its sounds, and find it inside a tiny story.” 和 “Numbers you can move around” — “Count real-looking pieces, spot a pattern, and talk through a small problem.” 第三个纯文本注释写着 “[SESSION_MINUTES] minutes is a starting point, not a finish line.” 包含一个功能性 “Try reading” 按钮，设置 Read 模式并聚焦手机；“Try math” 对 Math 模式执行相同操作。所有手机操作在当前年龄段生效，而不仅是默认年龄段。变量不同时重写这些描述及相关实时示例。
   布局：返回淡紫 #EDE7FF。桌面端图片占 48% 宽度，至少 420px 宽，采用宽松裁剪，保留原有粉色 #FF4FA3 和绿色 #4ECB68 伙伴以及亮蓝/黄几何道具。文字占另一半。阅读块有宽大的粉色 #FF4FA3 柔和不规则底衬，数学块为天蓝 #2FADFF；所有文字和图标 #2D174D。时间注释在淡紫背景上使用 #58466B。移动端图片全宽位于两个堆叠彩色块上方；不要将其缩小为缩略图。按钮保持纯深梅紫/白色或白色/墨色蓬松控件。
   动效：细微的一次性区块显现；无滚动劫持式叙事或图片下方移动文字。
5. **家长仪表盘预览** — Id parents。小标签 “The grown-up view”。标题 “See the small steps adding up.” 文案 “A clear little picture of practice, with space for your next conversation.” 展示一个真实的 HTML/CSS 仪表盘，标题为 “Practice at a glance”，带有可见的 “Illustrative activity” 标签。一个双选项分段控件切换 Sample week / Previous sample。Sample week 有七次会话 [8,12,6,10,11,9,14] 分钟，总计 70，阅读 42，数学 28；previous sample 为 [6,8,6,9,10,8,9]，总计 56，阅读 34，数学 22。从数组推导总计和百分比标签；x 轴标注 1–7，图注为 “Practice sessions”，不含日历日期。三个 KPI 卡片显示总分钟、阅读分钟和数学分钟。柱状图配有一个小型可访问文本列表或包含全部七个值的表格。阅读/数学水平平衡条的数字印在填充区域外。侧面板标题为 “A gentle next step”，随共享年龄段变化：3–4 “Name three things that start with the same sound”；5–6 “Build a short word, then make seven in two groups”；7–8 “Read a clue, then explain a group of four.” 一个 “Make a sample routine” 按钮打开本地家长表单（如下所述），当前年龄已预选。绝不要暗示这些示例指标来自真实儿童或活跃账户。B 必须为其英语故事和天空工坊重点重写下一步和标签，同时保持同样有意义的可工作仪表盘。
   布局：使用天蓝 #2FADFF 外表面，40px 大圆角，桌面端 40px 内边距，移动端 20px。标题和引言 #2D174D。仪表盘为干净的白色 #FFFFFF 面板，深梅紫 #2D174D 字体，三个紧凑 KPI 块和一个 7 柱图表。图表柱交替使用粉色 #FF4FA3 和绿色 #4ECB68；所有小标签放在白色上的深色墨迹中，而非亮色窄柱内。侧边下一步面板为黄油黄 #FFD84D 配 #2D174D 文字。桌面端仪表盘和侧面板为 2:1 列；移动端堆叠且无水平滚动，图表柱等分弹性并保持全部 7 个可见。样本周期选择器使用深梅紫激活填充配白色文字。
   动效：更改样本周期在 280ms 内更新指标和图表，无任意数字递增。礼貌的实时摘要播报一次新总计。
6. **安静的练习场所** — Id safety。标题 “Made for play. Kept calm by grown-ups.” 文案 “Curiosity does not need a noisy room.” 使用 calm-corner.webp 及三条具体原则：“No ads or open chat” — “The lesson preview stays focused on the activity in front of you.”；“Your pace, your pause” — “Choose a starting age and a short routine. Stop after a little win, whenever you like.”；“Less to enter” — “The sample setup asks for an age band and a practice preference, never a child’s name, birthday, email, or photo.” 一个小链接 “What does the preview remember?” 打开相关 FAQ 项并滚动到它；答案说明值仅存在于当前页面会话中，刷新即重置。不要在此放置印章、徽章、加密声明、认证名称或对未来生产服务的承诺。
   布局：温暖但饱和的黄油黄 #FFD84D 色带，深梅紫 #2D174D 标题和正文。桌面端将大型 calm-corner 图片放在右侧，至少 360px 宽，粉色 #FF4FA3 和绿色 #4ECB68 伙伴在淡紫 #EDE7FF 背景上清晰可见。左侧三行简短原则使用 Lucide 的小型原创线条图标，而非一堆通用徽章卡片。使用 70% 透明度的白色 #FFFFFF 细分割线和深色标签。移动端图片位于第一句介绍之后，随后是原则行。无文字覆盖插图。
   动效：仅一次轻柔显现；此区块无循环运动。
7. **简单定价与本地流程表单** — Id plans。标题 “A small plan for big curiosity.” 引言 “Try a little first. Choose a rhythm that fits your family.” 计费切换 Monthly / Yearly，Monthly 选中。Starter 卡片标题 “Little try”，价格 “Free”，详情 “Try the reading and math previews”、“Explore one age at a time”、“See a sample parent view”，CTA “Try a lesson” 聚焦手机。Family 卡片标题 “[BRAND] Family”，月付价格 “$[MONTHLY_PRICE] / month”。年付总价为 10 × [MONTHLY_PRICE]，默认显示为 “$80 / year”，下方有 “$6.67 per month, billed yearly” 和 “Two months included”；为不同价格计算两个值。Family 详情 “Reading and math paths”、“All three age stages”、“A clear grown-up view” 和 “A routine you can shape”。CTA “Build a family routine” 打开与仪表盘相同的可访问对话框。卡片下方写 “Explore the setup here. No account or payment is created.” 对话框标题为 “A little routine for your family”，带有纯文本 “For grown-ups” 标签。它包含年龄段选择（3–4、5–6、7–8）、练习偏好单选 Reading / Math / A bit of both，以及会话时长选择 6 / 8 / 10 / 12 / 15 分钟，初始值来自 [SESSION_MINUTES]。将当前选中的月付或年付家庭计划显示为只读行及其计算金额；访客可在对话框外更改计费。提交按钮 “Make my sample routine” 阻止默认行为并在无网络请求下生成内联结果：对于 Both，阅读和数学分钟各为 floor(length × 0.4)，剩余分钟为平静收尾；对于 Reading 或 Math，将 length − 2 分钟分配给该练习，2 分钟用于收尾。默认 10 分钟且 Both 时显示 “4 min of word play + 4 min of number play + 2 min to pause and share.” 包含当前数据集中适合年龄的活动。成功文案 “Your next little adventure is ready.” 和次级操作 “Adjust my routine” 返回字段。关闭时丢弃表单输入；无持久化、邮箱输入、儿童档案字段、真实结账、身份验证或订阅操作。为对话框提供可访问名称、焦点陷阱、Escape 关闭、可见 Close 按钮和焦点恢复到打开者。
   布局：在淡紫 #EDE7FF 上居中标题和蓬松计费切换。两张卡片最大宽度 880px，Starter 白色 #FFFFFF，Family 为大型泡泡糖粉 #FF4FA3 表面配 #2D174D 文字。Family 上一个小黄油黄 #FFD84D 标签写着 “Room to explore”；无虚假热门徽章。卡片价格为 Fredoka 48px/500。深梅紫 #2D174D 填充 CTA 配白色文字；描边次级 CTA 配深色墨迹。移动端卡片堆叠，计费金额干净换行，绝不裁切。对话框最大宽度 540px，最大高度 calc(100dvh - 32px)，内部可滚动，白色配淡紫字段表面和黄色选中单选，所有标签 #2D174D。仅在模态框打开时锁定正文滚动。生成的流程为草绿 #4ECB68 面板配深色文字。保持 44px 目标和清晰字段标签。
   动效：切换即时更改金额，带 160ms 淡入淡出；绝不对数字做动画。对话框以 120ms 不透明度淡入打开，无弹跳；减少动效时立即显示。
8. **有用的问题** — Id questions。标题 “A few things grown-ups ask.” 使用五个原生 details/summary 项，第一项默认展开：“Where should we start?” — “Choose the age that feels closest, then try one reading activity and one number activity. You can change the age at any time.”；“Does every word have sound?” — “Tap a word to see its sound or syllable breakdown. Read-aloud is available when your device has a local English voice; the activity still works without audio.”；“Do we have to finish a lesson?” — “No. A short pause after one activity is a good stopping point. The preview never asks you to protect a streak.”；“What does the preview remember?” — “Your age choice, answers, billing choice, and sample routine stay in this open page only. Refreshing starts the preview again. Nothing is submitted or saved.”；“What happens when I choose a plan?” — “You can build a sample family routine and compare the displayed plan. This preview does not create an account, take payment, or start a subscription.” 使第四项可通过 id preview-memory 寻址；安全链接在滚动前打开该 details 元素。为更改的变量重写世界特定示例，不改变本地预览行为。
   布局：淡紫 #EDE7FF 上 840px 窄列，#2D174D 摘要为 20px/600，辅助文字 #58466B 仅用于淡紫背景。18% 透明度的 #2D174D 细分割线；无厚重卡片。每个摘要行最小高度 44px，宽松内边距和深色加/减图标。展开答案最大宽度 680px。移动端摘要文字自然换行，不与图标碰撞。
   动效：原生 details 行为；如允许动效，加号标记在 120ms 内旋转 45 度。不要用显现动画隐藏答案。
9. **最终邀请与页脚** — 标题 “One little adventure, whenever you are ready.” 简短文案 “Pick an age. Try a word. Make room for a small discovery.” 主按钮 “Try a lesson” 跳转到 ./index.html#lesson-preview 并聚焦当前手机控件。次级 “Build a family routine” 打开本地对话框。页脚显示精确的实时文本 [BRAND]、“Little practice. Plenty of wonder.”、链接 Learning / Grown-up view / Plans / Questions 指向其明确的 ./index.html# 锚点，以及可选的小型 [CREDIT] 链接。无社交占位链接、虚构地址、版权年份或日历日期。不要在可见产品 UI 中暴露提示词指令、开发者注释、模型名称或资源许可。
   布局：大型草绿 #4ECB68 邀请色带，顶部 40px 圆角，居中深梅紫 #2D174D 标题和正文；在外缘（远离文字处）添加几个原创黄油黄 #FFD84D 和粉色 #FF4FA3 黏土石子。深梅紫按钮配白色文字，次级为白色配深梅紫文字。页脚返回淡紫 #EDE7FF，配 #2D174D 品牌和链接；可选小字版权信息在淡紫背景上使用 #58466B。桌面端页脚为单行平衡布局，移动端为简单堆叠布局，间距 16px。视口边缘不裁切任何内容。
   动效：仅控件按下状态；无跑马灯、自动滚动或超大移动页脚字标。

## 资源
- 图片：将 https://media.vibefather.ai/assets/21e11a21-3f2a-4103-8f50-f7f622e8e2dd/hero-companions.webp 下载到 public/images/hero-companions.webp。替代文本：“Two original pink and green clay learning companions among bright rounded shapes.” 用作实时 CSS 手机后方和左侧的大型主视觉场景。在 ASSETS.md 中注明：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template. 所有者需在构建前生成并上传此资源；不要用占位符替换它。
- 图片：将 https://media.vibefather.ai/assets/21e11a21-3f2a-4103-8f50-f7f622e8e2dd/learning-playground.webp 下载到 public/images/learning-playground.webp。替代文本：“Friendly abstract clay companions exploring a blank book and colorful counting pieces.” 在 Reading and numbers through play 中大幅使用。在 ASSETS.md 中注明：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- 图片：将 https://media.vibefather.ai/assets/21e11a21-3f2a-4103-8f50-f7f622e8e2dd/calm-corner.webp 下载到 public/images/calm-corner.webp。替代文本：“Two small clay learning companions resting inside a soft arch with colorful cushions.” 在安全区块中以较大尺寸使用。在 ASSETS.md 中注明：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- 图标：使用 lucide-react，ISC，https://github.com/lucide-icons/lucide，仅用于通用导航、音量、勾选、加号、减号、关闭、叶子和家长视图符号；在本地以内联 SVG 渲染。用 CSS/SVG 自行制作微小的黏土太阳、嫩芽、野餐、风筝和包裹插图，并在 ASSETS.md 中将它们记录为原创代码绘制艺术。不要使用品牌图标、导入的吉祥物艺术或标志库。
- 字体：通过 @fontsource/fredoka 自托管 Fredoka，通过 @fontsource/dm-sans 自托管 DM Sans，两者均为 OFL-1.1。仅将指定的拉丁子集/字重导入本地包。来源信息：https://fontsource.org/fonts/fredoka 和 https://fontsource.org/fonts/dm-sans。在 ASSETS.md 中列出包名、字重、来源 URL 和许可证；不要发起远程字体请求。

## 禁止事项
- 除非用户明确要求，否则不要更改固定技术栈。使用 npm run build 在 dist/ 中构建静态文件，Vite base 设为 ./，输出压缩，不生成 source map，也不将 src/ 复制到 dist/。保持完整的 dist/ 在 20 MB 以下。
- 不得有后端、服务器代码、API 路由、数据库、身份验证、外部 API、支付集成、分析、跟踪器、新闻通讯服务或任何会提交到某处的表单。所有交互数据仅存在于 React 内存中；不要使用 localStorage、sessionStorage、cookie 或 service worker。
- 交付构建中的所有内容必须本地化：下载全部三张精确生成的图片，打包字体和图标，并使用相对资源路径。不得热链接、远程脚本、CDN 链接、外部音频文件、占位服务或缺失图片块。在 ASSETS.md 中记录每张图片、字体和图标及其来源、作者（如适用）和许可证。
- 不得使用现有学习产品吉祥物、品牌玩具、可识别的角色剪影、受版权保护的娱乐角色、真实人物肖像、标志图片、复制的 UI、复制的文案、商业字体或受限库源代码。所有黏土伙伴和代码绘制的课程艺术必须为原创。生成的图像不包含文字、字母、数字、水印、标志或界面截图。
- 不得使用真实儿童或真实人物。不得请求、收集或展示个人儿童档案、儿童姓名、确切年龄、出生日期、儿童电子邮件地址、照片、录音或位置。表单仅询问粗略年龄段、练习偏好和会话时长，不包含身份字段。
- 不得有未经证实的学习成果、考试成绩、医疗、客户数量、奖项、评分、合规、加密或安全认证声明。明确将家长活动标记为示意性样本数据。不得将样本进度转化为关于实际学习者的陈述。
- 不得弱化或替换调色板。保持 #EDE7FF 为基础色，并准确使用饱和的 #FF4FA3、#2FADFF、#FFD84D 和 #4ECB68。粉色黏土主体和蓝色手机必须占据首屏的广泛可见区域，包括移动端；仅彩色按钮不满足视觉方向。不得米色/奶油色重新设计、仅中性色首屏、通用紫色渐变背景或仅排版首屏。
- 保持 WCAG AA 文本对比度。在所有明亮表面上使用 #2D174D 作为文本颜色，仅在白色或淡紫色上使用 #58466B。白色文本仅用于深梅色填充，绝不用于粉色、蓝色、黄色或绿色。保持可见的焦点环和真实文本标签；不得仅依赖颜色来表示答案、选中状态、图表或验证。
- 不得将手机 UI、图表、文本、价格或课程控件烘焙到图像中。手机标签页、年龄选择器、答案、单词块、下一个活动、周期选择器、账单切换、FAQ 链接和常规表单都必须支持键盘、触摸和指针操作。更改年龄必须改变真实内容和难度。不得有死按钮、假加载、仅装饰性图表或占位链接。
- 不得自动播放音频、请求麦克风权限、远程文本转语音或在没有明确用户操作的情况下播放。朗读为可选功能，仅限于可用的本地英语浏览器语音；视觉声音分解和所有课程必须在语音支持缺失时仍能工作。关闭、更改课程或离开页面时取消语音。
- 使用显式的 ./index.html#section 链接，绝不使用裸目录 URL。唯一的 index.html 页面必须直接打开。提供移动菜单、跳过链接、正确的按钮/标签/单选语义、可访问的对话框行为、表单标签、礼貌的答案反馈以及图表值的文本替代。
- 不得有日历日期、版权年份、虚假紧迫感、倒计时、连续打卡压力、惩罚性反馈、无支持的流行度徽章、推荐语、媒体标志、社交占位符或虚构的生产账户活动。不得出现公开竞争对手名称或比较。
- 所有网站文案、课程数据、标签、替代文本和消息均为美式英语。在默认示例中使用精确的变量默认值。将所有文案、链接、图像路径、价格和结构化课程数据集保留在一个内容文件中，并在变量不同时一致地重写它们；为两个示例保留相同的三张中性提供的黏土图片。
- 除可选的 [CREDIT] 页脚链接外，不得在产品 UI 内提及 VibeFather。资产 credits 和实现细节属于 ASSETS.md，不属于面向客户的部分。本地表单和计划流程仍必须清楚说明不会创建账户或付款。
- 不得滚动劫持、捕获指针、将初始内容隐藏在动画后面、移动手机控件、用装饰艺术遮挡文本、裁剪页脚或允许水平溢出。在 1440×900 和 390×844 下，所有控件和文案必须可用且零控制台错误。每个交互目标至少 44px；优先减少动态效果，并在要求时移除装饰性动态效果。

---
— Prompt by VibeFather · https://vibefather.ai/t/kids-learning-app-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
