> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 定制蛋糕烘焙坊网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个原创的单页网站，[BRAND] 是一家虚构的定制蛋糕烘焙店，在 [CITY] 提供 [SPECIALTY]。核心是一个可用的蛋糕配置器，带有实时代码绘制的 SVG 蛋糕、确定性定价、考虑提前期的自取选择，以及可复制的订单请求。使用六张协调的本地蛋糕照片用于首屏、画廊和流程部分；配置器本身必须用代码绘制，不能用静态图片表示。

- 受众：计划生日、婚礼、迎婴派对、周年纪念和小型聚会的人，他们希望在联系本地烘焙店之前了解蛋糕选择、份数、价格和自取时间。
- 目标：帮助访客从视觉灵感走向完整、连贯的蛋糕请求，同时让烘焙店显得成熟、细致且平易近人。让构建器在桌面端和移动端都真正有用，不设虚假结账或提交。
- 语气：温暖、具体、自信，略带俏皮。使用简洁的感官语言描述蛋糕，用清晰的实用语言描述订购。避免夸大宣传、奢华陈词滥调和甜腻的营销废话。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：Motion 11 for React（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL）、@fontsource/dm-sans（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 创建一个 Vite React TypeScript 项目；安装 Tailwind CSS 3.4、motion、lucide-react、@fontsource-variable/fraunces 和 @fontsource/dm-sans。
  - 在 vite.config.ts 中设置 base: './' 和 build.sourcemap: false；生产输出必须为 dist/。
  - 使用下方颜色、字体族、间距和关键帧配置 Tailwind；在 src/main.tsx 中导入本地 Fontsource 包。
  - 将所有站点文案、图片路径、营业时间、常见问题、客户评价和变量派生值保留在 src/content.ts 中；将蛋糕选项和价格保留在 src/cakeOptions.ts 中。
  - 为蛋糕配置使用一个 React 状态对象，并从中派生份数、SVG 几何、行项目和总计；切勿维护重复的价格或预览状态。
  - 仅在 localStorage 中持久化非个人蛋糕配置选择；不要持久化姓名、联系方式、消息或取货日期。

## 变量
- [BRAND] — 烘焙店名称（默认："Fable & Frost"）。一个虚构的烘焙店名称，用于页眉、主视觉区、页脚和页面标题。
- [CITY] — 城市和地区（默认："Portland, Oregon"）。用于眉题、取货指引和到访文案。
- [SPECIALTY] — 蛋糕特色（默认："garden-inspired celebration cakes"）。一个简短的小写短语，描述烘焙店的理念。
- [LEAD_TIME_DAYS] — 最短提前通知天数（默认："4"）。一个正整数，用于取货日期校验和订购文案。
- [PICKUP_ADDRESS] — 取货地址（默认："18 Marigold Lane, Portland, Oregon"）。一个虚构的街道地址，用于到访区块、页脚和复制的请求内容。
- [ORDER_EMAIL] — 订单邮箱（默认："orders@fableandfrost.example"）。访客复制其请求时显示的目标地址；虚构内容请使用保留的 .example 地址。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/custom-cake-bakery-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 纸白（Paper）`#F7F1E8` — 主页面背景和充裕的留白
- 墨色（Ink）`#30251F` — 标题、正文和深色控件
- 樱桃红（Cherry）`#A4473C` — 主按钮、选中状态、链接和小型编辑点缀
- 腮红粉（Blush）`#EBC9C0` — 主视觉面板、插画背景和选中选项的浅色底
- 鼠尾草绿（Sage）`#68735D` — 次级点缀、装饰茎叶和成功反馈
- 奶油白（Cream）`#FFFCF7` — 照片衬底、表单表面和深色按钮上的文字

### 字体排印
- 展示字体和品牌字标；桌面端使用 76px/0.98，移动端使用 48px/1.02，字重 600，偶尔使用斜体强调：Fraunces Variable（OFL），字重 500/600/700
- 正文、导航、控件、标签和价格；正文 17px/1.65，标签 13px 并带有适度字距：DM Sans（OFL），字重 400/500/600/700

### 布局与动效
- 间距：使用 8px 基础网格。主容器最大宽度 1280px，桌面端左右内边距 40px，移动端 20px。主要区块的垂直内边距桌面端 112px，移动端 72px。表单组之间保持 28px 间距，正文行宽控制在 62 个字符以内。
- 圆角：照片边框和蛋糕预览舞台使用 18px，表单控件和选项行使用 12px，小标签使用 4px。完全圆形的形状只用于微小的状态圆点和蛋糕的裱花装饰，不要用于所有容器。
- 动效：主要区块标题和内容组使用 Motion 的 whileInView 只揭示一次：透明度从 0 到 1，y 从 24 到 0，持续 500ms，同级元素之间错开 80ms。
- 动效：当蛋糕选项变化时，仅对受影响的 SVG 层或装饰进行交叉淡入淡出和轻微缩放，持续 220ms；预估总价数字使用 120ms 的细微高亮动画，而不是滚动计数器。
- 动效：画廊图片在悬停和聚焦时以 450ms 缩放至 1.03；按钮上移 2px，选中的选项行保持明显标记且不引起布局移动。
- 动效：请求对话框使用 180ms 的透明度和缩放过渡，复制反馈使用短提示条。在 prefers-reduced-motion 下，禁用揭示动画、平滑滚动、缩放和非必要过渡。
- 图像：使用 assets 中列出的六张生成的写实编辑风格食物照片：hero-cake.webp、berry-cake.webp、pistachio-cake.webp、chocolate-cake.webp、citrus-cake.webp 和 cake-making.webp。所有照片共享温暖的左侧窗光、柔和阴影、微妙的胶片颗粒、逼真的奶油霜，以及奶油色、赤陶色、腮红粉和柔和鼠尾草绿的色调。展示完整的蛋糕或近距离的工艺细节，绝不出现紧贴的面部、文字、标志或品牌装饰。构建器中的实时蛋糕是一个独立的原创内联 SVG，具有干净、柔和纹理的几何造型。

## 页面与区块
### [BRAND] — 定制庆典蛋糕（`index.html`）
1. **页眉与导航** — 使用文字标识 '[BRAND]'，配一行小字 'CUSTOM CAKES · [CITY]'。桌面端导航项为 'Cake gallery'、'Build your cake'、'How it works' 和 'Visit'，分别链接到 #gallery、#builder、#process 和 #visit。主按钮文字为 'Start your cake'，链接到 #builder。移动端使用 Menu 图标按钮，打开一个紧凑的导航面板，包含相同链接和可见的关闭状态。
   布局：粘性 80px 页眉，背景为近乎不透明的 Paper 色，底部有细的 Ink/12 边框。在 1280px 容器内，文字标识居左，导航加 CTA 居右。在 390px 时，缩减为 68px，仅显示文字标识和一个 44px 菜单按钮，打开的面板直接位于页眉下方，不覆盖整个屏幕。
   动效：无入场动画。仅在未请求减少动效时启用平滑滚动锚点导航；选择导航项后关闭移动端面板。
2. **首屏** — 眉题：'[SPECIALTY] · made to order in [CITY]'。H1：'Your celebration, baked into a cake.' 正文：'Choose the size, layers, flavor and finish. See your cake take shape and get a clear estimate before you request pickup.' 主 CTA：'Build your cake'；次级文字链接：'Browse the gallery'。添加一行小字细节：'Pickup in [CITY] · [LEAD_TIME_DAYS]-day minimum notice'。使用 hero-cake.webp 及提供的替代文本，下方配小图注：'Made for your table · About 8–70 servings'。
   布局：桌面端使用 12 列网格，五列用于文案，七列用于照片。文案对齐到垂直居中附近，H1 保持三行有意的断行，标题与操作按钮之间留出充裕空间。图片填充 4:3 画框，18px 圆角，右上角后方有一个小的 Blush 偏移形状。移动端依次堆叠眉题、H1、正文、CTA、细节行，然后照片；保持两个 CTA 均可触达，避免水平裁切。
   动效：加载时，文案向上淡入 18px，持续 500ms，照片以透明度加 12px 上升显现。不要逐字母动画标题。
3. **蛋糕画廊** — H2：'A starting point, not a limit.' 引言：'Browse a few finishes, then make them yours in the builder.' 创建四个摄影条目：'Raspberry Veil' 配 'vanilla bean · raspberry frosting · seasonal fruit'；'Pistachio Pearl' 配 'lemon elderflower · pistachio frosting · piped pearls'；'Cocoa Arc' 配 'chocolate hazelnut · cocoa frosting · chocolate arcs'；以及 'Citrus Petal' 配 'lemon elderflower · silk vanilla frosting · pressed sugar petals'。每个条目都有一个可见的 'Use this finish' 按钮，将匹配的风味、糖霜和装饰应用到构建器，然后跳转到 #builder。
   布局：使用编辑式 12 列构图而非四个等宽卡片：Raspberry Veil 占五列配竖版图片，Pistachio Pearl 占七列配横版，Cocoa Arc 占七列配一致裁切的竖版，Citrus Petal 占五列配横版。标题和描述放在图片下方，配细线分隔，而非浮动玻璃卡片。移动端变为单列，顺序相同，保持图片宽高比，按钮至少 44px 高。
   动效：按顺序逐行显现。在图片悬停或键盘聚焦时，仅将照片缩放至 1.03 并加深 'Use this finish' 箭头；激活后在构建器中立即给出选中状态反馈。
4. **定制蛋糕构建器** — H2：'Build the cake you have in mind.' 引言：'Every choice updates the sketch and the estimate. You can change anything before you copy your request.' 使用可访问的 fieldset 配单选输入和精确选项。SIZE：Petite 6-inch，约 8 份基础份量，$58；Classic 8-inch，约 16 份基础份量，$82；Grand 10-inch，约 28 份基础份量，$118。TIERS：One tier，无附加费，1× 基础份量；Two tiers，+$48，1.75× 基础份量四舍五入到最接近的整数；Three tiers，+$96，2.5× 基础份量四舍五入到最接近的整数。FLAVOR：Vanilla bean +$0，浅色夹层带；Chocolate hazelnut +$6，可可夹层带；Lemon elderflower +$6，淡黄色夹层带；Spiced carrot +$4，暖橙色夹层带。FROSTING：Silk vanilla +$0，#F4E5CF；Raspberry +$4，#D99491；Pistachio +$4，#AEBB9B；Cocoa +$2，#76564A。DECORATION：Pressed sugar petals +$14，Piped pearls +$10，Chocolate arcs +$12，Seasonal fruit +$16。添加一个可选的题字复选框，勾选时显示一个必填消息字段，上限 28 个字符，费用 +$6。仅在存在授权的本地字体时，使用通用手写字体回退在 SVG 蛋糕上显示题字；否则使用 DM Sans 斜体。PICKUP：原生日期输入，最小值设为本地今天加 [LEAD_TIME_DAYS] 天，最大值六个月后；通过验证禁用周日和周一，并说明 'Pickup is Tuesday–Saturday. We need at least [LEAD_TIME_DAYS] days notice.' CONTACT：必填的 Name 和 Email 字段，加上可选的 Phone 和 Celebration notes；内联验证邮箱格式和必填字段。SUMMARY：显示品牌、动态近似份量、所选选项、题字（如有）、取货日期，以及尺寸、层数、风味、糖霜、装饰和题字的分项费用。以 USD 显示 'Estimated total' 和 'Final design and price are confirmed by the bakery.' 按钮为 'Review cake request' 和一个更低调的 'Start over'。Review 打开一个可访问的模态框，包含完整摘要和一个 'Copy request' 按钮。Copy 将纯文本请求写入剪贴板，并确认 'Copied — paste it into an email to [ORDER_EMAIL].' 绝不声称请求已发送。Start over 在确认后恢复 Petite、one tier、Vanilla bean、Silk vanilla、Pressed sugar petals、无题字，并清空取货和联系字段。
   布局：使用 Blush 色调的全宽区块，标题位于双栏工作区上方。桌面端，左侧五列包含一个粘性预览舞台，顶部：96px；右侧七列包含由细线分隔的顺序 fieldset。预览舞台包括一个 520×520 响应式 SVG，背景为 Cream，近似份量，下方分项摘要，以及审核操作。所有 fieldset 作为顺序区块保持可见；不要将选项隐藏在多步向导后面。移动端，将 SVG 预览放在最前，不使用粘性定位，然后是控件，然后是非粘性摘要。使用全宽选项行，最小 44px 触控目标，保持总计可见且无水平溢出。
   动效：内联 SVG 必须从共享状态立即重绘：尺寸改变蛋糕宽度和高度，层数添加居中的锥形层，糖霜改变外部填充，风味改变可见夹层带，装饰添加明显不同的原创 SVG 形状，题字更新其文本。使用蛋糕架、柔和椭圆阴影和克制的糖粒纹理。通过 aria-live 播报估计总计和验证消息；选项变化时不要旋转、弹跳蛋糕或自动滚动。
5. **订购流程与到访** — 在 #process，H2：'From sketch to celebration.' 三个编号步骤：01 'Build your cake' — 'Choose a size and finish, then add the details that make it yours.' 02 'Choose pickup' — 'Pick a Tuesday–Saturday date that allows at least [LEAD_TIME_DAYS] days notice.' 03 'Send the request' — 'Copy your summary and email it to [ORDER_EMAIL]. We will confirm the design, availability and final price before requesting a 50% deposit.' 在 #visit，显示 'Come by for cake talk.'、'[PICKUP_ADDRESS]'、'Tuesday–Friday, 9:00 AM–5:00 PM'、'Saturday, 9:00 AM–2:00 PM'、'Sunday–Monday, closed' 和 'Pickups are by appointment.' 在此实用信息旁使用 cake-making.webp。
   布局：将三个步骤放在带线的水平行中，然后是一个双栏到访区块，流程照片在左，地址/营业时间在右。在步骤编号后方添加一个简单的原创 SVG 装饰，而非地图或外部嵌入。移动端堆叠步骤，左侧带线，并将照片放在到访详情之前。
   动效：以短暂错峰显现每个步骤。保持所有营业时间和联系信息可见，不依赖动画。
6. **庆典留言** — H2：'Notes from the party table.' 使用三条明确虚构、具体的引语，不带星级评分：Nina & Theo：'The lemon elderflower cake was light, not too sweet, and the sugar petals matched our table linens.' Marcus L.：'The estimate made planning our daughter’s party easier, and the two-tier cake fed everyone with a little left for Sunday.' Priya S.：'They turned a few colors I liked into a cocoa-and-petal design that felt completely ours.' 添加一条小编辑注：'Customer names and stories shown here are invented sample content.'
   布局：三个等宽列，由顶部和底部细线分隔，使用充裕的 Fraunces 引语样式和 DM Sans 署名。移动端堆叠，间距 28px，无轮播。
   Motion：仅使用一次克制的分组显现；不使用自动轮播的客户评价轮播。
7. **常见问题** — H2：'Before you preheat the party plans.' 使用五个手风琴项，第一项默认展开。'How far ahead should I order?' — '[LEAD_TIME_DAYS] days is the minimum for simple cakes. For three-tier designs, two to three weeks gives us more room to plan.' 'Is the estimate the final price?' — 'It covers the choices shown here. We confirm the final quote after reviewing your request; elaborate handmade details may change it.' 'Can you accommodate allergies?' — 'Tell us about allergies in Celebration notes. Our kitchen handles wheat, dairy, eggs and nuts, so we cannot guarantee an allergen-free cake.' 'Do you deliver?' — 'Pickup is at [PICKUP_ADDRESS]. Ask about local delivery in your email and we will quote it if available.' 'How do I confirm an order?' — 'Email the copied request to [ORDER_EMAIL]. After we confirm the design and date, a 50% deposit reserves your pickup. This website does not take payment.'
   Layout：12 列网格，四列粘性标题和八列手风琴列表。每个问题都是全宽按钮，带一个 Plus 图标，点击后旋转为减号状态；答案采用可读的 60 字符行宽。在移动端，移除粘性定位，并保持触摸目标至少 48px。
   Motion：手风琴高度和透明度过渡持续 200ms，在减少动态效果时变为即时。
8. **页脚** — 用大号 Fraunces 字体显示 '[BRAND]'，其下为 '[SPECIALTY]'，然后是 '[PICKUP_ADDRESS]' 和 '[ORDER_EMAIL]'。包含指向 #gallery、#builder、#process 和 #visit 的文本链接，以及最后一行小字：'Made with care in [CITY].' 以不显眼的方式附加可选的 [CREDIT] 链接。
   Layout：Ink 背景配 Cream 文字，64px 垂直内边距，品牌区块在左，导航/联系在右。避免在小宽度下被裁切的超大文字标识；在 390px 时堆叠所有内容，并允许电子邮件地址换行。
   Motion：页脚无持续动画。

## 资源

- 图片：hero-cake.webp — https://media.vibefather.ai/assets/71bc3964-1198-48d9-a5f9-d3d5adbbf9a7/hero-cake.webp → public/images/hero-cake.webp。Alt：'Two-tier cream celebration cake with sugar petals on a stone pedestal.' 用作大幅主视觉照片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。下载到本地，并在 ASSETS.md 中记录路径、URL 和来源署名。
- 图片：berry-cake.webp — https://media.vibefather.ai/assets/71bc3964-1198-48d9-a5f9-d3d5adbbf9a7/berry-cake.webp → public/images/berry-cake.webp。Alt：'Blush raspberry cake topped with strawberries and raspberries.' 用于画廊中的 Raspberry Veil。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。下载到本地，并在 ASSETS.md 中记录路径、URL 和来源署名。
- 图片：pistachio-cake.webp — https://media.vibefather.ai/assets/71bc3964-1198-48d9-a5f9-d3d5adbbf9a7/pistachio-cake.webp → public/images/pistachio-cake.webp。Alt：'Muted pistachio-green cake with delicate piped buttercream pearls.' 用于画廊中的 Pistachio Pearl。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。下载到本地，并在 ASSETS.md 中记录路径、URL 和来源署名。
- 图片：chocolate-cake.webp — https://media.vibefather.ai/assets/71bc3964-1198-48d9-a5f9-d3d5adbbf9a7/chocolate-cake.webp → public/images/chocolate-cake.webp。Alt：'Cocoa-frosted celebration cake decorated with sculptural chocolate arcs.' 用于画廊中的 Cocoa Arc。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。下载到本地，并在 ASSETS.md 中记录路径、URL 和来源署名。
- 图片：citrus-cake.webp — https://media.vibefather.ai/assets/71bc3964-1198-48d9-a5f9-d3d5adbbf9a7/citrus-cake.webp → public/images/citrus-cake.webp。Alt：'Ivory lemon cake with pale citrus and ivory sugar petals.' 用于画廊中的 Citrus Petal。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。下载到本地，并在 ASSETS.md 中记录路径、URL 和来源署名。
- 图片：cake-making.webp — https://media.vibefather.ai/assets/71bc3964-1198-48d9-a5f9-d3d5adbbf9a7/cake-making.webp → public/images/cake-making.webp。Alt：'Baker’s hands piping a cream border onto a celebration cake.' 用于订购流程和到店信息旁边。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。下载到本地，并在 ASSETS.md 中记录路径、URL 和来源署名。
- 图片：将配置器蛋糕绘制为原创的内联 React SVG，包括层数、夹心色带、糖霜、四种装饰变体、底座、阴影和可选铭文。将小型植物纹样在本地绘制为 SVG。无需外部插画文件；在 ASSETS.md 中将该 SVG 实现描述为原创代码绘制作品。
- 图标：使用 lucide-react 实现 Menu、X、ArrowRight、Plus、Minus、CalendarDays、MapPin、Mail、RotateCcw、Copy 和 Check。在本地安装这个 ISC 许可的包；不要加载图标 CDN，也不要使用品牌图标。在 ASSETS.md 中记录该依赖和许可证。
- 字体：通过 @fontsource-variable/fraunces 自托管 Fraunces Variable，OFL。仅通过 npm 包导入使用到的可变轴和字重；在 ASSETS.md 中记录该包和许可证。
- 字体：通过 @fontsource/dm-sans 自托管 DM Sans，OFL。在本地安装并导入 400、500、600 和 700 文件；在 ASSETS.md 中记录该包和许可证。

## 禁止事项
- 不要使用后端、无服务器函数、API 路由、数据库、身份验证、第三方 API、分析工具、真实支付或外部表单提交。所有交互都必须在浏览器本地运行。
- 不要声称订单已提交、邮件已发送、日期已预订或已收取付款。最终可用的操作仅复制请求摘要。
- 不要硬编码第二份价格、份量、提前期验证或预览状态；每个显示的值都必须从共享配置和选项数据派生。
- 不要使用真实面包店名称、现有标志、口号、品牌装饰、受版权保护的角色、名人肖像、可识别的产品品牌，或复制的网站代码、文案、照片或插图。
- 不要使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务、CC BY-NC 或 CC BY-SA 素材、商业字体、受限组件源码，或任何没有允许许可证的资产。
- 不要热链接资产，或从 CDN 加载脚本、字体、图标、样式、地图或图片。将六张获批图片下载到 public/images，并通过指定的 npm 包自托管所有字体。
- 不要仅用排版、扁平占位符、CSS 蛋糕或通用渐变替换摄影主视觉。不要用静态图片替换实时 SVG 配置器。
- 不要在面包店网站内添加伪装成已验证的虚假评论、社交媒体计数、无法验证的奖项、稀缺计时器，或关于模板发布者的声明。
- 不要将构建器选项隐藏在不可访问的 div 或多步向导后面。使用语义化 fieldset、label、单选控件、键盘可见焦点、正确标注的对话框，以及至少 44px 的触控目标。
- 不要忽略无效的取货日期、周日、周一，或与变量值不同的提前期。不要将个人联系方式持久化到 localStorage。
- 不要使用裸目录链接、根绝对资产路径、用于章节链接的外部导航或框架服务器。唯一页面是 index.html，所有章节链接都使用本地锚点。
- 不要生成 source map、将 src/ 复制到 dist/、超过 20 MB，或要求超过 npm run build 来生成静态生产输出。
- 不要在 1440×900 或 390×844 下引入控制台错误、水平溢出、页脚文本被裁剪、覆盖控件的粘性元素，或忽略 prefers-reduced-motion 的动效。
- 不要添加超出简单 [BRAND] 标题和 favicon 的 SEO 元数据，也不要添加 JSON-LD、Open Graph 标签、站点地图工作或关键词堆砌的文案。
- 不要过度使用圆角卡片、胶囊、玻璃效果、紫色渐变、emoji 或通用 AI 风格装饰；保留克制的编辑规则、温暖的纸张表面和实用的层级。

---
— Prompt by VibeFather · https://vibefather.ai/t/custom-cake-bakery-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
