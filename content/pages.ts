/**
 * Tekster per side. Overskrifter animeres linje for linje automatisk.
 * Hold avsnitt korte – ett avsnitt per streng.
 */

export const home = {
  meta: {
    title: "Regnskapskontor i Tønsberg og Færder",
    description:
      "Autorisert regnskapsførerselskap i Tønsberg siden 2000. Regnskap, lønn, fakturering, årsoppgjør og rådgivning for små og mellomstore bedrifter i Vestfold.",
  },
  hero: {
    eyebrow: "Autorisert regnskapsførerselskap i Tønsberg",
    title: "Et ryddig regnskap gir ro til å drive bedriften.",
    lead: "Vi hjelper små og mellomstore bedrifter i Tønsberg, Færder og resten av Vestfold med regnskap, lønn og rådgivning – siden 2000.",
    primary: { label: "Ta kontakt", href: "/kontakt-oss" },
    secondary: { label: "Se tjenestene", href: "/tjenester" },
    image: { src: "/images/hero-kalkulator.jpg", alt: "Regnskapsfører som regner på tall ved et lyst skrivebord" },
  },
  facts: [
    { label: "Etablert", value: "2000" },
    { label: "Regnskapsførere", value: "Autoriserte" },
    { label: "Tilsyn", value: "Finanstilsynet" },
    { label: "Medlem av", value: "Regnskap Norge" },
  ],
  services: {
    title: "Alt fra løpende bokføring til årsoppgjør.",
    lead: "Vi utfører de fleste oppdrag innen regnskap og økonomi. Velg det du trenger – eller sett bort hele økonomifunksjonen.",
    cta: { label: "Alle tjenester", href: "/tjenester" },
  },
  poweroffice: {
    title: "Regnskapet i skyen, alltid oppdatert.",
    text: "Vi bruker PowerOffice Go – et komplett skybasert system for regnskap, faktura, timeregistrering, reiseregninger og lønn. Du følger med i appen, vi tar oss av resten.",
    cta: { label: "Om PowerOffice Go", href: "/poweroffice-go" },
  },
  about: {
    title: "Et lokalt kontor med autoriserte regnskapsførere.",
    text: "Vi holder til i moderne lokaler i Kilengaten 1 i Tønsberg. Som autorisert regnskapsførerselskap er vi underlagt Finanstilsynet, og vi er medlem av bransjeforeningen Regnskap Norge.",
    cta: { label: "Bli kjent med oss", href: "/om-oss" },
    image: { src: "/images/regnskap-detalj.jpg", alt: "Kalkulator, penn og regnskapsrapporter på et skrivebord" },
  },
  contact: {
    title: "Klar for et ryddigere regnskap?",
    text: "Ring oss eller send en e-post. Vi tar en uforpliktende prat om hva bedriften din trenger.",
    cta: { label: "Kontakt oss", href: "/kontakt-oss" },
  },
};

export const tjenester = {
  meta: {
    title: "Tjenester",
    description:
      "Regnskap, lønn, fakturering, remittering, skattemelding, årsoppgjør, nyetablering, forretningsførsel og rådgivning – fra autoriserte regnskapsførere i Tønsberg.",
  },
  eyebrow: "Tjenester",
  title: "Det du trenger av regnskap og økonomi, samlet på ett sted.",
  lead: "Vi bruker PowerOffice og andre regnskapssystemer, og utfører de fleste oppdrag innen regnskap. Under finner du en oversikt over hva vi kan hjelpe deg med.",
  indexLabel: "Innhold",
};

export const poweroffice = {
  meta: {
    title: "PowerOffice Go",
    description:
      "PowerOffice Go er et komplett skybasert system for regnskap, faktura, timeregistrering, reiseregninger og lønn. Slik bruker vi det – og slik kommer du i gang.",
  },
  eyebrow: "Regnskapssystem",
  title: "PowerOffice Go",
  lead: "Et komplett, skybasert system for regnskap, faktura, timeregistrering, reiseregninger og lønn.",
  image: { src: "/images/samarbeid-laptop.jpg", alt: "To personer går gjennom rapporter på en bærbar PC" },
  what: {
    title: "Hva er PowerOffice Go?",
    text: [
      "PowerOffice Go samler det økonomiske i bedriften på én plattform, tilgjengelig i nettleseren og som app.",
      "Systemet er sømløst integrert med mange andre systemer. Når alt ligger samlet, sparer du tid og får bedre kontroll på hvordan bedriften går – til enhver tid.",
    ],
    modules: ["Regnskap", "Faktura", "Timeregistrering", "Reiseregninger", "Lønn"],
  },
  why: {
    title: "Hvorfor vi bruker det",
    items: [
      {
        icon: "poweroffice",
        title: "Alt på én plattform",
        text: "Regnskap, faktura og lønn i samme system gir mindre dobbeltarbeid og bedre oversikt.",
      },
      {
        icon: "integrasjon",
        title: "Integrert med andre systemer",
        text: "PowerOffice Go er koblet til mange andre systemer, så informasjonen flyter dit den skal.",
      },
      {
        icon: "mobil",
        title: "Oversikt i appen",
        text: "Med appen kan du holde deg oppdatert på regnskapet når som helst.",
      },
      {
        icon: "autorisert",
        title: "Godt likt i bransjen",
        text: "I en undersøkelse Regnskap Norge gjorde blant medlemmene i 2020, skåret PowerOffice totalt sett høyest av regnskapssystemene som ble brukt.",
      },
    ],
  },
  start: {
    title: "Slik kommer du i gang",
    steps: [
      {
        title: "Ta kontakt",
        text: "Ring eller send oss en e-post, så finner vi sammen ut hva bedriften trenger.",
      },
      {
        title: "Vi skreddersyr oppsettet",
        text: "Vi tilpasser løsningen til den daglige fakturaflyten din, og til hvor mye av regnskapet du vil sette bort.",
      },
      {
        title: "Du følger med – vi fører",
        text: "Du holder deg oppdatert i PowerOffice Go og appen, mens vi tar oss av regnskapet.",
      },
    ],
    cta: { label: "Kom i gang", href: "/kontakt-oss" },
  },
};

export const omOss = {
  meta: {
    title: "Om oss",
    description:
      "Heimtun Regnskap & Rådgivning AS er et autorisert regnskapsførerselskap i Kilengaten 1 i Tønsberg, etablert i 2000. Møt de ansatte.",
  },
  eyebrow: "Om oss",
  title: "Autoriserte regnskapsførere med god rådgivningsevne.",
  lead: "Små og mellomstore bedrifter i mange ulike bransjer utgjør hoveddelen av kundene våre.",
  image: { src: "/images/radgivning-mote.jpg", alt: "To personer går gjennom dokumenter sammen" },
  story: {
    title: "Historien",
    text: [
      "Heimtun & Bryn Regnskapskontor AS ble etablert i 2000. I 2019 byttet vi navn til Heimtun Regnskap & Rådgivning AS. Navnet er nytt, men oppgaven er den samme: å holde regnskapet ditt ajour, med autoriserte regnskapsførere som også kan gi gode råd.",
    ],
    timeline: [
      { year: "2000", text: "Heimtun & Bryn Regnskapskontor AS etableres i Tønsberg." },
      { year: "2019", text: "Vi bytter navn til Heimtun Regnskap & Rådgivning AS." },
      { year: "I dag", text: "Store og moderne lokaler i Kilengaten 1 i Tønsberg." },
    ],
  },
  quality: {
    title: "Autorisasjon og kvalitet",
    items: [
      {
        icon: "autorisert",
        title: "Under tilsyn av Finanstilsynet",
        text: "Autorisasjonsordningen for regnskapsførere betyr at vi har krav til faglig kompetanse og oppdatering av de ansatte. Finanstilsynet kontrollerer også rutinene våre, for å sikre at arbeidet er kvalitetssikret etter gjeldende lover og forskrifter.",
      },
      {
        icon: "team",
        title: "Medlem av Regnskap Norge",
        text: "Vi er medlem av Regnskap Norge, bransjeforeningen for autoriserte regnskapsførere.",
      },
    ],
  },
  team: {
    title: "Ansatte",
    lead: "Ta gjerne direkte kontakt med den du ønsker å snakke med.",
  },
};

export const ledigeStillinger = {
  meta: {
    title: "Ledige stillinger",
    description:
      "Jobb hos Heimtun Regnskap & Rådgivning i Tønsberg. Se ledige stillinger, eller send en åpen søknad.",
  },
  eyebrow: "Karriere",
  title: "Ledige stillinger",
  lead: "Vil du bli en del av et lokalt regnskapskontor med autoriserte regnskapsførere i Tønsberg?",
};

export const kontakt = {
  meta: {
    title: "Kontakt oss",
    description:
      "Kontakt Heimtun Regnskap & Rådgivning i Kilengaten 1, Tønsberg. Telefon 33 30 19 40, e-post hh@heimtun-rr.no. Åpent mandag–fredag 08:00–16:00.",
  },
  eyebrow: "Kontakt",
  title: "Vi tar gjerne en prat.",
  lead: "Ring, send e-post eller bruk skjemaet. Du finner oss i Kilengaten 1 i Tønsberg.",
  form: {
    title: "Send oss en melding",
    note: "Når du sender, åpnes e-postprogrammet ditt med meldingen ferdig utfylt.",
    consent:
      "Jeg godtar at Heimtun Regnskap & Rådgivning AS kan kontakte meg om henvendelsen.",
    success: "Takk! E-postprogrammet ditt skal nå ha åpnet seg med meldingen. Trykk «Send» der for å sende den til oss.",
  },
};

export const personvern = {
  meta: {
    title: "Personvern",
    description: "Slik behandler Heimtun Regnskap & Rådgivning AS personopplysninger på dette nettstedet.",
  },
  eyebrow: "Personvern",
  title: "Personvernerklæring",
  lead: "Her forklarer vi hvordan vi behandler personopplysninger når du besøker nettstedet eller tar kontakt med oss.",
  sections: [
    {
      title: "Behandlingsansvarlig",
      text: [
        "Heimtun Regnskap & Rådgivning AS, Kilengaten 1, 3117 Tønsberg, er behandlingsansvarlig for personopplysningene som behandles via dette nettstedet. Spørsmål om personvern kan sendes til hh@heimtun-rr.no.",
      ],
    },
    {
      title: "Når du kontakter oss",
      text: [
        "Kontaktskjemaet åpner e-postprogrammet ditt. Det er først når du selv sender e-posten at vi mottar navn, e-postadresse og det du har skrevet. Vi bruker opplysningene kun til å svare på henvendelsen, og sletter dem når de ikke lenger er nødvendige.",
      ],
    },
    {
      title: "Informasjonskapsler og analyse",
      text: [
        "Dette nettstedet bruker ikke informasjonskapsler til sporing eller markedsføring. Skrifttypene lastes fra vår egen server.",
      ],
    },
    {
      title: "Dine rettigheter",
      text: [
        "Du har rett til å be om innsyn i personopplysningene vi behandler om deg, og hvordan de behandles. Du kan også be om retting, sletting og begrensning av behandlingen i henhold til personopplysningsloven.",
        "Mener du at vi ikke overholder rettighetene dine, kan du klage til Datatilsynet.",
      ],
      link: { label: "Les mer hos Datatilsynet", href: "https://www.datatilsynet.no/" },
    },
  ],
};

export const notFound = {
  eyebrow: "404",
  title: "Denne siden finnes ikke.",
  lead: "Lenken kan være gammel, eller siden er flyttet. Her er noen steder å starte:",
};
