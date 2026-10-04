import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/site-config";
import { getCityDetails } from "@/lib/coverage";
import { SERVICES_DATA } from "@/lib/services-data";
import LocalMapSection from "@/components/LocalMapSection";
import JsonLd from "@/components/JsonLd";

export const dynamicParams = true;

export function generateMetadata({
  params,
}: {
  params: { state: string; city: string };
}): Metadata {
  const data = getCityDetails(params.state, params.city);
  if (!data) return {};

  const { city, state } = data;
  const title = `Furnace & AC Repair in ${city.name}, ${state.abbr} (24/7 Local Service)`;
  const description = `Need furnace repair, furnace replacement, furnace cleaning, or central AC repair in ${city.name}, ${state.abbr}? Covering ${city.zips.length} zip codes (${city.zips.slice(0, 3).join(", ")}). Call ${SITE_CONFIG.phoneDisplay} 24/7.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/areas/${state.slug}/${city.slug}/`,
    },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url: `${SITE_CONFIG.url}/areas/${state.slug}/${city.slug}/`,
    },
  };
}

export default function CityPage({
  params,
}: {
  params: { state: string; city: string };
}) {
  const data = getCityDetails(params.state, params.city);
  if (!data) notFound();

  const {
    city,
    state,
    climate,
    local,
    nearbyCities,
    majorStateCities,
    featuredHeating,
    featuredCooling,
  } = data;

  const sampleZips = city.zips.slice(0, 5).join(", ");

  const cityFaqs = [
    {
      q: `Which zip codes in ${city.name}, ${state.abbr} do your HVAC technicians cover?`,
      a: `We cover ${city.zips.length} ${city.zips.length === 1 ? "zip code" : "zip codes"} in ${city.name}, ${state.name}, including ${sampleZips}. Call ${SITE_CONFIG.phoneDisplay} and give your zip code for immediate scheduling.`,
    },
    {
      q: `What central heating and cooling services do you provide in ${city.name}?`,
      a: `Our licensed technicians in ${city.name}, ${state.abbr} perform six core residential services: Furnace Repair, Furnace Replacement, Furnace Cleaning, Air Conditioning Repair, AC Replacement, and Air Conditioning Cleaning.`,
    },
    {
      q: `Do you repair or install ductless mini-splits in ${city.name}?`,
      a: `No. In ${city.name}, ${state.abbr}, we work strictly on residential central ducted furnaces (natural gas, propane, and electric) and central split-system or packaged air conditioners. We do not service window AC units or ductless mini-splits.`,
    },
    {
      q: `Can I get same-day emergency furnace repair or AC repair in ${city.name}, ${state.abbr}?`,
      a: `Yes. Our dispatch desk at ${SITE_CONFIG.phoneDisplay} is open 24 hours a day, 7 days a week. When your central furnace quits on a freezing night or your AC fails in summer heat, we check open technician slots across ${city.name} for same-day service.`,
    },
    {
      q: `How does ${state.name} weather impact furnaces and air conditioners in ${city.name}?`,
      a: `${city.name} sits in the ${local.climateZone.toLowerCase()} band of ${local.region}, with winter lows running ${local.winterLow} and summer highs reaching ${local.summerHigh}. Local systems are sized to a ${local.heatDesignTemp}. Pre-season furnace cleaning in autumn and an annual AC coil cleaning keep both systems reliable through the peak weeks.`,
    },
    {
      q: `Do I get a written price quote before work starts on my ${city.name} home?`,
      a: `Yes. The technician performs a complete diagnostic on your furnace or central air conditioner, explains what failed, and gives you an upfront written quote before starting any repair or replacement.`,
    },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: `${SITE_CONFIG.name} - ${city.name}, ${state.abbr}`,
    url: `${SITE_CONFIG.url}/areas/${state.slug}/${city.slug}/`,
    telephone: SITE_CONFIG.phoneE164,
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: state.name,
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: state.abbr,
      postalCode: city.zips[0],
      addressCountry: "US",
    },
  };

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
        name: state.name,
        item: `${SITE_CONFIG.url}/areas/${state.slug}/`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: `${city.name}, ${state.abbr}`,
        item: `${SITE_CONFIG.url}/areas/${state.slug}/${city.slug}/`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cityFaqs.map((f) => ({
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
      <JsonLd data={[localBusinessSchema, breadcrumbSchema, faqSchema]} />

      {/* Hero */}
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
              <Link href={`/areas/${state.slug}/`} className="hover:underline">
                {state.name}
              </Link>{" "}
              /{" "}
              <span className="text-white font-semibold">
                {city.name}, {state.abbr}
              </span>
            </nav>

            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-brand-900 border border-brand-700 text-amber-300 px-3 py-1 rounded-md mb-3">
              {city.name}, {state.abbr} • {city.zips.length}{" "}
              {city.zips.length === 1 ? "Zip Code" : "Zip Codes"} Covered
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Furnace &amp; Air Conditioning Repair in {city.name}, {state.abbr}
            </h1>
            <p className="text-slate-200 text-base sm:text-lg mt-4 leading-relaxed">
              Is your central furnace blowing cold air or your air conditioner struggling to keep up in {city.name}, {state.name}? Our licensed local HVAC technicians cover all {city.zips.length} {city.zips.length === 1 ? "zip code" : "zip codes"} in {city.name} ({sampleZips}) for 24/7 furnace repair, furnace replacement, furnace cleaning, and central AC service.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6 text-xs sm:text-sm text-slate-200">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>
                  {city.zips.length} covered {city.zips.length === 1 ? "zip code" : "zip codes"} in {city.name}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Licensed &amp; insured {state.name} HVAC technicians</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Central gas/electric furnaces &amp; split AC systems</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Upfront written quote before any work begins</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-xl border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                24/7 {city.name} Dispatch
              </span>
              <h2 className="text-xl font-extrabold mt-2">
                Schedule a Technician in {city.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Have your {city.name} zip code ({city.zips[0]}) ready and describe what your heating or cooling system is doing.
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
        {/* Local Climate & Residential HVAC Context */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Central Heating &amp; Air Conditioning Service in {city.name}, {state.name}
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Homeowners in {city.name}, {state.abbr} sit in the {local.climateZone.toLowerCase()} band of {local.region}. Winter lows here typically run {local.winterLow}, and summer afternoon highs reach {local.summerHigh}. Central equipment across this area is sized against a {local.heatDesignTemp}, and {local.utility} serves as the local utility provider.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Most homes across {city.name} ({sampleZips}) are {local.housingStock.toLowerCase()}, and they rely on {climate.primaryHeatFuel.toLowerCase()} feeding {climate.commonEquipment.toLowerCase()}. When a central furnace ignitor cracks on a freezing night or an outdoor AC capacitor fails during a summer heatwave, waiting days for an appointment is not an option. Our local dispatch line connects your {city.name} address with a licensed technician who carries standard diagnostic instruments and replacement parts on the truck.
            </p>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950">
              <strong>What Fails Most in {local.region}:</strong> {local.localIssue}. {climate.winterPrepNote}
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-extrabold text-slate-900">
              What Homeowners in {city.name}, {state.abbr} Call About Most
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {climate.commonBreakdowns.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-accent-600 font-extrabold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-slate-200">
              <p className="text-xs text-slate-600 font-semibold">
                Need same-day furnace or AC service in {city.name}?
              </p>
              <a
                href={SITE_CONFIG.phoneHref}
                className="mt-2 inline-block text-sm font-extrabold text-brand-800 hover:underline"
              >
                Call 24/7 Dispatch: {SITE_CONFIG.phoneDisplay} →
              </a>
            </div>
          </div>
        </section>

        {/* All 6 Approved Services in This City */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">
            6 Core HVAC Services Available in {city.name}, {state.abbr}
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            We specialize strictly in central ducted furnaces and central air conditioning systems in {city.name}. Every service below is backed by an upfront written quote before work begins.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {SERVICES_DATA.map((s) => (
              <div
                key={s.slug}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold uppercase text-brand-700">
                    {s.category} Service
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 mt-1">
                    {s.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {s.shortDescription}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold">
                  <Link
                    href={`/services/${s.slug}/`}
                    className="text-brand-800 hover:underline"
                  >
                    {s.name} Details →
                  </Link>
                  <a
                    href={SITE_CONFIG.phoneHref}
                    className="text-accent-600 hover:underline"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Heating & Cooling Deep Dives for This City */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              {city.name} Heating Focus
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
              {featuredHeating.name} in {city.name}, {state.abbr}
            </h2>
            <p className="text-sm text-slate-700 mt-3 leading-relaxed">
              {featuredHeating.whatItIs[0]}
            </p>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 mt-5">
              What Our {city.name} Heating Visit Includes:
            </h3>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700">
              {featuredHeating.includedChecklist.slice(0, 6).map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href={`/services/${featuredHeating.slug}/`}
                className="text-sm font-extrabold text-brand-800 hover:underline"
              >
                Explore Full {featuredHeating.name} Checklist &amp; Pricing Notes →
              </Link>
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              {city.name} Cooling Focus
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
              {featuredCooling.name} in {city.name}, {state.abbr}
            </h2>
            <p className="text-sm text-slate-700 mt-3 leading-relaxed">
              {featuredCooling.whatItIs[0]}
            </p>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 mt-5">
              What Our {city.name} Cooling Visit Includes:
            </h3>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700">
              {featuredCooling.includedChecklist.slice(0, 6).map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href={`/services/${featuredCooling.slug}/`}
                className="text-sm font-extrabold text-brand-800 hover:underline"
              >
                Explore Full {featuredCooling.name} Checklist &amp; Pricing Notes →
              </Link>
            </div>
          </section>
        </div>

        {/* Covered Zip Codes in This City */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Zip Codes We Cover in {city.name}, {state.abbr} ({city.zips.length})
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Select your 5-digit {city.name} zip code below to view zip-specific service dispatch details, or mention your zip code when calling{" "}
            <a
              href={SITE_CONFIG.phoneHref}
              className="font-bold text-brand-800 underline"
            >
              {SITE_CONFIG.phoneDisplay}
            </a>
            .
          </p>

          <div className="flex flex-wrap gap-2.5 mt-5">
            {city.zips.map((z) => (
              <Link
                key={z}
                href={`/zip/${z}/`}
                className="px-3.5 py-2 rounded-lg bg-slate-50 hover:bg-brand-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-800 hover:text-brand-800 transition-colors"
              >
                {z} ({city.name})
              </Link>
            ))}
          </div>
        </section>

        {/* Local Google Map Section */}
        <LocalMapSection
          locationLabel={`${city.name}, ${state.abbr}`}
          query={`${city.name}, ${state.abbr} ${city.zips[0]}`}
          zipCount={city.zips.length}
        />

        {/* Nearby Cities in Same State */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Nearby &amp; Related Service Areas in {state.name}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Our {state.name} dispatch network also covers these neighboring communities and metro hubs.
              </p>
            </div>
            <Link
              href={`/areas/${state.slug}/`}
              className="text-sm font-bold text-brand-800 hover:underline shrink-0"
            >
              All {state.cityCount.toLocaleString()} {state.name} Cities →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 text-xs sm:text-sm">
            {nearbyCities.map((nc) => (
              <Link
                key={nc.slug}
                href={`/areas/${state.slug}/${nc.slug}/`}
                className="p-3 rounded-xl bg-slate-50 hover:bg-brand-50 border border-slate-200 font-semibold text-slate-800 truncate"
              >
                {nc.name}, {state.abbr} ({nc.zips.length} zips)
              </Link>
            ))}
          </div>

          {majorStateCities.length > 0 && (
            <div className="mt-6 pt-5 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Major {state.name} Metro Hubs:
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {majorStateCities.map((mc) => (
                  <Link
                    key={mc.slug}
                    href={`/areas/${state.slug}/${mc.slug}/`}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-brand-50 text-slate-700 font-semibold"
                  >
                    {mc.name}, {state.abbr}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* FAQs */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Frequently Asked Questions About HVAC Service in {city.name}, {state.abbr}
          </h2>
          <div className="mt-6 space-y-4">
            {cityFaqs.map((faq, idx) => (
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
