# Boutique Hotel Website <sup>PRO</sup>

> A three-page boutique hotel site with real coastal photos, a rooms catalogue and a working booking widget.

<a href="https://vibefather.ai/templates/boutique-hotel-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/boutique-hotel-website/00d2a3dd-1494-4691-af41-5459b63ac59f/webp.4a630a5f09.webp" width="100%" alt="Boutique Hotel Website — Boutique Hotel Website with Booking Widget built by Claude Opus 5.5, Claude Sonnet 5.5 and Gemini 4 Carbon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/boutique-hotel-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Tidestone is a three-page website template for a small independent hotel: a home page, a rooms page and a local guide. It is built to look like a place that is open and taking guests tomorrow, not a mood board. The default content describes a 24-room hotel on a granite headland, with three room types, a dining room and bar, seasonal offers, guest reviews, an FAQ and a contact block with a hand-drawn map.

It suits freelancers building sites for guesthouses, inns and small hotels, and owners who want a calm, credible site without a booking platform's look. The centrepiece is a client-side booking widget: a two-month date-range calendar with unavailable nights, a guest stepper that respects each room's capacity, a room picker, a nightly price breakdown with weekend supplement and local tax, and a confirmation screen with a reference code. Everything runs in the browser, so you can later wire the confirm step to whatever reservation system the property already uses.

The design is quiet coastal editorial. Warm off-white paper, deep sea-slate ink and a single weathered rust accent; a large Cormorant Garamond display face over Hanken Grotesk text, with IBM Plex Mono for rates and codes. Full-bleed public-domain and CC0 coastline photographs sit beside matching interior shots of the rooms, dining room, breakfast and bar. Small-caps labels, hairline rules and asymmetric image and text splits keep long pages easy to scan. Motion is slow and restrained: fade-and-rise reveals and a gentle scale on the photographic bands, all switched off for reduced motion.

To adapt it, change the hotel name, the place, the property description and the currency. The prompt keeps all copy in one content file, so room names, rates, menu dishes, guide entries and FAQ answers can be rewritten in one pass while the layout stays the same.

| | |
|---|---|
| Category | [Restaurants, Hotels & Travel](../../README.md#restaurants-hotels--travel) |
| Site type | [Hotel](../../types/hotel.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Parallax, Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react + tailwindcss, |
| Pages | 3 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Cursor, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Cursor, [Gemini 4 Carbon](../../models/gemini-4-carbon.md) in Cursor |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/boutique-hotel-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/boutique-hotel-website?case=00d2a3dd-1494-4691-af41-5459b63ac59f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/boutique-hotel-website/00d2a3dd-1494-4691-af41-5459b63ac59f/shot_desktop.be357e04f8.webp" width="100%" alt="Boutique Hotel Website — Coastal boutique hotel, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Coastal boutique hotel</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/boutique-hotel-website?case=00d2a3dd-1494-4691-af41-5459b63ac59f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/boutique-hotel-website?case=b5845f86-1106-4039-b50c-5a82815cd67c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/tidestone/b5845f86-1106-4039-b50c-5a82815cd67c/shot_desktop.3328b4e17b.webp" width="100%" alt="Boutique Hotel Website — Island sauna retreat, built by Claude Sonnet 5.5 in Cursor"></a><br>
<b>Island sauna retreat</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/boutique-hotel-website?case=b5845f86-1106-4039-b50c-5a82815cd67c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/boutique-hotel-website?case=96ff3519-3cba-442f-8288-f2c6b6d50631&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/boutique-hotel-website/96ff3519-3cba-442f-8288-f2c6b6d50631/shot_desktop.ceffab4f15.webp" width="100%" alt="Boutique Hotel Website — Coastal boutique hotel, built by Gemini 4 Carbon in Cursor"></a><br>
<b>Coastal boutique hotel</b><br>
<sub>Built by <b>Gemini 4 Carbon</b> in Cursor · <a href="https://vibefather.ai/templates/boutique-hotel-website?case=96ff3519-3cba-442f-8288-f2c6b6d50631&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Hotel name | Skerry House |
| `[PLACE]` | Location | Porthkell Head |
| `[STAY]` | Property | 24-room hotel on a granite headland |
| `[CURRENCY]` | Currency symbol | € |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/boutique-hotel-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A coastal guesthouse owner: set BRAND to the house name, STAY to the room count, and swap the dining menu for your breakfast and honesty bar.
- A walking-tour operator: keep PLACE as the trailhead, rewrite the guide entries as route notes and pin the SVG map to your stops.
- A small family inn: lower the room capacities in the guest stepper, replace the offers with seasonal packages and rewrite the reviews.
- A freelance web designer pitching hospitality clients: change CURRENCY and rates, keep the booking widget as the demo centrepiece and wire confirm to the client's system.

## FAQ

### How does the booking widget on the Boutique Hotel Website template work without a backend?
The Boutique Hotel Website template runs its booking widget entirely in the browser. A two-month date-range calendar shows unavailable nights, a guest stepper respects each room's capacity, and a room picker feeds a nightly price breakdown with weekend supplement and local tax. The confirmation screen issues a reference code. Nothing is sent to a server, so you can later wire the confirm step to whatever reservation system the property already uses.

### How do I change the hotel name, location and currency in the Boutique Hotel Website template?
The Boutique Hotel Website template keeps all copy in one content file. Change BRAND for the hotel name, PLACE for the headland or village, STAY for the property description and room count, and CURRENCY for the symbol used on every rate and total. Room names, rates, menu dishes, guide entries and FAQ answers can then be rewritten in one pass while the layout stays the same.

### Can I use the Boutique Hotel Website template for a client's guesthouse or inn?
The Boutique Hotel Website template is a Pro template, so commercial and client work needs Pro. Pro members see the brief, stack and variables publicly and get the full prompt plus the source code of the demos. A freelancer can build a guesthouse or inn site from it, then hand the property owner a static site they can host anywhere.

### What pages and sections come with the Boutique Hotel Website template?
The Boutique Hotel Website template has three pages: a home page, a rooms page and a local guide. The home page carries the rooms catalogue with sizes, capacities, nightly rates and amenities, the restaurant and bar with opening hours and menu highlights, seasonal offers, guest reviews, an FAQ, contact details and a hand-drawn SVG map. The guide page adds an interactive SVG map of local places.

### How do I adapt the Boutique Hotel Website template to a sauna retreat or another kind of stay?
Set STAY to describe the property and its room count, since the room catalogue must add up to that number. Set BRAND, PLACE and CURRENCY, then rewrite the room names, rates, dining copy, offers, reviews and guide entries in the content file. The live demos include an island sauna retreat built from the same prompt, which shows how far the structure bends without touching the layout.

### How do I build a boutique hotel website with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add boutique-hotel-website, replace [BRAND], [PLACE], [STAY] and [CURRENCY] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Boutique Hotel Website demo?
The Coastal boutique hotel case was built by Claude Opus 5.5 in Cursor; the Island sauna retreat case was built by Claude Sonnet 5.5 in Cursor; the Coastal boutique hotel case was built by Gemini 4 Carbon in Cursor. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Boutique Hotel Website template use?
Boutique Hotel Website is a 3-page site built with React, Motion and Tailwind CSS, with parallax, scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Boutique Hotel Website template free to use?
Boutique Hotel Website is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Boutique Hotel Website template work on mobile?
Yes. Every Boutique Hotel Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Restaurants, Hotels & Travel](../../README.md#restaurants-hotels--travel) · [Boutique Hotel Website on VibeFather](https://vibefather.ai/templates/boutique-hotel-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
