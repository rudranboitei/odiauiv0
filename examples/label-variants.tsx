import { Label } from "@/components/ui/label";

export const LabelVariants = () => (
  <div className="flex w-full max-w-xs flex-col gap-3">
    <Label htmlFor="name">Name</Label>
    <Label htmlFor="email" required>
      Email
    </Label>
    <Label htmlFor="phone" optional>
      Phone
    </Label>
    <Label htmlFor="x" disabled>
      Disabled
    </Label>
    <Label htmlFor="e" invalid>
      Email
    </Label>
  </div>
);
