# Product Review Blog

> Trusted-review template with a sortable comparison table, score badges, and verdict-driven review pages.

<a href="https://vibefather.ai/templates/product-review-blog?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/product-review-blog/cbad1a43-b5c3-4df8-91ae-d070c2fe83a3/webp.1923f0424e.webp" width="100%" alt="Product Review Blog — Review Blog with Compare Table built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/product-review-blog?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Product Review Blog is a trusted-editorial template for an invented review publication, built around one honest job: helping a reader choose. The first screen stacks the best-of cards like a shortlist on a desk — the top pick's product photo, a circular green score badge, a ribbon — under a serif headline that names the category, with the demo disclosure sitting right beneath it.

Below, a sortable comparison table carries all six products with per-criteria scores, a best-pick ribbon on the winner, and rows that open full review pages routed by query. Each review delivers the format readers scan for: an overall score with four sub-score bars, two paragraphs of specific impressions, a pros-and-cons two-column block, and a verdict box that says who the product is for. A four-step buying guide, a how-we-score card, and a newsletter box that saves locally round out the page.

The look is print-trust: a clean white ground, ink text, one confident green reserved for every score moment, Newsreader serif headlines over Figtree body text, and Spline Sans Mono numerals so table columns line up. Product photography is one consistent studio set — generic unbranded objects on a warm neutral seamless, soft daylight, no logos.

Swap the brand, category, audience, and motto to retune the template for standing desks, espresso machines, or jogging strollers; products live as records in one content file with scores, pros, cons, and verdicts. The stack is Vite, React, Tailwind, and Motion with self-hosted fonts, static output, no backend, no newsletter service, and no dates anywhere on the page.

| | |
|---|---|
| Category | [Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) |
| Site type | [Blog](../../types/blog.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 2 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/product-review-blog?case=cbad1a43-b5c3-4df8-91ae-d070c2fe83a3&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/product-review-blog/cbad1a43-b5c3-4df8-91ae-d070c2fe83a3/shot_desktop.a6466e9ebc.webp" width="100%" alt="Product Review Blog — Pour-over reviews (Morning Filter), built by GLM-5.3 in ZCode"></a><br>
<b>Pour-over reviews (Morning Filter)</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/product-review-blog?case=cbad1a43-b5c3-4df8-91ae-d070c2fe83a3&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/product-review-blog?case=a92f24f9-c4c0-4342-95b0-06dc830b03c6&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/product-review-blog/a92f24f9-c4c0-4342-95b0-06dc830b03c6/shot_desktop.3baef20246.webp" width="100%" alt="Product Review Blog — Standing desk review site, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Standing desk review site</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/product-review-blog?case=a92f24f9-c4c0-4342-95b0-06dc830b03c6&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Publication name | Morning Filter |
| `[CATEGORY]` | Reviewed category | pour-over coffee makers |
| `[AUDIENCE]` | Audience | home brewers upgrading their morning ritual |
| `[MOTTO]` | Motto | Scored by people who drink the results. |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add product-review-blog` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A niche espresso reviewer: set CATEGORY to espresso machines, replace the six product records with your tested models, and keep the four sub-score bars for taste, ease, build and value.
- An affiliate publisher in home office gear: set BRAND and AUDIENCE to desk workers, swap the buying guide steps for desk setup advice, and link the comparison table rows to your affiliate reviews.
- A creator building a standing desk shortlist: set CATEGORY to standing desks, use the best-of card stack for your top three picks, and rewrite the verdict box to say who each desk suits.
- A parenting blogger comparing jogging strollers: set AUDIENCE to new parents, replace the product photos with stroller shots on the same neutral background, and rewrite the pros and cons for real family use.

## FAQ

### How do I change the product review blog to review a different category, like standing desks or espresso machines?
Set the CATEGORY variable to your product category in plain words, then rewrite the H1, table heading, review copy and buying guide to match it. Set BRAND, AUDIENCE and MOTTO at the same time. Each product lives as a record in one content file with name, best-for tag, price, photo path, four sub-scores, overall score, two review paragraphs, pros, cons and verdict, so you swap the records and the layout stays.

### How does the sortable comparison table on the Product Review Blog work?
The Product Review Blog comparison table carries all six products with per-criteria scores. Clicking Brew quality, Ease, Build, Value or Overall toggles descending then ascending order, reorders the rows with a short fade-and-rise stagger, and marks the active header with a filled arrow in score green. The Product column never sorts, and the best-pick ribbon stays on the winner.

### Where do the review pages live and how does a reader open one?
Product Review Blog review pages open from the comparison table rows and are routed by a query string that matches each product's slug, always falling back to the first product rather than a not-found state. Each review page shows an overall score with four sub-score bars, two paragraphs of specific impressions, a pros-and-cons block and a verdict box that says who the product is for. A read-the-next-review link cycles through the table order and wraps.

### Is the newsletter signup on the Product Review Blog connected to an email service?
No. The Product Review Blog newsletter box saves the signup locally in the browser under a storage key derived from the brand name, validates restored data and recovers silently if it is malformed. No backend, newsletter service or external API is involved, so nothing is sent anywhere. If you need real subscribers, connect the form to your own mailing list after building.

### Are the scores and products on the Product Review Blog real, and what should I change first?
Every score and product on the Product Review Blog is invented sample data, and the demo disclosure sits right beneath the hero headline to say so. Change the four variables first, then replace the six product records with your own products, scores, pros, cons and verdicts, and swap the consistent studio product photos for your own shots. Keep the how-we-scoring card honest about your method.

### How do I build a product review blog with AI?
Copy the prompt from this page or run npx vibefather add product-review-blog, replace [BRAND], [CATEGORY], [AUDIENCE] and [MOTTO] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Product Review Blog demo?
The Pour-over reviews (Morning Filter) case was built by GLM-5.3 in ZCode; the Standing desk review site case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Product Review Blog template use?
Product Review Blog is a 2-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Product Review Blog template for a client or a business?
The Product Review Blog prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Product Review Blog template work on mobile?
Yes. Every Product Review Blog build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) · [Product Review Blog on VibeFather](https://vibefather.ai/templates/product-review-blog?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
