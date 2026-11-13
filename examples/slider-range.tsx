import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const SliderRange = () => (
  <div className="flex w-full max-w-xs flex-col gap-3">
    <Label htmlFor="festival-dates">Festival dates (range)</Label>
    <Slider id="festival-dates" defaultValue={[20, 75]} ticks={11} />
  </div>
);
