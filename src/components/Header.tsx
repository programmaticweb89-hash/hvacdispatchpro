import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { SERVICES_DATA } from "@/lib/services-data";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="bg-brand-950 text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              24/7 Local Heating &amp; Cooling Service Dispatch across {SITE_CONFIG.stats.states}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-slate-300">
              Central Furnaces &amp; Central AC Only
            </span>
            <a
              href={SITE_CONFIG.phoneHref}
              className="font-bold text-amber-300 hover:text-amber-200 underline underline-offset-2"
            >
              Speak With Dispatch: {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-brand-900 text-white flex items-center justify-center font-extrabold text-lg sm:text-xl tracking-tight shadow-sm group-hover:bg-brand-800 transition-colors">
            HP
          </div>
          <div>
            <span className="block font-extrabold text-slate-900 text-lg sm:text-xl leading-none tracking-tight">
              {SITE_CONFIG.name}
            </span>
            <span className="block text-xs text-slate-600 font-medium mt-1">
              Central Furnace &amp; AC Service
            </span>
          </div>
        </Link>

        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700"
        >
          <Link href="/" className="hover:text-brand-700 transition-colors">
            Home
          </Link>
          <div className="relative group py-2">
            <Link
              href="/services/"
              className="hover:text-brand-700 transition-colors flex items-center gap-1"
            >
              <span>Services</span>
              <span className="text-xs text-slate-400">▼</span>
            </Link>
            <div className="absolute left-0 top-full hidden group-hover:block w-72 bg-white border border-slate-200 rounded-xl shadow-xl p-2 z-50">
              {SERVICES_DATA.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/`}
                  className="block px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <span className="block font-bold text-slate-900 text-sm">
                    {service.name}
                  </span>
                  <span className="block text-xs text-slate-500 mt-0.5">
                    {service.category} Service
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/areas/" className="hover:text-brand-700 transition-colors">
            Service Areas
          </Link>
          <Link
            href="/priority-markets/"
            className="hover:text-brand-700 transition-colors"
          >
            Major Metros
          </Link>
          <Link href="/about/" className="hover:text-brand-700 transition-colors">
            About Us
          </Link>
          <Link href="/contact/" className="hover:text-brand-700 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE_CONFIG.phoneHref}
            className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white font-bold text-sm sm:text-base px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg shadow-sm transition-colors"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <span>{SITE_CONFIG.phoneDisplay}</span>
          </a>
        </div>
      </div>

      <div className="lg:hidden border-t border-slate-100 bg-slate-50 px-4 py-2 overflow-x-auto">
        <div className="flex items-center gap-4 text-xs font-semibold text-slate-700 whitespace-nowrap">
          <Link href="/services/" className="hover:text-brand-700">
            All 6 Services
          </Link>
          <Link href="/services/furnace-repair/" className="hover:text-brand-700">
            Furnace Repair
          </Link>
          <Link href="/services/furnace-replacement/" className="hover:text-brand-700">
            Furnace Replacement
          </Link>
          <Link href="/services/furnace-cleaning/" className="hover:text-brand-700">
            Furnace Cleaning
          </Link>
          <Link href="/services/air-conditioning-repair/" className="hover:text-brand-700">
            AC Repair
          </Link>
          <Link href="/services/ac-replacement/" className="hover:text-brand-700">
            AC Replacement
          </Link>
          <Link href="/areas/" className="hover:text-brand-700">
            All 50 States
          </Link>
        </div>
      </div>
    </header>
  );
}
