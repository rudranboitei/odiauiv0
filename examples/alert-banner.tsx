"use client";

import { FlaskConicalIcon, SparklesIcon } from "lucide-react";
import { toast } from "sonner";

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const AlertBanner = () => (
  <div className="flex w-full flex-col items-center gap-6">
    {/* Top announcement banner */}
    <div className="flex w-full flex-col gap-4 overflow-hidden rounded-xl border bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04),0_6px_20px_rgba(0,0,0,0.05)]">
      <Alert
        className="rounded-none border-x-0 border-t-0"
        icon={<SparklesIcon />}
        status="Diwali Sale"
        variant="warning"
      >
        <AlertTitle>30% off sitewide</AlertTitle>
        <AlertDescription>
          Through the end of the festive week.
        </AlertDescription>
        <AlertAction>
          <Button
            onClick={() => toast.success("Opening shop")}
            size="sm"
            className="h-7 px-3"
          >
            Shop now
          </Button>
          <Button
            onClick={() => toast.success("Dismissed")}
            size="sm"
            className="h-7 px-3"
            variant="ghost"
          >
            Dismiss
          </Button>
        </AlertAction>
      </Alert>
      <div className="grid min-h-24 place-items-center text-muted-foreground text-xs">
        Your page content sits under the banner.
      </div>
    </div>
    <Alert
      className="max-w-xl"
      icon={<FlaskConicalIcon />}
      status="Beta"
      variant="important"
    >
      <AlertTitle>This feature is in beta</AlertTitle>
      <AlertDescription>
        APIs and behaviour may change before the stable release.
      </AlertDescription>
    </Alert>
  </div>
);
