"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    content:
      "Without the multiple prop, opening a panel closes the previous one. Good for FAQs where only one answer matters at a time.",
    trigger: "Single — one panel at a time",
    value: "single-1",
  },
  {
    content:
      "Triggers are real buttons: Space and Enter toggle, ArrowUp and ArrowDown move between headers, Home and End jump to the first and last.",
    trigger: "Keyboard accessible",
    value: "single-2",
  },
];

const multi = [
  {
    content:
      "Pass the multiple prop to let several panels expand at once. Ideal for settings lists where users compare values.",
    trigger: "Multiple — panels stay open",
    value: "multi-1",
  },
  {
    content:
      "Use defaultValue for uncontrolled state, or pair value with onValueChange to drive the open panels from your own state.",
    trigger: "Controlled or uncontrolled",
    value: "multi-2",
  },
];

export const AccordionModes = () => (
  <div className="grid w-full gap-10 md:grid-cols-2">
    <div className="flex flex-col gap-3">
      <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
        Single (bordered)
      </p>
      <Accordion defaultValue={["single-1"]} variant="bordered">
        {faqs.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    <div className="flex flex-col gap-3">
      <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
        Multiple (flush)
      </p>
      <Accordion multiple defaultValue={["multi-1"]}>
        {multi.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
);
