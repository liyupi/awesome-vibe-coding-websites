# Movie Theater Showtimes Website

> A velvet-red cinema site with a bulb-lit marquee, code-drawn posters, showtimes by day and a seat picker.

<a href="https://vibefather.ai/templates/movie-theater-showtimes-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/movie-theater-showtimes-website/45aa5cd0-bd23-48fe-b107-770674d3be57/webp.87de76341e.webp" width="100%" alt="Movie Theater Showtimes Website — Velvet Cinema with Seat Picker built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/movie-theater-showtimes-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This template builds a showtimes website for an independent cinema, drawn entirely in code: no photographs anywhere, just velvet red, black and cream program text around a working marquee. The default content is an invented three-screen picture house with six invented films, each with its own hand-drawn abstract poster, weekday-pattern showtimes, a film detail page and an auditorium seat picker. The first screen is the marquee itself: the cinema's name in bulb-framed lettering over layered velvet curtain gradients, a slow ticker of what is playing underneath, and a gentle film-grain wash over the whole page. The posters are pure SVG color-block compositions — a noir of rain lines, a thriller of dark orchard rows, a comedy of one red biplane — so the grid looks curated but costs no photography. The seat picker draws a real auditorium map: a screen curve, eight lettered rows, a center aisle, fixed taken seats, selected states and a running ticket total, all local, with clear demo-only wording and no booking backend. Membership comes as three tiers, and the visit block carries an invented address and opening hours. The template suits independent cinemas, repertory houses, community theaters, playhouses and anywhere that sells seats for sessions. It is a Vite + React + Tailwind build with Motion; fonts self-host through Fontsource and every visual is SVG or CSS, so the build is small and fully local. To adapt it, change the cinema name, city, ticket price and discount-day variables, then replace the films, showtimes and tiers in one content file; the marquee, posters and picker restyle themselves.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Retro](../../styles/retro.md), [Dark](../../styles/dark.md) |
| Effects | Marquee, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 2 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/movie-theater-showtimes-website?case=45aa5cd0-bd23-48fe-b107-770674d3be57&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/movie-theater-showtimes-website/45aa5cd0-bd23-48fe-b107-770674d3be57/shot_desktop.57e1824072.webp" width="100%" alt="Movie Theater Showtimes Website — The Ruby Lantern, built by GLM-5.3 in ZCode"></a><br>
<b>The Ruby Lantern</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/movie-theater-showtimes-website?case=45aa5cd0-bd23-48fe-b107-770674d3be57&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/movie-theater-showtimes-website?case=baa26fe7-9f1f-4386-80c6-18ff508d0f5c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/movie-theater-showtimes-website/baa26fe7-9f1f-4386-80c6-18ff508d0f5c/shot_desktop.1815d8ce81.webp" width="100%" alt="Movie Theater Showtimes Website — Repertory playhouse, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Repertory playhouse</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/movie-theater-showtimes-website?case=baa26fe7-9f1f-4386-80c6-18ff508d0f5c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Cinema name | The Ruby Lantern |
| `[CITY]` | Town | Old Milltown |
| `[TICKET_PRICE]` | Ticket price | $11 |
| `[DISCOUNT_DAY]` | Cheap night | Tuesday |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add movie-theater-showtimes-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A repertory cinema: set BRAND to your house name, replace the six films with your season, and rewrite the membership tiers around a film-club pass.
- A community playhouse: keep the marquee and seat picker, swap the film grid for stage productions and set DISCOUNT_DAY to your cheap preview night.
- A film festival: use the weekday showtime pattern for a single weekend, list each screening as a film card and point the ticker at your programme.
- A small-town single-screen: set CITY and the visit address, lower TICKET_PRICE for matinees and trim the membership block to one tier.

## FAQ

### How do I change the cinema name, city, ticket price and discount day on the Movie Theater Showtimes Website?
The Movie Theater Showtimes Website template exposes four variables: BRAND for the cinema name, CITY for the town in the address and directions, TICKET_PRICE for the adult seat price used by the seat-map tally, and DISCOUNT_DAY for the cheap night shown under Showtimes. Set them in the prompt before building, or edit the content file afterwards. The marquee headline, header, footer and seat tally all follow BRAND and TICKET_PRICE, so change those first.

### Where do I put my own films and showtimes in the Movie Theater Showtimes Website template?
Films, showtimes, poster compositions, taken-seat patterns and membership tiers all live in one typed content file, keyed by section. Replace the six invented films with your programme, give each a title, meta line, blurb and slug, and set the weekday showtime pattern. The poster grid, ticker and film detail page read from that file, so the marquee, posters and seat picker restyle themselves without touching components.

### Does the Movie Theater Showtimes Website template take real bookings or payments?
The Movie Theater Showtimes Website template has no booking backend and no payment processing. The auditorium seat picker draws a real map with a screen curve, eight lettered rows, a center aisle, fixed taken seats and a running ticket total, and the hold persists locally in the browser under a key derived from your cinema name. It carries clear demo-only wording, so treat it as a preview and connect your own ticketing system if you need to sell seats.

### Can I use photographs of my cinema instead of the drawn posters?
The Movie Theater Showtimes Website template is built with no photography anywhere: the posters are flat SVG color-block compositions, the curtains are layered gradients and the grain is a static overlay. You can swap the poster compositions for your own images, but the velvet-red, black and cream palette and the code-drawn marquee are what hold the page together. If you keep the drawn posters, the grid looks curated and the build stays small and fully local.

### What should I change first when adapting the Movie Theater Showtimes Website for a repertory house or community theater?
Start with BRAND, CITY, TICKET_PRICE and DISCOUNT_DAY, then rewrite the marquee subline, the doors line and the membership tiers so they match your venue. Replace the six invented films and their weekday showtime pattern next, since the ticker, poster grid and film detail page all read from that content. The visit block carries an invented address and opening hours, so update those before publishing.

### How do I build a movie theater showtimes website with AI?
Copy the prompt from this page or run npx vibefather add movie-theater-showtimes-website, replace [BRAND], [CITY], [TICKET_PRICE] and [DISCOUNT_DAY] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Movie Theater Showtimes Website demo?
The The Ruby Lantern case was built by GLM-5.3 in ZCode; the Repertory playhouse case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Movie Theater Showtimes Website template use?
Movie Theater Showtimes Website is a 2-page site built with React, Motion and Tailwind CSS, with marquee and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Movie Theater Showtimes Website template for a client or a business?
The Movie Theater Showtimes Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Movie Theater Showtimes Website template work on mobile?
Yes. Every Movie Theater Showtimes Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Movie Theater Showtimes Website on VibeFather](https://vibefather.ai/templates/movie-theater-showtimes-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
