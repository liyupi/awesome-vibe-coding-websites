> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 交互式 3D 地球旅行日志

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个为虚构作家打造的单页旅行日志，围绕一个由点构成的 three.js 地球仪展开：当读者滚动浏览六篇日志时，地球仪转向每一座城市，一条琥珀色路线从前一站呈弧线延伸而来，图钉随之亮起；图钉可打开照片故事卡片；一条昼夜分界线在地球仪上缓缓漂移；手机用户和偏好减少动态效果的读者则会看到一张带有相同弧线的扁平动画 SVG 地图。

- 受众：关注缓慢陆路旅行写作、并可能订阅这位作家月度来信的读者；以及查看这位作家作品的编辑和合作者。
- 目标：让这段旅程感觉像一段连续的旅途，读者通过滚动来亲历其中，然后将这份关注转化为月度来信的订阅。
- 语调：安静、善于观察且温暖；使用具体的名字、数字和细微的人性瞬间；绝不使用浮夸的旅游宣传册式语言。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + 原生 TypeScript（vanilla TypeScript）
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：three（r16x，WebGL 地球、实例化点、着色器）（MIT）、gsap + gsap/ScrollTrigger（GSAP Standard License（免费，允许商业使用））、lenis（平滑滚动）（MIT）、world-atlas（land-110m.json，Natural Earth 公有领域数据）（ISC）、topojson-client（ISC）、d3-geo（geoContains，仅由构建时点脚本使用）（ISC）、lucide（原生图标）（ISC）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource-variable/manrope（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）、tailwindcss、postcss、autoprefixer（MIT）、vite（MIT）、typescript（Apache-2.0）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务器代码、无外部 API。
- 设置（Setup）：
  - 使用 vanilla-ts 模板通过 npm create vite@latest 搭建脚手架。项目根目录只有一个 HTML 入口：index.html 加载 src/main.ts。不使用框架。
  - vite.config.ts：base './'，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0，chunkSizeWarningLimit 900 }。不要将 src/ 复制到 dist/。
  - package.json scripts："dots": "node scripts/build-dots.mjs"，"predev": "npm run dots"，"prebuild": "npm run dots"，"dev": "vite"，"build": "tsc --noEmit && vite build"。world-atlas、topojson-client 和 d3-geo 是仅由脚本使用的 devDependencies；three、gsap、lenis 和 lucide 是 dependencies。
  - scripts/build-dots.mjs（Node ESM，确定性）：读取 node_modules/world-atlas/land-110m.json，使用 topojson-client 的 feature(topo, topo.objects.land) 进行转换。(1) land-sphere.json：一个 N = 24000 个点的斐波那契球面（黄金角 2.399963 rad；lat = asin(1 - 2(i + 0.5)/N)，lon = 以度数表示的 i * 黄金角并做环绕处理），保留 d3-geo geoContains(land, [lon, lat]) 为 true 的点，写入一个扁平数字数组 [lat, lon, lat, lon, ...]，四舍五入到 2 位小数（约 7,000 个点）。(2) land-grid.json：从 lat -56 到 82，经度和纬度每 1.8 度一个规则网格，保留陆地点，格式相同，用于平面地图。(3) city-lights.json：land-sphere 中 lat -45 到 65 之间每第 9 个条目，用于夜间灯光。将这三个文件写入 src/data/ 并提交，以便在没有该脚本的情况下构建仍可工作。
  - Tailwind 3.4 通过 PostCSS，content ['./index.html', './src/**/*.ts']。在 tailwind.config.ts 中扩展 colors，包含 Design 下的每种颜色（kebab-case 键：ink、navy、panel、hairline、chalk、muted、amber、amber-soft、atmosphere、night）以及 fontFamily display ['Fraunces Variable', 'Georgia', 'serif']、sans ['Manrope Variable', 'system-ui', 'sans-serif']、mono ['IBM Plex Mono', 'ui-monospace', 'monospace']。maxWidth { page: '1360px' }。
  - src/fonts.ts 导入 '@fontsource-variable/fraunces'、'@fontsource-variable/fraunces/wght-italic.css'、'@fontsource-variable/manrope'、'@fontsource/ibm-plex-mono/400.css' 和 '@fontsource/ibm-plex-mono/500.css'；main.ts 首先导入 src/fonts.ts 和 src/style.css。
  - 文件布局（File layout）：src/content.ts（品牌、作者、hero、每个停靠点、legs、统计标签、about、注册和页脚文案，带类型；文案和坐标的唯一存放处）、src/lib/geo.ts（latLonToVec3、slerp 大圆点、haversineKm，R = 6371、routeStats）、src/lib/motion.ts（prefersReducedMotion、canUseWebGL、useGlobe()）、src/globe/globe.ts（createGlobe(container, stops, legs) 返回 { goTo, setArcProgress, setLegFilter, highlight, dispose }）、src/globe/shaders.ts（ocean、dots、atmosphere、arc GLSL 字符串）、src/flatmap/flatmap.ts（createFlatMap(container, stops, legs)，API 相同）、src/ui/journal.ts（驱动已挂载地图的 ScrollTriggers）、src/ui/storyCard.ts、src/ui/legend.ts、src/ui/stats.ts、src/ui/signup.ts、src/ui/header.ts。
  - main.ts 中的模式选择：useGlobe = matchMedia('(min-width: 768px)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches && canUseWebGL()。只有在这种情况下才动态导入('./globe/globe')，因此 three.js 永远不会在手机或减少动态效果的情况下被下载；否则挂载平面地图。监听两个媒体查询的 change 事件：销毁已挂载的地图（renderer.dispose、几何体、材质、ScrollTriggers）并挂载另一个。
  - 仅在允许动态效果时使用 Lenis：new Lenis({ lerp: 0.09 })；lenis.on('scroll', ScrollTrigger.update)；gsap.ticker.add(t => lenis.raf(t * 1000))；gsap.ticker.lagSmoothing(0)。故事卡片打开时暂停 Lenis。
  - 各处使用的坐标约定：latLonToVec3(lat, lon, r) = (r cos(lat) sin(lon), r sin(lat), r cos(lat) cos(lon))，单位为弧度，因此 lat 0 / lon 0 朝向 +Z 方向的相机。要面向某个停靠点，将 globeGroup.rotation.y 补间到 -lon，将 rotation.x 补间到 clamp(lat, -35deg, 35deg)（默认 XYZ 顺序），将 rotation.y 展开到最短路径。
  - 在首次构建之前，使用 curl -L -o 和给定的确切文件名，将 Assets 下列出的每张图片下载到 public/images/。构建本身从不获取任何内容。
  - index.html：lang en，<meta name='theme-color' content='#0A1220'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BRAND] — a travel journal by [WRITER]</title>。public/favicon.svg 如 Assets 下所述。
  - 在项目根目录按 Assets 下所述编写 ASSETS.md。dist/ 包含 index.html、带哈希的 JS/CSS（three.js 在其自己的懒加载 chunk 中）、woff2 字体、favicon.svg 和七张图片；保持其低于 8 MB。

## 变量
- [BRAND] — 期刊名称（默认：“Slow Meridian”）。虚构的期刊或通讯名称。用于字标、标题、页脚和注册文案。绝非真实出版物。
- [WRITER] — 作者姓名（默认：“Noor Halvorsen”）。虚构的作者全名。用于主视觉引导语、关于部分、肖像替代文本和注册行。绝非真实人物。
- [JOURNEY] — 旅程（默认：“eleven months overland from Lisbon to Hanoi”）。一个小写短语：时长、方式和起点/终点。驱动主视觉标题，并决定六个停靠点、它们的真实坐标和三个路段。
- [FOCUS] — 写作主题（默认：“night trains, market kitchens and the people who keep them running”）。一个小写短语，指明期刊的主题。驱动主视觉承诺、条目角度和关于简介。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接至 https://vibefather.ai/t/interactive-3d-globe-travel-journal（默认：是；删除此行以移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/interactive-3d-globe-travel-journal?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
