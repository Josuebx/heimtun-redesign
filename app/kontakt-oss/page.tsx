import type { Metadata } from "next";
import Image from "next/image";
import { kontakt } from "@/content/pages";
import { contact } from "@/content/site";
import { Container, SectionLabel } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { RevealText } from "@/components/motion/RevealText";
import { FadeUp } from "@/components/motion/FadeUp";
import { FjordIcon } from "@/components/icons/FjordIcon";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: kontakt.meta.title,
  description: kontakt.meta.description,
  alternates: { canonical: "/kontakt-oss" },
};

export default function KontaktPage() {
  const rows = [
    {
      icon: "telefon" as const,
      label: "Telefon",
      value: contact.phone,
      href: contact.phoneHref,
    },
    {
      icon: "epost" as const,
      label: "E-post",
      value: contact.email,
      href: contact.emailHref,
    },
    {
      icon: "adresse" as const,
      label: "Besøksadresse",
      value: `${contact.visit.street}, ${contact.visit.postcode} ${contact.visit.city}`,
      href: contact.mapsUrl,
    },
  ];

  return (
    <>
      <PageHero eyebrow={kontakt.eyebrow} title={kontakt.title} lead={kontakt.lead} />

      <section aria-labelledby="h-info" className="pb-16 md:pb-24">
        <Container>
          <SectionLabel index={1} label="Kontaktinformasjon" />
          <h2 id="h-info" className="sr-only">
            Kontaktinformasjon
          </h2>
          <div className="mt-10 grid grid-cols-4 gap-x-6 gap-y-12 md:grid-cols-12">
            {/* Info */}
            <div className="col-span-4 md:col-span-5">
              <ul className="border-t border-line">
                {rows.map((r, i) => (
                  <FadeUp as="li" key={r.label} delay={i * 60} className="border-b border-line">
                    <a
                      href={r.href}
                      {...(r.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-4 py-5"
                    >
                      <FjordIcon name={r.icon} size={28} />
                      <span className="flex-1">
                        <span className="block text-[0.8125rem] text-muted">{r.label}</span>
                        <span className="ulink text-[1.0625rem]">{r.value}</span>
                      </span>
                      <FjordIcon
                        name={r.href.startsWith("http") ? "pil-ut" : "pil"}
                        size={18}
                        className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </a>
                  </FadeUp>
                ))}
                <FadeUp as="li" className="group flex items-start gap-4 border-b border-line py-5">
                  <FjordIcon name="klokke" size={28} hover />
                  <span>
                    <span className="block text-[0.8125rem] text-muted">Åpningstider</span>
                    {contact.hours.map((h) => (
                      <span key={h.days} className="block text-[1.0625rem]">
                        {h.days}: {h.time}
                      </span>
                    ))}
                  </span>
                </FadeUp>
                <FadeUp as="li" className="flex items-start gap-4 border-b border-line py-5">
                  <FjordIcon name="epost" size={28} className="text-muted" />
                  <span>
                    <span className="block text-[0.8125rem] text-muted">Postadresse</span>
                    <span className="block text-[1.0625rem]">
                      {contact.postal.street}, {contact.postal.postcode} {contact.postal.city}
                    </span>
                  </span>
                </FadeUp>
              </ul>
            </div>

            {/* Skjema */}
            <div className="col-span-4 md:col-span-6 md:col-start-7">
              <RevealText as="h2" text={kontakt.form.title} className="display-m" />
              <FadeUp className="mt-8">
                <ContactForm
                  to={contact.email}
                  consentText={kontakt.form.consent}
                  note={kontakt.form.note}
                  successText={kontakt.form.success}
                />
              </FadeUp>
            </div>
          </div>
        </Container>
      </section>

      {/* 02 — Kart */}
      <section aria-labelledby="h-kart" className="py-16 md:py-24">
        <Container>
          <SectionLabel index={2} label="Finn fram" />
          <div className="mt-10 grid grid-cols-4 gap-x-6 gap-y-10 md:grid-cols-12">
            <div className="col-span-4 md:col-span-4">
              <RevealText id="h-kart" text="Kilengaten 1, Tønsberg" className="display-m" />
              <FadeUp as="p" className="mt-6 text-muted">
                Du finner oss i Kilengaten 1 i Tønsberg, nær Kilen Handelspark.
              </FadeUp>
              <FadeUp className="mt-8">
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <span>Åpne i kart</span>
                  <FjordIcon name="pil-ut" size={18} className="btn-arrow" />
                </a>
              </FadeUp>
            </div>
            <FadeUp className="col-span-4 md:col-span-8">
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card group relative block aspect-[4/5] overflow-hidden sm:aspect-[16/10]"
                aria-label="Åpne kart over Kilengaten 1, Tønsberg"
              >
                <Image
                  src="/images/kart-kilengaten.jpg"
                  alt="Kart som viser Kilengaten 1 i Tønsberg"
                  fill
                  sizes="(min-width: 1200px) 790px, (min-width: 768px) 66vw, 100vw"
                  className="object-cover"
                />
                {/* Markør */}
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full text-fjord" aria-hidden="true">
                  <svg width="40" height="52" viewBox="0 0 40 52" fill="none">
                    <path d="M20 50S4 34 4 20a16 16 0 0 1 32 0c0 14-16 30-16 30z" fill="#4E6B5C" />
                    <circle cx="20" cy="20" r="6" fill="#F6F4EF" />
                  </svg>
                </span>
                <span className="absolute left-1/2 top-1/2 h-px w-24 -translate-x-1/2 bg-ink/40" aria-hidden="true" />
                <span className="absolute bottom-3 right-3 bg-paper/90 px-2 py-1 text-[0.6875rem] text-muted">
                  © OpenStreetMap-bidragsytere
                </span>
              </a>
            </FadeUp>
          </div>
        </Container>
      </section>
    </>
  );
}
