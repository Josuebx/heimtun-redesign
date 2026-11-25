/**
 * «Fjord Line» – Heimtuns eget ikonsett.
 * 24px, strek 1.25px, rette endestykker (butt/miter), tegnet på en 20px-grid
 * (2px luft rundt). Motivet som går igjen er horisontlinjen nederst (y = 19).
 *
 * Hver form har pathLength=1 slik at streken kan tegnes på nytt
 * (stroke-dashoffset 1 → 0) ved hover – se .fl-icon i globals.css.
 */
import type { ReactElement, SVGProps } from "react";

const P = (d: string) => <path d={d} pathLength={1} />;
const HORIZON = <path key="h" d="M2 19h20" pathLength={1} />;

const glyphs = {
  regnskap: [
    <rect key="a" x="6" y="4" width="12" height="15" pathLength={1} />,
    P("M9 8.5h6"),
    P("M9 11.5h6"),
    P("M9 14.5h3"),
    HORIZON,
  ],
  lonn: [
    <rect key="a" x="4" y="9" width="16" height="10" pathLength={1} />,
    <circle key="b" cx="12" cy="14" r="2.5" pathLength={1} />,
    P("M6 6.5h12"),
    P("M8 4h8"),
    HORIZON,
  ],
  fakturering: [P("M6 19V3h8l4 4v12"), P("M14 3v4h4"), P("M9 11h6"), P("M9 14h4"), HORIZON],
  remittering: [P("M4 7.5h14"), P("M15 4.5l3 3-3 3"), P("M20 13.5H6"), P("M9 10.5l-3 3 3 3"), HORIZON],
  skattemelding: [P("M6 19V3h12v16"), P("M9 9l2 2 4-4"), P("M9 15h6"), HORIZON],
  arsoppgjor: [P("M6 19v-5"), P("M10 19v-8"), P("M14 19v-6"), P("M18 19V5"), P("M5 9l5-3 4 2 4-4"), HORIZON],
  nyetablering: [
    P("M12 19v-8"),
    P("M12 11C12 7.5 9.5 5 6 5c0 3.5 2.5 6 6 6z"),
    P("M12 13.5c0-3 2-5 5-5 0 3-2 5-5 5z"),
    HORIZON,
  ],
  forretningsforsel: [
    <rect key="a" x="3" y="8" width="18" height="11" pathLength={1} />,
    P("M9 8V5h6v3"),
    P("M3 13h18"),
    HORIZON,
  ],
  radgivning: [P("M3 4h12v8H8l-3 3v-3H3z"), P("M17 7.5h4V15h-2v3l-3-3h-5v-1"), HORIZON],
  telefon: [P("M5 3h4l1.5 4-2 1.5a10 10 0 0 0 5 5l1.5-2 4 1.5v4h-2C10.4 17 5 11.6 5 5z"), HORIZON],
  epost: [<rect key="a" x="3" y="6" width="18" height="13" pathLength={1} />, P("M3 6l9 7 9-7"), HORIZON],
  adresse: [
    P("M12 19s-6-5.4-6-10a6 6 0 0 1 12 0c0 4.6-6 10-6 10z"),
    <circle key="b" cx="12" cy="9" r="2" pathLength={1} />,
    HORIZON,
  ],
  klokke: [<circle key="a" cx="12" cy="10.5" r="6.5" pathLength={1} />, P("M12 6.5v4l3 2"), HORIZON],
  poweroffice: [
    P("M7 16h10.5a3.5 3.5 0 0 0 0-7h-.3A5.5 5.5 0 0 0 6.6 10.2 3 3 0 0 0 7 16z"),
    P("M12 16v-4"),
    HORIZON,
  ],
  integrasjon: [
    <rect key="a" x="3" y="4" width="6" height="6" pathLength={1} />,
    <rect key="b" x="15" y="11" width="6" height="6" pathLength={1} />,
    P("M9 7h3v7h3"),
    HORIZON,
  ],
  mobil: [
    <rect key="a" x="7" y="3" width="10" height="16" pathLength={1} />,
    P("M10.5 5.5h3"),
    P("M10 14v-2"),
    P("M12 14v-4.5"),
    P("M14 14v-3"),
    HORIZON,
  ],
  stilling: [P("M5 19V3h11v16"), P("M16 5l3 1.5V19"), P("M13 11h1"), HORIZON],
  cv: [
    <rect key="a" x="5" y="3" width="14" height="16" pathLength={1} />,
    <circle key="b" cx="12" cy="8.5" r="2" pathLength={1} />,
    P("M8.5 15c0-2 1.5-3 3.5-3s3.5 1 3.5 3"),
    HORIZON,
  ],
  team: [
    <circle key="a" cx="9" cy="8" r="3" pathLength={1} />,
    P("M3 19v-1a6 6 0 0 1 12 0v1"),
    <circle key="b" cx="17" cy="9" r="2.5" pathLength={1} />,
    P("M17 14a4 4 0 0 1 4 4v1"),
    HORIZON,
  ],
  autorisert: [P("M12 3l7 2.5V10c0 4.2-3 7.4-7 9-4-1.6-7-4.8-7-9V5.5z"), P("M9 10.5l2 2 4-4"), HORIZON],
  historie: [<circle key="a" cx="12" cy="12" r="5" pathLength={1} />, P("M12 3v2"), P("M5.6 5.6l1.4 1.4"), P("M18.4 5.6L17 7"), HORIZON],
  /* UI-ikoner (uten horisont) */
  pil: [P("M4 12h15"), P("M14 7l5 5-5 5")],
  "pil-ut": [P("M7 17L17 7"), P("M9 7h8v8")],
  meny: [P("M3 8h18"), P("M3 16h18")],
  lukk: [P("M5 5l14 14"), P("M19 5L5 19")],
  sjekk: [P("M5 12.5l4.5 4.5L19 7.5")],
} satisfies Record<string, ReactElement[]>;

export type IconName = keyof typeof glyphs;

export const iconNames = Object.keys(glyphs) as IconName[];

type Props = Omit<SVGProps<SVGSVGElement>, "name"> & {
  name: IconName;
  size?: number;
  /** Tegn streken på nytt ved hover på selve ikonet (ellers styres det av nærmeste .group) */
  hover?: boolean;
  title?: string;
};

export function FjordIcon({ name, size = 24, hover = false, title, className = "", ...rest }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      strokeWidth={1.25}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      vectorEffect="non-scaling-stroke"
      className={`fl-icon ${hover ? "fl-hover" : ""} ${className}`}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {glyphs[name].map((el, i) => (
        <g key={i}>{el}</g>
      ))}
    </svg>
  );
}
