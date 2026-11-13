import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/* ───────────────────────────────────────────────────────────
 * OdiaUI Spinner
 *
 * Inherits the current text colour by default (so it works inside
 * Button, Badge, etc.). `color` maps to shadcn tokens; success and
 * warning have no shadcn token, so they use emerald / amber.
 * ─────────────────────────────────────────────────────────── */

const SPOKES_16 = Array.from({ length: 16 }, (_, i) => i * 22.5)
const BEADS_24 = Array.from({ length: 24 }, (_, i) => i * 15)

type SvgProps = React.ComponentProps<"svg">

/* ── Glyphs ────────────────────────────────────────────── */

/** Konark wheel — turns slowly */
function ChakraGlyph({ className, animate, ...props }: SvgProps & { animate: boolean }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      className={cn(animate && "animate-[spin_3s_linear_infinite]", className)}
      {...props}
    >
      <circle cx="50" cy="50" r="47" strokeWidth="4.5" />
      <circle cx="50" cy="50" r="38.5" strokeWidth="1.8" />
      {BEADS_24.map((a) => (
        <circle key={a} cx="50" cy="6.6" r="1.5" fill="currentColor" stroke="none" transform={`rotate(${a} 50 50)`} />
      ))}
      {SPOKES_16.map((a, i) => (
        <line
          key={a}
          x1="50"
          y1="12"
          x2="50"
          y2="36"
          strokeWidth={i % 2 === 0 ? 4.6 : 2.4}
          transform={`rotate(${a} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="14" strokeWidth="4" />
      <circle cx="50" cy="50" r="5" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Rekha deula with flag — breathes */
function DeulaGlyph({ className, animate, ...props }: SvgProps & { animate: boolean }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(animate && "animate-pulse", className)}
      {...props}
    >
      <path d="M4.5 29.5H27.5M7 27H25" />
      <path d="M10 27V21H22V27" />
      <path d="M14.5 27V24.6A1.5 1.5 0 0 1 17.5 24.6V27" />
      <path d="M10 21C10 15.5 12 11 14.5 8.6L15 6.8H17L17.5 8.6C20 11 22 15.5 22 21" />
      <path d="M16 21V8.6M10.7 17.6H21.3M11.8 14.2H20.2M13.2 11.2H18.8" strokeWidth="1.1" />
      <ellipse cx="16" cy="5.7" rx="3" ry="1.1" />
      <path d="M16 4.6V1.6" />
      <path d="M16.2 1.7L21.2 2.9L16.2 4.1Z" fill="currentColor" />
    </svg>
  )
}

/** Lotus — opens and closes */
function PadmaGlyph({ className, animate, ...props }: SvgProps & { animate: boolean }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(animate && "animate-pulse [animation-duration:1.6s]", className)}
      {...props}
    >
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

/** Three dots in a triangle, pulsing in sequence */
function DotsGlyph({ className, animate, ...props }: SvgProps & { animate: boolean }) {
  const dots = [
    { cx: 12, cy: 5.5, r: 3.2, delay: "0s" },
    { cx: 5.5, cy: 17, r: 3.2, delay: "0.2s" },
    { cx: 18.5, cy: 17, r: 3.2, delay: "0.4s" },
  ]
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      {dots.map((d) => (
        <circle
          key={d.delay}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
          className={cn(animate && "animate-pulse")}
          style={animate ? { animationDuration: "1s", animationDelay: d.delay } : undefined}
        />
      ))}
    </svg>
  )
}

/** Track with a turning arc */
function RingGlyph({ className, animate, ...props }: SvgProps & { animate: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      className={cn(animate && "animate-[spin_1s_linear_infinite]", className)}
      {...props}
    >
      <circle cx="12" cy="12" r="9" opacity={0.25} />
      <path d="M12 3A9 9 0 0 1 21 12" />
    </svg>
  )
}

/** Ring with a glowing halo */
function PulseGlyph({ className, animate, ...props }: SvgProps & { animate: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="11" fill="currentColor" stroke="none" opacity={0.18} className={cn(animate && "animate-pulse")} />
      <circle cx="12" cy="12" r="7" opacity={0.35} />
      <g
        className={cn(animate && "animate-[spin_1.4s_linear_infinite]")}
        style={{ transformOrigin: "12px 12px" }}
      >
        <path d="M12 5A7 7 0 0 1 19 12" strokeWidth={2.6} />
      </g>
    </svg>
  )
}

const GLYPHS = {
  chakra: ChakraGlyph,
  deula: DeulaGlyph,
  padma: PadmaGlyph,
  dots: DotsGlyph,
  ring: RingGlyph,
  pulse: PulseGlyph,
} as const

/* ── Component ─────────────────────────────────────────── */

const spinnerVariants = cva("shrink-0", {
  variants: {
    size: {
      xs: "size-3",
      sm: "size-4",
      md: "size-6",
      lg: "size-8",
      xl: "size-12",
    },
    color: {
      /** Inherit the surrounding text colour (stock shadcn behaviour) */
      current: "",
      primary: "text-primary",
      muted: "text-muted-foreground",
      destructive: "text-destructive",
      success: "text-emerald-600 dark:text-emerald-500",
      warning: "text-amber-500 dark:text-amber-400",
    },
  },
  defaultVariants: { size: "sm", color: "current" },
})

type SpinnerProps = Omit<SvgProps, "color"> &
  VariantProps<typeof spinnerVariants> & {
    variant?: keyof typeof GLYPHS
    /** Text shown beside (or under) the spinner. */
    label?: React.ReactNode
    labelPosition?: "right" | "bottom"
    /** Faded and still. */
    disabled?: boolean
  }

function Spinner({
  className,
  variant = "chakra",
  size,
  color,
  label,
  labelPosition = "right",
  disabled,
  ...props
}: SpinnerProps) {
  const Glyph = GLYPHS[variant]
  const glyphClass = cn(spinnerVariants({ size, color }), disabled && "opacity-40")

  if (label) {
    return (
      <span
        role="status"
        data-slot="spinner"
        data-variant={variant}
        className={cn(
          "inline-flex items-center gap-2 text-sm",
          labelPosition === "bottom" && "flex-col gap-1.5",
          className
        )}
      >
        <Glyph aria-hidden className={glyphClass} animate={!disabled} {...props} />
        <span className={cn(disabled && "text-muted-foreground")}>{label}</span>
      </span>
    )
  }

  return (
    <Glyph
      role="status"
      aria-label="Loading"
      data-slot="spinner"
      data-variant={variant}
      className={cn(glyphClass, className)}
      animate={!disabled}
      {...props}
    />
  )
}

export { Spinner, spinnerVariants }
export type { SpinnerProps }

/* ── Usage ──────────────────────────────────────────────────
<Spinner />                                         // chakra, inherits colour
<Spinner variant="deula" size="md" color="primary" />
<Spinner variant="padma" />
<Spinner variant="dots" />
<Spinner variant="ring" size="lg" />
<Spinner variant="pulse" size="xl" />

<div className="flex items-center gap-2">
  <Spinner size="md" variant="chakra" />
  <span>Loading...</span>
</div>

<Spinner label="Loading..." />
<Spinner variant="padma" label="Please wait..." />
<Spinner variant="deula" label="Processing..." labelPosition="bottom" />
<Spinner disabled />

// inside a Button
<Button disabled><Spinner data-icon="inline-start" /> Saving</Button>
*/
