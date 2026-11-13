# Infinite Canvas Moodboard

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
[BRAND]'s studio table for [PROJECT]: one full-viewport, pannable and zoomable world that opens already covered in five named moodboards. Photographs, sticky notes and color swatches lie slightly rotated and overlapping on a saturated green cutting mat. There is no scrolling page and no marketing section: the canvas is the first screen and the whole product. Visitors drag anything with momentum, jump between boards with an eased camera, read a live minimap, and press one button to send every piece flying into labeled tag groups and back again. If the variable values differ from the defaults, rewrite all copy (board names, notes, captions, swatch names, alt text) to fit them, keep all of it in src/content.ts, and keep every item's id, position, size, rotation, image file and tag slot.

- Audience: Creative studios, art directors, interior and brand designers, and portfolio builders who want to present a body of visual research as a place to explore, for [PROJECT].
- Goal: Within seconds of the first drag the site should feel like a real tool a studio uses every day: the visitor pans, zooms into one board, throws a photo, clusters by tag and returns everything to its spot.
- Tone: Working studio: dry, specific and a little opinionated. Notes read like colleagues talking over a table, with real quantities and prices. Tool labels are short and plain.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), gsap (GSAP Standard License (free, including commercial use)), lucide-react (ISC), @fontsource-variable/bricolage-grotesque (OFL-1.1), @fontsource-variable/instrument-sans (OFL-1.1), @fontsource/dm-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Create a Vite 5 + React 18 + TypeScript project with base './', build.outDir 'dist' and build.sourcemap false. Single entry index.html, no router.
  - Extend the Tailwind theme with the exact colors below and fontFamily display 'Bricolage Grotesque Variable', body 'Instrument Sans Variable', mono 'DM Mono'.
  - Import the Fontsource packages in src/main.tsx: Bricolage Grotesque variable, Instrument Sans variable, DM Mono 400 and 500.
  - File layout: src/content.ts (all copy and item data), src/camera.ts (camera state, screen/world conversion, fit, inertia), src/items.ts (item positions, throw physics, spring), src/cluster.ts (cluster layout and arcs), src/Minimap.tsx, src/Panels.tsx, src/App.tsx.
  - Write the camera and physics by hand. World: one absolutely positioned div with transform-origin 0 0 and transform translate3d(x, y, 0) scale(k), will-change transform. All per-frame writes go straight to DOM styles from a single requestAnimationFrame loop using refs; React state only holds slow UI state (selected item, cluster mode, active board, search text, rounded zoom percent).
  - Set html, body and #root to height 100dvh, overflow hidden, overscroll-behavior none. The canvas root has touch-action none and user-select none. Attach the wheel listener with passive false and call preventDefault.
  - Keep images in public/images and reference them with relative paths. Set draggable false and pointer-events none on every img.
  - Write ASSETS.md at the project root listing every downloaded image, plus Lucide and the fonts.

## Variables
- [BRAND] — Studio name (default: "Quince Yard"). Invented studio; shown on the index card and in the page title.
- [PROJECT] — Project on the table (default: "Samphire Point Hotel"). The job these boards are for. Notes, captions and swatch names follow it.
- [DIRECTION] — Creative direction line (default: "Salt, rope and low light: a hotel that feels like the tide just went out."). One sentence under the project name.
- [BOARDS] — Five board names (default: "Arrival, Rooms, Tide Bar, Print, Uniforms"). Comma-separated, exactly five, in order b1 to b5.
- [TAGS] — Five tag names (default: "Texture, Light, Objects, Pattern, Color"). Comma-separated, exactly five. The slots keep their meaning: surfaces, atmosphere, things, repeating motifs, palette.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/infinite-canvas-moodboard in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Mat Green `#0A5C4B` — The table: full-viewport background, a self-healing cutting mat. The color people remember.
- Mat Deep `#074537` — Radial vignette at the viewport edges, from transparent at 55% to this color at 100%.
- Dot Minor `#2F8B75` — Fine grid dots.
- Dot Major `#7CCDB5` — Every 8th grid dot, slightly larger.
- Vermilion `#FF4A1C` — The single action color: primary button fill with Ink text, selection ring, minimap viewport rectangle, active board marker, Objects tag dot.
- Paper `#FFF8E8` — Photo mats, swatch captions, floating panels, board headings and crop marks on the mat, Color tag dot.
- Ink `#10231E` — All text on paper, notes and vermilion.
- Ink Soft `#4A5C55` — Secondary text on paper only.
- Marigold `#FFC21F` — Sticky note, tape strips at 70% opacity, Texture tag dot.
- Bubblegum `#FF9CC7` — Sticky note, Pattern tag dot.
- Sky `#86D2FF` — Sticky note, Light tag dot.

### Typography
- Display: board headings, project name, group labels, sticky note text (weight 500): Bricolage Grotesque (OFL), weights 500/700/800
- Interface text: panel rows, buttons, chips, search field: Instrument Sans (OFL), weights 400/500/600
- Mono: photo captions, hex codes, counts, zoom percent, note signatures: DM Mono (OFL), weights 400/500

### Layout & motion
- Spacing: World units are CSS pixels at 100% zoom. Floating panels sit 16px from the viewport edge with 8px gaps; panel padding 14px; rows 40px tall on desktop, 44px minimum tap targets under 768px.
- Radius: Paper items are nearly square: photo mats and swatches 3px, notes 2px. Floating panels 14px, buttons 9px, chips full pill.
- Motion: Pan inertia: on release take velocity from the last 80ms of pointer samples, cap at 3 px/ms, multiply by 0.94 per 16.67ms and stop below 0.02 px/ms.
- Motion: Zoom: k is limited to 0.08 to 2.5. Wheel and pinch keep the world point under the cursor or finger midpoint fixed.
- Motion: Item drag: lift on grab over 120ms (scale 1.035, rotation eases to 0, deeper shadow, brought to top). On release, throw with the last 80ms velocity (cap 1.8 px/ms), friction 0.90 per 16.67ms, then a spring back to rest scale 1 and home rotation (stiffness 220, damping 18, mass 1) with a small visible overshoot.
- Motion: Camera moves (board, fit, minimap click, item): GSAP tween on progress t, ease power2.inOut, duration 0.6s + 0.5s * min(1, distance / 2500) in world units. Interpolate the world center linearly and log(k) linearly, then multiply k by 1 - dip * sin(pi * t), where dip = min(0.35, distance / 8000), so long trips pull back slightly in mid-flight. Any pointer or wheel input on the canvas kills the running tween.
- Motion: Cluster: each item tweens a progress value over 0.85s, ease power3.inOut, along a quadratic bezier from its current spot to its target. Control point is the midpoint offset perpendicular by 120 + (index % 5) * 30 world units, sign alternating by index. Rotation tweens to the target. Delay = groupIndex * 0.06s + itemIndexInGroup * 0.035s. Return uses the same arcs over 0.7s in the reverse direction of offset.
- Motion: Load: items fade from opacity 0 and scale 0.96 to rest, staggered 0.02s in array order, 0.4s each, ease power2.out. The hint pill fades in after 1s.
- Motion: prefers-reduced-motion: no inertia, throw, spring or stagger; camera moves and cluster changes are instant cuts; lift changes only the shadow.
- Imagery: 18 photographs on paper mats: 6 generated from one shoot for the project, 12 CC0 museum works from Cleveland Museum of Art Open Access (coast paintings, Japanese wave prints, textiles, bowls). Together with sticky notes and swatches they form the first-screen visual anchor. Everything else, including grid, crop marks, tape and note curl, is drawn in CSS.

## Pages & Sections
### [BRAND], [PROJECT] (`index.html`)
1. **The table (world and grid)** — The page has no scrolling and no header band. The viewport is the green mat. Five boards live in world coordinates (x, y, w, h), named in order from [BOARDS]:
b1 'Arrival' 0, 0, 1080, 960
b2 'Rooms' 1200, -40, 1070, 960
b3 'Tide Bar' 2380, 20, 900, 930
b4 'Print' 120, 1040, 1320, 900
b5 'Uniforms' 1620, 1010, 1310, 900
A board has no fill. It shows Paper crop marks at its four corners (L shapes, 44 long, 3 thick, 70% opacity) and a heading at its top-left: a mono number ('01') in DM Mono 500 at 26 world units above the name in Bricolage Grotesque 800 at 84 world units, Paper, with the piece count in DM Mono 400 at 26 to the right of the name. Headings sit inside the world, so they scale with it.
   Layout: Canvas root fills the viewport. Grid layer is a fixed full-viewport div behind the world using two radial-gradient backgrounds: minor dots radius 1.2px and major dots radius 2px at 8x spacing. Base spacing is 32 world units times k, with background-position following the camera. Below k 0.5 multiply spacing by 4 so dots never turn to noise. Vignette layer sits above the grid, below the world, with pointer-events none.
Opening view: desktop fits all boards into a safe rectangle (left 336, right 48, top 48, bottom 104). Under 768px it fits b1 into safe rectangle (top 76, sides 12, bottom 176).
   Motion: Panning: drag empty table with one finger or the left button; also space + drag or middle button anywhere. Grab cursor on table, grabbing while panning. Wheel: ctrlKey or metaKey is pinch and zooms by exp(-deltaY * 0.01). deltaMode 1, or integer |deltaY| of 40 or more with deltaX 0, is a mouse wheel and zooms by exp(-deltaY * 0.0016). Anything else pans by deltaX and deltaY. Two touch pointers pinch and pan together, and cancel any item drag. Keep the view center within the world bounds expanded by 1200 units.
2. **Pieces on the table** — 36 pieces, in this exact array order, which is also the starting stack order. Positions are relative to the board origin. Format: id | kind | board | tag | x,y | width | rotation | file or color | caption or note text.
p-marsh | photo | b1 | Light | 0,120 | w660 | -1.2 deg | marsh.webp | Marsh at first light
p-lobby | photo | b1 | Texture | 620,150 | w440 | +2 deg | lobby.webp | Lobby plaster and terrazzo
p-pourville | photo | b1 | Light | 60,500 | w400 | +1.4 deg | low-tide-pourville.jpg | Low Tide at Pourville, Monet
n-1 | note | b1 | Light | 470,510 | w240 | -2.5 deg | marigold | Guests arrive after two hours of gravel road. The first room has to say: slow down, the tide sets the schedule. (Ines)
s-sand | swatch | b1 | Color | 730,520 | w150 | -4 deg | #D9C49A | Low-Tide Sand
s-samphire | swatch | b1 | Color | 860,560 | w150 | +5 deg | #6F8F3A | Samphire
n-2 | note | b1 | Texture | 720,700 | w240 | +3 deg | pink | Terrazzo with shell chips for the lobby floor. Ardley Stoneworks quoted $38 per sq ft, 6 weeks. (Tomas)
p-room | photo | b2 | Light | 0,120 | w360 | -1.5 deg | room.webp | Marsh-facing room
p-linen | photo | b2 | Texture | 330,140 | w300 | +2.2 deg | linen.webp | Washed linen, two dyes
p-smallwaves | photo | b2 | Pattern | 610,130 | w460 | -1 deg | small-waves.jpg | Small Waves, Sekka
p-teabowl | photo | b2 | Objects | 360,470 | w320 | -2 deg | tea-bowl.jpg | Tea bowl, Momoyama period
s-seaglass | swatch | b2 | Color | 680,480 | w150 | +3 deg | #8CC7B8 | Sea Glass
s-kiln | swatch | b2 | Color | 820,500 | w150 | -3 deg | #B8AC93 | Kiln Ash
n-3 | note | b2 | Color | 60,640 | w240 | +2 deg | sky | 22 rooms, 9 face the marsh. Those get the blue headboard, the other 13 get ochre. (Priya)
n-4 | note | b2 | Texture | 690,700 | w240 | -3 deg | marigold | Washed linen only, no throw pillows. Tomas, I mean it. (Priya)
p-bar | photo | b3 | Light | 0,120 | w500 | +1.2 deg | bar.webp | Tide Bar at dusk
p-nocturne | photo | b3 | Light | 460,160 | w440 | -2 deg | nocturne.jpg | Nocturne, Whistler
p-marbled | photo | b3 | Objects | 40,540 | w340 | -1.5 deg | marbled-bowl.jpg | Marbled bowl, Northern Song
n-5 | note | b3 | Objects | 380,500 | w240 | +2.5 deg | pink | 14 seats at the zinc counter. The one-sheet menu gets printed daily, so it has to survive a tired copier. (Tomas)
n-6 | note | b3 | Objects | 640,540 | w240 | -2 deg | marigold | This glaze for oyster service? Hollis Kiln needs 6 weeks for 120 pieces, $22 each. (Ines)
s-night | swatch | b3 | Color | 360,720 | w150 | -4 deg | #1F2A33 | Night Harbor
s-rope | swatch | b3 | Color | 510,740 | w150 | +4 deg | #B98B4E | Rope
p-rising | photo | b4 | Pattern | 0,120 | w600 | -1.4 deg | rising-waves.jpg | Rising Waves, Sekka
p-hiroshige | photo | b4 | Pattern | 560,120 | w440 | +1.8 deg | shellfish-susaki.jpg | Shellfish at Susaki, Hiroshige
p-feathered | photo | b4 | Texture | 520,460 | w560 | -1 deg | feathered-panel.jpg | Feathered panel, Peru
p-shawl | photo | b4 | Pattern | 40,590 | w420 | +2 deg | shawl-border.jpg | Shawl border, Kashmir
s-yellow | swatch | b4 | Color | 1000,130 | w150 | +5 deg | #F2B90F | Feather Yellow
s-red | swatch | b4 | Color | 1110,290 | w150 | -3 deg | #B3341E | Oxide Red
n-7 | note | b4 | Pattern | 1050,520 | w240 | +3 deg | sky | Key-card sleeve: crop into this wave, drop the moon. Two inks keep it under $0.40 a sleeve. (Ines)
p-jacket | photo | b5 | Objects | 0,130 | w340 | -1.8 deg | jacket.webp | Indigo chore jacket
p-riga | photo | b5 | Objects | 300,120 | w540 | +1.5 deg | prestige-robe.jpg | Prestige robe, Nigeria
p-munisak | photo | b5 | Pattern | 800,130 | w500 | -1.2 deg | robe-bukhara.jpg | Woman's robe, Bukhara
p-loom | photo | b5 | Pattern | 360,470 | w320 | -2.4 deg | leaf-loom.jpg | Leaf loom width, Alsace
s-indigo | swatch | b5 | Color | 700,470 | w150 | +3 deg | #17305E | Tide Indigo
s-zinc | swatch | b5 | Color | 850,520 | w150 | -4 deg | #8E9A9C | Zinc
n-8 | note | b5 | Color | 1040,530 | w240 | +2.4 deg | pink | Indigo jackets for front of house, undyed aprons in the kitchen. 34 staff at $180 each. (Priya)
Note signatures: the name in parentheses renders on its own line as '— Ines' in DM Mono 400 at 15 units. Tags above name slots 1 to 5 of [TAGS].
   Layout: Photo: Paper mat, width w, padding 10 top and sides, image fills the inner width with its natural ratio and object-fit cover, then a 34-unit caption row in DM Mono 400 at 15 units, Ink, single line with ellipsis, with a 9-unit tag dot at the right. Tape: p-marsh, p-rising, p-bar, p-jacket and p-smallwaves carry a 96x28 Marigold strip at 70% opacity across the top center, rotated -3 deg.
Note: square w x w, flat color fill (marigold, pink or sky), padding 20, Bricolage Grotesque 500 at 20 units with line-height 1.2, Ink. Keep rewritten note text under 120 characters so it fits. Bottom-right curl from a 26-unit linear-gradient corner.
Swatch: Paper card 150 x 190, radius 3, padding 8. Upper 124 units are the flat color, below it the name in Instrument Sans 600 at 15 units and the hex in DM Mono 400 at 13 units, Ink Soft.
All pieces share a layered shadow: 0 1px 1px rgba(3,30,24,.35), 0 6px 12px rgba(3,30,24,.28), 0 18px 32px rgba(3,30,24,.18). While held: 0 4px 6px rgba(3,30,24,.3), 0 18px 32px rgba(3,30,24,.35), 0 44px 70px rgba(3,30,24,.35). Each piece is a button element with an aria-label from its caption or note text.
   Motion: Drag threshold 4px. Under it a release is a click: selects the piece with a 3-unit Vermilion ring offset by 4 units, edged outside by a 1-unit Paper line so it reads on the green mat, and clicking a swatch also copies its hex to the clipboard with a small toast 'Copied #17305E' for 1.4s, failing silently if the clipboard is unavailable. Double-click eases the camera to fit the piece with 15% padding. Dragging in board mode updates the piece's home position. Dragging in cluster mode changes only its cluster position, so Return still restores home. Below k 0.45 photo captions fade to 0 opacity over 150ms.
3. **Index card (top-left panel)** — Eyebrow in DM Mono 500 at 12px uppercase: '[BRAND] / STUDIO TABLE'. Project name '[PROJECT]' in Bricolage Grotesque 700 at 26px. [DIRECTION] in Instrument Sans 400 at 14px, Ink Soft. Meta line in DM Mono 400 at 12px: 'Round 2 of 3 · 36 pieces · 5 boards'. Search field with Search icon and placeholder 'Search boards and pieces'. Board rows: mono number, name, piece count right-aligned ('01 Arrival 7'). Below the rows a full-width row 'Fit all' with the Maximize icon. Empty search state: 'Nothing on the table matches.' The optional [CREDIT] link goes at the very bottom of this card in DM Mono 400 at 11px, since the site has no footer.
   Layout: Fixed at top 16, left 16, width 288, Paper, radius 14, shadow as a held piece. Search filters board names and piece captions or note text live: matching boards stay as rows, and matching pieces appear below them as rows with a tag dot. Clicking a piece row eases to it and selects it. The row for the board under the view center gets a 3px Vermilion left marker and Ink 600 text.
Under 768px the card collapses: a 52px top bar at top 12, sides 12, shows [BRAND], the active board name and a PanelLeft 'Boards' button. The button opens a bottom sheet (max height 62dvh, radius 14 on top, drag handle, X to close) with this same content. Picking a row closes the sheet, then moves the camera.
   Motion: Row hover: background rgba(16,35,30,.06). Clicking a board runs the camera move to fit the board with 8% padding inside the safe rectangle. Keys: 1 to 5 jump to boards, 0 fits all, / focuses search, Esc deselects and clears search. Bottom sheet slides in over 240ms.
4. **Tag rail (bottom-left)** — Primary button 'Cluster by tag' with Shapes icon, Vermilion fill, Ink text, Instrument Sans 600. Then five chips, one per tag, each with its dot color and count: Texture 5, Light 6, Objects 6, Pattern 7, Color 12. While clustered the primary button reads 'Return to boards' with Undo2 icon.
   Layout: Fixed at bottom 16, left 16, one row, Paper panel with radius 14, padding 6, gap 4. Chips are 36px tall pills. Tag dots: Texture Marigold, Light Sky, Objects Vermilion, Pattern Bubblegum, Color Paper with a 1px Ink outline. Under 768px the rail spans bottom 12, sides 12, with the button pinned as an icon plus short label ('Cluster' / 'Return') and the chips scrolling horizontally with hidden scrollbars.
Cluster layout, computed at runtime from measured piece sizes: groups use the [TAGS] order, in two rows (slots 1, 2, 3, then 4, 5). Inside each group, shelf-pack the pieces in array order into rows at most 1000 units wide with 24-unit gaps, at scale 0.8 and with rotation alternating -1 and +1 deg. Column stride is the widest group + 100; row stride is the tallest group in that row + 160. Center the whole layout on the world center. Each group has a label above it: the tag name in Bricolage Grotesque 800 at 72 units in Paper, a 22-unit tag dot, and the count in DM Mono 400 at 26. Hide board headings and crop marks while clustered (opacity 0).
   Motion: 'Cluster by tag' or key C: pieces fly along the arcs from Design motion, group labels fade in once the last piece lands, and the camera fits the whole cluster layout at the same time. A chip click while on boards enters cluster mode and fits that group. A chip click while clustered fits that group and dims every other group's pieces to 0.28 opacity over 200ms; clicking the active chip again clears it and fits all. 'Return to boards' or C sends every piece back to its exact home x, y, rotation and stack order, then the camera fits all boards. Clicks during a running flight reverse from the current positions rather than jumping.
5. **Minimap and zoom (bottom-right)** — Zoom control: Minus button, zoom percent in DM Mono 500 ('32%'), Plus button, Maximize button. Clicking the percent returns to 100% about the viewport center. Keys + and - zoom by 1.25 about the center; arrow keys pan by 80px. A hint pill at top 16, right 16 reads 'Drag the table to pan. Scroll to zoom. Drag anything.' in Instrument Sans 500 at 13px on Paper; it fades out on the first pan, zoom or drag and does not return.
   Layout: Stacked at bottom 16, right 16 and right-aligned, 8px gap: zoom control on top, minimap below. Minimap is a Paper panel 232 x 150, radius 14, padding 6, holding a device-pixel-ratio canvas with a Mat Green rounded inner rectangle. Each piece draws as a filled rectangle at its current position: photos Paper, notes their note color, swatches their own color. Viewport rectangle is a 1.5px Vermilion stroke with 14% Vermilion fill and a 1px Paper line outside the stroke. Under 768px the minimap is 128 x 88, sits at bottom 72, right 12, and the zoom control sits at bottom 72, left 12 with 44px buttons. On mobile the hint reads 'Drag to pan. Pinch to zoom.' and sits below the top bar.
   Motion: Redraw the minimap in the shared rAF loop only when the camera or a piece changed. Its bounds are the bounding box of all pieces and boards plus 200 units, eased toward the new box at 12% per frame during cluster changes. Dragging the viewport rectangle moves the camera 1:1 with no easing. Clicking elsewhere on the minimap runs the camera move to center that point at the current zoom.

## Assets
- image: Item p-marsh on the first board. Download https://media.vibefather.ai/assets/cc7c93df-a1a1-4517-ba6b-a6c1e8f6c6ca/marsh.webp to public/images/marsh.webp. Alt: 'A salt marsh at dawn with winding blue channels through green samphire flats under an orange sky.' Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Item p-lobby on the first board. Download https://media.vibefather.ai/assets/cc7c93df-a1a1-4517-ba6b-a6c1e8f6c6ca/lobby.webp to public/images/lobby.webp. Alt: 'A hotel lobby with limewashed walls, a shell terrazzo floor and a marigold upholstered bench in morning sun.' Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Item p-room on the second board. Download https://media.vibefather.ai/assets/cc7c93df-a1a1-4517-ba6b-a6c1e8f6c6ca/room.webp to public/images/room.webp. Alt: 'A guest room with an indigo headboard, rumpled white linen and a tall window onto the marsh.' Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Item p-linen on the second board. Download https://media.vibefather.ai/assets/cc7c93df-a1a1-4517-ba6b-a6c1e8f6c6ca/linen.webp to public/images/linen.webp. Alt: 'Folded washed linen in indigo and marigold, seen from above on a green table.' Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Item p-bar on the third board. Download https://media.vibefather.ai/assets/cc7c93df-a1a1-4517-ba6b-a6c1e8f6c6ca/bar.webp to public/images/bar.webp. Alt: 'A small bar at dusk with a zinc counter, green glazed tile and amber glass pendant lights.' Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Item p-jacket on the fifth board. Download https://media.vibefather.ai/assets/cc7c93df-a1a1-4517-ba6b-a6c1e8f6c6ca/jacket.webp to public/images/jacket.webp. Alt: 'An indigo cotton chore jacket with brass buttons hanging from a wooden peg on a limewashed wall.' Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Item p-pourville. Download https://openaccess-cdn.clevelandart.org/1947.196/1947.196_web.jpg to public/images/low-tide-pourville.jpg. Alt: 'Oil painting of low tide below pale cliffs with gold light on blue water.' Source page https://clevelandart.org/art/1947.196; author Claude Monet; Cleveland Museum of Art Open Access, CC0. Record path, source URL, author and license in ASSETS.md.
- image: Item p-smallwaves. Download https://openaccess-cdn.clevelandart.org/1988.23.2.20/1988.23.2.20_web.jpg to public/images/small-waves.jpg. Alt: 'Woodblock print of low, layered waves in sand and pale gray bands.' Source page https://clevelandart.org/art/1988.23.2.20; author Kamisaka Sekka; Cleveland Museum of Art Open Access, CC0. Record path, source URL, author and license in ASSETS.md.
- image: Item p-teabowl. Download https://openaccess-cdn.clevelandart.org/1983.158/1983.158_web.jpg to public/images/tea-bowl.jpg. Alt: 'A rough brown stoneware tea bowl on a gray ground.' Source page https://clevelandart.org/art/1983.158; author Unknown maker, Japan, Momoyama period; Cleveland Museum of Art Open Access, CC0. Record path, source URL, author and license in ASSETS.md.
- image: Item p-nocturne. Download https://openaccess-cdn.clevelandart.org/1941.89/1941.89_web.jpg to public/images/nocturne.jpg. Alt: 'Gray print of a lone boat on still water with a dim town behind it.' Source page https://clevelandart.org/art/1941.89; author James McNeill Whistler; Cleveland Museum of Art Open Access, CC0. Record path, source URL, author and license in ASSETS.md.
- image: Item p-marbled. Download https://openaccess-cdn.clevelandart.org/2012.449/2012.449_web.jpg to public/images/marbled-bowl.jpg. Alt: 'A ceramic bowl with swirling brown and cream marbled clay.' Source page https://clevelandart.org/art/2012.449; author Unknown maker, China, Northern Song dynasty; Cleveland Museum of Art Open Access, CC0. Record path, source URL, author and license in ASSETS.md.
- image: Item p-rising. Download https://openaccess-cdn.clevelandart.org/1988.23.1.7/1988.23.1.7_web.jpg to public/images/rising-waves.jpg. Alt: 'Woodblock print of a cream wave curling around a pale moon on deep navy.' Source page https://clevelandart.org/art/1988.23.1.7; author Kamisaka Sekka; Cleveland Museum of Art Open Access, CC0. Record path, source URL, author and license in ASSETS.md.
- image: Item p-hiroshige. Download https://openaccess-cdn.clevelandart.org/1985.315/1985.315_web.jpg to public/images/shellfish-susaki.jpg. Alt: 'Woodblock print of people gathering shellfish on tidal flats under a peach sky.' Source page https://clevelandart.org/art/1985.315; author Utagawa Hiroshige; Cleveland Museum of Art Open Access, CC0. Record path, source URL, author and license in ASSETS.md.
- image: Item p-feathered. Download https://openaccess-cdn.clevelandart.org/2002.93/2002.93_web.jpg to public/images/feathered-panel.jpg. Alt: 'A textile panel of blue and yellow feathers in large checker blocks.' Source page https://clevelandart.org/art/2002.93; author Unknown maker, Peru, Far South Coast; Cleveland Museum of Art Open Access, CC0. Record path, source URL, author and license in ASSETS.md.
- image: Item p-shawl. Download https://openaccess-cdn.clevelandart.org/1934.199/1934.199_web.jpg to public/images/shawl-border.jpg. Alt: 'A woven shawl border with red and green curving cone motifs on gold.' Source page https://clevelandart.org/art/1934.199; author Unknown maker, Kashmir; Cleveland Museum of Art Open Access, CC0. Record path, source URL, author and license in ASSETS.md.
- image: Item p-riga. Download https://openaccess-cdn.clevelandart.org/2013.6/2013.6_web.jpg to public/images/prestige-robe.jpg. Alt: 'A wide indigo robe with pale embroidered panels, laid flat.' Source page https://clevelandart.org/art/2013.6; author Unknown maker, Nigeria; Cleveland Museum of Art Open Access, CC0. Record path, source URL, author and license in ASSETS.md.
- image: Item p-munisak. Download https://openaccess-cdn.clevelandart.org/2009.267/2009.267_web.jpg to public/images/robe-bukhara.jpg. Alt: 'A flared robe in a bold plum, yellow and red ikat pattern.' Source page https://clevelandart.org/art/2009.267; author Unknown maker, Bukhara, Uzbekistan; Cleveland Museum of Art Open Access, CC0. Record path, source URL, author and license in ASSETS.md.
- image: Item p-loom. Download https://openaccess-cdn.clevelandart.org/1935.113/1935.113_web.jpg to public/images/leaf-loom.jpg. Alt: 'A deep blue printed cotton with pale stylized leaf sprays.' Source page https://clevelandart.org/art/1935.113; author Unknown maker, Alsace, France; Cleveland Museum of Art Open Access, CC0. Record path, source URL, author and license in ASSETS.md.
- icon: Lucide via lucide-react (ISC) only: Search, Plus, Minus, Maximize, Shapes, Undo2, PanelLeft, X. Default stroke width 1.75. Listed once in ASSETS.md.
- font: Self-hosted through Fontsource: @fontsource-variable/bricolage-grotesque, @fontsource-variable/instrument-sans and @fontsource/dm-mono, imported in src/main.tsx. All OFL-1.1.

## Don'ts
- No backend, server code, API routes, databases, auth, accounts, sync or uploads: boards are local sample data in src/content.ts, and a refresh restores the starting layout. Do not add saving of any kind.
- No canvas, whiteboard or design-tool SDK, and no drag or gesture library. The camera, inertia, throw physics and spring are written from scratch; GSAP handles only the camera and cluster tweens.
- Do not copy any existing whiteboard or design tool's logo, product name, toolbar layout, icon set or cursor style. Use the panel placement and native grab cursors given here.
- No code from commercially licensed canvas SDKs or restricted UI libraries such as Aceternity UI or Tailwind Plus.
- No copy, sample boards or onboarding text from existing moodboard products. No tutorial overlay; the one hint pill is the only guidance.
- No images from real designers, campaigns, magazines or social pinning sites, and no photos showing recognizable brands, logos, packaging or landmarks used as a brand.
- No Unsplash, Pexels, Pixabay, Google Images, placeholder-image services or hotlinked files. Use exactly the 18 listed images, downloaded into public/images.
- No commercial fonts and no font from fonts.googleapis.com, fonts.gstatic.com, Adobe Fonts or any CDN. Self-host through the listed Fontsource packages.
- Do not change the table to off-white, cream or a neutral gray: the green mat with Paper pieces and Vermilion is this template's identity.
- Do not add a scrolling page, landing section, nav bar, pricing or footer band. The canvas is the only screen.
- No dates or years in the interface.
- No analytics, CDN script or link tags, or external requests of any kind. Everything ships in dist/.
- Production build is minified with no source maps and no src/ in dist/; keep Vite base './' and dist/ under 20 MB.
- Any internal link points to a file name such as ./index.html, never a bare directory.
- Must work at 1440x900 and 390x844 with zero console errors, touch included, and must respect prefers-reduced-motion as specified.
- No mention of VibeFather in the site except the optional [CREDIT] link. All copy is US English.

---
— Prompt by VibeFather · https://vibefather.ai/t/infinite-canvas-moodboard · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
