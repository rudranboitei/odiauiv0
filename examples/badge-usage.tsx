import { Badge } from "@/components/ui/badge";

export const BadgeUsage = () => (
  <div className="flex w-full max-w-md flex-wrap items-center gap-2">
    <Badge icon="chakra">Konark</Badge>
    <Badge icon="deula" variant="secondary">
      Puri
    </Badge>
    <Badge variant="success" dot>
      Open
    </Badge>
    <Badge variant="warning" dot>
      Draft
    </Badge>
    <Badge variant="outline" icon="ikat">
      Ikat
    </Badge>
  </div>
);
