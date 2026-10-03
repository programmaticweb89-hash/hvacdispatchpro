import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <p className="text-xs font-bold uppercase tracking-wider text-brand-700">
        404 Page Not Found
      </p>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
        We Could Not Find That Page
      </h1>
      <p className="text-slate-600 mt-3 text-base">
        If your furnace or central air conditioner needs immediate service, call our 24/7 dispatch desk directly or browse our service areas below.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href={SITE_CONFIG.phoneHref}
          className="bg-accent-600 hover:bg-accent-700 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-sm transition-colors"
        >
          Call {SITE_CONFIG.phoneDisplay}
        </a>
        <Link
          href="/areas/"
          className="bg-brand-900 hover:bg-brand-800 text-white font-bold px-6 py-3.5 rounded-xl transition-colors"
        >
          Browse All 50 States
        </Link>
        <Link
          href="/services/"
          className="bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold px-6 py-3.5 rounded-xl transition-colors"
        >
          View Our 6 HVAC Services
        </Link>
      </div>
    </div>
  );
}
