import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AccordionDisabled = () => (
  <Accordion className="w-full max-w-lg">
    <AccordionItem value="history">
      <AccordionTrigger>Can I access my account history?</AccordionTrigger>
      <AccordionContent>
        Yes. Account history is available from the settings page for the last 12
        months.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="premium" disabled>
      <AccordionTrigger>Premium feature information</AccordionTrigger>
      <AccordionContent>
        Upgrade to a paid plan to unlock this feature.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="email">
      <AccordionTrigger>How do I update my email address?</AccordionTrigger>
      <AccordionContent>
        Open account settings, choose Email, and follow the verification steps.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
