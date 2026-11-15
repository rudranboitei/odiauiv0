"use client";

import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const items = [
  {
    content: "The buttons drive the accordion's value state directly.",
    trigger: "First panel",
    value: "first",
  },
  {
    content:
      "Expand all sets value to every key, collapse all sets it to an empty array.",
    trigger: "Second panel",
    value: "second",
  },
  {
    content: "Works with any variant — here it is the flush default.",
    trigger: "Third panel",
    value: "third",
  },
];

export const AccordionExpandAll = () => {
  const [value, setValue] = React.useState<string[]>(["first"]);

  return (
    <div className="flex w-full max-w-xl flex-col items-stretch gap-4">
      <div className="flex justify-center gap-2">
        <Button
          onClick={() => setValue(items.map((item) => item.value))}
          size="sm"
          variant="outline"
        >
          Expand all
        </Button>
        <Button onClick={() => setValue([])} size="sm" variant="outline">
          Collapse all
        </Button>
      </div>
      <Accordion
        onValueChange={(next) => setValue(next as string[])}
        value={value}
      >
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
