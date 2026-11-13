> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 露营地与房车公园网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个精致的单页网站，[BRAND] 是位于 [LOCATION] 的 [PARK_TYPE]。以 '[TAGLINE]' 这句话和一张风景优美的园区照片作为开篇，然后让访客比较帐篷、房车（RV）和小屋住宿，查看原创的 SVG 园区地图，按日期和设施筛选示例可用性，并准备一份客户端预订请求。文案面向 [AUDIENCE] 撰写，并使用 [CONTACT_EMAIL] 作为虚构的联系方式。

- 受众：主要访客是 [AUDIENCE]。该模板也面向独立业主和小型酒店团队，他们需要一个适应性强的网站，能够清晰地回答关于住宿、抵达、设施、步道和政策的问题。
- 目标：帮助访客选择合适的住宿类型，在抵达前了解园区情况，找到特定日期下可用的示例营位，并最终获得一份完整的预订请求——无需后端，即可复制或下载。
- 语气：温暖、踏实、务实，且沉稳自信。使用关于营位、水电接口、步道和日常安排的具体细节，而非含糊的逃离式语言、紧迫感、夸张辞藻或未经证实的酒店服务声明。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL）、@fontsource-variable/inter（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 vite.config.ts 设置为使用 React、base: './'、build.outDir: 'dist' 和 build.sourcemap: false。
  - 配置 tailwind.config.ts，content 指向 index.html 和 src/**/*.{ts,tsx}；将列出的颜色、间距和字体系列定义为主题令牌。
  - 在 src/main.tsx 中导入自托管字体包，并在 src/index.css 中导入 Tailwind 指令以及少量全局焦点和减少动态效果规则。
  - 将每个标题、段落、标签、场地记录、封锁日期范围、设施、步道、规则、FAQ、联系方式、链接和图片路径按区块放入 src/content.ts；从提供的值中派生依赖变量的文案和品牌衍生的联系方式。
  - 构建小型区块组件，并将快速搜索、地图筛选、选中场地、手风琴、移动菜单、预订抽屉和请求确认状态保留在 React 中；仅对指定的显现和过渡使用 Motion。
  - 将每个封锁日期范围表示为相对于访客当前本地日期的非负到达和离开天数偏移，离开按退房不含当日处理；快速搜索默认到达为 14 天后、离开为 17 天后，使用原生日期输入，并以美式英语格式化日期，不使用外部日期 API。
  - 为公园示意图使用原创内联 SVG viewBox='0 0 960 600'，每个场地的几何形状和标签都在 content.ts 中定义；不要添加地图库、地图瓦片、地理编码或真实地理声明。

## 变量
- [BRAND] — 园区名称（默认："Moss & Meadow"）。使用虚构的露营地或房车公园名称，不包含地点品牌或真实商业身份。
- [PARK_TYPE] — 园区描述（默认："woodland campground and RV park"）。一个简短的小写描述，用于眉标、介绍和页脚。
- [LOCATION] — 园区位置（默认："Fern Hollow, Oregon"）。使用一个合理的虚构地点，并相应地调整区域、地址和到达指引文案。
- [TAGLINE] — 主视觉标题（默认："Find your patch of quiet."）。一句简洁的原创户外欢迎语，适合作为主视觉大标题。
- [AUDIENCE] — 主要客群（默认："weekend campers, RV travelers, and families planning an easy cabin stay"）。一个小写客群短语，用于完整句子中，并在住宿文案中体现。
- [CONTACT_EMAIL] — 预订邮箱（默认："stay@mossandmeadow.example"）。为虚构园区使用一个虚构的 .example 地址。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/campground-and-rv-park-website（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 燕麦色（Oat）`#F3EFE4` — 主页面背景、深色图像上的浅色文字，以及安静的表单表面
- 云杉绿（Spruce）`#18372B` — 标题、正文、主按钮、页脚和深色区块背景
- 苔藓绿（Moss）`#526B4D` — 次要强调色、可用营地填充、图标和激活的筛选状态
- 陶土色（Clay）`#B95F3F` — 小型编辑性强调、浅色表面上的链接和步道难度标记
- 蜂蜜色（Honey）`#E2B85B` — 选中的地图营地、关键高亮和带深色文字的焦点强调
- 地衣色（Lichen）`#DCE3D2` — 交替面板、地图空地、选中的卡片和柔和的状态背景
- 河流色（River）`#9BBBC0` — 原始公园地图中绘制的溪流和湖泊
- 石色（Stone）`#C9C5B8` — 边框、不可用营地、表单轮廓和细微分隔线

### 字体排印
- 展示字体：Fraunces Variable（OFL），字重 500/600/700
- 正文与界面：Inter Variable（OFL），字重 400/500/600/700

### 布局与动效
- 间距：使用 8px 基础网格，最大内容宽度 1320px，桌面端边距 40px，移动端边距 20px。区块在桌面端有 104px 垂直内边距，移动端为 68px。桌面端使用 12 列网格，间距 24px，表单字段间距 16px，主要标题与内容之间 56–72px。正文行宽保持在约 68 个字符。
- 圆角：照片和主要卡片使用 18px 圆角，地图和预订面板使用 12px，输入框和营地按钮使用 8px，仅小型筛选标签和状态标签使用全圆角。避免嵌套圆角卡片、大型浮动气泡和厚重阴影。
- 动效：首次加载时，主视觉文案在 600ms 内向上淡入 18px，同时照片在 1000ms 内从 scale 1.035 稳定到 1；眉题、标题、段落和操作按钮以 70ms 间隔错开。
- 动效：当区块标题和照片卡片进入视口时，以 20px 上升和透明度过渡在 500ms 内显现，仅一次，不劫持滚动。
- 动效：地图营地、筛选控件和住宿卡片操作给予 160ms 的填充、边框或颜色响应；结果计数和可用性立即更新，不做数字滚动动画。
- 动效：预订抽屉以 240ms 透明度和 24px 水平过渡打开，焦点锁定，按 Escape 和点击背景关闭，并将焦点返回触发控件。
- 动效：手风琴以 200ms 的高度和透明度展开，仅在未请求减少动效时使用平滑锚点滚动。
- 动效：在 prefers-reduced-motion 下禁用非必要变换、错开显现、平滑滚动和抽屉移动；绝不延迟表单错误、营地详情或可用性文本。
- 图像：将提供的六张生成图像作为一组连贯的编辑性户外拍摄使用：一张宽幅公园主视觉、每种住宿类型各一张照片、一个公共篝火区，以及一条林地步道。它们共享温暖的午后晚些时候光线、高大的松树、自然材料、深绿色和蜂蜜色调，以及一种未经摆拍的空间感。使用 object-fit: cover 裁剪，并保持主视觉场景宽敞。添加原始 SVG 营地地图和小型代码绘制的步道海拔剖面作为信息图形。不要添加可识别的人物、车辆或设备品牌、可读的标牌、标志或可识别的地标。

## 页面与区块
### [BRAND] — [LOCATION] 的露营地与房车公园（`index.html`）
1. **页眉、摄影主视觉与快速空位查询** — 创建一条 34px 的 Spruce（云杉色）实用信息条，文字为 'CAMP HOST ON SITE · 8 AM–8 PM' 和 '[LOCATION]'，其后是一条 76px 的 Oat（燕麦色）页眉，包含文字标识 '[BRAND]'、锚点链接 'Stay'、'Site map'、'Amenities'、'Trails' 和 'Good to know'，以及一个 Spruce 色的 'Check availability' 按钮。移动端使用 Menu 图标和可访问的下拉菜单。在主视觉照片上放置眉题 '[PARK_TYPE] · [LOCATION]'、展示标题 '[TAGLINE]'，以及辅助文案 'Twelve wooded sites for tents, RVs, and cabin weekends, with hot showers, trailheads, and a camp host who knows the place. Made for [AUDIENCE].'。使用一个指向住宿区块的浅色描边操作 'Explore the sites'，以及一行小字 'Open April through October · Sample park content'。叠加一个标题为 'Start with your dates' 的快速空位面板，包含原生 Arrival 和 Departure 输入框、1–6 的 Guests 选择器、住宿选项 All sites、Tent、RV 和 Cabin，以及一个 Honey（蜂蜜色）的 'Show available sites' 按钮。包含 'Sample availability · No payment collected'。提交后将筛选条件应用到地图，滚动到地图标题处，并将键盘焦点移至该处。
   布局：将实用信息条和导航保持在照片之外。在页面边距内使用全宽主视觉，在 1440×900 下高度至少 650px，hero.webp 覆盖整个框架，并使用从左到右的 Spruce 渐变以保证浅色文字清晰可读。将文案放在第 1–7 列靠近左下方，标题设为 76px/0.98，最多五行但目标为两行，并将快速空位面板横跨底部放置，桌面端使用五列控件网格。移动端将控件堆叠为两列，按钮设为全宽，标题使用 46px，主视觉最小高度 600px，并避免用不必要的徽章遮挡照片焦点。
   动效：主视觉入场动画只运行一次，并轻柔地稳定照片。移动端菜单在 180ms 内淡入并下滑 8px。不要添加视差或自动播放媒体。
2. **选择你的大本营** — 眉题：'THREE WAYS TO STAY'。标题：'Pick your kind of outside.'。引言：'From a simple tent pad to a full-hookup pull-through or a cabin with a real door, every option keeps the practical details in view.'。创建恰好三张摄影卡片。帐篷营位使用 tent.webp、'From $38 / night'、'4 sites · 2–6 guests'，以及特性 'Level tent pad'、'Picnic table and fire ring'、'Drinking water nearby'，操作为 'Show tent sites'。房车营位使用 rv.webp、'From $62 / night'、'4 sites · up to 45 ft rigs'，以及特性 '30/50 amp options'、'Water and sewer on full-hookup sites'、'Pull-through and back-in pads'，操作为 'Show RV sites'。小木屋使用 cabin.webp、'From $118 / night'、'4 cabins · 2–6 guests'，以及特性 'Real beds and heating'、'Kitchenette and dining nook'、'Bathhouse or private bathroom by cabin'，操作为 'Show cabins'。每个操作都会设置对应的地图筛选条件、保留有效日期、滚动到地图，并聚焦其结果计数。将所有价格标注为 'illustrative sample rates'。
   布局：在三张等宽卡片上方使用 4 列区块标题。每张卡片包含一张 4:3 图片、一个小号类型标签、一个 30px 的 Fraunces 标题、一行价格、一行简短元数据、三个 Lucide Check 详情，以及一个文字箭头操作。使用细 Stone（石色）边框，不使用浮动阴影。移动端堆叠卡片，并将图片保持为 16:10，以免内容变得过长。
   动效：以 70ms 的错峰延迟显示卡片。仅在悬停时将内部照片缩放至 1.025，并在 240ms 内恢复；对减少动态效果和仅键盘导航禁用该效果。
3. **交互式营位地图与空位规划器** — 眉题：'THE SITE MAP'。标题：'See your spot before you arrive.'。引言：'Choose dates, compare features, and select a site on the original illustrated map. Availability and prices are sample data for this fictional park.'。重复同步的 Arrival、Departure、Guests 和 Accommodation 控件，然后添加特性复选框 'Full hookups'、'Pull-through'、'Lake view' 和 'Step-free access'，以及 'Clear filters'。验证离店日期晚于到店日期，若无效则显示内联错误而非结果。定义恰好 12 条记录：T01 Fern Tent / tent / 2 guests / $38 / shaded, near bathhouse / blocked 0–4；T02 Creek Tent / tent / 4 / $44 / creekside, water nearby / no blocked dates；T03 Meadow Tent / tent / 6 / $48 / step-free access, sunny clearing / blocked 14–17 and 28–31；T04 Ridge Tent / tent / 4 / $42 / lake view, fire ring / blocked 7–10。R01 Alder Pull-Through / RV / 4 / $64 / up to 40 ft, full hookups, pull-through / no blocked dates；R02 Creek Back-In / RV / 6 / $68 / up to 35 ft, full hookups, creekside / blocked 14–18；R03 Meadow Pull-Through / RV / 6 / $72 / up to 45 ft, full hookups, pull-through, lake view, step-free access / no blocked dates；R04 Ridge Back-In / RV / 4 / $62 / up to 30 ft, 30 amp and water, lake view / blocked 3–7。C01 Fern Cabin / cabin / 2 / $118 / queen bed, kitchenette, nearby bathhouse / no blocked dates；C02 Creek Cabin / cabin / 4 / $146 / queen and bunks, kitchenette, private bathroom / blocked 14–17；C03 Meadow Cabin / cabin / 6 / $168 / two queens and bunks, kitchenette, private bathroom, step-free access / no blocked dates；C04 Ridge Cabin / cabin / 4 / $152 / queen and loft, kitchenette, private bathroom, lake view / blocked 21–24。被阻止的偏移量使用不含离店日的区间，当 arrivalOffset < blockedDeparture 且 departureOffset > blockedArrival 时与请求的住宿重叠。因此默认的 14–17 日搜索有 9 个可用营位。将特性不兼容的营位变暗，将不可用的营位加上斜线阴影，并显示随输入变化的实时 '9 of 12 sites available' 计数。绘制一条蜿蜒的 River（河流）小溪、浅色内部道路、一间小屋、一间浴室、四块帐篷空地、四个矩形房车营位垫和四个带营位代码的小木屋轮廓。可用营位为 Lichen（地衣色）配 Spruce 描边；选中的营位为 Honey 配 3px Spruce 轮廓。每个营位均可通过 Enter 或 Space 键盘操作，并具有包含代码、类型、价格和状态的可访问名称。同时为移动端和辅助技术提供所有匹配营位的同步列表视图。初始选中 R01；若后续筛选使其不兼容，则清除选择并显示有用的提示。详情面板显示所选记录、每项特性、每晚价格、所选日期、晚数、预计住宿小计、'Taxes not included in this demo'，以及一个 'Prepare reservation request' 按钮。当没有营位匹配时，显示 'No sites fit those dates and features' 和一个重置操作。
   布局：将筛选控件放在 Oat 面板中，包含一行五列主行和一行可换行的特性行。下方在 12 列布局中使用 8 列 SVG 地图和 4 列粘性详情面板。地图保持 960:600 的宽高比，桌面缩放下标签至少 13px；包含一个用于 Available、Selected、Unavailable 和 Filtered out 的小图例。详情面板保持在地图旁边，而不是变成模态框。低于 800px 时堆叠地图、列表视图切换和详情；提供列表作为等效的非微小交互，而不是强制水平滚动或捏合缩放。
   动效：使用即时状态变化，配合 160ms 的颜色过渡。当地图进入视口时，以 600ms 的描边显示一次性绘制小溪和道路，但在减少动态效果下立即显示完成的几何图形。切勿对被阻止的区间做动画，也不要在筛选时重新排列地图。
4. **设施与日常节奏** — 眉题：'AT THE PARK'。标题：'The useful things are already here.'。文案：'Arrive with the basics and settle in quickly. The camp host is at the lodge from 8 AM to 8 PM, with clear arrival instructions for later check-ins.'。使用 gathering.webp，替代文本为 'Woodland campfire circle with timber benches and a simple picnic shelter.'。添加八个紧凑的 Lucide 图标设施：'Hot showers' / 'Bathhouse open 6 AM–10 PM'；'Dishwashing station' / 'Warm water beside the lodge'；'Drinking water' / 'Refill points in every camping loop'；'RV dump station' / 'Included with full-hookup stays'；'Camp store basics' / 'Ice, kindling, coffee, and toiletries'；'Wi-Fi at the lodge' / 'Porch seating, no streaming promise'；'Dog-friendly loop' / 'Leashed pets welcome on Fern Loop'；'Recycling and waste' / 'Sorted bins at the main entrance'。添加一条小注 'Amenities and hours are illustrative sample content for this fictional park.'。
   布局：使用 6 列 4:3 照片和 6 列内容区域。将八个设施排列为 2×4 网格，使用细顶部分隔线、20px 图标、简洁标签和单行说明，而不是单独的卡片。移动端先排列标题和文案，然后是图片，最后是两列设施网格，在低于 360px 时折叠为一列。
   动效：对照片使用标准视口显示动画，对设施网格使用一次组合显示。图标保持静止；链接和焦点状态使用简单的颜色变化。
5. **附近步道** — 眉题：'FROM THE TRAILHEAD'。标题：'Three ways into the woods.'。引言：'Start from the north gate or drive to a nearby trailhead. Distances and conditions below are sample guide content, not live safety information.'。展示 trail.webp，替代文本为 'Fern-lined woodland trail leading through tall pines toward a quiet lake.'。定义三行步道，使用原创的数据驱动 SVG 海拔剖面：Fern Loop / Easy / 1.8 mi / 180 ft gain / about 45 min / starts behind the lodge / leashed dogs welcome；Creekline Ramble / Moderate / 3.6 mi / 520 ft gain / about 2 hr / north gate trailhead / rocky after rain；North Ridge Climb / Hard / 5.2 mi / 1,240 ft gain / about 3 hr / 6-minute drive / carry water and an offline map。添加一条实用提示 'Check local conditions before setting out. Tell someone your route and expected return.'。
   布局：使用 5 列粘性图片和 7 列列表。每行步道包含名称和难度、一个四统计网格、一个 96px 高的海拔剖面（绘制为简单的 Moss（苔藓色）区域和 Spruce 线条），以及步道说明。使用行分隔线而非卡片。移动端移除粘性行为，将照片放在最前，并保持每个统计网格为两列。
   动效：以 500ms 的描边和透明度入场一次性显示三条步道剖面；当请求减少动态效果时，渲染最终路径而不带动画。不要暗示实时 GPS 追踪。
6. **到达信息与公园规则** — 眉题：'GOOD TO KNOW'。标题：'A smoother arrival starts here.'。创建两个信息面板。'Before you arrive' 列出 Check-in 2 PM–8 PM、Checkout by 11 AM、Gate code provided with a confirmed real-world booking、Camp host at the lodge 8 AM–8 PM，以及 Late arrivals follow the envelope instructions at the lodge。添加 'This demo never issues a gate code or confirms a stay.'。'Good neighbors make great camps' 列出 Quiet hours 10 PM–7 AM、Fires only in provided rings and never during a burn ban、Maximum two vehicles per site、Pets on a leash no longer than 6 ft，以及 Use local firewood to protect the forest。随后是一个可访问的五项 FAQ：'Is my reservation confirmed when I prepare a request?' / 'No. This static demo creates a request summary only. It does not contact a park, hold a site, or take payment.'；'What is included in the nightly estimate?' / 'The estimate multiplies the sample nightly rate by the number of nights. Taxes and optional extras are not included.'；'Can I bring my dog?' / 'The fictional park allows leashed dogs on tent and RV sites and on Fern Loop. The sample cabins do not accept pets.'；'What happens if my rig is longer than 40 ft?' / 'Choose R03 Meadow Pull-Through for the sample 45 ft capacity, then include the exact rig length in your request note.'；'Can I change my dates after preparing a request?' / 'Yes. Close the confirmation, change the dates, and prepare a new summary. Nothing has been sent or booked.'。一次只保持一个 FAQ 项展开。
   布局：在 Lichen 上使用 5 列到达面板，在 Oat 上使用 7 列规则列表，随后是一个全宽手风琴，带有强烈的顶部和底部分隔线。问题使用 18px 中等 Inter，答案使用 16px/1.7。移动端堆叠所有面板，并保持规则和答案无水平滚动。
   动效：以 200ms 的高度和透明度过渡展开和折叠答案，将 Plus 图标旋转 45 度；在减少动态效果下保持内容立即可用。
7. **预订请求抽屉** — 从选中的营位打开 'Prepare reservation request' 会启动一个带标签的对话框，标题为 'Prepare your stay request'。在紧凑摘要中显示所选营位、日期、客人数、每晚价格和预计小计。包含与规划器同步的可编辑原生 Arrival 和 Departure 输入框、限制为营位容量的 Guests、必填的 Name 和 Email 字段、可选的 Phone 和 Note 字段，以及一个必填复选框，文字为 'I understand this is a request, not a confirmed booking.'。主要操作是 'Prepare request'。内联验证日期、必填字段、电子邮件格式、容量和复选框，然后将焦点移至第一个无效字段。包含持久注释 'Demo only: nothing is sent, no site is held, and no payment is collected.'。成功后仅在内存中保留个人字段，并将表单替换为 'Your request is ready'、完整的纯文本摘要、'Copy request'、'Download .txt' 和 'Make another request' 操作。复制使用 Clipboard API 并提供可见的回退方案；下载创建本地文本文件。切勿声称已发送电子邮件或已确认预订。
   布局：桌面端使用右侧抽屉，宽 520px，Oat 背景、Spruce 文字、清晰的关闭按钮和可滚动的表单区域。移动端将其设为全屏对话框。将住宿摘要保持在顶部，在每个字段上方使用可见标签和最小 48px 的控件，并使电话和备注为全宽。打开时防止背景滚动而不引起布局偏移。
   动效：使用指定的 240ms 抽屉过渡和 180ms 的表单到确认交叉淡入淡出。立即显示验证错误，在错误后保留所有值，尊重减少动态效果，并在关闭时恢复焦点。
8. **结尾行动号召与页脚** — 使用 Spruce 结尾面板，眉题为 'YOUR NEXT WEEKEND'，标题为 'The right site is waiting on the map.'，文案为 'Compare the clearings, pads, and cabins for your dates, then prepare a request when you are ready.'，以及一个 Honey 色的 'Find your site' 按钮，用于聚焦地图控件。在页脚中重复 '[BRAND]'、'[PARK_TYPE] in [LOCATION]'，以及虚构地址 '1840 Fern Hollow Road, Fern Hollow, Oregon 97400'。显示 '[CONTACT_EMAIL]'、'Camp host · 8 AM–8 PM'，以及锚点链接 Stay、Site map、Amenities、Trails 和 Good to know。最后以 'Fictional park demonstration. Sites, prices, availability, trails, policies, and contact details are sample content.' 结束。将可选的 [CREDIT] 链接在最后一行保持小号。
   布局：将结尾文案放在 7 列区块中，操作放在全宽深色面板的右侧。下方页脚使用 5 列品牌、4 列联系方式和 3 列导航区块，并在细则上方使用一条低透明度的 Stone 分隔线。移动端堆叠所有区块，安全地换行电子邮件和地址，并确保地图操作不会打开空的预订表单。
   动效：页脚无入场动画。使用简单的下划线和颜色悬停状态，并带有清晰的焦点可见轮廓；结尾面板可使用标准的单次视口显示动画。

## 资源

- 图片：hero.webp — 下载 https://media.vibefather.ai/assets/48eca278-1530-440c-b7dd-c6a0d71e893e/hero.webp 到 public/images/hero.webp。替代文本：'Wide woodland campground beside a quiet lake with tents, unbranded RVs, and timber cabins in warm evening light.' 用作摄影主视觉。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录路径、来源 URL、署名和许可说明。
- 图片：tent.webp — 下载 https://media.vibefather.ai/assets/48eca278-1530-440c-b7dd-c6a0d71e893e/tent.webp 到 public/images/tent.webp。替代文本：'Spacious woodland tent site with a simple tent, picnic table, and unlit fire ring.' 用于帐篷住宿卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录。
- 图片：rv.webp — 下载 https://media.vibefather.ai/assets/48eca278-1530-440c-b7dd-c6a0d71e893e/rv.webp 到 public/images/rv.webp。替代文本：'Level gravel RV pad with a generic unbranded travel trailer among tall pines.' 用于房车住宿卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录。
- 图片：cabin.webp — 下载 https://media.vibefather.ai/assets/48eca278-1530-440c-b7dd-c6a0d71e893e/cabin.webp 到 public/images/cabin.webp。替代文本：'Small timber cabin with a covered porch and warm windows in a pine clearing.' 用于木屋住宿卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录。
- 图片：gathering.webp — 下载 https://media.vibefather.ai/assets/48eca278-1530-440c-b7dd-c6a0d71e893e/gathering.webp 到 public/images/gathering.webp。替代文本：'Woodland campfire circle with timber benches and a simple picnic shelter.' 用于设施部分。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录。
- 图片：trail.webp — 下载 https://media.vibefather.ai/assets/48eca278-1530-440c-b7dd-c6a0d71e893e/trail.webp 到 public/images/trail.webp。替代文本：'Fern-lined woodland trail leading through tall pines toward a quiet lake.' 用于附近步道部分。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录。
- 图标：界面和设施图标仅使用 lucide-react（ISC），包括 ArrowUpRight、ArrowRight、CalendarDays、MapPin、TentTree、Caravan、House、Users、Check、Menu、X、Plus、ShowerHead、Droplets、Store、Wifi、Dog、Recycle、Flame、Clock、Copy 和 Download。将站点地图和三条步道海拔剖面绘制为原创内联 SVG；不要使用品牌图标、外部地图瓦片或复制的 地图几何数据。
- 字体：Fraunces Variable 500/600/700，通过 @fontsource-variable/fraunces（OFL）引入，通过 npm 包自托管，用于展示标题；在 ASSETS.md 中列出该包和许可证。
- 字体：Inter Variable 400/500/600/700，通过 @fontsource-variable/inter（OFL）引入，通过 npm 包自托管，用于正文和界面文本；在 ASSETS.md 中列出该包和许可证。

## 禁止事项
- 不要添加后端、服务器代码、API 路由、身份验证、数据库、第三方 API、外部地图服务、分析、支付收集或真实表单传输；预订请求保留在设备上，并明确标注为演示。
- 不要热链图片、字体、图标、脚本、样式、地图或任何其他运行时资源。将提供的六张生成图片下载到 public/images，并使用相对路径在本地提供所有内容。
- 不要使用 Unsplash、Pexels、Pixabay、Google Images、CC BY-NC 或 CC BY-SA 资源、占位图片服务、真实露营地摄影，或带有可读标牌、徽标、可识别人员、品牌车辆或设备、或可识别地标的图片。
- 不要使用真实露营地名称、徽标、口号、吉祥物、场地地图、推荐语、客人身份、预订记录或品牌调色板。默认和备用园区、SVG 地理信息以及所有场地和步道数据必须保持虚构。
- 不要复制网站代码、精确文案、标志性插图、受保护的步道艺术作品、自定义字体、独特图标体系或受限组件源码；使用所列的宽松许可包从头实现视觉系统和交互。
- 不要从 Google Fonts 或其他 CDN 加载字体，也不要使用商业字体；仅自托管指定的 OFL Fontsource 包。
- 不要在组件内硬编码依赖变量的文案。将所有文案、价格、政策、库存、链接、图片路径和联系方式保留在 src/content.ts 中，并在变量值变化时连贯地重写它们，包括备用园区类型、位置、受众和电子邮件。
- 不要将示例价格、可用性、设施、步道状况、政策或预订流程呈现为经过验证的实时服务；保留虚构园区和示例内容的说明。
- 不要收集身份证件、支付详情、精确家庭住址或其他敏感客人信息。不要持久化个人表单字段，并且绝不要显示声称请求已发送、场地已保留、门禁码已发放或预订已确认的成功消息。
- 不要使用裸目录链接、需要服务器回退的客户端路由、核心部分的外部导航、随机可用性，或没有重置的空状态。使用 ./index.html 锚点链接和确定性的基于本地偏移的可用性。
- 不要让微小的 SVG 场地成为选择住宿的唯一方式。提供可用键盘操作的 SVG 控件、等效的可访问列表、可见焦点、有用的空状态，以及无水平滚动的移动端布局。
- 不要添加滚动劫持、自定义光标、自动播放媒体、重型 3D、连续视差、动画可用性数字，或忽略 prefers-reduced-motion 的动画。
- 不要发布 source map、src/ 文件、远程依赖、控制台错误或超过 20 MB 的 dist/。生产站点必须在 1440×900 和 390×844 下正常工作，支持键盘导航、可访问的对话框语义、足够的对比度，并且控制台零错误。

---
— Prompt by VibeFather · https://vibefather.ai/t/campground-and-rv-park-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
