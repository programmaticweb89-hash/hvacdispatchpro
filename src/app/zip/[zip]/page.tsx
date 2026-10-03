import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/site-config";
import { getZipDetails } from "@/lib/coverage";
import { SERVICES_DATA } from "@/lib/services-data";
import LocalMapSection from "@/components/LocalMapSection";
import JsonLd from "@/components/JsonLd";

export const dynamicParams = true;

export function generateMetadata({
  params,
}: {
  params: { zip: string };
}): Metadata {
  const data = getZipDetails(params.zip);
  if (!data) return {};

  const title = `HVAC, Furnace & AC Repair in ${data.zip} (${data.cityName}, ${data.stateAbbr})`;
  const description = `24/7 central furnace repair, furnace replacement, furnace cleaning, and central AC service in zip code ${data.zip} (${data.cityName}, ${data.stateAbbr}). Call ${SITE_CONFIG.phoneDisplay}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/zip/${data.zip}/`,
    },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url: `${SITE_CONFIG.url}/zip/${data.zip}/`,
    },
  };
}

export default function ZipPage({
  params,
}: {
  params: { zip: string };
}) {
  const data = getZipDetails(params.zip);
  if (!data) notFound();

  const {
    zip,
    cityName,
    citySlug,
    stateName,
    stateSlug,
    stateAbbr,
    siblingZips,
    nearbyCities,
    climate,
  } = data;

  const zipFaqs = [
    {
      q: `Is zip code ${zip} in ${cityName}, ${stateAbbr} covered for 24/7 HVAC service?`,
      a: `Yes. Zip code ${zip} in ${cityName}, ${stateName} is an active coverage area for central furnace repair, furnace replacement, furnace cleaning, air conditioning repair, AC replacement, and AC cleaning. Call ${SITE_CONFIG.phoneDisplay} and give zip code ${zip} to schedule.`,
    },
    {
      q: `What heating and cooling equipment do you service in ${zip}?`,
      a: `In zip code ${zip} (${cityName}, ${stateAbbr}), we service residential ducted central gas furnaces, propane furnaces, electric furnaces, and central split-system or packaged air conditioners. We do not service window AC units or ductless mini-splits.`,
    },
    {
      q: `How cold does it get in ${zip} (${cityName}, ${stateAbbr}) during winter?`,
      a: `Homes in ${zip} experience typical ${stateName} winter lows around ${climate.winterLow} and summer highs in the ${climate.summerHigh}. Most homes in the ${zip} area rely on ${climate.primaryHeatFuel.toLowerCase()} for central heating.`,
    },
    {
      q: `Do you provide upfront written quotes in zip code ${zip}?`,
      a: `Yes. Before turning a wrench on your furnace or central air conditioner in ${zip}, the licensed technician completes a full system diagnostic and provides a straightforward written quote for your approval.`,
    },
  ];

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
      {
        "@type": "ListItem",
        position: 3,
        name: stateName,
        item: `${SITE_CONFIG.url}/areas/${stateSlug}/`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: `${cityName}, ${stateAbbr}`,
        item: `${SITE_CONFIG.url}/areas/${stateSlug}/${citySlug}/`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: `Zip ${zip}`,
        item: `${SITE_CONFIG.url}/zip/${zip}/`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: zipFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, faqSchema]} />

      <section className="bg-brand-950 text-white py-14 px-4 border-b border-brand-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <nav aria-label="Breadcrumb" className="text-xs text-slate-300 mb-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/areas/" className="hover:underline">
                Service Areas
              </Link>{" "}
              /{" "}
              <Link href={`/areas/${stateSlug}/`} className="hover:underline">
                {stateName}
              </Link>{" "}
              /{" "}
              <Link
                href={`/areas/${stateSlug}/${citySlug}/`}
                className="hover:underline"
              >
                {cityName}, {stateAbbr}
              </Link>{" "}
              / <span className="text-white font-semibold">Zip {zip}</span>
            </nav>

            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-brand-900 border border-brand-700 text-amber-300 px-3 py-1 rounded-md mb-3">
              Zip Code {zip} • {cityName}, {stateAbbr}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Furnace &amp; Air Conditioning Repair in {zip} ({cityName}, {stateAbbr})
            </h1>
            <p className="text-slate-200 text-base sm:text-lg mt-4 leading-relaxed">
              Need fast central heating or cooling service in the {zip} zip code of {cityName}, {stateName}? Our licensed local HVAC technicians dispatch across {zip} 24 hours a day for furnace repair, furnace replacement, furnace cleaning, air conditioning repair, AC replacement, and AC cleaning.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-xl border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                Zip {zip} Active Coverage
              </span>
              <h2 className="text-xl font-extrabold mt-2">
                Dispatch for {zip} ({cityName})
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Say zip code <strong>{zip}</strong> on the call and tell us what your central furnace or air conditioner is doing.
              </p>
              <a
                href={SITE_CONFIG.phoneHref}
                className="mt-5 block w-full text-center bg-accent-600 hover:bg-accent-700 text-white font-extrabold text-lg py-4 rounded-xl shadow transition-colors"
              >
                Call {SITE_CONFIG.phoneDisplay}
              </a>
              <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">
                {SITE_CONFIG.equipmentPolicy}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Zip Code Quick Facts Table & Local Summary */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Central HVAC Service Coverage for Zip Code {zip}
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Zip code {zip} is located in{" "}
              <Link
                href={`/areas/${stateSlug}/${citySlug}/`}
                className="font-bold text-brand-800 underline"
              >
                {cityName}, {stateName}
              </Link>
              . Our dispatch system routes service calls directly by 5-digit zip code rather than a rough radius, ensuring the technician assigned to your call actively services {zip} and neighboring {cityName} neighborhoods.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Homes in {zip} experience {stateName}&apos;s {climate.climateZone.toLowerCase()} climate ({climate.seasonalSummary.toLowerCase()}). Most residences in {zip} operate {climate.commonEquipment.toLowerCase()} fueled by {climate.primaryHeatFuel.toLowerCase()}. {climate.winterPrepNote}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-slate-50">
                    <th className="p-3.5 font-bold text-slate-700">Zip Code</th>
                    <td className="p-3.5 font-extrabold text-slate-900">{zip}</td>
                  </tr>
                  <tr>
                    <th className="p-3.5 font-bold text-slate-700">Primary City</th>
                    <td className="p-3.5 font-bold">
                      <Link
                        href={`/areas/${stateSlug}/${citySlug}/`}
                        className="text-brand-800 hover:underline"
                      >
                        {cityName}, {stateAbbr}
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <th className="p-3.5 font-bold text-slate-700">State</th>
                    <td className="p-3.5 font-bold">
                      <Link
                        href={`/areas/${stateSlug}/`}
                        className="text-brand-800 hover:underline"
                      >
                        {stateName} ({stateAbbr})
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th className="p-3.5 font-bold text-slate-700">Winter Lows</th>
                    <td className="p-3.5 text-slate-800">{climate.winterLow}</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <th className="p-3.5 font-bold text-slate-700">Summer Highs</th>
                    <td className="p-3.5 text-slate-800">{climate.summerHigh}</td>
                  </tr>
                  <tr>
                    <th className="p-3.5 font-bold text-slate-700">Main Heat Source</th>
                    <td className="p-3.5 text-slate-800">{climate.primaryHeatFuel}</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <th className="p-3.5 font-bold text-slate-700">Dispatch Hours</th>
                    <td className="p-3.5 font-semibold text-emerald-700">
                      Open 24 Hours, 7 Days a Week
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 6 Core Services in Zip Code */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">
            What We Service in {zip} ({cityName}, {stateAbbr})
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            All six central heating and cooling services below are available in zip code {zip}. Call {SITE_CONFIG.phoneDisplay} for upfront diagnostic and repair pricing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {SERVICES_DATA.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="p-4 rounded-xl bg-slate-50 hover:bg-brand-50 border border-slate-200 transition-colors"
              >
                <span className="text-xs font-bold uppercase text-brand-700">
                  {s.category}
                </span>
                <span className="font-extrabold text-slate-900 block text-base mt-0.5">
                  {s.name}
                </span>
                <span className="text-xs text-slate-600 mt-1 block">
                  {s.shortDescription}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Local Map Section for Zip Code */}
        <LocalMapSection
          locationLabel={`Zip Code ${zip} (${cityName}, ${stateAbbr})`}
          query={`${zip}, ${cityName}, ${stateAbbr}, USA`}
        />

        {/* Neighboring Zip Codes & Nearby Cities */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Nearby Zip Codes &amp; Communities Around {zip}
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Technicians covering {zip} in {cityName} also dispatch to these adjacent zip codes and nearby {stateName} cities:
          </p>

          {siblingZips.length > 0 && (
            <div className="mt-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Adjacent Covered Zip Codes:
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {siblingZips.map((sz) => (
                  <Link
                    key={sz}
                    href={`/zip/${sz}/`}
                    className="px-3.5 py-2 rounded-lg bg-slate-50 hover:bg-brand-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-800"
                  >
                    Zip {sz}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {nearbyCities.length > 0 && (
            <div className="mt-6 pt-5 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Other {stateName} Cities We Serve:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 text-xs">
                {nearbyCities.map((nc) => (
                  <Link
                    key={nc.slug}
                    href={`/areas/${stateSlug}/${nc.slug}/`}
                    className="p-2.5 rounded-lg bg-slate-50 hover:bg-brand-50 border border-slate-200 font-semibold text-slate-800 truncate"
                  >
                    {nc.name}, {stateAbbr}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* FAQs */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Questions About Furnace &amp; AC Service in {zip}
          </h2>
          <div className="mt-6 space-y-4">
            {zipFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200"
              >
                <h3 className="font-extrabold text-slate-900 text-base">
                  {faq.q}
                </h3>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
