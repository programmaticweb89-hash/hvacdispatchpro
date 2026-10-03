import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { SERVICES_DATA } from "@/lib/services-data";
import { getTopStatesByCoverage } from "@/lib/coverage";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Central Furnace & Air Conditioning Services (24/7 Dispatch)",
  description: `Explore our 6 residential HVAC services: Furnace Repair, Furnace Replacement, Furnace Cleaning, Air Conditioning Repair, AC Replacement, and AC Cleaning. Call ${SITE_CONFIG.phoneDisplay}.`,
  alternates: {
    canonical: "/services/",
  },
};

export default function ServicesHubPage() {
  const topStates = getTopStatesByCoverage(16);

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
        name: "Services",
        item: `${SITE_CONFIG.url}/services/`,
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
            / <span className="text-white font-semibold">Services</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Residential Central Furnace &amp; Air Conditioning Services
          </h1>
          <p className="text-slate-200 text-base sm:text-lg mt-4 max-w-3xl leading-relaxed">
            Our licensed technicians specialize in six core services for central ducted heating and air conditioning equipment across {SITE_CONFIG.stats.zips} zip codes. Call{" "}
            <a href={SITE_CONFIG.phoneHref} className="font-bold text-amber-300 underline">
              {SITE_CONFIG.phoneDisplay}
            </a>{" "}
            for 24/7 local service and upfront pricing.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-amber-950 mb-10">
          <strong>Equipment Service Scope:</strong> {SITE_CONFIG.equipmentPolicy}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <article
              key={service.slug}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-md ${
                      service.category === "Heating"
                        ? "bg-amber-100 text-amber-900"
                        : "bg-sky-100 text-sky-900"
                    }`}
                  >
                    {service.category} Service
                  </span>
                  <a
                    href={SITE_CONFIG.phoneHref}
                    className="text-xs font-bold text-brand-800 hover:underline"
                  >
                    Dispatch: {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>

                <h2 className="text-2xl font-extrabold text-slate-900">
                  <Link
                    href={`/services/${service.slug}/`}
                    className="hover:text-brand-700"
                  >
                    {service.name}
                  </Link>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                  {service.shortDescription}
                </p>

                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-5 mb-2">
                  Common Symptoms We Fix:
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {service.problemsSolved.slice(0, 4).map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-brand-700 font-bold">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={`/services/${service.slug}/`}
                  className="bg-brand-900 hover:bg-brand-800 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
                >
                  Read Full {service.name} Guide →
                </Link>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="bg-accent-600 hover:bg-accent-700 text-white font-extrabold text-sm px-5 py-3 rounded-xl transition-colors"
                >
                  Call {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Find Heating &amp; Air Conditioning Service in Your State
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            All six central furnace and AC services are available across our nationwide service network. Select a state below or view all 50 states.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 text-sm">
            {topStates.map((st) => (
              <Link
                key={st.slug}
                href={`/areas/${st.slug}/`}
                className="p-3 rounded-lg bg-slate-50 hover:bg-brand-50 border border-slate-200 font-semibold text-slate-800"
              >
                {st.name} ({st.zipCount} zips)
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/areas/"
              className="text-sm font-extrabold text-brand-800 hover:underline"
            >
              Browse All 50 States &amp; DC →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
