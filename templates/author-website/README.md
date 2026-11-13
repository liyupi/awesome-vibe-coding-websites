# Author Website

> A warm literary home for novels, excerpts, events and reader letters.

<a href="https://vibefather.ai/templates/author-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/author-website/a94beb5d-a017-4d41-97cf-dc12c630344a/webp.4fa70d627c.webp" width="100%" alt="Author Website — Author Website with Code-Drawn Covers built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/author-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Author Website is a complete multi-page site for a novelist who wants readers to explore the work, not just scan a bio. It suits fiction writers, memoirists and poets with a small backlist, as well as independent authors who need one place for excerpts, event details and press material. The structure includes a portrait-led home page, a reusable book detail page, an events archive, an about page and a practical press kit.

The visual direction is warm and editorial: vellum-colored space, dark ink typography, oxblood accents, fine rules and generous reading columns. Fraunces gives headlines a literary voice, while Source Sans 3 keeps event details and forms clear. Each book receives an original cover drawn with SVG geometry, contour lines and typography, so the design does not depend on existing cover art. A single generated fictional author portrait anchors the home and biography pages and remains available as a press download.

The interactions are useful and restrained. Covers respond gently to hover, readers can follow an excerpt progress indicator, event buttons download calendar files, and press biographies can be copied without manual selection. Buy controls are explicitly placeholders ready for real retailer URLs. The newsletter form demonstrates validation and local browser storage without pretending to contact a server. All event, book and author content sits in one content file.

Change the six variables to move the site to a different pen name, genre, location, featured title, newsletter or contact address. The alternate case shows how the same composition works for a speculative-fiction author. React, TypeScript, Tailwind CSS and Motion provide reusable components and quiet transitions while Vite produces five static HTML pages with local assets and no backend.

| | |
|---|---|
| Category | [Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) |
| Site type | [Portfolio](../../types/portfolio.md), [Personal Site](../../types/personal.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript 5 + Tailwind CSS 3.4 + Motion + lucide-react |
| Pages | 5 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/author-website?case=a94beb5d-a017-4d41-97cf-dc12c630344a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/author-website/a94beb5d-a017-4d41-97cf-dc12c630344a/shot_desktop.f488f76dcf.webp" width="100%" alt="Author Website — Literary mystery novelist, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Literary mystery novelist</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/author-website?case=a94beb5d-a017-4d41-97cf-dc12c630344a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/author-website?case=eb6daf74-ad3b-4999-b325-f494e6af85db&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/author-website/eb6daf74-ad3b-4999-b325-f494e6af85db/shot_desktop.9f9d841d74.webp" width="100%" alt="Author Website — Speculative fiction author, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Speculative fiction author</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/author-website?case=eb6daf74-ad3b-4999-b325-f494e6af85db&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Author name | Mara Ellison |
| `[GENRE]` | Genre descriptor | Literary mysteries |
| `[FEATURED_BOOK]` | Featured book title | The Cartographer of Low Tides |
| `[LOCATION]` | Author location | Portland, Maine |
| `[NEWSLETTER_NAME]` | Newsletter name | Notes from the Margin |
| `[CONTACT_EMAIL]` | Public contact email | hello@maraellison.example |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add author-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A debut memoirist: set BRAND to your name, GENRE to memoir, and replace the featured novel with your book so the excerpt and press kit carry your story.
- A poet with a small chapbook: keep the portrait hero, swap the book collection for your pamphlets, and point the events archive at your readings.
- A speculative-fiction author: use the alternate demo case, set GENRE to science fiction and rewrite the excerpts and event copy in that voice.
- A translator or essayist: set FEATURED_BOOK to your latest collection and use the press kit for rights enquiries via CONTACT_EMAIL.

## FAQ

### How do I change the author name, genre and featured book on the Author Website template?
The Author Website template keeps all six settings in one content file: BRAND, GENRE, LOCATION, CONTACT_EMAIL, FEATURED_BOOK and NEWSLETTER_NAME. Set BRAND to your pen name and FEATURED_BOOK to the title you want first in the book collection, since the book page falls back to it when no valid book id is given. Then rewrite the headlines and biography copy that mention the defaults.

### What pages does the Author Website template include for a novelist?
The Author Website template produces five static pages: a portrait-led home page with the featured novel and full bibliography, a reusable book detail page with excerpts and buy placeholders, an events archive, an about page and a press kit. The press kit offers a downloadable portrait and copyable biography for booksellers, festival organizers and journalists.

### How do readers follow an excerpt or download an event on the Author Website template?
The Author Website template shows an excerpt progress indicator that follows native scroll position, so readers can see how far they are through the opening pages. Event buttons download calendar files rather than linking to a booking system, and press biographies can be copied without manually selecting text. The newsletter form validates input and stores it in the browser without contacting a server.

### Are the book covers and author portrait on the Author Website template real images?
The Author Website template draws all four book jackets as original SVG compositions using geometric lines, contour paths and typographic title and author text, so the design does not depend on existing cover art. The author portrait is one supplied editorial photograph of a fictional writer at a desk, reused on the home, about and press pages and offered as a press download.

### Can I add a working newsletter signup or real buy links to the Author Website template?
The Author Website template ships with a locally demonstrated newsletter form and explicitly placeholder buy controls. To make them real, replace the placeholder retailer URLs with your own links and connect the NEWSLETTER_NAME form to your mailing list provider, since the demo validates and stores entries in the browser only. The site has no backend, so any live form needs an external service.

### How do I build an author website with AI?
Copy the prompt from this page or run npx vibefather add author-website, replace [BRAND], [GENRE], [FEATURED_BOOK] and [LOCATION] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Author Website demo?
The Literary mystery novelist case was built by Kimi K3.1 Pro in Kimi Code; the Speculative fiction author case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Author Website template use?
Author Website is a 5-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Author Website template for a client or a business?
The Author Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Author Website template work on mobile?
Yes. Every Author Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) · [Author Website on VibeFather](https://vibefather.ai/templates/author-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
