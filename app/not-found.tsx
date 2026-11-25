import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "@/content/pages";
import { footerNav } from "@/content/site";
import { Container } from "@/components/ui/Section";
import { RevealText } from "@/components/motion/RevealText";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import { FjordIcon } from "@/components/icons/FjordIcon";

export const metadata: Metadata = {
  title: "Siden finnes ikke",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Container className="pb-24 pt-16 md:pb-32 md:pt-24">
      <div className="grid grid-cols-4 gap-x-6 gap-y-12 md:grid-cols-12">
        <div className="col-span-4 md:col-span-7">
          <FadeUp className="eyebrow mb-8">{notFound.eyebrow}</FadeUp>
          <RevealText as="h1" text={notFound.title} className="display-xl max-w-[14ch]" />
          <FadeUp as="p" delay={200} className="lead mt-8 max-w-[44ch] text-muted">
            {notFound.lead}
          </FadeUp>
          <FadeUp delay={300} className="mt-10">
            <Button href="/" variant="solid">
              Til forsiden
            </Button>
          </FadeUp>
        </div>
        <FadeUp delay={150} className="col-span-4 md:col-span-4 md:col-start-9">
          <nav aria-label="Sider">
            <ul className="border-t border-line">
              {footerNav.map((item, i) => (
                <li key={item.href} className="border-b border-line">
                  <Link href={item.href} className="group flex items-center justify-between gap-4 py-3">
                    <span className="flex gap-3">
                      <span className="w-6 text-[0.8125rem] tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
                      <span className="ulink">{item.label}</span>
                    </span>
                    <FjordIcon name="pil" size={18} className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </FadeUp>
      </div>
      <div className="relative mt-20 h-px bg-line" aria-hidden="true">
        <span className="absolute -top-[3px] left-[62%] h-[7px] w-[7px] rounded-full bg-fjord" />
      </div>
    </Container>
  );
}
