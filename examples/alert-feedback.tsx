"use client";

import {
  ArrowUpCircleIcon,
  CheckCircle2Icon,
  WifiIcon,
  WifiOffIcon,
} from "lucide-react";
import * as React from "react";

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const AlertFeedback = () => {
  const [online, setOnline] = React.useState(false);

  return (
    <div className="flex w-full max-w-2xl flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
            Confirmations
          </p>
          <Alert icon={<CheckCircle2Icon />} variant="success">
            <AlertTitle>Profile updated</AlertTitle>
            <AlertDescription>
              Your changes are live everywhere.
            </AlertDescription>
          </Alert>
          <Alert icon={<ArrowUpCircleIcon />} status="v3.2" variant="info">
            <AlertTitle>Update available</AlertTitle>
            <AlertDescription>
              A new version is ready to install.
            </AlertDescription>
            <AlertAction>
              <Button size="sm" className="h-7 px-3">
                Refresh
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-7 px-2.5 text-muted-foreground"
              >
                Later
              </Button>
            </AlertAction>
          </Alert>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
            Connection status
          </p>
          {online ? (
            <Alert icon={<WifiIcon />} variant="success">
              <AlertTitle>Back online</AlertTitle>
              <AlertDescription>
                You're reconnected — unsaved work has been synced.
              </AlertDescription>
            </Alert>
          ) : (
            <Alert icon={<WifiOffIcon />} variant="destructive">
              <AlertTitle>You're offline</AlertTitle>
              <AlertDescription>
                Check your connection — edits are saved locally.
              </AlertDescription>
            </Alert>
          )}
          <Button
            className="h-7 self-start px-3"
            onClick={() => setOnline((prev) => !prev)}
            size="sm"
            variant="outline"
          >
            {online ? "Simulate offline" : "Simulate back online"}
          </Button>
        </div>
      </div>
    </div>
  );
};
