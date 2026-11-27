# heimtun-redesign

Nytt nettsted for **Heimtun Regnskap & Rådgivning AS**, et autorisert regnskapsførerselskap i Tønsberg.
Stil: *Nordic Minimal*: rolig, luftig, tynne linjer, ingen skygger.

**Stack:** Next.js 16 (App Router, Cache Components) · TypeScript · Tailwind CSS 4 · Framer Motion 12

## Kom i gang

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # produksjonsbygg
npm run start      # kjør produksjonsbygget
```

Deploy: repoet er koblet til Vercel (team *box-marketing*). Endringer pushes til grenen `preview`, som gir en fast preview-URL:
`https://heimtun-redesign-git-preview-box-marketing.vercel.app`. `main` er produksjon og oppdateres kun etter godkjenning.

## Sider

| Rute | Side |
| --- | --- |
| `/` | Hjem |
| `/tjenester` | Tjenester (hver tjeneste har et anker, f.eks. `/tjenester#lonn`) |
| `/poweroffice-go` | PowerOffice Go |
| `/om-oss` | Om oss (ansatte på `/om-oss#ansatte`) |
| `/ledige-stillinger` | Ledige stillinger (med egen tom tilstand) |
| `/kontakt-oss` | Kontakt oss (skjema, kart, åpningstider) |
| `/personvern` | Personvernerklæring |
| alt annet | 404 (`app/not-found.tsx`) |

## Redigere tekster: `/content`

All tekst ligger i `/content`. Du trenger ikke røre komponentene for å endre innhold.

| Fil | Innhold |
| --- | --- |
| `content/site.ts` | Firmanavn, telefon, e-post, adresser, åpningstider, **menyene** (header og footer) |
| `content/services.ts` | Tjenestene: tittel, ikon, ingress, brødtekst. Rekkefølgen styrer nummereringen («01 — Regnskap») |
| `content/team.ts` | Ansatte. Legg til `photo: "/images/ansatte/navn.jpg"` (stående 4:5) for å vise bilde i stedet for initialer |
| `content/jobs.ts` | Ledige stillinger. Er listen tom, vises tom tilstand med «Send åpen søknad». Se eksempel i filen |
| `content/pages.ts` | Overskrifter, ingresser og avsnitt for hver side + SEO-titler og -beskrivelser |

Overskrifter deles automatisk i linjer for animasjonen, så du trenger ikke legge inn linjeskift selv.

## Struktur

```
app/                      ruter (én mappe per side), layout, 404, sitemap, robots
components/
  icons/FjordIcon.tsx     «Fjord Line», det egne ikonsettet (SVG, ingen biblioteker)
  motion/RevealText.tsx   overskrifter: linje-for-linje-avduking med maske
  motion/FadeUp.tsx       avsnitt/blokker: fade + 12px opp
  layout/Header.tsx       header + fullskjerms mobilmeny
  layout/Footer.tsx
  ui/                     Button, Section (grid, «01 —»-etiketter), kort, skjema …
content/                  all tekst (se over)
public/brand/             logo (&-merket vektorisert fra originalen), partnerlogoer
public/images/            foto fra dagens nettsted + statisk kart
```

## Designsystem

- **Farger** (`app/globals.css`, `@theme`): papir `#F6F4EF`, blekk `#1C2321`, fjordgrønn `#4E6B5C` (aksent), linjer `#DAD6CC`. Heimtun-rød `#930221` brukes kun i logoen.
- **Typografi:** Manrope 500 (overskrifter, tracking −0.02em) og Inter 17px/1.65 (brødtekst). Ingen tunge vekter.
- **Layout:** 12-kolonners grid, maks 1200px, 1px skillelinjer, foto i 4:5 med rette hjørner, ingen skygger.
- **Animasjoner:**
  - Overskrifter: maskert reveal linje for linje (translateY 100% → 0, 700 ms, ease `[0.22,1,0.36,1]`, 80 ms forskyvning).
  - Avsnitt: fade + 12px opp, 500 ms.
  - Tekstlenker (`ulink`): 1px understrek vokser fra venstre og trekkes ut mot høyre.
  - Knapper (`.btn`): fjordgrønn fyll stiger nedenfra (clip-path), pil +4px, `scale(0.98)` ved klikk.
  - Kort (`.card`): løftes 2px, kanten blir blekk, pilen dukker opp.
  - Ikoner: streken tegnes på nytt (stroke-dashoffset 1 → 0, 600 ms) og blir fjordgrønn ved hover.
  - `prefers-reduced-motion: reduce` slår av alle animasjoner.

### Fjord Line-ikoner

24px, strek 1.25px, rette endestykker, tegnet på en 20px-grid med en horisontlinje (y = 19) som gjennomgående motiv.
Bruk: `<FjordIcon name="regnskap" />`. Legg nye ikoner i `glyphs` i `components/icons/FjordIcon.tsx`, og gi hver form `pathLength={1}` så hover-animasjonen virker.

## Kontaktskjema

Skjemaet validerer i nettleseren og åpner brukerens e-postprogram med meldingen ferdig utfylt (`mailto:`), så det trengs ingen server.
Skal meldinger sendes direkte, kobler du `onSubmit` i `components/ui/ContactForm.tsx` til en e-posttjeneste (for eksempel Resend via en Route Handler) og oppdaterer teksten i `content/pages.ts` (`kontakt.form`) og personvernerklæringen.

## Før lansering

- Kvalitetssikre personvernerklæringen (`content/pages.ts` → `personvern`) med kunden.
- Legg inn bilder av de ansatte (valgfritt).
- Sett `NEXT_PUBLIC_SITE_URL=https://heimtun-rr.no` i Vercel når domenet flyttes.
- Kartet (`public/images/kart-kilengaten.jpg`) er laget av OpenStreetMap-fliser (© OpenStreetMap-bidragsytere).
