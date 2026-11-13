> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 市场购物应用

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个密集、精致的市场购物 Web 应用，[BRAND] 是一个为 [AUDIENCE] 打造的多店铺虚构购物目的地。默认内容以 [FEATURED_COLLECTION] 为核心，并承载承诺“[TAGLINE]”。包含发现式店面、完整的产品详情视图，以及按卖家分组的购物车。使用虚构的英文产品、店铺、评价、价格、库存和促销；让每个控件都基于共享的客户端状态工作。

- 受众：注重设计、喜欢从独立店铺发现实用物品的购物者，以及需要丰富静态市场界面、无需后端基础设施即可改造的创作者或小型零售团队。
- 目标：让访客从发现走向一次有把握的模拟下单：搜索或筛选、打开产品、选择有库存的颜色和尺码、将其加入多店铺购物车、领取符合条件的优惠券，并在查看订单前理解每项折扣和运费明细。
- 语气：活泼、温暖、实用且具体。使用简洁的购物语言、可信的产品细节、透明的示例数据标签，以及俏皮的促销时刻，不使用紧迫感套路或真实交易声明。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react (ISC)、@fontsource-variable/bricolage-grotesque (OFL)、@fontsource-variable/inter (OFL)
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 配置 Vite，base 设为 './'，sourcemap 设为 false；生产命令必须只向 dist/ 输出静态文件。
  - 为店面、商品和购物车视图使用 hash 路由；当尚未选择商品时，直接导航到 #/product 会选择目录中的第一个商品。
  - 将所有商品、店铺、分类、优惠券、评价、导航标签以及由变量派生的文案值保留在 src/content.ts 中；当变量值变化时重写默认文案。
  - 使用 React context 和 reducers 创建一个共享的市场 store，用于查询、分类、选中的商品和 SKU、已领取的优惠券、购物车行以及推荐批次。
  - 将已领取的优惠券和购物车行持久化到 localStorage 中，使用通用键 marketplace-shopping-state-v1；加载时根据当前库存验证存储的数量。
  - 通过 lucide-react 使用 Lucide 图标，并通过列出的 Fontsource 包自托管两个字体家族；仅导入使用的字重和样式。
  - 仅使用 CSS 和 Web Animations 实现过渡，并提供 prefers-reduced-motion 覆盖；不要添加 motion 或状态管理依赖。
  - 保持生产包低于 20 MB，使用相对图片路径，并且不要将 src/ 复制到 dist/ 中。

## 变量
- [BRAND] — 市场品牌（默认：“Tote & Timber”）。一个虚构的两到三个词的市场名称；从中衍生一个简单的文字标识。
- [TAGLINE] — 店面承诺（默认：“Useful things, joyfully found.”）。一句简短的原创句子，用于发现页头部和空状态。
- [AUDIENCE] — 购物者受众（默认：“design-loving shoppers hunting for useful home and everyday goods”）。针对此受众重写推荐、品类描述和促销文案。
- [FEATURED_COLLECTION] — 精选合集（默认：“The Weekend Edit”）。为闪购和发现故事命名；调整产品目录和区块文案以适配它。
- [CURRENCY] — 显示货币（默认：“USD”）。对每个价格使用 Intl.NumberFormat，并保持所有计算以整数最小货币单位进行。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/marketplace-shopping-app（默认：是；删除此行以移除它）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后可以在不触及组件的情况下替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/marketplace-shopping-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
