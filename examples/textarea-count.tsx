import { Textarea } from "@/components/ui/textarea";

export const TextareaCount = () => (
  <Textarea
    showCount
    maxLength={120}
    defaultValue="The Konark wheel tracks the sun across twelve zodiac spok…"
    placeholder="Tell us more..."
  />
);
