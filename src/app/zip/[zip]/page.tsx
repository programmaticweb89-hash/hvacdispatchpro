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

  const title = `Furnace & Air Conditioning Repair in ${data.zip} (${data.cityName}, ${data.stateAbbr})`;
  const description = `Central furnace repair, furnace replacement, furnace cleaning, and central AC service in zip code ${data.zip}, ${data.cityName}, ${data.stateAbbr}. ${data.local.climateZone} climate, ${data.local.winterLow} winter lows. Call ${SITE_CONFIG.phoneDisplay}.`;

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
    local,
    buildingCount,
  } = data;

  const neighborList =
    siblingZips.length > 0 ? siblingZips.slice(0, 5).join(", ") : "";

  const zipFaqs = [
    {
      q: `Is zip code ${zip} covered for 24 hour furnace and AC service?`,
      a: `Yes. Zip code ${zip} in ${cityName}, ${stateAbbr} is active coverage for central furnace repair, furnace replacement, furnace cleaning, air conditioning repair, AC replacement, and air conditioning cleaning. Call ${SITE_CONFIG.phoneDisplay} and state zip code ${zip} so the call routes to a technician already working ${local.region}.`,
    },
    {
      q: `What heating and cooling equipment do you service in ${zip}?`,
      a: `We service residential central ducted systems only: gas, propane, and electric furnaces plus central split-system and packaged air conditioners. The housing here is mostly ${local.housingStock.toLowerCase()}, so most calls in ${zip} are forced-air furnaces paired with a split AC. We do not service ductless mini-splits or portable window units.`,
    },
    {
      q: `What climate does zip code ${zip} fall in?`,
      a: `Zip code ${zip} sits in the ${local.climateZone.toLowerCase()} band of ${local.region}. Winter lows typically run ${local.winterLow}, and summer highs reach ${local.summerHigh}. Local equipment is sized to a ${local.heatDesignTemp}. Most homes around here are heated with ${local.utility} as the utility provider.`,
    },
    {
      q: `Why do central systems fail in ${local.region}?`,
      a: `The most common failure we see across ${local.region} is ${local.localIssue.toLowerCase()}. That is why a pre-season inspection on a ${zip} system focuses on the parts this climate punishes hardest, not a generic checklist.`,
    },
    {
      q: `Do you charge for a diagnostic visit in ${zip}?`,
      a: `The technician completes a full system diagnostic on arrival, then hands you a written quote before any repair begins. You approve the number before work starts. No repair happens in ${zip} without your written go-ahead.`,
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Central Furnace and Air Conditioning Service in Zip ${zip}`,
    serviceType: "Furnace and central air conditioning repair, replacement, and cleaning",
    areaServed: {
      "@type": "PostalCodeSpecification",
      postalCode: zip,
      address: {
        "@type": "PostalAddress",
        addressLocality: cityName,
        addressRegion: stateAbbr,
        addressCountry: "US",
      },
    },
    provider: {
      "@type": "HVACBusiness",
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phoneE164,
      url: `${SITE_CONFIG.url}/`,
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />

      <section className="bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <nav className="text-xs text-slate-300 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-1.5">/</span>
            <Link href="/areas/" className="hover:text-white">Service Areas</Link>
            <span className="mx-1.5">/</span>
            <Link href={`/areas/${stateSlug}/`} className="hover:text-white">{stateName}</Link>
            <span className="mx-1.5">/</span>
            <Link href={`/areas/${stateSlug}/${citySlug}/`} className="hover:text-white">{cityName}</Link>
            <span className="mx-1.5">/</span>
            <span className="text-slate-400">Zip {zip}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <span className="inline-block text-xs font-bold uppercase tracking-wider bg-white/10 text-emerald-300 px-3 py-1 rounded mb-3">
                {local.region}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Furnace and Air Conditioning Service in {zip}
              </h1>
              <p className="text-slate-200 text-base sm:text-lg mt-4 leading-relaxed">
                Zip code {zip} sits in {cityName}, {stateName}, in the {local.climateZone.toLowerCase()} part of {local.region}. Technicians covering this zip dispatch around the clock for central furnace repair, furnace replacement, furnace cleaning, air conditioning repair, AC replacement, and air conditioning cleaning.
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
                  Give zip code <strong>{zip}</strong> when the call connects and describe what the {local.region} technician will be looking at: no cooling, no heat, short cycling, or a system that never catches up.
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
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Region specific climate and equipment section */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">
            How {local.region} Weather Loads a System in {zip}
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-4">
            The {local.climateZone.toLowerCase()} climate that covers zip {zip} runs winter lows of {local.winterLow} and summer highs of {local.summerHigh}. Central equipment installed around {cityName} and the rest of {local.region} is sized against a {local.heatDesignTemp}, which is the number that decides whether a furnace keeps up on the coldest night of the year or falls behind and runs nonstop.
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-4">
            Housing stock shapes the repair pattern just as much as the weather. Most of the homes in and around {zip} are {local.housingStock.toLowerCase()}. That construction type is the reason service calls across {local.region} tend to look the same year after year.
          </p>
          <div className="mt-6 p-5 rounded-xl bg-amber-50 border border-amber-200">
            <h3 className="font-extrabold text-amber-900 text-base">
              The failure we see most often in {local.region}
            </h3>
            <p className="text-sm text-amber-900 mt-2 leading-relaxed">
              {local.localIssue}. If you are booking service in {zip}, this is the first thing the technician inspects, because a system that survived last season is not proof it will survive this one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Local Utility Provider
              </h3>
              <p className="text-sm font-bold text-slate-900 mt-1.5">{local.utility}</p>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Rebates and efficiency programs for furnace and AC replacement in {local.region} are administered here, so replace equipment with the current program terms in hand.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Service Density in {cityName}
              </h3>
              <p className="text-sm font-bold text-slate-900 mt-1.5">
                {buildingCount} covered zip {buildingCount === 1 ? "code" : "codes"} in this city
              </p>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Dispatch routes by 5-digit zip rather than a radius, so the technician assigned to {zip} already works the surrounding streets and can reach the address without a cross-zone drive.
              </p>
            </div>
          </div>
        </section>

        {/* Zip fact table */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Zip Code {zip} Service Profile
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Zip {zip} falls inside{" "}
              <Link
                href={`/areas/${stateSlug}/${citySlug}/`}
                className="font-bold text-brand-800 underline"
              >
                {cityName}, {stateName}
              </Link>
              , in the {local.region} service zone. The table beside this text lists the numbers that matter when a technician sizes or diagnoses a system at a {zip} address.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {neighborList
                ? `Adjacent covered zips ${neighborList} share the same ${local.climateZone.toLowerCase()} load profile, so the equipment recommendations below apply to the whole cluster, not just ${zip}.`
                : `Equipment recommendations for ${zip} follow the ${local.climateZone.toLowerCase()} load profile for ${local.region}.`}
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
                    <th className="p-3.5 font-bold text-slate-700">Region</th>
                    <td className="p-3.5 font-bold text-slate-900">{local.region}</td>
                  </tr>
                  <tr className="bg-slate-50">
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
                  <tr>
                    <th className="p-3.5 font-bold text-slate-700">Climate Band</th>
                    <td className="p-3.5 text-slate-800">{local.climateZone}</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <th className="p-3.5 font-bold text-slate-700">Winter Lows</th>
                    <td className="p-3.5 text-slate-800">{local.winterLow}</td>
                  </tr>
                  <tr>
                    <th className="p-3.5 font-bold text-slate-700">Summer Highs</th>
                    <td className="p-3.5 text-slate-800">{local.summerHigh}</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <th className="p-3.5 font-bold text-slate-700">Heating Design Temp</th>
                    <td className="p-3.5 text-slate-800">{local.heatDesignTemp}</td>
                  </tr>
                  <tr>
                    <th className="p-3.5 font-bold text-slate-700">Utility Provider</th>
                    <td className="p-3.5 text-slate-800">{local.utility}</td>
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

        {/* Services */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Book Work in {zip} or in a Neighboring Zip
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Pick the job you need and the detail page explains what the visit covers. {local.region} technicians carry the parts for these calls on the truck, so most {zip} repairs finish in one trip.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
            {SERVICES_DATA.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="p-3.5 rounded-xl bg-slate-50 hover:bg-brand-50 border border-slate-200 transition-colors text-center"
              >
                <span className="text-[10px] font-bold uppercase text-brand-700 block">
                  {s.category}
                </span>
                <span className="font-extrabold text-slate-900 block text-sm mt-1 leading-snug">
                  {s.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <LocalMapSection
          locationLabel={`Zip Code ${zip} (${cityName}, ${stateAbbr})`}
          query={`${zip}, ${cityName}, ${stateAbbr}, USA`}
        />

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Zip Codes and Cities Adjacent to {zip}
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            These neighboring zips and {stateName} cities sit inside the same {local.region} dispatch zone, which is why a technician already working {zip} can often add a nearby same-day slot.
          </p>

          {siblingZips.length > 0 && (
            <div className="mt-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Adjacent Covered Zip Codes
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
                Other {stateName} Cities We Serve
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

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Questions About HVAC Service in {zip}
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
