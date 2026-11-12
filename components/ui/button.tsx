"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import * as React from "react";

import type { FeedbackType } from "@/hooks/use-feedback";
import { useFeedback } from "@/hooks/use-feedback";
import { cn } from "@/lib/utils";

/**
 * OdiaUI — Button (Base UI) · Tailwind only, same variants/sizes as shadcn.
 *
 * Palette: brand ink #0a0a0a · paper #ffffff · stone #f5f5f5 / #e5e5e5
 *          muted ink #525252 · borders #d4d4d4 / #404040
 */
const buttonVariants = cva(
  [
    "group/button relative inline-flex shrink-0 items-center justify-center rounded-lg border-2 border-transparent",
    "font-sans text-sm font-semibold whitespace-nowrap select-none outline-none",
    "transition-all duration-200",
    "focus-visible:ring-4 focus-visible:ring-[#0a0a0a]/20 dark:focus-visible:ring-white/30",
    "active:not-aria-[haspopup]:translate-y-px",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-invalid:border-destructive aria-invalid:ring-4 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default:
          "h-10 gap-2 px-5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-2",
        icon: "size-10",
        "icon-lg": "size-12",
        "icon-sm": "size-9 in-data-[slot=button-group]:rounded-lg",
        "icon-xs":
          "size-7 rounded-md in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        lg: "h-12 gap-2.5 px-7 text-base has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-2.5",
        sm: "h-9 gap-1.5 rounded-lg px-4 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        xs: "h-7 gap-1 rounded-md px-3 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
      },
      variant: {
        // Brand ink — primary call to action ("Discover Odisha")
        default: [
          "border-[#0a0a0a] bg-gradient-to-b from-[#262626] to-[#0a0a0a] text-white uppercase tracking-wider",
          "dark:border-white/25 dark:from-[#2a2a2a] dark:to-[#111111]",
          "shadow-[inset_0_1px_0_rgb(255_255_255/0.18),inset_0_-2px_0_rgb(0_0_0/0.35),0_4px_10px_-3px_rgb(0_0_0/0.45)]",
          "before:pointer-events-none before:absolute before:inset-[2px] before:rounded-[inherit] before:border before:border-white/20",
          "hover:brightness-125 hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.22),inset_0_-2px_0_rgb(0_0_0/0.35),0_6px_14px_-3px_rgb(0_0_0/0.5)]",
          "active:shadow-[inset_0_2px_4px_rgb(0_0_0/0.5)]",
        ].join(" "),
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        ghost:
          "text-[#525252] hover:bg-[#f5f5f5] aria-expanded:bg-[#f5f5f5] dark:text-[#d4d4d4] dark:hover:bg-white/10 dark:aria-expanded:bg-white/10",
        // Brand inverse — high-contrast light action (kept as `gold` for API compatibility)
        gold: [
          "border-[#d4d4d4] bg-gradient-to-b from-white to-[#e5e5e5] text-[#0a0a0a] uppercase tracking-wider",
          "dark:border-[#404040] dark:from-[#fafafa] dark:to-[#d4d4d4] dark:text-[#0a0a0a]",
          "shadow-[inset_0_1px_0_rgb(255_255_255/0.9),0_2px_5px_-1px_rgb(0_0_0/0.2)]",
          "before:pointer-events-none before:absolute before:inset-[2px] before:rounded-[inherit] before:border before:border-black/10",
          "hover:brightness-105 active:shadow-[inset_0_2px_4px_rgb(0_0_0/0.15)]",
        ].join(" "),
        link: "text-[#0a0a0a] underline-offset-4 hover:underline dark:text-white",
        outline: [
          "border-[#d4d4d4] bg-transparent text-[#0a0a0a]",
          "hover:border-[#a3a3a3] hover:bg-[#f5f5f5] aria-expanded:bg-[#f5f5f5]",
          "dark:border-[#404040] dark:text-[#fafafa] dark:hover:border-[#737373] dark:hover:bg-white/5 dark:aria-expanded:bg-white/5",
        ].join(" "),
        // Brand stone — quiet action ("Details")
        secondary: [
          "border-[#d4d4d4] bg-gradient-to-b from-[#fafafa] to-[#e5e5e5] text-[#0a0a0a] uppercase tracking-wider",
          "dark:border-[#404040] dark:from-[#262626] dark:to-[#171717] dark:text-[#fafafa]",
          "shadow-[inset_0_1px_0_rgb(255_255_255/0.85),0_2px_5px_-1px_rgb(0_0_0/0.18)]",
          "hover:border-[#a3a3a3] hover:from-white hover:to-[#ededed]",
          "dark:hover:border-[#525252] dark:hover:from-[#2e2e2e] dark:hover:to-[#1f1f1f]",
          "aria-expanded:from-[#e5e5e5] aria-expanded:to-[#e5e5e5] dark:aria-expanded:from-[#262626] dark:aria-expanded:to-[#262626]",
          "active:shadow-[inset_0_2px_4px_rgb(0_0_0/0.15)]",
        ].join(" "),
      },
    },
  }
);

export interface ButtonProps
  extends
    Omit<ButtonPrimitive.Props, "className" | "onClick">,
    VariantProps<typeof buttonVariants> {
  /** Render the styles on a single child element (Base UI `render` under the hood). */
  asChild?: boolean;
  className?: string;
  haptic?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  sound?: FeedbackType;
}

const Button = ({
  asChild = false,
  children,
  className,
  haptic,
  onClick,
  size,
  sound,
  variant,
  ...props
}: ButtonProps) => {
  const play = useFeedback({ haptic, sound });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    play();
    onClick?.(e);
  };

  const child = asChild
    ? (React.Children.only(children) as React.ReactElement)
    : undefined;

  return (
    <ButtonPrimitive
      data-slot="button"
      data-size={size}
      data-variant={variant}
      className={cn(buttonVariants({ className, size, variant }))}
      nativeButton={asChild ? false : undefined}
      onClick={handleClick as ButtonPrimitive.Props["onClick"]}
      render={child}
      {...props}
    >
      {asChild ? undefined : children}
    </ButtonPrimitive>
  );
};

/**
 * Round gold badge that sits at the start of a button.
 * <Button><ButtonMedallion><SunIcon /></ButtonMedallion>Discover Odisha</Button>
 */
const ButtonMedallion = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    data-icon="inline-start"
    aria-hidden
    className={cn(
      "relative grid size-7 shrink-0 place-items-center rounded-full bg-gradient-to-b from-white to-[#e5e5e5] text-[#0a0a0a]",
      "ring-1 ring-white/60 shadow-[0_1px_3px_rgb(0_0_0/0.4)] [&_svg]:size-4",
      className
    )}
    {...props}
  />
);

/**
 * The Konark chariot wheel, ready to drop into a button.
 * <Button><ButtonChakra />Discover Odisha</Button>
 */
const ButtonChakra = ({
  className,
  ...props
}: React.ComponentProps<"span">) => {
  const angles = Array.from({ length: 8 }, (_, i) => i * 45);

  return (
    <ButtonMedallion className={className} {...props}>
      <svg aria-hidden fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <circle
          cx="12"
          cy="12"
          r="6.5"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        {angles.map((angle) => (
          <line
            key={angle}
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.2"
            transform={`rotate(${angle} 12 12)`}
            x1="12"
            x2="12"
            y1="12"
            y2="4"
          />
        ))}
        <circle cx="12" cy="12" fill="currentColor" r="2.5" />
      </svg>
    </ButtonMedallion>
  );
};

export { Button, ButtonChakra, ButtonMedallion, buttonVariants };
