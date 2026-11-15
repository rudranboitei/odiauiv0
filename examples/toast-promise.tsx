"use client";

import { CheckCircle2Icon, XCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ToastClose, Toaster, createToastManager } from "@/components/ui/toast";

const manager = createToastManager();

const wait = (ms: number, shouldFail = false) =>
  // eslint-disable-next-line promise/avoid-new -- demo delay helper
  new Promise<void>((resolve, reject) => {
    window.setTimeout(
      () => (shouldFail ? reject(new Error("Failed")) : resolve()),
      ms
    );
  });

const ResultContent = ({
  title,
  description,
  success,
}: {
  title: string;
  description: string;
  success: boolean;
}) => (
  <div className="flex w-full items-start gap-3 p-4">
    {success ? (
      <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-primary" />
    ) : (
      <XCircleIcon className="mt-0.5 size-4 shrink-0 text-destructive" />
    )}
    <div className="flex min-w-0 flex-1 flex-col gap-1">
      <p className="text-sm font-medium">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    <ToastClose />
  </div>
);

export const ToastPromise = () => {
  const run = async (shouldFail = false) => {
    const id = manager.add({
      data: { watermark: "none" },
      description: "Your changes are being saved.",
      timeout: 0,
      title: "Saving…",
      type: "loading",
    });

    try {
      await wait(1600, shouldFail);
      manager.update(id, {
        data: {
          content: (
            <ResultContent
              success
              title="Saved"
              description="Your changes have been saved."
            />
          ),
          watermark: "none",
        },
        description: undefined,
        timeout: 3000,
        title: undefined,
        type: undefined,
      });
    } catch {
      manager.update(id, {
        data: {
          content: (
            <ResultContent
              success={false}
              title="Failed to save"
              description="Please try again."
            />
          ),
          watermark: "none",
        },
        description: undefined,
        timeout: 4000,
        title: undefined,
        type: undefined,
      });
    }
  };

  return (
    <>
      <Toaster toastManager={manager} />
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => run(false)}>
          Save
        </Button>
        <Button variant="outline" onClick={() => run(true)}>
          Save (fail)
        </Button>
      </div>
    </>
  );
};
