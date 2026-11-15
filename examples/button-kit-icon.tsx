"use client";

import { BellIcon, PlusIcon, SettingsIcon } from "lucide-react";
import * as React from "react";

import {
  CloseButton,
  ExpandCollapseButton,
  FabButton,
  IconButton,
  MenuButton,
  Pagination,
  ScrollTopButton,
} from "@/components/ui/button-kit";

export const ButtonKitIcon = () => {
  const [page, setPage] = React.useState(3);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <IconButton label="Settings">
          <SettingsIcon className="size-4" />
        </IconButton>
        <IconButton label="Notifications">
          <BellIcon className="size-4" />
        </IconButton>
        <CloseButton />
        <MenuButton />
        <FabButton label="Add item">
          <PlusIcon className="size-5" />
        </FabButton>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <ExpandCollapseButton />
        <ScrollTopButton />
      </div>
      <Pagination onPageChange={setPage} page={page} totalPages={5} />
    </div>
  );
};
