# Used Car Dealership Website <sup>PRO</sup>

> A modern graphite-and-yellow dealership site with real inventory filters, a payment calculator and three-car compare.

<a href="https://vibefather.ai/templates/used-car-dealership-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/used-car-dealership-website/b251be65-1825-4174-8904-d8e717428311/webp.0a91c666ac.webp" width="100%" alt="Used Car Dealership Website — Used Car Dealer Site with Calculator built by GLM-5.3"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/used-car-dealership-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

Used Car Dealership Website is a full storefront for an independent used-car dealer — the most app-like template in the local-business family. It ships a 24-car inventory with filters that really work (make, body type, fuel, price, mileage, year, plus sort), a vehicle detail view per car with photo gallery, spec table, inspection highlights and an amortizing payment calculator (price, down payment, term, APR → monthly with the math shown), a three-car compare tray and table, saved cars in localStorage, a trade-in estimator with a sample value range, and an honest four-step financing explainer. The look is showroom restraint: graphite ground, clean white panels and exactly one loud color — signal yellow — reserved for prices, active states and CTAs. Every car is a fictional make and model photographed generically with no badges or plates. It suits any inventory business — boats, RVs, bikes, equipment — after re-pointing the filter list and the photo set. Five variables swap brand, city, owner, phone and years; prices, values and terms are sample data in one content file.

| | |
|---|---|
| Category | [E-commerce & Product Pages](../../README.md#e-commerce--product-pages) |
| Site type | [E-commerce](../../types/ecommerce.md), [Landing Page](../../types/landing-page.md) |
| Style | [Minimal](../../styles/minimal.md), [Bold](../../styles/bold.md) |
| Effects | Page Transitions, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 5 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/used-car-dealership-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/used-car-dealership-website?case=b251be65-1825-4174-8904-d8e717428311&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/used-car-dealership-website/b251be65-1825-4174-8904-d8e717428311/shot_desktop.ea81a65b0e.webp" width="100%" alt="Used Car Dealership Website — Independent dealer, Bellhaven, built by GLM-5.3 in ZCode"></a><br>
<b>Independent dealer, Bellhaven</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/used-car-dealership-website?case=b251be65-1825-4174-8904-d8e717428311&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand | Cedar Row Motors |
| `[CITY]` | City | Bellhaven |
| `[FOUNDER]` | Dealer principal | Ade Owolabi |
| `[PHONE]` | Phone | (555) 833-1277 |
| `[EXPERIENCE]` | Experience | 12 years |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/used-car-dealership-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A boat dealer: set the brand and city, replace the 24 cars with your hulls, swap make and body chips for builder and hull type, and keep the payment calculator for marine financing.
- An RV and camper lot: rewrite the inventory fields as class, length and sleeps, map the photos to your units, and point the trade-in estimator at towables instead of cars.
- An independent bike shop: use the compare table for frame, groupset and wheel size, and change the financing explainer to your own payment plan.
- A used equipment dealer: keep the filters and compare tray, rename the fuel chips to power source, and set the inspection score to your own checklist.

## FAQ

### How does the payment calculator on the Used Car Dealership Website template work?
The Used Car Dealership Website template includes an amortizing payment calculator that prefills the car's price and lets you drag a down payment slider from $0 to $15,000, pick a 36, 48, 60 or 72 month term and set an APR from 3.9% to 14.9%. It shows the monthly figure in signal yellow plus amount financed, total interest and total of payments, with a note that it is an estimate and not an offer of credit.

### Can I use the Used Car Dealership Website template for a boat, RV or equipment dealer instead of cars?
Yes. The Used Car Dealership Website template is built so an inventory business can re-point it: the 24-vehicle sample set, the make, body and fuel filter chips and the body-type photo mapping all live in one content file, so you swap the makes and models for your boats, RVs, bikes or equipment and replace the photo set. The compare tray, saved cars and payment calculator keep working on the new fields.

### What do I need to change first after buying the Used Car Dealership Website template?
Start with the five variables: brand, city, owner, phone and years in business. The Used Car Dealership Website template derives its tel link and its localStorage keys from the brand and phone, so set those before anything else. Then replace the 24 fictional cars, their prices and the trade-in sample values in the content file with your real inventory and terms.

### How do the inventory filters and three-car compare work on the Used Car Dealership Website template?
The Used Car Dealership Website template filters the 24-car inventory live by make, body type and fuel chips, plus maximum price, maximum mileage and minimum year sliders, with four sort options and a running count such as Showing 14 of 24. A Compare toggle adds up to three cars to a fixed bottom tray, and the compare page sets differing values in signal yellow against matching values in ink.

### Where are saved cars and trade-in submissions stored on the Used Car Dealership Website template?
The Used Car Dealership Website template keeps saved cars, the compare selection and trade-in submissions in the browser's localStorage, namespaced with your brand slug. Nothing is sent to a server, so a saved car or trade-in estimate stays on that visitor's device. If you need those requests to reach your inbox or CRM, you would connect the forms to your own service.

### How do I build an used car dealership website with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add used-car-dealership-website, replace [BRAND], [CITY], [FOUNDER] and [PHONE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Used Car Dealership Website demo?
The Independent dealer, Bellhaven case was built by GLM-5.3 in ZCode. Each build used the published prompt with nothing added.

### What tech stack and pages does the Used Car Dealership Website template use?
Used Car Dealership Website is a 5-page site built with Tailwind CSS, Motion and React, with page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Used Car Dealership Website template free to use?
Used Car Dealership Website is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Used Car Dealership Website template work on mobile?
Yes. Every Used Car Dealership Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More E-commerce & Product Pages](../../README.md#e-commerce--product-pages) · [Used Car Dealership Website on VibeFather](https://vibefather.ai/templates/used-car-dealership-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
