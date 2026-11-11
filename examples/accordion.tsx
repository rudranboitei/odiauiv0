import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    content:
      "We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on international orders.",
    trigger: "What are your shipping options?",
    value: "shipping",
  },
  {
    content:
      "You can return any item within 30 days of purchase for a full refund. Items must be in their original condition and packaging.",
    trigger: "What is your return policy?",
    value: "returns",
  },
  {
    content:
      "Our team is available 24/7 by email and live chat. You can also browse the help center for quick answers.",
    trigger: "How can I contact customer support?",
    value: "support",
  },
];

export const AccordionDemo = () => (
  <Accordion defaultValue={["shipping"]} className="w-full max-w-lg">
    {items.map((item) => (
      <AccordionItem key={item.value} value={item.value}>
        <AccordionTrigger>{item.trigger}</AccordionTrigger>
        <AccordionContent>{item.content}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);
