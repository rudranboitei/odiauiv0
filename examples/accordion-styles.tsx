"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const rows = [
  {
    content:
      "No container: rows separated by hairlines, ideal inside prose or sidebars.",
    trigger: "Flush — hairline dividers",
    value: "flush",
  },
  {
    content:
      "All rows live inside a single rounded, bordered surface with internal dividers.",
    trigger: "Bordered — one panel",
    value: "bordered",
  },
  {
    content: "Every row is its own bordered card, great for dense dashboards.",
    trigger: "Card — separate cards",
    value: "card",
  },
];

export const AccordionStyles = () => (
  <div className="flex w-full flex-col items-center gap-10">
    <Accordion className="max-w-lg">
      {rows.map((row) => (
        <AccordionItem key={row.value} value={row.value}>
          <AccordionTrigger>{row.trigger}</AccordionTrigger>
          <AccordionContent>{row.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    <div className="grid w-full max-w-3xl gap-8 md:grid-cols-2">
      <Accordion defaultValue={["bordered"]} variant="bordered">
        <AccordionItem value="bordered">
          <AccordionTrigger>Bordered</AccordionTrigger>
          <AccordionContent>
            One rounded panel holding every row with internal dividers.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="bordered-2">
          <AccordionTrigger>Second row</AccordionTrigger>
          <AccordionContent>Same panel, divided by hairlines.</AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion defaultValue={["card"]} variant="card">
        <AccordionItem value="card">
          <AccordionTrigger>Card</AccordionTrigger>
          <AccordionContent>
            Each row is its own bordered card with a soft shadow.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="card-2">
          <AccordionTrigger>Second row</AccordionTrigger>
          <AccordionContent>
            Rows float apart with a small gap.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
);
