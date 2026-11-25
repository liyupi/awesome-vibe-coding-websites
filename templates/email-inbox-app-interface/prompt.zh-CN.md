> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 电子邮件收件箱应用界面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个用于虚构邮件服务的三栏式邮件客户端：文件夹和标签；带未读、星标、稍后提醒和批量操作的会话列表；线程式阅读视图；带富文本、附件标签（attachment chips）、收件人自动补全和定时发送的撰写器；带筛选器的搜索；键盘快捷键；以及分栏收件箱（Primary、Updates、Newsletters）。一个虚构自由职业者的预置邮箱。所有内容都存储在 localStorage 中，位于一个适配器文件之后，该文件的编写方式使得真实邮件 API 可以替换它。首屏是一个繁忙的收件箱，且有一个线程处于打开状态。白色、石板色 #1E293B 以及用于未读和主要操作的暖珊瑚色 #FF6B5A；深色模式。

- 受众：需要可信邮件或消息界面用于原型设计的产品设计师和前端开发者，以及构建邮件客户端的开发者。
- 目标：外观和行为像人们已经在使用的邮件客户端：密集、快速且键盘友好，每个控件背后都有真实状态。
- 语气：平静、紧凑且中性。界面标签简短平实；预置消息读起来像真实的工作邮件。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource-variable/onest（OFL-1.1）、@fontsource-variable/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - vite.config.ts：base './'，build.sourcemap false，src/ 中的任何内容都不会被复制到 dist/。
  - tailwind.config.js：darkMode 'class'；用 src/index.css 中由 CSS 变量命名的两套调色板（slate、panel、raised、line、text、muted、accent）扩展颜色，这样深色和浅色主题通过更改 <html> 上的 class 来切换。
  - src/data/types.ts 定义 Thread、Message、Contact、Label 和 Folder；src/data/seed.ts 保存种子邮箱；src/data/adapter.ts 导出 MailAdapter 接口和 LocalStorageAdapter，这是唯一在键 [BRAND_SLUG]-state 下读写 localStorage 的文件，其中 [BRAND_SLUG] 是 [BRAND] 转为小写并用连字符连接。
  - src/store/useMail.ts 是一个 reducer（useReducer + context），保存邮箱状态和每个操作：选择会话、标记已读或未读、加星标、稍后处理、归档、删除、移动到标签、发送、定时发送、保存草稿、应用搜索和筛选、设置主题。
  - 定时消息位于 Outbox 文件夹中；加载时，任何已过定时时间的消息都会移动到 Sent。
  - 富文本正文是一个 contentEditable div，使用 document.execCommand 实现粗体、斜体、列表、链接和引用；没有编辑器库。
  - 所有界面文案、文件夹名称、标签、联系人和设置都位于 src/content.ts 中；邮箱本身位于 src/data/seed.ts 中；组件从不硬编码文案。

## 变量
- [BRAND] — 邮件服务名称（默认：“Quill Mail”）
- [USER_NAME] — 邮箱所有者（默认：“Maya Okonkwo”）。即邮箱中预置数据的自由职业者。
- [USER_ROLE] — 所有者的职业（默认：“freelance brand designer”）。显示在账户菜单和签名中。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/email-inbox-app-interface（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值编写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/email-inbox-app-interface?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
