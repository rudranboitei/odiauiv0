"use client";

import { XIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/odia/odia-button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOrnament,
  DialogTitle,
  DialogTrigger,
} from "@/components/odia/odia-dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const ROLES = ["Viewer", "Editor", "Admin"] as const;

const existing = [
  { initials: "PM", name: "Priya Mohapatra", role: "Admin" },
  { initials: "RD", name: "Rahul Das", role: "Editor" },
  { initials: "AP", name: "Ananya Panda", role: "Viewer" },
];

export const DialogInviteTeammates = () => {
  const [role, setRole] = React.useState<string>("Editor");

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Invite teammates
      </DialogTrigger>
      <DialogContent size="default">
        <DialogHeader>
          <DialogTitle>Invite teammates</DialogTitle>
          <DialogDescription>
            Add people by email. They'll get a link to join your workspace.
          </DialogDescription>
        </DialogHeader>
        <DialogOrnament />

        {/* Input + role select row */}
        <div className="flex gap-2">
          <Input
            variant="email"
            placeholder="colleague@example.com"
            className="flex-1"
          />
          <div className="relative shrink-0">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="h-9 appearance-none rounded-xl border border-input bg-transparent pl-3 pr-8 text-sm shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:bg-input/30"
            >
              {ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

        {/* Current members list */}
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium text-muted-foreground mb-1">
            {existing.length} current members
          </p>
          {existing.map((m) => (
            <div
              key={m.name}
              className="flex items-center gap-3 rounded-xl px-2 py-1.5 hover:bg-muted/60 transition-colors"
            >
              <Avatar className="size-8 shrink-0">
                <AvatarFallback className="text-xs">
                  {m.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="text-sm font-medium leading-tight truncate">
                  {m.name}
                </span>
              </div>
              <span className="text-xs text-muted-foreground shrink-0">
                {m.role}
              </span>
              <button
                aria-label={`Remove ${m.name}`}
                className="rounded-full p-0.5 text-muted-foreground hover:text-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <XIcon className="size-3.5" />
              </button>
            </div>
          ))}
        </div>

        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Cancel
          </DialogClose>
          <Button>Send invite</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
