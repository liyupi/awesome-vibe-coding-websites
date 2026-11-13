# Neo-Brutalist Blog and Portfolio

> A neo-brutalist home and blog for a writer-illustrator: thick borders, hard shadows and one loud orange.

<a href="https://vibefather.ai/templates/neo-brutalist-blog-and-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/stickerbomb/95b6de1a-5ae4-4fff-a146-bf26b7084d23/webp.6e1c105e62.webp" width="100%" alt="Neo-Brutalist Blog and Portfolio — Neo-Brutalist Portfolio and Blog Template with Hard Shadows and Marquee built by Claude Opus 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/neo-brutalist-blog-and-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Stickerbomb is a three-page personal site for someone who both writes and draws: a home page, a blog index and a single post layout, built as plain static HTML with Vite and no framework. It suits illustrators, essayists, zine makers, comics artists and anyone who publishes words and pictures under their own name and wants the site to feel made by hand rather than assembled from a kit.

The look is neo-brutalist. Every card, button and input sits inside a thick black border with a hard offset shadow that has no blur, and the shadow collapses when you press. The background is warm off-white paper with a faint dot grid, the ink is near-black, and a single orange accent covers everything else: the highlight block behind the name, the sticker badges, the hover fills and the reading progress bar. Headlines are set in Archivo Black and sized by script to fill the width of the page, with Space Mono for labels and Inter for reading.

Motion stays small. Recent post titles run in a marquee that pauses on hover, cards tilt a couple of degrees like stickers being pressed down, a round badge turns slowly in the hero, and sections settle into place as you scroll. Every illustration is drawn in inline SVG from simple shapes, so there are no image files to license or replace.

The blog index filters posts by tag and by title on the client, and the post page has a narrow reading column, a drop cap, pull quotes with thick left borders, an inline figure, a copy-link button and previous/next cards. To adapt it, change the name, role, subject, city and email, then rewrite the posts and drawing titles in the single content file. The layout works just as well for a food writer, a travel sketcher or a poet who makes prints.

| | |
|---|---|
| Category | [Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) |
| Site type | [Personal Site](../../types/personal.md), [Blog](../../types/blog.md) |
| Style | [Brutalist](../../styles/brutalist.md), [Playful](../../styles/playful.md) |
| Effects | Marquee, Scroll Animation, Micro-interactions |
| Stack | Vite 5 + vanilla HTML/CSS/JS + Vanilla CSS + lucide |
| Pages | 3 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Cursor |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/neo-brutalist-blog-and-portfolio?case=95b6de1a-5ae4-4fff-a146-bf26b7084d23&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/stickerbomb/95b6de1a-5ae4-4fff-a146-bf26b7084d23/shot_desktop.087fb2bba1.webp" width="100%" alt="Neo-Brutalist Blog and Portfolio — Writer and illustrator, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Writer and illustrator</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/neo-brutalist-blog-and-portfolio?case=95b6de1a-5ae4-4fff-a146-bf26b7084d23&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/neo-brutalist-blog-and-portfolio?case=52eff5b3-4807-4d1f-993b-691bb5412aef&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/stickerbomb/52eff5b3-4807-4d1f-993b-691bb5412aef/shot_desktop.86313fa6e0.webp" width="100%" alt="Neo-Brutalist Blog and Portfolio — Food writer and printmaker, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Food writer and printmaker</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/neo-brutalist-blog-and-portfolio?case=52eff5b3-4807-4d1f-993b-691bb5412aef&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Person's name | Odile Brask |
| `[ROLE]` | Role | Writer & illustrator |
| `[BEAT]` | Subject matter | small towns, night trains and the things people keep in drawers |
| `[LOCATION]` | Home city | Ghent, Belgium |
| `[CONTACT_EMAIL]` | Contact email | hello@odilebrask.example |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add neo-brutalist-blog-and-portfolio` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A food writer and printmaker: set BRAND and ROLE to your name, point BEAT at markets and seasonal cooking, and swap the drawing titles for your prints.
- A travel sketcher: keep the marquee and grid, set LOCATION to your base city, and rewrite the posts as trip notes with inline SVG sketches of places.
- A poet who sells prints: use the big contact link for commission enquiries, retitle the illustration grid as limited prints, and shorten posts to single poems.
- A comics artist: set BEAT to short strips, use the post page for one panel per figure, and keep tags for series names so the blog index filters cleanly.

## FAQ

### How do I change the name, role and subject on the Neo-Brutalist Blog and Portfolio template?
Set the five variables in the prompt: BRAND is the person's name used as the wordmark and giant hero headline, ROLE is the short line like writer and illustrator, BEAT is what the work is about, LOCATION appears in the hero label row and footer, and CONTACT_EMAIL feeds every mailto link. Then rewrite the posts and illustration titles in the same voice.

### What does the Neo-Brutalist Blog and Portfolio template include beyond the home page?
The Neo-Brutalist Blog and Portfolio template has three pages: a home page with a giant name, a marquee of recent posts, a selected illustrations grid with lightbox, latest writing, an about block and a big contact link; a blog index that filters posts by tag and by title on the client; and a single post layout with a narrow reading column, drop cap, pull quotes, an inline figure and previous/next cards.

### Are the illustrations in the Neo-Brutalist Blog and Portfolio real image files I need to license?
No. Every illustration in the Neo-Brutalist Blog and Portfolio template is drawn as inline SVG from simple shapes, so there are no image files to license or replace. If your subject changes, the prompt allows redrawing the SVGs using the same construction rules: thick ink strokes, flat fills and the orange accent for highlights.

### How do I add my own posts and drawings to the Neo-Brutalist Blog and Portfolio template?
All copy lives in one content file: the six illustrations with title, medium and year, and the eight posts with slug, title, tags, excerpt, art key and body blocks. Rewrite those entries for your own writing and drawings, keep the slugs matching the post links, and the blog index filtering and previous/next cards follow automatically.

### What should I change first to make the Neo-Brutalist Blog and Portfolio feel like my own site?
Start with the variables, then the content: set BRAND, ROLE, BEAT, LOCATION and CONTACT_EMAIL, rewrite the hero sentence, about facts and contact copy, and replace the six illustration titles and eight post titles with your own. The thick black borders, hard offset shadows and single orange accent stay as they are.

### How do I build a Neo-Brutalist blog and portfolio with AI?
Copy the prompt from this page or run npx vibefather add neo-brutalist-blog-and-portfolio, replace [BRAND], [ROLE], [BEAT] and [LOCATION] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Neo-Brutalist Blog and Portfolio demo?
The Writer and illustrator case was built by Claude Opus 5.5 in Cursor; the Food writer and printmaker case was built by Claude Opus 5.5 in Cursor. Each build used the published prompt with nothing added.

### What tech stack and pages does the Neo-Brutalist Blog and Portfolio template use?
Neo-Brutalist Blog and Portfolio is a 3-page site built with Plain HTML, with marquee, scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Neo-Brutalist Blog and Portfolio template for a client or a business?
The Neo-Brutalist Blog and Portfolio prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Neo-Brutalist Blog and Portfolio template work on mobile?
Yes. Every Neo-Brutalist Blog and Portfolio build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) · [Neo-Brutalist Blog and Portfolio on VibeFather](https://vibefather.ai/templates/neo-brutalist-blog-and-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
