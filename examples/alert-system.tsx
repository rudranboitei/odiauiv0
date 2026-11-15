"use client";

import {
  ServerCrashIcon,
  TerminalIcon,
  TriangleAlertIcon,
  WrenchIcon,
  RocketIcon,
} from "lucide-react";
import { toast } from "sonner";

import { CopyButton } from "@/components/copy-button";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const AlertSystem = () => (
  <div className="grid w-full max-w-2xl gap-4 md:grid-cols-2">
    <Alert icon={<WrenchIcon />} status="Tonight" variant="info">
      <AlertTitle>Scheduled downtime</AlertTitle>
      <AlertDescription>
        11 PM to 1 AM — the API may be unreachable.
      </AlertDescription>
    </Alert>
    <Alert icon={<ServerCrashIcon />} status="Degraded" variant="warning">
      <AlertTitle>Some features are unavailable</AlertTitle>
      <AlertDescription>
        Uploads and exports are paused while we restore service.
      </AlertDescription>
    </Alert>
    <Alert icon={<TerminalIcon />} status="429" variant="destructive">
      <AlertTitle>API error</AlertTitle>
      <AlertDescription className="flex items-center gap-2">
        <code className="rounded-md bg-foreground/5 px-1.5 py-0.5 font-mono text-xs">
          ERR_RATE_LIMIT_429
        </code>
        <CopyButton
          className="static size-6 bg-transparent"
          copiedClassName="text-primary"
          showTooltip={false}
          value="ERR_RATE_LIMIT_429"
        />
      </AlertDescription>
    </Alert>
    <Alert icon={<RocketIcon />} status="Failed" variant="destructive">
      <AlertTitle>Deployment failed</AlertTitle>
      <AlertDescription>
        Build exited with code 1 at step 4 of 6.
      </AlertDescription>
      <AlertAction>
        <Button
          onClick={() => toast.success("Opening logs")}
          size="sm"
          className="h-7 px-3"
        >
          View logs
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
    <Alert
      className="md:col-span-2"
      icon={<TriangleAlertIcon />}
      status="v3"
      variant="warning"
    >
      <AlertTitle>This API will be removed in v3</AlertTitle>
      <AlertDescription>
        Migrate to the paginated endpoint before the next major release.
      </AlertDescription>
      <AlertAction>
        <Button
          onClick={() => toast.success("Opening guide")}
          size="sm"
          className="h-7 px-3"
        >
          Migration guide
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
