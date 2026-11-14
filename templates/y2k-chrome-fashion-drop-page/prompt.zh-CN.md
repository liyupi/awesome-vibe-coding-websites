> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# Y2K Chrome Fashion Drop Page

完全按照下面的描述构建这个网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简报
为 [BRAND] 打造的单页限量发售网站，[BRAND] 在 [HOME_BASE] 制作 [PRODUCT_LINE]。页面宣布 [DROP_NAME]：四件单品，每件 [EDITION_SIZE] 件，不发售补货。首屏是一个巨大的液态金属 3D 字标，置于近黑色背景之上，配以青色、淡紫色和粉色光线，以及发售的实时倒计时。其下依次为：跑马灯、可拖拽的产品轮播（带模切贴纸）、含尺码选择器的产品详情、造型手册条带、仅前端的候补名单（最终生成排队票号）、发售规则和页脚。

- 受众：关注小众品牌和创作者胶囊系列的人，用手机购物，知道什么是 drop，并会为此设闹钟。在模板侧：独立时尚品牌、周边发售和创作者在固定日期小批量售卖。
- 目标：让访客挑选一件单品和一个尺码，然后在倒计时结束前加入候补名单。每个区块都服务于同一个选择，页面最终生成一张访客会想截图保存的票券。
- 语气：张扬、光鲜、带点自命不凡，短句和具体数字。听起来像一个小团队，清楚自己的发售量，而不是零售商。不用感叹号，不用“elevate”，不用“curated”。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react@18 和 react-dom@18（MIT）、three@0.169.0（MIT）、@react-three/fiber@8.17.10（MIT）、@react-three/drei@9.114.0（MIT）、motion@11.18.2（从 motion/react 导入）（MIT）、lucide-react@0.456.0（ISC）、@fontsource/unbounded@5（OFL-1.1）、@fontsource/hanken-grotesk@5（OFL-1.1）、@fontsource/martian-mono@5（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 上述技术栈固定不变。将 three、@react-three/fiber 和 @react-three/drei 精确锁定到这些版本，因为下面的 shader 补丁和加载器依赖它们。将 @types/three@0.169.0、typescript、autoprefixer 和 postcss 添加为开发依赖。
  - vite.config.ts：base './'，build.outDir 'dist'，build.sourcemap false，build.chunkSizeWarningLimit 1600。package.json 脚本 build = 'tsc --noEmit && vite build'。
  - Tailwind theme.extend.colors：void #07060D、ultra #160B36、cyan #27F2FF、pink #FF2FB3、lilac #B79CFF、acid #E8FF3A、chrome #F2F5FC、steel #A9B0C6。fontFamily：display 'Unbounded'，sans 'Hanken Grotesk'，mono 'Martian Mono'。所有关键帧动画（marquee、drift、twinkle、globe）都放在 src/index.css 中。
  - 在 src/index.css 中定义这些 token 并在所有地方使用：--holo: linear-gradient(115deg,#27F2FF 0%,#B79CFF 38%,#FF2FB3 70%,#E8FF3A 100%); --chrome-ring: linear-gradient(180deg,#FFFFFF 0%,#9AA3B8 18%,#2A2C3A 47%,#0D0D16 53%,#6E7488 82%,#F2F5FC 100%); --chrome-text: linear-gradient(180deg,#FFFFFF 0%,#C7CFDF 44%,#6F7689 50%,#E9EEF7 100%)。全息边框的实现方式是：padding-box 为 #0B0A14，叠加在 border-box 的 var(--holo) 之上，并带 1.5px 透明边框。
  - 将所有可见字符串、产品、尺码表、FAQ 回答和 drop 设置保留在 src/content.ts 中。当变量值与默认值不同时，重写该文件中的所有文案以适配新品牌和产品线，保持相同的区块结构、句子长度和条目数量，并保持相同的服装类型，以便照片仍然匹配（除非用户替换了照片）。
  - 文件：src/content.ts、src/App.tsx（持有 activeProductId 和 selectedSize 状态，并将它们传递给每个区块）、src/lib/countdown.ts、src/three/ChromeWordmark.tsx（用 React.lazy 加载，使 three.js 落在自己的 chunk 中）、src/components 用于 Header、Hero、Marquee、PieceCarousel、PieceDetail、Lookbook、Waitlist、Rules、Footer、Sticker、PixelStar、WireGlobe、PillWindow。
  - public/ 中的参考文件使用 import.meta.env.BASE_URL + 'images/piece-shell.webp'，以便相对 base 继续正常工作。用 @fontsource/unbounded/700.css、/900.css、@fontsource/hanken-grotesk/400.css、/500.css、/600.css、@fontsource/martian-mono/500.css、/700.css 导入字体。在 public/favicon.svg 添加一个内联 SVG favicon，在近黑色背景上显示青色像素星。HTML 标题为 '[BRAND] / [DROP_NAME]'。
  - 在 ChromeWordmark.tsx 中按以下确切方式加载 wordmark 字体：import fontUrl from '@fontsource/unbounded/files/unbounded-latin-900-normal.woff?url'; 将其 fetch 为 ArrayBuffer；const font = new Font(new TTFLoader().parse(buffer))，其中 TTFLoader 来自 three/examples/jsm/loaders/TTFLoader.js，Font 来自 three/examples/jsm/loaders/FontLoader.js。这会在运行时将 OFL 字体的轮廓转换为几何体，因此更改 [BRAND] 不需要额外的字体文件。使用 .woff 文件，因为此加载器无法读取 .woff2。

## 变量
- [BRAND] — 品牌名称（默认："Moonfoil"）。会以大写形式成为 3D 字标。拉丁字母、一个不超过 9 个字母的单词效果最佳；两个单词在手机上会于空格处换行。
- [DROP_NAME] — 本次发售的名称（默认："Afterglow Capsule"）
- [PRODUCT_LINE] — 品牌生产的产品（默认："small-run heavyweight streetwear"）
- [HOME_BASE] — 城市和地区（默认："Portland, Oregon"）
- [EDITION_SIZE] — 每款单品的件数（默认："200"）。一个数字。用于生成 '1 OF ...' 贴纸和稀缺性文案。
- [CREDIT] — 在页脚保留一个小的 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/y2k-chrome-fashion-drop-page（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- Void（虚空黑）`#07060D` — 页面底色、主视觉区、轮播、型录、页脚；全息表面上的文字
- Ultraviolet（紫外紫）`#160B36` — 单品详情和规则区块的底色，让页面随滚动产生色彩变化
- Electric Cyan（电光青）`#27F2FF` — 主视觉光扫、线框地球、焦点环、有货圆点、青色贴纸
- Hot Pink（亮粉）`#FF2FB3` — 主视觉光扫、低库存状态、粉色贴纸、型录色块
- Lilac（淡紫）`#B79CFF` — 全息渐变中段、地面网格、次级边框
- Acid Yellow（酸黄）`#E8FF3A` — 全息渐变尾段和最抢眼的贴纸。仅小剂量使用
- Chrome Light（铬光白）`#F2F5FC` — 深色底上的主文字、贴纸描边
- Steel（钢灰）`#A9B0C6` — 深色底上的次级文字和标签

### 字体排印
- 展示字体：区块标题、产品名、跑马灯，以及 3D 字标的轮廓。大写，字距 -0.02em。H2 为 clamp(34px, 5vw, 72px)，行高 1.02：Unbounded（OFL），字重 700/900
- 正文字体：正文 17px/1.55，按钮 15px 字重 600，表单输入：Hanken Grotesk（OFL），字重 400/500/600
- 等宽字体：倒计时数字、贴纸、价格、尺码标签、规格标签、票券。标签为大写 12px，字距 0.08em：Martian Mono（OFL），字重 500/700

### 布局与动效
- 间距：8px 基准。区块在桌面端使用 120px 垂直内边距，移动端 72px。内容最大宽度 1320px，桌面端两侧留白 40px，移动端 16px。卡片间距 24px。
- 圆角：一切都是胶囊或柔和窗口：按钮、标签和倒计时面板为 999px，产品卡片 28px，胶囊窗口 20px，输入框 16px。贴纸保留其模切形状。
- 动效：字标：通过着色器持续波纹，外加朝光标方向的阻尼倾斜（rotation y 最大 0.22 rad，x 最大 0.14 rad，THREE.MathUtils.damp，lambda 4）。在触屏设备上改为按 sin(t*0.4) 缓慢摆动。
- 动效：主视觉光：三个径向渐变在 18s 内交替漂移最多 6%，用 CSS 实现。
- 动效：倒计时数字：每个变化的数字在 200ms 内从 y -12px 滑入，使用 Motion AnimatePresence。
- 动效：跑马灯：CSS translateX(0 到 -50%)，28s 线性，悬停时暂停。
- 动效：产品卡片：透视倾斜最大 6deg，并有跟随指针的全息光泽，过渡 120ms。
- 动效：贴纸：悬停时弹簧弹出（scale 1.14，stiffness 520，damping 14），并出现一个小角折。
- 动效：区块：内容在 500ms 内上浮 24px 淡入，使用 Motion whileInView，仅一次，错开 60ms。
- 动效：像素星星以 steps(3) 在 2.4s 内闪烁。地球经线在 14s 内以错开方式动画 scaleX 1 到 -1，读起来像旋转。
- 动效：prefers-reduced-motion：字标以 frameloop 'demand' 渲染一次，无波纹或倾斜，跑马灯静止，漂移、闪烁、地球、彩纸和上浮淡入均关闭，数字瞬间切换，光泽静止在 25% 不透明度。
- 图像：全程一次拍摄：服装和模特在近黑色无缝背景上，以青色和品红色轮廓光照明，光泽且高对比，让照片融入页面底色。六张生成照片：四张产品图和两张型录画面。其余一切用代码绘制：3D 字标、渐变、贴纸、地球、像素星星、地面网格、锁定的第五张卡片。

## 页面与区块
### [BRAND] / [DROP_NAME]（`index.html`）
1. **共享内容与状态** — src/content.ts 保存 drop = { weekdayUtc: 5, hourUtc: 17, label: 'Friday 17:00 UTC', number: 'Drop 07' }。单品按顺序排列，每个都包含 name、slug、price、sticker、description、spec 行和尺码表。1) Afterglow Shell，$248，sticker '1 OF [EDITION_SIZE]'（burst，acid）：'A cropped puffer in crinkled mirror foil. It catches every streetlight on your walk home.' 面料：Recycled foil nylon，120 gsm fill。版型：Boxy，cropped at the waist。尺码 XS low（剩 3），S in，M in，L low（剩 5），XL sold，XXL sold。2) Static Hoodie，$148，sticker 'LOW STOCK'（pill，pink）：'Heavy enough to stand up by itself, with one holographic foil panel down the left side.' 面料：480 gsm loopback cotton。版型：Oversized，dropped shoulder。尺码 XS sold，S low（剩 2），M in，L in，XL in，XXL low（剩 4）。3) Orbit Cargo，$178，sticker 'FINAL RUN'（ticket，cyan）：'Wide-leg ripstop that shifts from lilac to silver as you move. Six pockets, no flaps.' 面料：Iridescent nylon ripstop。版型：Wide leg，adjustable hem。尺码 XS in，S in，M low（剩 6），L sold，XL in，XXL sold。4) Signal Mesh Top，$84，sticker 'LAST 30'（burst，cyan）：'Double-layer hot-pink mesh, long sleeves, thumbholes. Wear it over anything.' 面料：Double power mesh。版型：Slim，long body。尺码 XS in，S in，M in，L low（剩 4），XL sold，XXL sold。每个单品还有 spec 行 Made：'[HOME_BASE], Studio 3F' 和 Run：'[EDITION_SIZE] numbered, no restock'。Waitlist 数量为 3,482。初始状态：activeProductId = Afterglow Shell，selectedSize = M。切换单品时，如果该尺码未售罄则保留，否则设为 null。
   布局：单个 src/content.ts 导出驱动所有区块。App.tsx 持有 activeProductId 和 selectedSize。页面底色为 void #07060D，overflow-x hidden，链接滚动到区块 id，scroll-behavior smooth（减少动态效果下为 auto）。
2. **页头（Header）** — 左侧：青色像素星和 Unbounded 700 的 '[BRAND]'。中间链接：'Pieces'、'Size'、'Lookbook'、'Rules'。右侧：紧凑等宽倒计时，格式为 03:14:22:09，以及全息按钮 'Join'。
   布局：固定浮动胶囊，距顶部 16px，居中，max-width 1120px，高度 56px，背景 rgba(14,12,26,0.72)，16px backdrop blur，全息边框。低于 768px：左侧星和品牌，右侧 Join；链接和紧凑倒计时隐藏。
   动效：滚动 80px 后，胶囊在 200ms 内收缩到 48px 高度。
3. **Hero** — 眉题胶囊：'Drop 07 / [DROP_NAME]'。视觉隐藏的 h1：'[BRAND] [DROP_NAME]'。3D 字标以大写显示 [BRAND]。20px Hanken Grotesk 副标题：'Four pieces. [EDITION_SIZE] of each. Cut in [HOME_BASE], gone by Saturday.' 倒计时胶囊标注 DAYS、HOURS、MINUTES、SECONDS，下方有小号等宽说明：'Drops Friday 17:00 UTC'。主按钮 'Join the waitlist' 滚动到 #waitlist；次级描边按钮 'See the pieces' 滚动到 #pieces。字标上有两个贴纸：'1 OF [EDITION_SIZE]'（acid burst，rotate -9deg，画布左上）和 'FINAL RUN'（cyan ticket，rotate 7deg，画布右下）。左侧胶囊窗口，标题栏 'next_up'：Afterglow Shell 的 64px 缩略图、名称和 $248。右侧胶囊窗口，标题栏 'the_line'：'3,482 in line'，等宽数字和说明 'Drop 06 sold out in 4:12'。

字标构建，在 ChromeWordmark.tsx 中。Canvas：camera fov 30 在 z 12，dpr [1, 1.75]，gl alpha true，antialias true，pointer-events none。TextGeometry 来自加载的字体，size 1，depth 0.28，curveSegments 14，bevelEnabled true，bevelThickness 0.05，bevelSize 0.028，bevelSegments 8，每行用 geometry.center() 居中。将组缩放到 Math.min(viewport.width*0.9/width, viewport.height*0.84/height)，并在 resize 时重新适配。如果画布窄于 700px，渲染两行，间距 1.12 单位，在空格处断行，若无空格则在字符串中间断行（MOON / FOIL）。材质：meshPhysicalMaterial，color #DFE6F2，metalness 1，roughness 0.12，envMapIntensity 1.5，iridescence 1，iridescenceIOR 1.7，iridescenceThicknessRange [120, 520]，clearcoat 1，clearcoatRoughness 0.05。光照仅来自 drei Environment，files = BASE_URL + 'hdri/studio_small_09_1k.hdr'，resolution 256，frames 1，包含三个 Lightformers：form rect，intensity 6，青色 #27F2FF 在 [-6, 1, 3] scale [4, 8, 1]；粉色 #FF2FB3 在 [6, -1, 3] scale [4, 8, 1]；淡紫色 #B79CFF 在 [0, 6, 2] scale [10, 2, 1]。

通过 material.onBeforeCompile 实现液态涟漪，使用在 useFrame 中推进的共享 uTime uniform。顶点：声明 'uniform float uTime; varying vec3 vRipple;'，并在 '#include <begin_vertex>' 之后添加 'vRipple = position; transformed.y += sin(position.x*1.3 + uTime*0.7)*0.035; transformed.z += sin(position.x*0.9 + position.y*1.6 + uTime*0.5)*0.05;'。片元：声明同样的两个，并在 '#include <normal_fragment_maps>' 之后添加 'vec3 rp = vRipple*2.2; normal = normalize(normal + 0.16*vec3(sin(rp.x*1.7 + rp.y + uTime*0.9) + 0.5*sin(rp.x*4.1 - uTime*0.6), sin(rp.y*2.3 - rp.x*0.8 - uTime*0.7) + 0.5*sin(rp.y*5.3 + uTime*0.5), 0.0));'。

在第一个 3D 帧之前，以及 WebGL 不可用时（用 try/catch 对 getContext('webgl2') 测试），将字标显示为 aria-hidden DOM 文本，Unbounded 900，通过 background-clip 填充 --chrome-text，位于同一盒子中。在 400ms 内交叉淡入到 canvas。当 hero 不在屏幕上时，使用 IntersectionObserver 将 frameloop 设为 'never'。捕获 fetch 失败并停留在 DOM 回退，不产生控制台错误。

倒计时逻辑在 src/lib/countdown.ts 中：目标是 now 之后的下一个周五 17:00:00 UTC，由 drop.weekdayUtc 和 drop.hourUtc 计算，如果该时刻已过则向前滚动 7 天，因此演示永远不会到零。每秒更新并补零到两位。页头使用同一来源。
   布局：min-height max(100svh, 780px)，居中 flex 列，padding-top 96px。背景层，从后到前：void；三个径向渐变（rgba(39,242,255,0.34) 在 18% 28%，rgba(255,47,179,0.38) 在 84% 66%，rgba(183,156,255,0.30) 在 56% 12%，每个在约 70% 处淡出为透明）；下三分之一的淡紫色地面网格（64px 单元格，1px 线 rgba(183,156,255,0.16)，rotateX(68deg)，用遮罩淡出）；右上角 220px 青色 WireGlobe，1px 描边，5 条经线和 5 条纬线；边缘周围散布八个 PixelStars。流内顺序：眉题、画布块（100% 宽度，高度 clamp(240px, 46svh, 440px)）、副标题、倒计时行、按钮。倒计时行：桌面端四个 170px 宽的胶囊面板，内部 #0B0A14 周围有 2px --chrome-ring 斜面，顶部内嵌高光，数字为 Martian Mono 700，clamp(30px, 5.4vw, 78px)，填充 --chrome-text，面板内数字下方为 11px 标签。按钮并排，高度 56px；主按钮填充 --holo，void 文字。胶囊窗口绝对定位在 bottom 32px、left 40px 和 right 40px，宽度 250px，每个都有胶囊标题栏，左侧小星，右侧小 x，仅在 1180px 宽以上出现。移动端 390px：画布高度 58vw，两行字标，贴纸缩小到 80%，倒计时面板一行四个，间距 8px，数字 28px，按钮堆叠全宽，globe 110px。所有内容在 844px 高度内适配。
   动效：加载时眉题、副标题、倒计时和按钮以 60ms 交错淡入上移。贴纸在加载后 500ms 从 scale 1.6 以弹簧效果落位。胶囊窗口在 5s 内上下浮动 6px，相位相反。字标、漂移和数字见动效列表。
4. **跑马灯带（Marquee band）** — 重复文本，项目之间为 void 像素星：'DROP 07'、'[DROP_NAME]'、'1 OF [EDITION_SIZE]'、'NO RESTOCK'、'FRIDAY 17:00 UTC'、'DROP 06 SOLD OUT IN 4:12'、'[HOME_BASE]'。全部大写。
   布局：全出血带，高 72px（移动端 56px），填充 --holo，旋转 -1.5deg，与 hero 底部重叠 24px，宽度 104vw。Unbounded 700，26px（移动端 18px），void 色。列表的两份副本并排，使循环无缝。
   动效：translateX(0 to -50%)，28s linear，infinite，悬停时暂停。减少动态效果下为静态。
5. **单品轮播（The pieces carousel）** — id pieces。H2：'Four pieces. One run. No restock.' 简介：'Each style is numbered by hand and retired when the run is gone. Drag to look, tap to pick.' 每张卡片：3:4 图片、贴纸、名称使用 Unbounded 700、20px，等宽字体价格，来自规格行的一行面料信息，以及一行等宽字体的库存信息带一个圆点（当只有两个或更少的尺码完全有库存时显示粉色 'Going fast'，否则显示青色 'N sizes open'，其中 N 统计未售罄的尺码数）。选中的卡片有一个小的 'PICKED' 等宽标签和一个全息边框。第五张卡片是锁定的：等宽标签 'ITEM 05'，一个巨大的 '?' 使用 Unbounded 900，以 --chrome-text 填充，覆盖在代码绘制的青色、淡紫色和粉色斜条纹图案上，不透明度 18%，说明文字 'Unlocks when the timer hits zero.' 以及贴纸 'CLASSIFIED'（ticket，粉色）。行下方：等宽计数器 '01 / 05' 和一个 2px 进度条，以 --holo 填充。箭头按钮使用 Lucide ArrowLeft 和 ArrowRight。
   布局：标题在左侧，箭头按钮在右侧，在最大宽度内。卡片行是全出血的：一个水平滚动容器，隐藏滚动条，scroll-snap-type x mandatory，40px 侧边内边距（移动端 16px），24px 间隙。卡片宽度桌面端 340px、移动端 78vw，圆角 28px，1.5px 钢色边框、30% 不透明度，背景 #0F0D1C，图片使用 object-fit cover。贴纸从右上角伸出 14px，并在 -8deg 到 11deg 之间旋转（行不能裁剪它们：32px 顶部内边距）。点击产品卡片会设置 activeProductId 并平滑滚动到 #size。锁定卡片被点击时抖动 4px 持续 300ms，不做任何改变。
   动效：鼠标拖拽滚动：在鼠标 pointerdown 时将 snap 设为 none，随指针移动 scrollLeft，释放时恢复 snap，如果指针移动超过 6px 则忽略点击。箭头 scrollBy 一张卡片加间隙。倾斜，从零编写：在 pointermove 时设置 --rx = (0.5 - y)*10deg，--ry = (x - 0.5)*12deg，--mx，--my 在卡片上，使用 transform perspective(900px) rotateX(var(--rx)) rotateY(var(--ry))。光泽是一个绝对定位的图层覆盖在图片上，background linear-gradient(115deg, transparent 30%, rgba(39,242,255,0.45) 42%, rgba(183,156,255,0.5) 50%, rgba(255,47,179,0.45) 58%, transparent 70%)，background-size 220% 220%，background-position var(--mx) var(--my)，mix-blend-mode color-dodge，opacity 0 在悬停时变为 0.85。在触摸设备上光泽保持在 0.5，其位置跟随卡片在滚动容器中的偏移。
6. **单品详情和尺码选择器（Piece detail and size picker）** — id size。左侧：活动单品的大图在一个 PillWindow 中，其标题栏显示单品 slug 加上 '.view'，单品贴纸在角落，下方有四个 64px 缩略图用于切换单品。右侧：等宽标签 'PIECE 0X OF 04'；H2 带单品名称；等宽价格；描述；尺码标签 'PICK YOUR SIZE' 带芯片 XS、S、M、L、XL、XXL；规格行 Fabric、Fit、Made、Run。实时摘要栏在一个 --chrome-ring 胶囊中：'[piece name] / [size] / [price] / Numbered 1 of [EDITION_SIZE]'，未选择时显示 'Pick a size to continue'。按钮 'Reserve this size' 滚动到 #waitlist，未选择时禁用。下方注释：'Flat $9 shipping in the US, $24 worldwide. Ships within 5 business days of the drop.'
   布局：全出血紫外色 #160B36 底色，图片后方有一个粉色径向光晕。桌面端两列 7/5，间隙 56px，移动端堆叠，图片在前。芯片是 56px 宽、44px 高的胶囊，使用 Martian Mono 500。可用：1px 钢色边框，铬色文字。选中：以 --holo 填充，void 文字。低库存：1px 粉色边框带一个小粉点，芯片下方有一个 '3 left' 等宽微标签。售罄：钢色文字 45% 不透明度，芯片上画一条斜线，aria-disabled，不可点击，'Sold out' 作为工具提示和 aria-label。芯片是真正的按钮，带青色焦点环。移动端它们换行成两行三列。
   动效：切换单品时图片交叉淡入淡出，文字在 240ms 内滑动 12px，使用 AnimatePresence。选择芯片时它以 scale 1.08 弹出然后恢复。摘要文字以 160ms 快速垂直滑动切换。
7. **型录条带（Lookbook strip）** — id lookbook。H2：'Shot after hours.' 图块按顺序：1) lookbook-solo 照片；2) 青色色块（#27F2FF）带一个 void WireGlobe 和等宽文字 'FIELD NOTE 07 / NO FLASH, TWO GELS, ONE NIGHT.'；3) lookbook-duo 宽幅照片；4) 亮粉色色块（#FF2FB3）带一个 --chrome-text 像素星和 void 等宽字体的鸣谢：'Photography Dara Voss. Styling Mika Oyelaran. Pattern Ines Okafor. Print Theo Marchetti.' 行下方说明：'Worn on set by the crew at Studio 3F.'
   布局：全出血 flex 行，桌面端高度 560px，间隙 16px，图块圆角 28px：竖版照片 420px 宽，青色图块 300px，宽幅照片 900px，粉色图块 300px。行在溢出时水平滚动。移动端：高度 420px，吸附滚动，每个图块 78vw，宽幅照片保持 object-fit cover。
   动效：仅桌面端：当该区域穿过视口时，Motion useScroll 将图块在 y 轴上按 -24px、24px、-12px 和 18px 偏移，按此顺序。
8. **等候名单（Waitlist）** — id waitlist。void 色 Unbounded 900 大标题：'Get in line before the timer hits zero.' void 色正文：'3,482 people are ahead of you. Waitlist gets a 15-minute head start at 16:45 UTC.' 表单窗口，标题栏 'join_the_line'：只读选择行显示单品缩略图、单品名称、尺码和价格，带一个 'Change' 链接到 #size；邮箱输入框标签 'Email'，占位符 'you@domain.com'；按钮 'Join the line'。状态：1) 空闲。2) 提交时错误，内联显示粉色边框：'That email is missing something. Try name@domain.com.'，以及未选择尺码时：'Pick a size first. Sold-out sizes can't be reserved.' 带一个链接到 #size。3) 提交中：按钮显示 'Saving your spot' 带一个小铬色旋转器，通过 setTimeout 持续 900ms；无网络请求。4) 成功：表单被一张票替换，显示 'YOU'RE IN LINE'，队列号 '#' + (3483 + 邮箱哈希对 40 取模) 使用 Martian Mono 700、64px，以 --chrome-text 填充，然后是单品、尺码、价格、掩码邮箱（首字母、点、域名）、'Head start Friday 16:45 UTC'，以及按钮 'Edit my entry'，返回空闲状态并保留值。绝不声称已发送邮件。
   布局：全出血区域，背景 linear-gradient(120deg,#27F2FF 0%,#B79CFF 42%,#FF2FB3 100%) 和散布的 void 像素星。桌面端两列：标题在左侧 clamp(40px, 6vw, 84px)，480px 表单窗口在右侧，背景 #0B0A14，铬色文字，圆角 20px 和胶囊标题栏。移动端堆叠。票：相同宽度，一个 --chrome-ring 框架围绕深色内面板，带虚线穿孔线和两个圆形缺口在两侧边缘由径向渐变遮罩切出，底部为存根。表单使用 onSubmit preventDefault；邮箱检查为 /^[^@\s]+@[^@\s]+\.[^@\s]+$/。错误使用 role='alert'。
   动效：票从 y -24px 落下，带轻微 -2deg 旋转，在弹簧上稳定到 0，12 个像素星从其中心向外爆发并在 700ms 内淡出。减少动效下无爆发。
9. **发售规则（Drop rules）** — id rules。H2：'The rules.' 手风琴，第一项打开。'When does it drop?'：'Friday 17:00 UTC. The waitlist gets in at 16:45. The page goes live for everyone else when the timer hits zero.' 'Can I reserve more than one piece?'：'One size per style, per email. Up to four styles in total, so nobody clears a whole run.' 'Will you restock?'：'No. Each pattern is retired once its [EDITION_SIZE] numbered pieces are gone. Drop 06 went in 4 minutes 12 seconds.' 'How does shipping work?'：'Flat $9 in the US, $24 worldwide, out within 5 business days. Or pick up at Studio 3F on Saturdays, 11:00 to 16:00.' 'What about returns?'：'Size exchanges within 14 days while stock lasts. Otherwise numbered pieces are final sale.'
   布局：紫外色 #160B36 底色。桌面端两列：标题和一个 180px 淡紫色 WireGlobe 在左侧，手风琴在右侧 760px 宽。每行是一个胶囊端头的条，1px 淡紫色边框、40% 不透明度，问题使用 Hanken Grotesk 600、20px，Lucide Plus 图标变成 X。真正的按钮带 aria-expanded。移动端堆叠。
   动效：行以 Motion 高度动画在 220ms 内打开，图标旋转 45deg。
10. **页脚（Footer）** — 巨大的 '[BRAND]' 使用 Unbounded 900 大写作为轮廓文字（1.5px 铬色 text-stroke，透明填充）横跨宽度。下方三列。Studio：'Studio 3F, 412 Tinsel Alley, [HOME_BASE]' 和 'Pickups Saturday 11:00 to 16:00'。Contact：'hello@' + 小写 [BRAND] + '.example' 作为纯文本，不是 mailto 链接。跳转链接：Pieces、Size、Lookbook、Rules。底部行：'[BRAND] makes [PRODUCT_LINE]. Drop 08 is already on the cutting table.' 为 Credit 部分描述的可选鸣谢链接留出空间。
   布局：虚空地面（Void ground），顶部带一条 1px 的 --holo 线，顶部内边距 80px，底部内边距 40px。让巨型字标（wordmark）适配，字号以 vw 为单位，使其横跨内容宽度而不溢出（八个字母时约为 11.5vw；根据字符数计算）。在移动端，各列堆叠排列。

## 资产
- 图片：将 https://media.vibefather.ai/assets/b125a5e3-9f07-4a2d-a2b8-0362cb096275/piece-shell.webp 下载到 public/images/piece-shell.webp。Alt：'Cropped puffer jacket in crinkled mirror-silver foil, lit with cyan and magenta rim light on black'。用于 Afterglow Shell 卡片、详情视图和 hero pill 窗口。来源：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template。
- 图片：将 https://media.vibefather.ai/assets/b125a5e3-9f07-4a2d-a2b8-0362cb096275/piece-hoodie.webp 下载到 public/images/piece-hoodie.webp。Alt：'Oversized washed-black hoodie with a holographic foil side panel, lit with cyan and magenta rim light on black'。用于 Static Hoodie 卡片和详情视图。来源：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template。
- 图片：将 https://media.vibefather.ai/assets/b125a5e3-9f07-4a2d-a2b8-0362cb096275/piece-cargo.webp 下载到 public/images/piece-cargo.webp。Alt：'Wide-leg cargo trousers in iridescent lilac ripstop, lit with cyan and magenta rim light on black'。用于 Orbit Cargo 卡片和详情视图。来源：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template。
- 图片：将 https://media.vibefather.ai/assets/b125a5e3-9f07-4a2d-a2b8-0362cb096275/piece-mesh.webp 下载到 public/images/piece-mesh.webp。Alt：'Long-sleeve top in sheer hot-pink double mesh, lit with cyan and magenta rim light on black'。用于 Signal Mesh Top 卡片和详情视图。来源：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template。
- 图片：将 https://media.vibefather.ai/assets/b125a5e3-9f07-4a2d-a2b8-0362cb096275/lookbook-solo.webp 下载到 public/images/lookbook-solo.webp。Alt：'Model turned away from the camera in the silver foil jacket and lilac cargo trousers, in a dark studio with colored rim light'。用作第一块 lookbook 图块。来源：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template。
- 图片：将 https://media.vibefather.ai/assets/b125a5e3-9f07-4a2d-a2b8-0362cb096275/lookbook-duo.webp 下载到 public/images/lookbook-duo.webp。Alt：'Two models seen from behind walking through low fog in a dark studio, wearing the black hoodie and the pink mesh top'。用作宽幅 lookbook 图块。来源：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template。
- 图片：将环境贴图 https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_09_1k.hdr 下载到 public/hdri/studio_small_09_1k.hdr。仅用作 3D 字标的反射源。来源：Poly Haven，作者 Sergej Majboroda，许可证 CC0。
- 图片：用代码绘制，无文件：3D 字标几何体、hero 渐变和地面网格、WireGlobe（SVG）、PixelStar（SVG rects on a 9 by 9 grid, a plus-shaped sparkle）、贴纸（内联 SVG 形状：12-point burst polygon、pill、notched ticket，全部带 5px Chrome Light 描边、paint-order stroke 和硬投影）、锁定的第五张卡片、ticket 和 favicon。
- 图标：lucide-react（ISC），已打包：ArrowLeft、ArrowRight、Plus、X、Check。像素星星和标题栏的 x 为手绘。
- 字体：通过 Fontsource npm 包自托管：@fontsource/unbounded（700、900，外加用于 3D 轮廓的 900 latin .woff）、@fontsource/hanken-grotesk（400、500、600）、@fontsource/martian-mono（500、700）。均为 OFL-1.1。
- 图片：在项目根目录创建 ASSETS.md，列出每个已下载文件：路径、源 URL、作者和许可证。六张照片使用 'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template'，HDRI 使用 'Poly Haven / Sergej Majboroda / CC0'。同时列出字体和 Lucide 及其许可证。

## 不要做
- 无后端：没有服务器代码、API 路由、数据库、认证、结账、支付或第三方 API。等候名单表单从不提交到任何地方，也不发起任何网络请求。
- 不使用 CDN script 或 link 标签，不使用 fonts.googleapis.com 或 fonts.gstatic.com，不使用分析工具。每个字体、图片、HDRI 和脚本都随 dist/ 一起发布。
- 不要使用 drei Environment 预设或任何其他在运行时从远程主机获取文件的辅助工具。HDRI 仅从 public/hdri/ 加载。
- 禁止热链接。将列出的每个文件下载到项目中。不使用占位图服务，也不使用 Unsplash、Pexels 或 Pixabay。
- 不生成 source map，dist/ 中不包含 src/，仅使用相对资源路径。保持 dist/ 在 20 MB 以下。内部链接是 index.html 上的区块锚点，绝不用裸目录。
- 在 1440x900 和 390x844 下零控制台错误，且两种尺寸下均无水平页面滚动（旋转跑马灯位于 overflow-hidden 包装器内）。如果 WebGL 或字体获取失败，静默回退到 DOM 字标。
- 遵守动效列表中描述的 prefers-reduced-motion。
- 不要使用真实街头服饰、奢侈品牌或运动品牌的标志、方框标记、字母组合或标签设计。服装不带有任何标志、文字或图形。
- 不要复制真实产品和联名中可识别的服装或运动鞋轮廓或标志性印花。此页面不出现运动鞋。
- 不使用商业或自定义的 chrome 展示字体。chrome 效果仅来自 OFL 字体轮廓上的 3D 材质，加上所列字体中的 CSS 渐变文字。
- lookbook 照片中不出现真实名人、音乐人或模特，也不使用其肖像。不出现面部特写。
- 不使用注册商标的 drop 平台名称、零售商徽章、支付徽章，或真实口号和广告语。
- 不使用与真实 Y2K 时代操作系统、游戏主机、手机制造商或媒体播放器相关的图标、吉祥物、窗口控件或角色。胶囊窗口仅使用此处描述的星形和 x，绝不使用一排三个彩色圆点。
- 不使用受限效果库中用于全息卡片或金属文字的代码。按描述从头编写倾斜、光泽和 chrome 效果。
- 不要回退到奶油色或柔和色调，也不要把近黑色背景换成浅色背景。青色、粉色和淡紫色必须在首屏可见。
- 除可选的署名链接外，网站内不得提及模板来源。除 drop 的星期和时间外，不显示任何日期。

---
— Prompt by VibeFather · https://vibefather.ai/t/y2k-chrome-fashion-drop-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
