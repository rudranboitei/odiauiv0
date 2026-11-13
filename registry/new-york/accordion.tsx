"use client"

import * as React from "react"
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { BadgeIcon, type BadgeIconName } from "@/components/ui/badge"

/* ───────────────────────────────────────────────────────────
 * OdiaUI Accordion
 *
 * shadcn tokens only. Indicator icons are drawn inline in
 * currentColor — no icon imports. The `motif` prop reuses the
 * cultural icons from Badge (chakra, deula, odissi, ikat,
 * jagannath, pattachitra, padma, bana); `icon` accepts any node.
 * ─────────────────────────────────────────────────────────── */

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

/* ── Variants ──────────────────────────────────────────── */

const itemVariants = cva("", {
  variants: {
    variant: {
      /** Rows divided by hairlines */
      separated: "border-b last:border-0",
      /** Each item is its own rounded card */
      card: "rounded-2xl border-0 bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04),0_6px_20px_rgba(0,0,0,0.06)]",
    },
  },
  defaultVariants: { variant: "separated" },
})

const triggerVariants = cva(
  "group/trigger flex w-full flex-1 items-center gap-2 text-left font-medium outline-none transition-[color,background-color,box-shadow] focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none data-disabled:pointer-events-none data-disabled:opacity-50",
  {
    variants: {
      variant: {
        separated: "hover:underline underline-offset-4",
        card: "rounded-lg hover:bg-muted/50 focus-visible:rounded-lg",
      },
      size: {
        sm: "min-h-9 py-1.5 text-sm [&_svg]:size-3.5",
        md: "min-h-11 py-2 text-sm [&_svg]:size-4",
        lg: "min-h-13 py-2.5 text-base [&_svg]:size-5",
      },
    },
    compoundVariants: [
      { variant: "separated", size: "sm", class: "px-3" },
      { variant: "separated", size: "md", class: "px-1" },
      { variant: "separated", size: "lg", class: "px-1" },
      { variant: "card", size: "sm", class: "px-3" },
      { variant: "card", size: "md", class: "px-3.5" },
      { variant: "card", size: "lg", class: "px-4" },
    ],
    defaultVariants: { variant: "separated", size: "md" },
  }
)

const contentVariants = cva("text-sm text-muted-foreground", {
  variants: {
    variant: {
      separated: "px-1",
      card: "px-3.5",
    },
    size: {
      sm: "pb-3 text-xs",
      md: "pb-4 text-sm",
      lg: "pb-5 text-sm",
    },
  },
  compoundVariants: [
    { variant: "card", size: "sm", class: "px-3" },
    { variant: "card", size: "lg", class: "px-4" },
  ],
  defaultVariants: { variant: "separated", size: "md" },
})

type AccordionConfig = {
  variant: "separated" | "card"
  size: "sm" | "md" | "lg"
}

const AccordionContext = React.createContext<AccordionConfig>({
  variant: "separated",
  size: "md",
})

/* ── Components ────────────────────────────────────────── */

type AccordionProps = AccordionPrimitive.Root.Props &
  VariantProps<typeof itemVariants> & {
    /** Trigger and panel density. */
    size?: AccordionConfig["size"]
  }

function Accordion({ className, variant = "separated", size = "md", ...props }: AccordionProps) {
  return (
    <AccordionContext.Provider value={{ variant: variant ?? "separated", size: size ?? "md" }}>
      <AccordionPrimitive.Root
        data-slot="accordion"
        className={cn(
          "flex w-full flex-col text-sm",
          variant === "card" && "gap-2.5",
          className
        )}
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
  /** Cultural motif from Badge (chakra, deula, odissi, ikat, jagannath, pattachitra, padma, bana) in a coin medallion. */
  motif?: BadgeIconName
  /** Custom medallion artwork: an inline <svg>, lucide icon or <img>. Overrides `motif`. */
  icon?: React.ReactNode
  /** Inline icon that rotates when the panel opens. */
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
            className="grid size-6 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground ring-1 ring-border ring-inset transition-colors group-aria-expanded/trigger:text-foreground [&_img]:size-full [&_svg]:size-3.5"
          >
            {medallion}
          </span>
        )}
        <span className="min-w-0 flex-1 break-words">{children}</span>
        <Indicator
          data-slot="accordion-trigger-icon"
          className="pointer-events-none shrink-0 text-muted-foreground transition-transform duration-300 group-aria-expanded/trigger:rotate-180"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({ className, children, ...props }: AccordionPrimitive.Panel.Props) {
  const { variant, size } = React.useContext(AccordionContext)
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
      <div className={cn(contentVariants({ variant, size }), variant === "card" && "pt-0")}>
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
export type { AccordionProps, AccordionTriggerProps }

/* ── Usage ──────────────────────────────────────────────────
<Accordion defaultValue={["item-1"]}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion variant="card" multiple />
<AccordionTrigger indicator="chakra" />
<AccordionTrigger indicator="plus" />
<Accordion size="sm" />
*/
