import * as React from "react"
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator"

import { cn } from "@/lib/utils"

/* ───────────────────────────────────────────────────────────
 * OdiaUI Separator
 *
 * Clean separators with simple Sambalpuri-inspired lines and
 * patterns. Drawn inline with theme tokens for light/dark.
 * ─────────────────────────────────────────────────────────── */

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

/** Simple Sambalpuri diamond */
function DiamondOrnament(props: IconProps) {
  return (
    <svg {...line32} {...props}>
      <path d="M16 5L27 16L16 27L5 16Z" />
      <path d="M16 11L21 16L16 21L11 16Z" fill="currentColor" />
    </svg>
  )
}

const ORNAMENTS = {
  diamond: DiamondOrnament,
} as const

type OrnamentName = keyof typeof ORNAMENTS

/* ── Repeating patterns (masked, theme-colored) ─────────── */

type PatternDef = { w: number; h: number; body: string }

const PATTERNS: Record<string, PatternDef> = {
  /** Sambalpuri ikat chain: linked diamonds */
  rekha: {
    w: 24,
    h: 14,
    body: `<path d='M0 7H2.5M21.5 7H24'/><path d='M3 4.5L5.5 7L3 9.5M21 4.5L18.5 7L21 9.5'/><path d='M12 1.5L18.5 7L12 12.5L5.5 7Z'/><path d='M12 4.5L15 7L12 9.5L9 7Z'/>`,
  },
  /** Simple bead row */
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

/* ── Rules ─────────────────────────────────────────────── */

type RuleKind = "single" | "double" | "dotted"

function Rule({ kind, vertical }: { kind: RuleKind; vertical: boolean }) {
  switch (kind) {
    case "dotted":
      return (
        <span
          aria-hidden
          className={cn(
            "border-dotted border-border",
            vertical ? "min-h-3 flex-1 border-l-2" : "w-full border-t-2"
          )}
        />
      )
    case "double":
      return (
        <span
          aria-hidden
          className={cn(
            "flex gap-[3px]",
            vertical ? "min-h-3 flex-1 flex-row" : "w-full flex-col"
          )}
        >
          <i className={cn("bg-border", vertical ? "w-px flex-1" : "h-px")} />
          <i className={cn("bg-border", vertical ? "w-px flex-1" : "h-px")} />
        </span>
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

type SeparatorVariant = "plain" | "default" | "dashed" | "double" | "diamond" | "rekha"

const ORNAMENTED: Partial<
  Record<SeparatorVariant, { ornament: OrnamentName; rule: RuleKind; size: string }>
> = {
  default: { ornament: "diamond", rule: "single", size: "size-4" },
  dashed: { ornament: "diamond", rule: "dotted", size: "size-4" },
  double: { ornament: "diamond", rule: "double", size: "size-4" },
  diamond: { ornament: "diamond", rule: "single", size: "size-4" },
}

const TILED = ["rekha"] as const

type SeparatorProps = SeparatorPrimitive.Props & {
  /** Visual style. `plain` is a simple hairline. */
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

  if ((TILED as readonly string[]).includes(variant)) {
    return (
      <SeparatorPrimitive
        {...base}
        className={cn(
          "flex shrink-0 items-center text-foreground/60",
          vertical ? "min-h-4 flex-col self-stretch" : "w-full flex-col gap-1.5",
          className
        )}
        {...props}
      >
        <span
          aria-hidden
          className={cn("bg-foreground/40", vertical ? "min-h-4 flex-1" : "w-full")}
          style={patternStyle(PATTERNS[variant], vertical)}
        />
        {!vertical && caption}
        {children}
      </SeparatorPrimitive>
    )
  }

  const spec = ORNAMENTED[variant] ?? ORNAMENTED.default!
  const name = ornament === null ? null : ornament ?? spec.ornament
  const Orn = name ? ORNAMENTS[name] : null

  if (vertical) {
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
        {Orn && <Orn className="size-3 shrink-0" />}
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
export type { OrnamentName, SeparatorProps, SeparatorVariant }
