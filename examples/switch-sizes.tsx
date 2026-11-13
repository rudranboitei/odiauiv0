import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const SwitchSizes = () => (
  <div className="flex w-full max-w-xs flex-col gap-3">
    <div className="flex items-center justify-between">
      <Label htmlFor="sm-size" className="text-sm">
        Small
      </Label>
      <Switch id="sm-size" size="sm" defaultChecked />
    </div>
    <div className="flex items-center justify-between">
      <Label htmlFor="default-size">Default</Label>
      <Switch id="default-size" size="default" defaultChecked />
    </div>
  </div>
);
