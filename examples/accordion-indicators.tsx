"use client";

import { CreditCardIcon, ShieldCheckIcon, WalletIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AccordionIndicators = () => (
  <div className="grid w-full gap-10 md:grid-cols-2">
    <Accordion>
      <AccordionItem value="chevron">
        <AccordionTrigger>Chevron — the default</AccordionTrigger>
        <AccordionContent>
          A chevron that rotates 180° as the panel opens.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="plus">
        <AccordionTrigger indicator="plus">Plus → minus morph</AccordionTrigger>
        <AccordionContent>
          The plus bar rotates into the horizontal to become a minus.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem number="01" value="numbered">
        <AccordionTrigger indicator="numbered">Numbered steps</AccordionTrigger>
        <AccordionContent>
          Pass number="01" to each AccordionItem for step-style rows.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <Accordion>
      <AccordionItem value="wallet" number="01">
        <AccordionTrigger icon={<WalletIcon />} indicator="numbered">
          Leading icon
        </AccordionTrigger>
        <AccordionContent>
          Pass any lucide icon or inline SVG to the icon prop.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="card" number="02">
        <AccordionTrigger icon={<CreditCardIcon />} indicator="numbered">
          Works with any node
        </AccordionTrigger>
        <AccordionContent>
          The icon chip crops images too — perfect for thumbnails.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="shield" number="03">
        <AccordionTrigger icon={<ShieldCheckIcon />} indicator="none">
          Indicator off
        </AccordionTrigger>
        <AccordionContent>
          Set indicator="none" when the icon tells the whole story.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);
