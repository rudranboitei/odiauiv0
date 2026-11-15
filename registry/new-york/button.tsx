import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { SpinnerIcon } from "./odia-icons1"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    "relative inline-flex shrink-0 items-center justify-center overflow-hidden whitespace-nowrap rounded-full font-medium tracking-[-0.01em] cursor-pointer",
    "transition-all outline-none select-none",
    "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "disabled:pointer-events-none disabled:opacity-50 data-[loading=true]:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        // Glossy primary pill — the signature default
        default:
          "border-0 text-primary-foreground " +
          "bg-[linear-gradient(180deg,color-mix(in_oklab,var(--primary)_76%,white)_0%,var(--primary)_100%)] " +
          "shadow-[0_6px_14px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.18)] " +
          "hover:brightness-110 hover:shadow-[0_8px_18px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.2)] " +
          "active:scale-[0.97] active:brightness-95",
        // Quiet neutral pill
        secondary:
          "border-0 bg-muted text-foreground " +
          "shadow-[0_1px_2px_rgba(0,0,0,0.04)] " +
          "hover:bg-accent active:scale-[0.97] dark:hover:bg-accent/70",
        destructive:
          "border-0 bg-destructive text-white shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_12px_rgba(0,0,0,0.10)] hover:bg-destructive/90 active:scale-[0.97] focus-visible:ring-destructive/30",
        // Clean white card button
        outline:
          "border bg-card text-foreground " +
          "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)] " +
          "hover:bg-accent active:scale-[0.97] dark:bg-muted dark:hover:bg-accent",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-foreground underline underline-offset-4 decoration-1 hover:decoration-2",
        // odiaui additions
        frame:
          "border border-primary bg-primary text-primary-foreground " +
          "shadow-[inset_0_0_0_2px_var(--primary),inset_0_0_0_3px_color-mix(in_oklab,var(--primary-foreground)_45%,transparent),0_4px_12px_rgba(0,0,0,0.10)] " +
          "hover:brightness-105 active:brightness-95",
      },
      size: {
        sm: "h-8 gap-1.5 px-3 text-xs",
        default: "h-10 px-5 text-sm",
        lg: "h-12 px-8 text-base",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-full": "size-10 rounded-full",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

const iconSize: Record<string, string> = {
  sm: "[&>svg]:size-3.5",
  default: "[&>svg]:size-4",
  lg: "[&>svg]:size-[18px]",
  icon: "[&>svg]:size-5",
  "icon-sm": "[&>svg]:size-4",
  "icon-full": "[&>svg]:size-5",
}

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    loading?: boolean
  }

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  loading = false,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className)

  if (asChild) {
    return (
      <Slot data-slot="button" className={classes} {...(props as React.ComponentProps<typeof Slot>)}>
        {children}
      </Slot>
    )
  }

  return (
    <button
      data-slot="button"
      data-loading={loading}
      aria-busy={loading || undefined}
      className={classes}
      onClick={loading ? undefined : onClick}
      {...props}
    >
      <span className={cn("relative z-10 inline-flex items-center gap-2 [&>svg]:shrink-0", iconSize[size ?? "default"])}>
        {loading && <SpinnerIcon className="animate-spin" />}
        {children}
      </span>
    </button>
  )
}

export { Button, buttonVariants }
