# Podcast Episode Companion Page

> An illustrated, chapter-by-chapter companion for a long podcast episode, with charts and pulled-out lessons.

<a href="https://vibefather.ai/templates/podcast-episode-companion-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/fieldnotes/f1f0a8ca-cd60-4325-b8c3-3f31f77d2061/webp.a0dbda5a1c.webp" width="100%" alt="Podcast Episode Companion Page — Illustrated Episode Companion with Data Viz built by Claude Opus 5.5 and Claude Sonnet 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/podcast-episode-companion-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Fieldnotes is a single-page reading companion for one long podcast episode or book. It breaks the story into five chapters, opens each with a watercolor painting, and carries the numbers in eleven hand-drawn exhibits: bar and line charts with handwritten annotations, a 10×10 unit chart you can switch between storage methods, a rotating order card, a thickness gauge and a two-line chart with a year scrubber that marks the moment a rival becomes cheaper. Archival public-domain photographs sit in the text as taped scrapbook prints, pull quotes carry the hosts' voices with timestamps, and each chapter ends with a lesson card the reader can save to a notes drawer and copy as text.

It suits podcast hosts who publish long history or business episodes, newsletter writers turning a deep dive into something shareable, teachers building a reading guide for a class, and book clubs that want a chapter-by-chapter summary with the key figures drawn out. The default demo follows a fictional ice-harvesting company over 79 winters, from a free crop on a frozen lake to the refrigeration plant that ended it.

The look is warm paper, Fraunces headlines with big italic chapter numerals, Source Serif body text at a comfortable measure, IBM Plex Mono for timestamps and Caveat for margin notes. Watercolor washes are drawn in code with SVG filters, so they stay sharp and light. A sticky chapter rail shows where you would be in the episode, and a Skim mode hides the narrative for readers who only want the charts and lessons.

To adapt it, change the show name, title, subject, hosts and runtime, then rewrite the chapters, exhibits and lessons in the single content file. The prompt explains how to swap the paintings for code-drawn scenes and find new public-domain photos for another story.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Interactive Explainer](../../types/explainer.md), [Blog](../../types/blog.md) |
| Style | [Hand-drawn](../../styles/hand-drawn.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Cursor, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Cursor |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/podcast-episode-companion-page?case=f1f0a8ca-cd60-4325-b8c3-3f31f77d2061&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/fieldnotes/f1f0a8ca-cd60-4325-b8c3-3f31f77d2061/shot_desktop.ac24b57491.webp" width="100%" alt="Podcast Episode Companion Page — Ice company history, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Ice company history</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/podcast-episode-companion-page?case=f1f0a8ca-cd60-4325-b8c3-3f31f77d2061&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/podcast-episode-companion-page?case=cb84d95f-c999-4c60-9896-a4f434efa1ca&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/fieldnotes/cb84d95f-c999-4c60-9896-a4f434efa1ca/shot_desktop.1e510e4c89.webp" width="100%" alt="Podcast Episode Companion Page — Street lighting history, built by Claude Sonnet 5.5 in Cursor"></a><br>
<b>Street lighting history</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/podcast-episode-companion-page?case=cb84d95f-c999-4c60-9896-a4f434efa1ca&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Show name | The Long Ledger |
| `[EPISODE_TITLE]` | Episode or book title | Frozen Assets |
| `[SUBJECT]` | What the story is about | The rise and melt of the Halvorsen Ice Company, 1856–1934 |
| `[HOSTS]` | Hosts or narrators | Maren Okafor & Teddy Lindqvist |
| `[RUNTIME]` | Episode length | 4 h 12 min |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add podcast-episode-companion-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A history podcast host: set BRAND and EPISODE_TITLE to your show and episode, then rewrite the five chapters and eleven exhibits around your subject and rescale the timestamps to your RUNTIME.
- A teacher building a class reading guide: set SUBJECT to the text or topic, turn the six lesson cards into study prompts, and use Skim mode so students reach the charts and lessons first.
- A newsletter writer: set BRAND to the publication, use the pull quotes for your own interview lines with timestamps, and link the recap to the next issue.
- A book club organizer: set EPISODE_TITLE to the book, replace the chapter rail with chapter numbers, and let members save lesson cards to the notes drawer for discussion.

## FAQ

### How do I turn my own podcast episode into a companion page like this?
Start from the Podcast Episode Companion Page template and set the five variables: BRAND is your show name, EPISODE_TITLE is the short headline, SUBJECT is the one-line story, HOSTS are the narrators and RUNTIME is the episode length. Then rewrite the five chapters, eleven exhibits and six lessons in the single content file so the charts and timestamps match your episode.

### What does the Podcast Episode Companion Page template include?
The Podcast Episode Companion Page template includes a hero with the episode title and runtime, a sticky chapter rail with timestamps, five illustrated chapters, eleven hand-drawn exhibits, archival photos shown as taped prints, pull quotes with host timestamps, six lesson cards that save to a notes drawer, a recap and credits. A Skim mode hides the narrative for readers who only want the charts and lessons.

### How do I add my own charts and data to the podcast companion page?
The Podcast Episode Companion Page template draws its charts in code as hand-written SVG, with bar, line, unit, order-card, thickness and crossing-chart exhibits. To use your own numbers, edit the chart data in the single content file and keep the same structure: labels, values and the handwritten Caveat annotations that explain each figure. No chart library is involved.

### Can I use the Podcast Episode Companion Page template for a newsletter or a class reading guide?
Yes. The Podcast Episode Companion Page template suits newsletter writers turning a deep dive into a shareable page and teachers building a reading guide. Change BRAND to the publication or course, set SUBJECT to the topic, and rewrite the five chapters, exhibits and six lessons for your material. The notes drawer lets readers save lesson cards, and Skim mode gives a fast overview.

### How do I change the watercolor paintings and photos in the podcast companion page?
The watercolor washes in the Podcast Episode Companion Page template are drawn in code with SVG filters, so they stay sharp and light without image files. To swap the archival photographs, replace the image paths and alt texts in the content file and download new public-domain photos into the images folder. The prompt explains how to find suitable photos for another story.

### How do I build a podcast episode companion page with AI?
Copy the prompt from this page or run npx vibefather add podcast-episode-companion-page, replace [BRAND], [EPISODE_TITLE], [SUBJECT] and [HOSTS] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Podcast Episode Companion Page demo?
The Ice company history case was built by Claude Opus 5.5 in Cursor; the Street lighting history case was built by Claude Sonnet 5.5 in Cursor. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Podcast Episode Companion Page template use?
Podcast Episode Companion Page is a single-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Podcast Episode Companion Page template for a client or a business?
The Podcast Episode Companion Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Podcast Episode Companion Page template work on mobile?
Yes. Every Podcast Episode Companion Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

## Credits

- Inspired by [Illustrated interactive companion to a long podcast episode (Claude artifact showcase)](https://claude.ai/artifact/RdE6uE7WozcP2MLfx3BDky) by @bcherny
- Everything in the demos — code, copy and imagery — was generated for VibeFather; nothing was copied from the source of inspiration.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [Podcast Episode Companion Page on VibeFather](https://vibefather.ai/templates/podcast-episode-companion-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
