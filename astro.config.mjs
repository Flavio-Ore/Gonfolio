import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { defineConfig, passthroughImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://gonfolio.pages.dev/",
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          allow: "/",
        },
        {
          userAgent: "GPTBot",
          allow: "/",
        },
        {
          userAgent: "ChatGPT-User",
          allow: "/",
        },
        {
          userAgent: "PerplexityBot",
          allow: "/",
        },
        {
          userAgent: "ClaudeBot",
          allow: "/",
        },
        {
          userAgent: "anthropic-ai",
          allow: "/",
        },
        {
          userAgent: "Google-Extended",
          allow: "/",
        },
        {
          userAgent: "Applebot-Extended",
          allow: "/",
        },
      ],
    }),
  ],
  image: {
    service: passthroughImageService(),
  },
});
