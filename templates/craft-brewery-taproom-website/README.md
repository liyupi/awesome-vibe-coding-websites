# Craft Brewery Taproom Website

> A screen-print label-art brewery site with a filterable tap list and a flight builder that pours in code.

<a href="https://vibefather.ai/templates/craft-brewery-taproom-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/craft-brewery-taproom-website/5185e329-f3da-4dd2-ad6f-242f896e66ae/webp.0efe73f628.webp" width="100%" alt="Craft Brewery Taproom Website — Brewery Site with Flight Builder built by GLM-5.3"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/craft-brewery-taproom-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Craft Brewery Taproom Website is a single-page site for a small brewery and taproom, styled like the brewery's own can labels: hop green, amber ale and dark stout brown on cream paper, with screen-print textures and label-style hop cones, trucks and paddles drawn in code. The tap list carries twelve invented beers with style, ABV, IBU, tasting notes and a color swatch, filterable by style family and strength. The signature tool is the flight builder: pick any four beers and a drawn flight paddle fills with color-coded tasters in your chosen order, with a summary card of names, styles and pour total. Around it: a food-truck weekly rhythm, weekday-anchored events, a tours booking with party size and slots, a merch grid with code-drawn shirt and glass art, and a friendly age gate that remembers returning visitors. It suits breweries, cideries and taprooms of any size. Five variables swap brewery name, town, head brewer, phone and years; every beer, truck and event is invented sample data.

| | |
|---|---|
| Category | [Restaurants, Hotels & Travel](../../README.md#restaurants-hotels--travel) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Retro](../../styles/retro.md), [Hand-drawn](../../styles/hand-drawn.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/craft-brewery-taproom-website?case=5185e329-f3da-4dd2-ad6f-242f896e66ae&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/craft-brewery-taproom-website/5185e329-f3da-4dd2-ad6f-242f896e66ae/shot_desktop.cb7bf16b09.webp" width="100%" alt="Craft Brewery Taproom Website — Brewery taproom, Millrace, built by GLM-5.3 in ZCode"></a><br>
<b>Brewery taproom, Millrace</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/craft-brewery-taproom-website?case=5185e329-f3da-4dd2-ad6f-242f896e66ae&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brewery name | Fiddleneck Brewing Co. |
| `[CITY]` | Town | Millrace |
| `[FOUNDER]` | Head brewer | Sana Iqbal |
| `[PHONE]` | Phone | (555) 812-6640 |
| `[EXPERIENCE]` | Years brewing | 6 years |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add craft-brewery-taproom-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A small cidery: set [BRAND] and [CITY] to your press house, rewrite the twelve taps as ciders with sweetness and apple variety in the tasting notes, and keep the flight builder for four-cider samplers.
- A neighborhood taproom with no kitchen: keep the food-truck weekly rhythm as the main draw, swap the tours booking for a table hold, and trim merch to glassware and stickers.
- A homebrew club or nano brewery: set [FOUNDER] to the club lead, use the events section for meeting nights and bottle shares, and replace the tours with a brew-day signup.

## FAQ

### How does the flight builder on the Craft Brewery Taproom Website work?
Each beer in the tap list has an Add to flight toggle, and the Craft Brewery Taproom Website lets you pick up to four. A code-drawn walnut paddle fills left to right in your selection order, each taster glass filling with that beer's swatch color, and a summary card lists names, styles and the pour total. A fifth pick shakes the paddle and shows a short nudge. The selection is saved in the browser, and there is a house flight preset if you want four chosen for you.

### How do I change the twelve beers, food trucks and events to my own brewery's?
Every beer, food truck and event on the Craft Brewery Taproom Website is invented sample data, and all of it lives in one content file the AI agent can rewrite. Give your agent your real tap list with style, ABV, IBU, tasting note and a swatch color per beer, plus your truck schedule and event names, and ask it to replace the samples in the same structure. The five variables swap brand name, town, head brewer, phone and years brewing.

### Can I use the Craft Brewery Taproom Website template for a cidery or a wine taproom instead of a brewery?
Yes. The Craft Brewery Taproom Website is built for breweries, cideries and taprooms, and the tap list, flight builder and food-truck rhythm all carry over. Ask your AI agent to re-point the twelve beers to ciders or wines, keeping the same fields, and adjust the style family filters so they match your categories. The label-art palette and code-drawn hop cones can be redrawn as apples or grapes if you want the art to match.

### What does the age gate on the Craft Brewery Taproom Website do for returning visitors?
The age gate on the Craft Brewery Taproom Website shows once, as a full-screen cream overlay with a drawn hop cone and two buttons. Choosing the come-in option stores a flag in the browser and fades the overlay out, and returning visitors skip the gate entirely. Choosing the not-yet option swaps to a friendly panel pointing at the food trucks and root-beer floats. The gate never blocks scrolling once it is cleared.

### What should I change first after adding the Craft Brewery Taproom Website template?
Set the five variables first: brewery name, town, head brewer, phone and years brewing. The Craft Brewery Taproom Website rewrites dependent copy from them and derives the phone link and saved browser data from the brand, so no default-brand remnants remain. Then replace the twelve sample beers with your tap list, swap the invented food trucks and events for your real weekly rhythm, and check the tours booking party sizes and slots match what you actually offer.

### How do I build a craft brewery taproom website with AI?
Copy the prompt from this page or run npx vibefather add craft-brewery-taproom-website, replace [BRAND], [CITY], [FOUNDER] and [PHONE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Craft Brewery Taproom Website demo?
The Brewery taproom, Millrace case was built by GLM-5.3 in ZCode. Each build used the published prompt with nothing added.

### What tech stack and pages does the Craft Brewery Taproom Website template use?
Craft Brewery Taproom Website is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Craft Brewery Taproom Website template for a client or a business?
The Craft Brewery Taproom Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Craft Brewery Taproom Website template work on mobile?
Yes. Every Craft Brewery Taproom Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Restaurants, Hotels & Travel](../../README.md#restaurants-hotels--travel) · [Craft Brewery Taproom Website on VibeFather](https://vibefather.ai/templates/craft-brewery-taproom-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
