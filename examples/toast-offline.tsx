"use client";

import { WifiIcon, WifiOffIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { ToastClose, Toaster, createToastManager } from "@/components/ui/toast";

const manager = createToastManager();
const OFFLINE_ID = "network-status";

export const ToastOffline = () => {
  const [isOffline, setIsOffline] = React.useState(false);

  const showOffline = () => {
    setIsOffline(true);
    manager.add({
      data: {
        content: (
          <div className="flex w-full items-start gap-3 p-4">
            <WifiOffIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <p className="text-sm font-medium">You&apos;re offline</p>
              <p className="text-sm text-muted-foreground">
                Check your connection and try again.
              </p>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="shrink-0"
              onClick={() => {
                setIsOffline(false);
                manager.update(OFFLINE_ID, {
                  data: {
                    content: (
                      <div className="flex w-full items-start gap-3 p-4">
                        <WifiIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                        <div className="flex min-w-0 flex-1 flex-col gap-1">
                          <p className="text-sm font-medium">Back online</p>
                          <p className="text-sm text-muted-foreground">
                            Your connection has been restored.
                          </p>
                        </div>
                        <ToastClose />
                      </div>
                    ),
                    watermark: "none",
                  },
                  timeout: 2500,
                });
              }}
            >
              Retry
            </Button>
            <ToastClose />
          </div>
        ),
        watermark: "none",
      },
      id: OFFLINE_ID,
      timeout: 0,
    });
  };

  return (
    <>
      <Toaster toastManager={manager} />
      <Button variant="outline" onClick={showOffline} disabled={isOffline}>
        Go offline
      </Button>
    </>
  );
};
