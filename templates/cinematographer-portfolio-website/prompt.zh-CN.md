> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 电影摄影师作品集网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个虚构摄影指导的作品集。一个电影感的 hero 区，轮播经过调色的电影剧照，带有遮幅黑边和缓慢推近效果；一个项目列表，以片尾字幕的形式排布（片名、导演、格式、年份）；项目页面包含剧照网格、用代码绘制的布光分解图（摄影机、主光、辅光、实用光源）和器材说明；一个作品集锦区块；经纪联系方式；以及一份可下载的 CV。剧照共用同一套调色，钨丝高光与青色阴影；人物从背后出现或呈剪影。深黑 #0B0B0C、钨丝琥珀 #F2A541 与青色阴影 #1E5F74。

- 受众：正在挑选摄影指导的导演、制片人和商业制作公司。
- 目标：用首屏的画面说服人，用布光分解图证明思考，然后促成作品集锦请求或 CV 下载。
- 基调：克制而笃定。字幕、格式与理由。不要电影学院的形容词。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource/syne（OFL-1.1）、@fontsource-variable/dm-sans（OFL-1.1）、@fontsource/space-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务端代码、无外部 API。
- 配置：
  - vite.config.ts：base './'，build.sourcemap false，src/ 中的任何内容都不会被复制到 dist/。
  - tailwind.config.js：扩展颜色 black #0B0B0C、blackSoft #151517、amber #F2A541、teal #1E5F74、tealLight #5FB3C9、warm #EDE6D8、grey #8C8880、line #26262A；fontFamily display 'Syne'、sans 'DM Sans Variable'、mono 'Space Mono'。
  - src/components/Letterbox.tsx 将任意静帧裁剪为 2.39:1，上下带深黑色遮幅（画框上使用 aspect-ratio 2358 / 1080，图片上使用 object-cover）。
  - src/components/LightingDiagram.tsx 以 inline SVG 绘制俯视灯光分解图（片场、带视锥的摄影机、带光束锥的灯光、实用光源、主体），数据来自 content.ts；不使用图表库。
  - 一个小型 hash 路由器读取 location.hash：#/（首页）、#/work、#/work/<slug>；路由变化时滚动到顶部。不使用路由库。
  - 所有文案、项目、静帧、灯光设置、器材备注、演职员名单和 CV 文本都以类型化对象的形式存放在 src/content.ts 中；组件从不硬编码文案。

## 变量
- [BRAND] — 电影摄影师的名字（默认："Rafael Mendes"）
- [CITY] — 所在城市（默认："Lisbon"）
- [FEATURED_FILM] — 精选项目标题（默认："Night Shift"）
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/cinematographer-portfolio-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/cinematographer-portfolio-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
