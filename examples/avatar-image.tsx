import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const AvatarImageDemo = () => (
  <div className="flex flex-wrap items-center gap-6">
    <Avatar frame="pattachitra">
      <AvatarImage
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&fit=crop&crop=faces"
        alt="Portrait"
      />
      <AvatarFallback>RK</AvatarFallback>
    </Avatar>
    <Avatar frame="chakra">
      <AvatarImage src="https://invalid.example/broken.jpg" alt="Broken" />
      <AvatarFallback tone="heritage">SK</AvatarFallback>
    </Avatar>
  </div>
);
