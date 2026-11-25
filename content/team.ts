/**
 * Ansatte – vises på /om-oss#ansatte.
 * Legg til `photo: "/images/ansatte/navn.jpg"` (stående 4:5) for å vise bilde
 * i stedet for initialer. `title` er valgfri.
 */
export type Employee = {
  name: string;
  phone: string;
  email: string;
  title?: string;
  photo?: string;
};

export const team: Employee[] = [
  { name: "Henning Heimtun", phone: "970 91 220", email: "hh@heimtun-rr.no" },
  { name: "Jon Egil Halvorsen", phone: "986 27 259", email: "jeh@heimtun-rr.no" },
  { name: "Anne Toril Michelsen", phone: "997 33 970", email: "atm@heimtun-rr.no" },
  { name: "Bente Faber Dybdahl", phone: "416 92 062", email: "bfd@heimtun-rr.no" },
  { name: "Desiree Bredholt Petterson", phone: "920 17 119", email: "dbp@heimtun-rr.no" },
  { name: "Anne Margrethe Heimtun", phone: "406 39 775", email: "ah@heimtun-rr.no" },
  { name: "Tone M. Nilssen", phone: "924 62 831", email: "tmn@heimtun-rr.no" },
  { name: "Liv Elisabeth Andresen", phone: "913 63 062", email: "lea@heimtun-rr.no" },
];
