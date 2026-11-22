# Coastal Real Estate Agency Website <sup>PRO</sup>

> A coastal estate agency site with filterable listings, SVG floor plans and a live mortgage calculator.

<a href="https://vibefather.ai/templates/coastal-real-estate-agency-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/coastal-real-estate-agency-website/e88bec2a-1fe1-4cf6-81c0-b22972a1d304/webp.bdb46fb223.webp" width="100%" alt="Coastal Real Estate Agency Website — Coastal Real Estate Website with Listings built by Claude Opus 5.5 and Claude Sonnet 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/coastal-real-estate-agency-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This is a three-page website for a small estate agency that sells homes in one seaside town. The home page opens on a full-width harbour photograph with a compact search bar for type, bedrooms and maximum price. Below it come a row of new listings, a short guide to the town's four neighbourhoods, market figures that count up as they scroll into view, a strip of recently sold homes, agent cards and a valuation form. The listings page has a grid of ten homes photographed from real CC0 sources, with filter chips, selects, a sort menu and a show-sold toggle. Every filter writes to the URL, so a filtered view can be bookmarked or shared. Each home has its own detail page, chosen with a query parameter: a photo grid that opens a keyboard and swipe lightbox, a key-facts table, a floor plan and a neighbourhood map both drawn in SVG, a mortgage calculator that updates as you type, and a viewing-request form that validates in the browser and shows a confirmation without sending anything. The look is calm and editorial. The background is warm sand and the text is a deep sea-ink, with one weathered teal accent and a muted coral for status badges. Headings are set in Fraunces, body text in Instrument Sans, and small labels and figures in IBM Plex Mono. Agents get typographic monograms instead of portraits, so the site needs no photos of people. It suits independent agents, small brokerages, property developers selling a single scheme, and holiday-home specialists. To adapt it, change the brand, town, region and currency, then edit the single content file that holds every listing, price and line of copy. The photos, floor plans and map coordinates live in that file too.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Real Estate](../../types/real-estate.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react |
| Pages | 3 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Cursor, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Cursor |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/coastal-real-estate-agency-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/coastal-real-estate-agency-website?case=e88bec2a-1fe1-4cf6-81c0-b22972a1d304&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/coastal-real-estate-agency-website/e88bec2a-1fe1-4cf6-81c0-b22972a1d304/shot_desktop.4ea2b3d139.webp" width="100%" alt="Coastal Real Estate Agency Website — Coastal estate agency, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Coastal estate agency</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/coastal-real-estate-agency-website?case=e88bec2a-1fe1-4cf6-81c0-b22972a1d304&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/coastal-real-estate-agency-website?case=e90efbec-5653-479d-9e99-8708929ea181&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/coastal-real-estate-agency-website/e90efbec-5653-479d-9e99-8708929ea181/shot_desktop.ee03589e7f.webp" width="100%" alt="Coastal Real Estate Agency Website — Lakeside village agency, built by Claude Sonnet 5.5 in Cursor"></a><br>
<b>Lakeside village agency</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/coastal-real-estate-agency-website?case=e90efbec-5653-479d-9e99-8708929ea181&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Agency name | Hartwell & Rye |
| `[TOWN]` | Town | Port Ellery |
| `[REGION]` | Coast or region | the Calder Coast |
| `[CURRENCY]` | Currency symbol | $ |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/coastal-real-estate-agency-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An independent coastal brokerage: set BRAND and TOWN, replace the ten listings with your own stock and point the valuation form at your email inbox.
- A holiday-home specialist: keep the town guide and neighbourhood map, and rewrite the listing descriptions around second-home buyers and short stays.
- A property developer selling one scheme: swap the ten listings for the units in your development and use the SVG floor plans for each unit type.
- A lakeside or harbour-town agency: change TOWN and REGION, redraw the SVG neighbourhood map around your waterfront and update the market stats.

## FAQ

### How do the listing filters and the shareable filtered URLs work on the Coastal Real Estate Agency Website?
The Coastal Real Estate Agency Website listings page has filter chips, selects, a sort menu and a show-sold toggle. Every filter writes to the URL, so a filtered view can be bookmarked or sent to a buyer and will open the same way. The home page also has a compact search bar for type, bedrooms and maximum price. All of this runs in the browser with no backend.

### How do I change the town, agency name, region and currency in the Coastal Real Estate Agency Website template?
The Coastal Real Estate Agency Website template uses four variables: BRAND, TOWN, REGION and CURRENCY. Set them once, then rewrite the copy, listing names, streets and neighbourhoods in the single content file so they fit your town. Areas stay in sq ft when the currency is $ and switch to m² for other currencies. Photos, floor plans and map coordinates live in that same file.

### What does the mortgage calculator and viewing-request form actually do on the Coastal Real Estate Agency Website?
The Coastal Real Estate Agency Website mortgage calculator updates as you type, so buyers can see how a price translates into monthly figures. The viewing-request form validates in the browser and shows a confirmation without sending anything, because the site has no backend. To receive real requests you need to connect the form to your own email service or form handler.

### Can I use the Coastal Real Estate Agency Website template for a client's estate agency?
Yes, with Pro. The Coastal Real Estate Agency Website template is a Pro template: the brief, stack and variables are public, the full prompt is for Pro members, and the source code of the demos comes with Pro. Commercial and client use needs Pro. Free prompts and every DESIGN.md are licensed for personal, non-commercial use only.

### What should I change first in the Coastal Real Estate Agency Website template to make it my own?
Start with the four variables: set BRAND to your agency name, TOWN to the seaside town you cover, REGION to your coast and CURRENCY to your symbol. Then edit the content file that holds every listing, price, agent and line of copy, including the photos, SVG floor plans and map coordinates. The look and layout stay as designed.

### How do I build a coastal real estate agency website with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add coastal-real-estate-agency-website, replace [BRAND], [TOWN], [REGION] and [CURRENCY] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Coastal Real Estate Agency Website demo?
The Coastal estate agency case was built by Claude Opus 5.5 in Cursor; the Lakeside village agency case was built by Claude Sonnet 5.5 in Cursor. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Coastal Real Estate Agency Website template use?
Coastal Real Estate Agency Website is a 3-page site built with React and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Coastal Real Estate Agency Website template free to use?
Coastal Real Estate Agency Website is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Coastal Real Estate Agency Website template work on mobile?
Yes. Every Coastal Real Estate Agency Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Coastal Real Estate Agency Website on VibeFather](https://vibefather.ai/templates/coastal-real-estate-agency-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
