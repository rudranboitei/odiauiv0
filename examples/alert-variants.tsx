import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const AlertVariants = () => (
  <div className="flex w-full max-w-lg flex-col gap-3">
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        The Konark chakra shows by default, drawn in your theme colours.
      </AlertDescription>
    </Alert>
    <Alert variant="info">
      <AlertTitle>Rath Yatra route update</AlertTitle>
      <AlertDescription>
        The Grand Road closes to vehicles from 5 AM on festival day.
      </AlertDescription>
    </Alert>
    <Alert variant="success">
      <AlertTitle>Booking confirmed</AlertTitle>
      <AlertDescription>
        Your Puri darshan pass is ready — check your email.
      </AlertDescription>
    </Alert>
    <Alert variant="warning">
      <AlertTitle>Monsoon advisory</AlertTitle>
      <AlertDescription>
        Chilika boat services may be suspended during high wind.
      </AlertDescription>
    </Alert>
    <Alert variant="destructive">
      <AlertTitle>Session expired</AlertTitle>
      <AlertDescription>
        Please sign in again to continue browsing the catalogue.
      </AlertDescription>
    </Alert>
  </div>
);
