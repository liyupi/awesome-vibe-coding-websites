> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 产品评测博客

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个两页的评测出版物，[BRAND] 是一个虚构的独立网站，为 [AUDIENCE] 评测 [CATEGORY]。其身份定位是值得信赖的编辑型媒体：干净的白色底色、墨色文字、一种专用于评分和精选的自信绿色、Newsreader 衬线标题、搭配等宽数字的宽松表格排版，以及用于条带的温暖纸张色调。首页以堆叠式最佳榜单卡片展示为核心——获胜产品的照片、圆形评分徽章和绶带——置于衬线标题之下，随后是披露条带、一个可排序的六产品对比表（带有最佳精选绶带，行可打开评测页面）、一个包含“我们如何评分”卡片的购买指南，以及一个本地新闻订阅框。评测页面包含四项子评分明细、优缺点，以及一个结论框。

- 受众：正在对该品类进行比价购物的 [AUDIENCE]，以及联盟出版商、小众评测博主，和将该格式适配到任意产品列表的创作者。
- 目标：在两分钟内让持怀疑态度的人从标题走向自信的选择：通过前置的可见评分和方法证明严谨性，让他们按自己的方式排序表格，在一页内给出结论，并在本地捕获新闻订阅，而不假装任何内容已被发送。
- 语气：冷静、具体且自知——一个恰好是虚构的消费者杂志测试台。用具体观察而非形容词，每个优点都配有诚实的缺点，并且始终可见地披露页面上的每个评分都是虚构的样本。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/newsreader（OFL-1.1）、@fontsource/figtree（OFL-1.1）、@fontsource/spline-sans-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 设为 './'，build.outDir 设为 'dist'，build.sourcemap 设为 false。不使用路由、无后端、无服务端代码。
  - 安装 Tailwind CSS 3.4，并配置 PostCSS 和 Autoprefixer。用下方精确的调色板扩展主题，并设置 fontFamily.display 为 'Newsreader'、fontFamily.body 为 'Figtree'、fontFamily.mono 为 'Spline Sans Mono'；在 CSS 中为 mono 字体族启用等宽数字（tabular numerals）。
  - 通过 @fontsource 包在 src/main.tsx 中自托管 Newsreader 600 和 700 以及斜体 400、Figtree 400/500/600/700、Spline Sans Mono 500/700。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（useReducedMotion、AnimatePresence）实现主视觉卡片落定、表格重新排序、条形填充和区块显现；所有动画都要以 useReducedMotion() 为条件。
  - 将所有文案和数据放在 src/content.ts 中：出版物字符串、六条产品记录（id slug、名称、最适合标签、价格、照片路径、四个子评分、总分、两段评测文字、优点、缺点、结论）、指南步骤、评分权重、FAQ、新闻通讯文案。当变量值变化时，在该文件中重写依赖的文案；总分存储为精确数字，不重新计算。
  - 存储以下精确的示例数据：Fernway Ceramic No. 2 冲泡 9.6 / 易用 9.2 / 做工 9.0 / 性价比 9.4 / 总分 9.4；Copperline Glass Cone 9.2 / 9.0 / 8.6 / 9.3 / 9.1；Halcyon Steel Dripper 8.8 / 8.6 / 9.4 / 8.1 / 8.7；Brewer & Oakes Classic 8.4 / 9.0 / 7.8 / 9.2 / 8.5；Northline Twin-Cup 8.4 / 8.0 / 8.6 / 7.5 / 8.2；Pinecrest Porcelain Tower 8.8 / 7.2 / 8.8 / 6.4 / 8.1。
  - 使对比表格可排序：点击 Brew quality、Ease、Build、Value 或 Overall 会切换降序然后升序，重新排列行，并用填充为评分绿色的 ArrowUpDown 图标标记活动表头；Product 列永不排序。
  - 通过 URLSearchParams 读取 ?id= 来路由 review.html，匹配产品 slug，并始终回退到第一个产品——绝不出现未找到状态。'Read the next review' 按表格顺序循环并回绕。
  - 将新闻通讯注册持久化到 localStorage，键为 [BRAND_SLUG] + '-newsletter'；验证恢复的 JSON 并静默恢复。
  - 在构建前将六张生成的产品照片下载到 Assets 中列出的精确 public 路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者或生成器以及许可证。
  - 仅使用这些 lucide-react 图标：Check、X、ArrowRight、ArrowUpDown、Info。
  - 一个纯 <title> 为 '[BRAND] — [CATEGORY], scored' 和一个 favicon（一个带白色对勾的绿色圆圈）就足够了；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 出版物名称（默认：“Morning Filter”）。虚构的评测出版物；报头、新闻通讯名称和存储键都由它派生。
- [CATEGORY] — 评测品类（默认：“pour-over coffee makers”）。用平实词语表达的复数产品品类；驱动 H1、表格标题、评测文案和购买指南——用该品类重写这些内容。
- [AUDIENCE] — 受众（默认：“home brewers upgrading their morning ritual”）。用平实语言描述评测服务对象的短语；出现在 hero dek 和 about 行中。
- [MOTTO] — 格言（默认：“Scored by people who drink the results.”）。一行测试信条；出现在 hero dek 和页脚中。
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接，指向 https://vibefather.ai/t/product-review-blog（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 纸白（Paper white）`#FFFFFF` — 页面底色、卡片、表格
- 暖色带（Warm band）`#F6F3EC` — 披露信息带、结论框、订阅卡片
- 墨色（Ink）`#1B211D` — 标题、正文、表格线
- 石板绿（Slate green）`#55605A` — 次要文本、元信息、脚注
- 评分绿（Score green）`#0E7C4A` — 评分、最佳推荐绶带、优点勾选、主按钮
- 绿色浅底（Green tint）`#E3F0E6` — 评分徽章填充和高亮行底色
- 细线色（Hairline）`#E5E1D4` — 表格边框、分隔线、卡片边缘
- 柔和红（Muted red）`#B0433B` — 仅用于缺点 X 图标，克制使用

### 字体排印
- 展示字体：标题、结论陈述：Newsreader（OFL），字重 400/600/700
- 正文字体：段落、表格文本、按钮：Figtree（OFL），字重 400/500/600/700
- 数字字体：评分、价格、眉题、元数据：Spline Sans Mono（OFL），字重 500/700

### 布局与动效
- 间距：8px 基础网格。外壳最大宽度 1080px，桌面端两侧内边距 32px，移动端 20px。页头高 88px，底部有 1px 墨色分隔线。区块在桌面端垂直内边距 88px，移动端 64px。表格单元格垂直内边距 16px；正文每行最多 64 个字符。
- 圆角：卡片、按钮、输入框和照片均为 2px — 接近方形的编辑风格。唯一的圆形是 64px 的圆形评分徽章；最佳推荐绶带是锐利的矩形。
- 动效：首屏卡片堆叠在加载时从 6 度张开状态归位到静止旋转角度，历时 500ms；顶部卡片在悬停时上浮 4px。
- 动效：表格排序时，行以 220ms 的淡入上升交错重新渲染；激活的表头下划线滑动 200ms。
- 动效：当评测头部滚动进入视口时，子评分条在 600ms 内从 0 填充到其数值。
- 动效：区块在滚动时一次性显现，上移 12px 并淡入 420ms，交错 60ms。
- 动效：在 prefers-reduced-motion 下，上述所有动画都变为瞬时状态切换，无任何移动；所有交互保持完全可用。
- 图像：一个影棚布景，六张照片，一种调色：无品牌通用产品居中放置在暖中性无缝背景（#EFEAE2）上，左侧柔和漫射日光，带有轻柔接触阴影，50mm 镜头，六张照片的缩放和裁切保持一致。任何产品上不得出现文字、字母、数字、标志或品牌标记；除自然散落的少量咖啡豆外，不得有其他道具；不得出现人物。

## 页面与区块
### [BRAND] — [CATEGORY]，评分（`index.html`）
1. **报头、主视觉与披露声明** — 报头（88px，白色，底部 1px 墨色分隔线）：[BRAND] 使用 Newsreader 700 字重，其下嵌入等宽小标题 'INDEPENDENT · UNPAID · SAMPLE DATA'；导航锚点 Compare、Guide、FAQ；右对齐的评分绿色按钮 'Subscribe'。主视觉：左栏 — Spline Sans Mono 小标题 'THE BEST-OF LIST'；H1 使用 Newsreader 700 字重 'The 6 best [CATEGORY] we've tested.'；导语 'Six products, forty rounds each, one green score that has to be earned. [MOTTO]' 按默认值撰写；按钮：绿色实心 'See the comparison table' 和文字链接 'How we score ↓'。右栏 — 精选卡片堆叠：三张卡片像候选名单一样扇形展开，最前面的卡片展示获胜产品的照片、名称 'Fernway Ceramic No. 2'、适用标签 'Best overall'，以及一个 64px 的圆形评分徽章，显示 9.4；后面两张卡片分别以 5 度和 -4 度倾斜露出，展示第二和第三产品的照片。披露声明带直接位于主视觉下方，置于暖色带上，带有一个 Info 图标：'Demo disclosure — [BRAND] is a fictional publication. The products, scores, verdicts and “tested” claims on this page are invented samples for a website template; buttons link nowhere and nothing is earned.'
   布局：12 列网格：主视觉文案位于第 1–7 列，卡片堆叠位于第 8–12 列，最前面的卡片为 4:3 比例，后面两张向上偏移并旋转。报头内容与外壳共用。移动端：文案在前，然后卡片堆叠缩放至 78vw，仅最前面卡片的徽章与其顶部边缘重叠；按钮全宽堆叠，高度 48px。
   动效：卡片堆叠在加载时从 6 度展开状态在 500ms 内归位；最前面的卡片悬停时上浮 4px；小标题、H1、导语和按钮以 60ms 的错峰上升 12px；披露声明带最后淡入。
2. **对比表格** — Spline Sans Mono 小标题 'THE LINEUP'；Newsreader 标题 'Compare all six.'。列：产品（照片缩略图、名称、适用标签）、冲泡品质、易用性、做工、性价比、总分，以及末尾的 ArrowRight。按表格顺序排列的行：'Fernway Ceramic No. 2 — Best overall — $42'；'Copperline Glass Cone — Best for watching the bed — $34'；'Halcyon Steel Dripper — Best for travel — $38'；'Brewer & Oakes Classic — Best budget — $19'；'Northline Twin-Cup — Best for two — $44'；'Pinecrest Porcelain Tower — The splurge — $79'。每个评分单元格均为等宽字体，保留一位小数；Fernway 行带有绿色浅底填充、左边缘一个评分绿色的 'BEST PICK' 缎带标签，其总分单元格采用 64px 徽章样式。五个评分列在点击表头时排序；活动表头显示填充的 ArrowUpDown 和下划线。点击行内任意位置打开 ./review.html?id=fernway-ceramic-no-2（其他行对应匹配的 slug）。表格下方脚注：'Overall scores weight brew quality 50%, ease of use 20%, build 15%, value 15%. All figures and weights are invented samples.'
   布局：全外壳表格，1px 细线分隔，16px 单元格内边距，表头行使用等宽大写、12px 字距。行悬停时提升为绿色浅底背景。低于 640px 时，相同数据渲染为堆叠卡片：照片和名称在左，五个评分作为等宽行，获胜者带缎带，点击卡片打开评测。
   动效：排序时以 220ms 淡入上升错峰重新渲染行；活动表头下划线滑动 200ms；行在首次滚动时以 40ms 错峰显示一次。
3. **购买指南与评分方法** — 小标题 'BEFORE YOU BUY'；Newsreader 标题 'Four questions before you spend.' 四个编号步骤，每个两行：'01 How many cups a morning? — One sleeper or a household of five changes the size and the price band.'；'02 Paper or cloth filters? — Rib depth and drain speed follow from the filter; decide before the dripper.'；'03 Where will it live? — Counter space, cabinet height, and whether it can stay out full-time.'；'04 What's your ceiling? — Set the budget first; this list proves the $19 cone is genuinely competitive.' 暖色带上的侧边卡片，小标题 'HOW WE SCORE'：四项标准及权重 — 'Brew quality 50% · Ease of use 20% · Build 15% · Value 15%' — 四条细示例条，以及文字 'Four sub-scores roll up to the overall. Weights and figures are invented samples for this template.'
   布局：7/5 分割：步骤为单列编号行，使用等宽数字和细线分隔；评分卡片在桌面端粘性定位在列顶部。移动端：步骤在前，然后卡片。
   动效：示例条在显示时以 600ms 填充至 50/20/15/15；步骤以 60ms 错峰显示。
4. **新闻通讯** — 暖色带，居中卡片：Spline Sans Mono 小标题 'THE DISPATCH'；Newsreader 标题 'One email a month. Zero hype.'；文案 'New [CATEGORY] scores, price drops worth knowing, and the occasional retraction — from [BRAND], for [AUDIENCE].' 电子邮件输入框和绿色 'Subscribe' 按钮。提交时，本地验证地址并将表单替换为 'Saved in your browser — this demo doesn't send email.'，带 Check 图标和 'Change address' 链接，点击后恢复预填的表单。
   布局：卡片最大宽度 560px，2px 圆角，1px 细线边框，32px 内边距；桌面端输入框和按钮内联，移动端堆叠；确认信息为 aria-live='polite'。
   动效：确认信息以 240ms 交叉淡入；按钮点击时下压 1px；其他无动效。
5. **FAQ 与页脚** — FAQ 'Asked before buying.' 作为四个 details/summary 项：'Do companies pay for placement?' — 'No. This is a fictional demo publication; scores, verdicts and “tested” claims are invented samples, and no button earns a cent.'；'Why one decimal place?' — 'The overall is a weighted roll-up of the four sub-scores shown in the table note — all sample math.'；'Do you keep review samples?' — 'In the demo's story, everything goes back. In reality there is no story: the products are invented.'；'How often does the table change?' — 'This demo has no schedule and shows no dates — whoever deploys the template rewrites the copy.' 页脚为白色，顶部 1px 墨色分隔线：[BRAND] 使用 Newsreader 700 字重，下方为格言 '[MOTTO]'，导航锚点（Compare、Guide、FAQ、Subscribe），文字 'A fictional review publication built as a website template. Every score on this site is an invented sample.'，'© [BRAND]' 不含年份，以及可选的 [CREDIT] 链接。
   布局：FAQ 单列最大宽度 760px，带 1px 细线分隔和切换时的加号/减号旋转；页脚分两行 — 品牌块在左，导航在右 — 移动端堆叠。
   动效：FAQ 切换时 160ms 的箭头旋转，无可能裁剪文本的高度动画；页脚静态。

### 评测 — [BRAND] (`review.html`)
1. **评测页头部** — 读取 ?id=，若缺失则回退到第一个产品；页面标题变为产品名称。面包屑链接 '← All [CATEGORY]' 指向 ./index.html#compare。左侧：产品照片以 4:3 比例置于细线边框中。右侧：绿色调的 best-for 标签芯片；产品名用 Newsreader 700（默认产品为 'Fernway Ceramic No. 2'）；价格用等宽字体（'$42 · sample'）；64px 圆形评分徽章显示 Overall 9.4；四条子评分条——Brew quality 9.6、Ease of use 9.2、Build 9.0、Value 9.4——每条均为细线轨道配 score-green 填充、等宽标签和等宽数值；以及一个文本链接 'Read the verdict ↓' 向下锚定。
   布局：12 列网格：照片占第 1–5 列，评分占第 6–12 列。评分条高 8px，数值右对齐；徽章位于名称右上角。移动端：照片优先全宽显示，然后是评分区块。
   动效：当头部进入视口时，评分条在 600ms 内从 0 填充到其数值；照片从 scale 1.02 归位；徽章在 400ms 内计数一次——在减少动态效果模式下全部即时呈现。
2. **评测正文** — 每个产品两段，为默认产品撰写并存储在 content.ts 中。Fernway Ceramic No. 2——第一段：'Forty brews in, the Fernway's thick walls still hold heat like a kiln. The spiral ribs sit high, so the bed drains evenly even on a fast pour, and the throat fits both the bundled carafe and most mugs we tried. It drank a fifteen-second pour window without stalling once.' 第二段：'It is not the cheapest cone on the shelf, and the matte glaze shows water spots if you air-dry it. But five brews in a row landed within half a point of each other on the cupping table — no other cone here came close to that consistency.' 对于其余五条记录，在 content.ts 中撰写两段同等具体度的文字（Copperline 的可见性、Halcyon 的可收纳性、Oakes 的价格诚实度、Twin-Cup 的双出水口、Pinecrest 的香气）。
   布局：单列最大宽度 680px，每行 64 字符，每段第一句用 Newsreader 400 斜体作为导语效果，段落之间用细线分隔。
   动效：标准的每次滚动显现，上移 12px。
3. **优缺点** — 两列，中间用细线分隔。优点在 score-green 的 Check 图标下，每个产品四条——Fernway 的为：'Even extraction across pour speeds'；'Heat-holding thick ceramic'；'Fits most carafes and mugs'；'Consistent cup to cup'。缺点在柔和红色的 X 图标下，每个产品两条——'Premium price'；'Matte glaze shows water spots'。在 content.ts 中按此密度为每条记录存储四条优点和两条缺点。
   布局：桌面端两等列，移动端堆叠且优点在前；列表行间距 16px；无卡片外框，仅用分隔线。
   动效：显现时图标以 1.1 缩放弹出，40ms 交错。
4. **结论框与下一篇评测** — 暖色带卡片：Spline Sans Mono 眉题 'THE VERDICT'；两句话用 Newsreader 600——Fernway 的为：'The cone we'd buy with our own money: forgiving, consistent, and built to outlast the counter it sits on. Best for brewers who want one dripper that makes every morning boring in the best way.' 每个产品存储一条结论。下方一行：一个绿色描边的 'Check price — demo' 锚点指向 '#'，以及一个文本链接 'Read the next review →' 按表格顺序循环到下一个产品并回绕到第一个。
   布局：卡片最大宽度 680px，2px 圆角，1px 细线边框，32px 内边距；锚点下方 12px 处的小型大写演示说明 'sample link, goes nowhere'。
   动效：卡片以标准上移动效显现；下一篇评测链接仅在悬停时显示下划线。
5. **页脚** — 首页的共享页脚逐字重复：带座右铭的报头区块、导航锚点、虚构出版物声明、不带年份的 '© [BRAND]'，以及可选的 [CREDIT] 链接。
   布局：与首页页脚完全相同。
   动效：静态。

## 资产

- 图片：Winner 的产品照片。将 https://media.vibefather.ai/assets/80f9cd3d-d998-4ace-b2f8-75426c69a114/fernway-ceramic.webp 下载到 public/images/fernway-ceramic.webp。Alt：'A matte ivory ceramic pour-over dripper on a glass carafe against a warm neutral backdrop.' 用于 hero 堆叠的前卡、对比表格和 Fernway 评测页。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：第二张产品照片。将 https://media.vibefather.ai/assets/80f9cd3d-d998-4ace-b2f8-75426c69a114/copperline-glass.webp 下载到 public/images/copperline-glass.webp。Alt：'A clear glass pour-over dripper with a slim copper ring resting on a carafe.' 用于 hero 堆叠的后卡、表格行和 Copperline 评测。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：第三张产品照片。将 https://media.vibefather.ai/assets/80f9cd3d-d998-4ace-b2f8-75426c69a114/halcyon-steel.webp 下载到 public/images/halcyon-steel.webp。Alt：'A brushed stainless-steel folding pour-over dripper standing on a small steel mug.' 用于 hero 堆叠的后卡、表格行和 Halcyon 评测。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：第四张产品照片。将 https://media.vibefather.ai/assets/80f9cd3d-d998-4ace-b2f8-75426c69a114/brewer-oakes.webp 下载到 public/images/brewer-oakes.webp。Alt：'A speckled stoneware pour-over dripper in an oatmeal glaze on a glass carafe.' 用于表格行和 Brewer & Oakes 评测。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：第五张产品照片。将 https://media.vibefather.ai/assets/80f9cd3d-d998-4ace-b2f8-75426c69a114/northline-twin.webp 下载到 public/images/northline-twin.webp。Alt：'A wide double ceramic dripper resting over two small ceramic cups.' 用于表格行和 Northline 评测。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：第六张产品照片。将 https://media.vibefather.ai/assets/80f9cd3d-d998-4ace-b2f8-75426c69a114/pinecrest-tower.webp 下载到 public/images/pinecrest-tower.webp。Alt：'A tall porcelain pour-over tower on a turned walnut base.' 用于表格行和 Pinecrest 评测。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图标：安装 lucide-react（ISC），仅使用 Check、X、ArrowRight、ArrowUpDown 和 Info。不要绘制任何品牌标志；评分徽章是圆圈中的文字，不是图标。请在 ASSETS.md 中记录该包和许可证。
- 字体：通过 @fontsource/newsreader（OFL-1.1）自托管 Newsreader 400（含斜体）、600 和 700。请在 ASSETS.md 中记录该包和许可证；不要使用字体 CDN。
- 字体：通过 @fontsource/figtree（OFL-1.1）自托管 Figtree 400/500/600/700。请在 ASSETS.md 中记录该包和许可证；不要使用字体 CDN。
- 字体：通过 @fontsource/spline-sans-mono（OFL-1.1）自托管 Spline Sans Mono 500/700，并为评分列启用等宽数字。请在 ASSETS.md 中记录该包和许可证；不要使用字体 CDN。

## 不要做
- 不使用真实产品、品牌、评测出版物或商店：每个产品名称、价格、评分、结论和“实测”声明都是虚构的，披露条和页脚会显著说明这一点。
- 产品照片是 AI 生成的中性背景通用物件，无可读的品牌、标签、文字或标志；六张照片必须共用同一套影棚设置——相同无缝背景、相同光线、相同比例。
- 任何地方都不出现日期或年份：没有“更新”时间戳、没有发布日期、没有版权年份、没有基于访客时钟的相对时间逻辑。
- 订阅通讯仅限本地：表单不提交到任何地方，无服务、无 API、无分析；持久化到 localStorage 并校验恢复的数据。
- “Check price”和票券式锚点仅链接到“#”，并明确标注为演示；绝不伪造真实店面或联盟重定向。
- 无后端、服务器代码、数据库、认证或外部请求。静态输出在 dist/ 中，由单一构建命令生成，使用相对路径。
- 仅通过列出的 Fontsource 包自托管字体；绝不加载 Google Fonts、Adobe Fonts 或任何 CDN 样式表或脚本。
- 生产环境无 source map，不将 src/ 复制到 dist/，保持 dist/ 在 20 MB 以下，并保持 Vite 的 base 为相对路径。
- 不使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件；仅使用六张生成的图片。
- 每个内部链接都是文件名（./index.html#compare、./review.html?id=…）或页内锚点，绝不用裸目录；不带 id 打开 review.html 时显示第一个产品，绝不显示未找到状态。
- 绿色仅保留给评分、推荐和优点——绝不用于通用装饰；缺点仅使用柔和的红色图标。
- 对比表必须保持键盘和屏幕阅读器可用：可排序表头是带 aria-sort 的按钮，行是可聚焦链接，重新排序绝不困住焦点。
- 尊重 prefers-reduced-motion：条形填充、徽章计数和行重新排序变为即时状态变化；每个交互保持功能正常。
- 所有文案保持美式英语，并从 [BRAND] 和 [BRAND_SLUG] 派生订阅通讯存储键和 slug，以便替代变量值绝不留下默认品牌残留。
- 不做 SEO 工作：无 meta 描述、Open Graph 标签、JSON-LD、站点地图或关键词堆砌标题。带 [BRAND] 的普通标题和 favicon 就足够。
- 网站必须在 1440×900 和 390×844 下渲染，控制台零错误，包括查询路由的评测页面和表格的移动端卡片布局。

---
— Prompt by VibeFather · https://vibefather.ai/t/product-review-blog · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
