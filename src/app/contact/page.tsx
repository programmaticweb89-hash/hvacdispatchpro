import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Contact 24/7 Dispatch | Call ${SITE_CONFIG.phoneDisplay}`,
  description: `Contact ${SITE_CONFIG.name} 24 hours a day at ${SITE_CONFIG.phoneDisplay} for central furnace repair, furnace replacement, furnace cleaning, and central AC service.`,
  alternates: {
    canonical: "/contact/",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-950 text-white py-14 px-4 border-b border-brand-900">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-300 mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / <span className="text-white font-semibold">Contact Dispatch</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact Our 24/7 HVAC Dispatch Desk
          </h1>
          <p className="text-slate-200 text-base sm:text-lg mt-4 max-w-3xl leading-relaxed">
            Our live dispatch line is open 24 hours a day, 7 days a week across {SITE_CONFIG.stats.zips} zip codes. Call now with your 5-digit zip code for immediate local scheduling.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
            Fastest Response
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-3">
            Call Our 24/7 Dispatch Line
          </h2>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Phone dispatch is the fastest way to book emergency furnace repair, furnace replacement, furnace cleaning, or central air conditioning service.
          </p>
          <a
            href={SITE_CONFIG.phoneHref}
            className="mt-6 block w-full text-center bg-accent-600 hover:bg-accent-700 text-white font-extrabold text-xl py-4 rounded-xl shadow transition-colors"
          >
            {SITE_CONFIG.phoneDisplay}
          </a>
          <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-700">
            <li>
              <strong>Hours:</strong> {SITE_CONFIG.hours}
            </li>
            <li>
              <strong>Coverage:</strong> {SITE_CONFIG.stats.zips} Zip Codes in {SITE_CONFIG.stats.cities} Cities ({SITE_CONFIG.stats.states})
            </li>
            <li>
              <strong>Equipment Served:</strong> {SITE_CONFIG.equipmentPolicy}
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">
            What to Have Ready When You Call
          </h2>
          <ol className="space-y-3 text-sm text-slate-700 list-decimal list-inside leading-relaxed">
            <li>
              <strong>Your 5-Digit Zip Code:</strong> We verify active coverage in your exact zip code right at the start of the call.
            </li>
            <li>
              <strong>Equipment Type:</strong> Let the dispatcher know whether you are calling about a central gas/electric furnace or a central split-system air conditioner.
            </li>
            <li>
              <strong>Current Symptom:</strong> Describe whether the unit is blowing cold/warm air, short-cycling, leaking water, or failing to turn on.
            </li>
            <li>
              <strong>Homeowner Authorization:</strong> An adult homeowner or authorized property decision-maker must be present at the property to approve the technician&apos;s written quote.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
