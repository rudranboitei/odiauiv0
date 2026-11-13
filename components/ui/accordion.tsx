"use client"

import * as React from "react"
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { BadgeIcon, type BadgeIconName } from "@/components/ui/badge"

/* ───────────────────────────────────────────────────────────
 * OdiaUI Accordion
 *
 * shadcn tokens + the OdiaUI panel/chip tokens (--panel-*, --chip-*).
 * Every variant shares the same parts:
 *   - medallion  soft chip tile (motif / icon)
 *   - indicator  glossy dark round button
 *   - panel      cream-to-tan surface
 *
 * variant="separated"  one white shell, hairline rows, inset panel on open
 * variant="card"       each item is its own white shell + inset panel
 * variant="filled"     each item IS the cream panel (brown title)
 * ─────────────────────────────────────────────────────────── */

/* ── Shared looks ──────────────────────────────────────── */

const SHELL_SHADOW =
  "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_rgba(0,0,0,0.07)]"

const PANEL_GRADIENT =
  "bg-[radial-gradient(120%_90%_at_0%_0%,var(--panel-glow),transparent_60%),linear-gradient(150deg,var(--panel-from)_0%,var(--panel-mid)_55%,var(--panel-to)_100%)]"

const CHIP_LOOK =
  "bg-[linear-gradient(180deg,var(--chip-from)_0%,var(--chip-to)_100%)] shadow-[0_6px_14px_rgba(120,90,40,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[0_6px_14px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]"

const ROUND_BUTTON_LOOK =
  "bg-linear-to-b from-foreground/80 to-foreground text-background shadow-[0_6px_14px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.18)]"

/* ── Indicator icons ───────────────────────────────────── */

const SPOKES_8 = Array.from({ length: 8 }, (_, i) => i * 45)

/** Konark wheel — flips over when the panel opens */
function ChakraIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      aria-hidden
      {...props}
    >
      <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="7.6" strokeWidth="0.9" />
      {SPOKES_8.map((a) => (
        <line key={a} x1="12" y1="4.4" x2="12" y2="8.2" strokeWidth="1.8" transform={`rotate(${a} 12 12)`} />
      ))}
      {SPOKES_8.map((a) => (
        <line key={a} x1="12" y1="4.4" x2="12" y2="7" strokeWidth="0.9" transform={`rotate(${a + 22.5} 12 12)`} />
      ))}
      <circle cx="12" cy="12" r="2.4" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

function ChevronIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
      {...props}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

const INDICATORS = {
  chevron: ChevronIcon,
  chakra: ChakraIcon,
  plus: PlusIcon,
} as const

/** How each indicator turns when the panel opens. */
const INDICATOR_OPEN: Record<keyof typeof INDICATORS, string> = {
  chevron: "group-aria-expanded/trigger:rotate-180",
  chakra: "group-aria-expanded/trigger:rotate-180",
  plus: "group-aria-expanded/trigger:rotate-45",
}

/* ── Variants ──────────────────────────────────────────── */

type Size = "sm" | "md" | "lg"

const rootVariants = cva("flex w-full flex-col text-sm", {
  variants: {
    variant: {
      /** One white shell around every row */
      separated: cn("rounded-3xl bg-card p-1.5", SHELL_SHADOW),
      /** Each item is its own shell */
      card: "gap-3",
      /** Each item is a cream panel */
      filled: "gap-3",
    },
  },
  defaultVariants: { variant: "separated" },
})

const itemVariants = cva("", {
  variants: {
    variant: {
      separated: "border-b border-border/60 py-0.5 last:border-0",
      card: cn("rounded-3xl border-0 bg-card p-1.5", SHELL_SHADOW),
      filled: cn(
        "relative isolate overflow-hidden rounded-3xl border-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(120,90,40,0.10)]",
        PANEL_GRADIENT
      ),
    },
  },
  defaultVariants: { variant: "separated" },
})

const triggerVariants = cva(
  "group/trigger flex w-full flex-1 items-center gap-3 text-left font-medium tracking-tight outline-none transition-[color,background-color,box-shadow] focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none data-disabled:pointer-events-none data-disabled:opacity-50",
  {
    variants: {
      variant: {
        separated: "rounded-[1.25rem] hover:bg-muted/40 focus-visible:rounded-[1.25rem]",
        card: "rounded-[1.25rem] hover:bg-muted/40 focus-visible:rounded-[1.25rem]",
        filled: "rounded-3xl text-panel-title",
      },
      size: {
        sm: "min-h-9 text-sm",
        md: "min-h-11 text-sm",
        lg: "min-h-13 text-base",
      },
    },
    compoundVariants: [
      { variant: "separated", size: "sm", class: "px-2 py-1.5" },
      { variant: "separated", size: "md", class: "px-2.5 py-2" },
      { variant: "separated", size: "lg", class: "px-3 py-2.5" },
      { variant: "card", size: "sm", class: "px-2 py-1.5" },
      { variant: "card", size: "md", class: "px-2.5 py-2" },
      { variant: "card", size: "lg", class: "px-3 py-2.5" },
      { variant: "filled", size: "sm", class: "px-3 py-2" },
      { variant: "filled", size: "md", class: "px-4 py-3" },
      { variant: "filled", size: "lg", class: "px-5 py-3.5" },
    ],
    defaultVariants: { variant: "separated", size: "md" },
  }
)

/** Medallion tile and indicator button sizes per density. */
const medallionSize: Record<Size, string> = {
  sm: "size-7 rounded-lg [&_svg]:size-3.5",
  md: "size-9 rounded-xl [&_svg]:size-4.5",
  lg: "size-10 rounded-xl [&_svg]:size-5",
}

const indicatorButtonSize: Record<Size, string> = {
  sm: "size-6",
  md: "size-8",
  lg: "size-9",
}

const indicatorIconSize: Record<Size, string> = {
  sm: "size-3",
  md: "size-4",
  lg: "size-[18px]",
}

/** Open-panel padding. Inset panel (separated/card) vs. filled body text. */
const insetPanelSize: Record<Size, string> = {
  sm: "p-3.5 text-xs",
  md: "p-4 text-sm",
  lg: "p-5 text-base",
}

const filledBodySize: Record<Size, string> = {
  sm: "px-3 pb-3 text-xs",
  md: "px-4 pb-4 text-sm",
  lg: "px-5 pb-5 text-base",
}

type AccordionConfig = {
  variant: "separated" | "card" | "filled"
  size: Size
}

const AccordionContext = React.createContext<AccordionConfig>({
  variant: "separated",
  size: "md",
})

/* ── Components ────────────────────────────────────────── */

type AccordionProps = AccordionPrimitive.Root.Props &
  VariantProps<typeof itemVariants> & {
    /** Trigger and panel density. */
    size?: Size
  }

function Accordion({ className, variant = "separated", size = "md", ...props }: AccordionProps) {
  const v = variant ?? "separated"
  return (
    <AccordionContext.Provider value={{ variant: v, size: size ?? "md" }}>
      <AccordionPrimitive.Root
        data-slot="accordion"
        data-variant={v}
        className={cn(rootVariants({ variant: v }), className)}
        {...props}
      />
    </AccordionContext.Provider>
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  const { variant } = React.useContext(AccordionContext)
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(itemVariants({ variant }), className)}
      {...props}
    />
  )
}

type AccordionTriggerProps = AccordionPrimitive.Trigger.Props & {
  /** Cultural motif from Badge (chakra, deula, odissi, ikat, jagannath, pattachitra, padma, bana) in a chip tile. */
  motif?: BadgeIconName
  /** Custom tile artwork: an inline <svg>, lucide icon or <img>. Overrides `motif`. */
  icon?: React.ReactNode
  /** Inline icon inside the round button; turns when the panel opens. */
  indicator?: keyof typeof INDICATORS
}

function AccordionTrigger({
  className,
  children,
  motif,
  icon,
  indicator = "chevron",
  ...props
}: AccordionTriggerProps) {
  const { variant, size } = React.useContext(AccordionContext)
  const Indicator = INDICATORS[indicator]
  const medallion = icon ?? (motif ? <BadgeIcon name={motif} /> : null)

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(triggerVariants({ variant, size }), className)}
        {...props}
      >
        {medallion && (
          <span
            aria-hidden
            className={cn(
              "grid shrink-0 place-items-center text-panel-art transition-colors group-aria-expanded/trigger:text-panel-title [&_img]:size-full",
              CHIP_LOOK,
              medallionSize[size]
            )}
          >
            {medallion}
          </span>
        )}
        <span className="min-w-0 flex-1 break-words">{children}</span>
        <span
          aria-hidden
          className={cn(
            "grid shrink-0 place-items-center rounded-full transition-transform group-active/trigger:scale-95",
            ROUND_BUTTON_LOOK,
            indicatorButtonSize[size]
          )}
        >
          <Indicator
            data-slot="accordion-trigger-icon"
            className={cn(
              "pointer-events-none shrink-0 transition-transform duration-300",
              indicatorIconSize[size],
              INDICATOR_OPEN[indicator]
            )}
          />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

type AccordionContentProps = AccordionPrimitive.Panel.Props & {
  /** Faint heritage artwork cropped into the open panel's corner. */
  watermark?: BadgeIconName
}

function AccordionContent({ className, children, watermark, ...props }: AccordionContentProps) {
  const { variant, size } = React.useContext(AccordionContext)
  const isFilled = variant === "filled"

  const art = watermark ? (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden text-panel-art"
    >
      <BadgeIcon name={watermark} className="absolute -right-5 -bottom-5 size-28" />
    </div>
  ) : null

  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={cn(
        "h-(--accordion-panel-height) overflow-hidden",
        "transition-[height,opacity] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
        "data-starting-style:h-0 data-starting-style:opacity-0",
        "data-ending-style:h-0 data-ending-style:opacity-0",
        "motion-reduce:transition-none",
        className
      )}
      {...props}
    >
      {isFilled ? (
        <div
          data-slot="accordion-panel"
          className={cn(
            "relative isolate leading-relaxed text-panel-title/80",
            filledBodySize[size]
          )}
        >
          {art}
          {children}
        </div>
      ) : (
        <div className="pt-1.5">
          <div
            data-slot="accordion-panel"
            className={cn(
              "relative isolate overflow-hidden rounded-2xl leading-relaxed text-panel-title/85",
              "shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]",
              PANEL_GRADIENT,
              insetPanelSize[size]
            )}
          >
            {art}
            {children}
          </div>
        </div>
      )}
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
export type { AccordionProps, AccordionTriggerProps, AccordionContentProps }

/* ── Usage ──────────────────────────────────────────────────
<Accordion defaultValue={["item-1"]}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion variant="card" />
<Accordion variant="filled" />

<AccordionTrigger motif="deula" indicator="plus">Day in history</AccordionTrigger>
<AccordionContent watermark="deula">March 3, 2025</AccordionContent>

<AccordionTrigger indicator="chakra" />
<Accordion size="sm" />
*/
