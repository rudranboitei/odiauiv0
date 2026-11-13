import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const SliderDemo = () => (
  <div className="flex w-full max-w-xs flex-col gap-3">
    <Label htmlFor="darshan">Darshan queue length</Label>
    <Slider id="darshan" defaultValue={60} />
  </div>
);
