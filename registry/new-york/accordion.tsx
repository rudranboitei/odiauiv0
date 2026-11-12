"use client";

/**
 * OdiaUI — Accordion (Base UI) · "Heritage" style
 * Tailwind classes only. No custom CSS, no custom keyframes, no image assets.
 *
 * Registry deps:  @base-ui/react, lucide-react
 * Needs:          cn() from "@/lib/utils"  (change the import to match your registry alias)
 * Optional:       odia-icons.tsx for the SVG medallion icons
 * Font:           uses font-serif; load Marcellus / Cinzel for the exact look.
 *
 * Palette: gold #e8b960 / #d29b3d · indigo #2a2160 · parchment #f7e0b5 / #f1cb8d
 *          ink #2b1d10 · sindoor #c2481b
 */

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

/* ---------------------------------- Root --------------------------------- */

const Accordion = ({ className, ...props }: AccordionPrimitive.Root.Props) => (
  <AccordionPrimitive.Root
    data-slot="accordion"
    // px-4 leaves room for the diamond ornament that overhangs the bar edge
    className={cn("flex w-full flex-col gap-3.5 px-4", className)}
    {...props}
  />
);

/* ---------------------------------- Item --------------------------------- */

const AccordionItem = ({
  className,
  ...props
}: AccordionPrimitive.Item.Props) => (
  <AccordionPrimitive.Item
    data-slot="accordion-item"
    className={cn("flex flex-col", className)}
    {...props}
  />
);

/* -------------------------------- Trigger -------------------------------- */

/** Sindoor diamond ornament with a gold edge */
const Diamond = ({ className }: { className?: string }) => (
  <span
    aria-hidden
    className={cn(
      "size-4 shrink-0 rotate-45 border-2 border-[#e8b960] bg-[#c2481b]",
      "shadow-[0_1px_3px_rgb(0_0_0/0.45)]",
      className
    )}
  />
);

type AccordionTriggerProps = AccordionPrimitive.Trigger.Props & {
  /** Medallion artwork: an inline <svg> (see odia-icons.tsx), lucide icon or <img> */
  icon?: React.ReactNode;
};

const AccordionTrigger = ({
  className,
  children,
  icon,
  ...props
}: AccordionTriggerProps) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      data-slot="accordion-trigger"
      className={cn(
        "group/trigger relative flex min-h-14 w-full items-center gap-3 rounded-xl border-2 py-1.5 pr-4 text-left outline-none",
        icon ? "pl-3" : "pl-5",
        "font-serif text-[1.3rem] font-semibold tracking-tight transition-all duration-300",
        // inner hairline for the engraved, double-border look
        "before:pointer-events-none before:absolute before:inset-0.75 before:rounded-[7px] before:border before:border-[#fff2c4]/45",
        // closed: golden bar
        "border-[#a97a2c] bg-linear-to-b from-[#ebbd64] to-[#d29b3d] text-[#2b1d10]",
        "shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_rgb(120_80_20/0.25),0_3px_6px_rgb(60_30_0/0.3)]",
        "hover:brightness-105",
        // open: deep indigo bar, gold text
        "aria-expanded:border-[#e0b04e] aria-expanded:from-[#2c2364] aria-expanded:to-[#1f1857] aria-expanded:text-[#f2c867]",
        "aria-expanded:before:border-[#e0b04e]/35",
        "aria-expanded:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_6px_14px_rgb(35_26_92/0.45)]",
        "focus-visible:ring-4 focus-visible:ring-[#e0b04e]/60",
        "disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      {icon && (
        <>
          <Diamond className="absolute top-1/2 -left-3.5 -translate-y-1/2" />
          <span className="relative flex shrink-0 items-center gap-2.5">
            <span className="grid size-12 place-items-center rounded-full bg-[#1e1752] p-1.5 shadow-[0_2px_4px_rgb(0_0_0/0.4)] ring-2 ring-[#e8b960] ring-offset-1 ring-offset-[#1e1752]/0 [&_img]:size-full [&_img]:rounded-full [&_svg]:size-full">
              {icon}
            </span>
            <Diamond />
          </span>
        </>
      )}
      <span className="relative flex-1">{children}</span>
      <ChevronDown
        data-slot="accordion-trigger-icon"
        strokeWidth={2.5}
        className="pointer-events-none relative size-5 shrink-0 transition-transform duration-300 group-aria-expanded/trigger:rotate-180"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

/* -------------------------------- Content -------------------------------- */

const AccordionContent = ({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) => (
  <AccordionPrimitive.Panel
    data-slot="accordion-content"
    className={cn(
      "h-(--accordion-panel-height) overflow-hidden",
      "transition-[height,opacity] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
      "data-starting-style:h-0 data-starting-style:opacity-0",
      "data-ending-style:h-0 data-ending-style:opacity-0",
      "motion-reduce:transition-none"
    )}
    {...props}
  >
    <div
      className={cn(
        "mx-1 mt-2 rounded-xl border-2 border-[#c99b55] p-5",
        "bg-linear-to-b from-[#f8e3ba] to-[#f1cb8d] font-sans text-base leading-relaxed text-[#2b1d10]",
        "shadow-[inset_0_2px_8px_rgb(150_100_30/0.2),0_2px_4px_rgb(60_30_0/0.15)]",
        "[&_a]:underline [&_a]:underline-offset-2 [&_p:not(:last-child)]:mb-3",
        className
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Panel>
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
