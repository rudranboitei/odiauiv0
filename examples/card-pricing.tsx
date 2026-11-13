import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CardPricing = () => (
  <Card className="w-full max-w-sm" watermark="chakra">
    <CardHeader>
      <CardTitle>Temple Pass</CardTitle>
      <CardDescription>Explore Odisha's heritage with ease.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-3xl font-semibold tracking-tight">
        ₹499{" "}
        <span className="text-sm font-normal text-muted-foreground">/year</span>
      </p>
    </CardContent>
    <CardFooter>
      <Button className="w-full">Subscribe</Button>
    </CardFooter>
  </Card>
);
