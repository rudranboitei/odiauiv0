"use client";

import { Button } from "@/components/ui/button";
import { Toaster, createToastManager } from "@/components/ui/toast";

const manager = createToastManager();

export const ToastTypes = () => (
  <>
    <Toaster toastManager={manager} />
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          manager.add({
            description: "Your chhena poda order is confirmed.",
            title: "Kunda served",
            type: "success",
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          manager.add({
            description: "Bada Danda closes at 5 pm today.",
            title: "Rath Yatra route",
            type: "info",
          })
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          manager.add({
            description: "Chandrabhaga beach entry paused till 6 pm.",
            title: "High tide",
            type: "warning",
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          manager.add({
            description: "No seats left for the evening aarti.",
            title: "Booking failed",
            type: "error",
          })
        }
      >
        Error
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          manager.add({
            title: "Checking passes...",
            type: "loading",
          })
        }
      >
        Loading
      </Button>
    </div>
  </>
);
