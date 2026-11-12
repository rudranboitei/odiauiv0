import { ArrowRight } from "lucide-react";

import { Button, ButtonChakra } from "@/components/ui/button";

export const ButtonWithIcon = () => (
  <div className="flex flex-wrap items-center justify-center gap-3">
    <Button>
      <ButtonChakra />
      Discover Odisha
    </Button>
    <Button variant="outline">
      Learn more
      <ArrowRight data-icon="inline-end" />
    </Button>
  </div>
);
