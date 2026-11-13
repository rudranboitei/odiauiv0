import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const SwitchMotifs = () => (
  <div className="flex w-full max-w-xs flex-col gap-3">
    <div className="flex items-center justify-between">
      <Label htmlFor="motif-chakra">Chakra (default)</Label>
      <Switch id="motif-chakra" defaultChecked />
    </div>
    <div className="flex items-center justify-between">
      <Label htmlFor="motif-padma">Padma</Label>
      <Switch id="motif-padma" motif="padma" defaultChecked />
    </div>
    <div className="flex items-center justify-between">
      <Label htmlFor="motif-deula">Deula</Label>
      <Switch id="motif-deula" motif="deula" defaultChecked />
    </div>
    <div className="flex items-center justify-between">
      <Label htmlFor="motif-none">Plain (no motif)</Label>
      <Switch id="motif-none" motif="none" defaultChecked />
    </div>
  </div>
);
