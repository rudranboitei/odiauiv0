import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonShapes = () => (
  <div className="flex items-end justify-center gap-5">
    <Skeleton shape="chakra" className="size-14" />
    <Skeleton shape="arch" className="w-14" />
    <Skeleton shape="diamond" className="size-10" />
    <Skeleton shape="pida" className="h-12 w-28" />
    <Skeleton shape="line" className="w-24" />
  </div>
);
