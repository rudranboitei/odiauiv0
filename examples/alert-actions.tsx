"use client";

import { CreditCardIcon, HourglassIcon, MailWarningIcon } from "lucide-react";
import { toast } from "sonner";

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const AlertActions = () => (
  <div className="flex w-full max-w-xl flex-col gap-4">
    <Alert icon={<CreditCardIcon />} status="Failed" variant="destructive">
      <AlertTitle>Your card was declined</AlertTitle>
      <AlertDescription>
        Your bank refused the charge. Try another payment method.
      </AlertDescription>
      <AlertAction>
        <Button
          onClick={() => toast.success("Opening billing settings")}
          size="sm"
          className="h-7 px-3"
        >
          Update card
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
    <Alert icon={<MailWarningIcon />} status="Action needed" variant="warning">
      <AlertTitle>Verify your email to continue</AlertTitle>
      <AlertDescription>
        We sent a link to you@example.com — it expires in 24 hours.
      </AlertDescription>
      <AlertAction>
        <Button
          onClick={() => toast.success("Verification email resent")}
          size="sm"
          className="h-7 px-3"
        >
          Resend
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
    <Alert icon={<HourglassIcon />} status="2 min left" variant="info">
      <AlertTitle>You'll be logged out soon</AlertTitle>
      <AlertDescription>Your session is about to expire.</AlertDescription>
      <AlertAction>
        <Button
          onClick={() => toast.success("Session extended by 30 days")}
          size="sm"
          className="h-7 px-3"
        >
          Stay signed in
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
