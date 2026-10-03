import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_CONFIG.name} (${SITE_CONFIG.domain}).`,
  alternates: {
    canonical: "/privacy-policy/",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        / <span className="text-slate-900 font-semibold">Privacy Policy</span>
      </nav>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">
          Last Updated: {SITE_CONFIG.updatedDate}
        </p>
        <p>
          {SITE_CONFIG.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting the information you share when visiting {SITE_CONFIG.domain} or calling our dispatch line at {SITE_CONFIG.phoneDisplay}.
        </p>
        <h2 className="text-xl font-extrabold text-slate-900">
          1. Information Collected During Dispatch Calls
        </h2>
        <p>
          When you call our telephone dispatch line, we collect your caller ID telephone number, the 5-digit service zip code you provide, and basic details about your heating or air conditioning request so we can route and schedule your service visit. Calls may be recorded or monitored for quality assurance, scheduling verification, and customer support.
        </p>
        <h2 className="text-xl font-extrabold text-slate-900">
          2. Automatic Website Technical Logs
        </h2>
        <p>
          Like standard static websites, our hosting infrastructure automatically logs basic non-identifying request metadata such as browser user-agent, referring page, requested URL, and approximate geographic region for security and performance monitoring.
        </p>
        <h2 className="text-xl font-extrabold text-slate-900">
          3. How We Use Information
        </h2>
        <p>
          We use the information you provide strictly to confirm service coverage in your zip code, connect you with a licensed local HVAC technician covering your address, and fulfill your request for furnace repair, furnace replacement, furnace cleaning, or central air conditioning service.
        </p>
        <h2 className="text-xl font-extrabold text-slate-900">
          4. Contact Us
        </h2>
        <p>
          For questions regarding this Privacy Policy, please visit our{" "}
          <Link href="/contact/" className="text-brand-800 underline font-semibold">
            Contact Page
          </Link>{" "}
          or call {SITE_CONFIG.phoneDisplay}.
        </p>
      </div>
    </div>
  );
}
