import { Badge } from "@/components/ui/badge";

export const BadgeIcons = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Badge icon="chakra">Chakra</Badge>
    <Badge icon="deula" variant="secondary">
      Deula
    </Badge>
    <Badge icon="odissi" variant="secondary">
      Odissi
    </Badge>
    <Badge icon="ikat" variant="outline">
      Ikat
    </Badge>
    <Badge icon="jagannath" variant="outline">
      Jagannath
    </Badge>
    <Badge icon="pattachitra" variant="success">
      Pattachitra
    </Badge>
    <Badge icon="padma" variant="warning">
      Padma
    </Badge>
    <Badge icon="bana" variant="destructive">
      Bana
    </Badge>
  </div>
);
