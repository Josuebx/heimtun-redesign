import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { home } from "@/content/pages";
import { services } from "@/content/services";
import { contact } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui/Section";
import { RevealText } from "@/components/motion/RevealText";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FjordIcon } from "@/components/icons/FjordIcon";

export const metadata: Metadata = {
  title: { absolute: `${home.meta.title} | Heimtun Regnskap & Rådgivning` },
  description: home.meta.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Container className="pb-12 pt-12 md:pb-16 md:pt-20">
        <div className="grid grid-cols-4 gap-x-6 gap-y-12 md:grid-cols-12">
          <div className="col-span-4 flex flex-col justify-between md:col-span-7">
            <div>
              <FadeUp immediate className="eyebrow mb-8">{home.hero.eyebrow}</FadeUp>
              <RevealText immediate as="h1" text={home.hero.title} className="display-xl max-w-[15ch]" />
              <FadeUp immediate delay={250} className="lead mt-8 max-w-[44ch] text-muted">
                {home.hero.lead}
              </FadeUp>
            </div>
            <FadeUp immediate delay={350} className="mt-10 flex flex-wrap gap-3">
              <Button href={home.hero.primary.href} variant="solid">
                {home.hero.primary.label}
              </Button>
              <Button href={home.hero.secondary.href}>{home.hero.secondary.label}</Button>
            </FadeUp>
          </div>
          <FadeUp immediate delay={150} className="col-span-4 md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-line">
              <Image
                src={home.hero.image.src}
                alt={home.hero.image.alt}
                fill
                priority
                sizes="(min-width: 1200px) 470px, (min-width: 768px) 40vw, 100vw"
                className="object-cover object-[62%_50%]"
              />
            </div>
          </FadeUp>
        </div>

        {/* Fakta – horisontlinje */}
        <dl className="mt-16 grid grid-cols-2 border-t border-line md:mt-24 md:grid-cols-4">
          {home.facts.map((f, i) => (
            <FadeUp
              key={f.label}
              delay={i * 60}
              className={`border-b border-line py-5 pr-4 md:border-b-0 ${i > 0 ? "md:border-l md:pl-6" : ""} ${
                i % 2 === 1 ? "border-l pl-4 md:pl-6" : ""
              }`}
            >
              <dt className="text-[0.8125rem] text-muted">{f.label}</dt>
              <dd className="mt-1 font-display text-[1.25rem] tracking-[-0.02em]">{f.value}</dd>
            </FadeUp>
          ))}
        </dl>
      </Container>

      {/* 01 — TJENESTER */}
      <section aria-labelledby="h-tjenester" className="py-16 md:py-24">
        <Container>
          <SectionLabel index={1} label="Tjenester" />
          <div className="mt-10 grid grid-cols-4 gap-x-6 gap-y-6 md:grid-cols-12">
            <RevealText id="h-tjenester" text={home.services.title} className="display-l col-span-4 md:col-span-7" />
            <div className="col-span-4 flex flex-col items-start gap-6 md:col-span-4 md:col-start-9 md:pt-3">
              <FadeUp as="p" className="text-muted">
                {home.services.lead}
              </FadeUp>
              <FadeUp delay={100}>
                <Link href={home.services.cta.href} className="group inline-flex items-center gap-2 text-fjord">
                  <span className="ulink">{home.services.cta.label}</span>
                  <FjordIcon name="pil" size={18} />
                </Link>
              </FadeUp>
            </div>
          </div>
          <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <FadeUp as="li" key={s.slug} delay={(i % 3) * 70}>
                <ServiceCard service={s} index={i} />
              </FadeUp>
            ))}
          </ul>
        </Container>
      </section>

      {/* 02 — POWEROFFICE */}
      <section aria-labelledby="h-poweroffice" className="py-16 md:py-24">
        <Container>
          <SectionLabel index={2} label="PowerOffice Go" />
          <div className="mt-10 grid grid-cols-4 gap-x-6 gap-y-10 md:grid-cols-12">
            <div className="col-span-4 md:col-span-6">
              <RevealText id="h-poweroffice" text={home.poweroffice.title} className="display-l max-w-[16ch]" />
            </div>
            <div className="col-span-4 md:col-span-5 md:col-start-8 md:pt-3">
              <FadeUp as="p" className="text-muted">
                {home.poweroffice.text}
              </FadeUp>
              <FadeUp delay={100} className="mt-8">
                <Button href={home.poweroffice.cta.href}>{home.poweroffice.cta.label}</Button>
              </FadeUp>
            </div>
          </div>
          <FadeUp className="mt-14 grid grid-cols-2 border-y border-line sm:grid-cols-3 md:grid-cols-5">
            {["Regnskap", "Faktura", "Timeregistrering", "Reiseregninger", "Lønn"].map((m, i) => (
              <div
                key={m}
                className={`flex items-center gap-3 py-5 text-[0.9375rem] ${i > 0 ? "sm:border-l sm:border-line sm:pl-5" : ""} ${
                  i % 2 === 1 ? "border-l border-line pl-5" : ""
                }`}
              >
                <span className="h-px w-4 bg-fjord" aria-hidden="true" />
                {m}
              </div>
            ))}
          </FadeUp>
        </Container>
      </section>

      {/* 03 — OM OSS */}
      <section aria-labelledby="h-om" className="py-16 md:py-24">
        <Container>
          <SectionLabel index={3} label="Om oss" />
          <div className="mt-10 grid grid-cols-4 gap-x-6 gap-y-10 md:grid-cols-12">
            <FadeUp className="col-span-4 md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-line">
                <Image
                  src={home.about.image.src}
                  alt={home.about.image.alt}
                  fill
                  sizes="(min-width: 1200px) 470px, (min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeUp>
            <div className="col-span-4 flex flex-col justify-end md:col-span-6 md:col-start-7">
              <RevealText id="h-om" text={home.about.title} className="display-l max-w-[16ch]" />
              <FadeUp as="p" className="mt-8 max-w-[48ch] text-muted">
                {home.about.text}
              </FadeUp>
              <FadeUp delay={100} className="mt-8 flex flex-wrap items-center gap-6">
                <Button href={home.about.cta.href}>{home.about.cta.label}</Button>
                <Link href="/om-oss#ansatte" className="group inline-flex items-center gap-2">
                  <FjordIcon name="team" size={22} />
                  <span className="ulink">Møt de ansatte</span>
                </Link>
              </FadeUp>
            </div>
          </div>
        </Container>
      </section>

      {/* 04 — KONTAKT */}
      <section aria-labelledby="h-kontakt" className="bg-ink py-20 text-paper md:py-28">
        <Container>
          <div className="flex items-baseline gap-3 border-t border-paper/20 pt-4 text-[0.8125rem] tracking-[0.06em] text-paper/60">
            <span className="tabular-nums text-paper">04</span>
            <span aria-hidden="true">—</span>
            <span className="uppercase">Kontakt</span>
          </div>
          <div className="mt-10 grid grid-cols-4 gap-x-6 gap-y-10 md:grid-cols-12">
            <RevealText id="h-kontakt" text={home.contact.title} className="display-l col-span-4 max-w-[14ch] md:col-span-7" />
            <div className="col-span-4 md:col-span-4 md:col-start-9 md:pt-3">
              <FadeUp as="p" className="text-paper/70">
                {home.contact.text}
              </FadeUp>
              <FadeUp delay={80} className="mt-8 space-y-3">
                <a href={contact.phoneHref} className="group flex items-center gap-3">
                  <FjordIcon name="telefon" />
                  <span className="ulink">{contact.phone}</span>
                </a>
                <a href={contact.emailHref} className="group flex items-center gap-3">
                  <FjordIcon name="epost" />
                  <span className="ulink">{contact.email}</span>
                </a>
              </FadeUp>
              <FadeUp delay={160} className="mt-10">
                <Button href={home.contact.cta.href} variant="light">
                  {home.contact.cta.label}
                </Button>
              </FadeUp>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
