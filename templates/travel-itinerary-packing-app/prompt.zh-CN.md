> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 旅行行程与打包应用

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个阳光明媚、编辑风格的响应式移动优先旅行伴侣 PWA（[BRAND]），内置一趟虚构的 5 天海岸度假行程，目的地为 [DESTINATION]，出行人数为 [TRAVELERS]（[TRIP_DURATION]，预算 [TRIP_BUDGET]）。移动端（<768px）使用底部 4 标签栏（Itinerary、Budget、Packing、Places）；桌面端显示侧边栏 + 分栏时间线与海岸路线地图/详情布局。不使用假手机边框。

- 受众：休闲旅行者、情侣以及组织多日旅行、预算和离线打包清单的旅行规划者。
- 目标：让逐日行程、预订参考、货币换算和打包准备情况在移动中轻松更新。
- 基调：阳光明媚、宁静、编辑风格、井然有序的海岸乐观主义。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react（ISC）、@fontsource/fraunces（OFL）、@fontsource/plus-jakarta-sans（OFL）、@fontsource/jetbrains-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中本地导入 @fontsource/fraunces（600、700）、@fontsource/plus-jakarta-sans（400、500、600、700）和 @fontsource/jetbrains-mono（400、500、600）。
  - 将所有 6 张风格统一的黄金时刻海岸旅行 WebP 图片下载到 public/images/，并通过 ./images/... 引用。
  - 在 src/data/tripSeed.ts 中为全部 5 天（Day 1–Day 5）的行程停靠点、旅行费用、分类打包物品和 6 个已保存的海岸地点填充种子数据；将所有变更持久化到 localStorage。

## 变量
- [BRAND] — 旅行应用名称（默认："CovePass"）。虚构的旅行伴侣 PWA 名称
- [DESTINATION] — 海滨目的地（默认："Cala Sol Coast"）。虚构的地中海度假胜地
- [TRAVELERS] — 旅行者标签（默认："Elena & Marco"）。显示在行程标题中
- [TRIP_BUDGET] — 行程预算上限（默认："$2,800"）。以美元计的预算目标
- [TRIP_DURATION] — 行程时长标签（默认："5 Days · 4 Nights"）。不含日历日期的相对时长
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/travel-itinerary-packing-app（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/travel-itinerary-packing-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
