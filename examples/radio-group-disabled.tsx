import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const RadioGroupDisabled = () => (
  <RadioGroup defaultValue="standard" className="max-w-xs">
    <div className="flex items-center gap-2">
      <RadioGroupItem value="standard" id="r-standard" />
      <Label htmlFor="r-standard">Standard delivery</Label>
    </div>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="express" id="r-express" disabled />
      <Label htmlFor="r-express" className="opacity-50">
        Express delivery (unavailable)
      </Label>
    </div>
  </RadioGroup>
);
