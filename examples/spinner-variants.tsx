import { Spinner } from "@/components/ui/spinner";

export const SpinnerVariants = () => (
  <div className="flex flex-wrap items-center gap-6">
    <Spinner variant="chakra" />
    <Spinner variant="deula" />
    <Spinner variant="padma" />
    <Spinner variant="dots" />
    <Spinner variant="ring" />
    <Spinner variant="pulse" />
  </div>
);
