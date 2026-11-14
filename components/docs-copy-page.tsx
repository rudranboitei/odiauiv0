"use client";

import { ChevronDownIcon } from "lucide-react";
import { useCallback } from "react";

import { CopyButton } from "@/components/copy-button";
import {
  ChatGptIcon,
  ClaudeIcon,
  CursorIcon,
  GeminiIcon,
  GrokIcon,
  MarkdownDocIcon,
  PerplexityIcon,
  SciraIcon,
  V0Icon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { SITE } from "@/constants/site";

const getPromptUrl = (baseURL: string, url: string, param = "q") =>
  `${baseURL}?${param}=${encodeURIComponent(
    `I'm looking at this ${SITE.NAME} documentation: ${url}.
Help me understand how to use it. Be ready to explain concepts, give examples, or help debug based on it.
`
  )}`;

const MENU_ITEMS: [string, (url: string) => React.ReactNode][] = [
  [
    "markdown",
    (url) => (
      <a href={`${url}.md`} rel="noopener noreferrer" target="_blank">
        <MarkdownDocIcon />
        View as Markdown
      </a>
    ),
  ],
  [
    "v0",
    (url) => (
      <a
        href={getPromptUrl("https://v0.dev", url)}
        rel="noopener noreferrer"
        target="_blank"
      >
        <V0Icon />
        <span className="translate-x-[-2px]">Open in v0</span>
      </a>
    ),
  ],
  [
    "cursor",
    (url) => (
      <a
        href={getPromptUrl("https://cursor.com/link/prompt", url, "text")}
        rel="noopener noreferrer"
        target="_blank"
      >
        <CursorIcon />
        Open in Cursor
      </a>
    ),
  ],
  [
    "chatgpt",
    (url) => (
      <a
        href={getPromptUrl("https://chatgpt.com", url)}
        rel="noopener noreferrer"
        target="_blank"
      >
        <ChatGptIcon />
        Open in ChatGPT
      </a>
    ),
  ],
  [
    "claude",
    (url) => (
      <a
        href={getPromptUrl("https://claude.ai/new", url)}
        rel="noopener noreferrer"
        target="_blank"
      >
        <ClaudeIcon />
        Open in Claude
      </a>
    ),
  ],
  [
    "perplexity",
    (url) => (
      <a
        href={getPromptUrl("https://perplexity.ai", url)}
        rel="noopener noreferrer"
        target="_blank"
      >
        <PerplexityIcon />
        Open in Perplexity
      </a>
    ),
  ],
  [
    "gemini",
    (url) => (
      <a
        href={getPromptUrl("https://gemini.google.com/app", url)}
        rel="noopener noreferrer"
        target="_blank"
      >
        <GeminiIcon />
        Open in Gemini
      </a>
    ),
  ],
  [
    "grok",
    (url) => (
      <a
        href={getPromptUrl("https://grok.com", url)}
        rel="noopener noreferrer"
        target="_blank"
      >
        <GrokIcon />
        Open in Grok
      </a>
    ),
  ],
  [
    "scira",
    (url) => (
      <a
        className="m-0 p-0"
        href={getPromptUrl("https://scira.ai/", url)}
        rel="noopener noreferrer"
        target="_blank"
      >
        <SciraIcon />
        Open in Scira AI
      </a>
    ),
  ],
];

export const DocsCopyPage = ({
  markdownUrl,
  url,
}: {
  markdownUrl: string;
  url: string;
}) => {
  const copyValue = useCallback(async () => {
    const response = await fetch(markdownUrl);
    return response.text();
  }, [markdownUrl]);

  const trigger = (
    <Button
      variant="ghost"
      className="h-full w-7 rounded-none text-muted-foreground hover:bg-transparent hover:text-foreground active:bg-transparent md:w-6"
    >
      <ChevronDownIcon className="size-3.5" />
    </Button>
  );

  return (
    <Popover sounds>
      <div className="border-grid flex h-8 items-center overflow-hidden rounded-lg border bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)] md:h-7">
        <PopoverAnchor />
        <CopyButton
          value={copyValue}
          showTooltip={false}
          variant="ghost"
          className="h-full rounded-none px-3 hover:bg-transparent active:bg-transparent md:px-2.5"
        >
          Copy Page
        </CopyButton>
        <Separator
          orientation="vertical"
          className="bg-border! h-4! shrink-0"
        />
        <DropdownMenu sounds>
          <DropdownMenuTrigger asChild className="hidden sm:flex">
            {trigger}
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="animate-none! rounded-lg shadow-none"
          >
            {MENU_ITEMS.map(([key, render]) => (
              <DropdownMenuItem key={key} asChild sound="click">
                {render(url)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <PopoverTrigger asChild className="flex sm:hidden">
          {trigger}
        </PopoverTrigger>
        <PopoverContent
          className="w-52 origin-center! rounded-lg bg-background/70 p-1 shadow-none backdrop-blur-sm dark:bg-background/60"
          align="start"
        >
          {MENU_ITEMS.map(([key, render]) => (
            <Button
              variant="ghost"
              size="lg"
              asChild
              key={key}
              className="w-full justify-start text-base font-normal *:[svg]:text-muted-foreground"
            >
              {render(url)}
            </Button>
          ))}
        </PopoverContent>
      </div>
    </Popover>
  );
};
