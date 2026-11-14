# OdiaUI Design Language

> The philosophy behind every surface in this kit — extracted from the "warm
> clay / sepia minimal" reference style and fused with Odisha heritage motifs.

## Philosophy

The reference style is built on a single idea: **depth comes from tone and
soft shadows, never from lines**. Nothing in it is outlined; surfaces are
layers of the same warm paper, separated by elevation.

### 1. Warm paper neutrals

The canvas is not white — it is **eggshell cream**, like old paper and
sunlit stone. Pure white is reserved for the topmost layer (cards, pills),
so surfaces separate tonally without borders.

- Page background: warm cream (`--background`)
- Cards / popovers: near-white (`--card`) — one step brighter than the page
- Everything is tinted toward **yellow-warm** hues (oklch hue 70–85), never
  blue-gray. Cool gray is banned from surfaces.

### 2. Sepia ink, not black-gray

Text is **warm sepia ink** — dark brown-black (`--foreground`), with muted
text in warm brown-gray (`--muted-foreground`). Titles on tinted zones use
the deeper **sepia brown** (`--sand-foreground`). Nothing reads as
"computer gray".

### 3. Tonal layering instead of borders

Depth is built by nesting rounded zones of the same family:

```
page (cream) → card (white, huge radius, soft shadow) → media zone (tan
gradient, inset, rounded to the card's radius) → pills (white, soft shadow)
```

- `--sand` is the **accent tone of the site**: the warm tan wash used behind
  card media and tinted zones — a `color-mix` gradient (lighter top-left →
  deeper bottom-right), like light falling across sandstone.
- Borders exist in the token set (`--border`) but components avoid hard
  outlines; separation is tonal.

### 4. Large radii, generous softness

- Cards: `rounded-3xl` (24px) — the reference's signature silhouette
- Buttons: fully rounded pills (`rounded-full`)
- Inner zones inherit the parent radius (`rounded-[inherit]`)

### 5. Soft layered shadows, no hard drop

Shadows are **double-layered and quiet** — a tight contact shadow plus a
wide ambient one:

```
shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.07)]
```

Hover **raises** the ambient layer (elevation change), never darkens
aggressively. The default action button is **matte ink** — soft black with
this shadow — not glossy or gradient.

### 6. Accent through warm tint + one dark anchor

The palette has one warm accent family (tan/ochre `--sand`, `--accent`) and
anchors with near-black ink (`--primary`). Chart colors stay in the sepia
family: ochre gold, terracotta, olive, sepia brown, plum.

### 7. Heritage as quiet ornament

Odisha identity lives in **fine line details**, not loud color: the Ikat
diamond strip (`CardOrnament`), the Konark chakra markers, temple art
watermarks — all drawn at low opacity in theme tokens, all opt-out-able via
`watermark="none"`.

## Token map

| Token                     | Light            | Dark             | Role                                            |
| ------------------------- | ---------------- | ---------------- | ----------------------------------------------- |
| `--background`            | eggshell cream   | warm lamp-black  | canvas                                          |
| `--card`                  | white            | lifted warm dark | topmost surface                                 |
| `--foreground`            | sepia ink        | warm ivory       | text                                            |
| `--primary`               | soft ink black   | warm ivory       | the dark anchor; default buttons                |
| `--secondary` / `--muted` | warm stone       | warm dark stone  | quiet surfaces                                  |
| `--accent`                | light tan        | warm dark tan    | hover tint                                      |
| `--sand`                  | warm tan wash    | deep tan         | **the site's accent** — card media/tinted zones |
| `--sand-foreground`       | sepia brown      | warm ivory       | text on sand zones                              |
| `--border`                | warm hairline    | translucent warm | rare outlines only                              |
| `--ring`                  | warm brown       | warm light       | focus                                           |
| `--selection`             | ink + cream text | ivory + ink text | selection                                       |

## Site chrome: the hairline grid

The shell of the site (header, docs columns, footer, landing sections) is
drawn with **1px hairlines** (`border-grid`) instead of soft surfaces:

- **Header** — sticky, `border-b`, slight backdrop blur.
- **Docs** — three full-height columns separated by hairlines: sidebar
  (`border-r`), article, TOC rail (`border-l`). Sidebar rows are plain text
  with an ink left-bar marking the active page; group labels are uppercase
  letterspaced micro-labels.
- **Landing** — sections separated by `border-b`; the hero sits on a
  masked `bg-grid-lines` canvas; the title is solid ink (no gradient text).
- **Footer** — single `border-t` rule.

Hairlines are the _chrome_; components inside remain tonal and soft. Don't
mix the two inside one component.

## Component rules

- **Card** — `rounded-3xl`, no border, double soft shadow; `CardMedia`
  renders the `--sand` gradient wash; `CardOrnament` for Ikat dividers.
- **Button** — fully rounded, matte `bg-primary`, layered soft shadow;
  hover lifts the shadow; `outline` is a borderless white pill like the
  reference's date pills; `ghost`/`link` stay minimal; `frame` is the one
  heritage-bordered variant.
- **Everything else** — reuse the tokens; never hardcode surface colors
  outside design files, never introduce cool gray or a second accent hue.
