"use client";

import { UploadCloudIcon, XIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
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
} from "@/components/ui/dialog";

interface FileItem {
  name: string;
  size: string;
  progress: number;
}

const FAKE_FILES: FileItem[] = [
  { name: "temple-architecture.pdf", progress: 100, size: "2.4 MB" },
  { name: "ikat-patterns.zip", progress: 62, size: "14.8 MB" },
  { name: "konark-photos.webp", progress: 35, size: "890 KB" },
];

export const DialogFileUpload = () => {
  const [isDragging, setIsDragging] = React.useState(false);
  const [files, setFiles] = React.useState<FileItem[]>([]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Simulate adding fake files for demo
    setFiles(FAKE_FILES);
  };

  const removeFile = (name: string) =>
    setFiles((f) => f.filter((x) => x.name !== name));

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Upload files
      </DialogTrigger>
      <DialogContent size="default">
        <DialogHeader>
          <DialogTitle>Upload files</DialogTitle>
          <DialogDescription>
            Drag and drop files here, or click to browse. Max 50 MB per file.
          </DialogDescription>
        </DialogHeader>
        <DialogOrnament />

        {/* Drop zone */}
        <button
          type="button"
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => setFiles(FAKE_FILES)}
          className={`flex w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed p-8 cursor-pointer transition-colors select-none ${
            isDragging
              ? "border-primary/60 bg-primary/5"
              : "border-border hover:border-primary/40 hover:bg-muted/40"
          }`}
        >
          <div
            className={`flex size-12 items-center justify-center rounded-2xl transition-colors ${isDragging ? "bg-primary/10" : "bg-muted"}`}
          >
            <UploadCloudIcon
              className={`size-6 transition-colors ${isDragging ? "text-primary" : "text-muted-foreground"}`}
            />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium">Drop files here</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              or{" "}
              <span className="text-primary underline underline-offset-2">
                click to browse
              </span>
            </p>
          </div>
        </button>

        {/* File list */}
        {files.length > 0 && (
          <div className="flex flex-col gap-2">
            {files.map((f) => (
              <div
                key={f.name}
                className="flex flex-col gap-1.5 rounded-xl border border-border bg-muted/40 px-3 py-2.5"
              >
                <div className="flex items-center gap-2">
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="text-sm font-medium truncate">
                      {f.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {f.size}
                    </span>
                  </div>
                  {f.progress === 100 && (
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium shrink-0">
                      Done
                    </span>
                  )}
                  <button
                    onClick={() => removeFile(f.name)}
                    className="shrink-0 rounded-full p-0.5 text-muted-foreground hover:text-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={`Remove ${f.name}`}
                  >
                    <XIcon className="size-3.5" />
                  </button>
                </div>
                {/* Progress bar */}
                <div className="h-1 w-full overflow-hidden rounded-full bg-border">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${f.progress === 100 ? "bg-emerald-500" : "bg-primary"}`}
                    style={{ width: `${f.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Cancel
          </DialogClose>
          <Button disabled={files.length === 0}>
            Upload {files.length > 0 ? `(${files.length})` : ""}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
