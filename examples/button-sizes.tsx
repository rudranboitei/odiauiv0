import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const ButtonSizes = () => (
  <div className="flex flex-wrap items-end justify-center gap-3">
    <Button size="xs">Extra small</Button>
    <Button size="sm">Small</Button>
    <Button>Default</Button>
    <Button size="lg">Large</Button>
    <Button aria-label="Icon" size="icon">
      <ArrowUpRight />
    </Button>
    <Button aria-label="Extra small icon" size="icon-xs">
      <ArrowUpRight />
    </Button>
    <Button aria-label="Small icon" size="icon-sm">
      <ArrowUpRight />
    </Button>
    <Button aria-label="Large icon" size="icon-lg">
      <ArrowUpRight />
    </Button>
  </div>
);
