> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 武术道馆网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个单页网站，这是一家由首席教练 [FOUNDER] 领导的武术学校，位于 [CITY]，拥有 [EXPERIENCE] 的教学经验。页面风格严谨——黑色、深红色、宣纸白、以代码绘制的笔触——包含三条课程路径、一条动态腰带晋级路径、可按天筛选的课程表、两位教练简介、家庭定价、面向家长的防霸凌板块以及免费试课预约。摄影风格为情绪化的训练馆作品，学员身着素色道服，从背后拍摄。所有段位时间、价格和评价均为虚构的示例数据。

- 受众：主要：6–15 岁孩子的家长（防霸凌与自信心角度）以及一直想开始的 16 岁以上成年人。次要：重新定位课程和段位的格斗与健身学校。
- 目标：推动访客从“也许适合我家孩子”转变为预约免费试课：展示路径（腰带）、课程表（契合我们的一周）、人物（教练）、价格（家庭账），然后让试课表单成为页面上最短的一步。
- 语调：平静、尊重的道场英语——短句、有底气的自信、零大男子主义。这所学校听起来像是一个先教克制的地方。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/big-shoulders-display（OFL-1.1）、@fontsource/figtree（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 为 './'，build.outDir 为 'dist'，build.sourcemap: false。无路由、无后端、无服务器代码。
  - 安装 Tailwind CSS 3.4 及 PostCSS 和 Autoprefixer。使用下方精确的调色板扩展主题，fontFamily.display 为 'Big Shoulders Display'，fontFamily.body 为 'Figtree'。
  - 通过 @fontsource/big-shoulders-display 和 @fontsource/figtree 自托管 Big Shoulders Display 字重 600 和 700 以及 Figtree 字重 400、500、600、700，在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、useScroll、useTransform、useInView、useReducedMotion）实现腰带路径的滚动填充和显现；每个动画都以 useReducedMotion() 为条件。
  - 将所有文案和数据保留在 src/content.ts 中：品牌字符串、主视觉文案、课程项目、六个段位及其典型月数和要求、每周课程表（星期、时间、课程、级别）、教练、定价、反霸凌要点、评价、试课表单选项。当变量值变化时，在那里重写依赖的文案，并从 [BRAND] 和 [PHONE] 派生存储键和 tel: 链接，确保不残留默认品牌痕迹。
  - 腰带路径，在一条从左到右攀升穿过该区域的 SVG 路径上恰好有六个段位（每个节点是一个用代码绘制的、以其颜色呈现的缠绕腰带图标）：White — 0 months — 'shows up, bows in'；Yellow — 3–5 months — 'stances hold, first form learned'；Green — 8–12 months — 'controlled partner drills'；Blue — 14–20 months — 'sparring with control'；Brown — 24–30 months — 'assists in kids' classes'；Black — 36–48 months — 'teaches a class, lives the courtesy'。路径描边通过 useScroll + useTransform 随滚动进度填充（一条深红色描边绘制在细线轨道上）；当描边到达每个节点时，该节点的卡片淡入；在 prefers-reduced-motion 下，完整路径立即渲染，所有卡片可见。脚注为 'Typical times, not promises — the path adjusts to the student.'
  - 课程表是一个数据驱动的表格：行 = 时间段，列 = 周一至周六；筛选器 = 星期标签（All + 每天）和课程标签（All / Kids / Teens / Adults / Family）；匹配的单元格以深红色调高亮，其他单元格变暗至 40%（绝不隐藏，以保持一周清晰可读）；每个单元格显示时间、课程、级别（'Beginner friendly' / 'All levels' / 'Advanced'）。
  - 用代码内联 SVG 绘制笔触点缀：每个区域标题下方一条水平笔触（单条深红色路径，通过 2–3 条重叠路径实现轻微收窄和粗糙边缘），主视觉标题后方一条大的半透明笔触。无书法字体，无第三方艺术素材。
  - 仅使用这些 lucide-react 图标：Phone、Users、CalendarCheck、Clock、Shield、Heart、Star、MapPin、ChevronRight、ArrowRight、Menu、X、CheckCircle2、GraduationCap、Hand、Eye、Footprints、Medal。
  - 将课程表筛选选择和试课预约持久化到 localStorage，以 [BRAND_SLUG] 为命名空间；验证恢复的 JSON，并从格式错误的数据中静默恢复。
  - 在构建前将六张生成的图片下载到 Assets 中列出的确切公共路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者或生成器以及许可证。
  - 一个纯 <title> 为 [BRAND] 和一个 favicon（带深红色腰带结的墨色方块）就足够了；无需 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 学校名称（默认：“Blackpine Martial Academy”）。虚构的学校名称；代码中会据此生成一个腰带结标志图形。
- [CITY] — 城市（默认：“Eastgate”）。道馆所在地；出现在 hero、课程表和页脚中。
- [FOUNDER] — 首席教练（默认：“Marcus Ito”）。虚构的首席教练，在 hero 和第一张简介卡片中署名。
- [PHONE] — 电话（默认：“(555) 913-7742”）。学校电话；以 tel: 链接形式呈现，仅使用数字。
- [EXPERIENCE] — 教学年限（默认：“18 years”）。类似 '18 years' 的普通短语；用于 hero 和教练文案。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/martial-arts-dojo-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 墨色（Ink）`#14151A` — Hero 区底色、深色区块、浅色背景上的标题
- 深墨色（Ink deep）`#0D0E12` — 页脚底色和最暗的面板
- 绯红色（Crimson）`#C8102E` — 唯一强调色：CTA、腰带路径描边、日程高亮
- 绯红浅色调（Crimson tint）`#F9E4E7` — 浅色背景上的高亮标签和注释面板
- 宣纸色（Rice paper）`#F5F1E8` — 页面底色
- 白色（White）`#FFFFFF` — 纸色背景上的卡片
- 钢灰色（Steel）`#5D5F66` — 浅色背景上的次要文本；深色背景上为 #9BA0AB
- 细线色（Hairline）`#E4DFD4` — 细线分隔线和卡片边框
- 腰带白色（Belt white）`#FFFFFF` — 需要时用于腰带图标的填充（在纸色背景上为描边）

### 字体排印
- 展示字体：标题、段位名称、价格：Big Shoulders Display（OFL），字重 600/700
- 正文字体：段落、日程单元格、表单：Figtree（OFL），字重 400/500/600/700

### 布局与动效
- 间距：桌面端区块间距 88px / 移动端 60px；区块标题位于代码绘制的绯红笔触之上，配 13px 字距的绯红眉题和 Big Shoulders Display 700 标题，字号为 clamp(30px, 3.4vw, 48px)；卡片内边距 24px，间距 20px。
- 圆角：克制使用：卡片和标签 4px，按钮 0 — 纪律感体现在直角边缘；照片 4px 并带 1px 墨色边框。
- 动效：淡入上升显现（12px，450ms，50ms 错峰）通过 useInView 实现，仅一次 — 快速且稳定。
- 动效：腰带路径描边随滚动进度填充（在该区块上使用 useScroll + useTransform）；段位卡片在描边到达时淡入。
- 动效：日程筛选变化时单元格透明度交叉淡化 150ms；试课成功勾选弹出 1.15×。
- 动效：所有动效在 prefers-reduced-motion 下立即禁用（腰带路径渲染为完整状态）；除路径外无视差，无滚动劫持，无自动播放媒体。
- 图像：来自一次拍摄的情绪化训练馆摄影：身穿纯白道服的学生背影在暖色聚光灯下的广角镜头、排成一队的儿童班、正在训练的成年人、挂在架子上彩色腰带的静物，以及两张纯色道服教练肖像 — 无面部特写，无徽章或纹章，无可读文字。

## 页面与区块
### [BRAND] — [CITY] 的武术 (`index.html`)
1. **页眉与首屏** — 页眉（墨色 94% 不透明度带背景模糊，68px，粘性定位）：腰带结标志（墨色方块配深红色结形符号）+ [BRAND]，使用 Big Shoulders Display 700 大写、米白色 17px；导航锚点：Programs、The path、Schedule、Pricing、Free trial；右侧：电话胶囊 Phone 图标 + [PHONE]（tel:）米白色，以及深红色胶囊按钮 'Book a free trial'。在 390px 宽度下：标志 + 名称、电话图标按钮、菜单按钮排成一行；锚点收进墨色下拉菜单。首屏：全出血训练馆照片（广角镜头，学生背影处于暖色聚光灯下，桌面端 82vh / 移动端 560px），底部向上墨色渐变 95%→透明，标题后方有一道大型半透明深红色笔刷痕迹；内容位于左下角：眉题深红色 'MARTIAL ARTS — KIDS · TEENS · ADULTS'；H1 使用 Big Shoulders Display 700 大写、米白色 'COURTESY FIRST. TECHNIQUE SECOND.'；段落 '#C9CCC4' 'Head instructor [FOUNDER] has taught [CITY] for [EXPERIENCE] — a blended striking-and-grappling foundation taught the traditional way: quiet bows, patient drills, no shortcuts.'；深红色胶囊按钮 'Two weeks, $29, uniform included'（锚定到试课）和米色描边胶囊按钮 'See the schedule'（锚点）；12px 米白色标签置于半透明墨色底上：'Free trial week for families' · '6 days a week' · 'Parents watch every class'。
   布局：文案列 1–7；标签在 390px 下最多换行两行；遮罩保证 AA 对比度。
   动效：照片从 1.04→1 缩放，历时 800ms；文案上移 12px，错开 60ms。
2. **课程项目** — 米纸色带。眉题 'PROGRAMS'（深红色）；标题 'Three tracks, one standard.' 三张卡片（白色、细线边框、4px 圆角）：'Kids · 6–9' — 'Focus games, falling safely, and the two words parents love: yes, instructor. Stranger-awareness folded into every unit.'；'Teens · 10–15' — 'Real technique with real partners: striking, clinch, ground — plus the leadership ladder of assisting lower belts.'；'Adults · 16+' — 'Beginner-friendly fundamentals through advanced sparring. The 7 p.m. class is the quietest hour of your week.' 每张卡片：年龄标签、儿童/成人各自的课程照片、一行 'first class is free'，以及深红色链接 'Try this track →'，锚定到试课并预选该课程。
   布局：三张卡片一行（900px 以下单列）；照片 4:3 置于顶部。
   动效：卡片上移 12px，错开 70ms。
3. **腰带之路** — 墨色带，标志性区块。眉题 'THE PATH'（深红色）；标题 'White to black, drawn honestly.' SVG 路径从左到右攀升贯穿整个区块——一条细线米白色轨道，深红色描边随滚动进度填充——穿过六个节点，每个节点是一个用代码绘制的缠带符号，使用对应段位颜色（白色描边、黄色、绿色、蓝色、棕色、黑色），并配一张段位卡片：段位名称使用 Big Shoulders Display 700，典型时长使用 Figtree 600，要求行使用 #9BA0AB——White '0 months · shows up, bows in'；Yellow '3–5 months · stances hold, first form learned'；Green '8–12 months · controlled partner drills'；Blue '14–20 months · sparring with control'；Brown '24–30 months · assists in kids' classes'；Black '36–48 months · teaches a class, lives the courtesy'。脚注 12px '#9BA0AB'：'Typical times, not promises — the path adjusts to the student.' 腰带架照片作为安静的 4:3 面板置于色带右边缘。
   布局：路径横跨全宽（最小高度 420px），段位卡片在线条上下交替（移动端全部在下方，呈垂直路径）；照片在桌面端绝对定位右侧，移动端隐藏于色带底部。
   动效：描边随滚动填充；卡片在描边到达时淡入；减少动效模式下立即渲染完整路径。
4. **课程表** — 米纸色带。眉题 'SCHEDULE'（深红色）；标题 'Six days, filtered your way.' 筛选标签：星期（All、Mon–Sat）和课程（All / Kids / Teens / Adults / Family）；匹配单元格高亮为深红色调配墨色文字，不匹配的降至 40% 不透明度（从不隐藏）。表格（白色面板、细线网格；列 Mon–Sat）：Mon — 4:00 Kids beginner · 5:15 Teens all levels · 7:00 Adults beginner；Tue — 4:00 Kids all · 6:30 Adults advanced sparring；Wed — 4:00 Kids beginner · 5:15 Teens advanced · 7:00 Adults all；Thu — 5:15 Family class · 6:30 Adults beginner；Fri — 4:00 Kids all · 6:30 Teens all；Sat — 9:00 Family class · 10:15 Adults all levels。每个单元格：时间 Figtree 700、课程、级别标签（'Beginner friendly' / 'All levels' / 'Advanced'）。筛选选择持久保存。注释 12px 钢色：'Sample weekly rhythm — holiday schedules post at the door.'
   布局：表格在 800px 以下水平滚动，时间列左侧粘性；标签在移动端水平滚动。
   动效：筛选变化时单元格不透明度交叉淡入淡出 150ms。
5. **教练** — 白色带。眉题 'INSTRUCTORS'（深红色）；标题 'Two teachers, zero egos.' 两张卡片配 3:4 肖像（纯白道服，无徽章）：'[FOUNDER] — Head instructor' — '[EXPERIENCE] teaching; rank held quietly' — 'Teaches the way he was taught: small class, sharp eye, patient hands.' — 一行：'The best students ask the boring questions.'；'Sena Okafor — Senior instructor' — 'Runs the teens and family classes' — 'A former reluctant kid who stayed 14 years; she remembers exactly why.' — 一行：'Confidence is a skill, not a mood.' 段位仅以纯文本出现。
   布局：两张卡片并排（800px 以下单列）；肖像裁剪 3:4。
   动效：卡片上移 12px，错开 80ms。
6. **家庭定价** — 米纸色带。眉题 'PRICING'（深红色）；标题 'The family math, published.' 三张卡片：'Trial — two weeks' — '$29' — 'unlimited classes in your track, uniform included'，标记深红色标签 'START HERE'；'Individual' — '$129 / mo' — 'one member, all classes in their track, belt testing included'；'Family Path' — '$229 / mo' — 'up to three household members, each additional $39, family classes included'，标记 'MOST CHOSEN'。注释面板（深红色调，13px）：'A family of three on Family Path pays $76 per member — and the 6 p.m. drives home together. Sample prices; no contracts, month to month.'
   布局：三张卡片一行（900px 以下单列）；中间卡片上移 12px。
   动效：卡片上移 12px，错开 70ms；标签弹出 1.1×。
7. **致家长：反霸凌** — 墨色带。眉题 'FOR PARENTS'（深红色）；标题 'What we actually teach about bullies.' 四张卡片置于半透明面板上：'Posture before punches' — 眼睛图标 — 'How a child carries themselves changes who gets picked. We drill it like technique, because it is.'；'The voice' — 手图标 — 'A loud, calm 'stop' practiced until it's automatic — most situations end right there.'；'When to walk' — 脚印图标 — 'Leaving is a skill with a name in our curriculum, not a retreat.'；'When to tell' — 盾牌图标 — 'Adults are told every time. Our rule: the physical answer is the last resort, and it's taught as one.' 页脚行 '#9BA0AB'：'No child is taught to solve words with fists. Parents sit ringside whenever they like.'
   布局：四张卡片 2×2（800px 以下单列）；图标置于深红色圆圈中。
   动效：卡片上移 12px，错开 80ms。
8. **评价** — 米纸色带。眉题 'FROM FAMILIES'；标题 'The quiet confidence reviews.' 三张卡片（白色、深红色引号）：五颗深红色星；16px 墨色引文；13px 钢色页脚。'Six months in, my daughter walks into rooms differently. The belts matter to her; the posture matters to us.' — Rosa M., parent, kids track. 'I'm 44 and terrified of gyms. The 7 p.m. adults class meets you exactly where you are. I've made the walk every Tuesday.' — Gerald T., adults track. 'Two kids on Family Path, one car, one schedule. The family class is the best hour of our week.' — the Okonjo family. 免责声明 12px 钢色：'Sample reviews for this template demo.'
   布局：三张卡片一行（900px 以下单列）；中间上移 12px。
   动效：卡片上移 12px，错开 80ms。
9. **免费试课预约** — 白色带。眉题 'FREE TRIAL'（深红色）；标题 'Two weeks. Bring water.' 表单（墨色面板，最大宽度 720px，米白色字段）：课程选择（Kids 6–9 / Teens 10–15 / Adults 16+ / Family）；学生姓名（必填；'your name if the trial is yours'）；年龄（必填）；监护人姓名 + 电话（必填，'we text the confirmation'）；首选开始标签（This week / Next week / Just asking first）。深红色胶囊提交按钮 'Reserve the trial'。内联验证（2px 深红色边框，13px 注释），无原生弹窗。成功：CheckCircle2 深红色，'Welcome in, [student].' Big Shoulders Display 700 米白色，'We text your first-class time within a day — uniform waits at the desk. This demo stores the booking in this browser only.' 以及描边胶囊按钮 'Book another'。持久化到 localStorage。
   布局：桌面端双列字段行，移动端单列，底部内边距 96px 以避开粘性栏。
   动效：成功交叉淡入并上移 12px；对勾弹出 1.15×。
10. **页脚（Footer）** — 墨深色带。第 1 列：结形标志 + [BRAND] Big Shoulders Display 700 大写米白色；13px #9BA0AB 行 '88 Forge Street, Second Floor, [CITY]'、'[PHONE] (tel:)'、'Mon–Sat, mornings and evenings'。第 2 列 'School'：锚点 Programs、The path、Schedule、Pricing。第 3 列 'Small print'：'Sample site for a template — ranks, times, prices and reviews invented'、'Curriculum described generically; no lineage claimed'，可选 [CREDIT] 链接为绯红色。移动端粘性栏（768px 以下）：固定底部墨色 96% + 模糊；绯红色胶囊按钮 'Call'（tel:）和米白描边胶囊按钮 'Free trial'（锚点），安全区内边距。
   布局：页脚网格 4/4/4 至移动端单列；768px 以下 body 底部内边距 80px。
   动效：无。

## 资产
- image：训练馆主视觉图。将 https://media.vibefather.ai/assets/bf5a81ed-bcd2-45cd-8456-5a9ad2172f1c/hero-dojo.webp 下载到 public/images/hero-dojo.webp。Alt：'A wide shot of students in plain white uniforms training under warm spots.' 主视觉锚点图。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- image：儿童班。将 https://media.vibefather.ai/assets/bf5a81ed-bcd2-45cd-8456-5a9ad2172f1c/class-kids.webp 下载到 public/images/class-kids.webp。Alt：'A kids' class lined up on the mat, seen from behind.' 儿童课程卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- image：成人班。将 https://media.vibefather.ai/assets/bf5a81ed-bcd2-45cd-8456-5a9ad2172f1c/class-adults.webp 下载到 public/images/class-adults.webp。Alt：'Adults drilling technique in a dim hall, seen from behind.' 成人课程卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- image：腰带架。将 https://media.vibefather.ai/assets/bf5a81ed-bcd2-45cd-8456-5a9ad2172f1c/belts-rack.webp 下载到 public/images/belts-rack.webp。Alt：'Colored martial-arts belts hanging on a wooden rack.' 腰带进阶区块的静默面板。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- image：教练肖像一。将 https://media.vibefather.ai/assets/bf5a81ed-bcd2-45cd-8456-5a9ad2172f1c/instructor-1.webp 下载到 public/images/instructor-1.webp。Alt：'Portrait of a fictional head instructor in a plain white uniform.' [FOUNDER] 卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- image：教练肖像二。将 https://media.vibefather.ai/assets/bf5a81ed-bcd2-45cd-8456-5a9ad2172f1c/instructor-2.webp 下载到 public/images/instructor-2.webp。Alt：'Portrait of a fictional senior instructor in a plain white uniform.' Sena Okafor 卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- icon：Lucide（ISC），通过 lucide-react 包引入，仅限 setup 中的图标列表，另加原创代码绘制的笔触 SVG、腰带字形和绳结标志。不使用其他图标来源。
- font：Big Shoulders Display（OFL）和 Figtree（OFL），通过 @fontsource/big-shoulders-display 和 @fontsource/figtree 自托管；不通过 CDN 加载字体。

## 不要做
- 不使用任何真实的武术组织、联合会、门派传承声明、流派商标、徽章或纹章；课程内容以通用方式描述为融合基础，段位以纯文本呈现。
- 不使用真实的道场、教练或比赛记录；[BRAND]、段位、时间、价格和评价均为虚构的示例数据。
- 任何地方都不出现面部特写：照片从背后拍摄学生、采用广角镜头，或为静物式场馆照——教练肖像经过构图设计，但不追求戏剧化。
- 反霸凌文案保持冷静务实：姿态、声音、走开、告诉成年人；身体反击被明确列为最后手段，且不承诺任何自卫结果。
- 不搞大男子主义或恐惧营销：不出现“像冠军一样战斗”，不出现关于街头或侵害者的恐吓文案。
- 段位时间标注为“典型情况，非承诺”并明确标示；不使用保证黑带的措辞。
- 不出现与真实时钟绑定的日期：课程表是以工作日为锚点的每周节奏，无日历日期，无版权年份。
- 表单仅为本地示例：不向任何服务器提交，无 API，无分析。仅持久化到 localStorage，并对恢复的数据进行校验。
- 无后端、服务器代码、数据库或认证。通过单一构建命令输出静态文件到 dist/，小于 20 MB，Vite 的 base 使用相对路径。
- 仅通过 Fontsource 包自托管字体；绝不加载 Google Fonts、Adobe Fonts 或任何 CDN 样式表或脚本。
- 生产环境不生成 source map，不将 src/ 复制到 dist/。
- 不使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件；仅使用六张生成的图片和代码绘制的 SVG 图形。
- 不做 SEO 工作：无 meta 描述、Open Graph 标签、JSON-LD、站点地图或关键词堆砌的标题。一个包含 [BRAND] 的普通标题和一个 favicon 就足够了。
- 课程表筛选器对不匹配的单元格进行变暗而非隐藏，因此一周始终清晰可读。
- 不劫持滚动：腰带路径随滚动填充，但绝不困住或劫持滚动；动效仅限于指定的显现效果、路径填充、交叉淡入淡出和弹出效果，全部遵循 prefers-reduced-motion。
- 在 390px 宽度下移动端页眉保持单行，且绝不让粘性底栏遮挡试课表单的提交按钮。
- 从 [BRAND] 和 [PHONE] 构建品牌派生字符串（存储键、tel: 链接），以便替换变量值后不会残留默认品牌痕迹。
- 每个内部链接都是文件名或页内锚点，绝不是裸目录；网站保持为单个 index.html。

---
— Prompt by VibeFather · https://vibefather.ai/t/martial-arts-dojo-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
