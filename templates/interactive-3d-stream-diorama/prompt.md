# Interactive 3D Stream Diorama

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Create an original single-page interactive stream diorama for [BRAND]. A realistic but compact Three.js landscape fills the first screen, with shader-driven flowing water, direct ripple interaction, orbit and zoom controls, day / dusk / night lighting, and opt-in synthesized ambience. The default scene is [SCENE_NAME], a [SCENE_TYPE] in [REGION], introduced by [TAGLINE].

- Audience: Creative developers, designers, educators, students, and independent makers building a portfolio centerpiece, browser toy, environmental visualization, or quiet interactive break for [AUDIENCE_LINE].
- Goal: Let a visitor understand and touch the experience within five seconds: see the stream, orbit the miniature, make a ripple, change the light, and optionally listen. Keep the landscape dominant and make every visible control perform a real local action.
- Tone: Quiet, observant, tactile, and precise. Use natural materials, soft atmospheric light, concise field-note language, and no gamified scores, sales copy, or techno-utopian claims.

## Stack
- Framework: Vite 6 + TypeScript 5
- Styling: Vanilla CSS + GLSL shaders
- Libraries: three (MIT), lucide (ISC), @fontsource/instrument-serif (OFL-1.1), @fontsource-variable/dm-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Use Vite 6 with TypeScript 5 and vanilla DOM components; install three, lucide, @fontsource/instrument-serif, and @fontsource-variable/dm-sans as runtime dependencies, with @types/three as a development dependency.
  - Set package scripts so dev starts Vite, build runs tsc --noEmit && vite build, and preview serves the production output.
  - Set vite.config.ts to base: './', build.sourcemap: false, and a modern ES2020 build target. Import only the used Lucide icons and self-hosted Fontsource CSS; make no remote requests at runtime.
  - Organize the implementation into src/main.ts, src/content.ts, src/styles.css, src/scene/StreamScene.ts, terrain.ts, water.ts, lighting.ts, audio.ts, controls.ts, and src/scene/shaders/. Keep shaders as local TypeScript template strings so Vite bundles them.
  - Keep every user-facing string, variable value, lighting label, instruction, accessibility label, and field note in src/content.ts. When variable values change, rewrite scene-specific copy and vegetation names while preserving the layout and mechanics.
  - Use a fixed seeded PRNG with seed 1147 for all terrain displacement and object scattering. The same variables and viewport class must produce the same composition on every run.
  - Cap renderer pixel ratio at 1.75 on desktop and 1.35 on mobile, use ACESFilmicToneMapping and PCFSoftShadowMap, resize through ResizeObserver, and pause requestAnimationFrame work while the document is hidden.
  - Use original geometry and procedural CanvasTexture noise only. Do not download models, HDRIs, photographs, raster textures, audio, or any media from the reference.

## Variables
- [BRAND] — Project name (default: "Alder & Rill"). An invented studio, project, or place name shown in the header and document title.
- [SCENE_NAME] — Scene name (default: "Alder Bend"). A short original name for the miniature landscape.
- [SCENE_TYPE] — Scene type (default: "Woodland stream"). The landscape category used in the eyebrow and field notes.
- [REGION] — Invented region (default: "North Alder Basin"). A fictional setting, never a claim about a real protected place or landmark.
- [TAGLINE] — Scene tagline (default: "Follow the water. Stay a little."). One short invitation displayed below the scene name.
- [AUDIENCE_LINE] — Audience line (default: "A quiet break for nature lovers."). A concise phrase describing who the scene is for, used in the field-notes panel.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/interactive-3d-stream-diorama in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Chrome `#101714` — Page background and outer frame in every lighting mode.
- Panel `#17201D` — Control and field-note surfaces at 88 percent opacity with a subtle backdrop blur.
- Panel Border `#415048` — One-pixel dividers, control outlines, and selected-state borders at reduced opacity.
- Text `#F0F3E9` — Primary titles, labels, and readable control text.
- Muted `#AAB6A9` — Secondary notes, inactive controls, and gesture instructions.
- Accent `#D8B978` — Active lighting state, small focus details, and the interactive water indicator.
- Water `#315F63` — Deep-water base color, mixed with #79A8A0 in shallow areas and adjusted per lighting preset.
- Grass `#526C45` — Mid-tone vegetation, varied procedurally between #394E35 and #789064.
- Stone `#77766F` — Warm-gray rock material with darker seams and pale mineral speckles.
- Day Sky `#B8CABD` — Day canvas background and matching distance fog.
- Dusk Sky `#805D57` — Dusk canvas background and matching warm distance fog.
- Night Sky `#0B1524` — Night canvas background, fog, and deep reflected sky.

### Typography
- Scene title and large field-note headings: Instrument Serif (OFL), weights 400
- Interface, body copy, controls, and metadata: DM Sans Variable (OFL), weights 400/500/600

### Layout & motion
- Spacing: Use an 8px base grid. Desktop outer frame is 16px, header height is 64px, title overlay inset is 40px, control-panel padding is 20px, and field-note sections have 24px vertical separation. Mobile uses an 8px outer frame, 56px header, 20px title inset, and 12px control padding.
- Radius: The scene frame is 24px on desktop and 18px on mobile. Control panels and field-note drawer use 18px, small buttons use 10px, and segmented lighting controls use a 999px pill. Keep stones and terrain organic rather than applying UI-like rounding to geometry.
- Motion: On first load, fade the complete rendered scene from opacity 0 to 1 over 650ms and move the title overlay upward 16px over 600ms with a cubic-bezier(0.22, 1, 0.36, 1) easing; never show a blank hero while shaders compile.
- Motion: Water time advances continuously through layered directional noise and fine normal ripples. Grass blades sway by no more than 3 degrees with two offset wind frequencies; do not auto-rotate the camera.
- Motion: Lighting presets interpolate sky, fog, light colors, light intensities, exposure, and water uniforms over 900ms. Interface hover and pressed states use 160ms transitions.
- Motion: Pointer-created ripples expand from the exact raycast point, fade naturally, and recycle the oldest of eight ripple slots. Dragging water adds a new point at most every 45ms rather than creating uncontrolled uniforms.
- Motion: Camera reset eases position and target back to the original composition over 650ms. Field notes fade and translate 20px from the right on desktop and 24px from the bottom on mobile.
- Motion: For prefers-reduced-motion, remove intro movement and grass sway, render flowing water at a fixed time value, make UI and camera transitions immediate, and retain only brief user-initiated ripple feedback. Sound remains strictly opt-in.
- Imagery: No photographs, image downloads, external models, HDRIs, or recorded audio. The hero is a polished real-time WebGL diorama: a seeded asymmetric earth cutaway, custom water shader, procedurally deformed stones, instanced grasses and pebbles, generated noise textures, atmospheric lights, and soft shadows. Generic interface icons come from the locally bundled Lucide package.

## Pages & Sections
### [SCENE_NAME] — [BRAND] (`index.html`)
1. **Field-station header** — Top-left brand lockup is a small original three-line ripple glyph followed by [BRAND] in 15px DM Sans 600. Center metadata reads 'INTERACTIVE FIELD STUDY / 01' in 11px uppercase with 0.16em tracking. Right button reads 'Field notes' with an Info icon and opens the notes drawer. Set the document title to '[SCENE_NAME] — [BRAND]' and use the same original ripple glyph as a local SVG favicon.
   Layout: A 64px horizontal flex row sits above the scene, with 24px desktop and 16px mobile horizontal padding. The brand and notes button occupy the ends; center metadata is absolutely centered and hidden below 640px. On mobile, show the Info icon plus the short label 'Notes'. Header controls remain outside the WebGL canvas.
   Motion: The header fades in with the first rendered scene. The notes button changes border and text color over 160ms and has a visible keyboard focus ring.
2. **Procedural stream stage** — Build one original 12 by 8 world-unit asymmetric oval earth cutaway with exposed darker soil sides and a shallow two-bend stream running diagonally from the rear-left to front-right. The terrain must not reproduce the reference's silhouette or stone placement. Use a subdivided BufferGeometry heightfield for banks and bed, a CatmullRomCurve3 centerline for the channel, and seeded noise for small elevation changes. Place nine hero stones in three uneven groups, 160 smaller pebbles, and 1,200 instanced grass clumps on desktop; reduce to 80 pebbles and 550 grass clumps below 700px. Deform icosahedron stone geometry with fixed-seed noise, use MeshStandardMaterial roughness between 0.72 and 0.94, and generate mineral speckle and soil grain with local CanvasTexture noise. Grass uses tapered crossed blades, per-instance hue variation, and a small vertex-shader wind bend.

Create the stream as a 128-segment by 10-column ribbon mesh following the curve, slightly below the bank tops and above a visible pebble bed. Write original GLSL vertex and fragment shaders. Fragment color must combine depth-based teal absorption, two flowing noise layers, perturbed normals, view-angle Fresnel, a reflected sky gradient, narrow sun glints, and pale foam around explicit stone-center uniforms. Keep the shader single-pass and avoid a heavy postprocessing chain. Pass up to eight ripple centers and start times as uniforms; each ripple is an expanding, damped ring added to the normal and highlight calculation.

Use a PerspectiveCamera with 38-degree FOV, initial desktop position (11, 9, 13), and target (1.2, 0, 0) so the miniature sits slightly right of the title. Limit polar angle to 0.35–1.25 radians and camera distance to 10–24, disable panning and auto-rotation, and use damped OrbitControls. On portrait screens, use position (13, 12, 17), target (0, 0, 0), and adjust FOV to keep the entire cutaway visible above the control dock.

Pointer-down raycasts against only the water mesh. A hit on water temporarily disables orbit and creates ripples at the hit UV or world position; pointer move adds throttled ripples until release. A hit on land or empty canvas starts orbit. Wheel zoom works anywhere. On touch, one finger on water makes ripples, one finger elsewhere orbits, and two fingers cancel the ripple gesture and pinch-zoom. Set appropriate touch-action and pointer capture so no gesture scrolls or selects the page.
   Layout: The WebGL canvas fills a scene frame positioned at top 64px, right 16px, bottom 16px, and left 16px on desktop, with 24px rounded corners, hidden overflow, and a #101714 outer background. On mobile the frame uses top 56px and 8px on all other edges. The canvas has a minimum height of 560px where viewport height allows, fills the available first screen, and never becomes a separate below-the-fold feature. Add a visually hidden text description of the scene for screen readers.
   Motion: Animate water and grass from the shared clock, with soft shadow maps and no camera autorotation. Use 2048px shadow maps on desktop and 1024px on mobile. Pause rendering when hidden and handle resize without resetting ripples or selected lighting.
3. **Scene title overlay** — Eyebrow reads '[SCENE_TYPE] · [REGION]' in uppercase 11px DM Sans 500 with 0.14em tracking. The main title is [SCENE_NAME] in Instrument Serif 400, 72px desktop and 44px mobile, followed by [TAGLINE] in 16px DM Sans 400. Beneath it, a small live indicator with a 6px accent dot reads 'Touch the water'. Do not add a conventional marketing CTA or a paragraph over the landscape.
   Layout: Position the overlay at left 40px and top 40px inside the scene frame, with a maximum width of 390px and pointer-events: none. Use a restrained linear scrim from rgba(16,23,20,0.58) to transparent behind only the text region, not over the entire scene. Mobile uses left 20px, top 24px, and a maximum width of calc(100% - 40px). Keep the central water and hero stones unobscured.
   Motion: Intro copy rises 16px and fades with the scene. The accent dot uses a gentle 2.4-second opacity pulse unless reduced motion is requested.
4. **Scene control dock** — The dock contains a 'LIGHTING' label and three equal segmented buttons labeled 'Day', 'Dusk', and 'Night' with Sun, Sunset, and Moon icons. Day is selected initially and uses aria-pressed on every option. Day sets sky and fog to #B8CABD, hemisphere sky #E8F2E8 and ground #53604A at intensity 1.4, directional light #FFF2D0 at intensity 3.0 from (-5,10,6), and exposure 1.0. Dusk sets sky and fog #805D57, hemisphere #DFA78A / #263C36 at 0.9, directional light #FFB077 at 2.2 from (-8,4,3), and exposure 0.9. Night sets sky and fog #0B1524, hemisphere #607CA8 / #0C1513 at 0.5, directional moonlight #B9D4FF at 1.1 from (4,8,-5), exposure 0.72, and a low-intensity cool rim light. Update water reflection and glint uniforms with the same preset.

Below lighting, include an 'Ambient sound' toggle with Volume2 / VolumeX icons and text 'Off' or 'On', plus a separate icon-and-text 'Reset view' button. Sound must be off on load. Generate audio locally with the Web Audio API only after the user activates the toggle: layer looped filtered noise for stream hiss and lower resonant gurgles, route through a gentle stereo panner and master gain, resume the AudioContext, and ramp volume in over 600ms. Switching off ramps down and suspends the context. Do not use recorded audio or autoplay.

A compact gesture line reads 'Drag land to orbit · Drag water to ripple · Scroll to zoom' on desktop and 'Drag land to orbit · Drag water to ripple · Pinch to zoom' for coarse pointers. All buttons have accessible names, pressed states, 44px minimum touch targets, and keyboard operation.
   Layout: Place the dock at right 24px and bottom 24px inside the scene, width 340px, with 20px padding, an 18px radius, #17201D at 88 percent opacity, 16px backdrop blur, and a #415048 border. Lighting is a three-column grid; sound and reset share a second row; gesture instructions sit below a one-pixel divider. On screens below 700px, dock left and right are 12px, bottom is 12px, width is automatic, padding is 12px, and the title remains above it. The scene must leave visual breathing room around this dock rather than being covered by a second sidebar.
   Motion: Preset changes interpolate over 900ms, button states respond in 160ms, sound fades over 600ms, and reset eases for 650ms. Reduced-motion users receive immediate preset and camera changes.
5. **Field-notes drawer** — The drawer is hidden initially and opened only by the header button. Its eyebrow reads 'FIELD NOTES / 01', its heading is [SCENE_NAME], and its introduction reads: 'An invented [SCENE_TYPE] in [REGION]. [AUDIENCE_LINE] This small landscape is built from geometry, light, and code rather than footage or downloaded models.' Three labeled notes follow: 'Water' — 'A custom GLSL surface layers directional current, reflected sky, stone-edge foam, and expanding ripples.' 'Terrain' — 'A fixed seed shapes the cutaway banks, mineral-flecked stones, and instanced grasses so every visit begins in the same place.' 'Atmosphere' — 'Three lighting studies shift the mood. Optional synthesized ambience starts only when you ask.' End with the quiet line 'Built for a pause, not a score.' Include a close button with an X icon and accessible label 'Close field notes'.
   Layout: Use a modal dialog with a 380px right-side drawer, full scene-frame height, 28px padding, #17201D background, and a 24px left border radius. Add a light rgba(16,23,20,0.34) backdrop over the canvas, trap focus while open, close on Escape or backdrop click, and return focus to the opener. On mobile use a bottom sheet with 20px padding, 18px top radius, maximum height 72svh, and internal vertical scrolling. This is the only scrollable region; the main page remains fixed.
   Motion: Desktop drawer enters from 20px right with a 240ms fade; mobile enters from 24px below. Exit in 180ms and use immediate transitions for reduced motion.

## Assets
- image: No image files are required. Generate the diorama, water, grass, stones, soil grain, mineral speckle, sky reflection, and favicon locally with Three.js, GLSL, canvas, and original SVG. Do not download or embed reference screenshots or external textures. Document the procedural asset approach in ASSETS.md.
- icon: Install lucide and bundle only Sun, Sunset, Moon, Volume2, VolumeX, RotateCcw, Info, and X. Use these generic icons for controls, credit Lucide and its ISC license in ASSETS.md, and draw the original three-line brand ripple glyph locally rather than copying any existing logo.
- font: Self-host Instrument Serif 400 through @fontsource/instrument-serif and DM Sans Variable through @fontsource-variable/dm-sans. Import the local Fontsource CSS and woff2 files, credit both families and their OFL-1.1 licenses in ASSETS.md, and never request a font CDN.

## Don'ts
- Do not copy or paraphrase the reference's prompt text, Chinese copy, source code, scene composition, stone placement, camera framing, interface layout, or exact palette. Do not use Kimi, 3D Make, their logos, or any other real product identity inside the site, variable defaults, title, slug, or favicon.
- Do not use reference screenshots, proprietary models, images, video, icons, custom fonts, or audio. Do not include recognizable landmarks, branded objects, licensed characters, celebrities, or real people's likenesses.
- Do not download stock photographs, external raster textures, 3D models, HDRIs, recorded ambience, placeholder-service images, or assets from Unsplash, Pexels, Pixabay, Google Images, or any source not explicitly permitted. This template is intentionally procedural and code-drawn.
- Do not use restricted component source, commercial fonts, dependencies without an allowed license, remote scripts, CDN links, hotlinked assets, third-party APIs, analytics, or runtime network requests.
- Do not add a backend, server routes, database, authentication, remote forms, accounts, sharing services, or live-data claims. All controls must work locally and no interaction may submit data.
- Do not autoplay audio, force sound on after reload, add background video, auto-rotate the camera, or create continuous decorative motion when prefers-reduced-motion is set.
- Do not turn the hero into a typography-led landing page, add a stock-image backdrop, bury the 3D scene below the fold, or add unrelated pricing, testimonial, feature-card, FAQ, or marketing sections.
- Do not use heavy postprocessing, unbounded particle or ripple arrays, external physics engines, or assets that push dist/ above 20 MB. Preserve the fixed seed, instancing, pixel-ratio caps, and mobile geometry reductions.
- Do not allow water dragging and camera orbiting to fight over the same pointer, page scrolling during canvas gestures, tiny touch targets, horizontal overflow, clipped controls, or console errors at 1440×900 and 390×844.
- Do not introduce a second page or bare-directory links. The deliverable is index.html with static relative assets; any future internal navigation must point to a real HTML file or hash route.
- Do not emit source maps, copy src/ into dist/, use absolute deployment paths, or require more than the single npm run build command. The production output must be minified static files in dist/.
- Do not load fonts from Google Fonts or another CDN, and do not add SEO metadata blocks, Open Graph tags, JSON-LD, sitemaps, keyword-stuffed headings, dates, or promotional claims. Use only the plain variable-driven document title and local favicon.

---
Inspired by Interactive 3D Stream Diorama — https://www.kimi.com/showcases/3dmake
— Prompt by VibeFather · https://vibefather.ai/t/interactive-3d-stream-diorama · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
