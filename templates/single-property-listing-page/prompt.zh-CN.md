> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 单一房源详情页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [PROPERTY_NAME] 构建一个原创的单页房源网站，该房源为位于 [PROPERTY_LOCATION] 的 [PROPERTY_TYPE]，由 [BRAND] 呈现，挂牌价为 [PRICE]。整合沉浸式五图房源画廊、精确的购房信息、原创交互式 SVG 户型图、示意性本地指南、实时按揭估算、开放参观 RSVP 以及直接联系经纪人。网站必须感觉像一个完整、正在运营的房源，同时保持完全静态，并如实说明表单仅在本地运行的行为。

- 受众：独立房地产经纪人、精品经纪公司、房产营销人员以及需要为一套住宅房源打造精致专属网站的个人卖家；访客是潜在购房者，正在将一次看房与其他房源进行比较。
- 目标：帮助购房者从视觉上理解房屋、评估实际成本与位置、选择开放参观场次，并联系 [AGENT_NAME]，而无需跳转到房源门户网站。
- 语调：低调奢华、精准、温暖且值得信赖。使用具体的房产细节和直白的解释，而非销售压力、夸张辞藻或泛泛的生活方式宣称。所有网站文案、标签、示例数据和替代文本均为美式英语。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource/cormorant-garamond（OFL）、@fontsource-variable/manrope（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 Vite 配置为 base: './' 和 build.sourcemap: false；npm run build 必须只将生产站点输出到 dist/。
  - 在 Tailwind 配置和全局 CSS 中定义所列调色板、Cormorant Garamond 展示字体、Manrope 正文字体、间距和关键帧；通过两个 Fontsource 包自托管字体。
  - 将每个标题、段落、房产事实、房间、设施、画廊说明、计算器默认值、开放参观选项和联系详情保留在 src/content.ts 中，由六个变量填充；当值变化时，重写所有依赖文案和派生值，而不是保留仅默认值的措辞。
  - 为画廊、灯箱、移动菜单、平面图选择、计算器、FAQ、RSVP 和咨询预览使用 React state。仅对明确标记的设备端 RSVP 草稿使用 localStorage；无网络持久化。
  - 将平面图和街区示意图创建为具有语义化 React 控件的原创内联 SVG；通过 npm 包使用 Lucide 图标，而不是绘制的品牌标记或外部 SVG 文件。
  - 在 1440×900 和 390×844 下使用响应式布局和无障碍控件，包括可见的焦点状态、键盘画廊和灯箱操作、带标签的输入以及减少动态效果的路径。

## 变量
- [BRAND] — 机构品牌（默认：“Juniper & Vale”）。虚构的精品机构名称，用于页眉、联系信息和页脚。
- [PROPERTY_NAME] — 房产名称（默认：“Alder House”）。为这套独立住宅虚构的简短名称。
- [PROPERTY_LOCATION] — 房产位置（默认：“18 Willow Lane, Austin, Texas”）。虚构的街道地址，含城市和州；请根据它改写社区细节。
- [PRICE] — 挂牌价（默认：“$1,285,000”）。要价，也是抵押贷款计算器的初始房产价值。
- [PROPERTY_TYPE] — 房产类型（默认：“Single-story courtyard home”）。简短的描述性住宅类别，用于事实信息和介绍。
- [AGENT_NAME] — 挂牌经纪人（默认：“Elena Marlow”）。虚构的挂牌经纪人，用于个人简介、RSVP 和咨询操作。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/single-property-listing-page（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的取值不同，请为它们改写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- Chalk `#F4F1EA` — 页面主背景与平静的留白
- Paper `#FFFEFA` — 表单、房间详情与计算器表面
- Ink `#1C2420` — 主文本与深色页脚背景
- Moss `#354A3D` — 主按钮、选中热点与关键强调
- Limestone `#D8D1C4` — 细线边框、平面图墙体与非活动轨道
- Clay `#A65338` — 小型状态强调与错误状态，绝不用于大面积填充

### 字体排印
- 展示标题、房源名称与大号价格：Cormorant Garamond（OFL），字重 400/500/600
- 正文、导航、表单、事实信息与控件：Manrope Variable（OFL），字重 400/500/600/700

### 布局与动效
- 间距：使用 8px 基础网格，12 列内容网格上限 1320px，桌面端 64px 边距、移动端 20px 边距。主要区块桌面端垂直内边距 112px、移动端 72px。阅读行宽保持在约 62 个字符，事实标签保持紧凑。
- 圆角：按钮、输入框与图片框架使用利落的 2px 圆角；999px 仅用于画廊计数器与小型状态胶囊。避免满页圆角卡片与厚重阴影。
- 动效：首屏照片以 700ms 交叉淡入，并伴随 1.02 到 1 的细微缩放落定；每 6 秒切换一次，悬停或聚焦时暂停，当设置 prefers-reduced-motion 时停止自动播放。
- 动效：主要区块标题与媒体使用 Motion 的 whileInView 只揭示一次，向上位移 24px，时长 600ms，错峰 80ms；无动画时内容保持可见，减少动效时移除变换。
- 动效：平面图选择与房间详情以 180ms 的填充与不透明度变化进行动画；绝不为等待动画而延迟实际选中状态。
- 动效：按钮、画廊控件、手风琴行与导航链接给予 160ms 的颜色或下划线反馈，无弹性运动或滚动劫持。
- 图像：使用六张生成并本地存储的图片，作为同一虚构当代浅色砖庭院住宅的一组连贯编辑拍摄：温暖的午后日光、白橡木、石灰岩、橄榄种植、克制的自然色彩与真实的建筑比例。五张房源照片锚定首屏、画廊与房间详情；一张虚构经纪人肖像仅出现在联系区块。首屏绝不使用该肖像。平面图、街区地图、图标与图表均以代码绘制。

## 页面与区块
### [PROPERTY_NAME] · [BRAND] (`index.html`)
1. **页头与全屏画廊** — 固定页头以纯文字字标形式展示 [BRAND]，包含 Residence、Floor Plan、Neighborhood 和 Estimate 的锚点链接，以及一个指向 #open-house 的 Book a Tour 按钮。主视觉眉题（eyebrow）为 Just listed · [PROPERTY_TYPE]。H1 为 [PROPERTY_NAME]，其后依次是 [PROPERTY_LOCATION]、[PRICE]，以及 4 beds · 3 baths · 2,680 sq ft。主 CTA Explore the Residence 指向 #residence；次 CTA View Open House 指向 #open-house。将全部五张房源图片用作幻灯片，配以简洁的房间说明文字、01 / 05 计数器、上一张和下一张按钮，以及五个带标签的缩略圆点。移动端菜单展示相同的锚点，且不遮挡画廊控件。
   布局：主视觉占满 100svh，桌面端最小高度 720px，移动端最小高度 680px。摄影图全出血显示，使用 object-fit: cover，并叠加一层克制的自下而上深色渐变，以保证白色文字可读。将标题和 CTA 放在左下角的内容网格中，画廊控件放在右下角，并在页头下方左上角放置一条细长的 For sale 状态标识。页头初始在摄影图上透明，滚动 24px 后获得 Chalk 背景、Ink 文字和细线边框。
   动效：按规格自动播放并交叉淡入淡出五张幻灯片；箭头和缩略圆点立即更新，画廊获得焦点时键盘左右方向键可用，页头背景变化时长为 180ms。
2. **关键信息** — 创建一个便于扫读的信息清单，包含 Offered at [PRICE]、4 bedrooms、3 bathrooms、2,680 sq ft interior、0.31-acre lot 和 Built 2019。添加一行简短说明：[PROPERTY_TYPE] with a private courtyard, two-car garage, and no HOA。使用精确标签，而非仅用图标。
   布局：紧接主视觉下方的一条六列横带，桌面端使用 Limestone 垂直分隔线，移动端为两列网格并带水平分隔线。价格占据第一个较宽的列；数字使用 Cormorant Garamond 40px，标签使用 Manrope 12px 大写并带字间距。
   动效：信息清单作为一个整体一次性显现；不使用数字递增动画。
3. **住宅故事** — 区块眉题为 The Residence。默认标题：Light, privacy, and room to breathe。默认正文：At [PROPERTY_NAME], pale brick, white oak, and deep-set windows soften the line between indoors and out. The main living spaces gather around a planted courtyard, giving every day a quiet center. 第二段说明厨房设有 10 英尺石灰岩中岛，主套房通向私人花园，灵活的第四间卧室可用作书房。添加六项具体设施：white-oak floors、custom limestone island、zoned HVAC、built-in storage、two-car garage 和 drought-tolerant landscaping。
   布局：双栏编辑式开篇，标题跨五列，正文跨四列。下方使用 living-room.webp 跨八列，紧凑的设施列表跨四列，并附一个小型平面图预告链接。保留充裕的留白，而不是把文案放进浮动卡片中。
   动效：标题、图片和设施按此顺序显现；可选的极轻微图片缩放沉降效果，在减少动态效果模式下禁用。
4. **编辑式画廊** — 标题：Every room, considered。展示 living-room.webp、kitchen.webp、primary-bedroom.webp 和 courtyard.webp，说明文字分别为 Living room · courtyard aspect、Kitchen · 10-foot limestone island、Primary suite · garden access 和 Courtyard · evening shade。每个图片按钮打开一个无障碍灯箱，其中包含全部五张房源照片、说明文字、计数器、上一张和下一张控件以及 Close；按 Escape 关闭，焦点返回触发它的缩略图。
   布局：使用非对称 12 列马赛克：一张宽 7 列的图片、一张高 5 列的图片，然后两张均衡的 6 列图片。移动端使用单列，统一 4:3 裁切，不使用水平轮播。灯箱为全屏 Ink 遮罩，图片居中收束显示，控件位于图片边界之外。
   动效：灯箱在 180ms 内淡入，幻灯片切换在 250ms 内交叉淡入淡出；打开时锁定焦点，阻止背景滚动，并遵循减少动态效果设置。
5. **交互式平面图** — 标题：Walk the plan before you visit。为所描述的单层住宅构建一张原创的、带尺寸标注的内联 SVG，而非描摹平面图。包含 Living Room 22 × 18 ft、Kitchen 16 × 14 ft、Primary Suite 15 × 13 ft、Bedroom Two 12 × 11 ft、Bedroom Three 12 × 11 ft、Bedroom Four / Study 11 × 10 ft、三间浴室、入口、双车位车库和 Courtyard 20 × 16 ft。选择房间时更新相邻的详情面板，显示其尺寸、一条具体的饰面说明，以及可用的相关房源图片。默认选中 Living Room，配 white-oak floors 和面向庭院的玻璃墙；Kitchen 设有 10-foot limestone island；Primary Suite 有花园通道和步入式衣橱。为屏幕阅读器和移动端用户提供相同的房间选项，以语义化按钮列表呈现。
   布局：区块背景为 Paper。桌面端将 SVG 放在八列中，粘性房间详情面板放在四列中；移动端在房间按钮和详情面板上方堆叠一张清晰可读的 4:3 平面图。使用 2px Ink 墙体、Limestone 填充、SVG 内的房间标签，以及具有无障碍对比度的 Moss 选中填充。添加一个小型指北针和标签 Illustrative plan · not to scale。
   动效：选中的房间获得 Moss 填充，并有一个小圆点脉冲一次；详情文字在 180ms 内交叉淡入淡出。键盘焦点可见，选择绝不依赖悬停。
6. **社区指南** — 眉题 Around [PROPERTY_NAME]；标题：Daily essentials, a little closer。对于默认的 Austin 房源，虚构并列出 Juniper Coffee · 4-minute walk、Alder Grove Market · 6-minute walk、Willow Creek Trail · 8-minute bike ride 和 Eastside Arts Park · 5-minute drive。添加一段简短文字，介绍安静的住宅街道、早晨咖啡和日常购物便利，但不要虚构学校评分或投资声明。当 [PROPERTY_LOCATION] 变化时，重写地点名称和出行说明。
   布局：将五列的设施清单与七列的原创示意 SVG 地图配对。地图使用抽象的地方街道、一个 Moss 房源图钉、四个带编号的设施图钉和一个小型图例；它不是地理或导航服务。在清单中选择设施时，高亮其图钉和说明。
   动效：设施选择使用 160ms 的图钉填充和下划线变化。不要加载地图瓦片，也不要持续动画化街道路径。
7. **按揭估算器** — 标题：Plan the monthly picture。房屋价格初始化为 [PRICE]，首付为 20%，利率为 6.25%，贷款期限为 30 年，年度房产税率 1.6%，年度房屋保险 $2,400。为首付和利率提供同步的数值和范围控件，提供 15 / 20 / 30 年期限选择，以及可编辑的税费和保险金额。使用标准固定利率摊还公式计算本金和利息，然后加上每月税费和保险得出总额。显示标注清晰的分项：本金和利息、房产税、保险，以及贷款金额和首付金额。始终显示：Illustrative estimate only, not a loan offer. Excludes PMI, HOA dues, and other costs.
   布局：使用 Paper 区块，五列控制面板和七列结果面板。结果包含一个大的每月总额、三行明细，以及一个无障碍的 CSS conic-gradient 或 SVG 环形图，其分段与分项对应。移动端将控件堆叠在结果之前，并保持输入框至少 44px 高。所有更新均在本地完成，不发起 API 请求。
   动效：数字和图表在输入有效时立即更新；仅对变化的总计使用 120ms 的轻微高亮。对零值、空值和无效值使用内联消息处理，而不是 NaN 或损坏的图表。
8. **开放日 RSVP** — 区块 id 为 open-house。眉题 See it in person；标题：Choose your open house。提供 Saturday · 1:00–3:00 PM、Sunday · 11:00 AM–1:00 PM 和 Private tour · request a time。RSVP 表单要求填写场次、姓名、邮箱和 1 至 4 人的随行人数，并带内联验证。提交时，将明确标注的 RSVP 草稿保存到 localStorage，并显示：Your RSVP draft is saved on this device. Email [AGENT_NAME] to confirm your visit. 提供一个 Email to Confirm 按钮，打开预填的 mailto 草稿，以及一个 Start Over 操作，清除本地草稿；绝不声称请求已发送。包含直接电话和邮箱备选联系方式。
   布局：一个 Moss 区块配白色文字，左侧包含三个紧凑的场次选项，右侧为 Paper 表单面板。移动端将场次选项水平堆叠（无需滚动），然后是表单。通过本地草稿在刷新后保留已输入的值，并通过 aria-live 区域暴露状态消息。
   动效：场次选择和验证反馈使用即时颜色变化；确认信息在 180ms 内淡入，不使用彩带或虚假的成功动画。
9. **Agent contact** — 在眉题 Your Listing Agent、H2 [AGENT_NAME] 和角色 Principal Broker · [BRAND] 旁边使用 agent-portrait.webp。默认简介：Elena combines careful property presentation with clear, practical guidance from first tour to final offer. She knows the craftsmanship and small details that make [PROPERTY_NAME] easy to call home. 为另一位经纪人的价值重写简介。显示一个由 [BRAND] 派生的虚构 .example 邮箱，默认 hello@juniperandvale.example，以及虚构电话 (512) 555-0147，并带有 Call 和 Email 操作。添加一个简短的咨询表单，包含姓名、邮箱和留言；提交后打开本地预览，带有 Copy Inquiry 和 Email Agent 操作，而不是发送任何内容。
   布局：使用 12 列网格，其中 4 列 3:4 肖像、3 列经纪人详情和 5 列咨询表单。在移动端保持肖像自然且不裁切面部。咨询预览仅在输入有效后替换表单，并包含 Edit 操作。
   动效：Copy Inquiry 将其标签改为 Copied 持续 1.5 秒，并礼貌地播报该状态；没有其他装饰性动效。
10. **Property notes and footer** — 添加四个可访问的手风琴问题：What is included with the home? 回答厨房电器、洗衣机和固定窗遮阳帘均包含在内；Is there an HOA? 回答 No HOA dues for this listing；Can I arrange a private tour? 回答 Yes, select Private tour or contact [AGENT_NAME] directly；How accurate is the mortgage estimate? 回答其为示意性内容，买家应向其服务提供商确认税费、保险和融资。页脚重复 [BRAND]、[PROPERTY_NAME]、[PRICE]、锚点导航、经纪人直接联系方式和一行小字 Independent fictional listing presentation。以不显眼的方式包含可选的 [CREDIT] 链接。
   布局：FAQ 行横跨中间八列，带有细线分隔线和展开时旋转的加号图标。页脚为 Ink 配 Chalk 文本，桌面端三列布局，移动端堆叠布局。一次只需打开一个 FAQ，但所有答案仍可供键盘用户访问。
   动效：手风琴高度和透明度在 180ms 内动画过渡，且不向辅助技术隐藏内容；减少动效时展开立即完成。

## 资源

- 图片：将 https://media.vibefather.ai/assets/ebbe606a-6b91-4d3d-9356-a59b9b089526/hero-exterior.webp 下载到 public/images/hero-exterior.webp；alt：暖色午后光线中，橄榄树环绕的浅色砖砌庭院住宅；用作 hero 幻灯片 1 和外观灯箱图框。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/ebbe606a-6b91-4d3d-9356-a59b9b089526/living-room.webp 下载到 public/images/living-room.webp；alt：白橡木客厅，通向绿植庭院；用作 hero 幻灯片 2、住宅图片、画廊图片和 Living Room 详情图。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/ebbe606a-6b91-4d3d-9356-a59b9b089526/kitchen.webp 下载到 public/images/kitchen.webp；alt：温暖现代厨房，配有长条石灰岩岛台；用作 hero 幻灯片 3、画廊图片和 Kitchen 详情图。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/ebbe606a-6b91-4d3d-9356-a59b9b089526/primary-bedroom.webp 下载到 public/images/primary-bedroom.webp；alt：宁静主卧，配有白橡木细木作和花园门；用作 hero 幻灯片 4、画廊图片和 Primary Suite 详情图。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/ebbe606a-6b91-4d3d-9356-a59b9b089526/courtyard.webp 下载到 public/images/courtyard.webp；alt：私密石灰岩庭院，有橄榄树和柔和午后光影；用作 hero 幻灯片 5 和画廊图片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/ebbe606a-6b91-4d3d-9356-a59b9b089526/agent-portrait.webp 下载到 public/images/agent-portrait.webp；alt：虚构房源经纪人站在明亮的现代住宅内；仅用于经纪人联系区块。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图标：箭头、画廊控件、菜单、关闭、电话、邮件、勾选、复制和加号图标使用 lucide-react；不使用品牌图标。该包已本地安装，并在 ISC 下列出。
- 字体：使用 @fontsource/cormorant-garamond 和 @fontsource-variable/manrope 自托管 Cormorant Garamond 和 Manrope Variable，二者均为 OFL；在 ASSETS.md 中列出已安装的字体文件和包。
- 图片：直接以原创内联 SVG 或 CSS 创建户型图、社区示意图、房源图钉、配套设施图钉和抵押贷款图表；不使用外部地图瓦片、图表图片或占位服务。在 ASSETS.md 中记录全部六张生成图片、Lucide 和 Fontsource 包及其来源或生成署名与许可证。

## 不要做
- 不要添加后端、无服务器函数、API 路由、数据库、身份验证、分析、第三方 API、地图瓦片、地理编码或任何网络表单提交。
- 不要声称 RSVP 或咨询已发送；将 RSVP 草稿保留在设备上，并使用明确的文案或 mailto 操作进行联系。
- 不要将抵押贷款结果呈现为报价、财务建议、可负担性决定或贷款要约；保留示例性估算免责声明和输入验证。
- 不要使用真实机构品牌、真实代理人身份、真实房源文案、真实房产地址、可识别的房产或地标、受版权保护的房源照片、徽标或品牌图标。
- 不要使用商业字体、fonts.googleapis.com、fonts.gstatic.com、Adobe Fonts、图标 CDN、库存照片服务、热链接资源、占位图服务或具有限制性许可证的资源。
- 不要在首屏使用代理人肖像、可识别的真实人物、名人肖像或姓名首字母来代替提供的虚构代理人肖像。
- 不要复制或描摹现有建筑平面图；绘制指定的原创 SVG，并标注其为示意性且不按比例。
- 不要在 src/content.ts 之外硬编码仅默认值的文案；当变量变化时，重新生成房产名称、位置特定文案、联系方式、价格和所有派生值。
- 不要添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图工作、关键词堆砌的标题或标题层级说明；一个普通标题和 favicon 就足够了。
- 不要在站点内提及 VibeFather，除了可选的 [CREDIT] 页脚链接，并且不要添加日期、市场声明、学校评分或投资回报承诺。
- 不要使用裸目录链接、损坏的锚点、绝对构建资源路径、CDN 脚本或样式、源映射，或将 src/ 复制到 dist/；保持 dist/ 在 20 MB 以下并使用 Vite base './'。
- 不要在动画后隐藏重要内容、在减少动态效果下自动播放、滚动劫持、依赖悬停进行房间选择，或在 1440×900 或 390×844 下出现控制台错误。

---
— Prompt by VibeFather · https://vibefather.ai/t/single-property-listing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
