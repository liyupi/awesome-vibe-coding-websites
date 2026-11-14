# Daily Tarot Reading Page

> Shuffle an original deck, reveal a daily reading, and save a shareable card.

<a href="https://vibefather.ai/templates/daily-tarot-reading-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/daily-tarot-reading-page/fec5a5dc-3797-419f-a4d0-15fa9cf849df/webp.d1f856c693.webp" width="100%" alt="Daily Tarot Reading Page — Mystical Tarot Toy with 3D Card Flips built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/daily-tarot-reading-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Daily Tarot Reading Page is a single-page web toy built around an original six-card symbolic deck. Visitors can shuffle a fanned deck, reveal one daily card or a three-card past, present, and future spread, then read concise upright or reversed interpretations. The daily draw is saved in the browser for the local day, while three-card readings can be explored again. A built-in canvas creates a downloadable reading card without sending content to a service.

The visual direction is candlelit and celestial rather than theatrical: deep ink surfaces, parchment type, fine antique-gold lines, and six cohesive gouache-style illustrations. Cormorant Garamond headlines contrast with practical Manrope labels. The reading table is the hero, so the first screen already contains the deck, mode controls, and a clear action. Layered shuffles and perspective flips give the cards weight, with reduced-motion alternatives and touch-friendly controls.

This template suits creators, designers, and small projects that want a reflective interactive experience rather than a conventional landing page. It can also be adapted for an oracle deck, affirmation ritual, journaling prompt, or other lightweight daily draw.

Variables cover the brand, invitation line, audience, deck name, and reflection themes. Card names, interpretations, prompts, guide copy, and FAQs remain centralized in one content file, making a full content swap straightforward. The share layout, local persistence, and reading states are specified as part of the build. Everything runs as a static React site with local fonts and images; there are no accounts, APIs, predictions, or external form submissions. A clear entertainment-only disclaimer keeps the experience framed as a playful prompt for reflection.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Interactive Toy](../../types/toy.md) |
| Style | [Luxury](../../styles/luxury.md), [Editorial](../../styles/editorial.md), [Dark](../../styles/dark.md) |
| Effects | 3D / WebGL, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Vanilla CSS with custom properties + lucide-react |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/daily-tarot-reading-page?case=fec5a5dc-3797-419f-a4d0-15fa9cf849df&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/daily-tarot-reading-page/fec5a5dc-3797-419f-a4d0-15fa9cf849df/shot_desktop.a405c56e1b.webp" width="100%" alt="Daily Tarot Reading Page — Night Field Deck, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Night Field Deck</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/daily-tarot-reading-page?case=fec5a5dc-3797-419f-a4d0-15fa9cf849df&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/daily-tarot-reading-page?case=18a1dc8e-2e04-4a29-9977-6068c9b33641&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/daily-tarot-reading-page/18a1dc8e-2e04-4a29-9977-6068c9b33641/shot_desktop.2bb7024fb8.webp" width="100%" alt="Daily Tarot Reading Page — Quiet Hours Deck, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Quiet Hours Deck</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/daily-tarot-reading-page?case=18a1dc8e-2e04-4a29-9977-6068c9b33641&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand | Asterhollow |
| `[TAGLINE]` | Invitation line | A quiet card for the day ahead. |
| `[AUDIENCE]` | Audience | curious minds who enjoy a nightly reflection ritual |
| `[DECK_NAME]` | Deck name | The Night Field Deck |
| `[REFLECTION_FOCUS]` | Reflection themes | creativity, relationships, and everyday choices |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add daily-tarot-reading-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- For a journaling creator: set BRAND and DECK_NAME to your practice, point REFLECTION_FOCUS at daily prompts, and rewrite the six card meanings as writing cues.
- For a small design studio: use the deck as a seasonal greeting, set TAGLINE to your studio line, and keep the share card as a downloadable keepsake for clients.
- For a wellness newsletter: set AUDIENCE to your readers, swap the reflection themes for rest and balance, and link the reading to your signup page.
- For an oracle deck author: replace the six card illustrations and meanings with your own symbols, set DECK_NAME to your deck, and keep the entertainment disclaimer.

## FAQ

### How do I change the cards, names and interpretations in the Daily Tarot Reading Page?
The Daily Tarot Reading Page keeps all six card names, upright and reversed meanings, reflection prompts, guide copy and FAQs in one content file. Swap those records for your own symbols, then rewrite every headline and label tied to BRAND, TAGLINE, AUDIENCE, DECK_NAME and REFLECTION_FOCUS so no default-brand text remains. The layout, colors and card motion stay as built.

### Does the Daily Tarot Reading Page save a visitor's daily card when they reload?
Yes. The Daily Tarot Reading Page stores the daily draw in the visitor's browser for their local day, keyed from a slug built from BRAND and the local date, with card id, orientation and mode saved as a versioned object. Reloading shows the same card until the local day changes. Malformed saved data is discarded and the page recovers silently, and nothing leaves the browser.

### How does the downloadable reading card work on the Daily Tarot Reading Page?
The Daily Tarot Reading Page draws the share image in the browser with the native Canvas 2D API at 1080 by 1350 pixels, wrapping text and downloading the result as a file. No screenshot service, external request or account is involved, so the reading stays on the visitor's device. The share layout is part of the build and can be restyled to match your brand.

### Can I turn the Daily Tarot Reading Page into an oracle deck or affirmation ritual?
The Daily Tarot Reading Page is built around an original six-card symbolic deck, so you can repurpose it as an oracle deck, affirmation draw or journaling prompt by rewriting the card records, meanings and prompts and setting REFLECTION_FOCUS to your themes. Keep the entertainment-only disclaimer visible and keep the copy non-predictive; the shuffle, flip and saved daily draw work the same way.

### What should I change first in the Daily Tarot Reading Page template?
Start with the five variables: set BRAND, TAGLINE, AUDIENCE, DECK_NAME and REFLECTION_FOCUS to your own values, then rewrite the six card records and their upright and reversed meanings so the interpretations match your themes. After that, adjust the colors and fonts if your brand differs, and check the fanned deck and reading table on a phone before publishing.

### How do I build a daily tarot reading page with AI?
Copy the prompt from this page or run npx vibefather add daily-tarot-reading-page, replace [BRAND], [TAGLINE], [AUDIENCE] and [DECK_NAME] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Daily Tarot Reading Page demo?
The Night Field Deck case was built by Kimi K3.1 Pro in Kimi Code; the Quiet Hours Deck case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Daily Tarot Reading Page template use?
Daily Tarot Reading Page is a single-page site built with React, with 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Daily Tarot Reading Page template for a client or a business?
The Daily Tarot Reading Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Daily Tarot Reading Page template work on mobile?
Yes. Every Daily Tarot Reading Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Daily Tarot Reading Page on VibeFather](https://vibefather.ai/templates/daily-tarot-reading-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
