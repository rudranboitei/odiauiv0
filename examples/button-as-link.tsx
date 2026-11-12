import { Button } from "@/components/ui/button";

export const ButtonAsLink = () => (
  <Button
    nativeButton={false}
    render={<a aria-label="Read the docs" href="/docs" />}
  >
    Read the docs
  </Button>
);
