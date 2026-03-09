export const siteConfig = {
  name: "Astro Persona",
  description: "This is a website which was built with Astro.",
  image: {
    src: "/og-image.jpg",
    alt: "This is OG image.",
  },
  twitterHandle: "torn4dom4n",
  themeColor: "#FFFFFF",
  links: {
    email: "email@email.com",
    github: "https://github.com",
    youtube: "https://www.youtube.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    X: "https://twitter.com",
    linkedin: "https://linkedin.com/in",
    reddit: "https://reddit.com/user",
    pinterest: "https://pinterest.com",
    soundcloud: "https://soundcloud.com",
    mastodon: "https://mstdn.social",
  },
};

export type SiteConfig = typeof siteConfig;
