"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Toaster, createToastManager } from "@/components/ui/toast";
import type { ToastPosition } from "@/components/ui/toast";

const manager = createToastManager();

const positions: ToastPosition[] = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

export const ToastPositionPicker = () => {
  const [position, setPosition] = React.useState<ToastPosition>("bottom-right");

  return (
    <>
      <Toaster toastManager={manager} position={position} />
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {positions.map((p) => (
            <Button
              key={p}
              size="sm"
              variant={position === p ? "default" : "outline"}
              onClick={() => setPosition(p)}
            >
              {p}
            </Button>
          ))}
        </div>
        <div>
          <Button
            variant="outline"
            onClick={() =>
              manager.add({
                data: { watermark: "none" },
                description: `Showing at ${position}.`,
                title: "Position preview",
              })
            }
          >
            Show toast
          </Button>
        </div>
      </div>
    </>
  );
};
