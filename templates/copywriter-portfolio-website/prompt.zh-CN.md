> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 文案撰稿人作品集网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个虚构自由撰稿人的作品集，排版本身就是设计。写作样本按类型分组（网站、产品页面、电子邮件、标语、长文），每个样本都包含需求简报、前后对照以及以示例数字呈现的成果；一个语气与风格游乐场，你可以选择一种品牌个性，然后看同一句话以该语气重写；服务项目包含套餐与交付周期；客户评价；新闻通讯注册；以及联系方式。奶油色 #FFF8EC、墨色 #161616，以及像马克笔一样用于关键词的高亮绿 #B8F35C。不使用照片。

- 受众：小型软件和消费品牌创始人与营销人员，他们需要为网站、产品页面和电子邮件写出更好的文案。
- 目标：在最初十秒内展示普通文案与优秀文案的差异，然后引导访客前往联系表单或新闻通讯。
- 语气：平实、精准，略带揶揄。短句。不用关于营销的营销形容词。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource-variable/hanken-grotesk（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - vite.config.ts：base 设为 './'，build.sourcemap 设为 false，src/ 中的任何内容都不会被复制到 dist/。
  - tailwind.config.js：扩展颜色 cream #FFF8EC、edge #EFE6D0、ink #161616、muted #5C5A52、marker #B8F35C；fontFamily 中 display 为 'Fraunces Variable'，sans 为 'Hanken Grotesk Variable'，mono 为 'IBM Plex Mono'。
  - 高亮标记是内联 span，文字后方带一个倾斜的背景块（SVG path 或带硬停止点的 linear-gradient），颜色为 marker，绝不改变文字颜色。
  - 所有文案、示例、声音、套餐、引语和表单选项都以带类型的对象形式存放在 src/content.ts 中；组件绝不硬编码文案。

## 变量
- [BRAND] — 文案撰稿人的名字（默认：“Ada Whitlock”）
- [CITY] — 城市（默认：“Philadelphia”）
- [SPECIALTY] — 你撰写的领域（默认：“websites, product pages and email”）
- [CREDIT] — 在页脚保留一个指向 https://vibefather.ai/t/copywriter-portfolio-website 的小链接“Template by VibeFather”（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 奶油色（cream）`#FFF8EC` — 页面底色
- 边缘色（edge）`#EFE6D0` — 面板之前、分隔线、卡片边缘
- 墨色（ink）`#161616` — 文本、按钮、深色色带
- 柔和色（muted）`#5C5A52` — 奶油色和边缘色上的次要文本
- 标记色（marker）`#B8F35C` — 唯一强调色：关键词后的荧光笔笔触、结果标签、墨色上的链接；始终位于墨色文本之后

### 字体排印
- 展示 / 标题和引文：Fraunces Variable（OFL），字重 600/900
- 正文 / UI：Hanken Grotesk Variable（OFL），字重 400/500/600
- 等宽 / 简报、标签、数字：IBM Plex Mono（OFL），字重 400/500

### 布局与动效
- 间距：区块内边距桌面端 py-24 / 移动端 py-16；容器 max-w-[1160px] px-6；卡片 p-6 至 p-8；8px 节奏。
- 圆角：卡片 6px；按钮胶囊形（rounded-full）；标签胶囊形；copy-deck 卡片 10px。
- 动效：滚动显现：区块淡入上移 20px，历时 450ms，仅一次（Motion whileInView）；内容默认可见。
- 动效：Hero：标题出现后，标记笔触在 600ms 内从左向右生长；copy-deck 卡片的 'after' 行以每字符 60ms 的速度打字一次，然后结果标签弹出。
- 动效：示例筛选：离开的卡片淡出 150ms，进入的卡片淡入上移 250ms，错开 40ms。
- 动效：语气游乐场：切换声音时句子交叉淡入淡出 200ms，并滑动当前人格标签的下划线。
- 动效：prefers-reduced-motion：无显现、打字或笔触动画；所有内容一次性以最终状态显示。
- 图像：无照片、无插图。页面由字体、代码绘制的 copy-deck 卡片、超大引号和荧光笔笔触承载。仅使用平面奶油色、墨色和荧光绿；除 1px 边缘线外，无渐变、阴影或纹理。

## 页面与区块
### 首页（`index.html`）
1. **站点页眉** — 左侧：字标 [BRAND]，使用 Fraunces 900 22px 墨色，姓氏后方带马克笔笔触。中间导航：Samples（→ #samples）、Tone playground（→ #playground）、Services（→ #services）、Contact（→ #contact），Hanken Grotesk 500 14px 柔和色，悬停时变为墨色。右侧：胶囊按钮 'Work with me'（墨色填充、奶油色文字 → #contact）。
   布局：粘性 64px 栏，背景为 cream/95，带背景模糊和 1px 底部细线 ink/10；内部 max-w-[1160px]。移动端：字标和 lucide 菜单按钮在 390px 宽度下保持在同一行；菜单打开全屏奶油色抽屉，链接纵向堆叠。
   动效：链接悬停时获得马克笔笔触，150ms；抽屉淡入 200ms。
2. **首屏 — 文字即设计** — 左侧：眉题 IBM Plex Mono 500 12px 大写、字距最宽、柔和色 'FREELANCE COPYWRITER · [CITY]'。H1 使用 Fraunces 900，字号 clamp(52px, 7vw, 108px)，墨色，行高 0.95：'I write the words that do the selling.' — 其中 'words' 和 'selling' 后方带马克笔笔触。段落 19px 柔和色 max-w-[42ch]：'I'm [BRAND]. I write [SPECIALTY] for brands that would rather sound like a person than a brochure.' 按钮：'See the before and after'（墨色胶囊、奶油色文字 → #samples）和 'Try the tone playground'（墨色描边胶囊 → #playground）。右侧：一张用代码绘制的文案卡，白色背景，10px 圆角，1px 边缘边框：头部行含等宽字体 'HOMEPAGE HERO · V3' 和绿色标签 'FINAL'；'Before' 区块位于 edge 色上，文字为 'Unlock the power of effortless financial management for your business'，以柔和色加删除线；'After' 区块使用 Fraunces 600 28px 墨色，内容为 'Your books, done by Friday.'，其中 'done by Friday' 后方带马克笔笔触；页边注为等宽字体 '−9 words. +1 reason to care.'；结果标签为马克笔底色、墨色文字 '+31% trial starts (sample)'。
   布局：lg:grid-cols-[52%_48%] gap-12 items-center，min-h-[calc(100vh-64px)]，py-14。卡片旋转 −1deg，后方有一张偏移 12px 的第二张纸（edge 色）。卡片左上角后方有一个 240px 的 Fraunces 900 引号，马克笔色。移动端：先文字，后卡片，卡片正放、全宽。
   动效：标题淡入上移 500ms，马克笔笔触生长 600ms，'After' 行打字机效果一次，标签弹入 250ms。
3. **客户行** — 一行：等宽标签 'SELECTED CLIENTS' 和名称 Tallyhouse、Fieldwork、Driftwood Coffee、Pedal Post、Harrow & Sons，使用 Fraunces 600 20px ink/70，之间以小马克笔圆点分隔。
   布局：py-10，上下各 1px 细线 ink/10；移动端名称换行。
   动效：无。
4. **写作样本 — 前后对比** — id="samples"。H2 Fraunces 900 56px 'Same brief. Different words.' 筛选标签：All、Websites、Product pages、Email、Taglines、Long-form。样本卡片，每张包含：等宽行 'BRIEF' 和简报；两列标题 'Before' 和 'After'；以及一行结果标签，附等宽注释 'Sample numbers'。数据来自 content.ts — Websites：简报 'Homepage headline for Tallyhouse, a bookkeeping app for freelancers'；before 'Unlock the power of effortless financial management for your business'；after 'Your books, done by Friday.'；结果 '+31% trial starts'、'−12% bounce'。Websites：简报 'Pricing page intro for Fieldwork, a project tracker'；before 'Flexible pricing plans designed to scale with your team's needs'；after 'Pay for the people who log in. Nobody else.'；结果 '+9% plan upgrades'。Product pages：简报 'Product page for the Fieldwork standing desk'；before 'Ergonomic solutions for the modern workspace'；after 'A desk that remembers you like to stand at 2pm.'；结果 '+18% add-to-cart'、'Returns −6%'。Email：简报 'Win-back email for Driftwood Coffee subscriptions'；before 'We miss you! Come back and get 20% off!!!'；after 'Your grinder misses the good stuff. Here's 20% off your next bag.'；结果 '41% opens'、'9% orders'。Taglines：简报 'Tagline for Pedal Post, a same-day bike courier'；before 'Fast. Reliable. Professional.'；after 'There by lunch, sweat included.'；结果 'Used in 3 campaigns'。Long-form：简报 'About page for Harrow & Sons, a family hardware store'；before 'We are a family-owned business committed to excellence and customer satisfaction'；after 'Three generations of telling people the truth about their plumbing.'；结果 'Avg. time on page 3:40'。
   布局：卡片白色背景，1px 边缘边框，6px 圆角，p-6，grid lg:grid-cols-2 gap-6；每张卡片内 before 和 after 列为 lg:grid-cols-2，带 1px 分隔线；before 文字位于 edge 色上、柔和色、带删除线，after 文字使用 Fraunces 600 26px 墨色，关键短语带马克笔笔触；结果标签为马克笔底色，墨色等宽 13px 文字。
   动效：筛选动画如动效部分所述；卡片淡入上移，交错 60ms。
5. **语气 playground** — id="playground"。墨色色带，奶油色文字。H2 'One sentence, six voices.' 左侧：待改写的句子，Fraunces 600 32px 奶油色：'Our new app helps you save money without thinking about it.' 其下是三个等宽选项的句子选择器：'Savings app'、'Standing desk'、'Coffee club'。个性标签：Warm、Wry、Direct、Playful、Premium、Plain。右侧：奶油色结果卡，改写后的句子使用 Fraunces 900 clamp(28px, 3vw, 44px) 墨色，一行等宽文字标明语气，一行注释说明该语气的作用，以及按钮 'Copy this line'（lucide copy 图标），点击将句子写入剪贴板并显示 'Copied' 2 秒。默认句子的改写 — Warm：'Put a little aside each week and watch it add up, gently.'；Wry：'Saving money, minus the spreadsheet you'll abandon in March.'；Direct：'It moves spare change into savings. You don't have to do anything.'；Playful：'Your loose change, finally doing something with its life.'；Premium：'Quiet, considered saving, handled with care.'；Plain：'The app saves small amounts for you automatically.' 语气注释 — Warm：'Speaks to one person and never rushes.'；Wry：'Adds one joke. Never two.'；Direct：'Says what happens, then stops.'；Playful：'Gives the product a personality.'；Premium：'Fewer words, slower pace.'；Plain：'The shortest sentence that is still true.' content.ts 保存了另外两个句子在相同语气下的完整 3 × 6 集合。
   布局：色带内 lg:grid-cols-2 gap-12 py-20；标签在一行内换行排列，激活标签为马克笔文字加墨色填充；结果卡 p-8，6px 圆角。
   动效：切换语气或句子时结果交叉淡入 200ms。
6. **服务与套餐** — id="services"。H2 'Three ways to work with me.' 三张卡片：'Website copy — from $2,400 · 2 to 3 weeks'，条目 'Sitemap and message hierarchy'、'Every page, written and revised once'、'Handover notes for your designer'；'Product pages — from $900 per page · 1 week'，条目 'One page, one job'、'Headlines, body and FAQ'、'Two rounds of edits'；'Email sequences — from $1,200 · 10 days'，条目 'Up to five emails'、'Subject line options for each'、'A plain-text version included'。卡片下方一行柔和色 15px：'Fixed quotes before we start. No hourly billing.'
   布局：grid md:grid-cols-3 gap-6；价格使用 Fraunces 900 32px 墨色；中间卡片墨色填充、奶油色文字、马克笔项目符号。
   动效：卡片淡入上移，交错 80ms。
7. **客户评价** — H2 'What clients say.' 三条评价，Fraunces 600 24px 墨色，带马克笔开引号：'“The homepage paid for itself in a month. I stopped explaining what we do on calls.”' — Priya Raman，创始人，Tallyhouse；'“She deleted half my copy and it suddenly made sense.”' — Jonas Feld，产品负责人，Fieldwork；'“People reply to our emails now. To a coffee shop.”' — Marisol Vega，店主，Driftwood Coffee。
   布局：grid md:grid-cols-3 gap-8；姓名使用等宽 13px 柔和色。
   动效：评价淡入上移，交错 90ms。
8. **新闻通讯与联系** — id="contact"。左侧：H2 'One email a month.'；柔和色行：'I take one real sentence from the wild, rewrite it, and explain why. No links to buy anything.' 一个邮箱输入框和按钮 'Sign up'（墨色填充）。需要有效邮箱；错误内联显示。成功时：'You're on the list. This is a sample form, so nothing was sent.' 右侧：H2 'Tell me what you need writing.'；表单包含 Name、Email、'What is it?' 复选框（Website、Product pages、Email、Not sure yet）、'Budget' 单选胶囊（Under $2,000 / $2,000–5,000 / $5,000+ / Not sure yet）、'A few lines about the project' 文本域和 'Send'（墨色填充）。Name、有效邮箱、至少一个 'What is it?' 以及 20+ 字符的消息为必填；错误在字段下方的注释中内联显示。成功时：'Thanks, <name>. This is a sample form, so nothing was sent.'
   布局：lg:grid-cols-2 gap-12；输入框 1px ink/25 边框，6px 圆角，奶油色背景，2px 墨色聚焦环；桌面端新闻通讯字段共享一行。
   动效：列淡入上移，交错 90ms；成功消息淡入 200ms。
9. **页脚（Footer）** — 文字标识 [BRAND]，重复导航，13px 弱化小字：'Copywriting for [SPECIALTY] · [CITY]' 和 'Clients, results and quotes on this site are invented sample content.'，外加 [CREDIT]。
   布局：Grid md:grid-cols-3 gap-8 py-12，顶部带 1px 细线 ink/10。
   动效：无。

## 资产
- 图片：无。没有照片或插图：文案卡片、引号、标记笔画和圆点均使用 HTML、CSS 和内联 SVG 以代码绘制。
- 图标：lucide-react npm 包（ISC）：menu、x、copy、check、arrowRight、arrowDown。不使用其他图标集，任何地方都不使用品牌标志。
- 字体：Fontsource 包（OFL-1.1）：@fontsource-variable/fraunces、@fontsource-variable/hanken-grotesk 和 @fontsource/ibm-plex-mono，在 main.tsx 中导入。不使用字体 CDN 链接。

## 不要做
- 无后端：没有服务器代码、API 路由、数据库、认证，也没有任何会提交到某处的表单。newsletter 和 contact 表单是本地示例，会在其确认信息中说明这一点。
- 客户、成果、引语和人物均为虚构的示例内容；不得使用真实品牌、活动或口号，成果中始终带有 'sample' 一词。
- 不使用照片、图库图片或插画；页面由字体和代码绘制的元素承载。
- 不使用渐变、阴影、玻璃效果、emoji 或发光元素；仅使用扁平的奶油色（cream）、墨色（ink）和马克笔色（marker），并配以 1px 细线。
- 荧光绿始终是墨色文字背后的描边或色块，绝不作为奶油色背景上小号文字的颜色。
- 一切自托管：字体通过 Fontsource 包引入，不使用 CDN script 或 link 标签，不使用 Google Fonts，不使用分析工具。
- Vite base 设为 './'，使用相对资源路径；内部链接是 index.html 上的锚点（#samples、#contact），绝不使用裸目录。
- 生产构建需压缩，且不生成 source map；dist/ 小于 20 MB。
- prefers-reduced-motion：无显现、打字或描边动画；所有文字一次性以其最终状态显示。绝不在等待进入视口触发器时用 clip-path 或零不透明度隐藏整个元素。
- Tailwind 不透明度工具类使用默认刻度（例如 /10、/70、/95）；自定义档位写成任意值。
- 不做 SEO 工作：一个包含 [BRAND] 的普通 <title> 和一个 favicon 就足够了；不要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。
- 不从任何参考网站复制代码、文案或字体；模板名称、slug、文案或 alt 文本中不得出现品牌名称。

---
— Prompt by VibeFather · https://vibefather.ai/t/copywriter-portfolio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
