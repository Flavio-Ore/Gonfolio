import { defineCollection, z } from 'astro:content'

const profile = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string()
  })
})


const projects = defineCollection({
  schema: ({ image }) => z.object({
    name: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    github: z.string().url(),
    demo: z.string().url(),
    cover: image(),
    imageAlt: z.string()
  })
})

export const collections = {
  'es-profile': profile,
  'es-projects': projects,
  'en-profile': profile,
  'en-projects': projects,
  'cs-profile': profile,
  'cs-projects': projects,
  'de-profile': profile,
  'de-projects': projects
}
