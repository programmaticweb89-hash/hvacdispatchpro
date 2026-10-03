import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { SERVICES_DATA } from "@/lib/services-data";
import { getTopStatesByCoverage, getPriorityCities } from "@/lib/coverage";
import JsonLd from "@/components/JsonLd";

export default function HomePage() {
  const topStates = getTopStatesByCoverage(16);
  const priorityCities = getPriorityCities(24);

  const homeFaqs = [
    {
      q: "What types of heating and cooling equipment do you service?",
      a: "We service residential central forced-air gas furnaces, propane furnaces, electric furnaces, and central split-system or packaged air conditioners. We do not service portable window AC units or ductless mini-split systems.",
    },
    {
      q: "Are your technicians available 24 hours a day for no-heat emergencies?",
      a: "Yes. Our dispatch line at (855) 734-0279 operates 24 hours a day, 7 days a week, including weekends and holidays, for emergency furnace repair, furnace replacement, and central AC breakdowns.",
    },
    {
      q: "How do I know if my zip code is in your service area?",
      a: "We cover 22,152 zip codes across 12,922 cities in 50 states and Washington, DC. You can browse your state and city on our website or call (855) 734-0279 with your 5-digit zip code for immediate confirmation.",
    },
    {
      q: "Do I get a written price before repair or replacement work starts?",
      a: "Always. The technician inspects your central furnace or air conditioner, explains the exact mechanical issue, and gives you a clear upfront quote in writing before performing any repair or installation.",
    },
    {
      q: "When should I book my pre-winter furnace cleaning?",
      a: "October and November are the ideal months to schedule a professional furnace cleaning and combustion check. Cleaning burners, flame sensors, and blower wheels in autumn stops over 80 percent of sudden winter no-heat lockouts.",
    },
    {
      q: "How do I decide between repairing my old unit and replacing it?",
      a: "If your central furnace or AC is under 12 years old and needs a common part like an ignitor, flame sensor, or run capacitor, repair is almost always the right move. If the unit is over 15 years old, has a cracked heat exchanger, or needs a compressor or motor costing nearly half the price of a new system, replacement usually saves more money.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((f) => ({
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
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="bg-brand-950 text-white py-14 sm:py-20 px-4 border-b border-brand-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-brand-900/90 border border-brand-700 text-amber-300 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full mb-5">
              <span>Winter Heating &amp; Central Cooling Dispatch</span>
              <span>•</span>
              <span>{SITE_CONFIG.stats.zips} Zip Codes</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              24/7 Central Furnace &amp; Air Conditioning Service Near You
            </h1>
            <p className="text-slate-200 text-base sm:text-lg mt-5 leading-relaxed max-w-2xl">
              When your central furnace stops heating or your air conditioner blows warm air, call one number for fast local service. Our licensed HVAC technicians handle furnace repair, furnace replacement, furnace cleaning, and central AC service with upfront written pricing.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-sm text-slate-200 font-medium">
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                  ✓
                </span>
                <span>Licensed &amp; Insured Local HVAC Techs</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                  ✓
                </span>
                <span>Same-Day Emergency Dispatch 24/7</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                  ✓
                </span>
                <span>Central Forced-Air Furnaces &amp; Central AC</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                  ✓
                </span>
                <span>Upfront Written Quote Before Work Starts</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={SITE_CONFIG.phoneHref}
                className="w-full sm:w-auto text-center bg-accent-600 hover:bg-accent-700 text-white font-extrabold text-lg px-7 py-4 rounded-xl shadow-lg transition-colors"
              >
                Call Now: {SITE_CONFIG.phoneDisplay}
              </a>
              <Link
                href="/areas/"
                className="w-full sm:w-auto text-center bg-brand-800 hover:bg-brand-700 border border-brand-700 text-white font-bold text-base px-6 py-4 rounded-xl transition-colors"
              >
                Check Your City or Zip Code
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                    Live Dispatch Desk
                  </span>
                  <h2 className="text-xl font-extrabold text-slate-900 mt-2">
                    Schedule a Local HVAC Technician
                  </h2>
                </div>
                <span className="text-2xl font-extrabold text-brand-900">24/7</span>
              </div>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Have your 5-digit zip code ready when you call. We check technician availability in your area and dispatch for all six core central HVAC services:
              </p>

              <div className="grid grid-cols-2 gap-2.5 mt-4 text-xs font-bold text-slate-800">
                <Link
                  href="/services/furnace-repair/"
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-brand-50 border border-slate-200 transition-colors"
                >
                  🔥 Furnace Repair
                </Link>
                <Link
                  href="/services/furnace-replacement/"
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-brand-50 border border-slate-200 transition-colors"
                >
                  🏠 Furnace Replacement
                </Link>
                <Link
                  href="/services/furnace-cleaning/"
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-brand-50 border border-slate-200 transition-colors"
                >
                  🧹 Furnace Cleaning
                </Link>
                <Link
                  href="/services/air-conditioning-repair/"
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-brand-50 border border-slate-200 transition-colors"
                >
                  ❄️ AC Repair
                </Link>
                <Link
                  href="/services/ac-replacement/"
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-brand-50 border border-slate-200 transition-colors"
                >
                  ⚡ AC Replacement
                </Link>
                <Link
                  href="/services/air-conditioning-cleaning/"
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-brand-50 border border-slate-200 transition-colors"
                >
                  💧 AC Cleaning
                </Link>
              </div>

              <a
                href={SITE_CONFIG.phoneHref}
                className="mt-6 block w-full text-center bg-accent-600 hover:bg-accent-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-md transition-colors"
              >
                Tap to Call {SITE_CONFIG.phoneDisplay}
              </a>

              <p className="text-xs text-slate-500 text-center mt-3 leading-relaxed">
                Central ducted furnaces and central AC split systems only. We do not service window units or ductless mini-splits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Coverage Stats */}
      <section className="bg-white border-b border-slate-200 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-brand-900">
              {SITE_CONFIG.stats.zips}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              Covered US Zip Codes
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-brand-900">
              {SITE_CONFIG.stats.cities}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              Cities &amp; Towns Served
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-brand-900">
              {SITE_CONFIG.stats.states}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              Nationwide Dispatch Coverage
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-brand-900">
              24/7/365
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              Emergency Heating &amp; AC Support
            </p>
          </div>
        </div>
      </section>

      {/* 6 Core Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
            Our 6 Specialized HVAC Services
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
            Central Heating &amp; Air Conditioning Services
          </h2>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            We focus strictly on residential ducted central furnaces and central air conditioning systems. Pick the service that matches your system symptom below, or call our dispatch desk at{" "}
            <a
              href={SITE_CONFIG.phoneHref}
              className="font-bold text-brand-800 underline"
            >
              {SITE_CONFIG.phoneDisplay}
            </a>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-brand-600 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                      service.category === "Heating"
                        ? "bg-amber-50 text-amber-800 border border-amber-200"
                        : "bg-sky-50 text-sky-800 border border-sky-200"
                    }`}
                  >
                    {service.category} Service
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Central Ducted Systems
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  <Link
                    href={`/services/${service.slug}/`}
                    className="hover:text-brand-700"
                  >
                    {service.name}
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {service.shortDescription}
                </p>
                <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                  {service.problemsSolved.slice(0, 3).map((prob, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brand-700 font-bold">•</span>
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  href={`/services/${service.slug}/`}
                  className="text-sm font-bold text-brand-800 hover:text-brand-950"
                >
                  {service.name} Guide →
                </Link>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="text-xs font-extrabold bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2 rounded-lg transition-colors"
                >
                  Call {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Winter Season Readiness Callout */}
      <section className="bg-slate-900 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Autumn &amp; Winter Heating Alert
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
              Get Ahead of the First Hard Freeze With Pre-Season Furnace Service
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Every October and November, the first freezing night triggers thousands of no-heat calls from homeowners whose central gas furnaces sat unused all summer. Oxidized flame sensors, dusty burners, brittle hot surface ignitors, and blocked condensate traps can shut your heating down when you need it most.
            </p>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Whether you need a preventive{" "}
              <Link
                href="/services/furnace-cleaning/"
                className="text-amber-300 underline font-semibold"
              >
                furnace cleaning
              </Link>
              , same-day{" "}
              <Link
                href="/services/furnace-repair/"
                className="text-amber-300 underline font-semibold"
              >
                emergency furnace repair
              </Link>
              , or a high-efficiency{" "}
              <Link
                href="/services/furnace-replacement/"
                className="text-amber-300 underline font-semibold"
              >
                furnace replacement
              </Link>
              , our technicians are ready across all 50 states.
            </p>
          </div>
          <div className="lg:col-span-4 bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center">
            <p className="text-sm font-bold text-amber-300 uppercase">
              24/7 Furnace &amp; AC Dispatch Line
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              {SITE_CONFIG.phoneDisplay}
            </p>
            <p className="text-xs text-slate-300 mt-2">
              Give your zip code and equipment symptom to schedule immediate local service.
            </p>
            <a
              href={SITE_CONFIG.phoneHref}
              className="mt-5 block w-full bg-accent-600 hover:bg-accent-700 text-white font-extrabold py-3.5 rounded-xl shadow transition-colors"
            >
              Call Dispatch Now
            </a>
          </div>
        </div>
      </section>

      {/* Top States & Service Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
              Nationwide Local Coverage
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
              Browse Heating &amp; Cooling Service by State
            </h2>
            <p className="text-slate-600 mt-2 text-base max-w-2xl">
              Select your state below to view local city dispatch pages, covered zip codes, and regional furnace and air conditioning service details.
            </p>
          </div>
          <Link
            href="/areas/"
            className="text-sm font-extrabold text-brand-800 hover:text-brand-950 shrink-0"
          >
            View All 50 States &amp; DC →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {topStates.map((st) => (
            <Link
              key={st.slug}
              href={`/areas/${st.slug}/`}
              className="bg-white rounded-xl border border-slate-200 p-4 hover:border-brand-600 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-slate-900 group-hover:text-brand-700">
                  {st.name}
                </span>
                <span className="text-xs font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                  {st.abbr}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                {st.cityCount.toLocaleString()} cities • {st.zipCount.toLocaleString()} zip codes
              </p>
            </Link>
          ))}
        </div>

        {/* Priority High-Demand Metro Areas */}
        <div className="mt-14 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Fast-Track Local Dispatch
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                Priority Metro Service Areas
              </h3>
            </div>
            <Link
              href="/priority-markets/"
              className="text-sm font-bold text-brand-800 hover:underline"
            >
              See All Priority Markets &amp; Zip Codes →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-xs">
            {priorityCities.map((c) => (
              <Link
                key={`${c.stateSlug}-${c.citySlug}`}
                href={`/areas/${c.stateSlug}/${c.citySlug}/`}
                className="p-3 rounded-lg bg-slate-50 hover:bg-brand-50 border border-slate-200 transition-colors"
              >
                <span className="font-bold text-slate-900 block truncate">
                  {c.cityName}, {c.stateAbbr}
                </span>
                <span className="text-slate-500 mt-0.5 block">
                  {c.zipCount} covered {c.zipCount === 1 ? "zip" : "zips"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Repair vs Replacement Table & Why Choose Us */}
      <section className="bg-white border-y border-slate-200 py-14 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
              Honest Homeowner Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              When to Repair vs. When to Replace Your Furnace or Central AC
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              One of the biggest questions homeowners face during a breakdown is whether to pay for a repair or invest in a replacement unit. Use this practical field guide when reviewing your technician&apos;s written quote:
            </p>

            <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-extrabold">Equipment Condition</th>
                    <th className="p-3.5 font-extrabold">Best Action</th>
                    <th className="p-3.5 font-extrabold">Why It Makes Sense</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-3.5 font-semibold">
                      Unit under 10 years old
                    </td>
                    <td className="p-3.5 font-bold text-emerald-700">
                      Repair &amp; Clean
                    </td>
                    <td className="p-3.5">
                      Most major components are still under factory parts warranty.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold">
                      Failed ignitor, flame sensor, or capacitor
                    </td>
                    <td className="p-3.5 font-bold text-emerald-700">
                      Repair
                    </td>
                    <td className="p-3.5">
                      Inexpensive wearable parts that restore full operation in one visit.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold">
                      Cracked furnace heat exchanger
                    </td>
                    <td className="p-3.5 font-bold text-amber-700">
                      Replace Furnace
                    </td>
                    <td className="p-3.5">
                      Immediate carbon monoxide safety hazard; replacement brings a new 10-year warranty.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold">
                      Dead AC compressor or R-22 coil leak (12+ yrs)
                    </td>
                    <td className="p-3.5 font-bold text-amber-700">
                      Replace Central AC
                    </td>
                    <td className="p-3.5">
                      New matched SEER2 condenser and coil cut summer electric bills by up to 35%.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
              How Our 4-Step Dispatch Works
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              From Your Phone Call to a Fixed Heating or Cooling System
            </h2>
            <div className="mt-6 space-y-4">
              {[
                {
                  step: "1",
                  title: "Call (855) 734-0279 With Your Zip Code",
                  desc: "Our dispatch line is open 24 hours a day. Tell us your zip code and whether you need furnace repair, furnace replacement, furnace cleaning, or central AC service.",
                },
                {
                  step: "2",
                  title: "Local Technician Assigned to Your Address",
                  desc: "We confirm coverage for your exact zip code and schedule a licensed local technician equipped for central forced-air heating and cooling systems.",
                },
                {
                  step: "3",
                  title: "Complete System Diagnostic & Written Quote",
                  desc: "The technician tests your equipment, explains what failed in plain language, and hands you a clear written quote before any repair or installation work begins.",
                },
                {
                  step: "4",
                  title: "Same-Day Repair or Code-Compliant Replacement",
                  desc: "Most repairs are finished on the spot using stocked truck parts, and full furnace or central AC replacements are typically completed in a single day.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-900 text-white font-extrabold flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
            Homeowner Questions
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Clear answers about our central furnace and air conditioning services, coverage areas, and emergency dispatch process.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {homeFaqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm"
            >
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                {faq.q}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
