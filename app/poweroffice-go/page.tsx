import type { Metadata } from "next";
import Image from "next/image";
import { poweroffice } from "@/content/pages";
import { Container, SectionLabel } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { RevealText } from "@/components/motion/RevealText";
import { FadeUp } from "@/components/motion/FadeUp";
import { FjordIcon, type IconName } from "@/components/icons/FjordIcon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: poweroffice.meta.title,
  description: poweroffice.meta.description,
  alternates: { canonical: "/poweroffice-go" },
};

export default function PowerOfficePage() {
  return (
    <>
      <PageHero eyebrow={poweroffice.eyebrow} title={poweroffice.title} lead={poweroffice.lead} />

      {/* 01 — Hva er */}
      <section aria-labelledby="h-hva" className="pb-16 md:pb-24">
        <Container>
          <SectionLabel index={1} label="Hva er PowerOffice Go?" />
          <div className="mt-10 grid grid-cols-4 gap-x-6 gap-y-10 md:grid-cols-12">
            <FadeUp className="col-span-4 md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-line">
                <Image
                  src={poweroffice.image.src}
                  alt={poweroffice.image.alt}
                  fill
                  sizes="(min-width: 1200px) 470px, (min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeUp>
            <div className="col-span-4 md:col-span-6 md:col-start-7">
              <RevealText id="h-hva" text={poweroffice.what.title} className="display-l" />
              <div className="mt-8 space-y-4">
                {poweroffice.what.text.map((p, i) => (
                  <FadeUp as="p" key={i} delay={i * 60} className="max-w-[52ch]">
                    {p}
                  </FadeUp>
                ))}
              </div>
              <FadeUp className="mt-10">
                <p className="eyebrow">Moduler</p>
                <ul className="mt-3 border-t border-line">
                  {poweroffice.what.modules.map((m, i) => (
                    <li key={m} className="flex items-baseline justify-between border-b border-line py-3">
                      <span>{m}</span>
                      <span className="text-[0.8125rem] tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>
              <FadeUp className="mt-10 flex items-center gap-5">
                <div className="border border-line bg-white px-4 py-3">
                  <Image
                    src="/brand/poweroffice-logo.jpg"
                    alt="PowerOffice"
                    width={721}
                    height={194}
                    className="h-8 w-auto"
                    sizes="120px"
                  />
                </div>
                <p className="text-[0.875rem] text-muted">Regnskapssystemet vi bruker i det daglige.</p>
              </FadeUp>
            </div>
          </div>
        </Container>
      </section>

      {/* 02 — Hvorfor */}
      <section aria-labelledby="h-hvorfor" className="py-16 md:py-24">
        <Container>
          <SectionLabel index={2} label="Hvorfor vi bruker det" />
          <RevealText id="h-hvorfor" text={poweroffice.why.title} className="display-l mt-10 max-w-[18ch]" />
          <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {poweroffice.why.items.map((item, i) => (
              <FadeUp as="li" key={item.title} delay={(i % 2) * 70}>
                <div className="card group flex h-full flex-col gap-8 p-6 md:p-8">
                  <div className="flex items-start justify-between">
                    <FjordIcon name={item.icon as IconName} size={32} />
                    <span className="text-[0.8125rem] tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-[1.3125rem]">{item.title}</h3>
                    <p className="mt-2 text-muted">{item.text}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </ul>
        </Container>
      </section>

      {/* 03 — Kom i gang */}
      <section aria-labelledby="h-start" className="py-16 md:py-24">
        <Container>
          <SectionLabel index={3} label="Kom i gang" />
          <div className="mt-10 grid grid-cols-4 gap-x-6 gap-y-10 md:grid-cols-12">
            <div className="col-span-4 md:col-span-4">
              <RevealText id="h-start" text={poweroffice.start.title} className="display-l max-w-[12ch]" />
              <FadeUp className="mt-10">
                <Button href={poweroffice.start.cta.href} variant="solid">
                  {poweroffice.start.cta.label}
                </Button>
              </FadeUp>
            </div>
            <ol className="col-span-4 md:col-span-7 md:col-start-6">
              {poweroffice.start.steps.map((step, i) => (
                <FadeUp
                  as="li"
                  key={step.title}
                  delay={i * 80}
                  className="grid grid-cols-[3.5rem_1fr] gap-x-4 border-t border-line py-8 last:border-b"
                >
                  <span className="font-display text-[2rem] leading-none tracking-[-0.02em] text-fjord">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.3125rem]">{step.title}</h3>
                    <p className="mt-2 max-w-[48ch] text-muted">{step.text}</p>
                  </div>
                </FadeUp>
              ))}
            </ol>
          </div>
        </Container>
      </section>
    </>
  );
}
