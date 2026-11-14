> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 贴纸商店网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，这是一家虚构的贴纸商店，为 [AUDIENCE] 推出 [COLLECTION]。樱桃/柠檬色块和原创抽象彩虹模切形状构成视觉识别。

- 受众：[AUDIENCE]，他们想要小巧、富有表现力的物件，而不想要授权角色。
- 目标：筛选产品、查看原创艺术、组建六张贴纸套装，并管理一个定价正确、仅限本地的购物袋。
- 语气：活泼、具体，对尺寸、材质和价格有实用说明；不制造虚假的销售紧迫感，也不声称真实结账。

## 技术栈
- 框架：Vite + React + TypeScript
- 样式：原生 CSS
- 库：vite（MIT）、react（MIT）、react-dom（MIT）、typescript（Apache-2.0）、@fontsource/baloo-2（OFL-1.1）、@fontsource/nunito-sans（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 Vite base 设为 ./，并将 build.sourcemap 设为 false。使用单个 src/content.ts 存放所有可编辑内容，并为其数据完全重写以适配变量变更。
  - 在 src/styles.css 中实现响应式组件和 CSS 令牌。通过列出的 Fontsource 包打包字体；仅导入实际使用的字重。
  - 提供语义化原生控件和键盘/触摸替代方案；实现焦点管理的对话框和仅本地验证的表单反馈。

## 变量
- [BRAND] — 品牌（默认：“Peel Parade”）。针对此值重写所有相关的标题、条目、标签、alt 和确认信息。
- [COLLECTION] — 系列（默认：“Everyday Orbit”）。针对此值重写所有相关的标题、条目、标签、alt 和确认信息。
- [AUDIENCE] — 受众（默认：“notebook keepers and desk tinkerers”）。针对此值重写所有相关的标题、条目、标签、alt 和确认信息。
- [FREE_SHIPPING] — 免运费（默认：“24”）。针对此值重写所有相关的标题、条目、标签、alt 和确认信息。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/sticker-shop-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 樱桃红（Cherry red）`#FF2D55` — 大面积主视觉半区、目录分隔线和原创插画。WCAG 相对亮度计算：#141126 文字在 #FF2D55 上：5.06:1；#141126 文字在 #FFF35C 上：16.02:1；#141126 文字在 #FFFFFF 上：18.45:1；#FFFFFF 文字在 #254DFF 上：5.86:1；#141126 文字在 #19C37D 上：8.04:1。所有常规尺寸的标签/正文/按钮都使用这些配对。装饰性叠层/渐变不承载文字；可读文字必须有实色底衬。
- 柠檬黄（Lemon）`#FFF35C` — 大面积主视觉半区和拼包工作台。
- 墨色（Ink）`#141126` — 樱桃红/柠檬黄/白色上的正文和控件。
- 白色（White）`#FFFFFF` — 模切边框和商品阅读面板。
- 钴蓝（Cobalt）`#254DFF` — 次级实色面板和已选拼包操作。
- 叶绿（Leaf green）`#19C37D` — 装饰性贴纸图案和已选数量标签。

### 字体排印
- 展示字体：Baloo 2（OFL），字重 700
- 正文字体：Nunito Sans（OFL），字重 400/700

### 布局与动效
- 间距：最大 1200px，桌面端 40px/移动端 20px 边距，8px 单位，区块间距 88px/52px。目录 4 列/移动端 2 列，拼包工作台 55/45 布局，可见 3×2 个槽位。H1 字号 92px/54px。
- 圆角：商品照片/面板 20px，控件 12px，分类标签 999px。贴纸具有沿轮廓的 6–10px 白色模切边框和柔和阴影，而非方形图片边框。
- 动效：贴纸悬停/聚焦倾斜最大 3deg，并带小幅边角卷起，持续 160ms；点击 Preview 剥离按钮可切换相同效果，且不会添加商品。拖拽可作为可选增强，绝非填满槽位的必需操作。
- 动效：购物车抽屉 200ms 滑入，减少动效时即时显示；无漂浮贴纸循环、光标替换或隐藏价格的动效。
- 图像：四张统一的照片级写实桌面商品图，硬柔日光，樱桃红/柠檬黄表面，无品牌笔记本和邮寄包装，原创抽象彩虹模切贴纸，边缘干净白色。不得出现现有角色、人脸、标志、口号或带文字的贴纸设计。商品缩略图为原创内联 SVG 插画，采用精确重复出现的原创图案，而非随机 emoji。使用摄影建立实体店面可信度，使用 SVG 呈现精确可选商品。任何可见的手均属于虚构人物，不露脸。

## 页面与区块
### [BRAND] — 小东西，大声个性（`index.html`）
1. **樱桃柠檬店面** — 页眉 [BRAND]、Shop、Build a pack、The details、'Bag (0)'。公告 'Illustrative US shipping: $4, free at $[FREE_SHIPPING]'。H1 'Tiny things. Loud personality.' 简介 '[COLLECTION]: original rainbow shapes for [AUDIENCE]. Pick a favorite. Make a mix. Give your everyday things a little more you.' CTA 'Shop the collection' 和 'Build six for $18'。可见徽章 'Fictional shop • local cart demo'。主视觉图说明 'Original concept stickers, photographed in a generated tabletop scene'。小字 'No licensed characters. No order is processed here.' 散落的 SVG 产品使用与目录相同的设计，而非复制的吉祥物。撕开动作绝不自动触发加入购物袋。
   布局：主视觉分割为 48% 樱桃色 #FF2D55 和 52% 柠檬色 #FFF35C，每块首屏区域均 >=30%。墨色 #141126 92px Baloo2 H1 置于樱桃色上，明亮的 hero-flatlay.webp 置于 500×420 柠檬色框架内，带 3 个独立的原创模切 SVG 装饰和阴影。樱桃色上无白色小字。移动端 H1 为 54px，堆叠照片 >=330px 宽。页眉为柠檬色/墨色，首屏无中性色回退。
   动效：仅一次 6px 入场；细微的聚焦/点击撕开效果，无持续漂移。
2. **选购原创形状** — 标题 'Choose a little everyday energy.' 筛选 类型 All / Singles / Packs，主题 All / Space / Shapes / Nature；排序 Featured / Price low to high。结果计数和 Reset。八款单张贴纸，美元计价：Orbit Bloom $3.50，Space，2.4in，六瓣钴蓝/珊瑚色花朵，被不规则橙色轨道环包围；Tangled Comet $4，Space，2.8in，青柠色胶囊核心带三条环状品红/青色尾迹；Rainbow Loop $3.50，Shapes，2.5in，不对称彩虹丝带打一个结，无已知符号；Wavy Ladder $3，Shapes，2.2in，弯曲钴蓝色梯子，交替圆角黄色横条；Sunny Puddle $3，Nature，2.3in，不规则橙色水洼带小黄色弧形光芒；Zigzag Sprout $3.50，Nature，2.6in，绿色锯齿茎带三片不对称粉色叶子；Pebble Stack $3，Shapes，2.4in，四块错位不规则彩虹卵石；Dotted Moon $3.50，Space，2.3in，紫色不规则月牙带青色圆点和小橙色方形轨道。无面部、文字或已知角色。两个预制组合包：Desk Trio $9 包含 Orbit Bloom/Wavy Ladder/Sunny Puddle；Full Spectrum $22 包含全部八款各一张。在组合包卡片中展示实际包含的贴纸缩略图。每个单张/组合包详情对话框显示尺寸、确切内容、价格、'Illustrative material: matte laminated vinyl; intended for clean dry smooth surfaces'、保养说明 'Avoid heat and heavy abrasion; no durability testing is claimed'、数量 1–6 和 'Add to demo bag'。缺失结果状态和本地计数正常工作。无虚假库存或促销标签。
   布局：白色 #FFFFFF 目录配墨色 #141126 标签，樱桃色 #FF2D55 页眉条纹和柠檬色 #FFF35C 筛选栏。桌面 4 列/移动 2 列，图案占卡片高度 70%，置于交替的樱桃色/柠檬色/钴蓝色背景上；名称/价格置于不透明白色上。强烈的白色模切轮廓，无 emoji 替代。主题标签钴蓝 #254DFF/白色。
   动效：聚焦或悬停时 160ms 倾斜/撕开，触屏上单独的 Preview peel 按钮；保持图案和价格可读。
3. **六槽自定义组合包工作台** — 标题 'Make a pack that looks like you.' 自定义组合包固定价格 $18 含六张单贴，任一设计最多两份。显示六个编号槽位，每个显示所选名称/图案和 Remove 按钮。全部八款单设计选择按钮显示 + Add 和当前数量/2，达到重复上限或组合包已满时禁用并说明。添加填充下一个空槽；移除后压缩列表。计数 '4 of 6 chosen' 等通过 aria-live 更新，空槽显示 'Choose a sticker'，而非破损图片。可选拖拽仅作为完整按钮控件的补充。Reset pack、'Fill with a surprise mix' 使用由本地点击次数播种的确定性六款不同设计（不声称随机库存），以及 Undo last add 均为真实功能。摘要列出每个设计及数量，固定总计 $18。'Add custom pack to demo bag' 在恰好六张前禁用并说明，之后添加六个 ID/数量的不可变快照，打开购物车，保持构建器完整并显示 'Added — edit this mix or reset'。后续编辑绝不改变已有购物车快照。重复的相同快照合并数量，不同组合保持为独立行。
   布局：柠檬色 #FFF35C 主区域/墨色 #141126 文案；左侧 55% 选择器网格，右侧 45% 钴蓝 #254DFF 工作台，白色 #FFFFFF 槽位表面和深色名称。槽位桌面和移动端均为 3×2，最小宽度 100px，紧凑移除控件 44px 位于图案外侧。Add 按钮钴蓝/白色，已选计数器叶绿 #19C37D/墨色。pack-layout.webp 横向灵感照片置于标题下方，与交互槽位清晰分离。
   动效：槽位变化即时，可选 120ms 短边框强调；无必要拖拽。
4. **材质与小仪式** — 'A little peel. A better-looking notebook.' 照片 peel-hand.webp，原创贴纸从白色背纸上揭起，无面部。三条具体说明：'Smooth surface first' — 擦去灰尘并让表面干燥；'Start at one edge' — 从中心向外缓慢按压；'Keep the art yours' — 此处所有设计均为原创几何概念图案，非授权角色。产品材质为示意性，无洗碗机/防水/户外承诺。相邻的 pack-mailer.webp 展示无标记包装。'What is inside a pack?' 展开说明单张贴纸、预制组合包和六选自定义组合包使用相同的可见原创设计。无虚构环保认证或制造产地。
   布局：樱桃色 #FF2D55 色带配墨色 #141126 标题和不透明白色 #FFFFFF 说明面板。2 列照片/说明；柠檬色 #FFF35C 说明条。移动端先一张照片，再说明，再邮寄包装，无需轮播。
   动效：照片角落撕开仅在明确预览时，减少动效时无倾斜。
5. **虚构评价墙** — 标题 'Little objects, personal places.' 即时可见副标签 'Fictional sample reviews for this shop demo — not verified purchases.' 四条虚构留言：Mae Rowan，Notebook keeper — 'The odd little ladder makes my sketchbook easy to spot in a stack.'；Ivo Lane，Desk tinkerer — 'I made a mix with one loud shape for every plain thing on my desk.'；Nina Quill，Journal maker — 'The colors work together without every sticker needing to match.'；Eli Fen，Craft friend — 'Choosing six was the fun part. I liked seeing the whole mix before adding it.' 无综合评分、评价总数或已验证徽章。可选 Favorite quote 按钮在本地高亮一条，不声称社会证明。评价为示例文案，非真实客户证据。
   布局：钴蓝 #254DFF 墙配白色 #FFFFFF 标题；4 张略微倾斜的柠檬色 #FFF35C 和白色便签，墨色 #141126 正文，桌面 2 列/移动 1 列。角落有小原创装饰贴纸图案，无需首字母头像，因为这些是引语而非员工肖像。
   动效：聚焦时便签变正；减少动效时所有便签静止。
6. **本地购物袋、实用问题与页脚** — 购物车抽屉可从页眉和添加操作打开。行键 single:<id>、prepared:<id>、custom:<排序后的组成 ID/数量>；每行显示图案、标签、单张时显示尺寸、组合包时显示自定义内容、数量 1–6、单价、行小计和 Remove。以整数美分计算，小计=sum(单价×数量)；运费 $4 当小计>0 且小计<FREE_SHIPPING，否则 0；税费标签 'Not calculated in this demo'，总计=小计+运费（标签为估算）。仅在适用时显示 '$X away from illustrative free shipping'。空袋 'Your mix starts with one small thing' 和 Shop 按钮。Clear bag、Continue shopping、Download local bag list .txt。主下载旁明确说明 'Local demo only. No order, stock check, payment or message is sent.' 不包含 Checkout 或虚假成功收据。购物袋持久化在命名空间 localStorage 中，损坏数据安全清除；无个人数据字段。FAQ：'Are the characters licensed?' — 无角色；原创抽象图案；'Can I really order here?' — 否，仅本地购物袋列表；'Can I change a custom mix?' — 编辑构建器并添加新快照，如需可移除旧行；'Are these durability claims tested?' — 否，仅为示意性产品详情。页脚 [BRAND]、[COLLECTION]、Back to shop、本地演示说明，无日期。
   布局：页脚柠檬色 #FFF35C/墨色 #141126 配樱桃色 #FF2D55 条纹。抽屉白色 #FFFFFF/墨色，钴蓝 #254DFF/白色主操作，柠檬色总计面板；桌面宽度 440px 或移动端全宽。焦点陷阱、恢复打开者、Escape/外部关闭、滚动锁定；44px 数量控件，自定义内容不截断。
   动效：抽屉 200ms，减少动效时即时；aria-live 总计和添加状态。

## 资产
- 字体：使用 Stack 中列出的 Fontsource 包自托管 Baloo 2、Nunito Sans；OFL-1.1，不发起外部字体请求。
- 图片：将 https://media.vibefather.ai/assets/99f46bbf-fbec-4d1b-b2bd-6ba584fbe3a7/hero-flatlay.webp 下载到 public/images/hero-flatlay.webp，并且只引用本地相对 URL。Alt：Original rainbow die-cut sticker shapes on a cherry and lemon tabletop。用于 hero。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中记录 URL、路径、alt、生成器和此许可。该资产在生成/上传后提供；如果无法下载，应明确失败，绝不要用无关的图库素材或损坏的占位图替换它。
- 图片：将 https://media.vibefather.ai/assets/99f46bbf-fbec-4d1b-b2bd-6ba584fbe3a7/pack-layout.webp 下载到 public/images/pack-layout.webp，并且只引用本地相对 URL。Alt：Six original stickers arranged as a custom pack。用于 pack builder 灵感。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中记录 URL、路径、alt、生成器和此许可。该资产在生成/上传后提供；如果无法下载，应明确失败，绝不要用无关的图库素材或损坏的占位图替换它。
- 图片：将 https://media.vibefather.ai/assets/99f46bbf-fbec-4d1b-b2bd-6ba584fbe3a7/peel-hand.webp 下载到 public/images/peel-hand.webp，并且只引用本地相对 URL。Alt：A fictional hand peeling an original ladder sticker。用于 materials 区块。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中记录 URL、路径、alt、生成器和此许可。该资产在生成/上传后提供；如果无法下载，应明确失败，绝不要用无关的图库素材或损坏的占位图替换它。
- 图片：将 https://media.vibefather.ai/assets/99f46bbf-fbec-4d1b-b2bd-6ba584fbe3a7/pack-mailer.webp 下载到 public/images/pack-mailer.webp，并且只引用本地相对 URL。Alt：Original stickers beside a plain open mailer。用于 packaging note。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中记录 URL、路径、alt、生成器和此许可。该资产在生成/上传后提供；如果无法下载，应明确失败，绝不要用无关的图库素材或损坏的占位图替换它。
- 图片：严格按照 catalog 的描述，以内联 SVG 创作八个原创轮廓切割贴纸设计，带有 6–10px 白色模切边框和一致的饱和彩虹色板。从零绘制，不使用 emoji、外部插画、已知吉祥物、复制的美术作品或 logo。在卡片、builder 槽位和购物车中复用实际设计组件；在 ASSETS.md 中记录为原创 AI 创建的项目美术作品。

## 不要做
- 构建纯静态演示：不要后端、API 路由、数据库、身份验证、支付、第三方 API、分析、遥测，或会发送网络请求的表单。确认信息必须明确说明是本地演示；绝不要声称订单、预订、生成的服务结果或电子邮件已发送。
- 使用 Vite base ./、相对本地资源、哈希路由或真实的 .html 文件名；不要裸目录链接。直接打开每个路由，并确保任何没有 ID 的详情路由渲染其第一项。使用 npm run build 构建压缩的 dist/，不要 source maps 或源文件，dist 总计低于 20 MB。
- 将所有可编辑文案、虚构示例数据、价格、交互标签、alt 文本和 A/B 内容保留在单个 src/content.ts 模块中。保留 3–6 个变量。当变量变化时，一致地重写所有相关内容；绝不要在第二个案例中留下默认品牌或主题。
- 所有可见语言和 alt 文本使用美式英语。不要渲染日历日期、年份、带日期的版权行、虚假的新鲜度或流行度指标。运营工作日和时间、轨道持续时间、相对计时器、问题标识符和尺寸是允许的。
- 仅使用原创代码/艺术/文案、宽松的 MIT/ISC/BSD/Apache/CC0 依赖和本地捆绑的 OFL 字体。不要复制网站代码、现有徽标、著名角色、商业字体、受限组件或可识别的真人肖像。在 ASSETS.md 中列出每个字体、依赖和生成的艺术作品及其来源和许可证。
- 运行时一切都在本地：不要热链接图片、字体 CDN、远程脚本、远程音乐或占位图片服务。在构建前下载指定的模板托管图片；在 ASSETS.md 中记录完整源 URL、目标路径、alt 文本和生成的信用。
- 在 1440×900 和 390×844 下保持零控制台错误且无水平溢出。触摸目标至少 44px，可见的键盘焦点和带标签的输入，对话框的 Escape/外部关闭和焦点恢复，抽屉焦点陷阱、滚动锁定和结果变化的 aria-live。悬停效果需要等效的焦点/点击路径。
- 尊重 prefers-reduced-motion：移除循环变换、滚动擦除和视差，显示最终静态状态，绝不自动播放音频/视频，无闪烁、频闪或快速全屏亮度变化。不要隐藏等待动画的基本内容。
- 保留指定的调色板，至少两种强烈的英雄色占据大面积。不要中性奶油色/炭灰色回退，不要在普通文本后面使用渐变，不要低对比度的小标签。使用设计中计算的 AA 文本/背景配对。
- 绝不使用可识别的现有角色、吉祥物、游戏/动漫艺术、真实徽标、口号、受版权保护的贴纸设计、复制的产品照片或表情符号替代品。生成的真实产品照片和原创 SVG 艺术共享相同的抽象主题；不要面孔或可识别的人。
- 六槽构建器必须实际跟踪选择/移除/限制和不可变购物车快照；不要惰性槽、假添加按钮或仅拖拽控件。购物车美分、数量、包装内容和运输必须正确计算。不要结账、支付、订单确认、真实库存承诺、电子邮件表单或网络请求。
- 示例评论必须在评论墙旁边明确是虚构和未经验证的。不要虚构真实客户、聚合评分、已验证购买标签、耐久性认证、原产地或生态声明。
- 对于 Layer Picnic，围绕手工艺俱乐部日记重写所有产品名称、包装名称、价格、系列文本、评论名称/引语和受众用例。保留八个原创几何主题和四张一致的无徽标照片作为通用物理产品占位符，相同的本地公式和六槽架构；如果更改，一致地更新固定定制包装价格和所有标签。不要保留默认商店/系列/受众。

---
— Prompt by VibeFather · https://vibefather.ai/t/sticker-shop-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
