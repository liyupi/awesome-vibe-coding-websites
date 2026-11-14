# Ebook Sales Landing Page

> Warm paper ebook landing page with a pointer-tilted 3D cover, chapter list, sample-chapter capture, author bio and pricing tiers.

<a href="https://vibefather.ai/templates/ebook-sales-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/ebook-sales-landing-page/773da701-c27e-46b1-92b3-ce9a8fde7d63/webp.e6f4d60b08.webp" width="100%" alt="Ebook Sales Landing Page — Ebook Landing Page with 3D Cover built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/ebook-sales-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page site that sells one ebook: a hero anchored by a 3D-tilted cover mockup (CSS perspective, pointer-reactive, artwork behind CSS-set typography); an honest sample-chapter email capture; an eight-chapter table of contents with page counts; a pull-quote 'inside the book' strip; an author bio with a portrait and credential ticks; a six-quote review wall; three pricing tiers (ebook, ebook + workbook, team pack) with a highlighted middle tier; a short FAQ; and a quiet footer. The default content sells an invented nonfiction title by an invented author, but the structure suits any ebook, guide or workbook. The look is warm paper editorial: cream ground, ink serif headlines (Fraunces), one amber accent, book-as-object photography. All copy lives in one content file; swapping the four variables rewrites the whole page. The author portrait is an AI-generated fictional person. No real books, authors, publishers, bestseller badges or retailer marks anywhere.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/ebook-sales-landing-page?case=773da701-c27e-46b1-92b3-ce9a8fde7d63&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/ebook-sales-landing-page/773da701-c27e-46b1-92b3-ce9a8fde7d63/shot_desktop.17f32918d9.webp" width="100%" alt="Ebook Sales Landing Page — Nonfiction ebook by an indie author, built by GLM-5.3 in ZCode"></a><br>
<b>Nonfiction ebook by an indie author</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/ebook-sales-landing-page?case=773da701-c27e-46b1-92b3-ce9a8fde7d63&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/ebook-sales-landing-page?case=26eb802e-e66b-4de7-9574-dab9706f343c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/ebook-sales-landing-page/26eb802e-e66b-4de7-9574-dab9706f343c/shot_desktop.91df65139a.webp" width="100%" alt="Ebook Sales Landing Page — Senior engineer career ebook, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Senior engineer career ebook</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/ebook-sales-landing-page?case=26eb802e-e66b-4de7-9574-dab9706f343c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[TITLE]` | Book title | The Quiet Craft |
| `[AUTHOR]` | Author name | Maren Holt |
| `[TOPIC]` | Topic phrase | making work that lasts |
| `[PRICE]` | Ebook price | $19 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add ebook-sales-landing-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An independent consultant: set TITLE and AUTHOR to your field guide, swap the eight chapters for your method's steps, and rewrite the bio ticks as client sectors you have worked in.
- A course creator selling a workbook: keep the sample-chapter capture but rename it to a free worksheet, and set the middle tier to the workbook bundle at PRICE plus $10.
- A small agency publishing a team playbook: use the team pack tier for bulk licences, and replace the author bio with a short agency profile and the reviews with client quotes.
- A nonprofit publishing a donor guide: set PRICE to a suggested donation, rewrite the FAQ around distribution, and change the chapter promises to the topics your readers search for.

## FAQ

### How do I change the book title, author and price on the Ebook Sales Landing Page?
The Ebook Sales Landing Page template is driven by four variables: TITLE, AUTHOR, TOPIC and PRICE. Set them once and the H1, the cover typography, the title tag, the author bio, the footer credit and the pricing tiers all rewrite themselves. The middle tier adds $10 to PRICE and the team pack multiplies it by five, so rewrite those two lines if your numbers differ.

### How does the 3D book cover on the Ebook Sales Landing Page work?
The Ebook Sales Landing Page template builds the cover from CSS, not a photo of a real book: a card in perspective with a front face, a page block edge and a navy spine. Moving the pointer over the hero tilts it between -9 and 9 degrees on the Y axis and -5 to 5 on X, and it rests at a slight angle so the page edge reads. Visitors with reduced motion turned on see the resting pose only.

### Where do sample-chapter signups from the ebook landing page go?
Nowhere by default. The sample-chapter form on the Ebook Sales Landing Page template keeps the email in the browser and shows a confirmation, because the prompt builds a static site with no backend and no external APIs. To collect real addresses, point the form at your mailing list provider's endpoint or a form service, then keep the same input and confirmation styling.

### What sections does the Ebook Sales Landing Page template include?
The Ebook Sales Landing Page template is one page with a hero and tilted cover, a sample-chapter email capture, an eight-chapter table of contents with page counts, an inside-the-book pull-quote strip, an author bio with portrait and credential ticks, a six-quote review wall, three pricing tiers with the middle one highlighted, a short FAQ and a quiet footer.

### What should I change first when adapting the Ebook Sales Landing Page to my own book?
Start with the four variables, then the chapter list, because the chapter titles and page counts do the selling before the reviews. Replace the invented author portrait and bio with your own details, rewrite the six reviews as real reader quotes, and check that the three pricing tiers match what you actually sell: single ebook, ebook plus workbook, and a team pack.

### How do I build an ebook sales landing page with AI?
Copy the prompt from this page or run npx vibefather add ebook-sales-landing-page, replace [TITLE], [AUTHOR], [TOPIC] and [PRICE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Ebook Sales Landing Page demo?
The Nonfiction ebook by an indie author case was built by GLM-5.3 in ZCode; the Senior engineer career ebook case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Ebook Sales Landing Page template use?
Ebook Sales Landing Page is a single-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Ebook Sales Landing Page template for a client or a business?
The Ebook Sales Landing Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Ebook Sales Landing Page template work on mobile?
Yes. Every Ebook Sales Landing Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Ebook Sales Landing Page on VibeFather](https://vibefather.ai/templates/ebook-sales-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
