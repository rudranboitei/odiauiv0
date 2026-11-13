import { Input } from "@/components/ui/input";
import { FieldMessage, Label } from "@/components/ui/label";

export const LabelInvalid = () => (
  <div className="flex w-full max-w-xs flex-col gap-2">
    <Label htmlFor="email" invalid>
      Email
    </Label>
    <Input
      id="email"
      type="email"
      aria-invalid
      placeholder="rudra@odiaui.dev"
    />
    <FieldMessage error>Please enter a valid email address.</FieldMessage>
  </div>
);
