> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 温馨等距农场游戏

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一款原创、自包含的等距视角农场游戏，背景设定在 [SETTING]。可游玩的农场是 [FARM_NAME]。使用 [CROPS] 中的三个作物名称，并将软货币称为 [CURRENCY]。首屏就是游戏本身，而不是落地页：一个代码绘制的 6×6 SVG 地块、四种可用工具、一个种子商店、一个由玩家控制的昼夜循环，以及自动本地进度保存。将所有字符串、作物定义、默认值、通知和标签保留在 src/content.ts 中。当变量变化时，重写所有与默认值相关的名称、视觉细节和文案，同时保留机制和构图。

- 受众：想要一段平静的两分钟农场体验的休闲玩家，以及想要一款无需搭建后端即可换肤的原创浏览器游戏的创作者或开发者。
- 目标：让完整的 耕地 → 种植 → 浇水 → 结束一天 → 收获 → 购买种子 循环立即可玩，支持鼠标、触摸或键盘操作，然后在本地持久化每一个有意义的状态变化，以便回归玩家可以继续。
- 语气：温暖、耐心、略带奇趣、富有触感。使用简洁友好的说明和令人满足的视觉反馈，绝不使用竞争压力、真实货币相关措辞或幼稚的吉祥物文案。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript 5
- 样式：原生 CSS + 内联 SVG
- 库：react（MIT）、react-dom（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、lucide-react（ISC）、@fontsource/fraunces（OFL）、@fontsource/nunito-sans（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务端代码、无外部 API。
- 设置：
  - 创建一个 Vite React TypeScript 项目，package.json 脚本为 dev=vite 和 build=tsc && vite build；使用 @vitejs/plugin-react，不使用其他运行时框架。
  - 在 vite.config.ts 中设置 base: './' 和 build.sourcemap: false。生产输出必须是 `dist/` 中压缩后的静态文件，且保持在 20 MB 以下。
  - 使用 src/content.ts 存放所有变量、默认游戏配置、作物名称和颜色、界面文案、帮助文本、通知和对话框文本。从 BRAND 派生小写的 BRAND_SLUG 作为 localStorage 键；切勿在组件内重复默认专属文案。
  - 将类型化的游戏 reducer 和持久化辅助函数与渲染分离：src/game/engine.ts 负责合法操作和事务，src/game/storage.ts 校验已保存数据，React 组件只派发操作并渲染状态。
  - 在 src/main.tsx 中从各自的 Fontsource 包导入 Fraunces 字重 600 和 700，以及 Nunito Sans 字重 400、600、700 和 800。不使用外部字体 URL。
  - 使用可复用的 React 组件和 CSS 类，将田地及所有景物渲染为内联 SVG。仅将 Lucide 用于界面图标；不要安装图标字体、canvas 引擎、物理包或 3D 库。
  - 在 src/styles.css 中定义可复用的 CSS 自定义属性、关键帧、焦点状态和响应式断点。包含明确的 1440×900 和 390×844 布局以及 prefers-reduced-motion 覆盖。

## 变量
- [BRAND] — 游戏品牌（默认：“Mossy Acres”）。一个简短的虚构游戏名称，用于页眉、文档标题和页脚。
- [FARM_NAME] — 农场名称（默认：“Brindlebrook Farm”）。这个特定可游玩地点的名称。
- [SETTING] — 场景设定（默认：“a sheltered valley beside a slow river”）。一个简洁的虚构场景；根据它调整装饰性景物和介绍文案。
- [CURRENCY] — 货币标签（默认：“sun coins”）。一个虚构的游戏内货币名称，绝非真实货币。
- [CROPS] — 三种作物名称（默认：“Carrot, Turnip, Strawberry”）。恰好三个以逗号分隔的虚构或通用作物名称，按商店顺序排列；为每种作物赋予独特的代码绘制外观。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/cozy-isometric-farm-game（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图像——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图像路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 羊皮纸色（Parchment）`#F6EFD8` — 页面背景和安静的外部留白
- 奶油色（Cream）`#FFF9EA` — 面板、对话框，以及深绿色上的主要文字
- 森林墨色（Forest Ink）`#304032` — 主要文字、轮廓线和深色图标描边
- 松绿色（Pine）`#2F5D50` — 页眉点缀、主要按钮和选中的工具
- 苔藓色（Moss）`#6E9B61` — 草地地块、健康枝叶和成功状态
- 新叶色（New Leaf）`#A8C686` — 草地高光和幼苗叶片
- 泥土色（Earth）`#9A6248` — 未开垦的土壤边缘、栅栏和木质面板
- 犁沟色（Furrow）`#6F4336` — 干燥的已耕土壤和深接触阴影
- 溪水色（Brook）`#78B7C2` — 浇水工具、水滴、河流和湿润土壤的闪光
- 阳光色（Sunbeam）`#F3C969` — 太阳、货币、成熟作物的闪光和收获爆发效果
- 杏色（Apricot）`#D9825B` — 暖色点缀、黄昏色调和选中的次要细节
- 蓝调时刻（Blue Hour）`#27344B` — 夜间遮罩和白天过渡期间变暗的场景

### 字体排印
- 展示字体：品牌、农场名称、日期标题和对话框标题；700 字重，紧凑的 -0.02em 字距：Fraunces（OFL），字重 600/700
- 界面字体：按钮、资源、作物名称、价格、说明和通知；400–800 字重：Nunito Sans（OFL），字重 400/600/700/800

### 布局与动效
- 间距：使用 4px 基准单位。页面边距桌面端为 24px、移动端为 12px；面板内边距桌面端为 18px、移动端为 14px；网格间距为 16px；控件间距为 8px。所有触摸目标至少为 44×44px，主要工具按钮至少 52px 高。
- 圆角：大面板 24px，资源胶囊 999px，按钮和种子卡片 14px，对话框 28px，SVG 场景接缝使用圆角。使用 2px 的 Forest Ink 轮廓线，不透明度 18–28%，而非粗黑描边；阴影为柔和的橄榄棕色，绝不使用霓虹色。
- 动效：悬停或用键盘聚焦合法地块时，其作物和高亮在 120ms 内上浮 3px；聚焦的菱形会获得 3px 的 Cream 和 Pine 双重轮廓。非法操作使用一次克制的 180ms 水平轻推并显示文字原因。
- 动效：种植时种子堆从 0.7 缩放到 1，使用 220ms ease-out。浇水时三颗 SVG 水滴下落 450ms，并立即加深土壤颜色。收获时作物上浮 16px，在 300ms 内淡出，并释放六个小叶片和硬币形状，持续 600ms。
- 动效：购买种子时，相关库存计数脉冲 240ms，并短暂显示使用实际价格和 CURRENCY 值的“-4 sun coins”样式增量。货币和库存总数更新时没有动画计数延迟。
- 动效：结束一天运行单个 1400ms 序列：0–550ms Apricot 黄昏色调，550–900ms Blue Hour 夜间色调并出现三颗小星星，然后 900–1400ms 返回早晨。在夜间中点推进 reducer 一次，并在过渡后宣布新的一天。
- 动效：两朵小云在 18 秒内漂移不超过 24px，成熟作物以错开的 2.8 秒循环轻轻上下浮动 2px。在 prefers-reduced-motion 下禁用云、浮动、粒子、轻推和长日过渡；保留即时状态和颜色变化。
- 图像：所有视觉元素均使用原创内联 SVG 和 CSS 创建：圆角菱形土壤地块、四个生长阶段的简单几何作物、两棵通用的圆冠树、一段短栅栏、圆润的山丘、两朵云、一条狭窄的河流丝带、小石头和草痕。使用固定的 2:1 等距投影、分层 SVG 阴影、稀疏的手绘风格虚线，不使用下载的精灵图、栅格纹理、人物、动物、吉祥物、标志或可识别的游戏素材。根据 CROPS 和 SETTING 调整作物颜色和远处装饰场景，同时保留调色板角色、构图和精确的田地几何形状。

## 页面与区块
### 可玩的农场（`index.html`）
1. **游戏外壳与紧凑页头** — 将文档标题设为 [BRAND]，并使用一个简单的原创双叶 SVG favicon。页头显示一个小号的 Sprout Lucide 图标、Fraunces 700 字重 26px 的 [BRAND]，以及作为 13px 副标题的 [FARM_NAME]。页头默认文案为 'Mossy Acres' 和 'Brindlebrook Farm'。右侧显示三个紧凑状态胶囊：'Day 1 · Morning'、带 '30 sun coins' 的太阳符号，以及带 'Saved on this device' 的勾选图标。添加带图标和文字的按钮：'How to play' 和 'New game'。不要使用营销导航或账户控件。
   布局：外壳以 Parchment 填满视口。桌面端页头高度为 72px，水平内边距 24px，底部有 1px 的 Forest Ink/10% 分隔线。其下使用三列网格：240px / minmax(480px, 1fr) / 276px，间距 16px，最大宽度 1440px，居中。中列先放棋盘，再放工具栏。左右两栏与棋盘顶部对齐。在 1440×900 下，页头、完整棋盘、工具、日期卡片和商店必须全部可见且不被裁切。在 390×844 下，页头高 56px，品牌字号 20px，农场副标题隐藏，Day 和货币胶囊分两行显示，帮助和重置仅显示图标并带无障碍标签。主列变为单列；顺序为棋盘第一、工具栏第二、日期卡片第三、种子/商店内容第四。
   动效：初始加载时，页头、棋盘和左右栏以 8px 的位移淡入上升，时长 350ms，错开 60ms。不要延迟指针交互。减少动效模式下所有内容立即渲染。
2. **等距农场棋盘** — 棋盘是视觉锚点。其上方放置小标签 'YOUR FIELD' 和动态说明 'Choose a tool, then choose a tile.'。场景内精确渲染 36 个可交互地块，六行六列。使用响应式 SVG viewBox 0 0 640 430。对于从零开始的行 r 和列 c，将每个地块中心设为 x=320+(c-r)*42 和 y=102+(r+c)*21；菱形半宽为 42，半高为 21。按 r+c 升序绘制，使作物正确重叠。在后排地块上方留出山丘和树木的空间，在前排地块下方留出柔和地面阴影的空间。初始状态为第 1 天，30 CURRENCY；所有地块均为草地，除了 (r1,c1) 作物 0 进度 2、已成熟且干燥，(r1,c2) 作物 0 进度 1 且已浇水，(r2,c1) 作物 1 进度 1 且干燥，(r2,c2) 作物 2 进度 2 且已浇水，以及 (r3,c2) 为空的已耕地。初始种子库存按商店顺序为 2 / 1 / 0。这些示例让每种主要视觉状态都可被发现，同时留下 30 块草地可供耕作。
   布局：场景位于 Cream 24px 圆角面板中，带有细微的 0 18px 50px #30403214 阴影，占据整个中列宽度。桌面端 SVG 高度为 clamp(390px, 51vh, 500px)；工具栏和地块标签位于其上方，内边距 16px。草地菱形在 Moss 和浅 4% 的色调之间交替，带有细微的原创草叶线条。已耕地块使用 Furrow，带三条弯曲的垄行；已浇水地块加深 16% 并获得两个 Brook 闪光。作物有四个原创 SVG 阶段：进度 0 时的种子土堆；当 progress/growDays 大于 0 且小于 0.5 时的双叶幼苗；当该比例至少为 0.5 但 progress 小于 growDays 时更茂盛的叶状植株；以及当 progress 等于 growDays 时带有微小 Sunbeam 闪光的成熟产物。每个地块都是一个可键盘聚焦的 SVG 组，具有 role=button、无障碍名称（如 'Row 2, column 2: Carrot, ready to harvest'）以及 Enter/Space 激活。移动端面板圆角为 18px，SVG 高度为 330px；以 meet 缩放保留完整 viewBox，绝不裁切或水平滚动田地。
   动效：合法目标高亮遵循设计动效规则。成熟作物有非常轻微的上下浮动和一个闪光；已浇水土壤在 Water 操作后获得一次性水滴动画。将所有 SVG 装饰元素设为 pointer-events:none，以确保地块点击区域在触摸时保持可靠。
3. **工具栏与地块反馈** — 按此顺序提供四个常驻工具按钮：'Till' 配 Shovel、'Plant' 配 Sprout、'Water' 配 Droplets、'Harvest' 配 Hand。默认选中的工具是 Till，默认选中的种子是作物 0。工具正下方显示一行上下文说明：Till='Turn grass into soft soil.'；Plant='Choose a seed, then plant in tilled soil.'；Water='Water crops so they grow overnight.'；Harvest='Gather ripe crops for sun coins.'。使用 CURRENCY 代替默认货币标签。该行下方，一个紧凑检查器报告最后聚焦或选中的地块，初始为 'Row 2, column 2 · Carrot · Ready to harvest'，以及最有用的下一步操作。无效操作绝不消耗资源：酌情解释 'Only grass can be tilled.'、'Till this tile before planting.'、'This crop is already watered.'、'This crop is still growing.' 或 'Choose a seed with stock.'。
   布局：在棋盘正下方使用 Cream 面板，四等列网格，间距 8px。每个按钮上方为 22px 图标，下方为 13px 标签，高度至少 56px。选中的工具为 Pine 配 Cream 文字；未选中的工具为透明配 Forest Ink 和 Forest Ink/12% 边框。检查器是独立的 44px 高条带，带一个小土壤色块，仅对次要提示做省略号处理，绝不对地块状态做省略。移动端工具栏跟随棋盘，当玩家滚动到下方面板时在底部吸附，并带安全区内边距；它不得遮挡棋盘或任何对话框控件。
   动效：工具选择在 120ms 内交叉淡化颜色，并移动一个小下划线，而不是缩放整个按钮。合法地块操作发出其特定的种植、浇水、耕作尘土或收获效果；无效操作在 aria-live polite toast 中显示原因，持续 2.5 秒，不抢占焦点。
4. **日期卡片与简明田地指南** — 左栏主卡片标题为 'Today on the farm'。默认介绍文案为 'A fresh morning in a sheltered valley beside a slow river.'。当 SETTING 值变化时，从 SETTING 派生该句子。显示三条编号说明：'1. Till open grass.'、'2. Plant from your seed pouch.'、'3. Water before ending the day.'。其下方放置一个带 Sunset 图标的主按钮 'End day'，以及注释 'Watered crops grow overnight.'。添加一个小型两行 'Field notes' 卡片，包含 '6 × 6 plots'、'4 tools' 和 'Progress saved locally'。日循环由玩家控制，不是实时倒计时。End day 将 Morning 变为黄昏和夜晚，将天数推进一次，仅对未成熟且已浇水的作物增加一点进度，清除所有已浇水标记，然后返回 Morning。成熟作物保持成熟，未浇水作物不生长。
   布局：使用 Cream 24px 面板，带一个小型 SVG 绘制的 Sunbeam 日出插图，日期标题 24px，说明 14px，行间距 8px。End day 按钮横跨卡片，高 48px。Field notes 位于下方 16px 处，数值使用柔和样式，不添加额外营销区块。移动端此卡片出现在工具栏之后；其三条说明折叠为一行始终可见的摘要行，可通过 'How to play' 文字按钮展开。End day 保持可见，无需打开帮助对话框。
   动效：运行设计规则中精确的 1400ms 黄昏/夜晚/早晨光照序列。仅在此过渡期间禁用游戏输入。在中点立即显示新生长，然后以实际数量宣布 'Day 2 begins. 2 crops grew.'。状态推进后保存，绝不在双击时重复递增。
5. **种子袋与小商店** — 右栏以 'Seed pouch' 开始，包含三个可选种子芯片及其库存数量。默认值为 Carrot ×2、Turnip ×1 和 Strawberry ×0。选择有库存的种子也会选中 Plant。下方商店卡片标题为 'Seed shop'，副标题为 'A little stock for tomorrow.'。三行中的每一行显示原创作物缩略图、名称、生长时间、购买价格、出售价值和 'Buy 1' 按钮。默认作物 0 为 Carrot：2 天，花费 4 sun coins，收获售价 9。作物 1 为 Turnip：3 天，花费 6，收获售价 14。作物 2 为 Strawberry：4 天，花费 9，收获售价 22。按相同顺序解析 CROPS，并对每个价格标签使用 CURRENCY。购买始终按精确价格扣减硬币并增加一颗种子；资金不足时禁用按钮并显示 'Not enough sun coins yet.'。收获将一份成熟作物转换为其出售价值，并留下一个空的已耕地块。种植恰好消耗一颗选中的种子。没有随机价格、真实购买或结账表单。
   布局：种子芯片为三行全宽 48px 行，左侧缩略图，中间名称和数量，带选中环。商店行为 82px 高，44px 缩略图和紧凑的 12px 元数据；Buy 1 按钮为 64px 宽、40px 高，带 44px 不可见点击区域。桌面端商店内容保持在右侧栏内。移动端将侧栏商店卡片替换为显示总库存的 'Seed pouch & shop' 按钮；点击后打开底部弹层，包含相同的实时库存和三行商店。弹层最高 82vh，有可见的 Close 按钮、焦点陷阱、Escape 关闭，并将焦点返回其触发元素。
   动效：购买和收获反馈遵循资源增量和收获规则。移动端弹层在 180ms 内上移 20px 同时淡入，120ms 内退出；减少动效时使用立即出现/消失。绝不在装饰性动效完成期间对价格做动画或禁用购买。
6. **帮助、保存、重置和页脚** — How to play 对话框标题为 'A little routine'，并准确列出：'Till a grass tile.'、'Pick a seed and plant it in soil.'、'Water it, then end the day.'、'Harvest ripe crops and reinvest in seeds.' 添加 'Mouse or touch: choose a tool and tap a tile. Keyboard: Tab to a tile and press Enter or Space.' 以 'Let's grow' 关闭。在每次成功操作后，将版本、天数、阶段、金币、全部 36 个地块状态、作物进度、浇水标记、库存、所选工具和所选种子持久化到由 BRAND_SLUG 派生的带版本键下。加载时恢复并验证；如果数据损坏，安全创建指定的初始状态并显示 'A fresh farm is ready.'。New game 确认文案为 'Start a new farm?' 和 'This clears this farm's crops, coins, and day count on this device.'。按钮为 'Keep farming' 和 'Start over'。页脚左侧显示 '[BRAND] · A quiet little farming game'，右侧显示 'Progress stays in this browser.'，提供时在其后附上可选的 [CREDIT] 链接。
   布局：对话框在桌面端居中，最大宽度 440px，在移动端变为底部弹层。使用 Forest Ink/35% 背景、Cream 表面、28px 圆角和清晰的关闭按钮。页脚是主网格下方安静的 52px 高 flex 行，12px 文本；移动端堆叠，并可在商店内容下方到达。保存指示器仅在同步状态更新提交期间变为 'Saving…'，然后返回 'Saved on this device'；不要假装保存到服务器。
   动效：对话框在 160ms 内淡入并上移 10px，陷阱焦点，Escape 关闭，并恢复触发元素焦点。重置仅清除此游戏派生的存储键，恢复精确的初始棋盘，并显示 'Welcome back to Day 1.'。请求减少动效时，不使用彩纸、全屏庆祝或动效。

## 资源

- 图像：无需任何栅格图像或下载的美术素材。在 React 组件中以原创内联 SVG/CSS 绘制完整的农场、作物生长阶段、场景、资源符号、favicon 以及装饰性反馈。在 ASSETS.md 中说明所有游戏美术均为原创的代码绘制 SVG，不使用任何外部图像文件。
- 图标：仅使用经 tree-shaking 的 lucide-react 图标：Sprout、Shovel、Droplets、Hand、Sunset、Sun、Check、HelpCircle、RotateCcw、X、Coins 和 ShoppingBasket。不要将 Lucide 美术素材用作作物精灵图。在 ASSETS.md 中记录 lucide-react、其包 URL、作者 Lucide contributors 以及 ISC 许可证。
- 字体：通过 @fontsource/fraunces 自托管 Fraunces 600/700，通过 @fontsource/nunito-sans 自托管 Nunito Sans 400/600/700/800。在 ASSETS.md 中记录两个包的路径、Fontsource 及上游字体作者、源包 URL 以及 OFL 许可证；不使用字体 CDN，也不手动下载商业字体。

## 不要做
- 不要添加后端、无服务器函数、API 路由、数据库、身份验证、分析、远程表单、第三方 API、多人游戏、真实支付或依赖网络的游戏状态。所有游戏玩法和存档必须在加载后通过静态文件离线运行。
- 不要更改规定的 Vite/React/TypeScript 技术栈，不要添加游戏引擎，不要使用 Unity/Unreal/Godot，也不要为这款 2D SVG 等距游戏引入 Three.js。使用 npm run build 构建到 dist/，使用 base './'、压缩、无 source map、不将 src/ 复制到 dist/，且总输出低于 20 MB。
- 不要热链接或下载图库照片、精灵图、纹理、音频、占位符服务、脚本、样式表或字体。所有内容必须本地化；仅使用原创内联 SVG/CSS 艺术、捆绑的 Lucide 图标和 Fontsource 包。
- 不要从 Google Fonts、Adobe Fonts 或任何 CDN 加载字体，也不要使用商业字体或受许可证限制的库，包括 Aceternity UI 源码、Tailwind Plus 源码、购买的模板、无许可证的包或 CC BY-NC/CC BY-SA 资产。
- 不要使用现有农场游戏或其他品牌名称、徽标、吉祥物、角色设计、标志性场景、可识别精灵图、作物插图、图标、精确界面布局、对话、口号或复制的文案。不要描绘真实人物、品牌产品或动漫/游戏角色。
- 不要将首屏设为营销主视觉、落地页、仅标题的启动画面或说明墙。完整的可玩 6×6 田地及其控件必须在桌面端和移动端立即可见且可交互。
- 不要扩大田地、添加关卡、随机事件、战斗、能量计时器、战利品箱、实时倒计时压力、自动日期推进或后端经济系统。保留指定的 6×6 网格、四种工具、三种作物、价格、玩家控制的日期循环和确定性生长规则。
- 不要创建额外路由或裸目录链接。将体验保留在 index.html 中，使用对话框和移动端底部面板；任何内部链接必须指向 ./index.html 或页内锚点，可选的 credit 可以是外部链接。
- 不要依赖悬停、右键单击、拖拽或仅指针的 SVG 目标。每个操作必须支持鼠标、单次点击和键盘；保持可见焦点、44px 最小目标、可访问的瓦片名称、焦点管理的对话框和 aria-live 反馈。
- 不要允许负金币或库存、重复点击双重扣费、未浇水作物生长、每次过渡推进超过一天或重新加载时丢失进度。验证 localStorage 并将重置限制在此游戏自己的版本化键内。
- 不要在 src/content.ts 之外硬编码 BRAND、FARM_NAME、SETTING、CURRENCY、CROPS 或其默认特定句子。当变量变化时重写界面和装饰细节，并且除了可选的 [CREDIT] 链接外，绝不在网站中提及 VibeFather。
- 不要添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图代码、关键词堆砌的标题或来自真实日历的日期。一个简单的 [BRAND] 文档标题、原创 favicon 和游戏内天数计数器就足够了。
- 不要忽略 prefers-reduced-motion、在移动端裁剪 SVG 田地、导致水平溢出、用粘性 UI 遮挡控件或发布控制台错误。在 1440×900 和 390×844 下使用触摸模拟和生产构建验证真实游戏。

---
— Prompt by VibeFather · https://vibefather.ai/t/cozy-isometric-farm-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
