import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { getAllStates, getPriorityCities } from "@/lib/coverage";
import { SERVICES_DATA } from "@/lib/services-data";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "HVAC Service Areas Across 50 States & DC (By City & Zip Code)",
  description: `Browse our central furnace and air conditioning service areas across ${SITE_CONFIG.stats.zips} zip codes and ${SITE_CONFIG.stats.cities} cities in ${SITE_CONFIG.stats.states}. Call ${SITE_CONFIG.phoneDisplay} 24/7.`,
  alternates: {
    canonical: "/areas/",
  },
};

export default function AreasHubPage() {
  const states = getAllStates();
  const priorityCities = getPriorityCities(30);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_CONFIG.url}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: `${SITE_CONFIG.url}/areas/`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <section className="bg-brand-950 text-white py-14 px-4 border-b border-brand-900">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-300 mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / <span className="text-white font-semibold">Service Areas</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Central Furnace &amp; Air Conditioning Service Areas
          </h1>
          <p className="text-slate-200 text-base sm:text-lg mt-4 max-w-3xl leading-relaxed">
            Our local technicians service {SITE_CONFIG.stats.zips} zip codes in {SITE_CONFIG.stats.cities} cities and towns across {SITE_CONFIG.stats.states}. Select your state below to view covered cities, zip codes, and regional heating and cooling information.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={SITE_CONFIG.phoneHref}
              className="bg-accent-600 hover:bg-accent-700 text-white font-extrabold text-base px-6 py-3.5 rounded-xl shadow transition-colors"
            >
              Call 24/7 Dispatch: {SITE_CONFIG.phoneDisplay}
            </a>
            <Link
              href="/priority-markets/"
              className="bg-brand-800 hover:bg-brand-700 border border-brand-700 text-white font-bold text-base px-6 py-3.5 rounded-xl transition-colors"
            >
              View High-Demand Metro Directory
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Select Your State ({states.length} Jurisdictions Covered)
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-2">
          Every state page includes local heating and cooling breakdown patterns, seasonal winter and summer preparation tips, and direct links to every covered city and zip code.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {states.map((st) => (
            <Link
              key={st.slug}
              href={`/areas/${st.slug}/`}
              className="bg-white rounded-xl border border-slate-200 p-5 hover:border-brand-600 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-extrabold text-slate-900 group-hover:text-brand-700">
                  {st.name}
                </span>
                <span className="text-xs font-bold bg-brand-50 text-brand-800 border border-brand-200 px-2.5 py-0.5 rounded">
                  {st.abbr}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-2">
                {st.cityCount.toLocaleString()} {st.cityCount === 1 ? "city" : "cities"} •{" "}
                {st.zipCount.toLocaleString()} {st.zipCount === 1 ? "zip code" : "zip codes"}
              </p>
            </Link>
          ))}
        </div>

        {/* High-Demand Priority Cities */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Top Metro Dispatch Hubs
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Direct links to our busiest metropolitan furnace and air conditioning service areas.
              </p>
            </div>
            <Link
              href="/priority-markets/"
              className="text-sm font-bold text-brand-800 hover:underline"
            >
              View Complete Priority Metro List →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-xs">
            {priorityCities.map((c) => (
              <Link
                key={`${c.stateSlug}-${c.citySlug}`}
                href={`/areas/${c.stateSlug}/${c.citySlug}/`}
                className="p-3 rounded-lg bg-slate-50 hover:bg-brand-50 border border-slate-200"
              >
                <span className="font-bold text-slate-900 block truncate">
                  {c.cityName}, {c.stateAbbr}
                </span>
                <span className="text-slate-500 mt-0.5 block">
                  {c.zipCount} zip codes
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Services Available Nationwide */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">
            6 Core Services Dispatched Nationwide
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {SERVICES_DATA.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="p-4 rounded-xl bg-slate-50 hover:bg-brand-50 border border-slate-200"
              >
                <span className="font-extrabold text-slate-900 block">
                  {s.name}
                </span>
                <span className="text-xs text-slate-600 mt-1 block">
                  {s.heroTagline}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
