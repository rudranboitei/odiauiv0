"use client";

import { AlertCircleIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const AlertForm = () => (
  <div className="flex w-full max-w-md flex-col gap-4 rounded-xl border bg-card p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_6px_20px_rgba(0,0,0,0.05)]">
    <Alert icon={<AlertCircleIcon />} status="3 errors" variant="destructive">
      <AlertTitle>Please fix the errors and try again</AlertTitle>
      <AlertDescription>
        Email is not valid · Password is too short · Terms not accepted
      </AlertDescription>
    </Alert>
    <div className="flex flex-col gap-3">
      <div className="grid gap-1.5">
        <Label htmlFor="form-email">Email</Label>
        <Input id="form-email" placeholder="you@example.com" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="form-password">Password</Label>
        <Input id="form-password" type="password" placeholder="••••••••" />
      </div>
      <Button>Submit</Button>
    </div>
  </div>
);
