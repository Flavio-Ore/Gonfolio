import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://gonfolio.pages.dev/',
  integrations: [tailwind(), robotsTxt()]
})
