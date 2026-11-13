import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";

export const AvatarGroupDemo = () => (
  <AvatarGroup>
    <Avatar frame="ikat">
      <AvatarFallback tone="heritage">SK</AvatarFallback>
    </Avatar>
    <Avatar frame="deula" accent="terracotta">
      <AvatarFallback tone="heritage">PM</AvatarFallback>
    </Avatar>
    <Avatar frame="pattachitra" accent="gold">
      <AvatarFallback tone="heritage">RS</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>JB</AvatarFallback>
    </Avatar>
    <AvatarGroupCount>+9</AvatarGroupCount>
  </AvatarGroup>
);
