import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonArt = () => (
  <div className="grid w-full max-w-md grid-cols-2 gap-4">
    <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
      <Skeleton
        variant="shimmer"
        art={["temple", "wheel"]}
        className="h-40 w-full rounded-none"
      />
      <div className="space-y-2 p-4">
        <Skeleton shape="line" className="w-3/4" />
        <Skeleton shape="line" className="w-1/2" />
      </div>
    </div>
    <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
      <Skeleton art="arch" className="h-40 w-full rounded-none" />
      <div className="space-y-2 p-4">
        <Skeleton shape="line" className="w-2/3" />
        <Skeleton shape="line" className="w-1/3" />
      </div>
    </div>
  </div>
);
