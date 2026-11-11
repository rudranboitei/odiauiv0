"use client";

import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";

import type { FeedbackType } from "@/hooks/use-feedback";
import { useFeedback } from "@/hooks/use-feedback";
import { cn } from "@/lib/utils";

const rollingButtonVariants = cva(
  "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full font-bold leading-[1.6] whitespace-nowrap select-none transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "px-6 pt-[13px] pb-[11px] text-base",
        lg: "px-8 pt-[16px] pb-[14px] text-lg",
        sm: "px-4 pt-[9px] pb-[7px] text-sm",
      },
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        ghost: "text-foreground hover:bg-accent",
        outline:
          "border border-input bg-background text-foreground hover:bg-accent",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
    },
  }
);

export interface RollingButtonProps
  extends
    Omit<React.ComponentProps<"button">, "children">,
    VariantProps<typeof rollingButtonVariants> {
  /** Button label. Must be a plain string so it can be split into letters. */
  children: string;
  /** Delay between each letter, in ms. */
  stagger?: number;
  asChild?: boolean;
}

const RollingButton = ({
  className,
  variant,
  size,
  children,
  stagger = 20,
  asChild = false,
  ...props
}: RollingButtonProps) => {
  const Comp = asChild ? Slot.Root : "button";
  const chars = [...children];

  return (
    <Comp
      data-slot="rolling-button"
      aria-label={children}
      className={cn(rollingButtonVariants({ className, size, variant }))}
      {...props}
    >
      <span aria-hidden className="flex w-max overflow-hidden">
        {chars.map((char, i) => (
          <span key={i} className="relative block shrink-0 whitespace-pre">
            {/* visible letter */}
            <span
              className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full"
              style={{ transitionDelay: `${i * stagger}ms` }}
            >
              {char}
            </span>
            {/* incoming letter */}
            <span
              className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
              style={{ transitionDelay: `${i * stagger}ms` }}
            >
              {char}
            </span>
          </span>
        ))}
      </span>
    </Comp>
  );
};

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        icon: "size-9",
        "icon-lg": "size-10",
        "icon-sm": "size-8",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      },
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
    },
  }
);

export interface ButtonProps
  extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  sound?: FeedbackType;
  haptic?: boolean;
}

const Button = ({
  className,
  variant,
  size,
  asChild = false,
  sound,
  haptic,
  onClick,
  ...props
}: ButtonProps) => {
  const play = useFeedback({ haptic, sound });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    play();
    onClick?.(e);
  };

  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-size={size}
      data-variant={variant}
      className={cn(buttonVariants({ className, size, variant }))}
      onClick={handleClick}
      {...props}
    />
  );
};

export { Button, buttonVariants, RollingButton, rollingButtonVariants };
