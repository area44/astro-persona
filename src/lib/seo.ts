/**
 * Computes site origin and base path based on VERCEL, SITE, or BASE environment variables.
 */
export function getSiteAndBase() {
  if (process.env.VERCEL) {
    return {
      site:
        process.env.VERCEL_ENV === "production"
          ? "https://astro-persona.vercel.app"
          : `https://${process.env.VERCEL_URL}`,
      base: process.env.BASE || "/",
    };
  }

  return {
    site: process.env.SITE ?? "http://localhost:4321",
    base: process.env.BASE || "/",
  };
}

/**
 * Resolves a relative path or full URL against site origin and base path.
 */
export function resolveUrl(
  path: string | undefined,
  site: URL | string | undefined,
  baseUrl: string = import.meta.env.BASE_URL ?? "/"
): string {
  if (!path) return site ? site.toString() : "";
  if (/^https?:\/\//i.test(path)) return path;

  const base = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const origin = site
    ? new URL(base, site)
    : new URL(base, "http://localhost:4321");
  const cleanPath = path.replace(/^\//, "");
  return new URL(cleanPath, origin).toString();
}
