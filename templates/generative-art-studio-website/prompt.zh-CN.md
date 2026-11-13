> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 生成艺术工作室网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的三页网站，[BRAND] 是 [ARTIST] 在 [CITY] 的工作室，从事 [PRACTICE]。网站本身就是它的演示：每个区块背景都是一块实时、带种子的画布，而一个全局种子（输入框、重新生成按钮、可分享的 URL hash）会以确定性方式重绘所有这些画布。页面包括：Studio（工作室）、Gallery（画廊，含 24 件固定种子作品，并提供大型数据视图）、以及 Print Shop（版画商店，在代码绘制的墙面上用 CSS 画框呈现所选种子，并配有仅限浏览器端的购物车）。

- 受众：为自家墙面购买艺术品、并乐于看到作品如何诞生的人：设计师、建筑师、开发者、平价版画收藏者。模板的购买者是生成艺术家、创意编程者或版画卖家。
- 目标：让访客在十秒内玩起种子，找到一张喜欢的图，并把那个确切的种子带到商店去配置一件 [PRODUCT]。
- 语气：干练、精确、带点幽默。像一间记录详实的工作室。短句、真实数字，不谈艺术腔，也不谈魔法。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：原生 CSS（自定义属性）
- 库：react、react-dom 18（MIT）、simplex-noise 4（MIT）、lucide-react（ISC）、@fontsource-variable/syne（OFL-1.1）、@fontsource-variable/instrument-sans（OFL-1.1）、@fontsource-variable/martian-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 Vite react-ts 模板搭建脚手架。在 vite.config.ts 中设置 base: './' 和 build.sourcemap: false。
  - 不使用路由库。编写一个小型 useHashRoute hook。路由格式：#/ 、#/gallery 、#/shop ，每个都可带可选查询参数：#/gallery?seed=4417&piece=1187 、#/shop?seed=4417&algo=flow 。缺失或无效的 seed 回退到默认值 4417；缺失 piece 表示不打开任何覆盖层。
  - 将所有文案、作品标题、价格和 FAQ 答案放在 src/content.ts 中。当变量值与默认值不同时，重写该文案以适配新的品牌、艺术家和产品，并保持相同的结构和长度。在 content.ts 中从 [BRAND] 派生 brandSlug（小写、连字符连接），并将其用于电子邮件地址、购物车存储键和 PNG 文件名。
  - 文件：src/art/prng.ts、src/art/palettes.ts、src/art/flowField.ts、src/art/circlePacking.ts、src/art/contours.ts、src/art/subdivision.ts、src/art/engine.ts、src/content.ts、src/seed.tsx（seed 上下文）、src/components/（ArtCanvas、TopBar、SeedDock、InstrumentPanel、Panel、FramedPrint、WallScene、CartDrawer、PieceOverlay、Footer）、src/routes/（Studio.tsx、Gallery.tsx、Shop.tsx）、src/styles.css。
  - prng.ts，从零编写：用 32 位 FNV-1a 对字符串 `${seed}:${salt}` 进行哈希以得到初始状态，然后返回一个函数，通过对该 32 位状态执行乘法与 xorshift 步骤来产生 [0,1) 范围内的浮点数。makeRng(seed, salt) 是艺术中唯一使用的随机性。Math.random 仅在一处使用：在 Regenerate 时选择新 seed。
  - palettes.ts：Imagery 下列出的六个艺术调色板，按该确切顺序。某个区块的调色板索引为 (seed + paletteOffset) % 6；画廊作品使用 seed % 6，无偏移。因此默认 seed 4417 在 hero 中给出 Ink Riot。
  - engine.ts 导出 renderPiece({ canvas, seed, algorithm, salt, paletteIndex, mode })，其中 mode 为 progressive 或 final。每个算法都是一个生成器，先填充背景，然后在小批次后 yield。引擎在 requestAnimationFrame 中运行它，每帧预算 8 ms，返回 { cancel, done, params } 并报告从 0 到 1 的进度。在画布上启动新任务会取消旧任务。deriveParams(seed, algorithm, salt) 返回相同的数字而不绘制，供仪表盘使用。
  - 构图不得依赖像素尺寸。噪声坐标为 x / shortSide 和 y / shortSide。描边宽度和半径按 shortSide / 900 缩放。元素数量按 area / (1440 * 900) 缩放。相同的 seed、salt 和宽高比意味着相同的画面。画布设备像素比限制为 1.5。对每个 getContext 调用进行 null 防护。
  - 流场：createNoise2D(rng) 角度场，angle = noise(x*freq, y*freq) * TAU * turns。派生：freq 1.6-4.2，turns 1-3，在 1440x900 下粒子数 2400，步数 70-190，步长 1.4-2.2，线宽 0.5-1.8，alpha 0.85。四种墨色的颜色权重：46、28、18、8 百分比。描边细且自由重叠，读起来像梳理过的丝绸。艺术家区块实例（salt 'artist'）使用 6000 个粒子，宽度 0.4-0.9。
  - 圆填充：使用均匀网格哈希的拒绝采样。派生：在 1440x900 下 9000 次尝试，半径从短边的 0.004-0.007 到 0.06-0.14，局部最大半径受低频噪声调制，间隙 1.5 px，最多 1400 个圆。按从大到小排序并按该顺序绘制。每个圆是以下之一：实心填充 55 百分比，同心环 30 百分比，半半分割圆盘 15 百分比。
  - 噪声等值线：分形噪声，2-4 个八度，freq 1.2-3.4，9-15 个层级。在 5 px 网格（手机上 10 px）上进行 marching squares。对于从低到高的每个层级，用下一个调色板墨色填充每个单元格中高于阈值的部分，然后用调色板背景色以 1 px 细线描边等值线。每批行揭示一个层级。
  - 细分：以 0.32-0.68 的比例递归分割矩形，沿较长边，深度 4-7，每次分割的停止概率为 0.12-0.28。每个叶子获得一个填充加一种图案：无、0 或 45 度的平行排线、点阵或四分之一弧。背景色的 2 px 间隙分隔叶子。叶子以打乱顺序出现。
  - ArtCanvas 组件：绝对定位、全出血、aria-hidden。当距离视口 200 px 以内时启动渐进渲染。回退：路由加载后 2500 ms，任何尚未启动的画布以 final 模式渲染，一次一个，因此任何区块都不会留白。在 seed 变化和宽度变化时重新渲染，防抖 250 ms。忽略手机上的仅高度调整。
  - 画廊缩略图通过单个队列以 480x640（手机上 240x320）渲染，在 IntersectionObserver 上启动，并将结果缓存到以 seed 和 algorithm 为键的 Map 中。印刷商店、购物车和覆盖层复用该缓存。
  - Regenerate 使用 history.replaceState 写入新 seed，并直接更新 React 状态。所有内部链接携带当前 seed。当焦点不在输入框中时，按 R 重新生成。一个礼貌的 aria-live 区域宣布新 seed。
  - 购物车：React 状态镜像到 localStorage 的 `${brandSlug}-cart` 下。将每次读写包裹在 try/catch 中，并在存储抛出异常时保持页面工作。复制链接在 try/catch 内使用 navigator.clipboard，如果失败则显示一个回退的选中文本字段。

## 变量
- [BRAND] — 工作室名称（默认：“Quillfield”）。虚构的工作室或项目名称。用于字标、标题标签和所有文案。
- [ARTIST] — 艺术家姓名（默认：“Tove Adeyemi”）。虚构的人物，或你自己。用于个人简介和主视觉文案。
- [CITY] — 工作室所在城市（默认：“Rotterdam”）。工作室所在地。用于主视觉文案和地址。
- [PRACTICE] — 工作室的创作内容（默认：“seeded generative prints drawn by pen plotter and pigment printer”）。一个复数名词短语，放在“making”之后读起来通顺。
- [PRODUCT] — 商店售卖的商品（默认：“archival pigment print”）。指被装裱的那件物品的单数名词短语。
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接，指向 https://vibefather.ai/t/generative-art-studio-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 墨紫（Ink Violet）`#160A33` — 站点底色、面板背衬、亮色按钮上的文字、页脚
- 深紫（Deep Violet）`#2A1A5E` — 凸起表面、输入框、标签背景、默认墙面颜色
- 炽珊瑚（Hot Coral）`#FF4D3D` — 次要按钮（墨紫文字）、大型展示强调、购物车数量徽标。切勿在面板上用于小号文字
- 酸黄（Acid Yellow）`#E6FF2E` — 主要按钮（墨紫文字）、高亮 H1 行、焦点环、激活状态、进度条
- 电青（Electric Teal）`#14E0C8` — 面板中的等宽数据值、链接、选中标签描边
- 群青（Ultramarine）`#1B10A8` — 画廊浮层和购物车头部中的备用凸起表面
- 月白（Moon）`#F4EFFF` — 紫色背景上的主要文字、印刷卡纸颜色
- 淡紫（Lilac）`#C4B9E6` — 紫色背景上的次要文字和等宽标签
- 面板（Panel）`rgba(22, 10, 51, 0.88)` — 所有覆盖在艺术图上的文字背衬，配合 backdrop-filter: blur(14px)。首屏主标题行使用纯色 #160A33

### 字体排印（Typography）
- 展示字体（Display）：H1、H2、字标、配置器中的价格。CSS 字体族 'Syne Variable'。H1 clamp(44px, 7.4vw, 112px) line-height 0.98 letter-spacing -0.02em；H2 clamp(32px, 4.4vw, 64px) line-height 1.02：Syne（OFL），字重 700/800
- 正文字体（Text）：段落、按钮、FAQ。CSS 字体族 'Instrument Sans Variable'。正文 17px line-height 1.55，手机上 16px。按钮 15px 字重 600：Instrument Sans（OFL），字重 400/500/600
- 等宽字体（Mono）：仪表盘、种子、参数表、说明文字、导航。CSS 字体族 'Martian Mono Variable'。桌面端 11px，手机端 12px，大写标签 letter-spacing 0.08em，line-height 1.5：Martian Mono（OFL），字重 300/400/500

### 布局与动效（Layout & motion）
- 间距：8 px 基准。12 列网格，最大宽度 1360 px，24 px 列间距，手机端 16 px 侧边距。桌面端各区块 min-height 100svh，手机端为自动高度并带 72 px 垂直内边距。面板内边距 24 px（手机端 16 px）。艺术图始终出血至视口边缘；只有内容位于网格上。
- 圆角：艺术图、画框、卡片和面板为 0。按钮、输入框和标签为 2 px。面板带 1 px 的 rgba(244, 239, 255, 0.22) 边框。UI 上无阴影；只有装裱印刷品在墙面上投下阴影。
- 动效：艺术图是主要的动效。加载时、Regenerate 时和滚动进入时，每块画布先填充其调色板背景色，然后逐步绘制：首屏约 2.4 s 完成，其余约 2-3 s。
- 动效：仪表盘数值在 Regenerate 时立即变化。绘制百分比递增，2 px 酸黄进度条填充，随后显示以 ms 计的渲染时间。
- 动效：文字面板进入视口时上移 16 px 并以 400 ms ease-out 淡入，错开 80 ms。所有面板在路由加载后 2500 ms 强制可见，确保没有任何内容保持隐藏。
- 动效：路由切换：主内容 180 ms 不透明度淡出。购物车抽屉以 260 ms 滑入。作品浮层以 200 ms 淡入。
- 动效：印刷商店：更改尺寸时，装裱印刷品的宽度以 320 ms ease-in-out 动画过渡；更改画框时，画框样式以 200 ms 交叉淡化。
- 动效：Regenerate 按钮图标每次按下旋转一次（500 ms）。按钮悬停时上移 1 px。画廊卡片在悬停和聚焦时显示 2 px 酸黄描边。
- 动效：prefers-reduced-motion：所有画布以最终模式渲染，不显示可见的描边绘制，并在一次绘制中直接呈现完成帧。禁用面板上移、路由淡出、图标旋转和画框动画。Regenerate 仍然有效。
- 图像：所有艺术图均由本站自身代码在画布上实时绘制。没有存储的艺术文件。艺术调色板按以下确切顺序，依次为背景色和四种墨色。0 Furnace：#2A0636、#FF2E63、#FFB800、#FF7A1A、#FFF1D6。1 Ink Riot：#160A33、#FF4D3D、#E6FF2E、#14E0C8、#F4EFFF。2 Deep Reef：#03203A、#14E0C8、#2E7BFF、#E6FF2E、#FF6FB5。3 Acid Bloom：#0B2A16、#C8FF00、#00E58A、#FF4D9D、#F6F7D8。4 Ultra：#1B10A8、#FF5A36、#FFE500、#39F3D0、#F2F0FF。5 Hot Paper：#FF4D3D、#160A33、#E6FF2E、#1B10A8、#FFF4E8。唯一的照片是三张生成的纪实风格照片，展示虚构艺术家及其工作室，带 1 px 酸黄边框。墙面场景和 favicon 以 SVG 绘制。

## 页面与区块
### 工作室（`#/`）
1. **共享顶栏（所有页面）** — 字标 [BRAND] 使用 Syne 800，20 px，前面有一个小型代码绘制的 SVG 标记：一个四分之一圆加三条短笔画。导航使用等宽字体：Studio、Gallery、Shop。右侧：SEED 标签、显示当前种子的 6 位数字输入框、一个重新生成图标按钮（Lucide RefreshCw，aria-label 'Regenerate'）、一个复制链接图标按钮（Lucide Link），以及一个购物车按钮（Lucide ShoppingBag），带 Hot Coral 计数徽章。
   布局：固定，64 px 高，纯色 #160A33，底部 1 px 边框。正下方是一条 4 px 的条带，分成四个等宽区块，显示主视觉调色板的四种墨色，随种子变化。低于 768 px 时，栏高 56 px，包含字标、购物车按钮和一个 Lucide Menu 按钮，点击后打开全宽导航链接面板；种子控件移至种子停靠栏。
   动效：激活的导航链接以 Acid Yellow 加下划线。墨色条带在种子变化时即时切换。
2. **共享种子停靠栏（仅手机，所有页面）** — SEED 标签、数字输入框、重新生成按钮，标签为 'Regenerate'，使用 Acid Yellow。
   布局：仅低于 768 px 时：固定于底部，60 px 高，纯色 #160A33，安全区内边距，触控目标至少 44 px。页脚增加 76 px 底部内边距以免内容被遮挡。输入框仅接受数字，0 到 999999，按 Enter 或失焦时提交。
3. **主视觉** — H1，两行：'One number draws' / 'this entire page.'，第二行使用 Acid Yellow。段落：'Quillfield is the studio of Tove Adeyemi, making seeded generative prints drawn by pen plotter and pigment printer in Rotterdam. Type a seed or press regenerate. Every background on this site redraws, and the same seed always draws the same picture.' 按钮：主按钮 'Regenerate'（Acid Yellow），次按钮 'Frame this seed'（Hot Coral），链接到 #/shop 并携带当前种子。仪表盘行使用等宽字体，标签为 Lilac，数值为 Electric Teal：SEED 004417、ALGORITHM Flow field、PALETTE Ink Riot 带四个小色块、PARTICLES、STEPS、NOISE FREQ、TURNS、DRAW 0-100 percent 带进度条、RENDER 以 ms 计。面板底部按钮：Copy link 和 Download PNG。Download PNG 在离屏以 2000x1250 执行最终模式渲染，并保存为 `${brandSlug}-seed-${seed}-flow-field.png`。
   布局：100svh 全出血流场画布，salt 'hero'，paletteOffset 0。桌面：标题块位于左下，列 1-8，底部外边距 64 px；每个 H1 行是内联 span，纯色 #160A33 背景，内边距 0.04em 0.16em，box-decoration-break: clone。段落和按钮位于其下的 Panel 中，最大宽度 560 px。仪表盘位于右下，列 9-12，360 px 宽，与标题块底部对齐。手机：顶部内边距 72 px，H1、段落面板、按钮，然后是一个紧凑面板，仅显示 ALGORITHM、PALETTE 和 DRAW，其余通过 'Parameters' 展开。两种尺寸下均至少保留 25% 的画面不被遮挡。
   动效：流场笔画在加载时和每次种子变化时逐步绘制。标题块仅在首次加载时上升。
4. **方法** — H2：'A number goes in. A picture comes out.' 三个编号面板。01 Seed：'A whole number from 0 to 999,999. It sets every decision below it, so the same number always returns the same picture.' 02 System：'Four algorithms written in this studio: flow field, circle packing, noise contours, subdivision. Nothing is borrowed and nothing is trained.' 03 Surface：'When a seed earns its place, it goes out as an archival pigment print, checked by hand against the screen proof.' 统计行使用等宽字体，数字为 Syne：'1,000,000 seeds'、'4 algorithms'、'6 palettes'、'212 prints shipped last year'。
   布局：全出血圆填充画布，salt 'method'，paletteOffset 1。H2 位于列 1-7 的 Panel 中。三个面板位于 12 列行上，分别为列 1-4、5-8、9-12，顶部外边距阶梯为 0、64 和 128 px。统计行是区块底部的全宽纯色 #160A33 条带，含四个等宽单元格。手机：单列，无阶梯；统计形成 2x2 网格。
   动效：区块进入时圆形从大到小绘制。面板以交错方式上升。
5. **精选种子** — H2：'Seeds that earned a wall.' 段落：'Most numbers make mud. We keep about one in four hundred. These six stayed.' 六张卡片使用画廊作品 40213、2718、4096、1024、7702、55012。每张显示 3:4 缩略图和等宽字体说明，包含种子、标题和算法，并链接到 #/gallery 及作品集。按钮：'Open the full gallery'。
   布局：全出血噪声轮廓画布，salt 'selected'，paletteOffset 2。标题面板位于列 1-5。下方是水平滚动吸附行，卡片 280 px 宽，间距 16 px，向右溢出边缘；在 1440 宽下约可见 4.5 张卡片。说明文字有纯色 #160A33 衬底。手机：卡片 72 vw 宽。
   动效：轮廓层级在进入时从低到高填充。卡片悬停时显示 Acid Yellow 轮廓。
6. **商店预告** — H2：'This exact picture, on paper.' 段落：'You are looking at seed {seed}. Order it as an archival pigment print and we print that number, not a lookalike.' 等宽字体列表：'From $78 unframed'、'4 sizes, 12 x 16 to 36 x 48 in'、'3 frames or rolled'、'Rolled ships in 5 business days, framed in 12'。按钮：'Frame seed {seed}'（Acid Yellow），链接到 #/shop 并携带当前种子。{seed} 为实时值。
   布局：全出血细分画布，salt 'teaser'，paletteOffset 3。桌面两列：列 2-6 放置当前种子的 FramedPrint，黑色白蜡木带卡纸，3:4，约 460 px 宽，带柔和墙面阴影。列 8-12 放置 Panel。手机：印刷品先全宽减去边距，然后是面板。
   动效：细分叶片以打乱顺序出现。装裱印刷品在种子变化时逐步重绘。
7. **艺术家** — H2：'I write the rules, then get out of the way.' 简介：'Tove Adeyemi spent eleven years drawing shipping charts for a harbor authority before she wrote her first flow field on a night train. She founded Quillfield in a former rope workshop in Rotterdam, where two pen plotters and one large-format pigment printer now run most days. Every algorithm on this site was written here, and every print is checked against its screen proof before it ships.' 等宽字体事实表：STUDIO 'Studio 4B, 19 Ropemaker Yard, Rotterdam'；OPEN 'Saturdays 11:00-16:00, other days by appointment'；EMAIL 'studio@quillfield.example' 作为 mailto 链接；SHOWN AT 'Harbor Light Print Fair'、'Kiln Street Project Space'、'Northbank Editions Week'。按钮：'Browse the gallery'。
   布局：全出血流场画布，salt 'artist'，paletteOffset 4（默认种子 4417 时为珊瑚色 Hot Paper 底色）。桌面：肖像照片位于列 1-4，3:4；绘图仪照片位于列 4-6，4:3，与肖像右下角重叠 48 px。简介面板位于列 7-12。手机：肖像全宽，绘图仪照片在其下方全宽，然后是面板。
   动效：细线笔画逐步绘制。照片在进入时上升 16 px。
8. **共享页脚（所有页面）** — 左侧：[BRAND] 字标使用 Syne 800，字号 clamp(48px, 9vw, 140px)。等宽字体行：'This page was drawn from seed {seed}.' 带一个 'Copy link' 按钮。列：Pages（Studio、Gallery、Shop）；Visit（来自艺术家区块的地址和营业时间）；Write（电子邮件）。底部等宽字体行：'[BRAND], [CITY]'，以及若保留 [CREDIT] 则显示其小链接。
   布局：纯色 #160A33，顶部 1 px 边框，72 px 内边距。其上方是一条 96 px 全出血条带画布，运行细分，salt 'footer'，paletteOffset 5。列在手机上堆叠。

### 画廊（`#/gallery`）
1. **画廊页头** — H1：'24 numbers worth keeping.' 段落：'Every piece below is drawn live in your browser from the seed printed beneath it. Nothing here is a stored image.' 等宽字体的筛选标签带计数：All 24、Flow field 6、Circle packing 6、Noise contours 6、Subdivision 6。
   布局：60svh 全出血 noise-contours 画布，salt 'gallery-head'，paletteOffset 3。标题放在左下角的 Panel 中，占第 1-7 列。筛选标签位于画布正下方一条实色 #160A33 的横条中，吸附在顶栏下方；手机上横向滚动。
   动效：轮廓在加载时和种子变化时填充。筛选标签即时切换；激活的标签带 Electric Teal 描边。
2. **作品网格** — 24 件固定作品（种子、标题）。Flow field：1187 Slack Water；40213 Tidewrack；7702 Undertow；92814 Ember Drift；30505 Long Exposure；615003 Salt Wind。Circle packing：2718 Frogspawn；55012 Bubble Chamber；8086 Pollen Count；310441 Lily Raft；19937 Full Car Park；777001 Coin Jar。Noise contours：4096 Imaginary Fjord；66060 Heat Map of Nowhere；12345 Thumbprint；250753 Slow Landslide；90909 Weather Front；505050 Agate。Subdivision：1024 Allotments；31337 Floor Plan；864200 Shipping Manifest；16180 Golden Excuse；70707 Window Count；428571 City Block。每张卡片：3:4 缩略图画布，等宽字体说明文字，种子用 Electric Teal，标题用 Moon，算法用 Lilac。这些种子不随全局种子变化。在网格和浮层中，按所列顺序排列作品。
   布局：网格为 4 列，间距 16 px，最大宽度 1360 px，手机上 2 列，间距 12 px。网格后方是一个吸附的视口高度画布（position: sticky; top: 0; height: 100vh; 负底部外边距），运行 flow field，salt 'gallery-bg'，paletteOffset 1，由全局种子驱动。说明文字有实色 #160A33 衬底。24 张卡片下方是一个 Panel，含 'Found one? Hang it.' 和一个指向 #/shop 的按钮。
   动效：缩略图在接近视口时通过队列渲染，完成后各自在 200 ms 内淡入。悬停显示 Acid Yellow 描边。
3. **作品大图视图** — 点击卡片时打开，并在 hash 中设置 ?piece=<seed>，因此可分享。左侧：作品在大画布上逐步绘制。右侧，等宽字体：标题用 Syne 700；SEED；ALGORITHM；PALETTE 名称；五个色块，各带其十六进制色值；来自 deriveParams 的参数表；ELEMENTS drawn；RENDER ms。按钮：'Frame this piece'（Acid Yellow），链接到 #/shop 并带上种子和算法；'Use this seed on the site'（描边），设置全局种子。上一个和下一个按钮（Lucide ChevronLeft、ChevronRight）以及关闭按钮（Lucide X）。
   布局：固定全视口对话框，背景 Ultramarine #1B10A8，画布最高 80vh，3:4，位于左侧，右侧是 380 px 实色 #160A33 数据列。手机：画布在上方占满宽度，数据在下方，整个对话框可滚动。焦点被锁定；Esc 和关闭按钮清除 piece 参数；左右方向键在作品间切换。
   动效：在 200 ms 内淡入。笔画逐步绘制，或在减少动态效果时直接显示为完成状态。

### 版画商店（`#/shop`）
1. **配置器** — H1：'Pick a number. Hang it.' 控件位于一个 Panel 中。种子：共享种子输入框加上 'Surprise me'，点击后重新生成。算法分段控件：Flow field、Circle packing、Noise contours、Subdivision。尺寸单选，全部为 3:4：12 x 16 in $78；18 x 24 in $140；24 x 32 in $240；36 x 48 in $460。画框单选，按相同顺序列出各尺寸的加价：无框（卷装）+$0；黑蜡木 +$65/$95/$140/$220；天然橡木 +$75/$110/$160/$250；珊瑚漆 +$85/$120/$175/$270。墙面预览色块，仅用于预览：深紫（Deep Violet）#2A1A5E、珊瑚（Coral）#FF4D3D、青绿（Teal）#0E7C74、酸黄（Acid）#E6FF2E。摘要使用等宽字体，例如 '18 x 24 in, black ash, seed 4417'，价格使用 Syne 800，默认 $235。按钮：'Add to cart'（酸黄（Acid Yellow））。说明：'Rolled prints ship in 5 business days, framed in 12. Each seed is capped at 10 prints per size.' 默认值：当前全局种子，或来自 hash 的种子和算法；算法为 flow；18 x 24 in；黑蜡木；深紫墙面。
   布局：粘性视口高度的细分画布位于区块后方，salt 为 'shop-bg'，paletteOffset 4。桌面端：H1 位于 Panel 中，占据第 1-8 列，位于 WallScene 上方，WallScene 占据第 1-8 列；控制面板位于第 9-12 列，粘性定位在顶部 88 px。WallScene 是一个 SVG 房间，16:10：墙面填充来自色块，底部 16% 为墨紫（Ink Violet）地板带，一个矮边柜，上面放着一个茎花瓶和一盏带径向光渐变的球形吊灯，全部为扁平形状，无品牌引用。FramedPrint 是一个绝对定位的 3:4 画布，居中于边柜上方，缩放使场景宽度为 120 英寸，因此 36 x 48 在边柜旁边看起来非常大。CSS 中的画框：黑蜡木 18 px #17141C 带内阴影；天然橡木 18 px 重复线性渐变纹理，介于 #C89A5B 和 #A97B3F 之间；珊瑚漆 18 px #FF4D3D 带细高光；每个带框选项都有 8% #F4EFFF 的卡纸。无框无边框，两个小夹子和细阴影。画框宽度随版画缩放。手机端：H1、WallScene 全宽，然后控件按正常流排列。
   动效：尺寸变化以 320 ms 动画宽度。画框变化以 200 ms 交叉淡入淡出。版画在种子或算法变化时逐步重绘。加入购物车会打开购物车抽屉。
2. **工作室精选** — H2：'Six we would hang ourselves.' 卡片，每张包含一个 FramedPrint 以及标题、种子、尺寸、画框和计算价格：40213 Tidewrack，18 x 24，黑蜡木，$235；55012 Bubble Chamber，12 x 16，珊瑚漆，$163；66060 Heat Map of Nowhere，24 x 32，天然橡木，$400；31337 Floor Plan，18 x 24，天然橡木，$250；615003 Salt Wind，36 x 48，黑蜡木，$680；90909 Weather Front，12 x 16，无框，$78。每张卡片上的按钮：'Load this one'，用于在配置器中设置种子、算法、尺寸和画框，并向上滚动到配置器。
   布局：全出血 noise-contours 画布，salt 为 'picks'，paletteOffset 2。H2 位于 Panel 中，占据第 1-6 列。3 列卡片网格，配纯色 #160A33 说明文字；版画位于深紫卡片底色上，内边距 32 px。手机端 1 列。
   动效：卡片以交错方式上升。缩略图来自渲染队列。
3. **纸张与装裱** — H2：'What actually arrives.' 三列：纸张：'310 gsm cotton rag with a matte surface. Acid free, and heavy enough to lie flat.' 墨水：'A 12-color pigment set, proofed by hand against the screen before anything ships.' 画框：'Solid ash, oak or lacquered poplar with UV-filtering acrylic. Wired and ready to hang.' 等宽字体行：'Rolled: tube, $18 flat. Framed: crate, $48 flat. US and EU.'
   布局：全出血 circle-packing 画布，salt 为 'paper'，paletteOffset 5。校样台照片 4:3 位于第 1-6 列；Panel 包含 H2 和三个堆叠文本块，位于第 7-12 列。手机端：照片，然后面板。
   动效：进入时圆形按从大到小绘制。
4. **收藏者笔记** — 三条引语。Priya Raman，建筑师：'We picked seed 40213 because it is our old house number. It turned out to be the best picture on the list.' Jonas Weil，软件工程师：'I checked the link a year later. Same seed, same picture. That is why I trust the print.' Dalia Mensah，咖啡馆老板：'Three 36 x 48 pieces on a brick wall. Customers keep asking what the numbers mean.'
   布局：纯色群青（Ultramarine）#1B10A8 色带，顶部有 96 px 细分条画布（salt 为 'notes'，paletteOffset 1）。3 列引语文本，Syne 700，24 px，下方以等宽字体显示姓名和种子。手机端 1 列。
5. **FAQ** — H2：'Questions we get at the fair.' 手风琴。'Can someone else buy the same seed?'：'Yes, up to the cap. Each seed is limited to 10 prints per size, then that size is retired.' 'Will the print match my screen?'：'Very closely. We proof each seed by hand, and pigment inks run slightly deeper than a bright display.' 'Can I request a seed that is my birthday?'：'Please do. Type it in. If it makes mud, press regenerate and blame the number.' 'What is your return policy?'：'Prints are made to order, so we replace damaged items free within 30 days but do not take back a change of mind.' 'Do you ship outside the US and EU?'：'Yes, by quote. Write to the studio with your country and the size.'
   布局：全出血 flow-field 画布，salt 为 'faq'，paletteOffset 0。单个 Panel 位于第 3-10 列，项目之间用 1 px 分隔线隔开。原生按钮触发器，配 Lucide Plus 和 Minus。第一项默认展开。
   动效：手风琴高度以 220 ms 动画，减少动态效果时即时。
6. **购物车抽屉** — 标题 'Your cart' 位于群青上。行项目：小 3:4 缩略图、标题或 'Seed 4417'、算法、尺寸、画框、数量步进器、价格、移除（Lucide Trash2）。总计：小计；运费（如果所有商品均为卷装则 $18，如果任一商品带框则 $48）；总计。按钮 'Checkout' 显示内联说明：'Checkout is switched off on this site. Your cart is saved only in this browser.' 空状态：'Nothing framed yet.' 带一个按钮指向 #/shop。从每个页面顶部栏的购物车按钮打开。
   布局：右侧抽屉宽 420 px，纯色 #160A33，全高，可滚动列表，总计固定在底部。手机端全宽，位于种子停靠栏上方。焦点被捕获；Esc 和遮罩可关闭。
   动效：以 260 ms 滑入，减少动态效果时即时。

## 资产
- 图片：所有作品图、缩略图、区块背景和墙面场景均以代码绘制（Canvas 2D 和内联 SVG）。Favicon：位于 public/favicon.svg 的内联 SVG 文件，在 #160A33 底色上有一个珊瑚色四分之一圆和三条酸黄色笔触。标题标签：'[BRAND], generative prints'。
- 图片：下载 https://media.vibefather.ai/assets/a66f3fce-e465-4855-89ba-d993f6885cef/artist-portrait.webp 到 public/images/artist-portrait.webp。Alt：'The artist leaning over a pen plotter in the workshop, seen from behind, lit by a coral lamp.' 用于 Studio 页面的 Artist 区块。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。图中为虚构人物，是供替换为你自己照片的占位图。
- 图片：下载 https://media.vibefather.ai/assets/a66f3fce-e465-4855-89ba-d993f6885cef/plotter-at-work.webp 到 public/images/plotter-at-work.webp。Alt：'A pen plotter arm drawing thin coral lines across a large sheet of paper.' 用于 Studio 页面的 Artist 区块。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：下载 https://media.vibefather.ai/assets/a66f3fce-e465-4855-89ba-d993f6885cef/proof-table.webp 到 public/images/proof-table.webp。Alt：'Colorful abstract proofs and framed prints laid out on a workshop table under a lamp.' 用于 Shop 页面的 Paper and framing 区块。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图标：仅使用 lucide-react（ISC）：RefreshCw、Link、ShoppingBag、Menu、X、ChevronLeft、ChevronRight、Plus、Minus、Trash2、Download。
- 字体：通过 Fontsource 自托管：在 src/main.tsx 中导入 '@fontsource-variable/syne'、'@fontsource-variable/instrument-sans' 和 '@fontsource-variable/martian-mono'。均为 OFL-1.1。
- 图片：在项目根目录的 ASSETS.md 中列出这三张生成的图片，包含路径、来源 URL、作者 'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template' 以及相同的许可说明。同时列出 simplex-noise、lucide-react 和三种字体及其许可证，并说明所有作品图均由本项目自己的代码绘制。

## 禁止事项
- 不使用后端、服务器代码、API 路由、数据库、认证、任何会提交到某处的表单、支付服务商或第三方 API。购物车仅存在于浏览器中。
- 不使用来自 fonts.googleapis.com、fonts.gstatic.com、Adobe Fonts 或任何 CDN 的字体。通过 Fontsource 自托管。不使用商业字体或自定义签名字体。
- 不使用 CDN 脚本或 link 标签，不使用分析工具，不热链文件。将每张图片下载到项目中。
- 不生成 source map，不要将 src/ 复制到 dist/。保持 dist/ 在 20 MB 以下。使用相对资源路径。
- 内部链接使用本提示词中的 hash 路由。绝不要链接到裸目录。直接打开任何路由都必须可用，使用默认种子且没有空状态。
- 在 1440x900 或 390x844 下不出现控制台错误。按指定要求遵循 prefers-reduced-motion。
- 不在艺术图形上直接放置文字。每一段文案都位于 Panel（面板）或实色背板上，以便在任何生成输出（包括珊瑚色 Hot Paper 底色）上保持 WCAG AA 对比度。
- 不出现空白画布：每个区块必须在无需滚动到该区块的情况下完成绘制，并通过 2500 ms 回退机制。不要阻塞主线程；以时间分片批次进行渲染。
- 不得使用或模仿任何具名生成系列或艺术家的代码、参数或输出。特别地，流场中不得出现粗大且不重叠的带状笔触，也不得出现单条彩虹波浪线。
- 不得使用其他艺术家的作品或图片作为画廊条目。每件作品均由本网站自身代码生成。不存储作品文件。
- 不出现 NFT 平台名称或标识，不使用钱包、mint、token、on-chain 或 drop 相关用语。仅限 Editions（版次）和 prints（印刷品）。
- 不出现真实画廊、博物馆、印刷厂、造纸商或装裱品牌的名称或标识。所有场馆、收藏家和人物均为虚构。
- 不出现真实艺术家的姓名、肖像或传记。工作室和艺术家来自 [BRAND] 和 [ARTIST]。
- 从零编写算法。不使用创意编程书籍、教程或 sketch 分享网站中的代码片段，不使用 p5.js 或其他 sketching 框架。
- 不要更改技术栈、添加路由器或 UI 套件，或用框架替换纯 CSS。
- 不使用占位图服务和图库网站。除带有 [BRAND] 的普通 title 标签和 favicon 外，不做任何 SEO 工作。
- 网站内不得提及 VibeFather，可选的 [CREDIT] 页脚链接除外。所有文案、标签和 alt 文本使用美式英语。不要使用奶油色或米白色页面背景。

---
— Prompt by VibeFather · https://vibefather.ai/t/generative-art-studio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
