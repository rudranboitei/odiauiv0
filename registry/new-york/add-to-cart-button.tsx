"use client";

import { CheckIcon, ShoppingCartIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";

export type AddToCartButtonProps = React.ComponentProps<typeof Button> & {
  onAdd?: () => void;
};

export function AddToCartButton({ onAdd, ...props }: AddToCartButtonProps) {
  const [quantity, setQuantity] = React.useState(0);
  const [justAdded, setJustAdded] = React.useState(false);

  const handleAdd = () => {
    setQuantity((q) => q + 1);
    setJustAdded(true);
    onAdd?.();
    window.setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <Button onClick={handleAdd} {...props}>
      {justAdded ? (
        <CheckIcon className="size-4" aria-hidden="true" />
      ) : (
        <ShoppingCartIcon className="size-4" aria-hidden="true" />
      )}
      {justAdded ? "Added" : "Add to cart"}
      {quantity > 0 && !justAdded && (
        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary-foreground/25 px-1 text-xs font-semibold">
          {quantity}
        </span>
      )}
    </Button>
  );
}
