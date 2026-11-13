import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const AlertMotifs = () => (
  <div className="flex w-full max-w-lg flex-col gap-3">
    <Alert motif="jagannath" variant="info">
      <AlertTitle>Jagannath</AlertTitle>
      <AlertDescription>
        Wide eyes and crown — pick any of the eight motifs.
      </AlertDescription>
    </Alert>
    <Alert motif="odissi" variant="info">
      <AlertTitle>Odissi</AlertTitle>
      <AlertDescription>
        The dancer in tribhangi, drawn inline in currentColor.
      </AlertDescription>
    </Alert>
    <Alert motif="pattachitra" variant="info">
      <AlertTitle>Pattachitra</AlertTitle>
      <AlertDescription>
        Framed arch with a bloom, themed by the variant colour.
      </AlertDescription>
    </Alert>
  </div>
);
