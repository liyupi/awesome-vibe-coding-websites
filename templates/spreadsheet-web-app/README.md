# Spreadsheet Web App <sup>PRO</sup>

> Edit bakery sales, trace ingredient costs and chart a selected range in a working three-sheet workbook.

<a href="https://vibefather.ai/templates/spreadsheet-web-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/spreadsheet-web-app/34950370-0057-4e74-ae3b-25016cc752cd/webp.c23f27a281.webp" width="100%" alt="Spreadsheet Web App — Editable Bakery Spreadsheet Workbook built by GPT-6.2 Astra and Gemini 4 Neon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/spreadsheet-web-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A bakery can sell out of its best loaf and still miss its margin. This workbook brings sales and ingredient costs into the same file so the person closing the shop can follow a figure back to the quantity and price behind it. Open the sales sheet and the first twelve product lines are already filled in. Change the number of loaves sold, then switch to the summary to see what happened to revenue and gross margin.

The workspace keeps the current address and formula in sight while you move through the grid. A green outline identifies the selected cell, and a butter-colored chart above the ribbon shows which products contributed the most revenue. The formula bar suggests functions as you type. Freeze a header before scrolling, flag figures above a threshold, or select a range and turn it into a line, bar or pie chart. Formula errors remain visible where they occur, which makes it easier to investigate a broken reference.

The starting file also works for a shop selling other products. Replace the bakery name and featured item, bring in a quoted CSV and choose the number format for each column. Sales, costs and summary tabs keep the inputs and derived figures together. Workbook edits stay in the browser between visits, and CSV export gives the owner a portable copy of a sheet. On a phone the ledger scrolls inside the workspace while the formula input and sheet switches remain accessible.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Dashboard](../../types/dashboard.md) |
| Style | [Minimal](../../styles/minimal.md) |
| Effects | Drag & Physics, Micro-interactions |
| Stack | Vite + React + CSS |
| Pages | 1 |
| Built with | <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/chatgpt.svg"><img src="https://vibefather.ai/icons/tools/chatgpt.svg" width="13" height="13" alt=""></picture> [GPT-6.2 Astra](../../models/gpt-6-2-astra.md) in Codex, <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/spreadsheet-web-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/spreadsheet-web-app?case=34950370-0057-4e74-ae3b-25016cc752cd&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/spreadsheet-web-app/34950370-0057-4e74-ae3b-25016cc752cd/shot_desktop.f27ea41a0d.webp" width="100%" alt="Spreadsheet Web App — Small bakery books, built by GPT-6.2 Astra in Codex"></a><br>
<b>Small bakery books</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/chatgpt.svg"><img src="https://vibefather.ai/icons/tools/chatgpt.svg" width="12" height="12" alt=""></picture>&nbsp;GPT-6.2 Astra in Codex · <a href="https://vibefather.ai/templates/spreadsheet-web-app?case=34950370-0057-4e74-ae3b-25016cc752cd&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/spreadsheet-web-app?case=967c200e-e802-4f7a-91ad-e44f5c98b64e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/spreadsheet-web-app/967c200e-e802-4f7a-91ad-e44f5c98b64e/shot_desktop.7fedddb82a.webp" width="100%" alt="Spreadsheet Web App — Ceramic studio books, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Ceramic studio books</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/gemini.svg" width="12" height="12" alt="">&nbsp;Gemini 4 Neon in Antigravity · <a href="https://vibefather.ai/templates/spreadsheet-web-app?case=967c200e-e802-4f7a-91ad-e44f5c98b64e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Bakery name | Alderfold Bakery |
| `[WORKBOOK]` | Workbook title | Bakery books |
| `[PRODUCT]` | Featured product | Sesame country loaf |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/spreadsheet-web-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A ceramic studio: set BRAND to the studio name, replace the bakery product lines with glazes and kiln firings, and point the costs sheet at clay and fuel.
- A market stall: use PRODUCT for the best-selling item, import a quoted CSV of weekly sales, and export the summary as CSV for the accountant.
- A coffee roaster: swap the bakery lines for bean blends, flag low-margin bags above a threshold, and chart revenue by roast in the summary tab.
- A freelance bookkeeper: set WORKBOOK to each client's books, keep the three sheets, and hand over a CSV export at month end.

## FAQ

### How do I change the bakery name and featured product in the Spreadsheet Web App template?
The Spreadsheet Web App template uses three variables. Set BRAND to your business name, which appears in the rail as the workbook owner. Set WORKBOOK to your document heading, and PRODUCT to the featured item that opens as the first line in Sales. The copy is written for the defaults, so rewrite any headline or label that mentions the bakery.

### Can I use the Spreadsheet Web App template for a shop that does not sell bread?
Yes. The Spreadsheet Web App template starts with bakery sales, but the three sheets work for any small shop tracking products, costs and margins. Replace BRAND and PRODUCT, bring in a quoted CSV for your own product lines, and choose a number format for each column. The Sales, costs and summary tabs keep your inputs and derived figures together.

### Does the Spreadsheet Web App template save my edits when I close the browser?
Workbook edits in the Spreadsheet Web App template stay in the browser between visits, so the figures you change are still there when you return on the same device. CSV export gives the owner a portable copy of a sheet for a spreadsheet program or a bookkeeper. The template has no backend, so nothing is stored on a server.

### Can I make charts from a selected range in the Spreadsheet Web App template?
Yes. Select a range in the Spreadsheet Web App template and turn it into a line, bar or pie chart. A butter-colored chart above the ribbon shows which products contributed the most revenue. You can also freeze a header before scrolling and flag figures above a threshold, so a total that looks wrong is easy to spot.

### What do I need to change first in the Spreadsheet Web App template before showing it to a client?
Start with the variables in the Spreadsheet Web App template: BRAND for the owner name in the rail, WORKBOOK for the document heading and PRODUCT for the first Sales line. Then replace the twelve sample product lines with the client's own items and check that the costs sheet feeds the summary correctly. Finally, review every headline and label that still mentions the bakery.

### How do I build a spreadsheet web app with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add spreadsheet-web-app, replace [BRAND], [WORKBOOK] and [PRODUCT] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Spreadsheet Web App demo?
The Small bakery books case was built by GPT-6.2 Astra in Codex; the Ceramic studio books case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Spreadsheet Web App template use?
Spreadsheet Web App is a single-page site built with React, with drag & physics and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Spreadsheet Web App template free to use?
Spreadsheet Web App is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Spreadsheet Web App template work on mobile?
Yes. Every Spreadsheet Web App build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Spreadsheet Web App on VibeFather](https://vibefather.ai/templates/spreadsheet-web-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
