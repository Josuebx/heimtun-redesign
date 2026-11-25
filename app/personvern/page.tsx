import type { Metadata } from "next";
import { personvern } from "@/content/pages";
import { Container } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { FadeUp } from "@/components/motion/FadeUp";
import { FjordIcon } from "@/components/icons/FjordIcon";

export const metadata: Metadata = {
  title: personvern.meta.title,
  description: personvern.meta.description,
  alternates: { canonical: "/personvern" },
};

export default function PersonvernPage() {
  return (
    <>
      <PageHero eyebrow={personvern.eyebrow} title={personvern.title} lead={personvern.lead} />
      <Container className="pb-24 md:pb-32">
        <div className="grid grid-cols-4 gap-x-6 md:grid-cols-12">
          <div className="col-span-4 md:col-span-8 md:col-start-5">
            {personvern.sections.map((s, i) => (
              <FadeUp as="section" key={s.title} className="border-t border-line pb-12 pt-5">
                <p className="text-[0.8125rem] tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="display-m mt-4">{s.title}</h2>
                <div className="mt-5 max-w-[62ch] space-y-4">
                  {s.text.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
                {"link" in s && s.link ? (
                  <a
                    href={s.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex items-center gap-2 text-fjord"
                  >
                    <span className="ulink">{s.link.label}</span>
                    <FjordIcon name="pil-ut" size={18} />
                  </a>
                ) : null}
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
