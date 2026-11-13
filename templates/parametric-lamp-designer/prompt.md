# Parametric Lamp Designer

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build an original single-page parametric lamp studio for [BRAND], presenting [PRODUCT_NAME] in a real-time Three.js workspace. The default brand is Loom & Ember and the default product is Strata Lattice Lamp. The page is a working design tool, not a marketing landing page: a rich, glowing 3D lamp fills the main viewport while precise controls sit in a compact rail. Four sliders regenerate the lattice immediately, three presets offer starting points, and Export spec creates a polished PNG concept sheet locally.

- Audience: Design for [AUDIENCE], by default independent lighting designers and hands-on makers. The interface should feel approachable to a curious first-time visitor while giving experienced designers exact values, predictable controls, and a useful exported summary.
- Goal: Let a visitor shape an original lattice table lamp, inspect it from any angle, compare preset silhouettes, switch the warm internal light on or off, and download a PNG specification sheet that faithfully represents the current settings. Every control must work entirely on the client with no sign-in or network dependency.
- Tone: A quiet, precise design workshop: deep botanical greens, warm peach illumination, crisp measurements, restrained motion, and succinct functional copy. The lamp is sculptural and contemporary, with no architectural, cultural, or brand-specific motifs.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Vanilla CSS
- Libraries: three (MIT), lucide-react (ISC), @fontsource/space-grotesk (OFL-1.1), @fontsource/ibm-plex-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Configure Vite with base './' and build.sourcemap set to false; the build script runs tsc && vite build and emits only static production files to dist/.
  - Use Three.js directly inside a React LampViewer component and import OrbitControls from three/examples/jsm/controls/OrbitControls.js; do not add a second 3D framework.
  - Self-host Space Grotesk and IBM Plex Mono through the listed Fontsource packages, importing only weights 400, 500, 600, and 700 as needed.
  - Keep all variable values, interface copy, preset descriptions, accessibility labels, and export-sheet copy in src/content.ts. Rewrite product-specific copy naturally when variable values change; never leave default brand or product text behind.
  - Separate responsibilities into src/App.tsx for state and layout, src/components/LampViewer.tsx for rendering, src/lib/lampGeometry.ts for parametric geometry, src/lib/specSheet.ts for PNG generation, and src/styles.css for the visual system.
  - Create ASSETS.md listing Space Grotesk and IBM Plex Mono as OFL fonts, Lucide as ISC, and Three.js as MIT; state that all lamp and environmental visuals are generated in code and that no raster image assets are used.

## Variables
- [BRAND] — Studio brand (default: "Loom & Ember"). Invented studio name used in the header, specification sheet, footer, and download filename.
- [PRODUCT_NAME] — Lamp product name (default: "Strata Lattice Lamp"). Name of the current lamp family, used in the project title, canvas description, and export.
- [AUDIENCE] — Intended audience (default: "independent lighting designers and hands-on makers"). Lowercase phrase that fits after 'A concept workspace for'.
- [TAGLINE] — Workspace tagline (default: "Shape light, one line at a time."). One short sentence shown beneath the control-panel heading.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/parametric-lamp-designer in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Canvas `#111714` — Full-page and WebGL background
- Panel `#18211C` — Control rail and header surfaces
- Raised `#222D26` — Preset cards, input tracks, and floating viewport tools
- Border `#354238` — One-pixel dividers and control outlines
- Text `#F1F4EE` — Primary labels and numeric values
- Muted `#9DABA1` — Secondary copy and measurement units
- Glow `#FFB080` — Warm lamp light, active slider fill, and primary export action
- Sage `#B9D5BE` — Focus rings, active preset accents, and success feedback
- Sheet `#EEF2ED` — Pale sage background of the exported PNG specification sheet

### Typography
- Interface, brand, and specification headings: Space Grotesk (OFL), weights 400/500/600/700
- Slider values, dimensions, status labels, and specification data: IBM Plex Mono (OFL), weights 400/500

### Layout & motion
- Spacing: Use a 4px base unit with 8px control gaps, 16px card padding, 20px rail section gaps, and 24px major separations. Desktop header is 68px high, left control rail is 320px wide, and the viewport consumes all remaining width. Keep the complete primary workspace visible at 1440×900 without page scrolling.
- Radius: Use 16px for the viewport and preset cards, 10px for buttons and parameter groups, 6px for small value chips, and fully rounded tracks and toggles. Avoid excessive pill-shaped containers.
- Motion: Rebuild changed lamp geometry on the next animation frame after each slider input; values and active states update immediately with no Apply button.
- Motion: Use OrbitControls with damping factor 0.07 when motion is allowed, no auto-rotation, no idle camera movement, and no decorative page transitions.
- Motion: Preset selection changes geometry in one frame and crossfades the active-card border and warm glow over 160ms; camera movement is limited to explicit Front, Top, and Reset view actions.
- Motion: Slider thumbs and buttons use 120ms hover and focus transitions. Under prefers-reduced-motion, remove damping and all nonessential transitions while preserving instant functional updates.
- Imagery: The hero and only major visual is a rich, code-generated WebGL studio scene: an original open-lattice lamp with crossing ribs, horizontal contour rings, a low circular plinth, a translucent inner diffuser, warm light on a matte floor, and a faint technical grid. No photographs, stock renders, downloaded models, HDRIs, logos, people, or image placeholders are used. On mobile the live viewport remains the first large visual and is never replaced by a static screenshot.

## Pages & Sections
### Live Parametric Lamp Workspace (`index.html`)
1. **App header and project identity** — A slim top bar shows a small original three-line lattice glyph drawn with inline SVG, [BRAND] (Loom & Ember by default), and a divider followed by [PRODUCT_NAME] (Strata Lattice Lamp by default). Center a muted PROJECT 01 label. Right-side actions are a ghost Reset button and a peach Download icon button labeled Export spec. Reset restores the Ripple preset, all four default parameters, light on, and the initial camera; it does not reload the page.
   Layout: Use a 68px full-width header with 20px horizontal padding, a 16px brand glyph, and 12px action gaps. Keep Export spec visible at every width. Below 760px, use a 56px sticky header, hide PROJECT 01 and the product suffix, shorten Reset to an accessible icon button, and retain the text Export on the primary action.
   Motion: Buttons brighten over 120ms. A successful reset shows the status message Ripple restored in the footer and an aria-live toast for 1.8 seconds.
2. **Parameter control rail** — Start with the eyebrow LAMP BUILDER, the heading Shape the light, and [TAGLINE] (Shape light, one line at a time. by default). Four labeled range controls are Height, Rings, Lattice density, and Opening shape. Height ranges 180–420 mm in steps of 5 and defaults to 280 mm. Rings ranges 4–16 in steps of 1 and defaults to 9. Lattice density ranges 12–48 ribs per direction in steps of 2 and defaults to 28; its helper reads 56 crossing ribs at the default. Opening shape ranges 0–100 in steps of 1 and defaults to 20, with Circle at the left and Soft square at the right; show Circle below 20, Rounded from 20–69, and Soft square from 70 upward alongside the numeric value. Every input updates the model on input, and each label has an associated monospaced output value.
   Layout: Place this rail left of the viewport with 20px padding. Each parameter occupies an 80px group: label and value on one row, a 4px custom range track below, and small endpoint or helper text. Use native keyboard-accessible range inputs with a 24px visual thumb and at least a 44px touch target. At mobile widths, move the complete rail below the preview in document flow, use 16px padding, and keep all four controls visible rather than hiding them in accordions.
   Motion: Fill the track left of the thumb with Glow peach. Schedule geometry regeneration with requestAnimationFrame so rapid drag events coalesce, and dispose replaced geometries before adding the new mesh group.
3. **Live 3D lamp studio** — Render [PRODUCT_NAME] from geometry, never a model file. Use 100mm as one scene unit. Set a low plinth of radius 0.94 and height 0.18 at y=0.09. For the shade, let t run from 0 at the base to 1 at Height/100 above it and define radius r(t)=0.72+0.18*sin(π*t)-0.10*t. Build the requested number of closed horizontal rings evenly from t=0 to t=1 with 0.018-unit tubing. Build two crossing families of diagonal ribs, with Lattice density curves in each direction (2N total), using θ=2π*i/N±0.34*t and 0.012-unit tubing. Map every circular contour through a superellipse with exponent n=2+2*(Opening shape/100): x=r*sign(cosθ)*abs(cosθ)^(2/n), z=r*sign(sinθ)*abs(sinθ)^(2/n). Use CatmullRomCurve3 and TubeGeometry for both closed rings and ribs so the opening control genuinely changes the mesh. The result is one open, gently belled lattice surface, not concentric walls or a building. Add an inner frosted cylinder of radius 0.30 reaching 70% of the shade height. Use MeshStandardMaterial with color #DDE7DF for ribs and rings, roughness 0.58, and metalness 0.05. The diffuser uses color #F6D6B8, emissive #FF9C62, emissiveIntensity 1.4 when lit, opacity 0.48, and depthWrite false. Add a warm PointLight inside, a soft directional key, hemisphere fill, a matte floor receiving shadows, subtle grid lines, and fog matching Canvas.
   Layout: The viewport fills the remaining workspace with a 16px outer margin and a 16px radius. Set camera FOV 34, near 0.1, far 100, initial position (4.2,3.1,5.2), and target the shade midpoint. Cap pixel ratio at 2, use sRGB output, ACES filmic tone mapping, exposure 1.1, antialiasing, and soft shadows. Top-left overlays read LIVE PREVIEW and Warm 2700 K. Top-right controls are Light on/off, Front, Top, and Reset view. Bottom-left helper reads Drag to orbit · Scroll to zoom; bottom-right shows the calculated maximum diameter and total rib count. On mobile, place the viewport before the rail at 390px high with compact controls that wrap without covering the lamp.
   Motion: OrbitControls enables rotate and zoom, disables pan, limits distance to 3–10, and prevents moving below the floor. Front and Top buttons set deterministic cameras; Reset view restores the initial composition. Changing height recenters only the orbit target and preserves the visitor's chosen angle. The light toggle switches the point light and diffuser emissive intensity between 1.4 and 0.08 without moving the model.
4. **Preset style library** — Below the parameters, label the group QUICK START and add the line Three silhouettes. Yours to adjust. Ripple defaults to Height 280, Rings 9, Density 28, Opening 20 and the description Balanced and open. Halo uses Height 220, Rings 12, Density 36, Opening 0 and Compact and dense. Weave uses Height 340, Rings 7, Density 20, Opening 75 and Tall and airy. Selecting a preset updates every slider, the mesh, the active-card state, and the export data. Manual slider changes keep the last preset name as the starting point but append Custom to its label until another preset is chosen.
   Layout: Use one column of three compact cards in the 320px rail. Each card has a tiny original line-icon silhouette generated from the same contour math, name and description at left, and four compact parameter values beneath. Active cards use a Sage border and a small check icon; inactive cards use Raised green with a Border outline. On mobile, use a three-column grid with cards at least 104px wide, hiding only the secondary descriptions at 390px while keeping names and values readable.
   Motion: Active-card border and background crossfade over 160ms. Geometry changes immediately, with no carousel, auto-cycling, or animated camera flight.
5. **PNG specification export** — Export spec generates a 1600×1000 PNG entirely in an offscreen 2D canvas. Use the Sheet background, a dark ink header with [BRAND] and [PRODUCT_NAME], and the section title Concept specification. Render the Three.js scene synchronously, copy the current view into a 960×700 image area on the left, and place a clean data column on the right with Height, Estimated maximum diameter, Horizontal rings, Ribs per direction, Total crossing ribs, Opening shape, Light temperature 2700 K, and the selected preset or Custom label. Footer copy reads A concept workspace for [AUDIENCE]. and Concept summary only — not a fabrication-ready engineering drawing. Generate the filename by slugifying the current [BRAND] and [PRODUCT_NAME], then appending -spec.png. Trigger a local download and announce Spec sheet exported. No SVG, STL, PDF, account, upload, or server export is offered.
   Layout: The exported sheet uses 64px outer margins, a 96px header, a 32px gap between preview and data, 14px monospaced labels, 22px values, and thin sage dividers. Match the current model and parameters exactly. In the app, the export button enters a brief Preparing… disabled state while drawing, then returns to Export spec; failures show a readable inline error rather than throwing an uncaught exception.
   Motion: No modal or animated progress sequence. Use a 1.8-second aria-live success toast after the download begins.
6. **Workspace status footer** — A restrained footer within the app shell shows Geometry ready with a small Sage status dot, the current mesh group count, A concept workspace for [AUDIENCE]., and the optional [CREDIT] link. The screen-reader canvas label identifies [PRODUCT_NAME] and summarizes the current height, rings, density, and opening. All icon-only buttons have accessible names, focus indicators use Sage, and every operation is available by keyboard except free-form pointer orbiting, which has deterministic Front, Top, and Reset view alternatives.
   Layout: Use a 32px desktop status row with 20px horizontal padding, small monospaced text, and flexible spacing. On mobile, stack the audience line and status into two short rows below the control rail without covering content. Maintain at least 4.5:1 contrast for functional text and zero horizontal overflow at 390×844.
   Motion: Only the status dot changes between busy and ready states; there is no pulsing, blinking, or perpetual animation.

## Assets
- image: Generate the lamp, plinth, diffuser, floor, grid, shadows, preset silhouettes, and brand glyph entirely with Three.js and original inline SVG or Canvas code. Do not download or create raster image assets; the first-screen visual anchor is the interactive WebGL viewport.
- icon: Use locally bundled lucide-react icons for Download, RotateCcw, Sun, SunDim, Check, Box, and SlidersHorizontal. Do not use brand logos, third-party icon images, or recognizable product marks.
- font: Self-host Space Grotesk weights 400, 500, 600, and 700 with @fontsource/space-grotesk; record the package and OFL license in ASSETS.md.
- font: Self-host IBM Plex Mono weights 400 and 500 with @fontsource/ibm-plex-mono; record the package and OFL license in ASSETS.md.

## Don'ts
- Do not copy the reference prompt, wording, code, images, model geometry, textures, interface, or any distinctive architectural design.
- Do not use Tulou or other building silhouettes, concentric architectural walls, arched doorways, tapered roofs, cultural ornaments, or decorative motifs from the inspiration.
- Do not use the reference's bone-white, charcoal, and amber palette as a set; retain the specified botanical green, sage, and peach system instead.
- Do not mention or display Kimi, Moonshot AI, or any other external brand inside the generated site, and do not create logos or icons resembling theirs.
- Do not use real people, recognizable products, stock photography, downloaded 3D models, HDRIs, placeholder-image services, or externally hosted assets.
- Do not replace the parametric mesh with a static render, video, canned animation, or fixed model; all four sliders must visibly and mathematically alter the current lamp.
- Do not add a backend, account system, database, API route, remote form, analytics, third-party API, external font request, CDN script, or CDN stylesheet.
- Do not claim the concept is fabrication-ready and do not add STL, 3D-printing, manufacturing, pricing, commerce, or certification features.
- Do not hard-code default brand or product copy outside src/content.ts, and do not leave Loom & Ember or Strata Lattice Lamp visible when variables change.
- Do not display dates, member counts, fake measurements beyond the calculated model dimensions, or claims about saved cloud projects.
- Do not introduce SEO metadata blocks, structured data, sitemaps, marketing sections, or extra pages; use only a plain document title containing [BRAND] and [PRODUCT_NAME] plus a simple local favicon.
- Do not emit source maps, copy src/ into dist/, exceed 20 MB, use bare-directory links, or require a server rewrite; the only page is index.html and all production assets use relative paths.
- Do not allow continuous auto-rotation, excessive glow bloom, unreadable text over the canvas, horizontal mobile overflow, or controls that ignore prefers-reduced-motion.
- Do not leak GPU resources: dispose replaced geometries and materials, cancel animation frames and remove observers on unmount, and avoid uncaught WebGL or export errors.

---
Inspired by Parametric Lamp Designer — https://www.kimi.com/showcases/3dmake
— Prompt by VibeFather · https://vibefather.ai/t/parametric-lamp-designer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
