> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 弹幕视频平台（Danmaku Video Platform）

请完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个面向 [AUDIENCE] 的原创英文弹幕视频平台，聚焦于 [CONTENT_FOCUS]。其编辑方针是 [TAGLINE]。包含可搜索的首页信息流，以及完整的观看体验：一部用代码绘制的 Canvas 影片、同步的轨道评论、密度时间轴、评论筛选器、本地评论注入、上传者卡片和相关影片。默认精选影片为 [FEATURED_VIDEO]。

- 受众：默认受众是 [AUDIENCE]：喜欢精心制作的视觉影片、并希望在精确时刻做出反应的人。该模板也服务于创作者和开发者，他们需要一个有说服力的客户端社交视频产品，而不是静态的媒体画廊模型。
- 目标：让访客发现一部影片、立即开始播放、了解对话高峰出现在哪里、筛选叠加层、在时间轴中跳转，并添加一条会出现在评论流和密度图中的评论。让收藏、关注、分享、搜索、排序和相关视频导航在本地正常工作。
- 基调：温暖、善于观察、对文化充满好奇，而不是喧闹或幼稚。使用紧凑、具体的编辑文案和可信的观众反应。界面应因对话的流动而显得充满活力，同时底层布局保持平静且易读。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react (ISC)、@fontsource/space-grotesk (OFL)、@fontsource/inter (OFL)、@fontsource/jetbrains-mono (OFL)
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 设置 Vite base: './' 和 build.sourcemap: false。使用 React state 和 window.location.hash 以 hash 路由 '#/' 和 '#/watch' 实现两个视图；不要添加服务器或路由依赖。
  - 将所有变量值、视频记录、分类、定时评论、上传者数据和界面文案保留在 src/content.ts 中。当变量变化时重写默认特定文案，从 [BRAND] 派生 handle 和内部标识符，并保持六个图像主题与其重写后的标题一致。
  - 仅从各自的 Fontsource 包中导入所列的 Space Grotesk、Inter 和 JetBrains Mono 字重，以便每个字体文件都在本地打包。
  - 使用感知 devicePixelRatio 的 Canvas 2D 渲染器，上限为 2x，使用 requestAnimationFrame 进行播放，仅使用 transform 实现弹幕移动，并在路由或视频变化时完全清理定时器和监听器。
  - 使用 Lucide 图标作为控件和导航。为仅图标按钮提供可访问名称、可见的键盘焦点，并在移动端提供最小 44px 的触摸目标。
  - 将已保存的视频 ID、已关注的频道 ID、本地添加的评论和评论偏好持久化到 localStorage。将播放时间保留在内存中，并在存储或剪贴板访问不可用时提供安全的回退方案。

## 变量
- [BRAND] — 平台品牌（默认：“Rillcast”）。虚构的无吉祥物视频社区名称。
- [TAGLINE] — 编辑式标语（默认：“Watch together. Think out loud.”）。用于精选区域和页脚的一行短句。
- [CONTENT_FOCUS] — 目录焦点（默认：“visual culture, design, and urban stories”）。用于改写影片描述和合集的编辑主题。
- [AUDIENCE] — 受众（默认：“curious makers and visual learners”）。目录和页脚所面向的人群。
- [FEATURED_VIDEO] — 精选影片标题（默认：“A City Before It Wakes”）。第一部影片的标题；保持其与黎明城市图像兼容。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接至 https://vibefather.ai/t/danmaku-video-platform（默认：是；删除此行以移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图像——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图像路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/danmaku-video-platform?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
