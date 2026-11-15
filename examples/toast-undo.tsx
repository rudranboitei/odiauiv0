"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { ToastClose, Toaster, createToastManager } from "@/components/ui/toast";

const manager = createToastManager();

const UndoToast = ({
  toastId,
  duration = 5000,
}: {
  toastId: string;
  duration?: number;
}) => (
  <div className="flex w-full flex-col gap-3 p-4">
    <div className="flex items-start gap-3">
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="text-sm font-medium">Item deleted</p>
        <p className="text-sm text-muted-foreground">
          The item was removed from your list.
        </p>
      </div>
      <Button
        size="sm"
        variant="outline"
        className="shrink-0"
        onClick={() => {
          manager.close(toastId);
          manager.add({
            description: "The item is back in your list.",
            title: "Deletion undone",
            type: "success",
          });
        }}
      >
        Undo
      </Button>
      <ToastClose />
    </div>
    <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
      <div
        className="h-full rounded-full bg-primary"
        style={{
          animation: `toast-countdown ${duration}ms linear forwards`,
        }}
      />
    </div>
    <style>{`@keyframes toast-countdown { from { width: 100%; } to { width: 0%; } }`}</style>
  </div>
);

export const ToastUndo = () => (
  <>
    <Toaster toastManager={manager} />
    <Button
      variant="outline"
      onClick={() => {
        const duration = 5000;
        const id = manager.add({
          data: {
            content: <UndoToast toastId="" duration={duration} />,
            watermark: "none",
          },
          timeout: duration,
        });
        manager.update(id, {
          data: {
            content: <UndoToast toastId={id} duration={duration} />,
            watermark: "none",
          },
          timeout: duration,
        });
      }}
    >
      Delete item
    </Button>
  </>
);
