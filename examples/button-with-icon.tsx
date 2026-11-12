import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const ButtonWithIcon = () => (
  <div className="flex flex-wrap items-center justify-center gap-3">
    <Button>
      Discover Odisha
      <ArrowRight />
    </Button>
    <Button variant="outline">
      Learn more
      <ArrowRight />
    </Button>
  </div>
);
