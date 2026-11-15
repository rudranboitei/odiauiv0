"use client";

import { ShoppingBagIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ToastClose, Toaster, createToastManager } from "@/components/ui/toast";

const manager = createToastManager();

export const ToastCart = () => (
  <>
    <Toaster toastManager={manager} />
    <Button
      variant="outline"
      onClick={() =>
        manager.add({
          data: {
            content: (
              <div className="flex w-full items-center gap-3 p-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                  <ShoppingBagIcon className="size-5" aria-hidden="true" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <p className="text-sm font-medium">Added to cart</p>
                  <p className="truncate text-sm text-muted-foreground">
                    Minimal Canvas Backpack
                  </p>
                </div>
                <Button size="sm" variant="outline" className="shrink-0">
                  View cart
                </Button>
                <ToastClose />
              </div>
            ),
            watermark: "none",
          },
          timeout: 5000,
        })
      }
    >
      Add to cart
    </Button>
  </>
);
