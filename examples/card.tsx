import { ArrowRightIcon } from "lucide-react";

import { BadgeIcon } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardOrnament,
  CardTitle,
} from "@/components/ui/card";

export const CardDemo = () => (
  <Card className="w-full max-w-sm">
    <CardHeader>
      <span className="text-primary [&>svg]:size-8">
        <BadgeIcon name="chakra" />
      </span>
      <CardTitle>Odia Culture</CardTitle>
      <CardDescription>
        Rich heritage, vibrant traditions, and timeless values.
      </CardDescription>
    </CardHeader>
    <CardOrnament className="mx-6" />
    <CardContent>
      <p className="text-sm text-muted-foreground">
        Every card carries a faint deula watermark in its corner — turn it off
        with <code className="text-foreground">watermark="none"</code>.
      </p>
    </CardContent>
    <CardFooter>
      <a
        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        href="#"
      >
        Learn More <ArrowRightIcon className="size-4" />
      </a>
    </CardFooter>
  </Card>
);
