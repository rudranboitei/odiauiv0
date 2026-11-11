"use client";

import { Accordion as AccordionPrimitive } from "radix-ui";

import type { FeedbackType } from "@/hooks/use-feedback";
import { useFeedback } from "@/hooks/use-feedback";
import { cn } from "@/lib/utils";

const KonarkWheelIcon = ({
  className,
  ...props
}: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
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

const Accordion = ({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) => (
  <AccordionPrimitive.Root data-slot="accordion" {...props} />
);

const AccordionItem = ({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item
    data-slot="accordion-item"
    className={cn(
      "group relative border-b border-border/60 transition-colors before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-transparent before:content-[''] before:transition-colors last:border-b-0 data-[state=open]:bg-primary/5 data-[state=open]:before:bg-primary",
      className
    )}
    {...props}
  />
);

const AccordionTrigger = ({
  className,
  children,
  onClick,
  sound,
  haptic,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  sound?: FeedbackType;
  haptic?: boolean;
}) => {
  const play = useFeedback({ haptic, sound });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    play();
    onClick?.(e);
  };

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md px-3 py-4 text-left text-sm font-medium transition-colors outline-none hover:text-primary focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-primary [&[data-state=open]>svg]:rotate-45 [&[data-state=open]>svg]:text-primary",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
        <KonarkWheelIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 transition-transform duration-300" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};

const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content
    data-slot="accordion-content"
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
    {...props}
  >
    <div className={cn("px-3 pt-0 pb-4 text-muted-foreground", className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
);

export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  KonarkWheelIcon,
};
