import { Separator } from "@/components/ui/separator";

export const SeparatorVariants = () => (
  <div className="flex w-full max-w-sm flex-col gap-8">
    <Separator variant="plain" />
    <Separator variant="default" />
    <Separator variant="dashed" />
    <Separator variant="muted" />
    <Separator variant="frame" />
  </div>
);
