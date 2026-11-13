import { Spinner } from "@/components/ui/spinner";

export const SpinnerColors = () => (
  <div className="flex flex-wrap items-center gap-6">
    <Spinner color="current" />
    <Spinner color="primary" />
    <Spinner color="muted" />
    <Spinner color="destructive" />
    <Spinner color="success" />
    <Spinner color="warning" />
  </div>
);
