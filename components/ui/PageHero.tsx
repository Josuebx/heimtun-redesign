import { RevealText } from "@/components/motion/RevealText";
import { FadeUp } from "@/components/motion/FadeUp";
import { Container } from "@/components/ui/Section";

/** Felles toppseksjon for undersider. */
export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <Container className="pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="grid grid-cols-4 gap-x-6 md:grid-cols-12">
        <FadeUp immediate className="eyebrow col-span-4 mb-8 md:col-span-12">{eyebrow}</FadeUp>
        <RevealText immediate as="h1" text={title} className="display-xl col-span-4 max-w-[18ch] md:col-span-10" />
        {lead ? (
          <FadeUp immediate delay={200} className="lead col-span-4 mt-8 max-w-[52ch] text-muted md:col-span-7 md:col-start-6">
            {lead}
          </FadeUp>
        ) : null}
      </div>
    </Container>
  );
}
