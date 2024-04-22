import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()]
});