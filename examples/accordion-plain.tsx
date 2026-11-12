import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    content:
      "One of the Char Dham pilgrimage sites, known for its annual Rath Yatra.",
    trigger: "Jagannath Temple, Puri",
    value: "puri",
  },
  {
    content:
      "Asia's largest brackish water lagoon and a haven for migratory birds.",
    trigger: "Chilika Lake",
    value: "chilika",
  },
  {
    content:
      "A tiger reserve in the Mayurbhanj district, famous for its waterfalls and sal forests.",
    trigger: "Simlipal National Park",
    value: "simlipal",
  },
];

export const AccordionPlain = () => (
  <Accordion className="w-full max-w-lg">
    {items.map((item) => (
      <AccordionItem key={item.value} value={item.value}>
        <AccordionTrigger>{item.trigger}</AccordionTrigger>
        <AccordionContent>{item.content}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);
