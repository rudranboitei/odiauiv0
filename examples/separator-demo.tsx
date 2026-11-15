import { Separator } from "@/components/ui/separator";

export const SeparatorDemo = () => (
  <div className="flex w-full max-w-sm flex-col gap-8">
    <Separator variant="plain" />
    <Separator />
    <Separator variant="dashed" />
    <Separator variant="double" />
    <Separator variant="rekha" />
  </div>
);
