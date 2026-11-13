import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { SpinnerIcon, TempleArt, WheelArt } from "./odia-icons1"

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
        // Glossy dark pill — same as the reference "+" button
        default:
          "border-0 text-primary-foreground " +
          "bg-[linear-gradient(180deg,color-mix(in_oklab,var(--primary)_76%,white)_0%,var(--primary)_100%)] " +
          "shadow-[0_6px_14px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.18)] " +
          "hover:brightness-110 hover:shadow-[0_8px_18px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.2)] " +
          "active:scale-[0.97] active:brightness-95",
        // Sand panel look
        secondary:
          "border-0 text-sand-foreground " +
          "bg-[linear-gradient(160deg,color-mix(in_oklab,var(--sand)_82%,white)_0%,var(--sand)_100%)] " +
          "shadow-[0_1px_2px_rgba(0,0,0,0.05),0_6px_14px_rgba(120,90,40,0.14),inset_0_1px_0_rgba(255,255,255,0.55)] " +
          "hover:brightness-[1.03] active:scale-[0.97] " +
          "[--odia-art:color-mix(in_oklab,var(--sand-foreground)_35%,transparent)]",
        destructive:
          "border-0 bg-destructive text-white shadow-[0_6px_14px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.18)] hover:bg-destructive/90 active:scale-[0.97] focus-visible:ring-destructive/30 [--odia-art:rgba(255,255,255,0.45)]",
        // Cream chip look — same as the "03 / 25" tiles
        outline:
          "border-0 text-foreground " +
          "bg-[linear-gradient(180deg,#fff_0%,color-mix(in_oklab,var(--sand)_55%,white)_100%)] " +
          "shadow-[0_8px_18px_rgba(120,90,40,0.18),inset_0_1px_0_#fff] " +
          "hover:brightness-[1.02] active:scale-[0.97] " +
          "dark:bg-none dark:bg-muted dark:shadow-[0_8px_18px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] " +
          "[--odia-art:color-mix(in_oklab,var(--foreground)_28%,transparent)]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-foreground underline underline-offset-4 decoration-1 hover:decoration-2",
        // odiaui additions
        frame:
          "border border-primary bg-primary text-primary-foreground " +
          "shadow-[inset_0_0_0_2px_var(--primary),inset_0_0_0_3px_color-mix(in_oklab,var(--primary-foreground)_45%,transparent),0_4px_12px_rgba(0,0,0,0.10)] " +
          "hover:brightness-105 active:brightness-95 " +
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

type ButtonWatermark = "auto" | "deula" | "chakra" | "none"

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    loading?: boolean
    /** Heritage artwork behind the label. "auto" shows it on secondary,
     * destructive, outline and frame — never on default, ghost, link or icon
     * sizes. "deula" shows only the temple, "chakra" only the wheel (both
     * work on any variant, including default), "none" turns it off. */
    watermark?: ButtonWatermark
  }

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  loading = false,
  watermark,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const isIcon = !!size && size.startsWith("icon")
  const wm = watermark ?? "auto"
  const artOn =
    wm === "deula" ||
    wm === "chakra" ||
    (wm === "auto" &&
      variant !== "default" &&
      variant !== "ghost" &&
      variant !== "link" &&
      !isIcon)
  const showTemple = artOn && wm !== "chakra"
  const showWheel = artOn && wm !== "deula"
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
      {showTemple && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-[30%] pb-0.5 pl-1.5 [mask-image:linear-gradient(to_right,black_55%,transparent)]"
        >
          <TempleArt className="size-full" style={{ stroke: "var(--odia-art)" }} preserveAspectRatio="xMinYMax meet" />
        </span>
      )}
      {showWheel && (
        <span
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-0 aspect-square h-[135%] -translate-y-1/2 translate-x-[30%] [mask-image:linear-gradient(to_left,black_50%,transparent)]"
        >
          <WheelArt className="size-full" style={{ stroke: "var(--odia-art)" }} />
        </span>
      )}
      <span className={cn("relative z-10 inline-flex items-center gap-2 [&>svg]:shrink-0", iconSize[size ?? "default"])}>
        {loading && <SpinnerIcon className="animate-spin" />}
        {children}
      </span>
    </button>
  )
}

export { Button, buttonVariants }
