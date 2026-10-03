import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { getPriorityCities, getAllStates } from "@/lib/coverage";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Priority Metro Service Markets & High-Demand Zip Codes",
  description: `Direct directory of our highest-demand metropolitan furnace repair, furnace replacement, and central air conditioning service markets across the United States. Call ${SITE_CONFIG.phoneDisplay}.`,
  alternates: {
    canonical: "/priority-markets/",
  },
};

export default function PriorityMarketsPage() {
  const priorityCities = getPriorityCities(160);
  const allStates = getAllStates();

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
        name: "Priority Metro Markets",
        item: `${SITE_CONFIG.url}/priority-markets/`,
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
            / <span className="text-white font-semibold">Priority Metro Markets</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Priority Metropolitan HVAC Dispatch Directory
          </h1>
          <p className="text-slate-200 text-base sm:text-lg mt-4 max-w-3xl leading-relaxed">
            Fast-track directory of our highest-demand cities and primary residential zip codes for 24/7 central furnace repair, furnace replacement, furnace cleaning, and central air conditioning service.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Top 160 High-Demand Cities &amp; Primary Zip Codes
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Click any city or primary zip code below to view local heating and cooling service details, or call{" "}
            <a href={SITE_CONFIG.phoneHref} className="font-bold text-brand-800 underline">
              {SITE_CONFIG.phoneDisplay}
            </a>{" "}
            for immediate dispatch.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 mt-6">
            {priorityCities.map((c) => (
              <div
                key={`${c.stateSlug}-${c.citySlug}`}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2"
              >
                <div className="min-w-0">
                  <Link
                    href={`/areas/${c.stateSlug}/${c.citySlug}/`}
                    className="font-extrabold text-slate-900 hover:text-brand-700 text-sm block truncate"
                  >
                    {c.cityName}, {c.stateAbbr}
                  </Link>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    {c.zipCount} {c.zipCount === 1 ? "zip" : "zips"} covered
                  </span>
                </div>
                <Link
                  href={`/zip/${c.sampleZip}/`}
                  className="text-xs font-bold bg-white hover:bg-brand-50 text-brand-800 border border-slate-200 px-2.5 py-1.5 rounded-lg shrink-0"
                >
                  Zip {c.sampleZip}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Browse Complete State Directories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2.5 mt-6 text-xs">
            {allStates.map((st) => (
              <Link
                key={st.slug}
                href={`/areas/${st.slug}/`}
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-brand-50 border border-slate-200 font-semibold text-slate-800 truncate"
              >
                {st.name} ({st.abbr})
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
