import { FieldMessage } from "@/components/ui/label";

export const LabelMessages = () => (
  <div className="flex w-full max-w-xs flex-col gap-1.5">
    <FieldMessage>This is helper text.</FieldMessage>
    <FieldMessage error>This field is required.</FieldMessage>
    <FieldMessage error>Password must be at least 8 characters.</FieldMessage>
  </div>
);
