import type { APIRoute } from "astro";
import { resolveUrl } from "@/lib/seo";

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = resolveUrl("sitemap-index.xml", site);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
