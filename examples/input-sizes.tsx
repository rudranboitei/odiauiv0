import { Input } from "@/components/ui/input";

export const InputSizes = () => (
  <div className="flex w-full max-w-xs flex-col gap-3">
    <Input size="sm" placeholder="Small" />
    <Input size="md" placeholder="Medium" />
    <Input size="lg" placeholder="Large" />
  </div>
);
