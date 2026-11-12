import { Button } from "@/components/ui/button";

export const ButtonDisabled = () => (
  <div className="flex flex-wrap items-center justify-center gap-3">
    <Button disabled>Discover Odisha</Button>
    <Button disabled variant="frame">
      Framed
    </Button>
  </div>
);
