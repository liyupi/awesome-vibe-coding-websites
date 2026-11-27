> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 智能家居控制应用

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个沉稳的深板岩色（dark-slate）、响应式、移动优先的互联家居控制器 PWA（[BRAND]），面向 [HOME_NAME]。移动端（<768px）使用底部 4 标签栏（Home、Rooms、Scenes、Energy）和横向房间标签；桌面端展开为左侧边栏 + 响应式便当盒（bento）仪表盘。不使用虚假的手机边框。

- 受众：房主、智能家居爱好者，以及正在为触感式多房间设备控制界面制作原型（prototyping）的 IoT 产品设计师。
- 目标：提供即时、具有物理质感的照明、气候、安防和场景自动化控制，并带有实时视觉反馈，且持久化（persisted）在 localStorage 中。
- 基调：沉稳、建筑感、触感、深色磨砂硬件般的精密感。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react（ISC）、@fontsource/space-grotesk（OFL）、@fontsource/inter（OFL）、@fontsource/jetbrains-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中本地导入 @fontsource/space-grotesk（500、600、700）、@fontsource/inter（400、500、600、700）和 @fontsource/jetbrains-mono（400、500、600）。
  - 在 src/data/smartHomeSeed.ts 中存储 4 个房间（Living Room、Bedroom、Kitchen、Studio）、照明/气候/门锁/百叶窗状态、4 个多设备场景（Scenes）以及每小时用电数据；将所有设备和场景更新持久化到 localStorage。
  - 构建一个可交互点击/步进的圆形 SVG 恒温器旋钮，支持 Eco / Heat / Cool 模式及实时弧形反馈。
  - 切勿将界面包裹在模拟手机边框中；在移动端、平板和桌面端实现真正的响应式便当（bento）布局。

## 变量
- [BRAND] — 智能家居应用名称（默认："LumaNest"）。虚构的互联家居 PWA 名称
- [HOME_NAME] — 住宅名称（默认："Alder Ridge Loft"）。显示在页眉和气候卡片中
- [RESIDENT_NAME] — 住户问候名称（默认："Marcus Vance"）。虚构的房主资料名称
- [DEFAULT_TEMP] — 初始恒温器设定点（默认："71°F"）。显示在圆形气候表盘中
- [AIR_QUALITY] — 室内空气质量徽章（默认："AQI 18 · Pure"）。环境遥测读数
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/smart-home-control-app（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/smart-home-control-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
