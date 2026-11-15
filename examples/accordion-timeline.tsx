"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const milestones = [
  {
    content:
      "The team mapped the coastline and catalogued the ancient ports that once traded with Southeast Asia.",
    trigger: "First offshore survey",
    value: "1957",
  },
  {
    content:
      "Monuments across the region were surveyed and graded, creating the protection framework still in use today.",
    trigger: "Heritage classification",
    value: "1975",
  },
  {
    content:
      "Photography and 3D scans of temples and manuscripts were published online for researchers worldwide.",
    trigger: "Digital archive",
    value: "2001",
  },
  {
    content:
      "The motifs and patterns of the region were translated into a modern, token-based component library.",
    trigger: "Open-source design kit",
    value: "2024",
  },
];

export const AccordionTimeline = () => (
  <Accordion defaultValue={["2001"]} variant="timeline" className="max-w-xl">
    {milestones.map((item) => (
      <AccordionItem key={item.value} value={item.value}>
        <AccordionTrigger indicator="plus">{item.trigger}</AccordionTrigger>
        <AccordionContent>{item.content}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);
