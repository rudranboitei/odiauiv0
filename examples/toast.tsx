"use client";

import { Button } from "@/components/ui/button";
import { Toaster, createToastManager } from "@/components/ui/toast";

const manager = createToastManager();

export const ToastDemo = () => (
  <>
    <Toaster toastManager={manager} />
    <Button
      variant="outline"
      onClick={() =>
        manager.add({
          description: "Your offering is queued for the morning darshan.",
          title: "Prasad added",
        })
      }
    >
      Show toast
    </Button>
  </>
);
