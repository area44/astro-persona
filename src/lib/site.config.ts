export const siteConfig = {
  name: "Astro Persona",
  description: "A modern, responsive portfolio and persona website template.",
  image: {
    src: "/og-image.jpg",
    alt: "Astro Persona preview image.",
  },
  twitterHandle: "",
  location: "Your Location",
  timeZone: "UTC",
  themeColor: "#FFFFFF",
  links: {
    email: "email@example.com",
    github: "https://github.com",
    youtube: "https://youtube.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    X: "https://x.com",
    linkedin: "https://linkedin.com",
    reddit: "https://reddit.com",
    pinterest: "https://pinterest.com",
    soundcloud: "https://soundcloud.com",
    mastodon: "https://mstdn.social",
  },
};

export type SiteConfig = typeof siteConfig;
