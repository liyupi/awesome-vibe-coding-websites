# Podcast Show Website

> A warm podcast site with custom audio, searchable episodes, chaptered notes, guests, and subscribe tools.

<a href="https://vibefather.ai/templates/podcast-show-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/podcast-show-website/07c2ec35-2ca8-48ad-9b41-8794965ac301/webp.7c64b8bec2.webp" width="100%" alt="Podcast Show Website — Editorial Podcast Website with Audio Player built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/podcast-show-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Podcast Show Website is a complete home for an interview or storytelling show, built around listening rather than a generic blog feed. The latest episode leads with a wide studio photograph, concise show positioning, and a custom player with play, seek, skip, speed, and volume controls. A bundled original audio preview makes every control work without an external service.

The archive combines keyword search with topic filters and clear result counts. Each episode has its own detail view with cover artwork, show notes, selectable chapters, key takeaways, guest context, and related episodes. Dedicated guest and host profiles give recurring voices a proper place, while RSS, email-update, and copy-link actions provide useful subscription paths. All sample content is fictional and lives in one content file.

The visual direction is warm and editorial: parchment, ink, oxblood, and persimmon; expressive Fraunces headlines; quiet Inter body copy; and mono metadata. Generative geometric covers keep a large episode catalogue consistent without needing a separate image for every episode. Coordinated studio photography and portraits add a human presence, with generous spacing and tactile controls.

It suits independent hosts, interview shows, educational podcasts, and small media teams. Change the show name, subject, audience, hosts, and tagline through five variables, then replace the episode and guest data. A static RSS feed, transparent local-only email demo, and copyable show link keep subscription features useful while making their demo behavior clear to every visitor. React and Tailwind CSS handle reusable cards, filtering, player state, and responsive layouts. The result builds to static files, with local fonts and media, no backend, and reduced-motion support.

| | |
|---|---|
| Category | [Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) |
| Site type | [Blog](../../types/blog.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + Tailwind + lucide-react |
| Pages | 4 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/podcast-show-website?case=07c2ec35-2ca8-48ad-9b41-8794965ac301&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/podcast-show-website/07c2ec35-2ca8-48ad-9b41-8794965ac301/shot_desktop.738dbe9d66.webp" width="100%" alt="Podcast Show Website — Everyday object stories, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Everyday object stories</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/podcast-show-website?case=07c2ec35-2ca8-48ad-9b41-8794965ac301&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/podcast-show-website?case=49c18032-0b47-4d19-bfc5-f6808b9453de&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/podcast-show-website/49c18032-0b47-4d19-bfc5-f6808b9453de/shot_desktop.b1f4e464a8.webp" width="100%" alt="Podcast Show Website — Neighborhood climate stories, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Neighborhood climate stories</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/podcast-show-website?case=49c18032-0b47-4d19-bfc5-f6808b9453de&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Show name | Tangent & Tide |
| `[SHOW_TOPIC]` | Show subject | the hidden design decisions behind everyday objects |
| `[AUDIENCE]` | Listener audience | curious designers, engineers, and lifelong learners |
| `[HOST_NAMES]` | Host names | Mara Venn and Ivo Sen |
| `[SHOW_TAGLINE]` | Show tagline | Ordinary things. Extraordinary stories. |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add podcast-show-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An interview show about a niche craft: set BRAND and SHOW_TOPIC to your subject, rewrite the episode records and guest bios, and keep the chaptered show notes for long conversations.
- An educational podcast for a course or community: set AUDIENCE to your learners, replace the episode takeaways with lesson summaries, and link each guest profile to the relevant episode.
- A small media team running several shows: set HOST_NAMES to your on-air team, split bios across the guest and host profiles, and use the topic filters to separate recurring series.
- A storytelling show with a large back catalogue: keep the generated geometric covers keyed to episode numbers, set SHOW_TAGLINE to your show line, and let search carry listeners into older episodes.

## FAQ

### How do I change the podcast show name, hosts and topic in the Podcast Show Website template?
The Podcast Show Website template keeps all show positioning in five variables: BRAND, AUDIENCE, HOST_NAMES, SHOW_TOPIC and SHOW_TAGLINE. Set BRAND to your show name, HOST_NAMES to your hosts, SHOW_TOPIC to what the show covers and SHOW_TAGLINE to your hero line. Then rewrite the episode records, guest bios, show notes and interface labels in the content file so no default names remain.

### Can the podcast player actually play audio, or is it just a mockup?
The player in the Podcast Show Website template plays real audio. A bundled original 24-second preview WAV is included, labeled as an original preview, and every control works against it: play and pause, 15-second back, 30-second forward, a seek range, elapsed and total time, speed cycling between 1x and 2x, mute and volume. Replace the preview file with your own episode audio to make it play your show.

### How does episode search and topic filtering work in the archive?
The Podcast Show Website template combines keyword search with topic filters and shows clear result counts in the archive. Filter pills fill oxblood when selected, and search matches against the episode records in the content file. To adapt it, add or edit episodes and topics in that same content file; the filtering and counts update from the data without touching the layout.

### What comes with each episode page, and how do I add show notes and chapters?
Each episode in the Podcast Show Website template has its own detail view with cover artwork, show notes, selectable chapters, key takeaways, guest context and related episodes. Show notes, chapters and takeaways live in the content file alongside the episode record, so adding an episode means adding its notes, chapter timestamps and guest references there. Prose is kept to a readable line length for longer notes.

### Does the subscribe button and RSS feed work without a backend?
The Podcast Show Website template ships a static RSS feed and local subscribe actions with no backend. The RSS button opens the bundled feed file, the email update form is a transparent local-only demo, and the copy show link button copies the show URL. To go live, point the feed at your real hosting address and connect the email form to your own mailing list provider.

### How do I build a podcast show website with AI?
Copy the prompt from this page or run npx vibefather add podcast-show-website, replace [BRAND], [SHOW_TOPIC], [AUDIENCE] and [HOST_NAMES] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Podcast Show Website demo?
The Everyday object stories case was built by Kimi K3.1 Pro in Kimi Code; the Neighborhood climate stories case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Podcast Show Website template use?
Podcast Show Website is a 4-page site built with React and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Podcast Show Website template for a client or a business?
The Podcast Show Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Podcast Show Website template work on mobile?
Yes. Every Podcast Show Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) · [Podcast Show Website on VibeFather](https://vibefather.ai/templates/podcast-show-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
