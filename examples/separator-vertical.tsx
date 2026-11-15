import { Separator } from "@/components/ui/separator";

export const SeparatorVertical = () => (
  <div className="flex h-10 items-stretch justify-center gap-6">
    <Separator orientation="vertical" />
    <Separator orientation="vertical" variant="diamond" />
    <Separator orientation="vertical" variant="double" />
    <Separator orientation="vertical" variant="rekha" />
  </div>
);
