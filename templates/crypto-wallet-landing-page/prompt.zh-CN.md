> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 加密钱包落地页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个精致的单页落地站点，[BRAND] 是一款为 [AUDIENCE] 打造的虚构 [PRODUCT_TYPE]。通过一个大型、分层的 CSS 手机与浏览器扩展组合，在首屏就让产品变得可感知，而不是仅靠摄影或排版。只使用虚构的网络身份、资产、余额和地址；每一个产品交互都是本地界面演示。

- 受众：站点面向 [AUDIENCE] 发声，并次要吸引正在评估钱包概念的产品创始人和开发者。假设访客可能理解数字资产，但不希望看到密集的协议术语。
- 目标：用平实的语言解释自托管，展示手机与浏览器体验，让安全控制易于理解，并引导访客下载特定平台的演示版本，同时不暗示存在真实钱包服务。
- 语气：冷静、精确、令人安心，但不做保证。使用短句、具体的界面标签和透明的演示披露。避免交易语言、炒作、恐惧和技术炫耀。

## 技术栈
- 框架：Vite 6 + React 19 + TypeScript 5.7
- 样式：Tailwind CSS 4
- 库：Vite 6（MIT）、React 19 + React DOM 19（MIT）、TypeScript 5.7（Apache-2.0）、Tailwind CSS 4 + @tailwindcss/vite 4（MIT）、Motion 12（motion/react）（MIT）、lucide-react（ISC）、@fontsource-variable/space-grotesk（OFL-1.1）、@fontsource-variable/manrope（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 npm 构建脚本设置为 tsc -b && vite build。配置 vite.config.ts，设置 base: './' 和 build.sourcemap: false；可部署的输出仅为 dist/。
  - 通过 @tailwindcss/vite 使用 Tailwind CSS 4。在 src/index.css 中定义调色板、字体族、间距令牌、阴影和关键帧；不要添加第二套样式系统。
  - 从 motion/react 安装并导入 Motion，用于入场和界面过渡；lucide-react 仅用于通用界面图标。不要在此技术栈之外添加动画、轮播、图标或组件库。
  - 通过列出的 Fontsource 包自托管 Space Grotesk Variable、Manrope Variable 和 IBM Plex Mono。仅从本地 node_modules 导入所需的子集和字重；不使用字体 CDN。
  - 将每个标题、段落、导航标签、按钮标签、网络名称、余额、地址、FAQ 和示例数据保存在 src/content.ts 中，按区块键控。从 BRAND、PRODUCT_TYPE、AUDIENCE、PRIMARY_CTA 和 NETWORK_NAMES 派生所有默认产品文案，并在这些值变化时重写文案。
  - 在代码中为演示主机名和下载的检查清单文件名派生小写连字符品牌 slug。对任何显示的演示主机名使用保留的 .example 后缀，并且永远不要导航到它。
  - 将实现划分为 Header、HeroDevices、NetworkExplorer、ProductSurfaceDemo、SecurityExplorer、SetupSteps、DownloadPanel、FaqAccordion 和 Footer 组件。将设备屏幕和原始网络符号保留为本地 React/HTML/CSS/内联 SVG，而不是图像文件。
  - 仅将 React 状态用于演示交互。不需要持久化；重新加载时重置示例 UI 状态。提供语义化按钮、可见的键盘焦点、aria-pressed 或 aria-selected 状态、带标签的图标按钮，以及可通过 Escape 关闭的移动菜单和对话框。

## 变量
- [BRAND] — 虚构的钱包品牌（默认："Velmora"）。使用一个简短的自创名称，不得与任何真实钱包或金融品牌相同。更新字标、文案、演示主机名和清单文件名。
- [PRODUCT_TYPE] — 产品描述（默认："self-custody crypto wallet"）。一个简短的小写短语，可在句子中跟在品牌名之后。
- [AUDIENCE] — 主要受众（默认："curious collectors and everyday crypto users"）。一个通俗易懂的受众短语；针对该群体重写功能重点和示例。
- [PRIMARY_CTA] — 主要操作标签（默认："Get the wallet"）。一个简洁的按钮标签，用于页眉和主视觉区；点击后滚动到本地下载面板。
- [NETWORK_NAMES] — 六个虚构的网络名称（默认："Nivora, Elarin, Tessera, Kavio, Orren, Mirelle"）。按展示顺序提供恰好六个以逗号分隔的自创名称。为它们生成原创的几何标志；绝不替换为真实网络名称或标志。
- [CREDIT] — 在页脚保留一个小型"Template by VibeFather"链接，指向 https://vibefather.ai/t/crypto-wallet-landing-page（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- Porcelain（瓷白）`#F3F1EB` — 主页面画布和安静的负空间。
- Paper（纸白）`#FCFBF8` — 卡片、设备屏幕、导航和凸起表面。
- Ink（墨色）`#121326` — 主文本、深色按钮和高对比度细节。
- Slate（石板灰）`#626577` — 次要文案和元数据；在带色背景上，绝不要用于小于 14px 的文本。
- Line（线条色）`#D9D7E1` — 一像素边框、网格线和非活动控件。
- Midnight（午夜色）`#191A30` — 安全区块、浏览器外框和深色设备细节。
- Iris（鸢尾紫）`#6C4FE0` — 用于选中状态、关键线条、链接和小高亮的主强调色；在实心 Iris 上使用白色文本。
- Iris Mist（鸢尾薄雾）`#E9E3FF` — 柔和强调区域、图标容器和下载面板光晕。

### 字体排印
- 展示和标题：Space Grotesk Variable (OFL)，字重 500/600/700
- 正文和界面：Manrope Variable (OFL)，字重 400/500/600/700
- 数字和技术标签：IBM Plex Mono (OFL)，字重 400/500

### 布局与动效
- 间距：使用 8px 基础网格和 12 列桌面布局，位于 1280px 最大宽度容器内，两侧留 32px 边距。页眉高度为 76px。标准区块有 112px 垂直内边距；hero 顶部为 72px，底部为 88px。在 390px 时使用 20px 边距、68px 区块内边距、24px 卡片内边距和单列流。在可行的情况下，正文行宽保持在 58–66 个字符，标题行宽保持在每行 11–13 个字符。
- 圆角：按钮和小标签使用 999px 胶囊形，输入框和紧凑控件使用 10px，标准卡片使用 16px，功能面板使用 28px，浏览器框架使用 20px，手机机身使用 38px。边框为 1px solid Line。设备阴影：0 32px 80px rgba(18,19,38,0.16), 0 8px 24px rgba(18,19,38,0.08)；普通卡片没有重阴影。
- 动效：初始加载时，hero 的眉题、标题、正文和操作按钮以 70ms 错开，在 480ms 内透明度 0→1、y 16→0。浏览器从 y 24 和旋转 -2deg、手机从 y 36 和旋转 4deg 进入最终位置，历时 700ms；仅播放一次。
- 动效：使用 IntersectionObserver 和 Motion 在 20% 可见度时显示每个区块的标题和直接子元素，使用 y 18→0、透明度 0→1、480ms 时长和 60ms 子元素错开。当 JavaScript 不可用时，绝不要隐藏内容。
- 动效：手机/浏览器和网络/安全选项切换使用 220ms 透明度和 8px 垂直过渡。保持组件尺寸，使页面不跳动。手风琴高度动画历时 240ms，箭头旋转 180 度。
- 动效：仅在支持指针的设备上，让 hero 设备组向指针方向最多平移 6px，并以 250ms ease-out 返回。不要添加持续浮动、自动旋转轮播、跑马灯或滚动劫持。
- 动效：在 prefers-reduced-motion: reduce 下，禁用指针响应、平滑滚动、入场变换和动画过渡；立即显示所有内容并保留所有交互。
- 图像：不使用栅格图像。视觉锚点是一个精心分层的手机和浏览器扩展界面，用 HTML、CSS 和内联 SVG 绘制。使用微妙的 CSS 网格线、两个模糊的 Iris Mist 径向场和柔和阴影来营造深度。网络身份是六个原创几何 SVG 构图，不是改编的代币标志。通用 Lucide 图标支持复制、锁定、勾选、箭头和下载等操作；它们绝不代替网络或平台标志。

## 页面与区块
### 钱包落地页（`index.html`）
1. **页眉与导航** — 创建一个原创的 [BRAND] 文字标识：一个 28px 的正方形，内含四条圆角描边，围绕中心的小菱形，后面跟着 Space Grotesk 600 字体的品牌名。默认导航为 Wallet、Networks、Security 和 How it works，分别链接到 ./index.html#wallet、./index.html#networks、./index.html#security 和 ./index.html#how-it-works。右侧按钮使用 [PRIMARY_CTA]，默认为 'Get the wallet'，链接到 ./index.html#download。在文字标识旁包含一个小号 'DEMO' 等宽标签。
   布局：使用粘性顶栏，Paper/92 背景、底部 Line 边框和微妙的背景模糊。1280px 容器水平对齐。桌面端显示所有链接和 CTA；移动端显示文字标识、作为紧凑箭头按钮的 CTA（带无障碍标签）以及菜单按钮。移动端菜单在页眉下方打开一个全宽 Paper 面板，四个链接以 48px 行高堆叠；选择后、按 Escape 键和点击外部时关闭。
   动效：滚动 16px 后页眉背景变得更不透明。移动端链接在 180ms 内淡入并向下平移 6px；粘性页眉不做动画缩放。
2. **带双设备模型的主视觉** — 眉题：'SELF-CUSTODY, MADE LEGIBLE'。H1：'Your keys. Your assets. Clear by design.' 默认正文：'Velmora is a self-custody crypto wallet for curious collectors and everyday crypto users. See what you hold, understand every request, and move between phone and browser without losing context.' 使用 [PRIMARY_CTA] 作为实心 Ink 主按钮，'Explore the demo' 作为带箭头的文字次要按钮，分别指向 ./index.html#download 和 ./index.html#wallet。下方放置注释 'Concept demo · No real accounts, assets, or transactions'。手机中显示 'Demo portfolio'、'$12,480.62'、Overview 和 Activity 标签页，以及前三项 [NETWORK_NAMES] 的三行，分别为 42.80、18.20 和 6.40 单位。Activity 包含 'Added to vault'、'Received on Nivora' 和 'Recovery check complete'，不显示日期。扩展窗口中，使用派生的默认主机 app.velmora.example，来自 gallery.example 的 'Review request' 面板，操作为 'Show 2 collectibles'，详情为 'No asset transfer'，按钮为 Dismiss 和 Approve demo。批准仅改变本地状态并显示 'Demo approved — nothing was signed'；Dismiss 重置面板。添加 'Demo address demo:7A42…19F2' 及可用的复制按钮和本地 'Fictional address copied' 提示。
   布局：桌面端主视觉为 5/7 列分割，垂直居中，包含内边距后最小高度 700px。左侧 H1 为 68px/0.98，最大宽度 570px；正文为 18px/1.65，操作按钮位于下方 32px。右侧视觉舞台约 650×610px。在后部右上方绘制一个 500×350px 的浏览器窗口，在前部左下方绘制一个 250×520px 的手机，重叠 70px。手机旋转 -4deg，浏览器旋转 +2deg。包含可见的浏览器红绿灯形状（不复制任何操作系统）、详细的扩展弹窗、手机状态栏、余额、资产行和底部导航。在 390px 宽度下，文字堆叠在 350×410px 舞台上方，设备按比例缩放，保留所有关键屏幕标签，两个 CTA 均全宽。无水平溢出，文字不被手机遮挡。
   动效：使用指定的主视觉入场和微妙的指针深度效果。Overview/Activity 和批准状态在 180ms 内交叉淡入淡出。复制提示从 y 8 进入，2.4 秒后消失；通过礼貌的实时区域保持可访问。
3. **支持网络浏览器** — 眉题：'SUPPORTED NETWORKS'。H2：'One calm view across your networks.' 正文：'Explore six fictional networks through original symbols and a single consistent asset hierarchy.' 从 [NETWORK_NAMES] 中精确解析六个名称。按顺序分配用途描述：'Everyday transfers'、'Collectibles and media'、'Identity and credentials'、'Apps and games'、'Shared accounts'、'Experimental assets'。默认选中详情：'Nivora · Everyday transfers · Demo support only.' 选择其他网络时，将此详情条更新为对应的名称和用途。包含可见脚注 'All network names and marks are invented sample content.'
   布局：为此区块设置 id=networks，Paper 背景，顶部和底部 Line 边框。将标题和正文放在 5/7 分割中，位于六列网络网格上方。每个 176×144px 按钮包含一个 44px 原创 SVG 标记、网络名称和两位索引 01–06。用不同的基本图形绘制六个标记：带点的裁剪六边形、分割圆、交叉弧线、阶梯方形、倾斜轨道和三根上升条。仅使用 Ink 和 Iris。网格下方，一个全宽 Iris Mist 详情条包含所选描述和一个通用箭头图标。移动端使用两列，间距 16px，详情条位于下方；不要做成水平轮播。
   动效：选中的网络磁贴获得 Iris 边框，44px 图标在 180ms 内旋转不超过 6deg。详情文字交叉淡入淡出，不改变条的高度。
4. **手机与浏览器产品导览** — 眉题：'PHONE + BROWSER'。H2：'The same clear wallet, wherever you open it.' 默认正文：'Check a balance on your phone. Review a request in your browser. Velmora keeps the same plain-language hierarchy in both.' 一个标记为 Mobile wallet 和 Browser extension 的分段控件切换详细模型及其支持文案。移动端文案：'Balances without the noise' — 'One total, a short asset list, and no flashing prices.' 浏览器文案：'Approvals you can read' — 'See the requesting site, requested permissions, and what stays untouched.' 共享底部注释：'A shared visual language' — 'The same networks, labels, and controls carry across both views.' 使用主视觉中建立的相同示例数据；不要引入价格或回报百分比。
   布局：在此 Porcelain 区块上设置 id=wallet。使用 5/7 网格：左侧包含眉题、48px 的 H2、正文、分段控件和活动功能文案；右侧包含一个 620×500px 的 Midnight 舞台，带有细网格线和一个大设备。移动钱包显示手机直立，250×500px；浏览器扩展显示 540×360px 的浏览器，请求面板停靠在右侧。切换视图时，此处绝不重复显示两个设备。在移动端，先放置控件和功能文案，然后是缩放至适合的 350×390px 舞台。所有控件保持为实际按钮，并具有选中状态。
   动效：活动设备和文案在 220ms 内交叉淡入淡出，最大位移 8px。保持舞台尺寸固定，并尊重减少动效设置。
5. **安全浏览器** — 眉题：'SECURITY, IN PLAIN LANGUAGE'。H2：'Self-custody, explained without fine print.' 引言：'Four interface patterns make the fictional Velmora experience easier to inspect.' 功能按钮及精确文案：'Local lock' — 'Set an auto-lock timer in the demo and see the vault state change instantly.' 'Readable requests' — 'Permissions appear before any approval control; no blind-signing pattern.' 'Recovery checklist' — 'A three-item checklist explains offline backups without asking for a recovery phrase.' 'Address controls' — 'Copy a fictional demo address and confirm it with a clear, local toast.' 选择功能时，将图表中心更新为其标签和一行状态：Local lock 'Vault preview unlocked'、Readable requests '2 permissions visible'、Recovery checklist '3 offline steps'、Address controls 'Demo address only'。添加披露声明 'Illustrative product copy, not a security audit or guarantee.'
   布局：使用 id=security，全出血 Midnight 背景，Paper 文字，112px 垂直内边距。页眉跨 7 列。下方，7/5 分割将 560×430px 图表舞台放在左侧，四个堆叠的功能按钮放在右侧。图表为原创内联 SVG：三个同心圆角方形轮廓、四个由细线连接的小型轨道节点、一个中心通用钥匙图标和一张 Paper 标签卡。选中的连接线和节点变为 Iris Mist；未选中的线条为 white/18。功能行具有 20px 垂直内边距、编号、标题和可展开正文，由 white/14 分隔线隔开。在移动端，将按钮堆叠在 350×310px 图表之前，正文保持 16px 以提高可读性。
   动效：功能选择使用 stroke-dashoffset 在 360ms 内绘制活动连接线，并交叉淡入淡出中心卡片。减少动效时立即显示最终选中状态。
6. **三步设置** — 眉题（Eyebrow）：'HOW IT WORKS'。H2：'From download to demo in three steps.'。步骤 01，'Choose your surface'：'Download for macOS or Windows, or open the browser-extension preview.'。步骤 02，'Create a local vault'：'Follow the fictional setup flow. Never enter a real password or recovery phrase.'。步骤 03，'Explore with sample assets'：'Use the preloaded networks and balances; nothing connects to a blockchain.'。点击某个步骤会更新相邻的紧凑预览：步骤 1 显示平台卡片，步骤 2 显示三个空白的清单勾选标记，步骤 3 显示六个网络符号。这些是说明性标签页，不是引导表单。
   布局：在 Paper 区块上设置 id=how-it-works。使用 5/7 网格，左侧是三个 112px 高的编号步骤按钮，右侧是 600×360px 的 Porcelain 预览面板。每个步骤包含 IBM Plex Mono 编号、Space Grotesk 标题和 Manrope 正文。活动步骤有 Ink 编号圆盘和 Iris 左侧竖线；非活动步骤使用 Line。预览面板有 28px 圆角和 32px 内边距。移动端堆叠三个紧凑卡片，并将预览放在下方，全宽，最小高度 300px。
   动效：活动预览在 220ms 内淡入并上移 8px。步骤 2 中的清单勾选标记以 70ms 的间隔依次出现，但没有无限动画。
7. **平台下载面板** — 眉题（Eyebrow）：'LOCAL DEMO DOWNLOAD'。H2：'Ready for a clearer wallet?'。默认正文：'Pick a platform to preview the Velmora setup. This static concept provides a checklist, not a wallet installer.'。按钮：'Download for macOS'、'Download for Windows' 和 'Preview browser extension'。前两个按钮使用 Blob 和派生的品牌 slug 在本地生成并保存纯文本设置清单，默认文件名分别为 velmora-macos-setup.txt 和 velmora-windows-setup.txt。清单文本说明该概念是演示，列出三个设置步骤，并警告切勿输入真实恢复短语。扩展按钮会关闭面板对话框（如果已打开），在产品导览中选择 Browser extension，并滚动到 ./index.html#wallet。按钮下方显示 'No accounts. No installers. Just the interface demo.'。下载清单后，在礼貌的实时区域中播报 'Setup checklist saved'。
   布局：设置 id=download。在标准容器内，使用 Iris 背景面板，28px 圆角，白色文字，桌面端 64px 内边距，右侧有一个超大的 Iris Mist 径向轮廓。左侧放置眉题、48px H2 和正文；右侧放置三个全宽操作按钮，前两个为 Paper 配 Ink 文字，第三个为透明配 white/45 边框。添加通用的 Lucide download 和 panels 图标，绝不使用操作系统或浏览器标志。移动端使用 24px 内边距，文本和按钮堆叠，文案后方无装饰元素。
   动效：按钮在悬停时上移 2px，并显示一个小的下载图标移动，持续 160ms。实时区域确认信息淡出，不引起布局偏移。
8. **FAQ 手风琴** — H2：'Before you explore.'。使用五个手风琴项，包含以下确切的默认问题和答案。1. 'Is Velmora a real wallet?' — 'No. Velmora is an invented product used to demonstrate this landing page. The interface uses sample data and does not create accounts or sign transactions.'。2. 'Are these real networks and balances?' — 'No. Every network name, symbol, address, asset and balance is fictional demo content.'。3. 'Does the demo store a recovery phrase?' — 'No. It never asks for one. Do not enter real credentials or recovery information.'。4. 'What do the download buttons do?' — 'They save a plain-text setup checklist for the selected platform. No application binary or browser extension is installed.'。5. 'Can I adapt this for another wallet concept?' — 'Yes. Change the content variables to rewrite the brand, product type, audience, call to action and network names. Keep the demo-only disclosures.'。当变量变化时，重写品牌相关的问题和答案，同时保留这些披露信息。
   布局：使用 Porcelain 区块，采用 4/8 网格：桌面端粘性 H2 在左，手风琴在右。每个问题是一个全宽按钮，24px 垂直内边距，Space Grotesk 600 字号 20px，带一个加号图标。答案最大宽度为 62 个字符，Slate 文字 16px/1.7，底部内边距 24px。第一项默认展开。移动端移除粘性定位，将标题堆叠在手风琴上方。
   动效：答案高度和加号到叉号的旋转在 240ms 内动画。允许多项同时展开，以免丢失对比；减少动效时立即展开。
9. **页脚** — 显示 [BRAND] 标记、'A clearer home for digital assets.' 这一行以及两个链接组。产品链接：Wallet、Networks 和 Security。探索链接：How it works、Download 和 FAQ。全部指向对应的 ./index.html#section 锚点。添加披露信息 'Invented product and sample data. Not financial advice. No wallet services are provided.'。不要添加社交链接、版权年份或虚假公司信息。仅在渲染器提供时包含可选的 [CREDIT] 页脚链接。
   布局：使用 Ink 背景配 Paper 文字。1280px 容器采用 6/3/3 桌面网格，64px 垂直内边距，披露行上方有 white/15 顶部分隔线。链接为 14px，行高 36px，焦点可见。移动端使用单列，32px 间距，披露信息保持 13px/1.6 的可读性。
   动效：仅在悬停/聚焦时改变链接颜色和箭头位移；没有大型动画字标。

## 资产
- 图像：不使用任何栅格图像或生成图像。将主视觉区和所有产品视觉元素构建为本地 HTML/CSS 加原创内联 SVG。不要请求提供的资产基础 URL，也不要使用占位图服务。
- 图标：安装 lucide-react（ISC），并且仅使用通用界面图标来表示箭头、复制、勾选、锁、钥匙、下载、菜单、加号和面板。在本项目中将六个网络标记和品牌标记绘制为原创内联 SVG。在 ASSETS.md 中记录 Lucide React、其包 URL 和 ISC 许可证；不得使用代币、应用商店、操作系统或浏览器徽标。
- 字体：从 @fontsource-variable/space-grotesk（OFL-1.1）自托管 Space Grotesk Variable，字重 500/600/700，用于展示。导入本地包文件，并在 ASSETS.md 中记录包、来源、作者和 OFL 许可证。
- 字体：从 @fontsource-variable/manrope（OFL-1.1）自托管 Manrope Variable，字重 400/500/600/700，用于正文和 UI。导入本地包文件，并在 ASSETS.md 中记录包、来源、作者和 OFL 许可证。
- 字体：从 @fontsource/ibm-plex-mono（OFL-1.1）自托管 IBM Plex Mono，字重 400/500，用于余额、索引和技术标签。导入本地包文件，并在 ASSETS.md 中记录包、来源、作者和 OFL 许可证。

## 不要做
- 不要使用真实钱包、区块链、代币、交易所或应用商店的名称和标志。六个网络名称和每一个符号都必须保持虚构，平台按钮只使用通用图标。
- 不要复制现有钱包或网站的产品界面、品牌配色、标语、插图、代码或营销文案。每一个设备屏幕和几何标记都要依据本规范构建。
- 不要添加实时钱包连接、助记词收集、账户创建、交易签名、价格推送、区块链 RPC 调用、外部 API 或真实安装包下载。
- 不要做出投资回报承诺、显示收益百分比或实时价格、编造采用数据，或声称产品经过审计、不可破解、保证安全或具有财务收益。
- 不要将示例余额、地址、网络名称、请求批准或下载清单呈现为真实服务。保持演示披露信息可见，绝不索取真实凭证或恢复信息。
- 不要使用自定义商业字体、与现有加密产品关联的标志性图标、品牌吉祥物、可识别的人物、代币艺术或任何第三方标志。
- 不要使用图库照片、生成的人像、外链图片、占位图服务、Unsplash、Pexels、Pixabay、Google Images 或受限许可的素材；本设计不需要任何栅格图像。
- 不要从 CDN 加载字体、脚本、样式、图标或其他素材。自行托管指定的 Fontsource 字体，并将所有依赖本地打包。
- 不要添加后端、服务器代码、API 路由、数据库、身份验证、远程表单提交、分析、跟踪 Cookie 或第三方嵌入。所有交互和下载都必须在浏览器本地运行。
- 不要添加平滑滚动劫持、永久跑马灯、自动播放轮播、过度视差、闪烁的市场动效或无视 prefers-reduced-motion 的动画。
- 除带有相对素材路径的静态 dist/ 构建外，不要产出任何其他内容。保持 dist/ 在 20 MB 以下、经过压缩、不含 source map，且不将 src/ 目录复制进去。
- 不要使用裸目录链接、外部演示主机链接或空的 href 占位符。内部导航必须使用 ./index.html#section 目标；演示主机名仅为文本，并使用保留的 .example 后缀。
- 不要添加 SEO 元数据块、Open Graph、JSON-LD、站点地图代码或堆砌关键词的标题。一个由 [BRAND] 派生的普通文档标题和一个原创的本地 favicon 就足够了。
- 不要显示日期、活动时间戳、版权年份、虚假用户评价、虚假客户数量或虚假公司地址。
- 不要在可复用组件中硬编码 Velmora 或默认网络列表。将所有文案和示例数据保留在 src/content.ts 中，并在 BRAND、PRODUCT_TYPE、AUDIENCE、PRIMARY_CTA 或 NETWORK_NAMES 变化时重写产品特定文案。
- 除可选的 [CREDIT] 页脚链接外，不要在网站中提及 VibeFather。所有可见文案、标签、示例数据和可访问名称都必须使用美式英语。
- 不要交付存在水平溢出、仅可点击的不可访问 div、键盘陷阱或控制台错误的版本。在 1440×900 和 390×844 下验证完整体验，包括菜单、标签页、手风琴、复制反馈和清单下载。

---
— Prompt by VibeFather · https://vibefather.ai/t/crypto-wallet-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
