# Swiss Design Agency Portfolio

> Swiss-style agency portfolio on a strict 12-column grid, with morphing case-study page transitions.

<a href="https://vibefather.ai/templates/swiss-design-agency-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/gridline/2d68caf9-8ad0-44b7-8c9d-36f9c0b45125/webp.43f6d0e5d2.webp" width="100%" alt="Swiss Design Agency Portfolio — Swiss Style Design Agency Portfolio Template with 12-Column Grid and Case Study Page built by Claude Opus 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/swiss-design-agency-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Gridline is a two-page portfolio template for a small design studio, built in the International Typographic Style. It has a home page with a numbered project index and a case-study page that reads its content from the URL, so six projects share one detail template. Every element sits on a 12-column grid. You can show that grid at any time with a header toggle or the G key, which helps when you adapt the layout.

It suits graphic design studios, architecture practices, type foundries, exhibition designers and any small team that wants its work to look ordered. The palette is three colours: white, near-black ink and one signal red. Red appears in a few places only: blocks, the large case-study numerals, row hovers and a full-bleed principles band. Headlines are set in Inter Tight at up to fifteen percent of the viewport width, tightly tracked and flush left. A small layer of IBM Plex Mono captions sits underneath. Hairline rules and section numbers are the only ornament, and every image is a geometric SVG composition drawn in code, so the template ships with no photographs.

The motion supports the content. Headlines rise line by line through masks, rules draw in from the left and figures open with a clip reveal. When you click a project row, its number and title morph into the hero of the case study using cross-document View Transitions. Browsers without support get a red wipe made with Motion. Reduced-motion settings turn all of this off.

To adapt it, change the brand, city, discipline, featured project and contact email. The prompt then tells your coding agent to rewrite the copy in one content file, including the six projects and their case-study text. The stack is Vite, vanilla TypeScript, Tailwind CSS and Motion, with self-hosted fonts and static output.

| | |
|---|---|
| Category | [Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) |
| Site type | [Agency](../../types/agency.md), [Portfolio](../../types/portfolio.md) |
| Style | [Swiss](../../styles/swiss.md), [Minimal](../../styles/minimal.md) |
| Effects | Text Animation, Page Transitions, Scroll Animation |
| Stack | Vite 5 + vanilla TypeScript + Tailwind CSS 3.4 + motion |
| Pages | 2 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Cursor |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/swiss-design-agency-portfolio?case=2d68caf9-8ad0-44b7-8c9d-36f9c0b45125&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/gridline/2d68caf9-8ad0-44b7-8c9d-36f9c0b45125/shot_desktop.5738fd16e8.webp" width="100%" alt="Swiss Design Agency Portfolio — Graphic design studio, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Graphic design studio</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/swiss-design-agency-portfolio?case=2d68caf9-8ad0-44b7-8c9d-36f9c0b45125&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/swiss-design-agency-portfolio?case=574065d4-90d7-4b93-8359-f78f9caac988&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/gridline/574065d4-90d7-4b93-8359-f78f9caac988/shot_desktop.7823a352d8.webp" width="100%" alt="Swiss Design Agency Portfolio — Architecture practice, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Architecture practice</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/swiss-design-agency-portfolio?case=574065d4-90d7-4b93-8359-f78f9caac988&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Studio name | Ostrand |
| `[CITY]` | Studio city | Basel |
| `[DISCIPLINE]` | What the studio does | Identity, editorial and wayfinding design |
| `[FEATURED_PROJECT]` | Featured project (case 01) | Halle Nord Transit Signage |
| `[CONTACT_EMAIL]` | Contact email | studio@ostrand.example |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add swiss-design-agency-portfolio` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An architecture practice: set BRAND and CITY to your studio, rewrite DISCIPLINE around buildings and urban studies, and replace the six projects with built work and competition entries.
- A type foundry: set FEATURED_PROJECT to a flagship release, swap the case-study system sections for specimen notes, and change the SVG compositions to letterform studies.
- A freelance exhibition designer: set BRAND to your own name, narrow DISCIPLINE to exhibition and spatial design, and use the case-study results rows for venue, dates and attendance figures.
- A transit authority design team: set CONTACT_EMAIL to a public enquiries address, keep the wayfinding featured project, and rewrite the principles band as your signage standards.

## FAQ

### How do I change the studio name, city and discipline in the Swiss Design Agency Portfolio template?
The Swiss Design Agency Portfolio template takes five variables: BRAND, CITY, DISCIPLINE, FEATURED_PROJECT and CONTACT_EMAIL. Set them in the prompt before you hand it to your coding agent, and the prompt instructs the agent to rewrite all copy in one content file, including the six projects and their case-study text. Keep the structure, counts and approximate lengths so the grid and type scale still hold.

### How does the numbered project index work if I want to show more or fewer than six case studies?
The Swiss Design Agency Portfolio lists six numbered case studies as ruled rows on the home page, and the case-study page reads the project from the URL, so six projects share one detail template. Each project is an object with an id from 01 to 06. Adding or removing projects means editing that list and the matching case-study copy in the content file; unknown or missing URL values fall back to project 01.

### What does the show-grid toggle and the G key do in this Swiss-style portfolio?
The Swiss Design Agency Portfolio places every element on a 12-column grid, and a header toggle or the G key reveals that grid as a tinted overlay with red column edges. It is a working aid: switch it on while you adapt the layout to check that headlines, rules and figures sit on columns, then switch it off before you publish. Visitors see a clean page by default.

### Are there photographs in the Swiss Design Agency Portfolio, and how do I replace the artwork?
The Swiss Design Agency Portfolio ships with no photographs. Every image is a geometric SVG composition drawn in code, chosen per project from a set of named compositions, so the page loads without photo assets. To change the look, edit the composition code or point each project at a different composition in the content file; the palette stays white, near-black ink and signal red.

### How do the case-study page transitions and reduced-motion settings behave in the Swiss Design Agency Portfolio?
Clicking a project row in the Swiss Design Agency Portfolio morphs its number and title into the case-study hero using cross-document View Transitions, with a full-screen red wipe made with Motion as the fallback in browsers without support. Headlines rise line by line, rules draw in from the left and figures open with a clip reveal. Reduced-motion settings turn all of this off.

### How do I build a swiss design agency portfolio with AI?
Copy the prompt from this page or run npx vibefather add swiss-design-agency-portfolio, replace [BRAND], [CITY], [DISCIPLINE] and [FEATURED_PROJECT] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Swiss Design Agency Portfolio demo?
The Graphic design studio case was built by Claude Opus 5.5 in Cursor; the Architecture practice case was built by Claude Opus 5.5 in Cursor. Each build used the published prompt with nothing added.

### What tech stack and pages does the Swiss Design Agency Portfolio template use?
Swiss Design Agency Portfolio is a 2-page site built with Motion, Plain HTML and Tailwind CSS, with text animation, page transitions and scroll animation. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Swiss Design Agency Portfolio template for a client or a business?
The Swiss Design Agency Portfolio prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Swiss Design Agency Portfolio template work on mobile?
Yes. Every Swiss Design Agency Portfolio build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) · [Swiss Design Agency Portfolio on VibeFather](https://vibefather.ai/templates/swiss-design-agency-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
