import type { Metadata } from "next";
import Link from "next/link";
import { tjenester } from "@/content/pages";
import { services } from "@/content/services";
import { Container } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { RevealText } from "@/components/motion/RevealText";
import { FadeUp } from "@/components/motion/FadeUp";
import { FjordIcon } from "@/components/icons/FjordIcon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: tjenester.meta.title,
  description: tjenester.meta.description,
  alternates: { canonical: "/tjenester" },
};

export default function TjenesterPage() {
  return (
    <>
      <PageHero eyebrow={tjenester.eyebrow} title={tjenester.title} lead={tjenester.lead} />

      <Container className="pb-24 md:pb-32">
        <div className="grid grid-cols-4 gap-x-6 md:grid-cols-12">
          {/* Innholdsfortegnelse */}
          <nav aria-label={tjenester.indexLabel} className="col-span-4 mb-14 md:col-span-3 md:mb-0">
            <div className="md:sticky md:top-28">
              <p className="eyebrow border-t border-line pt-4">{tjenester.indexLabel}</p>
              <ol className="mt-4 space-y-2 text-[0.9375rem]">
                {services.map((s, i) => (
                  <li key={s.slug} className="flex gap-3">
                    <span className="w-6 shrink-0 tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
                    <a href={`#${s.slug}`} className="ulink">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="col-span-4 md:col-span-8 md:col-start-5">
            {services.map((s, i) => (
              <article
                key={s.slug}
                id={s.slug}
                aria-labelledby={`h-${s.slug}`}
                className="group border-t border-line pb-16 pt-5 md:pb-20"
              >
                <div className="flex items-baseline justify-between gap-4 text-[0.8125rem] tracking-[0.06em] text-muted">
                  <p>
                    <span className="tabular-nums text-ink">{String(i + 1).padStart(2, "0")}</span>
                    <span aria-hidden="true"> — </span>
                    <span className="uppercase">{s.title}</span>
                  </p>
                  <FjordIcon name={s.icon} size={32} className="text-ink" />
                </div>
                <RevealText as="h2" id={`h-${s.slug}`} text={s.title} className="display-m mt-8 max-w-[22ch]" />
                <FadeUp as="p" className="lead mt-4 max-w-[40ch] text-muted">
                  {s.summary}
                </FadeUp>
                <div className="mt-6 max-w-[60ch] space-y-4">
                  {s.body.map((p, j) => (
                    <FadeUp as="p" key={j} delay={j * 60}>
                      {p}
                    </FadeUp>
                  ))}
                </div>
                <FadeUp className="mt-8">
                  <Link href="/kontakt-oss" className="group/l inline-flex items-center gap-2 text-fjord">
                    <span className="ulink">Spør oss om {s.title.toLowerCase()}</span>
                    <FjordIcon name="pil" size={18} />
                  </Link>
                </FadeUp>
              </article>
            ))}

            <FadeUp className="border-t border-line pt-10">
              <p className="display-m max-w-[24ch]">Usikker på hva du trenger? Vi hjelper deg å finne riktig løsning.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/kontakt-oss" variant="solid">
                  Kontakt oss
                </Button>
                <Button href="/poweroffice-go">Om PowerOffice Go</Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </>
  );
}
