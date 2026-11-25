> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 限时特卖落地页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个虚构家居品牌的常青促销页，适用于任何季节性促销：倒计时、阶梯折扣、带库存条的优惠卡片、组合套装构建器、优惠券揭晓、按收礼人和预算划分的礼品指南，以及关于发货截止时间的常见问题解答。产品照片来自同一次拍摄。深梅子色 #3A0CA3、亮红色 #F72585 和金色 #FFC300。

- 受众：已经喜欢该品牌、正在寻找购买理由和截止日期的购物者。
- 目标：让折扣在三秒内显而易见，将组合套装或优惠放入购物篮，并让优惠券被使用。
- 语气：响亮但诚实：大数字、短句、直白的条款，以及说明哪些是示例内容的小字。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource/anton（OFL-1.1）、@fontsource-variable/dm-sans（OFL-1.1）、@fontsource/dm-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 配置：
  - vite.config.ts：base './'，build.sourcemap false，src/ 中的内容不会复制到 dist/。
  - tailwind.config.js：扩展颜色 plum #3A0CA3、plumDeep #24046B、red #F72585、gold #FFC300、white #FFFFFF、lilac #C9B8FF、rust #C2410C；fontFamily display 'Anton'、sans 'DM Sans Variable'、mono 'DM Mono'。
  - src/components/ProductTile.tsx 使用 background-image、background-size: 300% 300% 和 background-position: (col × 50)% (row × 50)% 从三张 3 × 3 产品图中裁出一个单元格。
  - src/lib/pricing.ts 以纯函数形式导出阶梯逻辑：tierFor(subtotal) 从 $60 起返回 10%，从 $120 起返回 15%，从 $200 起返回 20%，否则返回 0；lineTotal、savings 和优惠券（一件全价商品减 10%）在同一文件中计算。
  - 倒计时截止时间存储在 localStorage 中，键为 [BRAND_SLUG]-sale-deadline，值为首次访问时间加 72 小时，其中 [BRAND_SLUG] 是 [BRAND] 转为小写并用连字符连接；当截止时间已过，页面显示已结束状态，并在下次访问时设置新的截止时间。购物篮持久化存储在 [BRAND_SLUG]-basket 下。
  - 所有文案、阶梯、产品、收件人、FAQ、优惠券代码和表单标签都位于 src/content.ts 中；组件从不硬编码文案。

## 变量
- [BRAND] — 品牌名称（默认："Copperleaf Home"）
- [SALE_NAME] — 促销活动名称（默认："The Cosy Home Sale"）。更改此项即可将该页面复用于任何季节性促销。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/flash-sale-landing-page（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- plum `#3A0CA3` — 深梅紫（Deep plum）：页面底色
- plumDeep `#24046B` — 面板、卡片、倒计时框
- red `#F72585` — 亮红（Hot red）：贴纸、促销标签、促销价、库存条；填充区域承载 18px 或更大的白色粗体文字
- gold `#FFC300` — 金色（Gold）：带梅紫色文字的主按钮、倒计时数字、层级标题
- white `#FFFFFF` — 标题和正文文字
- lilac `#C9B8FF` — 梅紫底色上的次要文字和分隔线（保持 AA 对比度）
- rust `#C2410C` — 用于带删除线的旧价格的小点缀，配白色文字

### 字体排印
- 展示 / 标题、价格、倒计时：Anton（OFL），字重 400
- 正文 / UI：DM Sans Variable（OFL），字重 400/500/700
- 等宽 / 小字印刷、层级计算、优惠码：DM Mono（OFL），字重 400/500

### 布局与动效
- 间距：页面 max-w-[1240px] px-6；区块内边距 py-20；卡片 p-4，圆角 8px；8px 节奏。
- 圆角：卡片和瓷砖 8px；按钮为方形；贴纸为圆形。
- 动效：倒计时数字每秒以 200ms 交叉淡入淡出翻转。
- 动效：标题文字在加载时上移 24px 并淡入，错峰 80ms；贴纸从 −12 度旋转到 −6 度。
- 动效：库存条在滚动进入视野时以 500ms 动画到其宽度；交易卡片以 60ms 错峰淡入上移；内容默认可见。
- 动效：优惠券在揭示时以 400ms 翻转；购物篮抽屉以 250ms 滑入。
- 动效：prefers-reduced-motion：倒计时无动画更新，其他所有内容立即出现。
- 图像：家居用品照片来自同一次拍摄：暖色木材、锈色亚麻、琥珀色玻璃、炻器和黄铜，在低角度窗光下，带梅紫、红和金色调。三张产品图册是暖浅灰底色上的 3 × 3 网格，每格一个产品。无包装文字、无标签、无标志。

## 页面与区块
### 促销页（`index.html`）
1. **站点页眉** — 左侧：字标 [BRAND]，Anton 22px 白色。中间导航：Deals、Bundles、Gifts、FAQ。右侧：一个带金色数量徽章的购物篮图标按钮。顶部一条细金色条带，DM Mono 12px 滚动文字：'FREE DELIVERY OVER $80 · EASY RETURNS within 30 days'。
   布局：粘性 60px 条，plum/90 背景，带背景模糊和 1px 底部细线 lilac/30；内部 max-w-[1240px]。移动端：字标、购物篮按钮和一个 lucide 菜单按钮在 390px 宽度下排成一行；导航移入菜单中。
   动效：顶部条带持续滚动；在减少动态效果模式下为静态。
2. **首屏 — 促销** — 全出血 public/images/hero-flatlay.webp（16:9），alt 'A folded rust linen throw, stoneware mugs, a lit candle and plates on a warm wood table'，覆盖从左 plum 到右透明的渐变，使文字保持 WCAG AA 对比度。左侧，在遮罩上：眉题 DM Mono 500 13px 大写金色 '[SALE_NAME]'；H1 Anton clamp(56px, 8vw, 128px) 白色，大写，行高 0.9：'UP TO 20% OFF EVERYTHING THAT MAKES A HOUSE WARM.'；照片右上角一个圆形热红色贴纸，直径 150px，旋转 −6 度，白色 Anton 26px 居中两行显示 'UP TO 20% OFF'；按钮 'Shop the deals'（金色填充，plum 文字 → #deals）和 'Build a bundle'（白色描边 → #bundles）。右下角，一个 plumDeep 面板，金色 Anton 数字 'ENDS IN 47 : 12 : 09' 和等宽标签 'HOURS MINUTES SECONDS'。倒计时结束后，面板显示 'THIS SALE HAS ENDED'，并有一行 'Sign up below to hear about the next one.'
   布局：Min-h-[calc(100vh-60px)]，文字块位于左下，max-w-[760px]，内边距 48px；倒计时面板在移动端位于按钮下方，桌面端位于右下。
   动效：标题逐词升起；贴纸从 −12 度稳定下来；倒计时数字每秒交叉淡入淡出。
3. **阶梯** — plumDeep 上的三张卡片：'Spend $60 · Save 10%'、'Spend $120 · Save 15%'、'Spend $200 · Save 20%'，每张都有一行等宽示例：'A $70 throw costs $63.'、'A $130 lamp costs $110.50.'、'A $210 bundle costs $168.'；中间卡片有金色边框和标签 'Most popular'。
   布局：Grid md:grid-cols-3 gap-4；百分比用 Anton 56px 金色。
   动效：卡片以 80ms 错开淡入上移。
4. **优惠卡片** — id="deals"。H2 'The deals.' 九件产品，每件有从图集中裁切的图块、促销标签、用 rust 色删除线显示的旧价和用 Anton 红色显示的新价、名称和库存条，并附一行等宽文字：来自 grid-kitchen.webp — Speckled stoneware mug $18 now $13（图块 col 0 row 0，62% claimed）、Glass carafe $24 now $17（col 1 row 1，48%）、Small cast-iron skillet $42 now $32（col 2 row 0，'Only 7 left'，86%）；来自 grid-living.webp — Rust linen throw $68 now $51（col 0 row 0，71%）、Amber soy candle $26 now $18（col 0 row 1，54%）、Brass table lamp $120 now $90（col 1 row 1，33%）；来自 grid-bedroom-bath.webp — Linen pillowcase pair $54 now $41（col 1 row 0，59%）、Waffle bath towel $32 now $24（col 0 row 0，44%）、Brass-framed mirror $88 now $66（col 2 row 2，'Only 3 left'，91%）。每张卡片都有 'Add to basket'（金色填充，plum 文字）。网格下方一行等宽注释：'Stock bars, discounts and the countdown are sample content.'
   布局：Grid grid-cols-2 md:grid-cols-3 gap-4；图块在浅色底上为正方形；库存条高 6px，红色填充。
   动效：库存条和卡片如动效部分所述。
5. **组合构建器** — id="bundles"。H2 'Build a bundle.' 左侧：十二件可组合产品以行显示，每行有小图块、名称、价格和复选框：mug $13、candle $18、carafe $17、tea towels $16、pouring jug $22、side plates $20、mustard cushion $38、rattan basket $34、soap dish $18、hand towel $28、ceramic tray $20、wooden hairbrush $26。右侧，plumDeep 上的粘性面板：'Your bundle'、已选商品、小计、已达阶梯及节省金额（'15% off · You save $18.60'）、到下一阶梯的进度条及文字 '$42 more for 20% off'、Anton 56px 金色的总计和按钮 'Add bundle to basket'（金色填充）。
   布局：lg:grid-cols-[58%_42%] gap-8；行 py-3，带 1px lilac/20 分隔线；面板 rounded-[8px] p-6。
   动效：总计和进度条以 250ms 补间更新。
6. **优惠券揭示** — 左侧：public/images/candle-closeup.webp（4:3），alt 'A lit candle in amber glass with dried lavender on a wood table'。右侧：H2 'A little extra.'；行 white/80：'Take a further 10% off one full-price item.' 一张卡片，点击后从 'Reveal your code'（金色描边）翻转为 Anton 48px 金色的代码 'THANKS10'，并有一个 'Copy code' 按钮，复制后显示 'Copied'。
   布局：lg:grid-cols-2 gap-8 items-center。
   动效：卡片翻转 400ms（减少动态效果模式下为即时）。
7. **礼物指南** — id="gifts"。H2 'Find a gift.' 两行标签：'For'（The host、The new homeowner、The one who has everything、Your desk）和 'Budget'（Under $25、$25 to $50、$50 and over），每行都有 'All'。产品在 content.ts 中打标签，下方网格显示匹配项（三到六件），带图块、名称和促销价；无匹配时显示 'No gifts match — try a wider budget.'
   布局：标签换行；结果网格 grid-cols-2 md:grid-cols-3 gap-4。
   动效：标签变化时结果淡入 200ms。
8. **FAQ** — id="faq"。H2 'Delivery and returns.' 六项手风琴：'How long does the sale run?' — 'Sale pricing lasts until the countdown at the top reaches zero.'；'When is the delivery cut-off?' — 'Order before 2 pm for next-working-day express delivery. Standard delivery takes 3 to 5 working days.'；'Will it arrive in time?' — 'Leave at least seven working days between ordering and the day you need it.'；'Can I return sale items?' — 'Yes, within 30 days and in their original condition.'；'Do the tiers stack with the coupon?' — 'The tier discount comes off the basket first; the coupon then takes 10% off one full-price item.'；'Do bundles arrive in one box?' — 'Yes, with the receipt inside the lid.'
   布局：max-w-[800px]；行 py-5，带 1px lilac/20 分隔线；展开行有金色 chevron。
   动效：答案展开 250ms。
9. **购物篮抽屉** — 由购物篮按钮打开：商品带小图块、名称、数量步进器和阶梯折扣后的行总计；阶梯进度行 '$38 away from 15% off' 或 'You have 15% off'；优惠券输入框带 'Apply'，接受 THANKS10 并显示 '−10% on one item' 或 'That code isn't valid'；Subtotal、Savings、Delivery（满 $80 免费，否则 $5.99）和 Anton 字体的 Total；按钮 'Checkout'（金色填充）。结账后抽屉内容替换为：'Sample checkout. No payment was taken and no order was placed.' 和一个 'Keep shopping' 按钮。
   布局：抽屉固定右侧 w-[420px] max-w-full h-full plumDeep，覆盖在 plum/70 背景上。
   动效：滑入 250ms；总计即时更新。
10. **下次促销注册和页脚** — H2 'Be first next time.'；一个邮箱输入框和 'Sign up'（金色填充）；需要有效邮箱；成功后：'Thanks. This is a sample form, so nothing was sent.' 页脚：字标、导航、12px lilac 小字 'Products, discounts, stock levels and the countdown on this page are invented sample content.' 加上 [CREDIT]。
   布局：注册区 max-w-[520px]；页脚带 1px 顶部细线。
   动效：成功提示淡入 200ms。

## 资产
- 图片：由 VibeFather 生成的六张图片，下载到 public/images/ 中且不在其他任何地方使用：hero-flatlay.webp（16:9）、bundle-giftset.webp（4:3，用于套装构建器旁边）、candle-closeup.webp（4:3）以及三张 2048 × 2048 产品图集，grid-kitchen.webp、grid-living.webp 和 grid-bedroom-bath.webp，每张都是在暖浅灰色背景上的 3 × 3 网格。每张均从 https://media.vibefather.ai/assets/dee21a4c-cd6f-4ea1-b0ea-ec48c1031892/<file> 下载。一个图块通过 background-size 300% 300% 和 background-position (col × 50)% (row × 50)% 显示一个单元格。Alt 文本写明产品名称。ASSETS.md 中的署名：'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.'
- 图标：lucide-react npm 包（ISC）：menu、x、shoppingBasket、plus、minus、check、copy、chevronDown、gift、timer、arrowRight。不使用其他图标集，任何地方都不使用品牌标志。
- 字体：Fontsource 包（OFL-1.1）：@fontsource/anton、@fontsource-variable/dm-sans 和 @fontsource/dm-mono，在 main.tsx 中导入。不使用字体 CDN 链接。

## 不要做
- 无后端：没有服务器代码、API 路由、数据库、认证或对任何服务的请求。购物篮、优惠券、倒计时截止时间和注册都存放在 localStorage 中，结账处会说明这是示例。
- 品牌、产品、折扣、库存水平和优惠券都是虚构的示例内容；不得提及或模仿任何真实的家居用品品牌、商店或产品。
- 页面是常青的：文案中不出现任何具名节日和日历日期；时间通过倒计时和工作日来表达。
- 库存条、倒计时和稀缺性声明在细则中标注为示例内容。
- 照片不带有可读文字或标签；产品在代码中从三张图集中裁剪。
- 不用渐变作装饰（主视觉遮罩仅用于可读性），不用玻璃面板或发光元素；使用扁平的梅子色（plum）、红色和金色。
- 热红色填充承载 18px 或更大的白色粗体文字；梅子色上的小字为白色或淡紫色（lilac）；金色按钮承载梅子色文字。
- 每个控件都有效：加入购物篮、套装构建器、优惠券揭示与应用、礼品筛选、FAQ、倒计时和结账都会改变真实状态，且刷新后仍然保留。
- 一切自托管：字体通过 Fontsource 包，图片下载到项目中，不使用 CDN 脚本或链接标签，不使用 Google Fonts，不使用分析工具。
- Vite base 为 './'，使用相对资源路径；内部链接是 index.html 上的锚点（#deals、#bundles、#gifts、#faq），绝不使用裸目录。
- 生产构建压缩且无 source map；dist/ 小于 20 MB。
- prefers-reduced-motion：不出现数字翻转、上升文字或条形；一切立即出现。绝不在等待进入视口触发器时用 clip-path 或零不透明度隐藏整个元素。
- 在 390×844 下，页眉将字标、购物篮和菜单按钮保持在一行，贴纸缩放至 110px，标题换行且不溢出，购物篮抽屉为全宽。
- Tailwind 不透明度工具类使用默认刻度（例如 /30、/70、/80、/90）；自定义步长写成任意值。
- 不做 SEO 工作：一个包含 [BRAND] 的普通 <title> 和一个 favicon 就足够了。
- 不从任何参考网站复制代码、文案、图像或字体；模板名称、slug、文案或 alt 文本中不出现品牌名称。

---
— Prompt by VibeFather · https://vibefather.ai/t/flash-sale-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
