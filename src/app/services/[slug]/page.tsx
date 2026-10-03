import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/site-config";
import { SERVICES_DATA, getServiceBySlug } from "@/lib/services-data";
import { getTopStatesByCoverage, getPriorityCities } from "@/lib/coverage";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}/`,
    },
    openGraph: {
      title: `${service.metaTitle} | ${SITE_CONFIG.name}`,
      description: service.metaDescription,
      url: `${SITE_CONFIG.url}/services/${service.slug}/`,
    },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const relatedServices = SERVICES_DATA.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  );
  const topStates = getTopStatesByCoverage(16);
  const priorityCities = getPriorityCities(18);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.shortDescription,
    provider: {
      "@type": "HVACBusiness",
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phoneE164,
      url: SITE_CONFIG.url,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    url: `${SITE_CONFIG.url}/services/${service.slug}/`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
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
        name: "Services",
        item: `${SITE_CONFIG.url}/services/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${SITE_CONFIG.url}/services/${service.slug}/`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema]} />

      {/* Hero */}
      <section className="bg-brand-950 text-white py-14 px-4 border-b border-brand-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <nav aria-label="Breadcrumb" className="text-xs text-slate-300 mb-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/services/" className="hover:underline">
                Services
              </Link>{" "}
              / <span className="text-white font-semibold">{service.name}</span>
            </nav>

            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-brand-900 border border-brand-700 text-amber-300 px-3 py-1 rounded-md mb-3">
              24/7 {service.category} Service • {SITE_CONFIG.stats.zips} Zip Codes
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {service.name} Near You
            </h1>
            <p className="text-lg sm:text-xl text-amber-200 font-semibold mt-3">
              {service.heroTagline}
            </p>
            <div className="mt-4 space-y-3 text-slate-200 text-sm sm:text-base leading-relaxed">
              {service.introParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-xl border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                Immediate Local Dispatch
              </span>
              <h2 className="text-xl font-extrabold mt-2">
                Book {service.name} Now
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Call with your 5-digit zip code. We verify local technician availability and provide an upfront written quote before work starts.
              </p>
              <a
                href={SITE_CONFIG.phoneHref}
                className="mt-5 block w-full text-center bg-accent-600 hover:bg-accent-700 text-white font-extrabold text-lg py-4 rounded-xl shadow transition-colors"
              >
                Call {SITE_CONFIG.phoneDisplay}
              </a>
              <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">
                {service.equipmentNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10">
          {/* What the service is */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900">
              What {service.name} Covers
            </h2>
            <div className="mt-4 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              {service.whatItIs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </section>

          {/* Problems Solved & Benefits */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-xl font-extrabold text-slate-900">
                Symptoms &amp; Problems This Solves
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                {service.problemsSolved.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-accent-600 font-extrabold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-xl font-extrabold text-slate-900">
                Key Homeowner Benefits
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                {service.benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-extrabold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* When to call */}
          <section className="bg-amber-50 rounded-2xl border border-amber-200 p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold text-slate-900">
              When Homeowners Should Schedule {service.name}
            </h2>
            <div className="mt-4 space-y-3 text-sm sm:text-base text-slate-800 leading-relaxed">
              {service.whenToCall.map((note, idx) => (
                <p key={idx}>{note}</p>
              ))}
            </div>
          </section>

          {/* Our 4-Step Process & Included Checklist */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Our {service.name} Process
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.processSteps.map((st, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700">
                    Step {idx + 1}
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-base mt-1">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {st.detail}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-extrabold text-slate-900 mt-8">
              What Is Included in Your Service Visit
            </h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
              {service.includedChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100"
                >
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Service Options & Common Faults */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900">
              {service.name} Options
            </h2>
            <div className="mt-4 space-y-4">
              {service.serviceOptions.map((opt, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50"
                >
                  <h3 className="font-extrabold text-slate-900 text-base">
                    {opt.option}
                  </h3>
                  <p className="text-sm text-slate-700 mt-1">{opt.description}</p>
                  <p className="text-xs text-brand-800 font-semibold mt-2">
                    Best for: {opt.bestFor}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10">
              Common Mechanical Faults &amp; Field Fixes
            </h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-extrabold">Component / Issue</th>
                    <th className="p-3.5 font-extrabold">Typical Symptom</th>
                    <th className="p-3.5 font-extrabold">Standard Technical Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {service.commonFaults.map((fault, i) => (
                    <tr key={i}>
                      <td className="p-3.5 font-bold text-slate-900">
                        {fault.part}
                      </td>
                      <td className="p-3.5">{fault.symptom}</td>
                      <td className="p-3.5">{fault.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Pricing Considerations */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Pricing Considerations &amp; Upfront Quotes
            </h2>
            <div className="mt-4 space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
              {service.pricingNotes.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Frequently Asked Questions About {service.name}
            </h2>
            <div className="mt-6 space-y-4">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <h3 className="font-extrabold text-slate-900 text-base">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-brand-950 text-white rounded-2xl p-6 shadow-md">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              24/7 Local Dispatch
            </span>
            <h2 className="text-xl font-extrabold mt-1">
              Need {service.name} Today?
            </h2>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Give our dispatcher your zip code and equipment symptom. We schedule licensed local technicians with upfront flat-rate quotes.
            </p>
            <a
              href={SITE_CONFIG.phoneHref}
              className="mt-5 block w-full text-center bg-accent-600 hover:bg-accent-700 text-white font-extrabold py-3.5 rounded-xl shadow transition-colors"
            >
              Call {SITE_CONFIG.phoneDisplay}
            </a>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-slate-900">
              Related HVAC Services
            </h3>
            <ul className="mt-4 space-y-3">
              {relatedServices.map((rel) => (
                <li key={rel.slug}>
                  <Link
                    href={`/services/${rel.slug}/`}
                    className="block p-3 rounded-xl bg-slate-50 hover:bg-brand-50 border border-slate-200 transition-colors"
                  >
                    <span className="font-bold text-slate-900 block text-sm">
                      {rel.name}
                    </span>
                    <span className="text-xs text-slate-500 mt-0.5 block">
                      {rel.heroTagline}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services/"
                  className="text-xs font-bold text-brand-800 hover:underline block pt-1"
                >
                  View All 6 HVAC Services →
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-slate-900">
              {service.name} by State
            </h3>
            <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
              {topStates.map((st) => (
                <Link
                  key={st.slug}
                  href={`/areas/${st.slug}/`}
                  className="p-2 rounded bg-slate-50 hover:bg-brand-50 border border-slate-200 font-semibold text-slate-800 truncate"
                >
                  {st.name}
                </Link>
              ))}
            </div>
            <Link
              href="/areas/"
              className="mt-4 block text-xs font-bold text-brand-800 hover:underline"
            >
              Browse All 50 States &amp; DC →
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-slate-900">
              Priority Metro Areas
            </h3>
            <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
              {priorityCities.map((c) => (
                <Link
                  key={`${c.stateSlug}-${c.citySlug}`}
                  href={`/areas/${c.stateSlug}/${c.citySlug}/`}
                  className="p-2 rounded bg-slate-50 hover:bg-brand-50 border border-slate-200 font-medium text-slate-700 truncate"
                >
                  {c.cityName}, {c.stateAbbr}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
