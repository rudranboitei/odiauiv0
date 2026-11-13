import { Button } from "@/components/ui/button";
import { FieldMessage, Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const TextareaUsage = () => (
  <form className="flex w-full max-w-xs flex-col gap-3">
    <div className="grid gap-1.5">
      <Label htmlFor="message" required>
        Message
      </Label>
      <Textarea
        id="message"
        showCount
        maxLength={200}
        placeholder="Share your thoughts..."
      />
      <FieldMessage>Replies usually arrive within a day.</FieldMessage>
    </div>
    <Button type="button">Send</Button>
  </form>
);
