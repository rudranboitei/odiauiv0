import { Button } from "@/components/ui/button";

const VARIANTS = [
  "default",
  "gold",
  "secondary",
  "outline",
  "ghost",
  "destructive",
  "link",
] as const;

export const ButtonVariants = () => (
  <div className="flex flex-wrap items-start justify-center gap-6">
    {VARIANTS.map((variant) => (
      <div key={variant} className="flex flex-col items-center gap-2">
        <Button variant={variant}>Button</Button>
        <span className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
          {variant}
        </span>
      </div>
    ))}
  </div>
);
