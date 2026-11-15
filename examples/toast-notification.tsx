"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ToastClose, Toaster, createToastManager } from "@/components/ui/toast";

const manager = createToastManager();

export const ToastNotification = () => (
  <>
    <Toaster toastManager={manager} />
    <Button
      variant="outline"
      onClick={() =>
        manager.add({
          data: {
            content: (
              <div className="flex w-full items-start gap-3 p-4">
                <Avatar className="size-9 shrink-0">
                  <AvatarFallback className="text-xs">PS</AvatarFallback>
                </Avatar>
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <p className="text-sm font-medium">
                    Priya sent you a message
                  </p>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    Hey! Can you review the latest dialog examples when you get
                    a chance?
                  </p>
                </div>
                <Button size="sm" variant="outline" className="shrink-0">
                  Reply
                </Button>
                <ToastClose />
              </div>
            ),
            watermark: "none",
          },
          timeout: 6000,
        })
      }
    >
      Show notification
    </Button>
  </>
);
