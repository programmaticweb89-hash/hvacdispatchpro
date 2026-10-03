import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { SERVICES_DATA } from "@/lib/services-data";

export const metadata: Metadata = {
  title: `About ${SITE_CONFIG.name} | 24/7 Furnace & Central AC Service`,
  description: `Learn how ${SITE_CONFIG.name} delivers 24/7 central furnace repair, furnace replacement, furnace cleaning, and central air conditioning service across ${SITE_CONFIG.stats.zips} zip codes.`,
  alternates: {
    canonical: "/about/",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-950 text-white py-14 px-4 border-b border-brand-900">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-300 mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / <span className="text-white font-semibold">About Us</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About {SITE_CONFIG.name}
          </h1>
          <p className="text-slate-200 text-base sm:text-lg mt-4 max-w-3xl leading-relaxed">
            Straightforward, 24/7 residential heating and cooling service focused strictly on central forced-air furnaces and central air conditioning systems across {SITE_CONFIG.stats.zips} US zip codes.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Built for Fast Response When Heating or Cooling Breaks Down
          </h2>
          <p>
            When a central furnace stops firing on a freezing January night or a split-system air conditioner locks up during a 100-degree July afternoon, homeowners do not have time to leave voicemails with six different shops and wait days for a callback.
          </p>
          <p>
            {SITE_CONFIG.name} operates a centralized, 24/7 live dispatch desk covering {SITE_CONFIG.stats.zips} zip codes across {SITE_CONFIG.stats.cities} cities in {SITE_CONFIG.stats.states}. With one call to{" "}
            <a href={SITE_CONFIG.phoneHref} className="font-bold text-brand-800 underline">
              {SITE_CONFIG.phoneDisplay}
            </a>
            , we check live technician availability in your exact 5-digit zip code and schedule a licensed local HVAC technician equipped to diagnose and fix your system.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Our Strict Equipment Focus: Central Ducted Systems Only
          </h2>
          <p className="text-sm sm:text-base text-slate-700 mt-3 leading-relaxed">
            {SITE_CONFIG.equipmentPolicy} By focusing exclusively on central forced-air heating and cooling equipment, our service trucks stock the exact ignitors, flame sensors, gas valves, blower motors, run capacitors, contactors, and matched coils needed to complete residential work without wasted trips.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
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
        </section>
      </div>
    </>
  );
}
