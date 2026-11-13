import { Textarea } from "@/components/ui/textarea";

export const TextareaStates = () => (
  <div className="flex w-full max-w-xs flex-col gap-3">
    <Textarea disabled placeholder="This field is disabled..." />
    <Textarea invalid placeholder="Enter text..." />
    <Textarea
      error="This field is required."
      defaultValue="Please provide a message."
    />
  </div>
);
