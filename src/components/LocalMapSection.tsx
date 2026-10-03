import { SITE_CONFIG } from "@/lib/site-config";

interface LocalMapSectionProps {
  locationLabel: string;
  query: string;
  zipCount?: number;
}

export default function LocalMapSection({
  locationLabel,
  query,
  zipCount,
}: LocalMapSectionProps) {
  const encodedQuery = encodeURIComponent(query);
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodedQuery}&output=embed`;
  const mapDirectUrl = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;

  return (
    <section
      aria-labelledby="local-map-heading"
      className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
            Local Geographic Service Zone
          </span>
          <h2
            id="local-map-heading"
            className="text-2xl font-extrabold text-slate-900 mt-1"
          >
            Service Area Map for {locationLabel}
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Our technicians dispatch across {locationLabel}
            {zipCount ? ` (${zipCount.toLocaleString()} covered zip codes)` : ""} for central furnace repair, furnace replacement, furnace cleaning, and central air conditioning service.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href={mapDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-800 bg-brand-50 hover:bg-brand-100 border border-brand-200 px-3.5 py-2.5 rounded-lg transition-colors"
          >
            <span>Open {locationLabel} in Google Maps</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href={SITE_CONFIG.phoneHref}
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-accent-600 hover:bg-accent-700 px-4 py-2.5 rounded-lg transition-colors"
          >
            <span>Dispatch: {SITE_CONFIG.phoneDisplay}</span>
          </a>
        </div>
      </div>

      <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
        <iframe
          title={`HVAC Service Area Map for ${locationLabel}`}
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
