import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { SpinnerIcon, TempleArt, WheelArt } from "./odia-icons1"


const buttonVariants = cva(
  [
    "relative inline-flex shrink-0 items-center justify-center overflow-hidden whitespace-nowrap rounded-md font-medium",
    "transition-all outline-none select-none",
    "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "disabled:pointer-events-none disabled:opacity-50 data-[loading=true]:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 [--odia-art:color-mix(in_oklab,var(--primary-foreground)_40%,transparent)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 [--odia-art:color-mix(in_oklab,var(--secondary-foreground)_30%,transparent)]",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/30 [--odia-art:rgba(255,255,255,0.45)]",
        outline:
          "border bg-background shadow-xs hover:bg-accent [--odia-art:color-mix(in_oklab,var(--foreground)_28%,transparent)]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-foreground underline underline-offset-4 decoration-1 hover:decoration-2",
        // odiaui additions
        frame:
          "bg-primary text-primary-foreground border border-primary hover:bg-primary/90 " +
          "shadow-[inset_0_0_0_2px_var(--primary),inset_0_0_0_3px_color-mix(in_oklab,var(--primary-foreground)_45%,transparent)] " +
          "[--odia-art:color-mix(in_oklab,var(--primary-foreground)_40%,transparent)]",
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
    /** Temple + chakra artwork. Defaults to on for filled/outline variants, off for ghost, link and icon sizes. */
    art?: boolean
  }

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  loading = false,
  art,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const isIcon = !!size && size.startsWith("icon")
  const showArt = art ?? (variant !== "ghost" && variant !== "link" && !isIcon)
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
      {showArt && (
        <>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-[30%] pb-0.5 pl-1.5 [mask-image:linear-gradient(to_right,black_55%,transparent)]"
          >
            <TempleArt className="size-full" style={{ stroke: "var(--odia-art)" }} preserveAspectRatio="xMinYMax meet" />
          </span>
          <span
            aria-hidden
            className="pointer-events-none absolute top-1/2 right-0 aspect-square h-[135%] -translate-y-1/2 translate-x-[30%] [mask-image:linear-gradient(to_left,black_50%,transparent)]"
          >
            <WheelArt className="size-full" style={{ stroke: "var(--odia-art)" }} />
          </span>
        </>
      )}
      <span className={cn("relative z-10 inline-flex items-center gap-2 [&>svg]:shrink-0", iconSize[size ?? "default"])}>
        {loading && <SpinnerIcon className="animate-spin" />}
        {children}
      </span>
    </button>
  )
}

export { Button, buttonVariants }
