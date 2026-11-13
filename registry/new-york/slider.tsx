"use client"

import { Slider as SliderPrimitive } from "@base-ui/react/slider"
import { cn } from "@/lib/utils"
import { BadgeIcon, type BadgeIconName } from "@/components/ui/badge"

/* ───────────────────────────────────────────────────────────
 * OdiaUI Slider
 *
 * Tokens only. Each thumb carries a cultural motif from the
 * Badge icon set — a mini Konark wheel by default — drawn
 * inline in currentColor; pass motif="none" for the plain
 * stock thumb. `ticks` adds faint markers along the track,
 * alternating dots and Ikat diamonds like a temple flag rope.
 * ─────────────────────────────────────────────────────────── */

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  motif = "chakra",
  ticks,
  ...props
}: SliderPrimitive.Root.Props & {
  /** Cultural icon shown in each thumb. */
  motif?: BadgeIconName | "none"
  /** Number of marker dots along the track (horizontal only). */
  ticks?: number
}) {
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [min, max]

  return (
    <SliderPrimitive.Root
      className={cn(
        "data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full",
        className
      )}
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      thumbAlignment="edge"
      {...props}
    >
      <SliderPrimitive.Control className="relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col">
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="relative grow overflow-hidden rounded-full bg-border select-none data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        >
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className="bg-primary select-none data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          />
        </SliderPrimitive.Track>
        {ticks ? (
          <div
            data-slot="slider-ticks"
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between"
          >
            {Array.from({ length: ticks }, (_, index) => (
              <span
                key={index}
                className={cn(
                  "size-1 bg-background",
                  index === 0 || index === ticks - 1
                    ? "rounded-full"
                    : "rotate-45 rounded-[1px]"
                )}
              />
            ))}
          </div>
        ) : null}
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            className={cn(
              "relative shrink-0 rounded-full ring-ring/50 transition-[color,box-shadow] select-none after:absolute after:-inset-2 hover:ring-3 focus-visible:ring-3 focus-visible:outline-hidden active:ring-3 disabled:pointer-events-none disabled:opacity-50",
              motif === "none"
                ? "block size-3 border border-ring bg-white"
                : "grid size-5 place-items-center border border-input bg-background text-primary [&_svg]:size-3.5"
            )}
          >
            {motif !== "none" && <BadgeIcon name={motif} />}
          </SliderPrimitive.Thumb>
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
}

export { Slider }
