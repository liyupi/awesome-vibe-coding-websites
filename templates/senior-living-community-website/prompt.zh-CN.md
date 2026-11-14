> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 老年生活社区网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个原创的单页网站，[BRAND] 是位于 [LOCATION] 的 [COMMUNITY_TYPE]。该网站服务于 [AUDIENCE]，采用大号易读字体、常驻的文字大小控件、独立生活、辅助生活和记忆照护的清晰对比、可筛选的日常生活图库、示例餐饮菜单、可选户型图，以及客户端导览请求。使用下方默认英文文案，并在变量值变化时重写每一个品牌特定、地点特定、受众特定和照护特定的细节。

- 受众：正在为自己研究下一个住所的老年人，以及与他们一起比较社区的成年子女、伴侣或照护者。次要受众是需要一个无障碍、可信赖的营销和导览请求网站的养老社区运营者。
- 目标：让照护选项和日常生活易于理解，让访客按自己的阅读大小和节奏浏览，回答关于餐食和住所的实际问题，并提供清晰的导览请求，不依赖后端服务，也不做虚假的提交声明。
- 语气：温暖、平静、尊重且具体。把住户当作独立的成年人来对话，绝不当作病人或孩子。使用平实的美国英语，给出具体的日常安排和包含项，不做基于恐惧的销售，不做临床承诺，不做夸大宣传。

## 技术栈
- 框架：Vite 6 + React 19 + TypeScript
- 样式：Tailwind CSS 4
- 库：react（MIT）、react-dom（MIT）、tailwindcss（MIT）、@tailwindcss/vite（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource/atkinson-hyperlegible（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - 在 vite.config.ts 中配置 base './'、build.sourcemap false，以及 React 和 Tailwind 的 Vite 插件。生产入口为 index.html，所有资源 URL 必须为相对路径。
  - 使用 Tailwind CSS 4，并在 src/index.css 中配置一个小型主题，用于精确的颜色、字体族、焦点环、文本尺寸变体、关键帧、打印规则和减少动态效果覆盖。将可复用的界面组件放在 src/components 中。
  - 将所有变量默认值、标题、段落、导航标签、护理描述、对比值、画廊说明、菜单项、平面图详情、评价、常见问题、联系方式和资源路径放在 src/content.ts 中。变量变更时重写默认特定内容；绝不要遗留之前的品牌、位置、受众、社区类型或电话号码。
  - 将共享状态放在 src/App.tsx 中。在 React 中实现文本尺寸偏好、画廊筛选、灯箱状态、护理和餐饮标签页、平面图选择、移动端导航以及参观请求草稿。仅将文本尺寸偏好和本地参观请求持久化到 localStorage，并在存储不可用时提供安全回退。
  - 在 src/main.tsx 中导入自托管的 Fraunces Variable 和 Atkinson Hyperlegible 400/700。通过 motion/react 使用 Motion for React，并使用 Lucide React 作为界面图标；不要加载任何 CDN 资源。
  - 从圆角建筑拱门和两个简单的常绿叶片形状创建原创 favicon。不要模仿真实社区标志或使用可识别的设施徽章。
  - 使用语义化地标、跳过链接、带标签的控件、可键盘操作的标签页和对话框、可见焦点以及 aria-live 确认。所有点击目标至少为 44×44px，主要表单控件高度至少为 52px。

## 变量
- [BRAND] — 社区名称（默认："Avenbrook Community"）。一个虚构的养老社区名称，全站通用。
- [LOCATION] — 社区位置（默认："Asheville, North Carolina"）。一个城市和州或地区；请相应调整地址和本地引用。
- [COMMUNITY_TYPE] — 社区类型（默认："full-service senior living community"）。一个简短的小写短语，描述社区模式。
- [AUDIENCE] — 主要受众（默认："older adults and their families"）。一个简短的小写短语，描述社区欢迎的人群。
- [PHONE] — 参观电话（默认："(828) 555-0146"）。一个显示用和电话链接用的号码；请使用虚构的示例联系方式。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/senior-living-community-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 象牙白（Ivory）`#F7F3EA` — 主页面画布和温暖的留白空间。
- 纸白（Paper）`#FFFDF8` — 页眉、卡片、表单控件、菜单和灯箱表面。
- 常青绿（Evergreen）`#183C34` — 主文本、深色按钮、页脚、激活控件和粗图标描边。
- 柔松绿（Soft Pine）`#52665D` — 16px 或更大的次要文案；切勿用于浅淡的微型文字。
- 鼠尾草绿（Sage）`#DEE7D9` — 选中的标签页、护理高亮、日程行和柔和信息面板。
- 陶土红（Clay）`#984B34` — 小型编辑性点缀、下划线和次要强调；仅在对比度达标处与 Ivory 或 Paper 文本搭配使用。
- 蜂蜜黄（Honey）`#E6B65C` — 激活标记和 Evergreen 文本后方的小型装饰性高亮，切勿用作 Ivory 背景上的正文文本。
- 亚麻线色（Linen Line）`#CBD1C5` — 一像素边框、输入框轮廓、对比分隔线和分隔符。

### 字体排印
- 展示文字、章节标题和大型引文：Fraunces Variable（OFL），字重 500/600/700
- 正文、导航、控件、表格和数字：Atkinson Hyperlegible（OFL），字重 400/700

### 布局与动效
- 间距：使用居中的 1200px 最大容器，桌面端 32px 边距，移动端 20px 边距。基于 8px 基础网格构建。桌面端区块垂直内边距为 96px，移动端区块为 64px。首屏顶部内边距 48px、底部 64px。卡片内边距 24–32px，表单行间距 20px，正文最大行宽 68 个字符。
- 圆角：首屏和画廊摄影使用 28px 圆角，主要面板和对话框使用 20px，卡片和输入框使用 14px，仅文字大小、筛选和时间段控件使用全圆角胶囊形。使用 1px Linen Line 边框和非常克制的阴影，而不是让每个区块都悬浮起来。
- 动效：主要区块使用 Motion 的 whileInView 一次性揭示：不透明度从 0 到 1，y 从 14 到 0，持续 420ms，直接子元素错开 60ms，视口触发量 0.16。
- 动效：标签页、画廊筛选、移动端导航、手风琴高度、按钮和焦点状态使用 180–220ms 过渡；切勿因动画完成而延迟阅读。
- 动效：画廊灯箱以 180ms 不透明度和 8px 缩放过渡打开；支持 Escape、左右方向键、焦点捕获，并将焦点恢复到原始缩略图。
- 动效：选中的护理详情、餐饮菜单和平面图绘制以 180ms 交叉淡入淡出，同时保持面板尺寸足够稳定以避免布局跳动。
- 动效：启用 prefers-reduced-motion 时，移除变换和平滑滚动，立即显示最终状态，并保持所有交互功能正常。
- 图像：使用六张专为此模板生成、协调一致的写实编辑风格图片。共享外观为柔和的上午晚些时候光线、柔和的鼠尾草绿、奶油色、蜂蜜橡木色和陶土色，真实的住宅材料，微妙的 35mm 胶片颗粒，以及平静的纪实构图。通过空间、活动和餐食展示一个运营中的社区，而不是机构走廊或摆拍的临床场景。人物为虚构，年龄和族裔多样，仅从背后或远处拍摄，无可辨认的面部。首屏是一个宽敞的庭院场景，绝不是面部特写。将每张图片下载到本地，并在 ASSETS.md 中列出每张图片及提供的生成资产署名。不要添加其他照片、徽标、可读标牌、水印或品牌物品。

## 页面与区块
### [BRAND] — [LOCATION] 的老年生活（`index.html`）
1. **无障碍页头与照片主视觉** — 以一个“跳转到主要内容”链接开始，该链接在获得焦点时可见。创建一个 76px 的粘性 Paper 页头，底部带 Linen Line 边框。左侧：原始的拱形与叶片 favicon 以及使用 Atkinson Hyperlegible 700 字体的 [BRAND]。桌面端居中锚点：护理选项、日常生活、餐饮、居所、常见问题。右侧：一个带 Lucide CaseSensitive 图标的文字大小按钮，可见状态为“标准”或“大号”，以及一个 Evergreen 的“预约参观”按钮。文字大小按钮切换根元素的 data-text-size 属性和 aria-pressed，将偏好保存在本地，并将正文从 18px 提升到 20px，次要文案从 16px 提升到 18px，控件标签提升 2px，且不出现裁切或页面横向溢出。移动端显示品牌、文字大小和菜单；将导航、[PHONE] 和“预约参观”放入展开菜单中。主视觉眉题：[COMMUNITY_TYPE] · [LOCATION]。H1 使用 Fraunces 600：熟悉的节奏。在重要时刻给予支持。辅助文案：[BRAND] 以贴心的护理、美味的餐食，以及围绕您所喜爱之事安排的日子，欢迎 [AUDIENCE]。主 CTA：探索护理选项。次 CTA：预约参观。添加一个低调的电话链接：有疑问？请致电 [PHONE]。使用 hero-courtyard.webp，替代文本：一个温馨住宅社区中有顶棚的花园步道和庭院。在左下方添加一个小型 Paper 说明卡片：一个为悠闲清晨而设的庭院。
   布局：主视觉为 12 列网格，5 列用于文案，7 列用于照片，列间距 56px，主视觉主体最小高度 570px。H1 为 clamp(48px, 5vw, 72px)，行高 1.02，字距 -0.025em。正文为 19px，行高 1.6。图片填充 4:3 的桌面框架，使用 object-fit cover 和 28px 圆角；说明卡片宽 240px，偏移 20px。CTA 并排排列，最小高度 52px。在 390px 时，文案堆叠在 4:3 照片之前，使用 43px 的 H1，全宽 CTA，并将说明卡片静态放置在图片下方而非叠加。大号文字模式必须自然换行，不得隐藏导航或 CTA。
   动效：眉题、标题、文案和操作按钮以 60ms 的错峰淡入。照片在 600ms 内从 1.02 缩放到 1。锚点导航平滑滚动，scroll-margin-top 为 96px；在减少动态效果模式下使用即时滚动。
2. **日常保障条** — 添加三条简洁的保障说明，配以 Lucide Utensils、Sparkles 和 Clock3 图标：每日准备三餐；每周家政和布草服务；团队成员全天候在场。对应的辅助说明分别为：每餐都有多种选择。让居家生活轻松易管理。在需求变化时获得熟悉的响应。
   布局：一个全宽 Evergreen 色带，在标准容器内分为三个等宽列，垂直内边距 28px，Paper 文字，桌面端有细微的垂直分隔线。每一项为一个图标加两行文本组。移动端堆叠为三行，间距 16px，并移除分隔线。
   动效：进入时一次 400ms 的显现；无循环徽章或计数器。
3. **欢迎与决策指南** — 锚点为 about。眉题：从你的一天开始，而不是从清单开始。H2：家应该仍然像你自己的家。文案：选择你想保留的日常习惯，以及你宁愿交出去的事务。在 [BRAND]，私人公寓、共享餐食和熟悉的每周节奏可以与恰到好处的支持并存。添加三个通俗语言的决策提示，配以 Lucide Check 图标：想要摆脱做饭和房屋维护？从独立生活开始。穿衣、用药提醒或行动方面的帮助会让日子更轻松吗？探索辅助生活。记忆变化是否让熟悉的日常变得更难应对？了解我们的记忆护理社区。结尾说明：你不需要在参观之前做决定。参观是提问的机会，而不是承诺。
   布局：两栏区块：5 列用于粘性眉题、H2 和文案；7 列用于三张 Paper 决策卡片，以 16px 间距堆叠。每张卡片有一个小型 Sage 图标区域和 24px 内边距。移动端使用单列并移除粘性定位。
   动效：卡片以 60ms 错峰显现，触摸设备上无悬停抬升效果。
4. **护理级别标签页与对比** — 锚点为 care。眉题：适合个人的护理。H2：并排比较支持服务。引言：这些描述只是起点。真正的护理计划应与个人及其家人讨论。构建三个键盘可操作的标签页。独立生活面板标题：你自己的节奏，更少的家务。文案：私人公寓、餐饮、活动、家政和维护，适合想要社区生活但不想承担家庭维护的人。最适合：独立的日常节奏，可选社交和餐饮支持。辅助生活面板标题：日常事务中的稳定帮手。文案：同样的住宅舒适，加上穿衣、沐浴、行动和用药提醒方面的个性化帮助。最适合：希望继续参与日常生活并获得持续就近支持的人。记忆护理面板标题：熟悉的提示和安全的環境。文案：更小的社区、一致的日常节奏，以及为记忆丧失者设计的有目的的活动。最适合：受益于安全环境和更有结构指导的人。面板下方提供一个对比表格，列为独立生活、辅助生活、记忆护理，行为：厨师准备的餐食 — 包含 / 包含 / 包含；每周家政 — 包含 / 包含 / 包含；个人护理计划 — 可选 / 包含 / 包含；用药提醒 — 可选 / 包含 / 包含；安全庭院通道 — 开放 / 开放 / 安全。下方 CTA：讨论你的选项，滚动到参观表单。
   布局：区块位于 Paper 上。三个等宽标签按钮组成分段行，最小高度 48px；选中的标签使用 Evergreen 配 Paper 文字。活动详情为一个 20px 圆角的 Sage 面板，分为 7 列文案和 5 列，包含“最适合”和一个小的 Lucide Compass 图标。对比表格显示在下方，桌面端首列粘性，并使用清晰的“包含/可选”标签而非仅用勾选编码。在 390px 时，标签按钮垂直堆叠，面板显示为单列，并将表格放入其自己的带标签水平滚动区域，附有可见的“滚动以比较”提示；页面本身绝不能溢出。
   动效：活动面板在 180ms 内交叉淡入淡出。仅在用户激活标签时移动焦点；方向键在标签之间移动。减少动态效果时显示即时变化。
5. **日常生活画廊与日程** — 锚点为 daily-life。眉题：好好度过的平凡一天。H2：看看这一天能带你去哪里。引言：浏览社区中的一些示例时刻。筛选：全部 5、活动 3、餐饮 1、空间 1。画廊项目及替代文本：garden-club.webp，活动，居民们在阳光露台上一起给香草换盆，说明：露台上的园艺俱乐部；art-workshop.webp，活动，一张开放的艺术桌，居民们画着植物形状，说明：开放艺术桌；dining-room.webp，餐饮，一间明亮的餐厅，有舒适的椅子和时令午餐，说明：花园房间的午餐；apartment-interior.webp，空间，一间阳光充足的开间公寓，有清晰的行走路径，说明：放喜爱之物的空间；music-social.webp，活动，居民们聆听原声音乐社交活动，说明：下午音乐社交。每个缩略图打开一个灯箱，包含相同图片、描述性替代文本、说明、计数器、上一张和下一张控件以及关闭。画廊下方添加 [BRAND] 的示例一天：上午 7:30 晨间伸展；上午 9:00 园艺俱乐部；中午 12:00 午餐；下午 2:00 艺术工作坊；下午 4:30 音乐社交；下午 6:00 晚餐。注意：活动仅为示意；个人日常始终优先。
   布局：使用 12 列类似瀑布流但确定性的网格：花园图片跨 7 列 2 行，艺术跨 5 列，餐饮跨 5 列，公寓跨 4 列，音乐跨 8 列。所有图片框架在其网格分配内保持 4:3，使用 object-fit cover；说明放在图片下方的 Paper 条上，绝不覆盖人脸。筛选器为网格上方 44px 高的可换行胶囊按钮。示例日程是一个 Paper 面板，包含六行两列的时间/活动行和 Linen Line 分隔线。在 390px 时，每行一张图片，无水平轮播，并将时间和活动保持在两个可读列中。
   动效：筛选时剩余卡片在 180ms 内交叉淡入并轻微缩放，不会意外重新排序。灯箱使用指定的无障碍对话框行为。无自动播放或无限动态。
6. **餐饮与示例菜单** — 锚点设为 dining。眉题：THE TABLE IS A GATHERING PLACE。H2：Come hungry. Stay for conversation。文案：Meals at [BRAND] balance familiar favorites with a seasonal choice, served in a room where nobody needs to rush。添加三个标签页：Breakfast、Lunch（初始选中）、Dinner。早餐项：Cinnamon oatmeal with stewed apples；Vegetable omelet with whole-grain toast；Greek yogurt with berries and walnuts。午餐项：Herb-roasted chicken with carrots and mashed potatoes；Butternut squash soup with a garden salad；Lemon rice bowl with chickpeas and roasted vegetables。晚餐项：Baked salmon with dill and green beans；Turkey meatloaf with sweet potato and peas；Mushroom risotto with roasted tomatoes。将 rice bowl 和 mushroom risotto 标记为 Vegetarian。包含一个 Print sample menu 按钮，使用 window.print 和针对当前活动菜单的打印样式表。注意：This is a sample menu. Ingredients and dietary needs should be reviewed individually with the dining team。
   布局：两个等宽列，间距 56px。左侧在 4:3 框架中使用 dining-room.webp，并配一个小图注：A seat with time to enjoy it。右侧包含标题、文案、三个大标签页，以及一个 Paper 菜单面板，内含三行，菜品名称为 18px 700，Vegetarian 标签使用 Sage 配 Evergreen 文字。移动端将图片放在介绍之后、标签页之前；打印按钮保持全宽。
   动效：菜单切换使用短暂的透明度过渡；不翻转卡片，不自动切换餐次标签页。
7. **居所与可选户型图** — 锚点设为 residences。眉题：SPACE TO MAKE YOUR OWN。H2：Choose the layout that fits your life。介绍：Every sample residence includes a private bathroom, step-free shower, wide doorways, individual climate control, and an emergency call button。创建三张选择卡：Studio — 420 sq ft，from $3,300/month；One bedroom — 600 sq ft，from $4,100/month；Companion suite — 500 sq ft，from $3,000/month。选择其中一项会更新一个原创代码绘制的 SVG 户型图和详情。Studio 区域：sleeping/living 15' × 13'、kitchenette、accessible bath、entry closet。One bedroom 区域：bedroom 12' × 12'、living 14' × 12'、kitchenette、accessible bath、two closets。Companion suite 区域：two sleeping areas each 10' × 11'、shared sitting area、accessible bath、two closets。在 Paper 上用简洁的 Evergreen 线条绘制墙体、带开启弧线的门、固定设施、家具、标签和尺寸；选中区域使用 Sage，Honey 仅用于小标记。添加一个 Print floor plan 按钮和文字：Monthly rates are illustrative for this invented community and include dining, housekeeping, activities, and utilities. Care pricing is discussed separately。将 apartment-interior.webp 放在介绍旁边，alt：A furnished studio apartment with a bed, armchair, and clear walking paths。
   布局：以 5 列照片和 7 列标题/介绍开头。下方使用 4 列堆叠的三张选择卡和 8 列 Paper 户型图面板。选择卡显示名称、面积、价格和 ChevronRight；选中的卡片有 2px Evergreen 边框和 Sage 背景。SVG 使用一致的 4:3 viewBox，并带有供屏幕阅读器使用的标题和描述，下方还有每个区域的文本列表。在 390px 时使用单列，选择卡全宽，并让 SVG 保持在视口内且不出现水平滚动。
   动效：户型图和详情以 180ms 交叉淡入淡出，并高亮选中区域，但不对尺寸做动画。减少动态效果时立即切换。
8. **家庭与住户留言** — 眉题：WHAT FAMILIES NOTICE。H2：The little details become the important ones。展示三条虚构引语，不使用肖像、评分或外部评价徽章。引语 1：Dad used the menu and floor-plan pages before our visit, so he arrived with his own questions. That made the tour feel like his decision. — Nadia P., daughter of a resident。引语 2：I brought my reading chair and my Friday routine. The difference is that I no longer have to plan every dinner or repair. — Robert M., assisted living resident。引语 3：The care comparison gave us a way to talk about help without making the whole conversation about loss. — Elena and Mark S., family visitors。页脚注释：Names and quotations are invented sample content for this demo。
   布局：一个 Ivory 区块，标题左对齐，下方三张等宽 Paper 卡片，间距 24px，内边距 28px。引语文本使用 Fraunces 500、23px、1.4 行高；署名使用 Atkinson Hyperlegible 16px。移动端将卡片垂直堆叠，绝不使用裁切的轮播。
   动效：仅使用单次交错显现；不自动轮播推荐语。
9. **常见问题** — 锚点设为 faq。眉题：GOOD QUESTIONS ARE WELCOME。H2：Before you come for a look around。使用六个无障碍手风琴项，第一项初始展开。Do I need to know which care level I want? — No. Bring your questions and daily routine. The care comparison is only a starting point for a longer conversation。Can residents bring their own furniture? — Yes. A favorite chair, photographs, and familiar linens help a residence feel personal; the tour is a good time to discuss measurements。What does the monthly rate include? — The sample rates include the residence, dining, housekeeping, activities, maintenance, and utilities. Personal care is priced separately after an assessment。How are dietary needs handled? — Menus offer more than one choice, and ingredients or texture needs should be reviewed with the dining team before move-in。How long does a tour take? — Allow about 45 minutes for a residence, shared spaces, and time for questions. You are welcome to bring a family member。Is a tour a commitment? — No. Visiting is simply a way to see the spaces, meet people, and decide what you want to ask next。
   布局：两列区块，4 列标题和 8 列手风琴。每个问题是全宽、最小 52px 的按钮，带 Plus/Minus 图标、aria-expanded 和 Linen Line 底部边框。答案使用 Atkinson Hyperlegible 18px、1.65 行高。移动端使用单列，并让答案保持完整可读宽度。
   动效：答案高度和透明度以 200ms 动画过渡，展开时 Plus 旋转 45 度。减少动态效果时立即完成。
10. **客户端参观请求** — 锚点设为 tour。眉题：COME AS YOU ARE。H2：Walk in as a visitor. Leave with a clearer plan。文案：Choose a day and time, tell us who is coming, and bring the questions that matter to you. You do not need to bring paperwork。表单字段：Full name 必填、Email 必填、Phone 可选、Who is the tour for? 下拉选择，选项为 Myself、Parent、Partner、Someone else、Care interest 下拉选择，选项为 Not sure yet、Independent living、Assisted living、Memory care、Preferred date 必填，使用原生日期输入、Preferred time 必填，带三个单选样式按钮 10:00 AM、1:00 PM、4:00 PM，以及 Questions or accessibility needs 可选文本域。包含内联验证、autocomplete 属性、持久标签和 aria-live 错误摘要。提交按钮：Save tour request。表单旁显示 Visiting details：Tours Monday–Saturday, 9:00 AM–5:00 PM；Allow about 45 minutes；[LOCATION]；[PHONE]。由于这是静态演示，有效提交会将请求和所选值保存到 localStorage，并用页内确认替换表单：Your tour request is saved on this device. No message was sent. Your requested time is [chosen date] at [chosen time]. To talk with the sample community now, call [PHONE]。包含 Start a new request 以清空表单。绝不声称协调员已收到或确认请求。
   布局：在 Evergreen 区块背景上放置一个 Paper 20px 圆角面板。内部使用 7 列放表单，5 列放 Ivory 参观详情卡。姓名/邮箱和电话/日期使用两列字段行；其余字段跨全宽。输入框使用 Paper 背景、1px Linen Line 边框、最小高度 52px，以及 3px Honey/Evergreen 聚焦处理。时间选项是三个等宽大按钮。在 390px 时，将参观详情堆叠在表单之前，每行一个字段，并让确认信息完全处于正常文档流中。
   动效：显现一次，然后用 200ms 淡入淡出将表单替换为确认信息。提交后聚焦确认标题。不显示加载指示器，不模拟网络活动。
11. **页脚** — 使用 Evergreen 页脚，包含 [BRAND]、一行 A [COMMUNITY_TYPE] for [AUDIENCE]，以及锚点链接 Care options、Daily life、Dining、Residences、FAQ 和 Schedule a tour。显示 [PHONE]、[LOCATION] 和 Tours Monday–Saturday, 9:00 AM–5:00 PM。底部行：Illustrative rates, menus, availability, and sample business content。以不显眼的方式包含可选的 [CREDIT] 链接；不要在网站其他地方提及 VibeFather。
   布局：标准容器，在 3 列导航、到访与联系网格上方放置一行大号 Fraunces 品牌文字。桌面端使用 56px 垂直内边距，移动端使用 40px。小屏幕上堆叠排列，链接为 18px，点击目标至少 44px。Paper 文本与 Sage 次级文本保持强对比。
动效：无需入场显现；仅在链接上使用清晰的下划线与颜色过渡。

## 资源

- 图片：将 https://media.vibefather.ai/assets/e18d2a62-de8e-4dac-be66-56a4244f8108/hero-courtyard.webp 下载到 public/images/hero-courtyard.webp。替代文本：一个温馨的住宅社区中带顶棚的花园步道和庭院。用作大型主视觉照片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录路径、确切源 URL、作者以及此致谢信息。
- 图片：将 https://media.vibefather.ai/assets/e18d2a62-de8e-4dac-be66-56a4244f8108/garden-club.webp 下载到 public/images/garden-club.webp。替代文本：居民们在阳光明媚的露台上一起给香草上盆。在日常生活画廊中首先使用。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录。
- 图片：将 https://media.vibefather.ai/assets/e18d2a62-de8e-4dac-be66-56a4244f8108/art-workshop.webp 下载到 public/images/art-workshop.webp。替代文本：一张开放式艺术桌，居民们正在绘制植物形状。用于日常生活画廊。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录。
- 图片：将 https://media.vibefather.ai/assets/e18d2a62-de8e-4dac-be66-56a4244f8108/dining-room.webp 下载到 public/images/dining-room.webp。替代文本：一间明亮的餐厅，配有舒适的椅子和时令午餐。用于餐饮部分和 Dining 画廊筛选。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录。
- 图片：将 https://media.vibefather.ai/assets/e18d2a62-de8e-4dac-be66-56a4244f8108/apartment-interior.webp 下载到 public/images/apartment-interior.webp。替代文本：一间带家具的单间公寓，配有床、扶手椅和清晰的行走通道。用于住宅介绍和 Spaces 画廊筛选。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录。
- 图片：将 https://media.vibefather.ai/assets/e18d2a62-de8e-4dac-be66-56a4244f8108/music-social.webp 下载到 public/images/music-social.webp。替代文本：居民们正在聆听一场原声音乐社交活动。在日常生活画廊中最后使用。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录。
- 图标：仅使用本地打包的 lucide-react 图标：CaseSensitive、Menu、X、Phone、ArrowRight、Utensils、Sparkles、Clock3、Check、Compass、ChevronRight、ChevronLeft、Plus、Minus、CalendarDays、MapPin、Printer 和 CircleCheck。不要导入品牌图标。在 ASSETS.md 中列出 lucide-react 及其 ISC 许可证。
- 字体：通过 @fontsource-variable/fraunces 自托管 Fraunces Variable，并通过 @fontsource/atkinson-hyperlegible 自托管 Atkinson Hyperlegible 400/700。两者均为 OFL-1.1；在本地导入 npm 包，绝不使用 Google Fonts 或其他字体 CDN，并在 ASSETS.md 中列出这两个包及其许可证。

## 不要做
- 不要使用后端、服务器代码、API 路由、数据库、身份验证、外部表单服务、第三方 API、分析或真实网络提交。参观请求仅在本地处理，并且必须说明未发送任何消息。
- 除通过一条 npm run build 命令在 dist/ 中生成静态生产构建外，不要生成任何其他内容；使用相对资源路径、压缩输出、不生成 source map、不将 src/ 复制到 dist/ 中，且总大小低于 20 MB。
- 不要使用裸目录链接、失效路由、占位图片服务、CDN 脚本、CDN 样式表、远程字体加载、热链接图片或远程媒体。所有资源必须在本地随包提供，内部导航必须使用 index.html 上可正常工作的区块锚点。
- 不要使用 Unsplash、Pexels、Pixabay、Google Images、真实社区摄影、复制的平面图，或任何具有限制性许可或不可再分发许可的资源。仅使用提供的六张生成图片、原创 SVG 平面图、列出的图标库和自托管字体。
- 不要展示可识别的人物、真实居民或员工肖像、名人、面部特写、徽标、品牌制服、可读的设施标牌、水印或商标徽记。生成的人物必须保持虚构，面部不可识别。
- 不要使用真实社区名称、现有口号、品牌字体、吉祥物、标志性插画、独特图标、复制的文案、医疗结果承诺、未经核实的奖项、认证印章、评论平台徽章，或关于真实可用性的声明。
- 不要让网站给人临床、机构化、幼稚或恐惧驱动的感觉。避免医院蓝配色、医疗十字品牌、夸张微笑的库存肖像、压力倒计时，以及将老年人视为受抚养者的语言。
- 不要将关键信息隐藏在悬停、自动播放、动画或水平页面滚动之后。不要使用自动播放轮播、持续视差、自定义光标、滚动劫持或理解内容所必需的动效。
- 不要使用低对比度文本、仅占位符的表单标签、无无障碍名称的仅图标控件、过小的点击目标、键盘陷阱、被裁剪的大号文本或仅靠颜色编码的状态。保持可见焦点、最小 44×44px 的点击目标、减少动效支持，并在 1440×900 和 390×844 下零控制台错误。
- 当变量不同时，不要保留默认特定的品牌、位置、受众、社区类型、电话号码、地址、价格、菜单、护理文案或推荐语不变。将所有此类内容保留在 src/content.ts 中，并连贯地重写。
- 不要添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图工作、关键词堆砌的标题、发布日期或不相关的页面。包含 [BRAND] 的普通标题和原始 favicon 即可。
- 除可选的 [CREDIT] 页脚链接外，不要在网站内提及 VibeFather，并且绝不要声称本地演示表单已联系或确认任何与员工相关的事项。

---
— Prompt by VibeFather · https://vibefather.ai/t/senior-living-community-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
