/**
 * OdiaUI — Accordion (Base UI)
 * Pure Tailwind + shadcn theme tokens. No custom CSS, no custom keyframes.
 *
 * Registry deps:  @base-ui/react, lucide-react
 * Needs:          cn() from "@/lib/utils"
 */

"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { Plus } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

type Variant = "card" | "flush";
const VariantContext = React.createContext<Variant>("card");

/* ---------------------------------- Root --------------------------------- */

type AccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root> & {
  /** "card": separated rounded cards · "flush": clean divided list */
  variant?: Variant;
};

const Accordion = ({
  variant = "card",
  className,
  ...props
}: AccordionProps) => (
  <VariantContext.Provider value={variant}>
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn(
        "w-full",
        variant === "card"
          ? "flex flex-col gap-3"
          : "divide-y divide-border border-y border-border",
        className
      )}
      {...props}
    />
  </VariantContext.Provider>
);

/* ---------------------------------- Item --------------------------------- */

const AccordionItem = ({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) => {
  const variant = React.useContext(VariantContext);
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "relative transition-all duration-300",
        variant === "card" &&
          cn(
            "overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-xs",
            "hover:border-primary/40 hover:shadow-md",
            "data-[open]:border-primary/50 data-[open]:shadow-lg data-[open]:shadow-primary/10",
            // accent bar on the left edge, grows in when open
            "before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:origin-top",
            "before:scale-y-0 before:bg-primary before:transition-transform before:duration-300",
            "data-[open]:before:scale-y-100"
          ),
        className
      )}
      {...props}
    />
  );
};

/* -------------------------------- Trigger -------------------------------- */

const AccordionTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) => {
  const variant = React.useContext(VariantContext);
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/trigger flex flex-1 items-center justify-between gap-4 text-left text-[15px] font-medium outline-none",
          "transition-colors hover:text-primary data-[panel-open]:text-primary",
          "focus-visible:ring-[3px] focus-visible:ring-ring/50",
          "disabled:pointer-events-none disabled:opacity-50",
          variant === "card" ? "rounded-2xl px-5 py-4" : "py-5",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        <span
          className={cn(
            "grid size-7 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground",
            "transition-all duration-300 ease-out",
            "group-hover/trigger:bg-primary/15 group-hover/trigger:text-primary",
            "group-data-[panel-open]/trigger:rotate-[135deg]",
            "group-data-[panel-open]/trigger:bg-primary group-data-[panel-open]/trigger:text-primary-foreground"
          )}
        >
          <Plus className="size-4" strokeWidth={2.25} />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};

/* -------------------------------- Content -------------------------------- */

const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Panel>) => {
  const variant = React.useContext(VariantContext);
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={cn(
        "h-[var(--accordion-panel-height)] overflow-hidden text-sm leading-relaxed text-muted-foreground",
        "transition-[height,opacity] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
        "data-[starting-style]:h-0 data-[starting-style]:opacity-0",
        "data-[ending-style]:h-0 data-[ending-style]:opacity-0",
        "motion-reduce:transition-none"
      )}
      {...props}
    >
      <div
        className={cn(
          variant === "card" ? "px-5 pb-5" : "pb-5 pr-10",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
