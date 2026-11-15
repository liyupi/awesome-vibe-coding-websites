# SaaS App Dashboard Starter <sup>PRO</sup>

> A working analytics app with onboarding, account tables, team settings, keys, and local billing flows.

<a href="https://vibefather.ai/templates/saas-app-dashboard-starter?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/saas-app-dashboard-starter/aa4ad3fa-4a25-4da0-b2db-41b21e198663/webp.9c92615049.webp" width="100%" alt="SaaS App Dashboard Starter — Cobalt Analytics Dashboard and App Shell built by GPT-6 Astra"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/saas-app-dashboard-starter?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

This dashboard starter covers the screens a subscription product needs after someone signs in. It opens inside a fictional analytics workspace, with a populated overview, comparison charts, account health, and useful next actions. Founders and developers can explore the complete flow before connecting their own services.

The layout balances a quiet white and slate foundation with confident cobalt and signal orange. A large chart gives the first screen its visual focus, while precise typography, compact controls, and consistent borders keep dense information readable. The dark theme carries the same hierarchy into deep slate surfaces. Charts, product marks, and interface artwork are drawn in code, so the design has no dependency on remote images.

The account directory includes combined search and filters, selectable columns, pagination, bulk operations, and a detailed account drawer. A workspace switcher changes the underlying sample data. Keyboard search connects navigation and account results, while a notifications drawer leads to relevant actions. Settings cover profile editing, member roles, pending invitations, local demo API keys, plan selection, usage, and invoice downloads.

Sign-in, sign-up, and password reset screens have explicit validation. A four-step onboarding flow collects a workspace name, teammates, and integration choices before opening the app. Every simulated external operation passes through one adapter file. Browser storage preserves changes, with an in-memory fallback when storage is unavailable. No real email, payment, or authentication service is called.

Change the brand, workspace, audience, measurement focus, and owner to make another analytics product. Copy and sample records stay together, and both themes remain consistent across screens. On phones, navigation becomes a drawer and detailed tables use a contained scroll area. Empty results always offer a useful recovery action.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Dashboard](../../types/dashboard.md), [SaaS](../../types/saas.md) |
| Style | [Dark](../../styles/dark.md), [Minimal](../../styles/minimal.md) |
| Effects | Page Transitions, Micro-interactions |
| Stack | Vite + React + TypeScript + Vanilla CSS + lucide-react |
| Pages | 11 |
| Built with | [GPT-6 Astra](../../models/gpt-6-astra.md) in Codex |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/saas-app-dashboard-starter?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/saas-app-dashboard-starter?case=aa4ad3fa-4a25-4da0-b2db-41b21e198663&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/saas-app-dashboard-starter/aa4ad3fa-4a25-4da0-b2db-41b21e198663/shot_desktop.749b8fb899.webp" width="100%" alt="SaaS App Dashboard Starter — Subscription product analytics, built by GPT-6 Astra in Codex"></a><br>
<b>Subscription product analytics</b><br>
<sub>Built by <b>GPT-6 Astra</b> in Codex · <a href="https://vibefather.ai/templates/saas-app-dashboard-starter?case=aa4ad3fa-4a25-4da0-b2db-41b21e198663&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Product name | Quillmere Analytics |
| `[WORKSPACE]` | Primary workspace | Brindle Research |
| `[AUDIENCE]` | Product audience | Product teams at subscription software companies |
| `[FOCUS]` | Analytics focus | Account engagement and expansion |
| `[OWNER]` | Demo owner | Mira Calder |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/saas-app-dashboard-starter?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A developer tool startup: set [BRAND] to your product, [FOCUS] to API usage and error rates, and rewrite the seeded accounts as customer projects with keys and plan usage.
- A subscription box operator: point [AUDIENCE] at fulfillment teams, rename accounts as subscriber groups, and use the billing and invoice screens for plan and renewal tracking.
- A boutique analytics consultancy: set [WORKSPACE] to a client workspace, adjust [OWNER] and invite members, then use the workspace switcher to separate each client's sample data.
- A founder validating a SaaS idea: keep the onboarding and auth flows, change [AUDIENCE] and [FOCUS] to your market, and swap the seeded accounts for interviews or pilot customers.

## FAQ

### How do I change the brand name and workspace in the SaaS App Dashboard Starter?
Set [BRAND] to your product name and [WORKSPACE] to the organization whose sample data appears on first load. The template derives the brand slug, demo email domain and download filenames from [BRAND], so every matching string, invented record and seeded account is rewritten together. Also update [AUDIENCE], [FOCUS] and [OWNER] so onboarding guidance, metric names and account examples stay coherent.

### Does the SaaS App Dashboard Starter connect to a real backend, payment provider or email service?
No. The SaaS App Dashboard Starter runs entirely in the browser with no backend, server code or external APIs. Every simulated service call, from sign-in and invitations to API keys and plan changes, passes through one local adapter file. Browser storage preserves your changes, with an in-memory fallback when storage is unavailable. Replacing that adapter is the single integration boundary for connecting your own services.

### What screens and flows does the SaaS App Dashboard Starter include after login?
The SaaS App Dashboard Starter covers the screens a subscription product needs after sign-in: a populated overview with comparison charts, an account directory with combined search and filters, a detailed account drawer, a workspace switcher, a notifications drawer, and settings for profile, member roles, pending invitations, demo API keys, plan selection, usage and invoice downloads. Sign-in, sign-up and password reset have explicit validation, and a four-step onboarding flow collects workspace name, teammates and integration choices.

### Can I use the SaaS App Dashboard Starter for a client project or a commercial product?
Commercial and client use of the SaaS App Dashboard Starter requires Pro. The template is a Pro template: its brief, stack and variables are public, the full prompt and the source code of the demos come with Pro membership. Free templates' prompts and every DESIGN.md are licensed for personal, non-commercial use only under CC BY-NC 4.0.

### How do I add my own data or replace the sample accounts in the SaaS App Dashboard Starter?
Edit the seed records in the template's content file, where all visible strings, default variables, chart arrays, plan definitions and invented accounts are kept. The SaaS App Dashboard Starter seeds 36 fictional accounts across Active, Trial and Paused statuses, plus a second workspace with its own set of 12 accounts. Replace those records with your own, then connect the local adapter to your real data source so computed totals, KPI values and exports stay synchronized.

### How do I build a SaaS app dashboard starter with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add saas-app-dashboard-starter, replace [BRAND], [WORKSPACE], [AUDIENCE] and [FOCUS] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the SaaS App Dashboard Starter demo?
The Subscription product analytics case was built by GPT-6 Astra in Codex. Each build used the published prompt with nothing added.

### What tech stack and pages does the SaaS App Dashboard Starter template use?
SaaS App Dashboard Starter is a 11-page site built with React, with page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the SaaS App Dashboard Starter template free to use?
SaaS App Dashboard Starter is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the SaaS App Dashboard Starter template work on mobile?
Yes. Every SaaS App Dashboard Starter build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [SaaS App Dashboard Starter on VibeFather](https://vibefather.ai/templates/saas-app-dashboard-starter?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
