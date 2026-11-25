> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 动态设计师作品集

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个虚构动态设计师的作品集，作品本身会动。一个用代码实时绘制的宣传片主视觉（动态图形与字体，20 秒，带播放 / 暂停和声音开关），一个项目网格，缩略图在悬停时循环播放，案例页面逐帧拆解动画，配有拖动条、缓动曲线和分镜帧，一个服务与报价区块，一条工具条，以及联系方式。所有动画都遵循减少动态效果设置，并提供静态海报。偏黑色、酸性黄和电光紫；一款粗体 grotesk 字体。

- 受众：聘请动态设计师的创意总监、产品团队和电影节组织者，以及想要一个能展示节奏把控的作品集的设计师。
- 目标：在最初二十秒内让访客相信这位设计师懂动态，然后引导至案例页面和联系表单。
- 语气：自信、迅捷、精确。用短句、时间码和帧数代替形容词。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource-variable/archivo（OFL-1.1）、@fontsource-variable/space-grotesk（OFL-1.1）、@fontsource-variable/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务器代码、无外部 API。
- 配置：
  - vite.config.ts：base 设为 './'，build.sourcemap 设为 false，src/ 中的内容不会复制到 dist/。
  - tailwind.config.js：扩展颜色 black #111111、acid #E8FF3A、violet #6A4CFF、violetLight #A394FF、white #F4F4F0、grey #8A8A94、line #2A2A30；fontFamily 中 display 为 'Archivo Variable'，sans 为 'Space Grotesk Variable'，mono 为 'JetBrains Mono Variable'。
  - src/reel/draw.ts 存放纯绘图函数：drawReel(ctx, t, w, h) 用于 20 秒循环，drawThumbnail(kind, ctx, t, w, h) 用于六个项目循环，drawCase(ctx, t, w, h) 用于案例动画；t 以秒为单位，因此任意帧都可以按需渲染，用于拖动预览和分镜。
  - 缓动函数位于 src/reel/easing.ts，为纯函数（cubic-bezier 求解器、ease-out-back、spring），由播放器、曲线卡片和 canvas 场景复用。
  - 一个小型 hash 路由读取 location.hash：#/（首页）、#/work、#/work/<slug>；路由变化时滚动到顶部。不使用路由库。
  - 所有文案、项目、服务、费率和工具都存放在 src/content.ts 中，作为带类型的对象；组件从不硬编码文案。

## 变量
- [BRAND] — 动态设计师的名字（默认："Marta Ives"）
- [CITY] — 工作室所在城市（默认："Rotterdam"）
- [HERO_PROJECT] — 精选项目标题（默认："Neon Transit"）
- [DAY_RATE] — 产品与 UI 动效的日费率（默认："$650"）
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/motion-designer-portfolio（默认：是；删除此行即可移除）

页面与区块（Pages & Sections）下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/motion-designer-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
