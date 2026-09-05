// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import Icons from "unplugin-icons/vite";

const getSiteAndBase = () => {
  if (process.env.SITE) {
    return {
      site: process.env.SITE,
      base: process.env.BASE || "/",
    };
  }

  if (process.env.VERCEL) {
    return {
      site:
        process.env.VERCEL_ENV === "production"
          ? "https://astro-persona.vercel.app"
          : `https://${process.env.VERCEL_URL}`,
      base: process.env.BASE || "/",
    };
  }

  if (process.env.GITHUB_REPOSITORY) {
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
    const isUserOrOrgPage =
      repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;
    const site = `https://${owner}.github.io`;
    const base = process.env.BASE || (isUserOrOrgPage ? "/" : `/${repo}`);
    return { site, base };
  }

  return {
    site: "http://localhost:4321",
    base: process.env.BASE || "/",
  };
};

const { site, base } = getSiteAndBase();

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [react(), sitemap()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Mona Sans",
      cssVariable: "--font-mona-sans",
    },
  ],
  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: "astro",
      }),
    ],
  },
});
