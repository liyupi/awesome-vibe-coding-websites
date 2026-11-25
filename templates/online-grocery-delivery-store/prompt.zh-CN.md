> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 在线杂货配送商店

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
一家杂货店：货架通道和搜索；通过数量步进器快速添加商品；配送时段选择器；替代偏好；可将全部食材加入购物车的食谱；再次订购历史订单；以及一个带有实时总计和免配送费进度条的购物篮。商品照片来自一次明亮的影棚拍摄，没有品牌标签。叶绿色 #2DB34A、番茄色 #FF5A3C 和香蕉色 #FFE066 搭配白色背景。

- 受众：提供配送服务的独立杂货商和农场商店，以及构建食品电商界面的开发者。
- 目标：快速装满购物篮，选择配送时段并下示例订单，或者回来再次订购。
- 语气：欢快而实用：简短的商品名称、清晰的价格，没有超市口号。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource/baloo-2（OFL-1.1）、@fontsource/nunito（OFL-1.1）、@fontsource/dm-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - vite.config.ts：base 设为 './'，build.sourcemap 设为 false，src/ 中的内容不会复制到 dist/。
  - tailwind.config.js：扩展颜色 leaf #2DB34A、leafDark #187A2E、tomato #FF5A3C、tomatoDark #D93A1E、banana #FFE066、white #FFFFFF、cream #FAFAF7、ink #1B2420、muted #56635C、line #E6EAE6；fontFamily 中 display 为 'Baloo 2'、sans 为 'Nunito'、mono 为 'DM Mono'。
  - 商品图块从五张 3 × 3 商品拼图中裁出单个格子：src/components/ProductTile.tsx 接收一个图片文件和一个格子（col 和 row 取值 0 到 2），渲染一个方形 div，使用 background-image、background-size: 300% 300% 和 background-position: (col × 50)% (row × 50)% 定位。
  - 一个小型 hash 路由读取 location.hash：#/（商店）、#/recipes、#/basket、#/orders；路由切换时滚动到顶部。不使用路由库。
  - src/data/seed.ts 存放 45 个商品、货架分区、食谱、配送时段和两个历史订单；src/store/useShop.ts 是一个 reducer，管理购物篮、时段、替换项、订单和历史订单重新下单，并持久化到 localStorage，键为 [BRAND_SLUG]-basket、-orders 和 -prefs，其中 [BRAND_SLUG] 是 [BRAND] 转为小写并用连字符连接。
  - 配送日标签为 Today、Tomorrow 以及接下来的五个工作日名称，根据真实时钟计算；时段价格和可用性来自 seed。
  - 所有文案、货架分区名称、搜索建议和表单标签都放在 src/content.ts 中；组件绝不硬编码文案。

## 变量
- [BRAND] — 商店名称（默认：“Greenlane Grocers”）
- [CITY] — 配送城镇（默认：“Maplewood”）
- [FREE_DELIVERY] — 解锁免费配送的购物篮总额（默认：“$40”）
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接，指向 https://vibefather.ai/t/online-grocery-delivery-store（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值编写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/online-grocery-delivery-store?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
