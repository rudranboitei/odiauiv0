"use client";

import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const toggleGroupItemVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[pressed]:bg-accent data-[pressed]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "h-9 min-w-9 px-2",
        icon: "size-9",
        "icon-sm": "size-8",
        lg: "h-10 min-w-10 px-2.5",
        sm: "h-8 min-w-8 px-1.5",
      },
      variant: {
        default: "bg-transparent",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 data-[pressed]:bg-accent/80 data-[pressed]:text-accent-foreground",
        outline:
          "border-0 bg-card text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_12px_rgba(0,0,0,0.06)] hover:bg-accent hover:text-accent-foreground data-[pressed]:bg-accent",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 data-[pressed]:bg-secondary/60",
      },
    },
  }
);

const ToggleGroupContext = React.createContext<{
  variant?: VariantProps<typeof toggleGroupItemVariants>["variant"];
  size?: VariantProps<typeof toggleGroupItemVariants>["size"];
}>({});

const ToggleGroup = ({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive> & {
  /** Default variant for every item; items can override it. */
  variant?: VariantProps<typeof toggleGroupItemVariants>["variant"];
  /** Default size for every item; items can override it. */
  size?: VariantProps<typeof toggleGroupItemVariants>["size"];
}) => (
  <ToggleGroupContext.Provider value={{ variant, size }}>
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      className={cn("flex w-fit items-center gap-1", className)}
      {...props}
    />
  </ToggleGroupContext.Provider>
);

const ToggleGroupItem = ({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive> &
  VariantProps<typeof toggleGroupItemVariants>) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <TogglePrimitive
      data-slot="toggle-group-item"
      className={cn(
        toggleGroupItemVariants({
          className,
          size: size ?? context.size,
          variant: variant ?? context.variant,
        })
      )}
      {...props}
    />
  );
};

export { ToggleGroup, ToggleGroupItem, toggleGroupItemVariants };
