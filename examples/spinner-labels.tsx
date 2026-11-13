import { Spinner } from "@/components/ui/spinner";

export const SpinnerLabels = () => (
  <div className="flex flex-wrap items-center gap-8">
    <Spinner label="Loading..." />
    <Spinner variant="padma" label="Please wait..." />
    <Spinner variant="deula" label="Processing..." labelPosition="bottom" />
  </div>
);
