import { Input } from "@/components/ui/input";

export const InputAddons = () => (
  <div className="flex w-full max-w-xs flex-col gap-3">
    <Input addonStart="₹" addonEnd=".00" placeholder="Amount" />
    <Input
      startIcon={<span className="text-sm">https://</span>}
      addonEnd=".odiaui.dev"
      placeholder="handle"
    />
  </div>
);
