import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for ${SITE_CONFIG.name} (${SITE_CONFIG.domain}).`,
  alternates: {
    canonical: "/terms-and-conditions/",
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        / <span className="text-slate-900 font-semibold">Terms &amp; Conditions</span>
      </nav>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs text-slate-500">
          Last Updated: {SITE_CONFIG.updatedDate}
        </p>
        <p>
          By accessing {SITE_CONFIG.domain} or calling {SITE_CONFIG.phoneDisplay}, you agree to these Terms and Conditions.
        </p>
        <h2 className="text-xl font-extrabold text-slate-900">
          1. Scope of Heating and Cooling Services
        </h2>
        <p>
          {SITE_CONFIG.name} provides 24/7 telephone dispatch and scheduling for residential central forced-air furnaces and central air conditioning systems. {SITE_CONFIG.equipmentPolicy}
        </p>
        <h2 className="text-xl font-extrabold text-slate-900">
          2. On-Site Diagnostics, Quotes, and Warranties
        </h2>
        <p>
          All diagnostic evaluations, written repair or replacement quotes, workmanship warranties, and manufacturer equipment warranties are provided directly by the licensed servicing technician and company performing the work at your property. You always receive a quote before work begins and are under no obligation to proceed until you approve the price.
        </p>
        <h2 className="text-xl font-extrabold text-slate-900">
          3. Emergency Safety Notice
        </h2>
        <p>
          Website content is for informational purposes only and is not a substitute for emergency utility response. If you smell natural gas, suspect a gas leak, or hear a carbon monoxide alarm, evacuate the building immediately and call 911 or your local gas utility before calling for mechanical repair.
        </p>
      </div>
    </div>
  );
}
