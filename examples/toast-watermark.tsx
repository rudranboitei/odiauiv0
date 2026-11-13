"use client";

import { Button } from "@/components/ui/button";
import { Toaster, createToastManager } from "@/components/ui/toast";

const manager = createToastManager();

export const ToastWatermark = () => (
  <>
    <Toaster toastManager={manager} />
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          manager.add({
            description:
              "A faint rekha deula hides in the corner of every toast.",
            title: "Deula (default)",
          })
        }
      >
        Deula
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          manager.add({
            data: { watermark: "chakra" },
            description: "The Konark wheel, cropped into the corner.",
            title: "Chakra",
          })
        }
      >
        Chakra
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          manager.add({
            data: { watermark: "none" },
            description: "The plain stock toast, no artwork.",
            title: "None",
          })
        }
      >
        None
      </Button>
    </div>
  </>
);
