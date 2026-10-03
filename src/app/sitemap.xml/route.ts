import { SITE_CONFIG } from "@/lib/site-config";
import { getAllCitySitemapChunks, getAllZipSitemapChunks } from "@/lib/coverage";

export async function GET() {
  const cityChunks = getAllCitySitemapChunks(4500);
  const zipChunks = getAllZipSitemapChunks(4500);

  const sitemapFiles = [
    "core.xml",
    ...cityChunks.map((_, i) => `cities-${i}.xml`),
    ...zipChunks.map((_, i) => `zips-${i}.xml`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapFiles
  .map(
    (file) => `  <sitemap>
    <loc>${SITE_CONFIG.url}/sitemaps/${file}</loc>
    <lastmod>${SITE_CONFIG.updatedDate}</lastmod>
  </sitemap>`
  )
  .join("\n")}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
