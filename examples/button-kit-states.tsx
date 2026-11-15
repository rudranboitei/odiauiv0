"use client";

import {
  CountdownButton,
  ErrorRetryButton,
  HoldToConfirmButton,
  ProcessingButton,
  ProgressButton,
  SuccessStateButton,
} from "@/components/ui/button-kit";

export const ButtonKitStates = () => (
  <div className="flex flex-wrap items-center justify-center gap-3">
    <ProcessingButton />
    <SuccessStateButton />
    <ErrorRetryButton onRun={() => Promise.reject(new Error("demo"))} />
    <ProgressButton />
    <CountdownButton duration={10} />
    <HoldToConfirmButton />
  </div>
);
