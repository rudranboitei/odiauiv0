import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const SwitchDemo = () => (
  <div className="flex w-full max-w-xs flex-col gap-3">
    <div className="flex items-center justify-between">
      <Label htmlFor="odissi">Odissi classes</Label>
      <Switch id="odissi" defaultChecked />
    </div>
    <div className="flex items-center justify-between">
      <Label htmlFor="newsletter">Newsletter</Label>
      <Switch id="newsletter" />
    </div>
  </div>
);
