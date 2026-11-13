# Editorial Restaurant Website

> Editorial three-page restaurant site with big serif type, parallax strips, a priced menu and a drawn map.

<a href="https://vibefather.ai/templates/editorial-restaurant-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/larder/f00ec6bf-1927-4e03-af39-033d97a6118e/webp.46b8f7204d.webp" width="100%" alt="Editorial Restaurant Website — Editorial Restaurant Website Template with Serif Typography and Parallax Image Strips built by Claude Opus 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/editorial-restaurant-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

Larder is a three-page website template for a small restaurant whose cooking follows the season. It has a home page, a menu page with prices and a visit page with opening hours and a drawn street map. It suits small-plates dining rooms, wine bars, bakeries, cafés and any place whose menu changes often and whose bookings come in by phone or email rather than through a booking widget.

The look is editorial. Oversized Fraunces headlines sit on a warm paper background with ink-dark text and one terracotta accent, paired with small uppercase labels in Instrument Sans. Layouts follow an asymmetric twelve-column grid. Text blocks and illustrations sit offset from each other, with plenty of empty space and thin hairline rules between them. Full-width image strips break up the pages. Each one is built from layered SVG illustrations (a laid table, a field at harvest, market crates) whose layers move at different speeds as you scroll. You don't need any photography. Every image is drawn in code, so the template stays light and is easy to recolor.

The menu page reads like a printed card. Dishes are grouped by course, each with a short description, dotted leaders running to the price and dietary marks, and a sticky course index tracks where you are. The visit page pairs an hours table that highlights today with an invented street map whose walking route draws itself when it scrolls into view. Booking uses tel: and mailto: links, which appear in the header, in a dark reservations band and in the footer.

To adapt it, change the brand, concept, neighbourhood, season, phone number and email. All copy, dishes, prices and hours live in one content file. The motion is limited to fade-and-rise reveals, line-by-line headline entrances and parallax, and all of it turns off when reduced motion is requested.

| | |
|---|---|
| Category | [Restaurants, Hotels & Travel](../../README.md#restaurants-hotels--travel) |
| Site type | [Restaurant](../../types/restaurant.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Parallax, Text Animation, Scroll Animation |
| Stack | Vite 5 + vanilla TypeScript + Tailwind CSS 3.4 + lenis + lucide |
| Pages | 3 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Cursor |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/editorial-restaurant-website?case=f00ec6bf-1927-4e03-af39-033d97a6118e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/larder/f00ec6bf-1927-4e03-af39-033d97a6118e/shot_desktop.d0d5c59e88.webp" width="100%" alt="Editorial Restaurant Website — Small-plates restaurant, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Small-plates restaurant</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/editorial-restaurant-website?case=f00ec6bf-1927-4e03-af39-033d97a6118e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/editorial-restaurant-website?case=003ec732-078e-4b64-9f50-0d117b613dc4&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/larder/003ec732-078e-4b64-9f50-0d117b613dc4/shot_desktop.38c1e6a3f7.webp" width="100%" alt="Editorial Restaurant Website — Wood-fired bakery, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Wood-fired bakery</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/editorial-restaurant-website?case=003ec732-078e-4b64-9f50-0d117b613dc4&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Restaurant name | Wrenfold |
| `[CONCEPT]` | What you serve | Seasonal small plates & natural wine |
| `[NEIGHBOURHOOD]` | Location (street or yard, district) | Cooper's Yard, Eastmere |
| `[SEASON]` | Current season | Autumn |
| `[PHONE]` | Booking phone | +44 20 7946 0321 |
| `[EMAIL]` | Booking email | tables@wrenfold.example |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add editorial-restaurant-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A neighbourhood wine bar: set [CONCEPT] to natural wine and small plates, rename the menu courses to by-the-glass and bottles, and point [PHONE] at the bar's booking line.
- A wood-fired bakery: change [SEASON] to your bake calendar, swap the menu page for breads and pastries with prices, and use the hours table to show sell-out days.
- A supper club run by one cook: set [BRAND] to your name, use [EMAIL] for guest enquiries, and rewrite the visit page map labels to a home address or meeting point.
- A seasonal farm-to-table café: use [NEIGHBOURHOOD] for the market you buy from, rewrite the harvest strip captions, and keep the tel: link for same-day table calls.

## FAQ

### How do I change the menu dishes, prices and opening hours in the Editorial Restaurant Website template?
All dishes, prices, descriptions, dietary marks and hours live in one content file keyed by section, so you edit them there and every page updates. The Editorial Restaurant Website template renders the menu page and the visit page from that file, which means changing a price or closing a day does not touch layout or markup. Keep dish names and descriptions close to the original length so the dotted leaders and course index stay aligned.

### Do I need food photography to use this restaurant template?
No. Every image in the Editorial Restaurant Website template is drawn in code as layered SVG illustrations: a laid table, a field at harvest and market crates. The full-width parallax strips are built from those layers, and plates, cloths and price tags use the cream palette color. You can recolor them from one shared palette, so a new brand accent or season takes a few value changes rather than a photo shoot.

### How do bookings work in the Editorial Restaurant Website template, and can I add a booking widget?
The Editorial Restaurant Website template takes bookings by phone and email only, using tel: and mailto: links in the header, a dark reservations band and the footer. [PHONE] and [EMAIL] drive those links, with the tel: link built from digits and a plus sign. There is no backend or booking widget, so adding one means inserting a third-party embed yourself and keeping the phone and email links as a fallback.

### How do I adapt the Editorial Restaurant Website template for a bakery, café or wine bar instead of a small-plates restaurant?
Start with the six variables: set [BRAND], [CONCEPT], [NEIGHBOURHOOD], [SEASON], [PHONE] and [EMAIL], then rewrite the copy in the content file to match. The Editorial Restaurant Website template already suits bakeries, cafés and wine bars, and a wood-fired bakery demo was built from the same prompt. Change the course groups on the menu page to match how you sell, for example breads, pastries and coffee rather than small plates.

### What should I check on a phone before publishing a site built from the Editorial Restaurant Website template?
Check the oversized Fraunces headlines, the priced menu rows with dotted leaders and dietary marks, the sticky course index and the hours table that highlights today. The Editorial Restaurant Website template uses a twelve-column grid that collapses to a single column with 24px side padding on mobile, so confirm long dish descriptions and map labels do not crowd the rules. Also confirm the parallax strips and reveal animations stop when reduced motion is on.

### How do I build an editorial restaurant website with AI?
Copy the prompt from this page or run npx vibefather add editorial-restaurant-website, replace [BRAND], [CONCEPT], [NEIGHBOURHOOD] and [SEASON] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Editorial Restaurant Website demo?
The Small-plates restaurant case was built by Claude Opus 5.5 in Cursor; the Wood-fired bakery case was built by Claude Opus 5.5 in Cursor. Each build used the published prompt with nothing added.

### What tech stack and pages does the Editorial Restaurant Website template use?
Editorial Restaurant Website is a 3-page site built with Tailwind CSS and Plain HTML, with parallax, text animation and scroll animation. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Editorial Restaurant Website template for a client or a business?
The Editorial Restaurant Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Editorial Restaurant Website template work on mobile?
Yes. Every Editorial Restaurant Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Restaurants, Hotels & Travel](../../README.md#restaurants-hotels--travel) · [Editorial Restaurant Website on VibeFather](https://vibefather.ai/templates/editorial-restaurant-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
