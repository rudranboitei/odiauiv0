"use client";

import { CheckIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const STEPS = ["Account", "Workspace", "Preferences", "Done"];

const getStepDotClass = (i: number, currentStep: number) => {
  if (i < currentStep) {
    return "bg-primary w-2 h-2 opacity-60";
  }
  if (i === currentStep) {
    return "bg-primary w-6 h-2";
  }
  return "bg-muted-foreground/25 w-2 h-2";
};

export const DialogMultiStepOnboarding = () => {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState(0);
  const isLast = step === STEPS.length - 1;

  const handleClose = (v: boolean) => {
    setOpen(v);
    if (!v) {
      setTimeout(() => setStep(0), 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTrigger render={<Button variant="outline" />}>
        Start onboarding
      </DialogTrigger>
      <DialogContent
        size="default"
        showCloseButton={false}
        className="overflow-hidden"
      >
        {/* Step dots */}
        <div className="flex items-center justify-center gap-2 pt-1">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${getStepDotClass(i, step)}`}
            />
          ))}
        </div>

        {/* Step label */}
        <p className="text-xs text-center text-muted-foreground">
          Step {step + 1} of {STEPS.length} — {STEPS[step]}
        </p>

        {/* Step content */}
        <div className="min-h-[160px] flex flex-col gap-4">
          {step === 0 && (
            <>
              <div>
                <h2 className="text-base font-semibold">Create your account</h2>
                <p className="text-sm text-muted-foreground">
                  Start your OdiaUI journey.
                </p>
              </div>
              <div className="grid gap-3">
                <div className="grid gap-1.5">
                  <Label htmlFor="ob-name">Full name</Label>
                  <Input id="ob-name" placeholder="Rabi Narayan Das" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="ob-email">Email</Label>
                  <Input
                    id="ob-email"
                    variant="email"
                    placeholder="rabi@example.com"
                  />
                </div>
              </div>
            </>
          )}
          {step === 1 && (
            <>
              <div>
                <h2 className="text-base font-semibold">Name your workspace</h2>
                <p className="text-sm text-muted-foreground">
                  Your team will see this everywhere.
                </p>
              </div>
              <div className="grid gap-3">
                <div className="grid gap-1.5">
                  <Label htmlFor="ob-workspace">Workspace name</Label>
                  <Input
                    id="ob-workspace"
                    placeholder="Kalinga Design Studio"
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="ob-slug">URL slug</Label>
                  <Input
                    id="ob-slug"
                    addonStart="odiaui.xyz/"
                    placeholder="kalinga-ds"
                  />
                </div>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div>
                <h2 className="text-base font-semibold">
                  Set your preferences
                </h2>
                <p className="text-sm text-muted-foreground">
                  Customize how OdiaUI works for you.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  "Dark mode by default",
                  "Weekly digest emails",
                  "Show heritage watermarks",
                ].map((pref) => (
                  <label
                    key={pref}
                    className="flex items-center gap-3 rounded-xl border border-input px-3 py-2.5 cursor-pointer hover:bg-muted/50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      defaultChecked
                      className="accent-primary"
                    />
                    <span className="text-sm">{pref}</span>
                  </label>
                ))}
              </div>
            </>
          )}
          {step === 3 && (
            <div className="flex flex-1 flex-col items-center justify-center gap-3 py-4">
              <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 ring-4 ring-primary/10">
                <CheckIcon className="size-7 text-primary" />
              </div>
              <div className="text-center">
                <h2 className="text-base font-semibold">You're all set!</h2>
                <p className="text-sm text-muted-foreground">
                  Your workspace is ready. Welcome to OdiaUI.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1">
          <Button
            variant="ghost"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            size="sm"
          >
            Back
          </Button>
          {isLast ? (
            <Button onClick={() => setOpen(false)}>Go to dashboard</Button>
          ) : (
            <Button onClick={() => setStep((s) => s + 1)}>Continue</Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
