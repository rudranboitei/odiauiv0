import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonUsage = () => (
  <div className="flex w-full max-w-sm items-center gap-4">
    <Skeleton shape="chakra" className="size-12 shrink-0" />
    <div className="flex w-full flex-col gap-2.5">
      <Skeleton shape="line" className="w-2/3" />
      <Skeleton shape="line" className="w-1/2" />
    </div>
  </div>
);
