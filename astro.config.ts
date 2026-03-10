// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import Icons from "unplugin-icons/vite";

const site = process.env.VERCEL
  ? process.env.VERCEL_ENV === "production"
    ? "https://astro-persona.vercel.app"
    : `https://${process.env.VERCEL_URL}`
  : (process.env.SITE ?? "http://localhost:4321");
const base = process.env.BASE || "/";

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
