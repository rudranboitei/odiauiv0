import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AccordionIndicators = () => (
  <div className="flex w-full flex-col gap-8 sm:flex-row sm:gap-12">
    {(["chevron", "chakra", "plus"] as const).map((indicator) => (
      <Accordion key={indicator} className="w-full max-w-[220px]">
        <AccordionItem value="a">
          <AccordionTrigger indicator={indicator}>{indicator}</AccordionTrigger>
          <AccordionContent>
            The icon flips over when the panel opens.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="b">
          <AccordionTrigger indicator={indicator}>Second row</AccordionTrigger>
          <AccordionContent>Every indicator rotates 180°.</AccordionContent>
        </AccordionItem>
      </Accordion>
    ))}
  </div>
);
