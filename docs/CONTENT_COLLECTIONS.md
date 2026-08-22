# Content Collections & Data Layer

## Overview

Gonfolio leverages Astro's **Content Layer API** and **Zod** schema validation to manage content in a type-safe, declarative manner. All profile descriptions and project showcases are authored in Markdown files organized by language.

---

## Content Collections Schema (`src/content.config.ts`)

The [`src/content.config.ts`](file:///c:/gon-sudo/DEVEL/Gonfolio/src/content.config.ts) file defines two collection factories using the `glob` loader:

### 1. Profile Collection (`createProfileCollection`)

Loads biographical data for the hero section.

- **Base Directory**: `./src/content/${languageCode}-profile`
- **Pattern**: `**/*.md`
- **Schema**:
  | Field | Type | Description |
  | :--- | :--- | :--- |
  | `title` | `string` | Main headline (e.g. "Flavio Gon. Oré.") |
  | `subtitle` | `string` | Role subtitle (e.g. "Full-Stack Developer & Software Engineer") |
  | `description` | `string` | Narrative biographical summary paragraph |

### 2. Projects Collection (`createProjectsCollection`)

Loads detailed showcase data for portfolio projects.

- **Base Directory**: `./src/content/${languageCode}-projects`
- **Pattern**: `**/*.md`
- **Schema**:
  | Field | Type | Description |
  | :--- | :--- | :--- |
  | `name` | `string` | Project display name |
  | `description` | `string` | Period-separated feature highlights (rendered as checkmarks) |
  | `tech` | `string[]` | Array of technologies used (matches `TECHNOLOGIES` values) |
  | `github` | `string (url)` | GitHub repository URL |
  | `demo` | `string (url)` | Live production/demo URL |
  | `cover` | `image()` | Astro image asset reference |
  | `imageAlt` | `string` | Descriptive alt text for accessibility |

### Registered Collections Map

```typescript
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
```

---

## Markdown File Structure & Examples

### Example: Profile Entry (`src/content/en-profile/en-profile.md`)

```yaml
---
title: "Flavio Gon. Oré."
subtitle: "Full-Stack Developer & Software Engineer"
description: "Software engineering student and developer passionate about building scalable, high-performance web applications, microservices, and modern user experiences."
---
```

### Example: Project Entry (`src/content/en-projects/en-1-project-kardex-system.md`)

```yaml
---
name: "Inventory Kardex ERP"
description: "Comprehensive mini-ERP inventory management system using Kardex valuation. Microservices architecture with Spring Boot backend and React frontend. Automated continuous deployment via Railway and Vercel."
tech:
  - "React"
  - "Typescript"
  - "TailwindCSS"
  - "JavaSpring"
github: "https://github.com/Flavio-Ore/kardex-inventory"
demo: "https://kardex-inventory.vercel.app/"
cover: "../inventory-kardex_main.png"
imageAlt: "Kardex Inventory ERP Dashboard Screenshot"
---
```

---

## Static Data Models (`src/values/`)

Static structured data that does not require markdown authoring is maintained in typed TypeScript files in [`src/values/`](file:///c:/gon-sudo/DEVEL/Gonfolio/src/values):

### 1. Experiences Dataset ([`src/values/experiences.ts`](file:///c:/gon-sudo/DEVEL/Gonfolio/src/values/experiences.ts))

Contains localized career and education records for the timeline and statistics section:

```typescript
export type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
};

export const experiences = {
  en: [
    /* ... */
  ],
  es: [
    /* ... */
  ],
  cs: [
    /* ... */
  ],
  de: [
    /* ... */
  ],
} as const;
```

### 2. Technology Constants ([`src/values/technologies.ts`](file:///c:/gon-sudo/DEVEL/Gonfolio/src/values/technologies.ts))

Defines standardized technology names to ensure consistency between markdown project `tech` arrays and SVG icon components:

```typescript
export const TECHNOLOGIES = {
  Typescript: "Typescript",
  React: "React",
  ShadCN: "ShadCN",
  Appwrite: "Appwrite",
  TailwindCSS: "TailwindCSS",
  SQLServer: "SQL Server",
  JavaSpring: "JavaSpring",
};
```
