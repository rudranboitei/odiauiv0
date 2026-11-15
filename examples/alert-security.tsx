"use client";

import { KeyRoundIcon, LogInIcon } from "lucide-react";
import { toast } from "sonner";

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const AlertSecurity = () => (
  <div className="flex w-full max-w-xl flex-col gap-4">
    <Alert icon={<KeyRoundIcon />} status="Security" variant="destructive">
      <AlertTitle>Your password was changed</AlertTitle>
      <AlertDescription>
        It happened today at 9:42 AM from Chrome on Windows.
      </AlertDescription>
      <AlertAction>
        <Button
          onClick={() => toast.success("Opening reset flow")}
          size="sm"
          className="h-7 px-3"
        >
          Wasn't you? Reset now
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
    <Alert icon={<LogInIcon />} status="New device" variant="info">
      <AlertTitle>New sign-in from Chrome, Bangalore</AlertTitle>
      <AlertDescription>
        A new device signed in to your account just now.
      </AlertDescription>
      <AlertAction>
        <Button
          onClick={() => toast.success("Opening review")}
          size="sm"
          className="h-7 px-3"
        >
          Not you?
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
