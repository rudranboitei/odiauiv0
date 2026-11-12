"use client";

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

/**
 * Preview / Code toggle for <ComponentPreview />.
 *
 * The `code` prop is a server-rendered <ComponentSource /> element; the toggle
 * only controls whether it is displayed, so the (async) source reading stays
 * on the server.
 */
export const CodeToggle = ({ code }: { code: ReactNode }) => {
  const [showCode, setShowCode] = useState(true);

  return (
    <>
      {showCode && code}
      <div className="relative flex justify-center pb-2.5">
        <button
          type="button"
          onClick={() => setShowCode((v) => !v)}
          className="relative z-10 inline-flex h-6 items-center gap-1 rounded-full bg-neutral-100 px-3 text-xs font-medium text-neutral-600 shadow-xs hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
        >
          {showCode ? (
            <ChevronUpIcon className="size-3" />
          ) : (
            <ChevronDownIcon className="size-3" />
          )}
          {showCode ? "Hide Code" : "Show Code"}
        </button>
      </div>
    </>
  );
};
