/**
 * Grunndata for nettstedet: firma, kontaktinfo og menyer.
 * Endre tekst her – endringene slår gjennom på alle sider.
 */

export const company = {
  name: "Heimtun Regnskap & Rådgivning AS",
  shortName: "Heimtun Regnskap & Rådgivning",
  formerName: "Heimtun & Bryn Regnskapskontor AS",
  founded: 2000,
  renamed: 2019,
  description:
    "Autorisert regnskapsførerselskap i Tønsberg. Regnskap, lønn, fakturering, årsoppgjør og rådgivning for små og mellomstore bedrifter i Tønsberg, Færder og Vestfold.",
  url: "https://heimtun-rr.no",
  areas: ["Tønsberg", "Færder", "Horten", "Vestfold"],
};

export const contact = {
  phone: "33 30 19 40",
  phoneHref: "tel:+4733301940",
  email: "hh@heimtun-rr.no",
  emailHref: "mailto:hh@heimtun-rr.no",
  visit: { street: "Kilengaten 1", postcode: "3117", city: "Tønsberg" },
  postal: { street: "Postboks 1300", postcode: "3105", city: "Tønsberg" },
  hours: [{ days: "Mandag–fredag", time: "08:00–16:00" }],
  geo: { lat: 59.2741904, lng: 10.4322341 },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kilengaten+1%2C+3117+T%C3%B8nsberg",
  facebook: "https://www.facebook.com/Heimtun-Bryn-Regnskapskontor-As-540631999385387/",
};

export type NavItem = { label: string; href: string };

/** Hovedmenyen i header og mobilmeny. */
export const mainNav: NavItem[] = [
  { label: "Hjem", href: "/" },
  { label: "Tjenester", href: "/tjenester" },
  { label: "PowerOffice Go", href: "/poweroffice-go" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Ansatte", href: "/om-oss#ansatte" },
  { label: "Ledige stillinger", href: "/ledige-stillinger" },
  { label: "Kontakt oss", href: "/kontakt-oss" },
];

/** Footer-menyen: alle sider + personvern. */
export const footerNav: NavItem[] = [...mainNav, { label: "Personvern", href: "/personvern" }];
