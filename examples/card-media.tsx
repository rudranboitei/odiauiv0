import { ArrowRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMedia,
  CardTitle,
} from "@/components/ui/card";

export const CardMediaDemo = () => (
  <Card className="w-full max-w-sm">
    <CardMedia>
      <img src="/images/konark-temple.webp" alt="Konark Sun Temple" />
    </CardMedia>
    <CardHeader>
      <CardAction>
        <Badge icon="deula">Odisha Heritage</Badge>
      </CardAction>
      <CardTitle>The Sacred Chakra</CardTitle>
      <CardDescription>A symbol of time, art and devotion.</CardDescription>
    </CardHeader>
    <CardFooter>
      <a
        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        href="#"
      >
        Explore Heritage <ArrowRightIcon className="size-4" />
      </a>
    </CardFooter>
  </Card>
);
