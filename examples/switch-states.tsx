import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const SwitchStates = () => (
  <div className="flex w-full max-w-xs flex-col gap-3">
    <div className="flex items-center justify-between">
      <Label htmlFor="disabled-on" className="opacity-50">
        Disabled, on
      </Label>
      <Switch id="disabled-on" defaultChecked disabled />
    </div>
    <div className="flex items-center justify-between">
      <Label htmlFor="disabled-off" className="opacity-50">
        Disabled, off
      </Label>
      <Switch id="disabled-off" disabled />
    </div>
  </div>
);
