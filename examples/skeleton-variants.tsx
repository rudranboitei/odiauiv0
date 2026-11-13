import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonVariants = () => (
  <div className="flex w-full max-w-sm flex-col gap-4">
    <Skeleton className="h-4 w-full" />
    <Skeleton variant="shimmer" className="h-4 w-full" />
    <Skeleton variant="ikat" className="h-6 w-full" />
    <Skeleton variant="pida" className="h-6 w-full" />
  </div>
);
