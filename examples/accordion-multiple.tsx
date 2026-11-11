import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    content:
      "Manage how you receive notifications. You can enable email alerts for updates or push notifications for mobile devices.",
    trigger: "Notification Settings",
    value: "notifications",
  },
  {
    content:
      "Control who can see your profile and review the devices that are signed in to your account.",
    trigger: "Privacy & Security",
    value: "privacy",
  },
  {
    content:
      "Update your payment method, download invoices, and change your plan at any time.",
    trigger: "Billing & Subscription",
    value: "billing",
  },
];

export const AccordionMultiple = () => (
  <Accordion
    multiple
    defaultValue={["notifications", "privacy"]}
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
