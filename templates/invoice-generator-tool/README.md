# Invoice Generator Tool

> Build, preview, and print polished invoices with reusable client details saved in your browser.

<a href="https://vibefather.ai/templates/invoice-generator-tool?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/invoice-generator-tool/3a45724d-d60f-400b-9903-4a7008d54d67/webp.cf8885ef76.webp" width="100%" alt="Invoice Generator Tool — Invoice App with Live Preview built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/invoice-generator-tool?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

Invoice Generator Tool is a single-page workspace for freelancers and small teams that need a polished invoice without setting up an account. The left column gathers business details, client information, invoice metadata, line items, tax, and discounts. The right column is a live document preview, so every edit appears exactly where it will print. A currency selector handles formatting locally, and the interface makes clear that changing currency never performs an exchange-rate conversion.

The visual design pairs a warm gray application canvas with a crisp white invoice sheet. Source Serif 4 gives the document an editorial character, while Inter keeps dense form controls easy to scan and IBM Plex Mono aligns quantities, rates, and totals. Deep green actions, fine rules, compact labels, and restrained motion make the tool feel focused rather than decorative.

The template includes local logo upload, reusable saved clients, automatic draft persistence, line-item totals, fixed or percentage discounts, and a print stylesheet that isolates the invoice for browser printing or saving as PDF. On smaller screens, Edit and Preview tabs keep the workflow usable without squeezing two columns together.

Adapt the generator’s brand, sample issuer, client, location, service type, and starting currency through six variables. The sample content moves from a design studio invoice to bicycle repair services in the alternate case, demonstrating that the same layout supports different businesses. Because the preview and editor share one state, the printed document always reflects the latest visible changes. Everything runs in the browser with localStorage; there is no backend, cloud sync, payment collection, or external rate service.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [App](../../types/app.md) |
| Style | [Minimal](../../styles/minimal.md), [Swiss](../../styles/swiss.md), [Editorial](../../styles/editorial.md) |
| Effects | Micro-interactions |
| Stack | Vite 6 + React 19 + TypeScript + Tailwind CSS 4.1 + lucide-react |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/invoice-generator-tool?case=3a45724d-d60f-400b-9903-4a7008d54d67&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/invoice-generator-tool/3a45724d-d60f-400b-9903-4a7008d54d67/shot_desktop.0f37c1b30f.webp" width="100%" alt="Invoice Generator Tool — Design studio invoice, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Design studio invoice</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/invoice-generator-tool?case=3a45724d-d60f-400b-9903-4a7008d54d67&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/invoice-generator-tool?case=d0ebb219-af6f-4c79-953a-942eb55e43e5&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/invoice-generator-tool/d0ebb219-af6f-4c79-953a-942eb55e43e5/shot_desktop.8c007ea66e.webp" width="100%" alt="Invoice Generator Tool — Bicycle repair invoice, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Bicycle repair invoice</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/invoice-generator-tool?case=d0ebb219-af6f-4c79-953a-942eb55e43e5&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Generator brand | Tallyfold |
| `[ISSUER_NAME]` | Sample issuer | Hearth & Field Studio |
| `[ISSUER_LOCATION]` | Issuer location | Portland, Oregon |
| `[CLIENT_NAME]` | Sample client | Moss & Marker Workshop |
| `[SERVICE_TYPE]` | Service type | brand design services |
| `[CURRENCY]` | Starting currency | USD |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add invoice-generator-tool` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A solo design studio: set [BRAND] to your studio name, [ISSUER_NAME] to your practice, and rewrite the sample line items around [SERVICE_TYPE] so the first invoice reads like your own work.
- A bicycle repair shop: use the alternate case, set [ISSUER_LOCATION] to your town, change [SERVICE_TYPE] to repairs and servicing, and edit the line items to parts, labour and tune-ups.
- A freelance consultant: keep the minimal layout, set [CLIENT_NAME] to a sample client in your field, and adjust the notes and payment terms to match your usual contract wording.
- A small agency billing in another market: set [CURRENCY] to EUR, GBP, CAD, AUD or JPY and confirm the totals block rounds cleanly before you send the invoice.

## FAQ

### How do I change the currency on the Invoice Generator Tool template?
Set the CURRENCY variable to the ISO code you want the invoice to start in: USD, EUR, GBP, CAD, AUD or JPY. The selector in the editor switches between those codes and reformats every amount at that currency's precision. The template states plainly that changing currency does not perform an exchange-rate conversion, so the numbers stay as entered.

### Where does the Invoice Generator Tool store invoices and client details?
The Invoice Generator Tool template saves everything in your browser's localStorage. The current draft, the uploaded logo and saved clients are kept under separate versioned keys, and the draft persists automatically after a short debounce with a status pill that reads Saved locally. There is no backend, no cloud sync and no account, so data stays on the device where it was entered.

### How do I print an invoice or save it as a PDF from this template?
The Print / Save PDF button in the app header calls the browser's own print dialog. A dedicated print stylesheet isolates the white invoice sheet and hides the editor, so the printed page shows only the document. Choose your printer or the save-as-PDF destination in that dialog. The template does not download a file directly or generate the PDF itself.

### Can the Invoice Generator Tool handle tax and discounts on line items?
The Invoice Generator Tool template calculates line-item totals, applies fixed or percentage discounts, and adds tax on top. Discounts are applied before tax, and tax is rounded once at the selected currency's precision. Amounts are stored in integer minor units, so the live preview and the printed invoice never show NaN, negative totals or stale figures.

### What do I change first to make this invoice generator fit my own business?
Start with the six variables: BRAND for the generator name, ISSUER_NAME and ISSUER_LOCATION for your business and city, CLIENT_NAME for the sample client, SERVICE_TYPE for the trade the sample line items describe, and CURRENCY for your starting code. Then rewrite the sample line items, addresses and notes so they stay coherent with your service type.

### How do I build an invoice generator tool with AI?
Copy the prompt from this page or run npx vibefather add invoice-generator-tool, replace [BRAND], [ISSUER_NAME], [ISSUER_LOCATION] and [CLIENT_NAME] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Invoice Generator Tool demo?
The Design studio invoice case was built by Kimi K3.1 Pro in Kimi Code; the Bicycle repair invoice case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Invoice Generator Tool template use?
Invoice Generator Tool is a single-page site built with Tailwind CSS and React, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Invoice Generator Tool template for a client or a business?
The Invoice Generator Tool prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Invoice Generator Tool template work on mobile?
Yes. Every Invoice Generator Tool build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Invoice Generator Tool on VibeFather](https://vibefather.ai/templates/invoice-generator-tool?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
