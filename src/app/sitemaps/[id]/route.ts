import { SITE_CONFIG } from "@/lib/site-config";
import { SERVICES_DATA } from "@/lib/services-data";
import {
  getAllStates,
  getAllCitySitemapChunks,
  getAllZipSitemapChunks,
} from "@/lib/coverage";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const rawId = params.id.replace(/\.xml$/, "");
  let paths: string[] = [];

  if (rawId === "core") {
    paths = [
      "/",
      "/services/",
      "/areas/",
      "/priority-markets/",
      "/about/",
      "/contact/",
      "/privacy-policy/",
      "/terms-and-conditions/",
      ...SERVICES_DATA.map((s) => `/services/${s.slug}/`),
      ...getAllStates().map((st) => `/areas/${st.slug}/`),
    ];
  } else if (rawId.startsWith("cities-")) {
    const idx = Number(rawId.replace("cities-", ""));
    const chunks = getAllCitySitemapChunks(4500);
    if (!Number.isNaN(idx) && chunks[idx]) {
      paths = chunks[idx];
    }
  } else if (rawId.startsWith("zips-")) {
    const idx = Number(rawId.replace("zips-", ""));
    const chunks = getAllZipSitemapChunks(4500);
    if (!Number.isNaN(idx) && chunks[idx]) {
      paths = chunks[idx];
    }
  }

  if (paths.length === 0) {
    return new Response("Not Found", { status: 404 });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (p) => `  <url>
    <loc>${SITE_CONFIG.url}${p}</loc>
    <lastmod>${SITE_CONFIG.updatedDate}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
