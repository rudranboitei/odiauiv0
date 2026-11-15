"use client";

import { HardDriveIcon, LockIcon, TimerIcon } from "lucide-react";
import { toast } from "sonner";

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const AlertBilling = () => (
  <div className="flex w-full max-w-xl flex-col gap-4">
    <Alert icon={<TimerIcon />} status="3 days left" variant="warning">
      <AlertTitle>Your trial is ending</AlertTitle>
      <AlertDescription>
        After that your workspace becomes read-only until you pick a plan.
      </AlertDescription>
      <AlertAction>
        <Button
          onClick={() => toast.success("Opening plans")}
          size="sm"
          className="h-7 px-3"
        >
          Upgrade
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
    <Alert icon={<HardDriveIcon />} variant="warning">
      <AlertTitle>You've used 90% of your storage</AlertTitle>
      <AlertDescription className="flex flex-col gap-2">
        <span>4.5 GB of 5 GB used. Old files free up space automatically.</span>
        <span className="h-1.5 w-full overflow-hidden rounded-full bg-amber-200/70 dark:bg-amber-500/20">
          <span className="block h-full w-[90%] rounded-full bg-amber-500 dark:bg-amber-400" />
        </span>
      </AlertDescription>
    </Alert>
    <Alert icon={<LockIcon />} status="Pro plan" variant="info">
      <AlertTitle>This feature needs the Pro plan</AlertTitle>
      <AlertDescription>
        Unlocks unlimited projects, audit logs and priority support.
      </AlertDescription>
      <AlertAction>
        <Button
          onClick={() => toast.success("Opening plans")}
          size="sm"
          className="h-7 px-3"
        >
          See plans
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
  </div>
);
