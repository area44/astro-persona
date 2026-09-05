// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import Icons from "unplugin-icons/vite";
import { getSiteAndBase } from "./src/lib/seo";

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
