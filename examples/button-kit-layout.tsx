"use client";

import * as React from "react";
import { toast } from "sonner";

import {
  BadgeButton,
  BlockButton,
  ButtonGroup,
  DropdownTriggerButton,
  SegmentedControl,
  ShortcutButton,
  SplitButton,
} from "@/components/ui/button-kit";

const ButtonGroupDemoButton = ({ children }: { children: React.ReactNode }) => (
  <button
    className="h-9 cursor-pointer px-4 text-sm font-medium transition-colors hover:bg-accent focus-visible:bg-accent focus-visible:outline-none"
    type="button"
  >
    {children}
  </button>
);

export const ButtonKitLayout = () => {
  const [view, setView] = React.useState("grid");

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <ButtonGroup>
          <ButtonGroupDemoButton>Day</ButtonGroupDemoButton>
          <ButtonGroupDemoButton>Week</ButtonGroupDemoButton>
          <ButtonGroupDemoButton>Month</ButtonGroupDemoButton>
        </ButtonGroup>
        <SplitButton
          items={[
            {
              label: "Create project",
              onSelect: () => toast.success("Project created"),
            },
            {
              label: "Import project",
              onSelect: () => toast.success("Project imported"),
            },
          ]}
        />
        <DropdownTriggerButton
          items={[
            { label: "Duplicate", onSelect: () => toast.success("Duplicated") },
            { label: "Archive", onSelect: () => toast.success("Archived") },
          ]}
        />
      </div>
      <SegmentedControl
        onValueChange={setView}
        options={[
          { label: "Grid", value: "grid" },
          { label: "List", value: "list" },
          { label: "Board", value: "board" },
        ]}
        value={view}
      />
      <div className="flex flex-wrap items-center justify-center gap-3">
        <BadgeButton count={4} />
        <ShortcutButton />
      </div>
      <BlockButton className="max-w-sm" />
    </div>
  );
};
