import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

/**
 * Creates a content collection definition for language-specific profile data.
 *
 * @param languageCode - Two-letter language code representing the target locale (e.g., 'en', 'es', 'cs', 'de').
 * @returns An Astro content collection configuration configured with the glob loader and profile schema.
 * @throws Does not throw explicitly; validation occurs during content sync if schema constraints fail.
 */
function createProfileCollection(languageCode: string) {
  return defineCollection({
    loader: glob({
      pattern: "**/*.md",
      base: `./src/content/${languageCode}-profile`,
    }),
    schema: z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
    }),
  });
}

/**
 * Creates a content collection definition for language-specific portfolio projects.
 *
 * @param languageCode - Two-letter language code representing the target locale (e.g., 'en', 'es', 'cs', 'de').
 * @returns An Astro content collection configuration configured with the glob loader and project schema.
 * @throws Does not throw explicitly; validation occurs during content sync if schema constraints fail.
 */
function createProjectsCollection(languageCode: string) {
  return defineCollection({
    loader: glob({
      pattern: "**/*.md",
      base: `./src/content/${languageCode}-projects`,
    }),
    schema: ({ image }) =>
      z.object({
        name: z.string(),
        description: z.string(),
        tech: z.array(z.string()),
        github: z.string().url(),
        demo: z.string().url(),
        cover: image(),
        imageAlt: z.string(),
      }),
  });
}

export const collections = {
  "es-profile": createProfileCollection("es"),
  "es-projects": createProjectsCollection("es"),
  "en-profile": createProfileCollection("en"),
  "en-projects": createProjectsCollection("en"),
  "cs-profile": createProfileCollection("cs"),
  "cs-projects": createProjectsCollection("cs"),
  "de-profile": createProfileCollection("de"),
  "de-projects": createProjectsCollection("de"),
};
