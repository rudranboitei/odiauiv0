import { Badge } from "@/components/ui/badge";

export const BadgeSizes = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Badge size="xs" dot>
      XS
    </Badge>
    <Badge size="sm" dot>
      SM
    </Badge>
    <Badge size="md" dot>
      MD
    </Badge>
    <Badge size="lg" dot>
      LG
    </Badge>
    <Badge size="xl" dot>
      XL
    </Badge>
    <Badge icon="chakra" size="xl" />
    <Badge icon="deula" size="xl" variant="secondary" />
  </div>
);
