> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 物理游乐场落地页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND]、[PRODUCT] 打造的单页落地站点。首屏是一个玩具：在一个带边框的画布式竞技场内，[HERO_WORD] 的每个字母以及九个小型 UI 芯片（一个 Share 按钮、一个开关、色板、实时光标标签、一个滑块）都是独立的刚体，由一个手写的 2D 物理引擎驱动。它们从上方错落落下，弹跳、堆叠并停在竞技场地板上；访客可以用鼠标或触摸抓取任意部件并投掷，在手机上倾斜设备可改变重力方向。首屏之下，页面回归常规的 SaaS 节奏：一个功能跑马灯、一个六卡片功能网格（每张卡片内含一小段循环播放的物理小场景）、一个带月付/年付切换的三档定价表、带人像的用户评价、一个仅在本地提交后洒落彩纸方块（confetti blocks）的注册横幅、一个 FAQ 和一个页脚。

- 受众：[AUDIENCE]，他们想要一款感觉好玩、但能产出精确、可直接交付成果的工具；其次是开发者和独立创始人，他们想了解从零实现的 2D 物理循环如何运作，并将其复用到自己的产品页上。
- 目标：让访客停留在首屏并玩耍，然后引导他们向下浏览页面、选择方案，并在注册横幅中留下邮箱。
- 基调：温暖、机智、具体。短句、真实数字、不用流行术语。视觉上具有触感和贴纸感：粗壮的圆角方块、厚重的近黑色描边、硬偏移阴影、暖调米白画布上的糖果色，动感弹跳但绝不混乱。

## 技术栈
- 框架：Vite 5 + 原生 TypeScript
- 样式：Tailwind CSS 3.4
- 库：vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、lucide（原生包，按图标单独导入）（ISC）、@fontsource-variable/bricolage-grotesque（OFL-1.1）、@fontsource-variable/figtree（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置：
  - 使用 vanilla-ts 模板通过 npm create vite@latest 搭建脚手架。项目根目录下只有一个 HTML 页面：index.html，包含 <div id="app"></div> 和 <script type="module" src="/src/main.ts">。不使用 UI 框架，也不使用物理库：引擎在 src/physics/ 中手写实现。
  - vite.config.ts：base './'，build { outDir 'dist', sourcemap false, assetsInlineLimit 0, target 'es2020' }。不要把 src/ 复制到 dist/。package.json 脚本：dev 'vite'，build 'tsc --noEmit && vite build'，preview 'vite preview'。
  - Tailwind 3.4 通过 PostCSS 配置，content 为 ['./index.html', './src/**/*.ts']。在 tailwind.config.ts 中，把设计（Design）下的每种颜色按给定的精确 kebab-case 名称加入 theme.extend.colors（paper、paper-deep、card、ink、ink-soft、rule、tomato、butter、mint、sky、grape、tomato-tint、butter-tint、mint-tint、sky-tint、grape-tint）。fontFamily：display ['Bricolage Grotesque Variable', 'system-ui', 'sans-serif']，sans ['Figtree Variable', 'system-ui', 'sans-serif']，mono ['JetBrains Mono', 'ui-monospace', 'monospace']。boxShadow：hard '4px 4px 0 #1A1714'，'hard-md' '6px 6px 0 #1A1714'，'hard-lg' '8px 8px 0 #1A1714'。borderWidth：3 '3px'。maxWidth：container '1200px'。
  - src/fonts.ts 导入 '@fontsource-variable/bricolage-grotesque'、'@fontsource-variable/figtree'、'@fontsource/jetbrains-mono/500.css'。src/main.ts 先导入 src/fonts.ts 和 src/style.css，然后渲染页面。
  - src/style.css 包含 @tailwind base/components/utilities，外加：body 背景 #FBF6EC，文字 #1A1714，font-sans，antialiased；.dot-grid 背景（radial-gradient(#1A171422 1.2px, transparent 1.4px) 0 0 / 22px 22px）；.btn、.btn-primary、.btn-outline、.pill 和 .chip 组件类；@keyframes marquee（translateX 0 到 -50%）、@keyframes pop-in（scale .6 opacity 0 到 scale 1 opacity 1，cubic-bezier(.34,1.56,.64,1)）；以及一个 @media (prefers-reduced-motion: reduce) 块，禁用 marquee 和 pop-in 动画以及所有时长超过 0.01s 的 CSS 过渡。
  - 文件布局：src/content.ts（所有字符串、数字、chip 定义、功能、方案、用户评价、FAQ 条目和图片路径，带类型，作为一个导出对象）；src/lib/brand.ts（brandSlug = [BRAND] 转为小写，将每一段连续的非字母数字字符替换为 '-'，并去掉首尾的 '-'；emailDomain = 去掉连字符的 brandSlug + '.com'）；src/lib/storage.ts（安全的 localStorage get/set，用 try/catch 包裹，键以 brandSlug + ':' 为前缀）；src/lib/motion.ts（从 matchMedia 得到 reducedMotion 布尔值，外加一个变更监听器，用于重新加载竞技场布局）。
  - src/physics/ 中的物理模块（纯 TypeScript，除 render.ts 外不涉及 DOM）：vec.ts（小型 2D 向量辅助函数：add、sub、scale、dot、cross、rotate、length）、body.ts（Body 类型：id、w、h、x、y（中心）、angle、vx、vy、av、invMass、invInertia、restitution、friction、isStatic、sleeping、sleepTime、grabbed）、collide.ts（OBB 对 OBB，使用分离轴定理，在 4 个面法线上检测，返回法线、穿透深度和 1–2 个接触点，接触点通过将入射边裁剪到参考面得到）、world.ts（World 类：bodies、gravity {x,y}、step(dt)、addBody、removeBody、wakeAll、setBounds(width,height)）、drag.ts（指针抓取和抛出）、loop.ts（固定时间步运行器）、render.ts（将每个 body 的变换写入其 DOM 元素）。
  - 引擎常量（位于 src/physics/world.ts，导出以便读者调整）：固定步长 1/120 s；每个动画帧最多 5 个子步（丢弃超出部分的剩余时间）；重力大小 G = 2600 px/s^2，方向向下；密度 0.001，因此质量 = w*h*0.001，转动惯量 = mass*(w*w + h*h)/12；线性阻尼 0.02 每秒，角阻尼 0.6 每秒，应用方式为 v *= 1 / (1 + damping*dt)；最大线速度 4000 px/s；字母块的恢复系数为 0.3，chip 的恢复系数为 0.45；所有物体的摩擦系数为 0.55；静态墙的 invMass 为 0，invInertia 为 0。
  - World.step(dt)：(1) 对醒着的非静态 body 积分速度，应用重力和阻尼；(2) 宽阶段：跳过轴对齐包围盒不重叠的配对，以及两个 body 都处于睡眠或静态的配对；(3) 用 collide.ts 进行窄阶段；当一个醒着的 body 以高于 30 px/s 的相对速度接触睡眠 body 时，唤醒该睡眠 body；(4) 顺序冲量求解器，10 次迭代，对每个接触点：法向冲量仅在接近速度超过 60 px/s 时应用恢复系数，累积法向冲量限制为 >= 0，库仑摩擦冲量限制为 +/- friction * 法向冲量，使用标准有效质量 1/(invMassA + invMassB + (rA x n)^2 invIA + (rB x n)^2 invIB)；(5) 积分位置和角度；(6) 位置修正：沿法线将每对 body 推开 max(penetration - 0.5, 0) * 0.35，按逆质量分配；(7) 睡眠：速度 < 8 px/s 且 |av| < 0.08 rad/s 持续 0.6 s 的 body 进入睡眠（速度归零）；被抓取的 body 永不睡眠。
  - 边界：每个 world 根据其容器尺寸构建三面静态墙：地板，其上边缘为容器底部（200 px 厚），以及左右墙，位于容器边缘之外（200 px 厚，4000 px 高，向上延伸远超顶部）。没有天花板：抛出的碎片会飞起并落回。如果任何 body 最终超出容器 120 px 以上（例如在调整尺寸后），将其传送到地板上方、最近的合法 x 位置，速度为零。
  - loop.ts：Runner 类，包含 start()、stop()，以及基于 requestAnimationFrame 时间戳的累加器（帧间隔限制为 1/20 s）。当所有 body 都睡眠且没有抓取时自行停止，并在唤醒时重启（指针按下、倾斜变化、Reset、Shake、调整尺寸）。每个 world 的容器由 IntersectionObserver 监视：离开视野即停止，回到视野即启动。document 的 visibilitychange 也会停止和启动它。
  - render.ts：每个 body 映射到一个绝对定位元素（top 0、left 0、will-change transform），位于其容器内。每帧设置 transform = translate3d(x - w/2 px, y - h/2 px, 0) rotate(angle rad)。无论旋转如何，保持硬阴影指向右下方：计算偏移 (6, 6) 按 -angle 旋转，四舍五入到 0.5 px，仅当角度自上次写入以来变化超过 0.01 rad 时设置 style.boxShadow = `${sx}px ${sy}px 0 #1A1714`。
  - drag.ts：在 body 元素上 pointerdown 时调用 setPointerCapture，将 body 标记为 grabbed 和 awake，将抓取点存储在 body 局部坐标中，并添加类 is-grabbed（内部包装器缩放到 1.06，阴影偏移从 6 增长到 10 px，z-index 50，cursor grabbing）。每一步，抓取点处的弹簧-阻尼器将 body 拉向指针：期望速度 = (pointer - grabWorldPoint) * 25，限制为 3500 px/s，作为冲量施加在抓取点，等于 (desired - velocityAtGrabPoint) * effectiveMass * 0.5，因此 body 在偏心持有时会自然摆动和旋转。保留最近 6 个带时间戳的指针采样；在 pointerup 或 pointercancel 时，将 body 的线速度设置为最近 100 ms 内的平均指针速度（限制为 3000 px/s），保留其角速度，然后释放。悬停的 body 显示 cursor grab。在每个 body 元素和竞技场上设置 touch-action: none，使拖动永远不会滚动页面，但通过触摸空白竞技场背景保持页面可滚动（竞技场背景层上 touch-action pan-y）。
  - src/hero/arena.ts 从 content.ts 构建 hero world：[HERO_WORD] 的每个非空格字符对应一个字母 body，每个 chip 对应一个 body，创建它们的 DOM，放置生成位置，运行下落动画，并连接 Reset、Shake 和倾斜。src/hero/tilt.ts 处理 DeviceOrientationEvent。src/features/vignettes.ts 为每个功能卡片创建一个小的 World。src/signup/confetti.ts 创建注册区域的彩纸 world。src/sections/*.ts 各自导出一个函数，从 content.ts 返回该区域的 HTML 字符串；main.ts 将它们拼接进 #app，然后挂载交互部分（header、arena、marquee、vignettes、定价切换、FAQ、注册）。
  - 在首次构建之前，使用 curl -L -o 将资源（Assets）下列出的每张图片下载到 public/images/，使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 如资源（Assets）下所述。index.html：lang en，<meta name='theme-color' content='#FBF6EC'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BRAND] — sketch interface ideas together</title>（当 [PRODUCT] 变化时，重写破折号后的部分以适配 [PRODUCT]）。
  - 在项目根目录下按“Assets”一节的说明编写 ASSETS.md。dist/ 目录包含 index.html、带哈希的 JS/CSS、woff2 字体文件、favicon.svg 和三张人像；请将 dist/ 保持在 5 MB 以下。

## 变量
- [BRAND] — 品牌名称（默认："Wobblebox"）。虚构的产品名，一到两个单词。用于字标、标题、页脚区块、电子邮件（hello@ + emailDomain）和 localStorage 键。绝不能是真实公司。
- [PRODUCT] — 产品是什么（默认："a browser canvas for sketching interface ideas together"）。一个以小写 'a' 或 'an' 开头的短语。驱动主视觉副标题、标题、功能卡片、标签芯片和 FAQ。最适合 playful 的创意或生产力工具。
- [AUDIENCE] — 面向谁（默认："product designers and the engineers who build their screens"）。一个小写短语。用于主视觉注释、定价介绍和推荐语中的角色。
- [HERO_WORD] — 物理标题（默认："SKETCH LOOSE"）。在主视觉中下落的字母。6–14 个字母，一到两个单词，大写。每个字母变成一个可拖拽的方块；空格分隔单词。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/physics-playground-landing-page（默认：是；删除此行以移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- paper `#FBF6EC` — 页面背景和竞技场背景（温暖的米白画布）
- paper-deep `#F3EADA` — 交替区块背景（功能、FAQ）、输入框填充
- card `#FFFDF8` — 卡片和白色 chip 填充
- ink `#1A1714` — 所有描边（3px）、硬偏移阴影、标题和正文文字、页脚背景
- ink-soft `#5B544B` — 次要文字、说明文字、元标签
- rule `#E4D9C6` — 卡片内部和 FAQ 中的细线分隔线
- tomato `#FF5A36` — 主糖果色：主按钮、Share chip、颜色循环中的第一个字母
- butter `#FFC93C` — 糖果色：跑马灯带、精选定价卡片、注册带背景
- mint `#34D399` — 糖果色：开关轨道、成功状态、评论 chip
- sky `#4D8DFF` — 糖果色：光标标签、悬停链接、字母颜色循环
- grape `#A77BFF` — 糖果色：第二个光标标签、徽章、字母颜色循环
- tomato-tint `#FFE1D8` — tomato 强调功能卡片的暗角背景色调
- butter-tint `#FFF1C7` — butter 强调卡片的暗角背景色调
- mint-tint `#D5F6E9` — mint 强调卡片的暗角背景色调
- sky-tint `#DCE8FF` — sky 强调卡片的暗角背景色调
- grape-tint `#ECE3FF` — grape 强调卡片的暗角背景色调

### 排版
- 展示字体：字母块、区块标题、价格、字标：Bricolage Grotesque Variable（OFL），字重 600/700/800
- 正文字体：正文文案、按钮、导航、FAQ：Figtree Variable（OFL），字重 400/500/600/700
- 等宽字体：如 'Frame 12' 的 chip 标签、暗角中的代码标签、眉标：JetBrains Mono（OFL），字重 500

### 布局与动效
- 间距：8px 基准。容器最大宽度 1200px，侧边内边距 24px（640px 以下为 16px）。区块在桌面端使用 112px 垂直内边距，移动端为 72px。卡片间距 24px（移动端 16px）。区块标题：眉标（等宽 13px 大写，letter-spacing 0.08em，ink-soft）位于 Bricolage 800 的 h2 上方 12px，桌面端 56px/1.0，移动端 36px/1.05，letter-spacing -0.02em，然后下方 16px 处是 18px 的 Figtree 介绍段落（最大宽度 560px，ink-soft）。
- 圆角：一切都是粗壮且圆润的：字母块 18px（移动端 10px），chip 和按钮为 999px 胶囊形，方形 chip 除外为 14px，卡片 24px，hero 竞技场框架 28px，注册面板 32px，输入框 999px。每个带边框的元素都使用 3px ink 边框。
- 动效：Hero 掉落：字母按阅读顺序生成，间隔 90 ms，从竞技场顶部上方 y = -140 到 -620 px 处、以 +/-0.15 rad 的随机角度落下，然后在最后一个字母之后以 70 ms 间隔在随机 x 位置生成 chip；所有下落、弹跳和静止都由物理引擎完成，而非 CSS。
- 动效：按钮像贴纸一样按压：悬停时 translate(-2px,-2px)，阴影从 4px 到 6px，120ms ease-out；激活时 translate(2px,2px)，阴影为 0，60ms。
- 动效：被抓取的物体抬起：被持有时内部包裹层 scale 1.06，阴影偏移 10px，释放时以 180ms cubic-bezier(.34,1.56,.64,1) 弹回 1.0 和 6px。
- 动效：跑马灯带以每循环 40 s 持续向左滚动，悬停时暂停。
- 动效：区块标题和卡片在 20% 可见时以“弹出”方式进入：从 translateY(24px) scale(0.96) opacity 0 到静止，520ms cubic-bezier(.34,1.56,.64,1)，卡片错开 70ms；由 IntersectionObserver 触发一次。
- 动效：功能暗角在卡片进入视图时掉落其部件，然后循环：在所有部件休眠且 5 s 无交互后，部件在 200ms 内缩小到 scale 0 并重新掉落。
- 动效：定价开关旋钮以 260ms 过冲缓动滑动；价格数字垂直滚动（旧值向上滑出，新值从下方滑入），250ms。
- 动效：推荐卡片静止时保持小角度旋转（-2deg、1.5deg、-1deg），悬停时在 200ms 内以 translateY(-4px) 拉直到 0deg。
- 动效：prefers-reduced-motion：无掉落、无倾斜、无 Shake、无空闲循环、无跑马灯移动、无弹入、无数字滚动。Hero 和暗角部件以预先静止的构图布局渲染；拖拽仍然有效，释放的部件在正常重力下静止。
- 图像：hero 的视觉锚点是带框的物理竞技场本身：一个精致的、虚构的画布应用模型（点状网格、迷你工具栏、糖果字母块和带有粗描边与硬阴影的 UI chip），绝不是平面背景上的排版。所有 UI chip、暗角部件、图标和装饰形状都用 HTML/CSS 和 Lucide 图标在代码中绘制；没有任何真实设计工具的截图，也没有任何类似设计工具的产品界面元素。唯一的位图图像是三张 AI 生成的虚构人物推荐头像，作为同一系列绘制：扁平矢量插画，无描边，无面部特征，温暖的米白背景配柔和粉彩斑块，头部和肩部。肖像裁剪为 64px 圆形，带 3px ink 边框。

## 页面与区块
### 首页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[BRAND] = Wobblebox，[PRODUCT] = 一个用于共同勾画界面创意的浏览器画布，[AUDIENCE] = 产品设计师以及实现他们界面的工程师，[HERO_WORD] = SKETCH LOOSE）。把每个字符串、价格和数字都放进 src/content.ts 并从那里渲染。如果任何变量值不同，请重写主视觉文案、九个 chip 标签（保持其形状、尺寸和颜色）、跑马灯条目、六张功能卡片及其小插图组件、套餐功能、用户评价和 FAQ，使其对新产品的描述具体且可信，同时保持相同的结构和数量。所有人物、公司和数字均为虚构。默认值的固定事实：公司 '[BRAND] Labs'，418 Lantern Row, Suite 3, Portland, OR 97209（虚构街道）；邮箱 hello@ + emailDomain；Team 套餐的支持回复在 4 个工作小时内；38,000 个团队；已创建 120 万个画布；来自 2,300 条评价的平均评分为 4.8 分（满分 5 分）。
   布局：不适用
   动效：不适用
2. **页头（共享）** — 字标：一个 30px 的方形块（tomato 填充、3px ink 边框、8px 圆角、硬 3px 阴影、旋转 -8deg），内含 [BRAND] 的首字母，使用 Bricolage 800 18px，其后是 '[BRAND]'，使用 Bricolage 800 24px。导航链接：'Features'（#features）、'Pricing'（#pricing）、'Stories'（#stories）、'FAQ'（#faq），全部写为 ./index.html#…。右侧：文本链接 'Log in'（./index.html#signup）和一个小号主按钮 'Start free'（./index.html#signup）。
   布局：吸顶，高度 72px，paper 背景，容器宽度。字标居左，导航居中（Figtree 600 16px，32px 间距），操作区居右。滚动 16px 后出现 3px ink 下边框。在 768px 以下，导航和 Log in 折叠为一个 44px 的方形菜单按钮（Lucide 'menu'，变为 'x'），点击后在页头下方打开一个全宽面板，链接以 22px 堆叠，每条之间用分隔线隔开，Start free 按钮在底部占满全宽。
   动效：字标方块在悬停时摆动（在 400ms 内从 rotate -8deg 到 6deg 再到 -8deg）。菜单面板下滑 12px 并在 200ms 内淡入。
3. **主视觉** — 视觉隐藏的 h1：'Sketch loose with [BRAND], [PRODUCT].'。竞技场上方的可见文案：眉标胶囊 'NEW · Multiplayer stickies in 3.0'（mono 13px，card 填充，3px ink 边框，左侧一个 8px mint 圆点）；副标题（Figtree 500，桌面 22px / 移动 18px，最大宽度 620px）：'[BRAND] is [PRODUCT]. Rough enough to play with, exact enough to hand off.'；主按钮 'Start sketching free' 带 Lucide 'arrow-right'；描边按钮 'See pricing'；按钮下方的说明（14px ink-soft）：'Free for 3 canvases · No card needed · Loved by [AUDIENCE]'。下方的竞技场是一个仿真的画布窗口：左上角迷你工具栏（一个 card 填充的胶囊，含五个 32px 图标按钮：Lucide mouse-pointer-2（激活，butter 填充）、square、circle、type、pen-tool），右上角控件：'Shake' 胶囊（Lucide 'sparkles'，在粗指针和减少动效下隐藏）、'Reset' 胶囊（Lucide 'rotate-ccw'）和 'Enable tilt' 胶囊（Lucide 'smartphone'，仅当 typeof DeviceOrientationEvent.requestPermission === 'function' 时显示）。左下角提示为 mono 13px ink-soft：'Grab anything. Throw it.'（首次抓取后 600ms 淡出）。字母实体：[HERO_WORD] 的每个非空格字符对应一个，每个都是圆角方块，字母使用 Bricolage 800，ink 文字，填充按顺序循环 tomato、butter、mint、sky、grape。Chip 实体（标签 · 桌面端尺寸 px · 填充）：1 'Share' 按钮带 Lucide share-2 · 132x52 · tomato；2 开关 chip，一个 36x20 的 mint 轨道，右侧白色圆钮，外加 'Snap to grid' · 168x52 · card；3 色板 chip，四个 22px 圆点 tomato、butter、mint、sky · 136x52 · card；4 光标标签，带 Lucide mouse-pointer-2 + 'Maya' · 116x48 · sky；5 光标标签 + 'Theo' · 112x48 · grape；6 mono 标签 'Frame 12' · 128x44 · butter（仅桌面端）；7 滑块 chip：mono 'Opacity'，一个 64px 轨道，圆钮位于 80%，'80%' · 184x52 · card（仅桌面端）；8 评论 chip，带 Lucide message-circle + 'Looks great!' · 160x52 · mint；9 方形添加按钮，Lucide plus 为 paper 颜色 · 56x56 · ink，14px 圆角。所有 chip 都有 3px ink 边框、Figtree 600 16px 标签和旋转的硬阴影。Reset 会从生成位置重新投放所有物体；Shake 给每个实体一个 900–1400 px/s 的向上冲量，随机横向速度 +/-500 px/s，随机旋转 +/-4 rad/s。
   布局：区块内边距顶部 40px，底部 56px。文案块居中，text-center，以 20px 间距堆叠；按钮排成一行（在 480px 以下堆叠为全宽）。竞技场位于说明下方 40px：占满容器宽度，桌面高度 480px，640–1023px 时 420px，640px 以下 400px；card 填充背景带 .dot-grid 图案，3px ink 边框，28px 圆角，hard-lg 阴影，overflow hidden；工具栏和控件位于顶部两角内侧 16px、在实体层之上（z-index 60），地板是竞技场的内底边。字母尺寸：竞技场宽度 >= 900px 时为 96x112、字形 68px，640–899px 时为 72x84、字形 50px，640px 以下为 46x54、字形 32px。Chip 在 640px 以下缩放到 0.75，且不创建 chip 6 和 7。字母的生成 x 坐标按阅读顺序：将单词居中铺满竞技场，间距 10px，单词之间留 0.6 个字母的间隙；如果它比竞技场更宽（移动端），则第一个单词居中生成，第二个单词居中并高 1 个方块生成，使其落在上方。Chip 在竞技场宽度的 15% 到 85% 之间随机 x 生成。
   动效：加载时的物理掉落（见设计动效）在首次绘制后 250ms 开始。倾斜（src/hero/tilt.ts）：仅在粗指针上；在 iOS 上，Enable tilt 胶囊在点按时调用 DeviceOrientationEvent.requestPermission()，授权后隐藏自身（被拒绝时变为 'Tilt blocked' 持续 2 秒后隐藏）；其他平台立即监听。将方向映射到重力：取 gamma（或当 screen.orientation.angle 为 90 或 -90 时取 beta，为 -90 时取负值），gx = G * clamp(angle / 35, -1, 1)，gy = sqrt(max(G^2 - gx^2, (0.3 G)^2))，每个事件用 0.15 的系数做低通滤波，当重力变化超过 G 的 2% 时唤醒所有实体。倾斜激活时，在 Enable tilt 的位置显示一个小 mint 胶囊 'Tilt on'。减少动效：无掉落；实体以静止状态从编排好的布局开始：字母按阅读顺序坐在地板上，居中，间距 10px（窄竞技场上分两行，第一个单词在第二个单词上方），chip 静止在地板上，位于单词左右两侧，或按 content.ts 中的固定槽位位于字母行上方；无倾斜，无 Shake，但拖拽可用。
4. **功能跑马灯** — 条目：'Infinite canvas'、'Live cursors'、'Sticky components'、'Export to code'、'Version history'、'Pin comments'、'Offline mode'、'Dark canvas'。条目之间是一个 14px 的方形圆点，旋转 12deg，填充循环 tomato、mint、sky、grape，带 2px ink 边框。
   布局：全出血条带，butter 背景，上下各 3px ink 边框，高度 72px（移动端 56px）。条目使用 Bricolage 700，桌面 28px / 移动 20px，间距 40px。轨道包含列表两次以实现无缝循环。
   动效：CSS 跑马灯关键帧，40 秒线性无限循环，悬停时 animation-play-state 暂停。减少动效：静态、居中、overflow hidden。
5. **功能** — id features。眉标 'WHAT'S INSIDE'。h2 'Serious tools that like to play.'。引言：'Everything a design team needs to go from scribble to shipped screen, without the heavy feeling.'。六张卡片（标题 · 正文 · 强调色 · 小插图组件）：1 'Live cursors, real names' · 'See who is on the canvas and where they are pointing. Up to 50 collaborators per board, each with their own color.' · sky · 三个光标标签组件 'Ana'、'Raj'、'Jo'（sky、grape、tomato），会掉落并碰撞；2 'Components that snap' · 'Build a button once and reuse it everywhere. Change the original and every copy updates in under a second.' · tomato · 五个 64x28 方块在同一 x 生成，落地后堆成塔；3 'Comments that stay put' · 'Pin feedback to the exact pixel. Resolve it with one click when the fix lands.' · mint · 四个评论胶囊（'Bigger?'、'Love it'、'Nudge 4px'、'Ship it'）带 Lucide message-circle；4 'Every version, kept' · 'Scrub back through 12 months of history and restore any frame without losing today's work.' · butter · 六块 120x18 的板，用 mono 标注 'v12' 到 'v7'，像纸一样堆叠；5 'Hand off as code' · 'Export any frame as clean React, Vue or HTML with Tailwind classes, ready to paste.' · grape · mono 标签组件 '<div>'、'<Button />'、'flex'、'gap-4'、'rounded-xl'；6 'Works on a plane' · 'Edit offline. Changes sync the moment you reconnect, with conflicts shown side by side.' · mint · 三个 48px 方形图标组件，带 Lucide cloud-off、refresh-cw 和 check。
   布局：paper-deep 区块背景。网格：>= 1024px 时 3 列，640–1023px 时 2 列，以下 1 列，24px 间距。每张卡片：card 填充、3px ink 边框、24px 圆角、hard-md 阴影、overflow hidden。顶部：200px 高的 vignette 区域，使用 accent 的 -tint 颜色和 .dot-grid 图案，由一条 3px ink 线与文本分隔；它有自己的 World，带墙壁和地板。底部：24px 内边距，一个 28px 的 accent 填充圆角方块，内含 mono 字体的索引编号，然后是 Bricolage 700 24px 的标题和 Figtree 16px ink-soft 的正文。
   动效：卡片交错弹出。卡片悬停：translate(-2px,-2px)，阴影从 6px 到 8px。Vignettes：30% 可见时落下，按 Design motion 中所述循环，碎片可用同一个 drag.ts 拖拽，每个 world 在其卡片离开视口时停止。减少动效：碎片预先安放在地板上并排（塔和板堆预先堆叠），不循环。
6. **Pricing** — id pricing。Eyebrow 'PRICING'。h2 'Pick a plan, keep the fun.' 介绍：'Start free. Upgrade when your team outgrows three canvases. Every plan is built for [AUDIENCE].' 切换：'Monthly' / 'Yearly'，Yearly 旁有 mint 色的 'save 20%' 徽章；默认 Monthly。方案：'Doodle' · 两个周期均为 $0 · 'For trying it on a side project' · 功能：3 个画布、2 个编辑者、30 天版本历史、PNG 和 SVG 导出、社区帮助 · 按钮 'Start free'（outline）。'Studio' · 每位编辑者每月 $12，Yearly 显示每位编辑者每月 $9，并附 'billed $108 yearly' · 'For freelancers and small teams' · 功能：无限画布、无限查看者、12 个月历史、代码导出到 React、Vue 和 HTML、自定义组件套件、离线模式 · 徽章 'Most picked' · 按钮 'Start 14-day trial'（primary）。'Team' · 每位编辑者每月 $24，Yearly $19，附 'billed $228 yearly' · 'For product teams shipping weekly' · 功能：Studio 中的一切、跨团队共享库、管理员角色和审计日志、私有画布、4 个工作小时内的优先支持 · 按钮 'Talk to us'（outline，链接到 ./index.html#signup）。卡片下方：'Students and teachers get Studio free with a school email. Nonprofits get 50% off Team.'
   布局：paper 背景。切换居中位于介绍下方：一个 3px 边框的胶囊，含两个 120px 分段和一个 butter 旋钮，旋钮在活动标签后方滑动。桌面端三张卡片一行（900px 以下堆叠，移动端 Studio 在前），24px 间距，顶部对齐。每张卡片：card 填充、3px 边框、24px 圆角、hard-md 阴影、32px 内边距；方案名 Bricolage 700 24px；价格 Bricolage 800 64px，'/editor/mo' 为 Figtree 16px ink-soft；计费说明 14px；描述；3px 分隔线；功能列表，带 Lucide 'check' 图标，位于 22px mint 圆形中；底部全宽按钮。Studio 卡片：butter 填充，桌面端 scale 1.04，hard-lg 阴影，以及一个 'Most picked' 徽章（grape 填充、ink 边框、mono 13px），旋转 6deg 重叠在其右上角。
   动效：旋钮滑动带过冲；价格按 Design motion 滚动。卡片交错弹出。
7. **Testimonials** — id stories。Eyebrow 'STORIES'。h2 'Teams that stopped dreading reviews.' 统计行三个 chip：'38,000 teams'、'1.2M canvases made'、'4.8/5 from 2,300 reviews'（Lucide star 为 butter 色）。引言：1 'We replaced three tools and a whiteboard with one canvas. Our design reviews went from 60 minutes to 25.' — Priya Raman，Design lead，Fernbank Health（portrait-priya.webp，卡片 accent tomato）；2 'The code export is the first one our engineers did not rewrite. We shipped the onboarding redesign two sprints early.' — Marcus Okafor，Front-end engineer，Tidewater Freight（portrait-marcus.webp，accent sky）；3 'I sketch with clients live on calls now. They drag things around, laugh, and sign off faster.' — Lena Vogt，Freelance product designer，Hamburg（portrait-lena.webp，accent mint）。
   布局：paper 背景。统计 chip 居中于可换行行中（胶囊、card 填充、3px 边框、hard 阴影、Bricolage 700 20px）。桌面端三张卡片一行，移动端堆叠，28px 间距。每张卡片：card 填充、3px 边框、24px 圆角、hard-md 阴影、28px 内边距，边框内侧沿顶部边缘有一条 10px accent 色带，一个大的 Bricolage 800 开引号，颜色为 accent，引言为 Figtree 500 20px/1.45，然后是一行，含 64px 圆形头像（3px ink 边框、object-fit cover）和姓名（Figtree 700）及角色（14px ink-soft）。桌面端卡片分别旋转 -2deg、1.5deg 和 -1deg，移动端不旋转。
   动效：交错弹出；悬停时按 Design motion 变直并抬起。
8. **Sign-up band** — id signup。h2 'Your first canvas is ready when you are.' 副标题：'Free for 3 canvases. No card, no trial clock.' 表单：邮箱输入（placeholder 'you@studio.com'，aria-label 'Email address'）和 primary 按钮 'Get my canvas'。如果地址不匹配简单邮箱模式，字段下方显示验证消息：'That email looks a little wobbly. Try again?' 有效提交时：preventDefault，将 { email, at } 保存到 localStorage 键 brandSlug + ':signup'，用成功行替换表单 'You are in. Check your inbox for a link to your first canvas.' 以及一个显示该邮箱的小 mint 胶囊，然后向面板中投放 16 个 confetti 方块。如果加载时该键已存在，显示成功状态但不显示 confetti。表单从不向任何地方发送数据。
   布局：容器宽度面板，32px 圆角、butter 填充、3px ink 边框、hard-lg 阴影，桌面端 72px 内边距 / 移动端 40px，居中文本，min-height 360px，overflow hidden，position relative。h2 为 Bricolage 800，桌面端 52px / 移动端 34px。输入和按钮在一个 3px 边框的胶囊行中（card-fill 输入，按钮在右侧内部），max-width 520px；480px 以下全宽堆叠。confetti world 填充面板并位于文本后方（z-index 低于文案，指针事件仅在 confetti 碎片上启用）。
   动效：Confetti：16 个方块 18–30 px，candy 填充、2px ink 边框、4px 圆角，以 60ms 间隔在面板顶部生成，带随机旋转，然后堆在面板地板上并保持可拖拽。减少动效：confetti 已沿面板地板静止出现。
9. **FAQ** — id faq。Eyebrow 'FAQ'。h2 'Questions, answered.' 条目：'Is the free plan really free?' — 'Yes. Doodle includes 3 canvases and 2 editors with 30 days of history, for as long as you like. Upgrade only when you need more.' 'Can I bring in my existing files?' — 'Drop in SVG, PNG and PDF files or paste frames from your clipboard. Layers stay editable after import.' 'How does code export work?' — 'Pick a frame and choose React, Vue or plain HTML. You get components with Tailwind classes and your colors and spacing as CSS variables.' 'Does it work offline?' — 'On Studio and Team, yes. Keep editing on a plane; changes sync when you reconnect and any conflicts are shown side by side.' 'What happens to my canvases if I cancel?' — 'They stay readable and you can export everything as SVG or JSON at any time. Nothing is deleted for 12 months.' 'Do you have education or nonprofit pricing?' — 'Studio is free for students and teachers with a school email. Nonprofits get 50% off Team.'
   布局：paper-deep 背景。桌面端两列：左侧 4/12 放置 eyebrow、h2 和一张小卡片 'Still curious? Write to hello@' + emailDomain（mailto 链接）；右侧 8/12 放置手风琴。移动端单列。每个条目：card 填充、3px 边框、18px 圆角、hard 阴影，条目间 12px 间距；问题行为 Figtree 700 18px，右侧有一个 32px 圆形 butter 按钮，内含 Lucide 'plus'；答案为 Figtree 16px ink-soft，20px 内边距。按钮具有 aria-expanded 和 aria-controls。
   动效：一次只打开一个条目（默认第一个打开）。plus 旋转 45deg，答案高度以 240ms ease-out 动画。减少动效：即时。
10. **Footer（共享）** — 顶部：'[BRAND]' 以静态字母块拼出（与 hero 块相同风格，桌面端 56px，移动端 36px，交替 -4deg / 3deg 旋转，candy 填充循环）。列：Product（Features、Pricing、Stories、FAQ）、Company（About、Careers — 'we are hiring 4 roles'、Press kit）、Resources（Help center、Templates、Community）、Contact（hello@ + emailDomain、'[BRAND] Labs, 418 Lantern Row, Suite 3, Portland, OR 97209'）。底部行：'© [BRAND] Labs' 和小链接 'Privacy' 和 'Terms'。每个链接指向 ./index.html 或 ./index.html#<section-id>；邮箱为 mailto 链接。
   布局：ink 背景、paper 文本、3px butter 顶部边框。容器顶部内边距 72px：字母块 wordmark 在左侧，四列在右侧的 4 列网格中（移动端 2x2，位于 wordmark 下方）。列标题 mono 13px 大写 butter；链接 Figtree 16px paper，80% 不透明度，悬停时 100%。底部行由一条 1px 线分隔，paper 不透明度 15%，14px 文本。
   动效：每个页脚字母块悬停时摆动（旋转到 0deg 再返回，300ms）。减少动效：无。

## 资产
- 图片：为本设计制作的模板人像（由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发）。三张均展示虚构人物。用 curl -L -o 将每个文件下载到 public/images/：https://media.vibefather.ai/assets/1869ad30-0c17-4c37-978d-8a5e2fdf32bf/portrait-priya.webp → public/images/portrait-priya.webp（推荐语 1；alt 'Illustrated avatar of Priya Raman, a design lead'）；https://media.vibefather.ai/assets/1869ad30-0c17-4c37-978d-8a5e2fdf32bf/portrait-marcus.webp → public/images/portrait-marcus.webp（推荐语 2；alt 'Illustrated avatar of Marcus Okafor, a front-end engineer'）；https://media.vibefather.ai/assets/1869ad30-0c17-4c37-978d-8a5e2fdf32bf/portrait-lena.webp → public/images/portrait-lena.webp（推荐语 3；alt 'Illustrated avatar of Lena Vogt, a freelance product designer'）。共三个文件。渲染时使用 width 和 height 属性 64 以及 loading='lazy'。
- 图片：其他所有内容均以代码绘制：hero arena（CSS 点阵网格、工具栏、字母块、chips）、feature vignette 组件、marquee 项目符号、confetti 和页脚字母块均为使用 Tailwind 设置样式的 HTML 元素。没有其他位图，没有占位符服务，没有真实软件的截图。
- 图片：public/favicon.svg，手工绘制：一个 64x64 viewBox，包含一个 tomato 圆角方块（x 6, y 14, 40x40, rx 10, 4px #1A1714 stroke）和一个 butter 圆角方块（x 26, y 6, 30x30, rx 8, same stroke），后者绕其中心旋转 14deg，在右上方与前者重叠。
- 图标：Lucide（lucide npm 包，ISC），逐个图标导入，并使用 lucide 的 createElement 渲染到标记中：menu, x, arrow-right, mouse-pointer-2, square, circle, type, pen-tool, sparkles, rotate-ccw, smartphone, share-2, message-circle, plus, cloud-off, refresh-cw, check, star。图标使用 stroke-width 2.25 和 currentColor。
- 字体：通过 Fontsource npm 包自托管，在 src/fonts.ts 中导入：@fontsource-variable/bricolage-grotesque、@fontsource-variable/figtree、@fontsource/jetbrains-mono (500)。均为 OFL-1.1；Vite 将 woff2 文件打包到 dist/。
- 图片：在项目根目录编写 ASSETS.md，包含 path、source URL、author、license 的表格，用于：三张人像（source：其 media.vibefather.ai URL，author：VibeFather，license：'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template'）；Lucide 图标（https://lucide.dev，Lucide contributors，ISC）；三个 Fontsource 字体包（Fontsource / original type designers，OFL-1.1）；favicon.svg 和所有代码绘制的形状（original, made for this template）。

## 不要做
- 不使用任何物理库（Matter.js、Planck.js、Rapier、Box2D 移植版、p2、cannon）：2D 引擎在 src/physics/ 中从零编写。
- 不做后端：没有服务器代码、API 路由、数据库、认证或第三方 API。注册表单只写入 localStorage，绝不向任何地方发送数据。
- 不使用真实设计工具的品牌名、logo、UI 截图或可识别的产品界面元素。每个 chip、工具栏和模拟 UI 组件都是通用的，并以 [BRAND] 之名虚构。
- 不复制现有物理英雄区网站或设计工具营销页面的文案、口号或标题措辞；所有文案都依据本提示词全新撰写。
- 不使用吉祥物、角色或借用插图；装饰性形状是用代码绘制的通用几何图形。
- 不使用真实定价、用户数量或客户 logo；所有数字、推荐语、名称和公司均为虚构。不做 logo 墙。
- 字体仅通过 Fontsource 自托管。绝不从 fonts.googleapis.com、fonts.gstatic.com 或任何其他 CDN 加载字体，且不使用任何商业字体。
- 不使用 CDN 的 <script> 或 <link> 标签，不做分析统计，不热链图片：每张图片都在构建前下载到 public/images/ 中。
- 不使用 Unsplash、Pexels、Pixabay 或其他图库网站图片，也不使用占位图服务。
- 仅做生产构建：压缩、无 source map、不将 src/ 复制进 dist/、相对资源路径（base './'）、dist/ 小于 20 MB。
- 每个内部链接都指向文件名（./index.html 或 ./index.html#section），绝不指向裸目录或 '/'。
- 站点中任何地方都不提及 VibeFather，页脚中可选的 credit 链接除外。
- 不得让拖拽滚动页面或引发控制台错误；站点必须在 1440x900 和 390x844 下运行，控制台零错误且无横向滚动。
- 当竞技场或某个 vignette 在屏幕外、标签页隐藏或所有刚体都处于休眠状态时，不运行物理循环。
- 尊重 prefers-reduced-motion：不做 drop-in、倾斜、Shake、空闲循环、marquee 移动或 pop-in；渲染构图完整、预先稳定的布局，拖拽仍然可用。
- 不在页面加载时请求设备方向权限；仅从点击 Enable tilt pill 时请求，且在不需权限的地方绝不显示该 pill。
- 不更改技术栈（Vite 5、vanilla TypeScript、Tailwind CSS 3.4），也不添加 UI 框架，除非用户要求。

---
— Prompt by VibeFather · https://vibefather.ai/t/physics-playground-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
