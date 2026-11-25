import Link from "next/link";
import { company, contact, footerNav } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Section";
import { FjordIcon } from "@/components/icons/FjordIcon";
import { Year } from "./Year";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <Container className="grid grid-cols-4 gap-x-6 gap-y-12 py-16 md:grid-cols-12 md:py-20">
        <div className="col-span-4 md:col-span-4">
          <Logo />
          <p className="mt-6 max-w-[34ch] text-[0.9375rem] text-muted">
            Autorisert regnskapsførerselskap i Tønsberg siden {company.founded}. Medlem av Regnskap Norge.
          </p>
        </div>

        <div className="col-span-2 md:col-span-3">
          <h2 className="eyebrow mb-4 font-sans">Besøk oss</h2>
          <address className="not-italic text-[0.9375rem] leading-7">
            {contact.visit.street}
            <br />
            {contact.visit.postcode} {contact.visit.city}
          </address>
          <p className="mt-4 text-[0.9375rem] leading-7 text-muted">
            {contact.hours.map((h) => (
              <span key={h.days} className="block">
                {h.days} {h.time}
              </span>
            ))}
          </p>
        </div>

        <div className="col-span-2 md:col-span-2">
          <h2 className="eyebrow mb-4 font-sans">Kontakt</h2>
          <ul className="space-y-2 text-[0.9375rem]">
            <li>
              <a className="group inline-flex items-center gap-2" href={contact.phoneHref}>
                <FjordIcon name="telefon" size={18} />
                <span className="ulink">{contact.phone}</span>
              </a>
            </li>
            <li>
              <a className="group inline-flex items-center gap-2" href={contact.emailHref}>
                <FjordIcon name="epost" size={18} />
                <span className="ulink">{contact.email}</span>
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Bunnmeny" className="col-span-4 md:col-span-3">
          <h2 className="eyebrow mb-4 font-sans">Sider</h2>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-[0.9375rem]">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link className="ulink" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <Container>
        <div className="flex flex-col gap-2 border-t border-line py-6 text-[0.8125rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <Year /> {company.name}
          </p>
          <p>
            {contact.postal.street}, {contact.postal.postcode} {contact.postal.city}
          </p>
        </div>
      </Container>
    </footer>
  );
}
