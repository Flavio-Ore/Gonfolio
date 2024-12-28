import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'
import { defineConfig, passthroughImageService } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://gonfolio.pages.dev/',
  integrations: [tailwind(), robotsTxt()],
  image: {
    service: passthroughImageService()
  }
})
