import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const SliderTicks = () => (
  <div className="flex w-full max-w-xs flex-col gap-3">
    <Label htmlFor="pattachitra">Pattachitra detail level</Label>
    <Slider id="pattachitra" defaultValue={50} motif="pattachitra" ticks={11} />
  </div>
);
