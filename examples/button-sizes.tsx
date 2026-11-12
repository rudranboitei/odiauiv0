import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const ButtonSizes = () => (
  <div className="flex flex-wrap items-end justify-center gap-3">
    <Button size="sm">Small</Button>
    <Button>Default</Button>
    <Button size="lg">Large</Button>
    <Button aria-label="Icon" size="icon">
      <ArrowUpRight />
    </Button>
    <Button aria-label="Small icon" size="icon-sm">
      <ArrowUpRight />
    </Button>
    <Button aria-label="Full icon" size="icon-full">
      <ArrowUpRight />
    </Button>
  </div>
);
