import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    content:
      "We offer monthly and annual subscription plans. Billing is charged at the beginning of each cycle, and you can cancel anytime.",
    trigger: "How does billing work?",
    value: "billing",
  },
  {
    content:
      "All data is encrypted in transit and at rest. We run regular audits and never sell your information.",
    trigger: "Is my data secure?",
    value: "security",
  },
  {
    content:
      "Connect your favourite tools through our API, webhooks, and native integrations.",
    trigger: "What integrations do you support?",
    value: "integrations",
  },
];

export const AccordionBorders = () => (
  <Accordion
    variant="flush"
    className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card px-5"
  >
    {items.map((item) => (
      <AccordionItem key={item.value} value={item.value}>
        <AccordionTrigger>{item.trigger}</AccordionTrigger>
        <AccordionContent>{item.content}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);
