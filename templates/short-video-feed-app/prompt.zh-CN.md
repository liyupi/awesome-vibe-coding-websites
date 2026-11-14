> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 短视频信息流应用

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个面向 [AUDIENCE] 的原创短形式动态故事 Web 应用，围绕编辑主题 [FEED_THEME] 组织。六张竖版照片通过缓慢平移、定时字幕和可选生成音效，变成类似视频的场景。包含一个吸附式信息流、本地社交操作、评论抽屉、关注视图，以及带媒体网格的创作者个人资料；不要使用真实视频文件或任何后端。

- 受众：[AUDIENCE]。体验应让休闲移动端观众感到立即可用，并且足够精致，适合评估交互式产品概念的设计师。
- 目标：让访客使用触摸、滚轮或键盘一次只消费一个视觉故事，然后通过仅存在于浏览器中的持久状态点赞、评论、保存、分享、关注和回访故事。每个可见控件都必须有真实的本地行为。
- 基调：温暖、善于观察、电影感且带着安静的俏皮。使用简洁的编辑语言，而不是社交媒体陈词滥调、增长宣称或夸张的紧迫感。

## 技术栈
- 框架：Vite 6 + React 19 + TypeScript
- 样式：Tailwind CSS 4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource-variable/manrope（OFL-1.1）、@fontsource/instrument-serif（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - 将 Vite base 设为 './'，build.sourcemap 设为 false；仅将静态文件输出到 dist/，以 index.html 作为唯一的 HTML 入口。
  - 通过 @tailwindcss/vite 配置 Tailwind CSS 4；在 src/index.css 中定义颜色令牌、字体族、feed 关键帧和可复用工具类。
  - 从所列的 Fontsource 包中导入 Manrope 和 Instrument Serif，使所有字体文件均在本地打包。
  - 创建 src/content.ts，作为变量、导航、六个故事、种子评论、创作者资料、图片路径和所有 UI 标签的唯一来源；通过对 BRAND 转为小写并移除空格和标点来推导资料 handle。
  - 使用小型 hash 路由器实现 #/、#/following 和 #/profile；同时接受 ./index.html?story=<story-id> 并打开匹配的故事，当参数缺失或无效时默认打开第一个故事。
  - 使用 React hooks 管理活跃故事、导航、抽屉、toast、关注和标签页状态；将点赞、收藏、关注和新增评论持久化到 localStorage 中，使用一个由 BRAND 派生的带版本键，并具备安全的 JSON 解析和优雅降级。
  - 仅将 Motion 用于界面过渡，仅将 CSS 关键帧用于场景平移和声音光盘；保持活跃故事与动画状态同步。
  - 在显式按下声音按钮后，使用 Web Audio API 创建安静的环境音，每个故事使用不同的双音振荡器模式；当声音关闭或文档隐藏时挂起 AudioContext。
  - 使用 navigator.clipboard 和基于 textarea 的回退方案实现分享，然后显示本地确认 toast；绝不将内容发送到服务器。

## 变量
- [BRAND] — 虚构的出版物或应用品牌（默认：“Hearthline”）。将其用于字标、个人资料名称、文档标题和派生出的账号名。
- [FEED_THEME] — 故事合集的主题定位（默认：“Small rituals, beautifully observed”）。重写说明文字、简介和空状态以贴合该主题，同时保持其长度和结构不变。
- [AUDIENCE] — 主要受众（默认：“curious people who collect craft, food and slow-travel stories”）。保持语气贴合该受众，不添加营销话术。
- [ACCENT] — 主界面强调色，以十六进制色值表示（默认：“#E9B44C”）。应用于激活状态、进度、聚焦控件和 Follow 按钮；保持可访问的对比度。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/short-video-feed-app（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/short-video-feed-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
