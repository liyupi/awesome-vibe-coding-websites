> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 热气球飞行网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个梦幻的单页网站，这是一家虚构的热气球飞行公司。一张热气球在黎明时分的照片作为首屏主视觉，背景是缓缓飘动的桃色到淡紫色渐变；随后是飞行日时间线（集合、充气、飞行、祝酒）、三种飞行套餐、一张礼券卡片、一张手绘的天气说明图及示例天气条件，以及一个预订请求表单，该表单会在本地保存并带有月份标签。

- 受众：选择在 [REGION] 上空进行黎明飞行的赠礼者、情侣和 [AUDIENCE]，以及需要优雅页面来解释清晨流程并收集请求的小型飞行运营商。
- 目标：将模糊的白日梦变成具体的清晨：展示时间线，用示例天气设定预期，为选项定价，并收集保存在浏览器中的预订请求。
- 语气：轻盈、平静、略带诗意；用细节来营造梦幻感——露水、燃烧器的轰鸣、初光。绝不过度承诺：天气是被解释的，而非预报的。重写所有文案以适配所提供的变量。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource/cormorant-garamond（OFL）、@fontsource-variable/jost（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 base 为 './' 的 Vite、React 18、TypeScript 和 Tailwind CSS 3.4；vite.config 设置 base './' 和 build.sourcemap: false。
  - 将套餐、时间线步骤、天气卡片、常见问题及所有页面文案保存在 src/content.ts 中，由变量值派生。
  - 在 src/main.tsx 中导入 @fontsource/cormorant-garamond（300、400、500 及斜体）和 @fontsource-variable/jost（300、400、500）；在 tailwind.config.js 中将它们映射到标题和正文字体。
  - 在 tailwind.config.js 中定义 Dawn Peach、Dawn Lilac、Sky Cream、Dusk Plum、Apricot 和 Morning Gold 令牌；gradient-drift 和 float 关键帧位于 src/index.css。
  - 在所有区块后方渲染一个固定的、超大渐变层（两倍视口高度，桃色到淡紫色），并在 32s ease-in-out alternate 内动画其 background-position；在 prefers-reduced-motion 下渲染静态混合。
  - 使用 React state 加 localStorage 键 booking-request.v1 运行预订请求；无路由或状态管理库。
  - 将天气图标、气球图案和 favicon 绘制为原创内联 SVG；favicon 是一个 32px 淡紫色圆角方块，带有一个杏色气球。
  - 从 [BRAND] 和上述 favicon 设置一个纯文档标题；不添加其他元数据。

## 变量
- [BRAND] — 公司名称（默认：“Firstlight Balloons”）。虚构的飞行公司；用于字标、文案和页脚。
- [REGION] — 飞行区域（默认：“the Amber Valley — vineyards, river bends and stone villages”）。飞越的地貌；主视觉引导语、时间线和套餐都提及它。
- [AUDIENCE] — 飞行人群（默认：“couples, photographers and slow travelers”）。网站面向的客人；据此重写套餐和常见问题。
- [CAPACITY] — 吊篮容量（默认：“10”）。共享吊篮中的最大客人数；套餐文案和同行人数步进器使用它。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/hot-air-balloon-rides-website（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 晨曦桃（Dawn Peach）`#FFC9B3` — 漂移渐变与主视觉淡彩的顶部色。
- 晨曦丁香（Dawn Lilac）`#C9A8E0` — 渐变底部、点缀与丝带色。
- 天空奶油（Sky Cream）`#FFF9F3` — 页面底色，渐变之上的卡片与面板色。
- 暮色梅（Dusk Plum）`#46365B` — 标题、正文与细线色。
- 杏色（Apricot）`#EE8A63` — 主 CTA、聚焦环与气球图案色。
- 晨光金（Morning Gold）`#F2C94C` — 小面积高亮：星星、代金券丝带、步骤时间。

### 字体排印
- 展示 / 标题：Cormorant Garamond（OFL），字重 300/400/500
- 正文 / UI 文本：Jost Variable（OFL），字重 300/400/500

### 布局与动效
- 间距：通透轻盈：桌面端区块内边距 112px，移动端 64px，容器宽 1160px，间距 40px，正文行高 1.8。
- 圆角：整体柔和：卡片与相框 24px，胶囊与标签 999px，输入框 12px。
- 动效：晨曦渐变漂移：一个固定的超大桃色到丁香色图层以 32s alternate 动画改变 background-position；在 prefers-reduced-motion 下冻结为静态混合。
- 动效：气球图案浮动：手绘小 SVG 气球以 7-10s 错峰循环上下浮动 8px；时间线照片随滚动视差位移 6px。
- 动效：滚动显现：区块在 0.6s 内淡入并上移 24px，错峰 80ms；时间线细线在 whileInView 时绘制其长度。
- 动效：微交互：月份标签选中时柔和发光，派对人数步进器以 150ms 滑动计数，输入框聚焦时泛杏色光。
- 图像：统一暖调的金色晨曦摄影——风景上方的气球、带露的草地、燃烧器辉光、降落祝酒——乘客仅作为远处、无法辨认的身影，气球球囊为纯色或柔和条纹，绝无标记。天气图标与气球图案为暮色梅色配杏色高亮的精致线描 SVG。

## 页面与区块
### [BRAND] 黎明航班（`index.html`）
1. **页眉与导航** — 左侧为字标：[BRAND]，使用 Cormorant Garamond 500 字体，宽字距。居中导航：The flight、Packages、Good mornings、Gift vouchers。右侧为一枚 Apricot（杏色）胶囊按钮，文字为 Request a flight。移动端上，Menu 按钮会打开一个 Sky Cream（天空奶油色）面板，包含相同的锚点链接，选择后关闭。
   布局：一个 80px 的页眉绝对定位在首屏之上，滚动 24px 后获得半透明的 Sky Cream 背景，并出现一条发丝般的 Dusk Plum（暮色李子色）分隔线。锚点为 ./index.html#flight、#packages、#weather、#gift 和 #book。
   动效：背景模糊在滚动时淡入；页眉本身没有任何自动动画。
2. **黎明时分的热气球首屏** — 全视口 hero-balloons.webp——黎明时分山谷上方的热气球——底部边缘融入页面渐变，带有桃色到淡紫色的晕染。Kicker 使用 Jost 500 大写：Dawn flights over [REGION]。标题使用 Cormorant 300，分两行：Up before the sun. Gently.——其中 Gently 为斜体。副标题：One hour of standing still while the world turns under you。CTA：Apricot 胶囊按钮 Request a flight 和幽灵胶囊按钮 See the morning。一张奶油色卡片承载三个浮动标签：one hour aloft、up to [CAPACITY] guests a basket、sparkling toast on landing。
   布局：照片覆盖视口；文本块位于左下方，置于晕染之上，对比度安全；在 390px 宽度下，标签卡片换行到 CTA 下方；两个手绘热气球 SVG 在照片右上方飘动。替代文本：Hot air balloons drifting over a misty valley at dawn。
   动效：文本在加载时上升 28px，历时 0.8s；热气球图案以 8s 循环上下浮动；晕染随页面渐变漂移而呼吸。
3. **飞行早晨时间线** — 标题：A flight morning, step by step。四个步骤沿一条发丝线排列，每个步骤配一张照片和两行文字。5:30——Meet in the meadow：露水、保温壶里的咖啡、一个侧放着的篮子（meet-field.webp）。5:50——Unfold and inflate：球囊苏醒，燃烧器轰鸣一声（inflate.webp）。6:10——Lift off at first light：地面松开，[REGION] 在下方变成金色（aloft.webp）。7:40——Toast on landing：折叠桌上用真正的玻璃杯盛着橙汁，双脚重新踏上草地（toast.webp）。
   布局：四列排列在一条 1px 的 Dusk Plum 发丝线上，该线连接各步骤圆点；照片为 4:3 比例，24px 圆角；步骤时间使用 Jost 500 大写，颜色为 Morning Gold（晨金色）。
   动效：发丝线在 whileInView 时从左到右绘制；每个步骤以 100ms 间隔淡入上升；照片随滚动视差移动 6px。
4. **飞行套餐** — 标题：Ways to go up。三张 Sky Cream 卡片。Shared Dawn Flight，每位客人 $189：加入一个最多 [CAPACITY] 人的篮子，飞行一小时，包含机组照片和着陆祝酒。Private Basket for Two，$840：专属热气球和飞行员，风力允许时航线更长。Valley Explorer，每位客人 $240：沿河湾延伸的路线，在农场门口享用野餐式祝酒。功能列表各含四项，以手绘小热气球作为项目符号。
   布局：三张等宽卡片，24px 圆角；中间卡片上升 16px，带有 Dawn Lilac（黎明淡紫色）描边和一条 Most chosen 缎带；每张卡片的 CTA 滚动到 #book 并预选该套餐。
   动效：卡片在 whileInView 时淡入上升，间隔 80ms；缎带摆动 3deg 一次。
5. **礼品券** — 一张整体旋转 -1deg 的分栏卡片。左侧，voucher-balloon.webp 置于 3:4 画框中，上方有一条 Morning Gold 缎带，文字为 Give the sunrise。右侧：The gift that is impossible to re-gift——一张 $189 的礼品券，适用于任何共享黎明航班，以可打印卡片形式交付，四季可用。小字：vouchers are honored for any flight morning the crew confirms。CTA：Reserve a voucher，跳转到 #book 并勾选礼品券选项。
   布局：一张 40/60 分栏卡片，Sky Cream 底色，悬浮在渐变之上，带有柔和的淡紫色阴影。
   动效：卡片在 whileInView 时上升 24px；缎带摆动一次。
6. **天气说明** — 标题：What makes a good morning。副标题：Sample conditions the crew looks for — your morning is confirmed with a call the evening before。四张卡片，配手绘线条图标。Calm surface：风速低于 10 km/h，旗帜几乎不飘动。Dry air：草地视野内无阵雨。Clear horizon：五公里能见度，山丘清晰可辨。Settled cool：热气流苏醒前稳定的晨间空气。脚注：No forecasts here — just what a flyable morning looks like。
   布局：四张等宽卡片，半透明 Sky Cream 底色，48px 线条绘制的 SVG 图标，Dusk Plum 主色配 Apricot 高光；脚注在下方通栏排列。
   动效：图标在卡片进入时自行绘制一次（stroke-dashoffset）；卡片以 70ms 间隔淡入上升。
7. **预订请求表单** — 标题：Request a flight morning。表单上方，一行预选信息以可移除标签的形式显示所选套餐或礼品券。字段：姓名、邮箱、人数步进器（1 到 [CAPACITY]）、月份标签（四月到十月，最多可选三个）、早晨偏好（First light 或 Sunrise，单选）以及备注。提交：Save booking request。随后表单切换为确认卡片：Saved in this browser only — nothing is sent, and this demo does not book real flights，下方有 Edit 和 Clear 按钮。状态持久化在 localStorage 键 booking-request.v1 中。
   布局：一张两栏卡片，Sky Cream 底色；步进器和标签行在移动端通栏排列；月份标签自动换行；聚焦状态发出 Apricot 光晕。
   动效：月份标签选中时柔和发光；步进器以 150ms 滑动计数；确认卡片上升 16px，伴随一个柔和的对勾绘制一次。
8. **常见问题** — 四个手风琴。What should I wear? 可穿脱的分层衣物——早晨凉爽，结束时温暖；露水草地穿靴子，燃烧器热量戴帽子。Can children fly? 六岁起，需成人陪同，身高足以越过篮沿看到外面。What if the weather says no? 我们直接为您改期——任何早晨，不收费，不过期。Is it safe? 持证飞行员拥有数千小时飞行经验，每次飞行前有简报，地面有 crew 跟随。
   布局：单列 760px 宽，发丝般的 Dusk Plum 分隔线；打开时 Plus 旋转为 X；一次只打开一行。
   动效：答案以高度动画在 0.3s 内展开。
9. **页脚** — 渐变向淡紫色加深。居中：[BRAND] 字标使用 Cormorant 500，然后是 2 Brindle Meadow Lane, Amber Valley。小字：Booking requests in this demo stay in your browser。重复锚点：The flight、Packages、Good mornings、Gift vouchers。可选的 [CREDIT] 链接放在最后。
   布局：单列居中，约 96px 高；发丝线为 30% Dusk Plum。

## 资源

- 图片：为本设计制作的模板照片，可随模板自由再分发。使用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/5302d894-057b-491d-a177-30a72f0a8a09/hero-balloons.webp → public/images/hero-balloons.webp（首屏；alt 黎明时分飘浮在薄雾山谷上空的热气球）；https://media.vibefather.ai/assets/5302d894-057b-491d-a177-30a72f0a8a09/meet-field.webp → public/images/meet-field.webp（时间线第 1 步；alt 破晓时分，铺展在沾露草地上的气球球囊和吊篮）；https://media.vibefather.ai/assets/5302d894-057b-491d-a177-30a72f0a8a09/inflate.webp → public/images/inflate.webp（第 2 步；alt 在黎明蓝色的天空下，被燃烧器照亮的半充气气球球囊）；https://media.vibefather.ai/assets/5302d894-057b-491d-a177-30a72f0a8a09/aloft.webp → public/images/aloft.webp（第 3 步；alt 日出时分，低低飘浮在金色田野和河湾上空的热气球）；https://media.vibefather.ai/assets/5302d894-057b-491d-a177-30a72f0a8a09/toast.webp → public/images/toast.webp（第 4 步；alt 晨光中，降落草地上摆着杯子和水果的折叠桌）；https://media.vibefather.ai/assets/5302d894-057b-491d-a177-30a72f0a8a09/voucher-balloon.webp → public/images/voucher-balloon.webp（礼品券；alt 一只条纹气球居中，背景是桃色黎明天空）。六张图片共用同一种金色黎明调色；球囊上无标记、无标志，乘客仅出现在远处。

- 图片：在项目根目录写入 ASSETS.md，包含一个表格：路径、来源 URL、作者、许可证——每张照片一行（来源 media.vibefather.ai，为本模板制作；作者 VibeFather；许可证 Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template），另加 @fontsource/cormorant-garamond 和 @fontsource-variable/jost（OFL-1.1）以及 lucide-react（ISC）的行。

- 图标：lucide-react（ISC）用于 UI 线条：Plus、Minus、X、Check、Gift、ArrowRight（描边宽度 1.75，16-24px，颜色继承）。天气状况图标、气球项目符号和图案、礼品券丝带符号以及 favicon 均为原创线绘 SVG；不使用其他图标包，不使用品牌标志。

- 字体：安装 @fontsource/cormorant-garamond 和 @fontsource-variable/jost，并按设置（Setup）中的说明在 src/main.tsx 中导入；Vite 会将 woff2 文件打包进 dist/。切勿从 fonts.googleapis.com 或任何 CDN 加载字体。

- 图片：以下内容以代码绘制：四个天气状况图标、气球项目符号和漂浮图案、时间线圆点和细线，以及 favicon，均为原创内联 SVG。除六张照片外不使用其他位图；不使用地图，不使用外部素材。

## 禁止事项
- 不得复制或引用任何真实的热气球运营商、节庆活动或发射场地；公司、草甸、山谷和机组人员均为完全虚构。
- 不得呈现天气预报、实时天气或任何天气 API；天气部分为静态说明内容，使用示例天气状况并明确标注为示例。
- 不得展示可辨认的乘客或面向镜头的面部，气球球囊上不得出现标识或标记；人物仅以远景、不可辨认的方式出现，图片和替代文本中均如此。
- 不得使用真实日期、年份或日期选择器；预订仅使用月份标签（month chips）。
- 不得传输任何数据：预订请求仅保存至 localStorage 并明确标注；不涉及支付、不涉及预订引擎、不涉及邮箱采集。
- 不得添加后端、服务器代码、API 路由、数据库、认证、表单提交、第三方 API 或分析工具；网站以静态文件方式运行。
- 不得使用图库网站、占位图服务、外链资源、CDN 脚本、CDN 样式表或外部字体 URL；仅使用下载至 public/images/ 的六张生成图片以及代码绘制的 SVG。
- 不得加载商业字体或来自 Google 或 Adobe CDN 的字体；仅通过 Fontsource 自托管 Cormorant Garamond 和 Jost。
- 不得在 dist/ 中附带 source map 或 src/，dist/ 不得超过 20 MB，不得使用绝对资源路径，不得更改固定的构建命令 npm run build。
- 不得使用裸目录内部链接；单页保持在 index.html，使用 ./index.html# 锚点。
- 不得添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图或关键词堆砌的标题；一个简单的 [BRAND] 标题和 favicon 即可。
- 不得留下无效控件：套餐预选、代金券标签（voucher chip）、月份标签（month chips）、步进器、单选按钮、保存、编辑、清除、手风琴和菜单均须在本地响应；渐变漂移和浮动图案须遵循 prefers-reduced-motion。
- 不得出现控制台错误、水平溢出或在 1440x900 和 390x844 下小于 44px 的点击目标。

---
— Prompt by VibeFather · https://vibefather.ai/t/hot-air-balloon-rides-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
