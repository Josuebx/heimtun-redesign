import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { company, contact } from "@/content/site";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["500"], display: "swap" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : company.url);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Regnskapskontor i Tønsberg | ${company.shortName}`,
    template: `%s | ${company.shortName}`,
  },
  description: company.description,
  applicationName: company.shortName,
  keywords: [
    "regnskapskontor Tønsberg",
    "regnskapsfører Tønsberg",
    "autorisert regnskapsfører",
    "regnskap Færder",
    "lønn",
    "årsoppgjør",
    "PowerOffice Go",
    "Vestfold",
  ],
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: company.shortName,
    images: [{ url: "/images/hero-kalkulator.jpg", width: 1920, height: 1280, alt: company.shortName }],
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#F6F4EF",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: company.name,
  url: company.url,
  logo: `${siteUrl}/brand/heimtun-mark.svg`,
  image: `${siteUrl}/images/hero-kalkulator.jpg`,
  telephone: "+47 33 30 19 40",
  email: contact.email,
  foundingDate: String(company.founded),
  areaServed: company.areas,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.visit.street,
    postalCode: contact.visit.postcode,
    addressLocality: contact.visit.city,
    addressCountry: "NO",
  },
  geo: { "@type": "GeoCoordinates", latitude: contact.geo.lat, longitude: contact.geo.lng },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:00",
    },
  ],
  memberOf: { "@type": "Organization", name: "Regnskap Norge" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nb" className={`${manrope.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* Gjør at tekstanimasjoner kun skjuler tekst når JavaScript faktisk kjører */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <Header />
        <main id="innhold" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
