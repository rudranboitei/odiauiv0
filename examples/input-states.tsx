import { Input } from "@/components/ui/input";

export const InputStates = () => (
  <div className="flex w-full max-w-xs flex-col gap-3">
    <Input disabled placeholder="Disabled" />
    <Input invalid placeholder="Enter text..." />
    <Input error="This field is required." />
    <Input variant="email" error="Please enter a valid email." />
  </div>
);
