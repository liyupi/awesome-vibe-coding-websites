# Travel Itinerary & Packing App <sup>PRO</sup>

> Sunlit 5-day coastal trip companion PWA with timeline stops, FX budget converter, and packing list.

<a href="https://vibefather.ai/templates/travel-itinerary-packing-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/travel-itinerary-packing-app/58a7f4ca-414d-46d1-9e2b-89983bce7605/webp.130c7e55f1.webp" width="100%" alt="Travel Itinerary &amp; Packing App — Coastal Trip Itinerary &amp; Packing List PWA built by GLM-5.4"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/travel-itinerary-packing-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Travel Itinerary & Packing App is a sunlit, editorial trip companion PWA pre-seeded with a fictional 5-day coastal getaway itinerary along Cala Sol. Built with true three-breakpoint responsiveness and zero fake phone frames, mobile screens under 768px navigate cleanly through a fixed bottom four-tab bar (Itinerary, Budget, Packing, Places), while desktop screens expand into a full-height sidebar and a split schedule timeline paired with a stylized coastal route map, expandable booking details, and live packing readiness summary. Six cohesive golden-hour coastal photographs bring the destination to life across Day 1 through Day 5 stops covering flights, boutique cliffside check-in, seaside dining, coastal hikes, and sunset sails. Travelers can add new stops, edit or reorder existing schedule blocks, inspect confirmation details, track trip spending across a live multi-currency mock converter (USD, EUR, JPY, GBP), check off categorized packing items with a live progress bar, and curate saved places with tags and notes—all persisted in localStorage. Anchored in sunlit sand (#FDFBF7) and ocean ink (#0F2537) with Mediterranean teal (#0D9488) and sunset coral (#F97316), it self-hosts Fraunces, Plus Jakarta Sans, and JetBrains Mono. Customize the app brand, destination, traveler names, and trip budget inside src/content.ts.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Mobile App](../../types/mobile-app.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Page Transitions, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react |
| Pages | 1 |
| Built with | <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="13" height="13" alt=""></picture> [GLM-5.4](../../models/glm-5-4.md) in ZCode |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/travel-itinerary-packing-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/travel-itinerary-packing-app?case=58a7f4ca-414d-46d1-9e2b-89983bce7605&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/travel-itinerary-packing-app/58a7f4ca-414d-46d1-9e2b-89983bce7605/shot_desktop.8e15764629.webp" width="100%" alt="Travel Itinerary &amp; Packing App — Island hopping summer ferry trip, built by GLM-5.4 in ZCode"></a><br>
<b>Island hopping summer ferry trip</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="12" height="12" alt=""></picture>&nbsp;GLM-5.4 in ZCode · <a href="https://vibefather.ai/templates/travel-itinerary-packing-app?case=58a7f4ca-414d-46d1-9e2b-89983bce7605&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Travel app name | CovePass |
| `[DESTINATION]` | Coastal destination | Cala Sol Coast |
| `[TRAVELERS]` | Travelers label | Elena & Marco |
| `[TRIP_BUDGET]` | Trip budget cap | $2,800 |
| `[TRIP_DURATION]` | Trip duration tag | 5 Days · 4 Nights |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/travel-itinerary-packing-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A boutique hotel concierge: set BRAND to the property, DESTINATION to the local area, and rewrite the Day 1 to Day 5 stops as suggested guest outings with booking references guests can expand.
- A honeymoon planner: set TRAVELERS to the couple's names, TRIP_BUDGET to their cap, and replace the sunset sail with their booked experiences so they check off packing and spending in one place.
- A solo travel creator: set TRAVELERS to your handle, DESTINATION to your route, and turn the saved places with tags and notes into a shareable shortlist of coastal stops and cafes.
- A group trip organizer: set TRAVELERS to the group name, keep the multi-currency converter for shared spending, and rework the packing categories into shared gear and personal items.

## FAQ

### How do I change the trip name, travelers and budget in the Travel Itinerary & Packing App?
The Travel Itinerary & Packing App template keeps its copy and seed data in one content file, and the brief exposes BRAND, TRAVELERS, DESTINATION, TRIP_BUDGET and TRIP_DURATION as variables. Set BRAND to your app name, TRAVELERS to the people on the trip, DESTINATION to the place, and TRIP_BUDGET to the cap in USD. Then rewrite every headline and label that mentions the old values so the trip header, budget screen and packing summary stay consistent.

### Can travelers add their own stops and reorder the schedule in this trip app?
Yes. The Travel Itinerary & Packing App template lets travelers add new stops, edit existing schedule blocks and reorder them, and it opens expandable booking details for confirmation references. Every change is saved in localStorage, so the itinerary survives a page reload without a backend. The demo ships with a fictional 5-day coastal itinerary covering flights, a cliffside check-in, seaside dining, coastal hikes and a sunset sail as the starting schedule.

### How does the packing list and progress bar work in the Travel Itinerary & Packing App?
The Travel Itinerary & Packing App template ships categorized packing items that travelers check off, and a live progress bar and readiness summary update as items are ticked. The packing tab is one of the four bottom tabs on mobile and sits in the desktop sidebar. To adapt it, replace the seeded categories and items in the content file with what your own trip or audience actually packs, and the readiness summary follows automatically.

### Is there a travel itinerary app template I can use for client work?
The Travel Itinerary & Packing App template is a Pro template on VibeFather. Pro unlocks the full prompt, the source code of the demos and commercial and client use, while free templates' prompts and every DESIGN.md are for personal, non-commercial use only. If you plan to hand the app to a paying travel client or run it under their brand, you need Pro. The brief, stack and variables are visible publicly before you decide.

### How do I turn the Cala Sol demo into an app for a real destination?
Set DESTINATION to the real place, swap the six seeded coastal photographs in the images folder for photos of that destination, and rewrite the Day 1 through Day 5 stops so flights, check-in, dining, hikes and sails match the trip. Then set BRAND, TRAVELERS, TRIP_DURATION and TRIP_BUDGET in the content file. The route map, timeline, budget converter and packing list keep working with the new content because the layout is driven by the seed data.

### How do I build a travel itinerary & packing app with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add travel-itinerary-packing-app, replace [BRAND], [DESTINATION], [TRAVELERS] and [TRIP_BUDGET] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Travel Itinerary & Packing App demo?
The Island hopping summer ferry trip case was built by GLM-5.4 in ZCode. Each build used the published prompt with nothing added.

### What tech stack and pages does the Travel Itinerary & Packing App template use?
Travel Itinerary & Packing App is a single-page site built with React and Tailwind CSS, with page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Travel Itinerary & Packing App template free to use?
Travel Itinerary & Packing App is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Travel Itinerary & Packing App template work on mobile?
Yes. Every Travel Itinerary & Packing App build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Travel Itinerary & Packing App on VibeFather](https://vibefather.ai/templates/travel-itinerary-packing-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
