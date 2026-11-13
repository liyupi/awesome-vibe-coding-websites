# 3D Product Launch Page <sup>PRO</sup>

> A dark, cinematic launch page where a code-built 3D lamp tilts and changes color as you scroll.

<a href="https://vibefather.ai/templates/3d-product-launch-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/3d-product-launch-page/565fdd79-8b10-42f0-95b2-661affda944f/webp.f3f58d8475.webp" width="100%" alt="3D Product Launch Page — Dark Cinematic 3D Product Launch Page with Scroll-Driven three.js Lamp built by Claude Opus 5.5 and Gemini 4 Carbon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/3d-product-launch-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Lumen Drift is a single-page launch site for a piece of hardware. Its hero object is a desk lamp built entirely in three.js from primitives, with no model files, textures or HDRIs. A full-screen WebGL stage sits behind the page. As the visitor scrolls through four feature chapters, the lamp turns on its base, bends at both hinges and tilts its head, and its light shifts between cool white, amber and violet. A soft beam cone, a halo, drifting dust motes and a pool of light on the floor make the scene feel lit rather than rendered.

The template suits small hardware teams, crowdfunding campaigns and product designers who want a preorder page that shows the object moving instead of a carousel of photos. The look is near-black, with large Space Grotesk headlines, Inter body text and a spec sheet set in JetBrains Mono with hairline rules and oversized key figures. Every UI accent picks up the lamp's current color: the scroll progress line, the chapter dots, button glows and the live readout in the corner that shows head angle, output and tone hex. A small SVG day curve in the fourth chapter draws itself as you scroll.

The scroll choreography is set by a keyframe table. Each section has a pose, a camera position and a light color, and GSAP ScrollTrigger interpolates between them. Lenis provides the inertial scrolling. With reduced motion turned on, the page skips the animation and jumps to each pose.

To adapt the page, change the brand, product name, product type, price, ship window and audience in one content file, then rewrite the chapter copy. The lamp's geometry and color stops are short, commented constants, so you can reshape it into a grow light, a studio key light or a reading lamp without changing the layout.

| | |
|---|---|
| Category | [Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Minimal](../../styles/minimal.md), [Dark](../../styles/dark.md) |
| Effects | Text Animation, Scroll Animation, 3D / WebGL |
| Stack | Vite 5 + TypeScript + three.js + Vanilla CSS + three + gsap + lenis |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Claude Code, [Gemini 4 Carbon](../../models/gemini-4-carbon.md) in Cursor |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/3d-product-launch-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/3d-product-launch-page?case=565fdd79-8b10-42f0-95b2-661affda944f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/3d-product-launch-page/565fdd79-8b10-42f0-95b2-661affda944f/shot_desktop.9274cd092a.webp" width="100%" alt="3D Product Launch Page — Smart desk lamp, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>Smart desk lamp</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/3d-product-launch-page?case=565fdd79-8b10-42f0-95b2-661affda944f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/3d-product-launch-page?case=0281f5ff-4fa7-444e-812f-7529d7ded48a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/3d-product-launch-page/0281f5ff-4fa7-444e-812f-7529d7ded48a/shot_desktop.991782b253.webp" width="100%" alt="3D Product Launch Page — Indoor grow light, built by Gemini 4 Carbon in Cursor"></a><br>
<b>Indoor grow light</b><br>
<sub>Built by <b>Gemini 4 Carbon</b> in Cursor · <a href="https://vibefather.ai/templates/3d-product-launch-page?case=0281f5ff-4fa7-444e-812f-7529d7ded48a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand name | Kelvane |
| `[PRODUCT_NAME]` | Product name | Sola One |
| `[PRODUCT_TYPE]` | Product type | smart desk lamp |
| `[PRICE]` | Preorder price | $249 |
| `[SHIP_WINDOW]` | Ship window | March 2027 |
| `[AUDIENCE]` | Audience | people who work, read and wind down at the same desk |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/3d-product-launch-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A crowdfunding hardware team: set BRAND and PRODUCT_NAME to your device, put your reservation link behind the preorder block and rewrite the four chapters around your campaign milestones.
- A studio lighting maker: keep the lamp geometry but widen the head and shift the color stops toward daylight and tungsten, then rewrite the spec sheet with your output and color temperature figures.
- A plant-care brand selling a grow light: set PRODUCT_TYPE to indoor grow light, retitle the chapters around spectrum and schedule, and point AUDIENCE at home growers.
- An industrial designer's portfolio: set BRAND to your studio, replace PRICE and SHIP_WINDOW with project details and use the four chapters to walk through your design decisions.

## FAQ

### How do I change the lamp into a different product, like a grow light or a reading lamp?
The 3D Product Launch Page builds its lamp from short, commented constants in the scene code, so you reshape the geometry rather than swap a model file. Change the base, arm and head proportions and the color stops the light moves between, then rewrite the chapter copy in the content file to match. The layout, scroll keyframes and UI accents stay as they are.

### Can I use the 3D Product Launch Page for a crowdfunding preorder campaign?
The 3D Product Launch Page is built for exactly that: a single-page launch site with four feature chapters, a hairline spec sheet and a preorder call to action. Set BRAND, PRODUCT_NAME, PRODUCT_TYPE, PRICE, SHIP_WINDOW and AUDIENCE in the content file, then rewrite the Focus, Warm, Night and Rhythm chapters around your campaign. The preorder block is static UI only, so connect it to your own reservation or mailing list.

### What do I need to change first after downloading the 3D Product Launch Page?
Start in the content file: set BRAND, PRODUCT_NAME, PRODUCT_TYPE, PRICE, SHIP_WINDOW and AUDIENCE, then rewrite every headline, chapter paragraph and spec row to fit your product, keeping the same lengths and tone. After that, adjust the lamp's geometry and color stops if your object differs from a desk lamp. The near-black palette, Space Grotesk headlines and scroll choreography can stay untouched.

### Does the 3D lamp animation still work for visitors who turn on reduced motion?
Yes. The 3D Product Launch Page detects reduced motion and skips the scroll animation, jumping straight to each lamp pose instead of interpolating between keyframes. Visitors still see the lamp in its chapter poses and read the same copy, spec sheet and preorder block. The GSAP ScrollTrigger choreography and Lenis inertial scrolling are what get bypassed, not the content.

### Can I use the 3D Product Launch Page for a client project?
Commercial and client use of the 3D Product Launch Page requires Pro. The template is a Pro template, so its brief, stack and variables are public while the full prompt and the demo source code come with Pro membership. Free templates' prompts and every DESIGN.md are licensed for personal, non-commercial use only.

### How do I build a 3D product launch page with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add 3d-product-launch-page, replace [BRAND], [PRODUCT_NAME], [PRODUCT_TYPE] and [PRICE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the 3D Product Launch Page demo?
The Smart desk lamp case was built by Claude Opus 5.5 in Claude Code; the Indoor grow light case was built by Gemini 4 Carbon in Cursor. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the 3D Product Launch Page template use?
3D Product Launch Page is a single-page site built with GSAP, Plain HTML and Three.js, with text animation, scroll animation and 3d / webgl. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the 3D Product Launch Page template free to use?
3D Product Launch Page is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the 3D Product Launch Page template work on mobile?
Yes. Every 3D Product Launch Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) · [3D Product Launch Page on VibeFather](https://vibefather.ai/templates/3d-product-launch-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
