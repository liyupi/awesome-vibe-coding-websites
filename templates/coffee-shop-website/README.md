# Coffee Shop Website

> Warm three-page cafe site with a filterable menu, illustrated map and client-side order-ahead pickup.

<a href="https://vibefather.ai/templates/coffee-shop-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/coffee-shop-website/1af58d10-b5fe-4f81-bcc3-f9665827c346/webp.13763191f5.webp" width="100%" alt="Coffee Shop Website — Cafe Website with Menu Filters and Pickup built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/coffee-shop-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A three-page website for an independent coffee shop: a home page with signature drinks and the roasting story, a menu page with dietary filters and three cup sizes, and a visit page with opening hours, an illustrated neighborhood map and an order-ahead pickup form. The default content follows an invented corner cafe in Portland that roasts its own beans, but the structure suits any small cafe, espresso bar or bakery counter: change the brand, city, street, bean origin and founding year and every section still reads true. The home page opens on a full-bleed photograph of the room in morning light, moves through three large alternating drink cards, the bean story told with real numbers, a four-photo strip, three customer quotes and a dark order-ahead band. The menu page lists every drink with 8, 12 and 16 oz prices, dietary badges and filter chips for dairy-free, gluten-free and decaf, plus pastries and retail beans. The visit page has an hours table with a live open-now indicator, transit, bike and parking notes, a hand-drawn SVG map of the block, a three-step pickup builder that ends in a printed-ticket-style confirmation stored in the browser, and a plain-spoken FAQ. The palette is cream and latte with espresso-brown text and a single terracotta accent; Fraunces sets the headlines and Nunito Sans the body, both self-hosted. Nothing is submitted anywhere: the pickup order, milk choices and time slot all live in the browser, so the site works as static files. To adapt it, swap the variables and rewrite the copy in one content file; the menu, map labels and order builder all read from it.

| | |
|---|---|
| Category | [Restaurants, Hotels & Travel](../../README.md#restaurants-hotels--travel) |
| Site type | [Restaurant](../../types/restaurant.md) |
| Style | [Hand-drawn](../../styles/hand-drawn.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 3 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/coffee-shop-website?case=1af58d10-b5fe-4f81-bcc3-f9665827c346&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/coffee-shop-website/1af58d10-b5fe-4f81-bcc3-f9665827c346/shot_desktop.6d9708d173.webp" width="100%" alt="Coffee Shop Website — Corner cafe in Portland, built by GLM-5.3 in ZCode"></a><br>
<b>Corner cafe in Portland</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/coffee-shop-website?case=1af58d10-b5fe-4f81-bcc3-f9665827c346&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/coffee-shop-website?case=ea87a570-73fd-4297-9e56-5e84a89fae7e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/coffee-shop-website/ea87a570-73fd-4297-9e56-5e84a89fae7e/shot_desktop.52d3aae889.webp" width="100%" alt="Coffee Shop Website — Espresso bar in Austin, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Espresso bar in Austin</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/coffee-shop-website?case=ea87a570-73fd-4297-9e56-5e84a89fae7e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Cafe name | Marigold Coffee House |
| `[CITY]` | City | Portland, Oregon |
| `[STREET]` | Street | Alder Row |
| `[BEAN_ORIGIN]` | Bean origin | Huila, Colombia |
| `[FOUNDED]` | Year opened | 2016 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add coffee-shop-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A neighborhood espresso bar: set BRAND and STREET to your shop, replace the signature drinks with your espresso and filter lineup, and keep the order-ahead builder for morning regulars.
- A small bakery counter: keep the menu filters for gluten-free and dairy-free, swap the drink cards for pastries and loaves, and change the pickup slots to collection times.
- A coffee roaster with a retail bag: set BEAN_ORIGIN and FOUNDED to your sourcing story, rewrite the bean section with your roast days, and feature your retail bags on the menu page.
- A mobile coffee cart or market stall: set CITY and STREET to your pitch, shorten the hours table to market days, and replace the block map labels with your stall location and nearby landmarks.

## FAQ

### What sections and pages are included in the Coffee Shop Website template?
The Coffee Shop Website template has three pages. The home page includes a full-bleed photo hero, three signature drink cards, a bean story with concrete numbers, a four-photo strip, customer quotes and a dark order-ahead band. The menu page lists drinks with 8, 12 and 16 oz prices, dietary filter chips and pastries. The visit page has an hours table with a live open-now indicator, an illustrated block map, a three-step pickup builder and an FAQ.

### How does the order-ahead pickup builder work on the coffee shop site?
The order-ahead pickup builder on the Coffee Shop Website template walks through choosing a drink, milk, extras, size and a time slot, then ends in a printed-ticket-style confirmation. Everything is stored in the browser, so no order is sent anywhere. A drink added from the menu page is preselected in the builder on the visit page. You can adapt the drink list, milk choices and time slots by editing the content file.

### Can I change the cafe name, city and bean origin in this coffee shop template?
Yes. The Coffee Shop Website template is driven by five variables: BRAND, CITY, STREET, BEAN_ORIGIN and FOUNDED. Change them in the content file and the wordmark, page titles, email address, address, block map street names, bean story, retail bag and pickup order numbers all update. The default copy is written for an invented Portland cafe, so rewrite any sentence that references the old values.

### Does the coffee shop template include dietary filters and cup sizes?
The Coffee Shop Website template menu page includes filter chips for dairy-free, gluten-free and decaf, dietary badges on drink rows, and 8, 12 and 16 oz price columns for every drink. It also lists pastries and retail bean bags. You can edit the filter categories, badge labels and drink data in the content file without touching the page layout.

### How do I make the coffee shop site show whether the cafe is open right now?
The Coffee Shop Website template includes an hours table with a live open-now indicator that reads the visitor's clock against the hours you set. Edit the opening hours in the content file and the indicator, the hours card and the visit page copy follow. The site is static, so the check runs in the browser and needs no server.

### How do I build a coffee shop website with AI?
Copy the prompt from this page or run npx vibefather add coffee-shop-website, replace [BRAND], [CITY], [STREET] and [BEAN_ORIGIN] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Coffee Shop Website demo?
The Corner cafe in Portland case was built by GLM-5.3 in ZCode; the Espresso bar in Austin case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Coffee Shop Website template use?
Coffee Shop Website is a 3-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Coffee Shop Website template for a client or a business?
The Coffee Shop Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Coffee Shop Website template work on mobile?
Yes. Every Coffee Shop Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Restaurants, Hotels & Travel](../../README.md#restaurants-hotels--travel) · [Coffee Shop Website on VibeFather](https://vibefather.ai/templates/coffee-shop-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
