import { Textarea } from "@/components/ui/textarea";

export const TextareaVariants = () => (
  <div className="flex w-full max-w-xs flex-col gap-3">
    <Textarea placeholder="Share your thoughts..." />
    <Textarea resize="none" placeholder="Fixed, no drag handle" />
  </div>
);
