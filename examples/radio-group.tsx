import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const destinations = [
  { label: "Puri — Jagannath Temple", value: "puri" },
  { label: "Konark — Sun Temple", value: "konark" },
  { label: "Chilika — Lake", value: "chilika" },
];

export const RadioGroupDemo = () => (
  <RadioGroup defaultValue="konark" className="max-w-xs">
    {destinations.map((d) => (
      <div key={d.value} className="flex items-center gap-2">
        <RadioGroupItem value={d.value} id={d.value} />
        <Label htmlFor={d.value}>{d.label}</Label>
      </div>
    ))}
  </RadioGroup>
);
