import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const RadioGroupMotifs = () => (
  <RadioGroup defaultValue="chakra" className="max-w-xs">
    <div className="flex items-center gap-2">
      <RadioGroupItem value="chakra" id="m-chakra" />
      <Label htmlFor="m-chakra">Chakra (default)</Label>
    </div>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="padma" id="m-padma" motif="padma" />
      <Label htmlFor="m-padma">Padma</Label>
    </div>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="none" id="m-none" motif="none" />
      <Label htmlFor="m-none">Plain dot (no motif)</Label>
    </div>
  </RadioGroup>
);
