> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 太空科技初创公司网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的单页营销网站。[BRAND] 是一家虚构的太空公司，其 [CONSTELLATION] 项目提供 [SERVICE]。两层视差星场（一块画布，固定在整个页面之后）奠定基调。主视觉区由一幅动态轨道图锚定：带经纬网的行星、三条细椭圆轨道、代码绘制的卫星及其渐隐的信号蓝遥测尾迹，以及显示模拟数值的单色遥测标签。随后依次是：含关键数字的任务概览、单色字体的航天器规格表（标注为设计目标，模拟数据）、带脉冲地面站与轨道弧线的风格化覆盖地球仪、含六个虚构里程碑与状态标签（无日期）的垂直发射清单轨道、仅文字的虚构投资人行、含三个职位的招聘条带，以及页脚。静态站点，无后端，无表单；CTA 为 mailto 链接。一切皆以代码绘制。

- 受众：评估远程连接方案的企业运营与 IoT 团队、航空航天合作伙伴、早期阶段投资人，以及正在决定下一站去哪工作的工程师。也包括任何使命驱动的硬件初创公司创始人，他们希望拥有可信的深空存在感。
- 目标：让使命在一次滚动中显得真实、已获资金且准备好招聘：读者应理解 [CONSTELLATION] 做什么，相信工程是严谨的（规格标注为目标，遥测标注为模拟），并以容量或招聘 CTA 收尾。
- 语调：任务控制般的冷静。简短陈述句、加字距的大写标签、具体的示例数字，无感叹号，无宇宙陈词滥调。文案听起来像一位优秀的飞行主任在向客户做简报。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react (MIT)、react-dom (MIT)、tailwindcss (MIT)、motion (MIT)、vite (MIT)、typescript (Apache-2.0)、@fontsource-variable/space-grotesk (OFL-1.1)、@fontsource/inter (OFL-1.1)、@fontsource/space-mono (OFL-1.1)
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 以 react-ts 模板搭建脚手架，然后安装 tailwindcss 3.4、motion 和三个 Fontsource 包。
  - vite.config.ts：base './'，build { outDir: 'dist', sourcemap: false, assetsInlineLimit: 0 }。不要将 src/ 复制到 dist/。
  - tailwind.config.js：content 覆盖 index.html 和 src/**/*.{ts,tsx}；theme.extend.colors 映射精确的 token：void #05070d、panel #0b111c、panelraise #101826、star #e9eef6、dim #8a97ab、hairline 'rgba(233,238,246,0.14)'、signal #4db8ff、signalorb 'rgba(77,184,255,0.28)'；theme.extend.fontFamily：display ['Space Grotesk Variable','sans-serif']、text ['Inter','sans-serif']、mono ['Space Mono','monospace']。
  - 字体在 src/main.ts 中导入：@fontsource-variable/space-grotesk、@fontsource/inter/400.css、@fontsource/inter/500.css、@fontsource/space-mono/400.css、@fontsource/space-mono/700.css。
  - 文件布局：src/content.ts 存放所有字符串（hero、遥测标签、任务文案、规格行、覆盖区域、里程碑、投资者、职位、页脚）；src/starfield.ts（canvas 星空层）；src/components/ 包含 Header、Hero、OrbitDiagram、StarField、Mission、Spacecraft、Coverage、GlobeMap、Manifest、Investors、Careers、Footer；src/App.tsx 组合它们；src/index.css 承载关键帧和减少动态效果覆盖。
  - 星空：页面后方一个固定 canvas，感知 DPR（最小 2），层 A（230 颗星，r 0.4-1.1，alpha 0.25-0.6，漂移 -1.2 px/s，滚动视差 0.12x）和层 B（80 颗星，r 1.2-2.2，alpha 0.5-0.95，漂移 -2.4 px/s，视差 0.3x；其中 12 颗以 2-5 s 的正弦周期闪烁）。每次加载都从固定的种子 PRNG（种子 20260104，mulberry32）重新生成相同的星空布局，绝不使用 Math.random，以便构建具有确定性。标签页隐藏时暂停循环。
  - 轨道卫星和遥测运行在同一个 requestAnimationFrame 时钟上，通过一个小型 useTick hook 共享；数值按 900 ms 间隔更新。在 prefers-reduced-motion 下，在 t = 0 渲染一帧静态画面并停止。
  - 滚动显现使用 motion/react 的 whileInView，once: true，viewport { margin: '-12% 0px' }；manifest 轨道绘制是对该区块的 useScroll scrub。
  - 所有文案位于 src/content.ts。当任何变量值与默认值不同时，重写那里的文案以适配新品牌、星座、服务和站点，保持相同的长度、结构和语气。
  - public/favicon.svg 按 Document 部分所述手写。<title>[BRAND]</title>，lang 'en'。在项目根目录编写 ASSETS.md，列出三个 Fontsource 包（OFL-1.1）和原始 favicon；不存在其他第三方文件。

## 变量
- [BRAND] — 公司名称（默认："Solvane Orbital"）。文字标识、<title>、页脚和 mailto 链接都由它生成（capacity@<brand-slug>.example）。
- [CONSTELLATION] — 项目或星座名称（默认："Kestrel Array"）。两个词；用于 hero 眉题、任务标题和清单条目。
- [SERVICE] — 星座所提供的能力（默认："direct-to-site telemetry backhaul"）。小写名词短语，用于句子内部，例如 'orbital propellant transfer and storage'。
- [HQ_LINE] — 站点地址行（默认："Hangar 4, Longshore Airfield, Port Meribel"）。页脚地址；其最后一段是招聘职位卡片上显示的地点。
- [CREDIT] — 在页脚保留一个小的 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/space-tech-startup-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/space-tech-startup-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
