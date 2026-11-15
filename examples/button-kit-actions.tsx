"use client";

import {
  AddToCartButton,
  BackButton,
  BuyNowButton,
  CancelButton,
  DeleteConfirmButton,
  DownloadButton,
  DuplicateButton,
  EditButton,
  RefreshButton,
  SaveButton,
  ShareButton,
  SubmitButton,
  UploadButton,
} from "@/components/ui/button-kit";

export const ButtonKitActions = () => (
  <div className="flex flex-wrap items-center justify-center gap-3">
    <AddToCartButton />
    <BuyNowButton />
    <SaveButton />
    <SubmitButton valid />
    <CancelButton />
    <BackButton />
    <DeleteConfirmButton />
    <EditButton />
    <DuplicateButton />
    <ShareButton />
    <DownloadButton />
    <UploadButton />
    <RefreshButton />
  </div>
);
