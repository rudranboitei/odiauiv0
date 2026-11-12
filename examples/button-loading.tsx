import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export const ButtonLoading = () => (
  <Button disabled>
    <Loader2 className="animate-spin" data-icon="inline-start" />
    Please wait
  </Button>
);
