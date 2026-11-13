import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const AvatarFrames = () => (
  <div className="flex flex-wrap items-center gap-6">
    <Avatar frame="none">
      <AvatarFallback tone="heritage">RK</AvatarFallback>
    </Avatar>
    <Avatar frame="chakra">
      <AvatarFallback tone="heritage">SK</AvatarFallback>
    </Avatar>
    <Avatar frame="padma">
      <AvatarFallback tone="heritage">PM</AvatarFallback>
    </Avatar>
    <Avatar frame="deula">
      <AvatarFallback tone="heritage">JB</AvatarFallback>
    </Avatar>
    <Avatar frame="ikat">
      <AvatarFallback tone="heritage">NT</AvatarFallback>
    </Avatar>
    <Avatar frame="pattachitra">
      <AvatarFallback tone="heritage">RS</AvatarFallback>
    </Avatar>
  </div>
);
