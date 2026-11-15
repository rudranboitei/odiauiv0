"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const inner = [
  {
    content: "Free returns within 30 days — no questions asked.",
    trigger: "Return policy",
    value: "inner-1",
  },
  {
    content: "Two-year warranty on all hardware components.",
    trigger: "Warranty",
    value: "inner-2",
  },
];

const outer = [
  {
    content:
      "Track parcels, change the delivery address before dispatch, and combine orders into one shipment.",
    trigger: "Orders & shipping",
    value: "orders",
  },
  {
    content:
      "Everything about returns, warranties and refunds lives one level deeper.",
    trigger: "Support & policies",
    value: "support",
  },
];

export const AccordionNested = () => (
  <Accordion defaultValue={["support"]} className="max-w-xl">
    {outer.map((item) => (
      <AccordionItem key={item.value} value={item.value}>
        <AccordionTrigger>{item.trigger}</AccordionTrigger>
        <AccordionContent>
          {item.value === "support" ? (
            <Accordion className="mt-1 ml-4 gap-0">
              {inner.map((sub) => (
                <AccordionItem key={sub.value} value={sub.value}>
                  <AccordionTrigger indicator="plus" className="text-[0.8rem]">
                    {sub.trigger}
                  </AccordionTrigger>
                  <AccordionContent>{sub.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            item.content
          )}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);
