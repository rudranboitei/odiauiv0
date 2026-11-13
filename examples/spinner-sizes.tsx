import { Spinner } from "@/components/ui/spinner";

export const SpinnerSizes = () => (
  <div className="flex flex-wrap items-end gap-6">
    <Spinner size="xs" />
    <Spinner size="sm" />
    <Spinner size="md" />
    <Spinner size="lg" />
    <Spinner size="xl" />
  </div>
);
