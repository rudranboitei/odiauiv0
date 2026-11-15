"use client";

import { CheckCircle2Icon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { ToastClose, Toaster, createToastManager } from "@/components/ui/toast";

const manager = createToastManager();

export const ToastUpload = () => {
  const startUpload = () => {
    let progress = 0;
    let interval = 0;
    const fileName = "design-assets.zip";

    const render = (
      id: string,
      value: number,
      cancelled = false,
      done = false
    ) => {
      if (cancelled) {
        manager.update(id, {
          data: {
            content: (
              <div className="flex w-full items-start gap-3 p-4">
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <p className="text-sm font-medium">Upload cancelled</p>
                  <p className="truncate text-sm text-muted-foreground">
                    {fileName}
                  </p>
                </div>
                <ToastClose />
              </div>
            ),
            watermark: "none",
          },
          timeout: 2500,
        });
        return;
      }

      if (done) {
        manager.update(id, {
          data: {
            content: (
              <div className="flex w-full items-start gap-3 p-4">
                <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <p className="text-sm font-medium">Upload complete</p>
                  <p className="truncate text-sm text-muted-foreground">
                    {fileName}
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="shrink-0"
                  onClick={() => manager.close(id)}
                >
                  View
                </Button>
                <ToastClose />
              </div>
            ),
            watermark: "none",
          },
          timeout: 4000,
        });
        return;
      }

      manager.update(id, {
        data: {
          content: (
            <div className="flex w-full flex-col gap-3 p-4">
              <div className="flex items-start gap-3">
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <p className="text-sm font-medium">Uploading… {value}%</p>
                  <p className="truncate text-sm text-muted-foreground">
                    {fileName}
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="shrink-0"
                  onClick={() => {
                    window.clearInterval(interval);
                    render(id, value, true, false);
                  }}
                >
                  Cancel
                </Button>
                <ToastClose />
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-[width] duration-300"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ),
          watermark: "none",
        },
        timeout: 0,
      });
    };

    const id = manager.add({ data: { watermark: "none" }, timeout: 0 });
    render(id, 0);

    interval = window.setInterval(() => {
      progress = Math.min(100, progress + 12);
      if (progress >= 100) {
        window.clearInterval(interval);
        render(id, 100, false, true);
      } else {
        render(id, progress);
      }
    }, 350);
  };

  return (
    <>
      <Toaster toastManager={manager} />
      <Button variant="outline" onClick={startUpload}>
        Upload file
      </Button>
    </>
  );
};
