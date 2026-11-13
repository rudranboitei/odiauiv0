import { Avatar, AvatarBadge, AvatarFallback } from "@/components/ui/avatar";

export const AvatarBadges = () => (
  <div className="flex flex-wrap items-center gap-6">
    <Avatar frame="chakra">
      <AvatarFallback>RK</AvatarFallback>
      <AvatarBadge variant="chakra" />
    </Avatar>
    <Avatar frame="padma" accent="gold">
      <AvatarFallback>PM</AvatarFallback>
      <AvatarBadge variant="padma" />
    </Avatar>
    <Avatar accent="terracotta">
      <AvatarFallback>JB</AvatarFallback>
      <AvatarBadge>3</AvatarBadge>
    </Avatar>
  </div>
);
