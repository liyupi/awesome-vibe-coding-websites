# Painter Portfolio and Print Shop

> A tactile artist portfolio with series galleries, artwork pages, and an interactive archival print shop.

<a href="https://vibefather.ai/templates/painter-portfolio-and-print-shop?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/painter-portfolio-and-print-shop/4679ba66-293e-4438-baa9-8729f597243a/webp.10430ec529.webp" width="100%" alt="Painter Portfolio and Print Shop — Painter Portfolio with Gallery and Print Shop built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/painter-portfolio-and-print-shop?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Painter Portfolio and Print Shop is a multi-page website for artists who want their work and their store to share the same visual language. It suits painters, mixed-media artists, and illustrators selling originals, archival prints, or commissioned pieces. The default example follows an invented coastal abstract painter, while an alternate set of variables shifts the story to a desert botanical practice without changing the layout.

The design pairs warm paper tones and deep forest ink with expressive, full-color artwork. Fraunces headings, Manrope body copy, and monospaced catalog details create a gallery-like editorial rhythm. Asymmetric grids, fine rules, square corners, and generous margins keep the interface quiet without making it generic. A working studio photograph gives the first screen a human presence, and five original abstract artworks supply a coherent visual collection.

The gallery can be filtered by series and opened in a keyboard-accessible lightbox. Artwork pages include media, dimensions, availability, pricing, shipping notes, and related pieces. In the print shop, visitors choose a size and frame, see the preview and price update, then add the configuration to a persistent cart. The cart supports quantities, removal, shipping totals, and a clearly labeled mock checkout. A structured commissions page explains the process and collects room dimensions, palette preferences, budget, and timing through a validated client-side form.

React and TypeScript keep catalog and cart state predictable, while Tailwind CSS and Motion handle the responsive layout and restrained transitions. All imagery, fonts, and icons are local. Content and variable values live in one file, so an artist can replace names, statements, series, artwork metadata, prices, and contact details without restructuring components. The result is a practical foundation for a working artist, not just a visual gallery.

| | |
|---|---|
| Category | [E-commerce & Product Pages](../../README.md#e-commerce--product-pages) |
| Site type | [Portfolio](../../types/portfolio.md), [E-commerce](../../types/ecommerce.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript 5 + Tailwind CSS 3.4 + vanilla CSS + motion + lucide-react |
| Pages | 6 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/painter-portfolio-and-print-shop?case=4679ba66-293e-4438-baa9-8729f597243a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/painter-portfolio-and-print-shop/4679ba66-293e-4438-baa9-8729f597243a/shot_desktop.ca2292e1ff.webp" width="100%" alt="Painter Portfolio and Print Shop — Coastal abstract painter, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Coastal abstract painter</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/painter-portfolio-and-print-shop?case=4679ba66-293e-4438-baa9-8729f597243a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/painter-portfolio-and-print-shop?case=00492990-63c4-4d37-87ec-d439acd8bc8e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/painter-portfolio-and-print-shop/00492990-63c4-4d37-87ec-d439acd8bc8e/shot_desktop.3e1eb72d63.webp" width="100%" alt="Painter Portfolio and Print Shop — Desert botanical painter, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Desert botanical painter</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/painter-portfolio-and-print-shop?case=00492990-63c4-4d37-87ec-d439acd8bc8e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Studio or shop name | Mara Vale Studio |
| `[ARTIST_NAME]` | Artist name | Mara Vale |
| `[ARTWORK_THEME]` | Artistic theme | Coastal Abstractions |
| `[LOCATION]` | Studio location | Portland, Maine |
| `[AUDIENCE]` | Primary audience | Collectors and design-led homeowners |
| `[CONTACT_EMAIL]` | Contact email | hello@maravale.example |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add painter-portfolio-and-print-shop` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A ceramicist selling small-batch vessels: set ARTWORK_THEME to glazed stoneware, replace print sizes with vessel dimensions, and rename series after firing techniques.
- A landscape photographer offering archival prints: keep the print shop, set ARTWORK_THEME to regional landscapes, and swap painting stories for location notes in each artwork record.
- An illustrator taking editorial commissions: point the commissions form at your client list, set AUDIENCE to art directors, and replace originals with licensed artwork entries.
- A printmaker running an open studio: set LOCATION to your studio, use the studio section for visiting hours, and link the gallery to your current edition series.

## FAQ

### How does the print shop work in the Painter Portfolio and Print Shop template?
The Painter Portfolio and Print Shop template lets visitors pick a size and frame on a print page, see the preview and price update, then add that configuration to a persistent cart. The cart keeps quantities, supports removal, calculates shipping totals, and ends in a clearly labeled mock checkout. Available originals are limited to one each, while prints allow up to six per configuration.

### Can visitors filter the gallery by series and view artworks in a lightbox?
The Painter Portfolio and Print Shop template includes a series-filtered gallery that reflows cleanly when a filter is chosen. Any artwork can be opened in a keyboard-accessible lightbox with next and previous controls that crossfade between pieces. Filtered items fade in over a short transition, and the layout stays stable so the artwork remains the focus.

### What does the commissions page collect, and is the form validated?
The commissions page in the Painter Portfolio and Print Shop template explains the process and includes a client-side validated form. It collects room dimensions, palette preferences, budget, and timing, so an artist receives a structured brief rather than a vague email. The form runs entirely in the browser with no backend, matching the template's static build.

### What should I change first after downloading the Painter Portfolio and Print Shop template?
Start with the variables in the content file: BRAND, ARTIST_NAME, ARTWORK_THEME, LOCATION, AUDIENCE, and CONTACT_EMAIL. Then replace the artist statement, series names, artwork metadata, prices, and shipping notes with your own. All copy, image paths, and links live in one content file, so you can swap the invented coastal painter for your practice without touching the layout or components.

### Is the Painter Portfolio and Print Shop template free, and can I use it commercially?
The Painter Portfolio and Print Shop template is free. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial use, client work, and access to the full prompt and demo source code require Pro membership. The template shows its brief, stack, and variables publicly on the page.

### How do I build a painter portfolio and print shop with AI?
Copy the prompt from this page or run npx vibefather add painter-portfolio-and-print-shop, replace [BRAND], [ARTIST_NAME], [ARTWORK_THEME] and [LOCATION] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Painter Portfolio and Print Shop demo?
The Coastal abstract painter case was built by Kimi K3.1 Pro in Kimi Code; the Desert botanical painter case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Painter Portfolio and Print Shop template use?
Painter Portfolio and Print Shop is a 6-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Painter Portfolio and Print Shop template for a client or a business?
The Painter Portfolio and Print Shop prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Painter Portfolio and Print Shop template work on mobile?
Yes. Every Painter Portfolio and Print Shop build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More E-commerce & Product Pages](../../README.md#e-commerce--product-pages) · [Painter Portfolio and Print Shop on VibeFather](https://vibefather.ai/templates/painter-portfolio-and-print-shop?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
