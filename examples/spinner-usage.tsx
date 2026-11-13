import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export const SpinnerUsage = () => (
  <div className="flex flex-wrap items-center gap-6">
    <Button disabled>
      <Spinner size="xs" data-icon="inline-start" /> Saving
    </Button>
    <Spinner disabled />
  </div>
);
