"use client";

import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const initialItems = [
  { id: "1", name: "Minimal Backpack", price: 48, qty: 1 },
  { id: "2", name: "Water Bottle", price: 24, qty: 2 },
  { id: "3", name: "Travel Pouch", price: 18, qty: 1 },
];

export const SheetCart = () => {
  const [items, setItems] = React.useState(initialItems);

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Open cart
      </SheetTrigger>
      <SheetContent side="right" className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>{items.length} items in your cart</SheetDescription>
        </SheetHeader>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4">
          {items.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">
              Your cart is empty.
            </p>
          ) : (
            <ul className="flex flex-col gap-3 pb-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 rounded-xl border bg-card p-3"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-muted text-xs font-medium text-muted-foreground">
                    IMG
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <p className="truncate text-sm font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon-sm"
                        onClick={() => updateQty(item.id, -1)}
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <MinusIcon />
                      </Button>
                      <span className="w-6 text-center text-sm tabular-nums">
                        {item.qty}
                      </span>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon-sm"
                        onClick={() => updateQty(item.id, 1)}
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <PlusIcon />
                      </Button>
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    className="text-muted-foreground hover:text-destructive"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2Icon />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <SheetFooter>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <SheetClose render={<Button className="w-full" />}>
            Checkout
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
