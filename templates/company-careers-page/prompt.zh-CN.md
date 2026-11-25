> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 公司招聘页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个虚构气候科技公司的招聘网站：使命与文化、福利网格、团队故事、带部门和地点筛选的开放职位、带结构化申请表和简历标签（CV chip）的职位页面、招聘流程时间线，以及人才社区注册。办公室和团队照片来自同一次拍摄，人物距离较远或背对镜头。白色背景上的森林绿（Forest）#1B4332、薄荷绿（mint）#95D5B2 和阳光黄（sunshine）#FFD23F。

- 受众：正在考虑加入一家小型气候科技公司的工程师、技术人员、设计师和运营人员。
- 目标：让访客在一次滚动浏览中具体了解使命与文化，然后引导其找到合适的职位并完成申请。
- 语气：温暖而平实，像同事在解释这份工作：具体的福利、真实的名字，没有招聘口号。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource-variable/red-hat-display（OFL-1.1）、@fontsource-variable/manrope（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - vite.config.ts：base 设为 './'，build.sourcemap 设为 false，src/ 中的内容不会复制到 dist/。
  - tailwind.config.js：扩展颜色 forest #1B4332、mint #95D5B2、mintTint #E9F5EE、sunshine #FFD23F、white #FFFFFF、ink #12261F、muted #4F6159、line #DDE6E1；fontFamily 中 display 为 'Red Hat Display Variable'，sans 为 'Manrope Variable'，mono 为 'IBM Plex Mono'。
  - 一个小型 hash 路由器读取 location.hash：#/（首页）、#/roles、#/roles/<slug>、#/stories；不带 slug 的 role 路由显示第一个 role；路由切换时滚动到顶部。不使用路由库。
  - CV 上传仅在组件状态中保留文件名和大小（不存储、不发送任何文件）；表单和人才注册均为本地示例，并已注明这一点。
  - 所有文案、roles、benefits、stories、process steps 和表单选项都以带类型的对象形式存放在 src/content.ts 中；组件从不硬编码文案。

## 变量
- [BRAND] — 公司名称（默认："Everwarm"）
- [CITY] — 办公室所在地（默认："Burlington"）
- [MISSION] — 一句话使命（默认："Heat every home without heating the planet."）
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/company-careers-page（默认：是；删除此行即可移除）

页面与区块（Pages & Sections）下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- forest `#1B4332` — 森林绿（Forest green）：主视觉遮罩、深色区块、薄荷色和阳光黄背景上的文字、配白色文字的主按钮
- mint `#95D5B2` — 薄荷绿（Mint）：卡片、标签和配森林绿文字的次级按钮
- mintTint `#E9F5EE` — 浅薄荷色面板
- sunshine `#FFD23F` — 阳光黄（Sunshine yellow）：主行动号召和高亮，始终配森林绿文字
- white `#FFFFFF` — 页面底色和卡片
- ink `#12261F` — 文字
- muted `#4F6159` — 次级文字
- line `#DDE6E1` — 边框和分隔线

### 字体排印
- 展示 / 标题：Red Hat Display Variable（OFL），字重 600/800
- 正文 / UI：Manrope Variable（OFL），字重 400/500/600
- 等宽 / 标签、薪资区间、步骤编号：IBM Plex Mono（OFL），字重 400/500

### 布局与动效
- 间距：区块内边距桌面端 py-24 / 移动端 py-16；容器 max-w-[1200px] px-6；卡片 p-6，圆角 16px；8px 节奏。
- 圆角：卡片 16px；按钮胶囊形；标签胶囊形；照片 16px；输入框 10px。
- 动效：滚动显现：区块淡入上移 20px，历时 450ms，仅一次（Motion whileInView）；内容默认可见。
- 动效：职位筛选：离场行淡出 150ms，入场行淡入上移 250ms，错开 40ms。
- 动效：主视觉照片从 scale 1.04 稳定下来，历时 1.2 秒。
- 动效：prefers-reduced-motion：无显现或缩放；筛选即时切换。
- 图像：来自同一场拍摄的明亮纪实照片，拍摄对象是一家小型气候科技公司：阳光充足、满是植物的办公室，远处或背影中工作的人，摆放热泵部件的工程工作台，以及装有太阳能板的屋顶。绿色、薄荷色和浅木色调。无正面特写人像，无可读文字，无标识。

## 页面与区块
### 首页（`index.html`）
1. **站点页眉** — 左侧：字标 [BRAND]，Red Hat Display 800 22px forest 色，带一个小太阳圆点。中间导航：Mission（→ #/）、Roles（→ #/roles）、Stories（→ #/stories）、Talent（→ #/talent），Manrope 500 14px muted 色，悬停时 forest 色。右侧：胶囊按钮 'See open roles'（sunshine 填充、forest 文字 → #/roles）。
   布局：粘性 64px 白色栏，底部 1px 细线；内部 max-w-[1200px]。移动端：字标、紧凑的 'Roles' 胶囊按钮和 lucide 菜单按钮在 390px 宽度下保持在同一行；菜单打开全屏白色抽屉，链接纵向堆叠。
   动效：链接悬停时以 forest 色下划线，150ms；抽屉淡入 200ms。
2. **Hero — 工作场景** — 全出血 public/images/hero-office.webp（16:9），alt 'An open, plant-filled office with people working far away at their desks'，底部 65% 覆盖从透明到 forest 的渐变。在遮罩之上，左下角：眉题 IBM Plex Mono 500 12px 大写 tracking-widest mint 色 'CAREERS AT [BRAND] · [CITY]'；H1 Red Hat Display 800 clamp(40px, 5.4vw, 84px) 白色，最多三行：'Do the best work of your career on a problem that matters.'；段落 white/85 18px max-w-[46ch]：'[MISSION] We make home heat pumps that people actually want in their houses, and we need more hands.'；按钮 'See open roles'（sunshine 填充、forest 文字 → #/roles）和 'Meet the team'（mint 描边、白色文字 → #/stories）；一行等宽文字 '8 open roles · On-site, hybrid and remote'。
   布局：h-[calc(100vh-64px)] min-h-[620px]，文本块位于左下角，max-w-[760px]，内边距 48px。移动端照片裁切为 4:5，文字位于遮罩下部。
   动效：文字上浮淡入 500ms；照片从 scale 1.04 稳定下来。
3. **使命与数字** — H2 'Why we do this.' 左侧：两段文字：'Heating is the largest source of emissions in a typical home. We started [BRAND] to make the clean option the easy one: a heat pump that fits an old house, an app that explains it, and an installer who turns up on time.' 'We are 84 people in [CITY] and remote across the country. We measure ourselves on homes heated, not on promises.' 右侧：三个数字，配一行等宽注释 'Sample figures'：'12,400 homes heated'、'38,000 tonnes of CO₂ avoided'、'84 people'。
   布局：lg:grid-cols-[58%_42%] gap-12 items-center py-24；数字使用 Red Hat Display 800 56px forest 色。
   动效：淡入上浮 450ms。
4. **福利网格** — H2 'What you get.' 八张卡片，mintTint 背景，各配一个 lucide 图标和一行具体说明：'A heat pump of your own — Up to $3,000 toward a system for your home.'、'Twenty weeks parental leave — For every parent, birth or adoptive.'、'Summer Fridays — Four-day weeks from June to August.'、'Health from day one — Medical, dental and vision for you and your family.'、'Six percent 401(k) match — Vested immediately.'、'$2,000 to learn — Courses, conferences and books, no approval needed.'、'A carbon budget — $400 a year to spend on lower-carbon choices.'、'Sabbatical — Four weeks after four years.'
   布局：Grid md:grid-cols-2 lg:grid-cols-4 gap-4；标题使用 Red Hat Display 600 20px forest 色。
   动效：卡片以 60ms 错峰淡入上浮。
5. **团队故事** — H2 'The people, in their own words.' 三张故事卡片，各配一张照片和一段引语：public/images/lounge.webp（4:3），alt 'Two colleagues talking by a window in a plant-filled break room' — 'Priya Raman · Installation coordinator' — 'I schedule forty installs a week. The best part is when a customer writes in to say their living room is finally warm.'；public/images/workbench.webp（4:3），alt 'An engineer testing the parts of a heat pump on a workbench' — 'Marcus Osei · Test technician' — 'I break things on purpose so they do not break in someone's basement in January.'；public/images/team-whiteboard.webp（4:3），alt 'Four colleagues gathered at a whiteboard, seen from behind' — 'Elena Novak · Firmware engineer' — 'Our stand-up is ten minutes. The other seven hours are for thinking.' 每张卡片链接到 #/stories。
   布局：Grid md:grid-cols-3 gap-6；照片 4:3，16px 圆角；引语使用 Red Hat Display 600 20px forest 色。
   动效：卡片以 90ms 错峰淡入上浮；照片悬停时 scale 1.03。
6. **开放职位预览** — H2 'Open roles.' 前四个职位以行展示：标题 Red Hat Display 600 22px，随后是等宽行，含部门、地点和类型；右对齐箭头。下方 'See all 8 roles' → #/roles。
   布局：白色卡片，行 py-5，1px 分隔线。
   动效：行悬停时 mintTint 背景。
7. **招聘流程时间线** — H2 'How hiring works here.' 五个步骤，forest 色横带、白色文字和 mint 编号圆圈：'01 Application — We read every one within five working days.'、'02 Intro call — 30 minutes with a recruiter or the hiring manager.'、'03 Practical exercise — A take-home task or a live session, 90 minutes, paid for our time.'、'04 Team interview — Two hours with the people you would work with.'、'05 Offer — A call, then a written offer within two days.'
   布局：Grid md:grid-cols-5 gap-8 py-20；桌面端圆圈后方一条 1px mint 线，移动端为纵向列表。
   动效：步骤以 80ms 错峰淡入上浮。
8. **人才社区与页脚** — id="talent"。H2 'Not the right role yet?'；muted 色一行：'Leave your email and we will send one note a month: what we are building and who we are hiring.' 一个邮箱输入框和 'Sign up'（forest 填充、白色文字）；需要有效邮箱，错误内联显示。成功后：'Thanks. This is a sample form, so nothing was sent.' 页脚：字标、导航、13px muted 小字 '[BRAND] · [CITY] and remote · People, roles, figures and benefits on this site are invented sample content.' 外加 [CREDIT]。
   布局：注册区 max-w-[560px]；页脚顶部 1px 细线。
   动效：成功提示淡入 200ms。

### 开放职位（`#/roles`）
1. **职位筛选与列表** — H1 'Open roles.'；muted 色一行 '8 roles across [CITY] and remote.' 筛选：'Department' 标签（All、Engineering、Operations、Sales & Support、Design）和 'Location' 标签（All、Burlington、Remote）。列表每行链接到 #/roles/<slug>：Senior heat-pump engineer — Engineering · Burlington · Full-time；Firmware engineer, thermostat — Engineering · Burlington · Hybrid；Test technician — Engineering · Burlington · Full-time；Installation coordinator — Operations · Remote · Full-time；Warehouse lead — Operations · Burlington · Full-time；Home energy advisor — Sales & Support · Remote · Full-time；Customer support specialist — Sales & Support · Remote · Part-time；Product designer, app — Design · Remote · Full-time。无匹配时显示 'No roles match these filters.' 和 'Clear filters' 链接。
   布局：max-w-[900px]；标签换行；行 py-5，1px 分隔线；计数行跟随筛选（'Engineering · 3 roles'）。
   动效：筛选变化如动效部分所述。

### 角色页面（`#/roles/senior-heat-pump-engineer`）
1. **角色页头** — 显示哈希中 slug 对应的角色（八个角色各自对应 #/roles/<slug>）；以 #/roles/senior-heat-pump-engineer 打开时显示该角色。面包屑 'Roles'；H1 使用 Red Hat Display 800、clamp(36px, 4.6vw, 64px)、forest 色；一行等宽字体文字 'Engineering · Burlington · Full-time · On-site'；薪资范围放在 sunshine 色块中，文字为 forest 色 '$105,000 – $135,000 + equity'；按钮 'Apply now'（forest 填充、白色文字 → #apply）和 'Save role'（描边）。右侧：public/images/workbench.webp（4:3）及其 alt 文本。
   布局：lg:grid-cols-[60%_40%] gap-12 items-center py-16。
   动效：淡入上移 400ms。
2. **关于该角色** — H2 'What you will do.' 五个要点：'Own the mechanical design of our next outdoor unit, from sketch to production line.'、'Run thermal and acoustic tests and turn the results into design changes.'、'Work with the firmware team on the controls that keep the unit quiet.'、'Visit installers four times a year to see how the units behave in real homes.'、'Mentor two junior engineers.' H2 'What you bring.' 五个要点：'Five or more years in mechanical design of appliances, HVAC or vehicles.'、'Hands-on experience with refrigeration cycles and compressor selection.'、'Comfort making a decision with incomplete data.'、'Clear writing: our design notes are read by the whole company.'、'Care about making low-carbon heating normal.' 其他角色在 content.ts 中有各自的要点。
   布局：桌面端两个列表分两列，移动端堆叠；要点带 mint 色对勾图标。
   动效：淡入上移 400ms。
3. **招聘流程与福利** — 一个紧凑的五步时间线（Application、Intro call、Practical exercise、Team interview、Offer），时长用等宽字体，以及一行四个福利标签：'Heat pump grant'、'Health from day one'、'Six percent 401(k) match'、'$2,000 to learn'。
   布局：位于 mintTint 面板上，rounded-[16px]，p-8。
   动效：无。
4. **申请表** — id="apply"。H2 'Apply.' 字段：Name、Email、'Where are you based?' 文本输入框、'Why [BRAND]?' 文本域并带等宽字符计数器（至少 100 个字符）、'LinkedIn or portfolio' URL（可选）、'CV' — 一个文件输入框，样式为带回形针图标的拖放区域 'Add your CV (PDF, DOC or DOCX, up to 10 MB)'；选中的文件显示为一个标签，带文件图标、文件名、等宽字体的文件大小和移除图标；一个同意复选框 'I agree to [BRAND] storing this application.'（必填）。按钮 'Submit application'（sunshine 填充、forest 文字）。Name、有效邮箱、所在地、100+ 字符的文本和同意为必填；错误在字段下方以 forest 文字显示在 sunshine 背景上。成功后表单替换为确认面板：'Application received. This is a sample form, so nothing was sent.' 并附上角色标题。
   布局：max-w-[720px]；输入框带 1px line 边框、10px 圆角和 3px mint 聚焦环；拖放区域位于 mintTint 上。
   动效：标签和成功面板淡入 200ms。

### 团队故事（`#/stories`）
1. **故事** — H1 'The people, in their own words.' 三篇完整访谈，每篇含一张照片、姓名和角色，以及三组问答。Priya Raman — Installation coordinator（lounge.webp）：'What does a good day look like?' — 'Forty installs scheduled by lunch and no phone call starting with “nobody came”.'；'What surprised you?' — 'How much of the job is listening. People are nervous about ripping up their house.'；'Why [BRAND]?' — 'My parents' house got one of the first units. It is warm now.' Marcus Osei — Test technician（workbench.webp）：'What do you do?' — 'I run the units harder than any winter would and log every failure.'；'What surprised you?' — 'How loud quiet can be. Our target is quieter than a fridge.'；'Why [BRAND]?' — 'I wanted to build something my neighbours can use.' Elena Novak — Firmware engineer（team-whiteboard.webp）：'What do you do?' — 'I write the controls that decide when the unit ramps up and when it waits.'；'What surprised you?' — 'That the hardest problem is a ten-minute stand-up and nothing else.'；'Why [BRAND]?' — 'I like that the measure of my code is a warm room.'
   布局：故事堆叠，之间用 1px line 分隔线；桌面端照片以 4:3 位于文字旁，移动端位于上方；问题使用 Red Hat Display 600 20px forest 色。
   动效：故事淡入上移 400ms。

## 资产
- image：六张由 VibeFather 在同一次拍摄中生成的照片，下载到 public/images/ 中，且不在其他任何地方使用：hero-office.webp（16:9）、rooftop-solar.webp（16:9）、team-whiteboard.webp、workbench.webp、lounge.webp 和 desk-call.webp（4:3）。每张均从 https://media.vibefather.ai/assets/897046cf-ea2f-421c-a4b6-2ad640de3c97/<file> 下载；alt 文本已在上述各节中给出（rooftop-solar.webp 和 desk-call.webp 可用于展示使命部分和职位页面）。在 ASSETS.md 中注明：'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.'
- icon：lucide-react npm 包（ISC）：menu、x、arrowRight、check、paperclip、xCircle、mapPin、clock、briefcase、heart、wallet、bookOpen、sun、users。不使用其他图标集，任何地方都不使用品牌标志。
- font：Fontsource 可变字体包（OFL-1.1）：@fontsource-variable/red-hat-display、@fontsource-variable/manrope 和 @fontsource/ibm-plex-mono，在 main.tsx 中导入。不使用字体 CDN 链接。

## 不要做
- 无后端：没有服务器代码、API 路由、数据库、认证或对任何服务的请求。申请表仅在内存中保留简历的名称和大小，两个表单都是本地示例，并会注明这一点。
- 公司、其人员、职位、薪资范围、数字和福利均为虚构的示例内容；不得指名或模仿任何真实雇主、工作场所或人员，数字需附注“Sample figures”。
- 照片展示的人物距离较远或背对镜头；不得有正面特写肖像；图像中不得有可读文字或标志。
- 这是一个雇主的招聘网站，不是招聘板：它只列出 [BRAND] 自己的职位。
- 不得将渐变用作装饰（主视觉遮罩仅用于可读性），不得使用玻璃面板或发光元素；在白色背景上使用平坦的森林绿、薄荷绿和阳光黄，配以 1px 线条。
- 阳光黄和薄荷绿填充始终搭配森林绿文字；森林绿上的小号文字为白色或薄荷绿。
- 一切自托管：字体通过 Fontsource 包，图像下载到项目中，不使用 CDN 脚本或链接标签，不使用 Google Fonts，不使用分析工具。
- Vite base 设为 './'，使用相对资源路径；内部链接为锚点（#/roles、#/stories、#/talent）或真实文件名，绝不使用裸目录；没有 slug 的角色路由显示第一个角色。
- 生产构建压缩且不生成 source map；dist/ 小于 20 MB。
- prefers-reduced-motion：无显现或缩放；筛选器即时变化。绝不在等待进入视口触发时用 clip-path 或零不透明度隐藏整个元素。
- Tailwind 不透明度工具使用默认刻度（例如 /85、/90）；自定义步长写为任意值。
- 不做 SEO 工作：一个包含 [BRAND] 的普通 <title> 和一个 favicon 就足够了。
- 不得从任何参考网站复制代码、文案、图像或字体；模板名称、slug、文案或 alt 文本中不得出现品牌名称。

---
— Prompt by VibeFather · https://vibefather.ai/t/company-careers-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
