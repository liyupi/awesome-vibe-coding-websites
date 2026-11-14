> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 驾校网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个清晰、明快的一页式网站，[BRAND] 是一家虚构的驾校，位于 [CITY]，服务于 [AUDIENCE]。其视觉识别采用暖白底色上的路标黄，搭配海军蓝点缀，圆润自信的字体，以及代码绘制的道路标线图案（虚线中心线、路线圆点、弯道箭头）。页面以一张友好的汽车照片为视觉锚点，列出四个课程套餐及每节课的示例价格，运行一个包含五道题的练习理论测验，提供即时反馈和分数显示，介绍三位虚构教练及其生成的人像，然后添加备考提示、服务区域标签，以及一个保存在本地的课程预约示例。

- 受众：[AUDIENCE]——以及通常为套餐付费的家长。也包括自由职业者和本地培训机构，他们可以将此布局适配到任何提供套餐和练习测试的辅导课程业务。
- 目标：让紧张的访客露出微笑并完成预约：用汽车和一屏之内的承诺赢得他们，让测验在九十秒内证明教学风格，直白地标明套餐价格，并让他们无需注册即可在浏览器中锁定一个课程时段。
- 语气：平实、温暖、略带幽默——像一位在安静街道上的耐心教练。短句、真实价格、无术语、无恐吓手段。对安全基础知识充满信心但不说教，并诚实地说明测验是练习，而非正式考试。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react (MIT)、react-dom (MIT)、vite (MIT)、typescript (Apache-2.0)、tailwindcss (MIT)、motion (MIT)、lucide-react (ISC)、@fontsource/fredoka (OFL-1.1)、@fontsource/figtree (OFL-1.1)
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 为 './'，build.outDir 为 'dist'，build.sourcemap: false。无路由、无后端、无服务器代码。
  - 安装 Tailwind CSS 3.4 及 PostCSS 和 Autrefixer。使用下方精确的调色板扩展主题，并设置 fontFamily.display 'Fredoka' 和 fontFamily.body 'Figtree'。
  - 通过 @fontsource/fredoka 和 @fontsource/figtree 自托管 Fredoka 字重 500 和 600 以及 Figtree 字重 400、600 和 700，在 src/main.tsx 中导入。切勿从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、AnimatePresence、useReducedMotion）实现测验反馈、标签弹出和显示动画；每个动画都要以 useReducedMotion() 为条件。
  - 将所有文案和数据保留在 src/content.ts 中：品牌字符串、承诺语、套餐、带选项的测验问题、正确索引和解释、讲师、提示、服务区域、预约日期和时段标签、FAQ。当变量值变化时，在该文件中重写依赖的文案，并从 [BRAND] 派生存储键和 slug，确保不残留默认品牌痕迹。
  - 将测验实现为显式状态机：intro、question（回答后锁定）、results。仅在 React 状态中存储每个问题的答案；'Retake quiz' 重置一切。
  - 在代码中将道路标线图案绘制为可复用的内联 SVG 组件：虚线中心线分隔线（26px 虚线，34px 间隔）和提示列表的路线点线。切勿拍摄它们。
  - 将预约请求持久化到 localStorage，键为 [BRAND_SLUG] + '-lesson-request'；验证恢复的 JSON 并从格式错误的数据中静默恢复。
  - 仅使用这些 lucide-react 图标：Car、Star、Check、X、ChevronDown、MapPin、RotateCcw、ArrowRight、CalendarCheck、Award、Clock、Users。
  - 在构建前将六张生成的图片下载到 Assets 中列出的精确公共路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、源 URL、作者或生成器以及许可证。
  - 一个纯 <title> 为 [BRAND] 和一个 favicon（一个带有海军蓝 Car 字形的黄色圆圈）就足够了；无需 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 品牌（默认：“Greenlight Driving School”）。虚构的驾校名称；代码中会据此派生出一个路标标志。
- [CITY] — 城市（默认：“Riverbend”）。驾校服务的城镇；出现在主视觉徽章、提示、服务区域和页脚中。
- [AUDIENCE] — 受众（默认：“first-time teen drivers and adults getting back behind the wheel”）。用平实语言说明课程面向谁。
- [PROMISE] — 承诺（默认：“Patient instructors, calm cars, no yelling. Ever.”）。驾校的一句话承诺；在主视觉中作为独立句子出现，并在页脚中再次出现。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/driving-school-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 暖白 `#FFFCF4` — 页面底色
- 卡片白 `#FFFFFF` — 卡片、测验面板、预约表单
- 标志黄 `#FFC72C` — 主强调色：CTA、选中标签、对勾图标、热门卡片
- 柔黄 `#FFF4D3` — 色带、徽章和浅色标签
- 藏青 `#1E3A6E` — 按钮、链接、标志圆环、页脚
- 墨藏青 `#17294D` — 标题和正文
- 石板灰 `#3B4358` — 次要文本和元信息
- 虚线灰 `#CDD3E0` — 细线、虚线和默认边框
- 测验绿 `#2F9E63` — 正确答案填充和回顾圆点
- 测验红 `#D94848` — 错误答案填充和错误文本

### 字体排印
- 展示字体：标题、套餐名称、测验标题：Fredoka（OFL），字重 500/600
- 正文字体：段落、答案、标签、表单：Figtree（OFL），字重 400/600/700

### 布局与动效
- 间距：8px 基础网格。内容外壳最大宽度 1120px，桌面端侧内边距 32px，移动端 20px。页头 72px。桌面端区块垂直内边距 96px，移动端 64px。套餐网格间距 24px。正文每行最多 62 个字符。
- 圆角：一切都要友好：按钮、标签和徽章用 999px 胶囊形；卡片、照片和测验面板用 20px；输入框用 12px。道路标线 SVG 分隔线为方形 3px 线条，虚线 26px、间隔 34px。
- 动效：测验：选中的答案以 160ms 缩放弹跳落定；错误选择在 240ms 内抖动 6px 两次；解释面板上滑 180ms；结果分数在 600ms 内填充一个小型手绘表盘。
- 动效：道路标线分隔线以每秒 8px 的循环缓慢向左漂移——仅为装饰，在 prefers-reduced-motion 下完全静止。
- 动效：卡片悬停时上浮 4px（180ms）；标签选中时弹至 1.06；区块在滚动时显现一次，上移 14px 并以 420ms ease-out 淡入，错开 60ms。
- 动效：在 prefers-reduced-motion: reduce 下，上述所有动画最多变为 100ms 的透明度变化，所有交互保持完全可用。无页面视差、无光标特效、无自动播放。
- 图像：一组统一暖晨色调的摄影图：一辆欢快的无品牌黄色小型车行驶在安静的郊区街道上——前四分之三英雄视角、座舱细节、路边下车——外加三张户外同款柔光下拍摄的影棚级虚构教练肖像，年龄和族裔各异，不描绘真实人物。车辆无可见徽标或可读车牌；无路人。道路标线、标志形标签和路线涂鸦均以 SVG 绘制，绝不使用照片。

## 页面与区块
### [BRAND] — [CITY] 的驾驶课程（`index.html`）
1. **页眉与首屏** — 页眉（72px，92% 暖白色并带背景模糊）：代码绘制的标志图形——一个黄色圆形，带 3px 海军蓝圆环，内含海军蓝 Lucide Car 字形——旁边是 Fredoka 600 字体的 [BRAND]；导航锚点：Packages、Practice quiz、Instructors、Tips、Areas；右对齐海军蓝胶囊按钮 'Book a lesson'。首屏：柔黄色徽章胶囊 'Now serving all of [CITY]'；H1 'Green lights ahead.'；段落 'We teach [AUDIENCE]. [PROMISE] Pick a package, meet your coach, and roll out of the parking lot on day one.'；主黄色胶囊按钮 'Book your first lesson'（海军蓝文字）和海军蓝描边胶囊按钮 'Try the 5-question quiz'。下方信任行：'4.9 stars · 620 learners taught · 92% first-try road-test pass*'，附 12px 石板灰脚注 '*sample figures for this demo'。右侧：首屏汽车照片置于 20px 圆角相框中，一条绘制的虚线道路线 SVG 从照片下方延伸至左边缘，末端为一个小弯箭头。
   布局：12 列网格：文案位于第 1–6 列，照片位于第 7–12 列，16:9 比例并使用 object-cover。H1 使用 Fredoka 字体，字号 clamp(44px, 5vw, 68px)，墨海军蓝色。信任行使用黄色 Star 图标和石板灰文字，单行显示，移动端换行为两行。道路线 SVG 绝对定位在照片底边下方，被区块裁切。移动端：文案先堆叠，照片在下方全宽显示，16:9 比例；每个点击目标至少 44px。
   动效：照片从 scale 1.03 在 600ms 内稳定；徽章、H1、段落、按钮和信任行以 80ms 错峰上移 14px；虚线道路线在 900ms 内绘制完成（stroke-dashoffset 过渡），在减少动态效果模式下为静态。
2. **课程套餐** — 此区块上方有一条全宽道路标线分隔线：柔黄色背景上 3px 虚线灰虚线中心线，虚线缓慢漂移。眉题 'LESSON PACKAGES'；标题 'Pick a lane.'。四张卡片：'First-Timer' — '$480 · 6 lessons' — '$80 a lesson — controls, parking lots, and your first quiet street.' 特性 'Six 60-minute lessons'、'Pickup anywhere in the service area'、'A syllabus card for parents'；'Confident Commuter' 带海军蓝 'Most popular' 标签 — '$730 · 10 lessons' — '$73 a lesson — traffic, merges, and the school-run route.' 特性 'Ten 60-minute lessons'、'Two evening lessons in real traffic'、'Free re-test briefing'；'Road-Test Ready' — '$980 · 14 lessons' — 'Fourteen lessons plus a mock test on the real test routes.' 特性 'Fourteen lessons'、'Mock road test'、'School car on test day'；'Refresher' — '$225 · 3 lessons' — 'For licensed drivers rebuilding calm after a break.' 特性 'Three 60-minute lessons'、'Highway module'、'Written progress note'。每张卡片页脚是一个 'Book this package' 链接，将该套餐设置到预约表单的下拉选择中并滚动到预约区块。
   布局：桌面端 4 列网格，平板端 2×2，移动端单列。卡片为白色（20px 圆角，1px 虚线灰边框），每个特性带黄色 Check 图标；热门卡片填充标志黄色配墨海军蓝文字，顶部带标签胶囊，比相邻卡片高 8px。价格行使用 Fredoka 600；每课时明细使用石板灰。页脚链接使用 ArrowRight。
   动效：卡片以 60ms 错峰显现；悬停上浮 4px；热门卡片的标签在显现后弹出。分隔线虚线在缓慢装饰循环中向左漂移。
3. **练习理论测验** — 柔黄色背景带。眉题 'PRACTICE THEORY'；标题 'Five questions. No grades, no pressure.'；引言 'Sample questions written by our instructors — a warm-up, not the official test bank.' 测验卡片：进度点行加 'Question X of 5'、问题、四个答案按钮，以及即时反馈——正确选择填充测验绿色并带 Check 和 'Right! {explanation}'；错误选择将所选按钮填充测验红色并带 X，用绿色描边正确按钮，并显示 'Not quite — {explanation}'。回答后出现 'Next question' 按钮。问题：(1) 'A solid yellow line on your side of the road means:' A 'Pass only when the lane is clear' B 'Do not cross it to pass' C 'The lane ends ahead' D 'Parking is allowed after dark' — 正确 B — 'Solid yellow on your side means no passing — wait for a broken line on your side.' (2) 'You reach a stop sign and the intersection is empty. You:' A 'Roll through slowly' B 'Stop only if another car appears' C 'Come to a complete stop before the line' D 'Tap the horn and proceed' — 正确 C — 'A full stop behind the line, every time — even for empty streets.' (3) 'A safe following distance in clear daylight is at least:' A 'Half a second' B 'One second' C 'Three seconds' D 'Ten seconds' — 正确 C — 'Count three seconds from the moment the car ahead passes a landmark.' (4) 'A pedestrian steps into an unmarked crosswalk. You:' A 'Honk and keep moving' B 'Stop and let them cross' C 'Slow only if they look at you' D 'Drive around behind them' — 正确 B — 'Marked or not, a crosswalk belongs to the person in it.' (5) 'The car starts to hydroplane. You:' A 'Brake hard' B 'Ease off the accelerator and steer straight' C 'Accelerate to regain grip' D 'Turn sharply toward the shoulder' — 正确 B — 'Ease off, hold the wheel steady, and let the tires find the road again.' 结果屏幕：'You scored {n} / 5' 配分层文案——5 'Perfect run — you're road-ready!'；4 'Strong cruise — peek at the one that got away.'；2–3 'Cruising — a couple more rounds will lock it in.'；0–1 'Green light soon — add a theory session to any package.' 五点回顾（正确为绿色，错误为红色）和 RotateCcw 'Retake quiz' 按钮。
   布局：居中测验卡片 640px 宽，白色（20px 圆角，1px 虚线灰边框）。答案按钮为全宽 56px 胶囊，带 A–D 字母圆盘；状态：空闲白色配海军蓝边框，悬停柔黄色，正确绿色配白色文字和 Check，错误红色配白色文字和 X，揭示的正确答案为绿色描边。进度点位于左上，计数器位于右上。回答后按钮禁用；反馈面板为 aria-live='polite'，测验完全支持键盘操作。移动端：卡片保持 20px 内边距，按钮保持 56px。
   动效：所选答案以 160ms 缩放弹出稳定；错误选择在 240ms 内抖动 6px 两次；解释在 180ms 内上滑；结果屏幕上分数表盘在 600ms 内填充；重考以 200ms 交叉淡入重置。
4. **教练简介** — 眉题 'YOUR COACHES'；标题 'Three people you'll genuinely like.' 卡片包含肖像、姓名、角色、一句话简介和年限标签：'Maya Okafor — Lead instructor' — 'Parallel parks on the first try. Teaches you to.' — '12 years teaching'；'Daniel Reyes — Highway specialist' — 'Ex-long-haul trucker. Merges and interstates are his happy place; after him, nothing will rattle you.' — '23 years driving'；'Ingrid Halvorsen — Returning-adult specialist' — 'Took her own license at 34. Specializes in drivers starting again at any age.' — '9 years teaching'。网格下方脚注：'Portraits are fictional, generated for this demo — friendly placeholders you can swap for your own team.'
   布局：3 列白色卡片网格（20px 圆角，1px 虚线灰边框）：顶部 3:4 肖像 20px 圆角，姓名 Fredoka 600，角色石板灰，一句话简介，柔黄色年限标签。移动端：单列，肖像最大宽度 320px 并居中。
   动效：一次性错峰显现（上移 14px，60ms 错峰）；除标准 4px 卡片上浮外无悬停动画。
5. **备考提示与服务区域** — 白色区块，两部分。左侧：眉题 'TEST-PREP TIPS'；标题 'The calm checklist.' 六条编号提示在绘制的路线线上：'01 Book the test for a quiet weekday morning if you can — less traffic to think about.'；'02 Do one mock test on the actual test routes around downtown [CITY].'；'03 Practice the three-point turn in the empty lot on Fern Street until it's boring.'；'04 Say your mirror-signal-shoulder check out loud; examiners hear confidence.'；'05 Pack your permit, glasses, and a water bottle the night before.'；'06 Book a final lesson in the same week as the test — warm hands, warm habits.' 右侧：服务区域卡片，眉题 'WHERE WE PICK UP' 和 MapPin：标签 'Downtown [CITY]'、'Northgate'、'Fair Oaks'、'Cedar Flats'、'Brookfield'、'Mill Race'，以及文字 'We pick you up anywhere inside the loop — home, school, or work.'
   布局：左侧 7 列：提示作为行排列在垂直虚线 SVG 路线线上，每条提示为黄色圆形数字配海军蓝文字，文案在旁边。右侧 5 列：柔黄色卡片，带换行标签（999px，海军蓝边框 30%）。移动端：提示堆叠，路线线沿左边缘；区域卡片随后。
   动效：路线线在区块显现时于 800ms 内绘制完成；数字以 70ms 间隔依次弹出；减少动态效果模式下立即显示所有内容。
6. **课程预约（Lesson booking）** — 藏青色（Navy）区块带暖白色（warm-white）文字。眉题（Eyebrow）'BOOK A LESSON'；标题 'Hold your slot — it takes a minute.'；文案 'Pick a weekday, a time, and your package. We meet students at home, school, or anywhere in the service area.' 白色卡片内：星期选项胶囊 Monday–Saturday；时段选项胶囊 9:00、11:00、14:00、16:30；套餐下拉选择，含四个套餐名称加 'Not sure yet'；姓名和邮箱输入框（仅本地）；提交胶囊按钮 'Hold this slot'。确认面板：'Slot held — {day} at {time} · {package}. A live site would confirm by text; this demo keeps it in your browser.'，附一个 'Change my request' 链接，点击后恢复已填好的表单。表单下方注释：'Every first lesson starts in a quiet lot — no traffic until you ask for it.'
   布局：白色卡片宽 720px（20px 圆角），居中于藏青色区块上。选项胶囊为 44px；选中的星期胶囊填充标志黄（sign yellow）配藏青色文字，选中的时段胶囊填充藏青色配白色文字。套餐下拉为 12px 圆角的胶囊形下拉框。本地校验：姓名必填，邮箱须匹配简单模式；错误以内联 quiz-red 文字显示，绝不使用弹窗。将请求持久化到以 [BRAND_SLUG] 为键的 localStorage，并在重新加载时恢复；确认面板为 aria-live='polite'。移动端：卡片保持 20px 内边距，胶囊自动换行。
   动效：选中时胶囊弹至 1.06（180ms）；确认面板以 240ms 交叉淡入；减少动效（reduced motion）时每次变化即时生效。
7. **FAQ 与页脚（FAQ and footer）** — FAQ 标题 'Asked at every kitchen table.'，以五个 details/summary 条目呈现：'Do you pick me up?' — 'Yes — anywhere in the service area: home, school, or work. Your lesson starts from your driveway.'；'Can I use the school car for my test?' — 'The Road-Test Ready package includes the car and a warm-up hour that morning.'；'How many lessons will I need?' — 'Most learners take eight to twelve. We'll tell you honestly at lesson three, not lesson eleven.'；'Are the quiz questions the real test?' — 'No — they're samples our instructors wrote for practice. The official test bank belongs to the licensing office, not us.'；'What if I'm really nervous?' — 'Then you're our favorite student. Ingrid built our first-lesson plan around quiet streets and zero pressure.' 页脚位于墨色藏青（ink navy）上，配暖白色文字：标志图形和 [BRAND]、[PROMISE] 一行、锚点导航（Packages、Quiz、Instructors、Tips、Book）、服务区域一行 'Serving [CITY] and the neighborhoods inside the loop'、注释 'This school, its instructors, and its figures are fictional samples for a website template.'，以及可选的 [CREDIT] 链接。
   布局：FAQ 为单列，最大宽度 760px，条目间以 1px dash-gray 分隔线隔开，每项垂直内边距 22px，并带一个旋转的 ChevronDown。页脚：桌面端两行——左侧品牌区块含承诺语，右侧导航；第二行为服务区域一行、虚构注释和 [CREDIT]，使用柔和的暖白色；移动端堆叠。无社交图标，无订阅表单。
   动效：切换时 Chevron 以 160ms 旋转，不做可能裁切文字的高度动画；页脚为静态。

## 资源

- 图片：主视觉汽车照片。将 https://media.vibefather.ai/assets/dee53dc0-575e-42c1-9ef2-04100f205a61/hero-car.webp 下载到 public/images/hero-car.webp。Alt：'A cheerful yellow compact car parked on a quiet tree-lined street in morning light.' 用作主视觉区的视觉锚点。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请将该确切署名记录在 ASSETS.md 中。
- 图片：座舱细节。将 https://media.vibefather.ai/assets/dee53dc0-575e-42c1-9ef2-04100f205a61/cockpit.webp 下载到 public/images/cockpit.webp。Alt：'The driver's seat and steering wheel of the school car in warm daylight.' 用作课程套餐旁的小型辅助视觉。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请将该确切署名记录在 ASSETS.md 中。
- 图片：路边接送。将 https://media.vibefather.ai/assets/dee53dc0-575e-42c1-9ef2-04100f205a61/curb-side.webp 下载到 public/images/curb-side.webp。Alt：'The yellow school car waiting at a curb outside pastel houses.' 用作服务区域卡片或预约横幅中的小型点缀。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请将该确切署名记录在 ASSETS.md 中。
- 图片：教练肖像一。将 https://media.vibefather.ai/assets/dee53dc0-575e-42c1-9ef2-04100f205a61/coach-maya.webp 下载到 public/images/coach-maya.webp。Alt：'Fictional portrait of Maya Okafor, lead instructor.' 用于 Maya Okafor 教练卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请将该确切署名记录在 ASSETS.md 中。
- 图片：教练肖像二。将 https://media.vibefather.ai/assets/dee53dc0-575e-42c1-9ef2-04100f205a61/coach-daniel.webp 下载到 public/images/coach-daniel.webp。Alt：'Fictional portrait of Daniel Reyes, highway specialist.' 用于 Daniel Reyes 教练卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请将该确切署名记录在 ASSETS.md 中。
- 图片：教练肖像三。将 https://media.vibefather.ai/assets/dee53dc0-575e-42c1-9ef2-04100f205a61/coach-ingrid.webp 下载到 public/images/coach-ingrid.webp。Alt：'Fictional portrait of Ingrid Halvorsen, returning-adult specialist.' 用于 Ingrid Halvorsen 教练卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请将该确切署名记录在 ASSETS.md 中。
- 图片：在代码中将每个道路标线图案绘制为可复用的内联 SVG 组件：一条虚线中心分隔线（3px dash-gray 线，26px 线段，34px 间隔），用于各区块之间；以及一条路线圆点线（黄色圆圈、海军蓝数字），用于提示列表。这些图案不使用任何生成图像或图库图片。
- 图标：安装 lucide-react，并且仅使用 Car、Star、Check、X、ChevronDown、MapPin、RotateCcw、ArrowRight、CalendarCheck、Award、Clock 和 Users。ISC 许可证。不要绘制任何品牌标志，也不要绘制交通标志复制品；标志图形是围绕 Car 字形编写的原创代码。请在 ASSETS.md 中记录该包和许可证。
- 字体：通过 @fontsource/fredoka 自托管 Fredoka 字重 500 和 600（OFL-1.1）。请在 ASSETS.md 中记录该包和许可证；不要使用字体 CDN。
- 字体：通过 @fontsource/figtree 自托管 Figtree 字重 400、600 和 700（OFL-1.1）。请在 ASSETS.md 中记录该包和许可证；不要使用字体 CDN。

## 不要做
- 不要使用真实的驾校、DMV（车辆管理局）、发证机构或官方题库。学校、教练、路线、费率、通过率数据和统计均为虚构样本，页脚需对此作出说明。
- 教练肖像必须是 AI 生成的虚构人物，不得与任何真实个人相似：三位教练的年龄和族裔要有差异，绝不模仿名人或公众人物，并保持整组照片的光线和质量一致。
- 测验题目为虚构的练习样本：绝不要声称它们来自、匹配或获得任何官方考试的认可，也绝不要暗示通过分数能保证获得驾照。
- 照片中不得出现可见的车标、可辨认的车牌或标牌、带品牌的门店，以及可识别的路人；三位教练肖像是整组照片中唯一的人物。
- 预约仅限本地：不提交表单、不调用 API、不使用邮件或短信服务、不做分析统计。仅持久化到 localStorage，并对恢复的数据进行校验。
- 不要绑定真实时钟的日期：仅使用星期标签和静态示例时段；绝不渲染今天的日期、倒计时，或基于访客时钟的时间逻辑。
- 不要后端、服务器代码、数据库、认证或第三方脚本。通过单一构建命令在 dist/ 中输出静态产物。
- 仅通过列出的 Fontsource 包自托管字体；绝不加载 Google Fonts、Adobe Fonts，或任何 CDN 样式表或脚本。
- 生产环境不要 source map，不要把 src/ 复制进 dist/，保持 dist/ 在 20 MB 以下，并保持 Vite 的 base 为相对路径。
- 不要使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件；仅使用六张生成的图片和原创的代码绘制 SVG/CSS 图形。
- 不做 SEO 工作：不要 meta description、Open Graph 标签、JSON-LD、站点地图或堆砌关键词的标题。一个包含 [BRAND] 的普通标题和一个 favicon 就足够了。
- 不要让测验在快速点击时重复触发（作答后锁定）、不要困住键盘焦点，也不要以忽略 prefers-reduced-motion 的方式做动画；保持漂移的道路虚线纯为装饰。
- 不要滚动劫持、自定义光标、自动播放音频或页面视差。
- 所有文案保持美式英语，并基于 [BRAND] 和 [BRAND_SLUG] 构建品牌派生字符串（存储键、slug、alt 文本），以便替换变量值后绝不残留默认品牌痕迹。
- 每个内部链接都是文件名或页内锚点，绝不是裸目录；网站必须在 1440×900 和 390×844 下渲染，且控制台零报错。

---
— Prompt by VibeFather · https://vibefather.ai/t/driving-school-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
