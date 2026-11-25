import type { Metadata } from "next";
import Link from "next/link";
import { ledigeStillinger } from "@/content/pages";
import { jobs, openApplication } from "@/content/jobs";
import { Container, SectionLabel } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { FadeUp } from "@/components/motion/FadeUp";
import { RevealText } from "@/components/motion/RevealText";
import { FjordIcon } from "@/components/icons/FjordIcon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: ledigeStillinger.meta.title,
  description: ledigeStillinger.meta.description,
  alternates: { canonical: "/ledige-stillinger" },
};

function mailto(email: string, subject: string) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

export default function LedigeStillingerPage() {
  return (
    <>
      <PageHero eyebrow={ledigeStillinger.eyebrow} title={ledigeStillinger.title} lead={ledigeStillinger.lead} />

      <section aria-labelledby="h-stillinger" className="pb-24 md:pb-32">
        <Container>
          <SectionLabel index={1} label={jobs.length ? `${jobs.length} ledige` : "Stillinger"} />
          <h2 id="h-stillinger" className="sr-only">
            Oversikt over stillinger
          </h2>

          {jobs.length > 0 ? (
            <ul className="mt-10 space-y-4">
              {jobs.map((job) => (
                <FadeUp as="li" key={job.slug}>
                  <a
                    href={mailto(job.applyEmail, `Søknad: ${job.title}`)}
                    className="card group grid grid-cols-4 gap-x-6 gap-y-4 p-6 md:grid-cols-12 md:p-8"
                  >
                    <div className="col-span-4 md:col-span-6">
                      <h3 className="display-m">{job.title}</h3>
                      <p className="mt-3 max-w-[52ch] text-muted">{job.summary}</p>
                    </div>
                    <dl className="col-span-4 grid grid-cols-2 gap-4 text-[0.9375rem] md:col-span-5 md:col-start-8">
                      <div>
                        <dt className="text-[0.8125rem] text-muted">Omfang</dt>
                        <dd>{job.extent}</dd>
                      </div>
                      <div>
                        <dt className="text-[0.8125rem] text-muted">Sted</dt>
                        <dd>{job.location}</dd>
                      </div>
                      {job.deadline ? (
                        <div>
                          <dt className="text-[0.8125rem] text-muted">Søknadsfrist</dt>
                          <dd>{job.deadline}</dd>
                        </div>
                      ) : null}
                      <div className="flex items-end gap-2 text-fjord">
                        <span>Søk nå</span>
                        <FjordIcon name="pil" size={18} className="card-arrow" />
                      </div>
                    </dl>
                  </a>
                </FadeUp>
              ))}
            </ul>
          ) : (
            /* Tom tilstand */
            <div className="mt-10 grid grid-cols-4 gap-x-6 md:grid-cols-12">
              <FadeUp className="group col-span-4 border border-line md:col-span-12">
                <div className="grid grid-cols-4 gap-x-6 md:grid-cols-12">
                  <div className="col-span-4 flex flex-col justify-between gap-16 p-6 md:col-span-7 md:p-10">
                    <FjordIcon name="stilling" size={40} hover />
                    <div>
                      <RevealText as="h3" text={openApplication.title} className="display-m max-w-[18ch]" />
                      <p className="mt-5 max-w-[50ch] text-muted">{openApplication.text}</p>
                      <div className="mt-8 flex flex-wrap items-center gap-6">
                        <Button href={mailto(openApplication.email, openApplication.subject)} variant="solid">
                          Send åpen søknad
                        </Button>
                        <Link href="/om-oss#ansatte" className="group/l inline-flex items-center gap-2">
                          <span className="ulink">Møt de ansatte</span>
                          <FjordIcon name="pil" size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Horisontillustrasjon */}
                  <div
                    className="relative col-span-4 hidden border-l border-line md:col-span-5 md:block"
                    aria-hidden="true"
                  >
                    <span className="absolute bottom-[38%] left-10 font-display text-[10rem] leading-[0.8] tracking-[-0.04em] text-line transition-colors duration-700 group-hover:text-ink/15">
                      0
                    </span>
                    <div className="absolute inset-x-0 top-[62%] h-px bg-line" />
                    <div className="absolute inset-x-10 top-[62%] h-px origin-left scale-x-0 bg-fjord transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                    <div className="absolute bottom-10 left-10 right-10 flex justify-between text-[0.8125rem] tabular-nums text-muted">
                      <span>0 ledige</span>
                      <span>Åpne søknader: alltid</span>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          )}

          <FadeUp className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { icon: "cv" as const, title: "Send CV", text: `Til ${openApplication.email}` , href: mailto(openApplication.email, openApplication.subject) },
              { icon: "telefon" as const, title: "Ring oss", text: "33 30 19 40", href: "tel:+4733301940" },
              { icon: "adresse" as const, title: "Besøk oss", text: "Kilengaten 1, Tønsberg", href: "/kontakt-oss" },
            ].map((c) =>
              c.href.startsWith("/") ? (
                <Link key={c.title} href={c.href} className="card group flex items-center gap-4 p-5">
                  <FjordIcon name={c.icon} size={28} />
                  <span>
                    <span className="block">{c.title}</span>
                    <span className="text-[0.875rem] text-muted">{c.text}</span>
                  </span>
                  <FjordIcon name="pil" size={18} className="card-arrow ml-auto" />
                </Link>
              ) : (
                <a key={c.title} href={c.href} className="card group flex items-center gap-4 p-5">
                  <FjordIcon name={c.icon} size={28} />
                  <span>
                    <span className="block">{c.title}</span>
                    <span className="text-[0.875rem] text-muted">{c.text}</span>
                  </span>
                  <FjordIcon name="pil" size={18} className="card-arrow ml-auto" />
                </a>
              ),
            )}
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
