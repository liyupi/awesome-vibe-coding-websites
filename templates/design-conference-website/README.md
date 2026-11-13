# Design Conference Website

> Poster-type conference site with a cursor-reactive variable headline and a filterable two-day schedule.

<a href="https://vibefather.ai/templates/design-conference-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/overprint/03a1262c-d246-44b0-8991-7234b0e8cebb/webp.395c80713e.webp" width="100%" alt="Design Conference Website — Design Conference Website with Schedule built by Claude Opus 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/design-conference-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Overprint is a two-page website for a small, two-day conference: a home page that works like a printed poster and a schedule page people actually use on the day. It suits independent organizers of design meetups, developer summits, festivals and community events who want a site with a strong visual voice that still answers the practical questions: who is speaking, when, where, and how much a ticket costs.

The look comes from Swiss event posters. Warm paper off-white, near-black ink and a single vermilion accent, hard 2px rules, numbered sections and big tabular times. The hero headline is the event name set in a variable font with weight and width axes; each letter grows heavier and wider as the pointer gets close, and on touch screens a slow virtual pointer sweeps across the word instead. A vermilion disc sits behind the headline with a multiply blend, like a second ink printed over the first.

Below the hero, a marquee of event facts leads into an about statement, a speaker grid with abstract geometric portraits generated from each speaker's name (no photos), a venue section with a street map drawn by hand in SVG that draws itself in on scroll, three ticket tiers with a stamped sold-out state, and a single-open FAQ accordion. The schedule page has day tabs and track filter chips that filter the session list in the browser, with an empty state and a live session count.

Everything ships as static files: Vite, React, Tailwind and Motion, self-hosted open-source fonts, no images to license. To adapt it, change the brand, topic, city, dates and audience variables; all copy, speakers, sessions and prices live in one content file, so a different event only means editing data, not components.

| | |
|---|---|
| Category | [Events & Communities](../../README.md#events--communities) |
| Site type | [Event](../../types/event.md) |
| Style | [Swiss](../../styles/swiss.md), [Editorial](../../styles/editorial.md) |
| Effects | Text Animation, Marquee, Cursor Effects |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 2 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Cursor |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/design-conference-website?case=03a1262c-d246-44b0-8991-7234b0e8cebb&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/overprint/03a1262c-d246-44b0-8991-7234b0e8cebb/shot_desktop.ce08edf227.webp" width="100%" alt="Design Conference Website — Web design conference, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Web design conference</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/design-conference-website?case=03a1262c-d246-44b0-8991-7234b0e8cebb&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/design-conference-website?case=bbf63e45-2cf3-4d9d-ac6d-4bdca1bfcee4&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/overprint/bbf63e45-2cf3-4d9d-ac6d-4bdca1bfcee4/shot_desktop.a91e597060.webp" width="100%" alt="Design Conference Website — Food systems summit, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Food systems summit</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/design-conference-website?case=bbf63e45-2cf3-4d9d-ac6d-4bdca1bfcee4&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Event name (used as the giant poster headline) | Kernfolk |
| `[EVENT_TOPIC]` | What the conference is about | independent web design |
| `[CITY]` | Host city (invented or real, no real venue names) | Port Ellery |
| `[EVENT_DATES]` | The two event days | June 11–12 |
| `[AUDIENCE]` | Who attends | designers and front-end developers who still hand-build the web |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add design-conference-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A community developer summit: set BRAND and EVENT_TOPIC to your summit, then replace the speaker grid and session tracks with your talks and workshops.
- An independent food systems gathering: point CITY and EVENT_DATES at your venue, and swap the ticket tiers for day passes and a sold-out state.
- A small design meetup series: set AUDIENCE to local designers, shorten the schedule to one day and trim the FAQ to logistics questions.
- A festival or arts event: change EVENT_TOPIC to your programme, edit the marquee facts and rewrite the venue map labels for your site.

## FAQ

### How do I change the conference name, city and dates in the Design Conference Website template?
The Design Conference Website template keeps five variables: BRAND (the event name used as the giant poster headline), EVENT_TOPIC, CITY, EVENT_DATES and AUDIENCE. Set them in the prompt before you generate, or edit the single content file afterwards. One-word brand names of five to ten letters work best for the per-letter headline effect, and you should adjust the weekday labels on the schedule tabs to match your dates.

### What does the cursor-reactive headline actually do on the Design Conference Website?
The Design Conference Website template sets the event name in a variable font, with each letter as its own element. On desktop, letters grow heavier and wider as the pointer gets close and ease back to a light, narrow rest state when it leaves. On touch screens a slow virtual pointer sweeps across the word instead. Visitors who prefer reduced motion see a static headline with no tracking.

### How does the schedule page work for attendees checking it on their phones?
The Design Conference Website template's schedule page lists every session with day tabs and track filter chips that filter the list entirely in the browser, with no reload and no backend. It shows a live session count and an empty state when a filter matches nothing. Session times switch to the mono typeface on small screens so they stay readable on a phone during the event.

### Do I need speaker photos to use the Design Conference Website template?
No. The Design Conference Website template draws abstract geometric portraits in SVG, generated from each speaker's name, so there are no photos to source or license. Each portrait sits on a shade background and reveals the speaker's bio on hover. To change speakers you edit names, roles and bios in the content file and the portraits follow the names.

### What can I change first to make the Design Conference Website fit my own event?
Start with the content file, which holds all copy, speakers, sessions, ticket tiers, FAQ items, nav links and marquee facts. Rewrite the hero, about statement and ticket tiers for your event, then replace the sessions and day tabs. The layout, colors, type and motion stay as they are, so a different event means editing data rather than components.

### How do I build a design conference website with AI?
Copy the prompt from this page or run npx vibefather add design-conference-website, replace [BRAND], [EVENT_TOPIC], [CITY] and [EVENT_DATES] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Design Conference Website demo?
The Web design conference case was built by Claude Opus 5.5 in Cursor; the Food systems summit case was built by Claude Opus 5.5 in Cursor. Each build used the published prompt with nothing added.

### What tech stack and pages does the Design Conference Website template use?
Design Conference Website is a 2-page site built with Tailwind CSS, Motion and React, with text animation, marquee and cursor effects. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Design Conference Website template for a client or a business?
The Design Conference Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Design Conference Website template work on mobile?
Yes. Every Design Conference Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Events & Communities](../../README.md#events--communities) · [Design Conference Website on VibeFather](https://vibefather.ai/templates/design-conference-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
