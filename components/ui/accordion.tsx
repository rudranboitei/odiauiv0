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

type Variant = "card" | "flush" | "odisha";
const VariantContext = React.createContext<Variant>("card");

const KonarkWheelIcon = ({
  className,
  ...props
}: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={cn("size-4", className)}
    {...props}
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M12 3v6.5M12 14.5V21M3 12h6.5M14.5 12H21M5.64 5.64l4.6 4.6M13.76 13.76l4.6 4.6M18.36 5.64l-4.6 4.6M10.24 13.76l-4.6 4.6" />
  </svg>
);

/* ---------------------------------- Root --------------------------------- */

type AccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root> & {
  /**
   * "card": separated rounded cards
   * "flush": clean divided list
   * "odisha": warm Konark-inspired cards
   */
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
        variant === "flush"
          ? "divide-y divide-border border-y border-border"
          : "flex flex-col gap-3",
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
        variant === "odisha" &&
          cn(
            "overflow-hidden rounded-2xl border border-primary/25 bg-linear-to-br from-primary/10 via-card to-card text-card-foreground shadow-xs",
            "hover:border-primary/50 hover:shadow-md",
            "data-[open]:border-primary/60 data-[open]:shadow-lg data-[open]:shadow-primary/10",
            // temple-inspired accent bar with a warm fade
            "before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:origin-top",
            "before:scale-y-0 before:bg-linear-to-b before:from-primary before:via-primary/70 before:to-transparent",
            "before:transition-transform before:duration-300",
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
  const isOdisha = variant === "odisha";
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/trigger flex flex-1 items-center justify-between gap-4 text-left text-[15px] font-medium outline-none",
          "transition-colors hover:text-primary data-[panel-open]:text-primary",
          "focus-visible:ring-[3px] focus-visible:ring-ring/50",
          "disabled:pointer-events-none disabled:opacity-50",
          variant === "flush" ? "py-5" : "rounded-2xl px-5 py-4",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        <span
          className={cn(
            "grid size-7 shrink-0 place-items-center rounded-full",
            "transition-all duration-300 ease-out",
            "group-hover/trigger:bg-primary/15 group-hover/trigger:text-primary",
            "group-data-[panel-open]/trigger:bg-primary group-data-[panel-open]/trigger:text-primary-foreground",
            isOdisha
              ? cn(
                  "border border-primary/25 bg-primary/10 text-primary",
                  "group-data-[panel-open]/trigger:rotate-90"
                )
              : cn(
                  "bg-muted text-muted-foreground",
                  "group-data-[panel-open]/trigger:rotate-[135deg]"
                )
          )}
        >
          {isOdisha ? (
            <KonarkWheelIcon className="size-4" />
          ) : (
            <Plus className="size-4" strokeWidth={2.25} />
          )}
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
          variant === "flush" ? "pb-5 pr-10" : "px-5 pb-5",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
