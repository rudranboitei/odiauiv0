import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AccordionDemo = () => (
  <Accordion defaultValue={["konark"]} className="max-w-2xl">
    <AccordionItem value="konark">
      <AccordionTrigger motif="chakra">
        Konark Sun Temple: Architectural Marvel
      </AccordionTrigger>
      <AccordionContent>
        The 13th-century temple dedicated to Surya, the Sun God, is shaped like
        a colossal chariot with 24 intricately carved wheels. Its Konark Chakra
        is the motif on India&apos;s national flag.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="pattachitra">
      <AccordionTrigger motif="jagannath">
        Pattachitra Art: Scrolls of Heritage
      </AccordionTrigger>
      <AccordionContent>
        Traditional cloth-based scroll painting from Raghurajpur and Puri,
        depicting Jagannath and Puranic stories in natural mineral colours.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="sambalpuri">
      <AccordionTrigger motif="ikat">
        Sambalpuri Handlooms: A Weaver&apos;s Legacy
      </AccordionTrigger>
      <AccordionContent>
        Ikat-woven textiles from western Odisha, where the thread is tie-dyed in
        patterns before it is ever woven.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="odissi">
      <AccordionTrigger motif="odissi">
        Odissi Dance: Sacred Expressions
      </AccordionTrigger>
      <AccordionContent>
        One of India&apos;s classical dance forms, rooted in the temples of
        Odisha and built on the graceful tribhangi posture.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
