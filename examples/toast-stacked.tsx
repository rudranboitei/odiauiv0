"use client";

import { Button } from "@/components/ui/button";
import { Toaster, createToastManager } from "@/components/ui/toast";

const manager = createToastManager();

export const ToastStacked = () => (
  <>
    <Toaster toastManager={manager} />
    <Button
      variant="outline"
      onClick={() => {
        manager.add({
          data: { watermark: "none" },
          description: "Your message was delivered.",
          title: "Message sent",
          type: "success",
        });
        manager.add({
          data: { watermark: "none" },
          description: "Your changes have been saved.",
          title: "Profile updated",
          type: "info",
        });
        manager.add({
          data: { watermark: "none" },
          description: "Someone replied to your post.",
          title: "New comment",
        });
      }}
    >
      Show 3 toasts
    </Button>
  </>
);
