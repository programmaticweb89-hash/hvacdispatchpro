import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import JsonLd from "@/components/JsonLd";
import { SITE_CONFIG } from "@/lib/site-config";
import { SERVICES_DATA } from "@/lib/services-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `24/7 Furnace & Air Conditioning Repair | ${SITE_CONFIG.name}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: `Licensed central furnace repair, furnace replacement, furnace cleaning, air conditioning repair, and AC replacement across ${SITE_CONFIG.stats.zips} zip codes. Call ${SITE_CONFIG.phoneDisplay} 24/7.`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_CONFIG.name,
    title: `24/7 Central Furnace & Air Conditioning Service | ${SITE_CONFIG.name}`,
    description: `Same-day furnace repair, furnace replacement, furnace cleaning, and central AC service across ${SITE_CONFIG.stats.states}. Call ${SITE_CONFIG.phoneDisplay}.`,
    url: SITE_CONFIG.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `24/7 Furnace & Air Conditioning Service | ${SITE_CONFIG.name}`,
    description: `Central heating and cooling service across ${SITE_CONFIG.stats.zips} zip codes. Call ${SITE_CONFIG.phoneDisplay} 24/7.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phoneE164,
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Central Heating and Air Conditioning Services",
      itemListElement: SERVICES_DATA.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.shortDescription,
          url: `${SITE_CONFIG.url}/services/${s.slug}/`,
        },
      })),
    },
  };

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='18' fill='%230c4a6e'/><text x='50%' y='56%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='800' font-size='52' fill='white'>HP</text></svg>"
        />
        <JsonLd data={orgSchema} />
      </head>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-brand-900 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
