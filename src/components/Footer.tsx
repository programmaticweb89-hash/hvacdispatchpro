import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { SERVICES_DATA } from "@/lib/services-data";
import { getTopStatesByCoverage } from "@/lib/coverage";

export default function Footer() {
  const topStates = getTopStatesByCoverage(16);

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pb-24 md:pb-12">
      <div className="bg-brand-900 border-b border-brand-800 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
              24/7 Emergency Heating &amp; Cooling Dispatch
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Furnace Out or Central AC Down? Speak With Us Now.
            </h2>
            <p className="text-slate-200 text-sm mt-1">
              Provide your zip code on the call for immediate local scheduling and upfront flat-rate pricing.
            </p>
          </div>
          <a
            href={SITE_CONFIG.phoneHref}
            className="w-full md:w-auto text-center bg-accent-600 hover:bg-accent-700 text-white font-extrabold text-lg px-7 py-4 rounded-xl shadow-lg transition-colors shrink-0"
          >
            Call {SITE_CONFIG.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="inline-block font-extrabold text-white text-xl">
            {SITE_CONFIG.name}
          </Link>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            {SITE_CONFIG.name} provides 24/7 residential heating and air conditioning dispatch and service across {SITE_CONFIG.stats.zips} zip codes in {SITE_CONFIG.stats.cities} cities nationwide.
          </p>
          <div className="mt-4 p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed">
            <strong className="text-white block mb-1">Equipment Service Scope:</strong>
            {SITE_CONFIG.equipmentPolicy}
          </div>
          <div className="mt-4 space-y-1 text-sm">
            <p className="font-bold text-white">
              Phone:{" "}
              <a href={SITE_CONFIG.phoneHref} className="text-amber-400 hover:underline">
                {SITE_CONFIG.phoneDisplay}
              </a>
            </p>
            <p className="text-slate-400">Hours: {SITE_CONFIG.hours}</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
            Core HVAC Services
          </h3>
          <ul className="space-y-2.5 text-sm">
            {SERVICES_DATA.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}/`}
                  className="hover:text-white transition-colors"
                >
                  {service.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/services/"
                className="text-amber-400 hover:text-amber-300 font-semibold"
              >
                View All 6 HVAC Services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
            Top States Served
          </h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {topStates.map((st) => (
              <Link
                key={st.slug}
                href={`/areas/${st.slug}/`}
                className="hover:text-white transition-colors truncate"
              >
                {st.name} ({st.abbr})
              </Link>
            ))}
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <Link
              href="/areas/"
              className="block text-amber-400 hover:text-amber-300 font-semibold"
            >
              Browse All 50 States &amp; DC →
            </Link>
            <Link
              href="/priority-markets/"
              className="block text-sky-400 hover:text-sky-300 font-semibold"
            >
              High-Demand Metro Markets →
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
            Company &amp; Support
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about/" className="hover:text-white transition-colors">
                About {SITE_CONFIG.name}
              </Link>
            </li>
            <li>
              <Link href="/contact/" className="hover:text-white transition-colors">
                24/7 Dispatch &amp; Contact
              </Link>
            </li>
            <li>
              <Link href="/priority-markets/" className="hover:text-white transition-colors">
                Priority Metro Service Directory
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy/" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions/"
                className="hover:text-white transition-colors"
              >
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <a
                href="/sitemap.xml"
                className="hover:text-white transition-colors text-slate-400"
              >
                XML Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved.
        </p>
        <p>
          Emergency Gas Leak Warning: If you smell natural gas or a CO alarm sounds, evacuate immediately and call 911 or your local gas utility first.
        </p>
      </div>
    </footer>
  );
}
