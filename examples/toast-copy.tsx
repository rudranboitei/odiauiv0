"use client";

import { CheckIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ToastClose, Toaster, createToastManager } from "@/components/ui/toast";

const manager = createToastManager();

export const ToastCopy = () => {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(
        "npx shadcn@latest add @odiaui/toast"
      );
    } catch {
      // ignore in non-secure contexts
    }

    manager.add({
      data: {
        content: (
          <div className="flex items-center gap-2 px-3 py-2.5">
            <CheckIcon className="size-4 text-primary" aria-hidden="true" />
            <p className="text-sm font-medium">Copied!</p>
            <ToastClose />
          </div>
        ),
        contentClassName: "p-0",
        watermark: "none",
      },
      timeout: 1500,
    });
  };

  return (
    <>
      <Toaster toastManager={manager} />
      <Button variant="outline" onClick={copy}>
        Copy command
      </Button>
    </>
  );
};
