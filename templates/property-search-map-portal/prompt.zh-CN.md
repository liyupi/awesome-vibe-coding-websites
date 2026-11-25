> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 房产搜索地图门户

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个房源搜索门户：列表与地图分屏视图（地图用代码绘制，带价格图钉和聚合）；筛选条件与 URL 同步；房源详情页包含照片画廊、房屋信息、价格历史图表、学校和通勤卡片以及房贷估算；已保存房源和已保存搜索；以及一个看房请求表单。40 条虚构房源，照片来自同一次室内与室外拍摄，没有门牌号或标识。白色、深青色 #0F4C5C、珊瑚色图钉 #FF6F59 和沙色 #F4E9D8。

- 受众：希望在没有地图服务的情况下获得搜索体验的独立经纪公司和房产初创公司，以及构建房源产品的开发者。
- 目标：让访客在几秒内筛选四十套房源，打开一条房源，估算每月成本并请求看房。
- 语气：平静而务实，像一位优秀经纪人的邮件：价格、尺寸和分钟数，没有房地产式的感叹。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource-variable/source-serif-4（OFL-1.1）、@fontsource-variable/public-sans（OFL-1.1）、@fontsource/dm-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - vite.config.ts：base './'，build.sourcemap false，src/ 中的任何内容都不会被复制到 dist/。
  - tailwind.config.js：扩展颜色 teal #0F4C5C、tealSoft #E3EEF0、coral #FF6F59、sand #F4E9D8、white #FFFFFF、ink #14252B、muted #5A6B70、line #E3E8E6、park #DCE8D4、water #BFDCE2；fontFamily display 'Source Serif 4 Variable'、sans 'Public Sans Variable'、mono 'DM Mono'。
  - src/components/Map.tsx 将地图渲染为一个内联 SVG，viewBox 为 0 0 1000 700：sand 色块、白色街道、一条水带、三个公园形状以及来自 src/data/map.ts 的街区标签；图钉是 SVG 组，按每条房源的 x 和 y 定位。平移和缩放通过对一个组应用 transform 实现，并加以限制，使地图无法被拖离视野。
  - 一个小型 hash 路由器读取 location.hash；搜索路由将其筛选条件保留在 hash 查询中（#/search?price=300-800&beds=3&type=house&sort=newest&neigh=larchmont）。src/lib/params.ts 使用 history.replaceState 在该查询与筛选条件之间进行双向转换，因此搜索可以被收藏和分享。
  - src/data/seed.ts 保存 40 条房源、街区、学校和通勤线路；src/store/usePortal.ts 是一个用于筛选条件、缩放、选中项、已保存房源和已保存搜索的 reducer，将已保存房源和搜索持久化到 localStorage 的键 [BRAND_SLUG]-portal 下，其中 [BRAND_SLUG] 是 [BRAND] 转为小写并用连字符连接。
  - src/lib/mortgage.ts 将估算值导出为纯函数；价格历史图表是根据房源的历史记录绘制的内联 SVG。
  - 所有文案、房源、筛选选项、看房时段和表单标签都以类型化对象的形式存放在 src/content.ts 和 src/data/seed.ts 中；组件从不硬编码文案。

## 变量
- [BRAND] — 门户名称（默认：“Hearthway Homes”）
- [CITY] — 城市（默认：“Rivermont”）
- [AGENT_NAME] — 负责带看房的经纪人（默认：“Dana Whitfield”）
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/property-search-map-portal（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/property-search-map-portal?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
