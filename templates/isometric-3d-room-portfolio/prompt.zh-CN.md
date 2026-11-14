> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 等距 3D 房间作品集

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个开发者的单页个人作品集，以一间温馨的低多边形等距 3D 房间为舞台。房间铺满屏幕；书架、桌面显示器、吉他和墙上邮箱是导航入口。悬停会抬起物体并显示标签，点击会让相机滑向该物体并打开关于、项目、音乐或联系面板，而一盏台灯能让房间在柔和的白天与深蓝色的夜晚之间切换。

- 受众：正在查看 [BRAND] 作品的招聘人员、工作室负责人和潜在客户，以及会分享一个好玩、值得随手点点的作品集的其他开发者。
- 目标：让 [BRAND] 在十秒内令人记住，展示四个有力的项目，并让访客复制邮箱地址或按下“Write an email”。
- 语调：温暖、俏皮且精确：一个整洁的玩具立体模型，配以诚实、具体、用第一人称写成的文案。短句、具体数字、不用流行术语。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、three（r16x）（MIT）、@react-three/fiber 8（兼容 React 18）（MIT）、@react-three/drei 9（RoundedBox、Html、Sparkles、ContactShadows）（MIT）、gsap 3（GSAP Standard License（免费，允许商业使用））、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@types/three（MIT）、@fontsource-variable/fredoka（OFL-1.1）、@fontsource-variable/figtree（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 以 react-ts 模板搭建脚手架。项目根目录下有一个 HTML 页面：index.html（入口 src/main.tsx），lang en，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BRAND] — [ROLE]</title>。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0, chunkSizeWarningLimit 1500 }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中扩展 colors，包含所有 Design 颜色（kebab-case 键名：peach、lavender、coral、butter、lilac、leaf、shelf、wood、ink、ink-muted、panel、panel-night、night-text、screen-ink、screen-glow、lamp、hairline），以及 fontFamily display ['Fredoka Variable', 'system-ui', 'sans-serif']、sans ['Figtree Variable', 'system-ui', 'sans-serif']、mono ['JetBrains Mono', 'ui-monospace', 'monospace']。夜间模式在 <html> 上使用 'night' 类（darkMode: 'class'）。
  - src/fonts.ts 导入 '@fontsource-variable/fredoka'、'@fontsource-variable/figtree'、'@fontsource/jetbrains-mono/400.css' 和 '@fontsource/jetbrains-mono/500.css'；从 main.tsx 导入它和 src/index.css。
  - 文件布局：src/content.ts（所有文案、项目、曲目、联系行，带类型）；src/lib/brand.ts（firstName、brandSlug、email、codeUrl、notesUrl）；src/lib/storage.ts（带 try/catch 的安全 get/set，键前缀为 brandSlug + ':'）；src/lib/palette.ts（日间/夜间颜色对和光照强度）；src/store.ts（使用 useSyncExternalStore 的微型外部 store，持有 focus、hovered、night、playing、trackIndex、elapsed，外加一个 nightMix ref）。
  - src/scene/ 中的 3D 组件：Stage.tsx（Canvas、相机、灯光）、CameraRig.tsx（GSAP proxy 补间、home/focus 数学、resize）、Room.tsx（地板、墙壁、窗户、地毯、踢脚线）、Interactive.tsx（悬停/点击包装器）、Bookshelf.tsx、DeskSet.tsx（书桌、带 CanvasTexture 的显示器、键盘、马克杯）、DeskLamp.tsx、Guitar.tsx（ExtrudeGeometry 琴身）和 Amp.tsx、Mailbox.tsx、Decor.tsx（植物、豆袋椅、椅子、墙面艺术、小彩灯）、Ambient.tsx（Sparkles、云、星星、音符）、themed.ts（useThemedColor hook，每帧根据 nightMix 对材质颜色进行 lerp）。
  - src/ui/ 中的 UI 组件：NameChip.tsx、NavBar.tsx、NightSwitch.tsx、IntroCard.tsx、Hint.tsx、Panel.tsx、AboutPanel.tsx、ProjectsPanel.tsx（ProjectCard.tsx、带四个 SVG 图案的 Thumb.tsx）、MusicPanel.tsx（Record.tsx、Player.tsx、TrackList.tsx）、ContactPanel.tsx（CopyRow.tsx、Toast.tsx）。src/App.tsx 组合背景、Stage 和覆盖层，并同步 hash。
  - 使用 matchMedia('(prefers-reduced-motion: reduce)') 检测一次减少动态效果（并监听变化）；通过 store 传递 reduced 标志，使 GSAP 时长变为 0 并停止空闲动画。
  - 使用 matchMedia('(hover: none)') 检测触摸：跳过悬停效果，点击时直接聚焦。
  - 在首次构建之前，使用 curl -L -o 将 Assets 下列出的两张图片以确切的文件名下载到 public/images/。构建本身从不获取任何内容。
  - 按 Assets 中所述在项目根目录写入 ASSETS.md。

## 变量
- [BRAND] — 你的名字（默认："Iris Calloway"）。作品集所有者的全名（默认由虚构生成）。用于驱动姓名标签、标题、介绍语（首词）、邮箱、代码与笔记的 URL 以及存储键。
- [ROLE] — 角色（默认："Creative front-end developer"）。显示在姓名下方和标题中的简短职位名称。
- [LOCATION] — 城市（默认："Portland, Oregon"）。你所在的地点。用于姓名标签、个人简介和 Contact 面板。
- [FOCUS] — 你构建的内容（默认："interactive data stories and small web toys"）。一个完成 "I build …" 的小写短语。驱动介绍语和项目的基调。
- [MUSIC_ALIAS] — 音乐项目名称（默认："Low Tide Radio"）。在 Music 面板中展示的你的副业音乐项目的虚构名称。如果你没有音乐爱好，请将该面板保留为"我编码时听的音乐"播放列表，曲目为虚构。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/isometric-3d-room-portfolio（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 日间背景顶部 `#FDE8D7` — 画布后方日间页面渐变的上端色标（桃色）。
- 日间背景底部 `#E4E0F6` — 日间页面渐变的下端色标（薰衣草色）。
- 夜间背景顶部 `#121836` — 夜间渐变的上端色标。
- 夜间背景底部 `#2B2459` — 夜间渐变的下端色标。
- 左墙日间 / 夜间 `#F6E6D3 / #3A3F6E` — 左墙（x = -5 平面）的日间与夜间颜色。
- 右墙日间 / 夜间 `#EFD7C0 / #30355F` — 右墙（z = -5 平面），比左墙略深。
- 地板日间 / 夜间 `#D8B28C / #3C3452` — 地板顶面；地板边缘/侧面使用 #B98F69 / #2A2440。
- 地毯 `#9DCBB6` — 圆形地毯；夜间色调 #4A6B78。
- 木色 `#C98D5E` — 桌面、书架框架边缘、画框、椅面；深木色 #A26C43 用于桌腿。
- 书架蓝 `#8FA7D6` — 书架主体和邮箱主体。
- 珊瑚色 `#F08A6B` — 主强调色：邮箱旗、激活的导航项、播放按钮、CTA 按钮、日间模式的焦点环。
- 奶油黄 `#FFD27A` — 灯罩、书脊、音符粒子。
- 淡紫 `#C8B6FF` — 书脊、豆袋椅、项目缩略图着色。
- 吉他琥珀色 `#E9A23B` — 吉他琴身顶部；侧面和背面 #B86B2A，琴颈 #7A4A2A。
- 叶绿 `#6FAF7E` — 植物叶片；花盆 #E7C9B0。
- 屏幕墨色 `#1E2238` — 显示器屏幕背景，以及浅色芯片上的夜间面板文字。
- 屏幕辉光 `#7CE0D3` — 显示器上的代码条、夜间显示器点光源、夜间模式焦点环。
- 灯光 `#FFC873` — 台灯点光源和夜间串灯的自发光颜色。
- 面板日间 `#FFF9F2` — 日间模式下的面板和芯片表面（94% 不透明度，12px 背景模糊）。
- 面板夜间 `#1B2047` — 夜间模式下的面板和芯片表面（92% 不透明度，12px 背景模糊）。
- 墨色 `#2C2433` — 日间模式的主文字颜色。
- 柔和墨色 `#6E6475` — 日间模式的次要文字颜色；夜间次要文字为 #A9A6CC。
- 夜间文字 `#F3EEFF` — 夜间模式的主文字颜色。
- 细线 `#EADBCB` — 日间边框和分隔线；夜间边框 #343B72。

### 字体排印
- 展示字体：名字芯片、面板标题、悬停标签、介绍行：Fredoka（Fontsource 可变字体）（OFL），字重 500/600
- 正文字体：简介、卡片文案、按钮、导航：Figtree（Fontsource 可变字体）（OFL），字重 400/500/600
- 等宽字体：眉题、技术栈芯片、曲目时长、联系方式值：JetBrains Mono（Fontsource）（OFL），字重 400/500

### 布局与动效
- 间距：桌面端覆盖层内边距 24px / 移动端 16px。面板内边距桌面端 28px / 移动端 20px，面板块之间间距 20px，列表内部间距 10–14px。4px 基础刻度（4、8、10、12、14、16、20、24、28、40）。
- 圆角：覆盖层胶囊 999px；面板 24px；卡片和图片 18px；缩略图 12px；3D RoundedBox 圆角 0.06–0.12 世界单位，让一切看起来柔软、像玩具。
- 动效：单一共享状态存储驱动一切：{ focus: null | 'about' | 'projects' | 'music' | 'contact', hovered: string | null, night: boolean, playing: boolean, trackIndex: number }。悬停 HTML 导航项时，将 hovered 设为与悬停 3D 对象相同的 id，使两者同时高亮。
- 动效：缓动：相机移动使用 GSAP 'power3.inOut'，悬停抬升使用 'power2.out'，入场下落使用 'back.out(1.6)'。CSS 过渡使用 cubic-bezier(0.22, 1, 0.36, 1)。
- 动效：入场（加载时执行一次）：房间组在 1.2s 内以 power3.out 从 y -1.2 升至 0，缩放从 0.92 到 1；随后交互对象（书架、书桌套装、吉他、邮箱、台灯）以 70ms 的错峰、0.6s 的 back.out(1.6) 从 y +1.5 落入位置。覆盖层芯片在之后 300ms 淡入。
- 动效：待机生命感：房间组以 6s 正弦上下浮动 y ±0.06；植物的叶片组以 3.4s 正弦摆动 ±0.05 弧度；40 个尘埃微粒（drei Sparkles，size 2.5，speed 0.25，opacity 0.5，日间颜色 #FFFFFF，夜间颜色 #FFC873）在房间体积内飘移；显示器光标块每 530ms 切换可见性；日间两朵代码绘制的云在窗户天空平面上滑过（循环 40s），夜间 30 个星点闪烁。
- 动效：悬停（仅指针设备）：对象组在 0.25s 内以 power2.out 抬升 y +0.15，其中每个网格获得 #FFFFFF 自发光，强度 0.16（夜间：#FFC873 自发光，强度 0.22），光标变为 pointer，并在对象上方 0.5 单位处出现一个 drei <Html> 标签（胶囊，Fredoka 500 15px），在 180ms 内淡入并上升 6px。邮箱旗还会向上旋转 70 度；吉他倾斜 3 度。
- 动效：聚焦：GSAP 在 1.1s 内以 power3.inOut 补间一个代理对象 { px, py, pz, tx, ty, tz, zoom }；每一帧将正交相机放置在代理位置，看向代理目标，并应用代理缩放，调用 updateProjectionMatrix()。面板从右侧滑入（桌面端：translateX(100%) 到 0，历时 450ms，在相机移动开始后 350ms 启动）或从底部滑入（移动端）。返回/关闭或 Escape 会反向执行两者，先面板，后相机归位。
- 动效：日间/夜间：GSAP 在 0.9s 内以 power2.inOut 补间单个 nightMix 值从 0 到 1（或反向）；每一帧每个主题材质在其日间和夜间颜色之间插值（THREE.Color.lerpColors），光照强度在其日间和夜间值之间插值，两个背景渐变层通过不透明度交叉淡化。灯头灯泡的自发光强度从 0 到 2.5，台灯点光源从 0 到 18，串灯从 0 到 1.8。UI 开关滑块滑动 24px，其图标以 90 度旋转切换太阳/月亮。
- 动效：音乐播放：Music 面板中的唱片旋转（每 2.4s 360 度，线性），进度条实时前进，房间中三个奶油色小音符（代码绘制的平面）从音箱上浮起并在 2.2s 内淡出，以 0.7s 的偏移循环。
- 动效：prefers-reduced-motion：相机移动和日间/夜间切换变为即时（duration 0），无入场、无浮动、无摆动、无 Sparkles、无漂浮音符、无唱片旋转，面板无滑动出现（仅不透明度，120ms）。悬停保留自发光高亮和标签，但无抬升。
- 图像：主视觉就是 3D 房间本身——一个密集、精致的立体模型，填满首屏，因此没有主视觉照片。场景中的一切均由代码图元建模（drei RoundedBox、盒子、圆柱、球体、由 2D 形状生成的 THREE.ExtrudeGeometry），使用平面 meshStandardMaterial（roughness 0.85，metalness 0）和柔和阴影。墙面艺术、显示器屏幕和项目缩略图均为代码绘制（CanvasTexture 或内联 SVG），以调色板中的抽象形状呈现：任何地方都没有真实海报、专辑封面、标志或可读的品牌标记。唯一的照片是 About 面板内两张 AI 生成的虚构主人图像（一张头肩肖像和一张过肩书桌照），两者均采用与房间相同的柔和粉彩桃色与薰衣草色调。

## 页面与区块
### 房间（单页含四个面板）（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[BRAND] = Iris Calloway，[ROLE] = Creative front-end developer，[LOCATION] = Portland, Oregon，[FOCUS] = interactive data stories and small web toys，[MUSIC_ALIAS] = Low Tide Radio）。将每个字符串、数字、项目、曲目和联系方式值放入 src/content.ts 并从中渲染。派生值位于 src/lib/brand.ts：firstName = [BRAND] 的第一个词；brandSlug = [BRAND] 转小写、去除重音符号、每段非字母数字字符替换为 '-'；email = 'hello@' + 去掉连字符的 brandSlug + '.dev'；codeUrl = 'github.com/' + brandSlug；notesUrl = 去掉连字符的 brandSlug + '.dev/notes'；localStorage 键前缀为 brandSlug + ':'。若任何变量值不同，重写介绍行、简介、事实、技术栈标签、'now' 列表、全部四个项目（名称、一句话简介、角色、指标、详情和缩略图图案）、音乐简介、EP 名称和六首曲目标题，使其对新人物具体可信，保持相同结构和数量（4 条事实、8 个技术栈标签、3 行 'now'、4 个项目各含 3 条详情要点、6 首曲目、4 行联系方式）。所有人物和事物均为虚构；无真实雇主、客户、艺术家或歌曲。
   布局：非可见区块：构建器如何存储和重写文案的规则。
2. **舞台：全屏画布与背景** — 页面为一个固定全视口舞台（100dvh，overflow hidden，无页面滚动）。在透明的 R3F <Canvas> 后方有两个绝对定位的渐变层：白天 = linear-gradient(180deg, #FDE8D7 0%, #E4E0F6 100%)，在 50% 40% 处有柔和径向高光 rgba(255,255,255,0.55)；夜晚 = linear-gradient(180deg, #121836 0%, #2B2459 100%)，在 50% 45% 处有径向 rgba(124,224,211,0.08)。夜晚层不透明度跟随 nightMix。浮动房间下方有柔和椭圆接触阴影（drei ContactShadows，opacity 0.35，blur 2.6，far 4，color #6B5A7A）。<title>：'[BRAND] — [ROLE]'。若 WebGL 不可用，渲染渐变、覆盖 UI 和面板，并显示小卡片 'Your browser can't draw the 3D room, but everything is in the menu.'，导航仍可打开每个面板。
   布局：Canvas：正交，平面（NoToneMapping），启用阴影（PCFSoftShadowMap），dpr [1, 2]，antialias。相机初始：position (20, 18, 20)，lookAt (0, 1.6, 0)，near 0.1，far 200。桌面端初始缩放 = Math.min(innerWidth / 18, innerHeight / 15)，768px 以下屏幕为 innerWidth / 15.5，调整大小时重新计算；移动端初始目标移至 (0, 2.4, 0)，使房间位于底部导航上方上部 60% 区域。无 OrbitControls：视图固定。
   动效：背景层随 nightMix 交叉淡入淡出。房间入场和空闲浮动如设计动效所述。
3. **房间：外壳、灯光与装饰** — 世界单位，y 向上，地板顶部在 y = 0。地板：RoundedBox 10.6 × 0.5 × 10.6（radius 0.12）居中于 (0, -0.25, 0)，顶部颜色 floor，侧面通过第二个稍大的盒子使用更深边缘色调。左墙：box 0.4 × 6 × 10.6 位于 (-5.1, 3, 0)。右墙：box 10.6 × 6 × 0.4 位于 (0, 3, -5.1)。两墙沿边有 0.12 高木质踢脚条。左墙窗户居中于 (-4.88, 3.6, 0.6)：木框厚 0.12，宽 2.4 × 高 2.0，十字窗棂，窗台深 0.18；其后天空平面从 #BFE3F5（白天）lerp 到 #1A2250（夜晚），白天有两个代码绘制的圆角云形，夜晚有 30 个微小星点。圆形地毯：cylinder radius 3，height 0.04 位于 (0.4, 0.02, 0.4)，内环半径 2.3 使用更浅色调。右墙书桌上方墙面艺术位于 (-1.6, 4.1, -4.88)：木框 1.6 × 1.2 内含 CanvasTexture（512×384）抽象构图：奶油色底、一个珊瑚色圆、一个淡紫色半圆、一个黄油色弧和三条细墨线。第二个窄框 0.6 × 1.4 位于 (1.5, 4.2, -4.88)，含三条竖条纹（leaf、shelf blue、coral）。地板植物位于 (4.1, 0, -4.1)：花盆 cylinder（radius 0.45，height 0.8，top radius 0.5），土壤圆盘，七片叶子为扁平球体（scale 0.25 × 0.05 × 0.6）在细茎上扇形展开，叶绿色。豆袋椅位于 (2.9, 0, 1.9)：压扁球体 radius 1 缩放 (1, 0.6, 1)，淡紫色。书桌椅位于 (0.4, 0, -2.6)：木座 RoundedBox 1.1 × 0.15 × 1.1 在 y 1.0，靠背 1.1 × 1.1 × 0.12，单个中心圆柱柱和五辐细盒底座。串灯：右墙顶部从 x -4.6 到 4.6 在 y ≈ 5.6 处 14 个小球（radius 0.07）的悬链线（钩间下垂 0.25），交替 butter、coral 和 screen glow 颜色，仅夜晚自发光，各自相位闪烁（0.8–1.8 强度，2–3.5s）。
   布局：灯光。白天：hemisphereLight（sky #FFF4E6，ground #C9B8E8，1.15），directionalLight #FFFFFF 1.7 位于 (8, 14, 6) 投射阴影（mapSize 2048，shadow camera ±9，bias -0.0004，radius 4），ambientLight 0.25。夜晚：hemisphere lerp 到（#3B4A8F，#1A1533，0.35），directional lerp 到 #8FA8FF 强度 0.35（月光透过窗户），灯头 pointLight #FFC873 强度 18，distance 9，decay 2，castShadow，以及屏幕前方 monitor pointLight #7CE0D3 强度 3，distance 3。所有家具投射和接收阴影；墙壁和地板接收。
   动效：植物摇摆、云/星、串灯闪烁和尘埃微粒如设计动效所述。
4. **交互对象（导航）** — 五个可点击组，每个包裹在 <Interactive id> 组件中，处理 pointer over/out/click（stopPropagation）、悬停抬升、自发光高亮、标签和光标。1）书架 → About，标签 'About me'：靠左墙位于 (-4.4, 0, 3.0)，主体深 1.0 × 高 4.0 × 宽 2.4，shelf blue 色带木质顶部和四个搁板；书为宽 0.18–0.32、高 0.6–0.95 的盒子，颜色 coral、butter、lilac、leaf、cream 和 ink，几本倾斜 12 度，一摞平放；顶部有小多肉植物和小圆钟（两根墨色指针，无数字）。聚焦目标 (-4.1, 2.2, 3.0)，聚焦缩放 ×2.1。2）书桌组 → Projects，标签 'Projects'：书桌靠右墙位于 (0.4, 0, -4.1)：木质顶部 RoundedBox 3.4 × 0.16 × 1.6 在 y 1.6，四条深色腿；显示器在短支架上：RoundedBox 1.8 × 1.1 × 0.1 颜色 #F3EEFF，屏幕平面 1.64 × 0.94 使用 CanvasTexture（512×294）代码编辑器：#1E2238 底，12 行不同长度和缩进的圆角条，颜色 screen glow、coral、lilac 和 butter，左侧细槽；一个独立微小光标块平面闪烁。普通键盘板（无 logo，成排微小键凸），珊瑚色马克杯（cylinder + torus 手柄），两本笔记本叠放。整个书桌组为可点击对象。聚焦目标 (0.4, 2.3, -4.0)，缩放 ×2.4。3）吉他 → Music，标签 'Music'：一把通用原声吉他靠左墙近后角位于 (-4.5, 0, -3.4)，旋转使其背面以 14 度靠墙。琴身：ExtrudeGeometry 从八字形 Shape（两个圆半径 0.55 和 0.68 用贝塞尔腰部混合）depth 0.28，bevel 0.04，琥珀色顶面，更深侧面；深色音孔圆盘；琴桥条；琴颈盒 0.16 × 1.5 × 0.08 深色木带 5 条细品丝线；普通梯形琴头带六个微小圆柱弦钮，无 logo 或可识别形状。旁边小音箱立方体 0.9 × 0.8 × 0.6 墨色，带编织格栅方块和两个旋钮。聚焦目标 (-4.2, 1.6, -3.2)，缩放 ×2.3。4）邮箱 → Contact，标签 'Contact'：安装在右墙位于 (3.6, 2.8, -4.7)：圆顶盒（box 加半圆柱）宽 0.7 × 高 0.6 × 深 0.9，shelf blue 色，小门线，细柱上珊瑚色旗子悬停时翻起，白色信封角露出。聚焦目标 (3.6, 2.8, -4.4)，缩放 ×2.8。5）台灯 → 切换夜晚（无面板），标签 'Lights on' / 'Lights off'：桌上位于 (1.7, 1.68, -4.4)：圆形底座，两段细圆柱臂带球关节，黄油色锥形灯罩朝向显示器倾斜，内部灯泡球体带自发光灯光。点击不移动相机；切换夜晚并播放 120ms 微小按压（灯罩下沉 0.05）。
   布局：相机聚焦数学：保持与初始相同的视图方向；代理位置 = target + (20, 18, 20) × 0.5 偏移归一化到初始方向；zoom = 初始 zoom × 因子。桌面端（面板在右侧打开，宽 440px）沿相机屏幕右向量 (1, 0, -1)/√2 移动目标 (440 / 2) / zoom 世界单位，使对象位于面板左侧可见区域中心。移动端沿相机上向量移动目标 (0.36 × innerHeight) / zoom，使对象位于底部面板上方上三分之一。聚焦时点击空白处或地板关闭面板。
   动效：悬停和聚焦行为完全如设计动效所述。聚焦时，除台灯外其他对象不可悬停。
5. **覆盖层 UI：姓名标签、导航、开关和提示** — 左上角姓名标签：'[BRAND]'（Fredoka 600，20px）位于 '[ROLE] · [LOCATION]'（Figtree 500，13px，柔和色）上方。右上角：HTML 导航（按钮 'About'、'Projects'、'Music'、'Contact'，每个带一个 Lucide 图标：UserRound、Monitor、Guitar、Mail）和日/夜开关（一个 56 × 32 的胶囊形控件，带滑动滑块，显示 Lucide Sun 或 Moon，aria-label 'Turn the lights off' / 'Turn the lights on'，role='switch'，aria-checked）。左下角介绍卡片（仅桌面端，最大宽度 360px，面板打开时隐藏）：眉题 'PORTFOLIO, BUT IT'S A ROOM'（JetBrains Mono 500，11px，letter-spacing 0.12em，珊瑚色），标题 'Hi, I'm [firstName]. I build [FOCUS].'（Fredoka 600，28px，line-height 1.15），以及一行 'Click anything in the room to look closer, or use the menu.'（Figtree 400，15px，柔和色）。右下角提示标签（桌面端，首次聚焦后自动隐藏）：Lucide MousePointerClick + 'Hover to explore · Esc to step back'。
   布局：覆盖层是一个 pointer-events-none 层，标签为 pointer-events-auto，桌面端内边距 24px。标签：面板表面（日间 #FFF9F2 94% / 夜间 #1B2047 92%），12px 背景模糊，1px 细线边框，导航和开关圆角 999px，卡片圆角 20px，阴影 0 10px 30px rgba(44,36,51,0.10)。导航按钮高 40px，水平内边距 14px，Figtree 600 14px，激活状态（聚焦区块）获得珊瑚色填充和白色文字，悬停状态获得细线色调填充。屏幕小于 768px 时：姓名标签保持在左上角（内边距 16px），开关在右上角，导航变为固定底部栏（距底部 16px，居中，4 个图标在上标签在下的按钮，每个宽 64px），介绍卡片和提示隐藏，底部栏上方显示一行 'Tap an object to look closer'，直到首次点击。
   动效：标签在介绍之后淡入。导航悬停同步 3D 高亮。可见焦点环：2px 珊瑚色（夜间：屏幕辉光）偏移 2px。
6. **面板外壳和路由** — 一个 <Panel> 组件渲染活动区块。头部：JetBrains Mono 眉题（例如 'ABOUT'、'PROJECTS · 4'、'MUSIC'、'CONTACT'），Fredoka 600 32px 标题，以及一个圆形 40px 关闭按钮（Lucide X，aria-label 'Back to the room'）。内容下方是一个页脚行，包含 'Previous' 和 'Next' 文本按钮（Lucide ChevronLeft/Right），循环 About → Projects → Music → Contact，重新补间相机到下一个对象而不返回主页。URL hash 镜像焦点（#/about、#/projects、#/music、#/contact；空 hash = 房间），带 hash 打开页面会在介绍后聚焦该对象。Escape 关闭；打开时焦点移入面板（标题，tabIndex -1），关闭时回到打开它的导航按钮。面板为 role='dialog' aria-modal='false' aria-labelledby 标题。
   布局：桌面端：固定右侧面板，顶部 16px，右侧 16px，底部 16px，宽度 440px，圆角 24px，面板表面，内边距 28px，内容内部滚动（细自定义滚动条）。移动端：底部抽屉，左右 8px，底部 8px，高度 72dvh，顶部圆角 24px 底部 16px，顶部一个 40 × 4 抓取手柄（点击关闭），内边距 20px。
   动效：按设计动效滑入/滑出；内部内容淡入上移 8px，每个块 40ms 交错。
7. **About 面板（书架）** — 顶部行：肖像图片（public/images/portrait.webp，112 × 140，圆角 18px，object-cover）旁边是姓名 '[BRAND]'、角色 '[ROLE]'，以及一个小型可用性胶囊，带脉动叶子圆点 'Booking two projects per quarter'。简介：'I'm a creative front-end developer in Portland, Oregon. For seven years I've been turning spreadsheets, sensor feeds and museum archives into things people can poke at. I lead front end at Hollowtree Labs, a four-person studio that builds exhibits for science centers, and on weekends I make small web toys nobody asked for.' 事实网格（2 × 2 卡片，数字 Fredoka 600 28px，标签 Figtree 13px）：'7 yrs' 发布前端；'31' 个项目上线；'3' 个博物馆装置；'1' 只名叫 Semicolon 的猫。技术栈标签（JetBrains Mono 12px，细线胶囊）：TypeScript、React、three.js、GLSL、D3、Svelte、Figma、Node。工作照图片（public/images/desk.webp，全宽，4:3，圆角 18px），说明 'Most of this portfolio was built at that desk.' 'Now' 列表带 Lucide 图标：BookOpen 'Reading — a field guide to Pacific tide pools'；Sparkles 'Learning — raymarching in fragment shaders'；Hammer 'Building — a tiny synth that runs in a browser tab'。
   布局：面板内单列；块之间 20px 间距；事实网格 2 列，10px 间距；标签换行，6px 间距。
   动效：可用性圆点脉动（scale 1 到 1.6，opacity 0.6 到 0，2s 循环；减少动效下关闭）。
8. **Projects 面板（书桌）** — 介绍行：'Four things I'm proud of. Tap a card for the details.' 四张卡片，每张：一个 16:10 代码绘制的 SVG 缩略图，名称（Fredoka 600 20px），一句话简介，角色和指标用 JetBrains Mono 12px，技术标签，以及一个展开切换（Lucide ChevronDown 旋转 180 度）显示三个详情要点。1) 'Tidepool' — 'A tide and swell planner for sea kayakers on the Oregon coast.' 角色：设计 + 构建。指标：每月 12k 桨手。标签：React、D3、Service Worker。详情：'Offline-first so it works at the launch ramp with one bar of signal'；'Tide curves redraw at 60fps as you scrub the day'；'Built with two local paddling clubs over one winter'。缩略图：淡紫底色，三条分层正弦波（架子蓝、屏幕辉光、白色）和一个珊瑚色圆点骑在顶部波浪上。2) 'Paper Orbit' — 'A touch-screen solar system for a children's science museum.' 角色：首席开发者。指标：首季 40k 访客。标签：three.js、GLSL、Kiosk mode。详情：'Planets drawn as folded-paper shaders so they read from across the room'；'Runs for 10 hours a day on a fanless mini PC'；'Kids can fling moons; the physics forgive them'。缩略图：墨色底色，四个同心椭圆轨道，黄油色太阳，珊瑚色和叶子色行星。3) 'Quiet Hours' — 'A browser extension that batches notifications into three calm check-ins a day.' 角色：独立制作者。指标：2,300 次安装，4.8 评分。标签：TypeScript、WebExtensions、IndexedDB。详情：'Everything stays on your machine'；'A weekly digest shows the hours you got back'；'Open source, with 60 contributors'。缩略图：奶油色底色，五个堆叠的圆角通知胶囊逐渐淡出透明度，角落一个黄油色月亮。4) 'Glyph Garden' — 'A playground for testing variable fonts by growing them.' 角色：副项目。指标：被两个字体通讯报道。标签：Svelte、Canvas、Variable fonts。详情：'Drag a slider and the letters sprout weight and width'；'Exports a specimen sheet as SVG'；'Started as a weekend experiment, still maintained'。缩略图：黄油色底色，一个大的 'Aa' 用 Fredoka 600 墨色，一个叶子绿嫩芽从 a 卷曲而出。
   布局：卡片垂直堆叠，14px 间距；卡片圆角 18px，细线边框，14px 内边距；缩略图全宽圆角 12px；详情动画高度（CSS grid-rows 0fr 到 1fr，300ms）。
   动效：卡片悬停：translateY(-2px) 和阴影加深（减少动效下无抬升）。缩略图各有一个微妙的循环（波浪偏移漂移，轨道旋转 30s），减少动效下暂停。
9. **Music 面板（吉他）** — 头部块：'Low Tide Radio' 作为别名（[MUSIC_ALIAS]，Fredoka 600 26px），一行 'Lo-fi instrumentals I record on the guitar in the corner, mostly after midnight.' EP 卡片：一个 CSS 绘制的唱片（最大 320px，墨色径向渐变凹槽，珊瑚色标签圆带别名首字母用 Fredoka）旁边是 'Desk Weather · EP'、'6 tracks · 21 min'。播放器：当前曲目标题，已过 / 总时长用 JetBrains Mono，进度条（珊瑚色填充在细线轨道上，可点击跳转），控制 Lucide SkipBack、Play/Pause（56px 珊瑚色圆形）、SkipForward、Lucide Repeat 切换。曲目列表（点击播放）：1 'Sunday Compiler' 3:12；2 'Low Battery Lullaby' 2:48；3 'Window Seat (Demo)' 4:05；4 'Kettle On' 2:31；5 'Night Build' 5:02；6 'Soft Reset' 3:40 — 当前行获得淡紫色调色和三个动画均衡器条。列表下方柔和色 13px 注释：'Audio files aren't bundled in this build, so the player runs silently.' 无音频元素，无外部嵌入。
   布局：EP 卡片在桌面端是 2 列网格（唱片 132px / 文本），移动端堆叠；曲目行高 44px，包含编号、标题、时长右对齐。
   动效：播放器是真实计时器：播放时已过时间每秒前进，自动前进到下一曲目（或重复）。唱片旋转、均衡器条和房间音符仅在播放时运行，且不在减少动效下运行。
10. **联系面板（邮箱）** — 简介：'I'm booking two client projects per quarter: museum exhibits, data stories, and launch pages with a bit of play in them. Email is fastest; I reply within two working days.' 四行，每行是一张细线卡片，包含一个 Lucide 图标、标签（Figtree 500 13px 弱化色）、值（JetBrains Mono 15px）和一个复制按钮（Lucide Copy，切换为 Check 持续 1.6s）：Mail 'Email' → email（hello@iriscalloway.dev）；Code2 'Code' → codeUrl；NotebookPen 'Notes' → notesUrl；MapPin 'Based in' → '[LOCATION] · working remotely'。复制功能在 try/catch 内使用 navigator.clipboard.writeText，并带有隐藏 textarea 回退方案，然后显示一个 toast 'Copied to clipboard'（底部居中，1.8s）。下方：'Office hours: Tue & Thu, 9am–1pm local time' 和一个 mailto 按钮 'Write an email'（珊瑚色，Lucide Send）。无表单。
   布局：各行堆叠，间距 10px；每行是一个 3 列网格（图标 36px / 标签+值 / 复制按钮 36px）；在窄屏上值以省略号截断。
   动效：复制图标交叉淡入淡出为 Check；toast 向上滑动 12px 并淡出（在减少动态效果下仅改变不透明度）。

## 资产
- 图片：为本设计制作的两张模板照片（AI 生成的虚构人物，可随模板再分发）。首次构建前，用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/792508cf-aec9-4dc1-96e2-a2e170c43946/portrait.webp → public/images/portrait.webp（About 面板顶行；object-position 50% 30%；alt '[BRAND] looking out of a window in a softly lit home studio'）；https://media.vibefather.ai/assets/792508cf-aec9-4dc1-96e2-a2e170c43946/desk.webp → public/images/desk.webp（About 面板工作照；alt '[BRAND] working at a light oak desk by the window'）。两张图片均署名 'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template'。它们是占位图，所有者可替换为自己的照片。
- 图片：其余内容全部由代码绘制：房间、家具、吉他、台灯和植物由 three.js 图元构成；显示器代码屏幕和两幅墙面艺术作品为运行时绘制的 CanvasTexture；项目缩略图和唱片为内联 SVG/CSS；云朵和星星为小型网格或点。无模型文件、纹理、HDRI 或图库图片。
- 图标：所有 UI 图标使用 lucide-react（ISC）：UserRound、Monitor、Guitar、Mail、Sun、Moon、X、ChevronLeft、ChevronRight、ChevronDown、MousePointerClick、BookOpen、Sparkles、Hammer、SkipBack、Play、Pause、SkipForward、Repeat、Copy、Check、Code2、NotebookPen、MapPin、Send。无品牌图标。public/favicon.svg：一个 32×32 的圆角方块，颜色为 #F08A6B，带有一个微小的奶油色等距立方体轮廓。
- 字体：@fontsource-variable/fredoka、@fontsource-variable/figtree 和 @fontsource/jetbrains-mono（400、500），均为 OFL-1.1，在 src/fonts.ts 中导入。drei <Html> 标签使用相同的 CSS 字体；无 3D 文本，因此无需字体 JSON 文件。
- 图片：在项目根目录编写 ASSETS.md，包含一个表格（路径、来源 URL、作者、许可证）：每张照片一行（来源为上述 media.vibefather.ai URL，作者 'VibeFather (qwen-image-3.0-pro)'，许可证 'Redistributable with this template'），三个 Fontsource 包（OFL-1.1）和 lucide-react（ISC）各一行，并有一行说明所有 3D 几何体、纹理、缩略图和艺术均为代码绘制。

## 不要做
- 不要后端、API 路由、数据库、认证或表单提交；联系功能仅限复制到剪贴板加一个 mailto 链接。
- 不要音频文件、音频流或任何音乐/视频服务的第三方嵌入；音乐播放器是一个静音计时器 UI。
- 不要外部 3D 模型、烘焙纹理、HDRI 或 Blender 文件：每个物体都用 three.js 图元和代码绘制的 CanvasTexture 构建；不要复制任何已发布房间作品集的模型、布局或家具摆放。
- 场景中不要角色头像、吉祥物、宠物作为 3D 形象，也不要可驾驶载具。
- 任何物体上不要真实品牌标志或可识别的产品设计：普通显示器、普通键盘、通用吉他琴头，不要游戏主机、运动鞋或品牌装备。
- 不要真实海报、专辑封面、游戏或动漫 artwork；墙面艺术仅限代码绘制的抽象形状。
- 任何地方不要真实艺术家姓名、真实歌曲标题或受版权保护的音乐；所有曲目和别名均为虚构。
- 肖像和桌面照片仅展示虚构的 AI 生成人物，绝不使用真实人物的肖像。
- 不要从任何现有作品集照搬文案、口号或区块名称；所有文案用美式英语全新撰写。
- 一切自托管：字体通过 Fontsource npm 包，图标通过 lucide-react，图片下载到 public/images/。不要 CDN `<script>` 或 `<link>` 标签，不要 Google Fonts，不要分析工具。
- 不要商业字体，不要受限 UI 库源码（Aceternity UI、Tailwind Plus / Tailwind UI）；覆盖层组件自己编写。
- 生产构建用一条命令（`npm run build`）输出到 dist/：压缩、无 source map、相对资源路径（Vite base `'./'`）、不把 src/ 复制进 dist/、dist/ 小于 10 MB。
- 单页：每个内部链接都是 `./index.html` 或哈希路由（`#/about`、`#/projects`、`#/music`、`#/contact`）；绝不链接到裸目录。
- 舞台不产生页面滚动；只有面板内容滚动。不要 OrbitControls 或自由相机；相机只通过聚焦补间移动。
- 必须在 1440×900 和 390×844 下工作且零控制台错误；每个区块都能通过 HTML 导航用键盘到达，Escape 关闭面板，焦点环可见。
- 尊重 prefers-reduced-motion：相机瞬时切换和昼夜切换，无开场、浮动、摇摆、粒子、音符或旋转唱片。
- 每次 localStorage 读写（夜间模式、上一曲目）都包在 try/catch 中；站点必须在存储被阻止时仍能工作。
- 除可选的页脚署名链接外，站点内绝不提及 VibeFather 或任何其他品牌；文案中不要日期或年份。

---
— Prompt by VibeFather · https://vibefather.ai/t/isometric-3d-room-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
