/**
 * Ledige stillinger – vises på /ledige-stillinger.
 * Er listen tom, vises en egen tilstand med invitasjon til åpen søknad.
 *
 * Eksempel:
 * {
 *   slug: "autorisert-regnskapsforer",
 *   title: "Autorisert regnskapsfører",
 *   extent: "Fast, 100 %",
 *   location: "Tønsberg",
 *   deadline: "15. januar 2027",
 *   summary: "Kort beskrivelse av stillingen …",
 *   applyEmail: "hh@heimtun-rr.no",
 * }
 */
export type Job = {
  slug: string;
  title: string;
  extent: string;
  location: string;
  deadline?: string;
  summary: string;
  applyEmail: string;
};

export const jobs: Job[] = [];

export const openApplication = {
  title: "Ingen ledige stillinger akkurat nå",
  text: "Vi er likevel alltid på utkikk etter dyktige autoriserte regnskapsførere. Send oss gjerne CV-en din og fortell litt om deg selv – så tar vi kontakt når det passer.",
  email: "hh@heimtun-rr.no",
  subject: "Åpen søknad",
};
