# Family Winery and Vineyard Website

> Three-page winery site with vineyard photos, a client-side wine shop, tasting bookings and an SVG estate map.

<a href="https://vibefather.ai/templates/family-winery-and-vineyard-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/family-winery-and-vineyard-website/26f122e7-6259-4198-ad90-8503bf18dbd9/webp.368354c519.webp" width="100%" alt="Family Winery and Vineyard Website — Winery Website with Wine Shop and Tastings built by Claude Opus 5.5 and Claude Sonnet 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/family-winery-and-vineyard-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A three-page website for a small family winery that sells its wines online and pours them in its own tasting room. The home page opens on a full-bleed photograph of the vineyard in autumn light, then walks through the estate, three featured wines, a wide barrel-cellar band, the family's story as a vertical timeline that fills in as you scroll, a twelve-month harvest calendar that opens on the current month, and three wine club tiers on a dark cellar background. The wines page lists eight wines with vintage, varietal, alcohol, price and tasting notes that open inside each card, filters by red, white, rosé and sparkling, sorts by price or vintage, and adds bottles, mixed cases or club memberships to a slide-over cart that remembers its contents in the browser and ends in a short checkout and an order confirmation. The visit page books tastings and vineyard walks with an experience picker, a month calendar with closed days and full slots, time chips and a party-size stepper, and shows opening hours, directions and a hand-drawn SVG map of the estate's vine blocks, buildings and walking route. A first-visit age check sits on every page. It suits wineries, cideries with tasting rooms and small farms that sell by mail and host visitors. The look is warm parchment, cellar brown and a single oxblood accent, a classic serif for headings and a clean grotesk for text, and real photographs of vines, grapes, cellars and the hillside. Motion stays slow: images drift, sections fade up, the timeline line grows, the cart slides in, and everything holds still under reduced-motion settings. To adapt it, change the winery name, the family, the region, the grape varieties and the founding year; the prompt asks the builder to rewrite every wine, date, tier and answer to match and to keep all copy in one content file.

| | |
|---|---|
| Category | [E-commerce & Product Pages](../../README.md#e-commerce--product-pages) |
| Site type | [E-commerce](../../types/ecommerce.md) |
| Style | [Editorial](../../styles/editorial.md), [Luxury](../../styles/luxury.md) |
| Effects | Parallax, Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 3 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Cursor, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Cursor |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/family-winery-and-vineyard-website?case=26f122e7-6259-4198-ad90-8503bf18dbd9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/family-winery-and-vineyard-website/26f122e7-6259-4198-ad90-8503bf18dbd9/shot_desktop.06d1b651b6.webp" width="100%" alt="Family Winery and Vineyard Website — Willamette Pinot Noir estate, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Willamette Pinot Noir estate</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/family-winery-and-vineyard-website?case=26f122e7-6259-4198-ad90-8503bf18dbd9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/family-winery-and-vineyard-website?case=7ed042d7-bfef-403f-b9d5-11389086041a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/family-winery-and-vineyard-website/7ed042d7-bfef-403f-b9d5-11389086041a/shot_desktop.45ea862242.webp" width="100%" alt="Family Winery and Vineyard Website — Sierra foothills Zinfandel estate, built by Claude Sonnet 5.5 in Cursor"></a><br>
<b>Sierra foothills Zinfandel estate</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/family-winery-and-vineyard-website?case=7ed042d7-bfef-403f-b9d5-11389086041a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Winery name | Wexbury Hollow |
| `[FAMILY]` | Family name | Marlowe |
| `[REGION]` | Wine region | Oregon's Willamette Valley |
| `[VARIETIES]` | Grape varieties | Pinot Noir, Chardonnay and Pinot Gris |
| `[FOUNDED]` | Year the family bought the land | 1952 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add family-winery-and-vineyard-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A family-run cidery: set VARIETIES to your apple cultivars, swap the eight wine cards for ciders, and update the estate map SVG to show your orchard blocks.
- A boutique olive oil producer: change REGION to your growing area, replace the wine shop with oil flights, and rewrite the harvest calendar around your pressing season.
- A craft meadery with a taproom: set BRAND to your meadery name, adjust VARIETIES to honey sources, and update the experience picker for mead tastings and apiary walks.
- A small tea estate offering tours: replace VARIETIES with tea cultivars, swap the barrel-cellar band for your drying room, and list loose-leaf teas instead of bottles.

## FAQ

### How do I change the wines, family story and tasting details in the Family Winery and Vineyard Website template?
The Family Winery and Vineyard Website template keeps every wine description, timeline entry, club tier, harvest month and booking answer in a single content file. When you set the variables for your winery name, family, region, grape varieties and founding year, the prompt instructs the AI agent to rewrite all copy to match while keeping the same length, tone and structure. You update that one file to swap in your own bottles, prices, vintages and story without editing any layout code.

### Does the wine shop on this winery template process real payments or connect to a backend?
The wine shop on the Family Winery and Vineyard Website template runs entirely in the browser with no server code or external APIs. Visitors can filter eight wines by red, white, rosé and sparkling, sort by price or vintage, add bottles, mixed cases or club memberships to a slide-over cart, and complete a short checkout flow that ends with an order confirmation screen. Cart contents persist in local storage, but nothing is sent anywhere, so you would need to add a payment service before selling online.

### How does the age check work on the Family Winery and Vineyard Website?
A first-visit age gate appears on every page of the Family Winery and Vineyard Website template before visitors see the home, wines or visit content. The visitor confirms their age once, and that choice is saved in local storage under a key prefixed with your brand name. The age gate uses the cellar background color and renders on all three pages, ensuring compliance messaging shows up whether someone lands on the tasting booking page or the wine shop directly.

### What motion effects are used on the vineyard photos and timeline sections?
The Family Winery and Vineyard Website template uses slow, deliberate motion built with the Motion library. The full-bleed vineyard photograph drifts gently, sections fade up as they enter the viewport, and the vertical line on the family story timeline grows as you scroll down the page. The slide-over cart animates in from the side. Every animation respects reduced-motion settings, holding still for visitors who prefer less movement in their operating system or browser preferences.

### Can I use this winery template for a cidery or a small farm that hosts tastings?
The Family Winery and Vineyard Website template suits cideries with tasting rooms and small farms that sell by mail and host visitors. To adapt it, change the grape varieties variable to your apple cultivars or farm products, rewrite the eight product cards with your ciders or preserves, and update the tasting experiences on the visit page to match your tours. The booking widget, estate map, product filters and slide-over cart work for any business that pours drinks on site and ships bottles.

### How do I build a family winery and vineyard website with AI?
Copy the prompt from this page or run npx vibefather add family-winery-and-vineyard-website, replace [BRAND], [FAMILY], [REGION] and [VARIETIES] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Family Winery and Vineyard Website demo?
The Willamette Pinot Noir estate case was built by Claude Opus 5.5 in Cursor; the Sierra foothills Zinfandel estate case was built by Claude Sonnet 5.5 in Cursor. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Family Winery and Vineyard Website template use?
Family Winery and Vineyard Website is a 3-page site built with Tailwind CSS, Motion and React, with parallax, scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Family Winery and Vineyard Website template for a client or a business?
The Family Winery and Vineyard Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Family Winery and Vineyard Website template work on mobile?
Yes. Every Family Winery and Vineyard Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More E-commerce & Product Pages](../../README.md#e-commerce--product-pages) · [Family Winery and Vineyard Website on VibeFather](https://vibefather.ai/templates/family-winery-and-vineyard-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
