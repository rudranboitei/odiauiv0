import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const SliderMotifs = () => (
  <div className="flex w-full max-w-xs flex-col gap-4">
    <div className="flex flex-col gap-2">
      <Label htmlFor="motif-chakra">Chakra (default)</Label>
      <Slider id="motif-chakra" defaultValue={70} />
    </div>
    <div className="flex flex-col gap-2">
      <Label htmlFor="motif-padma">Padma</Label>
      <Slider id="motif-padma" defaultValue={55} motif="padma" />
    </div>
    <div className="flex flex-col gap-2">
      <Label htmlFor="motif-deula">Deula</Label>
      <Slider id="motif-deula" defaultValue={40} motif="deula" />
    </div>
    <div className="flex flex-col gap-2">
      <Label htmlFor="motif-none">Plain (no motif)</Label>
      <Slider id="motif-none" defaultValue={25} motif="none" />
    </div>
  </div>
);
