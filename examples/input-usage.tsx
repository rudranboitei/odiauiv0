import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FieldMessage, Label } from "@/components/ui/label";

export const InputUsage = () => (
  <form className="flex w-full max-w-xs flex-col gap-3">
    <div className="grid gap-1.5">
      <Label htmlFor="email" required>
        Email
      </Label>
      <Input id="email" variant="email" placeholder="you@example.com" />
      <FieldMessage>We never share your email.</FieldMessage>
    </div>
    <Button type="button">Subscribe</Button>
  </form>
);
