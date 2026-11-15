"use client";

import {
  BookOpenIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  MapIcon,
  MessageSquareIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import * as React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Kbd } from "@/components/ui/kbd";

export const DialogCommandPalette = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const run = (label: string) => {
    setOpen(false);
    toast.success(`Running: ${label}`);
  };

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        className="gap-2 text-muted-foreground"
      >
        <span>Search commands…</span>
        <span className="ml-auto flex items-center gap-0.5">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </span>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen} showCloseButton={false}>
        <CommandInput placeholder="Type a command or search…" />
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => run("Dashboard")}>
            <LayoutDashboardIcon />
            Dashboard
            <CommandShortcut>⌘D</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => run("Profile")}>
            <UserIcon />
            Profile
          </CommandItem>
          <CommandItem onSelect={() => run("Messages")}>
            <MessageSquareIcon />
            Messages
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Content">
          <CommandItem onSelect={() => run("New document")}>
            <FileTextIcon />
            New document
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => run("Browse templates")}>
            <BookOpenIcon />
            Browse templates
          </CommandItem>
          <CommandItem onSelect={() => run("Open map")}>
            <MapIcon />
            Open map
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Settings">
          <CommandItem onSelect={() => run("Settings")}>
            <SettingsIcon />
            Settings
            <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandDialog>
    </>
  );
};
