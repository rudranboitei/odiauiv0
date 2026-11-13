import { Badge } from "@/components/ui/badge";

export const BadgeStatus = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Badge loading>Loading</Badge>
    <Badge disabled dot>
      Disabled
    </Badge>
    <Badge icon="jagannath" disabled>
      Disabled with icon
    </Badge>
  </div>
);
