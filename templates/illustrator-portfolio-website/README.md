# Illustrator Portfolio Website

> Illustrator portfolio with a filterable gouache gallery, process pages, a print shop and a commission form.

<a href="https://vibefather.ai/templates/illustrator-portfolio-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/illustrator-portfolio-website/55d5dd58-3fd6-4585-80c0-dd40b90ac24a/webp.46ec3f8f8f.webp" width="100%" alt="Illustrator Portfolio Website — Gouache-and-Ink Illustrator Portfolio built by GLM-5.4 and Kimi K3.1 Pro"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/illustrator-portfolio-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A portfolio for an illustrator whose work has to be seen rather than described. The home page opens on one large gouache painting set against a tomato-red block, with a hand-lettered headline underlined in teal, then moves into a gallery of finished pieces that filters by client type: books, editorial, packaging and murals. Clicking any piece opens a lightbox that shows how it was made, from the first thumbnail boxes and pencil lines to the colour rough and the final painting, so an art director understands the process without reading a long case study. Each project has its own page with the brief, the four stages, the medium, the size and the invented client. A small shop sells signed prints in three sizes with a cart drawer that remembers itself between visits and a free-shipping meter, and the commission form collects what an illustrator actually needs in order to quote: project type, budget, deadline and usage rights. The about page is anchored by a studio photograph taken from behind, with a short bio and a list of working habits. The palette is warm paper, tomato, teal and ink; the type pairs a hand-lettered display face with a plain text face; and every illustration comes from one gouache-and-ink set, with thumbnails, pencil lines and colour roughs derived from the finished artwork in code rather than stored as extra files. To make it yours, change the illustrator's name, city, hero title and specialty; swap in your own artwork under the same file names; and adjust the print prices and rate guide in the content file. Layout, colors and motion stay as described, and everything is static and runs in the browser.

| | |
|---|---|
| Category | [E-commerce & Product Pages](../../README.md#e-commerce--product-pages) |
| Site type | [E-commerce](../../types/ecommerce.md), [Portfolio](../../types/portfolio.md) |
| Style | [Playful](../../styles/playful.md), [Editorial](../../styles/editorial.md), [Hand-drawn](../../styles/hand-drawn.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 5 |
| Built with | [GLM-5.4](../../models/glm-5-4.md) in ZCode, [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/illustrator-portfolio-website?case=55d5dd58-3fd6-4585-80c0-dd40b90ac24a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/illustrator-portfolio-website/55d5dd58-3fd6-4585-80c0-dd40b90ac24a/shot_desktop.966bbfa7cb.webp" width="100%" alt="Illustrator Portfolio Website — Picture-book illustrator, built by GLM-5.4 in ZCode"></a><br>
<b>Picture-book illustrator</b><br>
<sub>Built by <b>GLM-5.4</b> in ZCode · <a href="https://vibefather.ai/templates/illustrator-portfolio-website?case=55d5dd58-3fd6-4585-80c0-dd40b90ac24a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/illustrator-portfolio-website?case=c4b0242c-7a1f-4f53-a4b3-abc4b9e90a37&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/illustrator-portfolio-website/c4b0242c-7a1f-4f53-a4b3-abc4b9e90a37/shot_desktop.9a87c29553.webp" width="100%" alt="Illustrator Portfolio Website — Packaging and mural illustrator, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Packaging and mural illustrator</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/illustrator-portfolio-website?case=c4b0242c-7a1f-4f53-a4b3-abc4b9e90a37&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Illustrator's name | Wren Kowalski |
| `[CITY]` | Studio city | Asheville |
| `[HERO_TITLE]` | Title of the hero artwork | The Lighthouse Keeper's Lunch |
| `[SPECIALTY]` | One-line specialty | picture books and editorial |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add illustrator-portfolio-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A children's book illustrator: set BRAND and CITY, swap the five paintings for your spreads, and keep the Books filter so editors land on picture-book work first.
- A surface and packaging designer: retitle the filter chips to Packaging and Labels, set SPECIALTY to packaging, and point the commission form at your rate card.
- A muralist working with councils and developers: keep the Murals filter, replace the studio photo with a wall in progress, and add site photos to the project pages.
- A print-selling illustrator: raise the three print sizes in the content file, reword the free-shipping meter, and link the cart to your own checkout.

## FAQ

### How do I swap in my own illustrations without breaking the gallery and process views?
The Illustrator Portfolio Website template derives thumbnails, pencil lines and colour roughs from each finished artwork in code, so replacing an image means keeping the same file names under public/images. Put your own gouache paintings in place of hero-lighthouse, book-bear, editorial-kitchen, packaging-jam and mural-birds, and the lightbox process stages rebuild themselves from the new files. Update the titles, type tags and alt text in the content file.

### How does the process lightbox work for art directors who want to see the sketches?
Clicking any gallery tile in the Illustrator Portfolio Website opens a lightbox with the finished painting on the left and a Process panel on the right. The panel has four tabs: Thumbnail, Pencil, Colour rough and Final. The pencil stage is the finished artwork run through an inline filter that turns it grayscale and traces edges, so you do not need to photograph or store separate sketch files for each piece.

### Can I sell signed prints from this template and does the cart remember what a visitor added?
The Illustrator Portfolio Website template includes a small print shop with signed prints in three sizes, a size picker and a cart drawer. The cart saves to the browser under a key built from your illustrator name, so it survives a page reload and a return visit on the same device. Print prices and titles live in the content file, where you can change them. There is no payment backend, so checkout is a placeholder you connect to your own store.

### What fields does the commission form collect and can I change them?
The commission form on the Illustrator Portfolio Website collects project type, budget, deadline and usage rights, which are the details an illustrator needs to quote a job. The form options and the rate guide sit in the content file as typed objects, so you can add a project type, change the budget bands or reword the usage-rights choices without touching the layout. The form is static, so you point it at your own form endpoint or email.

### What should I change first to make the Illustrator Portfolio Website mine?
Start with the four variables: set BRAND to your name, CITY to your studio city, SPECIALTY to your one-line focus and HERO_TITLE to the name of your lead artwork. Then replace the five gallery images under the same file names, rewrite the bio and working habits on the about page, and adjust print prices and the rate guide in the content file. Layout, colours and motion stay as described.

### How do I build an illustrator portfolio website with AI?
Copy the prompt from this page or run npx vibefather add illustrator-portfolio-website, replace [BRAND], [CITY], [HERO_TITLE] and [SPECIALTY] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Illustrator Portfolio Website demo?
The Picture-book illustrator case was built by GLM-5.4 in ZCode; the Packaging and mural illustrator case was built by Kimi K3.1 Pro in Kimi Code. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Illustrator Portfolio Website template use?
Illustrator Portfolio Website is a 5-page site built with Motion, React and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Illustrator Portfolio Website template for a client or a business?
The Illustrator Portfolio Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Illustrator Portfolio Website template work on mobile?
Yes. Every Illustrator Portfolio Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More E-commerce & Product Pages](../../README.md#e-commerce--product-pages) · [Illustrator Portfolio Website on VibeFather](https://vibefather.ai/templates/illustrator-portfolio-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
