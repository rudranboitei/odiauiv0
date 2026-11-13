import { Input } from "@/components/ui/input";
import { FieldMessage, Label } from "@/components/ui/label";

export const LabelUsage = () => (
  <div className="flex w-full max-w-xs flex-col gap-2">
    <Label htmlFor="handle" required>
      Handle
    </Label>
    <Input id="handle" type="text" placeholder="@rudra" required />
    <FieldMessage>This is your public username.</FieldMessage>
  </div>
);
