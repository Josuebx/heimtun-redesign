"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { contact, mainNav } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import { FjordIcon } from "@/components/icons/FjordIcon";
import { Container } from "@/components/ui/Section";

const ease = [0.22, 1, 0.36, 1] as const;

function isActive(pathname: string, href: string) {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => firstLinkRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/95 backdrop-blur-[2px] transition-[border-color] duration-500 ${
        scrolled || open ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <a
        href="#innhold"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-paper focus:px-4 focus:py-2"
      >
        Hopp til innhold
      </a>
      <Container className="flex h-[76px] items-center justify-between gap-6">
        <Logo onClick={close} />

        <nav aria-label="Hovedmeny" className="hidden xl:block">
          <ul className="flex items-center gap-7 text-[0.9375rem]">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="ulink py-1"
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="group -mr-2 inline-flex h-11 items-center gap-2 px-2 text-[0.9375rem] xl:hidden"
          aria-expanded={open}
          aria-controls="mobilmeny"
          onClick={() => setOpen((v) => !v)}
        >
          <span>{open ? "Lukk" : "Meny"}</span>
          <FjordIcon name={open ? "lukk" : "meny"} size={22} />
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobilmeny"
            role="dialog"
            aria-modal="true"
            aria-label="Meny"
            className="fixed inset-x-0 bottom-0 top-[76px] z-40 overflow-y-auto bg-paper xl:hidden"
            initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: reduce ? 0 : 0.6, ease }}
          >
            <Container className="flex min-h-full flex-col justify-between pb-10 pt-6">
              <nav aria-label="Mobilmeny">
                <ul className="border-t border-line">
                  {mainNav.map((item, i) => (
                    <li key={item.href} className="overflow-hidden border-b border-line">
                      <motion.div
                        initial={reduce ? false : { y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: reduce ? 0 : 0.7, ease, delay: reduce ? 0 : 0.12 + i * 0.06 }}
                      >
                        <Link
                          ref={i === 0 ? firstLinkRef : undefined}
                          href={item.href}
                          onClick={close}
                          aria-current={isActive(pathname, item.href) ? "page" : undefined}
                          className="group flex items-baseline justify-between gap-4 py-4 font-display text-[clamp(1.75rem,7vw,2.75rem)] font-medium leading-tight tracking-[-0.02em] aria-[current=page]:text-fjord"
                        >
                          <span>{item.label}</span>
                          <span className="text-[0.8125rem] tabular-nums text-muted">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </Link>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </nav>
              <motion.div
                className="mt-10 grid gap-2 text-[0.9375rem]"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduce ? 0 : 0.5, ease, delay: reduce ? 0 : 0.6 }}
              >
                <a className="ulink w-fit" href={contact.phoneHref}>
                  {contact.phone}
                </a>
                <a className="ulink w-fit" href={contact.emailHref}>
                  {contact.email}
                </a>
                <Link className="ulink mt-4 w-fit text-muted" href="/personvern" onClick={close}>
                  Personvern
                </Link>
              </motion.div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
