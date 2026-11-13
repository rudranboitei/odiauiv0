import { Badge } from "@/components/ui/badge";

export const BadgeVariants = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Badge dot>Default</Badge>
    <Badge variant="secondary" dot>
      Secondary
    </Badge>
    <Badge variant="success" dot>
      Success
    </Badge>
    <Badge variant="warning" dot>
      Warning
    </Badge>
    <Badge variant="destructive" dot>
      Destructive
    </Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="ghost">Ghost</Badge>
    <Badge variant="link">Link</Badge>
  </div>
);
