import * as React from "react"
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator"

import { cn } from "@/lib/utils"

/* ───────────────────────────────────────────────────────────
 * OdiaUI Separator
 *
 * Heritage ornaments drawn inline — no icon imports, only theme
 * tokens (border / foreground), so it follows shadcn light + dark.
 * ─────────────────────────────────────────────────────────── */

/* ── Ornaments (centre pieces) ─────────────────────────── */

type IconProps = React.SVGProps<SVGSVGElement>

const line32 = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const

const SPOKES_8 = Array.from({ length: 8 }, (_, i) => i * 45)
const SPOKES_8_OFFSET = SPOKES_8.map((a) => a + 22.5)
const BEADS_16 = Array.from({ length: 16 }, (_, i) => i * 22.5)

/** Konark wheel */
function ChakraOrnament(props: IconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      aria-hidden
      {...props}
    >
      <circle cx="50" cy="50" r="47" strokeWidth="4" />
      <circle cx="50" cy="50" r="37" strokeWidth="2" />
      {BEADS_16.map((a) => (
        <circle key={a} cx="50" cy="7.5" r="1.9" fill="currentColor" stroke="none" transform={`rotate(${a} 50 50)`} />
      ))}
      {SPOKES_8.map((a) => (
        <line key={a} x1="50" y1="15" x2="50" y2="35" strokeWidth="6.5" transform={`rotate(${a} 50 50)`} />
      ))}
      {SPOKES_8_OFFSET.map((a) => (
        <line key={a} x1="50" y1="15" x2="50" y2="35" strokeWidth="2.6" transform={`rotate(${a} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="15" strokeWidth="3.5" />
      <circle cx="50" cy="50" r="4.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Rekha deula with flag */
function DeulaOrnament(props: IconProps) {
  return (
    <svg {...line32} {...props}>
      <path d="M4.5 29.5H27.5M7 27H25" />
      <path d="M10 27V21H22V27" />
      <path d="M14.5 27V24.6A1.5 1.5 0 0 1 17.5 24.6V27" />
      <path d="M10 21C10 15.5 12 11 14.5 8.6L15 6.8H17L17.5 8.6C20 11 22 15.5 22 21" />
      <path d="M16 21V8.6M10.7 17.6H21.3M11.8 14.2H20.2M13.2 11.2H18.8" />
      <ellipse cx="16" cy="5.7" rx="3" ry="1.1" />
      <path d="M16 4.6V1.6" />
      <path d="M16.2 1.7L21.2 2.9L16.2 4.1Z" fill="currentColor" />
    </svg>
  )
}

/** Lotus */
function PadmaOrnament(props: IconProps) {
  return (
    <svg {...line32} {...props}>
      <path d="M16 4.5C19.2 8.6 19.2 13.8 16 19C12.8 13.8 12.8 8.6 16 4.5Z" />
      <path d="M16 19C12.4 19 8.8 16.9 7.8 12.4C11.9 12.4 15 14.6 16 19Z" />
      <path d="M16 19C19.6 19 23.2 16.9 24.2 12.4C20.1 12.4 17 14.6 16 19Z" />
      <path d="M16 19C11.4 20.2 6.2 18.6 3.8 13.6" />
      <path d="M16 19C20.6 20.2 25.8 18.6 28.2 13.6" />
      <path d="M6.5 23.5C9.6 25.2 12.8 26.2 16 26.2C19.2 26.2 22.4 25.2 25.5 23.5" />
      <path d="M11.5 28.8H20.5" />
    </svg>
  )
}

/** Odissi dancer in tribhangi */
function NrityaOrnament(props: IconProps) {
  return (
    <svg {...line32} {...props}>
      <path d="M13.6 4.6L14.4 2.3L16 3.4L17.6 2.3L18.4 4.6" />
      <circle cx="16" cy="6.8" r="2.2" fill="currentColor" />
      <path d="M16 9.2C14.8 12 17.2 14.6 16 18" />
      <path d="M15.6 10.4C12.8 9.6 10.8 7.4 9.6 4.8" />
      <path d="M16.4 10.6C19.4 11.6 21.8 11 23.8 8.4" />
      <path d="M16 17.4C12.6 18.8 11 23.4 10 28H22C21.6 24 19.8 18.8 16 17.4Z" fill="currentColor" fillOpacity={0.35} />
      <path d="M13 28V30.5M19.5 28L21 30.5" />
      <path d="M12.4 22.2H19.4" />
    </svg>
  )
}

/** Jagannath eye */
function EyeOrnament(props: IconProps) {
  return (
    <svg {...line32} {...props}>
      <path d="M1.8 16C6 9.6 11 7 16 7C21 7 26 9.6 30.2 16C26 22.4 21 25 16 25C11 25 6 22.4 1.8 16Z" />
      <circle cx="16" cy="16" r="6.2" />
      <circle cx="16" cy="16" r="3.2" />
      <circle cx="16" cy="16" r="1.1" fill="currentColor" stroke="none" />
      <path d="M6 10.6C9.4 5.8 22.6 5.8 26 10.6" />
      <path d="M16 4V2" />
    </svg>
  )
}

/** Diamond with inner diamond */
function DiamondOrnament(props: IconProps) {
  return (
    <svg {...line32} {...props}>
      <path d="M16 5L27 16L16 27L5 16Z" />
      <path d="M16 11L21 16L16 21L11 16Z" fill="currentColor" />
    </svg>
  )
}

/** Marigold */
function FlowerOrnament(props: IconProps) {
  return (
    <svg {...line32} {...props}>
      {SPOKES_8.map((a) => (
        <ellipse key={a} cx="16" cy="8.8" rx="3.1" ry="5.4" transform={`rotate(${a} 16 16)`} />
      ))}
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </svg>
  )
}

const ORNAMENTS = {
  chakra: ChakraOrnament,
  deula: DeulaOrnament,
  padma: PadmaOrnament,
  nritya: NrityaOrnament,
  eye: EyeOrnament,
  diamond: DiamondOrnament,
  flower: FlowerOrnament,
} as const

type OrnamentName = keyof typeof ORNAMENTS

/* ── Repeating border patterns (masked, so they take theme colour) ── */

type PatternDef = { w: number; h: number; body: string }

const PATTERNS: Record<string, PatternDef> = {
  /** Sambalpuri chain: linked diamonds */
  rekha: {
    w: 24,
    h: 14,
    body: `<path d='M0 7H2.5M21.5 7H24'/><path d='M3 4.5L5.5 7L3 9.5M21 4.5L18.5 7L21 9.5'/><path d='M12 1.5L18.5 7L12 12.5L5.5 7Z'/><path d='M12 4.5L15 7L12 9.5L9 7Z'/>`,
  },
  /** Pattachitra rosettes between beads */
  pattachitra: {
    w: 30,
    h: 14,
    body: `<path d='M15 1.8L17.4 7L15 12.2L12.6 7Z'/><path d='M9.8 7L15 4.6L20.2 7L15 9.4Z'/><circle cx='15' cy='7' r='1' fill='black' stroke='none'/><circle cx='3.5' cy='7' r='1.1' fill='black' stroke='none'/><circle cx='26.5' cy='7' r='1.1' fill='black' stroke='none'/><path d='M7 7H9M21 7H23'/>`,
  },
  /** Pata scroll: rolling vine with curls */
  pata: {
    w: 28,
    h: 16,
    body: `<path d='M0 13C6 13 8 4 14 4C20 4 22 13 28 13'/><path d='M18.6 8.6C17.6 11.8 13.4 11.2 13.4 8.6C13.4 6.8 15.8 6.4 16.2 8.2'/><path d='M9.4 8.6C10.4 11.8 14.6 11.2 14.6 8.6'/>`,
  },
  /** Kalinga checker band */
  kalinga: {
    w: 12,
    h: 12,
    body: `<path d='M0 0.6H12M0 11.4H12'/><rect x='0' y='2' width='6' height='4' fill='black' stroke='none'/><rect x='6' y='6' width='6' height='4' fill='black' stroke='none'/>`,
  },
  /** Bead row */
  dots: {
    w: 12,
    h: 6,
    body: `<circle cx='6' cy='3' r='1.9' fill='black' stroke='none'/>`,
  },
}

function patternStyle(def: PatternDef, vertical: boolean): React.CSSProperties {
  const { w, h, body } = def
  const [W, H] = vertical ? [h, w] : [w, h]
  const inner = vertical ? `<g transform='translate(${h} 0) rotate(90)'>${body}</g>` : body
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${W}' height='${H}' viewBox='0 0 ${W} ${H}' fill='none' stroke='black' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'>${inner}</svg>`
  const url = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
  return {
    maskImage: url,
    WebkitMaskImage: url,
    maskSize: `${W}px ${H}px`,
    WebkitMaskSize: `${W}px ${H}px`,
    maskRepeat: vertical ? "repeat-y" : "repeat-x",
    WebkitMaskRepeat: vertical ? "repeat-y" : "repeat-x",
    maskPosition: "center",
    WebkitMaskPosition: "center",
    ...(vertical ? { width: H } : { height: H }),
  }
}

/* ── Rules (the lines either side of an ornament) ──────── */

type RuleKind = "single" | "double" | "frame" | "dotted" | "beads"

function Rule({ kind, vertical }: { kind: RuleKind; vertical: boolean }) {
  switch (kind) {
    case "dotted":
      return (
        <span
          aria-hidden
          className={cn(
            "border-dotted border-border",
            vertical ? "min-h-3 flex-1 border-l-[3px]" : "w-full border-t-[3px]"
          )}
        />
      )
    case "double":
      return (
        <span aria-hidden className={cn("flex gap-[3px]", vertical ? "min-h-3 flex-1 flex-row" : "w-full flex-col")}>
          <i className={cn("bg-border", vertical ? "w-px flex-1" : "h-px")} />
          <i className={cn("bg-border", vertical ? "w-px flex-1" : "h-px")} />
        </span>
      )
    case "frame":
      return (
        <span aria-hidden className={cn("flex gap-[3px]", vertical ? "min-h-3 flex-1 flex-row" : "w-full flex-col")}>
          <i className={cn("bg-muted-foreground/40", vertical ? "w-[2px] flex-1" : "h-[2px]")} />
          <i className={cn("bg-border", vertical ? "w-px flex-1" : "h-px")} />
        </span>
      )
    case "beads":
      return (
        <span
          aria-hidden
          className={cn("bg-foreground/50", vertical ? "min-h-3 flex-1" : "w-full")}
          style={patternStyle(PATTERNS.dots, vertical)}
        />
      )
    default:
      return (
        <span
          aria-hidden
          className={cn("bg-border", vertical ? "min-h-2 w-px flex-1" : "h-px w-full")}
        />
      )
  }
}

/* ── Variants ──────────────────────────────────────────── */

type SeparatorVariant =
  | "plain"
  | "default"
  | "dashed"
  | "muted"
  | "frame"
  | "chakra"
  | "deula"
  | "padma"
  | "nritya"
  | "diamond"
  | "mala"
  | "rekha"
  | "pattachitra"
  | "pata"
  | "kalinga"
  | "jagannath"

/** Variants that centre an ornament between two rules. */
const ORNAMENTED: Partial<
  Record<SeparatorVariant, { ornament: OrnamentName; rule: RuleKind; size: string }>
> = {
  default: { ornament: "chakra", rule: "single", size: "size-8" },
  dashed: { ornament: "padma", rule: "dotted", size: "size-8" },
  muted: { ornament: "diamond", rule: "double", size: "size-4" },
  frame: { ornament: "deula", rule: "frame", size: "size-9" },
  chakra: { ornament: "chakra", rule: "single", size: "size-9" },
  deula: { ornament: "deula", rule: "single", size: "size-9" },
  padma: { ornament: "padma", rule: "single", size: "size-8" },
  nritya: { ornament: "nritya", rule: "single", size: "size-9" },
  diamond: { ornament: "diamond", rule: "single", size: "size-4" },
  mala: { ornament: "flower", rule: "beads", size: "size-6" },
}

const TILED = ["rekha", "pattachitra", "pata", "kalinga"] as const

const JAGANNATH_SIZES = [10, 14, 18, 28, 18, 14, 10]

function DiamondMark({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={size > 20 ? 1.6 : 2}
      strokeLinejoin="round"
      aria-hidden
      className="shrink-0"
    >
      <path d="M16 2L30 16L16 30L2 16Z" />
      {size >= 18 && <path d="M16 9L23 16L16 23L9 16Z" />}
      {size >= 28 && <circle cx="16" cy="16" r="2.2" fill="currentColor" stroke="none" />}
    </svg>
  )
}

/* ── Component ─────────────────────────────────────────── */

type SeparatorProps = SeparatorPrimitive.Props & {
  /** Visual style. `plain` is the stock shadcn hairline. */
  variant?: SeparatorVariant
  /** Swap the centre ornament (or pass `null` for none). */
  ornament?: OrnamentName | null
  /** Text shown under the ornament (horizontal only). */
  label?: React.ReactNode
}

function Separator({
  className,
  orientation = "horizontal",
  variant = "default",
  ornament,
  label,
  children,
  ...props
}: SeparatorProps) {
  const vertical = orientation === "vertical"
  const base = {
    "data-slot": "separator",
    "data-variant": variant,
    orientation,
  } as const

  /* Stock hairline. Vertical default stays a plain line, as in the design. */
  if (variant === "plain" || (vertical && variant === "default" && ornament === undefined)) {
    return (
      <SeparatorPrimitive
        {...base}
        className={cn(
          "shrink-0 bg-border",
          vertical ? "w-px self-stretch" : "h-px w-full",
          className
        )}
        {...props}
      >
        {children}
      </SeparatorPrimitive>
    )
  }

  const caption = label ? (
    <span className="text-center text-sm font-medium text-foreground">{label}</span>
  ) : null

  /* Tiled border patterns */
  if ((TILED as readonly string[]).includes(variant)) {
    return (
      <SeparatorPrimitive
        {...base}
        className={cn(
          "flex shrink-0 items-center text-foreground",
          vertical ? "min-h-4 flex-col self-stretch" : "w-full flex-col gap-1.5",
          className
        )}
        {...props}
      >
        <span
          aria-hidden
          className={cn("bg-foreground/50", vertical ? "min-h-4 flex-1" : "w-full")}
          style={patternStyle(PATTERNS[variant], vertical)}
        />
        {!vertical && caption}
        {children}
      </SeparatorPrimitive>
    )
  }

  /* Jagannath motif: rising diamonds on a thread */
  if (variant === "jagannath") {
    const thread = (key: string | number) => (
      <span
        key={key}
        aria-hidden
        className={cn("bg-foreground/40", vertical ? "min-h-1.5 w-px flex-1" : "h-px min-w-1.5 flex-1")}
      />
    )
    return (
      <SeparatorPrimitive
        {...base}
        className={cn(
          "flex shrink-0 text-foreground/70",
          vertical ? "min-h-24 flex-col items-center self-stretch" : "w-full flex-col gap-1.5",
          className
        )}
        {...props}
      >
        <div className={cn("flex items-center", vertical ? "h-full flex-col" : "w-full")}>
          <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-foreground/50" />
          {thread("s")}
          {JAGANNATH_SIZES.map((s, i) => (
            <React.Fragment key={i}>
              <DiamondMark size={s} />
              {thread(i)}
            </React.Fragment>
          ))}
          <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-foreground/50" />
        </div>
        {!vertical && caption}
        {children}
      </SeparatorPrimitive>
    )
  }

  /* Ornament between two rules */
  const spec = ORNAMENTED[variant] ?? ORNAMENTED.default!
  const name = ornament === null ? null : ornament ?? spec.ornament
  const Orn = name ? ORNAMENTS[name] : null
  const small = name === "diamond"

  if (vertical) {
    /* Bead garland, vertical: dot · diamond · dot */
    if (variant === "mala") {
      return (
        <SeparatorPrimitive
          {...base}
          className={cn("flex shrink-0 flex-col items-center gap-1 self-center text-foreground/70", className)}
          {...props}
        >
          <span aria-hidden className="size-1 rounded-full bg-foreground/60" />
          <DiamondMark size={10} />
          <span aria-hidden className="size-1 rounded-full bg-foreground/60" />
          {children}
        </SeparatorPrimitive>
      )
    }
    return (
      <SeparatorPrimitive
        {...base}
        className={cn(
          "flex min-h-6 shrink-0 flex-col items-center gap-1.5 self-stretch text-foreground/70",
          className
        )}
        {...props}
      >
        <Rule kind={spec.rule} vertical />
        {Orn && <Orn className={cn(small ? "size-3" : "size-5", "shrink-0")} />}
        <Rule kind={spec.rule} vertical />
        {children}
      </SeparatorPrimitive>
    )
  }

  return (
    <SeparatorPrimitive
      {...base}
      className={cn(
        "grid w-full shrink-0 grid-cols-[1fr_auto_1fr] items-center gap-x-3 gap-y-1.5 text-foreground/70",
        className
      )}
      {...props}
    >
      <Rule kind={spec.rule} vertical={false} />
      {Orn ? <Orn className={cn(spec.size, "shrink-0")} /> : <span />}
      <Rule kind={spec.rule} vertical={false} />
      {label && <div className="col-start-2 flex justify-center">{caption}</div>}
      {children}
    </SeparatorPrimitive>
  )
}

export { Separator }
export type { SeparatorProps, SeparatorVariant, OrnamentName }

/* ── Usage ──────────────────────────────────────────────────
<Separator />                                   // line + Konark wheel
<Separator variant="dashed" />                  // dotted + lotus
<Separator variant="muted" />                   // double line + diamond
<Separator variant="frame" />                   // framed + deula
<Separator variant="chakra" />
<Separator variant="deula" />
<Separator variant="padma" />
<Separator variant="nritya" />
<Separator variant="rekha" />                   // Sambalpuri chain
<Separator variant="pattachitra" />
<Separator variant="pata" />                    // scroll
<Separator variant="kalinga" />                 // checker band
<Separator variant="mala" />                    // bead garland
<Separator variant="jagannath" />
<Separator ornament="eye" label="ଓଡ଼ିଶା" />
<Separator variant="deula" label="Odisha Heritage" />

<Separator orientation="vertical" />                       // plain line
<Separator orientation="vertical" variant="diamond" />
<Separator orientation="vertical" variant="chakra" />
<Separator orientation="vertical" variant="mala" />
*/
