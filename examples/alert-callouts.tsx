"use client";

import {
  CircleAlertIcon,
  InfoIcon,
  LightbulbIcon,
  OctagonAlertIcon,
  TriangleAlertIcon,
} from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const AlertCallouts = () => (
  <div className="flex w-full max-w-xl flex-col gap-4">
    <Alert icon={<InfoIcon />} variant="info">
      <AlertTitle>Note</AlertTitle>
      <AlertDescription>
        Supplementary information the reader should keep in mind.
      </AlertDescription>
    </Alert>
    <Alert icon={<LightbulbIcon />} variant="success">
      <AlertTitle>Tip</AlertTitle>
      <AlertDescription>
        Shortcuts and best practices that make things easier.
      </AlertDescription>
    </Alert>
    <Alert icon={<CircleAlertIcon />} variant="important">
      <AlertTitle>Important</AlertTitle>
      <AlertDescription>
        Key information the user needs to know before proceeding.
      </AlertDescription>
    </Alert>
    <Alert icon={<TriangleAlertIcon />} variant="warning">
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Urgent info needed right before the user takes action.
      </AlertDescription>
    </Alert>
    <Alert icon={<OctagonAlertIcon />} variant="destructive">
      <AlertTitle>Caution</AlertTitle>
      <AlertDescription>
        Advises about risks or negative outcomes.
      </AlertDescription>
    </Alert>
  </div>
);
