import type { Metadata } from "next";
import Image from "next/image";
import { omOss } from "@/content/pages";
import { team } from "@/content/team";
import { Container, SectionLabel } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { RevealText } from "@/components/motion/RevealText";
import { FadeUp } from "@/components/motion/FadeUp";
import { FjordIcon, type IconName } from "@/components/icons/FjordIcon";
import { EmployeeCard } from "@/components/ui/EmployeeCard";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: omOss.meta.title,
  description: omOss.meta.description,
  alternates: { canonical: "/om-oss" },
};

export default function OmOssPage() {
  return (
    <>
      <PageHero eyebrow={omOss.eyebrow} title={omOss.title} lead={omOss.lead} />

      {/* 01 — Historien */}
      <section aria-labelledby="h-historie" className="pb-16 md:pb-24">
        <Container>
          <SectionLabel index={1} label="Historien" />
          <div className="mt-10 grid grid-cols-4 gap-x-6 gap-y-10 md:grid-cols-12">
            <div className="col-span-4 md:col-span-6">
              <RevealText id="h-historie" text={omOss.story.title} className="display-l" />
              {omOss.story.text.map((p, i) => (
                <FadeUp as="p" key={i} className="mt-8 max-w-[52ch]">
                  {p}
                </FadeUp>
              ))}
              <ol className="mt-12 border-t border-line">
                {omOss.story.timeline.map((t, i) => (
                  <FadeUp
                    as="li"
                    key={t.year}
                    delay={i * 80}
                    className="group grid grid-cols-[5.5rem_1fr] gap-x-4 border-b border-line py-5"
                  >
                    <span className="font-display text-[1.25rem] tracking-[-0.02em] text-fjord">{t.year}</span>
                    <span>{t.text}</span>
                  </FadeUp>
                ))}
              </ol>
            </div>
            <FadeUp className="col-span-4 md:col-span-5 md:col-start-8">
              <div className="relative aspect-[4/5] overflow-hidden bg-line">
                <Image
                  src={omOss.image.src}
                  alt={omOss.image.alt}
                  fill
                  sizes="(min-width: 1200px) 470px, (min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* 02 — Kvalitet */}
      <section aria-labelledby="h-kvalitet" className="py-16 md:py-24">
        <Container>
          <SectionLabel index={2} label="Autorisasjon og kvalitet" />
          <RevealText id="h-kvalitet" text={omOss.quality.title} className="display-l mt-10 max-w-[18ch]" />
          <ul className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
            {omOss.quality.items.map((item, i) => (
              <FadeUp as="li" key={item.title} delay={i * 70}>
                <div className="card group flex h-full flex-col gap-8 p-6 md:p-8">
                  <FjordIcon name={item.icon as IconName} size={32} />
                  <div>
                    <h3 className="font-display text-[1.3125rem]">{item.title}</h3>
                    <p className="mt-2 text-muted">{item.text}</p>
                  </div>
                  {i === 1 ? (
                    <div className="mt-auto w-fit border border-line bg-white px-4 py-3">
                      <Image
                        src="/brand/regnskap-norge-medlem.png"
                        alt="Medlem av Regnskap Norge"
                        width={600}
                        height={162}
                        className="h-8 w-auto"
                        sizes="120px"
                      />
                    </div>
                  ) : null}
                </div>
              </FadeUp>
            ))}
          </ul>
        </Container>
      </section>

      {/* 03 — Ansatte */}
      <section id="ansatte" aria-labelledby="h-ansatte" className="scroll-mt-24 py-16 md:py-24">
        <Container>
          <SectionLabel index={3} label="Ansatte" />
          <div className="mt-10 grid grid-cols-4 gap-x-6 gap-y-6 md:grid-cols-12">
            <RevealText id="h-ansatte" text={omOss.team.title} className="display-l col-span-4 md:col-span-6" />
            <FadeUp as="p" className="col-span-4 text-muted md:col-span-4 md:col-start-9 md:pt-3">
              {omOss.team.lead}
            </FadeUp>
          </div>
          <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {team.map((p, i) => (
              <FadeUp as="li" key={p.email} delay={(i % 4) * 60}>
                <EmployeeCard person={p} />
              </FadeUp>
            ))}
          </ul>
          <FadeUp className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
            <p className="flex items-center gap-3">
              <FjordIcon name="stilling" />
              Vil du jobbe hos oss?
            </p>
            <Button href="/ledige-stillinger">Ledige stillinger</Button>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
