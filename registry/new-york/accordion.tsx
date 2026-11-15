"use client"

import * as React from "react"
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/* ───────────────────────────────────────────────────────────
 * OdiaUI Accordion — clean token style.
 *
 * Style families: flush (hairlines), bordered (one panel),
 * card (separate cards), timeline (rail + dots).
 * Indicators: chevron, plus→minus morph, numbered, none.
 * All colours come from theme tokens and currentColor.
 * ─────────────────────────────────────────────────────────── */

type AccordionVariant = "flush" | "bordered" | "card" | "timeline"
type AccordionSize = "sm" | "md" | "lg"
type AccordionIndicator = "chevron" | "plus" | "numbered" | "none"

const AccordionContext = React.createContext<{
  variant: AccordionVariant
  size: AccordionSize
}>({ variant: "flush", size: "md" })

const ItemContext = React.createContext<{ number?: string }>({})

/* ── Variants ──────────────────────────────────────────── */

const accordionVariants = cva("flex w-full flex-col text-sm", {
  variants: {
    variant: {
      flush: "",
      bordered:
        "rounded-2xl border bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04),0_6px_20px_rgba(0,0,0,0.05)] overflow-hidden",
      card: "gap-3",
      timeline: "",
    },
  },
  defaultVariants: { variant: "flush" },
})

const itemVariants = cva("", {
  variants: {
    variant: {
      flush: "border-b last:border-0",
      bordered: "border-b last:border-0",
      card:
        "rounded-xl border bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04),0_6px_20px_rgba(0,0,0,0.05)] overflow-hidden",
      timeline: "relative pl-8 last:pb-0 before:absolute before:top-0 before:bottom-0 before:left-[7px] before:w-px before:-translate-x-1/2 before:bg-border last:before:bottom-2",
    },
  },
  defaultVariants: { variant: "flush" },
})

const triggerVariants = cva(
  "group/trigger flex w-full flex-1 items-center gap-3 text-left font-medium text-foreground outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none data-disabled:pointer-events-none data-disabled:opacity-50",
  {
    variants: {
      variant: {
        flush: "px-1 hover:text-foreground",
        bordered: "px-5",
        card: "px-5 hover:bg-muted/50 focus-visible:rounded-xl",
        timeline: "px-0",
      },
      size: {
        sm: "py-2.5 text-sm [&_svg]:size-3.5",
        md: "py-3.5 text-sm [&_svg]:size-4",
        lg: "py-4 text-base [&_svg]:size-4.5",
      },
    },
    defaultVariants: { variant: "flush", size: "md" },
  }
)

const contentVariants = cva("text-sm text-muted-foreground", {
  variants: {
    variant: {
      flush: "px-1",
      bordered: "px-5",
      card: "px-5",
      timeline: "pl-0",
    },
    size: {
      sm: "pb-2.5 text-xs",
      md: "pb-3.5 text-sm",
      lg: "pb-4 text-sm",
    },
  },
  defaultVariants: { variant: "flush", size: "md" },
})

/* ── Components ────────────────────────────────────────── */

export type AccordionProps = AccordionPrimitive.Root.Props &
  VariantProps<typeof accordionVariants> & {
    /** Trigger and panel density. */
    size?: AccordionSize
  }

function Accordion({
  className,
  variant = "flush",
  size = "md",
  ...props
}: AccordionProps) {
  return (
    <AccordionContext.Provider
      value={{ variant: variant ?? "flush", size: size ?? "md" }}
    >
      <AccordionPrimitive.Root
        data-slot="accordion"
        className={cn(accordionVariants({ variant }), className)}
        {...props}
      />
    </AccordionContext.Provider>
  )
}

export type AccordionItemProps = AccordionPrimitive.Item.Props & {
  /** Label shown beside the trigger when indicator="numbered" (e.g. "01"). */
  number?: string
}

function AccordionItem({ className, number, ...props }: AccordionItemProps) {
  const { variant } = React.useContext(AccordionContext)

  return (
    <ItemContext.Provider value={{ number }}>
      <AccordionPrimitive.Item
        data-slot="accordion-item"
        className={cn(itemVariants({ variant }), className)}
        {...props}
      />
    </ItemContext.Provider>
  )
}

export type AccordionTriggerProps = AccordionPrimitive.Trigger.Props & {
  /** Trailing indicator: "chevron", morphing "plus" (→ minus), "numbered" (leading number + chevron) or "none". */
  indicator?: AccordionIndicator
  /** Leading node — inline icon, lucide icon or <img> thumbnail, shown in a chip. */
  icon?: React.ReactNode
}

function AccordionTrigger({
  className,
  children,
  indicator = "chevron",
  icon,
  ...props
}: AccordionTriggerProps) {
  const { variant } = React.useContext(AccordionContext)
  const { number } = React.useContext(ItemContext)
  const showNumber = indicator === "numbered" && number

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(triggerVariants({ variant }), className)}
        {...props}
      >
        {variant === "timeline" && (
          <span
            aria-hidden
            className="absolute top-1/2 left-0 size-3.5 -translate-x-[6.5px] -translate-y-1/2 rounded-full border-2 border-primary bg-card transition-colors group-aria-expanded/trigger:bg-primary"
          />
        )}
        {icon && (
          <span
            aria-hidden
            className="grid size-7 shrink-0 place-items-center overflow-hidden rounded-lg bg-muted text-muted-foreground [&_img]:size-full [&_svg]:size-4"
          >
            {icon}
          </span>
        )}
        {showNumber && (
          <span
            aria-hidden
            className="w-6 shrink-0 text-xs font-semibold tracking-tight text-muted-foreground tabular-nums"
          >
            {number}
          </span>
        )}
        <span className="min-w-0 flex-1 break-words">{children}</span>
        {indicator === "plus" ? (
          <span
            aria-hidden
            data-slot="accordion-trigger-icon"
            className="relative size-4 shrink-0 text-muted-foreground"
          >
            <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 rounded-full bg-current" />
            <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 rounded-full bg-current transition-transform duration-300 group-aria-expanded/trigger:rotate-90" />
          </span>
        ) : indicator === "chevron" || indicator === "numbered" ? (
          <svg
            aria-hidden
            data-slot="accordion-trigger-icon"
            className="shrink-0 text-muted-foreground transition-transform duration-300 group-aria-expanded/trigger:rotate-180"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        ) : null}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export type AccordionContentProps = AccordionPrimitive.Panel.Props

function AccordionContent({
  className,
  children,
  ...props
}: AccordionContentProps) {
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
      <div
        className={cn(
          contentVariants({ variant, size }),
          variant === "timeline" && "pt-1"
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
