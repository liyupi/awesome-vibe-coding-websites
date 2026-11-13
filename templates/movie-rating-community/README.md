# Movie Rating Community

> Rate original films, trade thoughtful reviews, and turn your watch history into a taste profile.

<a href="https://vibefather.ai/templates/movie-rating-community?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/movie-rating-community/d8c2b3ba-0102-4aef-8833-dfb297b8ccf1/webp.47f4a07128.webp" width="100%" alt="Movie Rating Community — Movie Reviews and Taste Profile Web App built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/movie-rating-community?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

Movie Rating Community is a complete, data-rich web app for discovering fictional films and keeping a personal film diary. It combines an editorial home feed, detailed movie pages, short reactions, long-form essays, a ranked community canon, watchlists, and a visual taste profile. Every title, reviewer, rating, and piece of artwork is invented, so the experience feels like a functioning community without depending on a real movie catalog or licensed poster art.

The visual direction pairs an independent film journal with a carefully organized catalog. Warm ivory surfaces, inky type, muted coral, ochre stars, serif headlines, and compact monospaced metadata create a distinctive reading environment. Six wordless illustrated posters give the featured films a coherent identity; a deterministic SVG poster system extends the catalog without repetitive stock imagery. The first screen immediately presents a rich featured-film interface rather than a marketing-only hero.

Interactions are central. Visitors can rate films, switch between want-to-watch and watched states, vote reviews helpful, filter the full ranked list, write a short take or essay, and see their taste metrics respond. Ratings, lists, votes, and drafts persist locally with an in-memory fallback for restricted browser contexts. All charts are hand-built SVG and all state remains on the device.

This template suits creators, community builders, and developers prototyping a review product, cultural catalog, book club, or recommendation service. Six variables change the brand, invitation, audience, featured film, profile, and ranked-list name while preserving the layout. The alternate case becomes an independent-film circle using the same original catalog. Responsive navigation, keyboard controls, reduced-motion behavior, local fonts, and a static build make it practical to adapt without adding a backend.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Dashboard](../../types/dashboard.md) |
| Style | [Retro](../../styles/retro.md), [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Page Transitions, Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Vanilla CSS + hand-built SVG + lucide-react |
| Pages | 6 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/movie-rating-community?case=d8c2b3ba-0102-4aef-8833-dfb297b8ccf1&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/movie-rating-community/d8c2b3ba-0102-4aef-8833-dfb297b8ccf1/shot_desktop.219ae68ae8.webp" width="100%" alt="Movie Rating Community — Fiction film club, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Fiction film club</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/movie-rating-community?case=d8c2b3ba-0102-4aef-8833-dfb297b8ccf1&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/movie-rating-community?case=dabf0e65-77b4-4ac5-8a47-1a1c3af69183&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/movie-rating-community/dabf0e65-77b4-4ac5-8a47-1a1c3af69183/shot_desktop.9d21b0f7a8.webp" width="100%" alt="Movie Rating Community — Independent film circle, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Independent film circle</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/movie-rating-community?case=dabf0e65-77b4-4ac5-8a47-1a1c3af69183&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Community name | Fableframe |
| `[TAGLINE]` | Home invitation | Rate the films. Find your people. Know your taste. |
| `[AUDIENCE]` | Community audience | curious film lovers |
| `[FEATURED_FILM]` | Featured film title | The Cartographer's Dream |
| `[PROFILE_NAME]` | Sample member name | Mara Ellison |
| `[RANKED_LIST_NAME]` | Ranked canon name | The Hundred |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add movie-rating-community` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A neighborhood book club: set BRAND and AUDIENCE to your reading circle, swap the film catalog for your reading list, and rename the ranked canon to your club's best books.
- An independent record shop: point FEATURED_FILM at a lead album, rewrite film details as artist and release metadata, and keep the star ratings and taste profile for staff picks.
- A film studies course: set PROFILE_NAME to a sample student, use the essay review feed for coursework, and rename the ranked list to your syllabus canon.
- A local repertory cinema: set BRAND to the venue, use the want-to-watch library as a coming-soon list, and link each featured film to your screening schedule.

## FAQ

### How do I change the featured film and the ranked list name in the Movie Rating Community template?
The Movie Rating Community template exposes six variables, and two of them control this. Set FEATURED_FILM to one of the six art-directed catalog titles, such as The Night Orchard, so the home panel and film route open on it. Set RANKED_LIST_NAME to a short original name like The Hundred, and the navigation and rankings heading update together. Rewrite the surrounding copy to match.

### What can a visitor actually do on the Movie Rating Community site?
Visitors to the Movie Rating Community template can rate fictional films from one to five stars, move titles between want-to-watch and watched, vote reviews helpful, and filter the ranked canon. They can write a short take or a long essay, and the personal taste profile and library update as they go. Ratings, lists, votes and drafts persist locally on the device, with an in-memory fallback when storage is blocked.

### Where do the films, posters and reviews come from if there is no backend?
Every title, reviewer, rating and piece of artwork in the Movie Rating Community template is invented and stored in the template's own content and catalog files. Six wordless illustrated posters give the featured films a shared identity, and a deterministic SVG poster system extends the rest of the catalog. Nothing calls an external movie database or licensed poster service, so the site builds and runs as static files.

### Can I turn the Movie Rating Community into a book club or a music review site?
Yes. The Movie Rating Community template suits any catalog-and-review product, and the brief names a book club and a recommendation service as fits. Set BRAND, TAGLINE and AUDIENCE to the new subject, point FEATURED_FILM at your lead item, and rewrite the film fields as books or records. The rating input, ranked list, review feed and taste profile keep working the same way.

### What should I edit first after generating the Movie Rating Community template?
Start with the six variables: BRAND, TAGLINE, AUDIENCE, PROFILE_NAME, FEATURED_FILM and RANKED_LIST_NAME. The Movie Rating Community template keeps all visible copy in one content file, so swap the invented film records, review text and chart labels there next, then check the home feed, film pages, review feed, rankings, library and profile at desktop and phone widths.

### How do I build a movie rating community with AI?
Copy the prompt from this page or run npx vibefather add movie-rating-community, replace [BRAND], [TAGLINE], [AUDIENCE] and [FEATURED_FILM] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Movie Rating Community demo?
The Fiction film club case was built by Kimi K3.1 Pro in Kimi Code; the Independent film circle case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Movie Rating Community template use?
Movie Rating Community is a 6-page site built with React, with page transitions, scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Movie Rating Community template for a client or a business?
The Movie Rating Community prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Movie Rating Community template work on mobile?
Yes. Every Movie Rating Community build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Movie Rating Community on VibeFather](https://vibefather.ai/templates/movie-rating-community?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
