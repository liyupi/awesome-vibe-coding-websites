> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 外卖移动应用

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个响应式、移动优先的社区食品配送与外卖订购 PWA（[BRAND]），服务于 [NEIGHBORHOOD]。移动端（<768px）设有底部标签栏（Explore、Search、Orders、Account）、上滑式菜品定制底部弹层，以及悬浮购物车胶囊；桌面端则扩展为侧边栏 + 多列餐厅网格 + 固定购物车栏。不使用虚假手机边框。

- 受众：在移动端或桌面端订购社区餐食的本地食客，以及正在推出品牌化订购应用的独立食品市场平台。
- 目标：提供快速、诱人、端到端的订购体验，涵盖菜系浏览、菜品定制、促销结账，以及动画骑手地图追踪。
- 基调：温暖、诱人、社区友好、快速且清晰。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react (ISC)、@fontsource/fraunces (OFL)、@fontsource/plus-jakarta-sans (OFL)、@fontsource/ibm-plex-mono (OFL)
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中本地导入 @fontsource/fraunces（600、700）、@fontsource/plus-jakarta-sans（400、500、600、700）和 @fontsource/ibm-plex-mono（400、500、600）。
  - 将 Assets 中列出的全部 6 张风格统一的烹饪类 WebP 图片下载到 public/images/，并通过 ./images/... 引用。
  - 将所有虚构的街区厨房、菜单项、定制附加项以及预置的历史/进行中订单保留在 src/data/marketplace.ts 中；将购物车、收藏、促销状态和订单持久化到 localStorage。
  - 切勿将界面包裹在模拟手机边框中；使用真正的响应式布局（<768px 时移动端底部标签栏 + 抽屉；>=1024px 时桌面端导航 + 多列浏览 + 固定购物车侧栏）。

## 变量
- [BRAND] — 市场应用名称（默认："SaffronRun"）。虚构的本地食品配送 PWA 名称
- [NEIGHBORHOOD] — 配送地址 / 区域（默认："Maple Quarter · 218 Cedar St"）。虚构的配送位置标题
- [PROMO_CODE] — 可用的促销码模拟（默认："WELCOME5"）。在购物车抽屉中应用 $5 折扣
- [USER_NAME] — 用餐者个人资料名称（默认："Liam Ortiz"）。虚构的账户用户名
- [DELIVERY_FEE] — 标准配送费（默认："$2.49"）。显示在餐厅卡片和购物车摘要上
- [CREDIT] — 在页脚保留一个小的 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/food-delivery-mobile-app（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便之后无需修改组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/food-delivery-mobile-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
