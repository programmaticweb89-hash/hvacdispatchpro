import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/site-config";
import { getAllStates, getStateBySlug } from "@/lib/coverage";
import { SERVICES_DATA } from "@/lib/services-data";
import LocalMapSection from "@/components/LocalMapSection";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return getAllStates().map((s) => ({ state: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { state: string };
}): Metadata {
  const stateData = getStateBySlug(params.state);
  if (!stateData) return {};

  const title = `Furnace & Air Conditioning Repair in ${stateData.name} (${stateData.citiesList.length} Cities)`;
  const description = `24/7 central furnace repair, furnace replacement, furnace cleaning, and central AC service across ${stateData.totalZips.toLocaleString()} zip codes in ${stateData.name}. Call ${SITE_CONFIG.phoneDisplay}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/areas/${stateData.slug}/`,
    },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url: `${SITE_CONFIG.url}/areas/${stateData.slug}/`,
    },
  };
}

export default function StatePage({
  params,
}: {
  params: { state: string };
}) {
  const stateData = getStateBySlug(params.state);
  if (!stateData) notFound();

  const { name, abbr, slug, citiesList, totalZips, climate } = stateData;
  const topCities = citiesList.slice(0, 24);
  const remainingCities = citiesList.slice(24);
  const allStates = getAllStates().filter((s) => s.slug !== slug).slice(0, 12);

  const stateFaqs = [
    {
      q: `How many cities and zip codes do you service in ${name}?`,
      a: `We provide central furnace and air conditioning service across ${totalZips.toLocaleString()} zip codes in ${citiesList.length.toLocaleString()} cities and towns throughout ${name} (${abbr}).`,
    },
    {
      q: `What heating and cooling services are available in ${name}?`,
      a: `Our licensed technicians in ${name} perform six core services: Furnace Repair, Furnace Replacement, Furnace Cleaning, Air Conditioning Repair, AC Replacement, and Air Conditioning Cleaning for central ducted systems.`,
    },
    {
      q: `Do you work on ductless mini-splits or window units in ${name}?`,
      a: `No. Across ${name}, we service central forced-air gas, propane, and electric furnaces and central split-system or packaged air conditioners. We do not service window AC units or ductless mini-splits.`,
    },
    {
      q: `What is the typical winter and summer climate pattern for HVAC equipment in ${name}?`,
      a: `${name} sits in the ${climate.region} (${climate.climateZone} zone), with typical winter lows around ${climate.winterLow} and summer highs in the ${climate.summerHigh}. Most homes rely on ${climate.primaryHeatFuel.toLowerCase()} for heating.`,
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
        name,
        item: `${SITE_CONFIG.url}/areas/${slug}/`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: stateFaqs.map((f) => ({
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
              / <span className="text-white font-semibold">{name}</span>
            </nav>

            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-brand-900 border border-brand-700 text-amber-300 px-3 py-1 rounded-md mb-3">
              {name} ({abbr}) • {totalZips.toLocaleString()} Zip Codes Covered
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Central Furnace &amp; Air Conditioning Service in {name}
            </h1>
            <p className="text-slate-200 text-base sm:text-lg mt-4 leading-relaxed">
              Licensed local HVAC technicians covering {totalZips.toLocaleString()} zip codes across {citiesList.length.toLocaleString()} {name} cities and towns. Call{" "}
              <a
                href={SITE_CONFIG.phoneHref}
                className="font-bold text-amber-300 underline"
              >
                {SITE_CONFIG.phoneDisplay}
              </a>{" "}
              for 24/7 central furnace repair, furnace replacement, furnace cleaning, and central AC service.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6 text-xs sm:text-sm text-slate-200">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Winter lows: {climate.winterLow}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Summer highs: {climate.summerHigh}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Main heat source: {climate.primaryHeatFuel}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>24/7 emergency dispatch across {name}</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-xl border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                {name} Dispatch Desk
              </span>
              <h2 className="text-xl font-extrabold mt-2">
                Schedule Service in {name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Provide your 5-digit {name} zip code on the call for immediate local scheduling and upfront pricing.
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
        {/* Regional Climate & Equipment Context */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Heating &amp; Cooling Equipment Across {name}
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {name} sits in the {climate.region} region with a {climate.climateZone.toLowerCase()} climate. {climate.seasonalSummary}. Because winter lows reach {climate.winterLow} and summer highs hit {climate.summerHigh}, residential central heating and cooling systems in {name} experience heavy seasonal demand.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Most single-family homes in {name} rely on {climate.primaryHeatFuel.toLowerCase()} paired with {climate.commonEquipment.toLowerCase()}. {climate.winterPrepNote}
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-50 rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-extrabold text-slate-900">
              What Breaks Most Often in {name}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {climate.commonBreakdowns.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-accent-600 font-extrabold">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6 Core Services Available in State */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">
            6 Core HVAC Services Available Statewide in {name}
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            All six central furnace and air conditioning services below are dispatched through our 24/7 {name} line at {SITE_CONFIG.phoneDisplay}.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {SERVICES_DATA.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="p-4 rounded-xl bg-slate-50 hover:bg-brand-50 border border-slate-200 transition-colors"
              >
                <span className="text-xs font-bold text-brand-700 uppercase">
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

        {/* Major Cities in State */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Major {name} Cities We Cover ({citiesList.length.toLocaleString()} Total Cities)
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Select your city below to view covered zip codes, local furnace and AC service details, and area maps.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 mt-6">
            {topCities.map((c) => (
              <Link
                key={c.slug}
                href={`/areas/${slug}/${c.slug}/`}
                className="p-3.5 rounded-xl bg-slate-50 hover:bg-brand-50 border border-slate-200 transition-colors"
              >
                <span className="font-extrabold text-slate-900 block text-sm truncate">
                  {c.name}, {abbr}
                </span>
                <span className="text-xs text-slate-500 mt-1 block">
                  {c.zips.length} {c.zips.length === 1 ? "zip code" : "zip codes"}
                </span>
              </Link>
            ))}
          </div>

          {remainingCities.length > 0 && (
            <div className="mt-10 pt-8 border-t border-slate-200">
              <h3 className="text-lg font-extrabold text-slate-900 mb-4">
                More {name} Cities &amp; Towns Served ({remainingCities.length.toLocaleString()})
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 text-xs">
                {remainingCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/areas/${slug}/${c.slug}/`}
                    className="text-slate-700 hover:text-brand-800 hover:underline py-1 truncate"
                  >
                    {c.name} ({c.zips.length})
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Local Map Section */}
        <LocalMapSection
          locationLabel={`${name} (${abbr})`}
          query={`${name}, USA`}
          zipCount={totalZips}
        />

        {/* FAQs */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Frequently Asked Questions About HVAC Service in {name}
          </h2>
          <div className="mt-6 space-y-4">
            {stateFaqs.map((faq, idx) => (
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

        {/* Other States */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-extrabold text-slate-900">
            Explore Other States We Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2.5 mt-4 text-xs">
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
        </section>
      </div>
    </>
  );
}
