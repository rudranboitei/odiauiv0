import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const AlertActionDemo = () => (
  <Alert className="max-w-lg">
    <AlertTitle>Storage almost full</AlertTitle>
    <AlertDescription>
      Your workspace has used 90% of its quota. Old exports are automatically
      removed after 30 days.
    </AlertDescription>
    <AlertAction>
      <Button size="sm" variant="outline">
        Upgrade
      </Button>
    </AlertAction>
  </Alert>
);
