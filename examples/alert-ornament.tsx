import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const AlertOrnament = () => (
  <div className="flex w-full max-w-lg flex-col gap-3">
    <Alert ornament>
      <AlertTitle>Engraved frame</AlertTitle>
      <AlertDescription>
        A hairline inset border, like the frame of a pattachitra panel.
      </AlertDescription>
    </Alert>
    <Alert variant="success" ornament>
      <AlertTitle>Auspicious occasion</AlertTitle>
      <AlertDescription>
        The bana rosette inside an engraved frame.
      </AlertDescription>
    </Alert>
  </div>
);
