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
            data: { watermark: "none" },
            title: "Saved successfully",
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
            data: { watermark: "none" },
            title: "New update available",
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
            data: { watermark: "none" },
            title: "Storage almost full",
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
            data: { watermark: "none" },
            title: "Something went wrong",
            type: "error",
          })
        }
      >
        Error
      </Button>
    </div>
  </>
);
