"use client";

import { CheckIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const STEPS = ["Account", "Workspace", "Preferences", "Done"];

const getStepDotClass = (i: number, currentStep: number) => {
  if (i < currentStep) {
    return "h-2 w-2 bg-primary opacity-60";
  }
  if (i === currentStep) {
    return "h-2 w-6 bg-primary";
  }
  return "h-2 w-2 bg-muted-foreground/25";
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
        <div className="flex items-center justify-center gap-2 pt-1">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${getStepDotClass(i, step)}`}
            />
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Step {step + 1} of {STEPS.length} — {STEPS[step]}
        </p>

        <div className="flex min-h-[160px] flex-col gap-4">
          {step === 0 && (
            <>
              <div>
                <DialogTitle className="text-base font-semibold">
                  Create your account
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">
                  Set up your account to get started.
                </DialogDescription>
              </div>
              <div className="grid gap-3">
                <div className="grid gap-1.5">
                  <Label htmlFor="ob-name">Full name</Label>
                  <Input id="ob-name" placeholder="Aarav Sharma" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="ob-email">Email</Label>
                  <Input
                    id="ob-email"
                    variant="email"
                    placeholder="aarav@example.com"
                  />
                </div>
              </div>
            </>
          )}
          {step === 1 && (
            <>
              <div>
                <DialogTitle className="text-base font-semibold">
                  Name your workspace
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">
                  Your team will see this everywhere.
                </DialogDescription>
              </div>
              <div className="grid gap-3">
                <div className="grid gap-1.5">
                  <Label htmlFor="ob-workspace">Workspace name</Label>
                  <Input id="ob-workspace" placeholder="Design Studio" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="ob-slug">URL slug</Label>
                  <Input
                    id="ob-slug"
                    addonStart="app.example/"
                    placeholder="design-studio"
                  />
                </div>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div>
                <DialogTitle className="text-base font-semibold">
                  Set your preferences
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">
                  Customize how things work for you.
                </DialogDescription>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { id: "pref-dark", label: "Dark mode by default" },
                  { id: "pref-digest", label: "Weekly digest emails" },
                  { id: "pref-watermarks", label: "Show optional watermarks" },
                ].map((pref) => (
                  <div
                    key={pref.id}
                    className="flex items-center justify-between gap-3 rounded-xl border border-input px-3 py-2.5"
                  >
                    <Label htmlFor={pref.id} className="cursor-pointer text-sm">
                      {pref.label}
                    </Label>
                    <Switch
                      id={pref.id}
                      defaultChecked
                      aria-label={pref.label}
                    />
                  </div>
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
                <DialogTitle className="text-base font-semibold">
                  You&apos;re all set!
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">
                  Your workspace is ready.
                </DialogDescription>
              </div>
            </div>
          )}
        </div>

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
