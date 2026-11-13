# Nonprofit Donation Page

> An editorial fundraising page with a live donation meter, an impact slider and a validated volunteer form.

<a href="https://vibefather.ai/templates/nonprofit-donation-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/driftline/e0eafca1-2a9d-4df2-936a-c9d46d00715e/webp.2c61d49b00.webp" width="100%" alt="Nonprofit Donation Page — Nonprofit Donation Page with Impact Slider built by Claude Opus 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/nonprofit-donation-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

Driftline is a single-page fundraising site for a small community campaign, built to read like a documentary feature rather than a software landing page. The default content follows an invented volunteer crew raising money to clear litter from a four-kilometre stretch of river, but the structure works for any local cause with a goal, a track record and a call for helpers: tree planting, a community garden, a library appeal or a beach restoration. The page opens with a large serif headline beside a line-drawn map of the stretch, then moves through a donation meter that fills toward the goal with milestone ticks, a ledger of big figures that count up as they scroll into view, and an impact calculator where a slider turns a gift into concrete outcomes, such as bags of litter removed and metres of bank cleared. A vertical timeline tells the story of past seasons with short dispatches and small line drawings, followed by a volunteer sign-up form with inline validation and a ticket-style confirmation, a plain-spoken FAQ and a closing donate band. The palette is warm paper, deep river teal and silt brown, with a single orange accent kept for donate actions and the meter fill. Fraunces sets the headlines and numbers, Public Sans the body and IBM Plex Mono the captions and section numbers, all self-hosted. Every illustration is drawn in SVG, so there are no photos to license or replace. It suits nonprofits, neighbourhood groups and organisers who want a campaign page that feels credible and calm. To adapt it, change the brand, cause, place, goal and impact rate; the calculator maths, meter and copy all read from one content file, and nothing is ever submitted to a server.

| | |
|---|---|
| Category | [Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Cursor |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/nonprofit-donation-page?case=e0eafca1-2a9d-4df2-936a-c9d46d00715e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/driftline/e0eafca1-2a9d-4df2-936a-c9d46d00715e/shot_desktop.81d0668f91.webp" width="100%" alt="Nonprofit Donation Page — River clean-up campaign, built by Claude Opus 5.5 in Cursor"></a><br>
<b>River clean-up campaign</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/nonprofit-donation-page?case=e0eafca1-2a9d-4df2-936a-c9d46d00715e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/nonprofit-donation-page?case=eacd0bbb-90eb-4bdb-9165-c4eb846e01cd&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/driftline/eacd0bbb-90eb-4bdb-9165-c4eb846e01cd/shot_desktop.5c9b497764.webp" width="100%" alt="Nonprofit Donation Page — Street tree planting, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Street tree planting</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/nonprofit-donation-page?case=eacd0bbb-90eb-4bdb-9165-c4eb846e01cd&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Organisation name | Fernmouth River Crew |
| `[CAUSE]` | What the campaign does | clearing litter from the banks of the River Fern |
| `[PLACE]` | Town or area | Ashby Vale |
| `[GOAL]` | Fundraising goal | $48,000 |
| `[IMPACT_RATE]` | What one unit of money achieves | Every $12 removes 1 bag of litter and clears 2 metres of riverbank |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add nonprofit-donation-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A neighbourhood tree-planting group: set BRAND and PLACE to your area, make CAUSE planting street trees, and rewrite IMPACT_RATE so each gift maps to trees planted and streets shaded.
- A community garden appeal: point GOAL at your raised beds or tool shed, swap the river map for a plot plan, and change the timeline to past growing seasons and work days.
- A small library fundraising committee: set CAUSE to restoring the reading room, use the ledger for books added and hours open, and reword the volunteer form for shelving shifts.
- A beach restoration crew: change PLACE to your coastline, adjust IMPACT_RATE to kilos of waste collected and metres of dune cleared, and rewrite the dispatches for past clean-up days.

## FAQ

### How does the donation meter on the Nonprofit Donation Page work?
The Nonprofit Donation Page shows a meter that fills toward your GOAL and carries milestone ticks at 25, 50, 75 and 100 percent. The starting raised total and donor count live in the content file, and when someone pledges through the impact calculator the meter moves to the new total without a page reload. No payment is taken and nothing is sent to a server.

### How do I change the impact rate so the slider shows my own cause's outcomes?
Set IMPACT_RATE in the content file to one price and two outcomes, for example a fixed amount that removes one bag of litter and clears two metres of riverbank. The impact calculator then multiplies whatever the visitor picks on the slider by that rate and writes both outcomes in plain language, so the numbers stay consistent with your meter and copy.

### What do I need to change first to turn this into my own campaign page?
Change the five variables first: BRAND for the organisation name, CAUSE for what the campaign does, PLACE for the town or area, GOAL for the fundraising target and IMPACT_RATE for what a gift achieves. Then rewrite the hero, meter captions, timeline entries, volunteer form options and FAQ in the same content file so the copy matches your cause.

### Does the volunteer sign-up form send details anywhere?
No. The volunteer form on the Nonprofit Donation Page validates fields in the browser and shows a ticket-style confirmation, but nothing is submitted to a server or stored. To collect real sign-ups you connect the form to your own mailing list or form service, or point people to an email address and phone number you control.

### Where do the illustrations come from, and do I need photos?
Every illustration on the Nonprofit Donation Page is drawn in SVG inside the template, including the river map, the vignettes in the timeline, the bag glyph and the check stamp. There are no photographs to license or replace. You can keep the drawings as they are or adjust the map and vignettes to match your place and cause.

### How do I build a nonprofit donation page with AI?
Copy the prompt from this page or run npx vibefather add nonprofit-donation-page, replace [BRAND], [CAUSE], [PLACE] and [GOAL] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Nonprofit Donation Page demo?
The River clean-up campaign case was built by Claude Opus 5.5 in Cursor; the Street tree planting case was built by Claude Opus 5.5 in Cursor. Each build used the published prompt with nothing added.

### What tech stack and pages does the Nonprofit Donation Page template use?
Nonprofit Donation Page is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Nonprofit Donation Page template for a client or a business?
The Nonprofit Donation Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Nonprofit Donation Page template work on mobile?
Yes. Every Nonprofit Donation Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) · [Nonprofit Donation Page on VibeFather](https://vibefather.ai/templates/nonprofit-donation-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
