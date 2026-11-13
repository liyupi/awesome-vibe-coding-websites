# Event Venue Website

> Single-page venue site with capacity tables, an interactive seating floor plan, gallery, packages and an availability enquiry.

<a href="https://vibefather.ai/templates/event-venue-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/event-venue-website/52beb175-42c7-4ba2-b6de-7cf4ab5a779a/webp.384239f209.webp" width="100%" alt="Event Venue Website — Event Venue with Floor Plan built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/event-venue-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page website for an event venue: the main hall set for dinner as the hero with the venue promise and an enquiry CTA; three spaces with capacity tables per configuration (banquet, theater, cocktail) and specs; an interactive virtual floor plan whose seating-mode switcher (banquet / classroom / cocktail) redraws table layouts live with capacity counts updating; a gallery of six photographs of the spaces set and empty; three packages with inclusions and hourly minimums; an availability enquiry (date-free window chips, guests stepper, event type) confirming client-side; a venue-manager portrait (AI-generated fictional person); and a logistics strip covering parking, accessibility, load-in and the noise curfew. The default content follows an invented converted-warehouse venue, but the structure suits any event space. The look is gallery modern: warm gallery-white and charcoal with a champagne accent, elegant serif headlines over a clean sans, drawn floor plans and generous spacing. Guest faces never appear — the rooms are photographed empty or artfully set. To adapt it, swap the variables and rewrite the copy in one content file.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Editorial](../../styles/editorial.md), [Luxury](../../styles/luxury.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/event-venue-website?case=52beb175-42c7-4ba2-b6de-7cf4ab5a779a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/event-venue-website/52beb175-42c7-4ba2-b6de-7cf4ab5a779a/shot_desktop.b1c851bb0e.webp" width="100%" alt="Event Venue Website — Converted-warehouse venue, built by GLM-5.3 in ZCode"></a><br>
<b>Converted-warehouse venue</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/event-venue-website?case=52beb175-42c7-4ba2-b6de-7cf4ab5a779a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/event-venue-website?case=55deb35d-c175-4ce3-9130-c3c37a4b1d17&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/event-venue-website/55deb35d-c175-4ce3-9130-c3c37a4b1d17/shot_desktop.f7e843ca61.webp" width="100%" alt="Event Venue Website — Garden estate venue, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Garden estate venue</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/event-venue-website?case=55deb35d-c175-4ce3-9130-c3c37a4b1d17&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[VENUE]` | Venue name | The Foundry Hall |
| `[CITY]` | City | Providence, Rhode Island |
| `[STYLE_NOTE]` | Style note | warehouse light and long dinners |
| `[CURFEW]` | Noise curfew | midnight |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add event-venue-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A converted warehouse: set [VENUE] and [CITY] to your building, keep the Main Hall, Gallery and Parlor capacities, and rewrite [STYLE_NOTE] for your light and load-in story.
- A garden estate: swap the three spaces for lawn, orangery and terrace, update the floor plan modes and capacities, and replace the gallery with photographs of the grounds set for ceremonies.
- A corporate meeting venue: change packages to day-delegate rates, keep the classroom and cocktail floor plan modes, and rewrite the logistics strip around AV, parking and accessibility.
- A gallery or museum hire: rename the spaces after your rooms, set [CURFEW] to your building's cutoff, and rewrite the enquiry copy for exhibitions, receptions and private views.

## FAQ

### How does the interactive seating floor plan work on the Event Venue Website template?
The Event Venue Website template draws each room as a scale floor plan in the browser and lets visitors switch between banquet, classroom and cocktail modes. Tables and rows glide into new positions while the capacity readout counts up to the new figure, and a legend explains rounds of ten, classroom rows and cocktail clusters. No server is involved, so the plan redraws instantly.

### What can I change on the Event Venue Website template without touching the code?
The Event Venue Website template keeps every string, capacity figure, package, hourly minimum, spec and image path in one content file. Set the venue name, city, style note and noise curfew variables, then rewrite the headlines, space descriptions, package inclusions and logistics copy in that same file. Layout, colors, type and motion stay as designed.

### Does the Event Venue Website template include a booking or enquiry form that actually sends messages?
The Event Venue Website template includes an availability enquiry with date-free window chips, a guests stepper and an event type selector. It confirms on screen and saves the draft in the browser, but nothing is submitted anywhere because the site has no backend. To receive real enquiries, connect the form to your own form service or email endpoint.

### What sections does the Event Venue Website template include for a venue?
The Event Venue Website template is a single page with a hero of the main hall set for dinner, three spaces with capacity tables per configuration, the interactive floor plan, a six-photo gallery of set and empty rooms, three packages with inclusions and hourly minimums, a venue-manager note, the availability enquiry and a logistics strip covering parking, accessibility, load-in and the curfew.

### Which kinds of event spaces suit the Event Venue Website template?
The Event Venue Website template suits any room-based event space: converted warehouses, garden estates, galleries, parlors, barns and hotel function rooms. The default content follows an invented warehouse venue, and the two live demos show a converted-warehouse version and a garden-estate version. If your space has rooms with different capacities and configurations, the structure fits as is.

### How do I build an event venue website with AI?
Copy the prompt from this page or run npx vibefather add event-venue-website, replace [VENUE], [CITY], [STYLE_NOTE] and [CURFEW] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Event Venue Website demo?
The Converted-warehouse venue case was built by GLM-5.3 in ZCode; the Garden estate venue case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Event Venue Website template use?
Event Venue Website is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Event Venue Website template for a client or a business?
The Event Venue Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Event Venue Website template work on mobile?
Yes. Every Event Venue Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Event Venue Website on VibeFather](https://vibefather.ai/templates/event-venue-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
