# Flash Sale Landing Page

> Evergreen homeware sale page with a countdown, tiered discounts, deal cards, a bundle builder and a gift guide.

<a href="https://vibefather.ai/templates/flash-sale-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/flash-sale-landing-page/c4bf71ee-4b86-47cf-97cf-7ff5855e5f65/webp.af23ac5723.webp" width="100%" alt="Flash Sale Landing Page — Evergreen Homeware Sale Landing Page built by GLM-5.4 and Kimi K3.1 Pro"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/flash-sale-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A sale page for a fictional homeware brand, made to be reused for every seasonal sale by changing one name. The first screen pairs a warm tabletop photograph with a heavy poster headline, a rotated price sticker and a countdown whose digits sit on a deep plum panel. Below it, three cards spell out the tiered discounts by spend, and nine deal cards show the old price struck through, the new price and a stock bar. A bundle builder lets a visitor pick products and watch the tier discount apply as the subtotal climbs, a coupon is revealed with one click and copies cleanly, and a gift guide filters the products by recipient and budget. A basket drawer keeps the tier progress, applies the coupon and ends in a sample checkout. The countdown is evergreen: it counts three days from the first visit and says so in the small print, and the copy names no holiday or calendar date. Product photographs come from one shoot in plum, rust and gold tones. Change the brand and sale name in the content file and edit products, discounts and the coupon code; layout, palette and motion stay as described.

| | |
|---|---|
| Category | [E-commerce & Product Pages](../../README.md#e-commerce--product-pages) |
| Site type | [E-commerce](../../types/ecommerce.md), [Landing Page](../../types/landing-page.md) |
| Style | [Dark](../../styles/dark.md), [Brutalist](../../styles/brutalist.md) |
| Effects | Text Animation, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.4](../../models/glm-5-4.md) in ZCode, [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/flash-sale-landing-page?case=c4bf71ee-4b86-47cf-97cf-7ff5855e5f65&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/flash-sale-landing-page/c4bf71ee-4b86-47cf-97cf-7ff5855e5f65/shot_desktop.fab85b1df2.webp" width="100%" alt="Flash Sale Landing Page — Cosy home sale, built by GLM-5.4 in ZCode"></a><br>
<b>Cosy home sale</b><br>
<sub>Built by <b>GLM-5.4</b> in ZCode · <a href="https://vibefather.ai/templates/flash-sale-landing-page?case=c4bf71ee-4b86-47cf-97cf-7ff5855e5f65&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/flash-sale-landing-page?case=1c42d554-88f9-464c-990c-deae3fd49a38&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/flash-sale-landing-page/1c42d554-88f9-464c-990c-deae3fd49a38/shot_desktop.36aec23b8b.webp" width="100%" alt="Flash Sale Landing Page — Fresh start homeware sale, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Fresh start homeware sale</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/flash-sale-landing-page?case=1c42d554-88f9-464c-990c-deae3fd49a38&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand name | Copperleaf Home |
| `[SALE_NAME]` | Name of the sale | The Cosy Home Sale |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add flash-sale-landing-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A ceramics studio running a seasonal seconds sale: set BRAND and SALE_NAME, swap the nine deal cards for your mugs and bowls, and rewrite the tier examples in mono.
- A candle and home fragrance shop: keep the bundle builder, replace the twelve bundle products with your scents and gift sets, and point the gift guide at your recipients and budgets.
- A small furniture and textile brand: use the deal cards for throws, cushions and lamps, set the stock bars to your real claimed percentages, and edit the shipping FAQ.
- A marketer running a client's end-of-season promotion: change BRAND and SALE_NAME per client, replace the product photographs from one shoot, and edit the coupon code and tier thresholds.

## FAQ

### How does the evergreen countdown on the Flash Sale Landing Page work?
The Flash Sale Landing Page counts three days from a visitor's first visit, stores that deadline in the browser and says so in the small print, so the copy never names a holiday or calendar date. When the countdown runs out the hero panel reads that the sale has ended, and a new deadline is set on the next visit. You can reuse the same page for every seasonal sale by changing the sale name.

### How do the tiered discounts and the bundle builder calculate savings?
The Flash Sale Landing Page applies 10% off from $60, 15% from $120 and 20% from $200 of subtotal. In the bundle builder you tick products from a list of twelve, and the sticky panel shows the subtotal, the tier reached, the amount saved and how much more is needed for the next tier before you add the bundle to the basket. The basket drawer keeps the tier progress and applies the coupon.

### What can I change on the Flash Sale Landing Page without touching the layout?
The Flash Sale Landing Page keeps all copy, products, discounts, recipients, FAQ, coupon code and form labels in one content file, with the brand and sale name as the two variables. You edit the brand name, the sale name, the nine deal cards, the twelve bundle products, the tier thresholds and the coupon code, and the layout, plum and gold palette and motion stay as described.

### Is the Flash Sale Landing Page template free to use?
The Flash Sale Landing Page template is free. Its prompt and every DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0, and commercial or client use needs Pro. The demo source code comes with Pro, and the brief, stack and variables are shown publicly on the template page.

### How do I add a coupon reveal and a gift guide to a sale page built with AI?
The Flash Sale Landing Page includes a coupon that flips over on one click and copies cleanly, and a gift guide that filters the products by recipient and budget. Both are described in the published prompt, so an AI coding agent can build them from the same brief. To change them, edit the coupon code and the recipient and budget options in the content file rather than the components.

### How do I build a flash sale landing page with AI?
Copy the prompt from this page or run npx vibefather add flash-sale-landing-page, replace [BRAND] and [SALE_NAME] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Flash Sale Landing Page demo?
The Cosy home sale case was built by GLM-5.4 in ZCode; the Fresh start homeware sale case was built by Kimi K3.1 Pro in Kimi Code. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Flash Sale Landing Page template use?
Flash Sale Landing Page is a single-page site built with Motion, React and Tailwind CSS, with text animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Flash Sale Landing Page template for a client or a business?
The Flash Sale Landing Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Flash Sale Landing Page template work on mobile?
Yes. Every Flash Sale Landing Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More E-commerce & Product Pages](../../README.md#e-commerce--product-pages) · [Flash Sale Landing Page on VibeFather](https://vibefather.ai/templates/flash-sale-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
