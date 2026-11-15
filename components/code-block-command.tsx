"use client";

import { useCallback, useMemo } from "react";

import { CopyButton } from "@/components/copy-button";
import { getIconForPackageManager } from "@/components/icons";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { PackageManager } from "@/hooks/use-package-manager";
import { usePackageManager } from "@/hooks/use-package-manager";
import type { Event } from "@/lib/events";
import { cn } from "@/lib/utils";

const BINARIES = new Set(["npm", "npx", "yarn", "pnpm", "bun", "bunx"]);

const SUBCOMMANDS = new Set([
  "install",
  "add",
  "create",
  "run",
  "dlx",
  "exec",
  "init",
  "i",
  "x",
]);

const HighlightedCommand = ({ value }: { value?: string }) => {
  if (!value) {
    return null;
  }
  const parts = value.split(/(\s+)/);

  let binaryIndex = -1;
  let subcommandIndex = -1;

  for (const [i, part] of parts.entries()) {
    if (/^\s+$/.test(part)) {
      continue;
    }
    if (binaryIndex === -1 && BINARIES.has(part)) {
      binaryIndex = i;
      continue;
    }
    if (binaryIndex !== -1 && subcommandIndex === -1 && SUBCOMMANDS.has(part)) {
      subcommandIndex = i;
      break;
    }
    if (binaryIndex !== -1) {
      break;
    }
  }

  return (
    <>
      {parts.map((part, i) => {
        if (/^\s+$/.test(part)) {
          return <span key={i}>{part}</span>;
        }

        if (i === binaryIndex) {
          return (
            <span key={i} className="text-sky-600 dark:text-sky-400">
              {part}
            </span>
          );
        }

        if (i === subcommandIndex) {
          return (
            <span key={i} className="text-violet-600 dark:text-violet-400">
              {part}
            </span>
          );
        }

        if (part.startsWith("-")) {
          return (
            <span key={i} className="text-amber-600 dark:text-amber-400">
              {part}
            </span>
          );
        }

        return <span key={i}>{part}</span>;
      })}
    </>
  );
};

export const CodeBlockCommand = ({
  __npm__,
  __yarn__,
  __pnpm__,
  __bun__,
  className,
  copyEvent = "copy_npm_command",
}: {
  __npm__?: string;
  __yarn__?: string;
  __pnpm__?: string;
  __bun__?: string;
  className?: string;
  copyEvent?: Event["name"];
}) => {
  const [packageManager, setPackageManager] = usePackageManager();

  const commandTabs = useMemo(
    () => ({
      bun: __bun__,
      npm: __npm__,
      pnpm: __pnpm__,
      yarn: __yarn__,
    }),
    [__npm__, __pnpm__, __yarn__, __bun__]
  );

  const handlePackageManagerChange = useCallback(
    (value: string) => setPackageManager(value as PackageManager),
    [setPackageManager]
  );

  const copyValue = useMemo(
    () => commandTabs[packageManager] || "",
    [commandTabs, packageManager]
  );

  return (
    <div
      className={cn(
        "bg-code text-code-foreground relative overflow-hidden rounded-lg text-sm",
        className
      )}
    >
      <Tabs
        className="gap-0"
        onValueChange={handlePackageManagerChange}
        value={packageManager}
      >
        <div className="border-border/50 flex items-center gap-2 border-b px-3 py-1">
          <TabsList className="rounded-none bg-transparent p-0 [&_svg]:me-2 [&_svg]:size-4 [&_svg]:text-muted-foreground">
            {getIconForPackageManager(packageManager)}

            {Object.entries(commandTabs).map(([key]) => (
              <TabsTrigger
                key={key}
                className="data-[state=active]:border-input h-7 border border-transparent pt-0.5 data-[state=active]:shadow-none"
                sound="tabSwitch"
                value={key}
              >
                {key}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <div className="no-scrollbar overflow-x-auto">
          {Object.entries(commandTabs).map(([key, value]) => (
            <TabsContent key={key} className="mt-0 px-4 py-3.5" value={key}>
              <pre>
                <code
                  data-slot="code-block"
                  data-language="bash"
                  className="font-mono text-sm/none"
                >
                  <span className="select-none text-code-number">$ </span>
                  <HighlightedCommand value={value} />
                </code>
              </pre>
            </TabsContent>
          ))}
        </div>
      </Tabs>
      <CopyButton
        className="absolute top-2 right-2 z-10 size-7 opacity-70 hover:opacity-100 focus-visible:opacity-100"
        value={copyValue}
        event={copyEvent}
      />
    </div>
  );
};
