import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    content:
      "The 13th-century Sun Temple at Konark is shaped like a giant stone chariot dedicated to Surya, the sun god.",
    trigger: "Konark Sun Temple",
    value: "konark",
  },
  {
    content:
      "Chilika is Asia's largest brackish water lagoon and a winter home for thousands of migratory birds.",
    trigger: "Chilika Lake",
    value: "chilika",
  },
  {
    content:
      "Odissi is one of India's oldest classical dance forms, known for its sculpturesque poses and expressive storytelling.",
    trigger: "Odissi",
    value: "odissi",
  },
];

export const AccordionOdisha = () => (
  <Accordion
    variant="odisha"
    defaultValue={["konark"]}
    className="w-full max-w-lg"
  >
    {items.map((item) => (
      <AccordionItem key={item.value} value={item.value}>
        <AccordionTrigger>{item.trigger}</AccordionTrigger>
        <AccordionContent>{item.content}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);
