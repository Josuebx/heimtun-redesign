import type { IconName } from "@/components/icons/FjordIcon";

/**
 * Tjenestene. Rekkefølgen her styrer nummereringen ("01 — Regnskap")
 * og rekkefølgen på /tjenester og forsiden.
 * `slug` blir ankeret: /tjenester#regnskap
 */
export type Service = {
  slug: string;
  title: string;
  icon: IconName;
  summary: string;
  body: string[];
};

export const services: Service[] = [
  {
    slug: "regnskap",
    title: "Regnskap",
    icon: "regnskap",
    summary: "Løpende bokføring og rapporter som viser hvordan bedriften faktisk går.",
    body: [
      "Regnskap kan virke uoversiktlig, særlig for små og mellomstore bedrifter. Vi fører regnskapet løpende og gir deg rapporter der tallene sammenlignes med tidligere perioder eller budsjett.",
      "Sammen går vi gjennom tallene, og du får konkrete råd om hvordan du kan styre bedriften enda bedre.",
    ],
  },
  {
    slug: "lonn",
    title: "Lønn",
    icon: "lonn",
    summary: "Riktig lønn, feriepenger og sykepenger – til rett tid.",
    body: [
      "Som arbeidsgiver er du forpliktet til å utbetale lønn, feriepenger og sykepenger etter fastsatte regler. Regelverket er omfattende og endres jevnlig.",
      "For de fleste små og mellomstore bedrifter lønner det seg å sette bort lønnskjøringen, enten du har én ansatt eller flere. Vi tar oss av den, så du kan bruke tiden på driften.",
    ],
  },
  {
    slug: "fakturering",
    title: "Fakturering",
    icon: "fakturering",
    summary: "Vi sender, følger opp og purrer – så pengene kommer inn.",
    body: [
      "Fakturering er en av de viktigste oppgavene i en bedrift, men den spiser fort av fritiden. Vi kan ta ansvaret for å sende fakturaene dine og følge dem opp, og sender purringer og inkassovarsel ved behov.",
      "Riktige fakturaer til rett tid gir et bedre grunnlag for økonomien i bedriften.",
    ],
  },
  {
    slug: "remittering",
    title: "Remittering",
    icon: "remittering",
    summary: "Bokføring og betaling i én og samme operasjon.",
    body: [
      "Regnskapssystemene vi bruker, blant annet PowerOffice, bokfører inngående og utgående fakturaer i én operasjon.",
      "Når bilaget registreres, opprettes det samtidig en betalingspost som kan eksporteres rett til nettbanken. Det gir færre manuelle steg og mindre rom for feil.",
    ],
  },
  {
    slug: "skattemelding",
    title: "Skattemelding",
    icon: "skattemelding",
    summary: "Riktig utfylt skattemelding for næringsdrivende.",
    body: [
      "Som selvstendig næringsdrivende må du levere skattemelding hvert år. Den er mer omfattende enn for lønnstakere, og flere poster skal fylles ut riktig.",
      "Vi hjelper deg med utfyllingen og gir deg råd og veiledning du kan ta med deg videre.",
    ],
  },
  {
    slug: "arsoppgjor",
    title: "Årsoppgjør",
    icon: "arsoppgjor",
    summary: "Årsoppgjøret loven krever – med en oversikt du kan bruke.",
    body: [
      "Eier du et aksjeselskap, er du lovpålagt å levere årsoppgjør. Det viser bedriftens resultat og økonomiske stilling for året, og gir deg en samlet oversikt over aktivitetene.",
      "Vi hjelper deg å få kontroll på hele prosessen.",
    ],
  },
  {
    slug: "nyetablering",
    title: "Nyetablering og firmaregistrering",
    icon: "nyetablering",
    summary: "Hjelp til å komme riktig i gang med egen bedrift.",
    body: [
      "Skal du starte for deg selv? Økonomi og regnskap kan være mye å sette seg inn i. Mange velger å føre regnskapet og kjøre lønn selv i starten for å holde kostnadene nede – det har vi full forståelse for.",
      "Vi hjelper deg med etablering og registrering, og gir deg råd og veiledning underveis.",
    ],
  },
  {
    slug: "forretningsforsel",
    title: "Forretningsførsel",
    icon: "forretningsforsel",
    summary: "Vi tar totalansvaret for økonomien i bedriften.",
    body: [
      "Med forretningsførsel tar vi totalansvaret for regnskapet: fakturering, lønn, bilagsføring, bokføring, budsjetter og årsoppgjør.",
      "Du får rapporter om den økonomiske situasjonen, og råd om hvordan du kan drive bedriften bedre økonomisk.",
    ],
  },
  {
    slug: "radgivning",
    title: "Konsulentbistand og rådgivning",
    icon: "radgivning",
    summary: "Et grundig blikk på økonomien – og råd om veien videre.",
    body: [
      "Også for etablerte bedrifter kan det lønne seg med rådgivning. Vi tar et dypdykk i økonomien og viser deg hvordan du unngår de største fallgruvene hvis du fører regnskapet selv.",
      "I tillegg gir vi veiledning om hvordan økonomien kan bli enda bedre.",
    ],
  },
];
