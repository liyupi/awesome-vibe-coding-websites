> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 物流与货运网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的单页 B2B 网站，[BRAND] 是一家虚构的货运承运商，沿 [TRADE_LANE] 及更远地区运输货物。首屏将厚重的全大写 Archivo Black 标题与代码绘制的世界地图配对：抽象陆地、六个虚构枢纽，以及动画公路（虚线）、海运（弯曲实线）和空运（弧线）路线，这些路线在加载时绘制，然后在枢纽之间脉动，到达时闪烁枢纽圆环。首屏下方有一条琥珀色跑马灯滚动条。区块包括：按运输方式（公路、海运、空运）划分的服务，位于暖沙色面板上，配有绘制的车辆图标和运力标签；一个追踪小部件，接收预填的示例代码 [TRACKING_CODE]，并显示本地行程日状态时间线；一个覆盖范围带，带有递增统计和行业标签；以及一个完全在客户端验证和确认的报价表单。页脚列出三个虚构枢纽地址和 [DISPATCH_LINE]。静态站点，无后端；表单从不提交到任何地方。

- 受众：中小型制造商的运输经理、电子商务运营团队，以及在同一走廊上比较承运商的采购负责人。还有货运代理、3PL 和搬家公司的创始人，他们想要一个响亮、值得信赖的单页网站。
- 目标：在同一分钟内获得报价请求并证明可靠性：访客在五秒内追踪示例货物，相信网络是真实的，并带着已经想好的运输方式到达报价表单。
- 语气：大胆而直白，卡车司机式的自信。短句、具体数字、没有物流术语、没有感叹号。标题用大写字母喊出；正文像总在第一时间接听的调度台一样说话。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、tailwindcss（MIT）、motion（MIT）、vite（MIT）、typescript（Apache-2.0）、@fontsource/archivo-black（OFL-1.1）、@fontsource/archivo（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 并以 react-ts 模板搭建脚手架，然后安装 tailwindcss 3.4、motion 和三个 Fontsource 包。
  - vite.config.ts：base './'，build { outDir: 'dist', sourcemap: false, assetsInlineLimit: 0 }。不要将 src/ 复制到 dist/。
  - tailwind.config.js：content 覆盖 index.html 和 src/**/*.{ts,tsx}；theme.extend.colors 映射精确的令牌：navy #0f1e30、navdeep #13263c、navraise #1b3149、sand #e9d9b8、sandlight #f4ead4、onink #1c2c3f、amber #ffb100、amberdeep #e09600、steel #93a6ba、hairline 'rgba(233,217,184,0.22)'、hairdark 'rgba(28,44,63,0.18)'；theme.extend.fontFamily：display ['Archivo Black','sans-serif']、text ['Archivo','sans-serif']、mono ['JetBrains Mono','monospace']。
  - 字体在 src/main.ts 中导入：@fontsource/archivo-black/400.css、@fontsource/archivo/400.css、@fontsource/archivo/500.css、@fontsource/archivo/600.css、@fontsource/jetbrains-mono/400.css、@fontsource/jetbrains-mono/700.css。
  - 文件布局：src/content.ts 存放所有字符串（hero、ticker 项、services、示例货运旅程、stats、industries、hubs、footer）；src/map-data.ts 导出 HUBS 和 ROUTES，包含精确坐标和路径数据；src/components/ 存放 Header、Hero、RouteMap、Ticker、Services、Tracker、Coverage、QuoteForm、Footer；src/App.tsx 组合它们；src/index.css 包含关键帧（marquee、pulse-dot、hub-flash、node-pulse）和 reduced-motion 覆盖。
  - 路线动画：使用 getTotalLength() 对每条路线路径测量一次；绘制使用 stroke-dashoffset，持续 1.1 秒，错开 120 毫秒；脉冲点在一个共享的 rAF 循环中使用 getPointAtLength（7/9/11 秒圈速），当地图在屏幕外或标签页隐藏时暂停。在 prefers-reduced-motion 下，路线渲染为完全绘制状态，脉冲点停留在每条路径的中点。
  - 跟踪和报价小部件是纯客户端状态：提交处理程序调用 preventDefault，运行本地验证，从不获取或提交。未知跟踪代码显示内联未找到消息，并带有“使用示例”按钮。
  - 滚动显示使用 motion/react 的 whileInView，once: true，viewport { margin: '-10% 0px' }；计数器运行一次，持续 0.9 秒。
  - 所有文案位于 src/content.ts。当任何变量值与默认值不同时，重写那里的文案以适应新的品牌、线路、代码和调度行，保持相同的长度、结构和语气。
  - public/favicon.svg 按 Document 部分所述手写。<title>[BRAND]</title>，lang 'en'。在项目根目录编写 ASSETS.md，列出三个 Fontsource 包（OFL-1.1）和原始 favicon；不存在其他第三方文件。

## 变量
- [BRAND] — 承运商名称（默认："Copperline Freight"）。用于字标、<title>、页脚；追踪码前缀和参考编号暗示其首字母缩写。
- [TRADE_LANE] — 主要走廊（默认："Longshore Bay-Cedar Mesa-Harbor Nine"）。三个虚构枢纽名称以连字符连接；出现在首屏眉题、滚动条和服务文案中。
- [TRACKING_CODE] — 示例追踪码（默认："CL-4471-2209-CM"）。预填在追踪组件中；整个示例旅程均围绕它编写。
- [DISPATCH_LINE] — 调度联系方式行（默认："Dispatch desk +1 (555) 014-8890 - staffed 24/7"）。显示在首屏和页脚中；单行，等宽字体。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/logistics-and-freight-website（默认：是；删除此行即可移除）

页面与区块下的文案均按默认值编写。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后替换内容而无需改动组件。

## 设计
### 颜色
- 海军蓝（Navy）`#0f1e30` — 页面底色：除沙色面板外，全局使用深海军蓝
- 深海军蓝（Navy deep）`#13263c` — 地图面板填充、追踪面板填充、页脚色带
- 提亮海军蓝（Navy raise）`#1b3149` — 地图上的抽象陆地、海军蓝底色上的凸起标签
- 沙色（Sand）`#e9d9b8` — 暖沙色面板（服务、报价表单）、海上路线、海军蓝底色上的主描边文字
- 浅沙色（Sand light）`#f4ead4` — 输入框填充及沙色面板上的悬停状态；海军蓝底色上 85% 不透明度的正文文字
- 墨色文字（On ink）`#1c2c3f` — 沙色面板上的文字、绘制的车辆图标、表单文字
- 琥珀色（Amber）`#ffb100` — 强调色：枢纽圆点、空中弧线与脉冲点、CTA 填充、计数器、当前时间线节点、滚动条底色
- 深琥珀色（Amber deep）`#e09600` — CTA 悬停、沙色面板上的聚焦环、行内错误文字
- 钢灰色（Steel）`#93a6ba` — 海军蓝底色上的次要文字、公路路线（虚线）、元信息行
- 细线（Hairline）`rgba(233,217,184,0.22)` — 海军蓝底色上的 1px 分隔线与边框
- 深细线（Hairline dark）`rgba(28,44,63,0.18)` — 沙色面板上的 1px 分隔线与边框

### 字体排印
- 展示字体（首屏大标题、区块标题、统计数字、面板标题）：Archivo Black（OFL），字重 400
- 正文字体（正文、按钮、标签、表单标签）：Archivo（OFL），字重 400/500/600
- 等宽字体（眉题、枢纽代码、追踪代码、滚动条、小字说明）：JetBrains Mono（OFL），字重 400/700

### 布局与动效
- 间距：8px 节奏。区块 py-24（桌面端）/ py-14（移动端）；容器 max-w-[1200px] px-6（移动端 px-5）。首屏 pt-28 pb-20，滚动条带紧贴其底部。面板 p-8（移动端 p-5）。等宽眉题 12px 大写，letter-spacing 0.14em。展示性大写字母不额外增加字距（紧凑、厚重）；首屏行高 0.95，区块标题行高 1.05。
- 圆角：面板、标签、按钮、输入框、时间线节点（方形）和分隔线均为 0 — 粗野主义边缘。仅绘制的车辆图标、脉冲点和枢纽圆环为圆形。无阴影；层次感来自海军蓝与沙色的对比。
- 动效：整体感觉：大胆而迅速。入场 0.45-0.6 秒，cubic-bezier(.2,.8,.2,1)，短错峰（60-120 毫秒）。
- 动效：首屏标题行从 32px 处上滑，60 毫秒错峰，持续 0.45 秒；地图在 200 毫秒后绘制 1.1 秒，路线错峰 120 毫秒；脉冲点在绘制完成后开始。
- 动效：脉冲点沿每条路线以 7/9/11 秒循环（公路/海上/空中），在单个 rAF 循环中通过 getPointAtLength 实现；当点距端点枢纽 12px 以内时，该枢纽的圆环闪烁（scale 1 到 1.8，opacity 1 到 0，600 毫秒）。
- 动效：滚动条跑马灯：一条复制轨道在 28 秒内线性无限平移 -50%；悬停时暂停；在减少动态效果模式下显示单行静态内容。
- 动效：覆盖计数器在首次进入视口时以 0.9 秒 ease-out 计数一次（98.4 从 0.0 开始，保留一位小数）；减少动态效果模式下直接渲染最终值。
- 动效：追踪时间线：节点在显现时以 90 毫秒错峰从 scale 0.9 弹到 1；当前节点的琥珀色方块带有循环圆环脉冲（2 秒）。
- 动效：悬停微交互：沙色服务面板生长出 3px 琥珀色顶部线条（scaleX）并上移 2px；行业标签填充沙色、文字变为海军蓝；CTA 按钮变暗为深琥珀色并下移 1px。
- 动效：prefers-reduced-motion：路线完全绘制，脉冲位于路径中点，跑马灯静态，计数器和时间线处于最终状态，入场仅为透明度淡入。
- 图像：一切均以代码绘制：风格化世界地图及抽象陆地、枢纽和三种路线类型（SVG，精确数据见下文）、三个车辆图标（48px 描边 SVG）、时间线节点和标签、确认勾选标记以及 favicon。无照片、无人物、无地图瓦片、无外部图片。外观为扁平形状、1px 分隔线和厚重字体，严格使用上述十一个色值。

## 页面与区块
### 首页（单页）(`index.html`)
1. **文档与页头** — <title>[BRAND]</title>，lang 'en'。Favicon public/favicon.svg：32x32 方形（无圆角），填充 Navy，带 2px Sand 边框，内含一条 14px 琥珀色对角路线折线，从 (7,24) 到 (25,8)，两端各有一个 3px 方形节点。页头：字标 '[BRAND]' 使用 Archivo Black 16px Sand 大写，后跟一个 6px 琥珀色方块；导航链接 Services、Track、Coverage、Quote（Archivo 600 13px 大写 Steel，悬停 Sand）；CTA 区块 'GET A QUOTE'（Amber 填充、On-ink 文字、方角）锚定到 #quote；仅桌面端在栏下方有一条 mono 11px Steel 行：[DISPATCH_LINE]。
   布局：粘性页头，top 0，z 50，bg navy/90 带 backdrop blur 6px 和 1px Hairline 底边框。高度 64px（桌面端 dispatch 行作为一条 28px 细条位于栏上方，移动端隐藏）。移动端：链接折叠在 mono 'MENU' 按钮后，切换一个 Navy 面板；CTA 保持可见。
   动效：滚动 16px 后页头变为实心（初始在 hero 上方透明）。菜单面板下落 8px 并淡入。导航链接悬停时从 Steel 变为 Sand。
2. **带路线图的 Hero** — 眉标 mono 12px 大写 Amber：'FREIGHT NETWORK - [TRADE_LANE]'。标题 Archivo Black 大写 clamp(56px, 8vw, 116px)，行高 0.95，三行：'HEAVY THINGS.' 'FAR PLACES.' 'ON TIME.'——第三行 Amber，前两行 Sand light。正文 Archivo 400 17px/1.65 Steel，max-w-[440px]：'[BRAND] runs 940 truckloads a week along the corridor, hands freight to ships at Harbor Nine and puts the urgent rest on planes out of Gate City. Booked in minutes. Tracked in one place.' CTA：实心琥珀色 'Get a freight quote'（On-ink 文字）锚定到 #quote；描边沙色 'Track a shipment'（1.5px Sand 边框、Sand 文字）锚定到 #track。CTA 下方 mono 12px Steel 行：[DISPATCH_LINE]。
   布局：>= 1024px 时 2 列网格（5/7）：文案在左，地图面板在右；以下为单列（文案在前）。min-h-[88vh]，items center，pt-24 pb-16。
   动效：标题行上滑 32px，60 ms 错峰，0.45 s；眉标和正文在其后 0.3 s 淡入；地图面板以 0.97 缩放淡入，然后其路线绘制（见路线图）。
3. **路线图（hero 锚点）** — 一个地图面板：SVG viewBox 0 0 980 620，填充 Navy deep，1px Hairline 边框，左上角有 mono 11px Steel 角标 'NETWORK MAP - ILLUSTRATIVE'，左下角图例含三项（18px 线条样本 + mono 10px 标签）：ROAD（Steel 虚线）、SEA（Sand 实线）、AIR（Amber 实线）。LANDMASSES：五个抽象圆角块（60-180px 宽）使用 Navy raise 填充，带 1px Hairline 描边，非对称放置——虚构形状，非真实地图。HUBS（8px Amber 方块带 1px Sand 环，旁边 mono 10px Sand 代码）：LSB Longshore Bay (150,300)、CMD Cedar Mesa (430,240)、HRB Harbor Nine (760,320)、GAT Gate City (620,140)、SUN Sunfall (250,480)、KNO Knotley (700,500)。ROAD 路线（Steel，2px，dash 8 6）：M150,300 C230,260 340,250 430,240（LSB-CMD）；M430,240 C500,210 560,180 620,140（CMD-GAT）；M430,240 C520,270 640,290 760,320（CMD-HRB）；M430,240 C380,320 300,400 250,480（CMD-SUN）。SEA 路线（Sand，2px，实线）：M150,300 C300,430 600,450 760,320（LSB-HRB）；M150,300 C260,520 480,540 700,500（LSB-KNO）。AIR 路线（Amber，2.5px，实线弧）：M620,140 Q690,40 760,320（GAT-HRB）；M620,140 Q380,40 150,300（GAT-LSB）；M620,140 Q710,230 700,500（GAT-KNO）。脉冲点 r 4：道路为 Steel，海上为 Sand，空中为 Amber。
   布局：面板 w-full max-w-[640px] aspect [980/620] 位于 hero 右列；移动端在文案下方全宽（最小 320px 宽）。图例位于面板内左下角，带 Navy-deep/80 背衬条。
   动效：加载时绘制：每条路径 stroke-dashoffset 在 1.1 s 内动画到 0，按道路、海上、空中顺序错峰 120 ms；枢纽方块先以 0.6 到 1 缩放弹出（100 ms 错峰）。然后脉冲点以 7/9/11 s 循环；当点到达 12px 内时枢纽的环闪烁。离屏或隐藏标签页：共享 rAF 循环暂停。减少动效：路线完全绘制，点位于中点。
4. **滚动条带** — 全宽琥珀色带（高度 44px）紧贴 hero 下方，mono 700 12px 大写 Navy：'148 ACTIVE ROUTES / 23 COUNTRIES / 11 HUBS / FTL - LTL / FCL - LCL / NEXT-FLIGHT-OUT / REEFER / FLATBED / 98.4% ON-TIME /' 重复两次作为一条轨道，使循环无缝。
   布局：overflow hidden，轨道是两段相同 span 的 inline-flex 行，whitespace nowrap，py-3。
   动效：轨道在 28 s 内从 x 0 平移到 -50%，线性无限；悬停时暂停（键盘 focus-within 时也暂停）。减少动效：静态，单行在容器处裁剪。
5. **按运输方式划分的服务** — 锚点 id 'services'。眉标 mono 'HOW WE MOVE IT'，标题 Archivo Black 大写 clamp(34px, 4.4vw, 56px) Sand light 'PICK A MODE. / WE DO THE REST.' 三个沙色面板（0 圆角、1px Hairline-dark 边框、p-8），每个左上角有绘制图标，标题 Archivo Black 22px On-ink 大写，两行正文 Archivo 15px On-ink 80%，一个 mono 12px Amber-deep 具体数字，以及容量标签（1.5px On-ink 边框、mono 11px 大写 On-ink）。ROAD——图标：卡车（驾驶室 rect 6,20 w20 h14 rx2；挂车 rect 30,18 w16 h18；四个 r3 车轮在 y38；2.5px On-ink 描边，fill none）——标题 'ROAD'——正文 'Full and partial truckloads up and down [TRADE_LANE], dock to dock, one dispatcher the whole way.'——标签 FTL、LTL、TEAM DRIVE——数字 '940 POWER UNITS'。SEA——图标：船（船体路径 M6,30 L42,30 L36,42 L12,42 Z；甲板上堆叠三个 8x5 集装箱矩形；下方两条波浪折线；相同描边）——标题 'SEA'——正文 'Containers weekly out of Longshore Bay, reefers watched, paperwork handled before the gangway.'——标签 FCL、LCL、REEFER——数字 '2 SAILINGS / WEEK'。AIR——图标：飞机（机身线 8,26 到 40,26；后掠翼路径 M24,8 L38,26 L24,22 L10,26 Z；尾翼）——标题 'AIR'——正文 'Next-flight-out from Gate City for the freight that cannot wait a night. Customs cleared in advance.'——标签 NFO、CHARTER、SAME-DAY——数字 '3 H DOOR-TO-DOOR'。每个面板页脚：'Start here' 链接（mono 12px，Amber-deep 下划线）锚定到 #quote。
   布局：3 列网格（移动端 1 列），gap 24px。面板等高；图标 48px。
   动效：面板滚动时上升，100 ms 错峰；悬停：3px 琥珀色顶部线绘制（scaleX），面板上移 2px；图标微移 x +3px。
6. **追踪组件** — 锚点 id 'track'。眉标 mono 'TRACK A SHIPMENT'，标题 'KNOW WHERE IT IS. / RIGHT NOW.' 一个 Navy-deep 面板（1px Hairline 边框、p-8）：mono 12px Sand 标签 'TRACKING CODE'；输入框（方形、Sand-light 填充、On-ink mono 16px、大写转换）预填 [TRACKING_CODE]；按钮 'LOCATE SHIPMENT'（Amber 填充、On-ink mono 13px）。提交后渲染示例记录：头部行 mono 14px Sand '[TRACKING_CODE] - LONGSHORE BAY to CEDAR MESA - 2 PALLETS / 1,840 LB'；然后五节点时间线（2px Sand-at-20% 垂直轨道、14px 方形节点）：'DAY 01 - BOOKED - Longshore Bay, dock 14'；'DAY 01 - PICKED UP - signed BOL #2209'；'DAY 04 - HUB SCAN - Cedar Mesa cross-dock'；'DAY 06 - IN TRANSIT - corridor line 2, reefer off, dry on'（CURRENT——Amber 节点带循环环脉冲）；'DAY 09 - OUT FOR DELIVERY - final mile, liftgate booked'。页脚 mono 10px Steel：'DEMO TRACKER - SAMPLE SHIPMENT DATA, STORED NOWHERE'。任何其他代码：内联消息 Amber-deep mono 12px 'NO SHIPMENT FOUND FOR THAT CODE' 加一个文本按钮 'USE THE SAMPLE'，重新填充 [TRACKING_CODE] 并重跑。
   布局：面板 max-w-[720px] 居中；时间线节点 pl-10，轨道在 left 20px；每个节点行 py-4：mono 11px 日期 + 标题 Archivo 600 15px Sand light + 详情 Archivo 14px Steel。移动端：输入框和按钮堆叠。
   动效：显示时，节点以 0.9 到 1 缩放弹出，90 ms 错峰；当前节点的琥珀色环以 2 s 循环脉冲。提交时重跑显示。减少动效：节点淡入；环静态。
7. **覆盖统计与行业** — 锚点 id 'coverage'。眉标 mono 'COVERAGE'，标题 'THE NETWORK, IN NUMBERS.' 四个统计值带位于 1px Hairline 规则线之间：Archivo Black clamp(48px, 6vw, 88px) Amber 数字配 mono 12px Steel 标签——'148' ACTIVE ROUTES；'23' COUNTRIES SERVED；'11' FREIGHT HUBS；'98.4%' ON-TIME, TRAILING 12 MONTHS。带下方：mono 11px Steel 眉标 'BUILT FOR YOUR FREIGHT' 和一行标签（1.5px Sand-at-40 边框、mono 12px 大写 Sand）：RETAIL + ECOMMERCE、AUTOMOTIVE PARTS、INDUSTRIAL EQUIPMENT、AGRICULTURE、ELECTRONICS、FURNITURE + HOME。页脚注释 mono 10px Steel：'ROUTES, HUBS AND FIGURES ARE ILLUSTRATIVE EXAMPLES'。
   布局：统计 4 列网格（移动端 2 列）py-12；标签 flex-wrap gap-3，max-w-[900px]。
   动效：数字在首次进入视图时于 0.9 s 内计数一次（98.4 从 0.0 计数，一位小数）。标签以 50 ms 错峰淡入；悬停填充 Sand 配 Navy 文字。
8. **报价表单** — 锚点 id 'quote'。双栏布局：左侧文案 — 眉标等宽字体 'GET A QUOTE'，标题 'QUOTES IN HOURS. / NOT DAYS.'；三条项目符号行，带 10px 琥珀色方形标记，Archivo 16px Sand light：'Lane, mode, weight - that is all we need to start'；'A named dispatcher replies within 4 business hours'；'First load gets a corridor intro rate, no contract'。右侧：一个沙色面板（0 圆角，1px Hairline-dark 边框，p-8）表单：MODE 分段控件（三个方形按钮 ROAD/SEA/AIR，等宽字体 12px，选中 = On-ink 填充配 Sand-light 文字）；字段 ORIGIN、DESTINATION（文本），WEIGHT LB（数字），EMAIL（邮箱）— 标签等宽字体 11px On-ink，输入框 Sand-light 填充 0 圆角；提交按钮 'SEND TO DISPATCH DESK'（琥珀色填充，On-ink 等宽字体 13px）。校验：origin/destination 必填（最少 2 个字符），weight > 0，邮箱格式；错误信息内联显示在字段下方，琥珀深色等宽字体 11px，带 1.5px 琥珀深色边框。成功后表单原地切换为确认区块：一个 56px 琥珀色方块（0 圆角），内含代码绘制的对勾（折线 M18,30 L27,39 L40,22，On-ink 5px 描边），标题 Archivo Black 22px On-ink 'REQUEST QUEUED.'，正文 Archivo 15px On-ink 80% 不透明度：'The dispatch desk replies within 4 business hours with a lane quote. Reference QT-2214 (sample).'，以及一行等宽字体 11px On-ink 60% 不透明度 'THIS FORM RUNS LOCALLY - NOTHING IS SENT'。
   布局：>= 1024px 时双栏网格（5/7）；以下堆叠（表单在文案之后）。字段网格双栏（origin/destination 一行，weight/email 一行），gap 16px；分段控件占满整行。
   动效：面板进入时上滑 16px；分段按钮切换带 0.15 s 填充过渡；成功后确认区块淡入/滑入 0.3 s（不跳转页面）。提交按钮在“发送中”状态禁用固定 600 ms 以显得真实 — 无网络请求。
9. **页脚** — Navy-deep 色带上 1px Hairline 顶部分隔线。三个枢纽迷你卡片（等宽字体 12px Sand 代码 + Archivo 14px Sand-light 地址）：'LONGSHORE BAY - Dock 14, 88 Pier Avenue'；'CEDAR MESA - Cross-dock 3, 2101 Fairway Road'；'HARBOR NINE - Terminal 2B, 6 Quay Street'。然后一行：字标 + 等宽字体 12px Steel [DISPATCH_LINE]。底部栏位于 Hairline 分隔线之间：等宽字体 10px Steel '[BRAND] - HUBS, ROUTES AND FIGURES ON THIS PAGE ARE ILLUSTRATIVE' 以及可选的 [CREDIT] 链接。
   布局：三栏网格（移动端单栏）gap 24px py-14；调度行 py-6；底部栏 py-4。
   动效：仅链接悬停：Steel 到 Sand。

## 资产
- 字体：通过 Fontsource 自托管，在 src/main.ts 中导入：@fontsource/archivo-black (400)、@fontsource/archivo (400, 500, 600)、@fontsource/jetbrains-mono (400, 700)。Vite 将 woff2 文件打包进 dist/。绝不从 CDN 加载字体。
- 图标：无图标库，也无图标文件。三个交通工具图标（truck、ship、plane）是手绘的 48x48 描边 SVG，在 Services 区块内联指定；箭头和分隔符是文本字形（-、/）。
- 图片：完全没有图片文件。所有视觉内容均以代码绘制：带陆块、枢纽和路线的风格化世界地图（SVG，精确坐标和路径数据见 Route map 区块和 src/map-data.ts）、交通工具图标、时间线节点、确认勾选、标签和分隔线（CSS），以及 favicon（public/favicon.svg 中的手写 SVG）。无照片、无地图瓦片、无外部下载。在项目根目录编写 ASSETS.md，列出三个 Fontsource 包（OFL-1.1）和原创 favicon；不存在其他第三方文件。

## 禁止事项
- 不得包含任何形式的后端：不得有服务器代码、API 路由、数据库、认证、分析或会提交的表单。报价表单和追踪器仅限客户端（preventDefault、本地状态、内联确认）；不得使用 fetch、XHR 或第三方 API。
- 不得使用真实承运商、港口、物流品牌、航运公司或航空公司；公司、枢纽、航线、航次和航班均为虚构。不得使用承运商标志，不得使用集装箱航运公司的涂装颜色。
- 世界地图为风格化且由代码绘制：抽象虚构的陆地，绝不使用真实地图瓦片、卫星影像、GeoJSON 世界轮廓或地图库。
- 追踪组件必须保持为诚实的本地演示：保留 'DEMO TRACKER - SAMPLE SHIPMENT DATA' 页脚，绝不暗示存在实时 API 或真实货运，并保留带有 'USE THE SAMPLE' 按钮的未找到路径。
- 统计数据、车队数量和准时率数字均为虚构样本：在覆盖范围处和页脚中保留 'ILLUSTRATIVE' 脚注。页面任何位置都不得出现日历日期、年份或时钟时间（行程天数是时长，不是日期）。
- 不得从 fonts.googleapis.com、fonts.gstatic.com 或任何 CDN 加载字体；仅使用 Fontsource。不得使用 CDN 的 <script> 或 <link> 标签；所有依赖均通过 npm 打包。
- 生产构建：压缩，build.sourcemap false，dist/ 中不得有 src/，使用相对资源路径（Vite base './'）。内部链接为 ./index.html 上的页内锚点。
- 除非用户要求，否则不得更改技术栈（Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion）。不得使用 WebGL、UI 套件、Aceternity UI 或 Tailwind Plus 源码。
- 仅使用 Archivo Black、Archivo 和 JetBrains Mono，且仅使用 Design 中的颜色令牌。除绘制的圆形外，任何地方都不得使用圆角（方形是节点、标签、按钮、面板），不得使用投影，不得使用渐变。
- 地图必须是确定性的：使用给定的精确 HUBS 和 ROUTES 数据、固定的动画时序、无随机值，以便两次构建生成相同的页面。不得添加天气、昼夜或其他随机效果。
- 严格按照规定遵循 prefers-reduced-motion（绘制路线、中点脉冲、静态滚动条、即时计数器、仅淡入淡出）。当地图不在屏幕内或标签页隐藏时，暂停共享的 rAF 循环。
- 必须在 1440x900 和 390x844 下正常工作，控制台零错误，无水平滚动，控件可通过键盘访问（用 Tab 键遍历分段控件、输入框和按钮），并具有可见的 2px Amber-deep 焦点环。
- 保持 dist/ 低于 20 MB（应远低于 1 MB）；不得包含视频，不得包含音频。
- 将所有文案保留在 src/content.ts 中，并在变量值与默认值不同时重写文案；绝不在更改品牌、航线、代码或调度行后仍发布默认文案。不得使用 lorem ipsum，不得使用填充内容。
- 除可选的 [CREDIT] 页脚链接外，网站内不得提及 VibeFather 或任何模板来源。

---
— Prompt by VibeFather · https://vibefather.ai/t/logistics-and-freight-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
